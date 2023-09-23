// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterSlice=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var k=String.fromCharCode,S=isNaN,I=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,i,a,o,l,p,u,f;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(i=e[u]))l+=i;else{if(r=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,n;for(t=[],n=0,i=V.exec(e);i;)(r=e.slice(n,V.lastIndex-i[0].length)).length&&t.push(r),t.push(_(i)),n=V.lastIndex,i=V.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function A(e){var r,t,i;if(!F(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return j.apply(null,t)}var C,R=Object.prototype,O=R.toString,P=R.__defineGetter__,N=R.__defineSetter__,Z=R.__lookupGetter__,L=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Z.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};var W=C;function G(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"number"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return X&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function Y(e,r){return null!=e&&z.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var H=B()?function(e){var r,t,i;if(null==e)return M.call(e);t=e[D],r=Y(e,D);try{e[D]=void 0}catch(r){return M.call(e)}return i=M.call(e),r?e[D]=t:delete e[D],i}:function(e){return M.call(e)},J=Number,K=J.prototype.toString;var Q=B();function ee(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function re(e){return U(e)||ee(e)}G(re,"isPrimitive",U),G(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ie=J.NEGATIVE_INFINITY,ne=Math.floor;function ae(e){return e<te&&e>ie&&ne(r=e)===r;var r}function oe(e){return U(e)&&ae(e)}function ce(e){return ee(e)&&ae(e.valueOf())}function se(e){return oe(e)||ce(e)}function le(e){return oe(e)&&e>=0}function pe(e){return ce(e)&&e.valueOf()>=0}function ue(e){return le(e)||pe(e)}G(se,"isPrimitive",oe),G(se,"isObject",ce),G(ue,"isPrimitive",le),G(ue,"isObject",pe);var fe=/./;function ge(e){return"boolean"==typeof e}var de=Boolean,he=Boolean.prototype.toString;var we=B();function be(e){return"object"==typeof e&&(e instanceof de||(we?function(e){try{return he.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ve(e){return ge(e)||be(e)}function ye(e){return"number"==typeof e}function me(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ee(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+me(n):me(n)+e,i&&(e="-"+e)),e}G(ve,"isPrimitive",ge),G(ve,"isObject",be);var xe=String.prototype.toLowerCase,ke=String.prototype.toUpperCase;function Se(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ye(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Ee(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Ee(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ke.call(e.specifier)?ke.call(t):xe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ie(e){return"string"==typeof e}var Te=Math.abs,je=String.prototype.toLowerCase,Ve=String.prototype.toUpperCase,_e=String.prototype.replace,$e=/e\+(\d)$/,Fe=/e-(\d)$/,Ae=/^(\d+)$/,Ce=/^(\d+)e/,Re=/\.0$/,Oe=/\.0*e/,Pe=/(\..*[^0])0*e/;function Ne(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ye(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Te(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=_e.call(t,Pe,"$1e"),t=_e.call(t,Oe,"e"),t=_e.call(t,Re,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=_e.call(t,$e,"e+0$1"),t=_e.call(t,Fe,"e-0$1"),e.alternate&&(t=_e.call(t,Ae,"$1."),t=_e.call(t,Ce,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ve.call(e.specifier)?Ve.call(t):je.call(t)}function Ze(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Le(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ze(i):Ze(i)+e}var We=String.fromCharCode,Ge=isNaN,Ue=Array.isArray;function Xe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Be(e){var r,t,i,n,a,o,c,s,l;if(!Ue(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ie(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Xe(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ge(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ge(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Se(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ge(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ge(a)?String(i.arg):We(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ne(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ee(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Le(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ze(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ye(e){var r,t,i,n;for(t=[],n=0,i=Me.exec(e);i;)(r=e.slice(n,Me.lastIndex-i[0].length)).length&&t.push(r),t.push(ze(i)),n=Me.lastIndex,i=Me.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function qe(e){return"string"==typeof e}function De(e){var r,t,i;if(!qe(e))throw new TypeError(De("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ye(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Be.apply(null,t)}function He(){return new Function("return this;")()}var Je="object"==typeof self?self:null,Ke="object"==typeof window?window:null,Qe="object"==typeof global?global:null,er="object"==typeof globalThis?globalThis:null;var rr=function(e){if(arguments.length){if(!ge(e))throw new TypeError(De("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return He()}if(er)return er;if(Je)return Je;if(Ke)return Ke;if(Qe)return Qe;throw new Error("unexpected error. Unable to resolve global object.")}(),tr=rr.document&&rr.document.childNodes,ir=Int8Array;function nr(){return/^\s*function\s*([^(]*)/i}var ar=/^\s*function\s*([^(]*)/i;G(nr,"REGEXP",ar);var or=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function cr(e){return"number"==typeof e}function sr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function lr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+sr(n):sr(n)+e,i&&(e="-"+e)),e}var pr=String.prototype.toLowerCase,ur=String.prototype.toUpperCase;function fr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!cr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=lr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=lr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ur.call(e.specifier)?ur.call(t):pr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function gr(e){return"string"==typeof e}var dr=Math.abs,hr=String.prototype.toLowerCase,wr=String.prototype.toUpperCase,br=String.prototype.replace,vr=/e\+(\d)$/,yr=/e-(\d)$/,mr=/^(\d+)$/,Er=/^(\d+)e/,xr=/\.0$/,kr=/\.0*e/,Sr=/(\..*[^0])0*e/;function Ir(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!cr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":dr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=br.call(t,Sr,"$1e"),t=br.call(t,kr,"e"),t=br.call(t,xr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=br.call(t,vr,"e+0$1"),t=br.call(t,yr,"e-0$1"),e.alternate&&(t=br.call(t,mr,"$1."),t=br.call(t,Er,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===wr.call(e.specifier)?wr.call(t):hr.call(t)}function Tr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function jr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Tr(i):Tr(i)+e}var Vr=String.fromCharCode,_r=isNaN,$r=Array.isArray;function Fr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ar(e){var r,t,i,n,a,o,c,s,l;if(!$r(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(gr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Fr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,_r(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,_r(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=fr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!_r(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=_r(a)?String(i.arg):Vr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ir(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=lr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=jr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Cr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Rr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Or(e){var r,t,i,n;for(t=[],n=0,i=Cr.exec(e);i;)(r=e.slice(n,Cr.lastIndex-i[0].length)).length&&t.push(r),t.push(Rr(i)),n=Cr.lastIndex,i=Cr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Pr(e){return"string"==typeof e}function Nr(e){var r,t,i;if(!Pr(e))throw new TypeError(Nr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Or(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Ar.apply(null,t)}function Zr(e){return null!==e&&"object"==typeof e}function Lr(e){var r,t,i,n;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=ar.exec(i.toString()))return r[1]}return Zr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(Zr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Nr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!or(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Zr));var Wr="function"==typeof fe||"object"==typeof ir||"function"==typeof tr?function(e){return Lr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Lr(e).toLowerCase():r};function Gr(e){return"function"===Wr(e)}function Ur(){var e,r=arguments,t=r[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}function Xr(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&Gr(e.next)}var Br="function"==typeof q&&"symbol"==typeof q("foo")&&Y(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,Mr=1e308;return function e(r,t,i){var n,a,o,c,s,l;if(!Xr(r))throw new TypeError(Ur("0Pn46,G5",r));if(arguments.length>1){if(!le(t))throw new TypeError(Ur("0Pn3X,F1",t));if(o=t,arguments.length>2){if(!le(i))throw new TypeError(Ur("0Pn2m,L9",i));c=i}else c=Mr}else o=0,c=Mr;return s=c-o,l=-1,G(n={},"next",p),G(n,"return",u),Br&&Gr(r[Br])&&G(n,Br,f),n;function p(){var e;if(a)return{done:!0};if(l+=1,s>0&&l<o)for(l=0;l<o;l++)e=r.next();return e&&e.done?(a=!0,e):(s-=1)<0?(a=!0,{done:!0}):((e=r.next()).done&&(a=!0),e)}function u(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function f(){return e(r[Br](),o,c)}}}));
//# sourceMappingURL=index.js.map
