// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):u.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var k=String.fromCharCode,S=isNaN,T=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,i,a,o,l,u,p,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",u=1,p=0;p<e.length;p++)if(s(i=e[p]))l+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,S(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),l+=i.arg||"",u+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,n;for(t=[],n=0,i=I.exec(e);i;)(r=e.slice(n,I.lastIndex-i[0].length)).length&&t.push(r),t.push(_(i)),n=I.lastIndex,i=I.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function A(e){var r,t;if(!F(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var C,O=Object.prototype,R=O.toString,N=O.__defineGetter__,Z=O.__defineSetter__,P=O.__lookupGetter__,L=O.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var W=C;function G(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function Y(e,r){return null!=e&&z.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=X()?function(e){var r,t,i;if(null==e)return M.call(e);t=e[D],r=Y(e,D);try{e[D]=void 0}catch(r){return M.call(e)}return i=M.call(e),r?e[D]=t:delete e[D],i}:function(e){return M.call(e)},J=Number,K=J.prototype.toString,Q=X();function ee(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function re(e){return B(e)||ee(e)}G(re,"isPrimitive",B),G(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ie=J.NEGATIVE_INFINITY,ne=Math.floor;function ae(e){return e<te&&e>ie&&ne(r=e)===r;var r}function oe(e){return B(e)&&ae(e)}function ce(e){return ee(e)&&ae(e.valueOf())}function se(e){return oe(e)||ce(e)}function le(e){return oe(e)&&e>=0}function ue(e){return ce(e)&&e.valueOf()>=0}function pe(e){return le(e)||ue(e)}G(se,"isPrimitive",oe),G(se,"isObject",ce),G(pe,"isPrimitive",le),G(pe,"isObject",ue);var fe=/./;function ge(e){return"boolean"==typeof e}var de=Object.prototype.toString,he="function"==typeof Symbol?Symbol:void 0,we="function"==typeof he?he.toStringTag:"",be=X()?function(e){var r,t,i;if(null==e)return de.call(e);t=e[we],r=Y(e,we);try{e[we]=void 0}catch(r){return de.call(e)}return i=de.call(e),r?e[we]=t:delete e[we],i}:function(e){return de.call(e)},ve=Boolean,ye=Boolean.prototype.toString,me=X();function Ee(e){return"object"==typeof e&&(e instanceof ve||(me?function(e){try{return ye.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===be(e)))}function xe(e){return ge(e)||Ee(e)}function ke(e){return"number"==typeof e}function Se(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Te(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Se(n):Se(n)+e,i&&(e="-"+e)),e}G(xe,"isPrimitive",ge),G(xe,"isObject",Ee);var Ve=String.prototype.toLowerCase,je=String.prototype.toUpperCase;function Ie(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ke(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Te(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Te(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===je.call(e.specifier)?je.call(t):Ve.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function _e(e){return"string"==typeof e}var $e=Math.abs,Fe=String.prototype.toLowerCase,Ae=String.prototype.toUpperCase,Ce=String.prototype.replace,Oe=/e\+(\d)$/,Re=/e-(\d)$/,Ne=/^(\d+)$/,Ze=/^(\d+)e/,Pe=/\.0$/,Le=/\.0*e/,We=/(\..*[^0])0*e/;function Ge(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ke(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":$e(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ce.call(t,We,"$1e"),t=Ce.call(t,Le,"e"),t=Ce.call(t,Pe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ce.call(t,Oe,"e+0$1"),t=Ce.call(t,Re,"e-0$1"),e.alternate&&(t=Ce.call(t,Ne,"$1."),t=Ce.call(t,Ze,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ae.call(e.specifier)?Ae.call(t):Fe.call(t)}function Be(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ue(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Be(i):Be(i)+e}var Xe=String.fromCharCode,Me=isNaN,ze=Array.isArray;function Ye(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function qe(e){var r,t,i,n,a,o,c,s,l;if(!ze(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(_e(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ye(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Me(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Me(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Ie(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Me(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Me(a)?String(i.arg):Xe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ge(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Te(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ue(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var De=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function He(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Je(e){var r,t,i,n;for(t=[],n=0,i=De.exec(e);i;)(r=e.slice(n,De.lastIndex-i[0].length)).length&&t.push(r),t.push(He(i)),n=De.lastIndex,i=De.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ke(e){return"string"==typeof e}function Qe(e){var r,t;if(!Ke(e))throw new TypeError(Qe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Je(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return qe.apply(null,r)}function er(){return new Function("return this;")()}var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,ir="object"==typeof globalThis?globalThis:null,nr=function(e){if(arguments.length){if(!ge(e))throw new TypeError(Qe("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return er()}if(ir)return ir;if(rr)return rr;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=nr.document&&nr.document.childNodes,or=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;G(cr,"REGEXP",sr);var lr=Array.isArray?Array.isArray:function(e){return"[object Array]"===be(e)};function ur(e){return null!==e&&"object"==typeof e}function pr(e){var r,t,i,n;if(("Object"===(t=be(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=sr.exec(i.toString()))return r[1]}return ur(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(ur,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Qe("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!lr(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(ur));var fr="function"==typeof fe||"object"==typeof or||"function"==typeof ar?function(e){return pr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?pr(e).toLowerCase():r};function gr(e){return"function"===fr(e)}function dr(e){return"number"==typeof e}function hr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function wr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+hr(n):hr(n)+e,i&&(e="-"+e)),e}var br=String.prototype.toLowerCase,vr=String.prototype.toUpperCase;function yr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!dr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=wr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=wr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===vr.call(e.specifier)?vr.call(t):br.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function mr(e){return"string"==typeof e}var Er=Math.abs,xr=String.prototype.toLowerCase,kr=String.prototype.toUpperCase,Sr=String.prototype.replace,Tr=/e\+(\d)$/,Vr=/e-(\d)$/,jr=/^(\d+)$/,Ir=/^(\d+)e/,_r=/\.0$/,$r=/\.0*e/,Fr=/(\..*[^0])0*e/;function Ar(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!dr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Er(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Sr.call(t,Fr,"$1e"),t=Sr.call(t,$r,"e"),t=Sr.call(t,_r,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Sr.call(t,Tr,"e+0$1"),t=Sr.call(t,Vr,"e-0$1"),e.alternate&&(t=Sr.call(t,jr,"$1."),t=Sr.call(t,Ir,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===kr.call(e.specifier)?kr.call(t):xr.call(t)}function Cr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Or(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Cr(i):Cr(i)+e}var Rr=String.fromCharCode,Nr=isNaN,Zr=Array.isArray;function Pr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Lr(e){var r,t,i,n,a,o,c,s,l;if(!Zr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(mr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Pr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Nr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Nr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=yr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Nr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Nr(a)?String(i.arg):Rr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ar(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=wr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Or(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Wr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Gr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Br(e){var r,t,i,n;for(t=[],n=0,i=Wr.exec(e);i;)(r=e.slice(n,Wr.lastIndex-i[0].length)).length&&t.push(r),t.push(Gr(i)),n=Wr.lastIndex,i=Wr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ur(e){return"string"==typeof e}function Xr(e){var r,t,i;if(!Ur(e))throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Br(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Lr.apply(null,t)}function Mr(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&gr(e.next)}var zr="function"==typeof Symbol?Symbol:void 0,Yr="function"==typeof zr&&"symbol"==typeof zr("foo")&&Y(zr,"iterator")&&"symbol"==typeof zr.iterator?Symbol.iterator:null,qr=1e308;return function e(r,t,i){var n,a,o,c,s,l;if(!Mr(r))throw new TypeError(Xr("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(arguments.length>1){if(!le(t))throw new TypeError(Xr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(o=t,arguments.length>2){if(!le(i))throw new TypeError(Xr("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",i));c=i}else c=qr}else o=0,c=qr;return s=c-o,l=-1,G(n={},"next",u),G(n,"return",p),Yr&&gr(r[Yr])&&G(n,Yr,f),n;function u(){var e;if(a)return{done:!0};if(l+=1,s>0&&l<o)for(l=0;l<o;l++)e=r.next();return e&&e.done?(a=!0,e):(s-=1)<0?(a=!0,{done:!0}):((e=r.next()).done&&(a=!0),e)}function p(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function f(){return e(r[Yr](),o,c)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterSlice=r();
//# sourceMappingURL=browser.js.map
