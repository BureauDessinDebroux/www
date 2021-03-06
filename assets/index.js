import "./js/header.js";

import "./js/nav/navScroll.js";
import "./js/nav/highlight.js";
import "./js/nav/progress.js";
import "./js/mobilenav.js";

import "./js/slider/imagesSet.js";
import "./js/slider/projects.js";

import "./js/dropdown/dropdown.js";

import "./js/message.js";


function browserDetection() {
    var isSafari    = navigator.userAgent.indexOf("Safari") != -1,
        isOpera     = (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1,
        isChrome    = navigator.userAgent.indexOf("Chrome") != -1,
        isFirefox   = navigator.userAgent.indexOf("Firefox") != -1,
        isIE        = (navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)
}