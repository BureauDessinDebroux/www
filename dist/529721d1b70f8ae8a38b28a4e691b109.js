require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({47:[function(require,module,exports) {
"use strict";function e(){var e,o=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(o=!0),o}function o(e){for(var o=0,i=0;e;)o+=e.offsetLeft-e.scrollLeft+e.clientLeft,i+=e.offsetTop-e.scrollTop+e.clientTop,e=e.offsetParent;return{x:o,y:i}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mobilecheck=e,exports.getPosition=o;
},{}],37:[function(require,module,exports) {
"use strict";var e=require("./helpers.js"),t=function(){var t=document.querySelector("header"),i=(0,e.mobilecheck)(),n=window.innerHeight;t&&!0===i&&(t.style.height=n+"px")};t();var i=function(){var t=document.querySelector(".nav"),i=(0,e.getPosition)(t).y,n=t.clientWidth,s=document.querySelector(".header"),o=window.pageYOffset;window.addEventListener("scroll",function(){window.pageYOffset>o?pageYOffset>=i&&(s.style.paddingBottom=t.clientHeight+"px",t.style.width=n+"px",t.classList.add("nav--is-fixed")):pageYOffset<=i&&(s.style.paddingBottom="0px",t.classList.remove("nav--is-fixed")),o=window.pageYOffset})};i();
},{"./helpers.js":47}],48:[function(require,module,exports) {
"use strict";function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",u=arguments[3],o={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},i=window.pageYOffset,r="now"in window.performance?performance.now():(new Date).getTime(),c=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),a=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,f="number"==typeof e?e:e.offsetTop,d=Math.round(c-f<a?c-a:f);if("requestAnimationFrame"in window==!1)return window.scroll(0,d),void(u&&u());!function e(){var c="now"in window.performance?performance.now():(new Date).getTime(),a=Math.min(1,(c-r)/n),f=o[t](a);window.scroll(0,Math.ceil(f*(d-i)+i)),window.pageYOffset!==d?requestAnimationFrame(e):u&&u()}()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.scrollIt=e;
},{}],40:[function(require,module,exports) {
"use strict";var e=require("./smoothScroll"),t=function(t){for(var r=function(r){var n=t[r];n.addEventListener("click",function(){var t=n.getAttribute("href");t=document.querySelector(t),(0,e.scrollIt)(t,300,"easeOutQuad")})},n=0;n<t.length;n++)r(n)},r=function(){for(var e=document.querySelectorAll(".nav__link"),r=document.querySelector(".nav__brand"),n=document.querySelectorAll("header .cta__item > a"),u=[],o=0;o<e.length;o++)u.push(e[o]);for(var c=0;c<n.length;c++)u.push(n[c]);u.push(r),t(u)}();
},{"./smoothScroll":48}],43:[function(require,module,exports) {

},{}],35:[function(require,module,exports) {
var s=function(){var s=document.querySelector(".nav__trigger"),e=document.querySelector(".nav"),a=document.querySelector("body"),c=document.querySelector("html");s.addEventListener("click",function(i){i.preventDefault(),s.classList.contains("hamburger__wrapper--is-active")?s.classList.remove("hamburger__wrapper--is-active"):s.classList.add("hamburger__wrapper--is-active"),e.classList.contains("nav--is-visible")?e.classList.remove("nav--is-visible"):e.classList.add("nav--is-visible"),a.classList.contains("no-scroll")?a.classList.remove("no-scroll"):a.classList.add("no-scroll"),c.classList.contains("no-scroll")?c.classList.remove("no-scroll"):c.classList.add("no-scroll")})}();
},{}],41:[function(require,module,exports) {
"use strict";function e(){for(var e=document.querySelector(".slider__panel--is-active").dataset.project,t=void 0,s=document.querySelectorAll(".images__set"),a=0;a<s.length;a++){var i=s[a];i.classList.remove("images__set--is-active"),i.dataset.project==e&&(i.classList.add("images__set--is-active"),t=i)}var n=t.querySelectorAll("img"),c=document.querySelector(".images__load"),l=0,r=n.length-1,o=document.querySelector(".images__controls--next"),m=document.querySelector(".images__controls--previous"),_=document.querySelector(".images__loader");function u(){d(l+1)}function d(e){n[l].className="images__panel",n[r].className="images__panel",l=(e+n.length)%n.length,r=(e-1+n.length)%n.length,n[l].className+=" images__panel--is-active",n[r].className+=" images__panel--is-transitionning"}var g=0,v=500;requestAnimationFrame(function e(){g<v?(_.style.width=c.clientWidth/v*g+"px",g++):(g=0,u()),requestAnimationFrame(e)}),o.addEventListener("click",function(){u(),g=0}),m.addEventListener("click",function(){d(l-1),g=0})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.imagesSlider=e;
},{}],42:[function(require,module,exports) {
"use strict";var e=require("./imagesSet.js"),l=function(){var l=document.querySelectorAll(".slider__panel"),n=(document.querySelectorAll(".images__set"),0),i=l.length-1,s=document.querySelector(".slider__controls--next"),t=document.querySelector(".slider__controls--previous");function r(e){l[n].className="slider__panel",l[i].className="slider__panel",n=(e+l.length)%l.length,i=(e-1+l.length)%l.length,l[n].className+=" slider__panel--is-active",l[i].className+=" slider__panel--is-transitionning"}(0,e.imagesSlider)(),s.addEventListener("click",function(){r(n+1),(0,e.imagesSlider)()}),t.addEventListener("click",function(){r(n-1),(0,e.imagesSlider)()})}();
},{"./imagesSet.js":41}],44:[function(require,module,exports) {
!function(){for(var e=document.querySelectorAll(".dropdown"),t=function(t){var s=e[t].querySelector(".dropdown__content"),o=s.clientHeight,i=void 0;s.style.height=0,e[t].addEventListener("click",function(){i=!!e[t].classList.contains("dropdown--is-open"),e.forEach(function(e){e.classList.remove("dropdown--is-open"),e.querySelector(".dropdown__content").style.height=0}),1==i?e[t].classList.remove("dropdown--is-open"):e[t].classList.add("dropdown--is-open"),s.clientHeight>0?s.style.height="0px":s.style.height=o+"px"})},s=0;s<e.length;s++)t(s)}(),function(){for(var e=document.querySelectorAll(".tab"),t=document.querySelectorAll(".services__details"),s=document.querySelector(".services__tab"),o=function(o){e[o].addEventListener("mouseover",function(){for(var i=0;i<e.length;i++){e[i].classList.remove("tab--is-active")}e[o].classList.add("tab--is-active");for(var n=e[o].dataset.service,r=e[o].dataset.top,c=0;c<t.length;c++)t[c].classList.remove("services__details--is-active"),t[c].dataset.service==n&&t[c].classList.add("services__details--is-active");s.style.transform="translateY("+r+"rem)"})},i=0;i<e.length;i++)o(i)}();
},{}],36:[function(require,module,exports) {
var e=function(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[null,""])[1].replace(/\+/g,"%20"))||null},t=function(){var t=e("message"),c=document.querySelector(".form__input--submit"),n=document.querySelector(".contact__feedback");"message sent"==t&&(c.classList.add("form__input--submitted"),c.value="message envoyé",n.classList.add("contact__feedback--is-visible"))};t();
},{}],5:[function(require,module,exports) {
"use strict";require("./js/header.js"),require("./js/nav/navScroll.js"),require("./js/nav/highlight.js"),require("./js/mobilenav.js"),require("./js/slider/imagesSet.js"),require("./js/slider/projects.js"),require("./js/dropdown/dropdown.js"),require("./js/message.js");
},{"./js/header.js":37,"./js/nav/navScroll.js":40,"./js/nav/highlight.js":43,"./js/mobilenav.js":35,"./js/slider/imagesSet.js":41,"./js/slider/projects.js":42,"./js/dropdown/dropdown.js":44,"./js/message.js":36}]},{},[5])