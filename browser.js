// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!i(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,I=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,i,t,a,o,p,l,u,f;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(s(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=T(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,i,t,n;for(i=[],n=0,t=j.exec(e);t;)(r=e.slice(n,j.lastIndex-t[0].length)).length&&i.push(r),i.push(_(t)),n=j.lastIndex,t=j.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function F(e){return"string"==typeof e}function A(e){var r,i,t;if(!F(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return V.apply(null,i)}var C,R=Object.prototype,O=R.toString,P=R.__defineGetter__,N=R.__defineSetter__,Z=R.__lookupGetter__,L=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===O.call(i))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(Z.call(e,r)||L.call(e,r)?(t=e.__proto__,e.__proto__=R,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,i.get),o&&N&&N.call(e,r,i.set),e};var W=C;function G(e,r,i){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function U(e){return"number"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return X&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function Y(e,r){return null!=e&&z.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=B()?function(e){var r,i,t;if(null==e)return M.call(e);i=e[D],r=Y(e,D);try{e[D]=void 0}catch(r){return M.call(e)}return t=M.call(e),r?e[D]=i:delete e[D],t}:function(e){return M.call(e)},J=Number,K=J.prototype.toString,Q=B();function ee(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function re(e){return U(e)||ee(e)}G(re,"isPrimitive",U),G(re,"isObject",ee);var ie=Number.POSITIVE_INFINITY,te=J.NEGATIVE_INFINITY,ne=Math.floor;function ae(e){return e<ie&&e>te&&ne(r=e)===r;var r}function oe(e){return U(e)&&ae(e)}function ce(e){return ee(e)&&ae(e.valueOf())}function se(e){return oe(e)||ce(e)}function pe(e){return oe(e)&&e>=0}function le(e){return ce(e)&&e.valueOf()>=0}function ue(e){return pe(e)||le(e)}G(se,"isPrimitive",oe),G(se,"isObject",ce),G(ue,"isPrimitive",pe),G(ue,"isObject",le);var fe=/./;function ge(e){return"boolean"==typeof e}var de=Boolean,he=Boolean.prototype.toString,we=B();function be(e){return"object"==typeof e&&(e instanceof de||(we?function(e){try{return he.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ve(e){return ge(e)||be(e)}function ye(e){return"number"==typeof e}function me(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ee(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+me(n):me(n)+e,t&&(e="-"+e)),e}G(ve,"isPrimitive",ge),G(ve,"isObject",be);var xe=String.prototype.toLowerCase,ke=String.prototype.toUpperCase;function Se(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ye(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ee(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ee(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ke.call(e.specifier)?ke.call(i):xe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Ie(e){return"string"==typeof e}var Te=Math.abs,Ve=String.prototype.toLowerCase,je=String.prototype.toUpperCase,_e=String.prototype.replace,$e=/e\+(\d)$/,Fe=/e-(\d)$/,Ae=/^(\d+)$/,Ce=/^(\d+)e/,Re=/\.0$/,Oe=/\.0*e/,Pe=/(\..*[^0])0*e/;function Ne(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ye(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Te(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=_e.call(i,Pe,"$1e"),i=_e.call(i,Oe,"e"),i=_e.call(i,Re,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=_e.call(i,$e,"e+0$1"),i=_e.call(i,Fe,"e-0$1"),e.alternate&&(i=_e.call(i,Ae,"$1."),i=_e.call(i,Ce,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===je.call(e.specifier)?je.call(i):Ve.call(i)}function Ze(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Le(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ze(t):Ze(t)+e}var We=String.fromCharCode,Ge=isNaN,Ue=Array.isArray;function Xe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Be(e){var r,i,t,n,a,o,c,s,p;if(!Ue(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ie(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=Xe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Ge(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Ge(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Se(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ge(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ge(a)?String(t.arg):We(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ne(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ee(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Le(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ze(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ye(e){var r,i,t,n;for(i=[],n=0,t=Me.exec(e);t;)(r=e.slice(n,Me.lastIndex-t[0].length)).length&&i.push(r),i.push(ze(t)),n=Me.lastIndex,t=Me.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function qe(e){return"string"==typeof e}function De(e){var r,i,t;if(!qe(e))throw new TypeError(De("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ye(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Be.apply(null,i)}function He(){return new Function("return this;")()}var Je="object"==typeof self?self:null,Ke="object"==typeof window?window:null,Qe="object"==typeof globalThis?globalThis:null,er=function(e){if(arguments.length){if(!ge(e))throw new TypeError(De("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return He()}if(Qe)return Qe;if(Je)return Je;if(Ke)return Ke;throw new Error("unexpected error. Unable to resolve global object.")}(),rr=er.document&&er.document.childNodes,ir=Int8Array;function tr(){return/^\s*function\s*([^(]*)/i}var nr=/^\s*function\s*([^(]*)/i;G(tr,"REGEXP",nr);var ar=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function or(e){return"number"==typeof e}function cr(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function sr(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+cr(n):cr(n)+e,t&&(e="-"+e)),e}var pr=String.prototype.toLowerCase,lr=String.prototype.toUpperCase;function ur(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!or(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=sr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=sr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===lr.call(e.specifier)?lr.call(i):pr.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function fr(e){return"string"==typeof e}var gr=Math.abs,dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase,wr=String.prototype.replace,br=/e\+(\d)$/,vr=/e-(\d)$/,yr=/^(\d+)$/,mr=/^(\d+)e/,Er=/\.0$/,xr=/\.0*e/,kr=/(\..*[^0])0*e/;function Sr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!or(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":gr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=wr.call(i,kr,"$1e"),i=wr.call(i,xr,"e"),i=wr.call(i,Er,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=wr.call(i,br,"e+0$1"),i=wr.call(i,vr,"e-0$1"),e.alternate&&(i=wr.call(i,yr,"$1."),i=wr.call(i,mr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===hr.call(e.specifier)?hr.call(i):dr.call(i)}function Ir(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Tr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ir(t):Ir(t)+e}var Vr=String.fromCharCode,jr=isNaN,_r=Array.isArray;function $r(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Fr(e){var r,i,t,n,a,o,c,s,p;if(!_r(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(fr(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=$r(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,jr(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,jr(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ur(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!jr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=jr(a)?String(t.arg):Vr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Sr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=sr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Tr(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Ar=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Cr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Rr(e){var r,i,t,n;for(i=[],n=0,t=Ar.exec(e);t;)(r=e.slice(n,Ar.lastIndex-t[0].length)).length&&i.push(r),i.push(Cr(t)),n=Ar.lastIndex,t=Ar.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Or(e){return"string"==typeof e}function Pr(e){var r,i,t;if(!Or(e))throw new TypeError(Pr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Rr(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Fr.apply(null,i)}function Nr(e){return null!==e&&"object"==typeof e}function Zr(e){var r,i,t,n;if(("Object"===(i=H(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=nr.exec(t.toString()))return r[1]}return Nr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G(Nr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Pr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!ar(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Nr));var Lr="function"==typeof fe||"object"==typeof ir||"function"==typeof rr?function(e){return Zr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Zr(e).toLowerCase():r};function Wr(e){return"function"===Lr(e)}function Gr(){var e,r=arguments,i=r[0],t="https://stdlib.io/e/"+i+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function Ur(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&Wr(e.next)}var Xr="function"==typeof q&&"symbol"==typeof q("foo")&&Y(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,Br=1e308;return function e(r,i,t){var n,a,o,c,s,p;if(!Ur(r))throw new TypeError(Gr("0Pn46,G5",r));if(arguments.length>1){if(!pe(i))throw new TypeError(Gr("0Pn3X,F1",i));if(o=i,arguments.length>2){if(!pe(t))throw new TypeError(Gr("0Pn2m,L9",t));c=t}else c=Br}else o=0,c=Br;return s=c-o,p=-1,G(n={},"next",l),G(n,"return",u),Xr&&Wr(r[Xr])&&G(n,Xr,f),n;function l(){var e;if(a)return{done:!0};if(p+=1,s>0&&p<o)for(p=0;p<o;p++)e=r.next();return e&&e.done?(a=!0,e):(s-=1)<0?(a=!0,{done:!0}):((e=r.next()).done&&(a=!0),e)}function u(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function f(){return e(r[Xr](),o,c)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterSlice=r();
//# sourceMappingURL=browser.js.map