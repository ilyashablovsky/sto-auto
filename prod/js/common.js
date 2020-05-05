"use strict";function r(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var e=document.querySelector(".header-nav-info"),o=document.querySelector(".header-nav-catalog"),i=document.querySelector(".dropdown-block"),a=document.querySelector(".scheme-table"),l=document.querySelectorAll(".pop-up-js-window");function c(t){t.classList.toggle("is-show")}window.addEventListener("DOMContentLoaded",function(){$(document).mouseup(function(t){var e=$(".pop-up-js");if(!e.is(t.target)&&0===e.has(t.target).length){var n,o=r(l);try{for(o.s();!(n=o.n()).done;){n.value.classList.remove("is-show")}}catch(t){o.e(t)}finally{o.f()}}}),e.addEventListener("click",function(t){var e;e=t.currentTarget,i.classList.toggle("is-show"),e.lastElementChild.classList.toggle("is-rotate")}),o.addEventListener("click",function(t){t.currentTarget.lastElementChild.classList.toggle("is-rotate")}),a&&a.addEventListener("click",function(t){t.preventDefault();var e=t.target;e.classList.contains("photo-icon")?c(e.parentElement.nextElementSibling):e.classList.contains("photo-icon__inner")&&c(e.parentElement.parentElement.nextElementSibling),e.classList.contains("scheme-table__dropdown-link")&&(e.nextElementSibling.classList.toggle("is-rotate"),function(t){for(var e=t.parentElement.parentElement.parentElement;e&&(e=e.nextElementSibling).classList.contains("js-analog");)e.classList.toggle("is-hidden"),console.log("Yes")}(e))});var n=$(".easyzoom").easyZoom().filter(".easyzoom--with-thumbnails").data("easyZoom");$(".product-block-img__thumbnails").on("click","a",function(t){var e=$(this);t.preventDefault(),e.parent().children(".product-block-img__input").prop("checked",!0),n.swap(e.data("standard"),e.attr("href"))});var t=function(t,e){var n,o=document.querySelector(t),r=o.querySelector(".slider__items"),i=o.querySelectorAll(".slider__item"),a=o.querySelectorAll(".slider__control"),s=0,l=0,c=[],u=0,d=i.length-1,m={isAutoplay:!1,directionAutoplay:"next",delayAutoplay:5e3,isPauseOnHover:!0};for(var f in e)f in m&&(m[f]=e[f]);for(var v=0,p=i.length;v<p;v++)c.push({item:i[v],position:v,transform:0});function g(t){var e,n=u;"next"===t?(++s>h.getItemPosition("max")&&(e=h.getItemIndex("min"),c[e].position=h.getItemPosition("max")+1,c[e].transform+=100*c.length,c[e].item.style.transform="translateX("+c[e].transform+"%)"),l-=100,d<(u+=1)&&(u=0)):(--s<h.getItemPosition("min")&&(e=h.getItemIndex("max"),c[e].position=h.getItemPosition("min")-1,c[e].transform-=100*c.length,c[e].item.style.transform="translateX("+c[e].transform+"%)"),l+=100,--u<0&&(u=d)),r.style.transform="translateX("+l+"%)",(void 0)[n].classList.remove("active"),(void 0)[u].classList.add("active")}function y(){m.isAutoplay&&(b(),n=setInterval(function(){g(m.directionAutoplay)},m.delayAutoplay))}var h={getItemIndex:function(t){for(var e=0,n=0,o=c.length;n<o;n++)(c[n].position<c[e].position&&"min"===t||c[n].position>c[e].position&&"max"===t)&&(e=n);return e},getItemPosition:function(t){return c[h.getItemIndex(t)].position}},b=function(){clearInterval(n)};return function(){var t=document.createElement("ol");t.classList.add("slider__indicators");for(var e=0,n=i.length;e<n;e++){var o=document.createElement("li");0===e&&o.classList.add("active"),o.setAttribute("data-slide-to",e),t.appendChild(o)}}(),function(){var n=0;if("ontouchstart"in window||navigator.maxTouchPoints)o.addEventListener("touchstart",function(t){n=t.changedTouches[0].clientX,y()}),o.addEventListener("touchend",function(t){var e=t.changedTouches[0].clientX-n;50<e?g("prev"):e<-50&&g("next"),y()});else for(var t=0,e=a.length;t<e;t++)a[t].classList.add("slider__control_show");o.addEventListener("click",function(t){t.target.classList.contains("slider__control")?(t.preventDefault(),g(t.target.classList.contains("slider__control_next")?"next":"prev")):t.target.getAttribute("data-slide-to")&&(t.preventDefault(),function(t){for(var e=0,n=u<t?"next":"prev";t!==u&&e<=d;)g(n),e++}(parseInt(t.target.getAttribute("data-slide-to"))))}),document.addEventListener("visibilitychange",function(){("hidden"===document.visibilityState?b:y)()},!1),m.isPauseOnHover&&m.isAutoplay&&(o.addEventListener("mouseenter",function(){b()}),o.addEventListener("mouseleave",function(){y()}))}(),y(),{next:function(){g("next")},left:function(){g("prev")},stop:function(){m.isAutoplay=!1,b()},cycle:function(){m.isAutoplay=!0,y()}}};document.querySelector(".slider")&&t(".slider",{isAutoplay:!1}),$('[data-fancybox="gallery"]').fancybox({buttons:["zoom","share","fullScreen","download","thumbs","close"]})});