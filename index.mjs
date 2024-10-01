// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";var o=1e308;function d(m,f,l){var p,h,j,u,v,a;if(!s(m))throw new TypeError(n("0Pn46",m));if(arguments.length>1){if(!r(f))throw new TypeError(n("0Pn3X",f));if(j=f,arguments.length>2){if(!r(l))throw new TypeError(n("0Pn2m",l));u=l}else u=o}else j=0,u=o;return v=u-j,a=-1,e(p={},"next",(function(){var e;if(h)return{done:!0};if(a+=1,v>0&&a<j)for(a=0;a<j;a++)e=m.next();if(e&&e.done)return h=!0,e;if((v-=1)<0)return h=!0,{done:!0};(e=m.next()).done&&(h=!0);return e})),e(p,"return",(function(e){if(h=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),i&&t(m[i])&&e(p,i,(function(){return d(m[i](),j,u)})),p}export{d as default};
//# sourceMappingURL=index.mjs.map
