// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({78:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mobilecheck = mobilecheck;
exports.getPosition = getPosition;
function mobilecheck() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
};

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
        yPosition += element.offsetTop - element.scrollTop + element.clientTop;
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
};
},{}],58:[function(require,module,exports) {
'use strict';

var _helpers = require('./helpers.js');

var mobileHeaderHeight = function mobileHeaderHeight() {
    var header = document.querySelector('header'),
        mobile = (0, _helpers.mobilecheck)(),
        height = window.innerHeight;

    if (!header) return;

    if (mobile === true) {
        header.style.height = height + 'px';
    }
};

mobileHeaderHeight();

var stickyHeader = function stickyHeader() {
    var nav = document.querySelector('.nav'),
        navPositionY = (0, _helpers.getPosition)(nav).y,
        navWidth = nav.clientWidth,
        header = document.querySelector('.header'),
        previous = window.pageYOffset;

    window.addEventListener('scroll', function () {

        if (window.pageYOffset >= previous) {
            if (pageYOffset >= navPositionY) {
                header.style.paddingBottom = nav.clientHeight + 'px';
                nav.style.width = navWidth + 'px';
                nav.classList.add('nav--is-fixed');
            }
        } else {
            if (pageYOffset <= navPositionY) {
                header.style.paddingBottom = 0 + 'px';
                nav.classList.remove('nav--is-fixed');
            }
        }

        previous = window.pageYOffset;
    });
};

stickyHeader();
},{"./helpers.js":78}],80:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Robert Penner's easeInOutQuad

// find the rest of his easing functions here: http://robertpenner.com/easing/
// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js

var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jumper = function jumper() {
  // private variable cache
  // no variables are created during a jump, preventing memory leaks

  var element = void 0; // element to scroll to                   (node)

  var start = void 0; // where scroll starts                    (px)
  var stop = void 0; // where scroll stops                     (px)

  var offset = void 0; // adjustment from the stop position      (px)
  var easing = void 0; // easing function                        (function)
  var a11y = void 0; // accessibility support flag             (boolean)

  var distance = void 0; // distance of scroll                     (px)
  var duration = void 0; // scroll duration                        (ms)

  var timeStart = void 0; // time scroll started                    (ms)
  var timeElapsed = void 0; // time spent scrolling thus far          (ms)

  var next = void 0; // next scroll position                   (px)

  var callback = void 0; // to call when done scrolling            (function)

  // scroll position helper

  function location() {
    return window.scrollY || window.pageYOffset;
  }

  // element offset helper

  function top(element) {
    return element.getBoundingClientRect().top + start;
  }

  // rAF loop helper

  function loop(timeCurrent) {
    // store time scroll started, if not started already
    if (!timeStart) {
      timeStart = timeCurrent;
    }

    // determine time spent scrolling so far
    timeElapsed = timeCurrent - timeStart;

    // calculate next scroll position
    next = easing(timeElapsed, start, distance, duration);

    // scroll to it
    window.scrollTo(0, next);

    // check progress
    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop
    : done(); // scrolling is done
  }

  // scroll finished helper

  function done() {
    // account for rAF time rounding inaccuracies
    window.scrollTo(0, start + distance);

    // if scrolling to an element, and accessibility is enabled
    if (element && a11y) {
      // add tabindex indicating programmatic focus
      element.setAttribute('tabindex', '-1');

      // focus the element
      element.focus();
    }

    // if it exists, fire the callback
    if (typeof callback === 'function') {
      callback();
    }

    // reset time for next jump
    timeStart = false;
  }

  // API

  function jump(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // resolve options, or use defaults
    duration = options.duration || 1000;
    offset = options.offset || 0;
    callback = options.callback; // "undefined" is a suitable default, and won't be called
    easing = options.easing || easeInOutQuad;
    a11y = options.a11y || false;

    // cache starting position
    start = location();

    // resolve target
    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
      // scroll from current position
      case 'number':
        element = undefined; // no element to scroll to
        a11y = false; // make sure accessibility is off
        stop = start + target;
        break;

      // scroll to element (node)
      // bounding rect is relative to the viewport
      case 'object':
        element = target;
        stop = top(element);
        break;

      // scroll to element (selector)
      // bounding rect is relative to the viewport
      case 'string':
        element = document.querySelector(target);
        stop = top(element);
        break;
    }

    // resolve scroll distance, accounting for offset
    distance = stop - start + offset;

    // resolve duration
    switch (_typeof(options.duration)) {
      // number in ms
      case 'number':
        duration = options.duration;
        break;

      // function passed the distance of the scroll
      case 'function':
        duration = options.duration(distance);
        break;
    }

    // start the loop
    window.requestAnimationFrame(loop);
  }

  // expose only the jump method
  return jump;
};

// export singleton

var singleton = jumper();

exports.default = singleton;
},{}],61:[function(require,module,exports) {
'use strict';

var _jump = require('jump.js');

var _jump2 = _interopRequireDefault(_jump);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var smoothScroll = function () {

    var triggers = document.querySelectorAll('.nav__link'),
        link = {};

    var _loop = function _loop(i) {
        var element = triggers[i];
        element.addEventListener('click', function (e) {
            var target = '#' + element.href.substring(element.href.indexOf("#") + 1);
            (0, _jump2.default)(target);
        });
    };

    for (var i = 0; i < triggers.length; i++) {
        _loop(i);
    }
}();

// import { scrollIt } from "./smoothScroll";

// const smoothTrigger = function(target) {
//     for (let i = 0; i < target.length; i++) {
//         const element = target[i];

//         element.addEventListener('click', () => {
//             let target = element.getAttribute("href");
//                 target = document.querySelector(target);

//             scrollIt (
//                 target,
//                 300,
//                 'easeOutQuad'
//             );
//         });
//     }
// }

// const smoothTarget = (function() {
//     let NAV_LINKS       = document.querySelectorAll('.nav__link'),
//         NAV_BRAND       = document.querySelector('.nav__brand'),
//         MOBILE_LINKS    = document.querySelectorAll('header .cta__item > a'),
//         TRIGGERS        = [];

//     for (let i = 0; i < NAV_LINKS.length; i++) {
//         TRIGGERS.push(NAV_LINKS[i]);
//     }

//     for (let i = 0; i < MOBILE_LINKS.length; i++) {
//         TRIGGERS.push(MOBILE_LINKS[i]);
//     }

//     TRIGGERS.push(NAV_BRAND);
//     smoothTrigger(TRIGGERS);
// })();
},{"jump.js":80}],62:[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var highlight = function () {
    var sections = document.querySelectorAll('.section'),
        navItems = document.querySelectorAll('.nav__link'),
        highlightNavArray = [],
        activeSection = void 0;

    var highlightNav = function highlightNav(item, data) {
        _classCallCheck(this, highlightNav);

        this.item = item, this.data = data;
    };

    for (var i = 0; i < navItems.length; i++) {
        var navItem = navItems[i],
            navItemData = navItem.getAttribute("href").replace('#', '');

        var highlightNavItem = new highlightNav(navItem, navItemData);
        highlightNavArray.push(highlightNavItem);
    }

    window.addEventListener('scroll', function () {
        for (var _i = 0; _i < sections.length; _i++) {
            var section = sections[_i],
                sectionData = section.id,
                bounding = section.getBoundingClientRect();

            if (bounding.top <= 0) {
                activeSection = section;
            }
        }

        if (activeSection) {
            var activeSectionData = activeSection.id;

            for (var _i2 = 0; _i2 < highlightNavArray.length; _i2++) {
                var element = highlightNavArray[_i2];

                if (element.data == activeSectionData) {
                    highlightNavArray.forEach(function (item) {
                        item.item.classList.remove('nav__link--is-active');
                    });
                    element.item.classList.add('nav__link--is-active');
                }
            }
        }
    });
}();
},{}],63:[function(require,module,exports) {
/*
* ====================================================
* PROGRESS SCROLL
* ====================================================
*/

var scrollProgress = function scrollProgress() {

    var progressIndicator = document.querySelector('.progress'),
        length = progressIndicator.getTotalLength(),
        height = document.querySelector('body').clientHeight,
        i = 0;

    document.addEventListener('scroll', function () {
        var starter = (height - window.innerHeight) / (height - window.innerHeight) * 100,
            value = pageYOffset / (height - window.innerHeight) * 100;

        progressIndicator.style.strokeDashoffset = starter - value;
    });
};

var isSafari = navigator.userAgent.indexOf("Safari") != -1;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

if (window.matchMedia("(min-width: 1024px)").matches) {
    if (!isSafari && !isFirefox) {
        scrollProgress();
    }
}
},{}],59:[function(require,module,exports) {
var mobileNavEvent = function () {
    var trigger = document.querySelector('.nav__trigger'),
        nav = document.querySelector('.nav'),
        html = document.querySelector('html'),
        navLinks = document.querySelectorAll('.nav__link'),
        breakpoint = window.matchMedia("(max-width: 1024px)");

    if (breakpoint.matches) {
        (function () {
            // MOBILE NAV TRIGGER
            trigger.addEventListener('click', function (event) {
                mobileNavAction();
            });
            for (var i = 0; i < navLinks.length; i++) {
                var element = navLinks[i];
                element.addEventListener('click', function (event) {
                    mobileNavAction();
                });
            }

            // MOBILE NAV OPENING & CLOSING ACTION
            var mobileNavAction = function mobileNavAction() {
                event.preventDefault();
                trigger.classList.contains('hamburger__wrapper--is-active') ? trigger.classList.remove('hamburger__wrapper--is-active') : trigger.classList.add('hamburger__wrapper--is-active');
                nav.classList.contains('nav--is-visible') ? nav.classList.remove('nav--is-visible') : nav.classList.add('nav--is-visible');
                html.classList.contains('no-scroll') ? html.classList.remove('no-scroll') : html.classList.add('no-scroll');
            };
        })();
    }
}();
},{}],64:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.imagesSlider = imagesSlider;
function imagesSlider() {
    var active_project = document.querySelector('.slider__panel--is-active'),
        active_project_dataset = active_project.dataset.project,
        active_project_images = void 0;

    var all_images_set = document.querySelectorAll('.images__set');

    for (var _i = 0; _i < all_images_set.length; _i++) {
        var element = all_images_set[_i];
        element.classList.remove('images__set--is-active');

        if (element.dataset.project == active_project_dataset) {
            element.classList.add('images__set--is-active');
            active_project_images = element;
        }
    }

    var slides = active_project_images.querySelectorAll('img'),
        slides__wrapper = document.querySelector('.images__load'),
        current_slide = 0,
        playing = true,
        previous_slide = slides.length - 1,
        BUTTON_NEXT = document.querySelector('.images__controls--next'),
        BUTTON_PREVIOUS = document.querySelector('.images__controls--previous'),
        LOADER = document.querySelector('.images__loader');

    // SINGLE
    function pauseSlideshow() {
        playing = false;
    }
    function playSlideshow() {
        playing = true;
    }
    function nextSlide() {
        goToSlide(current_slide + 1);
    }
    function previousSlide() {
        goToSlide(current_slide - 1);
    }

    // CHANGER
    function goToSlide(n) {
        slides[current_slide].className = 'images__panel';
        slides[previous_slide].className = 'images__panel';

        current_slide = (n + slides.length) % slides.length;
        previous_slide = (n - 1 + slides.length) % slides.length;

        slides[current_slide].className += ' images__panel--is-active';
        slides[previous_slide].className += ' images__panel--is-transitionning';
    }

    // REQUEST ANIMATION FRAME
    var i = 0,
        sliderLooperRequest = void 0,
        timing = 500;

    function sliderLooper() {
        if (i < timing) {
            LOADER.style.width = slides__wrapper.clientWidth / timing * i + 'px';
            i++;
        } else {
            i = 0;
            nextSlide();
        }

        sliderLooperRequest = requestAnimationFrame(sliderLooper);
    }

    sliderLooperRequest = requestAnimationFrame(sliderLooper);

    // EVENTS
    BUTTON_NEXT.addEventListener('click', function () {
        nextSlide();
        i = 0;
    });
    BUTTON_PREVIOUS.addEventListener('click', function () {
        previousSlide();
        i = 0;
    });
};
},{}],65:[function(require,module,exports) {
'use strict';

var _imagesSet = require('./imagesSet.js');

var projectSlider = function () {
    var slides = document.querySelectorAll('.slider__panel'),
        images_set = document.querySelectorAll('.images__set'),
        current_slide = 0,
        previous_slide = slides.length - 1,
        BUTTON_NEXT = document.querySelector('.slider__controls--next'),
        BUTTON_PREVIOUS = document.querySelector('.slider__controls--previous');

    (0, _imagesSet.imagesSlider)();

    // SINGLE
    function nextSlide() {
        goToSlide(current_slide + 1);
    }
    function previousSlide() {
        goToSlide(current_slide - 1);
    }

    // CHANGER
    function goToSlide(n) {
        slides[current_slide].className = 'slider__panel';
        slides[previous_slide].className = 'slider__panel';

        current_slide = (n + slides.length) % slides.length;
        previous_slide = (n - 1 + slides.length) % slides.length;

        slides[current_slide].className += ' slider__panel--is-active';
        slides[previous_slide].className += ' slider__panel--is-transitionning';
    }

    // EVENTS
    BUTTON_NEXT.addEventListener('click', function () {
        nextSlide();
        (0, _imagesSet.imagesSlider)();
        var i = 0;
    });
    BUTTON_PREVIOUS.addEventListener('click', function () {
        previousSlide();
        (0, _imagesSet.imagesSlider)();
        var i = 0;
    });
}();
},{"./imagesSet.js":64}],66:[function(require,module,exports) {
(function dropdown() {
    var triggers = document.querySelectorAll('.dropdown > h4'),
        parents = [];

    var _loop = function _loop(i) {
        var content = triggers[i].parentNode.childNodes[3],
            content_height = content.clientHeight,
            parent = triggers[i].parentNode,
            open = void 0;

        parents.push(parent);

        content.style.height = 0;

        triggers[i].addEventListener('click', function () {
            if (parent.classList.contains('dropdown--is-open')) {
                open = true;
            } else {
                open = false;
            }

            parents.forEach(function (element) {
                element.classList.remove('dropdown--is-open');
                element.querySelector('.dropdown__content').style.height = 0;
            });

            open == true ? parent.classList.remove('dropdown--is-open') : parent.classList.add('dropdown--is-open');

            if (content.clientHeight > 0) {
                content.style.height = 0 + 'px';
            } else {
                content.style.height = content_height + 'px';
            }
        });
    };

    for (var i = 0; i < triggers.length; i++) {
        _loop(i);
    }
})();

(function sidebarDropdown() {
    var trigger = document.querySelectorAll('.tab'),
        target = document.querySelectorAll('.services__details'),
        tab = document.querySelector('.services__tab');

    var _loop2 = function _loop2(i) {

        trigger[i].addEventListener('mouseover', function () {

            for (var _i = 0; _i < trigger.length; _i++) {
                var element = trigger[_i];
                element.classList.remove('tab--is-active');
            }

            trigger[i].classList.add('tab--is-active');
            var data = trigger[i].dataset.service,
                top = trigger[i].dataset.top;

            for (var _i2 = 0; _i2 < target.length; _i2++) {
                target[_i2].classList.remove('services__details--is-active');

                if (target[_i2].dataset.service == data) {
                    target[_i2].classList.add('services__details--is-active');
                }
            }

            tab.style.transform = 'translateY(' + top + 'rem)';
        });
    };

    for (var i = 0; i < trigger.length; i++) {
        _loop2(i);
    }
})();
},{}],60:[function(require,module,exports) {
var getURLParameter = function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};

var messageFeedback = function messageFeedback() {

    var MESSAGE = getURLParameter('message'),
        OUTTER = document.querySelector('.form__input--submit'),
        OUTTER_VALUE = 'message envoyé',
        LEGAL_ERROR = 'Veuillez lire et acceptez les mentions légales avant d\'envoyer votre message',
        FEEDBACK = document.querySelector('.contact__feedback');

    if (MESSAGE == 'message sent') {
        OUTTER.classList.add('form__input--submitted');
        OUTTER.value = OUTTER_VALUE;
        FEEDBACK.classList.add('contact__feedback--is-visible');
    }
    if (MESSAGE == 'legal error') {
        FEEDBACK.innerHTML = LEGAL_ERROR;
        FEEDBACK.classList.add('contact__feedback--is-visible');
    }
};

messageFeedback();
},{}],4:[function(require,module,exports) {
"use strict";

require("./js/header.js");

require("./js/nav/navScroll.js");

require("./js/nav/highlight.js");

require("./js/nav/progress.js");

require("./js/mobilenav.js");

require("./js/slider/imagesSet.js");

require("./js/slider/projects.js");

require("./js/dropdown/dropdown.js");

require("./js/message.js");

function browserDetection() {
    var isSafari = navigator.userAgent.indexOf("Safari") != -1,
        isOpera = (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1,
        isChrome = navigator.userAgent.indexOf("Chrome") != -1,
        isFirefox = navigator.userAgent.indexOf("Firefox") != -1,
        isIE = navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true;
}
},{"./js/header.js":58,"./js/nav/navScroll.js":61,"./js/nav/highlight.js":62,"./js/nav/progress.js":63,"./js/mobilenav.js":59,"./js/slider/imagesSet.js":64,"./js/slider/projects.js":65,"./js/dropdown/dropdown.js":66,"./js/message.js":60}],93:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49983' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[93,4])
//# sourceMappingURL=/assets.ba5aab93.map