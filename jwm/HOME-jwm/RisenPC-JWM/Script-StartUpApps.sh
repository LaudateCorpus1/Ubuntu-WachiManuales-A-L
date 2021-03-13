#!/bin/bash

#	│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
#	│Proyecto Resucitar PC de bajos recursos con iceWM        │
#	│                  RisenPC JWM                            │
#	│  script por Washington Indacochea Delgado (Wachín)      │
#	│       E-Mail: wachin.id@gmail.com en Ecuador            │
#	│   http://facilitarelsoftwarelibre.blogspot.com/         │
#	│     Licencia Pública General de GNU version 2           │    
#	│  En español: http://es.tldp.org/Otros/gples/gples.html  │
#	│  en inglés: https://www.gnu.org/licenses/gpl-2.0.html   │
#	│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│

# Proyecto Resucitar PC de bajos recursos con JWM
# https://facilitarelsoftwarelibre.blogspot.com/2017/06/proyecto-resucitar-pc-de-bajos-recursos.html
# Ayudas para entender el archivo startup
# Nota: Este es el mismo archivo que estoy utlizando para iceWM
# y todas las consultas que hice las hice para ese proyecto, y también
# funcionan para JWM
# https://wiki.archlinux.org/index.php/IceWM#Autostarting    
# https://celettu.wordpress.com/icewm-guide/ 

# INSTRUCCIONES: 
# Los siguientes comandos lanzarán las aplicaciones necesarias para 
# que una PC tenga lo mejor posible en funcionalidad con bajos recursos
# Nota: No se olvide de este signo "&" al final de cada comando para 
# lanzar las aplicaciones, porque si usted va a añadir alguna aplicación
# y se olvida de ponerlo se cortarán las demás ordenes y no 
# se lanzarán las demás aplicaciones, ojo.


#	│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
#	│       IMPORTANTES NUNCA SE DEBEN DESACTIVAR:       │
#	│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│

sleep 2 &
# Requerido para dar algo de tiempo a la barra de tareas de jwm para
# iniciar antes que el resto

nm-applet &
# (Se inicia minimizado en la barra de tareas como un icono)
# Para administrar las redes disponibles de internet

setxkbmap -layout latam &
# (Queda funcionando en segundo plano, no se ve)
# Para que siempre se cargue al inicio mi distribución de teclado,
# en mi caso Español Latinoamericano "latam". Es recomendable 
# que usted revise mi pagina por si tiene otro idioma u
# otra distribución
# Vea: "Cambiar la distribución del teclado con setxkbmap 
# (desde terminal) en Ubuntu" 
# http://facilitarelsoftwarelibre.blogspot.com/2016/07/cambiar-la-distribucion-del-teclado-con.html
# Para ver toda la lista de los idiomas y su respectiva sintaxis:
# ponga en la terminal este comando:
# gedit /usr/share/X11/xkb/rules/evdev.lst
# allí más abajo usted verá esto(sólo pongo una pequeña parte):
#! layout
#  us              English (US)
#  af              Afghani
#  ara             Arabic
#  al              Albanian
#  am              Armenian
 
pnmixer &
# Es el icono de volumen, dele clic derecho en "Preferences" y en la pestaña "Beavior" 
# en "Volume Control Command" verifique que esté "pavucontrol" si no está escríbalo.
# Visto en "IceWM install and setup guide"
# http://forums.fedoraforum.org/showthread.php?t=282433

#xscreensaver -no-splash &
# (Queda funcionando en segundo plano, no se ve)
# Este es necesario para que si dejas la PC sin usar después se apague
# bloquee solita, y luego para entrar debes poner tu contraseña
# Para que funcione debes tener instalado xscreensaver, y luego 
# ponerlo en el archivo claro que para eso hay que configurarlo, 
# el comando es /usr/bin/xscreensaver-demo el cual lo he añadido
# al "menu" como un elemento para que con el comando 
# "xscreensaver-command -lock &" 
# manualmente lo puedas activar para entender mas de esto revisa 
# el archivo menu que va incluido en este manual
# Visto en "IceWM Guide" https://celettu.wordpress.com/icewm-guide/

#MENOS VELOCIDAD CURSOR
#xset m 1 0
#xset m 1 4
#xset m 1 8
#xset m 2 0
#xset m 2 4
#xset m 2 8
#xset m 3 0
#xset m 3 4
#xset m 3 8 
#xset m 4 0
#xset m 4 4
#xset m 4 8
#xset m 5 0
#xset m 5 4
#xset m 5 8
#xset m 6 0
#xset m 6 4
#xset m 6 8
#xset m 7 0
#xset m 7 4
#xset m 7 8
#xset m 8 0
#xset m 8 4
#xset m 8 8
#xset m 9 0
#xset m 9 4 
#xset m 9 8
#xset m 10 0
#xset m 10 4
#xset m 10 8
#MAS VELOCIDAD CURSOR
# (Queda funcionando en segundo plano, no se ve)
# Este comando es para poner la velocidad del cursor de su mouse o de
# su touchpad, o se algún teclado externo con touchpad, para mi
# la mejor velocidad del cursor es "xset m 4 0". Puede que
# usted necesite más o menos (esto depende de algunos factores como el 
# tamaño de la pantalla de su PC) Le dejo a usted esta lista de las 
# velocidades que puede usar (a mi modo de ver las cosas). Usted debe 
# probar uno por uno cada uno de los comandos en una terminal, 
# (copie cada uno y ejecutelo en una terminal) y pruebelo y luego
# desmarque el que quiera que se cargue al inicio de su PC y el resto
# dejelo marcado con el numeral para que no funcionen.
# El comando para ver que velocidad estas utilizando es:
# xset q | grep -A 1 Pointer
# Ejemplo para esta velocidad que estoy usando el resultado es
# Pointer Control:
# acceleration:  4/1    threshold:  0
# Contultas
# Visto en:
# Mouse acceleration - ArchWiki
# https://wiki.archlinux.org/index.php/Mouse_acceleration
# Reduce the Mouse Sensitivity - Ask Ubuntu
# https://askubuntu.com/questions/135122/reduce-the-mouse-sensitivity

#solaar &
# Logitech Unifying Receiver, administrador de periféricos para Linux
# yo tengo un teclado externo Logitech k400 y es necesario para mi instalar este paquete
# y que esté activo e iconizado, para configurarlo a mi teclado según necesite
# yo lo uso para invertir la tecla Fn
# https://unix.stackexchange.com/questions/41647/switch-fn-key-state

#hp-systray -x &
# Si alguien usa una impresora HP este comando hará que se iconice HPLIP pues tendrá que instalarlo
# el comando es: sudo apt-get install hplip-gui
# de allí deberá configurar su impresora

#system-config-printer-applet  &
# Applet de cola de impresión
# Este progrma viene por defecto configurado al inicio de los sistema operativos Ubuntu, por eso
# debe estar en el arranque automático. Lo puede revisar ustedes mismos en:
# /etc/xdg/autostart/print-applet.desktop
# Glosario
# Applet = Componente de software pequeño que se ejecuta bajo el control de una aplicación más grande que lo contiene.

numlockx on &
# Este programa activa la tecla de números en los teclados externos
# Si tienes una laptop con teclado numerico es imprescindible 
# Visto en "Como configurar el gestor de ventanas IceWM como un campeón"
# http://www.taringa.net/post/linux/19258241/Como-configurar-el-gestor-de-ventanas-IceWM-como-un-campeon.html

/usr/lib/policykit-1-gnome/polkit-gnome-authentication-agent-1 &
# NOTA: ESTE PROGRAMA SIRVE PARA CUANDO UNO ABRE SYNAPTIC APAREZCA
# UNA VENTANA PARA PONER EL PASSWORD, ASÍ QUE PARA LOS USUARIOS
# NORMALES DEBE ESTAR ACTIVADO, PERO PARA LOS QUE YA TIENEN MAS
# CONOCIMIENTO SE LO PUEDE DESACTIVAR A FIN DE AHORRAR ESPACIO EN 
# LA MEMORIA Y SE LANZA SYNAPTIC DESDE LA TERMINAL CON
# sudo synaptic
# ASÍ LO ESTOY HACIENDO YO.
# Descripción.- Agente de autenticación de GNOME para PolicyKit-1
# Este paquete lo busqué en synaptic con la palabra clave "Gnome Policy",
# el paquete en UbuntuStudio 16.04 x386 exactamente se llama 
# "policykit-1-gnome", y en la descripción dice "PolicyKit-gnome 
# proporciona un servicio del bus de sesión D-Bus que se usa para crear
# ventanas de autenticación utilizadas para obtener privilegios".
# Este paquete es necesario ejemplo para cuando uno va a instalar
# algún idioma con "Soporte de idiomas" lo puede lanzar desde la 
# terminal poniendo "gnome-language-selector" y vera que si
# "policykit-1-gnome" no está activo, no funcionará el soporte de 
# idiomas. Vi el uso de este en este archivo startup en:
# "IceWM install and setup guide" 
# http://forums.fedoraforum.org/showthread.php?t=282433
# Puede que usted quiera activar este paquete en otra distribución de 
# Ubuntu, así que le dejo los links para que consulte los nombres 
# http://packages.ubuntu.com/trusty/policykit-1-gnome
# http://packages.ubuntu.com/xenial/policykit-1-gnome
# allí busque en el paquete que usted quiera consultar sea 32 o 64 
# bits (i386 o amd64) la "lista de los archivos"(list of files):
# http://packages.ubuntu.com/trusty/i386/policykit-1-gnome/filelist
# allí está esta linea /usr/lib/policykit-1-gnome/polkit-gnome-authentication-agent-1
# eso significa que eso es lo que hay que poner aquí. También puede 
# buscar en el synaptic dandole clic derecho en propiedades y archivos
# instalados disculpen tanta complicación, pero el nombre del archivo
# que fue instalado en /usr/lib/ puede variar de una distribución a otra
# o de 32 o 64 bits, por eso hay que saber el nombre exacto.

#update-notifier  &
# Informa cuando hay actualizaciones para el sistema operativo


#	│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
#	│       IMPORTANTES PERO SE PUEDEN DESACTIVAR:       │
#	│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│

orage &
# (Se inicia minimizado en la barra de tareas como un icono)
# Sirve para ver la fecha, es un calendario también (se carga 
# iconizado y abierto por defecto. Si quiere hacer para que se
# cargue iconizado haga así, Cuando se cargue le da clic derecho
# al icono, clic preferencias, clic pestaña "Ventana del calendario", 
# marcar en "Inicio de calendario": "ocultar"

xfce4-notes &
# (Se inicia minimizado en la barra de tareas como un icono)
# Para tomar notas rapidas, imprescindible, 

#pcmanfm --desktop &
# Este es necesario para cargar el wallpaper del escritorio
# y los iconos de escritorio, pero si usted es como yo nunca usas nada
# del escritorio tranquilamente lo puedes desactivar 

#blueman-applet &
# Si tu laptop tiene Bluetooth debes activarlo
# mi laptop Dell Inspiron 1750 no tiene por eso no lo activo. Aunque,
# si le pusiera un Bluetooh externo deberé de hacerlo
# Visto en "Como configurar el gestor de ventanas IceWM como un campeón" 
# http://www.taringa.net/post/linux/19258241/Como-configurar-el-gestor-de-ventanas-IceWM-como-un-campeon.html

#mate-power-manager &
# (opcional) Es un Power Manager applet (administrador de poder),
# te mostrará el estado de la batería de la laptop, el estado de la
# batería de tu teclado externo (si lo tienes), y otros estados, depende
# del o los dispositivos conectados
# Visto en "Why should I use IceWM?" 
# https://help.ubuntu.com/community/IceWM



#	│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
#	│          Programas del usuario (OPCIONALES):       │
#	│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
#
# Los siguientes programas yo los uso y quiero que se carguen cuando 
# enciendo la PC, usted puede poner los que usted usa aquí

#sleep 2; dropbox start -i &
# Dropbox sirve para sincronizar tus archivos atravéz de computadoras y la web. 
# Lo instalé con "sudo apt-get install nautilus-dropbox"

#dolphin4 ~/ ~/Dropbox/UbuntuManuales/ ~/ ~/Dropbox/ &
# Es un administrador de archivos completo, muy bueno, lo uso
# porque como con mucha frecuencia trabajo con fotos y en la vista
# previa se ven grandes las imágenes y así puedo apreciar mejor,
# para mi es el mejor que hay para quienes venimos de Windows.
# Nota: Las cuatro rutas son para que se abran cuatro pestañas que yo tengo
# Más información sobre dolphin4 en
# https://facilitarelsoftwarelibre.blogspot.com/search/label/Dolphin4

#nautilus --no-desktop &
# Es un administrador de archivos bastante completo, tiene de bueno
# que tiene la integración con Dropbox instalando el paquete:
# sudo apt-get install nautilus-dropbox

thunar &

#caja &
# Es un administrador de archivos bastante completo, tiene de bueno
# que tiene la integración con Dropbox instalando el paquete:
# sudo apt-get install caja-dropbox
# claro que de ser ese el caso usted debería desinstalar nautilus-dropbox
# esto si usara Dropbox

#chromium-browser &
# Navegador Web. Debes tener instalado chromium-browser

#/usr/lib/chromium-browser/chromium-browser --type=service  &
# Servicio de Chromium Web Browser.- Es necesario si usted utiliza Google Cloud Print, por 
# defecto lo dejo habilitado. Si usted no utliza Chromium y usa Google Chrome no pasa nada
# si está habilitado pues no se iniciaría ya que no existiría

#google-chrome-stable &
# Navegador Web. Sólo disponible para 64 bits

firefox &
# Navegador Web.

goldendict &
# El Diccionario, todos los días lo uso en algún momento 
# (se lo puede configurar para que se cargue iconizado)
# https://facilitarelsoftwarelibre.blogspot.com/2016/03/goldendict-el-mejor-diccionario-offline.html
# https://facilitarelsoftwarelibre.blogspot.com/2016/05/diccionario-espanol-clave-para.html

#gedit &
# Editor de Textos, es muy bonito pero ocupa casi el doble de memoria que pluma

pluma &
# Editor de Textos, fork de gedit, no consume tanta memoria

xfce4-terminal &
# La terminal, como siempre la uso ya que mejor esté abierta

#brightness-controller &
# Control de brillo, instalado desde PPA:
# https://facilitarelsoftwarelibre.blogspot.com/2017/06/control-de-brillo-para-pantallas-en.html

#indicator-kdeconnect &
# para lanzar KDE Connect Indicator (lo uso para compartir archivos
# entre mi celular con Android 6.0.1 y UbuntuStudio 16.04)
# http://www.webupd8.org/2017/04/new-kde-connect-indicator-ubuntu-linux.html
# Nota: Para que se vea el icono debe estar abierto en tu celular
# el programa KDE Connect sino no se cargará el icono

#alarm-clock-applet --hidden &
# (opcional) Tiene un temporizador y un despertador, para mi es el mejor.
# Yo uso este programa para cuando estoy en la PC y dejo algo cocinando
# Nota: Vi como iniciaba minimizado el programa viendo en la ayuda
# en la terminal poniendo 
# alarm-clock-applet --help
# allí hay varios comandos

#ksnip

#sleep 7; shutter --min_at_startup &
# Para tomar captura de pantallas, este es el comando para que se
# cargue iconizado y no ocupe espacio 
# instalado desde PPA
# http://shutter-project.org/downloads/
# lo desactivo porque este programas está teniendo inconvenientes
# si se inicia desde el inicio

# Dios les bendiga


