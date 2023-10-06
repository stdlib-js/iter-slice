// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";var o=1e308;function d(m,l,f){var p,h,j,v,u,a;if(!s(m))throw new TypeError(n("0Pn46,G5",m));if(arguments.length>1){if(!t(l))throw new TypeError(n("0Pn3X,F1",l));if(j=l,arguments.length>2){if(!t(f))throw new TypeError(n("0Pn2m,L9",f));v=f}else v=o}else j=0,v=o;return u=v-j,a=-1,e(p={},"next",g),e(p,"return",c),i&&r(m[i])&&e(p,i,x),p;function g(){var e;if(h)return{done:!0};if(a+=1,u>0&&a<j)for(a=0;a<j;a++)e=m.next();return e&&e.done?(h=!0,e):(u-=1)<0?(h=!0,{done:!0}):((e=m.next()).done&&(h=!0),e)}function c(e){return h=!0,arguments.length?{value:e,done:!0}:{done:!0}}function x(){return d(m[i](),j,v)}}export{d as default};
//# sourceMappingURL=index.mjs.map
