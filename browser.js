// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterSlice=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||c.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function v(t,e){return null!=t&&d.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var e,r,n;if(null==t)return s.call(t);r=t[m],e=v(t,m);try{t[m]=void 0}catch(e){return s.call(t)}return n=s.call(t),e?t[m]=r:delete t[m],n}:function(t){return s.call(t)},w=Number,g=w.prototype.toString;var _=b();function h(t){return"object"==typeof t&&(t instanceof w||(_?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function S(t){return y(t)||h(t)}a(S,"isPrimitive",y),a(S,"isObject",h);var O=Number.POSITIVE_INFINITY,E=w.NEGATIVE_INFINITY,T=Math.floor;function I(t){return t<O&&t>E&&T(e=t)===e;var e}function P(t){return y(t)&&I(t)}function A(t){return h(t)&&I(t.valueOf())}function x(t){return P(t)||A(t)}function N(t){return P(t)&&t>=0}function B(t){return A(t)&&t.valueOf()>=0}function C(t){return N(t)||B(t)}a(x,"isPrimitive",P),a(x,"isObject",A),a(C,"isPrimitive",N),a(C,"isObject",B);var V=/./;function k(t){return"boolean"==typeof t}var F=Boolean.prototype.toString;var G=b();function L(t){return"object"==typeof t&&(t instanceof Boolean||(G?function(t){try{return F.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function M(t){return k(t)||L(t)}function R(){return new Function("return this;")()}a(M,"isPrimitive",k),a(M,"isObject",L);var U="object"==typeof self?self:null,Y="object"==typeof window?window:null,J="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},X="object"==typeof J?J:null;var q=function(t){if(arguments.length){if(!k(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return R()}if(U)return U;if(Y)return Y;if(X)return X;throw new Error("unexpected error. Unable to resolve global object.")}(),z=q.document&&q.document.childNodes,D=Int8Array;function H(){return/^\s*function\s*([^(]*)/i}var K=/^\s*function\s*([^(]*)/i;a(H,"REGEXP",K);var Q=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function W(t){return null!==t&&"object"==typeof t}function Z(t){var e,r,n,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=K.exec(n.toString()))return e[1]}return W(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(W,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!Q(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(W));var $="function"==typeof V||"object"==typeof D||"function"==typeof z?function(t){return Z(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Z(t).toLowerCase():e};function tt(t){return"function"===$(t)}function et(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function rt(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&tt(t.next)}var nt="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&v(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null,ot=1e308;return function t(e,r,n){var o,i,u,f,c,l;if(!rt(e))throw new TypeError(et("0Co4J",e));if(arguments.length>1){if(!N(r))throw new TypeError(et("0Co3k",r));if(u=r,arguments.length>2){if(!N(n))throw new TypeError(et("0Co2y",n));f=n}else f=ot}else u=0,f=ot;return c=f-u,l=-1,a(o={},"next",y),a(o,"return",p),nt&&tt(e[nt])&&a(o,nt,b),o;function y(){var t;if(i)return{done:!0};if(l+=1,c>0&&l<u)for(l=0;l<u;l++)t=e.next();return t&&t.done?(i=!0,t):(c-=1)<0?(i=!0,{done:!0}):((t=e.next()).done&&(i=!0),t)}function p(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function b(){return t(e[nt](),u,f)}}}));
//# sourceMappingURL=browser.js.map
