#include <gtk/gtk.h>
#include <regex.h>
#include <wordexp.h>
#include <string.h>
#include <stdio.h>
#include <unistd.h>
#include "ftmenu.h"

GtkWidget *menu[MAX_MENU_DEPTH];	
gchar *commands[MAX_COMMANDS];	

int menu_depth = 0;
int command_index = 0;

char* substring(char *source,char *dest,int start,int end){
	int istr, isub;
	for(istr=start,isub=0;istr<end;istr++,isub++)
		dest[isub]=source[istr];
	dest[isub]=0;
	return dest;
}

static char* find_match(char *file, char *regex, int idx, char *match){
	FILE* handle;
	regex_t rx;
	int nchars, found;
	size_t line_len = MAX_LINE_LENGTH;
	regmatch_t *matches = NULL;
	gchar *line;

	handle = fopen(file,"r");
	if(!handle){
		g_error("Could not open/find the init file");
		return NULL;
	}

	line = g_malloc(line_len);
	if(line==NULL){
		g_error("Could not allocate memory (1)");
		return NULL;
	}

	regcomp(&rx,regex,REG_EXTENDED);
	matches = (regmatch_t *) malloc((rx.re_nsub+1)*sizeof(regmatch_t));
	found = 0;

	while((nchars=getline(&line,&line_len,handle))>0){
		if(regexec(&rx,line,rx.re_nsub+1,matches,0)==0){
			g_strstrip(line);
			substring(line,match,matches[idx].rm_so,matches[idx].rm_eo);
			found = 1;
			break;
		}
	}
	fclose(handle);

	g_free(line);
	regfree(&rx);
	return found==0 ? NULL : match;
}

static char* fluxbox_init_file(){
	wordexp_t exp_result;
	wordexp("~",&exp_result,0);
	return strncat(exp_result.we_wordv[0],"/.fluxbox/init",PATH_MAX-1);
}

static char* fluxbox_menu_file(char* init_file, char *menu_file){
	wordexp_t exp_result;

	if(find_match(init_file,"^(session\\.menuFile:)(.*)$",2,menu_file)==NULL){
		g_error("Could not find the menu file on config in %s",init_file);
		return NULL;
	}
	wordexp(menu_file,&exp_result,0);
	strcpy(menu_file,exp_result.we_wordv[0]);
	return menu_file;
}

static char* icon_file(char *menu_file, char *icon){
	wordexp_t exp_result;

	if(find_match(menu_file,"^(.*\\[begin\\]) (.*) (<)(.+)(>)",4,icon)==NULL)
		return NULL;
	wordexp(icon,&exp_result,0);
	strcpy(icon,exp_result.we_wordv[0]);
	return icon;
}

static char* menu_title(char *menu_file, char *title){
	wordexp_t exp_result;

	if(find_match(menu_file,"^(\\[begin\\]) (\\()(.*)(\\).*)",3,title)==NULL)
		return NULL;
	return title;
}

static GtkStatusIcon *create_icon() {
	GtkStatusIcon *icon;
	icon = gtk_status_icon_new();
	gtk_status_icon_set_from_icon_name(icon,GTK_STOCK_INDEX);
	gtk_status_icon_set_visible(icon,TRUE);
	gtk_status_icon_set_tooltip(icon,"Click here for the Fluxbox menu");
	return icon;
}

static void menu_about(void){
	GtkWidget *about = NULL;
	about = gtk_about_dialog_new();
	gtk_about_dialog_set_name		(GTK_ABOUT_DIALOG(about),APP_NAME);
	gtk_about_dialog_set_version	(GTK_ABOUT_DIALOG(about),APP_VERSION);
	gtk_about_dialog_set_copyright(GTK_ABOUT_DIALOG(about),APP_AUTHOR);
	gtk_about_dialog_set_comments (GTK_ABOUT_DIALOG(about),APP_DESCRIPTION);
	gtk_about_dialog_set_license  (GTK_ABOUT_DIALOG(about),APP_LICENSE);
	gtk_about_dialog_set_website  (GTK_ABOUT_DIALOG(about),APP_WEBSITE);
	gtk_widget_show(about);
}

static void menu_popup(GtkWidget *widget, GdkEventButton *event, gpointer data){
	gtk_menu_popup(GTK_MENU(menu[0]),NULL,NULL,NULL,NULL,event->button,event->time);
}	

static void execute(char *command){
	g_spawn_command_line_async(command,0);
}

static void include_file(char *file){
	wordexp_t exp_result;
	wordexp(file,&exp_result,0);
	strcpy(file,exp_result.we_wordv[0]);
	g_print("Including %s file\n",file);
	proc_lines(file);
	g_print("Finished including %s file\n",file);
	return;
}

static void create_exec(char *title, char *command, char *icon){
	GtkWidget *menuitem;
	wordexp_t exp_result;

	g_print("Creating exec item with %s, %s and %s\n",title,command,icon);
	menuitem = gtk_image_menu_item_new_with_label(title);

	if(icon!=NULL && strlen(icon)>0){
		wordexp(icon,&exp_result,0);
		strcpy(icon,exp_result.we_wordv[0]);
		if(access(icon,R_OK)==0){
			g_print("Setting the %s menu item icon to %s\n",title,icon);
			gtk_image_menu_item_set_image(GTK_IMAGE_MENU_ITEM(menuitem),gtk_image_new_from_file(icon));
		}
	}

	if(command!=NULL && command_index<MAX_COMMANDS){
		commands[command_index] = g_malloc(strlen(command)+1);
		strcpy(commands[command_index],command);
		g_signal_connect_swapped(G_OBJECT(menuitem),"button-press-event",G_CALLBACK(execute),commands[command_index]);
		command_index++;
	}
	gtk_menu_shell_append(GTK_MENU_SHELL(menu[menu_depth]), menuitem);
}

static void create_submenu(char *title, char *icon){
	GtkWidget *submenuitem;
	wordexp_t exp_result;

	menu_depth++;								
	menu[menu_depth] = gtk_menu_new();	

	g_print("Creating menu with %s and %s\n",title,icon);
	submenuitem = gtk_image_menu_item_new_with_label(title);

	if(icon!=NULL && strlen(icon)>0){
		wordexp(icon,&exp_result,0);
		strcpy(icon,exp_result.we_wordv[0]);
		if(access(icon,R_OK)==0){
			g_print("Setting the %s submenu icon to %s\n",title,icon);
			gtk_image_menu_item_set_image(GTK_IMAGE_MENU_ITEM(submenuitem),gtk_image_new_from_file(icon));
		}
	}

	gtk_menu_item_set_submenu(GTK_MENU_ITEM(submenuitem),menu[menu_depth]);
	gtk_menu_shell_append(GTK_MENU_SHELL(menu[menu_depth-1]), submenuitem);
}

static void proc_menu_line(char *line){
	regex_t reg_exec, reg_exec_icon, reg_submenu, reg_submenu_icon, reg_include, reg_end;

	regmatch_t *match_exec = NULL;
	regmatch_t *match_exec_icon = NULL;
	regmatch_t *match_submenu = NULL;
	regmatch_t *match_submenu_icon = NULL;
	regmatch_t *match_include = NULL;

	char title[MAX_LINE_LENGTH];
	char command[MAX_LINE_LENGTH];
	char icon[MAX_LINE_LENGTH];

	regcomp(&reg_exec			 ,"^(.*\\[exec\\]) (.*\\()(.+)(\\)) (.*\\{)(.+)(\\})",REG_EXTENDED);
	regcomp(&reg_exec_icon	 ,"^(.*\\[exec\\]) (.*\\()(.+)(\\)) (.*\\{)(.+)(\\}) (.*<)(.+)(>)",REG_EXTENDED);
	regcomp(&reg_submenu     ,"^(.*\\[submenu\\]) (.*\\()(.+)(\\))",REG_EXTENDED);
	regcomp(&reg_submenu_icon,"^(.*\\[submenu\\]) (.*\\()(.+)(\\)) (.*<)(.+)(>)",REG_EXTENDED);
	regcomp(&reg_include		 ,"^(.*\\[include\\]) (.*\\()(.+)(\\))",REG_EXTENDED);
	regcomp(&reg_end			 ,"^.*\\[end",REG_EXTENDED);

	match_exec				= (regmatch_t *) malloc((reg_exec.re_nsub+1)*sizeof(regmatch_t));
	match_exec_icon		= (regmatch_t *) malloc((reg_exec_icon.re_nsub+1)*sizeof(regmatch_t));
	match_submenu			= (regmatch_t *) malloc((reg_submenu.re_nsub+1)*sizeof(regmatch_t));
	match_submenu_icon	= (regmatch_t *) malloc((reg_submenu_icon.re_nsub+1)*sizeof(regmatch_t));
	match_include			= (regmatch_t *) malloc((reg_include.re_nsub+1)*sizeof(regmatch_t));

	// exec with icon
	if(regexec(&reg_exec_icon,line,reg_exec_icon.re_nsub+1,match_exec_icon,0)==0){
		substring(line,title  ,match_exec_icon[3].rm_so,match_exec_icon[3].rm_eo);
		substring(line,command,match_exec_icon[6].rm_so,match_exec_icon[6].rm_eo);
		substring(line,icon   ,match_exec_icon[9].rm_so,match_exec_icon[9].rm_eo);
		create_exec(title,command,icon);
	// regular exec
	}else if(regexec(&reg_exec,line,reg_exec.re_nsub+1,match_exec,0)==0){
		substring(line,title  ,match_exec[3].rm_so,match_exec[3].rm_eo);
		substring(line,command,match_exec[6].rm_so,match_exec[6].rm_eo);
		create_exec(title,command,NULL);
	// submenu with icon
	}else if(regexec(&reg_submenu_icon,line,reg_submenu_icon.re_nsub+1,match_submenu_icon,0)==0){
		substring(line,title  ,match_submenu_icon[3].rm_so,match_submenu_icon[3].rm_eo);
		substring(line,icon   ,match_submenu_icon[6].rm_so,match_submenu_icon[6].rm_eo);
		create_submenu(title,icon);
	// regular submenu
	}else if(regexec(&reg_submenu,line,reg_submenu.re_nsub+1,match_submenu,0)==0){
		substring(line,title  ,match_submenu[3].rm_so,match_submenu[3].rm_eo);
		create_submenu(title,NULL);
	}else if(regexec(&reg_include,line,reg_include.re_nsub+1,match_include,0)==0){
		substring(line,title  ,match_include[3].rm_so,match_include[3].rm_eo);
		include_file(title);
	}else if(regexec(&reg_end,line,0,NULL,0)==0){
		menu_depth--;		
	}

	regfree(&reg_exec);
	regfree(&reg_exec_icon);
	regfree(&reg_submenu);
	regfree(&reg_submenu_icon);
	regfree(&reg_end);
}

static void proc_lines(char *file){
	FILE *handle;
	gchar *line = NULL;
	int nchars;
	size_t line_len = MAX_LINE_LENGTH;

	line = g_malloc(line_len);
	if(line==NULL){
		g_error("Could not allocate memory (1)");
		return;
	}
	handle = fopen(file,"r");
	while((nchars=getline(&line,&line_len,handle))>0)
		proc_menu_line(line);
	fclose(handle);
	g_free(line);
	return;
}

static char* create_menu(char* menu_file) {
	GtkWidget *menuitem;
	char init_file[PATH_MAX];
	char icon[PATH_MAX];
	char title[MAX_LINE_LENGTH];

	strcpy(init_file,fluxbox_init_file());
	strcpy(menu_file,fluxbox_menu_file(init_file,menu_file));
	g_print("Fluxbox init file: %s\n",init_file);
	g_print("Fluxbox menu file: %s\n",menu_file);

	menu[0] = gtk_menu_new();

	menu_title(menu_file,title);

	menuitem = gtk_menu_item_new_with_label(title==NULL? "Fluxbox menu" : title);
	gtk_menu_shell_append(GTK_MENU_SHELL(menu[0]), menuitem);
	gtk_menu_shell_append(GTK_MENU_SHELL(menu[0]), gtk_separator_menu_item_new());

	proc_lines(menu_file);

	gtk_menu_shell_append(GTK_MENU_SHELL(menu[0]), gtk_separator_menu_item_new());
	menuitem = gtk_menu_item_new_with_label("About");
	gtk_menu_shell_append(GTK_MENU_SHELL(menu[0]), menuitem);
	g_signal_connect(G_OBJECT(menuitem),"activate",G_CALLBACK(menu_about),0);
	
	menuitem = gtk_menu_item_new_with_label("Exit");
	gtk_menu_shell_append(GTK_MENU_SHELL(menu[0]), menuitem);
	g_signal_connect(G_OBJECT(menuitem),"activate",G_CALLBACK(gtk_main_quit),0);

	gtk_widget_show_all(menu[0]);
}

static void create_tray(void){
	GtkStatusIcon *icon;
	char menu_file[PATH_MAX];
	char icon_f[PATH_MAX];

	icon = create_icon();
	g_signal_connect(G_OBJECT(icon),"button-press-event",G_CALLBACK(menu_popup),NULL);

	create_menu(menu_file);
	if(icon_file(menu_file,icon_f)!=NULL && access(icon_f,R_OK)==0){
		g_print("Setting Fluxbox Tray Menu icon to %s\n",icon_f);
		gtk_status_icon_set_from_file(icon,icon_f);
	}
}

int main(int argc, char **argv) {
	gtk_init(&argc,&argv);
	create_tray();
	gtk_main();
	return 0;
}
