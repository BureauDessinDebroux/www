parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({108:[function(require,module,exports) {
"use strict";function e(){var e,o=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(o=!0),o}function o(e){for(var o=0,i=0;e;)o+=e.offsetLeft-e.scrollLeft+e.clientLeft,i+=e.offsetTop-e.scrollTop+e.clientTop,e=e.offsetParent;return{x:o,y:i}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mobilecheck=e,exports.getPosition=o;
},{}],95:[function(require,module,exports) {
"use strict";var e=require("./helpers.js"),t=function(){var t=document.querySelector("header"),i=(0,e.mobilecheck)(),n=window.innerHeight;t&&!0===i&&(t.style.height=n+"px")};t();var i=function(){var t=document.querySelector(".nav"),i=(0,e.getPosition)(t).y,n=t.clientWidth,s=document.querySelector(".header"),o=window.pageYOffset;window.addEventListener("scroll",function(){window.pageYOffset>=o?pageYOffset>=i&&(s.style.paddingBottom=t.clientHeight+"px",t.style.width=n+"px",t.classList.add("nav--is-fixed")):pageYOffset<=i&&(s.style.paddingBottom="0px",t.classList.remove("nav--is-fixed")),o=window.pageYOffset})};i();
},{"./helpers.js":108}],127:[function(require,module,exports) {
"use strict";function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",u=arguments[3],o={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},i=window.pageYOffset,r="now"in window.performance?performance.now():(new Date).getTime(),c=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),a=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,f="number"==typeof e?e:e.offsetTop,d=Math.round(c-f<a?c-a:f+20);if("requestAnimationFrame"in window==!1)return window.scroll(0,d),void(u&&u());!function e(){var c="now"in window.performance?performance.now():(new Date).getTime(),a=Math.min(1,(c-r)/n),f=o[t](a);window.scroll(0,Math.ceil(f*(d-i)+i)),window.pageYOffset!==d?requestAnimationFrame(e):u&&u()}()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.scrollIt=e;
},{}],99:[function(require,module,exports) {
"use strict";var e=require("./smoothScroll"),t=function(t){for(var r=function(r){var n=t[r];n.addEventListener("click",function(){var t=n.getAttribute("href");t=document.querySelector(t),(0,e.scrollIt)(t,300,"easeOutQuad")})},n=0;n<t.length;n++)r(n)},r=function(){for(var e=document.querySelectorAll(".nav__link"),r=document.querySelector(".nav__brand"),n=document.querySelectorAll("header .cta__item > a"),u=[],o=0;o<e.length;o++)u.push(e[o]);for(var c=0;c<n.length;c++)u.push(n[c]);u.push(r),t(u)}();
},{"./smoothScroll":127}],100:[function(require,module,exports) {
function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var n=function(){for(var n=document.querySelectorAll(".section"),e=document.querySelectorAll(".nav__link"),i=[],a=void 0,o=function n(e,i){t(this,n),this.item=e,this.data=i},r=0;r<e.length;r++){var c=e[r],l=new o(c,c.getAttribute("href").replace("#",""));i.push(l)}window.addEventListener("scroll",function(){for(var t=0;t<n.length;t++){var e=n[t];e.id;e.getBoundingClientRect().top<=0&&(a=e)}if(a)for(var o=a.id,r=0;r<i.length;r++){var c=i[r];c.data==o&&(i.forEach(function(t){t.item.classList.remove("nav__link--is-active")}),c.item.classList.add("nav__link--is-active"))}})}();
},{}],101:[function(require,module,exports) {
var e=function(){var e=document.querySelector(".progress"),t=(e.getTotalLength(),document.querySelector("body").clientHeight);document.addEventListener("scroll",function(){var i=(t-window.innerHeight)/(t-window.innerHeight)*100,n=pageYOffset/(t-window.innerHeight)*100;e.style.strokeDashoffset=i-n})},t=/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),i=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;t||i||e();
},{}],96:[function(require,module,exports) {
var e=function(){var e=document.querySelector(".nav__trigger"),s=document.querySelector(".nav"),a=document.querySelector("html"),i=document.querySelectorAll(".nav__link");window.matchMedia("(max-width: 1024px)").matches&&function(){e.addEventListener("click",function(e){n()});for(var t=0;t<i.length;t++){i[t].addEventListener("click",function(e){n()})}var n=function(){event.preventDefault(),e.classList.contains("hamburger__wrapper--is-active")?e.classList.remove("hamburger__wrapper--is-active"):e.classList.add("hamburger__wrapper--is-active"),s.classList.contains("nav--is-visible")?s.classList.remove("nav--is-visible"):s.classList.add("nav--is-visible"),a.classList.contains("no-scroll")?a.classList.remove("no-scroll"):a.classList.add("no-scroll")}}()}();
},{}],102:[function(require,module,exports) {
"use strict";function e(){for(var e=document.querySelector(".slider__panel--is-active").dataset.project,t=void 0,s=document.querySelectorAll(".images__set"),a=0;a<s.length;a++){var i=s[a];i.classList.remove("images__set--is-active"),i.dataset.project==e&&(i.classList.add("images__set--is-active"),t=i)}var n=t.querySelectorAll("img"),c=document.querySelector(".images__load"),l=0,r=n.length-1,o=document.querySelector(".images__controls--next"),m=document.querySelector(".images__controls--previous"),_=document.querySelector(".images__loader");function u(){d(l+1)}function d(e){n[l].className="images__panel",n[r].className="images__panel",l=(e+n.length)%n.length,r=(e-1+n.length)%n.length,n[l].className+=" images__panel--is-active",n[r].className+=" images__panel--is-transitionning"}var g=0,v=500;requestAnimationFrame(function e(){g<v?(_.style.width=c.clientWidth/v*g+"px",g++):(g=0,u()),requestAnimationFrame(e)}),o.addEventListener("click",function(){u(),g=0}),m.addEventListener("click",function(){d(l-1),g=0})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.imagesSlider=e;
},{}],103:[function(require,module,exports) {
"use strict";var e=require("./imagesSet.js"),l=function(){var l=document.querySelectorAll(".slider__panel"),n=(document.querySelectorAll(".images__set"),0),i=l.length-1,s=document.querySelector(".slider__controls--next"),t=document.querySelector(".slider__controls--previous");function r(e){l[n].className="slider__panel",l[i].className="slider__panel",n=(e+l.length)%l.length,i=(e-1+l.length)%l.length,l[n].className+=" slider__panel--is-active",l[i].className+=" slider__panel--is-transitionning"}(0,e.imagesSlider)(),s.addEventListener("click",function(){r(n+1),(0,e.imagesSlider)()}),t.addEventListener("click",function(){r(n-1),(0,e.imagesSlider)()})}();
},{"./imagesSet.js":102}],104:[function(require,module,exports) {
!function(){for(var e=document.querySelectorAll(".dropdown > h4"),t=[],s=function(s){var o=e[s].parentNode.childNodes[3],i=o.clientHeight,n=e[s].parentNode,r=void 0;t.push(n),o.style.height=0,e[s].addEventListener("click",function(){r=!!n.classList.contains("dropdown--is-open"),t.forEach(function(e){e.classList.remove("dropdown--is-open"),e.querySelector(".dropdown__content").style.height=0}),1==r?n.classList.remove("dropdown--is-open"):n.classList.add("dropdown--is-open"),o.clientHeight>0?o.style.height="0px":o.style.height=i+"px"})},o=0;o<e.length;o++)s(o)}(),function(){for(var e=document.querySelectorAll(".tab"),t=document.querySelectorAll(".services__details"),s=document.querySelector(".services__tab"),o=function(o){e[o].addEventListener("mouseover",function(){for(var i=0;i<e.length;i++){e[i].classList.remove("tab--is-active")}e[o].classList.add("tab--is-active");for(var n=e[o].dataset.service,r=e[o].dataset.top,a=0;a<t.length;a++)t[a].classList.remove("services__details--is-active"),t[a].dataset.service==n&&t[a].classList.add("services__details--is-active");s.style.transform="translateY("+r+"rem)"})},i=0;i<e.length;i++)o(i)}();
},{}],97:[function(require,module,exports) {
var e=function(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[null,""])[1].replace(/\+/g,"%20"))||null},t=function(){var t=e("message"),c=document.querySelector(".form__input--submit"),n=document.querySelector(".contact__feedback");"message sent"==t&&(c.classList.add("form__input--submitted"),c.value="message envoyé",n.classList.add("contact__feedback--is-visible"))};t();
},{}],45:[function(require,module,exports) {
"use strict";require("./js/header.js"),require("./js/nav/navScroll.js"),require("./js/nav/highlight.js"),require("./js/nav/progress.js"),require("./js/mobilenav.js"),require("./js/slider/imagesSet.js"),require("./js/slider/projects.js"),require("./js/dropdown/dropdown.js"),require("./js/message.js");
},{"./js/header.js":95,"./js/nav/navScroll.js":99,"./js/nav/highlight.js":100,"./js/nav/progress.js":101,"./js/mobilenav.js":96,"./js/slider/imagesSet.js":102,"./js/slider/projects.js":103,"./js/dropdown/dropdown.js":104,"./js/message.js":97}]},{},[45])
//# sourceMappingURL=assets.6e8b1ec5.map