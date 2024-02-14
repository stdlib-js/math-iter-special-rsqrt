// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,S=isNaN,x=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,o,a,l,s,f,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,f=0;f<r.length;f++)if(u(n=r[f]))l+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,S(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function P(r){var e,t;if(!F(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var $,C=Object.prototype,I=C.toString,B=C.__defineGetter__,R=C.__defineSetter__,L=C.__lookupGetter__,G=C.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var N=$;function Z(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function M(r){return"boolean"==typeof r}function U(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=U();function z(){return X&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&D.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=z()?function(r){var e,t,n;if(null==r)return q.call(r);t=r[K],e=H(r,K);try{r[K]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[K]=t:delete r[K],n}:function(r){return q.call(r)},Y=Boolean,rr=Boolean.prototype.toString;var er=z();function tr(r){return"object"==typeof r&&(r instanceof Y||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function nr(r){return M(r)||tr(r)}function ir(){return new Function("return this;")()}Z(nr,"isPrimitive",M),Z(nr,"isObject",tr);var or="object"==typeof self?self:null,ar="object"==typeof window?window:null,cr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof cr?cr:null,lr="object"==typeof globalThis?globalThis:null;var sr=function(r){if(arguments.length){if(!M(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ir()}if(lr)return lr;if(or)return or;if(ar)return ar;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=sr.document&&sr.document.childNodes,pr=Int8Array;function gr(){return/^\s*function\s*([^(]*)/i}var dr=/^\s*function\s*([^(]*)/i;Z(gr,"REGEXP",dr);var br=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};function yr(r){return null!==r&&"object"==typeof r}function hr(r){var e,t,n,i;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return yr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!br(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr));var vr="function"==typeof W||"object"==typeof pr||"function"==typeof fr?function(r){return hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?hr(r).toLowerCase():e};function wr(r){return"function"===vr(r)}var mr=/./,jr="function"==typeof Object.defineProperty?Object.defineProperty:null;var _r=Object.defineProperty;function Er(r){return"number"==typeof r}function Sr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function xr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Sr(i):Sr(i)+r,n&&(r="-"+r)),r}var kr=String.prototype.toLowerCase,Or=String.prototype.toUpperCase;function Tr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Er(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=xr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=xr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Or.call(r.specifier)?Or.call(t):kr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Vr(r){return"string"==typeof r}var Ar=Math.abs,Fr=String.prototype.toLowerCase,Pr=String.prototype.toUpperCase,$r=String.prototype.replace,Cr=/e\+(\d)$/,Ir=/e-(\d)$/,Br=/^(\d+)$/,Rr=/^(\d+)e/,Lr=/\.0$/,Gr=/\.0*e/,Nr=/(\..*[^0])0*e/;function Zr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Er(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ar(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$r.call(t,Nr,"$1e"),t=$r.call(t,Gr,"e"),t=$r.call(t,Lr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$r.call(t,Cr,"e+0$1"),t=$r.call(t,Ir,"e-0$1"),r.alternate&&(t=$r.call(t,Br,"$1."),t=$r.call(t,Rr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Pr.call(r.specifier)?Pr.call(t):Fr.call(t)}function Wr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Mr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Wr(n):Wr(n)+r}var Ur=String.fromCharCode,Xr=isNaN,zr=Array.isArray;function qr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Dr(r){var e,t,n,i,o,a,c,u,l;if(!zr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(Vr(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=qr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Xr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Xr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Tr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Xr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Xr(o)?String(n.arg):Ur(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Zr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=xr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Mr(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Hr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Jr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Kr(r){var e,t,n,i;for(t=[],i=0,n=Hr.exec(r);n;)(e=r.slice(i,Hr.lastIndex-n[0].length)).length&&t.push(e),t.push(Jr(n)),i=Hr.lastIndex,n=Hr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Qr(r){return"string"==typeof r}function Yr(r){var e,t;if(!Qr(r))throw new TypeError(Yr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Kr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Dr.apply(null,e)}var re,ee=Object.prototype,te=ee.toString,ne=ee.__defineGetter__,ie=ee.__defineSetter__,oe=ee.__lookupGetter__,ae=ee.__lookupSetter__;re=function(){try{return jr({},"x",{}),!0}catch(r){return!1}}()?_r:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===te.call(r))throw new TypeError(Yr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===te.call(t))throw new TypeError(Yr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(oe.call(r,e)||ae.call(r,e)?(n=r.__proto__,r.__proto__=ee,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&ne&&ne.call(r,e,t.get),a&&ie&&ie.call(r,e,t.set),r};var ce=re;function ue(r,e,t){ce(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function le(r){return"boolean"==typeof r}var se=U();function fe(){return se&&"symbol"==typeof Symbol.toStringTag}var pe=Object.prototype.toString;var ge="function"==typeof Symbol?Symbol:void 0,de="function"==typeof ge?ge.toStringTag:"";var be=fe()?function(r){var e,t,n;if(null==r)return pe.call(r);t=r[de],e=H(r,de);try{r[de]=void 0}catch(e){return pe.call(r)}return n=pe.call(r),e?r[de]=t:delete r[de],n}:function(r){return pe.call(r)},ye=Boolean,he=Boolean.prototype.toString;var ve=fe();function we(r){return"object"==typeof r&&(r instanceof ye||(ve?function(r){try{return he.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===be(r)))}function me(r){return le(r)||we(r)}function je(){return new Function("return this;")()}ue(me,"isPrimitive",le),ue(me,"isObject",we);var _e="object"==typeof self?self:null,Ee="object"==typeof window?window:null,Se="object"==typeof cr?cr:null,xe="object"==typeof globalThis?globalThis:null;var ke=function(r){if(arguments.length){if(!le(r))throw new TypeError(Yr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return je()}if(xe)return xe;if(_e)return _e;if(Ee)return Ee;if(Se)return Se;throw new Error("unexpected error. Unable to resolve global object.")}(),Oe=ke.document&&ke.document.childNodes,Te=Int8Array;function Ve(){return/^\s*function\s*([^(]*)/i}var Ae=/^\s*function\s*([^(]*)/i;ue(Ve,"REGEXP",Ae);var Fe=Array.isArray?Array.isArray:function(r){return"[object Array]"===be(r)};function Pe(r){return null!==r&&"object"==typeof r}function $e(r){var e,t,n,i;if(("Object"===(t=be(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ae.exec(n.toString()))return e[1]}return Pe(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ue(Pe,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Yr("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Fe(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pe));var Ce="function"==typeof mr||"object"==typeof Te||"function"==typeof Oe?function(r){return $e(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?$e(r).toLowerCase():e};function Ie(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&function(r){return"function"===Ce(r)}(r.next)}function Be(r){return"number"==typeof r}var Re=Number,Le=Re.prototype.toString;var Ge=z();function Ne(r){return"object"==typeof r&&(r instanceof Re||(Ge?function(r){try{return Le.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function Ze(r){return Be(r)||Ne(r)}Z(Ze,"isPrimitive",Be),Z(Ze,"isObject",Ne);var We="function"==typeof J&&"symbol"==typeof J("foo")&&H(J,"iterator")&&"symbol"==typeof J.iterator?Symbol.iterator:null;var Me,Ue=Object,Xe=Object.getPrototypeOf;Me=wr(Object.getPrototypeOf)?Xe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ze=Me;var qe=Object.prototype;function De(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!br(r)}(r)&&(e=function(r){return null==r?null:(r=Ue(r),ze(r))}(r),!e||!H(r,"constructor")&&H(e,"constructor")&&wr(e.constructor)&&"[object Function]"===Q(e.constructor)&&H(e,"isPrototypeOf")&&wr(e.isPrototypeOf)&&(e===qe||function(r){var e;for(e in r)if(!H(r,e))return!1;return!0}(r)))}function He(r,e){return De(e)?(H(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(P("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Je(r,e,t){var n,i,o,a;if(!Ie(r))throw new TypeError(P("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(e))throw new TypeError(P("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(o=He(n,t)))throw o;return Z(i={},"next",c),Z(i,"return",u),We&&wr(r[We])&&Z(i,We,l),i;function c(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:Be(t.value)?e(t.value):n.invalid,done:!1}}function u(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return Je(r[We](),e,n)}}var Ke=Math.sqrt;function Qe(r){return 1/Ke(r)}function Ye(r){return Je(r,Qe)}export{Ye as default};
//# sourceMappingURL=mod.js.map
