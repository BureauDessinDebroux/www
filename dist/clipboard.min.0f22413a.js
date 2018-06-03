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
})({153:[function(require,module,exports) {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.ClipboardJS = e() : t.ClipboardJS = e();
}(this, function () {
  return function (t) {
    function e(o) {
      if (n[o]) return n[o].exports;var r = n[o] = { i: o, l: !1, exports: {} };return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }var n = {};return e.m = t, e.c = n, e.i = function (t) {
      return t;
    }, e.d = function (t, n, o) {
      e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: o });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 3);
  }([function (t, e, n) {
    var o, r, i;!function (a, c) {
      r = [t, n(7)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i);
    }(0, function (t, e) {
      "use strict";
      function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }var o = function (t) {
        return t && t.__esModule ? t : { default: t };
      }(e),
          r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          i = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
          }
        }return function (e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        };
      }(),
          a = function () {
        function t(e) {
          n(this, t), this.resolveOptions(e), this.initSelection();
        }return i(t, [{ key: "resolveOptions", value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "";
          } }, { key: "initSelection", value: function value() {
            this.text ? this.selectFake() : this.target && this.selectTarget();
          } }, { key: "selectFake", value: function value() {
            var t = this,
                e = "rtl" == document.documentElement.getAttribute("dir");this.removeFake(), this.fakeHandlerCallback = function () {
              return t.removeFake();
            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";var n = window.pageYOffset || document.documentElement.scrollTop;this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o.default)(this.fakeElem), this.copyText();
          } }, { key: "removeFake", value: function value() {
            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);
          } }, { key: "selectTarget", value: function value() {
            this.selectedText = (0, o.default)(this.target), this.copyText();
          } }, { key: "copyText", value: function value() {
            var t = void 0;try {
              t = document.execCommand(this.action);
            } catch (e) {
              t = !1;
            }this.handleResult(t);
          } }, { key: "handleResult", value: function value(t) {
            this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) });
          } }, { key: "clearSelection", value: function value() {
            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
          } }, { key: "destroy", value: function value() {
            this.removeFake();
          } }, { key: "action", set: function set() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
          }, get: function get() {
            return this._action;
          } }, { key: "target", set: function set(t) {
            if (void 0 !== t) {
              if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target = t;
            }
          }, get: function get() {
            return this._target;
          } }]), t;
      }();t.exports = a;
    });
  }, function (t, e, n) {
    function o(t, e, n) {
      if (!t && !e && !n) throw new Error("Missing required arguments");if (!c.string(e)) throw new TypeError("Second argument must be a String");if (!c.fn(n)) throw new TypeError("Third argument must be a Function");if (c.node(t)) return r(t, e, n);if (c.nodeList(t)) return i(t, e, n);if (c.string(t)) return a(t, e, n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
    }function r(t, e, n) {
      return t.addEventListener(e, n), { destroy: function destroy() {
          t.removeEventListener(e, n);
        } };
    }function i(t, e, n) {
      return Array.prototype.forEach.call(t, function (t) {
        t.addEventListener(e, n);
      }), { destroy: function destroy() {
          Array.prototype.forEach.call(t, function (t) {
            t.removeEventListener(e, n);
          });
        } };
    }function a(t, e, n) {
      return u(document.body, t, e, n);
    }var c = n(6),
        u = n(5);t.exports = o;
  }, function (t, e) {
    function n() {}n.prototype = { on: function on(t, e, n) {
        var o = this.e || (this.e = {});return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;
      }, once: function once(t, e, n) {
        function o() {
          r.off(t, o), e.apply(n, arguments);
        }var r = this;return o._ = e, this.on(t, o, n);
      }, emit: function emit(t) {
        var e = [].slice.call(arguments, 1),
            n = ((this.e || (this.e = {}))[t] || []).slice(),
            o = 0,
            r = n.length;for (o; o < r; o++) {
          n[o].fn.apply(n[o].ctx, e);
        }return this;
      }, off: function off(t, e) {
        var n = this.e || (this.e = {}),
            o = n[t],
            r = [];if (o && e) for (var i = 0, a = o.length; i < a; i++) {
          o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
        }return r.length ? n[t] = r : delete n[t], this;
      } }, t.exports = n;
  }, function (t, e, n) {
    var o, r, i;!function (a, c) {
      r = [t, n(0), n(2), n(1)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i);
    }(0, function (t, e, n, o) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
      }function c(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }function u(t, e) {
        var n = "data-clipboard-" + t;if (e.hasAttribute(n)) return e.getAttribute(n);
      }var l = r(e),
          s = r(n),
          f = r(o),
          d = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
      },
          h = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
          }
        }return function (e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        };
      }(),
          p = function (t) {
        function e(t, n) {
          i(this, e);var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n), o.listenClick(t), o;
        }return c(e, t), h(e, [{ key: "resolveOptions", value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body;
          } }, { key: "listenClick", value: function value(t) {
            var e = this;this.listener = (0, f.default)(t, "click", function (t) {
              return e.onClick(t);
            });
          } }, { key: "onClick", value: function value(t) {
            var e = t.delegateTarget || t.currentTarget;this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this });
          } }, { key: "defaultAction", value: function value(t) {
            return u("action", t);
          } }, { key: "defaultTarget", value: function value(t) {
            var e = u("target", t);if (e) return document.querySelector(e);
          } }, { key: "defaultText", value: function value(t) {
            return u("text", t);
          } }, { key: "destroy", value: function value() {
            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);
          } }], [{ key: "isSupported", value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                e = "string" == typeof t ? [t] : t,
                n = !!document.queryCommandSupported;return e.forEach(function (t) {
              n = n && !!document.queryCommandSupported(t);
            }), n;
          } }]), e;
      }(s.default);t.exports = p;
    });
  }, function (t, e) {
    function n(t, e) {
      for (; t && t.nodeType !== o;) {
        if ("function" == typeof t.matches && t.matches(e)) return t;t = t.parentNode;
      }
    }var o = 9;if ("undefined" != typeof Element && !Element.prototype.matches) {
      var r = Element.prototype;r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector;
    }t.exports = n;
  }, function (t, e, n) {
    function o(t, e, n, o, r) {
      var a = i.apply(this, arguments);return t.addEventListener(n, a, r), { destroy: function destroy() {
          t.removeEventListener(n, a, r);
        } };
    }function r(t, e, n, r, i) {
      return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
        return o(t, e, n, r, i);
      }));
    }function i(t, e, n, o) {
      return function (n) {
        n.delegateTarget = a(n.target, e), n.delegateTarget && o.call(t, n);
      };
    }var a = n(4);t.exports = r;
  }, function (t, e) {
    e.node = function (t) {
      return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
    }, e.nodeList = function (t) {
      var n = Object.prototype.toString.call(t);return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]));
    }, e.string = function (t) {
      return "string" == typeof t || t instanceof String;
    }, e.fn = function (t) {
      return "[object Function]" === Object.prototype.toString.call(t);
    };
  }, function (t, e) {
    function n(t) {
      var e;if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
        var n = t.hasAttribute("readonly");n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;
      } else {
        t.hasAttribute("contenteditable") && t.focus();var o = window.getSelection(),
            r = document.createRange();r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();
      }return e;
    }t.exports = n;
  }]);
});
},{}],154:[function(require,module,exports) {

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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '57322' + '/');
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
},{}]},{},[154,153])
//# sourceMappingURL=/clipboard.min.0f22413a.map