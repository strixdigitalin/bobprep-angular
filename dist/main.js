(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];

var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();

var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fak': 'kit',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));
var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;
var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready(fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;
var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}

var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}

function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}

function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}

function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon(_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol(_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.15.3\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};
/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};
/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = ('far' in styles);
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};

build();

function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}

function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}

function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;

var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};

function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " Font Awesome fontawesome.com -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}

var disabled = false;

function disableObservation() {
  disabled = true;
}

function enableObservation() {
  disabled = false;
}

var mo = null;

function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}

function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser(node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser(node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

function transformParser(node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser(node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser(node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser(node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}

function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    maskId: node.getAttribute('data-fa-mask-id'),
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}

MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;
var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};
var styles$2 = namespace.styles;

function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}

function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      titleId = nodeMeta.titleId,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      maskId = nodeMeta.maskId,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        maskId: maskId,
        title: title,
        titleId: titleId,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css() {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();

var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};

var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};

var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};

var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};

var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.to-string-tag.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.to-string-tag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(global.Reflect, 'Reflect', true);


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\r\n    <app-spinner></app-spinner>\r\n</router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank/blank.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank/blank.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/dashboard/dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<user-left-menu></user-left-menu>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/media/components/avatar-upload/avatar-upload.modal.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/media/components/avatar-upload/avatar-upload.modal.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" translate>\r\n    Upload avatar\r\n    <small class=\"ml-1\" translate> (Expected size: 350 x 421 pixels, Maximum size: {{maxFileSize}} mb)</small>\r\n  </h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body row justify-content-center\">\r\n  <div class=\"col-md-12 text-center\">\r\n    <!-- <img src=\"../../assets/images/tutor/tutors-profile.png\" alt=\"\" /> -->\r\n    <img src=\"{{info.avatarUrl}}\" alt=\"\" />\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <small *ngIf=\"imageSelected.length\">{{imageSelected[0].file.name}} is selected</small>\r\n    <app-file-upload [options]=\"avatarOptions\"></app-file-upload>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.dismiss('Cross click')\" translate>\r\n    Close\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/media/components/upload.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/media/components/upload.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\" *ngIf=\"options?.lecturePdf\">\r\n  <label translate>Total length (seconds)</label>\r\n  <input\r\n    type=\"number\"\r\n    name=\"total-length\"\r\n    class=\"form-control\"\r\n    placeholder=\"{{'Total length'|translate}}\"\r\n    [(ngModel)]=\"totalLength\"\r\n    #total=\"ngModel\"\r\n    required\r\n  />\r\n  <small translate>Total length is required for PDF file</small>\r\n</div>\r\n<div class=\"text-center upload-zone\">\r\n  <div\r\n    ng2FileDrop\r\n    [ngClass]=\"{ 'nv-file-over': hasBaseDropZoneOver }\"\r\n    (fileOver)=\"fileOverBase($event)\"\r\n    [uploader]=\"uploader\"\r\n    class=\"well my-drop-zone mt-1\"\r\n    (onFileDrop)=\"fileDrop($event)\"\r\n  >\r\n    <label for=\"{{options.id || 'file-upload'}}\" class=\"custom-file-upload\">\r\n      <i class=\"fas fa-cloud-upload-alt color-gray-light mr-2\"></i>\r\n      <span translate>{{ options.hintText || 'Drop or select file to here' }}</span>\r\n    </label>\r\n    <input\r\n      id=\"{{options.id || 'file-upload'}}\"\r\n      type=\"file\"\r\n      ng2FileSelect\r\n      [uploader]=\"uploader\"\r\n      name=\"mediaPath\"\r\n      [multiple]=\"multiple\"\r\n      (onFileSelected)=\"fileSelect($event)\"\r\n      class=\"custom-file-input\"\r\n      style=\"display: none\"\r\n      accept=\"{{options.accept || ''}}\"\r\n    />\r\n  </div>\r\n  <div class=\"progress\" [hidden]=\"!progress\">\r\n    <div class=\"progress-bar\" [ngStyle]=\"{ width: progress + '%' }\" [ngClass]=\"{ 'bg-success': progress == 100 }\">\r\n      <span *ngIf=\"progress === 100\" translate>File was uploaded</span>\r\n    </div>\r\n  </div>\r\n  <p *ngIf=\"uploader.queue.length && !autoUpload\">\r\n    <button type=\"button\" class=\"btn btn-primary btn-pink\" *ngIf=\"!uploadOnSelect\" (click)=\"upload()\" translate>\r\n      {{ options.uploadText || 'Upload' }}\r\n    </button>\r\n  </p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/breadcrumb/breadcrumb.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row page-titles\">\r\n  <div class=\"col-md-5 align-self-center\">\r\n    <h4 class=\"text-themecolor\">{{pageInfo?.title}}</h4>\r\n  </div>\r\n  <div class=\"col-md-7 align-self-center\">\r\n    <ol class=\"breadcrumb pull-right\">\r\n      <ng-template ngFor let-url [ngForOf]=\"pageInfo?.urls\" let-last=\"last\">\r\n        <li class=\"breadcrumb-item\" *ngIf=\"!last\" [routerLink]=\"url.url\">\r\n          <a href='javascript:void(0)'>{{url.title}}</a>\r\n        </li>\r\n        <li class=\"breadcrumb-item active\" *ngIf=\"last\">{{url.title}}</li>\r\n      </ng-template>\r\n    </ol>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/coupon/apply-coupon/apply.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/coupon/apply-coupon/apply.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cta-input rm-0 cta-input-mg-0\" *ngIf=\"!usedCoupon\">\r\n  <div class=\"input-group mb-1\">\r\n    <input\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      placeholder=\"Enter Coupon\"\r\n      aria-label=\"Recipient's username\"\r\n      aria-describedby=\"basic-addon2\"\r\n      [(ngModel)]=\"couponCode\"\r\n      required\r\n      #coupon=\"ngModel\"\r\n      name=\"coupon-code\"\r\n      disabled=\"{{appliedCoupon}}\"\r\n    />\r\n    <div class=\"input-group-append\">\r\n      <span class=\"input-group-text\" id=\"basic-addon2\" (click)=\"applyCoupon()\" *ngIf=\"!appliedCoupon\">Apply</span>\r\n      <span class=\"input-group-text\" id=\"basic-addon2\" (click)=\"applyCoupon()\" *ngIf=\"appliedCoupon\">Cancel</span>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"coupon.errors && (coupon.dirty || coupon.touched)\">\r\n    <p [hidden]=\"!coupon.errors.required\" class=\"error\" translate>Coupon code is required</p>\r\n  </div>\r\n  <small class=\"mb-1\" style=\"color: grey\"\r\n    >(*) Apply for enroll or gift. Only used once. Will apply coupon when payment success .</small\r\n  >\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/coupon/coupon-form/coupon-form.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/coupon/coupon-form/coupon-form.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-horizontal input-border\">\r\n  <form (submit)=\"submit(frm)\" #frm=\"ngForm\" class=\"coupon-form\">\r\n    <div class=\"row mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label translate>Name</label>\r\n          <input\r\n            type=\"text\"\r\n            name=\"name\"\r\n            class=\"form-control\"\r\n            placeholder=\"{{'Enter name' | translate}}\"\r\n            [(ngModel)]=\"coupon.name\"\r\n            required\r\n            #name=\"ngModel\"\r\n          />\r\n          <div *ngIf=\"name.errors && (name.dirty || name.touched || isSubmitted)\">\r\n            <p [hidden]=\"!name.errors.required\" style=\"color: red\">Please enter coupon name!</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label translate>Code</label>\r\n          <input\r\n            class=\"form-control\"\r\n            name=\"code\"\r\n            placeholder=\"{{'Enter code' | translate}}\"\r\n            [(ngModel)]=\"coupon.code\"\r\n            required\r\n            #codeCoupon=\"ngModel\"\r\n            pattern=\"[a-zA-Z0-9-_%]*\"\r\n          />\r\n          <div *ngIf=\"codeCoupon.errors && (codeCoupon.dirty || codeCoupon.touched || isSubmitted)\">\r\n            <p [hidden]=\"!codeCoupon.errors.required\" style=\"color: red\">Please enter coupon code!</p>\r\n            <p [hidden]=\"!codeCoupon.errors.pattern\" class=\"error\" style=\"color: red\">Code is invalid format</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label translate>Discount type</label>\r\n          <select [(ngModel)]=\"coupon.type\" name=\"type\" class=\"form-control\" required #type=\"ngModel\">\r\n            <option value=\"percent\" selected translate>Percent (%)</option>\r\n            <option value=\"money\" translate>Money</option>\r\n          </select>\r\n          <div *ngIf=\"type.errors && (type.dirty || type.touched || isSubmitted)\">\r\n            <p [hidden]=\"!type.errors.required\" style=\"color: red\" translate>Please choose type!</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label translate>Discount value</label>\r\n          <input\r\n            class=\"form-control\"\r\n            name=\"value\"\r\n            placeholder=\"{{'Enter discount value' | translate}}\"\r\n            [(ngModel)]=\"coupon.value\"\r\n            required\r\n            #value=\"ngModel\"\r\n            pattern=\"[.0-9]{0,8}\"\r\n          />\r\n          <div *ngIf=\"value.errors && (value.dirty || value.touched || isSubmitted)\">\r\n            <p [hidden]=\"!value.errors.required\" style=\"color: red\">Please enter discount value!</p>\r\n            <p [hidden]=\"!value.errors.pattern\" class=\"error\" style=\"color: red\">Value is invalid format</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label translate>Limit number of use</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            name=\"limit\"\r\n            placeholder=\"{{'Enter limit number of use' | translate}}\"\r\n            [(ngModel)]=\"coupon.limitNumberOfUse\"\r\n            required\r\n            #limit=\"ngModel\"\r\n            pattern=\"[0-9]*\"\r\n          />\r\n          <div *ngIf=\"limit.errors && (limit.dirty || limit.touched || isSubmitted)\">\r\n            <p [hidden]=\"!limit.errors.required\" style=\"color: red\" translate>Please enter value!</p>\r\n            <p [hidden]=\"!limit.errors.pattern\" class=\"error\" style=\"color: red\" translate>Value is invalid format</p>\r\n          </div>\r\n          <div *ngIf=\"limit.value <= 0 && (limit.dirty || limit.touched || isSubmitted)\">\r\n            <p style=\"color: red\" translate>Value must be greater than 0!</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label translate>Start date</label>\r\n              <div class=\"input-group-append\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd-mm-yyyy\"\r\n                  name=\"startTime\"\r\n                  [(ngModel)]=\"time.startTime\"\r\n                  ngbDatepicker\r\n                  #b=\"ngbDatepicker\"\r\n                  (dateSelect)=\"selectDate($event, 'startTime')\"\r\n                  #start=\"ngModel\"\r\n                  required\r\n                />\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"b.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\"></i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"!coupon.startTime && (start.dirty || start.touched || isSubmitted)\">\r\n                <p style=\"color: red\" translate>Please enter start date!</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label translate>Expired date</label>\r\n              <div class=\"input-group-append\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd-mm-yyyy\"\r\n                  name=\"expiredDate\"\r\n                  [(ngModel)]=\"time.expiredDate\"\r\n                  ngbDatepicker\r\n                  #a=\"ngbDatepicker\"\r\n                  (dateSelect)=\"selectDate($event, 'expiredDate')\"\r\n                  #expire=\"ngModel\"\r\n                  required\r\n                />\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"a.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\"></i>\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"!coupon.expiredDate && (expire.dirty || expire.touched || isSubmitted)\">\r\n                <p style=\"color: red\" translate>Please enter expired date!</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <span translate>Active</span> <input type=\"checkbox\" name=\"isActive\" [(ngModel)]=\"coupon.active\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-md-12\">\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-default mt-4\" translate>Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/date-range/date-range.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/date-range/date-range.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"datepicker date input-group p-0 shadow-sm position-relative align-center\" style=\"border-radius: 0.3em\">\r\n  <!-- <div class=\"input-group rmb-4 rounded-50\"> -->\r\n  <input class=\"form-control\" value=\"{{showDates}}\" *ngIf=\"showDates\" readonly (mousedown)=\"toggle()\" />\r\n  <input\r\n    style=\"background-color: white; border-top-right-radius: 0.3em; border-bottom-right-radius: 0.3em\"\r\n    class=\"form-control datetimepicker-input\"\r\n    placeholder=\"{{'Select date' |  translate}}\"\r\n    *ngIf=\"!showDates\"\r\n    readonly\r\n    (mousedown)=\"toggle()\"\r\n  />\r\n\r\n  <!-- </div> -->\r\n\r\n  <!-- {{dateRange?.from}} - {{dateRange?.to}} -->\r\n\r\n  <div class=\"calendar-popup\" [class.active]=\"isShow\" *ngIf=\"isShow\">\r\n    <ngb-datepicker\r\n      #dp\r\n      (select)=\"onDateSelection($event)\"\r\n      [displayMonths]=\"2\"\r\n      [dayTemplate]=\"t\"\r\n      [outsideDays]=\"outsideDays\"\r\n    >\r\n    </ngb-datepicker>\r\n    <ng-template #t let-date=\"date\" let-focused=\"focused\">\r\n      <span\r\n        class=\"custom-day\"\r\n        [class.focused]=\"focused\"\r\n        [class.range]=\"isRange(date)\"\r\n        [class.faded]=\"isHovered(date) || isInside(date)\"\r\n        (mouseenter)=\"hoveredDate = date\"\r\n        (mouseleave)=\"hoveredDate = null\"\r\n        [class.outSideDate]=\"outsideDays\"\r\n      >\r\n        {{ date.day }}\r\n      </span>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/footer/footer.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/footer/footer.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer content starts -->\r\n\r\n<section class=\"sm-padding bg-color-light-black\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <p class=\"footer-content color-white\" translate>\r\n          Bobprep - practise makes progress. Find top rated instructors guide you in every step of your journey. Try a\r\n          free lesson today. Tutors are waiting for you.\r\n        </p>\r\n        <a class=\"btn btn-default\" (click)=\"register()\" translate>Register</a>\r\n        <!-- <button-signup-component [text]=\"textButton\"></button-signup-component> -->\r\n      </div>\r\n      <div class=\"col-md-3 rmt-4\">\r\n        <h4 class=\"color-white\"><span translate>About Company</span></h4>\r\n        <ul class=\"p-0 list-unstyled\">\r\n          <li class=\"footer-item\">\r\n            <a\r\n              class=\"footer-link color-white\"\r\n              [routerLink]=\"'/pages/how-does-it-work'\"\r\n              routerLinkActive=\"router-link-active\"\r\n              translate\r\n              >How it works</a\r\n            >\r\n          </li>\r\n          <li class=\"footer-item\">\r\n            <a\r\n              class=\"footer-link color-white\"\r\n              [routerLink]=\"['/pages/teach-with-us']\"\r\n              routerLinkActive=\"router-link-active\"\r\n              translate\r\n              >Teach with us</a\r\n            >\r\n          </li>\r\n          <li class=\"footer-item\" *ngFor=\"let item of posts\">\r\n            <a\r\n              class=\"footer-link color-white\"\r\n              *ngIf=\"item.type != 'post'\"\r\n              [routerLink]=\"['/posts/detail', item.alias]\"\r\n              routerLinkActive=\"router-link-active\"\r\n              translate\r\n              >{{item.title}}</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-3 rmt-4\">\r\n        <h4 class=\"color-white\" translate>Resources</h4>\r\n        <ul class=\"p-0 list-unstyled\">\r\n          <li class=\"footer-item\">\r\n            <a class=\"footer-link color-white\" [routerLink]=\"['/webinars/list']\" translate>Webinars</a>\r\n          </li>\r\n          <li class=\"footer-item\">\r\n            <a class=\"footer-link color-white\" [routerLink]=\"['/categories']\" translate>Categories</a>\r\n          </li>\r\n          <li class=\"footer-item\">\r\n            <a class=\"footer-link color-white\" [routerLink]=\"['/tutors/subject']\" translate>Subjects</a>\r\n          </li>\r\n          <li class=\"footer-item\">\r\n            <a class=\"footer-link color-white\" [routerLink]=\"['/tutors']\" translate>Find tutors</a>\r\n          </li>\r\n          <div *ngIf=\"!isLoggedin\">\r\n            <li class=\"footer-item\">\r\n              <a class=\"footer-link color-white\" [routerLink]=\"['/auth/login']\" translate>Login</a>\r\n            </li>\r\n            <li class=\"footer-item\">\r\n              <a class=\"footer-link color-white\" [routerLink]=\"['/auth/sign-up']\" translate>Sign up</a>\r\n            </li>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-3 rmt-4\">\r\n        <h4 class=\"color-white\" translate>Contact Us</h4>\r\n        <ul class=\"p-0 list-unstyled\">\r\n          <li class=\"footer-item\">\r\n            <span translate class=\"color-white\">Email:</span>&nbsp;\r\n            <a class=\"footer-link color-white\" href=\"mailto:{{config?.contactEmail || 'contact@bobprep.com'}}\">\r\n              {{config?.contactEmail || 'contact@bobprep.com'}}</a\r\n            >\r\n          </li>\r\n          <li class=\"footer-item\">\r\n            <span translate class=\"color-white\">Phone:</span>&nbsp;\r\n            <a class=\"footer-link color-white\" href=\"tel:{{config?.contactPhone || '+1-212-393-4647'}}\">\r\n              {{config?.contactPhone || '+1-212-393-4647'}}</a\r\n            >\r\n          </li>\r\n          <ul class=\"p-0 list-unstyled social-media-links mt-3\">\r\n            <li class=\"facebook\" *ngIf=\"config?.facebookLink\">\r\n              <a class=\"footer-social\" [href]=\"'https://'+config?.facebookLink\"><i class=\"fab fa-facebook-f\"></i></a>\r\n            </li>\r\n            <li class=\"twitter\" *ngIf=\"config?.twitterLink\">\r\n              <a class=\"footer-social\" [href]=\"'https://'+config?.twitterLink\"><i class=\"fab fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"instagram\" *ngIf=\"config?.instagramLink\">\r\n              <a class=\"footer-social\" [href]=\"'https://'+config?.instagramLink\"><i class=\"fab fa-instagram\"></i></a>\r\n            </li>\r\n          </ul>\r\n          <li class=\"footer-item\">\r\n            <a class=\"footer-link color-white\" [routerLink]=\"['/posts/detail', 'terms']\" translate\r\n              >Terms of service - privacy policy</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"footer-bottom bg-color-black\">\r\n  <p class=\"color-white text-center footer-bottom-content\">\r\n    &copy;\r\n    <script>\r\n      document.write(new Date().getFullYear());\r\n    </script>\r\n    <span translate>Copyright. All rights reserved </span>\r\n    <!-- {{appConfig?.version}}\r\n    <span translate>build</span>\r\n    {{appConfig?.build}} -->\r\n  </p>\r\n</section>\r\n\r\n<!-- Footer content ends -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/header/header.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/header/header.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header Starts -->\r\n<div class=\"header\">\r\n  <nav class=\"navbar navbar-expand-lg box-shadow-sm\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\"\r\n        ><img src=\"{{appConfig?.siteLogo || 'assets/images/logo/bobprep-header-logo.png'}}\"\r\n      /></a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\"\r\n        aria-label=\"Toggle navigation\"\r\n      >\r\n        <span class=\"navbar-toggle-icon\"></span>\r\n        <span class=\"navbar-toggle-icon\"></span>\r\n        <span class=\"navbar-toggle-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\" [routerLinkActive]=\"'active'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/home']\" translate>Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"'active'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/pages/how-does-it-work']\" translate>How It Works</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"'active'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/tutors']\" translate>Choose Tutors</a>\r\n          </li>\r\n          <!-- <li class=\"nav-item\" [routerLinkActive]=\"'active'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/pages/teach-with-us']\" translate>Teach With Us</a>\r\n          </li> -->\r\n          <li class=\"nav-item\" [routerLinkActive]=\"'active'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/webinars/list']\" translate>Group Classes</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"'active'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/courses/list']\" translate>Courses</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\" [routerLinkActive]=\"'active'\">\r\n            <a class=\"nav-link\" (click)=\"login()\" *ngIf=\"!currentUser\" translate>Log in</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"'active'\">\r\n            <a class=\"nav-link btn-sign-up\" [routerLink]=\"['/auth/sign-up']\" *ngIf=\"!currentUser\" translate>Sign Up</a>\r\n          </li>\r\n          <!-- <li class=\"nav-item\" *ngIf=\"isLoaded\">\r\n            <select class=\"selectpicker\" (change)=\"changeLang()\" [(ngModel)]=\"userLang\">\r\n              <option *ngFor=\"let lang of languages\" selected=\"userLang === lang.key\" ngValue=\"{{lang.key}}\">\r\n                {{lang.name}}\r\n              </option>\r\n            </select>\r\n          </li> -->\r\n          <li class=\"nav-item\" *ngIf=\"isLoaded\" ngbDropdown>\r\n            <a class=\"dropdown-toggle nav-link\" ngbDropdownToggle role=\"button\" id=\"dropdownLanguage\">\r\n              <img class=\"image-sm\" [src]=\"flag\" /> <span style=\"text-transform: uppercase\"> {{userLang}}</span>\r\n            </a>\r\n            <div\r\n              ngbDropdownMenu\r\n              aria-labelledby=\"dropdownLanguage\"\r\n              class=\"drop-menu dropdown-language\"\r\n              style=\"min-width: 94px\"\r\n            >\r\n              <a class=\"dropdown-item flags\" *ngFor=\"let lang of languages\" (click)=\"changeLang(lang)\">\r\n                <img class=\"image-sm\" [src]=\"lang.flag\" /> {{lang.name}}\r\n              </a>\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item dropdown\" *ngIf=\"currentUser\" ngbDropdown>\r\n            <a class=\"dropdown-toggle nav-link\" ngbDropdownToggle role=\"button\" id=\"dropdownMenuLink\">\r\n              <span class=\"color\" translate>Hi </span><span class=\"name-top\">{{currentUser?.name}}</span>\r\n            </a>\r\n            <div class=\"dropdown-menu\" ngbDropdownMenu aria-labelledby=\"dropdownMenuLink\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/users/profile']\"\r\n                ><i class=\"fa fa-user\"></i>&nbsp;<span translate>Profile</span></a\r\n              >\r\n              <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"logout()\"\r\n                ><i class=\"fa fa-lock\"></i>&nbsp;<span translate>Logout</span></a\r\n              >\r\n            </div>\r\n          </li>\r\n          <!-- <li class=\"nav-item\" [routerLinkActive]=\"'active'\">\r\n            <a class=\"nav-link\" [href]=\"'https://kb.bobprep.com/'\" target=\"_blank\"\r\n              ><i class=\"far fa-question-circle\"></i\r\n            ></a>\r\n          </li> -->\r\n          <!-- <li class=\"nav-item\" [routerLinkActive]=\"'active'\">\r\n            <a class=\"nav-link\" href=\"#\"><i class=\"far fa-bell\"></i></a>\r\n          </li> -->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>\r\n<!-- Header Ends -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/lecture-item/lecture-item.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/lecture-item/lecture-item.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between\">\r\n  <a class=\"font-sm js-video-button\" href=\"#\" data-video-id=\"7TUOI23spt0\"\r\n    ><i class=\"far fa-play-circle mr-2 font-sm\"></i>Welcome to the Most Advanced CSS Course Ever!</a\r\n  >\r\n  <p class=\"font-sm text-secondary\">02:45</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/modal-signup/button.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/modal-signup/button.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-default\" (click)=\"open()\" translate>Register</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/modal-signup/modal-signup.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/modal-signup/modal-signup.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header header-modal-signup\">\r\n  <h4 class=\"modal-title\" translate>Signup</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <!-- <form #frm=\"ngForm\" (submit)=\"submit(frm)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"{{ 'Enter name' | translate }}\"\r\n            #name=\"ngModel\"\r\n            name=\"name\"\r\n            required\r\n            [(ngModel)]=\"account.name\"\r\n          />\r\n          <div *ngIf=\"name.errors && (name.dirty || name.touched || submitted)\">\r\n            <p [hidden]=\"!name.errors.required\" class=\"error\" translate>Name is required</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"email@example.com\"\r\n            #email=\"ngModel\"\r\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n            name=\"email\"\r\n            required\r\n            [(ngModel)]=\"account.email\"\r\n          />\r\n          <small class=\"form-text text-muted\" translate\r\n            ><span translate>We'll never share your email with anyone else</span>.</small\r\n          >\r\n          <div *ngIf=\"email.errors && (email.dirty || email.touched || submitted)\">\r\n            <p [hidden]=\"!email.errors.required\" class=\"error\" translate>Email is required</p>\r\n            <p [hidden]=\"!email.errors.pattern\" class=\"error\" translate>Email is invalid format</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            placeholder=\"{{ 'Password' | translate }}\"\r\n            [minlength]=\"6\"\r\n            #pw=\"ngModel\"\r\n            required\r\n            name=\"password\"\r\n            [(ngModel)]=\"account.password\"\r\n          />\r\n          <div *ngIf=\"pw.errors && (pw.dirty || pw.touched || submitted)\">\r\n            <p [hidden]=\"!pw.errors.minlength\" class=\"error\" translate>Password must be from 6 characters length</p>\r\n            <p [hidden]=\"!pw.errors.required\" class=\"error\" translate>Password is required</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            placeholder=\"{{ 'Confirmer Mot de passe' | translate }}\"\r\n            #cf=\"ngModel\"\r\n            required\r\n            name=\"confirm\"\r\n            [(ngModel)]=\"confirm.pw\"\r\n          />\r\n          <div *ngIf=\"cf.errors && (cf.dirty || cf.touched || submitted)\">\r\n            <p [hidden]=\"!cf.errors.required\" class=\"error\" translate>Confirm password is required</p>\r\n          </div>\r\n          <div *ngIf=\"isMath\">\r\n            <p class=\"error\" translate>Confirm password and Password dont match</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group signup-document\" *ngIf=\"account.type === 'tutor'\">\r\n          <label translate>Upload CV</label>\r\n          <p class=\"help help-block\">\r\n            <small translate\r\n              >Upload pdf file, docx file, rar file, jpg file, jpeg file, png file or zip file for your document</small\r\n            >\r\n          </p>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <strong translate><span translate>I am</span>:</strong><br />\r\n          <div class=\"list-radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"type\" value=\"student\" [(ngModel)]=\"account.type\" />\r\n              <span translate>Student</span></label\r\n            >\r\n            <label>\r\n              <input type=\"radio\" name=\"type\" value=\"parent\" [(ngModel)]=\"account.type\" /> <span translate>Parent</span>\r\n            </label>\r\n            <label>\r\n              <input type=\"radio\" name=\"type\" value=\"tutor\" [(ngModel)]=\"account.type\" />\r\n              <span translate>Tutor</span></label\r\n            >\r\n          </div>\r\n          <div *ngIf=\"submitted && account.type === ''\">\r\n            <p class=\"error\" translate>Type is required</p>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn btn-success btn-pink\" type=\"submit\" translate>Submit</button>\r\n      </div>\r\n    </div>\r\n  </form> -->\r\n  <div class=\"login-form input-border\">\r\n    <!--begin::Form-->\r\n    <form class=\"form\" #frm=\"ngForm\" (submit)=\"submit(frm)\">\r\n      <!--begin::Title-->\r\n      <!-- <div class=\"pb-4\">\r\n        <h3 class=\"\" translate>Create Account</h3>\r\n        <p class=\"text-muted sub-content\" translate>\r\n          <span translate>Already have an Account</span> ?\r\n          <a [routerLink]=\"['/auth/login']\" class=\"color-light-red\" translate>Sign In</a>\r\n        </p>\r\n      </div> -->\r\n      <div id=\"cardDivtutor\" class=\"details\">\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"{{ 'Enter name' | translate }}\"\r\n            #name=\"ngModel\"\r\n            name=\"name\"\r\n            required\r\n            [(ngModel)]=\"account.name\"\r\n          />\r\n          <div *ngIf=\"name.errors && (name.dirty || name.touched || submitted)\">\r\n            <p [hidden]=\"!name.errors.required\" class=\"error\" translate>Name is required</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"{{ 'Enter your email' | translate }}\"\r\n            #email=\"ngModel\"\r\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n            name=\"email\"\r\n            required\r\n            [(ngModel)]=\"account.email\"\r\n          />\r\n          <small class=\"form-text text-muted\" translate>We'll never share your email with anyone else.</small>\r\n          <div *ngIf=\"email.errors && (email.dirty || email.touched || submitted)\">\r\n            <p [hidden]=\"!email.errors.required\" class=\"error\" translate>Email is required</p>\r\n            <p [hidden]=\"!email.errors.pattern\" class=\"error\" translate>Email is invalid format</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            placeholder=\"{{ 'Password' | translate }}\"\r\n            [minlength]=\"6\"\r\n            #pw=\"ngModel\"\r\n            required\r\n            name=\"password\"\r\n            [(ngModel)]=\"account.password\"\r\n          />\r\n          <div *ngIf=\"pw.errors && (pw.dirty || pw.touched || submitted)\">\r\n            <p [hidden]=\"!pw.errors.minlength\" class=\"error\" translate>Password must be from 6 characters length</p>\r\n            <p [hidden]=\"!pw.errors.required\" class=\"error\" translate>Password is required</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            placeholder=\"{{ 'Confirm Password' | translate }}\"\r\n            #cf=\"ngModel\"\r\n            required\r\n            name=\"confirm\"\r\n            [(ngModel)]=\"confirm.pw\"\r\n          />\r\n          <div *ngIf=\"cf.errors && (cf.dirty || cf.touched || submitted)\">\r\n            <p [hidden]=\"!cf.errors.required\" class=\"error\" translate>Confirm password is required</p>\r\n          </div>\r\n          <div *ngIf=\"isMath\">\r\n            <p class=\"error\" translate>Confirm password and Password do not match</p>\r\n          </div>\r\n        </div>\r\n        <p class=\"text-secondary\" *ngIf=\"account.type === 'tutor'\" translate>Upload verification document</p>\r\n        <p *ngIf=\"idDocumentFile && idDocumentFile.name && account.type === 'tutor'\">{{ idDocumentFile.name }}</p>\r\n        <app-file-upload [options]=\"idDocumentOptions\" *ngIf=\"account.type === 'tutor'\"></app-file-upload>\r\n        <small *ngIf=\"account.type === 'tutor'\" translate\r\n          >Upload pdf file, docx file, rar file, jpg file, jpeg file, png file or zip file for your document</small\r\n        >\r\n        <p class=\"text-secondary\" *ngIf=\"account.type === 'tutor'\" translate>Upload resume document</p>\r\n        <p *ngIf=\"resumeFile && resumeFile.name && account.type === 'tutor'\">{{ resumeFile.name }}</p>\r\n        <app-file-upload [options]=\"resumeOptions\" *ngIf=\"account.type === 'tutor'\"></app-file-upload>\r\n        <small *ngIf=\"account.type === 'tutor'\" translate>Upload pdf file for your document</small>\r\n        <p class=\"text-secondary\" *ngIf=\"account.type === 'tutor'\" translate>Upload certification document</p>\r\n        <p *ngIf=\"certificationFile && certificationFile.name && account.type === 'tutor'\">\r\n          {{ certificationFile.name }}\r\n        </p>\r\n        <app-file-upload [options]=\"certificationOptions\" *ngIf=\"account.type === 'tutor'\"></app-file-upload>\r\n        <small *ngIf=\"account.type === 'tutor'\" translate>Upload pdf file for your document</small>\r\n      </div>\r\n      <div class=\"mt-3\">\r\n        <h6 translate>I am a :</h6>\r\n        <label class=\"custom-radio\" translate\r\n          ><span translate>Student</span>\r\n          <input type=\"radio\" name=\"type\" value=\"student\" [(ngModel)]=\"account.type\" />\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n        <!-- <label class=\"custom-radio\"\r\n          >Parent\r\n          <input type=\"radio\" name=\"type\" value=\"parent\" [(ngModel)]=\"account.type\" />\r\n          <span class=\"checkmark\"></span>\r\n        </label> -->\r\n        <label class=\"custom-radio\"\r\n          ><span translate>Tutor</span>\r\n          <input type=\"radio\" name=\"type\" value=\"tutor\" [(ngModel)]=\"account.type\" />\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </div>\r\n      <div *ngIf=\"submitted && account.type === ''\">\r\n        <p class=\"error\" translate>Type is required</p>\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <button class=\"btn btn-default mt-5 btn-block\" type=\"submit\" translate>Sign Up</button>\r\n      </div>\r\n      <!--end::Form group-->\r\n      <!--begin::Action-->\r\n      <!--end::Action-->\r\n    </form>\r\n    <!--end::Form-->\r\n  </div>\r\n</div>\r\n<!-- <div class=\"modal-footer\">\r\n  <button type=\"submit\" class=\"btn btn-outline-dark\" (click)=\"submit()\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.dismiss('Cross click')\">Close</button>\r\n</div> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/newsletter/newsletter.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/newsletter/newsletter.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"searchform\" #frm=\"ngForm\" (submit)=\"submit(frm)\">\r\n  <div class=\"input-group mb-3\">\r\n    <input\r\n      type=\"email\"\r\n      class=\"form-control\"\r\n      placeholder=\"{{'user@example.com' | translate}}\"\r\n      [(ngModel)]=\"info.email\"\r\n      name=\"email\"\r\n      required\r\n      #email=\"ngModel\"\r\n      pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n    />\r\n    <div class=\"input-group-append\">\r\n      <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-arrow-circle-o-right\"></i></button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"info.email && email.errors && (email.dirty || email.touched || submitted)\">\r\n    <p [hidden]=\"!email.errors.required\" class=\"error\" translate>Email is required</p>\r\n    <p [hidden]=\"!email.errors.pattern\" class=\"error\" translate>Please enter a valid email address</p>\r\n  </div>\r\n  <p>\r\n    <span translate>Get the most recent updates from our site and be updated your self...</span>\r\n  </p>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/search-bar/search-bar.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/search-bar/search-bar.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Start Banner -->\r\n<div\r\n  class=\"banner-area d-flex justify-content-center align-items-center text-center\"\r\n  [style]=\"config && config.siteBanner ? { 'background-image': 'url(' + config.siteBanner + ')' } : { 'background-image': 'url(' +  'assets/images/banner/livelearn-main-banner-image.png' + ')' }\"\r\n>\r\n  <div class=\"bg-overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"banner-heading\">\r\n      <h1 class=\"color-white\" translate>Practice Makes Progress</h1>\r\n      <p class=\"color-white banner-subtitle mt-n3\" translate>Learn at your own space</p>\r\n      <div class=\"input-group mb-3 max-width-700 mx-auto\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text border-left-rounded-md\" (click)=\"submit()\">\r\n            <i class=\"fas fa-search color-light-red\"></i>\r\n          </span>\r\n        </div>\r\n        <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n          <ngb-highlight [result]=\"r.name\" [term]=\"t\"></ngb-highlight>\r\n        </ng-template>\r\n        <input\r\n          placeholder=\"{{'What would you like to learn?' | translate}}\"\r\n          id=\"typeahead-template\"\r\n          type=\"search\"\r\n          class=\"form-control border-left-none border-right-rounded-md\"\r\n          [ngbTypeahead]=\"search\"\r\n          [resultTemplate]=\"rt\"\r\n          [inputFormatter]=\"formatter\"\r\n          (selectItem)=\"onSelect($event)\"\r\n          (keypress)=\"keyPress($event)\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Ends Banner -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/sidebar/sidebar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/sidebar/sidebar.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"show-products\">\r\n  <h3 class=\"title-show-products\">Danh mục sản phẩm <a href=\"#\"></a></h3>\r\n  <ul class=\"menu-right\">\r\n    <li *ngFor=\"let item of tree\">\r\n      <a [routerLink]=\"['/products/categories', item.alias]\">{{item.name}}</a>\r\n      <ul>\r\n        <h3>\r\n          <a [routerLink]=\"['/products/categories', item.alias]\">{{item.name}}</a>\r\n        </h3>\r\n        <ul *ngIf=\"item.children && item.children.length\">\r\n          <li *ngFor=\"let child of item.children\">\r\n            <a [routerLink]=\"['/products/categories', child.alias]\">{{child.name}}</a>\r\n          </li>\r\n        </ul>\r\n      </ul>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/sort/sort.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/sort/sort.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span>\r\n  <a\r\n    (click)=\"sort(sortBy, 'desc')\"\r\n    class=\"sort sort-desc\"\r\n    [ngClass]=\"{'active': sortOption.sortType==='desc' && sortOption.sortBy===sortBy}\"\r\n    ><i class=\"fas fa-long-arrow-alt-down\"></i\r\n  ></a>\r\n  <a\r\n    (click)=\"sort(sortBy, 'asc')\"\r\n    class=\"sort sort-asc\"\r\n    [ngClass]=\"{'active': sortOption.sortType==='asc' && sortOption.sortBy===sortBy}\"\r\n    ><i class=\"fas fa-long-arrow-alt-up\"></i\r\n  ></a>\r\n</span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/table/table.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/table/table.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table\r\n  id=\"table_id\"\r\n  id=\"table_id\"\r\n  class=\"table table-horizontal tble-responsive table-user dataTable no-footer\"\r\n  role=\"grid\"\r\n  aria-describedby=\"table_id_info\"\r\n>\r\n  <thead>\r\n    <tr role=\"row\">\r\n      <th *ngFor=\"let col of columns\">\r\n        <span translate>{{col.title}}</span>\r\n        <app-sort\r\n          *ngIf=\"col.sorter\"\r\n          [sortOption]=\"sortOption\"\r\n          [sortBy]=\"col.sortBy ? col.sortBy : col.dataIndex\"\r\n          (onSort)=\"onSortTable($event)\"\r\n        ></app-sort>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngIf=\"(!dataSource || (dataSource && dataSource.length === 0)) && !loading\">\r\n      <td colspan=\"10\" translate>There are no results</td>\r\n    </tr>\r\n    <tr *ngIf=\"loading\">\r\n      <td colspan=\"10\" translate><span translate>Loading</span>...</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/user-left-menu/left-menu.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/user-left-menu/left-menu.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-bottom\">\r\n  <div class=\"pn-ProductNav_Wrapper bg-color-light-gray\">\r\n    <div class=\"container\">\r\n      <nav id=\"pnProductNav\" class=\"pn-ProductNav navbar\">\r\n        <div id=\"pnProductNavContents\" class=\"pn-ProductNav_Contents\">\r\n          <a\r\n            [routerLink]=\"['/users/dashboard']\"\r\n            class=\"pn-ProductNav_Link\"\r\n            [routerLinkActive]=\"'active'\"\r\n            aria-selected=\"true\"\r\n          >\r\n            <i class=\"far fa-address-card mr-2\"></i>\r\n            <span translate>Dashboard</span>\r\n          </a>\r\n          <a [routerLink]=\"['/users/messages/conversations']\" [routerLinkActive]=\"'active'\" class=\"pn-ProductNav_Link\">\r\n            <i class=\"far fa-envelope mr-2\"></i>\r\n            <span translate>My Message</span>\r\n          </a>\r\n          <a\r\n            [routerLink]=\"['/users/my-categories']\"\r\n            [routerLinkActive]=\"'active'\"\r\n            class=\"pn-ProductNav_Link\"\r\n            *ngIf=\"type === 'tutor'\"\r\n          >\r\n            <i class=\"far fa-list-alt mr-2\"></i>\r\n            <span translate>My Categories</span>\r\n          </a>\r\n          <a [routerLink]=\"['/users/profile']\" class=\"pn-ProductNav_Link\" [routerLinkActive]=\"'active'\">\r\n            <i class=\"far fa-address-card mr-2\"></i>\r\n            <span translate>Profile</span>\r\n          </a>\r\n          <a [routerLink]=\"['/users/favorites', 'tutor']\" class=\"pn-ProductNav_Link\" [routerLinkActive]=\"'active'\">\r\n            <i class=\"far fa-heart mr-2\"></i>\r\n            <span translate>Favorite tutor</span>\r\n          </a>\r\n          <a [routerLink]=\"['/users/favorites', 'webinar']\" class=\"pn-ProductNav_Link\" [routerLinkActive]=\"'active'\">\r\n            <i class=\"far fa-heart mr-2\"></i>\r\n            <span translate>Favorite webinar</span>\r\n          </a>\r\n          <a [routerLink]=\"['/users/favorites', 'course']\" class=\"pn-ProductNav_Link\" [routerLinkActive]=\"'active'\">\r\n            <i class=\"far fa-heart mr-2\"></i>\r\n            <span translate>Favorite course</span>\r\n          </a>\r\n          <a\r\n            *ngIf=\"type === 'tutor'\"\r\n            [routerLink]=\"['/users/webinars']\"\r\n            [routerLinkActive]=\"'active'\"\r\n            class=\"pn-ProductNav_Link\"\r\n          >\r\n            <i class=\"fas fa-desktop mr-2\"></i>\r\n            <span translate>My Group Classes</span>\r\n          </a>\r\n          <a\r\n            *ngIf=\"type === 'tutor'\"\r\n            [routerLink]=\"['/users/schedule']\"\r\n            [routerLinkActive]=\"'active'\"\r\n            class=\"pn-ProductNav_Link\"\r\n          >\r\n            <i class=\"fas fa-book-reader mr-2\"></i>\r\n            <span translate>My 1 on 1 Classes</span>\r\n          </a>\r\n          <a\r\n            *ngIf=\"type === 'tutor'\"\r\n            [routerLink]=\"['/users/courses']\"\r\n            [routerLinkActive]=\"'active'\"\r\n            class=\"pn-ProductNav_Link\"\r\n          >\r\n            <i class=\"fas fa-chalkboard-teacher mr-2\"></i>\r\n            <span translate>Courses Manager</span>\r\n          </a>\r\n          <a\r\n            *ngIf=\"type === 'tutor'\"\r\n            [routerLink]=\"['/users/course-transaction']\"\r\n            [routerLinkActive]=\"'active'\"\r\n            class=\"pn-ProductNav_Link\"\r\n          >\r\n            <i class=\"fas fa-dollar-sign mr-2\"></i>\r\n            <span translate>Course Transactions</span>\r\n          </a>\r\n          <a [routerLink]=\"['/users/transaction/list']\" [routerLinkActive]=\"'active'\" class=\"pn-ProductNav_Link\">\r\n            <i class=\"fas fa-credit-card mr-2\"></i>\r\n            <span translate>My Transactions</span>\r\n          </a>\r\n          <a [routerLink]=\"['/users/lessons']\" [routerLinkActive]=\"'active'\" class=\"pn-ProductNav_Link\">\r\n            <i class=\"fas fa-book mr-2\"></i>\r\n            <span translate>My Lessons</span>\r\n          </a>\r\n          <a [routerLink]=\"['/users/my-courses']\" [routerLinkActive]=\"'active'\" class=\"pn-ProductNav_Link\">\r\n            <i class=\"fas fa-book mr-2\"></i>\r\n            <span translate>My Courses</span>\r\n          </a>\r\n          <a\r\n            *ngIf=\"type === 'tutor'\"\r\n            [routerLink]=\"['/users/appointments']\"\r\n            [routerLinkActive]=\"'active'\"\r\n            class=\"pn-ProductNav_Link\"\r\n          >\r\n            <i class=\"far fa-calendar-check mr-2\"></i>\r\n            <span translate>My Appointments</span>\r\n          </a>\r\n          <a\r\n            *ngIf=\"type === 'tutor'\"\r\n            [routerLink]=\"['/users/payout/request']\"\r\n            [routerLinkActive]=\"'active'\"\r\n            class=\"pn-ProductNav_Link\"\r\n          >\r\n            <i class=\"far fa-calendar-check mr-2\"></i>\r\n            <span translate>Payout</span>\r\n          </a>\r\n          <a [routerLink]=\"['/users/refund/request']\" [routerLinkActive]=\"'active'\" class=\"pn-ProductNav_Link\">\r\n            <i class=\"far fa-calendar-check mr-2\"></i>\r\n            <span translate>Refund Request</span>\r\n          </a>\r\n          <span id=\"pnIndicator\" class=\"pn-ProductNav_Indicator\"></span>\r\n        </div>\r\n      </nav>\r\n      <button id=\"pnAdvancerLeft\" class=\"pn-Advancer pn-Advancer_Left\" type=\"button\">\r\n        <i class=\"fa fa-chevron-left color-white font-sm\"></i>\r\n      </button>\r\n      <button id=\"pnAdvancerRight\" class=\"pn-Advancer pn-Advancer_Right\" type=\"button\">\r\n        <i class=\"fa fa-chevron-right color-white font-sm\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"pn-ProductNav_Wrapper\" *ngIf=\"!currentUser?.isActive\">\r\n    <div class=\"alert alert-warning\" role=\"alert\">\r\n      <i class=\"fas fa-exclamation-triangle\"></i>\r\n      Your account has been deactivated by the admin, you can currently still be active on your dashboard, but your\r\n      profile and your products will be temporarily unavailable on the homepage. Please contact the Admin for more\r\n      details!\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Approutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approutes", function() { return Approutes; });
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/dashboard/dashboard.component */ "./src/app/layouts/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _shared_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/resolver */ "./src/app/shared/resolver/index.ts");





var Approutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__["FullComponent"],
        resolve: {
            appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"],
            language: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["LanguageResolver"],
            subjects: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["SubjectsResolver"],
            posts: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["PostsResolver"],
            categories: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["CategoryResolver"]
        },
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.all(/*! import() | starter-starter-module */[__webpack_require__.e("default~appointment-appointment-module~categories-categories-module~course-course-module~page-page-m~95544be4"), __webpack_require__.e("default~appointment-appointment-module~categories-categories-module~payout-payout-module~post-post-m~5d1dff45"), __webpack_require__.e("default~appointment-appointment-module~course-course-module~payout-payout-module~post-post-module~st~8a982980"), __webpack_require__.e("default~categories-categories-module~page-page-module~post-post-module~starter-starter-module~tutor-~926f7375"), __webpack_require__.e("starter-starter-module")]).then(__webpack_require__.bind(null, /*! ./starter/starter.module */ "./src/app/starter/starter.module.ts")).then(function (m) { return m.StarterModule; }); }
            },
            {
                path: 'tutors',
                children: [{ path: '', loadChildren: function () { return Promise.all(/*! import() | tutor-tutor-module */[__webpack_require__.e("default~appointment-appointment-module~categories-categories-module~course-course-module~page-page-m~95544be4"), __webpack_require__.e("default~appointment-appointment-module~categories-categories-module~payout-payout-module~post-post-m~5d1dff45"), __webpack_require__.e("default~appointment-appointment-module~course-course-module~payout-payout-module~post-post-module~st~8a982980"), __webpack_require__.e("default~appointment-appointment-module~message-message-module~payout-payout-module~post-post-module~~9ea12b61"), __webpack_require__.e("default~categories-categories-module~page-page-module~post-post-module~starter-starter-module~tutor-~926f7375"), __webpack_require__.e("default~categories-categories-module~page-page-module~post-post-module~tutor-tutor-module~user-user-module"), __webpack_require__.e("default~post-post-module~tutor-tutor-module~user-user-module")]).then(__webpack_require__.bind(null, /*! ./tutor/tutor.module */ "./src/app/tutor/tutor.module.ts")).then(function (m) { return m.TutorModule; }); } }],
                resolve: {
                    subjects: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["SubjectsResolver"],
                    appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"]
                }
            },
            {
                path: 'posts',
                loadChildren: function () { return Promise.all(/*! import() | post-post-module */[__webpack_require__.e("default~appointment-appointment-module~categories-categories-module~course-course-module~page-page-m~95544be4"), __webpack_require__.e("default~appointment-appointment-module~categories-categories-module~payout-payout-module~post-post-m~5d1dff45"), __webpack_require__.e("default~appointment-appointment-module~course-course-module~payout-payout-module~post-post-module~st~8a982980"), __webpack_require__.e("default~appointment-appointment-module~message-message-module~payout-payout-module~post-post-module~~9ea12b61"), __webpack_require__.e("default~categories-categories-module~page-page-module~post-post-module~starter-starter-module~tutor-~926f7375"), __webpack_require__.e("default~categories-categories-module~page-page-module~post-post-module~tutor-tutor-module~user-user-module"), __webpack_require__.e("default~post-post-module~tutor-tutor-module~user-user-module"), __webpack_require__.e("default~post-post-module~user-user-module"), __webpack_require__.e("post-post-module")]).then(__webpack_require__.bind(null, /*! ./post/post.module */ "./src/app/post/post.module.ts")).then(function (m) { return m.PostModule; }); }
            },
            {
                path: 'pages',
                loadChildren: function () { return Promise.all(/*! import() | page-page-module */[__webpack_require__.e("default~appointment-appointment-module~categories-categories-module~course-course-module~page-page-m~95544be4"), __webpack_require__.e("default~categories-categories-module~page-page-module~post-post-module~starter-starter-module~tutor-~926f7375"), __webpack_require__.e("default~categories-categories-module~page-page-module~post-post-module~tutor-tutor-module~user-user-module"), __webpack_require__.e("page-page-module")]).then(__webpack_require__.bind(null, /*! ./page/page.module */ "./src/app/page/page.module.ts")).then(function (m) { return m.PageModule; }); },
                resolve: {
                    appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"]
                }
            },
            {
                path: 'webinars',
                loadChildren: function () { return Promise.all(/*! import() | webinar-webinar-module */[__webpack_require__.e("default~appointment-appointment-module~categories-categories-module~course-course-module~page-page-m~95544be4"), __webpack_require__.e("default~appointment-appointment-module~categories-categories-module~payout-payout-module~post-post-m~5d1dff45")]).then(__webpack_require__.bind(null, /*! ./webinar/webinar.module */ "./src/app/webinar/webinar.module.ts")).then(function (m) { return m.WebinarModule; }); },
                resolve: {
                    appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"]
                }
            },
            {
                path: 'payments',
                loadChildren: function () { return __webpack_require__.e(/*! import() | payment-payment-module */ "payment-payment-module").then(__webpack_require__.bind(null, /*! ./payment/payment.module */ "./src/app/payment/payment.module.ts")).then(function (m) { return m.PaymentModule; }); },
                resolve: {
                    appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"]
                }
            },
            {
                path: 'appointments',
                resolve: {
                    appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"]
                },
                loadChildren: function () { return Promise.all(/*! import() | appointment-appointment-module */[__webpack_require__.e("default~appointment-appointment-module~categories-categories-module~course-course-module~page-page-m~95544be4"), __webpack_require__.e("default~appointment-appointment-module~categories-categories-module~payout-payout-module~post-post-m~5d1dff45"), __webpack_require__.e("default~appointment-appointment-module~course-course-module~payout-payout-module~post-post-module~st~8a982980"), __webpack_require__.e("default~appointment-appointment-module~message-message-module~payout-payout-module~post-post-module~~9ea12b61"), __webpack_require__.e("default~appointment-appointment-module~payout-payout-module")]).then(__webpack_require__.bind(null, /*! ./appointment/appointment.module */ "./src/app/appointment/appointment.module.ts")).then(function (m) { return m.AppointmentModule; }); }
            },
            {
                path: 'categories',
                loadChildren: function () { return Promise.all(/*! import() | categories-categories-module */[__webpack_require__.e("default~appointment-appointment-module~categories-categories-module~course-course-module~page-page-m~95544be4"), __webpack_require__.e("default~appointment-appointment-module~categories-categories-module~payout-payout-module~post-post-m~5d1dff45"), __webpack_require__.e("default~categories-categories-module~page-page-module~post-post-module~starter-starter-module~tutor-~926f7375"), __webpack_require__.e("default~categories-categories-module~page-page-module~post-post-module~tutor-tutor-module~user-user-module"), __webpack_require__.e("categories-categories-module")]).then(__webpack_require__.bind(null, /*! ./categories/categories.module */ "./src/app/categories/categories.module.ts")).then(function (m) { return m.CategoriesModule; }); },
                resolve: {
                    categories: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["CategoryResolver"],
                    appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"]
                }
            },
            {
                path: 'courses',
                loadChildren: function () { return Promise.all(/*! import() | course-course-module */[__webpack_require__.e("default~appointment-appointment-module~categories-categories-module~course-course-module~page-page-m~95544be4"), __webpack_require__.e("default~appointment-appointment-module~course-course-module~payout-payout-module~post-post-module~st~8a982980"), __webpack_require__.e("course-course-module")]).then(__webpack_require__.bind(null, /*! ./course/course.module */ "./src/app/course/course.module.ts")).then(function (m) { return m.CourseModule; }); },
                resolve: {
                    appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"]
                }
            }
        ]
    },
    {
        path: 'users',
        component: _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardLayoutComponent"],
        canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        resolve: {
            appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"],
            language: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["LanguageResolver"],
            subjects: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["SubjectsResolver"],
            posts: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["PostsResolver"]
        },
        children: [
            { path: '', loadChildren: function () { return Promise.all(/*! import() | user-user-module */[__webpack_require__.e("default~appointment-appointment-module~categories-categories-module~course-course-module~page-page-m~95544be4"), __webpack_require__.e("default~appointment-appointment-module~categories-categories-module~payout-payout-module~post-post-m~5d1dff45"), __webpack_require__.e("default~appointment-appointment-module~course-course-module~payout-payout-module~post-post-module~st~8a982980"), __webpack_require__.e("default~appointment-appointment-module~message-message-module~payout-payout-module~post-post-module~~9ea12b61"), __webpack_require__.e("default~categories-categories-module~page-page-module~post-post-module~starter-starter-module~tutor-~926f7375"), __webpack_require__.e("default~categories-categories-module~page-page-module~post-post-module~tutor-tutor-module~user-user-module"), __webpack_require__.e("default~post-post-module~tutor-tutor-module~user-user-module"), __webpack_require__.e("default~post-post-module~user-user-module")]).then(__webpack_require__.bind(null, /*! ./user/user.module */ "./src/app/user/user.module.ts")).then(function (m) { return m.UserModule; }); } },
            {
                path: 'payout',
                loadChildren: function () { return Promise.all(/*! import() | payout-payout-module */[__webpack_require__.e("default~appointment-appointment-module~categories-categories-module~course-course-module~page-page-m~95544be4"), __webpack_require__.e("default~appointment-appointment-module~categories-categories-module~payout-payout-module~post-post-m~5d1dff45"), __webpack_require__.e("default~appointment-appointment-module~course-course-module~payout-payout-module~post-post-module~st~8a982980"), __webpack_require__.e("default~appointment-appointment-module~message-message-module~payout-payout-module~post-post-module~~9ea12b61"), __webpack_require__.e("default~appointment-appointment-module~payout-payout-module"), __webpack_require__.e("payout-payout-module")]).then(__webpack_require__.bind(null, /*! ./payout/payout.module */ "./src/app/payout/payout.module.ts")).then(function (m) { return m.PayoutModule; }); },
                resolve: {
                    appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"]
                }
            },
            {
                path: 'refund',
                loadChildren: function () { return __webpack_require__.e(/*! import() | refund-refund-module */ "refund-refund-module").then(__webpack_require__.bind(null, /*! ./refund/refund.module */ "./src/app/refund/refund.module.ts")).then(function (m) { return m.RefundModule; }); },
                resolve: {
                    appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"]
                }
            },
            {
                path: 'transaction',
                loadChildren: function () { return Promise.all(/*! import() | transactions-transaction-module */[__webpack_require__.e("default~appointment-appointment-module~categories-categories-module~course-course-module~page-page-m~95544be4"), __webpack_require__.e("transactions-transaction-module")]).then(__webpack_require__.bind(null, /*! ./transactions/transaction.module */ "./src/app/transactions/transaction.module.ts")).then(function (m) { return m.TransactionModule; }); },
                resolve: {
                    appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"]
                }
            },
            {
                path: 'messages',
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                loadChildren: function () { return __webpack_require__.e(/*! import() | message-message-module */ "default~appointment-appointment-module~message-message-module~payout-payout-module~post-post-module~~9ea12b61").then(__webpack_require__.bind(null, /*! ./message/message.module */ "./src/app/message/message.module.ts")).then(function (m) { return m.MessageModule; }); }
            }
        ]
    },
    {
        path: 'auth',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_0__["BlankComponent"],
        resolve: { appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["ConfigResolver"], language: _shared_resolver__WEBPACK_IMPORTED_MODULE_4__["LanguageResolver"] },
        children: [{ path: '', loadChildren: function () { return __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(function (m) { return m.AuthModule; }); } }]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, authService, seoService, translate, systemService, route) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.seoService = seoService;
        this.translate = translate;
        this.systemService = systemService;
        this.route = route;
        this.title = 'app';
        this.seoChangedSubscription = seoService.seoChanged$.subscribe(function (data) {
            if (!data) {
                return;
            }
            if (data.title) {
                document.title = data.title;
            }
            if (data.meta) {
                $('meta[name="description"]').attr('content', data.meta.description);
                $('meta[name="keywords"]').attr('content', data.meta.keywords);
                $('meta[property="og:description"]').attr('content', data.meta.description);
            }
            else {
                _this.config = _this.route.snapshot.data.appConfig;
                if (_this.config) {
                    _this.seoService.update(_this.config.siteName, _this.config.homeSEO);
                }
            }
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (!_this.authService.isLoggedin()) {
                    if (event.url !== '/auth/login') {
                        localStorage.setItem('currentUrl', event.url);
                    }
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (_this.router.url.indexOf('#webinar') === -1 && _this.router.url.indexOf('#review') === -1) {
                    $('html, body').animate({ scrollTop: 0 });
                }
                else {
                    $('html, body').animate({
                        scrollTop: _this.router.url.indexOf('#webinar') > -1 ? $('#webinar').offset().top : $('#review').offset().top
                    }, 1000);
                }
                if (!_this.authService.isLoggedin()) {
                    if (event.url !== '/auth/login') {
                        localStorage.setItem('currentUrl', _this.router.url);
                    }
                }
            }
        });
        var defaultLang = 'en';
        // https://github.com/ngx-translate/core
        translate.setDefaultLang(defaultLang);
        systemService.configs().then(function (resp) {
            translate.setDefaultLang(resp.i18n.defaultLanguage);
            translate.use(resp.userLang);
            //change favicon
            $('#favicon').attr('href', resp.siteFavicon);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedin()) {
            this.authService.getCurrentUser();
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.seoChangedSubscription.unsubscribe();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["SeoService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["SystemService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_2__["SeoService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_2__["SystemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: RestangularConfigFactory, createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestangularConfigFactory", function() { return RestangularConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/__ivy_ngcc__/fesm2015/ngx-stripe.js");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/dashboard/dashboard.component */ "./src/app/layouts/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _shared_resolver__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/resolver */ "./src/app/shared/resolver/index.ts");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/utils.module */ "./src/app/utils/utils.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");


























// Function for setting the default restangular configuration
function RestangularConfigFactory(RestangularProvider) {
    // TODO - change default config
    RestangularProvider.setBaseUrl(window.appConfig.apiBaseUrl);
    RestangularProvider.addFullRequestInterceptor(function (element, operation, path, url, headers, params) {
        // Auto add token to header
        headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
        return {
            headers: headers
        };
    });
    RestangularProvider.addErrorInterceptor(function (response, subject, responseHandler) {
        // force logout and relogin
        if (response.status === 401) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('isLoggedin');
            // window.location.href = '/auth/login';
            return false; // error handled
        }
        return true; // error not handled
    });
}
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__["TranslateHttpLoader"](http, window.appConfig.apiBaseUrl + "/i18n/", '.json');
    // return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_22__["SpinnerComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__["BlankComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_13__["FullComponent"], _layouts_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardLayoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_20__["Approutes"], { useHash: false }),
                // Importing RestangularModule and making default configs for restanglar
                ngx_restangular__WEBPACK_IMPORTED_MODULE_8__["RestangularModule"].forRoot(RestangularConfigFactory),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true
                }),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    }
                }),
                ngx_stripe__WEBPACK_IMPORTED_MODULE_11__["NgxStripeModule"].forRoot(),
                _utils_utils_module__WEBPACK_IMPORTED_MODULE_24__["UtilsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_25__["FontAwesomeModule"]
            ],
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"] // HashLocationStrategy
                },
                _shared_services__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                _shared_resolver__WEBPACK_IMPORTED_MODULE_23__["ConfigResolver"],
                _shared_resolver__WEBPACK_IMPORTED_MODULE_23__["LanguageResolver"],
                _shared_resolver__WEBPACK_IMPORTED_MODULE_23__["CategoryResolver"],
                _shared_services__WEBPACK_IMPORTED_MODULE_15__["CategoryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/blank/blank.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var BlankComponent = /** @class */ (function () {
    function BlankComponent(router) {
        this.router = router;
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    BlankComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'blank-layout',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./blank.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/blank/blank.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/layouts/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLayoutComponent", function() { return DashboardLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var DashboardLayoutComponent = /** @class */ (function () {
    function DashboardLayoutComponent(router) {
        this.router = router;
    }
    DashboardLayoutComponent.prototype.ngOnInit = function () {
    };
    DashboardLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DashboardLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/dashboard/dashboard.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardLayoutComponent);
    return DashboardLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var FullComponent = /** @class */ (function () {
    function FullComponent(router) {
        this.router = router;
        this.isHome = false;
    }
    FullComponent.prototype.ngOnInit = function () {
        this.isHome = this.router.url.indexOf('/') > -1;
    };
    FullComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FullComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./full.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FullComponent);
    return FullComponent;
}());



/***/ }),

/***/ "./src/app/media/components/avatar-upload/avatar-upload.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/media/components/avatar-upload/avatar-upload.component.ts ***!
  \***************************************************************************/
/*! exports provided: AvatarUploadComponent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarUploadComponent", function() { return AvatarUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tutor/services/tutor.service */ "./src/app/tutor/services/tutor.service.ts");
/* harmony import */ var _user_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../user/services/user.service */ "./src/app/user/services/user.service.ts");






var AvatarUploadComponent = /** @class */ (function () {
    function AvatarUploadComponent(toasty, activeModal, tutorService, userService) {
        this.toasty = toasty;
        this.activeModal = activeModal;
        this.tutorService = tutorService;
        this.userService = userService;
        this.avatarOptions = {};
        this.avatarUrl = '';
        this.imageSelected = [];
        this.maxFileSize = window.appConfig.maximumFileSize;
    }
    AvatarUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.avatarOptions = {
            url: window.appConfig.apiBaseUrl + '/users/avatar',
            fileFieldName: 'avatar',
            onFinish: function (resp) {
                _this.avatarUrl = resp.data.url;
                _this.activeModal.close(_this.avatarUrl);
            },
            onFileSelect: function (resp) { return (_this.imageSelected = resp); },
            accept: 'image/*'
        };
    };
    AvatarUploadComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_4__["TutorService"] },
        { type: _user_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    AvatarUploadComponent.propDecorators = {
        info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    AvatarUploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-avatar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./avatar-upload.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/media/components/avatar-upload/avatar-upload.modal.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_4__["TutorService"],
            _user_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AvatarUploadComponent);
    return AvatarUploadComponent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
        this.appoinment = {};
        this.afterCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgbdModalComponent.prototype.open = function () {
        var _this = this;
        var modalRef = this.modalService.open(AvatarUploadComponent, { centered: true, backdrop: 'static' });
        modalRef.componentInstance.info = this.appoinment;
        modalRef.result.then(function (res) {
            _this.afterCancel.emit(res);
        }, function () { });
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    NgbdModalComponent.propDecorators = {
        appoinment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        afterCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    NgbdModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngbd-modal-component',
            template: '<button class="btn btn-sm btn-outline-primary" (click)="open()">cancel</button>'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/media/components/file-upload.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/media/components/file-upload.component.ts ***!
  \***********************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service */ "./src/app/media/service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(authService, mediaService, toasty, translate) {
        this.authService = authService;
        this.mediaService = mediaService;
        this.toasty = toasty;
        this.translate = translate;
        this.onUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasBaseDropZoneOver = false;
        this.multiple = false;
        this.uploadOnSelect = false;
        this.autoUpload = false;
        this.progress = 0;
        this.uploadedItems = [];
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO - upload default file url and custom field here
        this.multiple = this.options && this.options.multiple;
        this.uploadOnSelect = this.options && this.options.uploadOnSelect;
        this.autoUpload = this.options && this.options.autoUpload;
        if (!this.options) {
            this.options = {};
        }
        // https://github.com/valor-software/ng2-file-upload/blob/development/src/file-upload/file-uploader.class.ts
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: window.appConfig.apiBaseUrl + '/media',
            authToken: 'Bearer ' + this.authService.getAccessToken(),
            autoUpload: this.options.autoUpload || false,
            maxFileSize: window.appConfig.maximumFileSize * 1024 * 1024
        });
        this.uploader.onBuildItemForm = function (fileItem, form) {
            fileItem.alias = _this.options.fileFieldName || 'file';
            // append the form
            if (_this.options.customFields) {
                Object.keys(_this.options.customFields).forEach(function (key) { return form.append(key, _this.options.customFields[key]); });
            }
            if (_this.options.url) {
                fileItem.url = _this.options.url;
            }
            else {
                var ep = 'files';
                if (fileItem.file.type.indexOf('image') > -1) {
                    ep = 'photos';
                }
                else if (fileItem.file.type.indexOf('video') > -1) {
                    ep = 'videos';
                }
                fileItem.url = window.appConfig.apiBaseUrl + "/media/" + ep;
            }
        };
        this.uploader.onProgressItem = function (fileItem, progress) { return (fileItem.progress = progress); };
        this.uploader.onProgressAll = function (progress) {
            _this.progress = progress;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.uploader.removeFromQueue(item);
            // TODO - handle error event too
            var resp = JSON.parse(response);
            _this.uploadedItems.push(resp);
            if (_this.options.onCompleteItem) {
                _this.options.onCompleteItem(resp);
            }
        };
        this.options.uploader = this.uploader;
    };
    // tslint:disable-next-line:use-life-cycle-interface
    FileUploadComponent.prototype.ngAfterViewInit = function () {
        this.uploader.onAfterAddingFile = function (item) { return (item.withCredentials = false); };
    };
    FileUploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploadComponent.prototype.fileSelect = function (event) {
        if (!this.multiple) {
            this.uploader.clearQueue();
            var file = event[0];
            var fileLikeObject = event[0];
            if (!this.uploader._fileSizeFilter(fileLikeObject)) {
                return this.toasty.error(this.translate.instant('File size is larger than maximum size!'));
            }
            if (this.options.accept) {
                var accept = this.accept(file.type, this.options.accept);
                if (!accept) {
                    return this.toasty.error(this.translate.instant('Invalid file type'));
                }
            }
            this.uploader.addToQueue([file]);
        }
        if (this.options.onFileSelect) {
            this.options.onFileSelect(this.uploader.queue);
        }
        if (this.options.uploadOnSelect) {
            this.uploader.uploadAll();
        }
    };
    FileUploadComponent.prototype.fileDrop = function (event) {
        if (!this.multiple) {
            this.uploader.clearQueue();
            var file = event[0];
            var fileLikeObject = event[0];
            if (!this.uploader._fileSizeFilter(fileLikeObject)) {
                return this.toasty.error(this.translate.instant('File size is larger than maximum size!'));
            }
            if (this.options.accept) {
                var accept = this.accept(file.type, this.options.accept);
                if (!accept) {
                    return this.toasty.error(this.translate.instant('Invalid file type'));
                }
            }
            this.uploader.addToQueue([file]);
        }
        if (this.options.onFileSelect) {
            this.options.onFileSelect(this.uploader.queue);
        }
        if (this.options.uploadOnSelect) {
            this.uploader.uploadAll();
        }
    };
    FileUploadComponent.prototype.accept = function (fileType, accept) {
        var typeRegex = new RegExp(accept.replace(/\*/g, '.*').replace(/\,/g, '|'));
        return typeRegex.test(fileType);
    };
    FileUploadComponent.prototype.upload = function (frm) {
        var _this = this;
        var _a;
        if (!this.uploader.queue.length) {
            return alert(this.translate.instant('Please select file'));
        }
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.lecturePdf) && (!this.totalLength || this.totalLength <= 0)) {
            return alert(this.translate.instant('Total length must be greater than 0!'));
        }
        else
            this.onUpload.emit(this.totalLength);
        if (this.options.onUploading) {
            this.options.onUploading(true);
        }
        this.uploader.onCompleteAll = function () {
            // TODO - do something
            _this.uploader.clearQueue();
            if (_this.options.onFinish) {
                _this.options.onFinish(_this.options.multiple ? _this.uploadedItems : _this.uploadedItems[0]);
            }
            // reset because Queue reset too
            _this.uploadedItems = [];
            _this.progress = 0;
        };
        this.uploader.uploadAll();
    };
    FileUploadComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _service__WEBPACK_IMPORTED_MODULE_4__["MediaService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
    ]; };
    FileUploadComponent.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    FileUploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-upload',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./upload.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/media/components/upload.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _service__WEBPACK_IMPORTED_MODULE_4__["MediaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/media/media.module.ts":
/*!***************************************!*\
  !*** ./src/app/media/media.module.ts ***!
  \***************************************/
/*! exports provided: MediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaModule", function() { return MediaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var _components_file_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/file-upload.component */ "./src/app/media/components/file-upload.component.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service */ "./src/app/media/service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_avatar_upload_avatar_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/avatar-upload/avatar-upload.component */ "./src/app/media/components/avatar-upload/avatar-upload.component.ts");










var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()],
            exports: [_components_file_upload_component__WEBPACK_IMPORTED_MODULE_6__["FileUploadComponent"], _components_avatar_upload_avatar_upload_component__WEBPACK_IMPORTED_MODULE_9__["AvatarUploadComponent"]],
            declarations: [_components_file_upload_component__WEBPACK_IMPORTED_MODULE_6__["FileUploadComponent"], _components_avatar_upload_avatar_upload_component__WEBPACK_IMPORTED_MODULE_9__["AvatarUploadComponent"], _components_avatar_upload_avatar_upload_component__WEBPACK_IMPORTED_MODULE_9__["NgbdModalComponent"]],
            entryComponents: [],
            providers: [_service__WEBPACK_IMPORTED_MODULE_7__["MediaService"]]
        })
    ], MediaModule);
    return MediaModule;
}());



/***/ }),

/***/ "./src/app/media/service.ts":
/*!**********************************!*\
  !*** ./src/app/media/service.ts ***!
  \**********************************/
/*! exports provided: MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var MediaService = /** @class */ (function () {
    function MediaService(restangular) {
        this.restangular = restangular;
    }
    MediaService.prototype.search = function (params) {
        return this.restangular.one('media', 'search').get(params).toPromise();
    };
    MediaService.prototype.upload = function (base64, options) {
        return this.restangular
            .all('media/photos')
            .post(Object.assign(options, {
            base64: base64
        }))
            .toPromise();
    };
    MediaService.prototype.update = function (id, params) {
        return this.restangular.one('media', id).customPUT(params).toPromise();
    };
    MediaService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    MediaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], MediaService);
    return MediaService;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/shared/services/index.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, Auth) {
        this.router = router;
        this.Auth = Auth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        if (!this.Auth.isLoggedin()) {
            this.router.navigate(['/auth/login']);
            return false;
        }
        return this.Auth.getCurrentUser()
            .then(function (resp) {
            var canActive = resp !== null;
            if (!canActive) {
                _this.router.navigate(['/auth/login']);
                return false;
            }
            return true;
        });
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/resolver/category.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/resolver/category.resolver.ts ***!
  \******************************************************/
/*! exports provided: CategoryResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryResolver", function() { return CategoryResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/shared/services/index.ts");



var CategoryResolver = /** @class */ (function () {
    function CategoryResolver(categoryService) {
        this.categoryService = categoryService;
    }
    CategoryResolver.prototype.resolve = function () {
        return this.categoryService
            .getCategories({ take: 1000, isActive: true, sort: 'ordering', sortType: 'asc' })
            .then(function (resp) { return resp.data && resp.data.items; });
    };
    CategoryResolver.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
    ]; };
    CategoryResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], CategoryResolver);
    return CategoryResolver;
}());



/***/ }),

/***/ "./src/app/shared/resolver/config.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/resolver/config.resolver.ts ***!
  \****************************************************/
/*! exports provided: ConfigResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigResolver", function() { return ConfigResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/shared/services/index.ts");



var ConfigResolver = /** @class */ (function () {
    function ConfigResolver(systemService) {
        this.systemService = systemService;
    }
    ConfigResolver.prototype.resolve = function () {
        return this.systemService.configs();
    };
    ConfigResolver.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["SystemService"] }
    ]; };
    ConfigResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["SystemService"]])
    ], ConfigResolver);
    return ConfigResolver;
}());



/***/ }),

/***/ "./src/app/shared/resolver/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/resolver/index.ts ***!
  \******************************************/
/*! exports provided: ConfigResolver, LanguageResolver, SubjectsResolver, PostsResolver, CategoryResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.resolver */ "./src/app/shared/resolver/config.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigResolver", function() { return _config_resolver__WEBPACK_IMPORTED_MODULE_0__["ConfigResolver"]; });

/* harmony import */ var _language_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.resolver */ "./src/app/shared/resolver/language.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LanguageResolver", function() { return _language_resolver__WEBPACK_IMPORTED_MODULE_1__["LanguageResolver"]; });

/* harmony import */ var _subjects_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects.resolver */ "./src/app/shared/resolver/subjects.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubjectsResolver", function() { return _subjects_resolver__WEBPACK_IMPORTED_MODULE_2__["SubjectsResolver"]; });

/* harmony import */ var _posts_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.resolver */ "./src/app/shared/resolver/posts.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsResolver", function() { return _posts_resolver__WEBPACK_IMPORTED_MODULE_3__["PostsResolver"]; });

/* harmony import */ var _category_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category.resolver */ "./src/app/shared/resolver/category.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryResolver", function() { return _category_resolver__WEBPACK_IMPORTED_MODULE_4__["CategoryResolver"]; });








/***/ }),

/***/ "./src/app/shared/resolver/language.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/resolver/language.resolver.ts ***!
  \******************************************************/
/*! exports provided: LanguageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageResolver", function() { return LanguageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/shared/services/index.ts");



var LanguageResolver = /** @class */ (function () {
    function LanguageResolver(systemService) {
        this.systemService = systemService;
    }
    LanguageResolver.prototype.resolve = function () {
        return this.systemService.configs()
            .then(function (resp) {
            // TODO - load from local storage
            return 'en';
        });
    };
    LanguageResolver.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["SystemService"] }
    ]; };
    LanguageResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["SystemService"]])
    ], LanguageResolver);
    return LanguageResolver;
}());



/***/ }),

/***/ "./src/app/shared/resolver/posts.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/resolver/posts.resolver.ts ***!
  \***************************************************/
/*! exports provided: PostsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsResolver", function() { return PostsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/shared/services/index.ts");



var PostsResolver = /** @class */ (function () {
    function PostsResolver(postService) {
        this.postService = postService;
    }
    PostsResolver.prototype.resolve = function () {
        return this.postService.getPosts({ take: 100 }).then(function (resp) { return resp.data && resp.data.items; });
    };
    PostsResolver.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
    ]; };
    PostsResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], PostsResolver);
    return PostsResolver;
}());



/***/ }),

/***/ "./src/app/shared/resolver/subjects.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/resolver/subjects.resolver.ts ***!
  \******************************************************/
/*! exports provided: SubjectsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectsResolver", function() { return SubjectsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/shared/services/index.ts");



var SubjectsResolver = /** @class */ (function () {
    function SubjectsResolver(service) {
        this.service = service;
    }
    SubjectsResolver.prototype.resolve = function () {
        return this.service.getSubjects({ take: 1000, isActive: true }).then(function (resp) { return resp.data.items; });
    };
    SubjectsResolver.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["SubjectService"] }
    ]; };
    SubjectsResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["SubjectService"]])
    ], SubjectsResolver);
    return SubjectsResolver;
}());



/***/ }),

/***/ "./src/app/shared/services/appointment.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/appointment.service.ts ***!
  \********************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var AppointmentService = /** @class */ (function () {
    function AppointmentService(restangular) {
        this.restangular = restangular;
    }
    AppointmentService.prototype.search = function (params) {
        return this.restangular.one('appointments').get(params).toPromise();
    };
    AppointmentService.prototype.findOne = function (id) {
        return this.restangular.one('appointments', id).get().toPromise();
    };
    AppointmentService.prototype.updateDocument = function (id, data) {
        return this.restangular.one('appointments', id).one('update-document').customPUT(data).toPromise();
    };
    AppointmentService.prototype.tutorCancel = function (appointmentId, data) {
        return this.restangular.one('appointments/tutor', appointmentId).one('cancel').customPOST(data).toPromise();
    };
    AppointmentService.prototype.studentCancel = function (appointmentId, data) {
        return this.restangular.one('appointments/student', appointmentId).one('cancel').customPOST(data).toPromise();
    };
    AppointmentService.prototype.canReschedule = function (appointmentId) {
        return this.restangular.one('appointments', appointmentId).one('canReschedule').post().toPromise();
    };
    AppointmentService.prototype.reSchedule = function (appointmentId, data) {
        return this.restangular.one('appointments', appointmentId).one('reSchedule').customPUT(data).toPromise();
    };
    AppointmentService.prototype.reviewStudent = function (appointmentId, data) {
        return this.restangular.one('appointments', appointmentId).one('reviewStudent').customPOST(data).toPromise();
    };
    AppointmentService.prototype.checkOverlap = function (data) {
        return this.restangular.one('appointments/check').one('overlap').customPOST(data).toPromise();
    };
    AppointmentService.prototype.startMeeting = function (appointmentId) {
        return this.restangular.one('meeting/start', appointmentId).customPOST().toPromise();
    };
    AppointmentService.prototype.joinMeeting = function (appointmentId) {
        return this.restangular.one('meeting/join', appointmentId).customPOST().toPromise();
    };
    AppointmentService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    AppointmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], AppointmentService);
    return AppointmentService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(restangular) {
        this.restangular = restangular;
        this.accessToken = null;
        this.currentUser = null;
        this.userLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.userLoaded$ = this.userLoaded.asObservable();
    }
    AuthService.prototype.getCurrentUser = function () {
        var _this = this;
        if (this.currentUser) {
            return new Promise(function (resolve) { return resolve(_this.currentUser); });
        }
        if (this._getUser && typeof this._getUser.then === 'function') {
            return this._getUser;
        }
        this._getUser = this.restangular
            .one('users', 'me')
            .get()
            .toPromise()
            .then(function (resp) {
            _this.currentUser = resp.data;
            _this.userLoaded.next(resp.data);
            return _this.currentUser;
        });
        return this._getUser;
    };
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return this.restangular
            .all('auth/login')
            .post(credentials)
            .toPromise()
            .then(function (resp) {
            localStorage.setItem('accessToken', resp.data.token);
            localStorage.setItem('isLoggedin', 'yes');
            return _this.restangular
                .one('users', 'me')
                .get()
                .toPromise()
                .then(function (res) {
                _this.currentUser = res.data;
                localStorage.setItem('isLoggedin', 'yes');
                localStorage.setItem('timeZone', res.data.timezone);
                _this.userLoaded.next(res.data);
                return res.data;
            });
        });
    };
    AuthService.prototype.register = function (info) {
        return this.restangular.all('auth/register').post(info).toPromise();
    };
    AuthService.prototype.getAccessToken = function () {
        if (!this.accessToken) {
            this.accessToken = localStorage.getItem('accessToken');
        }
        return this.accessToken;
    };
    AuthService.prototype.forgot = function (email) {
        return this.restangular.all('auth/forgot').post({ email: email }).toPromise();
    };
    AuthService.prototype.removeToken = function () {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('isLoggedin');
    };
    AuthService.prototype.isLoggedin = function () {
        return localStorage.getItem('isLoggedin') === 'yes';
    };
    AuthService.prototype.registerTutor = function (info) {
        return this.restangular.all('tutors/register').post(info).toPromise();
    };
    AuthService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(restangular) {
        this.restangular = restangular;
        this.categories = null;
    }
    CategoryService.prototype.getCategories = function (params) {
        var _this = this;
        if (this.categories) {
            return Promise.resolve(this.categories);
        }
        if (this._getCategories && typeof this._getCategories.then === 'function') {
            return this._getCategories;
        }
        this._getCategories = this.restangular
            .one('categories')
            .get(params)
            .toPromise()
            .then(function (resp) {
            _this.categories = resp;
            return _this.categories;
        });
        return this._getCategories;
    };
    CategoryService.prototype.create = function (params) {
        return this.restangular.all('categories').post(params).toPromise();
    };
    CategoryService.prototype.search = function (params) {
        return this.restangular.one('categories').get(params).toPromise();
    };
    CategoryService.prototype.findOne = function (id) {
        return this.restangular.one('categories', id).get().toPromise();
    };
    CategoryService.prototype.update = function (id, data) {
        return this.restangular.one('categories', id).customPUT(data).toPromise();
    };
    CategoryService.prototype.delete = function (id) {
        return this.restangular.one('categories', id).customDELETE().toPromise();
    };
    CategoryService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shared/services/country.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/country.service.ts ***!
  \****************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var CountryService = /** @class */ (function () {
    function CountryService() {
        this.countries = [
            {
                name: 'Afghanistan',
                code: 'AF',
                capital: 'Kabul',
                region: 'AS',
                currency: {
                    code: 'AFN',
                    name: 'Afghan afghani',
                    symbol: '؋'
                },
                language: {
                    code: 'ps',
                    name: 'Pashto'
                },
                flag: 'https://restcountries.eu/data/afg.svg'
            },
            {
                name: 'Åland Islands',
                code: 'AX',
                capital: 'Mariehamn',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'sv',
                    name: 'Swedish'
                },
                flag: 'https://restcountries.eu/data/ala.svg'
            },
            {
                name: 'Albania',
                code: 'AL',
                capital: 'Tirana',
                region: 'EU',
                currency: {
                    code: 'ALL',
                    name: 'Albanian lek',
                    symbol: 'L'
                },
                language: {
                    code: 'sq',
                    name: 'Albanian'
                },
                flag: 'https://restcountries.eu/data/alb.svg'
            },
            {
                name: 'Algeria',
                code: 'DZ',
                capital: 'Algiers',
                region: 'AF',
                currency: {
                    code: 'DZD',
                    name: 'Algerian dinar',
                    symbol: 'د.ج'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/dza.svg'
            },
            {
                name: 'American Samoa',
                code: 'AS',
                capital: 'Pago Pago',
                region: 'OC',
                currency: {
                    code: 'USD',
                    name: 'United State Dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/asm.svg'
            },
            {
                name: 'Andorra',
                code: 'AD',
                capital: 'Andorra la Vella',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'ca',
                    name: 'Catalan'
                },
                flag: 'https://restcountries.eu/data/and.svg'
            },
            {
                name: 'Angola',
                code: 'AO',
                capital: 'Luanda',
                region: 'AF',
                currency: {
                    code: 'AOA',
                    name: 'Angolan kwanza',
                    symbol: 'Kz'
                },
                language: {
                    code: 'pt',
                    name: 'Portuguese'
                },
                flag: 'https://restcountries.eu/data/ago.svg'
            },
            {
                name: 'Anguilla',
                code: 'AI',
                capital: 'The Valley',
                region: 'NA',
                currency: {
                    code: 'XCD',
                    name: 'East Caribbean dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/aia.svg'
            },
            {
                name: 'Antigua and Barbuda',
                code: 'AG',
                capital: "Saint John's",
                region: 'NA',
                currency: {
                    code: 'XCD',
                    name: 'East Caribbean dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/atg.svg'
            },
            {
                name: 'Argentina',
                code: 'AR',
                capital: 'Buenos Aires',
                region: 'SA',
                currency: {
                    code: 'ARS',
                    name: 'Argentine peso',
                    symbol: '$'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/arg.svg'
            },
            {
                name: 'Armenia',
                code: 'AM',
                capital: 'Yerevan',
                region: 'AS',
                currency: {
                    code: 'AMD',
                    name: 'Armenian dram',
                    symbol: null
                },
                language: {
                    code: 'hy',
                    name: 'Armenian'
                },
                flag: 'https://restcountries.eu/data/arm.svg'
            },
            {
                name: 'Aruba',
                code: 'AW',
                capital: 'Oranjestad',
                region: 'SA',
                currency: {
                    code: 'AWG',
                    name: 'Aruban florin',
                    symbol: 'ƒ'
                },
                language: {
                    code: 'nl',
                    name: 'Dutch'
                },
                flag: 'https://restcountries.eu/data/abw.svg'
            },
            {
                name: 'Australia',
                code: 'AU',
                capital: 'Canberra',
                region: 'OC',
                currency: {
                    code: 'AUD',
                    name: 'Australian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/aus.svg'
            },
            {
                name: 'Austria',
                code: 'AT',
                capital: 'Vienna',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'de',
                    name: 'German'
                },
                flag: 'https://restcountries.eu/data/aut.svg'
            },
            {
                name: 'Azerbaijan',
                code: 'AZ',
                capital: 'Baku',
                region: 'AS',
                currency: {
                    code: 'AZN',
                    name: 'Azerbaijani manat',
                    symbol: null
                },
                language: {
                    code: 'az',
                    name: 'Azerbaijani'
                },
                flag: 'https://restcountries.eu/data/aze.svg'
            },
            {
                name: 'Bahamas',
                code: 'BS',
                capital: 'Nassau',
                region: 'NA',
                currency: {
                    code: 'BSD',
                    name: 'Bahamian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/bhs.svg'
            },
            {
                name: 'Bahrain',
                code: 'BH',
                capital: 'Manama',
                region: 'AS',
                currency: {
                    code: 'BHD',
                    name: 'Bahraini dinar',
                    symbol: '.د.ب'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/bhr.svg'
            },
            {
                name: 'Bangladesh',
                code: 'BD',
                capital: 'Dhaka',
                region: 'AS',
                currency: {
                    code: 'BDT',
                    name: 'Bangladeshi taka',
                    symbol: '৳'
                },
                language: {
                    code: 'bn',
                    name: 'Bengali'
                },
                flag: 'https://restcountries.eu/data/bgd.svg'
            },
            {
                name: 'Barbados',
                code: 'BB',
                capital: 'Bridgetown',
                region: 'NA',
                currency: {
                    code: 'BBD',
                    name: 'Barbadian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/brb.svg'
            },
            {
                name: 'Belarus',
                code: 'BY',
                capital: 'Minsk',
                region: 'EU',
                currency: {
                    code: 'BYN',
                    name: 'New Belarusian ruble',
                    symbol: 'Br'
                },
                language: {
                    code: 'be',
                    name: 'Belarusian'
                },
                flag: 'https://restcountries.eu/data/blr.svg'
            },
            {
                name: 'Belgium',
                code: 'BE',
                capital: 'Brussels',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'nl',
                    name: 'Dutch'
                },
                flag: 'https://restcountries.eu/data/bel.svg'
            },
            {
                name: 'Belize',
                code: 'BZ',
                capital: 'Belmopan',
                region: 'NA',
                currency: {
                    code: 'BZD',
                    name: 'Belize dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/blz.svg'
            },
            {
                name: 'Benin',
                code: 'BJ',
                capital: 'Porto-Novo',
                region: 'AF',
                currency: {
                    code: 'XOF',
                    name: 'West African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/ben.svg'
            },
            {
                name: 'Bermuda',
                code: 'BM',
                capital: 'Hamilton',
                region: 'NA',
                currency: {
                    code: 'BMD',
                    name: 'Bermudian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/bmu.svg'
            },
            {
                name: 'Bhutan',
                code: 'BT',
                capital: 'Thimphu',
                region: 'AS',
                currency: {
                    code: 'BTN',
                    name: 'Bhutanese ngultrum',
                    symbol: 'Nu.'
                },
                language: {
                    code: 'dz',
                    name: 'Dzongkha'
                },
                flag: 'https://restcountries.eu/data/btn.svg'
            },
            {
                name: 'Bolivia (Plurinational State of)',
                code: 'BO',
                capital: 'Sucre',
                region: 'SA',
                currency: {
                    code: 'BOB',
                    name: 'Bolivian boliviano',
                    symbol: 'Bs.'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/bol.svg'
            },
            {
                name: 'Bonaire, Sint Eustatius and Saba',
                code: 'BQ',
                capital: 'Kralendijk',
                region: 'SA',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'nl',
                    name: 'Dutch'
                },
                flag: 'https://restcountries.eu/data/bes.svg'
            },
            {
                name: 'Bosnia and Herzegovina',
                code: 'BA',
                capital: 'Sarajevo',
                region: 'EU',
                currency: {
                    code: 'BAM',
                    name: 'Bosnia and Herzegovina convertible mark',
                    symbol: null
                },
                language: {
                    code: 'bs',
                    name: 'Bosnian'
                },
                flag: 'https://restcountries.eu/data/bih.svg'
            },
            {
                name: 'Botswana',
                code: 'BW',
                capital: 'Gaborone',
                region: 'AF',
                currency: {
                    code: 'BWP',
                    name: 'Botswana pula',
                    symbol: 'P'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/bwa.svg'
            },
            {
                name: 'Bouvet Island',
                code: 'BV',
                capital: '',
                region: 'AN',
                currency: {
                    code: 'NOK',
                    name: 'Norwegian krone',
                    symbol: 'kr'
                },
                language: {
                    code: 'no',
                    name: 'Norwegian'
                },
                flag: 'https://restcountries.eu/data/bvt.svg'
            },
            {
                name: 'Brazil',
                code: 'BR',
                capital: 'Brasília',
                region: 'SA',
                currency: {
                    code: 'BRL',
                    name: 'Brazilian real',
                    symbol: 'R$'
                },
                language: {
                    code: 'pt',
                    name: 'Portuguese'
                },
                flag: 'https://restcountries.eu/data/bra.svg'
            },
            {
                name: 'British Indian Ocean Territory',
                code: 'IO',
                capital: 'Diego Garcia',
                region: 'AF',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/iot.svg'
            },
            {
                name: 'United States Minor Outlying Islands',
                code: 'UM',
                capital: '',
                region: 'NA',
                currency: {
                    code: 'USD',
                    name: 'United States Dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/umi.svg'
            },
            {
                name: 'Virgin Islands (British)',
                code: 'VG',
                capital: 'Road Town',
                region: 'NA',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/vgb.svg'
            },
            {
                name: 'Virgin Islands (U.S.)',
                code: 'VI',
                capital: 'Charlotte Amalie',
                region: 'NA',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/vir.svg'
            },
            {
                name: 'Brunei Darussalam',
                code: 'BN',
                capital: 'Bandar Seri Begawan',
                region: 'AS',
                currency: {
                    code: 'BND',
                    name: 'Brunei dollar',
                    symbol: '$'
                },
                language: {
                    code: 'ms',
                    name: 'Malay'
                },
                flag: 'https://restcountries.eu/data/brn.svg'
            },
            {
                name: 'Bulgaria',
                code: 'BG',
                capital: 'Sofia',
                region: 'EU',
                currency: {
                    code: 'BGN',
                    name: 'Bulgarian lev',
                    symbol: 'лв'
                },
                language: {
                    code: 'bg',
                    name: 'Bulgarian'
                },
                flag: 'https://restcountries.eu/data/bgr.svg'
            },
            {
                name: 'Burkina Faso',
                code: 'BF',
                capital: 'Ouagadougou',
                region: 'AF',
                currency: {
                    code: 'XOF',
                    name: 'West African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/bfa.svg'
            },
            {
                name: 'Burundi',
                code: 'BI',
                capital: 'Bujumbura',
                region: 'AF',
                currency: {
                    code: 'BIF',
                    name: 'Burundian franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/bdi.svg'
            },
            {
                name: 'Cambodia',
                code: 'KH',
                capital: 'Phnom Penh',
                region: 'AS',
                currency: {
                    code: 'KHR',
                    name: 'Cambodian riel',
                    symbol: '៛'
                },
                language: {
                    code: 'km',
                    name: 'Khmer'
                },
                flag: 'https://restcountries.eu/data/khm.svg'
            },
            {
                name: 'Cameroon',
                code: 'CM',
                capital: 'Yaoundé',
                region: 'AF',
                currency: {
                    code: 'XAF',
                    name: 'Central African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/cmr.svg'
            },
            {
                name: 'Canada',
                code: 'CA',
                capital: 'Ottawa',
                region: 'NA',
                currency: {
                    code: 'CAD',
                    name: 'Canadian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/can.svg'
            },
            {
                name: 'Cabo Verde',
                code: 'CV',
                capital: 'Praia',
                region: 'AF',
                currency: {
                    code: 'CVE',
                    name: 'Cape Verdean escudo',
                    symbol: 'Esc'
                },
                language: {
                    code: 'pt',
                    iso639_2: 'por',
                    name: 'Portuguese',
                    nativeName: 'Português'
                },
                flag: 'https://restcountries.eu/data/cpv.svg'
            },
            {
                name: 'Cayman Islands',
                code: 'KY',
                capital: 'George Town',
                region: 'NA',
                demonym: 'Caymanian',
                currency: {
                    code: 'KYD',
                    name: 'Cayman Islands dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/cym.svg'
            },
            {
                name: 'Central African Republic',
                code: 'CF',
                capital: 'Bangui',
                region: 'AF',
                currency: {
                    code: 'XAF',
                    name: 'Central African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/caf.svg'
            },
            {
                name: 'Chad',
                code: 'TD',
                capital: "N'Djamena",
                region: 'AF',
                currency: {
                    code: 'XAF',
                    name: 'Central African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/tcd.svg'
            },
            {
                name: 'Chile',
                code: 'CL',
                capital: 'Santiago',
                region: 'SA',
                currency: {
                    code: 'CLP',
                    name: 'Chilean peso',
                    symbol: '$'
                },
                language: {
                    code: 'es',
                    iso639_2: 'spa',
                    name: 'Spanish',
                    nativeName: 'Español'
                },
                flag: 'https://restcountries.eu/data/chl.svg'
            },
            {
                name: 'China',
                code: 'CN',
                capital: 'Beijing',
                region: 'AS',
                currency: {
                    code: 'CNY',
                    name: 'Chinese yuan',
                    symbol: '¥'
                },
                language: {
                    code: 'zh',
                    name: 'Chinese'
                },
                flag: 'https://restcountries.eu/data/chn.svg'
            },
            {
                name: 'Christmas Island',
                code: 'CX',
                capital: 'Flying Fish Cove',
                region: 'OC',
                currency: {
                    code: 'AUD',
                    name: 'Australian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/cxr.svg'
            },
            {
                name: 'Cocos (Keeling) Islands',
                code: 'CC',
                capital: 'West Island',
                region: 'OC',
                currency: {
                    code: 'AUD',
                    name: 'Australian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/cck.svg'
            },
            {
                name: 'Colombia',
                code: 'CO',
                capital: 'Bogotá',
                region: 'SA',
                currency: {
                    code: 'COP',
                    name: 'Colombian peso',
                    symbol: '$'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/col.svg'
            },
            {
                name: 'Comoros',
                code: 'KM',
                capital: 'Moroni',
                region: 'AF',
                currency: {
                    code: 'KMF',
                    name: 'Comorian franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/com.svg'
            },
            {
                name: 'Congo',
                code: 'CG',
                capital: 'Brazzaville',
                region: 'AF',
                currency: {
                    code: 'XAF',
                    name: 'Central African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/cog.svg'
            },
            {
                name: 'Congo (Democratic Republic of the)',
                code: 'CD',
                capital: 'Kinshasa',
                region: 'AF',
                currency: {
                    code: 'CDF',
                    name: 'Congolese franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/cod.svg'
            },
            {
                name: 'Cook Islands',
                code: 'CK',
                capital: 'Avarua',
                region: 'OC',
                currency: {
                    code: 'NZD',
                    name: 'New Zealand dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/cok.svg'
            },
            {
                name: 'Costa Rica',
                code: 'CR',
                capital: 'San José',
                region: 'NA',
                currency: {
                    code: 'CRC',
                    name: 'Costa Rican colón',
                    symbol: '₡'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/cri.svg'
            },
            {
                name: 'Croatia',
                code: 'HR',
                capital: 'Zagreb',
                region: 'EU',
                currency: {
                    code: 'HRK',
                    name: 'Croatian kuna',
                    symbol: 'kn'
                },
                language: {
                    code: 'hr',
                    name: 'Croatian'
                },
                flag: 'https://restcountries.eu/data/hrv.svg'
            },
            {
                name: 'Cuba',
                code: 'CU',
                capital: 'Havana',
                region: 'NA',
                currency: {
                    code: 'CUC',
                    name: 'Cuban convertible peso',
                    symbol: '$'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/cub.svg'
            },
            {
                name: 'Curaçao',
                code: 'CW',
                capital: 'Willemstad',
                region: 'SA',
                currency: {
                    code: 'ANG',
                    name: 'Netherlands Antillean guilder',
                    symbol: 'ƒ'
                },
                language: {
                    code: 'nl',
                    name: 'Dutch'
                },
                flag: 'https://restcountries.eu/data/cuw.svg'
            },
            {
                name: 'Cyprus',
                code: 'CY',
                capital: 'Nicosia',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'tr',
                    name: 'Turkish'
                },
                flag: 'https://restcountries.eu/data/cyp.svg'
            },
            {
                name: 'Czech Republic',
                code: 'CZ',
                capital: 'Prague',
                region: 'EU',
                currency: {
                    code: 'CZK',
                    name: 'Czech koruna',
                    symbol: 'Kč'
                },
                language: {
                    code: 'cs',
                    name: 'Czech'
                },
                flag: 'https://restcountries.eu/data/cze.svg'
            },
            {
                name: 'Denmark',
                code: 'DK',
                capital: 'Copenhagen',
                region: 'EU',
                currency: {
                    code: 'DKK',
                    name: 'Danish krone',
                    symbol: 'kr'
                },
                language: {
                    code: 'da',
                    name: 'Danish'
                },
                flag: 'https://restcountries.eu/data/dnk.svg'
            },
            {
                name: 'Djibouti',
                code: 'DJ',
                capital: 'Djibouti',
                region: 'AF',
                currency: {
                    code: 'DJF',
                    name: 'Djiboutian franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/dji.svg'
            },
            {
                name: 'Dominica',
                code: 'DM',
                capital: 'Roseau',
                region: 'NA',
                currency: {
                    code: 'XCD',
                    name: 'East Caribbean dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/dma.svg'
            },
            {
                name: 'Dominican Republic',
                code: 'DO',
                capital: 'Santo Domingo',
                region: 'NA',
                currency: {
                    code: 'DOP',
                    name: 'Dominican peso',
                    symbol: '$'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/dom.svg'
            },
            {
                name: 'Ecuador',
                code: 'EC',
                capital: 'Quito',
                region: 'SA',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/ecu.svg'
            },
            {
                name: 'Egypt',
                code: 'EG',
                capital: 'Cairo',
                region: 'AF',
                currency: {
                    code: 'EGP',
                    name: 'Egyptian pound',
                    symbol: '£'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/egy.svg'
            },
            {
                name: 'El Salvador',
                code: 'SV',
                capital: 'San Salvador',
                region: 'NA',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/slv.svg'
            },
            {
                name: 'Equatorial Guinea',
                code: 'GQ',
                capital: 'Malabo',
                region: 'AF',
                currency: {
                    code: 'XAF',
                    name: 'Central African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'es',
                    iso639_2: 'spa',
                    name: 'Spanish',
                    nativeName: 'Español'
                },
                flag: 'https://restcountries.eu/data/gnq.svg'
            },
            {
                name: 'Eritrea',
                code: 'ER',
                capital: 'Asmara',
                region: 'AF',
                currency: {
                    code: 'ERN',
                    name: 'Eritrean nakfa',
                    symbol: 'Nfk'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/eri.svg'
            },
            {
                name: 'Estonia',
                code: 'EE',
                capital: 'Tallinn',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'et',
                    name: 'Estonian'
                },
                flag: 'https://restcountries.eu/data/est.svg'
            },
            {
                name: 'Ethiopia',
                code: 'ET',
                capital: 'Addis Ababa',
                region: 'AF',
                currency: {
                    code: 'ETB',
                    name: 'Ethiopian birr',
                    symbol: 'Br'
                },
                language: {
                    code: 'am',
                    name: 'Amharic'
                },
                flag: 'https://restcountries.eu/data/eth.svg'
            },
            {
                name: 'Falkland Islands (Malvinas)',
                code: 'FK',
                capital: 'Stanley',
                region: 'SA',
                currency: {
                    code: 'FKP',
                    name: 'Falkland Islands pound',
                    symbol: '£'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/flk.svg'
            },
            {
                name: 'Faroe Islands',
                code: 'FO',
                capital: 'Tórshavn',
                region: 'EU',
                currency: {
                    code: 'DKK',
                    name: 'Danish krone',
                    symbol: 'kr'
                },
                language: {
                    code: 'fo',
                    name: 'Faroese'
                },
                flag: 'https://restcountries.eu/data/fro.svg'
            },
            {
                name: 'Fiji',
                code: 'FJ',
                capital: 'Suva',
                region: 'OC',
                currency: {
                    code: 'FJD',
                    name: 'Fijian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/fji.svg'
            },
            {
                name: 'Finland',
                code: 'FI',
                capital: 'Helsinki',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fi',
                    iso639_2: 'fin',
                    name: 'Finnish',
                    nativeName: 'suomi'
                },
                flag: 'https://restcountries.eu/data/fin.svg'
            },
            {
                name: 'France',
                code: 'FR',
                capital: 'Paris',
                region: 'EU',
                demonym: 'French',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/fra.svg'
            },
            {
                name: 'French Guiana',
                code: 'GF',
                capital: 'Cayenne',
                region: 'SA',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/guf.svg'
            },
            {
                name: 'French Polynesia',
                code: 'PF',
                capital: 'Papeetē',
                region: 'OC',
                currency: {
                    code: 'XPF',
                    name: 'CFP franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/pyf.svg'
            },
            {
                name: 'French Southern Territories',
                code: 'TF',
                capital: 'Port-aux-Français',
                region: 'AF',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/atf.svg'
            },
            {
                name: 'Gabon',
                code: 'GA',
                capital: 'Libreville',
                region: 'AF',
                currency: {
                    code: 'XAF',
                    name: 'Central African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/gab.svg'
            },
            {
                name: 'Gambia',
                code: 'GM',
                capital: 'Banjul',
                region: 'AF',
                currency: {
                    code: 'GMD',
                    name: 'Gambian dalasi',
                    symbol: 'D'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/gmb.svg'
            },
            {
                name: 'Georgia',
                code: 'GE',
                capital: 'Tbilisi',
                region: 'AS',
                currency: {
                    code: 'GEL',
                    name: 'Georgian Lari',
                    symbol: 'ლ'
                },
                language: {
                    code: 'ka',
                    name: 'Georgian'
                },
                flag: 'https://restcountries.eu/data/geo.svg'
            },
            {
                name: 'Germany',
                code: 'DE',
                capital: 'Berlin',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'de',
                    name: 'German'
                },
                flag: 'https://restcountries.eu/data/deu.svg'
            },
            {
                name: 'Ghana',
                code: 'GH',
                capital: 'Accra',
                region: 'AF',
                currency: {
                    code: 'GHS',
                    name: 'Ghanaian cedi',
                    symbol: '₵'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/gha.svg'
            },
            {
                name: 'Gibraltar',
                code: 'GI',
                capital: 'Gibraltar',
                region: 'EU',
                currency: {
                    code: 'GIP',
                    name: 'Gibraltar pound',
                    symbol: '£'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/gib.svg'
            },
            {
                name: 'Greece',
                code: 'GR',
                capital: 'Athens',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'el',
                    name: 'Greek (modern)'
                },
                flag: 'https://restcountries.eu/data/grc.svg'
            },
            {
                name: 'Greenland',
                code: 'GL',
                capital: 'Nuuk',
                region: 'NA',
                currency: {
                    code: 'DKK',
                    name: 'Danish krone',
                    symbol: 'kr'
                },
                language: {
                    code: 'kl',
                    name: 'Kalaallisut'
                },
                flag: 'https://restcountries.eu/data/grl.svg'
            },
            {
                name: 'Grenada',
                code: 'GD',
                capital: "St. George's",
                region: 'NA',
                currency: {
                    code: 'XCD',
                    name: 'East Caribbean dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/grd.svg'
            },
            {
                name: 'Guadeloupe',
                code: 'GP',
                capital: 'Basse-Terre',
                region: 'NA',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/glp.svg'
            },
            {
                name: 'Guam',
                code: 'GU',
                capital: 'Hagåtña',
                region: 'OC',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/gum.svg'
            },
            {
                name: 'Guatemala',
                code: 'GT',
                capital: 'Guatemala City',
                region: 'NA',
                currency: {
                    code: 'GTQ',
                    name: 'Guatemalan quetzal',
                    symbol: 'Q'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/gtm.svg'
            },
            {
                name: 'Guernsey',
                code: 'GG',
                capital: 'St. Peter Port',
                region: 'EU',
                currency: {
                    code: 'GBP',
                    name: 'British pound',
                    symbol: '£'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/ggy.svg'
            },
            {
                name: 'Guinea',
                code: 'GN',
                capital: 'Conakry',
                region: 'AF',
                currency: {
                    code: 'GNF',
                    name: 'Guinean franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/gin.svg'
            },
            {
                name: 'Guinea-Bissau',
                code: 'GW',
                capital: 'Bissau',
                region: 'AF',
                currency: {
                    code: 'XOF',
                    name: 'West African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'pt',
                    name: 'Portuguese'
                },
                flag: 'https://restcountries.eu/data/gnb.svg'
            },
            {
                name: 'Guyana',
                code: 'GY',
                capital: 'Georgetown',
                region: 'SA',
                currency: {
                    code: 'GYD',
                    name: 'Guyanese dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/guy.svg'
            },
            {
                name: 'Haiti',
                code: 'HT',
                capital: 'Port-au-Prince',
                region: 'Americas',
                currency: {
                    code: 'HTG',
                    name: 'Haitian gourde',
                    symbol: 'G'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/hti.svg'
            },
            {
                name: 'Heard Island and McDonald Islands',
                code: 'HM',
                capital: '',
                region: '',
                currency: {
                    code: 'AUD',
                    name: 'Australian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/hmd.svg'
            },
            {
                name: 'Holy See',
                code: 'VA',
                capital: 'Rome',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/vat.svg'
            },
            {
                name: 'Honduras',
                code: 'HN',
                capital: 'Tegucigalpa',
                region: 'NA',
                currency: {
                    code: 'HNL',
                    name: 'Honduran lempira',
                    symbol: 'L'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/hnd.svg'
            },
            {
                name: 'Hong Kong',
                code: 'HK',
                capital: 'City of Victoria',
                region: 'AS',
                currency: {
                    code: 'HKD',
                    name: 'Hong Kong dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/hkg.svg'
            },
            {
                name: 'Hungary',
                code: 'HU',
                capital: 'Budapest',
                region: 'EU',
                currency: {
                    code: 'HUF',
                    name: 'Hungarian forint',
                    symbol: 'Ft'
                },
                language: {
                    code: 'hu',
                    name: 'Hungarian'
                },
                flag: 'https://restcountries.eu/data/hun.svg'
            },
            {
                name: 'Iceland',
                code: 'IS',
                capital: 'Reykjavík',
                region: 'EU',
                currency: {
                    code: 'ISK',
                    name: 'Icelandic króna',
                    symbol: 'kr'
                },
                language: {
                    code: 'is',
                    name: 'Icelandic'
                },
                flag: 'https://restcountries.eu/data/isl.svg'
            },
            {
                name: 'India',
                code: 'IN',
                capital: 'New Delhi',
                region: 'AS',
                currency: {
                    code: 'INR',
                    name: 'Indian rupee',
                    symbol: '₹'
                },
                language: {
                    code: 'hi',
                    name: 'Hindi'
                },
                flag: 'https://restcountries.eu/data/ind.svg'
            },
            {
                name: 'Indonesia',
                code: 'ID',
                capital: 'Jakarta',
                region: 'AS',
                currency: {
                    code: 'IDR',
                    name: 'Indonesian rupiah',
                    symbol: 'Rp'
                },
                language: {
                    code: 'id',
                    name: 'Indonesian'
                },
                flag: 'https://restcountries.eu/data/idn.svg'
            },
            {
                name: "C\u00F4te d'Ivoire",
                code: 'CI',
                capital: 'Yamoussoukro',
                region: 'AF',
                currency: {
                    code: 'XOF',
                    name: 'West African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/civ.svg'
            },
            {
                name: 'Iran (Islamic Republic of)',
                code: 'IR',
                capital: 'Tehran',
                region: 'AS',
                currency: {
                    code: 'IRR',
                    name: 'Iranian rial',
                    symbol: '﷼'
                },
                language: {
                    code: 'fa',
                    name: 'Persian (Farsi)'
                },
                flag: 'https://restcountries.eu/data/irn.svg'
            },
            {
                name: 'Iraq',
                code: 'IQ',
                capital: 'Baghdad',
                region: 'AS',
                currency: {
                    code: 'IQD',
                    name: 'Iraqi dinar',
                    symbol: 'ع.د'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/irq.svg'
            },
            {
                name: 'Ireland',
                code: 'IE',
                capital: 'Dublin',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'ga',
                    name: 'Irish'
                },
                flag: 'https://restcountries.eu/data/irl.svg'
            },
            {
                name: 'Isle of Man',
                code: 'IM',
                capital: 'Douglas',
                region: 'EU',
                currency: {
                    code: 'GBP',
                    name: 'British pound',
                    symbol: '£'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/imn.svg'
            },
            {
                name: 'Israel',
                code: 'IL',
                capital: 'Jerusalem',
                region: 'AS',
                currency: {
                    code: 'ILS',
                    name: 'Israeli new shekel',
                    symbol: '₪'
                },
                language: {
                    code: 'he',
                    name: 'Hebrew (modern)'
                },
                flag: 'https://restcountries.eu/data/isr.svg'
            },
            {
                name: 'Italy',
                code: 'IT',
                capital: 'Rome',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'it',
                    name: 'Italian'
                },
                flag: 'https://restcountries.eu/data/ita.svg'
            },
            {
                name: 'Jamaica',
                code: 'JM',
                capital: 'Kingston',
                region: 'NA',
                currency: {
                    code: 'JMD',
                    name: 'Jamaican dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/jam.svg'
            },
            {
                name: 'Japan',
                code: 'JP',
                capital: 'Tokyo',
                region: 'AS',
                currency: {
                    code: 'JPY',
                    name: 'Japanese yen',
                    symbol: '¥'
                },
                language: {
                    code: 'ja',
                    name: 'Japanese'
                },
                flag: 'https://restcountries.eu/data/jpn.svg'
            },
            {
                name: 'Jersey',
                code: 'JE',
                capital: 'Saint Helier',
                region: 'EU',
                currency: {
                    code: 'GBP',
                    name: 'British pound',
                    symbol: '£'
                },
                language: {
                    code: 'en',
                    iso639_2: 'eng',
                    name: 'English',
                    nativeName: 'English'
                },
                flag: 'https://restcountries.eu/data/jey.svg'
            },
            {
                name: 'Jordan',
                code: 'JO',
                capital: 'Amman',
                region: 'AS',
                currency: {
                    code: 'JOD',
                    name: 'Jordanian dinar',
                    symbol: 'د.ا'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/jor.svg'
            },
            {
                name: 'Kazakhstan',
                code: 'KZ',
                capital: 'Astana',
                region: 'AS',
                currency: {
                    code: 'KZT',
                    name: 'Kazakhstani tenge',
                    symbol: null
                },
                language: {
                    code: 'kk',
                    name: 'Kazakh'
                },
                flag: 'https://restcountries.eu/data/kaz.svg'
            },
            {
                name: 'Kenya',
                code: 'KE',
                capital: 'Nairobi',
                region: 'AF',
                currency: {
                    code: 'KES',
                    name: 'Kenyan shilling',
                    symbol: 'Sh'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/ken.svg'
            },
            {
                name: 'Kiribati',
                code: 'KI',
                capital: 'South Tarawa',
                region: 'OC',
                currency: {
                    code: 'AUD',
                    name: 'Australian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/kir.svg'
            },
            {
                name: 'Kuwait',
                code: 'KW',
                capital: 'Kuwait City',
                region: 'AS',
                currency: {
                    code: 'KWD',
                    name: 'Kuwaiti dinar',
                    symbol: 'د.ك'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/kwt.svg'
            },
            {
                name: 'Kyrgyzstan',
                code: 'KG',
                capital: 'Bishkek',
                region: 'AS',
                currency: {
                    code: 'KGS',
                    name: 'Kyrgyzstani som',
                    symbol: 'с'
                },
                language: {
                    code: 'ky',
                    name: 'Kyrgyz'
                },
                flag: 'https://restcountries.eu/data/kgz.svg'
            },
            {
                name: "Lao People's Democratic Republic",
                code: 'LA',
                capital: 'Vientiane',
                region: 'AS',
                currency: {
                    code: 'LAK',
                    name: 'Lao kip',
                    symbol: '₭'
                },
                language: {
                    code: 'lo',
                    name: 'Lao'
                },
                flag: 'https://restcountries.eu/data/lao.svg'
            },
            {
                name: 'Latvia',
                code: 'LV',
                capital: 'Riga',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'lv',
                    name: 'Latvian'
                },
                flag: 'https://restcountries.eu/data/lva.svg'
            },
            {
                name: 'Lebanon',
                code: 'LB',
                capital: 'Beirut',
                region: 'AS',
                currency: {
                    code: 'LBP',
                    name: 'Lebanese pound',
                    symbol: 'ل.ل'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/lbn.svg'
            },
            {
                name: 'Lesotho',
                code: 'LS',
                capital: 'Maseru',
                region: 'AF',
                currency: {
                    code: 'LSL',
                    name: 'Lesotho loti',
                    symbol: 'L'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/lso.svg'
            },
            {
                name: 'Liberia',
                code: 'LR',
                capital: 'Monrovia',
                region: 'AF',
                currency: {
                    code: 'LRD',
                    name: 'Liberian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/lbr.svg'
            },
            {
                name: 'Libya',
                code: 'LY',
                capital: 'Tripoli',
                region: 'AF',
                currency: {
                    code: 'LYD',
                    name: 'Libyan dinar',
                    symbol: 'ل.د'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/lby.svg'
            },
            {
                name: 'Liechtenstein',
                code: 'LI',
                capital: 'Vaduz',
                region: 'EU',
                currency: {
                    code: 'CHF',
                    name: 'Swiss franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'de',
                    name: 'German'
                },
                flag: 'https://restcountries.eu/data/lie.svg'
            },
            {
                name: 'Lithuania',
                code: 'LT',
                capital: 'Vilnius',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'lt',
                    name: 'Lithuanian'
                },
                flag: 'https://restcountries.eu/data/ltu.svg'
            },
            {
                name: 'Luxembourg',
                code: 'LU',
                capital: 'Luxembourg',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/lux.svg'
            },
            {
                name: 'Macao',
                code: 'MO',
                capital: '',
                region: 'AS',
                currency: {
                    code: 'MOP',
                    name: 'Macanese pataca',
                    symbol: 'P'
                },
                language: {
                    code: 'zh',
                    name: 'Chinese'
                },
                flag: 'https://restcountries.eu/data/mac.svg'
            },
            {
                name: 'Macedonia (the former Yugoslav Republic of)',
                code: 'MK',
                capital: 'Skopje',
                region: 'EU',
                currency: {
                    code: 'MKD',
                    name: 'Macedonian denar',
                    symbol: 'ден'
                },
                language: {
                    code: 'mk',
                    name: 'Macedonian'
                },
                flag: 'https://restcountries.eu/data/mkd.svg'
            },
            {
                name: 'Madagascar',
                code: 'MG',
                capital: 'Antananarivo',
                region: 'AF',
                currency: {
                    code: 'MGA',
                    name: 'Malagasy ariary',
                    symbol: 'Ar'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/mdg.svg'
            },
            {
                name: 'Malawi',
                code: 'MW',
                capital: 'Lilongwe',
                region: 'AF',
                currency: {
                    code: 'MWK',
                    name: 'Malawian kwacha',
                    symbol: 'MK'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/mwi.svg'
            },
            {
                name: 'Malaysia',
                code: 'MY',
                capital: 'Kuala Lumpur',
                region: 'AS',
                currency: {
                    code: 'MYR',
                    name: 'Malaysian ringgit',
                    symbol: 'RM'
                },
                language: {
                    code: null,
                    name: 'Malaysian'
                },
                flag: 'https://restcountries.eu/data/mys.svg'
            },
            {
                name: 'Maldives',
                code: 'MV',
                capital: 'Malé',
                region: 'AS',
                currency: {
                    code: 'MVR',
                    name: 'Maldivian rufiyaa',
                    symbol: '.ރ'
                },
                language: {
                    code: 'dv',
                    name: 'Divehi'
                },
                flag: 'https://restcountries.eu/data/mdv.svg'
            },
            {
                name: 'Mali',
                code: 'ML',
                capital: 'Bamako',
                region: 'AF',
                currency: {
                    code: 'XOF',
                    name: 'West African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/mli.svg'
            },
            {
                name: 'Malta',
                code: 'MT',
                capital: 'Valletta',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'mt',
                    name: 'Maltese'
                },
                flag: 'https://restcountries.eu/data/mlt.svg'
            },
            {
                name: 'Marshall Islands',
                code: 'MH',
                capital: 'Majuro',
                region: 'OC',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/mhl.svg'
            },
            {
                name: 'Martinique',
                code: 'MQ',
                capital: 'Fort-de-France',
                region: 'Americas',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/mtq.svg'
            },
            {
                name: 'Mauritania',
                code: 'MR',
                capital: 'Nouakchott',
                region: 'AF',
                currency: {
                    code: 'MRO',
                    name: 'Mauritanian ouguiya',
                    symbol: 'UM'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/mrt.svg'
            },
            {
                name: 'Mauritius',
                code: 'MU',
                capital: 'Port Louis',
                region: 'AF',
                currency: {
                    code: 'MUR',
                    name: 'Mauritian rupee',
                    symbol: '₨'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/mus.svg'
            },
            {
                name: 'Mayotte',
                code: 'YT',
                capital: 'Mamoudzou',
                region: 'AF',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/myt.svg'
            },
            {
                name: 'Mexico',
                code: 'MX',
                capital: 'Mexico City',
                region: 'NA',
                currency: {
                    code: 'MXN',
                    name: 'Mexican peso',
                    symbol: '$'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/mex.svg'
            },
            {
                name: 'Micronesia (Federated States of)',
                code: 'FM',
                capital: 'Palikir',
                region: 'OC',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/fsm.svg'
            },
            {
                name: 'Moldova (Republic of)',
                code: 'MD',
                capital: 'Chișinău',
                region: 'EU',
                currency: {
                    code: 'MDL',
                    name: 'Moldovan leu',
                    symbol: 'L'
                },
                language: {
                    code: 'ro',
                    name: 'Romanian'
                },
                flag: 'https://restcountries.eu/data/mda.svg'
            },
            {
                name: 'Monaco',
                code: 'MC',
                capital: 'Monaco',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/mco.svg'
            },
            {
                name: 'Mongolia',
                code: 'MN',
                capital: 'Ulan Bator',
                region: 'AS',
                currency: {
                    code: 'MNT',
                    name: 'Mongolian tögrög',
                    symbol: '₮'
                },
                language: {
                    code: 'mn',
                    name: 'Mongolian'
                },
                flag: 'https://restcountries.eu/data/mng.svg'
            },
            {
                name: 'Montenegro',
                code: 'ME',
                capital: 'Podgorica',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'sr',
                    name: 'Serbian'
                },
                flag: 'https://restcountries.eu/data/mne.svg'
            },
            {
                name: 'Montserrat',
                code: 'MS',
                capital: 'Plymouth',
                region: 'NA',
                currency: {
                    code: 'XCD',
                    name: 'East Caribbean dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/msr.svg'
            },
            {
                name: 'Morocco',
                code: 'MA',
                capital: 'Rabat',
                region: 'AF',
                currency: {
                    code: 'MAD',
                    name: 'Moroccan dirham',
                    symbol: 'د.م.'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/mar.svg'
            },
            {
                name: 'Mozambique',
                code: 'MZ',
                capital: 'Maputo',
                region: 'AF',
                currency: {
                    code: 'MZN',
                    name: 'Mozambican metical',
                    symbol: 'MT'
                },
                language: {
                    code: 'pt',
                    name: 'Portuguese'
                },
                flag: 'https://restcountries.eu/data/moz.svg'
            },
            {
                name: 'Myanmar',
                code: 'MM',
                capital: 'Naypyidaw',
                region: 'AS',
                currency: {
                    code: 'MMK',
                    name: 'Burmese kyat',
                    symbol: 'Ks'
                },
                language: {
                    code: 'my',
                    name: 'Burmese'
                },
                flag: 'https://restcountries.eu/data/mmr.svg'
            },
            {
                name: 'Namibia',
                code: 'NA',
                capital: 'Windhoek',
                region: 'AF',
                currency: {
                    code: 'NAD',
                    name: 'Namibian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/nam.svg'
            },
            {
                name: 'Nauru',
                code: 'NR',
                capital: 'Yaren',
                region: 'OC',
                currency: {
                    code: 'AUD',
                    name: 'Australian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/nru.svg'
            },
            {
                name: 'Nepal',
                code: 'NP',
                capital: 'Kathmandu',
                region: 'AS',
                currency: {
                    code: 'NPR',
                    name: 'Nepalese rupee',
                    symbol: '₨'
                },
                language: {
                    code: 'ne',
                    name: 'Nepali'
                },
                flag: 'https://restcountries.eu/data/npl.svg'
            },
            {
                name: 'Netherlands',
                code: 'NL',
                capital: 'Amsterdam',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'nl',
                    name: 'Dutch'
                },
                flag: 'https://restcountries.eu/data/nld.svg'
            },
            {
                name: 'New Caledonia',
                code: 'NC',
                capital: 'Nouméa',
                region: 'OC',
                currency: {
                    code: 'XPF',
                    name: 'CFP franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/ncl.svg'
            },
            {
                name: 'New Zealand',
                code: 'NZ',
                capital: 'Wellington',
                region: 'OC',
                currency: {
                    code: 'NZD',
                    name: 'New Zealand dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/nzl.svg'
            },
            {
                name: 'Nicaragua',
                code: 'NI',
                capital: 'Managua',
                region: 'NA',
                currency: {
                    code: 'NIO',
                    name: 'Nicaraguan córdoba',
                    symbol: 'C$'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/nic.svg'
            },
            {
                name: 'Niger',
                code: 'NE',
                capital: 'Niamey',
                region: 'AF',
                currency: {
                    code: 'XOF',
                    name: 'West African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/ner.svg'
            },
            {
                name: 'Nigeria',
                code: 'NG',
                capital: 'Abuja',
                region: 'AF',
                currency: {
                    code: 'NGN',
                    name: 'Nigerian naira',
                    symbol: '₦'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/nga.svg'
            },
            {
                name: 'Niue',
                code: 'NU',
                capital: 'Alofi',
                region: 'OC',
                currency: {
                    code: 'NZD',
                    name: 'New Zealand dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/niu.svg'
            },
            {
                name: 'Norfolk Island',
                code: 'NF',
                capital: 'Kingston',
                region: 'OC',
                currency: {
                    code: 'AUD',
                    name: 'Australian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/nfk.svg'
            },
            {
                name: "Korea (Democratic People's Republic of)",
                code: 'KP',
                capital: 'Pyongyang',
                region: 'AS',
                currency: {
                    code: 'KPW',
                    name: 'North Korean won',
                    symbol: '₩'
                },
                language: {
                    code: 'ko',
                    name: 'Korean'
                },
                flag: 'https://restcountries.eu/data/prk.svg'
            },
            {
                name: 'Northern Mariana Islands',
                code: 'MP',
                capital: 'Saipan',
                region: 'OC',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/mnp.svg'
            },
            {
                name: 'Norway',
                code: 'NO',
                capital: 'Oslo',
                region: 'EU',
                currency: {
                    code: 'NOK',
                    name: 'Norwegian krone',
                    symbol: 'kr'
                },
                language: {
                    code: 'no',
                    name: 'Norwegian'
                },
                flag: 'https://restcountries.eu/data/nor.svg'
            },
            {
                name: 'Oman',
                code: 'OM',
                capital: 'Muscat',
                region: 'AS',
                currency: {
                    code: 'OMR',
                    name: 'Omani rial',
                    symbol: 'ر.ع.'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/omn.svg'
            },
            {
                name: 'Pakistan',
                code: 'PK',
                capital: 'Islamabad',
                region: 'AS',
                currency: {
                    code: 'PKR',
                    name: 'Pakistani rupee',
                    symbol: '₨'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/pak.svg'
            },
            {
                name: 'Palau',
                code: 'PW',
                capital: 'Ngerulmud',
                region: 'OC',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/plw.svg'
            },
            {
                name: 'Palestine, State of',
                code: 'PS',
                capital: 'Ramallah',
                region: 'AS',
                currency: {
                    code: 'ILS',
                    name: 'Israeli new sheqel',
                    symbol: '₪'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/pse.svg'
            },
            {
                name: 'Panama',
                code: 'PA',
                capital: 'Panama City',
                region: 'NA',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/pan.svg'
            },
            {
                name: 'Papua New Guinea',
                code: 'PG',
                capital: 'Port Moresby',
                region: 'OC',
                currency: {
                    code: 'PGK',
                    name: 'Papua New Guinean kina',
                    symbol: 'K'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/png.svg'
            },
            {
                name: 'Paraguay',
                code: 'PY',
                capital: 'Asunción',
                region: 'SA',
                currency: {
                    code: 'PYG',
                    name: 'Paraguayan guaraní',
                    symbol: '₲'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/pry.svg'
            },
            {
                name: 'Peru',
                code: 'PE',
                capital: 'Lima',
                region: 'SA',
                currency: {
                    code: 'PEN',
                    name: 'Peruvian sol',
                    symbol: 'S/.'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/per.svg'
            },
            {
                name: 'Philippines',
                code: 'PH',
                capital: 'Manila',
                region: 'AS',
                currency: {
                    code: 'PHP',
                    name: 'Philippine peso',
                    symbol: '₱'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/phl.svg'
            },
            {
                name: 'Pitcairn',
                code: 'PN',
                capital: 'Adamstown',
                region: 'OC',
                currency: {
                    code: 'NZD',
                    name: 'New Zealand dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/pcn.svg'
            },
            {
                name: 'Poland',
                code: 'PL',
                capital: 'Warsaw',
                region: 'EU',
                currency: {
                    code: 'PLN',
                    name: 'Polish złoty',
                    symbol: 'zł'
                },
                language: {
                    code: 'pl',
                    name: 'Polish'
                },
                flag: 'https://restcountries.eu/data/pol.svg'
            },
            {
                name: 'Portugal',
                code: 'PT',
                capital: 'Lisbon',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'pt',
                    name: 'Portuguese'
                },
                flag: 'https://restcountries.eu/data/prt.svg'
            },
            {
                name: 'Puerto Rico',
                code: 'PR',
                capital: 'San Juan',
                region: 'NA',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/pri.svg'
            },
            {
                name: 'Qatar',
                code: 'QA',
                capital: 'Doha',
                region: 'AS',
                currency: {
                    code: 'QAR',
                    name: 'Qatari riyal',
                    symbol: 'ر.ق'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/qat.svg'
            },
            {
                name: 'Republic of Kosovo',
                code: 'XK',
                capital: 'Pristina',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'sq',
                    name: 'Albanian'
                },
                flag: 'https://restcountries.eu/data/kos.svg'
            },
            {
                name: 'Réunion',
                code: 'RE',
                capital: 'Saint-Denis',
                region: 'AF',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/reu.svg'
            },
            {
                name: 'Romania',
                code: 'RO',
                capital: 'Bucharest',
                region: 'EU',
                currency: {
                    code: 'RON',
                    name: 'Romanian leu',
                    symbol: 'lei'
                },
                language: {
                    code: 'ro',
                    name: 'Romanian'
                },
                flag: 'https://restcountries.eu/data/rou.svg'
            },
            {
                name: 'Russian Federation',
                code: 'RU',
                capital: 'Moscow',
                region: 'EU',
                currency: {
                    code: 'RUB',
                    name: 'Russian ruble',
                    symbol: '₽'
                },
                language: {
                    code: 'ru',
                    name: 'Russian'
                },
                flag: 'https://restcountries.eu/data/rus.svg'
            },
            {
                name: 'Rwanda',
                code: 'RW',
                capital: 'Kigali',
                region: 'AF',
                currency: {
                    code: 'RWF',
                    name: 'Rwandan franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'rw',
                    name: 'Kinyarwanda'
                },
                flag: 'https://restcountries.eu/data/rwa.svg'
            },
            {
                name: 'Saint Barthélemy',
                code: 'BL',
                capital: 'Gustavia',
                region: 'NA',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/blm.svg'
            },
            {
                name: 'Saint Helena, Ascension and Tristan da Cunha',
                code: 'SH',
                capital: 'Jamestown',
                region: 'AF',
                currency: {
                    code: 'SHP',
                    name: 'Saint Helena pound',
                    symbol: '£'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/shn.svg'
            },
            {
                name: 'Saint Kitts and Nevis',
                code: 'KN',
                capital: 'Basseterre',
                region: 'NA',
                currency: {
                    code: 'XCD',
                    name: 'East Caribbean dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/kna.svg'
            },
            {
                name: 'Saint Lucia',
                code: 'LC',
                capital: 'Castries',
                region: 'NA',
                currency: {
                    code: 'XCD',
                    name: 'East Caribbean dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/lca.svg'
            },
            {
                name: 'Saint Martin (French part)',
                code: 'MF',
                capital: 'Marigot',
                region: 'NA',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/maf.svg'
            },
            {
                name: 'Saint Pierre and Miquelon',
                code: 'PM',
                capital: 'Saint-Pierre',
                region: 'NA',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/spm.svg'
            },
            {
                name: 'Saint Vincent and the Grenadines',
                code: 'VC',
                capital: 'Kingstown',
                region: 'NA',
                currency: {
                    code: 'XCD',
                    name: 'East Caribbean dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/vct.svg'
            },
            {
                name: 'Samoa',
                code: 'WS',
                capital: 'Apia',
                region: 'OC',
                currency: {
                    code: 'WST',
                    name: 'Samoan tālā',
                    symbol: 'T'
                },
                language: {
                    code: 'sm',
                    name: 'Samoan'
                },
                flag: 'https://restcountries.eu/data/wsm.svg'
            },
            {
                name: 'San Marino',
                code: 'SM',
                capital: 'City of San Marino',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'it',
                    name: 'Italian'
                },
                flag: 'https://restcountries.eu/data/smr.svg'
            },
            {
                name: 'Sao Tome and Principe',
                code: 'ST',
                capital: 'São Tomé',
                region: 'AF',
                currency: {
                    code: 'STD',
                    name: 'São Tomé and Príncipe dobra',
                    symbol: 'Db'
                },
                language: {
                    code: 'pt',
                    name: 'Portuguese'
                },
                flag: 'https://restcountries.eu/data/stp.svg'
            },
            {
                name: 'Saudi Arabia',
                code: 'SA',
                capital: 'Riyadh',
                region: 'AS',
                currency: {
                    code: 'SAR',
                    name: 'Saudi riyal',
                    symbol: 'ر.س'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/sau.svg'
            },
            {
                name: 'Senegal',
                code: 'SN',
                capital: 'Dakar',
                region: 'AF',
                currency: {
                    code: 'XOF',
                    name: 'West African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/sen.svg'
            },
            {
                name: 'Serbia',
                code: 'RS',
                capital: 'Belgrade',
                region: 'EU',
                currency: {
                    code: 'RSD',
                    name: 'Serbian dinar',
                    symbol: 'дин.'
                },
                language: {
                    code: 'sr',
                    name: 'Serbian'
                },
                flag: 'https://restcountries.eu/data/srb.svg'
            },
            {
                name: 'Seychelles',
                code: 'SC',
                capital: 'Victoria',
                region: 'AF',
                currency: {
                    code: 'SCR',
                    name: 'Seychellois rupee',
                    symbol: '₨'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/syc.svg'
            },
            {
                name: 'Sierra Leone',
                code: 'SL',
                capital: 'Freetown',
                region: 'AF',
                currency: {
                    code: 'SLL',
                    name: 'Sierra Leonean leone',
                    symbol: 'Le'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/sle.svg'
            },
            {
                name: 'Singapore',
                code: 'SG',
                capital: 'Singapore',
                region: 'AS',
                currency: {
                    code: 'SGD',
                    name: 'Singapore dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/sgp.svg'
            },
            {
                name: 'Sint Maarten (Dutch part)',
                code: 'SX',
                capital: 'Philipsburg',
                region: 'Americas',
                currency: {
                    code: 'ANG',
                    name: 'Netherlands Antillean guilder',
                    symbol: 'ƒ'
                },
                language: {
                    code: 'nl',
                    name: 'Dutch'
                },
                flag: 'https://restcountries.eu/data/sxm.svg'
            },
            {
                name: 'Slovakia',
                code: 'SK',
                capital: 'Bratislava',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'sk',
                    name: 'Slovak'
                },
                flag: 'https://restcountries.eu/data/svk.svg'
            },
            {
                name: 'Slovenia',
                code: 'SI',
                capital: 'Ljubljana',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'sl',
                    name: 'Slovene'
                },
                flag: 'https://restcountries.eu/data/svn.svg'
            },
            {
                name: 'Solomon Islands',
                code: 'SB',
                capital: 'Honiara',
                region: 'OC',
                currency: {
                    code: 'SBD',
                    name: 'Solomon Islands dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/slb.svg'
            },
            {
                name: 'Somalia',
                code: 'SO',
                capital: 'Mogadishu',
                region: 'AF',
                currency: {
                    code: 'SOS',
                    name: 'Somali shilling',
                    symbol: 'Sh'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/som.svg'
            },
            {
                name: 'South Africa',
                code: 'ZA',
                capital: 'Pretoria',
                region: 'AF',
                currency: {
                    code: 'ZAR',
                    name: 'South African rand',
                    symbol: 'R'
                },
                language: {
                    code: 'en',
                    iso639_2: 'eng',
                    name: 'English',
                    nativeName: 'English'
                },
                flag: 'https://restcountries.eu/data/zaf.svg'
            },
            {
                name: 'South Georgia and the South Sandwich Islands',
                code: 'GS',
                capital: 'King Edward Point',
                region: 'NA',
                currency: {
                    code: 'GBP',
                    name: 'British pound',
                    symbol: '£'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/sgs.svg'
            },
            {
                name: 'Korea (Republic of)',
                code: 'KR',
                capital: 'Seoul',
                region: 'AS',
                currency: {
                    code: 'KRW',
                    name: 'South Korean won',
                    symbol: '₩'
                },
                language: {
                    code: 'ko',
                    name: 'Korean'
                },
                flag: 'https://restcountries.eu/data/kor.svg'
            },
            {
                name: 'South Sudan',
                code: 'SS',
                capital: 'Juba',
                region: 'AF',
                currency: {
                    code: 'SSP',
                    name: 'South Sudanese pound',
                    symbol: '£'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/ssd.svg'
            },
            {
                name: 'Spain',
                code: 'ES',
                capital: 'Madrid',
                region: 'EU',
                currency: {
                    code: 'EUR',
                    name: 'Euro',
                    symbol: '€'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/esp.svg'
            },
            {
                name: 'Sri Lanka',
                code: 'LK',
                capital: 'Colombo',
                region: 'AS',
                currency: {
                    code: 'LKR',
                    name: 'Sri Lankan rupee',
                    symbol: 'Rs'
                },
                language: {
                    code: 'si',
                    iso639_2: 'sin',
                    name: 'Sinhalese',
                    nativeName: 'සිංහල'
                },
                flag: 'https://restcountries.eu/data/lka.svg'
            },
            {
                name: 'Sudan',
                code: 'SD',
                capital: 'Khartoum',
                region: 'AF',
                currency: {
                    code: 'SDG',
                    name: 'Sudanese pound',
                    symbol: 'ج.س.'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/sdn.svg'
            },
            {
                name: 'Suriname',
                code: 'SR',
                capital: 'Paramaribo',
                region: 'SA',
                currency: {
                    code: 'SRD',
                    name: 'Surinamese dollar',
                    symbol: '$'
                },
                language: {
                    code: 'nl',
                    name: 'Dutch'
                },
                flag: 'https://restcountries.eu/data/sur.svg'
            },
            {
                name: 'Svalbard and Jan Mayen',
                code: 'SJ',
                capital: 'Longyearbyen',
                region: 'EU',
                currency: {
                    code: 'NOK',
                    name: 'Norwegian krone',
                    symbol: 'kr'
                },
                language: {
                    code: 'no',
                    name: 'Norwegian'
                },
                flag: 'https://restcountries.eu/data/sjm.svg'
            },
            {
                name: 'Swaziland',
                code: 'SZ',
                capital: 'Lobamba',
                region: 'AF',
                currency: {
                    code: 'SZL',
                    name: 'Swazi lilangeni',
                    symbol: 'L'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/swz.svg'
            },
            {
                name: 'Sweden',
                code: 'SE',
                capital: 'Stockholm',
                region: 'EU',
                currency: {
                    code: 'SEK',
                    name: 'Swedish krona',
                    symbol: 'kr'
                },
                language: {
                    code: 'sv',
                    name: 'Swedish'
                },
                flag: 'https://restcountries.eu/data/swe.svg'
            },
            {
                name: 'Switzerland',
                code: 'CH',
                capital: 'Bern',
                region: 'EU',
                currency: {
                    code: 'CHF',
                    name: 'Swiss franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'de',
                    name: 'German'
                },
                flag: 'https://restcountries.eu/data/che.svg'
            },
            {
                name: 'Syrian Arab Republic',
                code: 'SY',
                capital: 'Damascus',
                region: 'AS',
                currency: {
                    code: 'SYP',
                    name: 'Syrian pound',
                    symbol: '£'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/syr.svg'
            },
            {
                name: 'Taiwan',
                code: 'TW',
                capital: 'Taipei',
                region: 'AS',
                currency: {
                    code: 'TWD',
                    name: 'New Taiwan dollar',
                    symbol: '$'
                },
                language: {
                    code: 'zh',
                    name: 'Chinese'
                },
                flag: 'https://restcountries.eu/data/twn.svg'
            },
            {
                name: 'Tajikistan',
                code: 'TJ',
                capital: 'Dushanbe',
                region: 'AS',
                currency: {
                    code: 'TJS',
                    name: 'Tajikistani somoni',
                    symbol: 'ЅМ'
                },
                language: {
                    code: 'tg',
                    name: 'Tajik'
                },
                flag: 'https://restcountries.eu/data/tjk.svg'
            },
            {
                name: 'Tanzania, United Republic of',
                code: 'TZ',
                capital: 'Dodoma',
                region: 'AF',
                currency: {
                    code: 'TZS',
                    name: 'Tanzanian shilling',
                    symbol: 'Sh'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/tza.svg'
            },
            {
                name: 'Thailand',
                code: 'TH',
                capital: 'Bangkok',
                region: 'AS',
                currency: {
                    code: 'THB',
                    name: 'Thai baht',
                    symbol: '฿'
                },
                language: {
                    code: 'th',
                    name: 'Thai'
                },
                flag: 'https://restcountries.eu/data/tha.svg'
            },
            {
                name: 'Timor-Leste',
                code: 'TL',
                capital: 'Dili',
                region: 'AS',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'pt',
                    name: 'Portuguese'
                },
                flag: 'https://restcountries.eu/data/tls.svg'
            },
            {
                name: 'Togo',
                code: 'TG',
                capital: 'Lomé',
                region: 'AF',
                currency: {
                    code: 'XOF',
                    name: 'West African CFA franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/tgo.svg'
            },
            {
                name: 'Tokelau',
                code: 'TK',
                capital: 'Fakaofo',
                region: 'OC',
                currency: {
                    code: 'NZD',
                    name: 'New Zealand dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/tkl.svg'
            },
            {
                name: 'Tonga',
                code: 'TO',
                capital: "Nuku'alofa",
                region: 'OC',
                currency: {
                    code: 'TOP',
                    name: 'Tongan paʻanga',
                    symbol: 'T$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/ton.svg'
            },
            {
                name: 'Trinidad and Tobago',
                code: 'TT',
                capital: 'Port of Spain',
                region: 'SA',
                currency: {
                    code: 'TTD',
                    name: 'Trinidad and Tobago dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/tto.svg'
            },
            {
                name: 'Tunisia',
                code: 'TN',
                capital: 'Tunis',
                region: 'AF',
                currency: {
                    code: 'TND',
                    name: 'Tunisian dinar',
                    symbol: 'د.ت'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/tun.svg'
            },
            {
                name: 'Turkey',
                code: 'TR',
                capital: 'Ankara',
                region: 'AS',
                currency: {
                    code: 'TRY',
                    name: 'Turkish lira',
                    symbol: null
                },
                language: {
                    code: 'tr',
                    name: 'Turkish'
                },
                flag: 'https://restcountries.eu/data/tur.svg'
            },
            {
                name: 'Turkmenistan',
                code: 'TM',
                capital: 'Ashgabat',
                region: 'AS',
                currency: {
                    code: 'TMT',
                    name: 'Turkmenistan manat',
                    symbol: 'm'
                },
                language: {
                    code: 'tk',
                    name: 'Turkmen'
                },
                flag: 'https://restcountries.eu/data/tkm.svg'
            },
            {
                name: 'Turks and Caicos Islands',
                code: 'TC',
                capital: 'Cockburn Town',
                region: 'NA',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/tca.svg'
            },
            {
                name: 'Tuvalu',
                code: 'TV',
                capital: 'Funafuti',
                region: 'OC',
                currency: {
                    code: 'AUD',
                    name: 'Australian dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/tuv.svg'
            },
            {
                name: 'Uganda',
                code: 'UG',
                capital: 'Kampala',
                region: 'AF',
                currency: {
                    code: 'UGX',
                    name: 'Ugandan shilling',
                    symbol: 'Sh'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/uga.svg'
            },
            {
                name: 'Ukraine',
                code: 'UA',
                capital: 'Kiev',
                region: 'EU',
                currency: {
                    code: 'UAH',
                    name: 'Ukrainian hryvnia',
                    symbol: '₴'
                },
                language: {
                    code: 'uk',
                    name: 'Ukrainian'
                },
                flag: 'https://restcountries.eu/data/ukr.svg'
            },
            {
                name: 'United Arab Emirates',
                code: 'AE',
                capital: 'Abu Dhabi',
                region: 'AS',
                currency: {
                    code: 'AED',
                    name: 'United Arab Emirates dirham',
                    symbol: 'د.إ'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/are.svg'
            },
            {
                name: 'United Kingdom of Great Britain and Northern Ireland',
                code: 'GB',
                capital: 'London',
                region: 'EU',
                currency: {
                    code: 'GBP',
                    name: 'British pound',
                    symbol: '£'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/gbr.svg'
            },
            {
                name: 'United States of America',
                code: 'US',
                capital: 'Washington, D.C.',
                region: 'NA',
                currency: {
                    code: 'USD',
                    name: 'United States dollar',
                    symbol: '$'
                },
                language: {
                    code: 'en',
                    iso639_2: 'eng',
                    name: 'English',
                    nativeName: 'English'
                },
                flag: 'https://restcountries.eu/data/usa.svg'
            },
            {
                name: 'Uruguay',
                code: 'UY',
                capital: 'Montevideo',
                region: 'SA',
                currency: {
                    code: 'UYU',
                    name: 'Uruguayan peso',
                    symbol: '$'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/ury.svg'
            },
            {
                name: 'Uzbekistan',
                code: 'UZ',
                capital: 'Tashkent',
                region: 'AS',
                currency: {
                    code: 'UZS',
                    name: "Uzbekistani so'm",
                    symbol: null
                },
                language: {
                    code: 'uz',
                    name: 'Uzbek'
                },
                flag: 'https://restcountries.eu/data/uzb.svg'
            },
            {
                name: 'Vanuatu',
                code: 'VU',
                capital: 'Port Vila',
                region: 'OC',
                currency: {
                    code: 'VUV',
                    name: 'Vanuatu vatu',
                    symbol: 'Vt'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/vut.svg'
            },
            {
                name: 'Venezuela (Bolivarian Republic of)',
                code: 'VE',
                capital: 'Caracas',
                region: 'SA',
                currency: {
                    code: 'VEF',
                    name: 'Venezuelan bolívar',
                    symbol: 'Bs F'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/ven.svg'
            },
            {
                name: 'Viet Nam',
                code: 'VN',
                capital: 'Hanoi',
                region: 'AS',
                currency: {
                    code: 'VND',
                    name: 'Vietnamese đồng',
                    symbol: '₫'
                },
                language: {
                    code: 'vi',
                    name: 'Vietnamese'
                },
                flag: 'https://restcountries.eu/data/vnm.svg'
            },
            {
                name: 'Wallis and Futuna',
                code: 'WF',
                capital: 'Mata-Utu',
                region: 'OC',
                currency: {
                    code: 'XPF',
                    name: 'CFP franc',
                    symbol: 'Fr'
                },
                language: {
                    code: 'fr',
                    name: 'French'
                },
                flag: 'https://restcountries.eu/data/wlf.svg'
            },
            {
                name: 'Western Sahara',
                code: 'EH',
                capital: 'El Aaiún',
                region: 'AF',
                currency: {
                    code: 'MAD',
                    name: 'Moroccan dirham',
                    symbol: 'د.م.'
                },
                language: {
                    code: 'es',
                    name: 'Spanish'
                },
                flag: 'https://restcountries.eu/data/esh.svg'
            },
            {
                name: 'Yemen',
                code: 'YE',
                capital: "Sana'a",
                region: 'AS',
                currency: {
                    code: 'YER',
                    name: 'Yemeni rial',
                    symbol: '﷼'
                },
                language: {
                    code: 'ar',
                    name: 'Arabic'
                },
                flag: 'https://restcountries.eu/data/yem.svg'
            },
            {
                name: 'Zambia',
                code: 'ZM',
                capital: 'Lusaka',
                region: 'AF',
                currency: {
                    code: 'ZMW',
                    name: 'Zambian kwacha',
                    symbol: 'ZK'
                },
                language: {
                    code: 'en',
                    name: 'English'
                },
                flag: 'https://restcountries.eu/data/zmb.svg'
            },
            {
                name: 'Zimbabwe',
                code: 'ZW',
                capital: 'Harare',
                region: 'AF',
                currency: {
                    code: 'BWP',
                    name: 'Botswana pula',
                    symbol: 'P'
                },
                language: {
                    code: 'en',
                    iso639_2: 'eng',
                    name: 'English',
                    nativeName: 'English'
                },
                flag: 'https://restcountries.eu/data/zwe.svg'
            }
        ];
    }
    CountryService.prototype.getCountry = function () {
        var data = this.countries;
        return data;
    };
    CountryService.ctorParameters = function () { return []; };
    CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/shared/services/coupon.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/coupon.service.ts ***!
  \***************************************************/
/*! exports provided: CouponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponService", function() { return CouponService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var CouponService = /** @class */ (function () {
    function CouponService(restangular) {
        this.restangular = restangular;
    }
    CouponService.prototype.create = function (params) {
        return this.restangular.all('coupons').post(params).toPromise();
    };
    CouponService.prototype.search = function (params) {
        return this.restangular.one('coupons').get(params).toPromise();
    };
    CouponService.prototype.findOne = function (id) {
        return this.restangular.one('coupons', id).get().toPromise();
    };
    CouponService.prototype.update = function (id, data) {
        return this.restangular.one('coupons', id).customPUT(data).toPromise();
    };
    CouponService.prototype.delete = function (id) {
        return this.restangular.one('coupons', id).customDELETE().toPromise();
    };
    CouponService.prototype.getCurrentCoupon = function (params) {
        return this.restangular.one('coupon').one('current').get(params).toPromise();
    };
    CouponService.prototype.checkUsedCoupon = function (id) {
        return this.restangular.one('coupons/check-used-coupon', id).get().toPromise();
    };
    CouponService.prototype.applyCoupon = function (params) {
        return this.restangular.one('coupon/apply-coupon').get(params).toPromise();
    };
    CouponService.prototype.checkBooked = function (webinarId) {
        return this.restangular.one("enroll/" + webinarId + "/booked").post().toPromise();
    };
    CouponService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    CouponService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], CouponService);
    return CouponService;
}());



/***/ }),

/***/ "./src/app/shared/services/course.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/course.service.ts ***!
  \***************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var CourseService = /** @class */ (function () {
    function CourseService(restangular) {
        this.restangular = restangular;
    }
    CourseService.prototype.create = function (params) {
        return this.restangular.all('courses').post(params).toPromise();
    };
    CourseService.prototype.search = function (params) {
        return this.restangular.one('courses').get(params).toPromise();
    };
    CourseService.prototype.findOne = function (id) {
        return this.restangular.one('courses', id).get().toPromise();
    };
    CourseService.prototype.update = function (id, data) {
        return this.restangular.one('courses', id).customPUT(data).toPromise();
    };
    CourseService.prototype.delete = function (id) {
        return this.restangular.one('courses', id).customDELETE().toPromise();
    };
    CourseService.prototype.checkBooked = function (courseId, targetType) {
        return this.restangular.one("enroll/" + courseId + "/" + targetType + "/booked").post().toPromise();
    };
    CourseService.prototype.enroll = function (params) {
        return this.restangular.all('enroll').post(params).toPromise();
    };
    CourseService.prototype.gift = function (params) {
        return this.restangular.all('gift').post(params).toPromise();
    };
    CourseService.prototype.checkUsedCoupon = function (id) {
        return this.restangular.one('coupons/check-used-coupon', id).get().toPromise();
    };
    CourseService.prototype.applyCoupon = function (params) {
        return this.restangular.one('coupon/apply-coupon').get(params).toPromise();
    };
    CourseService.prototype.getTransactions = function (tutorId, params) {
        return this.restangular.one("courses/" + tutorId + "/transaction").get(params).toPromise();
    };
    CourseService.prototype.getEnrolledList = function (id) {
        return this.restangular.one("courses/" + id + "/enrolled").get().toPromise();
    };
    CourseService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    CourseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/shared/services/dts.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/dts.service.ts ***!
  \************************************************/
/*! exports provided: DTSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTSService", function() { return DTSService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);




var DTSService = /** @class */ (function () {
    function DTSService() {
    }
    DTSService.prototype.formatToDST = function (date, timezone) {
        if (timezone === void 0) { timezone = ''; }
        var result = timezone ? moment_timezone__WEBPACK_IMPORTED_MODULE_3__(date).add(1, 'hour').tz(timezone) : moment__WEBPACK_IMPORTED_MODULE_2__(date).add(1, 'hour');
        return result;
    };
    DTSService.prototype.formatFromDST = function (date, timezone) {
        if (timezone === void 0) { timezone = ''; }
        var result = timezone ? moment_timezone__WEBPACK_IMPORTED_MODULE_3__(date).subtract(1, 'hour').tz(timezone) : moment__WEBPACK_IMPORTED_MODULE_2__(date).subtract(1, 'hour');
        return result;
    };
    DTSService.prototype.isDTS = function (date, timezone) {
        if (timezone === void 0) { timezone = ''; }
        var isDTS = timezone ? moment_timezone__WEBPACK_IMPORTED_MODULE_3__["tz"](date, timezone).isDST() : moment__WEBPACK_IMPORTED_MODULE_2__(date).isDST();
        return isDTS;
    };
    DTSService.ctorParameters = function () { return []; };
    DTSService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DTSService);
    return DTSService;
}());



/***/ }),

/***/ "./src/app/shared/services/favorite.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/favorite.service.ts ***!
  \*****************************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var FavoriteService = /** @class */ (function () {
    function FavoriteService(restangular) {
        this.restangular = restangular;
    }
    FavoriteService.prototype.search = function (params, type) {
        return this.restangular.one("favorites/" + type).get(params).toPromise();
    };
    FavoriteService.prototype.favorite = function (params, type) {
        return this.restangular.one("favorites/" + type).customPOST(params).toPromise();
    };
    FavoriteService.prototype.unFavorite = function (id, type) {
        return this.restangular.one("favorites/" + type, id).customDELETE().toPromise();
    };
    FavoriteService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    FavoriteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], FavoriteService);
    return FavoriteService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: AuthService, SystemService, SeoService, SubjectService, UtilService, PostService, LanguageService, CategoryService, WebinarService, AppointmentService, CountryService, TestimonialService, FavoriteService, CouponService, CourseService, SectionService, LectureService, MyCategoryService, MyTopicService, MySubjectService, TopicService, DTSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system.service */ "./src/app/shared/services/system.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return _system_service__WEBPACK_IMPORTED_MODULE_1__["SystemService"]; });

/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seo.service */ "./src/app/shared/services/seo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return _seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"]; });

/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject.service */ "./src/app/shared/services/subject.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return _subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]; });

/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]; });

/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts.service */ "./src/app/shared/services/posts.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return _posts_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]; });

/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language.service */ "./src/app/shared/services/language.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return _language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]; });

/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category.service */ "./src/app/shared/services/category.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return _category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"]; });

/* harmony import */ var _webinar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webinar.service */ "./src/app/shared/services/webinar.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebinarService", function() { return _webinar_service__WEBPACK_IMPORTED_MODULE_8__["WebinarService"]; });

/* harmony import */ var _appointment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./appointment.service */ "./src/app/shared/services/appointment.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return _appointment_service__WEBPACK_IMPORTED_MODULE_9__["AppointmentService"]; });

/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./country.service */ "./src/app/shared/services/country.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return _country_service__WEBPACK_IMPORTED_MODULE_10__["CountryService"]; });

/* harmony import */ var _testimonial_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./testimonial.service */ "./src/app/shared/services/testimonial.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestimonialService", function() { return _testimonial_service__WEBPACK_IMPORTED_MODULE_11__["TestimonialService"]; });

/* harmony import */ var _favorite_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return _favorite_service__WEBPACK_IMPORTED_MODULE_12__["FavoriteService"]; });

/* harmony import */ var _coupon_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./coupon.service */ "./src/app/shared/services/coupon.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CouponService", function() { return _coupon_service__WEBPACK_IMPORTED_MODULE_13__["CouponService"]; });

/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./course.service */ "./src/app/shared/services/course.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return _course_service__WEBPACK_IMPORTED_MODULE_14__["CourseService"]; });

/* harmony import */ var _section_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./section.service */ "./src/app/shared/services/section.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return _section_service__WEBPACK_IMPORTED_MODULE_15__["SectionService"]; });

/* harmony import */ var _lecture_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lecture.service */ "./src/app/shared/services/lecture.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LectureService", function() { return _lecture_service__WEBPACK_IMPORTED_MODULE_16__["LectureService"]; });

/* harmony import */ var _my_category_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./my-category.service */ "./src/app/shared/services/my-category.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyCategoryService", function() { return _my_category_service__WEBPACK_IMPORTED_MODULE_17__["MyCategoryService"]; });

/* harmony import */ var _my_topic_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./my-topic.service */ "./src/app/shared/services/my-topic.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyTopicService", function() { return _my_topic_service__WEBPACK_IMPORTED_MODULE_18__["MyTopicService"]; });

/* harmony import */ var _my_subject_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./my-subject.service */ "./src/app/shared/services/my-subject.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MySubjectService", function() { return _my_subject_service__WEBPACK_IMPORTED_MODULE_19__["MySubjectService"]; });

/* harmony import */ var _topic_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./topic.service */ "./src/app/shared/services/topic.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return _topic_service__WEBPACK_IMPORTED_MODULE_20__["TopicService"]; });

/* harmony import */ var _dts_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dts.service */ "./src/app/shared/services/dts.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DTSService", function() { return _dts_service__WEBPACK_IMPORTED_MODULE_21__["DTSService"]; });

























/***/ }),

/***/ "./src/app/shared/services/language.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/language.service.ts ***!
  \*****************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var LanguageService = /** @class */ (function () {
    function LanguageService() {
        this.languages = {
            ab: 'Abkhazian',
            ace: 'Achinese',
            ach: 'Acoli',
            ada: 'Adangme',
            ady: 'Adyghe',
            aa: 'Afar',
            afh: 'Afrihili',
            af: 'Afrikaans',
            agq: 'Aghem',
            ain: 'Ainu',
            ak: 'Akan',
            akk: 'Akkadian',
            bss: 'Akoose',
            akz: 'Alabama',
            sq: 'Albanian',
            ale: 'Aleut',
            arq: 'Algerian Arabic',
            en_US: 'American English',
            ase: 'American Sign Language',
            am: 'Amharic',
            egy: 'Ancient Egyptian',
            grc: 'Ancient Greek',
            anp: 'Angika',
            njo: 'Ao Naga',
            ar: 'Arabic',
            an: 'Aragonese',
            arc: 'Aramaic',
            aro: 'Araona',
            arp: 'Arapaho',
            arw: 'Arawak',
            hy: 'Armenian',
            rup: 'Aromanian',
            frp: 'Arpitan',
            as: 'Assamese',
            ast: 'Asturian',
            asa: 'Asu',
            cch: 'Atsam',
            en_AU: 'Australian English',
            de_AT: 'Austrian German',
            av: 'Avaric',
            ae: 'Avestan',
            awa: 'Awadhi',
            ay: 'Aymara',
            az: 'Azerbaijani',
            bfq: 'Badaga',
            ksf: 'Bafia',
            bfd: 'Bafut',
            bqi: 'Bakhtiari',
            ban: 'Balinese',
            bal: 'Baluchi',
            bm: 'Bambara',
            bax: 'Bamun',
            bjn: 'Banjar',
            bas: 'Basaa',
            ba: 'Bashkir',
            eu: 'Basque',
            bbc: 'Batak Toba',
            bar: 'Bavarian',
            bej: 'Beja',
            be: 'Belarusian',
            bem: 'Bemba',
            bez: 'Bena',
            bn: 'Bengali',
            bew: 'Betawi',
            bho: 'Bhojpuri',
            bik: 'Bikol',
            bin: 'Bini',
            bpy: 'Bishnupriya',
            bi: 'Bislama',
            byn: 'Blin',
            zbl: 'Blissymbols',
            brx: 'Bodo',
            bs: 'Bosnian',
            brh: 'Brahui',
            bra: 'Braj',
            pt_BR: 'Brazilian Portuguese',
            br: 'Breton',
            en_GB: 'British English',
            bug: 'Buginese',
            bg: 'Bulgarian',
            bum: 'Bulu',
            bua: 'Buriat',
            my: 'Burmese',
            cad: 'Caddo',
            frc: 'Cajun French',
            en_CA: 'Canadian English',
            fr_CA: 'Canadian French',
            yue: 'Cantonese',
            cps: 'Capiznon',
            car: 'Carib',
            ca: 'Catalan',
            cay: 'Cayuga',
            ceb: 'Cebuano',
            tzm: 'Central Atlas Tamazight',
            dtp: 'Central Dusun',
            ckb: 'Central Kurdish',
            esu: 'Central Yupik',
            shu: 'Chadian Arabic',
            chg: 'Chagatai',
            ch: 'Chamorro',
            ce: 'Chechen',
            chr: 'Cherokee',
            chy: 'Cheyenne',
            chb: 'Chibcha',
            cgg: 'Chiga',
            qug: 'Chimborazo Highland Quichua',
            zh: 'Chinese',
            chn: 'Chinook Jargon',
            chp: 'Chipewyan',
            cho: 'Choctaw',
            cu: 'Church Slavic',
            chk: 'Chuukese',
            cv: 'Chuvash',
            nwc: 'Classical Newari',
            syc: 'Classical Syriac',
            ksh: 'Colognian',
            swb: 'Comorian',
            swc: 'Congo Swahili',
            cop: 'Coptic',
            kw: 'Cornish',
            co: 'Corsican',
            cr: 'Cree',
            mus: 'Creek',
            crh: 'Crimean Turkish',
            hr: 'Croatian',
            cs: 'Czech',
            dak: 'Dakota',
            da: 'Danish',
            dar: 'Dargwa',
            dzg: 'Dazaga',
            del: 'Delaware',
            din: 'Dinka',
            dv: 'Divehi',
            doi: 'Dogri',
            dgr: 'Dogrib',
            dua: 'Duala',
            nl: 'Dutch',
            dyu: 'Dyula',
            dz: 'Dzongkha',
            frs: 'Eastern Frisian',
            efi: 'Efik',
            arz: 'Egyptian Arabic',
            eka: 'Ekajuk',
            elx: 'Elamite',
            ebu: 'Embu',
            egl: 'Emilian',
            en: 'English',
            myv: 'Erzya',
            eo: 'Esperanto',
            et: 'Estonian',
            pt_PT: 'European Portuguese',
            es_ES: 'European Spanish',
            ee: 'Ewe',
            ewo: 'Ewondo',
            ext: 'Extremaduran',
            fan: 'Fang',
            fat: 'Fanti',
            fo: 'Faroese',
            hif: 'Fiji Hindi',
            fj: 'Fijian',
            fil: 'Filipino',
            fi: 'Finnish',
            nl_BE: 'Flemish',
            fon: 'Fon',
            gur: 'Frafra',
            fr: 'French',
            fur: 'Friulian',
            ff: 'Fulah',
            gaa: 'Ga',
            gag: 'Gagauz',
            gl: 'Galician',
            gan: 'Gan Chinese',
            lg: 'Ganda',
            gay: 'Gayo',
            gba: 'Gbaya',
            gez: 'Geez',
            ka: 'Georgian',
            de: 'German',
            aln: 'Gheg Albanian',
            bbj: 'Ghomala',
            glk: 'Gilaki',
            gil: 'Gilbertese',
            gom: 'Goan Konkani',
            gon: 'Gondi',
            gor: 'Gorontalo',
            got: 'Gothic',
            grb: 'Grebo',
            el: 'Greek',
            gn: 'Guarani',
            gu: 'Gujarati',
            guz: 'Gusii',
            gwi: 'Gwich\u02bcin',
            hai: 'Haida',
            ht: 'Haitian',
            hak: 'Hakka Chinese',
            ha: 'Hausa',
            haw: 'Hawaiian',
            he: 'Hebrew',
            hz: 'Herero',
            hil: 'Hiligaynon',
            hi: 'Hindi',
            ho: 'Hiri Motu',
            hit: 'Hittite',
            hmn: 'Hmong',
            hu: 'Hungarian',
            hup: 'Hupa',
            iba: 'Iban',
            ibb: 'Ibibio',
            is: 'Icelandic',
            io: 'Ido',
            ig: 'Igbo',
            ilo: 'Iloko',
            smn: 'Inari Sami',
            id: 'Indonesian',
            izh: 'Ingrian',
            inh: 'Ingush',
            ia: 'Interlingua',
            ie: 'Interlingue',
            iu: 'Inuktitut',
            ik: 'Inupiaq',
            ga: 'Irish',
            it: 'Italian',
            jam: 'Jamaican Creole English',
            ja: 'Japanese',
            jv: 'Javanese',
            kaj: 'Jju',
            dyo: 'Jola-Fonyi',
            jrb: 'Judeo-Arabic',
            jpr: 'Judeo-Persian',
            jut: 'Jutish',
            kbd: 'Kabardian',
            kea: 'Kabuverdianu',
            kab: 'Kabyle',
            kac: 'Kachin',
            kgp: 'Kaingang',
            kkj: 'Kako',
            kl: 'Kalaallisut',
            kln: 'Kalenjin',
            xal: 'Kalmyk',
            kam: 'Kamba',
            kbl: 'Kanembu',
            kn: 'Kannada',
            kr: 'Kanuri',
            kaa: 'Kara-Kalpak',
            krc: 'Karachay-Balkar',
            krl: 'Karelian',
            ks: 'Kashmiri',
            csb: 'Kashubian',
            kaw: 'Kawi',
            kk: 'Kazakh',
            ken: 'Kenyang',
            kha: 'Khasi',
            km: 'Khmer',
            kho: 'Khotanese',
            khw: 'Khowar',
            ki: 'Kikuyu',
            kmb: 'Kimbundu',
            krj: 'Kinaray-a',
            rw: 'Kinyarwanda',
            kiu: 'Kirmanjki',
            tlh: 'Klingon',
            bkm: 'Kom',
            kv: 'Komi',
            koi: 'Komi-Permyak',
            kg: 'Kongo',
            kok: 'Konkani',
            ko: 'Korean',
            kfo: 'Koro',
            kos: 'Kosraean',
            avk: 'Kotava',
            khq: 'Koyra Chiini',
            ses: 'Koyraboro Senni',
            kpe: 'Kpelle',
            kri: 'Krio',
            kj: 'Kuanyama',
            kum: 'Kumyk',
            ku: 'Kurdish',
            kru: 'Kurukh',
            kut: 'Kutenai',
            nmg: 'Kwasio',
            ky: 'Kyrgyz',
            quc: 'K\u02bciche\u02bc',
            lad: 'Ladino',
            lah: 'Lahnda',
            lkt: 'Lakota',
            lam: 'Lamba',
            lag: 'Langi',
            lo: 'Lao',
            ltg: 'Latgalian',
            la: 'Latin',
            es_419: 'Latin American Spanish',
            lv: 'Latvian',
            lzz: 'Laz',
            lez: 'Lezghian',
            lij: 'Ligurian',
            li: 'Limburgish',
            ln: 'Lingala',
            lfn: 'Lingua Franca Nova',
            lzh: 'Literary Chinese',
            lt: 'Lithuanian',
            liv: 'Livonian',
            jbo: 'Lojban',
            lmo: 'Lombard',
            nds: 'Low German',
            sli: 'Lower Silesian',
            dsb: 'Lower Sorbian',
            loz: 'Lozi',
            lu: 'Luba-Katanga',
            lua: 'Luba-Lulua',
            lui: 'Luiseno',
            smj: 'Lule Sami',
            lun: 'Lunda',
            luo: 'Luo',
            lb: 'Luxembourgish',
            luy: 'Luyia',
            mde: 'Maba',
            mk: 'Macedonian',
            jmc: 'Machame',
            mad: 'Madurese',
            maf: 'Mafa',
            mag: 'Magahi',
            vmf: 'Main-Franconian',
            mai: 'Maithili',
            mak: 'Makasar',
            mgh: 'Makhuwa-Meetto',
            kde: 'Makonde',
            mg: 'Malagasy',
            ms: 'Malay',
            ml: 'Malayalam',
            mt: 'Maltese',
            mnc: 'Manchu',
            mdr: 'Mandar',
            man: 'Mandingo',
            mni: 'Manipuri',
            gv: 'Manx',
            mi: 'Maori',
            arn: 'Mapuche',
            mr: 'Marathi',
            chm: 'Mari',
            mh: 'Marshallese',
            mwr: 'Marwari',
            mas: 'Masai',
            mzn: 'Mazanderani',
            byv: 'Medumba',
            men: 'Mende',
            mwv: 'Mentawai',
            mer: 'Meru',
            mgo: 'Meta\u02bc',
            es_MX: 'Mexican Spanish',
            mic: 'Micmac',
            dum: 'Middle Dutch',
            enm: 'Middle English',
            frm: 'Middle French',
            gmh: 'Middle High German',
            mga: 'Middle Irish',
            nan: 'Min Nan Chinese',
            min: 'Minangkabau',
            xmf: 'Mingrelian',
            mwl: 'Mirandese',
            lus: 'Mizo',
            ar_001: 'Modern Standard Arabic',
            moh: 'Mohawk',
            mdf: 'Moksha',
            ro_MD: 'Moldavian',
            lol: 'Mongo',
            mn: 'Mongolian',
            mfe: 'Morisyen',
            ary: 'Moroccan Arabic',
            mos: 'Mossi',
            mul: 'Multiple Languages',
            mua: 'Mundang',
            ttt: 'Muslim Tat',
            mye: 'Myene',
            naq: 'Nama',
            na: 'Nauru',
            nv: 'Navajo',
            ng: 'Ndonga',
            nap: 'Neapolitan',
            ne: 'Nepali',
            new: 'Newari',
            sba: 'Ngambay',
            nnh: 'Ngiemboon',
            jgo: 'Ngomba',
            yrl: 'Nheengatu',
            nia: 'Nias',
            niu: 'Niuean',
            zxx: 'No linguistic content',
            nog: 'Nogai',
            nd: 'North Ndebele',
            frr: 'Northern Frisian',
            se: 'Northern Sami',
            nso: 'Northern Sotho',
            no: 'Norwegian',
            nb: 'Norwegian Bokm\u00e5l',
            nn: 'Norwegian Nynorsk',
            nov: 'Novial',
            nus: 'Nuer',
            nym: 'Nyamwezi',
            ny: 'Nyanja',
            nyn: 'Nyankole',
            tog: 'Nyasa Tonga',
            nyo: 'Nyoro',
            nzi: 'Nzima',
            nqo: 'N\u02bcKo',
            oc: 'Occitan',
            oj: 'Ojibwa',
            ang: 'Old English',
            fro: 'Old French',
            goh: 'Old High German',
            sga: 'Old Irish',
            non: 'Old Norse',
            peo: 'Old Persian',
            pro: 'Old Proven\u00e7al',
            or: 'Oriya',
            om: 'Oromo',
            osa: 'Osage',
            os: 'Ossetic',
            ota: 'Ottoman Turkish',
            pal: 'Pahlavi',
            pfl: 'Palatine German',
            pau: 'Palauan',
            pi: 'Pali',
            pam: 'Pampanga',
            pag: 'Pangasinan',
            pap: 'Papiamento',
            ps: 'Pashto',
            pdc: 'Pennsylvania German',
            fa: 'Persian',
            phn: 'Phoenician',
            pcd: 'Picard',
            pms: 'Piedmontese',
            pdt: 'Plautdietsch',
            pon: 'Pohnpeian',
            pl: 'Polish',
            pnt: 'Pontic',
            pt: 'Portuguese',
            prg: 'Prussian',
            pa: 'Punjabi',
            qu: 'Quechua',
            raj: 'Rajasthani',
            rap: 'Rapanui',
            rar: 'Rarotongan',
            rif: 'Riffian',
            rgn: 'Romagnol',
            ro: 'Romanian',
            rm: 'Romansh',
            rom: 'Romany',
            rof: 'Rombo',
            root: 'Root',
            rtm: 'Rotuman',
            rug: 'Roviana',
            rn: 'Rundi',
            ru: 'Russian',
            rue: 'Rusyn',
            rwk: 'Rwa',
            ssy: 'Saho',
            sah: 'Sakha',
            sam: 'Samaritan Aramaic',
            saq: 'Samburu',
            sm: 'Samoan',
            sgs: 'Samogitian',
            sad: 'Sandawe',
            sg: 'Sango',
            sbp: 'Sangu',
            sa: 'Sanskrit',
            sat: 'Santali',
            sc: 'Sardinian',
            sas: 'Sasak',
            sdc: 'Sassarese Sardinian',
            stq: 'Saterland Frisian',
            saz: 'Saurashtra',
            sco: 'Scots',
            gd: 'Scottish Gaelic',
            sly: 'Selayar',
            sel: 'Selkup',
            seh: 'Sena',
            see: 'Seneca',
            sr: 'Serbian',
            sh: 'Serbo-Croatian',
            srr: 'Serer',
            sei: 'Seri',
            ksb: 'Shambala',
            shn: 'Shan',
            sn: 'Shona',
            ii: 'Sichuan Yi',
            scn: 'Sicilian',
            sid: 'Sidamo',
            bla: 'Siksika',
            szl: 'Silesian',
            zh_Hans: 'Simplified Chinese',
            sd: 'Sindhi',
            si: 'Sinhala',
            sms: 'Skolt Sami',
            den: 'Slave',
            sk: 'Slovak',
            sl: 'Slovenian',
            xog: 'Soga',
            sog: 'Sogdien',
            so: 'Somali',
            snk: 'Soninke',
            azb: 'South Azerbaijani',
            nr: 'South Ndebele',
            alt: 'Southern Altai',
            sma: 'Southern Sami',
            st: 'Southern Sotho',
            es: 'Spanish',
            srn: 'Sranan Tongo',
            zgh: 'Standard Moroccan Tamazight',
            suk: 'Sukuma',
            sux: 'Sumerian',
            su: 'Sundanese',
            sus: 'Susu',
            sw: 'Swahili',
            ss: 'Swati',
            sv: 'Swedish',
            fr_CH: 'Swiss French',
            gsw: 'Swiss German',
            de_CH: 'Swiss High German',
            syr: 'Syriac',
            shi: 'Tachelhit',
            tl: 'Tagalog',
            ty: 'Tahitian',
            dav: 'Taita',
            tg: 'Tajik',
            tly: 'Talysh',
            tmh: 'Tamashek',
            ta: 'Tamil',
            trv: 'Taroko',
            twq: 'Tasawaq',
            tt: 'Tatar',
            te: 'Telugu',
            ter: 'Tereno',
            teo: 'Teso',
            tet: 'Tetum',
            th: 'Thai',
            bo: 'Tibetan',
            tig: 'Tigre',
            ti: 'Tigrinya',
            tem: 'Timne',
            tiv: 'Tiv',
            tli: 'Tlingit',
            tpi: 'Tok Pisin',
            tkl: 'Tokelau',
            to: 'Tongan',
            fit: 'Tornedalen Finnish',
            zh_Hant: 'Traditional Chinese',
            tkr: 'Tsakhur',
            tsd: 'Tsakonian',
            tsi: 'Tsimshian',
            ts: 'Tsonga',
            tn: 'Tswana',
            tcy: 'Tulu',
            tum: 'Tumbuka',
            aeb: 'Tunisian Arabic',
            tr: 'Turkish',
            tk: 'Turkmen',
            tru: 'Turoyo',
            tvl: 'Tuvalu',
            tyv: 'Tuvinian',
            tw: 'Twi',
            kcg: 'Tyap',
            udm: 'Udmurt',
            uga: 'Ugaritic',
            uk: 'Ukrainian',
            umb: 'Umbundu',
            und: 'Unknown Language',
            hsb: 'Upper Sorbian',
            ur: 'Urdu',
            ug: 'Uyghur',
            uz: 'Uzbek',
            vai: 'Vai',
            ve: 'Venda',
            vec: 'Venetian',
            vep: 'Veps',
            vi: 'Vietnamese',
            vo: 'Volap\u00fck',
            vro: 'V\u00f5ro',
            vot: 'Votic',
            vun: 'Vunjo',
            wa: 'Walloon',
            wae: 'Walser',
            war: 'Waray',
            wbp: 'Warlpiri',
            was: 'Washo',
            guc: 'Wayuu',
            cy: 'Welsh',
            vls: 'West Flemish',
            fy: 'Western Frisian',
            mrj: 'Western Mari',
            wal: 'Wolaytta',
            wo: 'Wolof',
            wuu: 'Wu Chinese',
            xh: 'Xhosa',
            hsn: 'Xiang Chinese',
            yav: 'Yangben',
            yao: 'Yao',
            yap: 'Yapese',
            ybb: 'Yemba',
            yi: 'Yiddish',
            yo: 'Yoruba',
            zap: 'Zapotec',
            dje: 'Zarma',
            zza: 'Zaza',
            zea: 'Zeelandic',
            zen: 'Zenaga',
            za: 'Zhuang',
            gbz: 'Zoroastrian Dari',
            zu: 'Zulu',
            zun: 'Zuni'
        };
    }
    LanguageService.prototype.getLang = function () {
        var _this = this;
        var data = Object.keys(this.languages).map(function (key) { return ({ id: key, name: _this.languages[key] }); });
        return data;
    };
    LanguageService.prototype.getLangName = function (key) {
        return this.languages[key];
    };
    LanguageService.prototype.returnNameLanguage = function (key) {
        return this.languages[key];
    };
    LanguageService.ctorParameters = function () { return []; };
    LanguageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/shared/services/lecture.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/lecture.service.ts ***!
  \****************************************************/
/*! exports provided: LectureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureService", function() { return LectureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var LectureService = /** @class */ (function () {
    function LectureService(restangular) {
        this.restangular = restangular;
    }
    LectureService.prototype.create = function (params) {
        return this.restangular.all('lectures').post(params).toPromise();
    };
    LectureService.prototype.search = function (params) {
        return this.restangular.one('lectures').get(params).toPromise();
    };
    LectureService.prototype.findOne = function (id) {
        return this.restangular.one('lectures', id).get().toPromise();
    };
    LectureService.prototype.update = function (id, data) {
        return this.restangular.one('lectures', id).customPUT(data).toPromise();
    };
    LectureService.prototype.delete = function (id) {
        return this.restangular.one('lectures', id).customDELETE().toPromise();
    };
    LectureService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    LectureService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], LectureService);
    return LectureService;
}());



/***/ }),

/***/ "./src/app/shared/services/my-category.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/my-category.service.ts ***!
  \********************************************************/
/*! exports provided: MyCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCategoryService", function() { return MyCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var MyCategoryService = /** @class */ (function () {
    function MyCategoryService(restangular) {
        this.restangular = restangular;
    }
    MyCategoryService.prototype.create = function (params) {
        return this.restangular.all('my-category').post(params).toPromise();
    };
    MyCategoryService.prototype.search = function (params) {
        return this.restangular.one('my-categories').get(params).toPromise();
    };
    MyCategoryService.prototype.findOne = function (id) {
        return this.restangular.one('my-category', id).get().toPromise();
    };
    MyCategoryService.prototype.update = function (id, data) {
        return this.restangular.one('my-category', id).customPUT(data).toPromise();
    };
    MyCategoryService.prototype.delete = function (id) {
        return this.restangular.one('my-category', id).customDELETE().toPromise();
    };
    MyCategoryService.prototype.getListOfMe = function (params) {
        return this.restangular.one('my-categories/me').get(params).toPromise();
    };
    MyCategoryService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    MyCategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], MyCategoryService);
    return MyCategoryService;
}());



/***/ }),

/***/ "./src/app/shared/services/my-subject.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/my-subject.service.ts ***!
  \*******************************************************/
/*! exports provided: MySubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySubjectService", function() { return MySubjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var MySubjectService = /** @class */ (function () {
    function MySubjectService(restangular) {
        this.restangular = restangular;
    }
    MySubjectService.prototype.create = function (params) {
        return this.restangular.all('my-subject').post(params).toPromise();
    };
    MySubjectService.prototype.search = function (params) {
        return this.restangular.one('my-subjects').get(params).toPromise();
    };
    MySubjectService.prototype.findOne = function (id) {
        return this.restangular.one('my-subject', id).get().toPromise();
    };
    MySubjectService.prototype.update = function (id, data) {
        return this.restangular.one('my-subject', id).customPUT(data).toPromise();
    };
    MySubjectService.prototype.delete = function (id) {
        return this.restangular.one('my-subject', id).customDELETE().toPromise();
    };
    MySubjectService.prototype.getListOfMe = function (params) {
        return this.restangular.one('my-subjects/me').get(params).toPromise();
    };
    MySubjectService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    MySubjectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], MySubjectService);
    return MySubjectService;
}());



/***/ }),

/***/ "./src/app/shared/services/my-topic.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/my-topic.service.ts ***!
  \*****************************************************/
/*! exports provided: MyTopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTopicService", function() { return MyTopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var MyTopicService = /** @class */ (function () {
    function MyTopicService(restangular) {
        this.restangular = restangular;
    }
    MyTopicService.prototype.create = function (params) {
        return this.restangular.all('my-topic').post(params).toPromise();
    };
    MyTopicService.prototype.search = function (params) {
        return this.restangular.one('my-topics').get(params).toPromise();
    };
    MyTopicService.prototype.findOne = function (id) {
        return this.restangular.one('my-topic', id).get().toPromise();
    };
    MyTopicService.prototype.update = function (id, data) {
        return this.restangular.one('my-topic', id).customPUT(data).toPromise();
    };
    MyTopicService.prototype.delete = function (id) {
        return this.restangular.one('my-topic', id).customDELETE().toPromise();
    };
    MyTopicService.prototype.getListOfMe = function (params) {
        return this.restangular.one('my-topics/me').get(params).toPromise();
    };
    MyTopicService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    MyTopicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], MyTopicService);
    return MyTopicService;
}());



/***/ }),

/***/ "./src/app/shared/services/posts.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/posts.service.ts ***!
  \**************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var PostService = /** @class */ (function () {
    function PostService(restangular) {
        this.restangular = restangular;
        this.posts = null;
    }
    PostService.prototype.getPosts = function (params) {
        var _this = this;
        if (this.posts) {
            return Promise.resolve(this.posts);
        }
        if (this._getPosts && typeof this._getPosts.then === 'function') {
            return this._getPosts;
        }
        this._getPosts = this.restangular
            .one('posts')
            .get(params)
            .toPromise()
            .then(function (resp) {
            _this.posts = resp;
            return _this.posts;
        });
        return this._getPosts;
    };
    PostService.prototype.create = function (credentials) {
        return this.restangular.all('posts').post(credentials).toPromise();
    };
    PostService.prototype.search = function (params) {
        return this.restangular.one('posts').get(params).toPromise();
    };
    PostService.prototype.findOne = function (id) {
        return this.restangular.one('posts', id).get().toPromise();
    };
    PostService.prototype.update = function (id, data) {
        return this.restangular.one('posts', id).customPUT(data).toPromise();
    };
    PostService.prototype.delete = function (id) {
        return this.restangular.one('posts', id).customDELETE().toPromise();
    };
    PostService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/shared/services/section.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/section.service.ts ***!
  \****************************************************/
/*! exports provided: SectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return SectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var SectionService = /** @class */ (function () {
    function SectionService(restangular) {
        this.restangular = restangular;
    }
    SectionService.prototype.create = function (params) {
        return this.restangular.all('sections').post(params).toPromise();
    };
    SectionService.prototype.search = function (params) {
        return this.restangular.one('sections').get(params).toPromise();
    };
    SectionService.prototype.findOne = function (id) {
        return this.restangular.one('sections', id).get().toPromise();
    };
    SectionService.prototype.update = function (id, data) {
        return this.restangular.one('sections', id).customPUT(data).toPromise();
    };
    SectionService.prototype.delete = function (id) {
        return this.restangular.one('sections', id).customDELETE().toPromise();
    };
    SectionService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    SectionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], SectionService);
    return SectionService;
}());



/***/ }),

/***/ "./src/app/shared/services/seo.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/seo.service.ts ***!
  \************************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



var SeoService = /** @class */ (function () {
    function SeoService() {
        this.seoChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.seoChanged$ = this.seoChanged.asObservable();
    }
    SeoService.prototype.update = function (title, meta) {
        this.seoChanged.next({
            title: title,
            meta: meta
        });
    };
    SeoService.ctorParameters = function () { return []; };
    SeoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SeoService);
    return SeoService;
}());



/***/ }),

/***/ "./src/app/shared/services/subject.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/subject.service.ts ***!
  \****************************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var SubjectService = /** @class */ (function () {
    function SubjectService(restangular) {
        this.restangular = restangular;
        this.subjects = null;
    }
    SubjectService.prototype.getSubjects = function (params) {
        var _this = this;
        if (this.subjects) {
            return Promise.resolve(this.subjects);
        }
        if (this._getSubjects && typeof this._getSubjects.then === 'function') {
            return this._getSubjects;
        }
        this._getSubjects = this.restangular
            .one('subjects')
            .get(params)
            .toPromise()
            .then(function (resp) {
            _this.subjects = resp;
            return _this.subjects;
        });
        return this._getSubjects;
    };
    SubjectService.prototype.search = function (params) {
        return this.restangular.one('subjects').get(params).toPromise();
    };
    SubjectService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    SubjectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/app/shared/services/system.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/system.service.ts ***!
  \***************************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var SystemService = /** @class */ (function () {
    function SystemService(restangular) {
        this.restangular = restangular;
        this.appConfig = null;
    }
    SystemService.prototype.configs = function () {
        var _this = this;
        if (this.appConfig) {
            if (localStorage.getItem('userLang')) {
                this.appConfig = Object.assign(this.appConfig, { userLang: localStorage.getItem('userLang') });
            }
            return Promise.resolve(this.appConfig);
        }
        if (this._getConfig && typeof this._getConfig.then === 'function') {
            return this._getConfig;
        }
        this._getConfig = this.restangular
            .one('system/configs/public')
            .get()
            .toPromise()
            .then(function (resp) {
            _this.appConfig = resp.data;
            // load user lang here
            var userLang = localStorage.getItem('userLang') || resp.data.i18n.defaultLanguage || 'en';
            _this.appConfig.userLang = userLang;
            return _this.appConfig;
        });
        return this._getConfig;
    };
    SystemService.prototype.setUserLang = function (lang) {
        localStorage.setItem('userLang', lang);
    };
    SystemService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    SystemService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], SystemService);
    return SystemService;
}());



/***/ }),

/***/ "./src/app/shared/services/testimonial.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/testimonial.service.ts ***!
  \********************************************************/
/*! exports provided: TestimonialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialService", function() { return TestimonialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);




var TestimonialService = /** @class */ (function () {
    function TestimonialService(restangular) {
        this.restangular = restangular;
    }
    TestimonialService.prototype.search = function (params) {
        return this.restangular.one('testimonials').get(params).toPromise();
    };
    TestimonialService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    TestimonialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], TestimonialService);
    return TestimonialService;
}());



/***/ }),

/***/ "./src/app/shared/services/topic.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/topic.service.ts ***!
  \**************************************************/
/*! exports provided: TopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return TopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var TopicService = /** @class */ (function () {
    function TopicService(restangular) {
        this.restangular = restangular;
        this.topics = null;
    }
    TopicService.prototype.getTopics = function (params) {
        var _this = this;
        if (this.topics) {
            return Promise.resolve(this.topics);
        }
        if (this._getTopics && typeof this._getTopics.then === 'function') {
            return this._getTopics;
        }
        this._getTopics = this.restangular
            .one('topics')
            .get(params)
            .toPromise()
            .then(function (resp) {
            _this.topics = resp;
            return _this.topics;
        });
        return this._getTopics;
    };
    TopicService.prototype.search = function (params) {
        return this.restangular.one('topics').get(params).toPromise();
    };
    TopicService.prototype.findOne = function (id) {
        return this.restangular.one('topics', id).get().toPromise();
    };
    TopicService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    TopicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], TopicService);
    return TopicService;
}());



/***/ }),

/***/ "./src/app/shared/services/utils.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/utils.service.ts ***!
  \**************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



var UtilService = /** @class */ (function () {
    function UtilService() {
        this.appLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.appLoading$ = this.appLoading.asObservable();
        this.eventChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.eventChanged$ = this.eventChange.asObservable();
    }
    UtilService.prototype.setLoading = function (loading) {
        this.appLoading.next(loading);
    };
    UtilService.prototype.notifyEvent = function (name, value) {
        this.eventChange.next({
            name: name,
            value: value
        });
    };
    UtilService.ctorParameters = function () { return []; };
    UtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/shared/services/webinar.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/webinar.service.ts ***!
  \****************************************************/
/*! exports provided: WebinarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebinarService", function() { return WebinarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var WebinarService = /** @class */ (function () {
    function WebinarService(restangular) {
        this.restangular = restangular;
    }
    WebinarService.prototype.create = function (params) {
        return this.restangular.all('webinars').post(params).toPromise();
    };
    WebinarService.prototype.search = function (params) {
        return this.restangular.one('webinars').get(params).toPromise();
    };
    WebinarService.prototype.findOne = function (id) {
        return this.restangular.one('webinars', id).get().toPromise();
    };
    WebinarService.prototype.update = function (id, data) {
        return this.restangular.one('webinars', id).customPUT(data).toPromise();
    };
    WebinarService.prototype.delete = function (id) {
        return this.restangular.one('webinars', id).customDELETE().toPromise();
    };
    WebinarService.prototype.checkUsedCoupon = function (params) {
        return this.restangular.all('coupons/check-used-coupon').post(params).toPromise();
    };
    WebinarService.prototype.findSingleCoupon = function (id, params) {
        return this.restangular.one('coupons', id).get(params).toPromise();
    };
    WebinarService.prototype.changeStatus = function (id) {
        return this.restangular.one('webinar', id).one('change-status').customPUT().toPromise();
    };
    WebinarService.prototype.getLatest = function (id) {
        return this.restangular.one("webinars/" + id + "/latest").get().toPromise();
    };
    WebinarService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    WebinarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], WebinarService);
    return WebinarService;
}());



/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/shared/services/index.ts");





var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document, utilService) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.utilService = utilService;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                if (_this.router.url.indexOf('#webinar') === -1 && _this.router.url.indexOf('#review') === -1) {
                    $('html, body').animate({ scrollTop: 0 });
                }
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
        this.loadingSubscription = utilService.appLoading$.subscribe(function (loading) { return (_this.isSpinnerVisible = loading); });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
        this.loadingSubscription.unsubscribe();
    };
    SpinnerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
    ]; };
    SpinnerComponent.propDecorators = {
        backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    SpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"spinner\">\n      <div class=\"double-bounce1\"></div>\n      <div class=\"double-bounce2\"></div>\n    </div>\n  </div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Document, _services__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/tutor/services/tutor.service.ts":
/*!*************************************************!*\
  !*** ./src/app/tutor/services/tutor.service.ts ***!
  \*************************************************/
/*! exports provided: TutorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorService", function() { return TutorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var TutorService = /** @class */ (function () {
    function TutorService(restangular) {
        this.restangular = restangular;
    }
    TutorService.prototype.search = function (params) {
        return this.restangular.one('tutors').get(params).toPromise();
    };
    TutorService.prototype.findOne = function (id) {
        return this.restangular.one('tutors', id).get().toPromise();
    };
    TutorService.prototype.update = function (data) {
        return this.restangular.one('tutors').customPUT(data).toPromise();
    };
    TutorService.prototype.createCertificate = function (data) {
        return this.restangular.all('certificates').customPOST(data).toPromise();
    };
    TutorService.prototype.updateCertificate = function (id, data) {
        return this.restangular.one('certificates', id).customPUT(data).toPromise();
    };
    TutorService.prototype.deleteCertificate = function (id) {
        return this.restangular.one('certificates', id).customDELETE().toPromise();
    };
    TutorService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    TutorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], TutorService);
    return TutorService;
}());



/***/ }),

/***/ "./src/app/user/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var UserService = /** @class */ (function () {
    function UserService(restangular) {
        this.restangular = restangular;
    }
    UserService.prototype.me = function () {
        return this.restangular.one('users', 'me').get().toPromise();
    };
    UserService.prototype.updateMe = function (data) {
        return this.restangular.all('users').customPUT(data).toPromise();
    };
    UserService.prototype.findOne = function (id) {
        return this.restangular.one('users', id).get().toPromise();
    };
    UserService.prototype.update = function (data) {
        return this.restangular.one('users').customPUT(data).toPromise();
    };
    UserService.prototype.inviteFriend = function (params) {
        return this.restangular.all('newsletter/invite-friend').post(params).toPromise();
    };
    UserService.prototype.deleteAvatar = function () {
        return this.restangular.one('users/avatar/delete').customDELETE().toPromise();
    };
    UserService.prototype.changeEmail = function (id, data) {
        return this.restangular.one('users', id).one('change-email').customPUT(data).toPromise();
    };
    UserService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/utils/components/appointment-status.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/utils/components/appointment-status.component.ts ***!
  \******************************************************************/
/*! exports provided: AppointmentStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentStatusComponent", function() { return AppointmentStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var AppointmentStatusComponent = /** @class */ (function () {
    function AppointmentStatusComponent() {
    }
    AppointmentStatusComponent.ctorParameters = function () { return []; };
    AppointmentStatusComponent.propDecorators = {
        status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    AppointmentStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointment-status',
            template: "<span class=\"label label-light-primary\" *ngIf=\"status === 'booked'\" translate>Booked</span>\n    <span class=\"label label-light-warning\" *ngIf=\"status === 'pending'\" translate>Pending</span>\n    <span class=\"label label-light-danger\" *ngIf=\"status === 'canceled'\" translate>Canceled</span>\n    <span class=\"label label-light-primary\" *ngIf=\"status === 'progressing'\" translate>In Progress</span>\n    <span class=\"label label-light-primary\" *ngIf=\"status === 'completed'\" translate>Completed</span>\n    <span class=\"label label-light-dark\" *ngIf=\"status === 'not-start'\" translate>Didn't start</span>"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AppointmentStatusComponent);
    return AppointmentStatusComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/breadcrumb/breadcrumb.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/utils/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this
            .router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            _this.pageInfo = event;
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
    ]; };
    BreadcrumbComponent.propDecorators = {
        layout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    BreadcrumbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'breadcrumb',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/breadcrumb/breadcrumb.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/card-text.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/utils/components/card-text.component.ts ***!
  \*********************************************************/
/*! exports provided: CardTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTextComponent", function() { return CardTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var CardTextComponent = /** @class */ (function () {
    function CardTextComponent() {
        this.content = '';
        this.showChar = 500;
        this.showMore = false;
        this.oldShowChar = 0;
    }
    CardTextComponent.prototype.ngOnInit = function () {
        this.oldShowChar = this.showChar;
        if (this.content && this.content.length > this.showChar) {
            this.showMore = true;
        }
    };
    CardTextComponent.prototype.show = function (char) {
        this.showChar = char;
    };
    CardTextComponent.ctorParameters = function () { return []; };
    CardTextComponent.propDecorators = {
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        showChar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    CardTextComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-text',
            template: "\n    <div class=\"ql-container ql-core app-card-text\" style=\"border-width: 0; height: auto\">\n      <div class=\"ql-editor\" [innerHTML]=\"content | ellipsis: showChar\" [hidden]=\"!showChar\"></div>\n      <div class=\"ql-editor\" [innerHTML]=\"content\" [hidden]=\"showChar\"></div>\n      <a href=\"javascript:void(0)\" class=\"morelink\" *ngIf=\"showMore && showChar > 0\" (click)=\"show(0)\"\n        ><span translate>Read More</span>...</a\n      >\n      <a href=\"javascript:void(0)\" class=\"morelink\" *ngIf=\"showMore && !showChar\" (click)=\"show(oldShowChar)\"\n        >...<span translate>Read Less</span></a\n      >\n    </div>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CardTextComponent);
    return CardTextComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/coupon/apply-coupon/apply.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/utils/components/coupon/apply-coupon/apply.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApplyCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyCouponComponent", function() { return ApplyCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





var ApplyCouponComponent = /** @class */ (function () {
    function ApplyCouponComponent(couponService, translate, toasty, authService) {
        this.couponService = couponService;
        this.translate = translate;
        this.toasty = toasty;
        this.authService = authService;
        this.options = {
            couponId: '',
            webinarId: '',
            tutorId: '',
            courseId: '',
            targetType: '',
            topicId: ''
        };
        this.onApply = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isUsed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usedCoupon = false;
        this.couponCode = '';
        this.appliedCoupon = false;
    }
    ApplyCouponComponent.prototype.ngOnInit = function () {
        if (this.options.couponId) {
            this.checkUsedCoupon(this.options.couponId);
        }
    };
    ApplyCouponComponent.prototype.checkUsedCoupon = function (params) {
        var _this = this;
        this.couponService.checkUsedCoupon(params).then(function (resp) {
            _this.usedCoupon = resp.data.used;
            _this.isUsed.emit(_this.usedCoupon);
        });
    };
    ApplyCouponComponent.prototype.applyCoupon = function () {
        var _this = this;
        if (!this.authService.isLoggedin()) {
            this.onApply.emit({ appliedCoupon: this.appliedCoupon, code: this.couponCode });
            return this.toasty.error(this.translate.instant('Please login to use the coupon!'));
        }
        if (!this.options.topicId && this.options.targetType === 'subject') {
            return this.toasty.error(this.translate.instant('Please choose category, subject and topic first!'));
        }
        if (this.appliedCoupon) {
            this.appliedCoupon = !this.appliedCoupon;
            return this.onApply.emit({ appliedCoupon: this.appliedCoupon, code: this.couponCode });
        }
        if (!this.couponCode) {
            this.onApply.emit({ appliedCoupon: this.appliedCoupon, code: this.couponCode });
            return this.toasty.error(this.translate.instant('Please enter coupon code!'));
        }
        if (this.options.couponId && !this.appliedCoupon) {
            this.couponService
                .applyCoupon({
                code: this.couponCode || '',
                targetType: this.options.targetType,
                webinarId: this.options.webinarId || '',
                tutorId: this.options.tutorId || '',
                courseId: this.options.courseId || ''
            })
                .then(function (resp) {
                if (resp.data && resp.data.canApply) {
                    _this.appliedCoupon = true;
                    _this.onApply.emit({ appliedCoupon: _this.appliedCoupon, code: _this.couponCode });
                    return _this.toasty.success(_this.translate.instant('Applied coupon'));
                }
                _this.onApply.emit({ appliedCoupon: _this.appliedCoupon, code: _this.couponCode });
                _this.toasty.error(_this.translate.instant('Coupon code not available!'));
            })
                .catch(function (err) {
                _this.onApply.emit({ appliedCoupon: _this.appliedCoupon, code: _this.couponCode });
                _this.toasty.error(_this.translate.instant('Coupon code not available!'));
            });
        }
        else {
            this.appliedCoupon = false;
            this.onApply.emit({ appliedCoupon: this.appliedCoupon, code: this.couponCode });
        }
    };
    ApplyCouponComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["CouponService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    ApplyCouponComponent.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onApply: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        isUsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    ApplyCouponComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apply-coupon',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./apply.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/coupon/apply-coupon/apply.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_2__["CouponService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ApplyCouponComponent);
    return ApplyCouponComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/coupon/coupon-form/coupon.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/utils/components/coupon/coupon-form/coupon.component.ts ***!
  \*************************************************************************/
/*! exports provided: CouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponComponent", function() { return CouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








var CouponComponent = /** @class */ (function () {
    function CouponComponent(router, route, toasty, authService, couponService, translate) {
        this.router = router;
        this.route = route;
        this.toasty = toasty;
        this.authService = authService;
        this.couponService = couponService;
        this.translate = translate;
        this.coupon = {
            name: '',
            code: '',
            type: 'percent',
            value: 0,
            webinarId: null,
            tutorId: '',
            expiredDate: '',
            active: true,
            startTime: '',
            limitNumberOfUse: 0,
            targetType: ''
        };
        this.time = {
            startTime: {
                year: 0,
                month: 0,
                day: 0
            },
            expiredDate: {
                year: 0,
                month: 0,
                day: 0
            }
        };
        this.isSubmitted = false;
    }
    CouponComponent.prototype.ngOnInit = function () {
        if (this.tutor && this.tutor._id) {
            this.coupon.tutorId = this.tutor._id;
        }
        if (this.webinar && this.webinar._id) {
            this.coupon.webinarId = this.webinar._id;
        }
        if (this.targetType) {
            this.coupon.targetType = this.targetType;
            this.getCurrentCoupon();
        }
    };
    CouponComponent.prototype.getCurrentCoupon = function () {
        var _this = this;
        this.couponService
            .getCurrentCoupon({
            targetType: this.targetType,
            webinarId: this.coupon.webinarId || '',
            tutorId: this.coupon.tutorId || ''
        })
            .then(function (resp) {
            if (resp && resp.data) {
                _this.coupon = resp.data;
                var startTime = new Date(_this.coupon.startTime);
                var expiredDate = new Date(_this.coupon.expiredDate);
                _this.time.startTime = {
                    year: startTime.getFullYear(),
                    month: startTime.getMonth() === 0 ? 12 : startTime.getMonth() + 1,
                    day: startTime.getDate()
                };
                _this.time.expiredDate = {
                    year: expiredDate.getFullYear(),
                    month: expiredDate.getMonth() === 0 ? 12 : expiredDate.getMonth() + 1,
                    day: expiredDate.getDate()
                };
            }
        });
    };
    CouponComponent.prototype.selectDate = function (event, field) {
        var date = event.year + "-" + event.month + "-" + event.day;
        if (moment__WEBPACK_IMPORTED_MODULE_5__(date, 'YYYY/MM/DD')
            .add(30, 'second')
            .utc()
            .isBefore(moment__WEBPACK_IMPORTED_MODULE_5__().set('hour', 0).set('minute', 0).set('second', 0))) {
            this.time[field] = {
                year: 0,
                month: 0,
                day: 0
            };
            this.coupon[field] = '';
            return this.toasty.error(this.translate.instant('Please select an expiration date greater than or equal to the current date'));
        }
        this.coupon[field] = new Date(event.year, event.month - 1, event.day).toString();
        if (this.coupon.startTime &&
            this.coupon.expiredDate &&
            moment__WEBPACK_IMPORTED_MODULE_5__(this.coupon.startTime).isSameOrAfter(moment__WEBPACK_IMPORTED_MODULE_5__(this.coupon.expiredDate))) {
            this.time.expiredDate = {
                year: 0,
                month: 0,
                day: 0
            };
            this.coupon.expiredDate = '';
            return this.toasty.error(this.translate.instant('The expiration date must be greater than the start date'));
        }
        else {
            this.coupon.expiredDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.coupon.expiredDate)
                .set('hour', 23)
                .set('minute', 59)
                .set('second', 59)
                .toDate();
        }
    };
    CouponComponent.prototype.submit = function (frm) {
        var _this = this;
        this.isSubmitted = true;
        if (!frm.valid || !this.coupon.startTime || !this.coupon.expiredDate) {
            return this.toasty.error(this.translate.instant('Invalid form, please try again.'));
        }
        if (!this.coupon._id) {
            this.couponService.create(this.coupon).then(function (resp) {
                _this.coupon = resp.data;
                _this.toasty.success(_this.translate.instant('Coupon has been created'));
            }, function (err) { return _this.toasty.error(_this.translate.instant(err.data.message || 'Something went wrong!')); });
        }
        else {
            var data = lodash__WEBPACK_IMPORTED_MODULE_6__["pick"](this.coupon, [
                'name',
                'code',
                'type',
                'value',
                'expiredDate',
                'tutorId',
                'webinarId',
                'active',
                'startTime',
                'limitNumberOfUse',
                'targetType'
            ]);
            this.couponService.update(this.coupon._id, data).then(function () {
                _this.toasty.success(_this.translate.instant('Coupon has been updated'));
            }, function (err) { return _this.toasty.error(_this.translate.instant(err.data.message || 'Something went wrong!')); });
        }
    };
    CouponComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__["CouponService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
    ]; };
    CouponComponent.propDecorators = {
        tutor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        webinar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        targetType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        coupon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    CouponComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coupon',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coupon-form.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/coupon/coupon-form/coupon-form.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["CouponService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], CouponComponent);
    return CouponComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/date-range/date-range.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/utils/components/date-range/date-range.component.ts ***!
  \*********************************************************************/
/*! exports provided: DateRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangeComponent", function() { return DateRangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var DateRangeComponent = /** @class */ (function () {
    function DateRangeComponent(calendar) {
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isShow = false;
        this.dateRange = {};
        this.outsideDays = 'visible';
        this.showDates = '';
        this.fromDate = calendar.getToday();
    }
    DateRangeComponent.prototype.toggle = function () {
        this.isShow = !this.isShow;
    };
    DateRangeComponent.prototype.onDateSelection = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
        if (this.fromDate && this.toDate) {
            this.startDate = this.fromDate.day + "-" + this.fromDate.month + "-" + this.fromDate.year;
            this.endDate = this.toDate.day + "-" + this.toDate.month + "-" + this.toDate.year;
            this.showDates = this.startDate + " to " + this.endDate;
            this.dateRange = {
                from: moment__WEBPACK_IMPORTED_MODULE_3__(new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day))
                    .startOf('day')
                    .toDate()
                    .toISOString(),
                to: moment__WEBPACK_IMPORTED_MODULE_3__(new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day))
                    .endOf('day')
                    .toDate()
                    .toISOString()
            };
            this.dateChange.emit(this.dateRange);
            this.isShow = false;
        }
    };
    DateRangeComponent.prototype.isHovered = function (date) {
        return (this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate));
    };
    DateRangeComponent.prototype.isInside = function (date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    };
    DateRangeComponent.prototype.isRange = function (date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    };
    DateRangeComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"] }
    ]; };
    DateRangeComponent.propDecorators = {
        dateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    DateRangeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'date-range',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./date-range.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/date-range/date-range.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"]])
    ], DateRangeComponent);
    return DateRangeComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/ellipsis.component.ts":
/*!********************************************************!*\
  !*** ./src/app/utils/components/ellipsis.component.ts ***!
  \********************************************************/
/*! exports provided: TextEllipsisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEllipsisComponent", function() { return TextEllipsisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var TextEllipsisComponent = /** @class */ (function () {
    function TextEllipsisComponent() {
        this.content = '';
        this.showChar = 50;
        this.path = '';
        this.param = '';
    }
    TextEllipsisComponent.prototype.ngOnInit = function () {
        var showChar = this.showChar;
        if (this.content) {
            (function ($) {
                $(document).ready(function () {
                    //   const showChar = showChar; // How many characters are shown by default
                    var ellipsestext = '...';
                    var content = '';
                    $('.more').each(function () {
                        content = $(this).text();
                        if (content.length > showChar) {
                            var c = content.substr(0, showChar);
                            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span>' + "</span>&nbsp;&nbsp;" + '</span>';
                            $(this).html(html);
                        }
                        else {
                            var html = content + '<span class="moreellipses">' + '&nbsp;</span>' + "</span>&nbsp;&nbsp;" + '</span>';
                            $(this).html(html);
                        }
                    });
                });
            })(jQuery);
        }
    };
    TextEllipsisComponent.ctorParameters = function () { return []; };
    TextEllipsisComponent.propDecorators = {
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        showChar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        param: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    TextEllipsisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-ellipsis',
            template: "<div class=\"card-text\" *ngIf=\"content\">\n    <p class=\"more\" [innerHTML]=\"content\"></p>\n    <a [routerLink]=\"[path, param]\" class=\"morelink\"><span translate>Read more</span>...</a>\n  </div>"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TextEllipsisComponent);
    return TextEllipsisComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/utils/components/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






var FooterComponent = /** @class */ (function () {
    function FooterComponent(router, translate, route, authService, toastService) {
        this.router = router;
        this.translate = translate;
        this.route = route;
        this.authService = authService;
        this.toastService = toastService;
        this.subjects = [];
        this.posts = [];
        this.config = {};
        this.textButton = 'Register';
        this.isLoggedin = false;
        this.appConfig = window.appConfig;
        var subjects = this.route.snapshot.data['subjects'];
        this.subjects = subjects;
        var posts = this.route.snapshot.data['posts'];
        this.posts = posts;
        this.config = this.route.snapshot.data['appConfig'];
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.isLoggedin = this.authService.isLoggedin();
    };
    FooterComponent.prototype.register = function () {
        if (!this.isLoggedin) {
            this.router.navigate(['/auth/sign-up']);
        }
        else {
            if (window.confirm(this.translate.instant('Do you want to log out?'))) {
                this.authService.removeToken();
                this.router.navigate(['/auth/sign-up']);
            }
        }
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/footer/footer.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/utils/components/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, route, utilService, systemService, translate) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.utilService = utilService;
        this.systemService = systemService;
        this.translate = translate;
        this.isHome = false;
        this.isOpenedMenu = false;
        this.languages = [];
        this.flag = "/assets/images/flags/en.svg";
        this.isLoaded = false;
        this.userLoadedSubscription = authService.userLoaded$.subscribe(function (data) { return (_this.currentUser = data); });
        this.observableSubscription = this.utilService.eventChanged$.subscribe(function (data) {
            if (data.name === 'profileUpdate') {
                _this.currentUser = data.value;
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__(window).scroll(function () {
            var scroll = jquery__WEBPACK_IMPORTED_MODULE_5__(window).scrollTop();
            if (scroll >= 50) {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.header').addClass('scroll');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.header').removeClass('scroll');
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isLoggedin()) {
            this.authService.getCurrentUser().then(function (resp) { return (_this.currentUser = resp); });
        }
        this.appConfig = this.route.snapshot.data.appConfig;
        this.isHome = this.router.url === '/';
        this.systemService.configs().then(function (resp) {
            _this.isLoaded = true;
            _this.languages = resp.i18n.languages;
            _this.userLang = resp.userLang;
            _this.languages.map(function (item) {
                if (item.key === _this.userLang)
                    _this.flag = item.flag;
            });
            _this.appConfig = resp;
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.userLoadedSubscription.unsubscribe();
        this.observableSubscription.unsubscribe();
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.removeToken();
        // this.router.navigate(['/auth/login']);
        window.location.href = '/';
    };
    HeaderComponent.prototype.changeLang = function (lang) {
        this.flag = lang.flag;
        this.userLang = lang.key;
        this.systemService.setUserLang(this.userLang);
        this.translate.use(this.userLang);
    };
    HeaderComponent.prototype.login = function () {
        if (localStorage.getItem('currentUrl')) {
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: localStorage.getItem('currentUrl') } });
            localStorage.removeItem('currentUrl');
        }
        else
            this.router.navigate(['/auth/login']);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["SystemService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/header/header.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_2__["SystemService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/index.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/components/index.ts ***!
  \*******************************************/
/*! exports provided: BreadcrumbComponent, ApplyCouponComponent, CouponComponent, DateRangeComponent, FooterComponent, HeaderComponent, LectureItemComponent, ModalSignupComponent, ButtonSignupComponent, NewsleterComponent, SearchBarComponent, SidebarComponent, SortComponent, TableComponent, UserLeftMenuComponent, AppointmentStatusComponent, StatusComponent, TimezoneComponent, TextEllipsisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/utils/components/breadcrumb/breadcrumb.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbComponent"]; });

/* harmony import */ var _coupon_apply_coupon_apply_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coupon/apply-coupon/apply.component */ "./src/app/utils/components/coupon/apply-coupon/apply.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplyCouponComponent", function() { return _coupon_apply_coupon_apply_component__WEBPACK_IMPORTED_MODULE_1__["ApplyCouponComponent"]; });

/* harmony import */ var _coupon_coupon_form_coupon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon/coupon-form/coupon.component */ "./src/app/utils/components/coupon/coupon-form/coupon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CouponComponent", function() { return _coupon_coupon_form_coupon_component__WEBPACK_IMPORTED_MODULE_2__["CouponComponent"]; });

/* harmony import */ var _date_range_date_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-range/date-range.component */ "./src/app/utils/components/date-range/date-range.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateRangeComponent", function() { return _date_range_date_range_component__WEBPACK_IMPORTED_MODULE_3__["DateRangeComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/utils/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/utils/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]; });

/* harmony import */ var _lecture_item_lecture_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lecture-item/lecture-item.component */ "./src/app/utils/components/lecture-item/lecture-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LectureItemComponent", function() { return _lecture_item_lecture_item_component__WEBPACK_IMPORTED_MODULE_6__["LectureItemComponent"]; });

/* harmony import */ var _modal_signup_modal_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-signup/modal-signup.component */ "./src/app/utils/components/modal-signup/modal-signup.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalSignupComponent", function() { return _modal_signup_modal_signup_component__WEBPACK_IMPORTED_MODULE_7__["ModalSignupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonSignupComponent", function() { return _modal_signup_modal_signup_component__WEBPACK_IMPORTED_MODULE_7__["ButtonSignupComponent"]; });

/* harmony import */ var _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newsletter/newsletter.component */ "./src/app/utils/components/newsletter/newsletter.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsleterComponent", function() { return _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_8__["NewsleterComponent"]; });

/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/utils/components/search-bar/search-bar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_9__["SearchBarComponent"]; });

/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/utils/components/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]; });

/* harmony import */ var _sort_sort_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort/sort.component */ "./src/app/utils/components/sort/sort.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortComponent", function() { return _sort_sort_component__WEBPACK_IMPORTED_MODULE_11__["SortComponent"]; });

/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table/table.component */ "./src/app/utils/components/table/table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return _table_table_component__WEBPACK_IMPORTED_MODULE_12__["TableComponent"]; });

/* harmony import */ var _user_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-left-menu/left-menu.component */ "./src/app/utils/components/user-left-menu/left-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLeftMenuComponent", function() { return _user_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_13__["UserLeftMenuComponent"]; });

/* harmony import */ var _appointment_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./appointment-status.component */ "./src/app/utils/components/appointment-status.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppointmentStatusComponent", function() { return _appointment_status_component__WEBPACK_IMPORTED_MODULE_14__["AppointmentStatusComponent"]; });

/* harmony import */ var _status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./status.component */ "./src/app/utils/components/status.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return _status_component__WEBPACK_IMPORTED_MODULE_15__["StatusComponent"]; });

/* harmony import */ var _timezone_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./timezone.component */ "./src/app/utils/components/timezone.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimezoneComponent", function() { return _timezone_component__WEBPACK_IMPORTED_MODULE_16__["TimezoneComponent"]; });

/* harmony import */ var _ellipsis_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ellipsis.component */ "./src/app/utils/components/ellipsis.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextEllipsisComponent", function() { return _ellipsis_component__WEBPACK_IMPORTED_MODULE_17__["TextEllipsisComponent"]; });





















/***/ }),

/***/ "./src/app/utils/components/lecture-item/lecture-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/utils/components/lecture-item/lecture-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: LectureItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureItemComponent", function() { return LectureItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");



var LectureItemComponent = /** @class */ (function () {
    function LectureItemComponent(toasty) {
        this.toasty = toasty;
        this.lecture = {};
        this.isEdit = false;
        this.paid = false;
    }
    LectureItemComponent.prototype.ngOnInit = function () { };
    LectureItemComponent.prototype.edit = function () { };
    LectureItemComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    LectureItemComponent.propDecorators = {
        lecture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        paid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    LectureItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lecture-item',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lecture-item.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/lecture-item/lecture-item.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], LectureItemComponent);
    return LectureItemComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/modal-signup/modal-signup.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/utils/components/modal-signup/modal-signup.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModalSignupComponent, ButtonSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSignupComponent", function() { return ModalSignupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSignupComponent", function() { return ButtonSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");






var ModalSignupComponent = /** @class */ (function () {
    function ModalSignupComponent(auth, router, toasty, activeModal, route) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.toasty = toasty;
        this.activeModal = activeModal;
        this.route = route;
        this.account = {
            email: '',
            password: '',
            name: '',
            type: ''
        };
        this.accountTutor = {
            email: '',
            password: '',
            name: '',
            issueDocument: '',
            resumeDocument: '',
            certificationDocument: ''
        };
        this.confirm = {
            pw: ''
        };
        this.isMath = false;
        this.submitted = false;
        this.idDocumentOptions = {};
        this.resumeOptions = {};
        this.certificationOptions = {};
        this.idDocumentOptions = {
            url: window.appConfig.apiBaseUrl + '/tutors/upload-document',
            onCompleteItem: function (resp) {
                // if (resp.code && resp.code !== 200) {
                //   this.idDocumentOptions.uploader.clearQueue();
                //   return this.toasty.error(resp.message);
                // }
                // this.toasty.success('Your account has been created, please verify your email then login');
                // this.router.navigate(['/auth/login']);
                _this.accountTutor.issueDocument = resp.data._id;
            },
            onFileSelect: function (resp) {
                var lastIndex = resp.length - 1;
                var file = resp[lastIndex].file;
                var ext = file.name.split('.').pop().toLowerCase();
                if (['pdf', 'doc', 'docx', 'zip', 'rar', 'jpg', 'jpeg', 'png'].indexOf(ext) === -1) {
                    _this.idDocumentOptions.uploader.clearQueue();
                    return _this.toasty.error('Invalid file type');
                }
                _this.idDocumentFile = file;
            },
            // customFields: this.accountTutor,
            uploadOnSelect: true,
            id: 'id-document'
        };
        this.resumeOptions = {
            url: window.appConfig.apiBaseUrl + '/tutors/upload-document',
            onCompleteItem: function (resp) {
                _this.accountTutor.resumeDocument = resp.data._id;
            },
            onFileSelect: function (resp) {
                var lastIndex = resp.length - 1;
                var file = resp[lastIndex].file;
                var ext = file.name.split('.').pop().toLowerCase();
                if (['pdf'].indexOf(ext) === -1) {
                    _this.resumeOptions.uploader.clearQueue();
                    return _this.toasty.error('Invalid file type');
                }
                _this.resumeFile = file;
            },
            uploadOnSelect: true,
            id: 'id-resume'
        };
        this.certificationOptions = {
            url: window.appConfig.apiBaseUrl + '/tutors/upload-document',
            onCompleteItem: function (resp) {
                _this.accountTutor.certificationDocument = resp.data._id;
            },
            onFileSelect: function (resp) {
                var lastIndex = resp.length - 1;
                var file = resp[lastIndex].file;
                var ext = file.name.split('.').pop().toLowerCase();
                if (['pdf'].indexOf(ext) === -1) {
                    _this.certificationOptions.uploader.clearQueue();
                    return _this.toasty.error('Invalid file type');
                }
                _this.certificationFile = file;
            },
            uploadOnSelect: true,
            id: 'id-verification'
        };
        this.appConfig = this.route.snapshot.data.appConfig;
    }
    ModalSignupComponent.prototype.onlyNumberKey = function (event) {
        return event.charCode === 8 || event.charCode === 0 ? null : event.charCode >= 48 && event.charCode <= 57;
    };
    ModalSignupComponent.prototype.submit = function (frm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.submitted = true;
                if (frm.invalid) {
                    return [2 /*return*/];
                }
                if (this.account.password !== this.confirm.pw) {
                    this.isMath = true;
                    return [2 /*return*/, this.toasty.error('Confirm password and Password dont match')];
                }
                if (this.account.type === '') {
                    return [2 /*return*/, this.toasty.error('Please select type')];
                }
                if (this.account.type === 'tutor') {
                    this.accountTutor.name = this.account.name;
                    this.accountTutor.email = this.account.email;
                    this.accountTutor.password = this.account.password;
                    if (!this.accountTutor.issueDocument ||
                        !this.accountTutor.resumeDocument ||
                        !this.accountTutor.certificationDocument) {
                        return [2 /*return*/, this.toasty.error('Please upload all documents')];
                    }
                    return [2 /*return*/, this.auth
                            .registerTutor(this.accountTutor)
                            .then(function (resp) {
                            _this.activeModal.close();
                            _this.toasty.success('Your account has been created, please verify your email then login');
                            _this.router.navigate(['/auth/login']);
                        })
                            .catch(function (err) { return _this.toasty.error(err.data.message); })];
                }
                this.auth
                    .register(this.account)
                    .then(function (resp) {
                    _this.activeModal.close();
                    _this.toasty.success('Your account has been created, please verify your email then login');
                    _this.router.navigate(['/auth/login']);
                })
                    .catch(function (err) { return _this.toasty.error(err.data.data.message); });
                return [2 /*return*/];
            });
        });
    };
    ModalSignupComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ModalSignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/modal-signup/modal-signup.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ModalSignupComponent);
    return ModalSignupComponent;
}());

var ButtonSignupComponent = /** @class */ (function () {
    function ButtonSignupComponent(modalService) {
        this.modalService = modalService;
        this.text = '';
        this.afterCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ButtonSignupComponent.prototype.open = function () {
        var _this = this;
        var modalRef = this.modalService.open(ModalSignupComponent, {
            centered: true,
            backdrop: 'static',
            keyboard: false,
            size: 'lg'
        });
        modalRef.result.then(function (res) {
            _this.afterCancel.emit(res);
        }, function () { });
    };
    ButtonSignupComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    ButtonSignupComponent.propDecorators = {
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        afterCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    ButtonSignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'button-signup-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./button.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/modal-signup/button.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ButtonSignupComponent);
    return ButtonSignupComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/newsletter/newsletter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/utils/components/newsletter/newsletter.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewsleterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsleterComponent", function() { return NewsleterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_newsletter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/newsletter.service */ "./src/app/utils/services/newsletter.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





var NewsleterComponent = /** @class */ (function () {
    function NewsleterComponent(service, toasty, translate) {
        this.service = service;
        this.toasty = toasty;
        this.translate = translate;
        this.submitted = false;
        this.info = {
            email: ''
        };
    }
    NewsleterComponent.prototype.submit = function (frm) {
        var _this = this;
        this.submitted = true;
        if (frm.invalid) {
            return;
        }
        this.service
            .register(this.info)
            .then(function (resp) { return _this.toasty.success(_this.translate.instant('Thank you. Your email has been registered.')); })
            .catch(function () { return _this.toasty.error(_this.translate.instant('An error occurred. Please try again!')); });
    };
    NewsleterComponent.ctorParameters = function () { return [
        { type: _services_newsletter_service__WEBPACK_IMPORTED_MODULE_3__["NewsletterService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    NewsleterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'newsletter',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newsletter.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/newsletter/newsletter.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_newsletter_service__WEBPACK_IMPORTED_MODULE_3__["NewsletterService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], NewsleterComponent);
    return NewsleterComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/search-bar/search-bar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/utils/components/search-bar/search-bar.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(router, subjectService, route) {
        var _this = this;
        this.router = router;
        this.subjectService = subjectService;
        this.route = route;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) {
                return term === ''
                    ? []
                    : _this.categories.filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10);
            }));
        };
        this.formatter = function (x) { return x.name; };
        var categories = this.route.snapshot.data['categories'];
        this.categories = categories;
    }
    SearchBarComponent.prototype.ngOnInit = function () { };
    SearchBarComponent.prototype.submit = function () {
        if (!this.categoryId) {
            this.router.navigate(['/tutors']);
        }
        else
            this.router.navigate(['/tutors'], { queryParams: { categoryIds: [this.categoryId] } });
    };
    SearchBarComponent.prototype.keyPress = function (event) {
        if (event.charCode === 13) {
            this.submit();
        }
    };
    SearchBarComponent.prototype.onSelect = function (event) {
        this.categoryId = event.item && event.item.id ? event.item.id : '';
    };
    SearchBarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["SubjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    SearchBarComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    SearchBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'search-bar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-bar.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/search-bar/search-bar.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services__WEBPACK_IMPORTED_MODULE_3__["SubjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/sidebar/sidebar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/utils/components/sidebar/sidebar.component.ts ***!
  \***************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.tree = [];
    }
    // End open close
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.logout = function () {
        this.authService.removeToken();
        this.router.navigate(['/']);
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/sidebar/sidebar.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/sort/sort.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/utils/components/sort/sort.component.ts ***!
  \*********************************************************/
/*! exports provided: SortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortComponent", function() { return SortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var SortComponent = /** @class */ (function () {
    function SortComponent() {
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SortComponent.prototype.ngOnInit = function () { };
    SortComponent.prototype.sort = function (field, type) {
        this.sortOption.sortBy = field;
        this.sortOption.sortType = type;
        this.onSort.emit(this.sortOption);
    };
    SortComponent.ctorParameters = function () { return []; };
    SortComponent.propDecorators = {
        sortOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        sortBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onSort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    SortComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sort',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sort.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/sort/sort.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SortComponent);
    return SortComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/status.component.ts":
/*!******************************************************!*\
  !*** ./src/app/utils/components/status.component.ts ***!
  \******************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
    }
    StatusComponent.ctorParameters = function () { return []; };
    StatusComponent.propDecorators = {
        status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    StatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: "<span class=\"label label-light-primary\" *ngIf=\"status === 'booked'\" translate>Booked</span>\n    <span class=\"label label-light-warning\" *ngIf=\"status === 'pending'\" translate>Pending</span>\n    <span class=\"label label-light-danger\" *ngIf=\"status === 'canceled'\" translate>Canceled</span>\n    <span class=\"label label-light-primary\" *ngIf=\"status === 'progressing'\" translate>In Progress</span>\n    <span class=\"label label-light-primary\" *ngIf=\"status === 'completed'\" translate>Completed</span>\n    <span class=\"label label-light-dark\" *ngIf=\"status === 'not-start'\" translate>Didn't start</span>\n\n    <span class=\"label label-light-primary\" *ngIf=\"status === 'approved'\" translate>Approved</span>\n    <span class=\"label label-light-primary\" *ngIf=\"status === 'refunded'\" translate>Refunded</span>\n    <span class=\"label label-light-danger\" *ngIf=\"status === 'rejected'\" translate>Rejected</span>"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/table/table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/utils/components/table/table.component.ts ***!
  \***********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TableComponent.prototype.ngOnInit = function () { };
    TableComponent.prototype.onSortTable = function (evt) {
        this.onSort.emit(this.sortOption);
    };
    TableComponent.ctorParameters = function () { return []; };
    TableComponent.propDecorators = {
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onSort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        sortOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    TableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./table.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/table/table.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/timezone.component.ts":
/*!********************************************************!*\
  !*** ./src/app/utils/components/timezone.component.ts ***!
  \********************************************************/
/*! exports provided: TimezoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimezoneComponent", function() { return TimezoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-range */ "./node_modules/moment-range/dist/moment-range.js");
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_range__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment_locale_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/locale/fr */ "./node_modules/moment/locale/fr.js");
/* harmony import */ var moment_locale_fr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_locale_fr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/es */ "./node_modules/moment/locale/es.js");
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment_locale_de__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment/locale/de */ "./node_modules/moment/locale/de.js");
/* harmony import */ var moment_locale_de__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_locale_de__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment/locale/en-gb */ "./node_modules/moment/locale/en-gb.js");
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment_locale_ar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment/locale/ar */ "./node_modules/moment/locale/ar.js");
/* harmony import */ var moment_locale_ar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment_locale_ar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment_locale_hi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment/locale/hi */ "./node_modules/moment/locale/hi.js");
/* harmony import */ var moment_locale_hi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_locale_hi__WEBPACK_IMPORTED_MODULE_9__);










var TimezoneComponent = /** @class */ (function () {
    function TimezoneComponent() {
        this.userTz = 'Asia/Ho_Chi_Minh';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tzNames = moment_timezone__WEBPACK_IMPORTED_MODULE_2__["tz"].names();
    }
    TimezoneComponent.prototype.ngOnInit = function () {
        if (!this.userTz) {
            this.userTz = moment_timezone__WEBPACK_IMPORTED_MODULE_2__["tz"].guess();
            if (this.userTz === 'Asia/Calcutta') {
                this.userTz = 'Asia/Kolkata';
            }
            else if (this.userTz === 'Asia/Saigon') {
                this.userTz = 'Asia/Ho_Chi_Minh';
            }
            else {
                this.userTz = this.userTz;
            }
        }
        else {
            this.userTz = this.userTz;
        }
        this.timeZoneChanged(this.userTz);
    };
    TimezoneComponent.prototype.timeZoneChanged = function (timeZone) {
        this.userTz = timeZone;
        this.onChange.emit(this.userTz);
    };
    TimezoneComponent.ctorParameters = function () { return []; };
    TimezoneComponent.propDecorators = {
        userTz: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    TimezoneComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timezone',
            template: "\n    <div>\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <ng-select\n            [items]=\"tzNames\"\n            appendTo=\"body\"\n            name=\"timezone\"\n            [multiple]=\"false\"\n            [closeOnSelect]=\"true\"\n            [(ngModel)]=\"userTz\"\n            #language=\"ngModel\"\n            (ngModelChange)=\"timeZoneChanged($event)\"\n          >\n          </ng-select>\n        </div>\n      </form>\n    </div>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TimezoneComponent);
    return TimezoneComponent;
}());



/***/ }),

/***/ "./src/app/utils/components/user-left-menu/left-menu.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/utils/components/user-left-menu/left-menu.component.ts ***!
  \************************************************************************/
/*! exports provided: UserLeftMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLeftMenuComponent", function() { return UserLeftMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




var UserLeftMenuComponent = /** @class */ (function () {
    function UserLeftMenuComponent(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.type = '';
        this.authService.getCurrentUser().then(function (resp) {
            _this.type = resp.type;
            _this.currentUser = resp;
        });
    }
    UserLeftMenuComponent.prototype.ngAfterViewInit = function () {
        (function ($) {
            $(document).ready(function () {
                // header bottom slider
                var SETTINGS = {
                    navBarTravelling: false,
                    navBarTravelDirection: '',
                    navBarTravelDistance: 150
                };
                var colours = {
                    0: '#e3455a'
                };
                document.documentElement.classList.remove('no-js');
                document.documentElement.classList.add('js');
                // Out advancer buttons
                var pnAdvancerLeft = document.getElementById('pnAdvancerLeft');
                var pnAdvancerRight = document.getElementById('pnAdvancerRight');
                // the indicator
                var pnIndicator = document.getElementById('pnIndicator');
                var pnProductNav = document.getElementById('pnProductNav');
                var pnProductNavContents = document.getElementById('pnProductNavContents');
                pnProductNav.setAttribute('data-overflowing', determineOverflow(pnProductNavContents, pnProductNav));
                // Set the indicator
                // moveIndicator(pnProductNav.querySelector('[aria-selected="true"]'), colours[0]);
                // Handle the scroll of the horizontal container
                var last_known_scroll_position = 0;
                var ticking = false;
                function doSomething(scroll_pos) {
                    pnProductNav.setAttribute('data-overflowing', determineOverflow(pnProductNavContents, pnProductNav));
                }
                pnProductNav.addEventListener('scroll', function () {
                    last_known_scroll_position = window.scrollY;
                    if (!ticking) {
                        window.requestAnimationFrame(function () {
                            doSomething(last_known_scroll_position);
                            ticking = false;
                        });
                    }
                    ticking = true;
                });
                pnAdvancerLeft.addEventListener('click', function () {
                    // If in the middle of a move return
                    if (SETTINGS.navBarTravelling === true) {
                        return;
                    }
                    // If we have content overflowing both sides or on the left
                    if (determineOverflow(pnProductNavContents, pnProductNav) === 'left' ||
                        determineOverflow(pnProductNavContents, pnProductNav) === 'both') {
                        // Find how far this panel has been scrolled
                        var availableScrollLeft = pnProductNav.scrollLeft;
                        // If the space available is less than two lots of our desired distance, just move the whole amount
                        // otherwise, move by the amount in the settings
                        if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
                            pnProductNavContents.style.transform = 'translateX(' + availableScrollLeft + 'px)';
                        }
                        else {
                            pnProductNavContents.style.transform = 'translateX(' + SETTINGS.navBarTravelDistance + 'px)';
                        }
                        // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
                        pnProductNavContents.classList.remove('pn-ProductNav_Contents-no-transition');
                        // Update our settings
                        SETTINGS.navBarTravelDirection = 'left';
                        SETTINGS.navBarTravelling = true;
                    }
                    // Now update the attribute in the DOM
                    pnProductNav.setAttribute('data-overflowing', determineOverflow(pnProductNavContents, pnProductNav));
                });
                pnAdvancerRight.addEventListener('click', function () {
                    // If in the middle of a move return
                    if (SETTINGS.navBarTravelling === true) {
                        return;
                    }
                    // If we have content overflowing both sides or on the right
                    if (determineOverflow(pnProductNavContents, pnProductNav) === 'right' ||
                        determineOverflow(pnProductNavContents, pnProductNav) === 'both') {
                        // Get the right edge of the container and content
                        var navBarRightEdge = pnProductNavContents.getBoundingClientRect().right;
                        var navBarScrollerRightEdge = pnProductNav.getBoundingClientRect().right;
                        // Now we know how much space we have available to scroll
                        var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge);
                        // If the space available is less than two lots of our desired distance, just move the whole amount
                        // otherwise, move by the amount in the settings
                        if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
                            pnProductNavContents.style.transform = 'translateX(-' + availableScrollRight + 'px)';
                        }
                        else {
                            pnProductNavContents.style.transform = 'translateX(-' + SETTINGS.navBarTravelDistance + 'px)';
                        }
                        // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
                        pnProductNavContents.classList.remove('pn-ProductNav_Contents-no-transition');
                        // Update our settings
                        SETTINGS.navBarTravelDirection = 'right';
                        SETTINGS.navBarTravelling = true;
                    }
                    // Now update the attribute in the DOM
                    pnProductNav.setAttribute('data-overflowing', determineOverflow(pnProductNavContents, pnProductNav));
                });
                pnProductNavContents.addEventListener('transitionend', function () {
                    // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
                    var styleOfTransform = window.getComputedStyle(pnProductNavContents, null);
                    var tr = styleOfTransform.getPropertyValue('-webkit-transform') || styleOfTransform.getPropertyValue('transform');
                    // If there is no transition we want to default to 0 and not null
                    var amount = Math.abs(parseInt(tr.split(',')[4]) || 0);
                    pnProductNavContents.style.transform = 'none';
                    pnProductNavContents.classList.add('pn-ProductNav_Contents-no-transition');
                    // Now lets set the scroll position
                    if (SETTINGS.navBarTravelDirection === 'left') {
                        pnProductNav.scrollLeft = pnProductNav.scrollLeft - amount;
                    }
                    else {
                        pnProductNav.scrollLeft = pnProductNav.scrollLeft + amount;
                    }
                    SETTINGS.navBarTravelling = false;
                }, false);
                // Handle setting the currently active link
                // pnProductNavContents.addEventListener('click', function (e) {
                //   const links = [].slice.call(document.querySelectorAll('.pn-ProductNav_Link'));
                //   links.forEach(function (item) {
                //     item.setAttribute('aria-selected', 'false');
                //   });
                //   // e.target.setAttribute('aria-selected', 'true');
                //   // Pass the clicked item and it's colour to the move indicator function
                //   moveIndicator(e.target, colours[links.indexOf(e.target)]);
                // });
                // const count = 0;
                function moveIndicator(item, color) {
                    var textPosition = item.getBoundingClientRect();
                    var container = pnProductNavContents.getBoundingClientRect().left;
                    var distance = textPosition.left - container;
                    var scroll = pnProductNavContents.scrollLeft;
                    pnIndicator.style.transform =
                        'translateX(' + (distance + scroll) + 'px) scaleX(' + textPosition.width * 0.01 + ')';
                    // count = count += 100;
                    // pnIndicator.style.transform = "translateX(" + count + "px)";
                    if (color) {
                        pnIndicator.style.backgroundColor = color;
                    }
                }
                function determineOverflow(content, container) {
                    var containerMetrics = container.getBoundingClientRect();
                    var containerMetricsRight = Math.floor(containerMetrics.right);
                    var containerMetricsLeft = Math.floor(containerMetrics.left);
                    var contentMetrics = content.getBoundingClientRect();
                    var contentMetricsRight = Math.floor(contentMetrics.right);
                    var contentMetricsLeft = Math.floor(contentMetrics.left);
                    if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
                        return 'both';
                    }
                    else if (contentMetricsLeft < containerMetricsLeft) {
                        return 'left';
                    }
                    else if (contentMetricsRight > containerMetricsRight) {
                        return 'right';
                    }
                    else {
                        return 'none';
                    }
                }
            });
        })(jQuery);
    };
    UserLeftMenuComponent.prototype.logout = function () {
        this.authService.removeToken();
        this.router.navigate(['/shop']);
    };
    UserLeftMenuComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    UserLeftMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-left-menu',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./left-menu.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/utils/components/user-left-menu/left-menu.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserLeftMenuComponent);
    return UserLeftMenuComponent;
}());



/***/ }),

/***/ "./src/app/utils/pipes/default-image.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/utils/pipes/default-image.pipe.ts ***!
  \***************************************************/
/*! exports provided: DefaultImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultImagePipe", function() { return DefaultImagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/*
 * show default photo if it is not provided
 */
var DefaultImagePipe = /** @class */ (function () {
    function DefaultImagePipe() {
    }
    DefaultImagePipe.prototype.transform = function (value) {
        if (value) {
            return value;
        }
        return '/assets/images/no-image.jpg';
    };
    DefaultImagePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'defaultImage'
        })
    ], DefaultImagePipe);
    return DefaultImagePipe;
}());



/***/ }),

/***/ "./src/app/utils/pipes/ellipsis.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/utils/pipes/ellipsis.pipe.ts ***!
  \**********************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var EllipsisPipe = /** @class */ (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        if (value && value.length > args) {
            return value.substring(0, args) + '...';
        }
        else {
            return value;
        }
        // if (!args) {
        //   return this.sanitizer.bypassSecurityTrustHtml(value);
        // }
        // if (value && value.length > args) {
        //   return this.sanitizer.bypassSecurityTrustHtml(value.substring(0, args) + '...');
        // } else {
        //   return this.sanitizer.bypassSecurityTrustHtml(value);
        // }
    };
    EllipsisPipe.ctorParameters = function () { return []; };
    EllipsisPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ellipsis'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], EllipsisPipe);
    return EllipsisPipe;
}());



/***/ }),

/***/ "./src/app/utils/pipes/index.ts":
/*!**************************************!*\
  !*** ./src/app/utils/pipes/index.ts ***!
  \**************************************/
/*! exports provided: DefaultImagePipe, EllipsisPipe, DSTFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_image_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-image.pipe */ "./src/app/utils/pipes/default-image.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultImagePipe", function() { return _default_image_pipe__WEBPACK_IMPORTED_MODULE_0__["DefaultImagePipe"]; });

/* harmony import */ var _ellipsis_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ellipsis.pipe */ "./src/app/utils/pipes/ellipsis.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return _ellipsis_pipe__WEBPACK_IMPORTED_MODULE_1__["EllipsisPipe"]; });

/* harmony import */ var _to_dts_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-dts-time.pipe */ "./src/app/utils/pipes/to-dts-time.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DSTFormatPipe", function() { return _to_dts_time_pipe__WEBPACK_IMPORTED_MODULE_2__["DSTFormatPipe"]; });






/***/ }),

/***/ "./src/app/utils/pipes/to-dts-time.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/utils/pipes/to-dts-time.pipe.ts ***!
  \*************************************************/
/*! exports provided: DSTFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DSTFormatPipe", function() { return DSTFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_dts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/dts.service */ "./src/app/shared/services/dts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var DSTFormatPipe = /** @class */ (function () {
    function DSTFormatPipe(dts) {
        this.dts = dts;
        this.userTimeZone = '';
        this.dstTime = '';
    }
    DSTFormatPipe.prototype.transform = function (value) {
        this.userTimeZone = localStorage.getItem('timeZone') || '';
        if (this.userTimeZone && this.dts.isDTS(moment__WEBPACK_IMPORTED_MODULE_3__(value).toDate(), this.userTimeZone)) {
            return this.dts.formatToDST(value).toISOString();
        }
        else
            return value;
    };
    DSTFormatPipe.ctorParameters = function () { return [
        { type: _shared_services_dts_service__WEBPACK_IMPORTED_MODULE_1__["DTSService"] }
    ]; };
    DSTFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'dstFormat'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_dts_service__WEBPACK_IMPORTED_MODULE_1__["DTSService"]])
    ], DSTFormatPipe);
    return DSTFormatPipe;
}());



/***/ }),

/***/ "./src/app/utils/services/newsletter.service.ts":
/*!******************************************************!*\
  !*** ./src/app/utils/services/newsletter.service.ts ***!
  \******************************************************/
/*! exports provided: NewsletterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterService", function() { return NewsletterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var NewsletterService = /** @class */ (function () {
    function NewsletterService(restangular) {
        this.restangular = restangular;
    }
    NewsletterService.prototype.register = function (params) {
        return this.restangular.one('newsletter', 'contact').customPOST(params).toPromise();
    };
    NewsletterService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    NewsletterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], NewsletterService);
    return NewsletterService;
}());



/***/ }),

/***/ "./src/app/utils/utils.module.ts":
/*!***************************************!*\
  !*** ./src/app/utils/utils.module.ts ***!
  \***************************************/
/*! exports provided: UtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsModule", function() { return UtilsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_dts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/services/dts.service */ "./src/app/shared/services/dts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _media_media_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../media/media.module */ "./src/app/media/media.module.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes */ "./src/app/utils/pipes/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _services_newsletter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/newsletter.service */ "./src/app/utils/services/newsletter.service.ts");
/* harmony import */ var _shared_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/resolver */ "./src/app/shared/resolver/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components */ "./src/app/utils/components/index.ts");
/* harmony import */ var _components_card_text_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/card-text.component */ "./src/app/utils/components/card-text.component.ts");
















var UtilsModule = /** @class */ (function () {
    function UtilsModule() {
    }
    UtilsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _media_media_module__WEBPACK_IMPORTED_MODULE_9__["MediaModule"]
            ],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["UserLeftMenuComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["NewsleterComponent"],
                _pipes__WEBPACK_IMPORTED_MODULE_10__["DefaultImagePipe"],
                _components__WEBPACK_IMPORTED_MODULE_14__["SearchBarComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["DateRangeComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["ButtonSignupComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["ModalSignupComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["AppointmentStatusComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["StatusComponent"],
                _pipes__WEBPACK_IMPORTED_MODULE_10__["EllipsisPipe"],
                _components__WEBPACK_IMPORTED_MODULE_14__["SortComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["TimezoneComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["TableComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["CouponComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["ApplyCouponComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["LectureItemComponent"],
                _components_card_text_component__WEBPACK_IMPORTED_MODULE_15__["CardTextComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["TextEllipsisComponent"],
                _pipes__WEBPACK_IMPORTED_MODULE_10__["DSTFormatPipe"]
            ],
            exports: [
                _components__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["UserLeftMenuComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["NewsleterComponent"],
                _pipes__WEBPACK_IMPORTED_MODULE_10__["DefaultImagePipe"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _components__WEBPACK_IMPORTED_MODULE_14__["SearchBarComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["DateRangeComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["ButtonSignupComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["ModalSignupComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["AppointmentStatusComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["StatusComponent"],
                _pipes__WEBPACK_IMPORTED_MODULE_10__["EllipsisPipe"],
                _components__WEBPACK_IMPORTED_MODULE_14__["SortComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["TimezoneComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["TableComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["CouponComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["ApplyCouponComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["LectureItemComponent"],
                _components_card_text_component__WEBPACK_IMPORTED_MODULE_15__["CardTextComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["TextEllipsisComponent"],
                _pipes__WEBPACK_IMPORTED_MODULE_10__["DSTFormatPipe"]
            ],
            providers: [
                _shared_services__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _shared_services__WEBPACK_IMPORTED_MODULE_11__["SubjectService"],
                _shared_services__WEBPACK_IMPORTED_MODULE_11__["PostService"],
                _services_newsletter_service__WEBPACK_IMPORTED_MODULE_12__["NewsletterService"],
                _shared_resolver__WEBPACK_IMPORTED_MODULE_13__["SubjectsResolver"],
                _shared_resolver__WEBPACK_IMPORTED_MODULE_13__["PostsResolver"],
                _shared_services__WEBPACK_IMPORTED_MODULE_11__["CouponService"],
                _shared_services_dts_service__WEBPACK_IMPORTED_MODULE_1__["DTSService"]
            ],
            entryComponents: [_components__WEBPACK_IMPORTED_MODULE_14__["ModalSignupComponent"]]
        })
    ], UtilsModule);
    return UtilsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    version: '0.0.1',
    build: 1,
    showBuild: true,
    maximumFileSize: 1024,
    // apiBaseUrl: 'https://v2-api.livelearn.info/v1',
    // stripeKey: 'pk_test_GAOwgdMyHnXkj9v9HcTCyu7E00kA8x0Oh1',
    // url: 'https://v2.livelearn.info',
    // socketUrl: 'https://v2-api.livelearn.info'
    apiBaseUrl: 'http://localhost:9000/v1',
    stripeKey: 'pk_test_51ICH44Kd3OO2kXBrHboC6do0v3IxAPXeNfvUePcLWQGJ15jsXNe2O26RqhRZ3QnJsIX8cxLs7V9DUFbfPT8hSxoI00wNfKakjw',
    //'pk_test_51IErbaH0PoFKT5sJxiGiLNA8KPwdsmH6e3NXH3Pddha2f0kZziYFJNhlFZt1KrWqmZO4FexV4YhtjjLhM9sj2yvq00PS0nf3Ej',
    url: 'http://localhost:4200',
    socketUrl: 'http://localhost:9000'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
//export version and build number to global
window.appConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
// init data for the app
window.appData = {};
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! W:\my projects\MY TEMPLATES\FREELANCE projects\Bobprep front-end code\frontend-1039\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map