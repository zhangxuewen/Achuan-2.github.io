"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}document.addEventListener("DOMContentLoaded",function(){function m(){0<arguments.length&&void 0!==arguments[0]&&arguments[0]&&(o=n&&n.offsetWidth,a=i&&i.offsetWidth,r=c&&c.offsetWidth);var t=document.getElementById("nav"),e=window.innerWidth<768||o+a+r>t.offsetWidth-120;e?t.classList.add("hide-menu"):t.classList.remove("hide-menu")}function h(){var t,e,n,a,c,o,r,l,s,d,i,u,f,m,h=GLOBAL_CONFIG.highlight;function g(t,e,n){var o,i=document.createDocumentFragment();c&&((o=document.createElement("div")).className="highlight-tools ".concat(d),o.innerHTML=l+t+s,o.addEventListener("click",f),i.appendChild(o)),a&&e.offsetHeight>a+30&&((o=document.createElement("div")).className="code-expand-btn",o.innerHTML='<i class="fas fa-angle-double-down"></i>',o.addEventListener("click",m),i.appendChild(o)),"hl"===n?e.insertBefore(i,e.firstChild):e.parentNode.insertBefore(i,e)}h&&(t=h.highlightCopy,e=h.highlightLang,n=GLOBAL_CONFIG_SITE.isHighlightShrink,a=h.highlightHeightLimit,c=t||e||void 0!==n,o="highlighjs"===h.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),(c||a)&&o.length&&(r="prismjs"===h.plugin,d=!(s=l="")===n?"closed":"",void 0!==n&&(l='<i class="fas fa-angle-down expand '.concat(d,'"></i>')),t&&(s='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),i=function(t){var e=t.parentNode;e.classList.add("copy-true");var n=window.getSelection(),o=document.createRange();r?o.selectNodeContents(e.querySelectorAll("pre code")[0]):o.selectNodeContents(e.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);var i;n.toString();t=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((i=t.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,i.style.opacity=1,setTimeout(function(){i.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,n.removeAllRanges(),e.classList.remove("copy-true")},u=function(t){var e=_toConsumableArray(t.parentNode.children).slice(1);t.firstChild.classList.toggle("closed"),btf.isHidden(e[e.length-1])?e.forEach(function(t){t.style.display="block"}):e.forEach(function(t){t.style.display="none"})},f=function(t){t=t.target.classList;t.contains("expand")?u(this):t.contains("copy-button")&&i(this)},m=function(){this.classList.toggle("expand-done")},e?r?o.forEach(function(t){var e=t.getAttribute("data-language")?t.getAttribute("data-language"):"Code",e='<div class="code-lang">'.concat(e,"</div>");btf.wrap(t,"figure",{class:"highlight"}),g(e,t)}):o.forEach(function(t){var e=t.getAttribute("class").split(" ")[1];g('<div class="code-lang">'.concat(e="plain"===e||void 0===e?"Code":e,"</div>"),t,"hl")}):r?o.forEach(function(t){btf.wrap(t,"figure",{class:"highlight"}),g("",t)}):o.forEach(function(t){g("",t,"hl")})))}var n=document.getElementById("site-name"),o=n&&n.offsetWidth,i=document.querySelector("#menus .menus_items"),a=i&&i.offsetWidth,c=document.querySelector("#search-button"),r=c&&c.offsetWidth;function l(t){function e(t){t.each(function(t,e){var n=$(e),o=n.attr("data-lazy-src")||n.attr("src"),e=n.attr("alt")||"";n.wrap('<a href="'.concat(o,'" data-fancybox="group" data-caption="').concat(e,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})}void 0===$.fancybox?($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.fancybox.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.fancybox.js),function(){e($(t))})):e($(t))}function g(){var n="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group):not(.flink-item-icon) > img, #article-container > img"):[],o=0<n.length,i=document.querySelectorAll("#article-container .justified-gallery"),a=0<i.length;(a||o)&&btf.isJqueryLoad(function(){var t,e;a&&(t=i,e=$(t),(t=e.find("img")).unwrap(),t.length&&t.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),s?btf.initJustifiedGallery(e):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js),function(){btf.initJustifiedGallery(e)}),s=!0)),o&&l(n)})}function y(){var o,i,a,c,r,l=document.getElementById("rightside"),s=window.innerHeight+56;document.body.scrollHeight<=s?l.style.cssText="opacity: 1; transform: translateX(-38px)":(i=!(o=0),a=document.getElementById("page-header"),c="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow,window.scrollCollect=function(){return btf.throttle(function(t){var e,n=window.scrollY||document.documentElement.scrollTop;e=o<n;56<(o=n)?(e?(a.classList.contains("nav-visible")&&a.classList.remove("nav-visible"),r&&!0===i&&(chatBtnHide(),i=!1)):(a.classList.contains("nav-visible")||a.classList.add("nav-visible"),c&&!1===i&&(chatBtnShow(),i=!0)),a.classList.add("nav-fixed"),"0"===window.getComputedStyle(l).getPropertyValue("opacity")&&(l.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===n&&a.classList.remove("nav-fixed","nav-visible"),l.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=s&&(l.style.cssText="opacity: 1; transform: translateX(-38px)")},200)()},window.addEventListener("scroll",scrollCollect))}function p(){var t=document.getElementById("card-toc"),r=t.getElementsByClassName("toc-content")[0],l=r.querySelectorAll(".toc-link"),i=document.getElementById("article-container");window.tocScrollFn=function(){return btf.throttle(function(){var t=window.scrollY||document.documentElement.scrollTop;e(t),a(t)},100)()},window.addEventListener("scroll",tocScrollFn);var e=function(t){var e=i.clientHeight,n=document.documentElement.clientHeight,o=i.offsetTop,n=n<e?e-n:document.documentElement.scrollHeight-n,n=Math.round(100*((t-o)/n));r.setAttribute("progress-percentage",100<n?100:n<=0?0:n)},s=GLOBAL_CONFIG.isanchor,n=function(){t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"},o=function(){t.style.animation="toc-close .2s",setTimeout(function(){t.style.cssText="opacity:''; animation: ''; right: ''"},100)};document.getElementById("mobile-toc-button").addEventListener("click",function(){("0"===window.getComputedStyle(t).getPropertyValue("opacity")?n:o)()}),r.addEventListener("click",function(t){t.preventDefault();t=t.target.classList.contains("toc-link")?t.target:t.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&o()});var d=i.querySelectorAll("h1,h2,h3,h4,h5,h6"),u="",a=function(n){if(0===l.length||0===n)return!1;var t,e,o="",i="";if(d.forEach(function(t,e){n>btf.getEleTop(t)-80&&(o="#"+encodeURI(t.getAttribute("id")),i=e)}),u!==i){if(s&&(t=o,window.history.replaceState&&t!==window.location.hash&&(t=t||location.pathname,e=GLOBAL_CONFIG_SITE.title,window.history.replaceState({url:location.href,title:e},e,t))),""===o)return r.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),void(u=i);u=i,r.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")});var a=l[i];a.classList.add("active"),setTimeout(function(){var t,e;e=(t=a).getBoundingClientRect().top,t=r.scrollTop,e>document.documentElement.clientHeight-100&&(r.scrollTop=t+150),e<100&&(r.scrollTop=t-150)},0);for(var c=a.parentNode;!c.matches(".toc");c=c.parentNode)c.matches("li")&&c.classList.add("active")}}}var s=!1,e=function(){var e=document.body;e.classList.add("read-mode");var n=document.createElement("button");n.type="button",n.className="fas fa-sign-out-alt exit-readmode",e.appendChild(n),n.addEventListener("click",function t(){e.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",t)})},d=function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200)},u=function(){document.getElementById("rightside-config-hide").classList.toggle("show")},f=function(){btf.scrollToDest(0,500)},b=function(){btf.scrollToDest(document.documentElement.scrollHeight,500)},v=function(){var t=document.documentElement.classList;t.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),t.toggle("hide-aside")},L=function(t){var e=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size")),n="";if(t){if(20<=e)return;n=e+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||m(!0)}else{if(e<=10)return;n=e-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&m(!0)}saveToLocal.set("global-font-size",n,2)};document.getElementById("rightside").addEventListener("click",function(t){switch(t.target.id||t.target.parentNode.id){case"go-up":f();break;case"go-bottom":b();break;case"rightside_config":u();break;case"readmode":e();break;case"darkmode":d();break;case"hide-aside-btn":v();break;case"font-plus":L(!0);break;case"font-minus":L()}});function E(t){t.forEach(function(t){var e=t,t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}var A,w=function(){document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){var e,n,o,i=this.parentNode;i.classList.contains("active")||(o=i.parentNode.nextElementSibling,(e=btf.siblings(i,".active")[0])&&e.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(o.children).forEach(function(t){t.id===n?t.classList.add("active"):t.classList.remove("active")}),0<(o=o.querySelectorAll("#".concat(n," .justified-gallery"))).length&&btf.initJustifiedGallery(o))})})},S=function(){document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})};window.refreshFn=function(){var t,e,n,o,i,a,c,r,l,s,d,u;function f(){l.style.overflow="",l.style.paddingRight="",btf.fadeOut(r,.5),c.classList.remove("open")}m(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&p(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(o=GLOBAL_CONFIG.noticeOutdate,(i=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=o.limitDay&&((n=document.createElement("div")).className="post-outdate-notice",n.textContent=o.messagePrev+" "+i+" "+o.messageNext,i=document.getElementById("article-container"),"top"===o.position?i.insertBefore(n,i.firstChild):i.appendChild(n))),GLOBAL_CONFIG.relativeDate.post&&E(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&E(document.querySelectorAll("#recent-posts time")),!GLOBAL_CONFIG.runtime||(n=document.getElementById("runtimeshow"))&&(e=n.getAttribute("data-publishDate"),n.innerText=btf.diffDate(e)+" "+GLOBAL_CONFIG.runtime),(e=document.getElementById("last-push-date"))&&(t=e.getAttribute("data-lastPushDate"),e.innerText=btf.diffDate(t,!0)),(t=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&t.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault();this.classList.toggle("expand");t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})})),a=document.getElementById("toggle-menu"),c=document.getElementById("sidebar-menus"),r=document.getElementById("menu-mask"),l=document.body,a.addEventListener("click",function(){btf.sidebarPaddingR(),l.style.overflow="hidden",btf.fadeIn(r,.5),c.classList.add("open")}),r.addEventListener("click",function(t){c.classList.contains("open")&&f()}),window.addEventListener("resize",function(t){btf.isHidden(a)&&c.classList.contains("open")&&f()}),!GLOBAL_CONFIG_SITE.isHome||(u=document.getElementById("scroll-down"))&&u.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),h(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,n=t.parentNode,o=t.alt;o&&!n.parentNode.classList.contains("justified-gallery")&&((e=document.createElement("div")).className="img-alt is-center",e.textContent=o,n.insertBefore(e,t.nextSibling))}),g(),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(s=mediumZoom(document.querySelectorAll("#article-container :not(a):not(.flink-item-icon) > img"))).on("open",function(t){var e="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";s.update({background:e})}),y(),(u=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&u.forEach(function(t){btf.wrap(t,"div",{class:"table-wrap"})}),(u=document.querySelectorAll("#article-container .hide-button")).length&&u.forEach(function(t){t.addEventListener("click",function(t){var e=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<e.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(e.querySelectorAll(".justified-gallery"))})}),w(),S(),d=!1,(u=document.querySelector("#comment-switch > .switch-btn"))&&u.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),d||"function"!=typeof loadOtherComment||(d=!0,loadOtherComment())})},refreshFn(),window.addEventListener("resize",m),window.addEventListener("orientationchange",function(){setTimeout(m(!0),100)}),document.querySelectorAll("#sidebar-menus .expand").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide");var t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})}),window.addEventListener("touchmove",function(t){document.querySelectorAll("#nav .menus_item_child").forEach(function(t){btf.isHidden(t)||(t.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(A=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=window.getSelection(0).toString(),e=e.length>A.limitCount?e+"\n\n\n"+A.languages.author+"\n"+A.languages.link+window.location.href+"\n"+A.languages.source+"\n"+A.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});