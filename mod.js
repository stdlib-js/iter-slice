// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),y="get"in e,p="set"in e,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&v.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=b()?function(t){var r,e,n;if(null==t)return s.call(t);e=t[m],r=d(t,m);try{t[m]=void 0}catch(r){return s.call(t)}return n=s.call(t),r?t[m]=e:delete t[m],n}:function(t){return s.call(t)},j=Number,_=j.prototype.toString;var g=b();function h(t){return"object"==typeof t&&(t instanceof j||(g?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function S(t){return y(t)||h(t)}a(S,"isPrimitive",y),a(S,"isObject",h);var O=Number.POSITIVE_INFINITY,E=j.NEGATIVE_INFINITY,T=Math.floor;function I(t){return t<O&&t>E&&T(r=t)===r;var r}function P(t){return y(t)&&I(t)}function A(t){return h(t)&&I(t.valueOf())}function N(t){return P(t)||A(t)}function x(t){return P(t)&&t>=0}function B(t){return A(t)&&t.valueOf()>=0}function C(t){return x(t)||B(t)}a(N,"isPrimitive",P),a(N,"isObject",A),a(C,"isPrimitive",x),a(C,"isObject",B);var V=/./;function k(t){return"boolean"==typeof t}var F=Boolean.prototype.toString;var G=b();function L(t){return"object"==typeof t&&(t instanceof Boolean||(G?function(t){try{return F.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function M(t){return k(t)||L(t)}function R(){return new Function("return this;")()}a(M,"isPrimitive",k),a(M,"isObject",L);var U="object"==typeof self?self:null,Y="object"==typeof window?window:null,J="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},X="object"==typeof J?J:null;var q=function(t){if(arguments.length){if(!k(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return R()}if(U)return U;if(Y)return Y;if(X)return X;throw new Error("unexpected error. Unable to resolve global object.")}(),z=q.document&&q.document.childNodes,D=Int8Array;function H(){return/^\s*function\s*([^(]*)/i}var K=/^\s*function\s*([^(]*)/i;a(H,"REGEXP",K);var Q=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function W(t){return null!==t&&"object"==typeof t}function Z(t){var r,e,n,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=K.exec(n.toString()))return r[1]}return W(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(W,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!Q(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(W));var $="function"==typeof V||"object"==typeof D||"function"==typeof z?function(t){return Z(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Z(t).toLowerCase():r};function tt(t){return"function"===$(t)}function rt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function et(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&tt(t.next)}var nt="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null,ot=1e308;function ut(t,r,e){var n,o,u,i,f,c;if(!et(t))throw new TypeError(rt("0Co4J",t));if(arguments.length>1){if(!x(r))throw new TypeError(rt("0Co3k",r));if(u=r,arguments.length>2){if(!x(e))throw new TypeError(rt("0Co2y",e));i=e}else i=ot}else u=0,i=ot;return f=i-u,c=-1,a(n={},"next",l),a(n,"return",y),nt&&tt(t[nt])&&a(n,nt,p),n;function l(){var r;if(o)return{done:!0};if(c+=1,f>0&&c<u)for(c=0;c<u;c++)r=t.next();return r&&r.done?(o=!0,r):(f-=1)<0?(o=!0,{done:!0}):((r=t.next()).done&&(o=!0),r)}function y(t){return o=!0,arguments.length?{value:t,done:!0}:{done:!0}}function p(){return ut(t[nt](),u,i)}}export{ut as default};
//# sourceMappingURL=mod.js.map
