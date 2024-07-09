"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.0.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(void 0, function () {
  "use strict";

  var t = function t(_t2) {
    do {
      _t2 += Math.floor(1e6 * Math.random());
    } while (document.getElementById(_t2));

    return _t2;
  },
      e = function e(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _i = t.getAttribute("href");

      if (!_i || !_i.includes("#") && !_i.startsWith(".")) return null;
      _i.includes("#") && !_i.startsWith("#") && (_i = "#" + _i.split("#")[1]), e = _i && "#" !== _i ? _i.trim() : null;
    }

    return e;
  },
      i = function i(t) {
    var i = e(t);
    return i && document.querySelector(i) ? i : null;
  },
      n = function n(t) {
    var i = e(t);
    return i ? document.querySelector(i) : null;
  },
      s = function s(t) {
    if (!t) return 0;

    var _window$getComputedSt = window.getComputedStyle(t),
        e = _window$getComputedSt.transitionDuration,
        i = _window$getComputedSt.transitionDelay;

    var n = Number.parseFloat(e),
        s = Number.parseFloat(i);
    return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
  },
      o = function o(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      r = function r(t) {
    return (t[0] || t).nodeType;
  },
      a = function a(t, e) {
    var i = !1;
    var n = e + 5;
    t.addEventListener("transitionend", function e() {
      i = !0, t.removeEventListener("transitionend", e);
    }), setTimeout(function () {
      i || o(t);
    }, n);
  },
      l = function l(t, e, i) {
    Object.keys(i).forEach(function (n) {
      var s = i[n],
          o = e[n],
          a = o && r(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l;
      if (!new RegExp(s).test(a)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(n, "\" provided type \"").concat(a, "\" but expected type \"").concat(s, "\"."));
    });
  },
      c = function c(t) {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      var _e2 = getComputedStyle(t),
          _i2 = getComputedStyle(t.parentNode);

      return "none" !== _e2.display && "none" !== _i2.display && "hidden" !== _e2.visibility;
    }

    return !1;
  },
      d = function d(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      h = function h(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e3 = t.getRootNode();

      return _e3 instanceof ShadowRoot ? _e3 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null;
  },
      u = function u() {},
      f = function f(t) {
    return t.offsetHeight;
  },
      p = function p() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      g = function g() {
    return "rtl" === document.documentElement.dir;
  },
      m = function m(t, e) {
    var i;
    i = function i() {
      var i = p();

      if (i) {
        var _n = i.fn[t];
        i.fn[t] = e.jQueryInterface, i.fn[t].Constructor = e, i.fn[t].noConflict = function () {
          return i.fn[t] = _n, e.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i();
  },
      _ = function _(t) {
    "function" == typeof t && t();
  },
      b = new Map();

  var v = {
    set: function set(t, e, i) {
      b.has(t) || b.set(t, new Map());
      var n = b.get(t);
      n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
    },
    get: function get(t, e) {
      return b.has(t) && b.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!b.has(t)) return;
      var i = b.get(t);
      i["delete"](e), 0 === i.size && b["delete"](t);
    }
  };
  var y = /[^.]*(?=\..*)\.|.*/,
      w = /\..*/,
      E = /::\d+$/,
      T = {};
  var A = 1;
  var L = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      O = /^(mouseenter|mouseleave)/i,
      k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function D(t, e) {
    return e && "".concat(e, "::").concat(A++) || t.uidEvent || A++;
  }

  function x(t) {
    var e = D(t);
    return t.uidEvent = e, T[e] = T[e] || {}, T[e];
  }

  function C(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var n = Object.keys(t);

    for (var _s = 0, _o = n.length; _s < _o; _s++) {
      var _o2 = t[n[_s]];
      if (_o2.originalHandler === e && _o2.delegationSelector === i) return _o2;
    }

    return null;
  }

  function S(t, e, i) {
    var n = "string" == typeof e,
        s = n ? i : e;
    var o = P(t);
    return k.has(o) || (o = t), [n, s, o];
  }

  function N(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;

    if (i || (i = n, n = null), O.test(e)) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      n ? n = _t3(n) : i = _t3(i);
    }

    var _S = S(e, i, n),
        _S2 = _slicedToArray(_S, 3),
        o = _S2[0],
        r = _S2[1],
        a = _S2[2],
        l = x(t),
        c = l[a] || (l[a] = {}),
        d = C(c, r, o ? i : null);

    if (d) return void (d.oneOff = d.oneOff && s);
    var h = D(r, e.replace(y, "")),
        u = o ? function (t, e, i) {
      return function n(s) {
        var o = t.querySelectorAll(e);

        for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
          for (var _a = o.length; _a--;) {
            if (o[_a] === _r) return s.delegateTarget = _r, n.oneOff && I.off(t, s.type, e, i), i.apply(_r, [s]);
          }
        }

        return null;
      };
    }(t, i, n) : function (t, e) {
      return function i(n) {
        return n.delegateTarget = t, i.oneOff && I.off(t, n.type, e), e.apply(t, [n]);
      };
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = h, c[h] = u, t.addEventListener(a, u, o);
  }

  function j(t, e, i, n, s) {
    var o = C(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }

  function P(t) {
    return t = t.replace(w, ""), L[t] || t;
  }

  var I = {
    on: function on(t, e, i, n) {
      N(t, e, i, n, !1);
    },
    one: function one(t, e, i, n) {
      N(t, e, i, n, !0);
    },
    off: function off(t, e, i, n) {
      if ("string" != typeof e || !t) return;

      var _S3 = S(e, i, n),
          _S4 = _slicedToArray(_S3, 3),
          s = _S4[0],
          o = _S4[1],
          r = _S4[2],
          a = r !== e,
          l = x(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void j(t, l, r, o, s ? i : null);
      }

      c && Object.keys(l).forEach(function (i) {
        !function (t, e, i, n) {
          var s = e[i] || {};
          Object.keys(s).forEach(function (o) {
            if (o.includes(n)) {
              var _n2 = s[o];
              j(t, e, i, _n2.originalHandler, _n2.delegationSelector);
            }
          });
        }(t, l, i, e.slice(1));
      });
      var d = l[r] || {};
      Object.keys(d).forEach(function (i) {
        var n = i.replace(E, "");

        if (!a || e.includes(n)) {
          var _e4 = d[i];
          j(t, l, r, _e4.originalHandler, _e4.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      var n = p(),
          s = P(e),
          o = e !== s,
          r = k.has(s);
      var a,
          l = !0,
          c = !0,
          d = !1,
          h = null;
      return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(s, l, !0)) : h = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(function (t) {
        Object.defineProperty(h, t, {
          get: function get() {
            return i[t];
          }
        });
      }), d && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h;
    }
  };

  var M =
  /*#__PURE__*/
  function () {
    function M(t) {
      _classCallCheck(this, M);

      (t = "string" == typeof t ? document.querySelector(t) : t) && (this._element = t, v.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(M, [{
      key: "dispose",
      value: function dispose() {
        v.remove(this._element, this.constructor.DATA_KEY), I.off(this._element, "." + this.constructor.DATA_KEY), this._element = null;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return v.get(t, this.DATA_KEY);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.0.0";
      }
    }]);

    return M;
  }();

  var H =
  /*#__PURE__*/
  function (_M) {
    _inherits(H, _M);

    function H() {
      _classCallCheck(this, H);

      return _possibleConstructorReturn(this, _getPrototypeOf(H).apply(this, arguments));
    }

    _createClass(H, [{
      key: "close",
      value: function close(t) {
        var e = t ? this._getRootElement(t) : this._element,
            i = this._triggerCloseEvent(e);

        null === i || i.defaultPrevented || this._removeElement(e);
      }
    }, {
      key: "_getRootElement",
      value: function _getRootElement(t) {
        return n(t) || t.closest(".alert");
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(t) {
        return I.trigger(t, "close.bs.alert");
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(t) {
        var _this = this;

        if (t.classList.remove("show"), !t.classList.contains("fade")) return void this._destroyElement(t);
        var e = s(t);
        I.one(t, "transitionend", function () {
          return _this._destroyElement(t);
        }), a(t, e);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(t) {
        t.parentNode && t.parentNode.removeChild(t), I.trigger(t, "closed.bs.alert");
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = v.get(this, "bs.alert");
          e || (e = new H(this)), "close" === t && e[t](this);
        });
      }
    }, {
      key: "handleDismiss",
      value: function handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.alert";
      }
    }]);

    return H;
  }(M);

  I.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', H.handleDismiss(new H())), m("alert", H);

  var R =
  /*#__PURE__*/
  function (_M2) {
    _inherits(R, _M2);

    function R() {
      _classCallCheck(this, R);

      return _possibleConstructorReturn(this, _getPrototypeOf(R).apply(this, arguments));
    }

    _createClass(R, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = v.get(this, "bs.button");
          e || (e = new R(this)), "toggle" === t && e[t]();
        });
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.button";
      }
    }]);

    return R;
  }(M);

  function B(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function W(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  I.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    var i = v.get(e, "bs.button");
    i || (i = new R(e)), i.toggle();
  }), m("button", R);
  var z = {
    setDataAttribute: function setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-" + W(e), i);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + W(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (i) {
        var n = i.replace(/^bs/, "");
        n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = B(t.dataset[i]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return B(t.getAttribute("data-bs-" + W(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      U = {
    find: function find(t) {
      var _ref;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref2;

      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var i = [];
      var n = t.parentNode;

      for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) {
        n.matches(e) && i.push(n), n = n.parentNode;
      }

      return i;
    },
    prev: function prev(t, e) {
      var i = t.previousElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var i = t.nextElementSibling;

      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling;
      }

      return [];
    }
  },
      $ = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      F = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      K = "next",
      Y = "prev",
      q = "left",
      V = "right";

  var X =
  /*#__PURE__*/
  function (_M3) {
    _inherits(X, _M3);

    function X(t, e) {
      var _this2;

      _classCallCheck(this, X);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(X).call(this, t)), _this2._items = null, _this2._interval = null, _this2._activeElement = null, _this2._isPaused = !1, _this2._isSliding = !1, _this2.touchTimeout = null, _this2.touchStartX = 0, _this2.touchDeltaX = 0, _this2._config = _this2._getConfig(e), _this2._indicatorsElement = U.findOne(".carousel-indicators", _this2._element), _this2._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this2._pointerEvent = Boolean(window.PointerEvent), _this2._addEventListeners();
      return _this2;
    }

    _createClass(X, [{
      key: "next",
      value: function next() {
        this._isSliding || this._slide(K);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && c(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._isSliding || this._slide(Y);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this3 = this;

        this._activeElement = U.findOne(".active.carousel-item", this._element);

        var e = this._getItemIndex(this._activeElement);

        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding) return void I.one(this._element, "slid.bs.carousel", function () {
          return _this3.to(t);
        });
        if (e === t) return this.pause(), void this.cycle();
        var i = t > e ? K : Y;

        this._slide(i, this._items[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null, _get(_getPrototypeOf(X.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, $, {}, t), l("carousel", t, F), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? V : q);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this4 = this;

        this._config.keyboard && I.on(this._element, "keydown.bs.carousel", function (t) {
          return _this4._keydown(t);
        }), "hover" === this._config.pause && (I.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this4.pause(t);
        }), I.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this4.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this5 = this;

        var t = function t(_t4) {
          !_this5._pointerEvent || "pen" !== _t4.pointerType && "touch" !== _t4.pointerType ? _this5._pointerEvent || (_this5.touchStartX = _t4.touches[0].clientX) : _this5.touchStartX = _t4.clientX;
        },
            e = function e(t) {
          _this5.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this5.touchStartX;
        },
            i = function i(t) {
          !_this5._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (_this5.touchDeltaX = t.clientX - _this5.touchStartX), _this5._handleSwipe(), "hover" === _this5._config.pause && (_this5.pause(), _this5.touchTimeout && clearTimeout(_this5.touchTimeout), _this5.touchTimeout = setTimeout(function (t) {
            return _this5.cycle(t);
          }, 500 + _this5._config.interval));
        };

        U.find(".carousel-item img", this._element).forEach(function (t) {
          I.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (I.on(this._element, "pointerdown.bs.carousel", function (e) {
          return t(e);
        }), I.on(this._element, "pointerup.bs.carousel", function (t) {
          return i(t);
        }), this._element.classList.add("pointer-event")) : (I.on(this._element, "touchstart.bs.carousel", function (e) {
          return t(e);
        }), I.on(this._element, "touchmove.bs.carousel", function (t) {
          return e(t);
        }), I.on(this._element, "touchend.bs.carousel", function (t) {
          return i(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(V)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(q)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? U.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var i = t === K,
            n = t === Y,
            s = this._getItemIndex(e),
            o = this._items.length - 1;

        if ((n && 0 === s || i && s === o) && !this._config.wrap) return e;
        var r = (s + (n ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r];
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var i = this._getItemIndex(t),
            n = this._getItemIndex(U.findOne(".active.carousel-item", this._element));

        return I.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: n,
          to: i
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e5 = U.findOne(".active", this._indicatorsElement);

          _e5.classList.remove("active"), _e5.removeAttribute("aria-current");

          var _i3 = U.find("[data-bs-target]", this._indicatorsElement);

          for (var _e6 = 0; _e6 < _i3.length; _e6++) {
            if (Number.parseInt(_i3[_e6].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              _i3[_e6].classList.add("active"), _i3[_e6].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || U.findOne(".active.carousel-item", this._element);
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this6 = this;

        var i = this._directionToOrder(t),
            n = U.findOne(".active.carousel-item", this._element),
            o = this._getItemIndex(n),
            r = e || this._getItemByOrder(i, n),
            l = this._getItemIndex(r),
            c = Boolean(this._interval),
            d = i === K,
            h = d ? "carousel-item-start" : "carousel-item-end",
            u = d ? "carousel-item-next" : "carousel-item-prev",
            p = this._orderToDirection(i);

        if (r && r.classList.contains("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(r, p).defaultPrevented && n && r) {
          if (this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r, this._element.classList.contains("slide")) {
            r.classList.add(u), f(r), n.classList.add(h), r.classList.add(h);

            var _t5 = s(n);

            I.one(n, "transitionend", function () {
              r.classList.remove(h, u), r.classList.add("active"), n.classList.remove("active", u, h), _this6._isSliding = !1, setTimeout(function () {
                I.trigger(_this6._element, "slid.bs.carousel", {
                  relatedTarget: r,
                  direction: p,
                  from: o,
                  to: l
                });
              }, 0);
            }), a(n, _t5);
          } else n.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, I.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: p,
            from: o,
            to: l
          });

          c && this.cycle();
        }
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [V, q].includes(t) ? g() ? t === q ? Y : K : t === q ? K : Y : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [K, Y].includes(t) ? g() ? t === Y ? q : V : t === Y ? V : q : t;
      }
    }], [{
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var i = v.get(t, "bs.carousel"),
            n = _objectSpread({}, $, {}, z.getDataAttributes(t));

        "object" == _typeof(e) && (n = _objectSpread({}, n, {}, e));
        var s = "string" == typeof e ? e : n.slide;
        if (i || (i = new X(t, n)), "number" == typeof e) i.to(e);else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError("No method named \"".concat(s, "\""));
          i[s]();
        } else n.interval && n.ride && (i.pause(), i.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          X.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = n(this);
        if (!e || !e.classList.contains("carousel")) return;

        var i = _objectSpread({}, z.getDataAttributes(e), {}, z.getDataAttributes(this)),
            s = this.getAttribute("data-bs-slide-to");

        s && (i.interval = !1), X.carouselInterface(e, i), s && v.get(e, "bs.carousel").to(s), t.preventDefault();
      }
    }, {
      key: "Default",
      get: function get() {
        return $;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.carousel";
      }
    }]);

    return X;
  }(M);

  I.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", X.dataApiClickHandler), I.on(window, "load.bs.carousel.data-api", function () {
    var t = U.find('[data-bs-ride="carousel"]');

    for (var _e7 = 0, _i4 = t.length; _e7 < _i4; _e7++) {
      X.carouselInterface(t[_e7], v.get(t[_e7], "bs.carousel"));
    }
  }), m("carousel", X);
  var Q = {
    toggle: !0,
    parent: ""
  },
      G = {
    toggle: "boolean",
    parent: "(string|element)"
  };

  var Z =
  /*#__PURE__*/
  function (_M4) {
    _inherits(Z, _M4);

    function Z(t, e) {
      var _this7;

      _classCallCheck(this, Z);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Z).call(this, t)), _this7._isTransitioning = !1, _this7._config = _this7._getConfig(e), _this7._triggerArray = U.find("[data-bs-toggle=\"collapse\"][href=\"#".concat(_this7._element.id, "\"],[data-bs-toggle=\"collapse\"][data-bs-target=\"#").concat(_this7._element.id, "\"]"));
      var n = U.find('[data-bs-toggle="collapse"]');

      for (var _t6 = 0, _e8 = n.length; _t6 < _e8; _t6++) {
        var _e9 = n[_t6],
            _s2 = i(_e9),
            _o3 = U.find(_s2).filter(function (t) {
          return t === _this7._element;
        });

        null !== _s2 && _o3.length && (_this7._selector = _s2, _this7._triggerArray.push(_e9));
      }

      _this7._parent = _this7._config.parent ? _this7._getParent() : null, _this7._config.parent || _this7._addAriaAndCollapsedClass(_this7._element, _this7._triggerArray), _this7._config.toggle && _this7.toggle();
      return _this7;
    }

    _createClass(Z, [{
      key: "toggle",
      value: function toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this8 = this;

        if (this._isTransitioning || this._element.classList.contains("show")) return;
        var t, e;
        this._parent && (t = U.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof _this8._config.parent ? t.getAttribute("data-bs-parent") === _this8._config.parent : t.classList.contains("collapse");
        }), 0 === t.length && (t = null));
        var i = U.findOne(this._selector);

        if (t) {
          var _n3 = t.find(function (t) {
            return i !== t;
          });

          if (e = _n3 ? v.get(_n3, "bs.collapse") : null, e && e._isTransitioning) return;
        }

        if (I.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        t && t.forEach(function (t) {
          i !== t && Z.collapseInterface(t, "hide"), e || v.set(t, "bs.collapse", null);
        });

        var n = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
          t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
        }), this.setTransitioning(!0);
        var o = "scroll" + (n[0].toUpperCase() + n.slice(1)),
            r = s(this._element);
        I.one(this._element, "transitionend", function () {
          _this8._element.classList.remove("collapsing"), _this8._element.classList.add("collapse", "show"), _this8._element.style[n] = "", _this8.setTransitioning(!1), I.trigger(_this8._element, "shown.bs.collapse");
        }), a(this._element, r), this._element.style[n] = this._element[o] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this9 = this;

        if (this._isTransitioning || !this._element.classList.contains("show")) return;
        if (I.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", f(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;
        if (e > 0) for (var _t7 = 0; _t7 < e; _t7++) {
          var _e10 = this._triggerArray[_t7],
              _i5 = n(_e10);

          _i5 && !_i5.classList.contains("show") && (_e10.classList.add("collapsed"), _e10.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0), this._element.style[t] = "";
        var i = s(this._element);
        I.one(this._element, "transitionend", function () {
          _this9.setTransitioning(!1), _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse"), I.trigger(_this9._element, "hidden.bs.collapse");
        }), a(this._element, i);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(t) {
        this._isTransitioning = t;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        _get(_getPrototypeOf(Z.prototype), "dispose", this).call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread({}, Q, {}, t)).toggle = Boolean(t.toggle), l("collapse", t, G), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
    }, {
      key: "_getParent",
      value: function _getParent() {
        var _this10 = this;

        var t = this._config.parent;
        r(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = U.findOne(t);
        var e = "[data-bs-toggle=\"collapse\"][data-bs-parent=\"".concat(t, "\"]");
        return U.find(e, t).forEach(function (t) {
          var e = n(t);

          _this10._addAriaAndCollapsedClass(e, [t]);
        }), t;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        var i = t.classList.contains("show");
        e.forEach(function (t) {
          i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i);
        });
      }
    }], [{
      key: "collapseInterface",
      value: function collapseInterface(t, e) {
        var i = v.get(t, "bs.collapse");

        var n = _objectSpread({}, Q, {}, z.getDataAttributes(t), {}, "object" == _typeof(e) && e ? e : {});

        if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new Z(t, n)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Z.collapseInterface(this, t);
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Q;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.collapse";
      }
    }]);

    return Z;
  }(M);

  I.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = z.getDataAttributes(this),
        n = i(this);
    U.find(n).forEach(function (t) {
      var i = v.get(t, "bs.collapse");
      var n;
      i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, Z.collapseInterface(t, n);
    });
  }), m("collapse", Z);
  var J = "top",
      tt = "bottom",
      et = "right",
      it = "left",
      nt = [J, tt, et, it],
      st = nt.reduce(function (t, e) {
    return t.concat([e + "-start", e + "-end"]);
  }, []),
      ot = [].concat(nt, ["auto"]).reduce(function (t, e) {
    return t.concat([e, e + "-start", e + "-end"]);
  }, []),
      rt = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function at(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }

  function lt(t) {
    if (null == t) return window;

    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }

    return t;
  }

  function ct(t) {
    return t instanceof lt(t).Element || t instanceof Element;
  }

  function dt(t) {
    return t instanceof lt(t).HTMLElement || t instanceof HTMLElement;
  }

  function ht(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof lt(t).ShadowRoot || t instanceof ShadowRoot);
  }

  var ut = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
        dt(s) && at(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
          i = {
        popper: {
          position: e.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
            return t[e] = "", t;
          }, {});
          dt(n) && at(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
            n.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };

  function ft(t) {
    return t.split("-")[0];
  }

  function pt(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    };
  }

  function gt(t) {
    var e = pt(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    };
  }

  function mt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;

    if (i && ht(i)) {
      var n = e;

      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }

    return !1;
  }

  function _t(t) {
    return lt(t).getComputedStyle(t);
  }

  function bt(t) {
    return ["table", "td", "th"].indexOf(at(t)) >= 0;
  }

  function vt(t) {
    return ((ct(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }

  function yt(t) {
    return "html" === at(t) ? t : t.assignedSlot || t.parentNode || (ht(t) ? t.host : null) || vt(t);
  }

  function wt(t) {
    return dt(t) && "fixed" !== _t(t).position ? t.offsetParent : null;
  }

  function Et(t) {
    for (var e = lt(t), i = wt(t); i && bt(i) && "static" === _t(i).position;) {
      i = wt(i);
    }

    return i && ("html" === at(i) || "body" === at(i) && "static" === _t(i).position) ? e : i || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && dt(t) && "fixed" === _t(t).position) return null;

      for (var i = yt(t); dt(i) && ["html", "body"].indexOf(at(i)) < 0;) {
        var n = _t(i);

        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode;
      }

      return null;
    }(t) || e;
  }

  function Tt(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }

  var At = Math.max,
      Lt = Math.min,
      Ot = Math.round;

  function kt(t, e, i) {
    return At(t, Lt(e, i));
  }

  function Dt(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }

  function xt(t, e) {
    return e.reduce(function (e, i) {
      return e[i] = t, e;
    }, {});
  }

  var Ct = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = ft(i.placement),
          l = Tt(a),
          c = [it, et].indexOf(a) >= 0 ? "height" : "width";

      if (o && r) {
        var d = function (t, e) {
          return Dt("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) ? t : xt(t, nt));
        }(s.padding, i),
            h = gt(o),
            u = "y" === l ? J : it,
            f = "y" === l ? tt : et,
            p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
            g = r[l] - i.rects.reference[l],
            m = Et(o),
            _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
            b = p / 2 - g / 2,
            v = d[u],
            y = _ - h[c] - d[f],
            w = _ / 2 - h[c] / 2 + b,
            E = kt(v, w, y),
            T = l;

        i.modifiersData[n] = ((e = {})[T] = E, e.centerOffset = E - w, e);
      }
    },
    effect: function effect(t) {
      var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && mt(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  },
      St = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function Nt(t) {
    var e,
        i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.offsets,
        r = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = t.roundOffsets,
        d = !0 === c ? function (t) {
      var e = t.x,
          i = t.y,
          n = window.devicePixelRatio || 1;
      return {
        x: Ot(Ot(e * n) / n) || 0,
        y: Ot(Ot(i * n) / n) || 0
      };
    }(o) : "function" == typeof c ? c(o) : o,
        h = d.x,
        u = void 0 === h ? 0 : h,
        f = d.y,
        p = void 0 === f ? 0 : f,
        g = o.hasOwnProperty("x"),
        m = o.hasOwnProperty("y"),
        _ = it,
        b = J,
        v = window;

    if (l) {
      var y = Et(i),
          w = "clientHeight",
          E = "clientWidth";
      y === lt(i) && "static" !== _t(y = vt(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === J && (b = tt, p -= y[w] - n.height, p *= a ? 1 : -1), s === it && (_ = et, u -= y[E] - n.width, u *= a ? 1 : -1);
    }

    var T,
        A = Object.assign({
      position: r
    }, l && St);
    return a ? Object.assign({}, A, ((T = {})[b] = m ? "0" : "", T[_] = g ? "0" : "", T.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", T)) : Object.assign({}, A, ((e = {})[b] = m ? p + "px" : "", e[_] = g ? u + "px" : "", e.transform = "", e));
  }

  var jt = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
        placement: ft(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: s
      };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Nt(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Nt(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      });
    },
    data: {}
  },
      Pt = {
    passive: !0
  },
      It = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function fn() {},
    effect: function effect(t) {
      var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = lt(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function (t) {
        t.addEventListener("scroll", i.update, Pt);
      }), a && l.addEventListener("resize", i.update, Pt), function () {
        o && c.forEach(function (t) {
          t.removeEventListener("scroll", i.update, Pt);
        }), a && l.removeEventListener("resize", i.update, Pt);
      };
    },
    data: {}
  },
      Mt = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Ht(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Mt[t];
    });
  }

  var Rt = {
    start: "end",
    end: "start"
  };

  function Bt(t) {
    return t.replace(/start|end/g, function (t) {
      return Rt[t];
    });
  }

  function Wt(t) {
    var e = lt(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }

  function zt(t) {
    return pt(vt(t)).left + Wt(t).scrollLeft;
  }

  function Ut(t) {
    var e = _t(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;

    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }

  function $t(t, e) {
    var i;
    void 0 === e && (e = []);

    var n = function t(e) {
      return ["html", "body", "#document"].indexOf(at(e)) >= 0 ? e.ownerDocument.body : dt(e) && Ut(e) ? e : t(yt(e));
    }(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = lt(n),
        r = s ? [o].concat(o.visualViewport || [], Ut(n) ? n : []) : n,
        a = e.concat(r);

    return s ? a : a.concat($t(yt(r)));
  }

  function Ft(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }

  function Kt(t, e) {
    return "viewport" === e ? Ft(function (t) {
      var e = lt(t),
          i = vt(t),
          n = e.visualViewport,
          s = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;
      return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: s,
        height: o,
        x: r + zt(t),
        y: a
      };
    }(t)) : dt(e) ? function (t) {
      var e = pt(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : Ft(function (t) {
      var e,
          i = vt(t),
          n = Wt(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = At(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = At(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + zt(t),
          l = -n.scrollTop;
      return "rtl" === _t(s || i).direction && (a += At(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(vt(t)));
  }

  function Yt(t) {
    return t.split("-")[1];
  }

  function qt(t) {
    var e,
        i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? ft(s) : null,
        r = s ? Yt(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;

    switch (o) {
      case J:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;

      case tt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;

      case et:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;

      case it:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;

      default:
        e = {
          x: i.x,
          y: i.y
        };
    }

    var c = o ? Tt(o) : null;

    if (null != c) {
      var d = "y" === c ? "height" : "width";

      switch (r) {
        case "start":
          e[c] = e[c] - (i[d] / 2 - n[d] / 2);
          break;

        case "end":
          e[c] = e[c] + (i[d] / 2 - n[d] / 2);
      }
    }

    return e;
  }

  function Vt(t, e) {
    void 0 === e && (e = {});

    var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.boundary,
        r = void 0 === o ? "clippingParents" : o,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = i.elementContext,
        d = void 0 === c ? "popper" : c,
        h = i.altBoundary,
        u = void 0 !== h && h,
        f = i.padding,
        p = void 0 === f ? 0 : f,
        g = Dt("number" != typeof p ? p : xt(p, nt)),
        m = "popper" === d ? "reference" : "popper",
        _ = t.elements.reference,
        b = t.rects.popper,
        v = t.elements[u ? m : d],
        y = function (t, e, i) {
      var n = "clippingParents" === e ? function (t) {
        var e = $t(yt(t)),
            i = ["absolute", "fixed"].indexOf(_t(t).position) >= 0 && dt(t) ? Et(t) : t;
        return ct(i) ? e.filter(function (t) {
          return ct(t) && mt(t, i) && "body" !== at(t);
        }) : [];
      }(t) : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
        var n = Kt(t, i);
        return e.top = At(n.top, e.top), e.right = Lt(n.right, e.right), e.bottom = Lt(n.bottom, e.bottom), e.left = At(n.left, e.left), e;
      }, Kt(t, o));
      return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
    }(ct(v) ? v : v.contextElement || vt(t.elements.popper), r, l),
        w = pt(_),
        E = qt({
      reference: w,
      element: b,
      strategy: "absolute",
      placement: s
    }),
        T = Ft(Object.assign({}, b, E)),
        A = "popper" === d ? T : w,
        L = {
      top: y.top - A.top + g.top,
      bottom: A.bottom - y.bottom + g.bottom,
      left: y.left - A.left + g.left,
      right: A.right - y.right + g.right
    },
        O = t.modifiersData.offset;

    if ("popper" === d && O) {
      var k = O[s];
      Object.keys(L).forEach(function (t) {
        var e = [et, tt].indexOf(t) >= 0 ? 1 : -1,
            i = [J, tt].indexOf(t) >= 0 ? "y" : "x";
        L[t] += k[i] * e;
      });
    }

    return L;
  }

  function Xt(t, e) {
    void 0 === e && (e = {});
    var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? ot : l,
        d = Yt(n),
        h = d ? a ? st : st.filter(function (t) {
      return Yt(t) === d;
    }) : nt,
        u = h.filter(function (t) {
      return c.indexOf(t) >= 0;
    });
    0 === u.length && (u = h);
    var f = u.reduce(function (e, i) {
      return e[i] = Vt(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[ft(i)], e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }

  var Qt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name;

      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, d = i.boundary, h = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, g = i.allowedAutoPlacements, m = e.options.placement, _ = ft(m), b = l || (_ !== m && p ? function (t) {
          if ("auto" === ft(t)) return [];
          var e = Ht(t);
          return [Bt(t), e, Bt(e)];
        }(m) : [Ht(m)]), v = [m].concat(b).reduce(function (t, i) {
          return t.concat("auto" === ft(i) ? Xt(e, {
            placement: i,
            boundary: d,
            rootBoundary: h,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: g
          }) : i);
        }, []), y = e.rects.reference, w = e.rects.popper, E = new Map(), T = !0, A = v[0], L = 0; L < v.length; L++) {
          var O = v[L],
              k = ft(O),
              D = "start" === Yt(O),
              x = [J, tt].indexOf(k) >= 0,
              C = x ? "width" : "height",
              S = Vt(e, {
            placement: O,
            boundary: d,
            rootBoundary: h,
            altBoundary: u,
            padding: c
          }),
              N = x ? D ? et : it : D ? tt : J;
          y[C] > w[C] && (N = Ht(N));
          var j = Ht(N),
              P = [];

          if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[j] <= 0), P.every(function (t) {
            return t;
          })) {
            A = O, T = !1;
            break;
          }

          E.set(O, P);
        }

        if (T) for (var I = function I(t) {
          var e = v.find(function (e) {
            var i = E.get(e);
            if (i) return i.slice(0, t).every(function (t) {
              return t;
            });
          });
          if (e) return A = e, "break";
        }, M = p ? 3 : 1; M > 0 && "break" !== I(M); M--) {
          ;
        }
        e.placement !== A && (e.modifiersData[n]._skip = !0, e.placement = A, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function Gt(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    };
  }

  function Zt(t) {
    return [J, et, tt, it].some(function (e) {
      return t[e] >= 0;
    });
  }

  var Jt = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Vt(e, {
        elementContext: "reference"
      }),
          a = Vt(e, {
        altBoundary: !0
      }),
          l = Gt(r, n),
          c = Gt(a, s, o),
          d = Zt(l),
          h = Zt(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: d,
        hasPopperEscaped: h
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": d,
        "data-popper-escaped": h
      });
    }
  },
      te = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = ot.reduce(function (t, i) {
        return t[i] = function (t, e, i) {
          var n = ft(t),
              s = [it, J].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {
            placement: t
          })) : i,
              r = o[0],
              a = o[1];
          return r = r || 0, a = (a || 0) * s, [it, et].indexOf(n) >= 0 ? {
            x: a,
            y: r
          } : {
            x: r,
            y: a
          };
        }(i, e.rects, o), t;
      }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
    }
  },
      ee = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
          i = t.name;
      e.modifiersData[i] = qt({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  },
      ie = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          d = i.altBoundary,
          h = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          g = void 0 === p ? 0 : p,
          m = Vt(e, {
        boundary: l,
        rootBoundary: c,
        padding: h,
        altBoundary: d
      }),
          _ = ft(e.placement),
          b = Yt(e.placement),
          v = !b,
          y = Tt(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          T = e.rects.reference,
          A = e.rects.popper,
          L = "function" == typeof g ? g(Object.assign({}, e.rects, {
        placement: e.placement
      })) : g,
          O = {
        x: 0,
        y: 0
      };

      if (E) {
        if (o || a) {
          var k = "y" === y ? J : it,
              D = "y" === y ? tt : et,
              x = "y" === y ? "height" : "width",
              C = E[y],
              S = E[y] + m[k],
              N = E[y] - m[D],
              j = f ? -A[x] / 2 : 0,
              P = "start" === b ? T[x] : A[x],
              I = "start" === b ? -A[x] : -T[x],
              M = e.elements.arrow,
              H = f && M ? gt(M) : {
            width: 0,
            height: 0
          },
              R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
              B = R[k],
              W = R[D],
              z = kt(0, T[x], H[x]),
              U = v ? T[x] / 2 - j - z - B - L : P - z - B - L,
              $ = v ? -T[x] / 2 + j + z + W + L : I + z + W + L,
              F = e.elements.arrow && Et(e.elements.arrow),
              K = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
              Y = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
              q = E[y] + U - Y - K,
              V = E[y] + $ - Y;

          if (o) {
            var X = kt(f ? Lt(S, q) : S, C, f ? At(N, V) : N);
            E[y] = X, O[y] = X - C;
          }

          if (a) {
            var Q = "x" === y ? J : it,
                G = "x" === y ? tt : et,
                Z = E[w],
                nt = Z + m[Q],
                st = Z - m[G],
                ot = kt(f ? Lt(nt, q) : nt, Z, f ? At(st, V) : st);
            E[w] = ot, O[w] = ot - Z;
          }
        }

        e.modifiersData[n] = O;
      }
    },
    requiresIfExists: ["offset"]
  };

  function ne(t, e, i) {
    void 0 === i && (i = !1);
    var n,
        s,
        o = vt(e),
        r = pt(t),
        a = dt(e),
        l = {
      scrollLeft: 0,
      scrollTop: 0
    },
        c = {
      x: 0,
      y: 0
    };
    return (a || !a && !i) && (("body" !== at(e) || Ut(o)) && (l = (n = e) !== lt(n) && dt(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : Wt(n)), dt(e) ? ((c = pt(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = zt(o))), {
      x: r.left + l.scrollLeft - c.x,
      y: r.top + l.scrollTop - c.y,
      width: r.width,
      height: r.height
    };
  }

  var se = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function oe() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }

    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }

  function re(t) {
    void 0 === t && (t = {});
    var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? se : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
          r,
          a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, se, o),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      },
          l = [],
          c = !1,
          d = {
        state: a,
        setOptions: function setOptions(i) {
          h(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
            reference: ct(t) ? $t(t) : t.contextElement ? $t(t.contextElement) : [],
            popper: $t(e)
          };

          var s,
              r,
              c = function (t) {
            var e = function (t) {
              var e = new Map(),
                  i = new Set(),
                  n = [];
              return t.forEach(function (t) {
                e.set(t.name, t);
              }), t.forEach(function (t) {
                i.has(t.name) || function t(s) {
                  i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach(function (n) {
                    if (!i.has(n)) {
                      var s = e.get(n);
                      s && t(s);
                    }
                  }), n.push(s);
                }(t);
              }), n;
            }(t);

            return rt.reduce(function (t, i) {
              return t.concat(e.filter(function (t) {
                return t.phase === i;
              }));
            }, []);
          }((s = [].concat(n, a.options.modifiers), r = s.reduce(function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t;
          }, {}), Object.keys(r).map(function (t) {
            return r[t];
          })));

          return a.orderedModifiers = c.filter(function (t) {
            return t.enabled;
          }), a.orderedModifiers.forEach(function (t) {
            var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;

            if ("function" == typeof s) {
              var o = s({
                state: a,
                name: e,
                instance: d,
                options: n
              });
              l.push(o || function () {});
            }
          }), d.update();
        },
        forceUpdate: function forceUpdate() {
          if (!c) {
            var t = a.elements,
                e = t.reference,
                i = t.popper;

            if (oe(e, i)) {
              a.rects = {
                reference: ne(e, Et(i), "fixed" === a.options.strategy),
                popper: gt(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data);
              });

              for (var n = 0; n < a.orderedModifiers.length; n++) {
                if (!0 !== a.reset) {
                  var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      h = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: h,
                    instance: d
                  }) || a);
                } else a.reset = !1, n = -1;
              }
            }
          }
        },
        update: (s = function s() {
          return new Promise(function (t) {
            d.forceUpdate(), t(a);
          });
        }, function () {
          return r || (r = new Promise(function (t) {
            Promise.resolve().then(function () {
              r = void 0, t(s());
            });
          })), r;
        }),
        destroy: function destroy() {
          h(), c = !0;
        }
      };
      if (!oe(t, e)) return d;

      function h() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }

      return d.setOptions(i).then(function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t);
      }), d;
    };
  }

  var ae = re(),
      le = re({
    defaultModifiers: [It, ee, jt, ut]
  }),
      ce = re({
    defaultModifiers: [It, ee, jt, ut, te, Qt, ie, Ct, Jt]
  }),
      de = Object.freeze({
    __proto__: null,
    popperGenerator: re,
    detectOverflow: Vt,
    createPopperBase: ae,
    createPopper: ce,
    createPopperLite: le,
    top: J,
    bottom: tt,
    right: et,
    left: it,
    auto: "auto",
    basePlacements: nt,
    start: "start",
    end: "end",
    clippingParents: "clippingParents",
    viewport: "viewport",
    popper: "popper",
    reference: "reference",
    variationPlacements: st,
    placements: ot,
    beforeRead: "beforeRead",
    read: "read",
    afterRead: "afterRead",
    beforeMain: "beforeMain",
    main: "main",
    afterMain: "afterMain",
    beforeWrite: "beforeWrite",
    write: "write",
    afterWrite: "afterWrite",
    modifierPhases: rt,
    applyStyles: ut,
    arrow: Ct,
    computeStyles: jt,
    eventListeners: It,
    flip: Qt,
    hide: Jt,
    offset: te,
    popperOffsets: ee,
    preventOverflow: ie
  });

  var he = new RegExp("ArrowUp|ArrowDown|Escape"),
      ue = g() ? "top-end" : "top-start",
      fe = g() ? "top-start" : "top-end",
      pe = g() ? "bottom-end" : "bottom-start",
      ge = g() ? "bottom-start" : "bottom-end",
      me = g() ? "left-start" : "right-start",
      _e = g() ? "right-start" : "left-start",
      be = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      ve = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var ye =
  /*#__PURE__*/
  function (_M5) {
    _inherits(ye, _M5);

    function ye(t, e) {
      var _this11;

      _classCallCheck(this, ye);

      _this11 = _possibleConstructorReturn(this, _getPrototypeOf(ye).call(this, t)), _this11._popper = null, _this11._config = _this11._getConfig(e), _this11._menu = _this11._getMenuElement(), _this11._inNavbar = _this11._detectNavbar(), _this11._addEventListeners();
      return _this11;
    }

    _createClass(ye, [{
      key: "toggle",
      value: function toggle() {
        d(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
      }
    }, {
      key: "show",
      value: function show() {
        if (d(this._element) || this._menu.classList.contains("show")) return;
        var t = ye.getParentFromElement(this._element),
            e = {
          relatedTarget: this._element
        };

        if (!I.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          var _ref3;

          if (this._inNavbar) z.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === de) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var _e11 = this._element;
            "parent" === this._config.reference ? _e11 = t : r(this._config.reference) ? (_e11 = this._config.reference, void 0 !== this._config.reference.jquery && (_e11 = this._config.reference[0])) : "object" == _typeof(this._config.reference) && (_e11 = this._config.reference);

            var _i6 = this._getPopperConfig(),
                _n4 = _i6.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });

            this._popper = ce(_e11, this._menu, _i6), _n4 && z.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref3 = []).concat.apply(_ref3, _toConsumableArray(document.body.children)).forEach(function (t) {
            return I.on(t, "mouseover", u);
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), I.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (d(this._element) || !this._menu.classList.contains("show")) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._menu = null, this._popper && (this._popper.destroy(), this._popper = null), _get(_getPrototypeOf(ye.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this12 = this;

        I.on(this._element, "click.bs.dropdown", function (t) {
          t.preventDefault(), _this12.toggle();
        });
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref4;

        I.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
          return I.off(t, "mouseover", u);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), z.removeDataAttribute(this._menu, "popper"), I.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread({}, this.constructor.Default, {}, z.getDataAttributes(this._element), {}, t), l("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return U.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return me;
        if (t.classList.contains("dropstart")) return _e;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? fe : ue : e ? ge : pe;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this13 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this13._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread({}, t, {}, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(t) {
        var e = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c);
        if (!e.length) return;
        var i = e.indexOf(t.target);
        "ArrowUp" === t.key && i > 0 && i--, "ArrowDown" === t.key && i < e.length - 1 && i++, i = -1 === i ? 0 : i, e[i].focus();
      }
    }], [{
      key: "dropdownInterface",
      value: function dropdownInterface(t, e) {
        var i = v.get(t, "bs.dropdown");

        if (i || (i = new ye(t, "object" == _typeof(e) ? e : null)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError("No method named \"".concat(e, "\""));
          i[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          ye.dropdownInterface(this, t);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t) {
          if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
          if (/input|select|option|textarea|form/i.test(t.target.tagName)) return;
        }

        var e = U.find('[data-bs-toggle="dropdown"]');

        for (var _i7 = 0, _n5 = e.length; _i7 < _n5; _i7++) {
          var _n6 = v.get(e[_i7], "bs.dropdown");

          if (!_n6 || !1 === _n6._config.autoClose) continue;
          if (!_n6._element.classList.contains("show")) continue;
          var _s3 = {
            relatedTarget: _n6._element
          };

          if (t) {
            var _e12 = t.composedPath(),
                _i8 = _e12.includes(_n6._menu);

            if (_e12.includes(_n6._element) || "inside" === _n6._config.autoClose && !_i8 || "outside" === _n6._config.autoClose && _i8) continue;
            if ("keyup" === t.type && "Tab" === t.key && _n6._menu.contains(t.target)) continue;
            "click" === t.type && (_s3.clickEvent = t);
          }

          _n6._completeHide(_s3);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return n(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var _this14 = this;

        if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !he.test(t.key)) return;
        var e = this.classList.contains("show");
        if (!e && "Escape" === t.key) return;
        if (t.preventDefault(), t.stopPropagation(), d(this)) return;

        var i = function i() {
          return _this14.matches('[data-bs-toggle="dropdown"]') ? _this14 : U.prev(_this14, '[data-bs-toggle="dropdown"]')[0];
        };

        if ("Escape" === t.key) return i().focus(), void ye.clearMenus();
        e || "ArrowUp" !== t.key && "ArrowDown" !== t.key ? e && "Space" !== t.key ? ye.getInstance(i())._selectMenuItem(t) : ye.clearMenus() : i().click();
      }
    }, {
      key: "Default",
      get: function get() {
        return be;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ve;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.dropdown";
      }
    }]);

    return ye;
  }(M);

  I.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', ye.dataApiKeydownHandler), I.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", ye.dataApiKeydownHandler), I.on(document, "click.bs.dropdown.data-api", ye.clearMenus), I.on(document, "keyup.bs.dropdown.data-api", ye.clearMenus), I.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), ye.dropdownInterface(this);
  }), m("dropdown", ye);

  var we = function we() {
    var t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  },
      Ee = function Ee() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : we();
    Te(), Ae("body", "paddingRight", function (e) {
      return e + t;
    }), Ae(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
      return e + t;
    }), Ae(".sticky-top", "marginRight", function (e) {
      return e - t;
    });
  },
      Te = function Te() {
    var t = document.body.style.overflow;
    t && z.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden";
  },
      Ae = function Ae(t, e, i) {
    var n = we();
    U.find(t).forEach(function (t) {
      if (t !== document.body && window.innerWidth > t.clientWidth + n) return;
      var s = t.style[e],
          o = window.getComputedStyle(t)[e];
      z.setDataAttribute(t, e, s), t.style[e] = i(Number.parseFloat(o)) + "px";
    });
  },
      Le = function Le() {
    Oe("body", "overflow"), Oe("body", "paddingRight"), Oe(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), Oe(".sticky-top", "marginRight");
  },
      Oe = function Oe(t, e) {
    U.find(t).forEach(function (t) {
      var i = z.getDataAttribute(t, e);
      void 0 === i ? t.style.removeProperty(e) : (z.removeDataAttribute(t, e), t.style[e] = i);
    });
  },
      ke = {
    isVisible: !0,
    isAnimated: !1,
    rootElement: document.body,
    clickCallback: null
  },
      De = {
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "element",
    clickCallback: "(function|null)"
  };

  var xe =
  /*#__PURE__*/
  function () {
    function xe(t) {
      _classCallCheck(this, xe);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    _createClass(xe, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
          _(t);
        })) : _(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this15 = this;

        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
          _this15.dispose(), _(t);
        })) : _(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t8 = document.createElement("div");

          _t8.className = "modal-backdrop", this._config.isAnimated && _t8.classList.add("fade"), this._element = _t8;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, ke, {}, "object" == _typeof(t) ? t : {}), l("backdrop", t, De), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this16 = this;

        this._isAppended || (this._config.rootElement.appendChild(this._getElement()), I.on(this._getElement(), "mousedown.bs.backdrop", function () {
          _(_this16._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (I.off(this._element, "mousedown.bs.backdrop"), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        if (!this._config.isAnimated) return void _(t);
        var e = s(this._getElement());
        I.one(this._getElement(), "transitionend", function () {
          return _(t);
        }), a(this._getElement(), e);
      }
    }]);

    return xe;
  }();

  var Ce = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      Se = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var Ne =
  /*#__PURE__*/
  function (_M6) {
    _inherits(Ne, _M6);

    function Ne(t, e) {
      var _this17;

      _classCallCheck(this, Ne);

      _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Ne).call(this, t)), _this17._config = _this17._getConfig(e), _this17._dialog = U.findOne(".modal-dialog", _this17._element), _this17._backdrop = _this17._initializeBackDrop(), _this17._isShown = !1, _this17._ignoreBackdropClick = !1, _this17._isTransitioning = !1;
      return _this17;
    }

    _createClass(Ne, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this18 = this;

        if (this._isShown || this._isTransitioning) return;
        this._isAnimated() && (this._isTransitioning = !0);
        var e = I.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        });
        this._isShown || e.defaultPrevented || (this._isShown = !0, Ee(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), I.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return _this18.hide(t);
        }), I.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          I.one(_this18._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this18._element && (_this18._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this18._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this19 = this;

        if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
        if (I.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var e = this._isAnimated();

        if (e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), I.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), I.off(this._element, "click.dismiss.bs.modal"), I.off(this._dialog, "mousedown.dismiss.bs.modal"), e) {
          var _t9 = s(this._element);

          I.one(this._element, "transitionend", function (t) {
            return _this19._hideModal(t);
          }), a(this._element, _t9);
        } else this._hideModal();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return I.off(t, ".bs.modal");
        }), _get(_getPrototypeOf(Ne.prototype), "dispose", this).call(this), I.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop.dispose(), this._backdrop = null, this._isShown = null, this._ignoreBackdropClick = null, this._isTransitioning = null;
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new xe({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, Ce, {}, z.getDataAttributes(this._element), {}, t), l("modal", t, Se), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this20 = this;

        var e = this._isAnimated(),
            i = U.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && f(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();

        var n = function n() {
          _this20._config.focus && _this20._element.focus(), _this20._isTransitioning = !1, I.trigger(_this20._element, "shown.bs.modal", {
            relatedTarget: t
          });
        };

        if (e) {
          var _t10 = s(this._dialog);

          I.one(this._dialog, "transitionend", n), a(this._dialog, _t10);
        } else n();
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this21 = this;

        I.off(document, "focusin.bs.modal"), I.on(document, "focusin.bs.modal", function (t) {
          document === t.target || _this21._element === t.target || _this21._element.contains(t.target) || _this21._element.focus();
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this22 = this;

        this._isShown ? I.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this22._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this22.hide()) : _this22._config.keyboard || "Escape" !== t.key || _this22._triggerBackdropTransition();
        }) : I.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this23 = this;

        this._isShown ? I.on(window, "resize.bs.modal", function () {
          return _this23._adjustDialog();
        }) : I.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this24 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove("modal-open"), _this24._resetAdjustments(), Le(), I.trigger(_this24._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this25 = this;

        I.on(this._element, "click.dismiss.bs.modal", function (t) {
          _this25._ignoreBackdropClick ? _this25._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this25._config.backdrop ? _this25.hide() : "static" === _this25._config.backdrop && _this25._triggerBackdropTransition());
        }), this._backdrop.show(t);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this26 = this;

        if (I.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
        var e = s(this._dialog);
        I.off(this._element, "transitionend"), I.one(this._element, "transitionend", function () {
          _this26._element.classList.remove("modal-static"), t || (I.one(_this26._element, "transitionend", function () {
            _this26._element.style.overflowY = "";
          }), a(_this26._element, e));
        }), a(this._element, e), this._element.focus();
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = we(),
            i = e > 0;
        (!i && t && !g() || i && !t && g()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !g() || !i && t && g()) && (this._element.style.paddingRight = e + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var i = Ne.getInstance(this) || new Ne(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
            i[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ce;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.modal";
      }
    }]);

    return Ne;
  }(M);

  I.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this27 = this;

    var e = n(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), I.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || I.one(e, "hidden.bs.modal", function () {
        c(_this27) && _this27.focus();
      });
    }), (Ne.getInstance(e) || new Ne(e)).toggle(this);
  }), m("modal", Ne);
  var je = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Pe = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Ie =
  /*#__PURE__*/
  function (_M7) {
    _inherits(Ie, _M7);

    function Ie(t, e) {
      var _this28;

      _classCallCheck(this, Ie);

      _this28 = _possibleConstructorReturn(this, _getPrototypeOf(Ie).call(this, t)), _this28._config = _this28._getConfig(e), _this28._isShown = !1, _this28._backdrop = _this28._initializeBackDrop(), _this28._addEventListeners();
      return _this28;
    }

    _createClass(Ie, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this29 = this;

        if (this._isShown) return;
        if (I.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented) return;
        this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (Ee(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show");
        var e = s(this._element);
        I.one(this._element, "transitionend", function () {
          I.trigger(_this29._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }), a(this._element, e);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this30 = this;

        if (!this._isShown) return;
        if (I.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) return;
        I.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide();
        var t = s(this._element);
        I.one(this._element, "transitionend", function () {
          _this30._element.setAttribute("aria-hidden", !0), _this30._element.removeAttribute("aria-modal"), _this30._element.removeAttribute("role"), _this30._element.style.visibility = "hidden", _this30._config.scroll || Le(), I.trigger(_this30._element, "hidden.bs.offcanvas");
        }), a(this._element, t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), _get(_getPrototypeOf(Ie.prototype), "dispose", this).call(this), I.off(document, "focusin.bs.offcanvas"), this._config = null, this._backdrop = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, je, {}, z.getDataAttributes(this._element), {}, "object" == _typeof(t) ? t : {}), l("offcanvas", t, Pe), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this31 = this;

        return new xe({
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this31.hide();
          }
        });
      }
    }, {
      key: "_enforceFocusOnElement",
      value: function _enforceFocusOnElement(t) {
        I.off(document, "focusin.bs.offcanvas"), I.on(document, "focusin.bs.offcanvas", function (e) {
          document === e.target || t === e.target || t.contains(e.target) || t.focus();
        }), t.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this32 = this;

        I.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', function () {
          return _this32.hide();
        }), I.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this32._config.keyboard && "Escape" === t.key && _this32.hide();
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = v.get(this, "bs.offcanvas") || new Ie(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return je;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.offcanvas";
      }
    }]);

    return Ie;
  }(M);

  I.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this33 = this;

    var e = n(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
    I.one(e, "hidden.bs.offcanvas", function () {
      c(_this33) && _this33.focus();
    });
    var i = U.findOne(".offcanvas.show");
    i && i !== e && Ie.getInstance(i).hide(), (v.get(e, "bs.offcanvas") || new Ie(e)).toggle(this);
  }), I.on(window, "load.bs.offcanvas.data-api", function () {
    U.find(".offcanvas.show").forEach(function (t) {
      return (v.get(t, "bs.offcanvas") || new Ie(t)).show();
    });
  }), m("offcanvas", Ie);

  var Me = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      He = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      Re = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Be = function Be(t, e) {
    var i = t.nodeName.toLowerCase();
    if (e.includes(i)) return !Me.has(i) || Boolean(He.test(t.nodeValue) || Re.test(t.nodeValue));
    var n = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t11 = 0, _e13 = n.length; _t11 < _e13; _t11++) {
      if (n[_t11].test(i)) return !0;
    }

    return !1;
  };

  function We(t, e, i) {
    var _ref5;

    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);

    var n = new window.DOMParser().parseFromString(t, "text/html"),
        s = Object.keys(e),
        o = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(n.body.querySelectorAll("*")));

    var _loop = function _loop(_t12, _i9) {
      var _ref6;

      var i = o[_t12],
          n = i.nodeName.toLowerCase();

      if (!s.includes(n)) {
        i.parentNode.removeChild(i);
        return "continue";
      }

      var r = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(i.attributes)),
          a = [].concat(e["*"] || [], e[n] || []);

      r.forEach(function (t) {
        Be(t, a) || i.removeAttribute(t.nodeName);
      });
    };

    for (var _t12 = 0, _i9 = o.length; _t12 < _i9; _t12++) {
      var _ret = _loop(_t12, _i9);

      if (_ret === "continue") continue;
    }

    return n.body.innerHTML;
  }

  var ze = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Ue = new Set(["sanitize", "allowList", "sanitizeFn"]),
      $e = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  },
      Fe = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: g() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: g() ? "right" : "left"
  },
      Ke = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    popperConfig: null
  },
      Ye = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  };

  var qe =
  /*#__PURE__*/
  function (_M8) {
    _inherits(qe, _M8);

    function qe(t, e) {
      var _this34;

      _classCallCheck(this, qe);

      if (void 0 === de) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this34 = _possibleConstructorReturn(this, _getPrototypeOf(qe).call(this, t)), _this34._isEnabled = !0, _this34._timeout = 0, _this34._hoverState = "", _this34._activeTrigger = {}, _this34._popper = null, _this34.config = _this34._getConfig(e), _this34.tip = null, _this34._setListeners();
      return _this34;
    }

    _createClass(qe, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e14 = this._initializeOnDelegatedTarget(t);

          _e14._activeTrigger.click = !_e14._activeTrigger.click, _e14._isWithActiveTrigger() ? _e14._enter(null, _e14) : _e14._leave(null, _e14);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), I.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, _get(_getPrototypeOf(qe.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _o$classList,
            _ref7,
            _this35 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var e = I.trigger(this._element, this.constructor.Event.SHOW),
            i = h(this._element),
            n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
        if (e.defaultPrevented || !n) return;
        var o = this.getTipElement(),
            r = t(this.constructor.NAME);
        o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade");

        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement,
            c = this._getAttachment(l);

        this._addAttachmentClass(c);

        var d = this._getContainer();

        v.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (d.appendChild(o), I.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = ce(this._element, o, this._getPopperConfig(c)), o.classList.add("show");
        var f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
        f && (_o$classList = o.classList).add.apply(_o$classList, _toConsumableArray(f.split(" "))), "ontouchstart" in document.documentElement && (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (t) {
          I.on(t, "mouseover", u);
        });

        var p = function p() {
          var t = _this35._hoverState;
          _this35._hoverState = null, I.trigger(_this35._element, _this35.constructor.Event.SHOWN), "out" === t && _this35._leave(null, _this35);
        };

        if (this.tip.classList.contains("fade")) {
          var _t13 = s(this.tip);

          I.one(this.tip, "transitionend", p), a(this.tip, _t13);
        } else p();
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this36 = this;

        if (!this._popper) return;

        var t = this.getTipElement(),
            e = function e() {
          _this36._isWithActiveTrigger() || ("show" !== _this36._hoverState && t.parentNode && t.parentNode.removeChild(t), _this36._cleanTipClass(), _this36._element.removeAttribute("aria-describedby"), I.trigger(_this36._element, _this36.constructor.Event.HIDDEN), _this36._popper && (_this36._popper.destroy(), _this36._popper = null));
        };

        if (!I.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
          var _ref8;

          if (t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (t) {
            return I.off(t, "mouseover", u);
          }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
            var _i10 = s(t);

            I.one(t, "transitionend", e), a(t, _i10);
          } else e();

          this._hoverState = "";
        }
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();
        this.setElementContent(U.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show");
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return "object" == _typeof(e) && r(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = We(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title");

        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t;
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        var i = this.constructor.DATA_KEY;
        return (e = e || v.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), v.set(t.delegateTarget, i, e)), e;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this37 = this;

        var t = this.config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this37._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this38 = this;

        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this.config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this.config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function fn(t) {
              return _this38._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this38._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread({}, e, {}, "function" == typeof this.config.popperConfig ? this.config.popperConfig(e) : this.config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContainer",
      value: function _getContainer() {
        return !1 === this.config.container ? document.body : r(this.config.container) ? this.config.container : U.findOne(this.config.container);
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Fe[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this39 = this;

        this.config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) I.on(_this39._element, _this39.constructor.Event.CLICK, _this39.config.selector, function (t) {
            return _this39.toggle(t);
          });else if ("manual" !== t) {
            var _e15 = "hover" === t ? _this39.constructor.Event.MOUSEENTER : _this39.constructor.Event.FOCUSIN,
                _i11 = "hover" === t ? _this39.constructor.Event.MOUSELEAVE : _this39.constructor.Event.FOCUSOUT;

            I.on(_this39._element, _e15, _this39.config.selector, function (t) {
              return _this39._enter(t);
            }), I.on(_this39._element, _i11, _this39.config.selector, function (t) {
              return _this39._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this39._element && _this39.hide();
        }, I.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = _objectSpread({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = _typeof(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e.config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e.config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t14 in this._activeTrigger) {
          if (this._activeTrigger[_t14]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = z.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          Ue.has(t) && delete e[t];
        }), t && "object" == _typeof(t.container) && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = _objectSpread({}, this.constructor.Default, {}, e, {}, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = We(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        if (this.config) for (var _e16 in this.config) {
          this.constructor.Default[_e16] !== this.config[_e16] && (t[_e16] = this.config[_e16]);
        }
        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(ze);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = v.get(this, "bs.tooltip");
          var i = "object" == _typeof(t) && t;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new qe(this, i)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ke;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ye;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.tooltip";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return $e;
      }
    }]);

    return qe;
  }(M);

  m("tooltip", qe);

  var Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Xe = _objectSpread({}, qe.Default, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Qe = _objectSpread({}, qe.DefaultType, {
    content: "(string|element|function)"
  }),
      Ge = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  var Ze =
  /*#__PURE__*/
  function (_qe) {
    _inherits(Ze, _qe);

    function Ze() {
      _classCallCheck(this, Ze);

      return _possibleConstructorReturn(this, _getPrototypeOf(Ze).apply(this, arguments));
    }

    _createClass(Ze, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();
        this.setElementContent(U.findOne(".popover-header", t), this.getTitle());

        var e = this._getContent();

        "function" == typeof e && (e = e.call(this._element)), this.setElementContent(U.findOne(".popover-body", t), e), t.classList.remove("fade", "show");
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._element.getAttribute("data-bs-content") || this.config.content;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(Ve);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = v.get(this, "bs.popover");
          var i = "object" == _typeof(t) ? t : null;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Ze(this, i), v.set(this, "bs.popover", e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Xe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return Ge;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.popover";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Qe;
      }
    }]);

    return Ze;
  }(qe);

  m("popover", Ze);
  var Je = {
    offset: 10,
    method: "auto",
    target: ""
  },
      ti = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  };

  var ei =
  /*#__PURE__*/
  function (_M9) {
    _inherits(ei, _M9);

    function ei(t, e) {
      var _this40;

      _classCallCheck(this, ei);

      _this40 = _possibleConstructorReturn(this, _getPrototypeOf(ei).call(this, t)), _this40._scrollElement = "BODY" === _this40._element.tagName ? window : _this40._element, _this40._config = _this40._getConfig(e), _this40._selector = "".concat(_this40._config.target, " .nav-link, ").concat(_this40._config.target, " .list-group-item, ").concat(_this40._config.target, " .dropdown-item"), _this40._offsets = [], _this40._targets = [], _this40._activeTarget = null, _this40._scrollHeight = 0, I.on(_this40._scrollElement, "scroll.bs.scrollspy", function () {
        return _this40._process();
      }), _this40.refresh(), _this40._process();
      return _this40;
    }

    _createClass(ei, [{
      key: "refresh",
      value: function refresh() {
        var _this41 = this;

        var t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            e = "auto" === this._config.method ? t : this._config.method,
            n = "position" === e ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(this._selector).map(function (t) {
          var s = i(t),
              o = s ? U.findOne(s) : null;

          if (o) {
            var _t15 = o.getBoundingClientRect();

            if (_t15.width || _t15.height) return [z[e](o).top + n, s];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this41._offsets.push(t[0]), _this41._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        _get(_getPrototypeOf(ei.prototype), "dispose", this).call(this), I.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(e) {
        if ("string" != typeof (e = _objectSpread({}, Je, {}, z.getDataAttributes(this._element), {}, "object" == _typeof(e) && e ? e : {})).target && r(e.target)) {
          var _i12 = e.target.id;
          _i12 || (_i12 = t("scrollspy"), e.target.id = _i12), e.target = "#" + _i12;
        }

        return l("scrollspy", e, ti), e;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            i = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          var _t16 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t16 && this._activate(_t16);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e17 = this._offsets.length; _e17--;) {
            this._activeTarget !== this._targets[_e17] && t >= this._offsets[_e17] && (void 0 === this._offsets[_e17 + 1] || t < this._offsets[_e17 + 1]) && this._activate(this._targets[_e17]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(t) {
        this._activeTarget = t, this._clear();

        var e = this._selector.split(",").map(function (e) {
          return "".concat(e, "[data-bs-target=\"").concat(t, "\"],").concat(e, "[href=\"").concat(t, "\"]");
        }),
            i = U.findOne(e.join(","));

        i.classList.contains("dropdown-item") ? (U.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"), i.classList.add("active")) : (i.classList.add("active"), U.parents(i, ".nav, .list-group").forEach(function (t) {
          U.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), U.prev(t, ".nav-item").forEach(function (t) {
            U.children(t, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        })), I.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        U.find(this._selector).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ei.getInstance(this) || new ei(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Je;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.scrollspy";
      }
    }]);

    return ei;
  }(M);

  I.on(window, "load.bs.scrollspy.data-api", function () {
    U.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new ei(t);
    });
  }), m("scrollspy", ei);

  var ii =
  /*#__PURE__*/
  function (_M10) {
    _inherits(ii, _M10);

    function ii() {
      _classCallCheck(this, ii);

      return _possibleConstructorReturn(this, _getPrototypeOf(ii).apply(this, arguments));
    }

    _createClass(ii, [{
      key: "show",
      value: function show() {
        var _this42 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
        var t;

        var e = n(this._element),
            i = this._element.closest(".nav, .list-group");

        if (i) {
          var _e18 = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";

          t = U.find(_e18, i), t = t[t.length - 1];
        }

        var s = t ? I.trigger(t, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (I.trigger(this._element, "show.bs.tab", {
          relatedTarget: t
        }).defaultPrevented || null !== s && s.defaultPrevented) return;

        this._activate(this._element, i);

        var o = function o() {
          I.trigger(t, "hidden.bs.tab", {
            relatedTarget: _this42._element
          }), I.trigger(_this42._element, "shown.bs.tab", {
            relatedTarget: t
          });
        };

        e ? this._activate(e, e.parentNode, o) : o();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, i) {
        var _this43 = this;

        var n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? U.children(e, ".active") : U.find(":scope > li > .active", e))[0],
            o = i && n && n.classList.contains("fade"),
            r = function r() {
          return _this43._transitionComplete(t, n, i);
        };

        if (n && o) {
          var _t17 = s(n);

          n.classList.remove("show"), I.one(n, "transitionend", r), a(n, _t17);
        } else r();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, i) {
        if (e) {
          e.classList.remove("active");

          var _t18 = U.findOne(":scope > .dropdown-menu .active", e.parentNode);

          _t18 && _t18.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }

        t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), f(t), t.classList.contains("fade") && t.classList.add("show");
        var n = t.parentNode;

        if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
          var _e19 = t.closest(".dropdown");

          _e19 && U.find(".dropdown-toggle", _e19).forEach(function (t) {
            return t.classList.add("active");
          }), t.setAttribute("aria-expanded", !0);
        }

        i && i();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = v.get(this, "bs.tab") || new ii(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.tab";
      }
    }]);

    return ii;
  }(M);

  I.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || (v.get(this, "bs.tab") || new ii(this)).show();
  }), m("tab", ii);
  var ni = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      si = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var oi =
  /*#__PURE__*/
  function (_M11) {
    _inherits(oi, _M11);

    function oi(t, e) {
      var _this44;

      _classCallCheck(this, oi);

      _this44 = _possibleConstructorReturn(this, _getPrototypeOf(oi).call(this, t)), _this44._config = _this44._getConfig(e), _this44._timeout = null, _this44._setListeners();
      return _this44;
    }

    _createClass(oi, [{
      key: "show",
      value: function show() {
        var _this45 = this;

        if (I.trigger(this._element, "show.bs.toast").defaultPrevented) return;
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

        var t = function t() {
          _this45._element.classList.remove("showing"), _this45._element.classList.add("show"), I.trigger(_this45._element, "shown.bs.toast"), _this45._config.autohide && (_this45._timeout = setTimeout(function () {
            _this45.hide();
          }, _this45._config.delay));
        };

        if (this._element.classList.remove("hide"), f(this._element), this._element.classList.add("showing"), this._config.animation) {
          var _e20 = s(this._element);

          I.one(this._element, "transitionend", t), a(this._element, _e20);
        } else t();
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this46 = this;

        if (!this._element.classList.contains("show")) return;
        if (I.trigger(this._element, "hide.bs.toast").defaultPrevented) return;

        var t = function t() {
          _this46._element.classList.add("hide"), I.trigger(_this46._element, "hidden.bs.toast");
        };

        if (this._element.classList.remove("show"), this._config.animation) {
          var _e21 = s(this._element);

          I.one(this._element, "transitionend", t), a(this._element, _e21);
        } else t();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(oi.prototype), "dispose", this).call(this), this._config = null;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, si, {}, z.getDataAttributes(this._element), {}, "object" == _typeof(t) && t ? t : {}), l("toast", t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this47 = this;

        I.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
          return _this47.hide();
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = v.get(this, "bs.toast");

          if (e || (e = new oi(this, "object" == _typeof(t) && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ni;
      }
    }, {
      key: "Default",
      get: function get() {
        return si;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.toast";
      }
    }]);

    return oi;
  }(M);

  return m("toast", oi), {
    Alert: H,
    Button: R,
    Carousel: X,
    Collapse: Z,
    Dropdown: ye,
    Modal: Ne,
    Offcanvas: Ie,
    Popover: Ze,
    ScrollSpy: ei,
    Tab: ii,
    Toast: oi,
    Tooltip: qe
  };
});