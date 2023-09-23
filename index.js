// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterRsqrt=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function _(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,b,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var S=String.fromCharCode,E=isNaN,O=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,e,n,i,a,l,f,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(c(n=r[s]))l+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function V(r){var t,e,n,o;for(e=[],o=0,n=P.exec(r);n;)(t=r.slice(o,P.lastIndex-n[0].length)).length&&e.push(t),e.push(k(n)),o=P.lastIndex,n=P.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function A(r){return"string"==typeof r}function B(r){var t,e,n;if(!A(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=V(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return x.apply(null,e)}var F,C=Object.prototype,L=C.toString,G=C.__defineGetter__,I=C.__defineSetter__,R=C.__lookupGetter__,M=C.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===L.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(R.call(r,t)||M.call(r,t)?(n=r.__proto__,r.__proto__=C,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&I&&I.call(r,t,e.set),r};var N=F;function $(r,t,e){N(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var U=/./;function X(r){return"boolean"==typeof r}function Z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var W=Z();function q(){return W&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(r,t){return null!=r&&D.call(r,t)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=q()?function(r){var t,e,n;if(null==r)return z.call(r);e=r[K],t=H(r,K);try{r[K]=void 0}catch(t){return z.call(r)}return n=z.call(r),t?r[K]=e:delete r[K],n}:function(r){return z.call(r)},Y=Boolean,rr=Boolean.prototype.toString;var tr=q();function er(r){return"object"==typeof r&&(r instanceof Y||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function nr(r){return X(r)||er(r)}function or(){return new Function("return this;")()}$(nr,"isPrimitive",X),$(nr,"isObject",er);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="object"==typeof global?global:null,cr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!X(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(cr)return cr;if(ir)return ir;if(ar)return ar;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=lr.document&&lr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;$(pr,"REGEXP",yr);var br=Z();var vr=Object.prototype.toString;var gr="function"==typeof J?J.toStringTag:"";var dr,hr=br&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return vr.call(r);e=r[gr],t=H(r,gr);try{r[gr]=void 0}catch(t){return vr.call(r)}return n=vr.call(r),t?r[gr]=e:delete r[gr],n}:function(r){return vr.call(r)};dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===hr(r)};var wr=dr;function _r(r){return null!==r&&"object"==typeof r}var mr=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!wr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(_r);function jr(r){var t,e,n,o;if(("Object"===(e=Q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=yr.exec(n.toString()))return t[1]}return _r(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(_r,"isObjectLikeArray",mr);var Sr="function"==typeof U||"object"==typeof sr||"function"==typeof fr?function(r){return jr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t};function Er(r){return"function"===Sr(r)}var Or=/./,Tr="function"==typeof Object.defineProperty?Object.defineProperty:null;var xr,Pr=Object.defineProperty,kr=Object.prototype,Vr=kr.toString,Ar=kr.__defineGetter__,Br=kr.__defineSetter__,Fr=kr.__lookupGetter__,Cr=kr.__lookupSetter__;xr=function(){try{return Tr({},"x",{}),!0}catch(r){return!1}}()?Pr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Vr.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Vr.call(e))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Fr.call(r,t)||Cr.call(r,t)?(n=r.__proto__,r.__proto__=kr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Ar&&Ar.call(r,t,e.get),a&&Br&&Br.call(r,t,e.set),r};var Lr=xr;function Gr(r,t,e){Lr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ir(r){return"boolean"==typeof r}var Rr=Z();function Mr(){return Rr&&"symbol"==typeof Symbol.toStringTag}var Nr=Object.prototype.toString;var $r="function"==typeof J?J.toStringTag:"";var Ur=Mr()?function(r){var t,e,n;if(null==r)return Nr.call(r);e=r[$r],t=H(r,$r);try{r[$r]=void 0}catch(t){return Nr.call(r)}return n=Nr.call(r),t?r[$r]=e:delete r[$r],n}:function(r){return Nr.call(r)},Xr=Boolean.prototype.toString;var Zr=Mr();function Wr(r){return"object"==typeof r&&(r instanceof Y||(Zr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Ur(r)))}function qr(r){return Ir(r)||Wr(r)}function zr(){return new Function("return this;")()}Gr(qr,"isPrimitive",Ir),Gr(qr,"isObject",Wr);var Dr="object"==typeof self?self:null,Hr="object"==typeof window?window:null,Jr="object"==typeof global?global:null,Kr="object"==typeof globalThis?globalThis:null;var Qr=function(r){if(arguments.length){if(!Ir(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return zr()}if(Kr)return Kr;if(Dr)return Dr;if(Hr)return Hr;if(Jr)return Jr;throw new Error("unexpected error. Unable to resolve global object.")}(),Yr=Qr.document&&Qr.document.childNodes,rt=Int8Array;function tt(){return/^\s*function\s*([^(]*)/i}var et=/^\s*function\s*([^(]*)/i;function nt(r){return null!==r&&"object"==typeof r}Gr(tt,"REGEXP",et);var ot=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!wr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(nt);function it(r){var t,e,n,o;if(("Object"===(e=Ur(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=et.exec(n.toString()))return t[1]}return nt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Gr(nt,"isObjectLikeArray",ot);var at="function"==typeof Or||"object"==typeof rt||"function"==typeof Yr?function(r){return it(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?it(r).toLowerCase():t};function ut(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===at(r)}(r.next)}function ct(r){return"number"==typeof r}var lt=Number,ft=lt.prototype.toString;var st=q();function pt(r){return"object"==typeof r&&(r instanceof lt||(st?function(r){try{return ft.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function yt(r){return ct(r)||pt(r)}$(yt,"isPrimitive",ct),$(yt,"isObject",pt);var bt="function"==typeof J&&"symbol"==typeof J("foo")&&H(J,"iterator")&&"symbol"==typeof J.iterator?Symbol.iterator:null;var vt=/./,gt="function"==typeof Object.defineProperty?Object.defineProperty:null;var dt,ht=Object.defineProperty,wt=Object.prototype,_t=wt.toString,mt=wt.__defineGetter__,jt=wt.__defineSetter__,St=wt.__lookupGetter__,Et=wt.__lookupSetter__;dt=function(){try{return gt({},"x",{}),!0}catch(r){return!1}}()?ht:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===_t.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===_t.call(e))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(St.call(r,t)||Et.call(r,t)?(n=r.__proto__,r.__proto__=wt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&mt&&mt.call(r,t,e.get),a&&jt&&jt.call(r,t,e.set),r};var Ot=dt;function Tt(r,t,e){Ot(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function xt(r){return"boolean"==typeof r}var Pt=Z();function kt(){return Pt&&"symbol"==typeof Symbol.toStringTag}var Vt=Object.prototype.toString;var At="function"==typeof J?J.toStringTag:"";var Bt=kt()?function(r){var t,e,n;if(null==r)return Vt.call(r);e=r[At],t=H(r,At);try{r[At]=void 0}catch(t){return Vt.call(r)}return n=Vt.call(r),t?r[At]=e:delete r[At],n}:function(r){return Vt.call(r)},Ft=Boolean.prototype.toString;var Ct=kt();function Lt(r){return"object"==typeof r&&(r instanceof Y||(Ct?function(r){try{return Ft.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Bt(r)))}function Gt(r){return xt(r)||Lt(r)}function It(){return new Function("return this;")()}Tt(Gt,"isPrimitive",xt),Tt(Gt,"isObject",Lt);var Rt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,Nt="object"==typeof global?global:null,$t="object"==typeof globalThis?globalThis:null;var Ut=function(r){if(arguments.length){if(!xt(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return It()}if($t)return $t;if(Rt)return Rt;if(Mt)return Mt;if(Nt)return Nt;throw new Error("unexpected error. Unable to resolve global object.")}(),Xt=Ut.document&&Ut.document.childNodes,Zt=Int8Array;function Wt(){return/^\s*function\s*([^(]*)/i}var qt=/^\s*function\s*([^(]*)/i;function zt(r){return null!==r&&"object"==typeof r}Tt(Wt,"REGEXP",qt);var Dt=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!wr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(zt);function Ht(r){var t,e,n,o;if(("Object"===(e=Bt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=qt.exec(n.toString()))return t[1]}return zt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Tt(zt,"isObjectLikeArray",Dt);var Jt="function"==typeof vt||"object"==typeof Zt||"function"==typeof Xt?function(r){return Ht(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ht(r).toLowerCase():t};function Kt(r){return"function"===Jt(r)}var Qt=Object,Yt=/./,re="function"==typeof Object.defineProperty?Object.defineProperty:null;var te,ee=Object.defineProperty,ne=Object.prototype,oe=ne.toString,ie=ne.__defineGetter__,ae=ne.__defineSetter__,ue=ne.__lookupGetter__,ce=ne.__lookupSetter__;te=function(){try{return re({},"x",{}),!0}catch(r){return!1}}()?ee:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===oe.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===oe.call(e))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(ue.call(r,t)||ce.call(r,t)?(n=r.__proto__,r.__proto__=ne,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ie&&ie.call(r,t,e.get),a&&ae&&ae.call(r,t,e.set),r};var le=te;function fe(r,t,e){le(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function se(r){return"boolean"==typeof r}var pe=Z();function ye(){return pe&&"symbol"==typeof Symbol.toStringTag}var be=Object.prototype.toString;var ve="function"==typeof J?J.toStringTag:"";var ge=ye()?function(r){var t,e,n;if(null==r)return be.call(r);e=r[ve],t=H(r,ve);try{r[ve]=void 0}catch(t){return be.call(r)}return n=be.call(r),t?r[ve]=e:delete r[ve],n}:function(r){return be.call(r)},de=Boolean.prototype.toString;var he=ye();function we(r){return"object"==typeof r&&(r instanceof Y||(he?function(r){try{return de.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ge(r)))}function _e(r){return se(r)||we(r)}function me(){return new Function("return this;")()}fe(_e,"isPrimitive",se),fe(_e,"isObject",we);var je="object"==typeof self?self:null,Se="object"==typeof window?window:null,Ee="object"==typeof global?global:null,Oe="object"==typeof globalThis?globalThis:null;var Te=function(r){if(arguments.length){if(!se(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return me()}if(Oe)return Oe;if(je)return je;if(Se)return Se;if(Ee)return Ee;throw new Error("unexpected error. Unable to resolve global object.")}(),xe=Te.document&&Te.document.childNodes,Pe=Int8Array;function ke(){return/^\s*function\s*([^(]*)/i}var Ve=/^\s*function\s*([^(]*)/i;function Ae(r){return null!==r&&"object"==typeof r}fe(ke,"REGEXP",Ve);var Be=function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!wr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Ae);function Fe(r){var t,e,n,o;if(("Object"===(e=ge(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Ve.exec(n.toString()))return t[1]}return Ae(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}fe(Ae,"isObjectLikeArray",Be);var Ce="function"==typeof Yt||"object"==typeof Pe||"function"==typeof xe?function(r){return Fe(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Fe(r).toLowerCase():t};var Le,Ge,Ie=Object.getPrototypeOf;Ge=Object.getPrototypeOf,Le="function"===Ce(Ge)?Ie:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===ge(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Re=Le;var Me=Object.prototype;function Ne(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!wr(r)}(r)&&(t=function(r){return null==r?null:(r=Qt(r),Re(r))}(r),!t||!H(r,"constructor")&&H(t,"constructor")&&Kt(t.constructor)&&"[object Function]"===Bt(t.constructor)&&H(t,"isPrototypeOf")&&Kt(t.isPrototypeOf)&&(t===Me||function(r){var t;for(t in r)if(!H(r,t))return!1;return!0}(r)))}function $e(r,t){return Ne(t)?(H(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(B("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Ue(r,t,e){var n,o,i,a;if(!ut(r))throw new TypeError(B("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!Er(t))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=$e(n,e)))throw i;return $(o={},"next",u),$(o,"return",c),bt&&Er(r[bt])&&$(o,bt,l),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:ct(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return Ue(r[bt](),t,n)}}var Xe=Math.sqrt;function Ze(r){return 1/Xe(r)}return function(r){return Ue(r,Ze)}}));
//# sourceMappingURL=index.js.map
