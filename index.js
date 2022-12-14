import _styled from '@emotion/styled/base';
import { jsx } from '@emotion/react/jsx-runtime';
import EditorJS from '@editorjs/editorjs';
import { useState, useMemo, useEffect } from 'react';
import EditorJSHeader from '@editorjs/header';
import EditorJSList from '@editorjs/list';
import EditorJSQuote from '@editorjs/quote';
import EditorJSTable from '@editorjs/table';
import EditorJSImage from '@editorjs/image';
import EditorJSEmbed from '@editorjs/embed';
import EditorJSParagraph from '@editorjs/paragraph';
import EditorJSWarning from '@editorjs/warning';
import EditorJSUndeline from '@editorjs/underline';
import EditorJSMarker from '@editorjs/marker';
import 'editorjs-style';
import EditorJSAlignment from 'editorjs-text-alignment-blocktune';
import EditorJSDelimeter from '@editorjs/delimiter';
import EditorJSTextTune from '@editorjs/text-variant-tune';
import EditorJSUndo from 'editorjs-undo';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$b = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$a = fails$b;

var functionBindNative = !fails$a(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$1 = Function.prototype;
var bind = FunctionPrototype$1.bind;
var call$6 = FunctionPrototype$1.call;
var uncurryThis$b = NATIVE_BIND$1 && bind.bind(call$6, call$6);

var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
  return fn && uncurryThis$b(fn);
} : function (fn) {
  return fn && function () {
    return call$6.apply(fn, arguments);
  };
};

var uncurryThis$a = functionUncurryThis;

var toString$1 = uncurryThis$a({}.toString);
var stringSlice = uncurryThis$a(''.slice);

var classofRaw = function (it) {
  return stringSlice(toString$1(it), 8, -1);
};

var uncurryThis$9 = functionUncurryThis;
var fails$9 = fails$b;
var classof = classofRaw;

var $Object$3 = Object;
var split = uncurryThis$9(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$9(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object$3(it);
} : $Object$3;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$2 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$1 = isNullOrUndefined$2;

var $TypeError$6 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$2 = function (it) {
  if (isNullOrUndefined$1(it)) throw $TypeError$6("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$1(it));
};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$b =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var shared$3 = {exports: {}};

var global$a = global$b;

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$5(global$a, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$a[key] = value;
  } return value;
};

var global$9 = global$b;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$9[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.0',
  mode: 'global',
  copyright: '?? 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible = requireObjectCoercible$2;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$3 = function (argument) {
  return $Object$2(requireObjectCoercible(argument));
};

var uncurryThis$8 = functionUncurryThis;
var toObject$2 = toObject$3;

var hasOwnProperty = uncurryThis$8({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$2(it), key);
};

var uncurryThis$7 = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString = uncurryThis$7(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$e = function (argument) {
  return typeof argument == 'function';
};

var global$8 = global$b;
var isCallable$d = isCallable$e;

var aFunction = function (argument) {
  return isCallable$d(argument) ? argument : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$8[namespace]) : global$8[namespace] && global$8[namespace][method];
};

var getBuiltIn$3 = getBuiltIn$4;

var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';

var global$7 = global$b;
var userAgent = engineUserAgent;

var process$1 = global$7.process;
var Deno = global$7.Deno;
var versions = process$1 && process$1.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es-x/no-symbol -- required for testing */

var V8_VERSION = engineV8Version;
var fails$8 = fails$b;

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$8(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es-x/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$6 = global$b;
var shared$2 = shared$3.exports;
var hasOwn$8 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var WellKnownSymbolsStore = shared$2('wks');
var Symbol$1 = global$6.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$6 = function (name) {
  if (!hasOwn$8(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$8(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID$1 && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var isCallable$c = isCallable$e;

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var SPECIAL_DOCUMENT_ALL = typeof documentAll == 'undefined' && documentAll !== undefined;

var isObject$6 = SPECIAL_DOCUMENT_ALL ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$c(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$c(it);
};

var isObject$5 = isObject$6;

var $String$2 = String;
var $TypeError$5 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$5 = function (argument) {
  if (isObject$5(argument)) return argument;
  throw $TypeError$5($String$2(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$7 = fails$b;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$7(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var DESCRIPTORS$9 = descriptors;
var fails$6 = fails$b;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$9 && fails$6(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var objectDefineProperty = {};

var global$5 = global$b;
var isObject$4 = isObject$6;

var document$1 = global$5.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$8 = descriptors;
var fails$5 = fails$b;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$8 && !fails$5(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var NATIVE_BIND = functionBindNative;

var call$5 = Function.prototype.call;

var functionCall = NATIVE_BIND ? call$5.bind(call$5) : function () {
  return call$5.apply(call$5, arguments);
};

var uncurryThis$6 = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$6({}.isPrototypeOf);

var getBuiltIn$2 = getBuiltIn$4;
var isCallable$b = isCallable$e;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$1 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$b($Symbol) && isPrototypeOf($Symbol.prototype, $Object$1(it));
};

var $String$1 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$1(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$a = isCallable$e;
var tryToString = tryToString$1;

var $TypeError$4 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$1 = function (argument) {
  if (isCallable$a(argument)) return argument;
  throw $TypeError$4(tryToString(argument) + ' is not a function');
};

var aCallable = aCallable$1;
var isNullOrUndefined = isNullOrUndefined$2;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$1 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

var call$4 = functionCall;
var isCallable$9 = isCallable$e;
var isObject$3 = isObject$6;

var $TypeError$3 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$9(fn = input.toString) && !isObject$3(val = call$4(fn, input))) return val;
  if (isCallable$9(fn = input.valueOf) && !isObject$3(val = call$4(fn, input))) return val;
  if (pref !== 'string' && isCallable$9(fn = input.toString) && !isObject$3(val = call$4(fn, input))) return val;
  throw $TypeError$3("Can't convert object to primitive value");
};

var call$3 = functionCall;
var isObject$2 = isObject$6;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$5 = wellKnownSymbol$6;

var $TypeError$2 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$2(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$3(exoticToPrim, input, pref);
    if (!isObject$2(result) || isSymbol$1(result)) return result;
    throw $TypeError$2("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var DESCRIPTORS$7 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$4 = anObject$5;
var toPropertyKey$1 = toPropertyKey$2;

var $TypeError$1 = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$7 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$4(O);
  P = toPropertyKey$1(P);
  anObject$4(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$4(O);
  P = toPropertyKey$1(P);
  anObject$4(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$1('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$1 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$4 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike = lengthOfArrayLike$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike(O);
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

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var hiddenKeys$4 = {};

var uncurryThis$5 = functionUncurryThis;
var hasOwn$7 = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$5;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push = uncurryThis$5([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$7(hiddenKeys$3, key) && hasOwn$7(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$7(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var DESCRIPTORS$6 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$3 = objectDefineProperty;
var anObject$3 = anObject$5;
var toIndexedObject$2 = toIndexedObject$5;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$6 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$3(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$1 = getBuiltIn$4;

var html$1 = getBuiltIn$1('document', 'documentElement');

var shared$1 = shared$3.exports;
var uid = uid$2;

var keys = shared$1('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$2 = anObject$5;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$4;
var html = html$1;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$2 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$2('IE_PROTO');

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
  var iframe = documentCreateElement$1('iframe');
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
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys$1.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys$1[length]];
  return NullProtoObject();
};

hiddenKeys$2[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$2(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$4 = wellKnownSymbol$6;
var create$1 = objectCreate;
var defineProperty$4 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$4('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty$4(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$1(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var global$4 = global$b;
var isCallable$8 = isCallable$e;

var WeakMap$1 = global$4.WeakMap;

var weakMapBasicDetection = isCallable$8(WeakMap$1) && /native code/.test(String(WeakMap$1));

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$5 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;

var createNonEnumerableProperty$4 = DESCRIPTORS$5 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$3 = global$b;
var uncurryThis$4 = functionUncurryThis;
var isObject$1 = isObject$6;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$6 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$3.TypeError;
var WeakMap = global$3.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store$1 = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis$4(store$1.get);
  var wmhas = uncurryThis$4(store$1.has);
  var wmset = uncurryThis$4(store$1.set);
  set = function (it, metadata) {
    if (wmhas(store$1, it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store$1, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store$1, it) || {};
  };
  has = function (it) {
    return wmhas(store$1, it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$1[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$6(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$6(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$6(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var DESCRIPTORS$4 = descriptors;
var call$2 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var toIndexedObject$1 = toIndexedObject$5;
var toPropertyKey = toPropertyKey$2;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$4 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$1(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$1(!call$2(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var makeBuiltIn$2 = {exports: {}};

var DESCRIPTORS$3 = descriptors;
var hasOwn$4 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$4(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$3 = functionUncurryThis;
var isCallable$7 = isCallable$e;
var store = sharedStore;

var functionToString = uncurryThis$3(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$7(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store.inspectSource;

var fails$4 = fails$b;
var isCallable$6 = isCallable$e;
var hasOwn$3 = hasOwnProperty_1;
var DESCRIPTORS$2 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule$1 = internalState;

var enforceInternalState = InternalStateModule$1.enforce;
var getInternalState$1 = InternalStateModule$1.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty$3 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$4(function () {
  return defineProperty$3(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$3(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$2) defineProperty$3(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$3(options, 'arity') && value.length !== options.arity) {
    defineProperty$3(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$3(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$2) defineProperty$3(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$3(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$6(this) && getInternalState$1(this).source || inspectSource(this);
}, 'toString');

var isCallable$5 = isCallable$e;
var definePropertyModule$1 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$3 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$5(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$1.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn = getBuiltIn$4;
var uncurryThis$2 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$1 = anObject$5;

var concat$1 = uncurryThis$2([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$1(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$2 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$3 = fails$b;
var isCallable$4 = isCallable$e;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$4(detection) ? fails$3(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$2 = global$b;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var defineBuiltIn$2 = defineBuiltIn$3;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$2;
  } else if (STATIC) {
    target = global$2[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$2[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$2(sourceProperty, 'sham', true);
    }
    defineBuiltIn$2(target, key, sourceProperty, options);
  }
};

var fails$2 = fails$b;

var correctPrototypeGetter = !fails$2(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$1 = hasOwnProperty_1;
var isCallable$3 = isCallable$e;
var toObject$1 = toObject$3;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject$1(O);
  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$3(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

var fails$1 = fails$b;
var isCallable$2 = isCallable$e;
var isObject = isObject$6;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$1 = defineBuiltIn$3;
var wellKnownSymbol$3 = wellKnownSymbol$6;

var ITERATOR$2 = wellKnownSymbol$3('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es-x/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype$2) || fails$1(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$2(IteratorPrototype$2[ITERATOR$2])) {
  defineBuiltIn$1(IteratorPrototype$2, ITERATOR$2, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$2 = objectDefineProperty.f;
var hasOwn = hasOwnProperty_1;
var wellKnownSymbol$2 = wellKnownSymbol$6;

var TO_STRING_TAG$1 = wellKnownSymbol$2('toStringTag');

var setToStringTag$2 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG$1)) {
    defineProperty$2(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$3;
var setToStringTag$1 = setToStringTag$2;
var Iterators$2 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isCallable$1 = isCallable$e;

var $String = String;
var $TypeError = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$1(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$1 = functionUncurryThis;
var anObject = anObject$5;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$1(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$1 = _export;
var call$1 = functionCall;
var FunctionName = functionName;
var isCallable = isCallable$e;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var defineBuiltIn = defineBuiltIn$3;
var wellKnownSymbol$1 = wellKnownSymbol$6;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$1('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$1])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$1(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$1(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$1({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
  }
  Iterators$1[NAME] = defaultIterator;

  return methods;
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables = addToUnscopables$1;
var Iterators = iterators;
var InternalStateModule = internalState;
var defineProperty$1 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var DESCRIPTORS$1 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$1 && values.name !== 'values') try {
  defineProperty$1(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var global$1 = global$b;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var wellKnownSymbol = wellKnownSymbol$6;

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$1[COLLECTION_NAME] && global$1[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var DESCRIPTORS = descriptors;
var uncurryThis = functionUncurryThis;
var call = functionCall;
var fails = fails$b;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject = toObject$3;
var IndexedObject = indexedObject;

// eslint-disable-next-line es-x/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es-x/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $ = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es-x/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

const Styled = {
  Container: /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
    target: "e1t3rqn02"
  } : {
    target: "e1t3rqn02",
    label: "Container"
  })(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvcmpzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRMEIiLCJmaWxlIjoiZWRpdG9yanMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IEVkaXRvckpTIGZyb20gJ0BlZGl0b3Jqcy9lZGl0b3Jqcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHsgRWRpdG9ySlNIZWFkZXIsIEVkaXRvckpTTGlzdCwgRWRpdG9ySlNRdW90ZSwgRWRpdG9ySlNVbmRlbGluZSwgRWRpdG9ySlNUYWJsZSwgRWRpdG9ySlNJbWFnZSwgRWRpdG9ySlNNYXJrZXIsIEVkaXRvckpTRW1iZWQsIEVkaXRvckpTV2FybmluZywgXHJcbi8vIEVkaXRvckpTSW5saW5lU3R5bGUsXHJcbkVkaXRvckpTQWxpZ25tZW50LCBFZGl0b3JKU1BhcmFncmFwaCwgRWRpdG9ySlNVbmRvLCBFZGl0b3JKU0RlbGltZXRlciwgRWRpdG9ySlNUZXh0VHVuZSwgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5jb25zdCBTdHlsZWQgPSB7XHJcbiAgICBDb250YWluZXI6IHN0eWxlZC5kaXYgYGAsXHJcbiAgICBFZGl0b3I6IHN0eWxlZC5kaXYgYGAsXHJcbiAgICBCdXR0b246IHN0eWxlZC5idXR0b24gYGAsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBFZGl0b3JUUyA9ICh7IG9wdGlvbnMsIG9uU2F2ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbaW5zdGFuY2UsIHNldEluc3RhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgY29uZmlnID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgIGhvbGRlcjogJ2thaXJvLWVkaXRvcmpzJyxcclxuICAgICAgICAgICAgYXV0b2ZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucGxhY2Vob2xkZXIpIHx8ICdTdGFydCB3cml0aW5nIHlvdXIgaWRlYS4uLicsXHJcbiAgICAgICAgICAgIHRvb2xzOiB7XHJcbiAgICAgICAgICAgICAgICB1bmRlcmxpbmU6IEVkaXRvckpTVW5kZWxpbmUsXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBFZGl0b3JKU1dhcm5pbmcsXHJcbiAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6IEVkaXRvckpTRGVsaW1ldGVyLFxyXG4gICAgICAgICAgICAgICAgdGV4dFR1bmU6IEVkaXRvckpTVGV4dFR1bmUsXHJcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnRUdW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IEVkaXRvckpTQWxpZ25tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBNYXJrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNNYXJrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRjdXQ6ICdDTUQrU0hJRlQrTScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IEVkaXRvckpTSGVhZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsczogWzEsIDIsIDMsIDQsIDUsIDZdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0dW5lczogWydhbGlnbm1lbnRUdW5lJ10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFyYWdyYXBoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IEVkaXRvckpTUGFyYWdyYXBoLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHVuZXM6IFsnYWxpZ25tZW50VHVuZScsICd0ZXh0VHVuZSddLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxpc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdHlsZTogJ3Vub3JkZXJlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBxdW90ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBFZGl0b3JKU1F1b3RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGFibGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNUYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVUb29sYmFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICgoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW1hZ2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maWVsZCkgfHwgJ2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5RmlsZTogKChfYiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbWFnZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmVuZHBvaW50cy5ieUZpbGUpIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZW1iZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNFbWJlZCxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVUb29sYmFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91dHViZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhZ3JhbTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtvcHRpb25zXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVkaXRvcmpzID0gbmV3IEVkaXRvckpTKGNvbmZpZyk7XHJcbiAgICAgICAgZWRpdG9yanMuaXNSZWFkeS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdW5kbyA9IG5ldyBFZGl0b3JKU1VuZG8oeyBlZGl0b3I6IGVkaXRvcmpzIH0pO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHVuZG8uaW5pdGlhbGl6ZShvcHRpb25zLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yanMucmVuZGVyKG9wdGlvbnMuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnN0YW5jZShlZGl0b3Jqcyk7XHJcbiAgICB9LCBbY29uZmlnLCBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGF0YV0pO1xyXG4gICAgcmV0dXJuIChfanN4KFN0eWxlZC5Db250YWluZXIsIHsgY2hpbGRyZW46IF9qc3goU3R5bGVkLkVkaXRvciwgT2JqZWN0LmFzc2lnbih7IGlkOiBcImthaXJvLWVkaXRvcmpzXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KFN0eWxlZC5CdXR0b24sIE9iamVjdC5hc3NpZ24oeyBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlID09PSBudWxsIHx8IGluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnN0YW5jZS5zYXZlKCkudGhlbigoZGF0YSkgPT4gb25TYXZlKGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFwiU2F2ZVwiIH0pKSB9KSB9KSkgfSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JUUztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWRpdG9yanMuanMubWFwIl19 */"),
  Editor: /*#__PURE__*/_styled("div", process.env.NODE_ENV === "production" ? {
    target: "e1t3rqn01"
  } : {
    target: "e1t3rqn01",
    label: "Editor"
  })(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvcmpzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTdUIiLCJmaWxlIjoiZWRpdG9yanMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IEVkaXRvckpTIGZyb20gJ0BlZGl0b3Jqcy9lZGl0b3Jqcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHsgRWRpdG9ySlNIZWFkZXIsIEVkaXRvckpTTGlzdCwgRWRpdG9ySlNRdW90ZSwgRWRpdG9ySlNVbmRlbGluZSwgRWRpdG9ySlNUYWJsZSwgRWRpdG9ySlNJbWFnZSwgRWRpdG9ySlNNYXJrZXIsIEVkaXRvckpTRW1iZWQsIEVkaXRvckpTV2FybmluZywgXHJcbi8vIEVkaXRvckpTSW5saW5lU3R5bGUsXHJcbkVkaXRvckpTQWxpZ25tZW50LCBFZGl0b3JKU1BhcmFncmFwaCwgRWRpdG9ySlNVbmRvLCBFZGl0b3JKU0RlbGltZXRlciwgRWRpdG9ySlNUZXh0VHVuZSwgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5jb25zdCBTdHlsZWQgPSB7XHJcbiAgICBDb250YWluZXI6IHN0eWxlZC5kaXYgYGAsXHJcbiAgICBFZGl0b3I6IHN0eWxlZC5kaXYgYGAsXHJcbiAgICBCdXR0b246IHN0eWxlZC5idXR0b24gYGAsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBFZGl0b3JUUyA9ICh7IG9wdGlvbnMsIG9uU2F2ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbaW5zdGFuY2UsIHNldEluc3RhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgY29uZmlnID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgIGhvbGRlcjogJ2thaXJvLWVkaXRvcmpzJyxcclxuICAgICAgICAgICAgYXV0b2ZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucGxhY2Vob2xkZXIpIHx8ICdTdGFydCB3cml0aW5nIHlvdXIgaWRlYS4uLicsXHJcbiAgICAgICAgICAgIHRvb2xzOiB7XHJcbiAgICAgICAgICAgICAgICB1bmRlcmxpbmU6IEVkaXRvckpTVW5kZWxpbmUsXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBFZGl0b3JKU1dhcm5pbmcsXHJcbiAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6IEVkaXRvckpTRGVsaW1ldGVyLFxyXG4gICAgICAgICAgICAgICAgdGV4dFR1bmU6IEVkaXRvckpTVGV4dFR1bmUsXHJcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnRUdW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IEVkaXRvckpTQWxpZ25tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBNYXJrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNNYXJrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRjdXQ6ICdDTUQrU0hJRlQrTScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IEVkaXRvckpTSGVhZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsczogWzEsIDIsIDMsIDQsIDUsIDZdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0dW5lczogWydhbGlnbm1lbnRUdW5lJ10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFyYWdyYXBoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IEVkaXRvckpTUGFyYWdyYXBoLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHVuZXM6IFsnYWxpZ25tZW50VHVuZScsICd0ZXh0VHVuZSddLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxpc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdHlsZTogJ3Vub3JkZXJlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBxdW90ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBFZGl0b3JKU1F1b3RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGFibGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNUYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVUb29sYmFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICgoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW1hZ2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maWVsZCkgfHwgJ2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5RmlsZTogKChfYiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbWFnZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmVuZHBvaW50cy5ieUZpbGUpIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZW1iZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNFbWJlZCxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVUb29sYmFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91dHViZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhZ3JhbTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtvcHRpb25zXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVkaXRvcmpzID0gbmV3IEVkaXRvckpTKGNvbmZpZyk7XHJcbiAgICAgICAgZWRpdG9yanMuaXNSZWFkeS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdW5kbyA9IG5ldyBFZGl0b3JKU1VuZG8oeyBlZGl0b3I6IGVkaXRvcmpzIH0pO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHVuZG8uaW5pdGlhbGl6ZShvcHRpb25zLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yanMucmVuZGVyKG9wdGlvbnMuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnN0YW5jZShlZGl0b3Jqcyk7XHJcbiAgICB9LCBbY29uZmlnLCBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGF0YV0pO1xyXG4gICAgcmV0dXJuIChfanN4KFN0eWxlZC5Db250YWluZXIsIHsgY2hpbGRyZW46IF9qc3goU3R5bGVkLkVkaXRvciwgT2JqZWN0LmFzc2lnbih7IGlkOiBcImthaXJvLWVkaXRvcmpzXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KFN0eWxlZC5CdXR0b24sIE9iamVjdC5hc3NpZ24oeyBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlID09PSBudWxsIHx8IGluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnN0YW5jZS5zYXZlKCkudGhlbigoZGF0YSkgPT4gb25TYXZlKGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFwiU2F2ZVwiIH0pKSB9KSB9KSkgfSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JUUztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWRpdG9yanMuanMubWFwIl19 */"),
  Button: /*#__PURE__*/_styled("button", process.env.NODE_ENV === "production" ? {
    target: "e1t3rqn00"
  } : {
    target: "e1t3rqn00",
    label: "Button"
  })(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvcmpzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVMEIiLCJmaWxlIjoiZWRpdG9yanMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IEVkaXRvckpTIGZyb20gJ0BlZGl0b3Jqcy9lZGl0b3Jqcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHsgRWRpdG9ySlNIZWFkZXIsIEVkaXRvckpTTGlzdCwgRWRpdG9ySlNRdW90ZSwgRWRpdG9ySlNVbmRlbGluZSwgRWRpdG9ySlNUYWJsZSwgRWRpdG9ySlNJbWFnZSwgRWRpdG9ySlNNYXJrZXIsIEVkaXRvckpTRW1iZWQsIEVkaXRvckpTV2FybmluZywgXHJcbi8vIEVkaXRvckpTSW5saW5lU3R5bGUsXHJcbkVkaXRvckpTQWxpZ25tZW50LCBFZGl0b3JKU1BhcmFncmFwaCwgRWRpdG9ySlNVbmRvLCBFZGl0b3JKU0RlbGltZXRlciwgRWRpdG9ySlNUZXh0VHVuZSwgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5jb25zdCBTdHlsZWQgPSB7XHJcbiAgICBDb250YWluZXI6IHN0eWxlZC5kaXYgYGAsXHJcbiAgICBFZGl0b3I6IHN0eWxlZC5kaXYgYGAsXHJcbiAgICBCdXR0b246IHN0eWxlZC5idXR0b24gYGAsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBFZGl0b3JUUyA9ICh7IG9wdGlvbnMsIG9uU2F2ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbaW5zdGFuY2UsIHNldEluc3RhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgY29uZmlnID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICByZXR1cm4gKHtcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgIGhvbGRlcjogJ2thaXJvLWVkaXRvcmpzJyxcclxuICAgICAgICAgICAgYXV0b2ZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucGxhY2Vob2xkZXIpIHx8ICdTdGFydCB3cml0aW5nIHlvdXIgaWRlYS4uLicsXHJcbiAgICAgICAgICAgIHRvb2xzOiB7XHJcbiAgICAgICAgICAgICAgICB1bmRlcmxpbmU6IEVkaXRvckpTVW5kZWxpbmUsXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBFZGl0b3JKU1dhcm5pbmcsXHJcbiAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6IEVkaXRvckpTRGVsaW1ldGVyLFxyXG4gICAgICAgICAgICAgICAgdGV4dFR1bmU6IEVkaXRvckpTVGV4dFR1bmUsXHJcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnRUdW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IEVkaXRvckpTQWxpZ25tZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBNYXJrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNNYXJrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRjdXQ6ICdDTUQrU0hJRlQrTScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IEVkaXRvckpTSGVhZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsczogWzEsIDIsIDMsIDQsIDUsIDZdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TGV2ZWw6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0dW5lczogWydhbGlnbm1lbnRUdW5lJ10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFyYWdyYXBoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IEVkaXRvckpTUGFyYWdyYXBoLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHVuZXM6IFsnYWxpZ25tZW50VHVuZScsICd0ZXh0VHVuZSddLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxpc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdHlsZTogJ3Vub3JkZXJlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBxdW90ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBFZGl0b3JKU1F1b3RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVRvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGFibGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNUYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVUb29sYmFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICgoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW1hZ2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maWVsZCkgfHwgJ2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5RmlsZTogKChfYiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbWFnZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmVuZHBvaW50cy5ieUZpbGUpIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZW1iZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogRWRpdG9ySlNFbWJlZCxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVUb29sYmFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91dHViZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhZ3JhbTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtvcHRpb25zXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVkaXRvcmpzID0gbmV3IEVkaXRvckpTKGNvbmZpZyk7XHJcbiAgICAgICAgZWRpdG9yanMuaXNSZWFkeS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdW5kbyA9IG5ldyBFZGl0b3JKU1VuZG8oeyBlZGl0b3I6IGVkaXRvcmpzIH0pO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHVuZG8uaW5pdGlhbGl6ZShvcHRpb25zLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yanMucmVuZGVyKG9wdGlvbnMuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnN0YW5jZShlZGl0b3Jqcyk7XHJcbiAgICB9LCBbY29uZmlnLCBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGF0YV0pO1xyXG4gICAgcmV0dXJuIChfanN4KFN0eWxlZC5Db250YWluZXIsIHsgY2hpbGRyZW46IF9qc3goU3R5bGVkLkVkaXRvciwgT2JqZWN0LmFzc2lnbih7IGlkOiBcImthaXJvLWVkaXRvcmpzXCIgfSwgeyBjaGlsZHJlbjogX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBfanN4KFN0eWxlZC5CdXR0b24sIE9iamVjdC5hc3NpZ24oeyBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlID09PSBudWxsIHx8IGluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnN0YW5jZS5zYXZlKCkudGhlbigoZGF0YSkgPT4gb25TYXZlKGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH0sIHsgY2hpbGRyZW46IFwiU2F2ZVwiIH0pKSB9KSB9KSkgfSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JUUztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWRpdG9yanMuanMubWFwIl19 */")
};
const EditorTS = ({
  options,
  onSave
}) => {
  const [instance, setInstance] = useState(null);
  const config = useMemo(() => {
    var _a, _b;

    return {
      minHeight: 400,
      holder: 'kairo-editorjs',
      autofocus: false,
      placeholder: (options === null || options === void 0 ? void 0 : options.placeholder) || 'Start writing your idea...',
      tools: {
        underline: EditorJSUndeline,
        warning: EditorJSWarning,
        delimiter: EditorJSDelimeter,
        textTune: EditorJSTextTune,
        alignmentTune: {
          class: EditorJSAlignment,
          config: {
            default: 'left'
          }
        },
        Marker: {
          class: EditorJSMarker,
          shortcut: 'CMD+SHIFT+M'
        },
        header: {
          class: EditorJSHeader,
          inlineToolbar: true,
          config: {
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3
          },
          tunes: ['alignmentTune']
        },
        paragraph: {
          class: EditorJSParagraph,
          inlineToolbar: true,
          tunes: ['alignmentTune', 'textTune']
        },
        list: {
          class: EditorJSList,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
        quote: {
          class: EditorJSQuote,
          inlineToolbar: true
        },
        table: {
          class: EditorJSTable,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3
          }
        },
        image: {
          class: EditorJSImage,
          config: {
            field: ((_a = options === null || options === void 0 ? void 0 : options.image) === null || _a === void 0 ? void 0 : _a.field) || 'file',
            endpoints: {
              byFile: ((_b = options === null || options === void 0 ? void 0 : options.image) === null || _b === void 0 ? void 0 : _b.endpoints.byFile) || ''
            }
          }
        },
        embed: {
          class: EditorJSEmbed,
          inlineToolbar: true,
          config: {
            services: {
              youtube: true,
              instagram: true
            }
          }
        }
      }
    };
  }, [options]);
  useEffect(() => {
    const editorjs = new EditorJS(config);
    editorjs.isReady.then(() => {
      const undo = new EditorJSUndo({
        editor: editorjs
      });

      if (options === null || options === void 0 ? void 0 : options.data) {
        undo.initialize(options.data);
        editorjs.render(options.data);
      }
    });
    setInstance(editorjs);
  }, [config, options === null || options === void 0 ? void 0 : options.data]);
  return jsx(Styled.Container, {
    children: jsx(Styled.Editor, Object.assign({
      id: "kairo-editorjs"
    }, {
      children: jsx("div", {
        children: jsx(Styled.Button, Object.assign({
          onClick: () => {
            instance === null || instance === void 0 ? void 0 : instance.save().then(data => onSave(data));
          }
        }, {
          children: "Save"
        }))
      })
    }))
  });
};

export { EditorTS };
