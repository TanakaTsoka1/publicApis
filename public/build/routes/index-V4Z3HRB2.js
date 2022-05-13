import {
  Alert,
  Badge,
  Box,
  Button,
  GenIcon,
  MultiSelect,
  Navbar,
  Paper,
  Select,
  Skeleton,
  Text,
  TextInput,
  Title
} from "/build/_shared/chunk-ZCOFZQHA.js";
import {
  Form,
  React,
  __commonJS,
  __toESM,
  _extends,
  init_extends,
  init_react,
  require_react,
  useLoaderData,
  useSearchParams,
  useTransition
} from "/build/_shared/chunk-FVYWXXEC.js";

// empty-module:~/api.server
var require_api = __commonJS({
  "empty-module:~/api.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// node_modules/uniqolor/dist/uniqolor.js
var require_uniqolor = __commonJS({
  "node_modules/uniqolor/dist/uniqolor.js"(exports, module) {
    init_react();
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.uniqolor = factory());
    })(exports, function() {
      "use strict";
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var SATURATION_BOUND = [0, 100];
      var LIGHTNESS_BOUND = [0, 100];
      var pad2 = function pad22(str) {
        return "".concat(str.length === 1 ? "0" : "").concat(str);
      };
      var clamp = function clamp2(num, min, max) {
        return Math.max(Math.min(num, max), min);
      };
      var random = function random2(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      var hashCode = function hashCode2(str) {
        var len = str.length;
        var hash = 0;
        for (var i = 0; i < len; i++) {
          hash = (hash << 5) - hash + str.charCodeAt(i);
          hash &= hash;
        }
        return hash;
      };
      var boundHashCode = function boundHashCode2(num, range) {
        if (typeof range === "number") {
          return range;
        }
        return num % Math.abs(range[1] - range[0]) + range[0];
      };
      var sanitizeRange = function sanitizeRange2(range, bound) {
        if (typeof range === "number") {
          return clamp.apply(void 0, [Math.abs(range)].concat(_toConsumableArray(bound)));
        }
        if (range.length === 1 || range[0] === range[1]) {
          return clamp.apply(void 0, [Math.abs(range[0])].concat(_toConsumableArray(bound)));
        }
        return [Math.abs(clamp.apply(void 0, [range[0]].concat(_toConsumableArray(bound)))), clamp.apply(void 0, [Math.abs(range[1])].concat(_toConsumableArray(bound)))];
      };
      var hueToRgb = function hueToRgb2(p, q, t) {
        if (t < 0) {
          t += 1;
        } else if (t > 1) {
          t -= 1;
        }
        if (t < 1 / 6) {
          return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
          return q;
        }
        if (t < 2 / 3) {
          return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
      };
      var hslToRgb = function hslToRgb2(h, s, l) {
        var r;
        var g;
        var b;
        h /= 360;
        s /= 100;
        l /= 100;
        if (s === 0) {
          r = g = b = l;
        } else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hueToRgb(p, q, h + 1 / 3);
          g = hueToRgb(p, q, h);
          b = hueToRgb(p, q, h - 1 / 3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
      };
      var rgbIsLight = function rgbIsLight2(r, g, b, differencePoint) {
        return (r * 299 + g * 587 + b * 114) / 1e3 >= differencePoint;
      };
      var hslToString = function hslToString2(h, s, l) {
        return "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)");
      };
      var rgbFormat = function rgbFormat2(r, g, b, format) {
        switch (format) {
          case "rgb":
            return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
          case "hex":
          default:
            return "#".concat(pad2(r.toString(16))).concat(pad2(g.toString(16))).concat(pad2(b.toString(16)));
        }
      };
      var uniqolor2 = function uniqolor3(value) {
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$format = _ref.format, format = _ref$format === void 0 ? "hex" : _ref$format, _ref$saturation = _ref.saturation, saturation = _ref$saturation === void 0 ? [50, 55] : _ref$saturation, _ref$lightness = _ref.lightness, lightness = _ref$lightness === void 0 ? [50, 60] : _ref$lightness, _ref$differencePoint = _ref.differencePoint, differencePoint = _ref$differencePoint === void 0 ? 130 : _ref$differencePoint;
        var hash = Math.abs(hashCode(String(value)));
        var h = boundHashCode(hash, [0, 360]);
        var s = boundHashCode(hash, sanitizeRange(saturation, SATURATION_BOUND));
        var l = boundHashCode(hash, sanitizeRange(lightness, LIGHTNESS_BOUND));
        var _hslToRgb = hslToRgb(h, s, l), _hslToRgb2 = _slicedToArray(_hslToRgb, 3), r = _hslToRgb2[0], g = _hslToRgb2[1], b = _hslToRgb2[2];
        return {
          color: format === "hsl" ? hslToString(h, s, l) : rgbFormat(r, g, b, format),
          isLight: rgbIsLight(r, g, b, differencePoint)
        };
      };
      uniqolor2.random = function() {
        var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$format = _ref2.format, format = _ref2$format === void 0 ? "hex" : _ref2$format, _ref2$saturation = _ref2.saturation, saturation = _ref2$saturation === void 0 ? [50, 55] : _ref2$saturation, _ref2$lightness = _ref2.lightness, lightness = _ref2$lightness === void 0 ? [50, 60] : _ref2$lightness, _ref2$differencePoint = _ref2.differencePoint, differencePoint = _ref2$differencePoint === void 0 ? 130 : _ref2$differencePoint;
        saturation = sanitizeRange(saturation, SATURATION_BOUND);
        lightness = sanitizeRange(lightness, LIGHTNESS_BOUND);
        var h = random(0, 360);
        var s = typeof saturation === "number" ? saturation : random.apply(void 0, _toConsumableArray(saturation));
        var l = typeof lightness === "number" ? lightness : random.apply(void 0, _toConsumableArray(lightness));
        var _hslToRgb3 = hslToRgb(h, s, l), _hslToRgb4 = _slicedToArray(_hslToRgb3, 3), r = _hslToRgb4[0], g = _hslToRgb4[1], b = _hslToRgb4[2];
        return {
          color: format === "hsl" ? hslToString(h, s, l) : rgbFormat(r, g, b, format),
          isLight: rgbIsLight(r, g, b, differencePoint)
        };
      };
      return uniqolor2;
    });
  }
});

// browser-route-module:/Users/Tanaka/Desktop/imgn-audition-main/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
init_react();

// app/routes/index.jsx
var import_react6 = __toESM(require_react());

// node_modules/react-icons/md/index.esm.js
init_react();
function MdOutlineWarningAmber(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" } }] })(props);
}

// node_modules/react-virtualized-auto-sizer/dist/index.esm.js
init_react();
var import_react = __toESM(require_react());
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends2 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var inherits = function(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var possibleConstructorReturn = function(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
};
var slicedToArray = function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"])
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
var windowObject = void 0;
if (typeof window !== "undefined") {
  windowObject = window;
} else if (typeof self !== "undefined") {
  windowObject = self;
} else {
  windowObject = globalThis;
}
var cancelFrame = null;
var requestFrame = null;
var TIMEOUT_DURATION = 20;
var clearTimeoutFn = windowObject.clearTimeout;
var setTimeoutFn = windowObject.setTimeout;
var cancelAnimationFrameFn = windowObject.cancelAnimationFrame || windowObject.mozCancelAnimationFrame || windowObject.webkitCancelAnimationFrame;
var requestAnimationFrameFn = windowObject.requestAnimationFrame || windowObject.mozRequestAnimationFrame || windowObject.webkitRequestAnimationFrame;
if (cancelAnimationFrameFn == null || requestAnimationFrameFn == null) {
  cancelFrame = clearTimeoutFn;
  requestFrame = function requestAnimationFrameViaSetTimeout(callback) {
    return setTimeoutFn(callback, TIMEOUT_DURATION);
  };
} else {
  cancelFrame = function cancelFrame2(_ref) {
    var _ref2 = slicedToArray(_ref, 2), animationFrameID = _ref2[0], timeoutID = _ref2[1];
    cancelAnimationFrameFn(animationFrameID);
    clearTimeoutFn(timeoutID);
  };
  requestFrame = function requestAnimationFrameWithSetTimeoutFallback(callback) {
    var animationFrameID = requestAnimationFrameFn(function animationFrameCallback() {
      clearTimeoutFn(timeoutID);
      callback();
    });
    var timeoutID = setTimeoutFn(function timeoutCallback() {
      cancelAnimationFrameFn(animationFrameID);
      callback();
    }, TIMEOUT_DURATION);
    return [animationFrameID, timeoutID];
  };
}
function createDetectElementResize(nonce) {
  var animationKeyframes = void 0;
  var animationName = void 0;
  var animationStartEvent = void 0;
  var animationStyle = void 0;
  var checkTriggers = void 0;
  var resetTriggers = void 0;
  var scrollListener = void 0;
  var attachEvent = typeof document !== "undefined" && document.attachEvent;
  if (!attachEvent) {
    resetTriggers = function resetTriggers2(element) {
      var triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + "px";
      expandChild.style.height = expand.offsetHeight + 1 + "px";
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };
    checkTriggers = function checkTriggers2(element) {
      return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
    };
    scrollListener = function scrollListener2(e) {
      if (e.target.className && typeof e.target.className.indexOf === "function" && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0) {
        return;
      }
      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function animationFrame() {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function forEachResizeListener(fn) {
            fn.call(element, e);
          });
        }
      });
    };
    var animation = false;
    var keyframeprefix = "";
    animationStartEvent = "animationstart";
    var domPrefixes = "Webkit Moz O ms".split(" ");
    var startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");
    var pfx = "";
    {
      var elm = document.createElement("fakeelement");
      if (elm.style.animationName !== void 0) {
        animation = true;
      }
      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + "AnimationName"] !== void 0) {
            pfx = domPrefixes[i];
            keyframeprefix = "-" + pfx.toLowerCase() + "-";
            animationStartEvent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    animationName = "resizeanim";
    animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ";
    animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; ";
  }
  var createStyles = function createStyles2(doc) {
    if (!doc.getElementById("detectElementResize")) {
      var css = (animationKeyframes ? animationKeyframes : "") + ".resize-triggers { " + (animationStyle ? animationStyle : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = doc.head || doc.getElementsByTagName("head")[0], style = doc.createElement("style");
      style.id = "detectElementResize";
      style.type = "text/css";
      if (nonce != null) {
        style.setAttribute("nonce", nonce);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }
      head.appendChild(style);
    }
  };
  var addResizeListener = function addResizeListener2(element, fn) {
    if (attachEvent) {
      element.attachEvent("onresize", fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;
        var elementStyle = windowObject.getComputedStyle(element);
        if (elementStyle && elementStyle.position === "static") {
          element.style.position = "relative";
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement("div")).className = "resize-triggers";
        var expandTrigger = doc.createElement("div");
        expandTrigger.className = "expand-trigger";
        expandTrigger.appendChild(doc.createElement("div"));
        var contractTrigger = doc.createElement("div");
        contractTrigger.className = "contract-trigger";
        element.__resizeTriggers__.appendChild(expandTrigger);
        element.__resizeTriggers__.appendChild(contractTrigger);
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener("scroll", scrollListener, true);
        if (animationStartEvent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName === animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };
  var removeResizeListener = function removeResizeListener2(element, fn) {
    if (attachEvent) {
      element.detachEvent("onresize", fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener("scroll", scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
        }
      }
    }
  };
  return {
    addResizeListener,
    removeResizeListener
  };
}
var AutoSizer = function(_React$PureComponent) {
  inherits(AutoSizer2, _React$PureComponent);
  function AutoSizer2() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, AutoSizer2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AutoSizer2.__proto__ || Object.getPrototypeOf(AutoSizer2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    }, _this._onResize = function() {
      var _this$props = _this.props, disableHeight = _this$props.disableHeight, disableWidth = _this$props.disableWidth, onResize2 = _this$props.onResize;
      if (_this._parentNode) {
        var _height = _this._parentNode.offsetHeight || 0;
        var _width = _this._parentNode.offsetWidth || 0;
        var _style = window.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(_style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(_style.paddingRight, 10) || 0;
        var paddingTop = parseInt(_style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(_style.paddingBottom, 10) || 0;
        var newHeight = _height - paddingTop - paddingBottom;
        var newWidth = _width - paddingLeft - paddingRight;
        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: _height - paddingTop - paddingBottom,
            width: _width - paddingLeft - paddingRight
          });
          onResize2({ height: _height, width: _width });
        }
      }
    }, _this._setRef = function(autoSizer) {
      _this._autoSizer = autoSizer;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass(AutoSizer2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var nonce = this.props.nonce;
      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        this._parentNode = this._autoSizer.parentNode;
        this._detectElementResize = createDetectElementResize(nonce);
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);
        this._onResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props, children = _props.children, className = _props.className, disableHeight = _props.disableHeight, disableWidth = _props.disableWidth, style = _props.style;
      var _state = this.state, height = _state.height, width = _state.width;
      var outerStyle = { overflow: "visible" };
      var childParams = {};
      var bailoutOnChildren = false;
      if (!disableHeight) {
        if (height === 0) {
          bailoutOnChildren = true;
        }
        outerStyle.height = 0;
        childParams.height = height;
      }
      if (!disableWidth) {
        if (width === 0) {
          bailoutOnChildren = true;
        }
        outerStyle.width = 0;
        childParams.width = width;
      }
      return (0, import_react.createElement)("div", {
        className,
        ref: this._setRef,
        style: _extends2({}, outerStyle, style)
      }, !bailoutOnChildren && children(childParams));
    }
  }]);
  return AutoSizer2;
}(import_react.PureComponent);
AutoSizer.defaultProps = {
  onResize: function onResize() {
  },
  disableHeight: false,
  disableWidth: false,
  style: {}
};
var index_esm_default = AutoSizer;

// node_modules/react-window/dist/index.esm.js
init_react();
init_extends();

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
init_react();

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
init_react();
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
init_react();
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/memoize-one/dist/memoize-one.esm.js
init_react();
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var memoize_one_esm_default = memoizeOne;

// node_modules/react-window/dist/index.esm.js
var import_react2 = __toESM(require_react());
var hasNativePerformanceNow = typeof performance === "object" && typeof performance.now === "function";
var now = hasNativePerformanceNow ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();
  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }
  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}
var cachedRTLResult = null;
function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement("div");
    var outerStyle = outerDiv.style;
    outerStyle.width = "50px";
    outerStyle.height = "50px";
    outerStyle.overflow = "scroll";
    outerStyle.direction = "rtl";
    var innerDiv = document.createElement("div");
    var innerStyle = innerDiv.style;
    innerStyle.width = "100px";
    innerStyle.height = "100px";
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);
    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = "positive-descending";
    } else {
      outerDiv.scrollLeft = 1;
      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = "negative";
      } else {
        cachedRTLResult = "positive-ascending";
      }
    }
    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }
  return cachedRTLResult;
}
var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;
if (true) {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsOverscanCount = /* @__PURE__ */ new WeakSet();
    devWarningsOverscanRowsColumnsCount = /* @__PURE__ */ new WeakSet();
    devWarningsTagName = /* @__PURE__ */ new WeakSet();
  }
}
var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;
var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
};
var devWarningsDirection = null;
var devWarningsTagName$1 = null;
if (true) {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsDirection = /* @__PURE__ */ new WeakSet();
    devWarningsTagName$1 = /* @__PURE__ */ new WeakSet();
  }
}
function createListComponent(_ref) {
  var _class, _temp;
  var getItemOffset2 = _ref.getItemOffset, getEstimatedTotalSize2 = _ref.getEstimatedTotalSize, getItemSize2 = _ref.getItemSize, getOffsetForIndexAndAlignment2 = _ref.getOffsetForIndexAndAlignment, getStartIndexForOffset2 = _ref.getStartIndexForOffset, getStopIndexForStartIndex2 = _ref.getStopIndexForStartIndex, initInstanceProps2 = _ref.initInstanceProps, shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange, validateProps2 = _ref.validateProps;
  return _temp = _class = /* @__PURE__ */ function(_PureComponent) {
    _inheritsLoose(List, _PureComponent);
    function List(props) {
      var _this;
      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps2(_this.props, _assertThisInitialized(_assertThisInitialized(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_assertThisInitialized(_this)),
        isScrolling: false,
        scrollDirection: "forward",
        scrollOffset: typeof _this.props.initialScrollOffset === "number" ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoize_one_esm_default(function(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex,
          overscanStopIndex,
          visibleStartIndex,
          visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoize_one_esm_default(function(scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection,
          scrollOffset,
          scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;
      _this._getItemStyle = function(index) {
        var _this$props = _this.props, direction = _this$props.direction, itemSize = _this$props.itemSize, layout = _this$props.layout;
        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);
        var style;
        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset2(_this.props, index, _this._instanceProps);
          var size = getItemSize2(_this.props, index, _this._instanceProps);
          var isHorizontal = direction === "horizontal" || layout === "horizontal";
          var isRtl = direction === "rtl";
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: "absolute",
            left: isRtl ? void 0 : offsetHorizontal,
            right: isRtl ? offsetHorizontal : void 0,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size : "100%",
            width: isHorizontal ? size : "100%"
          };
        }
        return style;
      };
      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoize_one_esm_default(function(_, __, ___) {
        return {};
      });
      _this._onScrollHorizontal = function(event) {
        var _event$currentTarget = event.currentTarget, clientWidth = _event$currentTarget.clientWidth, scrollLeft = _event$currentTarget.scrollLeft, scrollWidth = _event$currentTarget.scrollWidth;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            return null;
          }
          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                scrollOffset = -scrollLeft;
                break;
              case "positive-descending":
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          }
          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._onScrollVertical = function(event) {
        var _event$currentTarget2 = event.currentTarget, clientHeight = _event$currentTarget2.clientHeight, scrollHeight = _event$currentTarget2.scrollHeight, scrollTop = _event$currentTarget2.scrollTop;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollTop) {
            return null;
          }
          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._outerRefSetter = function(ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;
        if (typeof outerRef === "function") {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === "object" && outerRef.hasOwnProperty("current")) {
          outerRef.current = ref;
        }
      };
      _this._resetIsScrollingDebounced = function() {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }
        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };
      _this._resetIsScrolling = function() {
        _this._resetIsScrollingTimeoutId = null;
        _this.setState({
          isScrolling: false
        }, function() {
          _this._getItemStyleCache(-1, null);
        });
      };
      return _this;
    }
    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps2(nextProps);
      return null;
    };
    var _proto = List.prototype;
    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function(prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }
        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
          scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };
    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = "auto";
      }
      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment2(this.props, index, align, scrollOffset, this._instanceProps));
    };
    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props, direction = _this$props2.direction, initialScrollOffset = _this$props2.initialScrollOffset, layout = _this$props2.layout;
      if (typeof initialScrollOffset === "number" && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props, direction = _this$props3.direction, layout = _this$props3.layout;
      var _this$state = this.state, scrollOffset = _this$state.scrollOffset, scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;
      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                outerRef.scrollLeft = -scrollOffset;
                break;
              case "positive-ascending":
                outerRef.scrollLeft = scrollOffset;
                break;
              default:
                var clientWidth = outerRef.clientWidth, scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };
    _proto.render = function render() {
      var _this$props4 = this.props, children = _this$props4.children, className = _this$props4.className, direction = _this$props4.direction, height = _this$props4.height, innerRef = _this$props4.innerRef, innerElementType = _this$props4.innerElementType, innerTagName = _this$props4.innerTagName, itemCount = _this$props4.itemCount, itemData = _this$props4.itemData, _this$props4$itemKey = _this$props4.itemKey, itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey, layout = _this$props4.layout, outerElementType = _this$props4.outerElementType, outerTagName = _this$props4.outerTagName, style = _this$props4.style, useIsScrolling = _this$props4.useIsScrolling, width = _this$props4.width;
      var isScrolling = this.state.isScrolling;
      var isHorizontal = direction === "horizontal" || layout === "horizontal";
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;
      var _this$_getRangeToRend = this._getRangeToRender(), startIndex = _this$_getRangeToRend[0], stopIndex = _this$_getRangeToRend[1];
      var items = [];
      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push((0, import_react2.createElement)(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : void 0,
            style: this._getItemStyle(_index)
          }));
        }
      }
      var estimatedTotalSize = getEstimatedTotalSize2(this.props, this._instanceProps);
      return (0, import_react2.createElement)(outerElementType || outerTagName || "div", {
        className,
        onScroll,
        ref: this._outerRefSetter,
        style: _extends({
          position: "relative",
          height,
          width,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction
        }, style)
      }, (0, import_react2.createElement)(innerElementType || innerTagName || "div", {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? "100%" : estimatedTotalSize,
          pointerEvents: isScrolling ? "none" : void 0,
          width: isHorizontal ? estimatedTotalSize : "100%"
        }
      }));
    };
    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === "function") {
        var itemCount = this.props.itemCount;
        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(), _overscanStartIndex = _this$_getRangeToRend2[0], _overscanStopIndex = _this$_getRangeToRend2[1], _visibleStartIndex = _this$_getRangeToRend2[2], _visibleStopIndex = _this$_getRangeToRend2[3];
          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }
      if (typeof this.props.onScroll === "function") {
        var _this$state2 = this.state, _scrollDirection = _this$state2.scrollDirection, _scrollOffset = _this$state2.scrollOffset, _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;
        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    };
    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props, itemCount = _this$props5.itemCount, overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollDirection = _this$state3.scrollDirection, scrollOffset = _this$state3.scrollOffset;
      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }
      var startIndex = getStartIndexForOffset2(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex2(this.props, startIndex, scrollOffset, this._instanceProps);
      var overscanBackward = !isScrolling || scrollDirection === "backward" ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === "forward" ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };
    return List;
  }(import_react2.PureComponent), _class.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: false
  }, _temp;
}
var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children, direction = _ref2.direction, height = _ref2.height, layout = _ref2.layout, innerTagName = _ref2.innerTagName, outerTagName = _ref2.outerTagName, width = _ref2.width;
  var instance = _ref3.instance;
  if (true) {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead.");
      }
    }
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    switch (direction) {
      case "horizontal":
      case "vertical":
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + direction + '" was specified.'));
    }
    switch (layout) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + layout + '" was specified.'));
    }
    if (children == null) {
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (children === null ? "null" : typeof children) + '" was specified.'));
    }
    if (isHorizontal && typeof width !== "number") {
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (width === null ? "null" : typeof width) + '" was specified.'));
    } else if (!isHorizontal && typeof height !== "number") {
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (height === null ? "null" : typeof height) + '" was specified.'));
    }
  }
};
var FixedSizeList = /* @__PURE__ */ createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount, itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction, height = _ref4.height, itemCount = _ref4.itemCount, itemSize = _ref4.itemSize, layout = _ref4.layout, width = _ref4.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize);
    if (align === "smart") {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = "auto";
      } else {
        align = "center";
      }
    }
    switch (align) {
      case "start":
        return maxOffset;
      case "end":
        return minOffset;
      case "center": {
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(size / 2)) {
          return 0;
        } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
          return lastItemOffset;
        } else {
          return middleOffset;
        }
      }
      case "auto":
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount, itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction, height = _ref6.height, itemCount = _ref6.itemCount, itemSize = _ref6.itemSize, layout = _ref6.layout, width = _ref6.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1));
  },
  initInstanceProps: function initInstanceProps(props) {
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;
    if (true) {
      if (typeof itemSize !== "number") {
        throw Error('An invalid "itemSize" prop has been specified. Value should be a number. ' + ('"' + (itemSize === null ? "null" : typeof itemSize) + '" was specified.'));
      }
    }
  }
});

// app/routes/index.jsx
var import_api = __toESM(require_api());

// app/components/Card.jsx
init_react();
var import_react3 = __toESM(require_react());

// node_modules/react-icons/im/index.esm.js
init_react();
function ImNewTab(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1.1", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M3 1v12h12v-12h-12zM14 12h-10v-10h10v10zM2 14v-10.5l-1-1v12.5h12.5l-1-1h-10.5z" } }, { "tag": "path", "attr": { "d": "M5.5 4l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5v-6.5z" } }] })(props);
}

// node_modules/react-icons/ri/index.esm.js
init_react();
function RiKeyLine(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "g", "attr": {}, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "fillRule": "nonzero", "d": "M12.917 13A6.002 6.002 0 0 1 1 12a6 6 0 0 1 11.917-1H23v2h-2v4h-2v-4h-2v4h-2v-4h-2.083zM7 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" } }] }] })(props);
}
function RiUserSharedLine(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "g", "attr": {}, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6.586 6l-1.829-1.828 1.415-1.415L22.414 18l-4.242 4.243-1.415-1.415L18.586 19H15v-2h3.586z" } }] }] })(props);
}

// node_modules/react-icons/ti/index.esm.js
init_react();
function TiTick(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1.2", "baseProfile": "tiny", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z" } }] })(props);
}
function TiTimes(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1.2", "baseProfile": "tiny", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M17.414 6.586c-.78-.781-2.048-.781-2.828 0l-2.586 2.586-2.586-2.586c-.78-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l2.585 2.586-2.585 2.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l2.586-2.586 2.586 2.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-2.585-2.586 2.585-2.586c.781-.781.781-2.047 0-2.828z" } }] })(props);
}
function TiWarning(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1.2", "baseProfile": "tiny", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M21.171 15.398l-5.912-9.854c-.776-1.293-1.963-2.033-3.259-2.033s-2.483.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83.636 1.126 1.878 1.772 3.406 1.772h12c1.528 0 2.77-.646 3.406-1.771.637-1.125.551-2.521-.235-3.831zm-9.171 2.151c-.854 0-1.55-.695-1.55-1.549 0-.855.695-1.551 1.55-1.551s1.55.696 1.55 1.551c0 .854-.696 1.549-1.55 1.549zm1.633-7.424c-.011.031-1.401 3.468-1.401 3.468-.038.094-.13.156-.231.156s-.193-.062-.231-.156l-1.391-3.438c-.09-.233-.129-.443-.129-.655 0-.965.785-1.75 1.75-1.75s1.75.785 1.75 1.75c0 .212-.039.422-.117.625z" } }] })(props);
}

// app/components/Card.jsx
var import_uniqolor = __toESM(require_uniqolor());

// app/styles/card.css
var card_default = "/build/_assets/card-46UTV7U5.css";

// app/components/Card.jsx
var authBadgeMap = {
  no: {
    color: "green",
    children: "No auth",
    leftSection: /* @__PURE__ */ React.createElement(TiTick, {
      size: 18
    })
  },
  apiKey: {
    color: "yellow",
    children: "API Key required",
    leftSection: /* @__PURE__ */ React.createElement(RiKeyLine, {
      size: 18
    })
  },
  OAuth: {
    color: "yellow",
    children: "oAuth Required",
    leftSection: /* @__PURE__ */ React.createElement(RiUserSharedLine, {
      size: 18
    })
  }
};
var corsBadgeMap = {
  no: {
    color: "red",
    leftSection: /* @__PURE__ */ React.createElement(TiTimes, {
      size: 18
    })
  },
  yes: {
    color: "green",
    leftSection: /* @__PURE__ */ React.createElement(TiTick, {
      size: 18
    })
  },
  unknown: {
    color: "yellow",
    leftSection: /* @__PURE__ */ React.createElement(TiWarning, {
      size: 18
    })
  }
};
function useCategoryStyle(category) {
  const style = (0, import_react3.useCallback)((theme) => {
    const { color, isLight } = (0, import_uniqolor.default)(category);
    const style2 = { backgroundColor: color };
    if (isLight)
      style2.color = theme.colors.dark[9];
    else
      style2.color = "#ffffff";
    return style2;
  }, [category]);
  return style;
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: card_default
    }
  ];
}
function Card({
  API,
  Auth,
  Category,
  Cors,
  Description,
  HTTPS,
  Link
}) {
  const categoryStyle = useCategoryStyle(Category);
  return /* @__PURE__ */ React.createElement(Paper, {
    withBorder: true,
    className: "subscription-card"
  }, /* @__PURE__ */ React.createElement(Badge, {
    variant: "filled",
    sx: categoryStyle,
    className: "category"
  }, Category), /* @__PURE__ */ React.createElement(Title, {
    p: "sm",
    className: "title"
  }, API), /* @__PURE__ */ React.createElement(Box, {
    p: "sm",
    className: "attributes"
  }, /* @__PURE__ */ React.createElement(Badge, {
    ...authBadgeMap[Auth || "no"]
  }), /* @__PURE__ */ React.createElement(Badge, {
    color: HTTPS ? "green" : "red",
    leftSection: HTTPS ? /* @__PURE__ */ React.createElement(TiTick, {
      size: 18
    }) : /* @__PURE__ */ React.createElement(TiTimes, {
      size: 18
    })
  }, "HTTPS"), /* @__PURE__ */ React.createElement(Badge, {
    ...corsBadgeMap[Cors]
  }, "CORS")), /* @__PURE__ */ React.createElement(Text, {
    p: "sm",
    className: "description"
  }, Description), /* @__PURE__ */ React.createElement(Button, {
    rightIcon: /* @__PURE__ */ React.createElement(ImNewTab, null),
    component: "a",
    href: Link,
    target: "_blank"
  }, "View Documentation"));
}

// app/components/SkeletonCard.jsx
init_react();
function SkeletonCard({ style }) {
  return /* @__PURE__ */ React.createElement(Paper, {
    style,
    withBorder: true,
    className: "subscription-card"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "category"
  }, /* @__PURE__ */ React.createElement(Skeleton, {
    visible: true,
    height: 20,
    radius: 32
  })), /* @__PURE__ */ React.createElement(Box, {
    p: "sm",
    className: "title"
  }, /* @__PURE__ */ React.createElement(Skeleton, {
    visible: true,
    height: 40,
    width: "60%"
  })), /* @__PURE__ */ React.createElement(Box, {
    pad: "sm",
    className: "attributes"
  }, /* @__PURE__ */ React.createElement(Skeleton, {
    visible: true,
    height: 20,
    width: 94,
    radius: 32
  }), /* @__PURE__ */ React.createElement(Skeleton, {
    visible: true,
    height: 20,
    width: 81,
    radius: 32
  }), /* @__PURE__ */ React.createElement(Skeleton, {
    visible: true,
    height: 20,
    width: 74,
    radius: 32
  })), /* @__PURE__ */ React.createElement(Box, {
    p: "sm",
    className: "description"
  }, /* @__PURE__ */ React.createElement(Skeleton, {
    visible: true,
    height: 26,
    width: "80%"
  })), /* @__PURE__ */ React.createElement(Button, {
    disabled: true,
    loading: true
  }, "View Docs"));
}

// app/isFetching.jsx
init_react();
function useIsFetching() {
  const { state, type } = useTransition();
  if (state === "idle")
    return false;
  if ([
    "loaderSubmission",
    "loaderSubmissionRedirect",
    "redirect",
    "load"
  ].includes(type))
    return true;
  return false;
}

// app/routes/index.jsx
function Filter({ categories: _categories = [] }) {
  const loading = useIsFetching();
  const categories = (0, import_react6.useMemo)(() => _categories.map((v) => ({
    value: v && v.includes(" ") ? v.split(" ")[0] : v,
    label: v
  })), [_categories]);
  const [searchParams] = useSearchParams();
  let {
    categories: categoryFilter,
    title,
    description,
    auth,
    cors,
    https
  } = Object.fromEntries(searchParams.entries());
  categoryFilter = categoryFilter ? categoryFilter.split(",") : [];
  if (auth == null) {
    if (auth !== null)
      auth = "";
    else
      auth = "null";
  }
  return /* @__PURE__ */ React.createElement(Form, {
    method: "get",
    action: "/"
  }, /* @__PURE__ */ React.createElement(MultiSelect, {
    disabled: loading,
    defaultValue: categoryFilter,
    data: categories,
    label: "Category",
    searchable: true,
    nothingFound: "Nothing found",
    clearable: true,
    name: "categories"
  }), /* @__PURE__ */ React.createElement(TextInput, {
    disabled: loading,
    label: "Title",
    name: "title",
    defaultValue: title
  }), /* @__PURE__ */ React.createElement(TextInput, {
    disabled: loading,
    label: "Description",
    name: "description",
    defaultValue: description
  }), /* @__PURE__ */ React.createElement(Select, {
    disabled: loading,
    name: "auth",
    defaultValue: auth,
    label: "Authentication",
    data: [
      { value: "null", label: "No Auth" },
      { value: "apiKey", label: "API Key" },
      { value: "oAuth", label: "oAuth" }
    ],
    clearable: true
  }), /* @__PURE__ */ React.createElement(Select, {
    disabled: loading,
    name: "cors",
    defaultValue: cors,
    label: "CORS",
    data: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" }
    ],
    clearable: true
  }), /* @__PURE__ */ React.createElement(Select, {
    disabled: loading,
    name: "https",
    defaultValue: https,
    label: "HTTPS",
    data: [
      { value: "true", label: "Yes" },
      { value: "false", label: "No" }
    ],
    clearable: true
  }), /* @__PURE__ */ React.createElement(Button, {
    type: "submit",
    loading
  }, "Filter"), /* @__PURE__ */ React.createElement(Button, {
    loading,
    component: "a",
    href: "/"
  }, "Clear"));
}
function Index() {
  const loading = useIsFetching();
  const { apis, categories } = useLoaderData();
  const Row = ({ index, style }) => /* @__PURE__ */ React.createElement("div", {
    style
  }, /* @__PURE__ */ React.createElement(Card, {
    ...apis[index]
  }));
  const SkeletonRow = ({ index, style }) => /* @__PURE__ */ React.createElement("div", {
    style
  }, /* @__PURE__ */ React.createElement(SkeletonCard, null));
  return /* @__PURE__ */ React.createElement("div", {
    className: "full-height"
  }, /* @__PURE__ */ React.createElement(Navbar, {
    width: { base: 300 },
    p: "md"
  }, /* @__PURE__ */ React.createElement(Navbar.Section, null, /* @__PURE__ */ React.createElement(Filter, {
    categories
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "full-height"
  }, !loading && !apis.length && /* @__PURE__ */ React.createElement(Alert, {
    icon: /* @__PURE__ */ React.createElement(MdOutlineWarningAmber, {
      size: 16
    }),
    title: "No results!",
    color: "yellow"
  }, "Oops, looks like there were no results for your search."), /* @__PURE__ */ React.createElement(index_esm_default, {
    defaultHeight: 700,
    defaultWidth: 1024
  }, ({ height, width }) => loading ? /* @__PURE__ */ React.createElement(FixedSizeList, {
    height,
    itemCount: 50,
    itemSize: 165,
    width
  }, SkeletonRow) : /* @__PURE__ */ React.createElement(FixedSizeList, {
    height,
    itemCount: apis.length,
    itemSize: 165,
    width
  }, Row))));
}
export {
  Index as default,
  links
};
/**
* Generate unique and beautiful colors from any texts or numbers
 * @version v1.0.2
 * @link https://github.com/dastoori/uniqolor#README
 * @author Rasool Dastoori
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
//# sourceMappingURL=/build/routes/index-V4Z3HRB2.js.map
