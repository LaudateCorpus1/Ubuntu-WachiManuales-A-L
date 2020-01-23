@charset "UTF-8";

/* --- bb_code.css --- */

/* .bbCodeX classes are designed to exist inside .baseHtml. ie: they have no CSS reset applied */

.bbCodeBlock
{
	margin: 1em 140px 1em 0;
border: 1px solid rgb(209, 209, 209);
border-radius: 5px;
overflow: auto;

}

	.bbCodeBlock .bbCodeBlock,
	.hasJs .bbCodeBlock .bbCodeSpoilerText,
	.messageList.withSidebar .bbCodeBlock
	{
		margin-right: 0;
	}

	/* mini CSS reset */
	.bbCodeBlock pre,
	.bbCodeBlock blockquote
	{
		margin: 0;
	}
	
	.bbCodeBlock img
	{
		border: none;
	}

.bbCodeBlock .type
{
	font-size: 11px;
font-family: verdana, sans-serif;
color: rgb(191, 30, 21);
background: rgb(209, 209, 209) url('styles/freebsd/xenforo/gradients/form-button-white-25px.png') repeat-x top;
padding: 3px 8px;
border-bottom: 1px solid rgb(255, 246, 246);
border-top-left-radius: 4px;
border-top-right-radius: 4px;

}

.bbCodeBlock pre,
.bbCodeBlock .code
{
	font-size: 10pt;
font-family: Consolas, 'Courier New', Courier, monospace;
background: rgb(252,241,240) url('styles/freebsd/xenforo/gradients/category-23px-light.png') repeat-x top;
padding: 10px;
border-radius: 5px;
word-wrap: normal;
overflow: auto;
line-height: 1.24;
min-height: 30px;
max-height: 500px;
_width: 600px;
direction: ltr;

}

.bbCodeBlock .code
{
	white-space: nowrap;
}

.bbCodeQuote
{
	border-color: rgb(238, 141, 136);
overflow: auto;

}

.bbCodeQuote .attribution
{
	color: rgb(20,20,20);
background: rgb(238, 141, 136) url('styles/freebsd/xenforo/gradients/form-button-white-25px.png') repeat-x top;
border-bottom: 1px solid rgb(217, 56, 58);

}

.bbCodeQuote .quoteContainer
{
	overflow: hidden;
	position: relative;
	
	font-style: italic;
font-size: 9pt;
background: rgb(247, 245, 245) url('styles/freebsd/xenforo/gradients/category-23px-light.png') repeat-x top;
padding: 10px;
border-radius: 4px;

}


	.bbCodeQuote .quoteContainer .quote
	{
		max-height: 150px;
		overflow: hidden;
		padding-bottom: 1px;
	}
	
		.NoJs .bbCodeQuote .quoteContainer .quote
		{
			max-height: none;
		}

	.bbCodeQuote .quoteContainer .quoteExpand
	{		
		display: none;
		box-sizing: border-box;
		position: absolute;
		height: 80px;
		top: 90px;
		left: 0;
		right: 0;
		
		font-size: 11px;
		line-height: 1;
		text-align: center;
		color: rgb(217, 56, 58);
		cursor: pointer;
		padding-top: 65px;
		background: -webkit-linear-gradient(top, rgba(247, 245, 245, 0) 0%, rgb(247, 245, 245) 80%);
		background: -moz-linear-gradient(top, rgba(247, 245, 245, 0) 0%, rgb(247, 245, 245) 80%);
		background: -o-linear-gradient(top, rgba(247, 245, 245, 0) 0%, rgb(247, 245, 245) 80%);
		background: linear-gradient(to bottom, rgba(247, 245, 245, 0) 0%, rgb(247, 245, 245) 80%);
		
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
	
	.bbCodeQuote .quoteContainer .quoteExpand.quoteCut
	{
		display: block;
	}
	
	.bbCodeQuote .quoteContainer.expanded .quote
	{
		max-height: none;
	}
	
	.bbCodeQuote .quoteContainer.expanded .quoteExpand
	{
		display: none;
	}


	.bbCodeQuote img
	{
		max-height: 150px;
	}
	
	.bbCodeQuote iframe,
	.bbCodeQuote .fb_iframe_widget,
	.bbCodeQuote object,
	.bbCodeQuote embed
	{
		max-width: 200px;
		max-height: 150px;
	}
	
	.bbCodeQuote iframe:-webkit-full-screen
	{
		max-width: none;
		max-height: none;
	}
	
	.bbCodeQuote iframe:-moz-full-screen
	{
		max-width: none;
		max-height: none;
	}
	
	.bbCodeQuote iframe:-ms-fullscreen
	{
		max-width: none;
		max-height: none;
	}
	
	.bbCodeQuote iframe:fullscreen
	{
		max-width: none;
		max-height: none;
	}
	
.bbCodeSpoilerButton
{
	margin: 5px 0;
	max-width: 99%;
}

	.bbCodeSpoilerButton > span
	{
		display: inline-block;
		max-width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
.hasJs .bbCodeSpoilerText
{
	display: none;
	background-color: rgb(252,241,240);
padding: 5px;
margin-top: 5px;
margin-right: 140px;
margin-bottom: 5px;
border: 1px solid rgb(209, 209, 209);
border-radius: 5px;
overflow: auto;

}

	.hasJs .bbCodeSpoilerText .bbCodeSpoilerText,
	.hasJs .bbCodeSpoilerText .bbCodeBlock,
	.hasJs .messageList.withSidebar .bbCodeSpoilerText
	{
		margin-right: 0;
	}
	
.NoJs .bbCodeSpoilerContainer
{
	background-color: rgb(20,20,20); /* fallback for browsers without currentColor */
	background-color: currentColor;
}

	.NoJs .bbCodeSpoilerContainer > .bbCodeSpoilerText
	{
		visibility: hidden;
	}

	.NoJs .bbCodeSpoilerContainer:hover
	{
		background-color: transparent;
	}
	
		.NoJs .bbCodeSpoilerContainer:hover > .bbCodeSpoilerText
		{
			visibility: visible;
		}


@media (max-width:800px)
{
	.Responsive .bbCodeBlock,
	.Responsive.hasJs .bbCodeSpoilerText
	{
		margin-right: 0;
	}
}


/* --- freebsd_org_top_navigation_menu.css --- */

/* FreeBSD banner css
--------------------------------------*/
#freebsd_headercontainer {
    text-align: left;
    margin: auto;
    width: 800px;
    padding-bottom: 40px;
}

#freebsd_header {
    clear: both;
    height: 76px;
    margin: 0;
    padding: 0;
    position: relative;
}

#freebsd_headerlogoleft {
    border: 0 none;
    float: left;
    margin-left: -4%;
    padding: 0;
    position: relative;
    top: 0;
}

#freebsd_headerlogoleft img {
    border: 0 none;
}

#freebsd_headerlogoright {
    border: 0 none;
    float: right;
    margin-right: -4%;
    padding-left: 0;
    position: relative;
}

.frontdonateroundbox {
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-top: 10px;
    padding: 0;
    width: 180px;
}

.frontdonatetop div, .frontdonatetop, .frontdonatebot div, .frontdonatebot {
    font-size: 1px;
    height: 10px;
    text-align: center;
    width: 20%;
}

.frontdonatecontent {
    font-size: 1.1em;
    font-weight: bold;
    margin: -4px 0;
    padding: 0;
    text-align: center;
}

.frontdonatecontent a, .frontdonatecontent a:link, .frontdonatecontent a:visited, .frontdonatecontent a:hover, .frontdonatecontent a:active {
    color: #990000;
    text-decoration: none;
}

#freebsd_menu {
    clear: both;
    float: left;
    font-size: 0.9em;
    font-weight: bold;
    height: 29px;
    margin-left: -1%;
    margin-right: -5%;
    margin-top: 5px;
    width: 122%;
}

#freebsd_menu ul:first-child {
    border: 0 none;
    padding-left: 0;
}

#freebsd_menu ul {
    border-left: 1px solid #B4B4B4;
    float: left;
    list-style: none outside none;
    margin: 0;
    padding: 0 10px 2px;
}

ol, ul, li {
    font-size: 1em;
    line-height: 1.2em;
    margin-bottom: 0.1em;
    margin-top: 0.2em;
}

#freebsd_menu li {
    position: relative;
}

#freebsd_menu a {
    color: #666666;
    display: block;
    padding: 0 3px;
    text-decoration: none;
}

div#freebsd_menu ul ul, div#freebsd_menu ul li:hover ul ul, div#freebsd_menu ul ul li:hover ul ul {
    display: none;
}

div#freebsd_menu ul li:hover ul, div#freebsd_menu ul ul li:hover ul, div#freebsd_menu ul ul ul li:hover ul {
    display: block;
}

#freebsd_menu ul ul {
    background-color: #E5E5E5;
    border: 0 none;
    padding: 2px;
    position: absolute;
    width: 10em;
    z-index: 500;
}

#freebsd_menu ul ul li {
    border-top: 1px solid #B4B4B4;
    padding: 4px 0;
}

/* --- likes_summary.css --- */

.likesSummary
{
	overflow: hidden; zoom: 1;
	font-size: 11px;
}

	.LikeText
	{
		float: left;
	}
	
	.likeInfo
	{
		float: right;
	}

/* --- login_bar.css --- */

/** Login bar basics **/

#loginBar
{
	color: rgb(255, 246, 246);
background-color: rgb(102, 0, 0);
border-bottom: 1px solid rgb(102, 0, 0);
position: relative;
z-index: 1;

}

	#loginBar .ctrlWrapper
	{
		margin: 0 10px;
	}

	#loginBar .pageContent
	{
		padding-top: 5px;
		position: relative;
		_height: 0px;
	}

	#loginBar a
	{
		color: rgb(191, 30, 21);

	}

	#loginBar form
	{
		padding: 5px 0;
margin: 0 auto;
display: none;
line-height: 20px;
position: relative;

	}
	
		#loginBar .xenForm .ctrlUnit,		
		#loginBar .xenForm .ctrlUnit > dt label
		{
			margin: 0;
			border: none;
		}
	
		#loginBar .xenForm .ctrlUnit > dd
		{
			position: relative;
		}
	
	#loginBar .lostPassword,
	#loginBar .lostPasswordLogin
	{
		font-size: 11px;
	}
	
	#loginBar .rememberPassword
	{
		font-size: 11px;
	}

	#loginBar .textCtrl
	{
		color: rgb(252,241,240);
background-color: rgb(173, 34, 29);
border-color: rgb(102, 0, 0);

	}
	
	#loginBar .textCtrl[type=text]
	{
		font-weight: bold;
font-size: 18px;

	}

	#loginBar .textCtrl:-webkit-autofill /* http://code.google.com/p/chromium/issues/detail?id=1334#c35 */
	{
		background: rgb(173, 34, 29) !important;
		color: rgb(252,241,240);
	}

	#loginBar .textCtrl:focus
	{
		background: black none;

	}
	
	#loginBar input.textCtrl.disabled
	{
		color: rgb(255, 246, 246);
background-color: rgb(102, 0, 0);
border-style: dashed;

	}
	
	#loginBar .button
	{
		min-width: 85px;
		*width: 85px;
	}
	
		#loginBar .button.primary
		{
			font-weight: bold;
		}
		
/** changes when eAuth is present **/

#loginBar form.eAuth
{
	-x-max-width: 700px; /* normal width + 170px */
}

	#loginBar form.eAuth .ctrlWrapper
	{
		border-right: 1px dotted rgb(102, 0, 0);
		margin-right: 200px;
		box-sizing: border-box;
	}

	#loginBar form.eAuth #eAuthUnit
	{
		position: absolute;
		top: 0px;
		right: 10px;
	}

		#eAuthUnit li
		{
			margin-top: 10px;
			line-height: 0;
		}
	
/** handle **/

#loginBar #loginBarHandle
{
	font-size: 11px;
color: rgb(252,241,240);
background-color: rgb(102, 0, 0);
padding: 0 10px;
margin-right: 20px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
position: absolute;
right: 0px;
bottom: -20px;
text-align: center;
z-index: 1;
line-height: 20px;
box-shadow: 0px 2px 5px rgb(102, 0, 0);

}


@media (max-width:800px)
{
	.Responsive #loginBar form.eAuth .ctrlWrapper
	{
		border-right: none;
		margin-right: 10px;
	}

	.Responsive #loginBar form.eAuth #eAuthUnit
	{
		position: static;
		width: 180px;
		margin: 0 auto 10px;
	}
}


/* --- message.css --- */



/* code from http://css-tricks.com/examples/ButtonMaker/ */
.LikeLabel
{
   border-top: 1px solid #6e2d2d;
   background: #a64b4b;
   background: -webkit-gradient(linear, left top, left bottom, from(#d95959), to(#a64b4b));
   background: -webkit-linear-gradient(top, #d95959, #a64b4b);
   background: -moz-linear-gradient(top, #d95959, #a64b4b);
   background: -ms-linear-gradient(top, #d95959, #a64b4b);
   background: -o-linear-gradient(top, #d95959, #a64b4b);
   padding: 4px 8px;
   -webkit-border-radius: 8px;
   -moz-border-radius: 8px;
   border-radius: 8px;
   -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
   -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
   box-shadow: rgba(0,0,0,1) 0 1px 0;
   text-shadow: rgba(0,0,0,.4) 0 1px 0;
   color: white;
   text-decoration: none;
   vertical-align: middle;
}
.LikeLabel:hover {
   border-top-color: #9c3838;
   background: #9c3838;
   color: #cccccc;
   text-decoration: none;
}
.LikeLabel:active {
   border-top-color: #782828;
   background: #782828;
}

.messageList
{
	
}

.messageList .message
{
	padding-top: 10px;
padding-bottom: 30px;
border-top: 1px solid rgb(209, 209, 209);

}

/* clearfix */ .messageList .message { zoom: 1; } .messageList .message:after { content: '.'; display: block; height: 0; clear: both; visibility: hidden; }

/*** Message block ***/

.message .messageInfo
{
	padding: 0;
margin-left: 140px;
border-bottom: 1px none black;

	zoom: 1;
}

	.message .newIndicator
	{
		font-size: 11px;
color: rgb(102, 0, 0);
background: rgb(191, 30, 21) url('styles/freebsd/xenforo/gradients/form-button-white-25px.png') repeat-x top;
padding: 1px 5px;
margin: -5px -5px 5px 5px;
border: 1px solid rgb(191, 30, 21);
border-radius: 3px;
border-top-right-radius: 0px;
display: block;
float: right;
position: relative;
box-shadow: 1px 1px 3px rgba(0,0,0, 0.25);

		
		margin-right: -25px;
	}
	
		.message .newIndicator span
		{
			background-color: rgb(191, 30, 21);
border-top-right-radius: 3px;
position: absolute;
top: -4px;
right: -1px;
width: 5px;
height: 4px;

		}

	.message .messageContent
	{
		padding-bottom: 2px;
min-height: 100px;
overflow: hidden;
*zoom: 1;

	}
	
	.message .messageTextEndMarker
	{
		height: 0;
		font-size: 0;
		overflow: hidden;
	}
	
	.message .editDate
	{
		text-align: right;
		margin-top: 5px;
		font-size: 11px;
		color: rgb(150,150,150);
	}

	.message .signature
	{
		font-size: 9pt;
color: rgb(150,150,150);
padding: 5px 0 0;
margin-top: 5px;
border-top: 1px dashed rgb(255, 246, 246);

	}

	.message .messageMeta
	{
		font-size: 11px;
padding: 15px 5px 5px;
margin: -5px;
overflow: hidden;
zoom: 1;

	}

		.message .privateControls
		{
			float: left;

		}

		.message .publicControls
		{
			float: right;

		}
		
			.message .privateControls .item
			{
				margin-right: 10px;
				float: left;
			}

				.message .privateControls .item:last-child
				{
					margin-right: 0;
				}

			.message .publicControls .item
			{
				margin-left: 10px;
				float: left;
			}
	
				.message .messageMeta .control
				{
					
				}
				
					.message .messageMeta .control:focus
					{
						
					}
				
					.message .messageMeta .control:hover
					{
						
					}
				
					.message .messageMeta .control:active
					{
						
					}
	/*** multiquote +/- ***/
			
	.message .publicControls .MultiQuoteControl
	{
		padding-left: 4px;
		padding-right: 4px;
		border-radius: 2px;
		margin-left: 6px;
		margin-right: -4px;
	}
	
	
	.message .publicControls .MultiQuoteControl.active
	{
		background-color: rgb(209, 209, 209);
	}
	
		.messageNotices li
	{
		font-size: 11px;
background: rgb(238, 141, 136) url('styles/freebsd/xenforo/gradients/form-button-white-25px.png') repeat-x top;
padding: 5px;
margin: 10px 0;
border: 1px solid rgb(238, 141, 136);
border-radius: 5px;
line-height: 16px;

	}
	
		.messageNotices .icon
		{
			float: right;
			width: 16px;
			height: 16px;
			background: url('styles/freebsd/xenforo/xenforo-ui-sprite.png') no-repeat 1000px 1000px;
		}
	
			.messageNotices .warningNotice .icon { background-position: -48px -32px; }		
			.messageNotices .deletedNotice .icon { background-position: -64px -32px; }		
			.messageNotices .moderatedNotice .icon {background-position: -32px -16px; }
	
	.message .likesSummary
	{
		padding: 5px;
margin-top: 10px;
border: 1px solid rgb(209, 209, 209);
border-radius: 5px;

	}
	
	.message .messageText > *:first-child
	{
		margin-top: 0;
	}

/* inline moderation changes */

.InlineModChecked .messageUserBlock,
.InlineModChecked .messageInfo,
.InlineModChecked .messageNotices,
.InlineModChecked .bbCodeBlock .type,
.InlineModChecked .bbCodeBlock blockquote,
.InlineModChecked .attachedFiles .attachedFilesHeader,
.InlineModChecked .attachedFiles .attachmentList
{
	background: rgb(255,255,200) url('styles/freebsd/xenforo/gradients/category-23px-light.png') repeat-x top;

}

.InlineModChecked .messageUserBlock div.avatarHolder,
.InlineModChecked .messageUserBlock .extraUserInfo
{
	background: transparent;
}

.InlineModChecked .messageUserBlock .arrow span
{
	border-left-color: rgb(255,255,200);
}

/* message list */

.messageList .newMessagesNotice
{
	margin: 10px auto;
	padding: 5px 10px;
	border-radius: 5px;
	border: 1px solid rgb(255, 246, 246);
	background: rgb(209, 209, 209) url(styles/freebsd/xenforo/gradients/category-23px-light.png) repeat-x top;
	font-size: 11px;
}

/* deleted / ignored message placeholder */

.messageList .message.placeholder
{
}

.messageList .placeholder .placeholderContent
{	
	overflow: hidden; zoom: 1;
	color: rgb(102, 0, 0);
	font-size: 11px;
}

	.messageList .placeholder a.avatar
	{
		float: left;
		display: block;
	}
	
		.messageList .placeholder a.avatar img
		{
			display: block;
			width: 32px;
			height: 32px;
		}
		
	.messageList .placeholder .privateControls
	{
		margin-top: -5px;
	}
	

/* messages remaining link */

.postsRemaining a,
a.postsRemaining
{
	font-size: 11px;
	color: rgb(150,150,150);
}


@media (max-width:800px)
{
	.Responsive .message .newIndicator
	{
		margin-right: 0;
		border-top-right-radius: 3px;
	}
	
		.Responsive .message .newIndicator span
		{
			display: none;
		}
}

@media (max-width:480px)
{
	.Responsive .message .messageInfo
	{
		margin-left: 0;
		padding: 0 10px;
	}

	.Responsive .message .messageContent
	{
		min-height: 0;
	}	

	.Responsive .message .newIndicator
	{
		margin-right: -5px;
		margin-top: -16px;
	}

	.Responsive .message .postNumber,
	.Responsive .message .authorEnd
	{
		display: none;
	}
	
	.Responsive .message .signature
	{
		display: none;
	}
	
	.Responsive .messageList .placeholder a.avatar
	{
		margin-right: 10px;
	}
}


/* --- message_user_info.css --- */

.messageUserInfo
{
	float: left;
width: 124px;

}

	.messageUserBlock
	{
		background: rgb(209, 209, 209) url('styles/freebsd/xenforo/gradients/tab-selected-light.png') repeat-x bottom;
border: 1px solid rgb(209, 209, 209);
border-radius: 5px;

		
		position: relative;
	}
		
		.messageUserBlock div.avatarHolder
		{
			background-color: rgb(252,241,240);
padding: 10px;
border-radius: 4px;

			
			position: relative;	
		}
		
			.messageUserBlock div.avatarHolder .avatar
			{
				display: block;
				font-size: 0;
			}
			
			.messageUserBlock div.avatarHolder .onlineMarker
			{
				position: absolute;
				top: 9px;
				left: 9px;
				
				border: 7px solid transparent;
border-top-color: rgb(127, 185, 0);
border-left-color: rgb(127, 185, 0);
border-top-left-radius: 5px;
border-top-right-radius: 3px;
border-bottom-left-radius: 3px;

			}
			
		.messageUserBlock h3.userText
		{
			padding: 6px;

		}
		
		.messageUserBlock .userBanner
		{
			display: block;
			margin-bottom: 5px;
			margin-left: -12px;
			margin-right: -12px;
		}
		
		.messageUserBlock .userBanner:last-child
		{
			margin-bottom: 0;
		}
	
		.messageUserBlock a.username
		{
			font-weight: bold;
display: block;
overflow: hidden;
line-height: 16px;

			
		}
		
		.messageUserBlock .userTitle
		{
			font-size: 11px;
display: block;

		}
		
		.messageUserBlock .extraUserInfo
		{
			font-size: 10px;
background-color: rgb(252,241,240);
padding: 4px 6px;
border-radius: 4px;

		}
		
			.messageUserBlock .extraUserInfo dl
			{
				margin: 2px 0 0;
			}
							
			.messageUserBlock .extraUserInfo img
			{
				max-width: 100%;
			}
		
		.messageUserBlock .arrow
		{
			position: absolute;
			top: 10px;
			right: -10px;
			
			display: block;
			width: 0px;
			height: 0px;
			line-height: 0px;
			
			border: 10px solid transparent;
			border-left-color: rgb(209, 209, 209);
			-moz-border-left-colors: rgb(209, 209, 209);
			border-right: none;
			
			/* Hide from IE6 */
			_display: none;
		}
		
			.messageUserBlock .arrow span
			{
				position: absolute;
				top: -10px;
				left: -11px;
				
				display: block;
				width: 0px;
				height: 0px;
				line-height: 0px;
				
				border: 10px solid transparent;
				border-left-color: rgb(252,241,240);
				-moz-border-left-colors: rgb(252,241,240);
				border-right: none;
			}


@media (max-width:480px)
{
	.Responsive .messageUserInfo
	{
		float: none;
		width: auto; 
	}

	.Responsive .messageUserBlock
	{
		overflow: hidden;
		margin-bottom: 5px;
		position: relative;
	}

	.Responsive .messageUserBlock div.avatarHolder
	{
		float: left;
		padding: 5px;
	}

		.Responsive .messageUserBlock div.avatarHolder .avatar img
		{
			width: 48px;
			height: 48px;
		}
		
		.Responsive .messageUserBlock div.avatarHolder .onlineMarker
		{
			top: 4px;
			left: 4px;
			border-width: 6px;
		}

	.Responsive .messageUserBlock h3.userText
	{
		margin-left: 64px;
	}
	
	.Responsive .messageUserBlock .userBanner
	{
		max-width: 150px;
		margin-left: 0;
		margin-right: 0;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		position: static;
		display: inline-block;
	}
	
		.Responsive .messageUserBlock .userBanner span
		{
			display: none;
		}

	.Responsive .messageUserBlock .extraUserInfo
	{
		display: none;
	}

	.Responsive .messageUserBlock .arrow
	{
		display: none;
	}
}


/* --- thread_view.css --- */

.thread_view .threadAlerts
{
	border: 1px solid rgb(209, 209, 209);
	border-radius: 5px;
	font-size: 11px;
	margin: 10px 0;
	padding: 5px;
	line-height: 16px;
	background-image: url('styles/freebsd/xenforo/gradients/form-button-white-25px.png');
}
	
	.thread_view .threadAlerts dt
	{
		color: rgb(191, 30, 21);
		display: inline;
	}
	
	.thread_view .threadAlerts dd
	{
		color: rgb(173, 34, 29);
		font-weight: bold;
		display: inline;
	}
	
		.thread_view .threadAlerts .icon
		{
			float: right;
			width: 16px;
			height: 16px;
			margin-left: 5px;
			background: url('styles/freebsd/xenforo/xenforo-ui-sprite.png') no-repeat -1000px -1000px;
		}
		
			.thread_view .threadAlerts .deletedAlert .icon { background-position: -64px -32px; }
			.thread_view .threadAlerts .moderatedAlert .icon { background-position: -32px -16px; }
			.thread_view .threadAlerts .lockedAlert .icon { background-position: -16px -16px; }
	
.thread_view .threadAlerts + * > .messageList
{
	border-top: none;
}

.thread_view .threadNotices
{
	background-color: rgb(252,241,240);
	border: 1px solid rgb(255, 246, 246);
	border-radius: 5px;
	padding: 10px;
	margin: 10px auto;
}

.thread_view .InlineMod
{
	overflow: hidden; zoom: 1;
}
