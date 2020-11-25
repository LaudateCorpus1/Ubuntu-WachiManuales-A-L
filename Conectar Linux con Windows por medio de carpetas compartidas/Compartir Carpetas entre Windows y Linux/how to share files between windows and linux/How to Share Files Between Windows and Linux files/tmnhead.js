var TMNAPI_VERSION="5.5.23",TMNTAG_VERSION="1.3",TMNTAGVIDEOREFRESH_VERSION="1.0vr",PREBID_TIMEOUT=200,VIDEO_REFRESH_TIMEOUT=3E3,googletag=googletag||{};googletag.cmd=googletag.cmd||[];String.prototype.startsWith||(String.prototype.startsWith=function(a,b){return b=b||0,this.substr(b,a.length)===a});
Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(a,b){if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),d=c.length>>>0;if("function"!=typeof a)throw new TypeError("predicate must be a function");b=b;for(var e=0;e<d;){var f=c[e];if(a.call(b,f,e,c))return f;e++}}});"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});
function tmntag_updateAdUnitTiming(a){if(!tmntag.timing||!tmntag.timing.startTag||!tmntag.timing.loadTag)return;tmntag.timing.adunits[a]={adLoadTime:(new Date).getTime()-tmntag.timing.startTag,tagLoadTime:tmntag.timing.startTag-tmntag.timing.loadTag}}function tmntag_getAdUnitTiming(a){if(!tmntag.timing||!tmntag.timing.adunits||!tmntag.timing.adunits[a])return{adLoadTime:0,tagLoadTime:0};return tmntag.timing.adunits[a]}
function uuidv4(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=Math.random()*16|0;a=a=="x"?b:b&3|8;return a.toString(16)})}var defuuid=uuidv4();!function(){var a=document.createElement("script");a.async=true;a.type="text/javascript";a.src="//www.googletagservices.com/tag/js/gpt.js";var b=document.getElementsByTagName("script")[0]||document.getElementsByTagName("body")[0];b.parentNode.insertBefore(a,b)}();
(function(a){function b(){if(!e){e=true;for(var a=0;a<d.length;a++)d[a].fn.call(window,d[a].ctx);d=[]}}function c(){if(document.readyState==="complete")b()}baseObj=window;var d=[],e=false,f=false;baseObj[a]=function(a,k){if(e){setTimeout(function(){a(k)},1);return}else d.push({fn:a,ctx:k});if(document.readyState==="complete"||!document.attachEvent&&document.readyState==="interactive")setTimeout(b,1);else if(!f){if(document.addEventListener){document.addEventListener("DOMContentLoaded",b,false);window.addEventListener("load",
b,false)}else{document.attachEvent("onreadystatechange",c);window.attachEvent("onload",b)}f=true}}})("tmntag_ready");
(function(){var a=function(){for(var a=0;tmntagCache&&a<tmntagCache.length;a++)if(tmntagCache[a]&&tmntagCache[a].isMouseOver){var c=Math.floor(Math.random()*11E3),d=document.createElement("script");d.type="text/javascript";var e="https:"==document.location.protocol?"https://":"http://",f=(typeof window.context=="undefined"||!window.context)&&top.window.experiments?top.window.experiments:"";d.src=e+"ads.servebom.com/event.js?t=CC&id="+(top.window.requestid?top.window.requestid:0)+"&bid=&cp=0&bdrid=&crid=&e="+
f+"&ad=&r="+c;c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(d,c)}};if(window.addEventListener){window.addEventListener("blur",a);window.addEventListener("focusout",a);window.addEventListener("focus",function(){window.addEventListener("blur",a)})}})();tmntag_getAdUnit=function(a){for(var b=0;b<tmntag.a.length;b++)if(tmntag.a[b].d===a)return tmntag.a[b];return false};
tmntag_timestamp=function(){var a=new Date,b=function(a){return a<=9?"0"+a:""+a},c=a.getDate(),d=a.getFullYear(),e=a.getMonth()+1,f=a.getHours(),g=a.getMinutes(),k=a.getSeconds();a.getMilliseconds();return""+d+"-"+b(e)+"-"+b(c)+" "+b(f)+":"+b(g)+":"+b(k)};tmntag_inIframe=function(){return top!==self};tmntag_IEVersion=function(){var a=-1;if(navigator.appName=="Microsoft Internet Explorer"){var b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(c.exec(b)!=null)a=parseFloat(RegExp.$1)}return a};
tmntag_isArray=function(a){return a.constructor===Array};tmntag_getAdunitFromCache=function(a){for(var b=0;b<tmntagCache.length;b++)if(typeof tmntagCache[b].div!="undefined"&&tmntagCache[b].div==a)return tmntagCache[b];return null};tmntag_getAdunitWithPrefixFromCacheForClone=function(a,b){var c=tmntagCache.filter(function(b){return typeof b.div!=="undefined"&&b.div.indexOf(a)===0});if(c.length==0)return false;if(b&&b.resetPosition)return c[0];else return c[c.length-1]};
var tmntag_registerMouseOver=function(a){var b=tmntag_getAdunitFromCache(a);a=document.querySelector("#"+a+" iframe");if(b&&a){a.addEventListener("mouseover",function(){b.isMouseOver=true});a.addEventListener("mouseout",function(){b.isMouseOver=false})}},tmntag_processInContent=function(a){var b=tmntag.getAdParameters(a,"incontent_css_selector");if(b){tmntag.getAdParameters(a,"incontent_position");MultipleIncontent(a,b)}},tmntag_isInlineMarkup=function(a){if(tmntag.instartlogicEnabled())return true;
return tmntag&&tmntag.markupsInfo&&tmntag.markupsInfo[a]&&tmntag.markupsInfo[a].inline},tmntag_inlineMarkup=function(a){var b=false,c=tmntag_getAdunitFromCache(a);if(!c||!tmntag_isInlineMarkup(a))return b;tmntag_processInContent(a);var d=document.getElementById(a);if(!d)return b;var e=tmntag.markupsInfo[a];if(e&&c){c=a+"_tmntag_inline_";if(b=document.getElementById(c))d.removeChild(b);b=document.createElement("div");b.id=c;b.style.border="0pt none";b.style.display="inline-block";b.style.width=(e.width||
0)+"px";b.style.height=(e.height||0)+"px";b.style.margin="0px";b.style.padding="0px";var f=e.iframe,c=tmntag.markups[a],c=c.replace(/'\r\n|\r|\n/gm,"");if(f||tmntag.instartlogicEnabled()){f=document.createElement("iframe");f.frameBorder=0;f.scrolling="no";f.marginwidth=0;f.marginheight=0;f.style.width=(e.width||0)+"px";f.style.height=(e.height||0)+"px";f.style.border="0pt none";f.style.margin="0px 0 0";f.width=e.width||0;f.height=e.height||0;b.appendChild(f);d.appendChild(b);d='<!DOCTYPE html><body marginheight="0" marginwidth="0">'+
c+"</body></html>";f.contentDocument.open();f.contentDocument.write(d);f.contentDocument.close()}else{b.innerHTML=c;d.appendChild(b)}tmntag.onInlineAdunitRendered({divid:a,size:{width:e.width||0,height:e.height||0}});b=true}return b},tmntag_defineAdUnit=function(a){var b=tmntag_getAdunitFromCache(a);if(typeof b.adunitRule==="undefined")if(b.refresh===1){tmntag_defineSlot(a,{},true);b.refresh=0}else{if(tmntag.f!==1)tmntag_defineSlot(a)}else{if(b.refresh===1){tmntag_defineSlot(a,{},true);b.refresh=
0}tmntag.enableSingleRequest();tmntag.disableInitialLoad()}},tmntag_defineSlot=function(a,b,c){var d,e=tmntag_getAdUnit(a),f=tmntag_getAdunitFromCache(a);try{if(tmntag_isInlineMarkup(a)){tmntag_inlineMarkup(a);return null}}catch(k){console&&console.error&&console.error(k);return null}if(!c){tmntag_processInContent(a);if(e.z)d=googletag.defineSlot(e.s,e.z,e.d).addService(googletag.pubads());else{if(d=document.getElementById(e.d))d.style.height="0px";d=googletag.defineOutOfPageSlot(e.s,e.d).addService(googletag.pubads())}if(e.c)d.addService(googletag.companionAds().setRefreshUnfilledSlots(e.c));
if(f&&typeof f.sizeMapping!="undefined")d.defineSizeMapping(f.sizeMapping);tmntag.slots[a]=d}else d=tmntag.slots[a];if(b=b||e&&e.g)for(var g in b)if(b.hasOwnProperty(g))d.setTargeting(g,b[g]);if(typeof tmntag.adtargets!="undefined"){a=tmntag.adtargets[e.d];if(typeof a!="undefined"&&tmntag.localAdtargets&&typeof tmntag.localAdtargets[e.d]!="undefined")for(b=0;b<tmntag.localAdtargets[e.d].length;b++)a.push(tmntag.localAdtargets[e.d][b]);if(c&&d)d.clearTargeting();for(b=0;d&&typeof a!="undefined"&&b<
a.length;b++){if(a[b][0]==="_bd"&&a[b][1]==="deal")a[b][1]="bid";if(typeof tmntag_disablertb!="undefined"&&tmntag_disablertb&&a[b][0]==="_br")continue;d.setTargeting(a[b][0],a[b][1])}}return d},tmntag_setGptLoaded=function(){tmntag_gptloaded=true},tmntag_clientDim=function(){try{w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return w+"x"+h}catch(a){console.error(a)}},tmntag_autorefresh=
function(a){if(!tmntag.getAdParameters(a,"auto_refresh_enabled"))return;if(typeof tmntag.slots[a]!="undefined"){var b=tmntag.slots[a].getTargetingMap()._bd;if(typeof b=="undefined"||b!="none")return}else return;var c=tmntag_getAdunitFromCache(a),d=c.auto_refresh_count||0,e=20,b=parseInt(tmntag.getAdParameters(a,"auto_refresh_limit"),10)||1,f=parseInt(tmntag.getAdParameters(a,"auto_refresh_delay"),10)||6E4;if(d==b)return;setTimeout(function(){if(tmntag_inview(a,e)){c.auto_refresh_count=d+1;console.log("-- RAMP -- autoref",
a,c.auto_refresh_count);tmntag.refresh(a)}},f)},tmntag_inview=function(a,b,c){b=b||0;c=c||"visible";if(document.querySelector("#"+a)!==null){var d=document.querySelector("#"+a).getBoundingClientRect(),e=Math.max(document.documentElement.clientHeight,window.innerHeight);a=d.bottom-b<0;b=d.top-e+b>=0;return c==="above"?a:c==="below"?b:!a&&!b}},tmntag_topLocation=function(){try{return window.context&&window.context.location&&window.context.location.href?window.context.location.href:window.top.document.location.href}catch(a){return window.document.referrer}},
tmntag_referrer=function(){try{return window.context&&window.context.referrer?window.context.referrer:window.top.document.referrer}catch(a){return""}};tmntag_supportsFlash=function(){var a=1;try{if(navigator.mimeTypes&&navigator.mimeTypes.length>0){var b=navigator.mimeTypes["application/x-shockwave-flash"];if(b&&b.enabledPlugin)a=1}else if(typeof ActiveXObject!="undefined")try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash.1");a=1}catch(c){}}catch(c){console&&console.error&&console.error(exception)}return a};
tmntag_gptloaded=false;tmntag_callbacks=new function(){this.callback=[];this.callback_executed=[];this.pushCallback=function(a,b){if(typeof b!=="undefined")this.callback.push({callback:a,params:b});else this.callback.push({callback:a})};this.executeCallbacks=function(){var a=this.callback.length;if(a>0)for(var b=0;b<a;){var c=this.callback[0];if(typeof c.params!=="undefined")c.callback.apply(null,c.params);else c.callback();this.callback.splice(0,1);this.callback_executed.push(c);b++}}};
tmntag_il=true;var tmntag=tmntag||{},tmntagCache=[];tmntag.cmd=tmntag.cmd||[];tmntagDisplayed={};tmntag.timing={};tmntag.timing.adunits={};tmntag.timing.start=(new Date).getTime();tmntag.sr=true;tmntag.ced=true;tmntag.a=[];tmntag.slots={};tmntag.l=encodeURIComponent(tmntag_topLocation().replace("%",""));tmntag.tt=encodeURIComponent(document.title);tmntag.t=tmntag_timestamp();tmntag.tz=Math.round((new Date).getTimezoneOffset());tmntag.r=tmntag_clientDim();tmntag.su=0;tmntag.fs=tmntag_supportsFlash();
tmntag.disabledAdunits=[];tmntag.disableDFPRefresh=false;tmntag.onAdunitRenderedCallbackFunction=function(){};tmntag.video=tmntag.video||{};tmntag.video.settings={};tmntag.video.status={};tmntag.safeFunctionCall=function(a,b){if(typeof window[a]=="function")return window[a].apply();else return b||""};tmntag.instartlogicEnabled=function(){return window.I11C&&window.I11C.Morph===1};tmntag.placementCustomID=function(a){tmntag.pc=a};
tmntag.getAdParameters=function(a,b){if(typeof a==="undefined")return tmntag&&tmntag.adparams;else if(typeof b==="undefined")return tmntag&&tmntag.adparams&&tmntag.adparams[a];else return tmntag&&tmntag.adparams&&tmntag.adparams[a]&&tmntag.adparams[a][b]};tmntag.placement=function(a){tmntag.p=a};tmntag.account=function(a){if(a)a=a.replace(/\t|\s+/gm,"");tmntag.s=a};tmntag_removeByAttrValue=function(a,b,c){for(var d=a.length-1;d>=0;d--){var e=a[d];if(e[b]&&e[b]===c)a.splice(d,1)}};
tmntag.adunit=function(a){if(tmntag.disabledAdunits.find(function(b){return b===a.div}))return;var b=tmntag_getAdunitFromCache(a.div);if(b){for(prop in a)b[prop]=a[prop];a=b}b={};if(a.account)b.s=a.account;else if(tmntag.s)b.s=tmntag.s;if(a.sizes)b.z=a.sizes;if(a.div)b.d=a.div;if(a.targeting){b.g=a.targeting;a.atf=a.targeting._a}else b.g={};if(a.atf)if(a.atf=="1")b.a="true";else if(a.atf=="0")b.a="false";if(a.companion)b.c=a.companion;if(a.div){tmntag_removeByAttrValue(tmntag.a,"d",a.div);tmntag_removeByAttrValue(tmntagCache,
"div",a.div)}if(a.sizeMapping)b.sm=a.sizeMapping;tmntag.a.push(b);tmntagCache.push(a);return b};tmntag.adunitTarget=function(a,b,c){if(typeof a=="object")a.g[b]=c;else if(typeof a=="string"){tmntag.localAdtargets=tmntag.localAdtargets||[];tmntag.localAdtargets[a]=tmntag.localAdtargets[a]||[];tmntag.localAdtargets[a].push([b,c])}};
tmntag.target=function(a){try{if(typeof a!="object"||a instanceof Array)return;if(!tmntag.g)tmntag.g=a;for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];if(c&&tmntag_isArray(c)){for(var d=0;d<c.length;d++){c[d]=c[d]+"";c[d]=c[d].replace(/'|;|quot;|39;|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm,"");c[d]=c[d].replace(/\%/gm,"")}tmntag.g[b.replace(/'|&|#/g,"")]=c}else if(c){b=b.replace(/'|&|#/g,"");c+="";tmntag.g[b]=c.replace(/'|;|quot;|39;|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm,
"");tmntag.g[b]=tmntag.g[b].replace(/\%/gm,"")}}}catch(e){return console&&console.error&&console.error(e)}};tmntag.location=function(a){tmntag.l=encodeURIComponent(a);tmntag.su=1};
tmntag.adTag=function(a,b){try{if(tmntag.disabledAdunits.find(function(b){return b===a}))return;var c=tmntag_getAdunitFromCache(a);if(!c||c===null){if((typeof b=="undefined"||b)&&!document.getElementById(a)){tmntag_callbacks.pushCallback(tmntag.adTag,[a,false]);if(typeof b=="undefined")document.write('<div id="'+a+'"></div>')}else if(typeof b=="undefined")tmntag_callbacks.pushCallback(tmntag.adTag,[a]);else tmntag_callbacks.pushCallback(tmntag.adTag,[a,b]);return}var d=typeof c.adunitRule!=="undefined"&&
typeof c.adunitRule=="function"&&c.adunitRule(a)==true;if(typeof c.adunitRule=="undefined"||d){if((typeof b=="undefined"||b)&&!document.getElementById(a))document.write('<div id="'+a+'"></div>');if(!c.sizes){var e=document.getElementById(a);if(e)e.style.height="0px"}tmntag_applyAdunitStyle(a);if(d)googletag.cmd.push(function(){if(document.getElementById(a)&&tmntag){if(tmntag.slots&&!tmntag.slots[a])if(c.refresh===1){slot=tmntag_defineSlot(a,{},true);c.refresh=0}else slot=tmntag_defineSlot(a);(new Date).getTime();
googletag.display(a)}else tmntagDisplayed[a]=1});else googletag.cmd.push(function(){if(document.getElementById(a)&&tmntag&&tmntag.slots&&tmntag.slots[a]){(new Date).getTime();googletag.display(a)}else tmntagDisplayed[a]=1})}}catch(f){return console&&console.error&&console.error(f)}};
tmntag.loadScript=function(a,b,c){var d=typeof c!=="undefined"&&c!=null,e=typeof b==="function",f=document.createElement("script");f.async=true;f.src=a;a=document.getElementsByTagName("script")[0];var g;if(d)g=setTimeout(function(){clearTimeout(g);if(e)b()},c);else if(e)f.onload=b;a.parentNode.insertBefore(f,a)};
tmntag_filterAdUnitsByIds=function(a,b,c,d){var e=[],f=b;if(!d&&c&&typeof tmntag.disableDFPRefresh!="undefined"&&tmntag.disableDFPRefresh){f=[];for(c=0;tmntag.markupsInfo&&b&&c<b.length;c++){d=b[c].d;if(typeof a=="string"&&d!=a)continue;if(typeof a!="undefined"&&tmntag_isArray(a)&&a.indexOf(d)<0)continue;if(d&&tmntag.markupsInfo[d]){d=tmntag.markupsInfo[d];if(d.rtbSold)f.push(b[c])}}}if(!a||!a.length)e=f;else{b=[];if(!(a instanceof Array))b.push(a);else b=a;c=0;for(a=f.length;c<a;c++)if((d=f[c])&&
d.d&&b.indexOf(d.d)>-1)e.push(d)}return e};tmntag.cookies={};tmntag.cookies.get=function(a){var b="; "+document.cookie;a=b.split("; "+a+"=");if(a.length===2)return a.pop().split(";").shift()};tmntag.cookies.getAll=function(){return document.cookie.split("; ").reduce(function(a,b){var c=b.indexOf("=");a[b.substr(0,c)]=b.substr(c+1);return a},{})};tmntag.cookies.set=function(a,b,c){var d=new Date;d.setTime(d.getTime()+c*1E3);c="expires="+d.toUTCString();document.cookie=a+"="+b+";"+c+";path=/"};
tmntag_getFacebookId=function(){var a=tmntag.cookies.get("up_28");if(typeof a!="undefined")return a};tmntag_getDigitrustId=function(){var a=tmntag.cookies.get("DigiTrust.v1.identity");if(typeof a!="undefined"){a=JSON.parse(atob(decodeURIComponent(a)));return encodeURIComponent(btoa(JSON.stringify({id:a.id,keyv:a.keyv})))}};tmntag.addCookies=function(){var a={},b=tmntag_getFacebookId();if(typeof b!="undefined")a.up_28=b;b=tmntag.cookies.get("D_TOKEN");if(typeof b!="undefined")a.D_TOKEN=b;return a};
tmntag.getParams=function(){if(window.location.search==="")return{};return window.location.search.substr(1).split("&").reduce(function(a,b){var c=b.indexOf("=");a[b.substr(0,c)]=b.substr(c+1);return a},{})};tmntag.setPersonalizedAdsMode=function(a){this.mode=a};tmntag.getPersonalizedAdsMode=function(){return this.mode||"allowed"};function tmntag_formateMacromapList(a){if(!a||a.indexOf("$")===0)return[];return a.split("|")}
function tmntag_currentDomainIsInList(a){a=a.find(function(a){return document.location.hostname.indexOf(a)!==-1});return!!a}
(function(){var a=tmntag_formateMacromapList("fredzone.org|homecinema-fr.com|lemondenumerique.com|objetconnecte.net|realite-virtuelle.com|tomshw.it"),b=tmntag_formateMacromapList("buzzarena.com|clubic.com|dailygeekshow.com|driverscloud.com|frandroid.com|frawin.com|futura-sciences.com|gamergen.com|generation-nt.com|hitek.fr|iaddict.com|iphoneaddict.fr|kulturegeek.fr|legeekcestchic.eu|monwindows.com|numerama.com|phonandroid.com|tablette-tactile.net|tomsguide.fr|tomshardware.co.uk|tomshardware.fr|zebulon.fr"),c=tmntag_formateMacromapList("anandtech.com|coinranking.com|laptopmag.com|livescience.com|newsarama.com|shopsavvy.com|space.com|tomsguide.com|tomshardware.com|tomsitpro.com|toptenreviews.com"),d=tmntag_formateMacromapList("activejunky.com|afterdawn.com|anandtech.com|androidcentral.com|appadvice.com|business.com|businessnewsdaily.com|buzzarena.com|clubic.com|computing.net|connectedly.com|crackberry.com|curiosity.com|dailydot.com|dailygeekshow.com|driverscloud.com|frandroid.com|frawin.com|fredzone.org|futura-sciences.com|gadgethacks.com|gamepressure.com|gamergen.com|generation-nt.com|hitek.fr|homecinema-fr.com|howtogeek.com|iaddict.com|idownloadblog.com|imore.com|iphoneaddict.fr|kulturegeek.fr|laptopmag.com|legeekcestchic.eu|lemondenumerique.com|livescience.com|macrumors.com|modmy.com|monwindows.com|newegg.ca|newegg.com|newegg.tv|newsarama.com|nextreality.com|numerama.com|objetconnecte.net|phonandroid.com|realite-virtuelle.com|sciencealert.com|shopsavvy.com|space.com|tablette-tactile.net|thg.ru|tomsguide.com|tomsguide.fr|tomshardware.co.uk|tomshardware.com|tomshardware.fr|tomshw.it|tomsitpro.com|toptenreviews.com|venturebeat.com|webosnation.com|windowscentral.com|wonderhowto.com|xda-developers.com|zebulon.fr");tmntag.setPersonalizedAdsMode("allowed");if(window.gdprFeatureActivated||tmntag_currentDomainIsInList(d))if(tmntag_currentDomainIsInList(a))tmntag.setPersonalizedAdsMode("blocked");
else if(tmntag_currentDomainIsInList(b))tmntag.setPersonalizedAdsMode("managed");else if(window.gdprUser)if(tmntag_currentDomainIsInList(c))tmntag.setPersonalizedAdsMode("managed");else tmntag.setPersonalizedAdsMode("blocked")})();
tmntag_serializeState=function(a,b,c,d){var e={};if(a&&c!=="v")tmntag.f=1;e.f=a?1:"";e.p=a?"":tmntag.p;e.s=tmntag.s;e.g=tmntag.g;e.l=tmntag.l;e.tt=tmntag.tt;e.tt=e.tt.replace(/'|;|quot;|39;|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm,"");e.fs=tmntag.fs;e.a=tmntag_filterAdUnitsByIds(b,tmntag.a||[],a,d);e.t=tmntag_timestamp();e.ck=tmntag.addCookies();e.tz=Math.round((new Date).getTimezoneOffset());e.r=tmntag_clientDim();e.dgt=tmntag_getDigitrustId();e.rf=encodeURIComponent(tmntag_referrer().replace("%",
""));e.pam=tmntag.getPersonalizedAdsMode();if(a&&e.a)for(a=0;a<e.a.length;a++)if(b=tmntag_getAdunitFromCache(e.a[a].d))b.refresh=1;a=tmntag.getParams();b=decodeURIComponent(a.key);if(a.key&&atob(b).indexOf(",")!==-1){a=atob(b).split(",");e.g=e.g||{};e.g.kw=e.g.kw||[];if(typeof e.g.kw==="string")e.g.kw=[e.g.kw];e.g.kw=e.g.kw.concat(a)}return JSON.stringify(e).replace(/'|&|#/g,"")};
tmntag_refreshNoWait=function(a,b){var c=[];if(typeof a=="undefined"){googletag.pubads().refresh();return}else if(a instanceof Array)for(var d in a){var e=tmntag.slots[a[d]];if(e)c.push(e)}else if(e=tmntag.slots[a])c.push(e);if(c.length>0){for(e in c)if(b){c[e].clearTargeting();for(var f in b)if(b.hasOwnProperty(f))c[e].setTargeting(f,b[f])}googletag.pubads().refresh(c)}return console&&console.info&&console.info("-RAMP- Regular refresh "+a)};
tmntag.refresh=function(a,b){a=tmntag_filterAdUnitsByIds(a,tmntag.a||[],true,false);for(var c=[],d=0;d<a.length;d++)c.push(a[d].d);tmntag.start(true,c,function(){tmntag_refreshNoWait(c,b)})};tmntag.refreshPixels=function(){if(typeof tmntag.tmn_pixels!="undefined")for(var a=0;a<tmntag.tmn_pixels.length;a++){var b=tmntag.tmn_pixels[a];if(b.isRefreshable())b.execute()}};
tmntag_redirect=function(a,b,c){if(!a)return false;var d={cp:"__CP__",bdrid:"__BDRID__",crid:"__CRID__",ad:"__AD__",pd:"__PRODUCT_ID__",tid:"__TID__",pvid:"__PVID__"};a=typeof b==="object"?a.href:b;c=typeof b==="object"?b:c;b=Math.floor(Math.random()*11E3);var e="https:"==document.location.protocol?"https://":"http://";b=e+"ramp.purch.com/event.js?t=CL&id="+(top.window.requestid?top.window.requestid:0)+"&r="+b;c=c;e="";if(c&&d)for(var f in d)if(d.hasOwnProperty(f))if(c.hasOwnProperty(d[f]))if(f===
"pd")e+="&"+f+"=|"+c[d[f]]+"|";else e+="&"+f+"="+c[d[f]];d=e;f=b+d;d=document.createElement("script");d.type="text/javascript";d.src=f;if(f=document.getElementsByTagName("script")[0])f.parentNode.insertBefore(d,f);a=window.open(a,"_blank");a.focus();return false};
tmntag_triggerEvent=function(a,b){var c="";if(b)for(var d in b){if(c!="")c+="&";var e=b[d]+"";if(e.indexOf("$")==-1)c+=d+"="+e}d=Math.floor(Math.random()*11E3);e=tmntag.instartlogicEnabled()?"1":"";c="t="+a+"&r="+d+"&abr="+e+"&"+c;if(a=="CP"){if(b&&b.ts&&b.ts.indexOf("$")==-1)c=c+"&tm_alt="+(Date.now()-b.ts);if(tmntag.timing&&tmntag.timing.startTag&&tmntag.timing.loadTag)c=c+"&tm_tlt="+(tmntag.timing.startTag-tmntag.timing.loadTag)}a=document.createElement("script");a.src="//ads.servebom.com/event.js?"+
c;c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)};tmntag_disableAdunit=function(a){tmntag.disabledAdunits.push(a)};tmntag_enableAdunit=function(a){tmntag.disabledAdunits.splice(tmntag.disabledAdunits.indexOf(a),1)};tmntag.adunitNew=function(a,b){if(tmntag.disabledAdunits.find(function(b){return b===a.div}))return;tmntag.adunit(a);var c=a.div;tmntag_defineSlot(c);googletag.display(c);if(b)tmntag.refresh(c)};
tmntag.adunitClone=function(a,b,c,d){var e=function(a,b,c){if(a){var d=a.account;if(d)if((d=d.split("/"))&&d.length>0){var e=d.reverse()[0];if(e.indexOf("-")>0){if((e=e.split("-"))&&e.length>0)for(var f=0;f<e.length;f++){var g=e[f];if(g.indexOf(b)==0){g=g.substring(1);if(!isNaN(g)){g=g*1+(c+1);e[f]=b+g}}}b=e.join("-");d[0]=b;a.account=d.reverse().join("/")}}}},f=function(a){a=q.targeting||{};for(var b in a)if(a.hasOwnProperty(b)&&b==="_p"&&a[b])q.targeting[b]=1*a[b]+1};if(!("JSON"in window))return false;
var g=tmntag_getAdunitWithPrefixFromCacheForClone(a,d);if(g){var k=[];if(!tmntag_isArray(b))k=[b];else k=b;for(var m=[],p=[],l=0,n=0;n<k.length;n++){var q;b=k[n];try{q=JSON.parse(JSON.stringify(g))}catch(z){return false}q.div=b;q.targeting=q.targeting||{};if(c)for(var r in c)if(c.hasOwnProperty(r)&&c[r])q.targeting[r]=c[r];if(!d||!d.disableIncrementAccountPosition)if(d&&!d.resetPosition||n>0)e(q,"p",l++);if((!d||!d.disableIncrementPosition)&&!g.disableIncrementPosition)f(q);tmntag.adunit(q);if(g.adunitRule)if(tmntag.getAdParameters(a)&&
tmntag.getAdParameters(a).on_clone_execute_preadunitrender==="true")g.adunitRule.apply(this,[b]);var t=tmntag_defineSlot(b,q.targeting);m.push(b);p.push(t)}if(!d||!d.disableRefreshRamp)tmntag.start(true,m,function(){googletag.cmd.push(function(){for(var a=0;a<m.length;a++){googletag.display(m[a]);if(typeof tmntag_il!=="undefined"&&tmntag_il==false)googletag.pubads().refresh([p[a]])}})},null,null,null,true);else googletag.cmd.push(function(){for(var a=0;a<m.length;a++){googletag.display(m[a]);if(typeof tmntag_il!==
"undefined"&&tmntag_il==false)googletag.pubads().refresh([p[a]])}});return true}return false};tmntag.disableSingleRequest=function(){tmntag.sr=false};tmntag.disableCollapseEmptyDivs=function(){tmntag.ced=false};tmntag.enableSingleRequest=function(){tmntag.sr=true};tmntag.disableInitialLoad=function(){};tmntag.disableCollapseEmptyDivs=function(){tmntag.ced=false};
tmntag.onInlineAdunitRendered=function(a){var b=a.divid,c=tmntag_getAdunitFromCache(b),d={};d.div=b;d.adunit=c;if(a.size)d.size={width:a.size[0],height:a.size[1]};else d.size={width:0,height:0};d.isEmpty=false;d.dfpCreativeId="";d.dfpLineItemId="";c.dfpCreativeId="";c.dfpLineItemId="";d._orig=a;tmntag_registerMouseOver(b);if(typeof tmntag_adlabel!="undefined"&&tmntag_adlabel)tmntag_adlabel.render(b,d);tmntag.onAdunitRenderedCallbackFunction(d);if(c&&c.onAdunitRendered&&typeof c.onAdunitRendered===
"function")c.onAdunitRendered(a);tmntag_updateAdUnitTiming(b)};function tmntag_arrayToObject(a,b,c){c=c||{};return a.reduce(function(a,c){if(b.indexOf(c[0])!==-1)a[c[0]]=c[1];return a},c)}
tmntag.onAdunitRenderedPrivate=function(a){var b=a.slot.getSlotId().getDomId(),c=tmntag_getAdunitFromCache(b),d={};d.div=b;d.adunit=c;if(a.size&&a.size[0]>1&&a.size[1]>1)d.size={width:a.size[0],height:a.size[1]};else if(tmntag.markupsInfo&&tmntag.markupsInfo[b])d.size={width:tmntag.markupsInfo[b].width,height:tmntag.markupsInfo[b].height};else d.size={width:0,height:0};d.isEmpty=a.isEmpty;d.dfpCreativeId=a.creativeId;d.dfpLineItemId=a.lineItemId;if(c){c.dfpCreativeId=a.creativeId;c.dfpLineItemId=
a.lineItemId}d._orig=a;tmntag_registerMouseOver(b);if(typeof tmntag_adlabel!="undefined"&&tmntag_adlabel)tmntag_adlabel.render(b,d);tmntag_updateAdUnitTiming(b);if(tmntag.adunitServedEvent&&d.size.width>1&&d.size.height>1){var e={};if(tmntag.markupsInfo&&tmntag.markupsInfo[b]){e.bidderid=tmntag.markupsInfo[b].bidderid;e.adomain=tmntag.markupsInfo[b].adomain}if(tmntag.adtargets&&tmntag.adtargets[b])e=tmntag_arrayToObject(tmntag.adtargets[b],["_cp","_pl","_pdid","_wb"],e);if(tmntag.pubtargets)e=tmntag_arrayToObject(tmntag.pubtargets,
["_ex","_rid"],e);var f=e._pdid||"",g=e.adomain||"",k=e._cp||"",m=e._pl||"",p=e.bidderid||"3003",l=tmntag_getAdUnitTiming(b);tmntag_triggerEvent("AS",{id:e._rid,pdid:f,bid:e._wb,cp:k,pl:m,bdrid:p,ad:encodeURIComponent(g),e:e._ex,l:encodeURIComponent(tmntag_topLocation()),z:d.size.width+"x"+d.size.height,crid:encodeURIComponent(b),tm_alt:l.adLoadTime,tm_tlt:l.tagLoadTime})}tmntag.onAdunitRenderedCallbackFunction(d);if(c&&c.onAdunitRendered&&typeof c.onAdunitRendered==="function")c.onAdunitRendered(a);
if(c)tmntag_autorefresh(b)};tmntag.onAdunitViewablePrivate=function(a){a=a.slot.getSlotId().getDomId();a=tmntag_getAdunitFromCache(a);a.viewable=true};tmntag.onAdunitRendered=function(a){a=typeof a==="function"?a:function(){};this.callbacks=this.callbacks||[];this.callbacks.push(a);tmntag.onAdunitRenderedCallbackFunction=function(){var a=arguments;this.callbacks.forEach(function(c){c.apply(null,a)})}.bind(this)};tmntag_executingStart=false;
tmntag.start=function(a,b,c,d,e,f,g){var k=function(a,b,c,d,g){if(tmntag_executingStart&&!a)return;if(!a){tmntag.enableSingleRequest();googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(a){tmntag.onAdunitRenderedPrivate(a)});googletag.pubads().addEventListener("impressionViewable",function(a){tmntag.onAdunitViewablePrivate(a)})})}tmntag_executingStart=true;var k,t=Math.floor(Math.random()*11E3),z=tmntag_findURL(),y=[];if(typeof amznads!="undefined"&&amznads!=
null&&typeof amznads.getTokens==="function"){var u=amznads.getTokens();if(u!=null&&u.length>0){u=u.join();u=u.replace("kindle_pur_3x6","a3x6p100");y.push({br:6,bs:u})}}if(typeof prebidSlots==="object"&&prebidSlots!=null)for(var A in prebidSlots)if(prebidSlots.hasOwnProperty(A)){var u=prebidSlots[A],B=[];for(k in u){var x=u[k];if(typeof x==="object")B.push("a"+x.width+"x"+x.height+"p"+x.cpm+":"+x.ad)}if(B.length>0)y.push({br:A,bs:B.join()})}var v="r="+t+"&o="+tmntag_serializeState(a,b,f,g);if(typeof defuuid!=
"undefined")v+="&uuid="+defuuid;if(typeof Purch!="undefined"&&typeof Purch.calypso!="undefined"&&Purch.calypso.pvid)v+="&pvid="+Purch.calypso.pvid;if(y.length>0)v+="&j="+JSON.stringify(y);if(!e)e=TMNTAG_VERSION;if(f)v+="&at="+f;else v+="&at=bnj";if(tmntag.instartlogicEnabled())v+="&abr=1";if(!a)tmntag.cmd.push(function(){tmntag.loadScript(z+"tmntag.js?v="+e+"&"+v)});else tmntag.loadScript(z+"tmntag.js?v="+e+"&"+v,c,d);tmntag.timing.loadTag=(new Date).getTime()};if(a)amznads=null;if(typeof amznads!=
"undefined"&&amznads&&amznads.asyncParams)setTimeout(function(){k(a,b,c,d,g)},PREBID_TIMEOUT);else{PREBID_TIMEOUT=0;k(a,b,c,d,g)}};tmntag_findURL=function(){for(var a=0;a<document.scripts.length;a++){var b=document.scripts[a],c=b.src.indexOf("tmnhead.js");if(c>0)return b.src.substring(0,c)}return"http://ads.servebom.com/"};
tmntag_passback=function(a,b){if(!b)return;var c=b.split("|");if(c.length==1)tmntag_render(a,b);if(c.length>=4){b=tmntag_render(a,c[0]);if(!b)a.write("<scr"+'ipt type="text/javascript">google_ad_client = "ca-pub-5787592483766760";'+'\ngoogle_ad_slot = "'+c[3]+'";'+"\ngoogle_ad_width = "+c[1]+";"+"\ngoogle_ad_height = "+c[2]+";"+"</scr"+"ipt>"+"<scr"+'ipt type="text/javascript" src="//pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+"ipt>")}};
tmntag_applyAdunitStyle=function(a){adParams=tmntag.getAdParameters(a);if(!adParams)return;var b=adParams.adunit_style;if(b){a=document.getElementById(a);for(var b=b.trim().split(";"),c=0;c<b.length;c++){if(b[c]==="")continue;style=b[c].split(":");var d=null;if(!style[1])continue;if(style[1].indexOf("!important")>=0){style[1]=style[1].replace("!important","");d="important"}a.style.setProperty(style[0].trim(),style[1].trim(),d)}}};
tmntag.video.logError=function(a){if(tmntag.video.triggerErrorEventEnabled)tmntag_triggerEvent("VE",{crid:a.code,ad:encodeURIComponent(a.tag)});console.log("-RAMP VIDEO- Error",a)};
tmntag.video.logImpression=function(a,b){var c={};if(tmntag.markupsInfo&&tmntag.markupsInfo[b]){c.bidderid=tmntag.markupsInfo[b].bidderid;c.adomain=tmntag.markupsInfo[b].adomain}if(tmntag.vadtargets&&tmntag.vadtargets[b])c=tmntag_arrayToObject(tmntag.vadtargets[b],["_cp","_pl","_pdid","_wb","_puids"],c);if(tmntag.pubtargets)c=tmntag_arrayToObject(tmntag.pubtargets,["_ex","_rid"],c);if(c.bidderid){b=c._pdid?c._pdid:"";var d=c._puids?c._puids:"",e=c.adomain?c.adomain:"";tmntag_triggerEvent("CP",{id:c._rid,
pdid:b,puids:d,bid:c._wb,cp:c._cp,pl:c._pl,z:"540x304",bdrid:c.bidderid,ad:encodeURIComponent(e),e:c._ex,l:encodeURIComponent(tmntag_topLocation())})}console.log("-RAMP VIDEO- Impression",a)};
function tmntag_videoBeforePlayListItem(a,b,c){console.log("-RANP Video- tmntag_videoBeforePlayListItem");var d=b.createInstream().init(),e,f=new Promise(function(b){e=b;tmntag.vadtargets=[];tmntag.markupsInfo=tmntag.markupsInfo||{};tmntag.markupsInfo[a]=[];if(typeof tmntag.video.status[a].fetch_count=="undefined")tmntag.video.status[a].fetch_count=0;var d=tmntag_getAdunitFromCache(a);if(typeof d=="undefined"||!d){d={div:c,sizes:[540,304]};if(typeof tmntag.video.status[a].player_settings!=="undefined")d.targeting=
{apv:tmntag.video.status[a].player_settings.autostart?1:0};tmntag.adunit(d)}tmntag.videoRefresh(c,function(){b()})}),g=setTimeout(function(){console.log("-RANP Video- TIMEOUT",VIDEO_REFRESH_TIMEOUT);e()},VIDEO_REFRESH_TIMEOUT);f.then(function(){d.destroy();var a=tmntag.video.adTag(c,b.id);if(a)b.playAd(a);else b.play();clearTimeout(g)})}
tmntag.video.start=function(a,b,c,d,e){if(typeof b.advertising=="undefined")b.advertising={client:"googima"};if(tmntag.instartlogicEnabled())b.advertising.client="vast";b.advertising.autoplayadsmuted=true;b.advertising.vpaidcontrols=true;b.advertising.creativeTimeout=2E4;b.advertising.requestTimeout=2E4;b.advertising.loadVideoTimeout=2E4;b.advertising.adsRequestTimeout=2E4;b.advertising.maxRedirects=6;if(typeof d=="undefined"||!d)d=a;if(e)c.setup(b);tmntag.video.status[a]={};tmntag.video.status[a].errors=
[];tmntag.video.status[a].impressions=[];tmntag.video.status[a].player_settings=b;tmntag.video.status[a].player=c;jwplayer().on("adError",function(b){tmntag.video.logError(b);tmntag.video.status[a].errors.push(b)});jwplayer().on("adImpression",function(b){tmntag.video.logImpression(b,d);tmntag.video.status[a].impressions.push(b)});c.on("playlistItem",function(){c.once("beforePlay",function(){tmntag_videoBeforePlayListItem(a,c,d)})})};
tmntag.video.autostarted=function(a,b){if(tmntag.video.status[a]&&tmntag.video.status[a].player_settings)tmntag.video.status[a].player_settings.autostart=b};
tmntag.video.adTag=function(a,b){var c=function(a,b){var c="",d=tmntag_getAdunitFromCache(a);if(d&&d.account)c=d.account;else{var m=tmntag_getAdUnit(a);if(m&&m.s)c=m.s;else if(typeof tmntag.s!="undefined"&&tmntag.s)c=tmntag.s}var p;if(tmntag.l&&tmntag.su==1)p=tmntag.l.replace("%","");else p=encodeURIComponent(tmntag_topLocation().replace("%",""));var l="__item-title__",m=tmntag.vadtargets,n=tmntag.pubtargets;a=tmntag.adtargets[a];var q=tmntag.isMobile()?"480x270":"640x480",c=["sz="+q,"iu="+c,"ciu_szs=728x90,300x250",
"impl=s","gdfp_req=1","env=vp","output=xml_vast3","unviewed_position_start=1","url="+p,"correlator=__timestamp__"],r=["plID="+b,"ttID=__item-mediaid__","vdbl=yes","vvid_title="+l,"pos=preroll"];if(d.targeting)Object.keys(d.targeting).forEach(function(a){r.push(a+("="+d.targeting[a]))});b="https://pubads.g.doubleclick.net/gampad/ads";l=false;if(typeof n!="undefined")for(var t in n)r.push(n[t][0]+"="+n[t][1]);if(typeof a!="undefined")for(t in a)r.push(a[t][0]+"="+a[t][1]);if(typeof m!="undefined")for(t in m){n=
m[t];for(a=0;typeof n!="undefined"&&a<n.length;a++){if(n[a][0]==="_vst"){l=n[a][1];l=l.split("/");if(l.length>1){l=l[l.length-2]+"/"+l[l.length-1];r.push("_vst="+l)}}else r.push(n[a][0]+"="+n[a][1]);l=true}if(l)break}return b+"?"+c.join("&")+"&cust_params="+encodeURIComponent(r.join("&"))},d=function(a,b){var c=tmntag.vadtargets;b=a=0;if(typeof c!="undefined")for(var d in c)for(var m=c[d],p=0;typeof m!="undefined"&&p<m.length;p++){if(m[p][0]==="_vst"){var l=m[p][1],l=l.split("/");if(l.length>1)a=
a=l[l.length-2]+"/"+l[l.length-1]}if(m[p][0]==="_vrg")b=m[p][1]}d="s3.amazonaws.com/purch-us-standard-adserver-prod";if(b==="or")d="s3-us-west-2.amazonaws.com/purch-us-west-2-adserver-prod";else if(b==="eu")d="s3-eu-west-1.amazonaws.com/purch-eu-west-1-adserver-prod";b=Math.floor(Math.random()*11E3);c="";if(a)c="https://"+d+"/vast/"+a+"?cb="+b;return c};if(tmntag.instartlogicEnabled())a=d(a,b);else a=c(a,b);console.log("-RAMP VIDEO- Video Tag: "+a);return a};
tmntag.videoRefresh=function(a,b){console.log("-RAMP VIDEO- Refresh");var c=function(){};if(typeof b=="function")c=b;tmntag.start(true,a,c,null,TMNTAGVIDEOREFRESH_VERSION,"v")};
tmntag_render=function(a,b){var c=false;if(typeof tmntag.markups!="undefined"){var d=tmntag.markups[b];if(typeof d!="undefined"&&d!=null){d=d.replace("a3x6p100","kindle_pur_3x6");d=d.replace(/'\r\n|\r|\n/gm,"");if(tmntag_checkIfLazyLoaded(b)){var e=tmntag_debounce(function(){if(tmntag_inview(b)){document.removeEventListener("scroll",e);tmntag_writeToDocument(a,b,d)}},50);document.addEventListener("scroll",e);e()}else{tmntag_writeToDocument(a,b,d);c=true}}}return c};
tmntag_checkIfLazyLoaded=function(a){var b=false;if("undefined"!==typeof tmntag.adtargets&&"undefined"!==typeof tmntag.adtargets[a])tmntag.adtargets[a].forEach(function(a){b=b||a[0]==="_ll"&&a[1]});return b};
tmntag_writeToDocument=function(a,b,c){var d=tmntag.markupsInfo[b].width,e=tmntag.markupsInfo[b].height;if(typeof confiantWrapWithCallback==="function"&&CONFIANT_WRAPPER_ID){var f=tmntag.markupsInfo[b].biddername,g="purch_"+f;c={ad:c,bidder:g,size:d+"x"+e,cpm:tmntag.adtargets[b]&&tmntag.adtargets[b].find(function(a){return a[0]==="_cp"})[1]};f=function(a,c,f,l,n,q){tmntag_triggerEvent("CB",{bdrid:tmntag.markupsInfo[b].bidderid||0,tid:g+":"+d+"x"+e,crid:c,ad:a,cp:q.prebid.cpm,id:window.requestid})};
if(!confiantWrapWithCallback(a,c,"clarium.global.ssl.fastly.net",CONFIANT_WRAPPER_ID,f)){a.write(c.ad);a.close()}}else{a.write(c);a.close()}if(c=tmntag.slots[b])c.setTargeting("_bd","none");if(c=tmntag.markupsInfo[b])c.rtbSold=true;if(a.defaultView&&a.defaultView.frameElement){c=d+"px";f=e+"px";a.defaultView.frameElement.width=c;a.defaultView.frameElement.height=f;if(tmntag_inIframe()&&self&&self.frameElement){self.frameElement.width=c;self.frameElement.height=f}}};
tmntag_debounce=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null;if(!c)a.apply(e,f)},k=c&&!d;clearTimeout(d);d=setTimeout(g,b);if(k)a.apply(e,f)}};tmntag_ready(function(){if(tmntag)for(var a=0;a<tmntag.a.length;a++)tmntag_inlineMarkup(tmntag.a[a].d)});tmntag.multipleInContentSelectors=tmntag.multipleInContentSelectors||[];
tmntag.multipleInContent=function(a,b){var c=tmntag.multipleInContentSelectors[a];if(!c&&typeof b!="undefined"&&typeof b!=null&&b&&b.selector)c=b.selector;if(c)MultipleIncontent(a,c,true)};
var MultipleIncontent=function(a,b,c){tmntag.multipleInContentSelectors[a]=b;this.insertAfter=function(a,b){b.parentNode.insertBefore(a,b.nextSibling)};if(!a||!b)return false;var d=[],e=document.querySelectorAll(b);if(e.length){for(var f=0,g=e.length;f<g;f++){if(e[f].className.indexOf("ramp-incontent")>=0)continue;if(f==0){var k=document.getElementById(a);if(!k)k=document.createElement("div");k.id=a;this.insertAfter(k,e[f])}else{var k=a+"-"+f+(new Date).getTime(),m=document.createElement("div");m.id=
k;m.className="purchrtb-dynamic";this.insertAfter(m,e[f]);d.push(k)}e[f].className+=" ramp-incontent"}if(c)tmntag.adunitClone(a,d,null,{disableRefreshRamp:0,resetPosition:1})}return document.querySelectorAll(b).length>0},tmntag_cloneDynamicZonesRan=false,tmntag_onAdTagReady=function(){if(!tmntag_cloneDynamicZonesRan)tmntag_cloneDynamicZones(false)},tmntag_cloneDynamicZones=function(a){tmntag_cloneDynamicZonesRan=1;for(var b=document.querySelectorAll(".purchrtb-dynamic"),c={},d=0,e=b.length;d<e;d++){var f=
b[d].id.lastIndexOf("-");if(f>0){f=b[d].id.substring(0,f);if(!c[f])c[f]=[];c[f].push(b[d].id)}b[d].className=b[d].className.replace("purchrtb-dynamic","")}for(var g in c)tmntag.adunitClone(g,c[g],null,{disableRefreshRamp:a})};tmntag.cmd.executeCommands=function(){for(;i=tmntag.cmd.shift();)if(typeof i==="function")i()};tmntag.cmd.push=function(a){tmntag.cmd.executeCommands();if(typeof a==="function")a()};tmntag.cmd.pushDefined=true;
var tmntag_checkCommands=function(){if(!tmntag.cmd.pushDefined)setTimeout(tmntag_checkCommands,100);else tmntag.cmd.executeCommands()};tmntag_checkCommands();tmntag.apiReady=true;tmntag.timing.endHead=(new Date).getTime();
tmntag.timing.debug=function(a){var b={};b.timing={};if(a&&tmntag.timing){b.timing.ramp={};b.timing.ramp.head=tmntag.timing.endHead-tmntag.timing.start;b.timing.ramp.loadTag=tmntag.timing.loadTag-tmntag.timing.start;b.timing.ramp.startTag=tmntag.timing.startTag-tmntag.timing.loadTag;b.timing.ramp.googleEnableServices=tmntag.timing.endEnableServices-tmntag.timing.startEnableServices;b.timing.ramp.endTag=tmntag.timing.endTag-tmntag.timing.startTag;b.timing.ramp.total=tmntag.timing.endTag-tmntag.timing.start}if(window.performance){b.timing.ttfb=
window.performance.timing.responseStart-window.performance.timing.requestStart;b.timing.ttlb=window.performance.timing.responseEnd-window.performance.timing.responseStart;b.timing.ttsr=window.performance.timing.domInteractive-window.performance.timing.responseEnd}return b};
tmntag.debug=function(){var a={};a.TMNAPI_VERSION=TMNAPI_VERSION;a.PREBID_TIMEOUT=PREBID_TIMEOUT;a.TMNTAG_VERSION=TMNTAG_VERSION;a.timing=tmntag.timing.debug();a.googletag=typeof googletag!="undefined"?googletag:"none";a.initialLoadEnabled=tmntag_il;a.singleRequestEnabled=tmntag.sr;a.collapseEmptyDivs=tmntag.ced;a.tmntag=tmntag;a.tmntagCache=tmntagCache;a.tmntagDisplayed=tmntagDisplayed;a.adunits=tmntag.a;a.googleSlots=tmntag.slots;a.pageLoation=tmntag_topLocation();a.now=tmntag.t;a.timeZone=tmntag.tz;
a.browserDim=tmntag.r;a.adParameters=tmntag.adparams;a.placement=tmntag.p;a.amazonAds=typeof amznads!="undefined"?amznads:"none";a.prebidSlots=typeof prebidSlots!="undefined"?prebidSlots:"none";a.prebidAds=typeof prebidAds!="undefined"?prebidAds:"none";a.target=typeof tmntag.pubtargets!="undefined"?tmntag.pubtargets:"none";a.adunitTarget=typeof tmntag.adtargets!="undefined"?tmntag.adtargets:"none";a.adMarkups=typeof tmntag.markups!="undefined"?tmntag.markups:"none";if(googletag){var b=googletag.pubads().getSlots(),
b=b.map(function(a){a=a.getSlotElementId();var b=document.getElementById(a);if(!b)ret={Message:"Ad Slot declared in GPT, but NO DIV found on page",DIV:a,Type:"BAD !"};else ret={Message:"Checked",DIV:a,Type:"GOOD"};return ret});if(console.table)console.table(b);a.tagchecks=b}return a};
var PurchInContent=function(a){var b=function(a){return a.clone().find("script").remove().end().text().trim().length};this.isvisible=function(a){return b($("#news-content > p"))>=1350&&$("#news-content .shopping_generic, #news-content .responsiveTable, #news-content .responsiveTableCompact, #news-content .shopping_cpu, #news-content .shopping_gpu, #news-content shopping_ssd").length===0||$(".inContentAd").length>0};this.createZone=function(a){if($(".inContentAd").length>0)return MultipleIncontent(a,
".inContentAd");var c=$("body").hasClass("mobile")?500:1E3;$("#news-content > p").each(function(f){var g=b($("#news-content > p:eq("+f+")"));if(b($("#news-content > p:lt("+f+")"))+g>=c&&b($("#news-content > p:gt("+f+")"))>=350){$("#news-content > p:eq("+f+")").after($("<div id="+a+' class="zonepub zonepub17"></div>'));return false}})};var c;if(c=this.isvisible(a))this.createZone(a);return c};
tmntag.isMobile=function(){var a=false;var b=navigator.userAgent||navigator.vendor||window.opera;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
4)))a=true;return a};var tmntag_iabVendorIdMapping={11:185,"23_25_26_29_33":32,22:69,9:104,24:13,14:28,5:76,19:52,36:24,45:76,17:81,2:10,44:277,46:76,27:236};function tmntag_waitForCMP(a){if(typeof window.__cmp!=="function")return window.setTimeout(function(){tmntag_waitForCMP(a)},100);return a()}
tmntag.executeWithGDPRConsent=function(a,b){switch(tmntag.getPersonalizedAdsMode()){case "blocked":return;case "allowed":return b();case "managed":var c=tmntag_formateMacromapList("phonandroid.com|frandroid.com|generation-nt.com|gamergen.com|numerama.com|driverscloud.com|hitek.fr|tomsguide.fr|tomshardware.fr");if(tmntag_currentDomainIsInList(c))return b();else tmntag_waitForCMP(function(){window.__cmp("addEventListener","cmpReady",function(){window.__cmp("getVendorConsents",[a],function(c){if(c.vendorConsents&&c.vendorConsents[a])return b()})})})}};var userSyncPixels={};
userSyncPixels._cookiesMap=tmntag.cookies.getAll();userSyncPixels.create=function(a,b,c,d){tmntag.executeWithGDPRConsent(tmntag_iabVendorIdMapping[a],function(){if(!userSyncPixels._cookiesMap["usp."+a]){var b=tmntag_formateMacromapList(b);if(tmntag_currentDomainIsInList(b)===c)d()}tmntag.cookies.set("usp."+a,1,"604800");userSyncPixels._cookiesMap["usp."+a]=1})};
function purch_history(a){a.pvLoggingDisabled=true;a.pageHistory={};a.pageHistory[window.location.pathname]=1;(function(a){var c=a.replaceState;a.replaceState=function(d,f,g){if(typeof a.onreplacestate=="function"&&window.location.pathname!=g)a.onreplacestate(d,f,g);return c.apply(a,arguments)};var d=a.pushState;a.pushState=function(c,f,g){if(typeof a.onpushstate=="function"&&window.location.pathname!=g)a.onpushstate(c,f,g);return d.apply(a,arguments)}})(window.history);history.onreplacestate=history.onpushstate=
function(b,c,d){if(!a.onPageChangedDisabled){b=d;if(!a.pageHistory[b]){a.pageHistory[b]=1;purch_history_onNewPage(b)}}};window.purch_history_onNewPage=function(b){if(!a.pvLoggingDisabled){b={};if(a.pubtargets)b=tmntag_arrayToObject(a.pubtargets,["_ex","_rid"],b);tmntag_triggerEvent("PV",{id:b._rid,e:b._ex,l:encodeURIComponent(tmntag_topLocation())})}}}purch_history(tmntag);
tmntag.floorprices={};
tmntag.headerbidderstodrop={};try {
tmntag_ready(function() {

userSyncPixels._fragment=document.createElement("div");

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create("23_25_26_29_33","buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("iframe"),c=Math.floor(Math.random()*11E3);a.style.display="none";var b=document.location.protocol==="http:"?"http":"https";a.defer=true;a.src=b+"://ib.adnxs.com/getuid?"+b+":%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+c+"%26svc%3Dus%26id%3D23%2C25%2C26%2C29%26uid%3D$UID";userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

if(!window.gdprUser){var receiveFBToken=function(a){if(a.origin.indexOf("https://www.facebook.com")!==-1){var b="; expires="+a.data.expAfter;a=JSON.parse(a.data);document.cookie="up_28="+encodeURIComponent(a.fbToken)+b+"; path=/"}},requestToken=function(){var a=document.getElementById(frameId);a.contentWindow.postMessage("GET_FB_TOKEN_198782813737","https://www.facebook.com")},frameId="fb_iframe";if(typeof window.INSTART==="undefined"){try{var fbIframe=document.createElement("iframe");fbIframe.id=
frameId;fbIframe.width="0";fbIframe.height="0";fbIframe.frameBorder="0";fbIframe.src="https://www.facebook.com/audiencenetwork/token/v1/";document.body.appendChild(fbIframe);fbIframe.onload=function(){requestToken()}}catch(a){console.error(a)}window.addEventListener("message",receiveFBToken,false)}};

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create("51_52_53_54","buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("span"),c=Math.floor(Math.random()*11E3);a.style.display="none";var d=document.location.protocol==="https:"?"https":"http",b=document.createElement("iframe");b.style.display="none";b.src="//sync.mathtag.com/sync/img?mt_exid=66&redir="+encodeURIComponent(d+"://ads.servebom.com/partner?cb="+c+"&svc=us&id=51%2C52%2C53%2C54&uid=[MM_UUID]");a.appendChild(b);userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create("22","buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("span"),b=Math.floor(Math.random()*11E3);a.style.display="none";var c=document.location.protocol==="https:"?"https":"http";a.innerHTML='<iframe style="display:none" src="//us-u.openx.net/w/1.0/cm?id=de2d90e5-4d26-4c8c-a342-3edcde51fdb1&ph=25af9286-f23b-4b02-abcd-f2ee3b564dab&r='+c+"%3A%2F%2Fads.servebom.com%2Fpartner%3Fcd%3D"+b+'%26svc%3Dus%26id%3D22%26uid%3D"></iframe>';userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(9,"buyerzone.com|businessnewsdaily.com",false,function(){if(window.gdprUser)return;try{if(document.location.protocol==="http:"){var b=document.createElement("script");b.src="//sync.go.sonobi.com/uc.js";userSyncPixels._fragment.appendChild(b)}}catch(a){console.error(a)}try{var e=Math.floor(Math.random()*11E3),c=document.createElement("img"),d=document.location.protocol==="https:"?"https":"http";c.src=d+"://purch-sync.go.sonobi.com/us?"+d+"://ads.servebom.com/partner?cb="+
e+"&svc=us&id=9&uid=[UID]";userSyncPixels._fragment.appendChild(c)}catch(a){console.error(a)}});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(24,"buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("iframe"),c=Math.floor(Math.random()*11E3);a.style.display="none";var b=document.location.protocol==="http:"?"http":"https";a.defer=true;a.src=b+"://ap.lijit.com/pixel?redir="+b+":%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+c+"%26svc%3Dus%26id%3D24%26uid%3D$UID";userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(14,"buyerzone.com|newegg.com|businessnewsdaily.com",false,function(){var a=document.createElement("span"),b=Math.floor(Math.random()*11E3);a.style.display="none";a.innerHTML='<iframe style="display:none" src="//eb2.3lift.com/getuid?redir=%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D'+b+'%26svc%3Dus%26id%3D14%26uid%3D%24UID"></iframe>';userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(5,"buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("span"),b=Math.floor(Math.random()*11E3);a.style.display="none";var c=document.location.protocol==="https:"?"https":"http";a.innerHTML='<iframe style="display:none" src="//ads.pubmatic.com/AdServer/js/user_sync.html?r='+b+"&p=46338&predirect="+c+"%3A%2F%2Fads.servebom.com%2Fpartner%3Fcd%3D"+b+'%26svc%3Dus%26id%3D5%26uid%3D"></iframe>';userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(19,"buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("script");a.style.display="none";var c=document.location.protocol;a.defer=true;var b="assets.rubiconproject.com";if(document.location.protocol==="https:")b="secure-assets.rubiconproject.com";a.src=c+"//"+b+"/utils/xapi/multi-sync.js";a.dataset.partner="11868";a.dataset.region="na";a.dataset.country="us";a.dataset.endpoint="us-east";userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(36,"buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("iframe"),c=Math.floor(Math.random()*11E3);a.style.display="none";var b=document.location.protocol==="http:"?"http":"https";a.defer=true;a.src=b+"://purch-match.dotomi.com/match/bounce/current?networkId=20077&version=1&rurl="+b+":%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+c+"%26svc%3Dus%26id%3D36%26uid%3D$UID";userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(45,"buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("span"),b=Math.floor(Math.random()*11E3);a.style.display="none";var c=document.location.protocol==="https:"?"https":"http";a.innerHTML='<iframe style="display:none" src="//ads.pubmatic.com/AdServer/js/user_sync.html?r='+b+"&p=46338&predirect="+c+"%3A%2F%2Fads.servebom.com%2Fpartner%3Fcd%3D"+b+'%26svc%3Dus%26id%3D45%26uid%3D"></iframe>';userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(32,"space.com|tomsguide.com|tomshardware.com|livescience.com|laptopmag.com|newsarama.com|imore.com|androidcentral.com|windowscentral.com",true,function(){var c="ads.servebom.com",a=Math.floor(Math.random()*11E3),f="tmx_sync_"+a,b="qds0l";if(b===""||b.indexOf("$")===0)return;var d=document.createElement("span");d.style.display="none";var e=document.location.protocol==="http:"?"http":"https",b=b+".publishers.tremorhub.com",c=e+"://"+b+"/pubsync?redir="+e+":%2F%2F"+c+"%2Fpartner%3Fcb%3D"+a+"%26svc%3Dus%26id%3D32%26uid%3D%5Btvid%5D",a=document.createElement("iframe");
a.id=a.name=f;a.src=c;a.frameBorder=0;a.frameSpacing=0;a.scrolling="no";a.width=1;a.height=1;d.appendChild(a);userSyncPixels._fragment.appendChild(d)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(17,"buyerzone.com|businessnewsdaily.com",false,function(){var b=document.location.protocol==="https:"?"https":"http",a=document.createElement("span"),c=Math.floor(Math.random()*11E3);a.style.display="none";a.innerHTML='<iframe style="display:none" src="'+b+"://bh.contextweb.com/bh/rtset?pid=558527&cb="+c+"&ev=1&rurl="+b+"%3A%2F%2Fads.servebom.com%2Fpartner%3Fsvc%3Dus%26id%3D17%26cb%3D"+c+'%26uid%3D%25%25VGUID%25%25"></iframe>';userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(2,"buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("iframe"),b=Math.floor(Math.random()*11E3);a.style.display="none";var c=document.location.protocol;a.defer=true;var d="ssum.casalemedia.com";if(document.location.protocol==="https:")d="ssum-sec.casalemedia.com";a.src=c+"//"+d+"/usermatch?r="+b+"&s=181869&cb="+c+"%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+b+"%26svc%3Dus%26id%3D2%26uid%3D";userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(44,"buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("span"),b=Math.floor(Math.random()*11E3);a.style.display="none";var c=document.location.protocol==="https:"?"https":"http";a.innerHTML='<iframe style="display:none" src="//t.cwkuki.com/cs/prch18/?cb='+b+"&url="+c+"%3A%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+b+'%26svc%3Dus%26id%3D44%26uid%3DD%5BUID%5D"></iframe>';userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

if(window.tmntag&&tmntag.isMobile&&!tmntag.isMobile())userSyncPixels.create(42,"buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src="//sync.bfmio.com/syncb?pid=132";userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(15,"buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("iframe"),c=Math.floor(Math.random()*11E3);a.style.display="none";var b=document.location.protocol;a.async=true;a.src=b+"//sync.adkernel.com/user-sync?zone=39660&r="+b+"%2F%2Fads.servebom.com%2Fpartner%3Fcb%3D"+c+"%26svc%3Dus%26id%3D15%26uid%3D{UID}";userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

userSyncPixels.create(46,"buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("span"),b=Math.floor(Math.random()*11E3);a.style.display="none";var c=document.location.protocol==="https:"?"https":"http";a.innerHTML='<iframe style="display:none" src="//ads.pubmatic.com/AdServer/js/user_sync.html?r='+b+"&p=156007&predirect="+c+"%3A%2F%2Fads.servebom.com%2Fpartner%3Fcd%3D"+b+'%26svc%3Dus%26id%3D46%26uid%3D"></iframe>';userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

var partnerId=27;userSyncPixels.create(partnerId,"buyerzone.com|businessnewsdaily.com",false,function(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src="https://px.powerlinks.com/user/identify?rurl=https%3A%2F%2Fads.servebom.com%2Fpartner%3Fsvc%3Dus%26id%3D"+partnerId+"%26uid%3D${USER}";userSyncPixels._fragment.appendChild(a)});

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

(function(){document.body.appendChild(userSyncPixels._fragment)})();

});
} catch (e) {
console.error(e);
}
