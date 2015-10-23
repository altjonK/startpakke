!function(){"use strict";function t(e,s){function n(t,e){return function(){return t.apply(e,arguments)}}var a;if(s=s||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=s.touchBoundary||10,this.layer=e,this.tapDelay=s.tapDelay||200,this.tapTimeout=s.tapTimeout||700,!t.notNeeded(e)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=this,l=0,d=o.length;d>l;l++)r[o[l]]=n(r[o[l]],r);i&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,i,s){var n=Node.prototype.removeEventListener;"click"===t?n.call(e,t,i.hijacked||i,s):n.call(e,t,i,s)},e.addEventListener=function(t,i,s){var n=Node.prototype.addEventListener;"click"===t?n.call(e,t,i.hijacked||(i.hijacked=function(t){t.propagationStopped||i(t)}),s):n.call(e,t,i,s)}),"function"==typeof e.onclick&&(a=e.onclick,e.addEventListener("click",function(t){a(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,i=navigator.userAgent.indexOf("Android")>0&&!e,s=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,n=s&&/OS 4_\d(_\d)?/.test(navigator.userAgent),a=s&&/OS [6-7]_\d/.test(navigator.userAgent),o=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(s&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!i;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var i,s;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),s=e.changedTouches[0],i=document.createEvent("MouseEvents"),i.initMouseEvent(this.determineEventType(t),!0,!0,window,1,s.screenX,s.screenY,s.clientX,s.clientY,!1,!1,!1,!1,0,null),i.forwardedTouchEvent=!0,t.dispatchEvent(i)},t.prototype.determineEventType=function(t){return i&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;s&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,i;if(e=t.fastClickScrollParent,!e||!e.contains(t)){i=t;do{if(i.scrollHeight>i.offsetHeight){e=i,t.fastClickScrollParent=i;break}i=i.parentElement}while(i)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,i,a;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),i=t.targetTouches[0],s){if(a=window.getSelection(),a.rangeCount&&!a.isCollapsed)return!0;if(!n){if(i.identifier&&i.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=i.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=i.pageX,this.touchStartY=i.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],i=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>i||Math.abs(e.pageY-this.touchStartY)>i?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,o,r,l,d,c=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,o=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,a&&(d=t.changedTouches[0],c=document.elementFromPoint(d.pageX-window.pageXOffset,d.pageY-window.pageYOffset)||c,c.fastClickScrollParent=this.targetElement.fastClickScrollParent),r=c.tagName.toLowerCase(),"label"===r){if(e=this.findControl(c)){if(this.focus(c),i)return!1;c=e}}else if(this.needsFocus(c))return t.timeStamp-o>100||s&&window.top!==window&&"input"===r?(this.targetElement=null,!1):(this.focus(c),this.sendClick(c,t),s&&"select"===r||(this.targetElement=null,t.preventDefault()),!1);return s&&!n&&(l=c.fastClickScrollParent,l&&l.fastClickLastScrollTop!==l.scrollTop)?!0:(this.needsClick(c)||(t.preventDefault(),this.sendClick(c,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:!t.cancelable||this.needsClick(this.targetElement)&&!this.cancelNextClick?!0:(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;i&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,s,n,a;if("undefined"==typeof window.ontouchstart)return!0;if(s=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!i)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(s>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(o&&(n=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),n[1]>=10&&n[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(a=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],a>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1)},t.attach=function(e,i){return new t(e,i)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}();
