(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var fd={exports:{}},ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function BM(){if(D0)return ol;D0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return ol.Fragment=e,ol.jsx=i,ol.jsxs=i,ol}var L0;function FM(){return L0||(L0=1,fd.exports=BM()),fd.exports}var J=FM(),hd={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function HM(){if(U0)return se;U0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(C){return C===null||typeof C!="object"?null:(C=M&&C[M]||C["@@iterator"],typeof C=="function"?C:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,y={};function N(C,j,_t){this.props=C,this.context=j,this.refs=y,this.updater=_t||T}N.prototype.isReactComponent={},N.prototype.setState=function(C,j){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,j,"setState")},N.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function w(){}w.prototype=N.prototype;function O(C,j,_t){this.props=C,this.context=j,this.refs=y,this.updater=_t||T}var X=O.prototype=new w;X.constructor=O,x(X,N.prototype),X.isPureReactComponent=!0;var I=Array.isArray;function P(){}var st={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function U(C,j,_t){var vt=_t.ref;return{$$typeof:o,type:C,key:j,ref:vt!==void 0?vt:null,props:_t}}function ot(C,j){return U(C.type,j,C.props)}function ct(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function xt(C){var j={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(_t){return j[_t]})}var G=/\/+/g;function Q(C,j){return typeof C=="object"&&C!==null&&C.key!=null?xt(""+C.key):j.toString(36)}function H(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(P,P):(C.status="pending",C.then(function(j){C.status==="pending"&&(C.status="fulfilled",C.value=j)},function(j){C.status==="pending"&&(C.status="rejected",C.reason=j)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function at(C,j,_t,vt,Lt){var Nt=typeof C;(Nt==="undefined"||Nt==="boolean")&&(C=null);var Ct=!1;if(C===null)Ct=!0;else switch(Nt){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(C.$$typeof){case o:case e:Ct=!0;break;case v:return Ct=C._init,at(Ct(C._payload),j,_t,vt,Lt)}}if(Ct)return Lt=Lt(C),Ct=vt===""?"."+Q(C,0):vt,I(Lt)?(_t="",Ct!=null&&(_t=Ct.replace(G,"$&/")+"/"),at(Lt,j,_t,"",function(Pe){return Pe})):Lt!=null&&(ct(Lt)&&(Lt=ot(Lt,_t+(Lt.key==null||C&&C.key===Lt.key?"":(""+Lt.key).replace(G,"$&/")+"/")+Ct)),j.push(Lt)),1;Ct=0;var St=vt===""?".":vt+":";if(I(C))for(var V=0;V<C.length;V++)vt=C[V],Nt=St+Q(vt,V),Ct+=at(vt,j,_t,Nt,Lt);else if(V=b(C),typeof V=="function")for(C=V.call(C),V=0;!(vt=C.next()).done;)vt=vt.value,Nt=St+Q(vt,V++),Ct+=at(vt,j,_t,Nt,Lt);else if(Nt==="object"){if(typeof C.then=="function")return at(H(C),j,_t,vt,Lt);throw j=String(C),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function et(C,j,_t){if(C==null)return C;var vt=[],Lt=0;return at(C,vt,"","",function(Nt){return j.call(_t,Nt,Lt++)}),vt}function ft(C){if(C._status===-1){var j=C._result,_t=j();_t.then(function(vt){(C._status===0||C._status===-1)&&(C._status=1,C._result=vt,_t.status===void 0&&(_t.status="fulfilled",_t.value=vt))},function(vt){(C._status===0||C._status===-1)&&(C._status=2,C._result=vt,_t.status===void 0&&(_t.status="rejected",_t.reason=vt))}),C._status===-1&&(C._status=0,C._result=_t)}if(C._status===1)return C._result.default;throw C._result}var ht=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function $(C){var j=st.T,_t={};_t.types=j!==null?j.types:null,st.T=_t;try{var vt=C(),Lt=st.S;Lt!==null&&Lt(_t,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(P,ht)}catch(Nt){ht(Nt)}finally{j!==null&&_t.types!==null&&(j.types=_t.types),st.T=j}}function pt(C){var j=st.T;if(j!==null){var _t=j.types;_t===null?j.types=[C]:_t.indexOf(C)===-1&&_t.push(C)}else $(pt.bind(null,C))}var rt={map:et,forEach:function(C,j,_t){et(C,function(){j.apply(this,arguments)},_t)},count:function(C){var j=0;return et(C,function(){j++}),j},toArray:function(C){return et(C,function(j){return j})||[]},only:function(C){if(!ct(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return se.Activity=m,se.Children=rt,se.Component=N,se.Fragment=i,se.Profiler=u,se.PureComponent=O,se.StrictMode=s,se.Suspense=p,se.ViewTransition=S,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=st,se.__COMPILER_RUNTIME={__proto__:null,c:function(C){return st.H.useMemoCache(C)}},se.addTransitionType=pt,se.cache=function(C){return function(){return C.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(C,j,_t){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var vt=x({},C.props),Lt=C.key;if(j!=null)for(Nt in j.key!==void 0&&(Lt=""+j.key),j)!R.call(j,Nt)||Nt==="key"||Nt==="__self"||Nt==="__source"||Nt==="ref"&&j.ref===void 0||(vt[Nt]=j[Nt]);var Nt=arguments.length-2;if(Nt===1)vt.children=_t;else if(1<Nt){for(var Ct=Array(Nt),St=0;St<Nt;St++)Ct[St]=arguments[St+2];vt.children=Ct}return U(C.type,Lt,vt)},se.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},se.createElement=function(C,j,_t){var vt,Lt={},Nt=null;if(j!=null)for(vt in j.key!==void 0&&(Nt=""+j.key),j)R.call(j,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(Lt[vt]=j[vt]);var Ct=arguments.length-2;if(Ct===1)Lt.children=_t;else if(1<Ct){for(var St=Array(Ct),V=0;V<Ct;V++)St[V]=arguments[V+2];Lt.children=St}if(C&&C.defaultProps)for(vt in Ct=C.defaultProps,Ct)Lt[vt]===void 0&&(Lt[vt]=Ct[vt]);return U(C,Nt,Lt)},se.createRef=function(){return{current:null}},se.forwardRef=function(C){return{$$typeof:h,render:C}},se.isValidElement=ct,se.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:ft}},se.memo=function(C,j){return{$$typeof:_,type:C,compare:j===void 0?null:j}},se.startTransition=$,se.unstable_useCacheRefresh=function(){return st.H.useCacheRefresh()},se.use=function(C){return st.H.use(C)},se.useActionState=function(C,j,_t){return st.H.useActionState(C,j,_t)},se.useCallback=function(C,j){return st.H.useCallback(C,j)},se.useContext=function(C){return st.H.useContext(C)},se.useDebugValue=function(){},se.useDeferredValue=function(C,j){return st.H.useDeferredValue(C,j)},se.useEffect=function(C,j){return st.H.useEffect(C,j)},se.useEffectEvent=function(C){return st.H.useEffectEvent(C)},se.useId=function(){return st.H.useId()},se.useImperativeHandle=function(C,j,_t){return st.H.useImperativeHandle(C,j,_t)},se.useInsertionEffect=function(C,j){return st.H.useInsertionEffect(C,j)},se.useLayoutEffect=function(C,j){return st.H.useLayoutEffect(C,j)},se.useMemo=function(C,j){return st.H.useMemo(C,j)},se.useOptimistic=function(C,j){return st.H.useOptimistic(C,j)},se.useReducer=function(C,j,_t){return st.H.useReducer(C,j,_t)},se.useRef=function(C){return st.H.useRef(C)},se.useState=function(C){return st.H.useState(C)},se.useSyncExternalStore=function(C,j,_t){return st.H.useSyncExternalStore(C,j,_t)},se.useTransition=function(){return st.H.useTransition()},se.version="19.3.1",se}var N0;function dp(){return N0||(N0=1,hd.exports=HM()),hd.exports}var Cn=dp(),dd={exports:{}},ll={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function GM(){return O0||(O0=1,(function(o){function e(H,at){var et=H.length;H.push(at);t:for(;0<et;){var ft=et-1>>>1,ht=H[ft];if(0<u(ht,at))H[ft]=at,H[et]=ht,et=ft;else break t}}function i(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var at=H[0],et=H.pop();if(et!==at){H[0]=et;t:for(var ft=0,ht=H.length,$=ht>>>1;ft<$;){var pt=2*(ft+1)-1,rt=H[pt],C=pt+1,j=H[C];if(0>u(rt,et))C<ht&&0>u(j,rt)?(H[ft]=j,H[C]=et,ft=C):(H[ft]=rt,H[pt]=et,ft=pt);else if(C<ht&&0>u(j,et))H[ft]=j,H[C]=et,ft=C;else break t}}return at}function u(H,at){var et=H.sortIndex-at.sortIndex;return et!==0?et:H.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],_=[],v=1,m=null,S=3,M=!1,b=!1,T=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function O(H){for(var at=i(_);at!==null;){if(at.callback===null)s(_);else if(at.startTime<=H)s(_),at.sortIndex=at.expirationTime,e(p,at);else break;at=i(_)}}function X(H){if(T=!1,O(H),!b)if(i(p)!==null)b=!0,I||(I=!0,ct());else{var at=i(_);at!==null&&Q(X,at.startTime-H)}}var I=!1,P=-1,st=5,R=-1;function U(){return x?!0:!(o.unstable_now()-R<st)}function ot(){if(x=!1,I){var H=o.unstable_now();R=H;var at=!0;try{t:{b=!1,T&&(T=!1,N(P),P=-1),M=!0;var et=S;try{e:{for(O(H),m=i(p);m!==null&&!(m.expirationTime>H&&U());){var ft=m.callback;if(typeof ft=="function"){m.callback=null,S=m.priorityLevel;var ht=ft(m.expirationTime<=H);if(H=o.unstable_now(),typeof ht=="function"){m.callback=ht,O(H),at=!0;break e}m===i(p)&&s(p),O(H)}else s(p);m=i(p)}if(m!==null)at=!0;else{var $=i(_);$!==null&&Q(X,$.startTime-H),at=!1}}break t}finally{m=null,S=et,M=!1}at=void 0}}finally{at?ct():I=!1}}}var ct;if(typeof w=="function")ct=function(){w(ot)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,G=xt.port2;xt.port1.onmessage=ot,ct=function(){G.postMessage(null)}}else ct=function(){y(ot,0)};function Q(H,at){P=y(function(){H(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):st=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(H){switch(S){case 1:case 2:case 3:var at=3;break;default:at=S}var et=S;S=at;try{return H()}finally{S=et}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(H,at){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var et=S;S=H;try{return at()}finally{S=et}},o.unstable_scheduleCallback=function(H,at,et){var ft=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?ft+et:ft):et=ft,H){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=et+ht,H={id:v++,callback:at,priorityLevel:H,startTime:et,expirationTime:ht,sortIndex:-1},et>ft?(H.sortIndex=et,e(_,H),i(p)===null&&H===i(_)&&(T?(N(P),P=-1):T=!0,Q(X,et-ft))):(H.sortIndex=ht,e(p,H),b||M||(b=!0,I||(I=!0,ct()))),H},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(H){var at=S;return function(){var et=S;S=at;try{return H.apply(this,arguments)}finally{S=et}}}})(md)),md}var P0;function VM(){return P0||(P0=1,pd.exports=GM()),pd.exports}var gd={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function XM(){if(z0)return Rn;z0=1;var o=dp();function e(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(v,m,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===d?d:""+M,children:v,containerInfo:m,implementation:S}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.browser=function(v){return{$$typeof:f,_reason:v}},Rn.createPortal=function(v,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return h(v,m,null,S)},Rn.flushSync=function(v){var m=p.T,S=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=m,s.p=S,s.d.f()}},Rn.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},Rn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Rn.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var S=m.as,M=_(S,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,T=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:T}):S==="script"&&s.d.X(v,{crossOrigin:M,integrity:b,fetchPriority:T,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=_(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},Rn.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,M=_(S,m.crossOrigin);s.d.L(v,S,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(v,m){if(typeof v=="string")if(m){var S=_(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},Rn.requestFormReset=function(v){s.d.r(v)},Rn.unstable_batchedUpdates=function(v,m){return v(m)},Rn.useFormState=function(v,m,S){return p.H.useFormState(v,m,S)},Rn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Rn.version="19.3.1",Rn}var I0;function WM(){if(I0)return gd.exports;I0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gd.exports=XM(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function qM(){if(B0)return ll;B0=1;var o=VM(),e=dp(),i=WM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function _(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return p(l),t;if(c===r)return p(l),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var g=!1,E=l.child;E;){if(E===a){g=!0,a=l,r=c;break}if(E===r){g=!0,r=l,a=c;break}E=E.sibling}if(!g){for(E=c.child;E;){if(E===a){g=!0,a=c,r=l;break}if(E===r){g=!0,r=c,a=l;break}E=E.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,r,l,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=S(t);return a===null||T(n,t,a.child,{foundSelf:!1}),n}function T(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&T(t,n,a.child,r))return!0;a=a.sibling}return!1}function x(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var y=null,N=null;function w(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function O(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(y=t),!0):!1}function X(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function I(t,n,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var c=n;c;c=a(c))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,st=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),ot=Symbol.for("react.fragment"),ct=Symbol.for("react.strict_mode"),xt=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),pt=Symbol.for("react.legacy_hidden"),rt=Symbol.for("react.memo_cache_sentinel"),C=Symbol.for("react.view_transition"),j=Symbol.for("react.recoverable"),_t=Symbol.iterator;function vt(t){return t===null||typeof t!="object"?null:(t=_t&&t[_t]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Symbol.for("react.client.reference");function Nt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ot:return"Fragment";case xt:return"Profiler";case ct:return"StrictMode";case at:return"Suspense";case et:return"SuspenseList";case $:return"Activity";case C:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case U:return"Portal";case Q:return t.displayName||"Context";case G:return(t._context.displayName||"Context")+".Consumer";case H:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ft:return n=t.displayName||null,n!==null?n:Nt(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return Nt(t(n))}catch{}}return null}var Ct=Array.isArray,St=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Pe={pending:!1,data:null,method:null,action:null},jt=[],Qt=-1;function Pt(t){return{current:t}}function le(t){0>Qt||(t.current=jt[Qt],jt[Qt]=null,Qt--)}function It(t,n){Qt++,jt[Qt]=t.current,t.current=n}var L=Pt(null),A=Pt(null),nt=Pt(null),yt=Pt(null);function Mt(t,n){switch(It(nt,n),It(A,t),It(L,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?F_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=F_(n),t=H_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}le(L),It(L,t)}function Tt(){le(L),le(A),le(nt)}function Xt(t){var n=t.memoizedState;n!==null&&(Bs._currentValue=n.memoizedState,It(yt,t)),n=L.current;var a=H_(n,t.type);n!==a&&(It(A,t),It(L,a))}function wt(t){A.current===t&&(le(L),le(A)),yt.current===t&&(le(yt),Bs._currentValue=Pe)}var Bt,qt;function $t(t){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",qt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+t+qt}var Et=!1;function Ft(t,n){if(!t||Et)return"";Et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Dt){var W=Dt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Dt){W=Dt}gt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Dt){W=Dt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Dt){if(Dt&&W&&typeof Dt.stack=="string")return[Dt.stack,W.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],E=c[1];if(g&&E){var z=g.split(`
`),Y=E.split(`
`);for(l=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;l<Y.length&&!Y[l].includes("DetermineComponentFrameRoot");)l++;if(r===z.length||l===Y.length)for(r=z.length-1,l=Y.length-1;1<=r&&0<=l&&z[r]!==Y[l];)l--;for(;1<=r&&0<=l;r--,l--)if(z[r]!==Y[l]){if(r!==1||l!==1)do if(r--,l--,0>l||z[r]!==Y[l]){var it=`
`+z[r].replace(" at new "," at ");return t.displayName&&it.includes("<anonymous>")&&(it=it.replace("<anonymous>",t.displayName)),it}while(1<=r&&0<=l);break}}}finally{Et=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?$t(a):""}function Gt(t,n){switch(t.tag){case 26:case 27:case 5:return $t(t.type);case 16:return $t("Lazy");case 13:return t.child!==n&&n!==null?$t("Suspense Fallback"):$t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return Ft(t.type,!1);case 11:return Ft(t.type.render,!1);case 1:return Ft(t.type,!0);case 31:return $t("Activity");case 30:return $t("ViewTransition");default:return""}}function Yt(t){try{var n="",a=null;do n+=Gt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Vt=Object.prototype.hasOwnProperty,Ot=o.unstable_scheduleCallback,te=o.unstable_cancelCallback,ve=o.unstable_shouldYield,We=o.unstable_requestPaint,Kt=o.unstable_now,Rt=o.unstable_getCurrentPriorityLevel,B=o.unstable_ImmediatePriority,bt=o.unstable_UserBlockingPriority,At=o.unstable_NormalPriority,Jt=o.unstable_LowPriority,ee=o.unstable_IdlePriority,ze=o.log,Ie=o.unstable_setDisableYieldValue,Qe=null,De=null;function Te(t){if(typeof ze=="function"&&Ie(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Qe,t)}catch{}}var Le=Math.clz32?Math.clz32:Bc,hi=Math.log,Al=Math.LN2;function Bc(t){return t>>>=0,t===0?32:31-(hi(t)/Al|0)|0}var ia=256,pr=262144,aa=4194304;function Gi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=Gi(r):(g&=E,g!==0?l=Gi(g):a||(a=E&~t,a!==0&&(l=Gi(a))))):(E=r&~c,E!==0?l=Gi(E):g!==0?l=Gi(g):a||(a=r&~t,a!==0&&(l=Gi(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function gr(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Rl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Le(a),l=1<<r;n|=t[r],a&=~l}return n}function Fc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D(){var t=aa;return aa<<=1,(aa&62914560)===0&&(aa=4194304),t}function K(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function lt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function dt(t,n,a,r,l,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,Y=t.hiddenUpdates;for(a=g&~a;0<a;){var it=31-Le(a),gt=1<<it;E[it]=0,z[it]=-1;var W=Y[it];if(W!==null)for(Y[it]=null,it=0;it<W.length;it++){var tt=W[it];tt!==null&&(tt.lane&=-536870913)}a&=~gt}r!==0&&ut(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Le(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function zt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Le(a),l=1<<r;l&n|t[r]&n&&(t[r]|=n),a&=~l}}function kt(t,n){var a=n&-n;return a=(a&42)!==0?1:ne(a),(a&(t.suspendedLanes|n))!==0?0:a}function ne(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function re(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ce(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:E0(t.type))}function oe(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var ie=Math.random().toString(36).slice(2),me="__reactFiber$"+ie,Be="__reactProps$"+ie,je="__reactContainer$"+ie,di="__reactEvents$"+ie,Ze="__reactListeners$"+ie,de="__reactHandles$"+ie,$r="__reactResources$"+ie,Fe="__reactMarker$"+ie,pi="__reactLoad$"+ie;function _r(t){delete t[me],delete t[Be],delete t[Ze],delete t[de]}function Qn(t){var n;if(n=t[me])return n;for(var a=t.parentNode;a;){if(n=a[je]||a[me]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=i0(t);t!==null;){if(a=t[me])return a;t=i0(t)}return n}t=a,a=t.parentNode}return null}function Vi(t){if(t=t[me]||t[je]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function en(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Wn(t){var n=t[$r];return n||(n=t[$r]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(t){t[Fe]=!0}function On(t){t[pi]=void 0}var ts=new Set,Cl={};function Xi(t,n){es(t,n),es(t+"Capture",n)}function es(t,n){for(Cl[t]=n,t=0;t<n.length;t++)ts.add(n[t])}var nS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ep={},Tp={};function iS(t){return Vt.call(Tp,t)?!0:Vt.call(Ep,t)?!1:nS.test(t)?Tp[t]=!0:(Ep[t]=!0,!1)}var Re=!1;function bp(){var t=Re;return Re=!1,t}function wl(t,n,a){if(iS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Dl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ra(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function Jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ap(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function aS(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Hc(t){if(!t._valueTracker){var n=Ap(t)?"checked":"value";t._valueTracker=aS(t,n,""+t[n])}}function Rp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Ap(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var rS=/[\n"\\]/g;function mi(t){return t.replace(rS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gc(t,n,a,r,l,c,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Jn(n)):t.value!==""+Jn(n)&&(t.value=""+Jn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Vc(t,Jn(t.value)):Vc(t,Jn(n)):a!=null?Vc(t,Jn(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Jn(E):t.removeAttribute("name")}function Cp(t,n,a,r,l,c,g,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Hc(t);return}a=a!=null?""+Jn(a):"",n=n!=null?""+Jn(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Hc(t)}function Vc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ns(t,n,a,r){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Jn(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function wp(t,n,a){if(n!=null&&(n=""+Jn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Jn(a):""}function Dp(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Ct(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Jn(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Hc(t)}function is(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var sS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lp(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||sS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Up(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Re=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(Lp(t,l,r),Re=!0)}else for(var c in n)n.hasOwnProperty(c)&&Lp(t,c,n[c])}function Xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(t){return lS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var Wc=null;function qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var as=null,rs=null;function Np(t){var n=Vi(t);if(n&&(t=n.stateNode)){var a=t[Be]||null;t:switch(t=n.stateNode,n.type){case"input":if(Gc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var l=r[Be]||null;if(!l)throw Error(s(90));Gc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Rp(r)}break t;case"textarea":wp(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ns(t,!!a.multiple,n,!1)}}}var Yc=!1;function Op(t,n,a){if(Yc)return t(n,a);Yc=!0;try{var r=t(n);return r}finally{if(Yc=!1,(as!==null||rs!==null)&&(Lu(),as&&(n=as,t=rs,rs=as=null,Np(n),t)))for(n=0;n<t.length;n++)Np(t[n])}}function yo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Be]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=!1;if(sa)try{var So={};Object.defineProperty(So,"passive",{get:function(){kc=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{kc=!1}var Ca=null,jc=null,Ul=null;function Pp(){if(Ul)return Ul;var t,n=jc,a=n.length,r,l="value"in Ca?Ca.value:Ca.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===l[c-r];r++);return Ul=l.slice(t,1<r?1-r:void 0)}function Nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function zp(){return!1}function Pn(t){function n(a,r,l,c,g){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ol:zp,this.isPropagationStopped=zp,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Pn(wa),xo=P({},wa,{view:0,detail:0}),uS=Pn(xo),Zc,Kc,Mo,zl=P({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Zc=t.screenX-Mo.screenX,Kc=t.screenY-Mo.screenY):Kc=Zc=0,Mo=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Ip=Pn(zl),cS=P({},zl,{dataTransfer:0}),fS=Pn(cS),hS=P({},xo,{relatedTarget:0}),Qc=Pn(hS),dS=P({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),pS=Pn(dS),mS=P({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gS=Pn(mS),_S=P({},wa,{data:0}),Bp=Pn(_S),vS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=SS[t])?!!n[t]:!1}function Jc(){return xS}var MS=P({},xo,{key:function(t){if(t.key){var n=vS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ES=Pn(MS),TS=P({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Pn(TS),bS=P({},wa,{submitter:0}),AS=Pn(bS),RS=P({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),CS=Pn(RS),wS=P({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),DS=Pn(wS),LS=P({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),US=Pn(LS),NS=P({},wa,{newState:0,oldState:0,source:0}),OS=Pn(NS),PS=[9,13,27,32],$c=sa&&"CompositionEvent"in window,Eo=null;sa&&"documentMode"in document&&(Eo=document.documentMode);var zS=sa&&"TextEvent"in window&&!Eo,Hp=sa&&(!$c||Eo&&8<Eo&&11>=Eo),Gp=" ",Vp=!1;function Xp(t,n){switch(t){case"keyup":return PS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function IS(t,n){switch(t){case"compositionend":return Wp(n);case"keypress":return n.which!==32?null:(Vp=!0,Gp);case"textInput":return t=n.data,t===Gp&&Vp?null:t;default:return null}}function BS(t,n){if(ss)return t==="compositionend"||!$c&&Xp(t,n)?(t=Pp(),Ul=jc=Ca=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hp&&n.locale!=="ko"?null:n.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!FS[t.type]:n==="textarea"}function Yp(t,n,a,r){as?rs?rs.push(r):rs=[r]:as=r,n=Iu(n,"onChange"),0<n.length&&(a=new Pl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var To=null,bo=null;function HS(t){N_(t,0)}function Il(t){var n=en(t);if(Rp(n))return t}function kp(t,n){if(t==="change")return n}var jp=!1;if(sa){var tf;if(sa){var ef="oninput"in document;if(!ef){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),ef=typeof Zp.oninput=="function"}tf=ef}else tf=!1;jp=tf&&(!document.documentMode||9<document.documentMode)}function Kp(){To&&(To.detachEvent("onpropertychange",Qp),bo=To=null)}function Qp(t){if(t.propertyName==="value"&&Il(bo)){var n=[];Yp(n,bo,t,qc(t)),Op(HS,n)}}function GS(t,n,a){t==="focusin"?(Kp(),To=n,bo=a,To.attachEvent("onpropertychange",Qp)):t==="focusout"&&Kp()}function VS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(bo)}function XS(t,n){if(t==="click")return Il(n)}function WS(t,n){if(t==="input"||t==="change")return Il(n)}function qS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:qS;function Ao(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!Vt.call(n,l)||!$n(t[l],n[l]))return!1}return!0}function nf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,n){var a=Jp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jp(a)}}function tm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?tm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function em(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nf(t.document)}return n}function af(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var YS=sa&&"documentMode"in document&&11>=document.documentMode,os=null,rf=null,Ro=null,sf=!1;function nm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sf||os==null||os!==nf(r)||(r=os,"selectionStart"in r&&af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&Ao(Ro,r)||(Ro=r,r=Iu(rf,"onSelect"),0<r.length&&(n=new Pl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=os)))}function vr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ls={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionrun:vr("Transition","TransitionRun"),transitionstart:vr("Transition","TransitionStart"),transitioncancel:vr("Transition","TransitionCancel"),transitionend:vr("Transition","TransitionEnd")},of={},im={};sa&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function yr(t){if(of[t])return of[t];if(!ls[t])return t;var n=ls[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in im)return of[t]=n[a];return t}var am=yr("animationend"),rm=yr("animationiteration"),sm=yr("animationstart"),kS=yr("transitionrun"),jS=yr("transitionstart"),ZS=yr("transitioncancel"),om=yr("transitionend"),lm=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function Di(t,n){lm.set(t,n),Xi(n,[t])}var KS=0;function oa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Oi.identifierPrefix;var a=KS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function um(t){if(t==null||typeof t=="string")return t;var n=null,a=Cs;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function la(t,n){return t=um(t),n=um(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gi=[],us=0,uf=0;function Fl(){for(var t=us,n=uf=us=0;n<t;){var a=gi[n];gi[n++]=null;var r=gi[n];gi[n++]=null;var l=gi[n];gi[n++]=null;var c=gi[n];if(gi[n++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}c!==0&&cm(a,l,c)}}function Hl(t,n,a,r){gi[us++]=t,gi[us++]=n,gi[us++]=a,gi[us++]=r,uf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function cf(t,n,a,r){return Hl(t,n,a,r),Gl(t)}function Sr(t,n){return Hl(t,null,null,n),Gl(t)}function cm(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Le(a),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=a|536870912),c):null}function Gl(t){if(50<Zo)throw Zo=0,Du=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var cs={};function QS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,r){return new QS(t,n,a,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function fm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vl(t,n,a,r,l,c){var g=0;if(r=t,typeof r=="function")ff(r)&&(g=1);else if(typeof r=="string")g=bM(t,a,L.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case $:return t=qn(31,a,n,l),t.elementType=$,t.lanes=c,t;case ot:return xr(a.children,l,c,n);case ct:g=8,l|=24;break;case xt:return t=qn(12,a,n,l|2),t.elementType=xt,t.lanes=c,t;case at:return t=qn(13,a,n,l),t.elementType=at,t.lanes=c,t;case et:return t=qn(19,a,n,l),t.elementType=et,t.lanes=c,t;case pt:case C:return t=l|32,t=qn(30,a,n,t),t.elementType=C,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Q:g=10;break t;case G:g=9;break t;case H:g=11;break t;case ft:g=14;break t;case ht:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=qn(g,a,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function xr(t,n,a,r){return t=qn(7,t,r,n),t.lanes=a,t}function hf(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function hm(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function df(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var dm=new WeakMap;function _i(t,n){if(typeof t=="object"&&t!==null){var a=dm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Yt(n)},dm.set(t,n),n)}return{value:t,source:n,stack:Yt(n)}}var fs=[],hs=0,Xl=null,Co=0,vi=[],yi=0,Da=null,qi=1,Yi="";function ca(t,n){fs[hs++]=Co,fs[hs++]=Xl,Xl=t,Co=n}function pm(t,n,a){vi[yi++]=qi,vi[yi++]=Yi,vi[yi++]=Da,Da=t;var r=qi;t=Yi;var l=32-Le(r)-1;r&=~(1<<l),a+=1;var c=32-Le(n)+l;if(30<c){var g=l-l%5;c=(r&(1<<g)-1).toString(32),r>>=g,l-=g,qi=1<<32-Le(n)+l|a<<l|r,Yi=c+t}else qi=1<<c|a<<l|r,Yi=t}function Wl(t){t.return!==null&&(ca(t,1),pm(t,1,0))}function pf(t){for(;t===Xl;)Xl=fs[--hs],fs[hs]=null,Co=fs[--hs],fs[hs]=null;for(;t===Da;)Da=vi[--yi],vi[yi]=null,Yi=vi[--yi],vi[yi]=null,qi=vi[--yi],vi[yi]=null}function mm(t,n){vi[yi++]=qi,vi[yi++]=Yi,vi[yi++]=Da,qi=n.id,Yi=n.overflow,Da=t}var vn=null,qe=null,ge=!1,La=null,Si=!1,mf=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(_i(n,t)),mf}function gm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[me]=t,n[Be]=r,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Qo.length;a++)Se(Qo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Cp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Dp(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||I_(n.textContent,a)?(r.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),r.onScroll!=null&&Se("scroll",n),r.onScrollEnd!=null&&Se("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ua(t,!0)}function ql(t){for(vn=t.return;vn;)switch(vn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:vn=vn.return}}function ds(t){if(t!==vn)return!1;if(!ge)return ql(t),ge=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qh(t.type,t.memoizedProps)),a=!a),a&&qe&&Ua(t),ql(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=n0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=n0(t)}else n===27?(n=qe,ja(t.type)?(t=td,td=null,qe=t):qe=n):qe=vn?Mi(t.stateNode.nextSibling):null;return!0}function Mr(){qe=vn=null,ge=!1}function gf(){var t=La;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),La=null),t}function wo(t){La===null?La=[t]:La.push(t)}var _f=Pt(null),Er=null,fa=null;function Na(t,n,a){It(_f,n._currentValue),n._currentValue=a}function ha(t){t._currentValue=_f.current,le(_f)}function Yl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function vf(t,n,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var z=0;z<n.length;z++)if(E.context===n[z]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),Yl(c.return,a,t),r||(g=null);break t}c=E.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Yl(g,a,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,g=l.alternate,g!==null&&(g.lanes|=a),Yl(l.return,a,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Tr(t,n,a,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=l.type;$n(l.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(l===yt.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Bs):t=[Bs])}l=l.return}return t!==null&&vf(n,t,a,r),n.flags|=262144,t!==null}function kl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){Er=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return _m(Er,t)}function jl(t,n){return Er===null&&br(t),_m(t,n)}function _m(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(t===null)throw Error(s(308));fa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else fa=fa.next=n;return a}var JS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},$S=o.unstable_scheduleCallback,tx=o.unstable_NormalPriority,un={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yf(){return{controller:new JS,data:new Map,refCount:0}}function Do(t){t.refCount--,t.refCount===0&&$S(tx,function(){t.controller.abort()})}function vm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Lo=null;function ex(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Uo=null,Sf=0,Ar=0,ps=null;function nx(t,n){if(Uo===null){var a=Uo=[];Sf=0,Ar=zh(),ps={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Sf++,n.then(ym,ym),n}function ym(){if(--Sf===0&&(Lo=null,Uo!==null)){ps!==null&&(ps.status="fulfilled");var t=Uo;Uo=null,Ar=0,ps=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ix(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var Sm=St.S;St.S=function(t,n){if(h_=Kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&nx(t,n),Lo!==null)for(var a=Us;a!==null;)vm(a,Lo),a=a.next;if(a=t.types,a!==null){for(var r=Us;r!==null;)vm(r,a),r=r.next;if(Ar!==0){r=Lo,r===null&&(r=Lo=[]);for(var l=0;l<a.length;l++){var c=a[l];r.indexOf(c)===-1&&r.push(c)}}}Sm!==null&&Sm(t,n)};var Rr=Pt(null);function xf(){var t=Rr.current;return t!==null?t:Ve.pooledCache}function Zl(t,n){n===null?It(Rr,Rr.current):It(Rr,n.pool)}function xm(){var t=xf();return t===null?null:{parent:un._currentValue,pool:t}}var ms=Error(s(460)),Mf=Error(s(474)),Kl=Error(s(542)),Ql={then:function(){}};function Mm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Em(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,bm(t),t}throw wr=n,ms}}function Cr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(wr=a,ms):a}}var wr=null;function Tm(){if(wr===null)throw Error(s(459));var t=wr;return wr=null,t}function bm(t){if(t===ms||t===Kl)throw Error(s(483))}var gs=null,No=0;function Jl(t){var n=No;return No+=1,gs===null&&(gs=[]),Em(gs,t,n)}function Oa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===st?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Am(t){function n(q,F){if(t){var Z=q.deletions;Z===null?(q.deletions=[F],q.flags|=16):Z.push(F)}}function a(q,F){if(!t)return null;for(;F!==null;)n(q,F),F=F.sibling;return null}function r(q){for(var F=new Map;q!==null;)q.key===null?F.set(q.index,q):F.set(q.key,q),q=q.sibling;return F}function l(q,F){return q=ua(q,F),q.index=0,q.sibling=null,q}function c(q,F,Z){return q.index=Z,t?(Z=q.alternate,Z!==null?(Z=Z.index,Z<F?(q.flags|=2,F):Z):(q.flags|=134217730,F)):(q.flags|=1048576,F)}function g(q){return t&&q.alternate===null&&(q.flags|=134217730),q}function E(q,F,Z,mt){return F===null||F.tag!==6?(F=hf(Z,q.mode,mt),F.return=q,F):(F=l(F,Z),F.return=q,F)}function z(q,F,Z,mt){var Ht=Z.type;return Ht===ot?(q=it(q,F,Z.props.children,mt,Z.key),Oa(q,Z),q):F!==null&&(F.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===ht&&Cr(Ht)===F.type)?(F=l(F,Z.props),Oa(F,Z),F.return=q,F):(F=Vl(Z.type,Z.key,Z.props,null,q.mode,mt),Oa(F,Z),F.return=q,F)}function Y(q,F,Z,mt){return F===null||F.tag!==4||F.stateNode.containerInfo!==Z.containerInfo||F.stateNode.implementation!==Z.implementation?(F=df(Z,q.mode,mt),F.return=q,F):(F=l(F,Z.children||[]),F.return=q,F)}function it(q,F,Z,mt,Ht){return F===null||F.tag!==7?(F=xr(Z,q.mode,mt,Ht),F.return=q,F):(F=l(F,Z),F.return=q,F)}function gt(q,F,Z){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=hf(""+F,q.mode,Z),F.return=q,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case R:return Z=Vl(F.type,F.key,F.props,null,q.mode,Z),Oa(Z,F),Z.return=q,Z;case U:return F=df(F,q.mode,Z),F.return=q,F;case ht:return F=Cr(F),gt(q,F,Z)}if(Ct(F)||vt(F))return F=xr(F,q.mode,Z,null),F.return=q,F;if(typeof F.then=="function")return gt(q,Jl(F),Z);if(F.$$typeof===Q)return gt(q,jl(q,F),Z);$l(q,F)}return null}function W(q,F,Z,mt){var Ht=F!==null?F.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Ht!==null?null:E(q,F,""+Z,mt);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case R:return Z.key===Ht?z(q,F,Z,mt):null;case U:return Z.key===Ht?Y(q,F,Z,mt):null;case ht:return Z=Cr(Z),W(q,F,Z,mt)}if(Ct(Z)||vt(Z))return Ht!==null?null:it(q,F,Z,mt,null);if(typeof Z.then=="function")return W(q,F,Jl(Z),mt);if(Z.$$typeof===Q)return W(q,F,jl(q,Z),mt);$l(q,Z)}return null}function tt(q,F,Z,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get(Z)||null,E(F,q,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case R:return q=q.get(mt.key===null?Z:mt.key)||null,z(F,q,mt,Ht);case U:return q=q.get(mt.key===null?Z:mt.key)||null,Y(F,q,mt,Ht);case ht:return mt=Cr(mt),tt(q,F,Z,mt,Ht)}if(Ct(mt)||vt(mt))return q=q.get(Z)||null,it(F,q,mt,Ht,null);if(typeof mt.then=="function")return tt(q,F,Z,Jl(mt),Ht);if(mt.$$typeof===Q)return tt(q,F,Z,jl(F,mt),Ht);$l(F,mt)}return null}function Dt(q,F,Z,mt){for(var Ht=null,Ee=null,Zt=F,ae=F=0,hn=null;Zt!==null&&ae<Z.length;ae++){Zt.index>ae?(hn=Zt,Zt=null):hn=Zt.sibling;var be=W(q,Zt,Z[ae],mt);if(be===null){Zt===null&&(Zt=hn);break}t&&Zt&&be.alternate===null&&n(q,Zt),F=c(be,F,ae),Ee===null?Ht=be:Ee.sibling=be,Ee=be,Zt=hn}if(ae===Z.length)return a(q,Zt),ge&&ca(q,ae),Ht;if(Zt===null){for(;ae<Z.length;ae++)Zt=gt(q,Z[ae],mt),Zt!==null&&(F=c(Zt,F,ae),Ee===null?Ht=Zt:Ee.sibling=Zt,Ee=Zt);return ge&&ca(q,ae),Ht}for(Zt=r(Zt);ae<Z.length;ae++)hn=tt(Zt,q,ae,Z[ae],mt),hn!==null&&(t&&(be=hn.alternate,be!==null&&Zt.delete(be.key===null?ae:be.key)),F=c(hn,F,ae),Ee===null?Ht=hn:Ee.sibling=hn,Ee=hn);return t&&Zt.forEach(function($a){return n(q,$a)}),ge&&ca(q,ae),Ht}function Wt(q,F,Z,mt){if(Z==null)throw Error(s(151));for(var Ht=null,Ee=null,Zt=F,ae=F=0,hn=null,be=Z.next();Zt!==null&&!be.done;ae++,be=Z.next()){Zt.index>ae?(hn=Zt,Zt=null):hn=Zt.sibling;var $a=W(q,Zt,be.value,mt);if($a===null){Zt===null&&(Zt=hn);break}t&&Zt&&$a.alternate===null&&n(q,Zt),F=c($a,F,ae),Ee===null?Ht=$a:Ee.sibling=$a,Ee=$a,Zt=hn}if(be.done)return a(q,Zt),ge&&ca(q,ae),Ht;if(Zt===null){for(;!be.done;ae++,be=Z.next())be=gt(q,be.value,mt),be!==null&&(F=c(be,F,ae),Ee===null?Ht=be:Ee.sibling=be,Ee=be);return ge&&ca(q,ae),Ht}for(Zt=r(Zt);!be.done;ae++,be=Z.next())be=tt(Zt,q,ae,be.value,mt),be!==null&&(t&&(hn=be.alternate,hn!==null&&Zt.delete(hn.key===null?ae:hn.key)),F=c(be,F,ae),Ee===null?Ht=be:Ee.sibling=be,Ee=be);return t&&Zt.forEach(function(IM){return n(q,IM)}),ge&&ca(q,ae),Ht}function he(q,F,Z,mt){if(typeof Z=="object"&&Z!==null&&Z.type===ot&&Z.key===null&&Z.props.ref===void 0&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case R:t:{for(var Ht=Z.key;F!==null;){if(F.key===Ht){if(Ht=Z.type,Ht===ot){if(F.tag===7){a(q,F.sibling),mt=l(F,Z.props.children),Oa(mt,Z),mt.return=q,q=mt;break t}}else if(F.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===ht&&Cr(Ht)===F.type){a(q,F.sibling),mt=l(F,Z.props),Oa(mt,Z),mt.return=q,q=mt;break t}a(q,F);break}else n(q,F);F=F.sibling}Z.type===ot?(mt=xr(Z.props.children,q.mode,mt,Z.key),Oa(mt,Z),mt.return=q,q=mt):(mt=Vl(Z.type,Z.key,Z.props,null,q.mode,mt),Oa(mt,Z),mt.return=q,q=mt)}return g(q);case U:t:{for(Ht=Z.key;F!==null;){if(F.key===Ht)if(F.tag===4&&F.stateNode.containerInfo===Z.containerInfo&&F.stateNode.implementation===Z.implementation){a(q,F.sibling),mt=l(F,Z.children||[]),mt.return=q,q=mt;break t}else{a(q,F);break}else n(q,F);F=F.sibling}mt=df(Z,q.mode,mt),mt.return=q,q=mt}return g(q);case ht:return Z=Cr(Z),he(q,F,Z,mt)}if(Ct(Z))return Dt(q,F,Z,mt);if(vt(Z)){if(Ht=vt(Z),typeof Ht!="function")throw Error(s(150));return Z=Ht.call(Z),Wt(q,F,Z,mt)}if(typeof Z.then=="function")return he(q,F,Jl(Z),mt);if(Z.$$typeof===Q)return he(q,F,jl(q,Z),mt);$l(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,F!==null&&F.tag===6?(a(q,F.sibling),mt=l(F,Z),mt.return=q,q=mt):(a(q,F),mt=hf(Z,q.mode,mt),mt.return=q,q=mt),g(q)):a(q,F)}return function(q,F,Z,mt){try{No=0;var Ht=he(q,F,Z,mt);return gs=null,Ht}catch(Zt){if(Zt===ms||Zt===Kl)throw Zt;var Ee=qn(29,Zt,null,q.mode);return Ee.lanes=mt,Ee.return=q,Ee}finally{}}}var Dr=Am(!0),Rm=Am(!1),Pa=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ce&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Gl(t),cm(t,null,a),n}return Hl(t,r,n,a),Gl(t)}function Oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,zt(t,a)}}function bf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Af=!1;function Po(){if(Af){var t=ps;if(t!==null)throw t}}function zo(t,n,a,r){Af=!1;var l=t.updateQueue;Pa=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var z=E,Y=z.next;z.next=null,g===null?c=Y:g.next=Y,g=z;var it=t.alternate;it!==null&&(it=it.updateQueue,E=it.lastBaseUpdate,E!==g&&(E===null?it.firstBaseUpdate=Y:E.next=Y,it.lastBaseUpdate=z))}if(c!==null){var gt=l.baseState;g=0,it=Y=z=null,E=c;do{var W=E.lane&-536870913,tt=W!==E.lane;if(tt?(Me&W)===W:(r&W)===W){W!==0&&W===Ar&&(Af=!0),it!==null&&(it=it.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Dt=t,Wt=E;W=n;var he=a;switch(Wt.tag){case 1:if(Dt=Wt.payload,typeof Dt=="function"){gt=Dt.call(he,gt,W);break t}gt=Dt;break t;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=Wt.payload,W=typeof Dt=="function"?Dt.call(he,gt,W):Dt,W==null)break t;gt=P({},gt,W);break t;case 2:Pa=!0}}W=E.callback,W!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=l.callbacks,tt===null?l.callbacks=[W]:tt.push(W))}else tt={lane:W,tag:E.tag,payload:E.payload,callback:E.callback,next:null},it===null?(Y=it=tt,z=gt):it=it.next=tt,g|=W;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;tt=E,E=tt.next,tt.next=null,l.lastBaseUpdate=tt,l.shared.pending=null}}while(!0);it===null&&(z=gt),l.baseState=z,l.firstBaseUpdate=Y,l.lastBaseUpdate=it,c===null&&(l.shared.lanes=0),Wa|=g,t.lanes=g,t.memoizedState=gt}}function Cm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function wm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Cm(a[t],n)}var Ba=Pt(null),tu=Pt(0);function Dm(t,n){t=_a,It(tu,t),It(Ba,n),_a=t|n.baseLanes}function Rf(){It(tu,_a),It(Ba,Ba.current)}function Cf(){_a=tu.current,le(Ba),le(tu)}var En=Pt(null),Dn=null;function Fa(t){var n=t.alternate;It(Tn,Tn.current&1),It(En,t),Dn===null&&(n===null||Ba.current!==null||n.memoizedState!==null)&&(Dn=t)}function wf(t){It(Tn,Tn.current),It(En,t),Dn===null&&(Dn=t)}function Lm(t){t.tag===22?(It(Tn,Tn.current),It(En,t),Dn===null&&(Dn=t)):Ha()}function Ha(){It(Tn,Tn.current),It(En,En.current)}function ti(t){le(En),Dn===t&&(Dn=null),le(Tn)}var Tn=Pt(0);function Io(t,n){It(En,En.current),It(Tn,n)}function Df(t){le(Tn),le(En),Dn===t&&(Dn=null)}function eu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jh(a)||$h(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var da=0,fe=null,He=null,cn=null,nu=!1,_s=!1,Lr=!1,iu=0,Bo=0,vs=null,ax=0;function an(){throw Error(s(321))}function Lf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function Uf(t,n,a,r,l,c){return da=c,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,St.H=t===null||t.memoizedState===null?pg:mg,Lr=!1,c=a(r,l),Lr=!1,_s&&(c=Nm(n,a,r,l)),Um(t),c}function Um(t){St.H=cu;var n=He!==null&&He.next!==null;if(da=0,cn=He=fe=null,nu=!1,Bo=0,vs=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&kl(t)&&(fn=!0))}function Nm(t,n,a,r){fe=t;var l=0;do{if(_s&&(vs=null),Bo=0,_s=!1,25<=l)throw Error(s(301));if(l+=1,cn=He=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}St.H=hx,c=n(a,r)}while(_s);return c}function rx(){var t=St.H,n=t.useState()[0];return n=typeof n.then=="function"?Fo(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(fe.flags|=1024),n}function Nf(){var t=iu!==0;return iu=0,t}function Of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Pf(t){if(nu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nu=!1}da=0,cn=He=fe=null,_s=!1,Bo=iu=0,vs=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?fe.memoizedState=cn=t:cn=cn.next=t,cn}function ln(){if(He===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=cn===null?fe.memoizedState:cn.next;if(n!==null)cn=n,He=t;else{if(t===null)throw fe.alternate===null?Error(s(467)):Error(s(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?fe.memoizedState=cn=t:cn=cn.next=t}return cn}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(t){var n=Bo;return Bo+=1,vs===null&&(vs=[]),t=Em(vs,t,n),n=fe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,St.H=n===null||n.memoizedState===null?pg:mg),t}function ru(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fo(t);if(t.$$typeof===j)return;if(t.$$typeof===Q)return Mn(t)}throw Error(s(438,String(t)))}function zf(t){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=au(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=rt;return n.index++,a}function pa(t,n){return typeof n=="function"?n(t):n}function su(t){var n=ln();return If(n,He,t)}function If(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=g=null,z=null,Y=n,it=!1;do{var gt=Y.lane&-536870913;if(gt!==Y.lane?(Me&gt)===gt:(da&gt)===gt){var W=Y.revertLane;if(W===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),gt===Ar&&(it=!0);else if((da&W)===W){Y=Y.next,W===Ar&&(it=!0);continue}else gt={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},z===null?(E=z=gt,g=c):z=z.next=gt,fe.lanes|=W,Wa|=W;gt=Y.action,Lr&&a(c,gt),c=Y.hasEagerState?Y.eagerState:a(c,gt)}else W={lane:gt,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},z===null?(E=z=W,g=c):z=z.next=W,fe.lanes|=gt,Wa|=gt;Y=Y.next}while(Y!==null&&Y!==n);if(z===null?g=c:z.next=E,!$n(c,t.memoizedState)&&(fn=!0,it&&(a=ps,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=z,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Bf(t){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do c=t(c,g.action),g=g.next;while(g!==l);$n(c,n.memoizedState)||(fn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function Om(t,n,a){var r=fe,l=ln(),c=ge;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!$n((He||l).memoizedState,a);if(g&&(l.memoizedState=a,fn=!0),l=l.queue,Gf(Im.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||g||cn!==null&&(cn.memoizedState.tag&1)!==0,ys(t?9:8,{destroy:void 0},zm.bind(null,r,l,a,n),null),t){if(r.flags|=2048,Ve===null)throw Error(s(349));c||(da&127)!==0||Pm(r,n,a)}return a}function Pm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=au(),fe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function zm(t,n,a,r){n.value=a,n.getSnapshot=r,Bm(n)&&Fm(t)}function Im(t,n,a){return a(function(){Bm(n)&&Fm(t)})}function Bm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function Fm(t){var n=Sr(t,2);n!==null&&Zn(n,t,2)}function Ff(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),Lr){Te(!0);try{a()}finally{Te(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},n}function Hm(t,n,a,r){return t.baseState=a,If(t,He,typeof r=="function"?r:pa)}function sx(t,n,a,r,l){if(uu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};St.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,Gm(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Gm(t,n){var a=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=St.T,g={};g.types=c!==null?c.types:null,St.T=g;try{var E=a(l,r),z=St.S;z!==null&&z(g,E),Vm(t,n,E)}catch(Y){Hf(t,n,Y)}finally{c!==null&&g.types!==null&&(c.types=g.types),St.T=c}}else try{c=a(l,r),Vm(t,n,c)}catch(Y){Hf(t,n,Y)}}function Vm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Xm(t,n,r)},function(r){return Hf(t,n,r)}):Xm(t,n,a)}function Xm(t,n,a){n.status="fulfilled",n.value=a,Wm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Gm(t,a)))}function Hf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Wm(n),n=n.next;while(n!==r)}t.action=null}function Wm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function qm(t,n){return n}function Ym(t,n){if(ge){var a=Ve.formState;if(a!==null){t:{var r=fe;if(ge){if(qe){e:{for(var l=qe,c=Si;l.nodeType!==8;){if(!c){l=null;break e}if(l=Mi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){qe=Mi(l.nextSibling),r=l.data==="F!";break t}}Ua(r)}r=!1}r&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qm,lastRenderedState:n},a.queue=r,a=fg.bind(null,fe,r),r.dispatch=a,r=Ff(!1),c=Yf.bind(null,fe,!1,r.queue),r=zn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,a=sx.bind(null,fe,l,c,a),l.dispatch=a,r.memoizedState=t,[n,a,!1]}function km(t){var n=ln();return jm(n,He,t)}function jm(t,n,a){if(n=If(t,n,qm)[0],t=su(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Fo(n)}catch(g){throw g===ms?Kl:g}else r=n;n=ln();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,ys(9,{destroy:void 0},ox.bind(null,l,a),null)),[r,c,t]}function ox(t,n){t.action=n}function Zm(t){var n=ln(),a=He;if(a!==null)return jm(n,a,t);ln(),n=n.memoizedState,a=ln();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ys(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=au(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Km(){return ln().memoizedState}function ou(t,n,a,r){var l=zn();fe.flags|=t,l.memoizedState=ys(1|n,{destroy:void 0},a,r===void 0?null:r)}function lu(t,n,a,r){var l=ln();r=r===void 0?null:r;var c=l.memoizedState.inst;He!==null&&r!==null&&Lf(r,He.memoizedState.deps)?l.memoizedState=ys(n,c,a,r):(fe.flags|=t,l.memoizedState=ys(1|n,c,a,r))}function Qm(t,n){ou(8390656,8,t,n)}function Gf(t,n){lu(2048,8,t,n)}function lx(t){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=au(),fe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Jm(t){var n=ln().memoizedState;return lx({ref:n,nextImpl:t}),function(){if((Ce&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function $m(t,n){return lu(4,2,t,n)}function tg(t,n){return lu(4,4,t,n)}function eg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ng(t,n,a){a=a!=null?a.concat([t]):null,lu(4,4,eg.bind(null,n,t),a)}function Vf(){}function ig(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Lf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function ag(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Lf(n,r[1]))return r[0];if(r=t(),Lr){Te(!0);try{t()}finally{Te(!1)}}return a.memoizedState=[r,n],r}function Xf(t,n,a){return a===void 0||(da&1073741824)!==0&&(Me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=p_(),fe.lanes|=t,Wa|=t,a)}function rg(t,n,a,r){return $n(a,n)?a:Ba.current!==null?(t=Xf(t,a,r),$n(t,n)||(fn=!0),t):(da&106)===0||(da&1073741824)!==0&&(Me&261930)===0?(fn=!0,t.memoizedState=a):(t=p_(),fe.lanes|=t,Wa|=t,n)}function sg(t,n,a,r,l){var c=V.p;V.p=c!==0&&8>c?c:8;var g=St.T,E={};E.types=g!==null?g.types:null,St.T=E,Yf(t,!1,n,a);try{var z=l(),Y=St.S;if(Y!==null&&Y(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var it=ix(z,r);Ho(t,n,it,ai(t))}else Ho(t,n,r,ai(t))}catch(gt){Ho(t,n,{then:function(){},status:"rejected",reason:gt},ai())}finally{V.p=c,g!==null&&E.types!==null&&(g.types=E.types),St.T=g}}function ux(){}function Wf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var l=og(t).queue;sg(t,l,n,Pe,a===null?ux:function(){return lg(t),a(r)})}function og(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Pe,baseState:Pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:Pe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function lg(t){var n=og(t);n.next===null&&(n=t.alternate.memoizedState),Ho(t,n.next.queue,{},ai())}function qf(){return Mn(Bs)}function ug(){return ln().memoizedState}function cg(){return ln().memoizedState}function cx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=za(a);var r=Ia(n,t,a);r!==null&&(Zn(r,n,a),Oo(r,n,a)),n={cache:yf()},t.payload=n;return}n=n.return}}function fx(t,n,a){var r=ai();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(t)?hg(n,a):(a=cf(t,n,a,r),a!==null&&(Zn(a,t,r),dg(a,n,r)))}function fg(t,n,a){var r=ai();Ho(t,n,a,r)}function Ho(t,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(uu(t))hg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,E=c(g,a);if(l.hasEagerState=!0,l.eagerState=E,$n(E,g))return Hl(t,n,l,0),Ve===null&&Fl(),!1}catch{}finally{}if(a=cf(t,n,l,r),a!==null)return Zn(a,t,r),dg(a,n,r),!0}return!1}function Yf(t,n,a,r){if(r={lane:2,revertLane:zh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},uu(t)){if(n)throw Error(s(479))}else n=cf(t,a,r,2),n!==null&&Zn(n,t,2)}function uu(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function hg(t,n){_s=nu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function dg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,zt(t,a)}}var cu={readContext:Mn,use:ru,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},pg={readContext:Mn,use:ru,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ou(4194308,4,eg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ou(4194308,4,t,n)},useInsertionEffect:function(t,n){ou(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var r=t();if(Lr){Te(!0);try{t()}finally{Te(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=zn();if(a!==void 0){var l=a(n);if(Lr){Te(!0);try{a(n)}finally{Te(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=fx.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ff(t);var n=t.queue,a=fg.bind(null,fe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Vf,useDeferredValue:function(t,n){var a=zn();return Xf(a,t,n)},useTransition:function(){var t=Ff(!1);return t=sg.bind(null,fe,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=fe,l=zn();if(ge){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(Me&127)!==0||Pm(r,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,Qm(Im.bind(null,r,c,t),[t]),r.flags|=2048,ys(9,{destroy:void 0},zm.bind(null,r,c,a,n),null),a},useId:function(){var t=zn(),n=Ve.identifierPrefix;if(ge){var a=Yi,r=qi;a=(r&~(1<<32-Le(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=iu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ax++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qf,useFormState:Ym,useActionState:Ym,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yf.bind(null,fe,!0,a),a.dispatch=n,[t,n]},useMemoCache:zf,useCacheRefresh:function(){return zn().memoizedState=cx.bind(null,fe)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},mg={readContext:Mn,use:ru,useCallback:ig,useContext:Mn,useEffect:Gf,useImperativeHandle:ng,useInsertionEffect:$m,useLayoutEffect:tg,useMemo:ag,useReducer:su,useRef:Km,useState:function(){return su(pa)},useDebugValue:Vf,useDeferredValue:function(t,n){var a=ln();return rg(a,He.memoizedState,t,n)},useTransition:function(){var t=su(pa)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:Om,useId:ug,useHostTransitionStatus:qf,useFormState:km,useActionState:km,useOptimistic:function(t,n){var a=ln();return Hm(a,He,t,n)},useMemoCache:zf,useCacheRefresh:cg,useEffectEvent:Jm},hx={readContext:Mn,use:ru,useCallback:ig,useContext:Mn,useEffect:Gf,useImperativeHandle:ng,useInsertionEffect:$m,useLayoutEffect:tg,useMemo:ag,useReducer:Bf,useRef:Km,useState:function(){return Bf(pa)},useDebugValue:Vf,useDeferredValue:function(t,n){var a=ln();return He===null?Xf(a,t,n):rg(a,He.memoizedState,t,n)},useTransition:function(){var t=Bf(pa)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:Om,useId:ug,useHostTransitionStatus:qf,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,n){var a=ln();return He!==null?Hm(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:zf,useCacheRefresh:cg,useEffectEvent:Jm};function kf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var jf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ai(),l=za(r);l.payload=n,a!=null&&(l.callback=a),n=Ia(t,l,r),n!==null&&(Zn(n,t,r),Oo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ai(),l=za(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ia(t,l,r),n!==null&&(Zn(n,t,r),Oo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),r=za(a);r.tag=2,n!=null&&(r.callback=n),n=Ia(t,r,a),n!==null&&(Zn(n,t,a),Oo(n,t,a))}};function gg(t,n,a,r,l,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):n.prototype&&n.prototype.isPureReactComponent?!Ao(a,r)||!Ao(l,c):!0}function _g(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&jf.enqueueReplaceState(n,n.state,null)}function Ur(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function vg(t){Bl(t)}function yg(t){console.error(t)}function Sg(t){Bl(t)}function fu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function xg(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Zf(t,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){fu(t,n)},a}function Mg(t){return t=za(t),t.tag=3,t}function Eg(t,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){xg(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){xg(n,a,r),typeof l!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function dx(t,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Tr(n,a,l,!0),a=En.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Dn===null?Uu():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===Ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Nh(t,r,l)),!1;case 22:return a.flags|=65536,r===Ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Nh(t,r,l)),!1}throw Error(s(435,a.tag))}return Nh(t,r,l),Uu(),!1}if(ge)return n=En.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==mf&&(t=Error(s(422),{cause:r}),wo(_i(t,a)))):(r!==mf&&(n=Error(s(423),{cause:r}),wo(_i(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=_i(r,a),l=Zf(t.stateNode,r,l),bf(t,l),rn!==4&&(rn=2)),!1;var c=Error(s(520),{cause:r});if(c=_i(c,a),jo===null?jo=[c]:jo.push(c),rn!==4&&(rn=2),n===null)return!0;r=_i(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Zf(a.stateNode,r,t),bf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(qa===null||!qa.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Mg(l),Eg(l,t,a,r),bf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Kf=Error(s(461)),fn=!1;function pn(t,n,a,r){n.child=t===null?Rm(n,null,a,r):Dr(n,t.child,a,r)}function Tg(t,n,a,r,l){a=a.render;var c=n.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return br(n),r=Uf(t,n,a,g,c,l),E=Nf(),t!==null&&!fn?(Of(t,n,l),ma(t,n,l)):(ge&&E&&Wl(n),n.flags|=1,pn(t,n,r,l),n.child)}function bg(t,n,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!ff(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Ag(t,n,c,r,l)):(t=Vl(a.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!ah(t,l)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(g,r)&&t.ref===n.ref)return ma(t,n,l)}return n.flags|=1,t=ua(c,r),t.ref=n.ref,t.return=n,n.child=t}function Ag(t,n,a,r,l){if(t!==null){var c=t.memoizedProps;if(Ao(c,r)&&t.ref===n.ref)if(fn=!1,n.pendingProps=r=c,ah(t,l))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,ma(t,n,l)}return Qf(t,n,a,r,l)}function Rg(t,n,a,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return Cg(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,c!==null?c.cachePool:null),c!==null?Dm(n,c):Rf(),Lm(n);else return r=n.lanes=536870912,Cg(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(Zl(n,c.cachePool),Dm(n,c),Ha(),n.memoizedState=null):(t!==null&&Zl(n,null),Rf(),Ha());return pn(t,n,l,a),n.child}function Go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Cg(t,n,a,r,l){var c=xf();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Zl(n,null),Rf(),Lm(n),t!==null&&Tr(t,n,r,!0),n.childLanes=l,null}function hu(t,n){return n=du({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function wg(t,n,a){return Dr(n,t.child,null,a),t=hu(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function px(t,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ge){if(r.mode==="hidden")return t=hu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Go(null,t);if(wf(n),(t=qe)?(t=e0(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=hm(t),a.return=n,n.child=a,vn=n,qe=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return hu(n,r)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(wf(n),l)if(n.flags&256)n.flags&=-257,n=wg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Tr(t,n,a,!1),l=(a&t.childLanes)!==0,fn||l){if(Ba.current===null){if(r=Ve,r!==null&&(g=kt(r,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,Sr(t,g),Zn(r,t,g),Kf;Uu()}n=wg(t,n,a)}else t=c.treeContext,qe=Mi(g.nextSibling),vn=n,ge=!0,La=null,Si=!1,t!==null&&mm(n,t),n=hu(n,r),n.flags|=134221824;return n}return t=ua(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ss(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qf(t,n,a,r,l){return br(n),a=Uf(t,n,a,r,void 0,l),r=Nf(),t!==null&&!fn?(Of(t,n,l),ma(t,n,l)):(ge&&r&&Wl(n),n.flags|=1,pn(t,n,a,l),n.child)}function Dg(t,n,a,r,l,c){return br(n),n.updateQueue=null,a=Nm(n,r,a,l),Um(t),r=Nf(),t!==null&&!fn?(Of(t,n,c),ma(t,n,c)):(ge&&r&&Wl(n),n.flags|=1,pn(t,n,a,c),n.child)}function Lg(t,n,a,r,l){if(br(n),n.stateNode===null){var c=cs,g=a.contextType;typeof g=="object"&&g!==null&&(c=Mn(g)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=jf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},Ef(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?Mn(g):cs,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(kf(n,a,g,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&jf.enqueueReplaceState(c,c.state,null),zo(n,r,c,l),Po(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,z=Ur(a,E);c.props=z;var Y=c.context,it=a.contextType;g=cs,typeof it=="object"&&it!==null&&(g=Mn(it));var gt=a.getDerivedStateFromProps;it=typeof gt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,it||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||Y!==g)&&_g(n,c,r,g),Pa=!1;var W=n.memoizedState;c.state=W,zo(n,r,c,l),Po(),Y=n.memoizedState,E||W!==Y||Pa?(typeof gt=="function"&&(kf(n,a,gt,r),Y=n.memoizedState),(z=Pa||gg(n,a,z,r,W,Y,g))?(it||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Y),c.props=r,c.state=Y,c.context=g,r=z):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Tf(t,n),g=n.memoizedProps,it=Ur(a,g),c.props=it,gt=n.pendingProps,W=c.context,Y=a.contextType,z=cs,typeof Y=="object"&&Y!==null&&(z=Mn(Y)),E=a.getDerivedStateFromProps,(Y=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==gt||W!==z)&&_g(n,c,r,z),Pa=!1,W=n.memoizedState,c.state=W,zo(n,r,c,l),Po();var tt=n.memoizedState;g!==gt||W!==tt||Pa||t!==null&&t.dependencies!==null&&kl(t.dependencies)?(typeof E=="function"&&(kf(n,a,E,r),tt=n.memoizedState),(it=Pa||gg(n,a,it,r,W,tt,z)||t!==null&&t.dependencies!==null&&kl(t.dependencies))?(Y||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,tt,z),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,tt,z)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=tt),c.props=r,c.state=tt,c.context=z,r=it):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,Ss(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Dr(n,t.child,null,l),n.child=Dr(n,null,a,l)):pn(t,n,a,l),n.memoizedState=c.state,t=n.child):t=ma(t,n,l),t}function Ug(t,n,a,r){return Mr(),n.flags|=256,pn(t,n,a,r),n.child}var Jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $f(t){return{baseLanes:t,cachePool:xm()}}function th(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function Ng(t,n,a){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Tn.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ge){if(l?Fa(n):Ha(),(t=qe)?(t=e0(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=hm(t),a.return=n,n.child=a,vn=n,qe=null)):t=null,t===null)throw Ua(n);return $h(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ha(),l=n.mode,c=du({mode:"hidden",children:c},l),r=xr(r,l,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=$f(a),r.childLanes=th(t,g,a),n.memoizedState=Jf,Go(null,r)):(Fa(n),eh(n,c))}var E=t.memoizedState;if(E!==null){var z=E.dehydrated;if(z!==null)return mx(t,n,c,g,r,z,E,a)}return l?(Ha(),l=r.fallback,c=n.mode,E=t.child,z=E.sibling,r=ua(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,z!==null?l=ua(z,l):(l=xr(l,c,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Go(null,r),r=n.child,l=t.child.memoizedState,l===null?l=$f(a):(c=l.cachePool,c!==null?(E=un._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=xm(),l={baseLanes:l.baseLanes|a,cachePool:c}),r.memoizedState=l,r.childLanes=th(t,g,a),n.memoizedState=Jf,Go(t.child,r)):(Fa(n),a=t.child,t=a.sibling,a=ua(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function eh(t,n){return n=du({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function du(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function pu(t,n,a){return Dr(n,t.child,null,a),t=eh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function mx(t,n,a,r,l,c,g,E){if(a)return n.flags&256?(Fa(n),n.flags&=-257,pu(t,n,E)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,null):(Ha(),c=l.fallback,g=n.mode,l=du({mode:"visible",children:l.children},g),c=xr(c,g,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Dr(n,t.child,null,E),l=n.child,l.memoizedState=$f(E),l.childLanes=th(t,r,E),n.memoizedState=Jf,Go(null,l));if(Fa(n),$h(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var z=r.dgst;return r=z,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,wo({value:l,source:null,stack:null})),pu(t,n,E)}if(fn||Tr(t,n,E,!1),r=(E&t.childLanes)!==0,fn||r){if(Ba.current!==null)return pu(t,n,E);if(r=Ve,r!==null&&(l=kt(r,E),l!==0&&l!==g.retryLane))throw g.retryLane=l,Sr(t,l),Zn(r,t,l),Kf;return Jh(c)||Uu(),pu(t,n,E)}return Jh(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,qe=Mi(c.nextSibling),vn=n,ge=!0,La=null,Si=!1,t!==null&&mm(n,t),n=eh(n,l.children),n.flags|=134221824,n)}function Og(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Yl(t.return,n,a)}function Pg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&eu(a)===null&&(n=t),t=t.sibling}return n}function mu(t,n,a,r,l,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=l,g.treeForkCount=c)}function nh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function ih(t,n,a){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var g=Tn.current;if(n.flags&128)return Io(n,g),null;var E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,Io(n,g),l==="backwards"&&t!==null?(nh(t),pn(t,n,r,a),nh(t)):pn(t,n,r,a),r=ge?Co:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Og(t,a,n);else if(t.tag===19)Og(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=Pg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,nh(n)),mu(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&eu(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}mu(n,!0,a,null,c,r);break;case"together":mu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Pg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),mu(n,!1,l,a,c,r)}return n.child}function zg(t,n,a){var r=n.pendingProps;return Na(n,n.type,r.value),pn(t,n,r.children,a),n.child}function ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Tr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ua(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ua(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ah(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&kl(t)))}function gx(t,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),Na(n,un,t.memoizedState.cache),Mr();break;case 27:case 5:Xt(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,wf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Fa(n),n.flags|=128,null;r=Tr(t,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?Ng(t,n,a):(Fa(n),t=ma(t,n,a),t!==null?t.sibling:null)}Fa(n);break;case 19:if(n.flags&128)return ih(t,n,a);if(l=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Tr(t,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return ih(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Io(n,Tn.current),r)break;return null;case 22:return n.lanes=0,Rg(t,n,a,n.pendingProps);case 24:Na(n,un,t.memoizedState.cache)}return ma(t,n,a)}function Ig(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!ah(t,a)&&(n.flags&128)===0)return fn=!1,gx(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,ge&&(n.flags&1048576)!==0&&pm(n,Co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Cr(n.elementType),n.type=t,typeof t=="function")ff(t)?(r=Ur(t,r),n.tag=1,n=Lg(null,n,t,r,a)):(n.tag=0,n=Qf(null,n,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===H){n.tag=11,n=Tg(null,n,t,r,a);break t}else if(l===ft){n.tag=14,n=bg(null,n,t,r,a);break t}else if(l===Q){n.tag=10,n.type=t,n=zg(null,n,a);break t}}throw n=Nt(t)||t,Error(s(306,n,""))}}return n;case 0:return Qf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Ur(r,n.pendingProps),Lg(t,n,r,l,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,Tf(t,n),zo(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Na(n,un,r),r!==c.cache&&vf(n,[un],a,!0),Po(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Ug(t,n,r,a);break t}else if(r!==l){l=_i(Error(s(424)),n),wo(l),n=Ug(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qe=Mi(t.firstChild),vn=n,ge=!0,La=null,Si=!0,a=Rm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Mr(),r===l){n=ma(t,n,a);break t}pn(t,n,r,a)}n=n.child}return n;case 26:return Ss(t,n),t===null?(a=l0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ge||(n.stateNode=G_(n.type,n.pendingProps,nt.current,n)):n.memoizedState=l0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&ge&&(r=n.stateNode=a0(n.type,n.pendingProps,nt.current),vn=n,Si=!0,l=qe,ja(n.type)?(td=l,qe=Mi(r.firstChild)):qe=l),pn(t,n,n.pendingProps.children,a),Ss(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ge&&((l=r=qe)&&(r=cM(r,n.type,n.pendingProps,Si),r!==null?(n.stateNode=r,vn=n,qe=Mi(r.firstChild),Si=!1,l=!0):l=!1),l||Ua(n)),Xt(n),l=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,qh(l,c)?r=null:g!==null&&qh(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=Uf(t,n,rx,null,null,a),Bs._currentValue=l),Ss(t,n),pn(t,n,r,a),n.child;case 6:return t===null&&ge&&((t=a=qe)&&(a=fM(a,n.pendingProps,Si),a!==null?(n.stateNode=a,vn=n,qe=null,t=!0):t=!1),t||Ua(n)),null;case 13:return Ng(t,n,a);case 4:return Mt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Dr(n,null,r,a):pn(t,n,r,a),n.child;case 11:return Tg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Ss(t,n),pn(t,n,r,a),n.child;case 8:return pn(t,n,n.pendingProps.children,a),n.child;case 12:return pn(t,n,n.pendingProps.children,a),n.child;case 10:return zg(t,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,br(n),l=Mn(l),r=r(l),n.flags|=1,pn(t,n,r,a),n.child;case 14:return bg(t,n,n.type,n.pendingProps,a);case 15:return Ag(t,n,n.type,n.pendingProps,a);case 19:return ih(t,n,a);case 31:return px(t,n,a);case 22:return Rg(t,n,a,n.pendingProps);case 24:return br(n),r=Mn(un),t===null?(l=xf(),l===null&&(l=Ve,c=yf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:r,cache:l},Ef(n),Na(n,un,l)):((t.lanes&a)!==0&&(Tf(t,n),zo(n,null,null,a),Po()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Na(n,un,r)):(r=c.cache,Na(n,un,r),r!==l.cache&&vf(n,[un],a,!0))),pn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:ge&&Wl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Ss(t,n),pn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(t){t.flags|=4}function rh(t,n,a,r,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?h0(n,r):h0(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(v_())t.flags|=8192;else throw wr=Ql,Mf}else t.flags&=-16777217}function Bg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!d0(n))if(v_())t.flags|=8192;else throw wr=Ql,Mf}function gu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?D():536870912,t.lanes|=n,bs|=n)}function Vo(t,n){if(!ge)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ye(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function _x(t,n,a){var r=n.pendingProps;switch(pf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ha(un),Tt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ds(n)?ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gf())),Ye(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ga(n),c!==null?(Ye(n),Bg(n,c)):(Ye(n),rh(n,l,null,r,a))):c?c!==t.memoizedState?(ga(n),Ye(n),Bg(n,c)):(Ye(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ga(n),Ye(n),rh(n,l,t,r,a)),null;case 27:if(wt(n),a=nt.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ga(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),n.subtreeFlags&=-33554433,null}t=L.current,ds(n)?gm(n):(t=a0(l,r,a),n.stateNode=t,ga(n))}return Ye(n),n.subtreeFlags&=-33554433,null;case 5:if(wt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ga(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),n.subtreeFlags&=-33554433,null}if(c=L.current,ds(n))gm(n);else{var g=$o(nt.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}c[me]=n,c[Be]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(An(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ga(n)}}return Ye(n),n.subtreeFlags&=-33554433,rh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ga(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=nt.current,ds(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,l=vn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[me]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||I_(t.nodeValue,a)),t||Ua(n,!0)}else t=$o(t).createTextNode(r),t[me]=n,n.stateNode=t}return Ye(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ds(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[me]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),t=!1}else a=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ye(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ds(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[me]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),l=!1}else l=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),gu(n,n.updateQueue),Ye(n),null);case 4:return Tt(),t===null&&Hh(n.stateNode.containerInfo),n.flags|=67108864,Ye(n),null;case 10:return ha(n.type),Ye(n),null;case 19:if(Df(n),r=n.memoizedState,r===null)return Ye(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Vo(r,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=eu(t),c!==null){for(n.flags|=128,Vo(r,!1),t=c.updateQueue,n.updateQueue=t,gu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)fm(a,t),a=a.sibling;return Io(n,Tn.current&1|2),ge&&ca(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Kt()>Cu&&(n.flags|=128,l=!0,Vo(r,!1),n.lanes=4194304)}else{if(!l)if(t=eu(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,gu(n,t),Vo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!ge)return Ye(n),null}else 2*Kt()-r.renderingStartTime>Cu&&a!==536870912&&(n.flags|=128,l=!0,Vo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Kt(),t.sibling=null,c=Tn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||ge?Io(n,c):(a=c,It(En,n),It(Tn,a),Dn===null&&(Dn=n)),ge&&ca(n,r.treeForkCount),t}return Ye(n),null;case 22:case 23:return ti(n),Cf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&gu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&le(Rr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(un),Ye(n),null;case 25:return null;case 30:return n.flags|=33554432,Ye(n),null}throw Error(s(156,n.tag))}function vx(t,n){switch(pf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ha(un),Tt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return wt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Df(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return Tt(),null;case 10:return ha(n.type),null;case 22:case 23:return ti(n),Cf(),t!==null&&le(Rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ha(un),null;case 25:return null;default:return null}}function Fg(t,n){switch(pf(n),n.tag){case 3:ha(un),Tt();break;case 26:case 27:case 5:wt(n);break;case 4:Tt();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Df(n);break;case 10:ha(n.type);break;case 22:case 23:ti(n),Cf(),t!==null&&le(Rr);break;case 24:ha(un)}}function Xo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==l)}}catch(E){Ne(n,n.return,E)}}function Ga(t,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,l=n;var z=a,Y=E;try{Y()}catch(it){Ne(l,z,it)}}}r=r.next}while(r!==c)}}catch(it){Ne(n,n.return,it)}}function Hg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{wm(n,a)}catch(r){Ne(t,t.return,r)}}}function Gg(t,n,a){a.props=Ur(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ne(t,n,r)}}function ki(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=oa(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=j_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var g=new ri(t);m(t.child,!1,lM,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(E){Ne(t,n,E)}}function bn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){Ne(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ne(t,n,l)}else a.current=null}function _u(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)t0(t.stateNode,n[a])}function Vg(t){for(var n=t.return;n!==null&&(oh(n)&&t0(t.stateNode,n.stateNode),!sh(n));)n=n.return}function Wo(t){for(var n=t.return;n!==null&&(oh(n)&&uM(t.stateNode,n.stateNode),!sh(n));)n=n.return}function sh(t){return t.tag===5||t.tag===3||t.tag===27}function oh(t){return t&&t.tag===7&&t.stateNode!==null}function lh(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){Ne(t,t.return,l)}}function uh(t,n,a){try{var r=t.stateNode;Wx(r,t.type,a,n),r[Be]=n}catch(l){Ne(t,t.return,l)}}function Xg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function ch(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Xg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fh(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),_u(t,r),Re=!0;else if(l!==4&&(l===27&&(_u(t,r),r=null,ja(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(fh(t,n,a,r),t=t.sibling;t!==null;)fh(t,n,a,r),t=t.sibling}function vu(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),_u(t,r),Re=!0;else if(l!==4&&(l===27&&(_u(t,r),r=null,ja(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(vu(t,n,a,r),t=t.sibling;t!==null;)vu(t,n,a,r),t=t.sibling}function Wg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);An(n,r,a),n[me]=t,n[Be]=a}catch(c){Ne(t,t.return,c)}}var yu=!1,ei=null;function qg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(yu=!0)}var ji=null;function Yg(){var t=ji;return ji=null,t}var Yn=0;function xs(t,n,a,r,l){return Yn=0,kg(t.child,n,a,r,l)}function kg(t,n,a,r,l){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var E=jh(g);r.push(E),E.view&&(c=!0)}else c||jh(g).view&&(c=!0);yu=!0,Y_(g,Yn===0?n:n+"_"+Yn,a),Yn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||kg(t.child,n,a,r,l)&&(c=!0));t=t.sibling}return c}function Zi(t,n){for(;t!==null;)t.tag===5?k_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Zi(t.child,n)),t=t.sibling}function Su(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Su(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=la(n.default,n.share),n!=="none"&&(xs(t,a,n,null,!1)||Zi(t.child,!1))}t=t.sibling}}function hh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=oa(r,a),c=la(r.default,a.paired?r.share:r.enter);c!=="none"?xs(t,l,c,null,!1)?(Su(t),a.paired||n||ws(t,r.onEnter)):Zi(t.child,!1):Su(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)hh(t,n),t=t.sibling;else Su(t)}function dh(t){if(ei!==null&&ei.size!==0){var n=ei;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=la(a.default,a.share);if(c!=="none"&&(xs(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,ws(t,a.onShare)):Zi(t.child,!1)),n.delete(r),n.size===0)break}}}dh(t)}t=t.sibling}}}function ph(t){if(t.tag===30){var n=t.memoizedProps,a=oa(n,t.stateNode),r=ei!==null?ei.get(a):void 0,l=la(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(xs(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ei.delete(a),ws(t,n.onShare)):ws(t,n.onExit):Zi(t.child,!1)),ei!==null&&dh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ph(t),t=t.sibling;else ei!==null&&dh(t)}function jg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=oa(n,t.stateNode);n=la(n.default,n.update),t.flags&=-5,n!=="none"&&xs(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&jg(t);t=t.sibling}}function mh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Zi(t.child,!1))}mh(t)}t=t.sibling}}function xu(t){if(t.tag===30)t.stateNode.paired=null,Zi(t.child,!1),mh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xu(t),t=t.sibling;else mh(t)}function Zg(t){for(t=t.child;t!==null;)t.tag===30?Zi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Zg(t),t=t.sibling}function gh(t,n,a,r,l,c,g){for(var E=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(c!==null&&Yn<c.length){var Y=c[Yn],it=jh(z);(Y.view||it.view)&&(E=!0);var gt;if(gt=(t.flags&4)===0)if(it.clip)gt=!0;else{gt=Y.rect;var W=it.rect;gt=gt.y!==W.y||gt.x!==W.x||gt.height!==W.height||gt.width!==W.width}gt&&(t.flags|=4),it.abs?it=!Y.abs:(Y=Y.rect,it=it.rect,it=Y.height!==it.height||Y.width!==it.width),it&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Y_(z,Yn===0?a:a+"_"+Yn,l),E&&(t.flags&4)!==0||(ji===null&&(ji=[]),ji.push(z,Yn===0?r:r+"_"+Yn,n.memoizedProps)),Yn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:gh(t,n.child,a,r,l,c,g)&&(E=!0));n=n.sibling}return E}function Kg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=oa(a,r),c=la(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Yn=0,l=gh(r,E,l,l,c,g,!1),(t.flags&4)!==0&&l&&ws(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Kg(t);t=t.sibling}}var yn=!1,we=!1,Ki=!1,_h=!1,Qg=typeof WeakSet=="function"?WeakSet:Set,Sn=null,Qi=!1,qo=!1,Mu=!1,vh=!1;function yx(t,n,a){if(t=t.containerInfo,Xh=Fs,t=em(t),af(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var E=0,z=-1,Y=-1,it=0,gt=0,W=t,tt=null;e:for(;;){for(var Dt;W!==r||c!==0&&W.nodeType!==3||(z=E+c),W!==g||l!==0&&W.nodeType!==3||(Y=E+l),W.nodeType===3&&(E+=W.nodeValue.length),(Dt=W.firstChild)!==null;)tt=W,W=Dt;for(;;){if(W===t)break e;if(tt===r&&++it===c&&(z=E),tt===g&&++gt===l&&(Y=E),(Dt=W.nextSibling)!==null)break;W=tt,tt=W.parentNode}W=Dt}r=z===-1||Y===-1?null:{start:z,end:Y}}else r=null}r=r||{start:0,end:0}}else r=null;for(Wh={focusedElem:t,selectionRange:r},Fs=!1,a=(a&335544064)===a,Sn=n,n=a?9270:1024;Sn!==null;){if(t=Sn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&ph(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&qg(t),Eu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&ph(r),Eu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&qg(t),Eu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Sn=r):(a&&jg(t),Eu(a))}}ei=null}function Eu(t){for(;Sn!==null;){var n=Sn,a=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var g=Ur(n.type,l);a=c.getSnapshotBeforeUpdate(g,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){Ne(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Qh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Qh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=oa(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=la(l.default,l.update),l!=="none"&&xs(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Sn=r;break}Sn=n.return}}function Jg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),r&4&&Xo(5,a);break;case 1:if(Ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ne(a,a.return,g)}else{var l=Ur(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ne(a,a.return,g)}}r&64&&Hg(a),r&512&&ki(a,a.return);break;case 3:if(Ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{wm(t,n)}catch(g){Ne(a,a.return,g)}}break;case 27:n===null&&r&4&&Wg(a);case 26:case 5:Ji(t,a),n===null&&r&4&&lh(a),r&512&&ki(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),r&4&&n_(t,a);break;case 13:Ji(t,a),r&4&&i_(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Lx.bind(null,a),hM(t,a))));break;case 22:if(r=a.memoizedState!==null||yn,!r){var c=n!==null&&n.memoizedState!==null||we;n=yn,l=we,yn=r,(we=c)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ni(t,a,r)):Ji(t,a),yn=n,we=l}break;case 30:Ji(t,a),r&512&&ki(a,a.return);break;case 7:r&512&&ki(a,a.return);default:Ji(t,a)}}function yh(t,n){for(t=t.child;t!==null;)$g(t,n),t=t.sibling}function $g(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(z){Ne(t,t.return,z)}Sh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Re=!0}catch(z){Ne(t,t.return,z)}break;case 18:try{var E=t.stateNode;n?q_(E,!0):q_(t.stateNode,!1)}catch(z){Ne(t,t.return,z)}break;case 22:case 23:t.memoizedState===null&&yh(t,n);break;default:yh(t,n)}}function Sh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:$g(a,r);break t;case 22:a.memoizedState===null&&Sh(a,r);break t;default:Sh(a,r)}}t=t.sibling}}function t_(t){var n=t.alternate;n!==null&&(t.alternate=null,t_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&_r(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,kn=!1;function Li(t,n,a){for(a=a.child;a!==null;)e_(t,n,a),a=a.sibling}function e_(t,n,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 26:we||bn(a,n),Li(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!we&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:we||bn(a,n),Wo(a);var r=Je,l=kn;ja(a.type)&&(Je=a.stateNode,kn=!1),Li(t,n,a),r0(a.stateNode,a.type,a.memoizedProps),Je=r,kn=l;break;case 5:we||bn(a,n),Wo(a);case 6:if(a.tag===6&&Wo(a),r=Je,l=kn,Je=null,Li(t,n,a),Je=r,kn=l,Je!==null)if(kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode),Re=!0}catch(c){Ne(a,n,c)}else try{Je.removeChild(a.stateNode),Re=!0}catch(c){Ne(a,n,c)}break;case 18:Je!==null&&(kn?(t=Je,W_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Hs(t)):W_(Je,a.stateNode));break;case 4:r=Je,l=kn,Je=a.stateNode.containerInfo,kn=!0,Li(t,n,a),Je=r,kn=l;break;case 0:case 11:case 14:case 15:Ga(2,a,n),we||Ga(4,a,n),Li(t,n,a);break;case 1:we||(bn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Gg(a,n,r)),Li(t,n,a);break;case 21:Li(t,n,a);break;case 22:we=(r=we)||a.memoizedState!==null,Li(t,n,a),we=r;break;case 30:bn(a,n),Li(t,n,a);break;case 7:we||bn(a,n),Li(t,n,a);break;default:Li(t,n,a)}}function n_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Hs(t)}catch(a){Ne(n,n.return,a)}}}function i_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hs(t)}catch(a){Ne(n,n.return,a)}}function Sx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Qg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Qg),n;default:throw Error(s(435,t.tag))}}function Tu(t,n){var a=Sx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=Ux.bind(null,t,r);r.then(l,l)}})}function In(t,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],g=t,E=n,z=E;t:for(;z!==null;){switch(z.tag){case 27:if(ja(z.type)){Je=z.stateNode,kn=!1;break t}break;case 5:Je=z.stateNode,kn=!1;break t;case 3:case 4:Je=z.stateNode.containerInfo,kn=!0;break t}z=z.return}if(Je===null)throw Error(s(160));e_(g,E,c),Je=null,kn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)a_(n,t,a),n=n.sibling}var Ui=null;function a_(t,n,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var g=r[c];g.ref.impl=g.nextImpl}In(n,t,a),Bn(t),l&4&&(Ga(3,t,t.return),Xo(3,t),Ga(5,t,t.return));break;case 1:In(n,t,a),Bn(t),l&512&&(we||r===null||bn(r,r.return)),l&64&&yn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ui,In(n,t,a),Bn(t),l&512&&(we||r===null||bn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(yn)t.stateNode=G_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Fe]||r[me]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),An(r,n,a),r[me]=t,nn(r),n=r;break t;case"link":if(c=f0("link","href",l).get(n+(a.href||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break e}}r=l.createElement(n),An(r,n,a),l.head.appendChild(r);break;case"meta":if(c=f0("meta","content",l).get(n+(a.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break e}}r=l.createElement(n),An(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[me]=t,nn(r),n=r}t.stateNode=n}else yn||ad(c,t.type,t.stateNode);else t.stateNode=c0(c,a,t.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||we||n.parentNode.removeChild(n)):l.count--,a===null?yn||ad(c,t.type,t.stateNode):c0(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&uh(t,t.memoizedProps,r.memoizedProps);break;case 27:In(n,t,a),Bn(t),l&512&&(we||r===null||bn(r,r.return)),r!==null&&l&4&&uh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Ki,Ki=!1,In(n,t,a),Ki=c,Bn(t),l&512&&(we||r===null||bn(r,r.return)),t.flags&32){n=t.stateNode;try{is(n,""),Re=!0}catch(it){Ne(t,t.return,it)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,uh(t,n,r!==null?r.memoizedProps:n)),l&1024&&(_h=!0);break;case 6:if(In(n,t,a),Bn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Re=!0}catch(it){Ne(t,t.return,it)}}break;case 3:if(Re=!1,Fu=null,c=Ui,Ui=tl(n.containerInfo),In(n,t,a),Ui=c,Bn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Hs(n.containerInfo)}catch(it){Ne(t,t.return,it)}_h&&(_h=!1,r_(t)),Re=!1;break;case 4:l=Ki,Ki=yn,r=bp(),c=Ui,Ui=tl(t.stateNode.containerInfo),In(n,t,a),Bn(t),Ui=c,Re&&qo&&(Mu=!0),Re=r,Ki=l;break;case 12:In(n,t,a),Bn(t);break;case 31:In(n,t,a),Bn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 13:In(n,t,a),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ru=Kt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 22:c=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var E=yn,z=we,Y=Ki;yn=E||c,Ki=Y||c,we=z||g,In(n,t,a),we=z,Ki=Y,yn=E,Bn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||g||yn||we||(n=g||we,a=yn,r=we,yn=c||yn,we=n,Va(t,2),yn=a,we=r),!c&&Ki||yh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Tu(t,a))));break;case 19:In(n,t,a),Bn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 30:l&512&&(we||r===null||bn(r,r.return)),l=bp(),c=qo,g=(a&335544064)===a,E=t.memoizedProps,qo=g&&la(E.default,E.update)!=="none",In(n,t,a),Bn(t),g&&r!==null&&Re&&(t.flags|=4),qo=c,Re=l;break;case 21:break;case 7:l&512&&(we||r===null||bn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:In(n,t,a),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Xg(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(oh(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(sh(l))break;l=l.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var E=a.stateNode,z=ch(t);vu(t,z,E,g);break;case 5:var Y=a.stateNode;a.flags&32&&(is(Y,""),a.flags&=-33);var it=ch(t);vu(t,it,Y,g);break;case 3:case 4:var gt=a.stateNode.containerInfo,W=ch(t);fh(t,W,gt,g);break;default:throw Error(s(161))}}catch(tt){Ne(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function r_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;r_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Fs=!0,n.reset(),Fs=!1),t=t.sibling}}function Ms(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)s_(n,t),n=n.sibling;else Kg(n)}function s_(t,n){var a=t.alternate;if(a===null)hh(t,!1);else switch(t.tag){case 3:if(vh=Qi=!1,Yg(),Ms(n,t),!Qi&&!Mu){if(t=ji,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];k_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),vh=!0}ji=null;break;case 5:Ms(n,t);break;case 4:r=Qi,Qi=!1,Ms(n,t),Qi&&(Mu=!0),Qi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?hh(t,!1):Ms(n,t));break;case 30:r=Qi,l=Yg(),Qi=!1,Ms(n,t),Qi&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=oa(c,g),g=oa(a.memoizedProps,g);var E=la(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Yn=0,n=gh(t,a,n,g,E,c,!0),Yn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(ws(t,t.memoizedProps.onUpdate),ji=l):l!==null&&(l.push.apply(l,ji),ji=l),Qi=(t.flags&32)!==0?!0:r;break;default:Ms(n,t)}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Jg(t,n.alternate,n),n=n.sibling}function Va(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ga(4,a,a.return),Va(a,r);break;case 1:bn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Gg(a,a.return,l),Va(a,r);break;case 27:(r&2)!==0&&r0(a.stateNode,a.type,a.memoizedProps);case 5:bn(a,a.return),a.tag!==5&&a.tag!==27||Wo(a),Va(a,r);break;case 6:Wo(a);break;case 26:bn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||we||l.parentNode.removeChild(l),Va(a,r);break;case 22:a.memoizedState===null&&Va(a,r);break;case 30:bn(a,a.return),Va(a,r);break;case 7:bn(a,a.return);default:Va(a,r)}t=t.sibling}}function Ni(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,g=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ni(l,c,a),Xo(4,c);break;case 1:if(Ni(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(it){Ne(r,r.return,it)}if(r=c,l=r.updateQueue,l!==null){var z=r.stateNode;try{var Y=l.shared.hiddenCallbacks;if(Y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Y.length;l++)Cm(Y[l],z)}catch(it){Ne(r,r.return,it)}}E&&g&64&&Hg(c),ki(c,c.return);break;case 27:(a&2)!==0&&Wg(c);case 5:c.tag!==5&&c.tag!==27||Vg(c),Ni(l,c,a),E&&r===null&&g&4&&lh(c),ki(c,c.return);break;case 6:Vg(c);break;case 26:z=c.stateNode,c.memoizedState!==null||z===null||yn||ad(tl(z.ownerDocument),c.type,z),Ni(l,c,a),E&&r===null&&g&4&&lh(c),ki(c,c.return);break;case 12:Ni(l,c,a);break;case 31:Ni(l,c,a),E&&g&4&&n_(l,c);break;case 13:Ni(l,c,a),E&&g&4&&i_(l,c);break;case 22:c.memoizedState===null&&Ni(l,c,a),ki(c,c.return);break;case 30:Ni(l,c,a),ki(c,c.return);break;case 7:ki(c,c.return);default:Ni(l,c,a)}n=n.sibling}}function xh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Do(a))}function Mh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Do(t))}function xi(t,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)o_(t,n,a,r),n=n.sibling;else l&&Zg(n)}function o_(t,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&xu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,r),c&2048&&Xo(9,n);break;case 1:xi(t,n,a,r);break;case 3:xi(t,n,a,r),l&&vh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Do(c)));break;case 12:if(c&2048){xi(t,n,a,r),c=n.stateNode;try{var g=n.memoizedProps,E=g.id,z=g.onPostCommit;typeof z=="function"&&z(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Y){Ne(n,n.return,Y)}}else xi(t,n,a,r);break;case 31:xi(t,n,a,r);break;case 13:xi(t,n,a,r);break;case 23:break;case 22:g=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&xu(E),g._visibility&2?xi(t,n,a,r):Yo(t,n)):(l&&E!==null&&E.memoizedState!==null&&xu(n),g._visibility&2?xi(t,n,a,r):(g._visibility|=2,Es(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&xh(E,n);break;case 24:xi(t,n,a,r),c&2048&&Mh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Zi(c.child,!0),Zi(n.child,!0))),xi(t,n,a,r);break;default:xi(t,n,a,r)}}function Es(t,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,E=a,z=r,Y=g.flags;switch(g.tag){case 0:case 11:case 15:Es(c,g,E,z,l),Xo(8,g);break;case 23:break;case 22:var it=g.stateNode;g.memoizedState!==null?it._visibility&2?Es(c,g,E,z,l):Yo(c,g):(it._visibility|=2,Es(c,g,E,z,l)),l&&Y&2048&&xh(g.alternate,g);break;case 24:Es(c,g,E,z,l),l&&Y&2048&&Mh(g.alternate,g);break;default:Es(c,g,E,z,l)}n=n.sibling}}function Yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,l=r.flags;switch(r.tag){case 22:Yo(a,r),l&2048&&xh(r.alternate,r);break;case 24:Yo(a,r),l&2048&&Mh(r.alternate,r);break;default:Yo(a,r)}n=n.sibling}}var Nr=8192;function Or(t,n,a){if(t.subtreeFlags&Nr)for(t=t.child;t!==null;)l_(t,n,a),t=t.sibling}function l_(t,n,a){switch(t.tag){case 26:Or(t,n,a),t.flags&Nr&&(t.memoizedState!==null?AM(a,Ui,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&m0(a,t)));break;case 5:Or(t,n,a),t.flags&Nr&&(t=t.stateNode,(n&335544128)===n&&m0(a,t));break;case 3:case 4:var r=Ui;Ui=tl(t.stateNode.containerInfo),Or(t,n,a),Ui=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Nr,Nr=16777216,Or(t,n,a),Nr=r):Or(t,n,a));break;case 30:if((t.flags&Nr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ei===null&&(ei=new Map),ei.set(r,l)}Or(t,n,a);break;default:Or(t,n,a)}}function u_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ko(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,f_(r,t)}u_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)c_(t),t=t.sibling}function c_(t){switch(t.tag){case 0:case 11:case 15:ko(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:ko(t);break;case 12:ko(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bu(t)):ko(t);break;default:ko(t)}}function bu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,f_(r,t)}u_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),bu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bu(n));break;default:bu(n)}t=t.sibling}}function f_(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Do(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Sn=r;else t:for(a=t;Sn!==null;){r=Sn;var l=r.sibling,c=r.return;if(t_(r),r===a){Sn=null;break t}if(l!==null){l.return=c,Sn=l;break t}Sn=c}}}var xx={getCacheForType:function(t){var n=Mn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(un).controller.signal}},Mx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ve=null,ye=null,Me=0,Ue=0,ni=null,Xa=!1,Ts=!1,Eh=!1,_a=0,rn=0,Wa=0,Pr=0,Au=0,ii=0,bs=0,jo=null,jn=null,Th=!1,Ru=0,h_=0,Cu=1/0,wu=null,qa=null,tn=0,Oi=null,zr=null,$i=0,bh=0,Ah=null,d_=null,As=null,Rs=null,Cs=null,Zo=0,Du=null;function ai(){return(Ce&2)!==0&&Me!==0?Me&-Me:St.T!==null?zh():ce()}function p_(){if(ii===0)if((Me&536870912)===0||ge){var t=pr;pr<<=1,(pr&3932160)===0&&(pr=262144),ii=t}else ii=536870912;return t=En.current,t!==null&&(t.flags|=32),ii}function ws(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=j_(oa(t.memoizedProps,a))),Rs===null&&(Rs=[]),Rs.push(n.bind(null,r))}}function Zn(t,n,a){(t===Ve&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&(Ds(t,0),Ya(t,Me,ii,!1)),lt(t,a),((Ce&2)===0||t!==Ve)&&(t===Ve&&((Ce&2)===0&&(Pr|=a),rn===4&&Ya(t,Me,ii,!1)),ta(t))}function m_(t,n,a){if((Ce&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||gr(t,n),l=r?bx(t,n):Ch(t,n,!0),c=r;do{if(l===0){Ts&&!r&&Ya(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Ex(a)){l=Ch(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;l=jo;var z=E.current.memoizedState.isDehydrated;if(z&&(Ds(E,g).flags|=256),g=Ch(E,g,!1),g!==2&&g!==6){if(Eh&&!z){E.errorRecoveryDisabledLanes|=c,Pr|=c,l=4;break t}c=jn,jn=l,c!==null&&(jn===null?jn=c:jn.push.apply(jn,c))}l=g}if(c=!1,l!==2)continue}}if(l===1){Ds(t,0),Ya(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ya(r,n,ii,!Xa);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Ru+300-Kt(),10<l)){if(Ya(r,n,ii,!Xa),mr(r,0,!0)!==0)break t;$i=n,r.timeoutHandle=kh(g_.bind(null,r,a,jn,wu,Th,n,ii,Pr,bs,Xa,c,"Throttled",-0,0),l);break t}g_(r,a,jn,wu,Th,n,ii,Pr,bs,Xa,c,null,-0,0)}}break}while(!0);ta(t)}function g_(t,n,a,r,l,c,g,E,z,Y,it,gt,W,tt){t.timeoutHandle=-1;var Dt=n.subtreeFlags,Wt=(c&335544064)===c;if(gt=null,(Wt||Dt&8192||(Dt&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},ei=null,l_(n,c,gt),Wt&&(Dt=gt,Wt=t.containerInfo,Wt=(Wt.nodeType===9?Wt:Wt.ownerDocument).__reactViewTransition,Wt!=null&&(Dt.count++,Dt.waitingForViewTransition=!0,Dt=il.bind(Dt),Wt.finished.then(Dt,Dt))),Dt=(c&62914560)===c?Ru-Kt():(c&4194048)===c?h_-Kt():0,Dt=RM(gt,Dt),Dt!==null)){$i=c,t.cancelPendingCommit=Dt(T_.bind(null,t,n,c,a,r,l,g,E,z,Y,it,gt,null,W,tt)),Ya(t,c,g,!Y);return}T_(t,n,c,a,r,l,g,E,z,Y,it,gt)}function Ex(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!$n(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,a,r){n=Rl(t,n),n&=~Au,n&=~Pr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-Le(l),g=1<<c;r[c]=-1,l&=~g}a!==0&&ut(t,a,n)}function Lu(){return(Ce&6)===0?(Ko(0),!1):!0}function Rh(){if(ye!==null){if(Ue===0)var t=ye.return;else t=ye,fa=Er=null,Pf(t),gs=null,No=0,t=ye;for(;t!==null;)Fg(t.alternate,t),t=t.return;ye=null}}function Ds(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,kx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$i=0,Rh(),Ve=t,ye=a=ua(t.current,null),Me=n,Ue=0,ni=null,Xa=!1,Ts=gr(t,n),Eh=!1,bs=ii=Au=Pr=Wa=rn=0,jn=jo=null,Th=!1,_a=Rl(t,n),Fl(),a}function __(t,n){fe=null,St.H=cu,n===ms||n===Kl?(n=Tm(),Ue=3):n===Mf?(n=Tm(),Ue=4):Ue=n===Kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,ye===null&&(rn=1,fu(t,_i(n,t.current)))}function v_(){var t=En.current;return t===null?!0:(Me&4194048)===Me?Dn===null:(Me&62914560)===Me||(Me&536870912)!==0?t===Dn:!1}function y_(){var t=St.H;return St.H=cu,t===null?cu:t}function S_(){var t=St.A;return St.A=xx,t}function Uu(){rn=4,Xa||(Me&4194048)!==Me&&En.current!==null||(Ts=!0),(Wa&134217727)===0&&(Pr&134217727)===0||Ve===null||Ya(Ve,Me,ii,!1)}function Ch(t,n,a){var r=Ce;Ce|=2;var l=y_(),c=S_();(Ve!==t||Me!==n)&&(wu=null,Ds(t,n)),n=!1;var g=rn;t:do try{if(Ue!==0&&ye!==null){var E=ye,z=ni;switch(Ue){case 8:Rh(),g=6;break t;case 3:case 2:case 9:case 6:En.current===null&&(n=!0);var Y=Ue;if(Ue=0,ni=null,Ls(t,E,z,Y),a&&Ts){g=0;break t}break;default:Y=Ue,Ue=0,ni=null,Ls(t,E,z,Y)}}Tx(),g=rn;break}catch(it){__(t,it)}while(!0);return n&&t.shellSuspendCounter++,fa=Er=null,Ce=r,St.H=l,St.A=c,ye===null&&(Ve=null,Me=0,Fl()),g}function Tx(){for(;ye!==null;)x_(ye)}function bx(t,n){var a=Ce;Ce|=2;var r=y_(),l=S_();Ve!==t||Me!==n?(wu=null,Cu=Kt()+500,Ds(t,n)):Ts=gr(t,n);t:do try{if(Ue!==0&&ye!==null){n=ye;var c=ni;e:switch(Ue){case 1:Ue=0,ni=null,Ls(t,n,c,1);break;case 2:case 9:if(Mm(c)){Ue=0,ni=null,M_(n);break}n=function(){Ue!==2&&Ue!==9||Ve!==t||(Ue=7),ta(t)},c.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Mm(c)?(Ue=0,ni=null,M_(n)):(Ue=0,ni=null,Ls(t,n,c,7));break;case 5:var g=null;switch(ye.tag){case 26:g=ye.memoizedState;case 5:case 27:var E=ye;if(g?d0(g):E.stateNode.complete){Ue=0,ni=null;var z=E.sibling;if(z!==null)ye=z;else{var Y=E.return;Y!==null?(ye=Y,Nu(Y)):ye=null}break e}}Ue=0,ni=null,Ls(t,n,c,5);break;case 6:Ue=0,ni=null,Ls(t,n,c,6);break;case 8:Rh(),rn=6;break t;default:throw Error(s(462))}}Ax();break}catch(it){__(t,it)}while(!0);return fa=Er=null,St.H=r,St.A=l,Ce=a,ye!==null?0:(Ve=null,Me=0,Fl(),rn)}function Ax(){for(;ye!==null&&!ve();)x_(ye)}function x_(t){var n=Ig(t.alternate,t,_a);t.memoizedProps=t.pendingProps,n===null?Nu(t):ye=n}function M_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Dg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Dg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Pf(n);var r=n;r===vn&&(ge?(ql(r),r.tag===5&&r.stateNode!=null&&(qe=r.stateNode)):(ql(r),ge=!0));default:Fg(a,n),n=ye=fm(n,_a),n=Ig(a,n,_a)}t.memoizedProps=t.pendingProps,n===null?Nu(t):ye=n}function Ls(t,n,a,r){fa=Er=null,Pf(n),gs=null,No=0;var l=n.return;try{if(dx(t,l,n,a,Me)){rn=1,fu(t,_i(a,t.current)),ye=null;return}}catch(c){if(l!==null)throw ye=l,c;rn=1,fu(t,_i(a,t.current)),ye=null;return}n.flags&32768?(ge||r===1?t=!0:Ts||(Me&536870912)!==0?t=!1:(Xa=t=!0,(r===2||r===9||r===3||r===6)&&(r=En.current,r!==null&&r.tag===13&&(r.flags|=16384))),E_(n,t)):Nu(n)}function Nu(t){var n=t;do{if((n.flags&32768)!==0){E_(n,Xa);return}t=n.return;var a=_x(n.alternate,n,_a);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);rn===0&&(rn=5)}function E_(t,n){do{var a=vx(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);rn=6,ye=null}function T_(t,n,a,r,l,c,g,E,z,Y,it,gt){t.cancelPendingCommit=null;do Ou();while(tn!==0);if((Ce&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ve&&(ye=Ve=null,Me=0),zr=n,Oi=t,$i=a,Ah=l,d_=r,Rx(t,n,a,g,E,z,gt)}}function Rx(t,n,a,r,l,c,g){var E=n.lanes|n.childLanes;if(bh=E,E|=uf,dt(t,a,E,r,l,c),Rs=null,(a&335544064)===a?(Cs=ex(t),r=10262):(Cs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Nx(At,function(){return Uh(),null})):(t.callbackNode=null,t.callbackPriority=0),yu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=St.T,St.T=null,l=V.p,V.p=2,c=Ce,Ce|=4;try{yx(t,n,a)}finally{Ce=c,V.p=l,St.T=r}}tn=1,yu?As=$x(g,t.containerInfo,Cs,wh,Dh,wx,Lh,Uh,Cx):(wh(),Dh(),Lh())}function Cx(t){if(tn!==0){var n=Oi.onRecoverableError;n(t,{componentStack:null})}}function wx(){tn===3&&(tn=0,s_(zr,Oi),tn=4)}function wh(){if(tn===1){tn=0;var t=Oi,n=zr,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=St.T,St.T=null;var l=V.p;V.p=2;var c=Ce;Ce|=4;try{qo=Mu=!1,a_(n,t,a),a=Wh;var g=em(t.containerInfo),E=a.focusedElem,z=a.selectionRange;if(g!==E&&E&&E.ownerDocument&&tm(E.ownerDocument.documentElement,E)){if(z!==null&&af(E)){var Y=z.start,it=z.end;if(it===void 0&&(it=Y),"selectionStart"in E)E.selectionStart=Y,E.selectionEnd=Math.min(it,E.value.length);else{var gt=E.ownerDocument||document,W=gt&&gt.defaultView||window;if(W.getSelection){var tt=W.getSelection(),Dt=E.textContent.length,Wt=Math.min(z.start,Dt),he=z.end===void 0?Wt:Math.min(z.end,Dt);!tt.extend&&Wt>he&&(g=he,he=Wt,Wt=g);var q=$p(E,Wt),F=$p(E,he);if(q&&F&&(tt.rangeCount!==1||tt.anchorNode!==q.node||tt.anchorOffset!==q.offset||tt.focusNode!==F.node||tt.focusOffset!==F.offset)){var Z=gt.createRange();Z.setStart(q.node,q.offset),tt.removeAllRanges(),Wt>he?(tt.addRange(Z),tt.extend(F.node,F.offset)):(Z.setEnd(F.node,F.offset),tt.addRange(Z))}}}}for(gt=[],tt=E;tt=tt.parentNode;)tt.nodeType===1&&gt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var mt=gt[E];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Fs=!!Xh,Wh=Xh=null}finally{Ce=c,V.p=l,St.T=r}}t.current=n,tn=2}}function Dh(){if(tn===2){tn=0;var t=Oi,n=zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=St.T,St.T=null;var r=V.p;V.p=2;var l=Ce;Ce|=4;try{Jg(t,n.alternate,n)}finally{Ce=l,V.p=r,St.T=a}}tn=3}}function Lh(){if(tn===4||tn===3){tn=0;var t=As;As=null,We();var n=Oi,a=zr,r=$i,l=d_,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?tn=5:(tn=0,zr=Oi=null,b_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(qa=null),re(r),a=a.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Qe,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=St.T,c=V.p,V.p=2,St.T=null;try{for(var g=n.onRecoverableError,E=0;E<l.length;E++){var z=l[E];g(z.value,{componentStack:z.stack})}}finally{St.T=a,V.p=c}}if(l=Rs,g=Cs,Cs=null,l!==null&&(Rs=null,g===null&&(g=[]),t!==null))for(z=0;z<l.length;z++)a=(0,l[z])(g),a!==void 0&&t.finished.finally(a);($i&3)!==0&&Ou(),ta(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Du?Zo++:(Zo=0,Du=n):(Zo=0,Du=null),Ko(0)}}function b_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Do(n)))}function Ou(){return As!==null&&(As.skipTransition(),As=null),wh(),Dh(),Lh(),Uh()}function Uh(){if(tn!==5)return!1;var t=Oi,n=bh;bh=0;var a=re($i),r=St.T,l=V.p;try{V.p=32>a?32:a,St.T=null,a=Ah,Ah=null;var c=Oi,g=$i;if(tn=0,zr=Oi=null,$i=0,(Ce&6)!==0)throw Error(s(331));var E=Ce;if(Ce|=4,c_(c.current),o_(c,c.current,g,a),Ce=E,Ko(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Qe,c)}catch{}return!0}finally{V.p=l,St.T=r,b_(t,n)}}function A_(t,n,a){n=_i(a,n),n=Zf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(lt(t,2),ta(t))}function Ne(t,n,a){if(t.tag===3)A_(t,t,a);else for(;n!==null;){if(n.tag===3){A_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qa===null||!qa.has(r))){t=_i(a,t),a=Mg(2),r=Ia(n,a,2),r!==null&&(Eg(a,r,n,t),lt(r,2),ta(r));break}}n=n.return}}function Nh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Mx;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(Eh=!0,l.add(a),t=Dx.bind(null,t,n,a),n.then(t,t))}function Dx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(Me&a)===a&&((rn===4||rn===3&&(Me&62914560)===Me&&300>Kt()-Ru)&&(Ce&2)===0?Ds(t,0):Au|=a,bs===Me&&(bs=0)),ta(t)}function R_(t,n){n===0&&(n=D()),t=Sr(t,n),t!==null&&(lt(t,n),ta(t))}function Lx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),R_(t,a)}function Ux(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),R_(t,a)}function Nx(t,n){return Ot(t,n)}var Us=null,Ns=null,Oh=!1,Pu=!1,Ph=!1,ka=0;function ta(t){t!==Ns&&t.next===null&&(Ns===null?Us=Ns=t:Ns=Ns.next=t),Pu=!0,Oh||(Oh=!0,Px())}function Ko(t,n){if(!Ph&&Pu){Ph=!0;do for(var a=!1,r=Us;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var g=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Le(42|t)+1)-1,c&=l&~(g&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,L_(r,c))}else c=Me,c=mr(r,r===Ve?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||gr(r,c)||(a=!0,L_(r,c));r=r.next}while(a);Ph=!1}}function Ox(){C_()}function C_(){Pu=Oh=!1;var t=0;ka!==0&&Yx()&&(t=ka);for(var n=Kt(),a=null,r=Us;r!==null;){var l=r.next,c=w_(r,n);c===0?(r.next=null,a===null?Us=l:a.next=l,l===null&&(Ns=a)):(a=r,(t!==0||(c&3)!==0)&&(Pu=!0)),r=l}tn!==0&&tn!==5||Ko(t),ka!==0&&(ka=0)}function w_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Le(c),E=1<<g,z=l[g];z===-1?((E&a)===0||(E&r)!==0)&&(l[g]=Fc(E,n)):z<=n&&(t.expiredLanes|=E),c&=~E}if(n=Ve,a=Me,a=mr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&te(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||gr(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&te(r),re(a)){case 2:case 8:a=bt;break;case 32:a=At;break;case 268435456:a=ee;break;default:a=At}return r=D_.bind(null,t),a=Ot(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&te(r),t.callbackPriority=2,t.callbackNode=null,2}function D_(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ou()&&t.callbackNode!==a)return null;var r=Me;return r=mr(t,t===Ve?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(m_(t,r,n),w_(t,Kt()),t.callbackNode!=null&&t.callbackNode===a?D_.bind(null,t):null)}function L_(t,n){if(Ou())return null;m_(t,n,!0)}function Px(){jx(function(){(Ce&6)!==0?Ot(B,Ox):C_()})}function zh(){if(ka===0){var t=Ar;t===0&&(t=ia,ia<<=1,(ia&261888)===0&&(ia=256)),ka=t}return ka}function U_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ll(t)}function zx(t,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var c=U_((l[Be]||null).action),g=r.submitter;g&&(n=(n=g[Be]||null)?U_(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var E=new Pl("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ka!==0){var z=new FormData(l,g);Wf(a,{pending:!0,data:z,method:l.method,action:c},null,z)}}else typeof c=="function"&&(E.preventDefault(),z=new FormData(l,g),Wf(a,{pending:!0,data:z,method:l.method,action:c},c,z))},currentTarget:l}]})}}for(var Ih=0;Ih<lf.length;Ih++){var Bh=lf[Ih],Ix=Bh.toLowerCase(),Bx=Bh[0].toUpperCase()+Bh.slice(1);Di(Ix,"on"+Bx)}Di(am,"onAnimationEnd"),Di(rm,"onAnimationIteration"),Di(sm,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(kS,"onTransitionRun"),Di(jS,"onTransitionStart"),Di(ZS,"onTransitionCancel"),Di(om,"onTransitionEnd"),es("onMouseEnter",["mouseout","mouseover"]),es("onMouseLeave",["mouseout","mouseover"]),es("onPointerEnter",["pointerout","pointerover"]),es("onPointerLeave",["pointerout","pointerover"]),Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qo));function N_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var g=r.length-1;0<=g;g--){var E=r[g],z=E.instance,Y=E.currentTarget;if(E=E.listener,z!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Y;try{c(l)}catch(it){Bl(it)}l.currentTarget=null,c=z}else for(g=0;g<r.length;g++){if(E=r[g],z=E.instance,Y=E.currentTarget,E=E.listener,z!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Y;try{c(l)}catch(it){Bl(it)}l.currentTarget=null,c=z}}}}function Se(t,n){var a=n[di];a===void 0&&(a=n[di]=new Set);var r=t+"__bubble";a.has(r)||(O_(n,t,2,!1),a.add(r))}function Fh(t,n,a){var r=0;n&&(r|=4),O_(a,t,r,n)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Hh(t){if(!t[zu]){t[zu]=!0,ts.forEach(function(a){a!=="selectionchange"&&(Fx.has(a)||Fh(a,!1,t),Fh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zu]||(n[zu]=!0,Fh("selectionchange",!1,n))}}function O_(t,n,a,r){switch(E0(n)){case 2:var l=LM;break;case 8:l=UM;break;default:l=sd}a=l.bind(null,n,a,t),l=void 0,!kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Gh(t,n,a,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===l)break;if(g===4)for(g=r.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;E!==null;){if(g=Qn(E),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){r=c=g;continue t}E=E.parentNode}}r=r.return}Op(function(){var Y=c,it=qc(a),gt=[];t:{var W=lm.get(t);if(W!==void 0){var tt=Pl,Dt=t;switch(t){case"keypress":if(Nl(a)===0)break t;case"keydown":case"keyup":tt=ES;break;case"focusin":Dt="focus",tt=Qc;break;case"focusout":Dt="blur",tt=Qc;break;case"beforeblur":case"afterblur":tt=Qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=fS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=CS;break;case am:case rm:case sm:tt=pS;break;case om:tt=DS;break;case"scroll":case"scrollend":tt=uS;break;case"wheel":tt=US;break;case"copy":case"cut":case"paste":tt=gS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Fp;break;case"submit":tt=AS;break;case"toggle":case"beforetoggle":tt=OS}var Wt=(n&4)!==0,he=!Wt&&(t==="scroll"||t==="scrollend"),q=Wt?W!==null?W+"Capture":null:W;Wt=[];for(var F=Y,Z;F!==null;){var mt=F;if(Z=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Z===null||q===null||(mt=yo(F,q),mt!=null&&Wt.push(Jo(F,mt,Z))),he)break;F=F.return}0<Wt.length&&(W=new tt(W,Dt,null,a,it),gt.push({event:W,listeners:Wt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",tt&&a!==Wc&&(Dt=a.relatedTarget||a.fromElement)&&(Qn(Dt)||Dt[je]))break t;(W||tt)&&(Dt=it.window===it?it:(tt=it.ownerDocument)?tt.defaultView||tt.parentWindow:window,W?(tt=a.relatedTarget||a.toElement,W=Y,tt=tt?Qn(tt):null,tt!==null&&(he=f(tt),Wt=tt.tag,tt!==he||Wt!==5&&Wt!==27&&Wt!==6)&&(tt=null)):(W=null,tt=Y),W!==tt&&(Wt=Ip,mt="onMouseLeave",q="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=Fp,mt="onPointerLeave",q="onPointerEnter",F="pointer"),he=W==null?Dt:en(W),Z=tt==null?Dt:en(tt),Dt=new Wt(mt,F+"leave",W,a,it),Dt.target=he,Dt.relatedTarget=Z,mt=null,Qn(it)===Y&&(Wt=new Wt(q,F+"enter",tt,a,it),Wt.target=Z,Wt.relatedTarget=he,mt=Wt),he=mt,Wt=W&&tt?I(W,tt,Hx):null,W!==null&&P_(gt,Dt,W,Wt,!1),tt!==null&&he!==null&&P_(gt,he,tt,Wt,!0)))}t:{if(W=Y?en(Y):window,tt=W.nodeName&&W.nodeName.toLowerCase(),tt==="select"||tt==="input"&&W.type==="file")var Ht=kp;else if(qp(W))if(jp)Ht=WS;else{Ht=VS;var Ee=GS}else tt=W.nodeName,!tt||tt.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?Y&&Xc(Y.elementType)&&(Ht=kp):Ht=XS;if(Ht&&(Ht=Ht(t,Y))){Yp(gt,Ht,a,it);break t}Ee&&Ee(t,W,Y)}switch(Ee=Y?en(Y):window,t){case"focusin":(qp(Ee)||Ee.contentEditable==="true")&&(os=Ee,rf=Y,Ro=null);break;case"focusout":Ro=rf=os=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,nm(gt,a,it);break;case"selectionchange":if(YS)break;case"keydown":case"keyup":nm(gt,a,it)}var Zt;if($c)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else ss?Xp(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Hp&&a.locale!=="ko"&&(ss||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&ss&&(Zt=Pp()):(Ca=it,jc="value"in Ca?Ca.value:Ca.textContent,ss=!0)),Ee=Iu(Y,ae),0<Ee.length&&(ae=new Bp(ae,t,null,a,it),gt.push({event:ae,listeners:Ee}),Zt?ae.data=Zt:(Zt=Wp(a),Zt!==null&&(ae.data=Zt)))),(Zt=zS?IS(t,a):BS(t,a))&&(ae=Iu(Y,"onBeforeInput"),0<ae.length&&(Ee=new Bp("onBeforeInput","beforeinput",null,a,it),gt.push({event:Ee,listeners:ae}),Ee.data=Zt)),zx(gt,t,Y,a,it)}N_(gt,n)})}function Jo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Iu(t,n){for(var a=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=yo(t,a),l!=null&&r.unshift(Jo(t,l,c)),l=yo(t,n),l!=null&&r.push(Jo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function Hx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function P_(t,n,a,r,l){for(var c=n._reactName,g=[];a!==null&&a!==r;){var E=a,z=E.alternate,Y=E.stateNode;if(E=E.tag,z!==null&&z===r)break;E!==5&&E!==26&&E!==27||Y===null||(z=Y,l?(Y=yo(a,c),Y!=null&&g.unshift(Jo(a,Y,z))):l||(Y=yo(a,c),Y!=null&&g.push(Jo(a,Y,z)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Gx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function z_(t){return(typeof t=="string"?t:""+t).replace(Gx,`
`).replace(Vx,"")}function I_(t,n){return n=z_(n),z_(t)===n}function Oe(t,n,a,r,l,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||is(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&is(t,""+r);else return;break;case"className":Dl(t,"class",r);break;case"tabIndex":Dl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Dl(t,a,r);break;case"style":Up(t,r,c);return;case"data":if(n!=="object"){Dl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ll(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Oe(t,n,"name",l.name,l,null),Oe(t,n,"formEncType",l.formEncType,l,null),Oe(t,n,"formMethod",l.formMethod,l,null),Oe(t,n,"formTarget",l.formTarget,l,null)):(Oe(t,n,"encType",l.encType,l,null),Oe(t,n,"method",l.method,l,null),Oe(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ll(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Wi);return;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Ll(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Se("beforetoggle",t),Se("toggle",t),wl(t,"popover",r);break;case"xlinkActuate":ra(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ra(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ra(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ra(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ra(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ra(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ra(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ra(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ra(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":wl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=oS.get(a)||a,wl(t,a,r);else return}Re=!0}function Vh(t,n,a,r,l,c){switch(a){case"style":Up(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")is(t,r);else if(typeof r=="number"||typeof r=="bigint")is(t,""+r);else return;break;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Cl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[Be]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,l);break t}Re=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):wl(t,a,r)}return}Re=!0}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",t),Se("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(t,n,c,g,a,null)}}l&&Oe(t,n,"srcSet",a.srcSet,a,null),r&&Oe(t,n,"src",a.src,a,null);return;case"input":Se("invalid",t);var E=c=g=l=null,z=null,Y=null;for(r in a)if(a.hasOwnProperty(r)){var it=a[r];if(it!=null)switch(r){case"name":l=it;break;case"type":g=it;break;case"checked":z=it;break;case"defaultChecked":Y=it;break;case"value":c=it;break;case"defaultValue":E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Oe(t,n,r,it,a,null)}}Cp(t,c,E,z,Y,g,l,!1);return;case"select":Se("invalid",t),r=g=c=null;for(l in a)if(a.hasOwnProperty(l)&&(E=a[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:Oe(t,n,l,E,a,null)}n=c,a=g,t.multiple=!!r,n!=null?ns(t,!!r,n,!1):a!=null&&ns(t,!!r,a,!0);return;case"textarea":Se("invalid",t),c=l=r=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Oe(t,n,g,E,a,null)}Dp(t,r,l,c);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Oe(t,n,z,r,a,null)}return;case"dialog":Se("beforetoggle",t),Se("toggle",t),Se("cancel",t),Se("close",t);break;case"iframe":case"object":Se("load",t);break;case"video":case"audio":for(r=0;r<Qo.length;r++)Se(Qo[r],t);break;case"image":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"embed":case"source":case"link":Se("error",t),Se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in a)if(a.hasOwnProperty(Y)&&(r=a[Y],r!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(t,n,Y,r,a,null)}return;default:if(Xc(n)){for(it in a)a.hasOwnProperty(it)&&(r=a[it],r!==void 0&&Vh(t,n,it,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Oe(t,n,E,r,a,null))}var Xx={};function Wx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,E=null,z=null,Y=null,it=null;for(tt in a){var gt=a[tt];if(a.hasOwnProperty(tt)&&gt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":z=gt;default:r.hasOwnProperty(tt)||Oe(t,n,tt,null,r,gt)}}for(var W in r){var tt=r[W];if(gt=a[W],r.hasOwnProperty(W)&&(tt!=null||gt!=null))switch(W){case"type":tt!==gt&&(Re=!0),c=tt;break;case"name":tt!==gt&&(Re=!0),l=tt;break;case"checked":tt!==gt&&(Re=!0),Y=tt;break;case"defaultChecked":tt!==gt&&(Re=!0),it=tt;break;case"value":tt!==gt&&(Re=!0),g=tt;break;case"defaultValue":tt!==gt&&(Re=!0),E=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:tt!==gt&&Oe(t,n,W,tt,r,gt)}}Gc(t,g,E,z,Y,it,c,l);return;case"select":tt=g=E=W=null;for(c in a)if(z=a[c],a.hasOwnProperty(c)&&z!=null)switch(c){case"value":break;case"multiple":tt=z;default:r.hasOwnProperty(c)||Oe(t,n,c,null,r,z)}for(l in r)if(c=r[l],z=a[l],r.hasOwnProperty(l)&&(c!=null||z!=null))switch(l){case"value":c!==z&&(Re=!0),W=c;break;case"defaultValue":c!==z&&(Re=!0),E=c;break;case"multiple":c!==z&&(Re=!0),g=c;default:c!==z&&Oe(t,n,l,c,r,z)}n=E,a=g,r=tt,W!=null?ns(t,!!a,W,!1):!!r!=!!a&&(n!=null?ns(t,!!a,n,!0):ns(t,!!a,a?[]:"",!1));return;case"textarea":tt=W=null;for(E in a)if(l=a[E],a.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Oe(t,n,E,null,r,l)}for(g in r)if(l=r[g],c=a[g],r.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":l!==c&&(Re=!0),W=l;break;case"defaultValue":l!==c&&(Re=!0),tt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Oe(t,n,g,l,r,c)}wp(t,W,tt);return;case"option":for(var Dt in a)if(W=a[Dt],a.hasOwnProperty(Dt)&&W!=null&&!r.hasOwnProperty(Dt))switch(Dt){case"selected":t.selected=!1;break;default:Oe(t,n,Dt,null,r,W)}for(z in r)if(W=r[z],tt=a[z],r.hasOwnProperty(z)&&W!==tt&&(W!=null||tt!=null))switch(z){case"selected":W!==tt&&(Re=!0),t.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:Oe(t,n,z,W,r,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in a)W=a[Wt],a.hasOwnProperty(Wt)&&W!=null&&!r.hasOwnProperty(Wt)&&Oe(t,n,Wt,null,r,W);for(Y in r)if(W=r[Y],tt=a[Y],r.hasOwnProperty(Y)&&W!==tt&&(W!=null||tt!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,n));break;default:Oe(t,n,Y,W,r,tt)}return;default:if(Xc(n)){for(var he in a)W=a[he],a.hasOwnProperty(he)&&W!==void 0&&!r.hasOwnProperty(he)&&Vh(t,n,he,void 0,r,W);for(it in r)W=r[it],tt=a[it],!r.hasOwnProperty(it)||W===tt||W===void 0&&tt===void 0||Vh(t,n,it,W,r,tt);return}}for(var q in a)W=a[q],a.hasOwnProperty(q)&&W!=null&&!r.hasOwnProperty(q)&&Oe(t,n,q,null,r,W);for(gt in r)W=r[gt],tt=a[gt],!r.hasOwnProperty(gt)||W===tt||W==null&&tt==null||Oe(t,n,gt,W,r,tt)}function B_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],c=l.transferSize,g=l.initiatorType,E=l.duration;if(c&&E&&B_(g)){for(g=0,E=l.responseEnd,r+=1;r<a.length;r++){var z=a[r],Y=z.startTime;if(Y>E)break;var it=z.transferSize,gt=z.initiatorType;it&&B_(gt)&&(z=z.responseEnd,g+=it*(z<E?1:(E-Y)/(z-Y)))}if(--r,n+=8*(c+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xh=null,Wh=null;function $o(t){return t.nodeType===9?t:t.ownerDocument}function F_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function G_(t,n,a,r){return a=$o(a).createElement(t),a[me]=r,a[Be]=n,An(a,t,n),nn(a),a}function qh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yh=null;function Yx(){var t=window.event;return t&&t.type==="popstate"?t===Yh?!1:(Yh=t,!0):(Yh=null,!1)}var kh=typeof setTimeout=="function"?setTimeout:void 0,kx=typeof clearTimeout=="function"?clearTimeout:void 0,V_=typeof Promise=="function"?Promise:void 0,X_=typeof requestAnimationFrame=="function"?requestAnimationFrame:kh,jx=typeof queueMicrotask=="function"?queueMicrotask:typeof V_<"u"?function(t){return V_.resolve(null).then(t).catch(Zx)}:kh;function Zx(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function W_(t,n){var a=n,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),Hs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")ed(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ed(a);for(var c=a.firstChild;c;){var g=c.nextSibling,E=c.nodeName;c[Fe]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&ed(t.ownerDocument.body);a=l}while(a);Hs(n)}function q_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Y_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function k_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Kx(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function jh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Kx(n,a,t)}function Qx(t){return t.documentElement.clientHeight}function Jx(t){this.addEventListener("load",t),this.addEventListener("error",t)}function $x(t,n,a,r,l,c,g,E,z){var Y=n.nodeType===9?n:n.ownerDocument;try{var it=Y.startViewTransition({update:function(){var W=Y.defaultView,tt=W.navigation&&W.navigation.transition,Dt=Y.fonts.status;r();var Wt=[];if(Dt==="loaded"&&(Qx(Y),Y.fonts.status==="loading"&&Wt.push(Y.fonts.ready)),Dt=Wt.length,t!==null)for(var he=t.suspenseyImages,q=0,F=0;F<he.length;F++){var Z=he[F];if(!Z.complete){var mt=Z.getBoundingClientRect();if(0<mt.bottom&&0<mt.right&&mt.top<W.innerHeight&&mt.left<W.innerWidth){if(q+=p0(Z),q>Hu){Wt.length=Dt;break}Z=new Promise(Jx.bind(Z)),Wt.push(Z)}}}if(0<Wt.length)return W=Promise.race([Promise.all(Wt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(l,l),(tt?Promise.allSettled([tt.finished,W]):W).then(c,c);if(l(),tt)return tt.finished.then(c,c);c()},types:a});Y.__reactViewTransition=it;var gt=[];return it.ready.then(function(){for(var W=Y.documentElement.getAnimations({subtree:!0}),tt=0;tt<W.length;tt++){var Dt=W[tt],Wt=Dt.effect,he=Wt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){gt.push(Dt),Dt=Wt.getKeyframes();for(var q=he=void 0,F=!0,Z=0;Z<Dt.length;Z++){var mt=Dt[Z],Ht=mt.width;if(he===void 0)he=Ht;else if(he!==Ht){F=!1;break}if(Ht=mt.height,q===void 0)q=Ht;else if(q!==Ht){F=!1;break}delete mt.width,delete mt.height,mt.transform==="none"&&delete mt.transform}F&&he!==void 0&&q!==void 0&&(Wt.setKeyframes(Dt),F=getComputedStyle(Wt.target,Wt.pseudoElement),F.width!==he||F.height!==q)&&(F=Dt[0],F.width=he,F.height=q,F=Dt[Dt.length-1],F.width=he,F.height=q,Wt.setKeyframes(Dt))}}g()},function(W){Y.__reactViewTransition===it&&(Y.__reactViewTransition=null);try{if(typeof W=="object"&&W!==null)switch(W.name){case"InvalidStateError":(W.message==="View transition was skipped because document visibility state is hidden."||W.message==="Skipping view transition because document visibility state has become hidden."||W.message==="Skipping view transition because viewport size changed."||W.message==="Transition was aborted because of invalid state")&&(W=null)}W!==null&&z(W)}finally{r(),l(),g()}}),it.finished.finally(function(){for(var W=0;W<gt.length;W++)gt[W].cancel();Y.__reactViewTransition===it&&(Y.__reactViewTransition=null),E()}),it}catch{return r(),l(),g(),null}}function Ir(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ir.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ir.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[l])}return r},Ir.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function j_(t){return{name:t,group:new Ir("group",t),imagePair:new Ir("image-pair",t),old:new Ir("old",t),new:new Ir("new",t)}}function ri(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(t,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(K_(c,t,n,a)===-1){var g=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(z){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),r!==null&&(l=g.removeEventListener.bind(g,t,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Os(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:l}),m(this._fragmentFiber.child,!1,tM,t,E,r)}this._eventListeners=c}};function tM(t,n,a,r){return x(t).addEventListener(n,a,r),!1}ri.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=K_(r,t,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var c=l.cleanup;l=Os(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,eM,t,a,l),r.splice(n,1),c!==null&&c()}};function eM(t,n,a,r){return x(t).removeEventListener(n,a,r),!1}function Os(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Z_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function K_(t,n,a,r){if(t.length===0)return-1;r=Z_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&Z_(c.optionsOrUseCapture)===r)return l}return-1}ri.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=x(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];r.addEventListener(c.type,c.attachedListener,Os(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],r.removeEventListener(c.type,c.attachedListener,Os(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ri.prototype.focus=function(t){m(this._fragmentFiber.child,!0,Q_,t,void 0,void 0)};function Q_(t,n){return t.tag===6?!1:(t=x(t),dM(t,n))}ri.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,Zh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Q_(n[a],t);a--);};function Zh(t,n){return n.push(t),!1}ri.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=x(t),t=$o(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,nM,t,void 0,void 0))};function nM(t,n){return t.tag===6?!1:(t=x(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ri.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,iM,t,void 0,void 0)};function iM(t,n){return t.tag===6||(t=x(t),n.observe(t)),!1}ri.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,aM,t,void 0,void 0);for(var a=n=0;a<Pi.length;a++){var r=Pi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Pi[n++]=r}Pi.length=n}};function aM(t,n){return t.tag===6||(t=x(t),n.unobserve(t)),!1}var Pi=[],Kh=!1;function rM(t,n,a){Pi.push({fragmentInstance:t,observer:n,instance:a}),Kh||(Kh=!0,pM(function(){Kh=!1;var r=Pi;Pi=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ri.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,sM,t,void 0,void 0),t};function sM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=x(t),n.push.apply(n,t.getClientRects());return!1}ri.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:x(n).getRootNode(t)},ri.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,Zh,a,void 0,void 0);var r=x(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=x(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=x(a[0]),l=x(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),z=g&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||z||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||oM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function oM(t,n,a,r,l){var c=Qn(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=S(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=I(a,c,X),n===null?n=!1:(m(n,!0,w,c,a),c=y,y=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=I(r,c,X),n===null?n=!1:(m(n,!0,O,c,r),c=y,N=y=null,n=c!==null)),n):!1}function J_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,Zh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=a?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=x(r),J_(t,a);return}if(r=x(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=x(l),J_(l,a)):x(l).scrollIntoView(t),r+=a?-1:1}};function lM(t,n){return t=x(t),$_(t,n),!1}function $_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function t0(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,Os(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var g=0,E=0;E<Pi.length;E++){var z=Pi[E];(z.fragmentInstance!==n||z.observer!==c||z.instance!==t)&&(Pi[g++]=z)}Pi.length=g,c.observe(t)}),$_(t,n))}function uM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,Os(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?rM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Qh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qh(a),_r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cM(t,n,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Fe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function fM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Mi(t.nextSibling),t===null))return null;return t}function e0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mi(t.nextSibling),t===null))return null;return t}function Jh(t){return t.data==="$?"||t.data==="$~"}function $h(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function hM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var td=null;function n0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function i0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function dM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function pM(t){X_(function(){X_(function(n){return t(n)})})}function a0(t,n,a){switch(n=$o(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function r0(t,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&Oe(t,n,r,null,Xx,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Wi&&(t.onclick=null),_r(t)}function ed(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);_r(t)}var Ei=new Map,s0=new Set;function tl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var va=V.d;V.d={f:mM,r:gM,D:_M,C:vM,L:yM,m:SM,X:MM,S:xM,M:EM};function mM(){var t=va.f(),n=Lu();return t||n}function gM(t){var n=Vi(t);n!==null&&n.tag===5&&n.type==="form"?lg(n):va.r(t)}var Ps=typeof document>"u"?null:document;function o0(t,n,a){var r=Ps;if(r&&typeof n=="string"&&n){var l=mi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),s0.has(l)||(s0.add(l),t={rel:t,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),An(n,"link",t),nn(n),r.head.appendChild(n)))}}function _M(t){va.D(t),o0("dns-prefetch",t,null)}function vM(t,n){va.C(t,n),o0("preconnect",t,n)}function yM(t,n,a){va.L(t,n,a);var r=Ps;if(r&&t&&n){var l='link[rel="preload"][as="'+mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+mi(a.imageSizes)+'"]')):l+='[href="'+mi(t)+'"]';var c=l;switch(n){case"style":c=zs(t);break;case"script":c=Is(t)}if(!(Ei.has(c)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ei.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(el(c))||n==="script"&&r.querySelector(nl(c))))){var g=r.createElement("link");An(g,"link",t),n==="style"&&(g[pi]=!0,g.onload=g.onerror=function(){On(g)}),nn(g),r.head.appendChild(g)}}}function SM(t,n){va.m(t,n);var a=Ps;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+mi(r)+'"][href="'+mi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Is(t)}if(!Ei.has(c)&&(t=P({rel:"modulepreload",href:t},n),Ei.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(nl(c)))return}r=a.createElement("link"),An(r,"link",t),nn(r),a.head.appendChild(r)}}}function xM(t,n,a){va.S(t,n,a);var r=Ps;if(r&&t){var l=Wn(r).hoistableStyles,c=zs(t);n=n||"default";var g=l.get(c);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(el(c)))E.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ei.get(c))&&nd(t,a);var z=g=r.createElement("link");nn(z),An(z,"link",t),z._p=new Promise(function(Y,it){z.onload=Y,z.onerror=it}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Bu(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:E},l.set(c,g)}}}function MM(t,n){va.X(t,n);var a=Ps;if(a&&t){var r=Wn(a).hoistableScripts,l=Is(t),c=r.get(l);c||(c=a.querySelector(nl(l)),c||(t=P({src:t,async:!0},n),(n=Ei.get(l))&&id(t,n),c=a.createElement("script"),nn(c),An(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function EM(t,n){va.M(t,n);var a=Ps;if(a&&t){var r=Wn(a).hoistableScripts,l=Is(t),c=r.get(l);c||(c=a.querySelector(nl(l)),c||(t=P({src:t,async:!0,type:"module"},n),(n=Ei.get(l))&&id(t,n),c=a.createElement("script"),nn(c),An(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function l0(t,n,a,r){var l=(l=nt.current)?tl(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=zs(a.href),n=Wn(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=zs(a.href);var c=Wn(l).hoistableStyles,g=c.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=l.querySelector(el(t)))?c._p||(g.instance=c,g.state.loading=5):(c=Ei.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(t,c)),TM(l,t,c,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Is(a),n=Wn(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function zs(t){return'href="'+mi(t)+'"'}function el(t){return'link[rel="stylesheet"]['+t+"]"}function u0(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function TM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[pi]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[pi]=!0,n.onload=n.onerror=On.bind(null,n),An(n,"link",a),nn(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Is(t){return'[src="'+mi(t)+'"]'}function nl(t){return"script[async]"+t}function c0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+mi(a.href)+'"]');if(r)return n.instance=r,nn(r),r;var l=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),nn(r),An(r,"style",l),Bu(r,a.precedence,t),n.instance=r;case"stylesheet":l=zs(a.href);var c=t.querySelector(el(l));if(c)return n.state.loading|=4,n.instance=c,nn(c),c;r=u0(a),(l=Ei.get(l))&&nd(r,l),c=(t.ownerDocument||t).createElement("link"),nn(c);var g=c;return g._p=new Promise(function(E,z){g.onload=E,g.onerror=z}),An(c,"link",r),n.state.loading|=4,Bu(c,a.precedence,t),n.instance=c;case"script":return c=Is(a.src),(l=t.querySelector(nl(c)))?(n.instance=l,nn(l),l):(r=a,(l=Ei.get(c))&&(r=P({},a),id(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),nn(l),An(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Bu(r,a.precedence,t));return n.instance}function Bu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fu=null;function f0(t,n,a){if(Fu===null){var r=new Map,l=Fu=new Map;l.set(a,r)}else l=Fu,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Fe]||c[me]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var E=r.get(g);E?E.push(c):r.set(g,[c])}}return r}function ad(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function bM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function h0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function d0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function p0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function m0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=p0(n),t.suspenseyImages.push(n)),t=CM.bind(t),n.decode().then(t,t))}function AM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=zs(r.href),c=n.querySelector(el(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=il.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,nn(c);return}c=n.ownerDocument||n,r=u0(r),(l=Ei.get(l))&&nd(r,l),c=c.createElement("link"),nn(c);var g=c;g._p=new Promise(function(E,z){g.onload=E,g.onerror=z}),An(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=il.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hu=0;function RM(t,n){return t.stylesheets&&t.count===0&&Vu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Vu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Hu===0&&(Hu=62500*qx());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Hu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function g0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Vu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function il(){this.count--,g0(this)}function CM(){this.imgCount--,g0(this)}var Gu=null;function Vu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gu=new Map,n.forEach(wM,t),Gu=null,il.call(t))}function wM(t,n){if(!(n.state.loading&4)){var a=Gu.get(t);if(a)var r=a.get(null);else{a=new Map,Gu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}l=n.instance,g=l.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,l),a.set(g,l),this.count++,r=il.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Bs={$$typeof:Q,Provider:null,Consumer:null,_currentValue:Pe,_currentValue2:Pe,_threadCount:0};function DM(t,n,a,r,l,c,g,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=K(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=K(0),this.hiddenUpdates=K(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function _0(t,n,a,r,l,c,g,E,z,Y,it,gt){return t=new DM(t,n,a,g,z,Y,it,gt,E),n=1,c===!0&&(n|=24),c=qn(3,null,null,n),t.current=c,c.stateNode=t,n=yf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},Ef(c),t}function v0(t){return t?(t=cs,t):cs}function y0(t,n,a,r,l,c){l=v0(l),r.context===null?r.context=l:r.pendingContext=l,r=za(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Ia(t,r,n),a!==null&&(Zn(a,t,n),Oo(a,t,n))}function S0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function rd(t,n){S0(t,n),(t=t.alternate)&&S0(t,n)}function x0(t){if(t.tag===13||t.tag===31){var n=Sr(t,67108864);n!==null&&Zn(n,t,67108864),rd(t,67108864)}}function M0(t){if(t.tag===13||t.tag===31){var n=ai();n=ne(n);var a=Sr(t,n);a!==null&&Zn(a,t,n),rd(t,n)}}var Fs=!0;function LM(t,n,a,r){var l=St.T;St.T=null;var c=V.p;try{V.p=2,sd(t,n,a,r)}finally{V.p=c,St.T=l}}function UM(t,n,a,r){var l=St.T;St.T=null;var c=V.p;try{V.p=8,sd(t,n,a,r)}finally{V.p=c,St.T=l}}function sd(t,n,a,r){if(Fs){var l=od(r);if(l===null)Gh(t,n,r,Xu,a),T0(t,r);else if(OM(l,t,n,a,r))r.stopPropagation();else if(T0(t,r),n&4&&-1<NM.indexOf(t)){for(;l!==null;){var c=Vi(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=Gi(c.pendingLanes);if(g!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var z=1<<31-Le(g);E.entanglements[1]|=z,g&=~z}ta(c),(Ce&6)===0&&(Cu=Kt()+500,Ko(0))}}break;case 31:case 13:E=Sr(c,2),E!==null&&Zn(E,c,2),Lu(),rd(c,2)}if(c=od(r),c===null&&Gh(t,n,r,Xu,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else Gh(t,n,r,null,a)}}function od(t){return t=qc(t),ld(t)}var Xu=null;function ld(t){if(Xu=null,t=Qn(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Xu=t,null}function E0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case B:return 2;case bt:return 8;case At:case Jt:return 32;case ee:return 268435456;default:return 32}default:return 32}}var ud=!1,Za=null,Ka=null,Qa=null,al=new Map,rl=new Map,Ja=[],NM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function T0(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":al.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(n.pointerId)}}function sl(t,n,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=Vi(n),n!==null&&x0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function OM(t,n,a,r,l){switch(n){case"focusin":return Za=sl(Za,t,n,a,r,l),!0;case"dragenter":return Ka=sl(Ka,t,n,a,r,l),!0;case"mouseover":return Qa=sl(Qa,t,n,a,r,l),!0;case"pointerover":var c=l.pointerId;return al.set(c,sl(al.get(c)||null,t,n,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,rl.set(c,sl(rl.get(c)||null,t,n,a,r,l)),!0}return!1}function b0(t){var n=Qn(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,oe(t.priority,function(){M0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,oe(t.priority,function(){M0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=od(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Wc=r,a.target.dispatchEvent(r),Wc=null}else return n=Vi(a),n!==null&&x0(n),t.blockedOn=a,!1;n.shift()}return!0}function A0(t,n,a){Wu(t)&&a.delete(n)}function PM(){ud=!1,Za!==null&&Wu(Za)&&(Za=null),Ka!==null&&Wu(Ka)&&(Ka=null),Qa!==null&&Wu(Qa)&&(Qa=null),al.forEach(A0),rl.forEach(A0)}function qu(t,n){t.blockedOn===n&&(t.blockedOn=null,ud||(ud=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,PM)))}var Yu=null;function R0(t){Yu!==t&&(Yu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yu===t&&(Yu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(ld(r||a)===null)continue;break}var c=Vi(a);c!==null&&(t.splice(n,3),n-=3,Wf(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Hs(t){function n(z){return qu(z,t)}Za!==null&&qu(Za,t),Ka!==null&&qu(Ka,t),Qa!==null&&qu(Qa,t),al.forEach(n),rl.forEach(n);for(var a=0;a<Ja.length;a++){var r=Ja[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)b0(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],g=l[Be]||null;if(typeof c=="function")g||R0(a);else if(g){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[Be]||null)E=g.formAction;else if(ld(l)!==null)continue}else E=g.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),R0(a)}}}function C0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function cd(t){this._internalRoot=t}ku.prototype.render=cd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ai();y0(a,r,t,n,null,null)},ku.prototype.unmount=cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;y0(t.current,2,null,t,null,null),Lu(),n[je]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var n=ce();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&b0(t)}};var w0=e.version;if(w0!=="19.3.1")throw Error(s(527,w0,"19.3.1"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=_(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var zM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:St,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{Qe=ju.inject(zM),De=ju}catch{}}return ll.createRoot=function(t,n){if(!u(t))throw Error(s(299));var a=!1,r="",l=vg,c=yg,g=Sg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=_0(t,1,!1,null,null,a,r,null,l,c,g,C0),t[je]=n.current,Hh(t),new cd(n)},ll.hydrateRoot=function(t,n,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=vg,g=yg,E=Sg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=_0(t,1,!0,n,a??null,r,l,z,c,g,E,C0),n.context=v0(null),a=n.current,r=ai(),r=ne(r),l=za(r),l.callback=null,Ia(a,l,r),a=r,n.current.lanes=a,lt(n,a),ta(n),t[je]=n.current,Hh(t),new ku(n)},ll.version="19.3.1",ll}var F0;function YM(){if(F0)return dd.exports;F0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dd.exports=qM(),dd.exports}var kM=YM();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pp="160",jM=0,H0=1,ZM=2,vy=1,KM=2,Ta=3,dr=0,Xn=1,Ci=2,lr=0,co=1,G0=2,V0=3,X0=4,QM=5,Wr=100,JM=101,$M=102,W0=103,q0=104,tE=200,eE=201,nE=202,iE=203,tp=204,ep=205,aE=206,rE=207,sE=208,oE=209,lE=210,uE=211,cE=212,fE=213,hE=214,dE=0,pE=1,mE=2,Ec=3,gE=4,_E=5,vE=6,yE=7,yy=0,SE=1,xE=2,ur=0,ME=1,EE=2,TE=3,Sy=4,bE=5,AE=6,xy=300,ho=301,po=302,np=303,ip=304,Uc=306,Tc=1e3,Fi=1001,ap=1002,Gn=1003,Y0=1004,_d=1005,Ai=1006,RE=1007,Ml=1008,cr=1009,CE=1010,wE=1011,mp=1012,My=1013,sr=1014,or=1015,El=1016,Ey=1017,Ty=1018,kr=1020,DE=1021,Hi=1023,LE=1024,UE=1025,jr=1026,mo=1027,NE=1028,by=1029,OE=1030,Ay=1031,Ry=1033,vd=33776,yd=33777,Sd=33778,xd=33779,k0=35840,j0=35841,Z0=35842,K0=35843,Cy=36196,Q0=37492,J0=37496,$0=37808,tv=37809,ev=37810,nv=37811,iv=37812,av=37813,rv=37814,sv=37815,ov=37816,lv=37817,uv=37818,cv=37819,fv=37820,hv=37821,Md=36492,dv=36494,pv=36495,PE=36283,mv=36284,gv=36285,_v=36286,wy=3e3,fr=3001,zE=3200,IE=3201,Dy=0,BE=1,wi="",wn="srgb",Ra="srgb-linear",gp="display-p3",Nc="display-p3-linear",bc="linear",Ke="srgb",Ac="rec709",Rc="p3",Gs=7680,vv=519,FE=512,HE=513,GE=514,Ly=515,VE=516,XE=517,WE=518,qE=519,rp=35044,yv="300 es",sp=1035,Aa=2e3,Cc=2001;class _o{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const u=this._listeners[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ed=Math.PI/180,op=180/Math.PI;function hr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Vn(o,e,i){return Math.max(e,Math.min(i,o))}function YE(o,e){return(o%e+e)%e}function Td(o,e,i){return(1-i)*o+i*e}function Sv(o){return(o&o-1)===0&&o!==0}function lp(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ba(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xe(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ue{constructor(e=0,i=0){ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Vn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(e,i,s,u,f,d,h,p,_){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,p,_)}set(e,i,s,u,f,d,h,p,_){const v=this.elements;return v[0]=e,v[1]=u,v[2]=h,v[3]=i,v[4]=f,v[5]=p,v[6]=s,v[7]=d,v[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[3],p=s[6],_=s[1],v=s[4],m=s[7],S=s[2],M=s[5],b=s[8],T=u[0],x=u[3],y=u[6],N=u[1],w=u[4],O=u[7],X=u[2],I=u[5],P=u[8];return f[0]=d*T+h*N+p*X,f[3]=d*x+h*w+p*I,f[6]=d*y+h*O+p*P,f[1]=_*T+v*N+m*X,f[4]=_*x+v*w+m*I,f[7]=_*y+v*O+m*P,f[2]=S*T+M*N+b*X,f[5]=S*x+M*w+b*I,f[8]=S*y+M*O+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],_=e[7],v=e[8];return i*d*v-i*h*_-s*f*v+s*h*p+u*f*_-u*d*p}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],_=e[7],v=e[8],m=v*d-h*_,S=h*p-v*f,M=_*f-d*p,b=i*m+s*S+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=m*T,e[1]=(u*_-v*s)*T,e[2]=(h*s-u*d)*T,e[3]=S*T,e[4]=(v*i-u*p)*T,e[5]=(u*f-h*i)*T,e[6]=M*T,e[7]=(s*p-_*i)*T,e[8]=(d*i-s*f)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,u,f,d,h){const p=Math.cos(f),_=Math.sin(f);return this.set(s*p,s*_,-s*(p*d+_*h)+d+e,-u*_,u*p,-u*(-_*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(bd.makeScale(e,i)),this}rotate(e){return this.premultiply(bd.makeRotation(-e)),this}translate(e,i){return this.premultiply(bd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bd=new _e;function Uy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function kE(){const o=wc("canvas");return o.style.display="block",o}const xv={};function Sl(o){o in xv||(xv[o]=!0,console.warn(o))}const Mv=new _e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ev=new _e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zu={[Ra]:{transfer:bc,primaries:Ac,toReference:o=>o,fromReference:o=>o},[wn]:{transfer:Ke,primaries:Ac,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Nc]:{transfer:bc,primaries:Rc,toReference:o=>o.applyMatrix3(Ev),fromReference:o=>o.applyMatrix3(Mv)},[gp]:{transfer:Ke,primaries:Rc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Ev),fromReference:o=>o.applyMatrix3(Mv).convertLinearToSRGB()}},jE=new Set([Ra,Nc]),Ge={enabled:!0,_workingColorSpace:Ra,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!jE.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const s=Zu[e].toReference,u=Zu[i].fromReference;return u(s(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Zu[o].primaries},getTransfer:function(o){return o===wi?bc:Zu[o].transfer}};function fo(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ad(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Vs;class Ny{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vs===void 0&&(Vs=wc("canvas")),Vs.width=e.width,Vs.height=e.height;const s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Vs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=wc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=fo(f[d]/255)*255;return s.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fo(i[s]/255)*255):i[s]=fo(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZE=0;class Oy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=hr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(Rd(u[d].image)):f.push(Rd(u[d]))}else f=Rd(u);s.url=f}return i||(e.images[this.uuid]=s),s}}function Rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ny.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KE=0;class Kn extends _o{constructor(e=Kn.DEFAULT_IMAGE,i=Kn.DEFAULT_MAPPING,s=Fi,u=Fi,f=Ai,d=Ml,h=Hi,p=cr,_=Kn.DEFAULT_ANISOTROPY,v=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=hr(),this.name="",this.source=new Oy(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=_,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof v=="string"?this.colorSpace=v:(Sl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=v===fr?wn:wi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tc:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tc:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wn?fr:wy}set encoding(e){Sl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fr?wn:wi}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=xy;Kn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,s=0,u=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,u){return this.x=e,this.y=i,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*u+d[15]*f,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,u,f;const p=e.elements,_=p[0],v=p[4],m=p[8],S=p[1],M=p[5],b=p[9],T=p[2],x=p[6],y=p[10];if(Math.abs(v-S)<.01&&Math.abs(m-T)<.01&&Math.abs(b-x)<.01){if(Math.abs(v+S)<.1&&Math.abs(m+T)<.1&&Math.abs(b+x)<.1&&Math.abs(_+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(_+1)/2,O=(M+1)/2,X=(y+1)/2,I=(v+S)/4,P=(m+T)/4,st=(b+x)/4;return w>O&&w>X?w<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(w),u=I/s,f=P/s):O>X?O<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(O),s=I/u,f=st/u):X<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(X),s=P/f,u=st/f),this.set(s,u,f,i),this}let N=Math.sqrt((x-b)*(x-b)+(m-T)*(m-T)+(S-v)*(S-v));return Math.abs(N)<.001&&(N=1),this.x=(x-b)/N,this.y=(m-T)/N,this.z=(S-v)/N,this.w=Math.acos((_+M+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QE extends _o{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const u={width:e,height:i,depth:1};s.encoding!==void 0&&(Sl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===fr?wn:wi),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Kn(u,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,i,s=1){(this.width!==e||this.height!==i||this.depth!==s)&&(this.width=e,this.height=i,this.depth=s,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Oy(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends QE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Py extends Kn{constructor(e=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class JE extends Kn{constructor(e=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl{constructor(e=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=u}static slerpFlat(e,i,s,u,f,d,h){let p=s[u+0],_=s[u+1],v=s[u+2],m=s[u+3];const S=f[d+0],M=f[d+1],b=f[d+2],T=f[d+3];if(h===0){e[i+0]=p,e[i+1]=_,e[i+2]=v,e[i+3]=m;return}if(h===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=T;return}if(m!==T||p!==S||_!==M||v!==b){let x=1-h;const y=p*S+_*M+v*b+m*T,N=y>=0?1:-1,w=1-y*y;if(w>Number.EPSILON){const X=Math.sqrt(w),I=Math.atan2(X,y*N);x=Math.sin(x*I)/X,h=Math.sin(h*I)/X}const O=h*N;if(p=p*x+S*O,_=_*x+M*O,v=v*x+b*O,m=m*x+T*O,x===1-h){const X=1/Math.sqrt(p*p+_*_+v*v+m*m);p*=X,_*=X,v*=X,m*=X}}e[i]=p,e[i+1]=_,e[i+2]=v,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,u,f,d){const h=s[u],p=s[u+1],_=s[u+2],v=s[u+3],m=f[d],S=f[d+1],M=f[d+2],b=f[d+3];return e[i]=h*b+v*m+p*M-_*S,e[i+1]=p*b+v*S+_*m-h*M,e[i+2]=_*b+v*M+h*S-p*m,e[i+3]=v*b-h*m-p*S-_*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,u){return this._x=e,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,p=Math.sin,_=h(s/2),v=h(u/2),m=h(f/2),S=p(s/2),M=p(u/2),b=p(f/2);switch(d){case"XYZ":this._x=S*v*m+_*M*b,this._y=_*M*m-S*v*b,this._z=_*v*b+S*M*m,this._w=_*v*m-S*M*b;break;case"YXZ":this._x=S*v*m+_*M*b,this._y=_*M*m-S*v*b,this._z=_*v*b-S*M*m,this._w=_*v*m+S*M*b;break;case"ZXY":this._x=S*v*m-_*M*b,this._y=_*M*m+S*v*b,this._z=_*v*b+S*M*m,this._w=_*v*m-S*M*b;break;case"ZYX":this._x=S*v*m-_*M*b,this._y=_*M*m+S*v*b,this._z=_*v*b-S*M*m,this._w=_*v*m+S*M*b;break;case"YZX":this._x=S*v*m+_*M*b,this._y=_*M*m+S*v*b,this._z=_*v*b-S*M*m,this._w=_*v*m-S*M*b;break;case"XZY":this._x=S*v*m-_*M*b,this._y=_*M*m-S*v*b,this._z=_*v*b+S*M*m,this._w=_*v*m+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],u=i[4],f=i[8],d=i[1],h=i[5],p=i[9],_=i[2],v=i[6],m=i[10],S=s+h+m;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-p)*M,this._y=(f-_)*M,this._z=(d-u)*M}else if(s>h&&s>m){const M=2*Math.sqrt(1+s-h-m);this._w=(v-p)/M,this._x=.25*M,this._y=(u+d)/M,this._z=(f+_)/M}else if(h>m){const M=2*Math.sqrt(1+h-s-m);this._w=(f-_)/M,this._x=(u+d)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+m-s-h);this._w=(d-u)/M,this._x=(f+_)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vn(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,u=e._y,f=e._z,d=e._w,h=i._x,p=i._y,_=i._z,v=i._w;return this._x=s*v+d*h+u*_-f*p,this._y=u*v+d*p+f*h-s*_,this._z=f*v+d*_+s*p-u*h,this._w=d*v-s*h-u*p-f*_,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,u=this._y,f=this._z,d=this._w;let h=d*e._w+s*e._x+u*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=u,this._z=f,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*u+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const _=Math.sqrt(p),v=Math.atan2(_,h),m=Math.sin((1-i)*v)/_,S=Math.sin(i*v)/_;return this._w=d*m+this._w*S,this._x=s*m+this._x*S,this._y=u*m+this._y*S,this._z=f*m+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=Math.random(),i=Math.sqrt(1-e),s=Math.sqrt(e),u=2*Math.PI*Math.random(),f=2*Math.PI*Math.random();return this.set(i*Math.cos(u),s*Math.sin(f),s*Math.cos(f),i*Math.sin(u))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,i=0,s=0){k.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Tv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Tv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,p=e.w,_=2*(d*u-h*s),v=2*(h*i-f*u),m=2*(f*s-d*i);return this.x=i+p*_+d*m-h*v,this.y=s+p*v+h*_-f*m,this.z=u+p*m+f*v-d*_,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,u=e.y,f=e.z,d=i.x,h=i.y,p=i.z;return this.x=u*p-f*h,this.y=f*d-s*p,this.z=s*h-u*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Vn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return i*i+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const u=Math.sin(i)*e;return this.x=u*Math.sin(s),this.y=Math.cos(i)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(i),this.y=s*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new k,Tv=new Tl;class bl{constructor(e=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,zi):zi.fromBufferAttribute(f,d),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ku.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ku.copy(s.boundingBox)),Ku.applyMatrix4(e.matrixWorld),this.union(Ku)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),Qu.subVectors(this.max,ul),Xs.subVectors(e.a,ul),Ws.subVectors(e.b,ul),qs.subVectors(e.c,ul),tr.subVectors(Ws,Xs),er.subVectors(qs,Ws),Br.subVectors(Xs,qs);let i=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Br.z,Br.y,tr.z,0,-tr.x,er.z,0,-er.x,Br.z,0,-Br.x,-tr.y,tr.x,0,-er.y,er.x,0,-Br.y,Br.x,0];return!wd(i,Xs,Ws,qs,Qu)||(i=[1,0,0,0,1,0,0,0,1],!wd(i,Xs,Ws,qs,Qu))?!1:(Ju.crossVectors(tr,er),i=[Ju.x,Ju.y,Ju.z],wd(i,Xs,Ws,qs,Qu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ya=[new k,new k,new k,new k,new k,new k,new k,new k],zi=new k,Ku=new bl,Xs=new k,Ws=new k,qs=new k,tr=new k,er=new k,Br=new k,ul=new k,Qu=new k,Ju=new k,Fr=new k;function wd(o,e,i,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){Fr.fromArray(o,f);const h=u.x*Math.abs(Fr.x)+u.y*Math.abs(Fr.y)+u.z*Math.abs(Fr.z),p=e.dot(Fr),_=i.dot(Fr),v=s.dot(Fr);if(Math.max(-Math.max(p,_,v),Math.min(p,_,v))>h)return!1}return!0}const $E=new bl,cl=new k,Dd=new k;class Oc{constructor(e=new k,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):$E.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);const i=cl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(cl,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(Dd)),this.expandByPoint(cl.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sa=new k,Ld=new k,$u=new k,nr=new k,Ud=new k,tc=new k,Nd=new k;class zy{constructor(e=new k,i=new k(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,s,u){Ld.copy(e).add(i).multiplyScalar(.5),$u.copy(i).sub(e).normalize(),nr.copy(this.origin).sub(Ld);const f=e.distanceTo(i)*.5,d=-this.direction.dot($u),h=nr.dot(this.direction),p=-nr.dot($u),_=nr.lengthSq(),v=Math.abs(1-d*d);let m,S,M,b;if(v>0)if(m=d*p-h,S=d*h-p,b=f*v,m>=0)if(S>=-b)if(S<=b){const T=1/v;m*=T,S*=T,M=m*(m+d*S+2*h)+S*(d*m+S+2*p)+_}else S=f,m=Math.max(0,-(d*S+h)),M=-m*m+S*(S+2*p)+_;else S=-f,m=Math.max(0,-(d*S+h)),M=-m*m+S*(S+2*p)+_;else S<=-b?(m=Math.max(0,-(-d*f+h)),S=m>0?-f:Math.min(Math.max(-f,-p),f),M=-m*m+S*(S+2*p)+_):S<=b?(m=0,S=Math.min(Math.max(-f,-p),f),M=S*(S+2*p)+_):(m=Math.max(0,-(d*f+h)),S=m>0?f:Math.min(Math.max(-f,-p),f),M=-m*m+S*(S+2*p)+_);else S=d>0?-f:f,m=Math.max(0,-(d*S+h)),M=-m*m+S*(S+2*p)+_;return s&&s.copy(this.origin).addScaledVector(this.direction,m),u&&u.copy(Ld).addScaledVector($u,S),M}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const s=Sa.dot(this.direction),u=Sa.dot(Sa)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,u,f,d,h,p;const _=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,S=this.origin;return _>=0?(s=(e.min.x-S.x)*_,u=(e.max.x-S.x)*_):(s=(e.max.x-S.x)*_,u=(e.min.x-S.x)*_),v>=0?(f=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(f=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),m>=0?(h=(e.min.z-S.z)*m,p=(e.max.z-S.z)*m):(h=(e.max.z-S.z)*m,p=(e.min.z-S.z)*m),s>p||h>u)||((h>s||s!==s)&&(s=h),(p<u||u!==u)&&(u=p),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,s,u,f){Ud.subVectors(i,e),tc.subVectors(s,e),Nd.crossVectors(Ud,tc);let d=this.direction.dot(Nd),h;if(d>0){if(u)return null;h=1}else if(d<0)h=-1,d=-d;else return null;nr.subVectors(this.origin,e);const p=h*this.direction.dot(tc.crossVectors(nr,tc));if(p<0)return null;const _=h*this.direction.dot(Ud.cross(nr));if(_<0||p+_>d)return null;const v=-h*nr.dot(Nd);return v<0?null:this.at(v/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,s,u,f,d,h,p,_,v,m,S,M,b,T,x){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,p,_,v,m,S,M,b,T,x)}set(e,i,s,u,f,d,h,p,_,v,m,S,M,b,T,x){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=u,y[1]=f,y[5]=d,y[9]=h,y[13]=p,y[2]=_,y[6]=v,y[10]=m,y[14]=S,y[3]=M,y[7]=b,y[11]=T,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,u=1/Ys.setFromMatrixColumn(e,0).length(),f=1/Ys.setFromMatrixColumn(e,1).length(),d=1/Ys.setFromMatrixColumn(e,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(u),_=Math.sin(u),v=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const S=d*v,M=d*m,b=h*v,T=h*m;i[0]=p*v,i[4]=-p*m,i[8]=_,i[1]=M+b*_,i[5]=S-T*_,i[9]=-h*p,i[2]=T-S*_,i[6]=b+M*_,i[10]=d*p}else if(e.order==="YXZ"){const S=p*v,M=p*m,b=_*v,T=_*m;i[0]=S+T*h,i[4]=b*h-M,i[8]=d*_,i[1]=d*m,i[5]=d*v,i[9]=-h,i[2]=M*h-b,i[6]=T+S*h,i[10]=d*p}else if(e.order==="ZXY"){const S=p*v,M=p*m,b=_*v,T=_*m;i[0]=S-T*h,i[4]=-d*m,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*v,i[9]=T-S*h,i[2]=-d*_,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const S=d*v,M=d*m,b=h*v,T=h*m;i[0]=p*v,i[4]=b*_-M,i[8]=S*_+T,i[1]=p*m,i[5]=T*_+S,i[9]=M*_-b,i[2]=-_,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const S=d*p,M=d*_,b=h*p,T=h*_;i[0]=p*v,i[4]=T-S*m,i[8]=b*m+M,i[1]=m,i[5]=d*v,i[9]=-h*v,i[2]=-_*v,i[6]=M*m+b,i[10]=S-T*m}else if(e.order==="XZY"){const S=d*p,M=d*_,b=h*p,T=h*_;i[0]=p*v,i[4]=-m,i[8]=_*v,i[1]=S*m+T,i[5]=d*v,i[9]=M*m-b,i[2]=b*m-M,i[6]=h*v,i[10]=T*m+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tT,e,eT)}lookAt(e,i,s){const u=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),ir.crossVectors(s,si),ir.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ir.crossVectors(s,si)),ir.normalize(),ec.crossVectors(si,ir),u[0]=ir.x,u[4]=ec.x,u[8]=si.x,u[1]=ir.y,u[5]=ec.y,u[9]=si.y,u[2]=ir.z,u[6]=ec.z,u[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[4],p=s[8],_=s[12],v=s[1],m=s[5],S=s[9],M=s[13],b=s[2],T=s[6],x=s[10],y=s[14],N=s[3],w=s[7],O=s[11],X=s[15],I=u[0],P=u[4],st=u[8],R=u[12],U=u[1],ot=u[5],ct=u[9],xt=u[13],G=u[2],Q=u[6],H=u[10],at=u[14],et=u[3],ft=u[7],ht=u[11],$=u[15];return f[0]=d*I+h*U+p*G+_*et,f[4]=d*P+h*ot+p*Q+_*ft,f[8]=d*st+h*ct+p*H+_*ht,f[12]=d*R+h*xt+p*at+_*$,f[1]=v*I+m*U+S*G+M*et,f[5]=v*P+m*ot+S*Q+M*ft,f[9]=v*st+m*ct+S*H+M*ht,f[13]=v*R+m*xt+S*at+M*$,f[2]=b*I+T*U+x*G+y*et,f[6]=b*P+T*ot+x*Q+y*ft,f[10]=b*st+T*ct+x*H+y*ht,f[14]=b*R+T*xt+x*at+y*$,f[3]=N*I+w*U+O*G+X*et,f[7]=N*P+w*ot+O*Q+X*ft,f[11]=N*st+w*ct+O*H+X*ht,f[15]=N*R+w*xt+O*at+X*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],p=e[9],_=e[13],v=e[2],m=e[6],S=e[10],M=e[14],b=e[3],T=e[7],x=e[11],y=e[15];return b*(+f*p*m-u*_*m-f*h*S+s*_*S+u*h*M-s*p*M)+T*(+i*p*M-i*_*S+f*d*S-u*d*M+u*_*v-f*p*v)+x*(+i*_*m-i*h*M-f*d*m+s*d*M+f*h*v-s*_*v)+y*(-u*h*v-i*p*m+i*h*S+u*d*m-s*d*S+s*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],_=e[7],v=e[8],m=e[9],S=e[10],M=e[11],b=e[12],T=e[13],x=e[14],y=e[15],N=m*x*_-T*S*_+T*p*M-h*x*M-m*p*y+h*S*y,w=b*S*_-v*x*_-b*p*M+d*x*M+v*p*y-d*S*y,O=v*T*_-b*m*_+b*h*M-d*T*M-v*h*y+d*m*y,X=b*m*p-v*T*p-b*h*S+d*T*S+v*h*x-d*m*x,I=i*N+s*w+u*O+f*X;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=N*P,e[1]=(T*S*f-m*x*f-T*u*M+s*x*M+m*u*y-s*S*y)*P,e[2]=(h*x*f-T*p*f+T*u*_-s*x*_-h*u*y+s*p*y)*P,e[3]=(m*p*f-h*S*f-m*u*_+s*S*_+h*u*M-s*p*M)*P,e[4]=w*P,e[5]=(v*x*f-b*S*f+b*u*M-i*x*M-v*u*y+i*S*y)*P,e[6]=(b*p*f-d*x*f-b*u*_+i*x*_+d*u*y-i*p*y)*P,e[7]=(d*S*f-v*p*f+v*u*_-i*S*_-d*u*M+i*p*M)*P,e[8]=O*P,e[9]=(b*m*f-v*T*f-b*s*M+i*T*M+v*s*y-i*m*y)*P,e[10]=(d*T*f-b*h*f+b*s*_-i*T*_-d*s*y+i*h*y)*P,e[11]=(v*h*f-d*m*f-v*s*_+i*m*_+d*s*M-i*h*M)*P,e[12]=X*P,e[13]=(v*T*u-b*m*u+b*s*S-i*T*S-v*s*x+i*m*x)*P,e[14]=(b*h*u-d*T*u-b*s*p+i*T*p+d*s*x-i*h*x)*P,e[15]=(d*m*u-v*h*u+v*s*p-i*m*p-d*s*S+i*h*S)*P,this}scale(e){const i=this.elements,s=e.x,u=e.y,f=e.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,d=e.x,h=e.y,p=e.z,_=f*d,v=f*h;return this.set(_*d+s,_*h-u*p,_*p+u*h,0,_*h+u*p,v*h+s,v*p-u*d,0,_*p-u*h,v*p+u*d,f*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,i,u,1,0,0,0,0,1),this}compose(e,i,s){const u=this.elements,f=i._x,d=i._y,h=i._z,p=i._w,_=f+f,v=d+d,m=h+h,S=f*_,M=f*v,b=f*m,T=d*v,x=d*m,y=h*m,N=p*_,w=p*v,O=p*m,X=s.x,I=s.y,P=s.z;return u[0]=(1-(T+y))*X,u[1]=(M+O)*X,u[2]=(b-w)*X,u[3]=0,u[4]=(M-O)*I,u[5]=(1-(S+y))*I,u[6]=(x+N)*I,u[7]=0,u[8]=(b+w)*P,u[9]=(x-N)*P,u[10]=(1-(S+T))*P,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,s){const u=this.elements;let f=Ys.set(u[0],u[1],u[2]).length();const d=Ys.set(u[4],u[5],u[6]).length(),h=Ys.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],Ii.copy(this);const _=1/f,v=1/d,m=1/h;return Ii.elements[0]*=_,Ii.elements[1]*=_,Ii.elements[2]*=_,Ii.elements[4]*=v,Ii.elements[5]*=v,Ii.elements[6]*=v,Ii.elements[8]*=m,Ii.elements[9]*=m,Ii.elements[10]*=m,i.setFromRotationMatrix(Ii),s.x=f,s.y=d,s.z=h,this}makePerspective(e,i,s,u,f,d,h=Aa){const p=this.elements,_=2*f/(i-e),v=2*f/(s-u),m=(i+e)/(i-e),S=(s+u)/(s-u);let M,b;if(h===Aa)M=-(d+f)/(d-f),b=-2*d*f/(d-f);else if(h===Cc)M=-d/(d-f),b=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,u,f,d,h=Aa){const p=this.elements,_=1/(i-e),v=1/(s-u),m=1/(d-f),S=(i+e)*_,M=(s+u)*v;let b,T;if(h===Aa)b=(d+f)*m,T=-2*m;else if(h===Cc)b=f*m,T=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*_,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ys=new k,Ii=new sn,tT=new k(0,0,0),eT=new k(1,1,1),ir=new k,ec=new k,si=new k,bv=new sn,Av=new Tl;class Pc{constructor(e=0,i=0,s=0,u=Pc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,u=this._order){return this._x=e,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],p=u[1],_=u[5],v=u[9],m=u[2],S=u[6],M=u[10];switch(i){case"XYZ":this._y=Math.asin(Vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(S,_),this._z=0);break;case"YXZ":this._x=Math.asin(-Vn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,_)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Vn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-d,_)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Vn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,_));break;case"YZX":this._z=Math.asin(Vn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,_),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,_),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return bv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Av.setFromEuler(this),this.setFromQuaternion(Av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pc.DEFAULT_ORDER="XYZ";class Iy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nT=0;const Rv=new k,ks=new Tl,xa=new sn,nc=new k,fl=new k,iT=new k,aT=new Tl,Cv=new k(1,0,0),wv=new k(0,1,0),Dv=new k(0,0,1),rT={type:"added"},sT={type:"removed"};class mn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new k,i=new Pc,s=new Tl,u=new k(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new sn},normalMatrix:{value:new _e}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ks.setFromAxisAngle(e,i),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,i){return ks.setFromAxisAngle(e,i),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Cv,e)}rotateY(e){return this.rotateOnAxis(wv,e)}rotateZ(e){return this.rotateOnAxis(Dv,e)}translateOnAxis(e,i){return Rv.copy(e).applyQuaternion(this.quaternion),this.position.add(Rv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Cv,e)}translateY(e){return this.translateOnAxis(wv,e)}translateZ(e){return this.translateOnAxis(Dv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?nc.copy(e):nc.set(e,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(fl,nc,this.up):xa.lookAt(nc,fl,this.up),this.quaternion.setFromRotationMatrix(xa),u&&(xa.extractRotation(u.matrixWorld),ks.setFromRotationMatrix(xa),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(sT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,iT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,aT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++){const f=i[s];(f.matrixWorldAutoUpdate===!0||e===!0)&&f.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const u=this.children;for(let f=0,d=u.length;f<d;f++){const h=u[f];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.visibility=this._visibility,u.active=this._active,u.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),u.maxGeometryCount=this._maxGeometryCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.geometryCount=this._geometryCount,u.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(u.boundingSphere={center:u.boundingSphere.center.toArray(),radius:u.boundingSphere.radius}),this.boundingBox!==null&&(u.boundingBox={min:u.boundingBox.min.toArray(),max:u.boundingBox.max.toArray()}));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let _=0,v=p.length;_<v;_++){const m=p[_];f(e.shapes,m)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,_=this.material.length;p<_;p++)h.push(f(e.materials,this.material[p]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];u.animations.push(f(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),_=d(e.textures),v=d(e.images),m=d(e.shapes),S=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),_.length>0&&(s.textures=_),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=u,s;function d(h){const p=[];for(const _ in h){const v=h[_];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}}mn.DEFAULT_UP=new k(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new k,Ma=new k,Od=new k,Ea=new k,js=new k,Zs=new k,Lv=new k,Pd=new k,zd=new k,Id=new k;let ic=!1;class Ri{constructor(e=new k,i=new k,s=new k){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,u){u.subVectors(s,i),Bi.subVectors(e,i),u.cross(Bi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,s,u,f){Bi.subVectors(u,i),Ma.subVectors(s,i),Od.subVectors(e,i);const d=Bi.dot(Bi),h=Bi.dot(Ma),p=Bi.dot(Od),_=Ma.dot(Ma),v=Ma.dot(Od),m=d*_-h*h;if(m===0)return f.set(0,0,0),null;const S=1/m,M=(_*p-h*v)*S,b=(d*v-h*p)*S;return f.set(1-M-b,b,M)}static containsPoint(e,i,s,u){return this.getBarycoord(e,i,s,u,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getUV(e,i,s,u,f,d,h,p){return ic===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ic=!0),this.getInterpolation(e,i,s,u,f,d,h,p)}static getInterpolation(e,i,s,u,f,d,h,p){return this.getBarycoord(e,i,s,u,Ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Ea.x),p.addScaledVector(d,Ea.y),p.addScaledVector(h,Ea.z),p)}static isFrontFacing(e,i,s,u){return Bi.subVectors(s,i),Ma.subVectors(e,i),Bi.cross(Ma).dot(u)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,u){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,s,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Bi.cross(Ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,s,u,f){return ic===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ic=!0),Ri.getInterpolation(e,this.a,this.b,this.c,i,s,u,f)}getInterpolation(e,i,s,u,f){return Ri.getInterpolation(e,this.a,this.b,this.c,i,s,u,f)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,u=this.b,f=this.c;let d,h;js.subVectors(u,s),Zs.subVectors(f,s),Pd.subVectors(e,s);const p=js.dot(Pd),_=Zs.dot(Pd);if(p<=0&&_<=0)return i.copy(s);zd.subVectors(e,u);const v=js.dot(zd),m=Zs.dot(zd);if(v>=0&&m<=v)return i.copy(u);const S=p*m-v*_;if(S<=0&&p>=0&&v<=0)return d=p/(p-v),i.copy(s).addScaledVector(js,d);Id.subVectors(e,f);const M=js.dot(Id),b=Zs.dot(Id);if(b>=0&&M<=b)return i.copy(f);const T=M*_-p*b;if(T<=0&&_>=0&&b<=0)return h=_/(_-b),i.copy(s).addScaledVector(Zs,h);const x=v*b-M*m;if(x<=0&&m-v>=0&&M-b>=0)return Lv.subVectors(f,u),h=(m-v)/(m-v+(M-b)),i.copy(u).addScaledVector(Lv,h);const y=1/(x+T+S);return d=T*y,h=S*y,i.copy(s).addScaledVector(js,d).addScaledVector(Zs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const By={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},ac={h:0,s:0,l:0};function Bd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class xe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.toWorkingColorSpace(this,i),this}setRGB(e,i,s,u=Ge.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ge.toWorkingColorSpace(this,u),this}setHSL(e,i,s,u=Ge.workingColorSpace){if(e=YE(e,1),i=Vn(i,0,1),s=Vn(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Bd(d,f,e+1/3),this.g=Bd(d,f,e),this.b=Bd(d,f,e-1/3)}return Ge.toWorkingColorSpace(this,u),this}setStyle(e,i=wn){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=wn){const s=By[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}copyLinearToSRGB(e){return this.r=Ad(e.r),this.g=Ad(e.g),this.b=Ad(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Ge.fromWorkingColorSpace(Un.copy(this),e),Math.round(Vn(Un.r*255,0,255))*65536+Math.round(Vn(Un.g*255,0,255))*256+Math.round(Vn(Un.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Un.copy(this),i);const s=Un.r,u=Un.g,f=Un.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let p,_;const v=(h+d)/2;if(h===d)p=0,_=0;else{const m=d-h;switch(_=v<=.5?m/(d+h):m/(2-d-h),d){case s:p=(u-f)/m+(u<f?6:0);break;case u:p=(f-s)/m+2;break;case f:p=(s-u)/m+4;break}p/=6}return e.h=p,e.s=_,e.l=v,e}getRGB(e,i=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=wn){Ge.fromWorkingColorSpace(Un.copy(this),e);const i=Un.r,s=Un.g,u=Un.b;return e!==wn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,i,s){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+i,ar.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ar),e.getHSL(ac);const s=Td(ar.h,ac.h,i),u=Td(ar.s,ac.s,i),f=Td(ar.l,ac.l,i);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new xe;xe.NAMES=By;let oT=0;class Jr extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=co,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tp,this.blendDst=ep,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(s.blending=this.blending),this.side!==dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==tp&&(s.blendSrc=this.blendSrc),this.blendDst!==ep&&(s.blendDst=this.blendDst),this.blendEquation!==Wr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ec&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(i){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qr extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new k,rc=new ue;class fi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=rp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)rc.fromBufferAttribute(this,i),rc.applyMatrix3(e),this.setXY(i,rc.x,rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ba(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Xe(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ba(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ba(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ba(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ba(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,u){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),u=Xe(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),u=Xe(u,this.array),f=Xe(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rp&&(e.usage=this.usage),e}}class Fy extends fi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Hy extends fi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class on extends fi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let lT=0;const Ti=new sn,Fd=new mn,Ks=new k,oi=new bl,hl=new bl,xn=new k;class Nn extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uy(e)?Hy:Fy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new _e().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,i,s){return Ti.makeTranslation(e,i,s),this.applyMatrix4(Ti),this}scale(e,i,s){return Ti.makeScale(e,i,s),this.applyMatrix4(Ti),this}lookAt(e){return Fd.lookAt(e),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const i=[];for(let s=0,u=e.length;s<u;s++){const f=e[s];i.push(f.x,f.y,f.z||0)}return this.setAttribute("position",new on(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];oi.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];hl.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(oi.min,hl.min),oi.expandByPoint(xn),xn.addVectors(oi.max,hl.max),oi.expandByPoint(xn)):(oi.expandByPoint(hl.min),oi.expandByPoint(hl.max))}oi.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)xn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(xn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],p=this.morphTargetsRelative;for(let _=0,v=h.count;_<v;_++)xn.fromBufferAttribute(h,_),p&&(Ks.fromBufferAttribute(e,_),xn.add(Ks)),u=Math.max(u,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,u=i.position.array,f=i.normal.array,d=i.uv.array,h=u.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*h),4));const p=this.getAttribute("tangent").array,_=[],v=[];for(let U=0;U<h;U++)_[U]=new k,v[U]=new k;const m=new k,S=new k,M=new k,b=new ue,T=new ue,x=new ue,y=new k,N=new k;function w(U,ot,ct){m.fromArray(u,U*3),S.fromArray(u,ot*3),M.fromArray(u,ct*3),b.fromArray(d,U*2),T.fromArray(d,ot*2),x.fromArray(d,ct*2),S.sub(m),M.sub(m),T.sub(b),x.sub(b);const xt=1/(T.x*x.y-x.x*T.y);isFinite(xt)&&(y.copy(S).multiplyScalar(x.y).addScaledVector(M,-T.y).multiplyScalar(xt),N.copy(M).multiplyScalar(T.x).addScaledVector(S,-x.x).multiplyScalar(xt),_[U].add(y),_[ot].add(y),_[ct].add(y),v[U].add(N),v[ot].add(N),v[ct].add(N))}let O=this.groups;O.length===0&&(O=[{start:0,count:s.length}]);for(let U=0,ot=O.length;U<ot;++U){const ct=O[U],xt=ct.start,G=ct.count;for(let Q=xt,H=xt+G;Q<H;Q+=3)w(s[Q+0],s[Q+1],s[Q+2])}const X=new k,I=new k,P=new k,st=new k;function R(U){P.fromArray(f,U*3),st.copy(P);const ot=_[U];X.copy(ot),X.sub(P.multiplyScalar(P.dot(ot))).normalize(),I.crossVectors(st,ot);const xt=I.dot(v[U])<0?-1:1;p[U*4]=X.x,p[U*4+1]=X.y,p[U*4+2]=X.z,p[U*4+3]=xt}for(let U=0,ot=O.length;U<ot;++U){const ct=O[U],xt=ct.start,G=ct.count;for(let Q=xt,H=xt+G;Q<H;Q+=3)R(s[Q+0]),R(s[Q+1]),R(s[Q+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new fi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const u=new k,f=new k,d=new k,h=new k,p=new k,_=new k,v=new k,m=new k;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),T=e.getX(S+1),x=e.getX(S+2);u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,x),v.subVectors(d,f),m.subVectors(u,f),v.cross(m),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,x),h.add(v),p.add(v),_.add(v),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(x,_.x,_.y,_.z)}else for(let S=0,M=i.count;S<M;S+=3)u.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,f),m.subVectors(u,f),v.cross(m),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(h,p){const _=h.array,v=h.itemSize,m=h.normalized,S=new _.constructor(p.length*v);let M=0,b=0;for(let T=0,x=p.length;T<x;T++){h.isInterleavedBufferAttribute?M=p[T]*h.data.stride+h.offset:M=p[T]*v;for(let y=0;y<v;y++)S[b++]=_[M++]}return new fi(S,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nn,s=this.index.array,u=this.attributes;for(const h in u){const p=u[h],_=e(p,s);i.setAttribute(h,_)}const f=this.morphAttributes;for(const h in f){const p=[],_=f[h];for(let v=0,m=_.length;v<m;v++){const S=_[v],M=e(S,s);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const _=d[h];i.addGroup(_.start,_.count,_.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const _ in p)p[_]!==void 0&&(e[_]=p[_]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const _=s[p];e.data.attributes[p]=_.toJSON(e.data)}const u={};let f=!1;for(const p in this.morphAttributes){const _=this.morphAttributes[p],v=[];for(let m=0,S=_.length;m<S;m++){const M=_[m];v.push(M.toJSON(e.data))}v.length>0&&(u[p]=v,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const u=e.attributes;for(const _ in u){const v=u[_];this.setAttribute(_,v.clone(i))}const f=e.morphAttributes;for(const _ in f){const v=[],m=f[_];for(let S=0,M=m.length;S<M;S++)v.push(m[S].clone(i));this.morphAttributes[_]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let _=0,v=d.length;_<v;_++){const m=d[_];this.addGroup(m.start,m.count,m.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uv=new sn,Hr=new zy,sc=new Oc,Nv=new k,Qs=new k,Js=new k,$s=new k,Hd=new k,oc=new k,lc=new ue,uc=new ue,cc=new ue,Ov=new k,Pv=new k,zv=new k,fc=new k,hc=new k;class ke extends mn{constructor(e=new Nn,i=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){oc.set(0,0,0);for(let p=0,_=f.length;p<_;p++){const v=h[p],m=f[p];v!==0&&(Hd.fromBufferAttribute(m,e),d?oc.addScaledVector(Hd,v):oc.addScaledVector(Hd.sub(i),v))}i.add(oc)}return i}raycast(e,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),sc.copy(s.boundingSphere),sc.applyMatrix4(f),Hr.copy(e.ray).recast(e.near),!(sc.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(sc,Nv)===null||Hr.origin.distanceToSquared(Nv)>(e.far-e.near)**2))&&(Uv.copy(f).invert(),Hr.copy(e.ray).applyMatrix4(Uv),!(s.boundingBox!==null&&Hr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Hr)))}_computeIntersections(e,i,s){let u;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,_=f.attributes.uv,v=f.attributes.uv1,m=f.attributes.normal,S=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,T=S.length;b<T;b++){const x=S[b],y=d[x.materialIndex],N=Math.max(x.start,M.start),w=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let O=N,X=w;O<X;O+=3){const I=h.getX(O),P=h.getX(O+1),st=h.getX(O+2);u=dc(this,y,e,s,_,v,m,I,P,st),u&&(u.faceIndex=Math.floor(O/3),u.face.materialIndex=x.materialIndex,i.push(u))}}else{const b=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let x=b,y=T;x<y;x+=3){const N=h.getX(x),w=h.getX(x+1),O=h.getX(x+2);u=dc(this,d,e,s,_,v,m,N,w,O),u&&(u.faceIndex=Math.floor(x/3),i.push(u))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,T=S.length;b<T;b++){const x=S[b],y=d[x.materialIndex],N=Math.max(x.start,M.start),w=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let O=N,X=w;O<X;O+=3){const I=O,P=O+1,st=O+2;u=dc(this,y,e,s,_,v,m,I,P,st),u&&(u.faceIndex=Math.floor(O/3),u.face.materialIndex=x.materialIndex,i.push(u))}}else{const b=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let x=b,y=T;x<y;x+=3){const N=x,w=x+1,O=x+2;u=dc(this,d,e,s,_,v,m,N,w,O),u&&(u.faceIndex=Math.floor(x/3),i.push(u))}}}}function uT(o,e,i,s,u,f,d,h){let p;if(e.side===Xn?p=s.intersectTriangle(d,f,u,!0,h):p=s.intersectTriangle(u,f,d,e.side===dr,h),p===null)return null;hc.copy(h),hc.applyMatrix4(o.matrixWorld);const _=i.ray.origin.distanceTo(hc);return _<i.near||_>i.far?null:{distance:_,point:hc.clone(),object:o}}function dc(o,e,i,s,u,f,d,h,p,_){o.getVertexPosition(h,Qs),o.getVertexPosition(p,Js),o.getVertexPosition(_,$s);const v=uT(o,e,i,s,Qs,Js,$s,fc);if(v){u&&(lc.fromBufferAttribute(u,h),uc.fromBufferAttribute(u,p),cc.fromBufferAttribute(u,_),v.uv=Ri.getInterpolation(fc,Qs,Js,$s,lc,uc,cc,new ue)),f&&(lc.fromBufferAttribute(f,h),uc.fromBufferAttribute(f,p),cc.fromBufferAttribute(f,_),v.uv1=Ri.getInterpolation(fc,Qs,Js,$s,lc,uc,cc,new ue),v.uv2=v.uv1),d&&(Ov.fromBufferAttribute(d,h),Pv.fromBufferAttribute(d,p),zv.fromBufferAttribute(d,_),v.normal=Ri.getInterpolation(fc,Qs,Js,$s,Ov,Pv,zv,new k),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const m={a:h,b:p,c:_,normal:new k,materialIndex:0};Ri.getNormal(Qs,Js,$s,m.normal),v.face=m}return v}class Kr extends Nn{constructor(e=1,i=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const p=[],_=[],v=[],m=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,e,d,f,0),b("z","y","x",1,-1,s,i,-e,d,f,1),b("x","z","y",1,1,e,s,i,u,d,2),b("x","z","y",1,-1,e,s,-i,u,d,3),b("x","y","z",1,-1,e,i,s,u,f,4),b("x","y","z",-1,-1,e,i,-s,u,f,5),this.setIndex(p),this.setAttribute("position",new on(_,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(m,2));function b(T,x,y,N,w,O,X,I,P,st,R){const U=O/P,ot=X/st,ct=O/2,xt=X/2,G=I/2,Q=P+1,H=st+1;let at=0,et=0;const ft=new k;for(let ht=0;ht<H;ht++){const $=ht*ot-xt;for(let pt=0;pt<Q;pt++){const rt=pt*U-ct;ft[T]=rt*N,ft[x]=$*w,ft[y]=G,_.push(ft.x,ft.y,ft.z),ft[T]=0,ft[x]=0,ft[y]=I>0?1:-1,v.push(ft.x,ft.y,ft.z),m.push(pt/P),m.push(1-ht/st),at+=1}}for(let ht=0;ht<st;ht++)for(let $=0;$<P;$++){const pt=S+$+Q*ht,rt=S+$+Q*(ht+1),C=S+($+1)+Q*(ht+1),j=S+($+1)+Q*ht;p.push(pt,rt,j),p.push(rt,C,j),et+=6}h.addGroup(M,et,R),M+=et,S+=at}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const u=o[i][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=u.clone():Array.isArray(u)?e[i][s]=u.slice():e[i][s]=u}}return e}function Hn(o){const e={};for(let i=0;i<o.length;i++){const s=go(o[i]);for(const u in s)e[u]=s[u]}return e}function cT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Gy(o){return o.getRenderTarget()===null?o.outputColorSpace:Ge.workingColorSpace}const fT={clone:go,merge:Hn};var hT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hT,this.fragmentShader=dT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=cT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Vy extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Aa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ci extends Vy{constructor(e=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return op*2*Math.atan(Math.tan(Ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,s,u,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ed*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,_=d.fullHeight;f+=d.offsetX*u/p,i-=d.offsetY*s/_,u*=d.width/p,s*=d.height/_}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const to=-90,eo=1;class pT extends mn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new ci(to,eo,e,i);u.layers=this.layers,this.add(u);const f=new ci(to,eo,e,i);f.layers=this.layers,this.add(f);const d=new ci(to,eo,e,i);d.layers=this.layers,this.add(d);const h=new ci(to,eo,e,i);h.layers=this.layers,this.add(h);const p=new ci(to,eo,e,i);p.layers=this.layers,this.add(p);const _=new ci(to,eo,e,i);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,u,f,d,h,p]=i;for(const _ of i)this.remove(_);if(e===Aa)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const _ of i)this.add(_),_.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,_,v]=this.children,m=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,u),e.render(i,f),e.setRenderTarget(s,1,u),e.render(i,d),e.setRenderTarget(s,2,u),e.render(i,h),e.setRenderTarget(s,3,u),e.render(i,p),e.setRenderTarget(s,4,u),e.render(i,_),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,u),e.render(i,v),e.setRenderTarget(m,S,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Xy extends Kn{constructor(e,i,s,u,f,d,h,p,_,v){e=e!==void 0?e:[],i=i!==void 0?i:ho,super(e,i,s,u,f,d,h,p,_,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mT extends Zr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];i.encoding!==void 0&&(Sl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fr?wn:wi),this.texture=new Xy(u,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new Kr(5,5,5),f=new Qr({name:"CubemapFromEquirect",uniforms:go(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:lr});f.uniforms.tEquirect.value=i;const d=new ke(u,f),h=i.minFilter;return i.minFilter===Ml&&(i.minFilter=Ai),new pT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,u){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,u);e.setRenderTarget(f)}}const Gd=new k,gT=new k,_T=new _e;class Vr{constructor(e=new k(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,u){return this.normal.set(e,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const u=Gd.subVectors(s,i).cross(gT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Gd),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:i.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||_T.getNormalMatrix(e),u=this.coplanarPoint(Gd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Oc,pc=new k;class _p{constructor(e=new Vr,i=new Vr,s=new Vr,u=new Vr,f=new Vr,d=new Vr){this.planes=[e,i,s,u,f,d]}set(e,i,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Aa){const s=this.planes,u=e.elements,f=u[0],d=u[1],h=u[2],p=u[3],_=u[4],v=u[5],m=u[6],S=u[7],M=u[8],b=u[9],T=u[10],x=u[11],y=u[12],N=u[13],w=u[14],O=u[15];if(s[0].setComponents(p-f,S-_,x-M,O-y).normalize(),s[1].setComponents(p+f,S+_,x+M,O+y).normalize(),s[2].setComponents(p+d,S+v,x+b,O+N).normalize(),s[3].setComponents(p-d,S-v,x-b,O-N).normalize(),s[4].setComponents(p-h,S-m,x-T,O-w).normalize(),i===Aa)s[5].setComponents(p+h,S+m,x+T,O+w).normalize();else if(i===Cc)s[5].setComponents(h,m,T,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const i=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(pc.x=u.normal.x>0?e.max.x:e.min.x,pc.y=u.normal.y>0?e.max.y:e.min.y,pc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wy(){let o=null,e=!1,i=null,s=null;function u(f,d){i(f,d),s=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function vT(o,e){const i=e.isWebGL2,s=new WeakMap;function u(_,v){const m=_.array,S=_.usage,M=m.byteLength,b=o.createBuffer();o.bindBuffer(v,b),o.bufferData(v,m,S),_.onUploadCallback();let T;if(m instanceof Float32Array)T=o.FLOAT;else if(m instanceof Uint16Array)if(_.isFloat16BufferAttribute)if(i)T=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)T=o.SHORT;else if(m instanceof Uint32Array)T=o.UNSIGNED_INT;else if(m instanceof Int32Array)T=o.INT;else if(m instanceof Int8Array)T=o.BYTE;else if(m instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:b,type:T,bytesPerElement:m.BYTES_PER_ELEMENT,version:_.version,size:M}}function f(_,v,m){const S=v.array,M=v._updateRange,b=v.updateRanges;if(o.bindBuffer(m,_),M.count===-1&&b.length===0&&o.bufferSubData(m,0,S),b.length!==0){for(let T=0,x=b.length;T<x;T++){const y=b[T];i?o.bufferSubData(m,y.start*S.BYTES_PER_ELEMENT,S,y.start,y.count):o.bufferSubData(m,y.start*S.BYTES_PER_ELEMENT,S.subarray(y.start,y.start+y.count))}v.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(m,M.offset*S.BYTES_PER_ELEMENT,S,M.offset,M.count):o.bufferSubData(m,M.offset*S.BYTES_PER_ELEMENT,S.subarray(M.offset,M.offset+M.count)),M.count=-1),v.onUploadCallback()}function d(_){return _.isInterleavedBufferAttribute&&(_=_.data),s.get(_)}function h(_){_.isInterleavedBufferAttribute&&(_=_.data);const v=s.get(_);v&&(o.deleteBuffer(v.buffer),s.delete(_))}function p(_,v){if(_.isGLBufferAttribute){const S=s.get(_);(!S||S.version<_.version)&&s.set(_,{buffer:_.buffer,type:_.type,bytesPerElement:_.elementSize,version:_.version});return}_.isInterleavedBufferAttribute&&(_=_.data);const m=s.get(_);if(m===void 0)s.set(_,u(_,v));else if(m.version<_.version){if(m.size!==_.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");f(m.buffer,_,v),m.version=_.version}}return{get:d,remove:h,update:p}}class zc extends Nn{constructor(e=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:u};const f=e/2,d=i/2,h=Math.floor(s),p=Math.floor(u),_=h+1,v=p+1,m=e/h,S=i/p,M=[],b=[],T=[],x=[];for(let y=0;y<v;y++){const N=y*S-d;for(let w=0;w<_;w++){const O=w*m-f;b.push(O,-N,0),T.push(0,0,1),x.push(w/h),x.push(1-y/p)}}for(let y=0;y<p;y++)for(let N=0;N<h;N++){const w=N+_*y,O=N+_*(y+1),X=N+1+_*(y+1),I=N+1+_*y;M.push(w,O,I),M.push(O,X,I)}this.setIndex(M),this.setAttribute("position",new on(b,3)),this.setAttribute("normal",new on(T,3)),this.setAttribute("uv",new on(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.width,e.height,e.widthSegments,e.heightSegments)}}var yT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ST=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ET=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,TT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,VT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZT="gl_FragColor = linearToOutputTexel( gl_FragColor );",KT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,QT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$T=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ob=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_b=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,i1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,l1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,b1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,A1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,R1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,H1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,K1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:yT,alphahash_pars_fragment:ST,alphamap_fragment:xT,alphamap_pars_fragment:MT,alphatest_fragment:ET,alphatest_pars_fragment:TT,aomap_fragment:bT,aomap_pars_fragment:AT,batching_pars_vertex:RT,batching_vertex:CT,begin_vertex:wT,beginnormal_vertex:DT,bsdfs:LT,iridescence_fragment:UT,bumpmap_pars_fragment:NT,clipping_planes_fragment:OT,clipping_planes_pars_fragment:PT,clipping_planes_pars_vertex:zT,clipping_planes_vertex:IT,color_fragment:BT,color_pars_fragment:FT,color_pars_vertex:HT,color_vertex:GT,common:VT,cube_uv_reflection_fragment:XT,defaultnormal_vertex:WT,displacementmap_pars_vertex:qT,displacementmap_vertex:YT,emissivemap_fragment:kT,emissivemap_pars_fragment:jT,colorspace_fragment:ZT,colorspace_pars_fragment:KT,envmap_fragment:QT,envmap_common_pars_fragment:JT,envmap_pars_fragment:$T,envmap_pars_vertex:tb,envmap_physical_pars_fragment:hb,envmap_vertex:eb,fog_vertex:nb,fog_pars_vertex:ib,fog_fragment:ab,fog_pars_fragment:rb,gradientmap_pars_fragment:sb,lightmap_fragment:ob,lightmap_pars_fragment:lb,lights_lambert_fragment:ub,lights_lambert_pars_fragment:cb,lights_pars_begin:fb,lights_toon_fragment:db,lights_toon_pars_fragment:pb,lights_phong_fragment:mb,lights_phong_pars_fragment:gb,lights_physical_fragment:_b,lights_physical_pars_fragment:vb,lights_fragment_begin:yb,lights_fragment_maps:Sb,lights_fragment_end:xb,logdepthbuf_fragment:Mb,logdepthbuf_pars_fragment:Eb,logdepthbuf_pars_vertex:Tb,logdepthbuf_vertex:bb,map_fragment:Ab,map_pars_fragment:Rb,map_particle_fragment:Cb,map_particle_pars_fragment:wb,metalnessmap_fragment:Db,metalnessmap_pars_fragment:Lb,morphcolor_vertex:Ub,morphnormal_vertex:Nb,morphtarget_pars_vertex:Ob,morphtarget_vertex:Pb,normal_fragment_begin:zb,normal_fragment_maps:Ib,normal_pars_fragment:Bb,normal_pars_vertex:Fb,normal_vertex:Hb,normalmap_pars_fragment:Gb,clearcoat_normal_fragment_begin:Vb,clearcoat_normal_fragment_maps:Xb,clearcoat_pars_fragment:Wb,iridescence_pars_fragment:qb,opaque_fragment:Yb,packing:kb,premultiplied_alpha_fragment:jb,project_vertex:Zb,dithering_fragment:Kb,dithering_pars_fragment:Qb,roughnessmap_fragment:Jb,roughnessmap_pars_fragment:$b,shadowmap_pars_fragment:t1,shadowmap_pars_vertex:e1,shadowmap_vertex:n1,shadowmask_pars_fragment:i1,skinbase_vertex:a1,skinning_pars_vertex:r1,skinning_vertex:s1,skinnormal_vertex:o1,specularmap_fragment:l1,specularmap_pars_fragment:u1,tonemapping_fragment:c1,tonemapping_pars_fragment:f1,transmission_fragment:h1,transmission_pars_fragment:d1,uv_pars_fragment:p1,uv_pars_vertex:m1,uv_vertex:g1,worldpos_vertex:_1,background_vert:v1,background_frag:y1,backgroundCube_vert:S1,backgroundCube_frag:x1,cube_vert:M1,cube_frag:E1,depth_vert:T1,depth_frag:b1,distanceRGBA_vert:A1,distanceRGBA_frag:R1,equirect_vert:C1,equirect_frag:w1,linedashed_vert:D1,linedashed_frag:L1,meshbasic_vert:U1,meshbasic_frag:N1,meshlambert_vert:O1,meshlambert_frag:P1,meshmatcap_vert:z1,meshmatcap_frag:I1,meshnormal_vert:B1,meshnormal_frag:F1,meshphong_vert:H1,meshphong_frag:G1,meshphysical_vert:V1,meshphysical_frag:X1,meshtoon_vert:W1,meshtoon_frag:q1,points_vert:Y1,points_frag:k1,shadow_vert:j1,shadow_frag:Z1,sprite_vert:K1,sprite_frag:Q1},Ut={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},na={basic:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Hn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Hn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new xe(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Hn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Hn([Ut.points,Ut.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Hn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Hn([Ut.common,Ut.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Hn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Hn([Ut.sprite,Ut.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Hn([Ut.common,Ut.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Hn([Ut.lights,Ut.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};na.physical={uniforms:Hn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const mc={r:0,b:0,g:0};function J1(o,e,i,s,u,f,d){const h=new xe(0);let p=f===!0?0:1,_,v,m=null,S=0,M=null;function b(x,y){let N=!1,w=y.isScene===!0?y.background:null;w&&w.isTexture&&(w=(y.backgroundBlurriness>0?i:e).get(w)),w===null?T(h,p):w&&w.isColor&&(T(w,1),N=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||N)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Uc)?(v===void 0&&(v=new ke(new Kr(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:go(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(X,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),v.material.uniforms.envMap.value=w,v.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,v.material.toneMapped=Ge.getTransfer(w.colorSpace)!==Ke,(m!==w||S!==w.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,m=w,S=w.version,M=o.toneMapping),v.layers.enableAll(),x.unshift(v,v.geometry,v.material,0,0,null)):w&&w.isTexture&&(_===void 0&&(_=new ke(new zc(2,2),new Qr({name:"BackgroundMaterial",uniforms:go(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(_)),_.material.uniforms.t2D.value=w,_.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,_.material.toneMapped=Ge.getTransfer(w.colorSpace)!==Ke,w.matrixAutoUpdate===!0&&w.updateMatrix(),_.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||S!==w.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,m=w,S=w.version,M=o.toneMapping),_.layers.enableAll(),x.unshift(_,_.geometry,_.material,0,0,null))}function T(x,y){x.getRGB(mc,Gy(o)),s.buffers.color.setClear(mc.r,mc.g,mc.b,y,d)}return{getClearColor:function(){return h},setClearColor:function(x,y=1){h.set(x),p=y,T(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(x){p=x,T(h,p)},render:b}}function $1(o,e,i,s){const u=o.getParameter(o.MAX_VERTEX_ATTRIBS),f=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||f!==null,h={},p=x(null);let _=p,v=!1;function m(G,Q,H,at,et){let ft=!1;if(d){const ht=T(at,H,Q);_!==ht&&(_=ht,M(_.object)),ft=y(G,at,H,et),ft&&N(G,at,H,et)}else{const ht=Q.wireframe===!0;(_.geometry!==at.id||_.program!==H.id||_.wireframe!==ht)&&(_.geometry=at.id,_.program=H.id,_.wireframe=ht,ft=!0)}et!==null&&i.update(et,o.ELEMENT_ARRAY_BUFFER),(ft||v)&&(v=!1,st(G,Q,H,at),et!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(et).buffer))}function S(){return s.isWebGL2?o.createVertexArray():f.createVertexArrayOES()}function M(G){return s.isWebGL2?o.bindVertexArray(G):f.bindVertexArrayOES(G)}function b(G){return s.isWebGL2?o.deleteVertexArray(G):f.deleteVertexArrayOES(G)}function T(G,Q,H){const at=H.wireframe===!0;let et=h[G.id];et===void 0&&(et={},h[G.id]=et);let ft=et[Q.id];ft===void 0&&(ft={},et[Q.id]=ft);let ht=ft[at];return ht===void 0&&(ht=x(S()),ft[at]=ht),ht}function x(G){const Q=[],H=[],at=[];for(let et=0;et<u;et++)Q[et]=0,H[et]=0,at[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:H,attributeDivisors:at,object:G,attributes:{},index:null}}function y(G,Q,H,at){const et=_.attributes,ft=Q.attributes;let ht=0;const $=H.getAttributes();for(const pt in $)if($[pt].location>=0){const C=et[pt];let j=ft[pt];if(j===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),C===void 0||C.attribute!==j||j&&C.data!==j.data)return!0;ht++}return _.attributesNum!==ht||_.index!==at}function N(G,Q,H,at){const et={},ft=Q.attributes;let ht=0;const $=H.getAttributes();for(const pt in $)if($[pt].location>=0){let C=ft[pt];C===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(C=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(C=G.instanceColor));const j={};j.attribute=C,C&&C.data&&(j.data=C.data),et[pt]=j,ht++}_.attributes=et,_.attributesNum=ht,_.index=at}function w(){const G=_.newAttributes;for(let Q=0,H=G.length;Q<H;Q++)G[Q]=0}function O(G){X(G,0)}function X(G,Q){const H=_.newAttributes,at=_.enabledAttributes,et=_.attributeDivisors;H[G]=1,at[G]===0&&(o.enableVertexAttribArray(G),at[G]=1),et[G]!==Q&&((s.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,Q),et[G]=Q)}function I(){const G=_.newAttributes,Q=_.enabledAttributes;for(let H=0,at=Q.length;H<at;H++)Q[H]!==G[H]&&(o.disableVertexAttribArray(H),Q[H]=0)}function P(G,Q,H,at,et,ft,ht){ht===!0?o.vertexAttribIPointer(G,Q,H,et,ft):o.vertexAttribPointer(G,Q,H,at,et,ft)}function st(G,Q,H,at){if(s.isWebGL2===!1&&(G.isInstancedMesh||at.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const et=at.attributes,ft=H.getAttributes(),ht=Q.defaultAttributeValues;for(const $ in ft){const pt=ft[$];if(pt.location>=0){let rt=et[$];if(rt===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(rt=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(rt=G.instanceColor)),rt!==void 0){const C=rt.normalized,j=rt.itemSize,_t=i.get(rt);if(_t===void 0)continue;const vt=_t.buffer,Lt=_t.type,Nt=_t.bytesPerElement,Ct=s.isWebGL2===!0&&(Lt===o.INT||Lt===o.UNSIGNED_INT||rt.gpuType===My);if(rt.isInterleavedBufferAttribute){const St=rt.data,V=St.stride,Pe=rt.offset;if(St.isInstancedInterleavedBuffer){for(let jt=0;jt<pt.locationSize;jt++)X(pt.location+jt,St.meshPerAttribute);G.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let jt=0;jt<pt.locationSize;jt++)O(pt.location+jt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let jt=0;jt<pt.locationSize;jt++)P(pt.location+jt,j/pt.locationSize,Lt,C,V*Nt,(Pe+j/pt.locationSize*jt)*Nt,Ct)}else{if(rt.isInstancedBufferAttribute){for(let St=0;St<pt.locationSize;St++)X(pt.location+St,rt.meshPerAttribute);G.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let St=0;St<pt.locationSize;St++)O(pt.location+St);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let St=0;St<pt.locationSize;St++)P(pt.location+St,j/pt.locationSize,Lt,C,j*Nt,j/pt.locationSize*St*Nt,Ct)}}else if(ht!==void 0){const C=ht[$];if(C!==void 0)switch(C.length){case 2:o.vertexAttrib2fv(pt.location,C);break;case 3:o.vertexAttrib3fv(pt.location,C);break;case 4:o.vertexAttrib4fv(pt.location,C);break;default:o.vertexAttrib1fv(pt.location,C)}}}}I()}function R(){ct();for(const G in h){const Q=h[G];for(const H in Q){const at=Q[H];for(const et in at)b(at[et].object),delete at[et];delete Q[H]}delete h[G]}}function U(G){if(h[G.id]===void 0)return;const Q=h[G.id];for(const H in Q){const at=Q[H];for(const et in at)b(at[et].object),delete at[et];delete Q[H]}delete h[G.id]}function ot(G){for(const Q in h){const H=h[Q];if(H[G.id]===void 0)continue;const at=H[G.id];for(const et in at)b(at[et].object),delete at[et];delete H[G.id]}}function ct(){xt(),v=!0,_!==p&&(_=p,M(_.object))}function xt(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:m,reset:ct,resetDefaultState:xt,dispose:R,releaseStatesOfGeometry:U,releaseStatesOfProgram:ot,initAttributes:w,enableAttribute:O,disableUnusedAttributes:I}}function tA(o,e,i,s){const u=s.isWebGL2;let f;function d(v){f=v}function h(v,m){o.drawArrays(f,v,m),i.update(m,f,1)}function p(v,m,S){if(S===0)return;let M,b;if(u)M=o,b="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[b](f,v,m,S),i.update(m,f,S)}function _(v,m,S){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<S;b++)this.render(v[b],m[b]);else{M.multiDrawArraysWEBGL(f,v,0,m,0,S);let b=0;for(let T=0;T<S;T++)b+=m[T];i.update(b,f,1)}}this.setMode=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=_}function eA(o,e,i){let s;function u(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function f(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=d||e.has("WEBGL_draw_buffers"),v=i.logarithmicDepthBuffer===!0,m=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),T=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),y=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),w=S>0,O=d||e.has("OES_texture_float"),X=w&&O,I=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:_,getMaxAnisotropy:u,getMaxPrecision:f,precision:h,logarithmicDepthBuffer:v,maxTextures:m,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:b,maxAttributes:T,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:N,vertexTextures:w,floatFragmentTextures:O,floatVertexTextures:X,maxSamples:I}}function nA(o){const e=this;let i=null,s=0,u=!1,f=!1;const d=new Vr,h=new _e,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,S){const M=m.length!==0||S||s!==0||u;return u=S,s=m.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,S){i=v(m,S,0)},this.setState=function(m,S,M){const b=m.clippingPlanes,T=m.clipIntersection,x=m.clipShadows,y=o.get(m);if(!u||b===null||b.length===0||f&&!x)f?v(null):_();else{const N=f?0:s,w=N*4;let O=y.clippingState||null;p.value=O,O=v(b,S,w,M);for(let X=0;X!==w;++X)O[X]=i[X];y.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function _(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(m,S,M,b){const T=m!==null?m.length:0;let x=null;if(T!==0){if(x=p.value,b!==!0||x===null){const y=M+T*4,N=S.matrixWorldInverse;h.getNormalMatrix(N),(x===null||x.length<y)&&(x=new Float32Array(y));for(let w=0,O=M;w!==T;++w,O+=4)d.copy(m[w]).applyMatrix4(N,h),d.normal.toArray(x,O),x[O+3]=d.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function iA(o){let e=new WeakMap;function i(d,h){return h===np?d.mapping=ho:h===ip&&(d.mapping=po),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===np||h===ip)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new mT(p.height/2);return _.fromEquirectangularTexture(o,d),e.set(d,_),d.addEventListener("dispose",u),i(_.texture,d.mapping)}else return null}}return d}function u(d){const h=d.target;h.removeEventListener("dispose",u);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}class qy extends Vy{constructor(e=-1,i=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+i,p=u-i;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,d=f+_*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const lo=4,Iv=[.125,.215,.35,.446,.526,.582],Yr=20,Vd=new qy,Bv=new xe;let Xd=null,Wd=0,qd=0;const Xr=(1+Math.sqrt(5))/2,no=1/Xr,Fv=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Xr,no),new k(0,Xr,-no),new k(no,0,Xr),new k(-no,0,Xr),new k(Xr,no,0),new k(-Xr,no,0)];class up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,u=100){Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,s,u,f),i>0&&this._blur(f,0,0,i),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,Wd,qd),e.scissorTest=!1,gc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel();const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:El,format:Hi,colorSpace:Ra,depthBuffer:!1},u=Hv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hv(e,i,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aA(f)),this._blurMaterial=rA(f,e,i)}return u}_compileMaterial(e){const i=new ke(this._lodPlanes[0],e);this._renderer.compile(i,Vd)}_sceneToCubeUV(e,i,s,u){const h=new ci(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,S=v.toneMapping;v.getClearColor(Bv),v.toneMapping=ur,v.autoClear=!1;const M=new qr({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),b=new ke(new Kr,M);let T=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,T=!0):(M.color.copy(Bv),T=!0);for(let y=0;y<6;y++){const N=y%3;N===0?(h.up.set(0,p[y],0),h.lookAt(_[y],0,0)):N===1?(h.up.set(0,0,p[y]),h.lookAt(0,_[y],0)):(h.up.set(0,p[y],0),h.lookAt(0,0,_[y]));const w=this._cubeSize;gc(u,N*w,y>2?w:0,w,w),v.setRenderTarget(u),T&&v.render(b,h),v.render(e,h)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=S,v.autoClear=m,e.background=x}_textureToCubeUV(e,i){const s=this._renderer,u=e.mapping===ho||e.mapping===po;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const f=u?this._cubemapMaterial:this._equirectMaterial,d=new ke(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const p=this._cubeSize;gc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,Vd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;for(let u=1;u<this._lodPlanes.length;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Fv[(u-1)%Fv.length];this._blur(e,u-1,u,f,d)}i.autoClear=s}_blur(e,i,s,u,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,u,"latitudinal",f),this._halfBlur(d,e,s,s,u,"longitudinal",f)}_halfBlur(e,i,s,u,f,d,h){const p=this._renderer,_=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new ke(this._lodPlanes[u],_),S=_.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Yr-1),T=f/b,x=isFinite(f)?1+Math.floor(v*T):Yr;x>Yr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Yr}`);const y=[];let N=0;for(let P=0;P<Yr;++P){const st=P/T,R=Math.exp(-st*st/2);y.push(R),P===0?N+=R:P<x&&(N+=2*R)}for(let P=0;P<y.length;P++)y[P]=y[P]/N;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=y,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:w}=this;S.dTheta.value=b,S.mipInt.value=w-s;const O=this._sizeLods[u],X=3*O*(u>w-lo?u-w+lo:0),I=4*(this._cubeSize-O);gc(i,X,I,3*O,2*O),p.setRenderTarget(i),p.render(m,Vd)}}function aA(o){const e=[],i=[],s=[];let u=o;const f=o-lo+1+Iv.length;for(let d=0;d<f;d++){const h=Math.pow(2,u);i.push(h);let p=1/h;d>o-lo?p=Iv[d-o+lo-1]:d===0&&(p=0),s.push(p);const _=1/(h-2),v=-_,m=1+_,S=[v,v,m,v,m,m,v,v,m,m,v,m],M=6,b=6,T=3,x=2,y=1,N=new Float32Array(T*b*M),w=new Float32Array(x*b*M),O=new Float32Array(y*b*M);for(let I=0;I<M;I++){const P=I%3*2/3-1,st=I>2?0:-1,R=[P,st,0,P+2/3,st,0,P+2/3,st+1,0,P,st,0,P+2/3,st+1,0,P,st+1,0];N.set(R,T*b*I),w.set(S,x*b*I);const U=[I,I,I,I,I,I];O.set(U,y*b*I)}const X=new Nn;X.setAttribute("position",new fi(N,T)),X.setAttribute("uv",new fi(w,x)),X.setAttribute("faceIndex",new fi(O,y)),e.push(X),u>lo&&u--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function Hv(o,e,i){const s=new Zr(o,e,i);return s.texture.mapping=Uc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gc(o,e,i,s,u){o.viewport.set(e,i,s,u),o.scissor.set(e,i,s,u)}function rA(o,e,i){const s=new Float32Array(Yr),u=new k(0,1,0);return new Qr({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Gv(){return new Qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Vv(){return new Qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function vp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sA(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,_=p===np||p===ip,v=p===ho||p===po;if(_||v)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let m=e.get(h);return i===null&&(i=new up(o)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),e.set(h,m),m.texture}else{if(e.has(h))return e.get(h).texture;{const m=h.image;if(_&&m&&m.height>0||v&&m&&u(m)){i===null&&(i=new up(o));const S=_?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,S),h.addEventListener("dispose",f),S.texture}else return null}}}return h}function u(h){let p=0;const _=6;for(let v=0;v<_;v++)h[v]!==void 0&&p++;return p===_}function f(h){const p=h.target;p.removeEventListener("dispose",f);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function oA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return e[s]=u,u}return{has:function(s){return i(s)!==null},init:function(s){s.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(s){const u=i(s);return u===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function lA(o,e,i,s){const u={},f=new WeakMap;function d(m){const S=m.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const T=S.morphAttributes[b];for(let x=0,y=T.length;x<y;x++)e.remove(T[x])}S.removeEventListener("dispose",d),delete u[S.id];const M=f.get(S);M&&(e.remove(M),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(m,S){return u[S.id]===!0||(S.addEventListener("dispose",d),u[S.id]=!0,i.memory.geometries++),S}function p(m){const S=m.attributes;for(const b in S)e.update(S[b],o.ARRAY_BUFFER);const M=m.morphAttributes;for(const b in M){const T=M[b];for(let x=0,y=T.length;x<y;x++)e.update(T[x],o.ARRAY_BUFFER)}}function _(m){const S=[],M=m.index,b=m.attributes.position;let T=0;if(M!==null){const N=M.array;T=M.version;for(let w=0,O=N.length;w<O;w+=3){const X=N[w+0],I=N[w+1],P=N[w+2];S.push(X,I,I,P,P,X)}}else if(b!==void 0){const N=b.array;T=b.version;for(let w=0,O=N.length/3-1;w<O;w+=3){const X=w+0,I=w+1,P=w+2;S.push(X,I,I,P,P,X)}}else return;const x=new(Uy(S)?Hy:Fy)(S,1);x.version=T;const y=f.get(m);y&&e.remove(y),f.set(m,x)}function v(m){const S=f.get(m);if(S){const M=m.index;M!==null&&S.version<M.version&&_(m)}else _(m);return f.get(m)}return{get:h,update:p,getWireframeAttribute:v}}function uA(o,e,i,s){const u=s.isWebGL2;let f;function d(M){f=M}let h,p;function _(M){h=M.type,p=M.bytesPerElement}function v(M,b){o.drawElements(f,b,h,M*p),i.update(b,f,1)}function m(M,b,T){if(T===0)return;let x,y;if(u)x=o,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](f,b,h,M*p,T),i.update(b,f,T)}function S(M,b,T){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<T;y++)this.render(M[y]/p,b[y]);else{x.multiDrawElementsWEBGL(f,b,0,h,M,0,T);let y=0;for(let N=0;N<T;N++)y+=b[N];i.update(y,f,1)}}this.setMode=d,this.setIndex=_,this.render=v,this.renderInstances=m,this.renderMultiDraw=S}function cA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:s}}function fA(o,e){return o[0]-e[0]}function hA(o,e){return Math.abs(e[1])-Math.abs(o[1])}function dA(o,e,i){const s={},u=new Float32Array(8),f=new WeakMap,d=new $e,h=[];for(let _=0;_<8;_++)h[_]=[_,0];function p(_,v,m){const S=_.morphTargetInfluences;if(e.isWebGL2===!0){const b=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=b!==void 0?b.length:0;let x=f.get(v);if(x===void 0||x.count!==T){let Q=function(){xt.dispose(),f.delete(v),v.removeEventListener("dispose",Q)};var M=Q;x!==void 0&&x.texture.dispose();const w=v.morphAttributes.position!==void 0,O=v.morphAttributes.normal!==void 0,X=v.morphAttributes.color!==void 0,I=v.morphAttributes.position||[],P=v.morphAttributes.normal||[],st=v.morphAttributes.color||[];let R=0;w===!0&&(R=1),O===!0&&(R=2),X===!0&&(R=3);let U=v.attributes.position.count*R,ot=1;U>e.maxTextureSize&&(ot=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const ct=new Float32Array(U*ot*4*T),xt=new Py(ct,U,ot,T);xt.type=or,xt.needsUpdate=!0;const G=R*4;for(let H=0;H<T;H++){const at=I[H],et=P[H],ft=st[H],ht=U*ot*4*H;for(let $=0;$<at.count;$++){const pt=$*G;w===!0&&(d.fromBufferAttribute(at,$),ct[ht+pt+0]=d.x,ct[ht+pt+1]=d.y,ct[ht+pt+2]=d.z,ct[ht+pt+3]=0),O===!0&&(d.fromBufferAttribute(et,$),ct[ht+pt+4]=d.x,ct[ht+pt+5]=d.y,ct[ht+pt+6]=d.z,ct[ht+pt+7]=0),X===!0&&(d.fromBufferAttribute(ft,$),ct[ht+pt+8]=d.x,ct[ht+pt+9]=d.y,ct[ht+pt+10]=d.z,ct[ht+pt+11]=ft.itemSize===4?d.w:1)}}x={count:T,texture:xt,size:new ue(U,ot)},f.set(v,x),v.addEventListener("dispose",Q)}let y=0;for(let w=0;w<S.length;w++)y+=S[w];const N=v.morphTargetsRelative?1:1-y;m.getUniforms().setValue(o,"morphTargetBaseInfluence",N),m.getUniforms().setValue(o,"morphTargetInfluences",S),m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const b=S===void 0?0:S.length;let T=s[v.id];if(T===void 0||T.length!==b){T=[];for(let O=0;O<b;O++)T[O]=[O,0];s[v.id]=T}for(let O=0;O<b;O++){const X=T[O];X[0]=O,X[1]=S[O]}T.sort(hA);for(let O=0;O<8;O++)O<b&&T[O][1]?(h[O][0]=T[O][0],h[O][1]=T[O][1]):(h[O][0]=Number.MAX_SAFE_INTEGER,h[O][1]=0);h.sort(fA);const x=v.morphAttributes.position,y=v.morphAttributes.normal;let N=0;for(let O=0;O<8;O++){const X=h[O],I=X[0],P=X[1];I!==Number.MAX_SAFE_INTEGER&&P?(x&&v.getAttribute("morphTarget"+O)!==x[I]&&v.setAttribute("morphTarget"+O,x[I]),y&&v.getAttribute("morphNormal"+O)!==y[I]&&v.setAttribute("morphNormal"+O,y[I]),u[O]=P,N+=P):(x&&v.hasAttribute("morphTarget"+O)===!0&&v.deleteAttribute("morphTarget"+O),y&&v.hasAttribute("morphNormal"+O)===!0&&v.deleteAttribute("morphNormal"+O),u[O]=0)}const w=v.morphTargetsRelative?1:1-N;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",u)}}return{update:p}}function pA(o,e,i,s){let u=new WeakMap;function f(p){const _=s.render.frame,v=p.geometry,m=e.get(p,v);if(u.get(m)!==_&&(e.update(m),u.set(m,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),u.get(p)!==_&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),u.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;u.get(S)!==_&&(S.update(),u.set(S,_))}return m}function d(){u=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}class Yy extends Kn{constructor(e,i,s,u,f,d,h,p,_,v){if(v=v!==void 0?v:jr,v!==jr&&v!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===jr&&(s=sr),s===void 0&&v===mo&&(s=kr),super(null,u,f,d,h,p,v,s,_),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:Gn,this.minFilter=p!==void 0?p:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const ky=new Kn,jy=new Yy(1,1);jy.compareFunction=Ly;const Zy=new Py,Ky=new JE,Qy=new Xy,Xv=[],Wv=[],qv=new Float32Array(16),Yv=new Float32Array(9),kv=new Float32Array(4);function vo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const u=e*i;let f=Xv[u];if(f===void 0&&(f=new Float32Array(u),Xv[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Ic(o,e){let i=Wv[e];i===void 0&&(i=new Int32Array(e),Wv[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function mA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function gA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function _A(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function vA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function yA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;kv.set(s),o.uniformMatrix2fv(this.addr,!1,kv),_n(i,s)}}function SA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;Yv.set(s),o.uniformMatrix3fv(this.addr,!1,Yv),_n(i,s)}}function xA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;qv.set(s),o.uniformMatrix4fv(this.addr,!1,qv),_n(i,s)}}function MA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function EA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function TA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function bA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function AA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function RA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function CA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function wA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function DA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);const f=this.type===o.SAMPLER_2D_SHADOW?jy:ky;i.setTexture2D(e||f,u)}function LA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(e||Ky,u)}function UA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTextureCube(e||Qy,u)}function NA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(e||Zy,u)}function OA(o){switch(o){case 5126:return mA;case 35664:return gA;case 35665:return _A;case 35666:return vA;case 35674:return yA;case 35675:return SA;case 35676:return xA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return TA;case 35669:case 35673:return bA;case 5125:return AA;case 36294:return RA;case 36295:return CA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return NA}}function PA(o,e){o.uniform1fv(this.addr,e)}function zA(o,e){const i=vo(e,this.size,2);o.uniform2fv(this.addr,i)}function IA(o,e){const i=vo(e,this.size,3);o.uniform3fv(this.addr,i)}function BA(o,e){const i=vo(e,this.size,4);o.uniform4fv(this.addr,i)}function FA(o,e){const i=vo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function HA(o,e){const i=vo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function GA(o,e){const i=vo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function VA(o,e){o.uniform1iv(this.addr,e)}function XA(o,e){o.uniform2iv(this.addr,e)}function WA(o,e){o.uniform3iv(this.addr,e)}function qA(o,e){o.uniform4iv(this.addr,e)}function YA(o,e){o.uniform1uiv(this.addr,e)}function kA(o,e){o.uniform2uiv(this.addr,e)}function jA(o,e){o.uniform3uiv(this.addr,e)}function ZA(o,e){o.uniform4uiv(this.addr,e)}function KA(o,e,i){const s=this.cache,u=e.length,f=Ic(i,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let d=0;d!==u;++d)i.setTexture2D(e[d]||ky,f[d])}function QA(o,e,i){const s=this.cache,u=e.length,f=Ic(i,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let d=0;d!==u;++d)i.setTexture3D(e[d]||Ky,f[d])}function JA(o,e,i){const s=this.cache,u=e.length,f=Ic(i,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let d=0;d!==u;++d)i.setTextureCube(e[d]||Qy,f[d])}function $A(o,e,i){const s=this.cache,u=e.length,f=Ic(i,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let d=0;d!==u;++d)i.setTexture2DArray(e[d]||Zy,f[d])}function tR(o){switch(o){case 5126:return PA;case 35664:return zA;case 35665:return IA;case 35666:return BA;case 35674:return FA;case 35675:return HA;case 35676:return GA;case 5124:case 35670:return VA;case 35667:case 35671:return XA;case 35668:case 35672:return WA;case 35669:case 35673:return qA;case 5125:return YA;case 36294:return kA;case 36295:return jA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return $A}}class eR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=OA(i.type)}}class nR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tR(i.type)}}class iR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,i[h.id],s)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function jv(o,e){o.seq.push(e),o.map[e.id]=e}function aR(o,e,i){const s=o.name,u=s.length;for(Yd.lastIndex=0;;){const f=Yd.exec(s),d=Yd.lastIndex;let h=f[1];const p=f[2]==="]",_=f[3];if(p&&(h=h|0),_===void 0||_==="["&&d+2===u){jv(i,_===void 0?new eR(h,o,e):new nR(h,o,e));break}else{let m=i.map[h];m===void 0&&(m=new iR(h),jv(i,m)),i=m}}}class Mc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(i,u),d=e.getUniformLocation(i,f.name);aR(f,d,this)}}setValue(e,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(e,s,u)}setOptional(e,i,s){const u=i[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,i,s,u){for(let f=0,d=i.length;f!==d;++f){const h=i[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,u)}}static seqWithValue(e,i){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in i&&s.push(d)}return s}}function Zv(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const rR=37297;let sR=0;function oR(o,e){const i=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}function lR(o){const e=Ge.getPrimaries(Ge.workingColorSpace),i=Ge.getPrimaries(o);let s;switch(e===i?s="":e===Rc&&i===Ac?s="LinearDisplayP3ToLinearSRGB":e===Ac&&i===Rc&&(s="LinearSRGBToLinearDisplayP3"),o){case Ra:case Nc:return[s,"LinearTransferOETF"];case wn:case gp:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function Kv(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=o.getShaderInfoLog(e).trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+oR(o.getShaderSource(e),d)}else return u}function uR(o,e){const i=lR(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function cR(o,e){let i;switch(e){case ME:i="Linear";break;case EE:i="Reinhard";break;case TE:i="OptimizedCineon";break;case Sy:i="ACESFilmic";break;case AE:i="AgX";break;case bE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function fR(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(uo).join(`
`)}function hR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(uo).join(`
`)}function dR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function pR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function uo(o){return o!==""}function Qv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mR=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(o){return o.replace(mR,_R)}const gR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _R(o,e){let i=pe[e];if(i===void 0){const s=gR.get(e);if(s!==void 0)i=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return cp(i)}const vR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(o){return o.replace(vR,yR)}function yR(o,e,i,s){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function ty(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===vy?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===KM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ta&&(e="SHADOWMAP_TYPE_VSM"),e}function xR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function ER(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case yy:e="ENVMAP_BLENDING_MULTIPLY";break;case SE:e="ENVMAP_BLENDING_MIX";break;case xE:e="ENVMAP_BLENDING_ADD";break}return e}function TR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function bR(o,e,i,s){const u=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=SR(i),_=xR(i),v=MR(i),m=ER(i),S=TR(i),M=i.isWebGL2?"":fR(i),b=hR(i),T=dR(f),x=u.createProgram();let y,N,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(uo).join(`
`),y.length>0&&(y+=`
`),N=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(uo).join(`
`),N.length>0&&(N+=`
`)):(y=[ty(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),N=[M,ty(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",i.envMap?"#define "+m:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ur?"#define TONE_MAPPING":"",i.toneMapping!==ur?pe.tonemapping_pars_fragment:"",i.toneMapping!==ur?cR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,uR("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(uo).join(`
`)),d=cp(d),d=Qv(d,i),d=Jv(d,i),h=cp(h),h=Qv(h,i),h=Jv(h,i),d=$v(d),h=$v(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,N=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N);const O=w+y+d,X=w+N+h,I=Zv(u,u.VERTEX_SHADER,O),P=Zv(u,u.FRAGMENT_SHADER,X);u.attachShader(x,I),u.attachShader(x,P),i.index0AttributeName!==void 0?u.bindAttribLocation(x,0,i.index0AttributeName):i.morphTargets===!0&&u.bindAttribLocation(x,0,"position"),u.linkProgram(x);function st(ct){if(o.debug.checkShaderErrors){const xt=u.getProgramInfoLog(x).trim(),G=u.getShaderInfoLog(I).trim(),Q=u.getShaderInfoLog(P).trim();let H=!0,at=!0;if(u.getProgramParameter(x,u.LINK_STATUS)===!1)if(H=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,x,I,P);else{const et=Kv(u,I,"vertex"),ft=Kv(u,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(x,u.VALIDATE_STATUS)+`

Program Info Log: `+xt+`
`+et+`
`+ft)}else xt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",xt):(G===""||Q==="")&&(at=!1);at&&(ct.diagnostics={runnable:H,programLog:xt,vertexShader:{log:G,prefix:y},fragmentShader:{log:Q,prefix:N}})}u.deleteShader(I),u.deleteShader(P),R=new Mc(u,x),U=pR(u,x)}let R;this.getUniforms=function(){return R===void 0&&st(this),R};let U;this.getAttributes=function(){return U===void 0&&st(this),U};let ot=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ot===!1&&(ot=u.getProgramParameter(x,rR)),ot},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=sR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=P,this}let AR=0;class RR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,u=this._getShaderStage(i),f=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(u)===!1&&(d.add(u),u.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new CR(e),i.set(e,s)),s}}class CR{constructor(e){this.id=AR++,this.code=e,this.usedTimes=0}}function wR(o,e,i,s,u,f,d){const h=new Iy,p=new RR,_=[],v=u.isWebGL2,m=u.logarithmicDepthBuffer,S=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return R===0?"uv":`uv${R}`}function x(R,U,ot,ct,xt){const G=ct.fog,Q=xt.geometry,H=R.isMeshStandardMaterial?ct.environment:null,at=(R.isMeshStandardMaterial?i:e).get(R.envMap||H),et=at&&at.mapping===Uc?at.image.height:null,ft=b[R.type];R.precision!==null&&(M=u.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const ht=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,$=ht!==void 0?ht.length:0;let pt=0;Q.morphAttributes.position!==void 0&&(pt=1),Q.morphAttributes.normal!==void 0&&(pt=2),Q.morphAttributes.color!==void 0&&(pt=3);let rt,C,j,_t;if(ft){const De=na[ft];rt=De.vertexShader,C=De.fragmentShader}else rt=R.vertexShader,C=R.fragmentShader,p.update(R),j=p.getVertexShaderID(R),_t=p.getFragmentShaderID(R);const vt=o.getRenderTarget(),Lt=xt.isInstancedMesh===!0,Nt=xt.isBatchedMesh===!0,Ct=!!R.map,St=!!R.matcap,V=!!at,Pe=!!R.aoMap,jt=!!R.lightMap,Qt=!!R.bumpMap,Pt=!!R.normalMap,le=!!R.displacementMap,It=!!R.emissiveMap,L=!!R.metalnessMap,A=!!R.roughnessMap,nt=R.anisotropy>0,yt=R.clearcoat>0,Mt=R.iridescence>0,Tt=R.sheen>0,Xt=R.transmission>0,wt=nt&&!!R.anisotropyMap,Bt=yt&&!!R.clearcoatMap,qt=yt&&!!R.clearcoatNormalMap,$t=yt&&!!R.clearcoatRoughnessMap,Et=Mt&&!!R.iridescenceMap,Ft=Mt&&!!R.iridescenceThicknessMap,Gt=Tt&&!!R.sheenColorMap,Yt=Tt&&!!R.sheenRoughnessMap,Vt=!!R.specularMap,Ot=!!R.specularColorMap,te=!!R.specularIntensityMap,ve=Xt&&!!R.transmissionMap,We=Xt&&!!R.thicknessMap,Kt=!!R.gradientMap,Rt=!!R.alphaMap,B=R.alphaTest>0,bt=!!R.alphaHash,At=!!R.extensions,Jt=!!Q.attributes.uv1,ee=!!Q.attributes.uv2,ze=!!Q.attributes.uv3;let Ie=ur;return R.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Ie=o.toneMapping),{isWebGL2:v,shaderID:ft,shaderType:R.type,shaderName:R.name,vertexShader:rt,fragmentShader:C,defines:R.defines,customVertexShaderID:j,customFragmentShaderID:_t,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Nt,instancing:Lt,instancingColor:Lt&&xt.instanceColor!==null,supportsVertexTextures:S,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ra,map:Ct,matcap:St,envMap:V,envMapMode:V&&at.mapping,envMapCubeUVHeight:et,aoMap:Pe,lightMap:jt,bumpMap:Qt,normalMap:Pt,displacementMap:S&&le,emissiveMap:It,normalMapObjectSpace:Pt&&R.normalMapType===BE,normalMapTangentSpace:Pt&&R.normalMapType===Dy,metalnessMap:L,roughnessMap:A,anisotropy:nt,anisotropyMap:wt,clearcoat:yt,clearcoatMap:Bt,clearcoatNormalMap:qt,clearcoatRoughnessMap:$t,iridescence:Mt,iridescenceMap:Et,iridescenceThicknessMap:Ft,sheen:Tt,sheenColorMap:Gt,sheenRoughnessMap:Yt,specularMap:Vt,specularColorMap:Ot,specularIntensityMap:te,transmission:Xt,transmissionMap:ve,thicknessMap:We,gradientMap:Kt,opaque:R.transparent===!1&&R.blending===co,alphaMap:Rt,alphaTest:B,alphaHash:bt,combine:R.combine,mapUv:Ct&&T(R.map.channel),aoMapUv:Pe&&T(R.aoMap.channel),lightMapUv:jt&&T(R.lightMap.channel),bumpMapUv:Qt&&T(R.bumpMap.channel),normalMapUv:Pt&&T(R.normalMap.channel),displacementMapUv:le&&T(R.displacementMap.channel),emissiveMapUv:It&&T(R.emissiveMap.channel),metalnessMapUv:L&&T(R.metalnessMap.channel),roughnessMapUv:A&&T(R.roughnessMap.channel),anisotropyMapUv:wt&&T(R.anisotropyMap.channel),clearcoatMapUv:Bt&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:qt&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&T(R.sheenRoughnessMap.channel),specularMapUv:Vt&&T(R.specularMap.channel),specularColorMapUv:Ot&&T(R.specularColorMap.channel),specularIntensityMapUv:te&&T(R.specularIntensityMap.channel),transmissionMapUv:ve&&T(R.transmissionMap.channel),thicknessMapUv:We&&T(R.thicknessMap.channel),alphaMapUv:Rt&&T(R.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Pt||nt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:Jt,vertexUv2s:ee,vertexUv3s:ze,pointsUvs:xt.isPoints===!0&&!!Q.attributes.uv&&(Ct||Rt),fog:!!G,useFog:R.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:xt.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:pt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&ot.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ie,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Ct&&R.map.isVideoTexture===!0&&Ge.getTransfer(R.map.colorSpace)===Ke,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ci,flipSided:R.side===Xn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:At&&R.extensions.derivatives===!0,extensionFragDepth:At&&R.extensions.fragDepth===!0,extensionDrawBuffers:At&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:At&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:At&&R.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:v||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:v||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:v||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function y(R){const U=[];if(R.shaderID?U.push(R.shaderID):(U.push(R.customVertexShaderID),U.push(R.customFragmentShaderID)),R.defines!==void 0)for(const ot in R.defines)U.push(ot),U.push(R.defines[ot]);return R.isRawShaderMaterial===!1&&(N(U,R),w(U,R),U.push(o.outputColorSpace)),U.push(R.customProgramCacheKey),U.join()}function N(R,U){R.push(U.precision),R.push(U.outputColorSpace),R.push(U.envMapMode),R.push(U.envMapCubeUVHeight),R.push(U.mapUv),R.push(U.alphaMapUv),R.push(U.lightMapUv),R.push(U.aoMapUv),R.push(U.bumpMapUv),R.push(U.normalMapUv),R.push(U.displacementMapUv),R.push(U.emissiveMapUv),R.push(U.metalnessMapUv),R.push(U.roughnessMapUv),R.push(U.anisotropyMapUv),R.push(U.clearcoatMapUv),R.push(U.clearcoatNormalMapUv),R.push(U.clearcoatRoughnessMapUv),R.push(U.iridescenceMapUv),R.push(U.iridescenceThicknessMapUv),R.push(U.sheenColorMapUv),R.push(U.sheenRoughnessMapUv),R.push(U.specularMapUv),R.push(U.specularColorMapUv),R.push(U.specularIntensityMapUv),R.push(U.transmissionMapUv),R.push(U.thicknessMapUv),R.push(U.combine),R.push(U.fogExp2),R.push(U.sizeAttenuation),R.push(U.morphTargetsCount),R.push(U.morphAttributeCount),R.push(U.numDirLights),R.push(U.numPointLights),R.push(U.numSpotLights),R.push(U.numSpotLightMaps),R.push(U.numHemiLights),R.push(U.numRectAreaLights),R.push(U.numDirLightShadows),R.push(U.numPointLightShadows),R.push(U.numSpotLightShadows),R.push(U.numSpotLightShadowsWithMaps),R.push(U.numLightProbes),R.push(U.shadowMapType),R.push(U.toneMapping),R.push(U.numClippingPlanes),R.push(U.numClipIntersection),R.push(U.depthPacking)}function w(R,U){h.disableAll(),U.isWebGL2&&h.enable(0),U.supportsVertexTextures&&h.enable(1),U.instancing&&h.enable(2),U.instancingColor&&h.enable(3),U.matcap&&h.enable(4),U.envMap&&h.enable(5),U.normalMapObjectSpace&&h.enable(6),U.normalMapTangentSpace&&h.enable(7),U.clearcoat&&h.enable(8),U.iridescence&&h.enable(9),U.alphaTest&&h.enable(10),U.vertexColors&&h.enable(11),U.vertexAlphas&&h.enable(12),U.vertexUv1s&&h.enable(13),U.vertexUv2s&&h.enable(14),U.vertexUv3s&&h.enable(15),U.vertexTangents&&h.enable(16),U.anisotropy&&h.enable(17),U.alphaHash&&h.enable(18),U.batching&&h.enable(19),R.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.skinning&&h.enable(4),U.morphTargets&&h.enable(5),U.morphNormals&&h.enable(6),U.morphColors&&h.enable(7),U.premultipliedAlpha&&h.enable(8),U.shadowMapEnabled&&h.enable(9),U.useLegacyLights&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),R.push(h.mask)}function O(R){const U=b[R.type];let ot;if(U){const ct=na[U];ot=fT.clone(ct.uniforms)}else ot=R.uniforms;return ot}function X(R,U){let ot;for(let ct=0,xt=_.length;ct<xt;ct++){const G=_[ct];if(G.cacheKey===U){ot=G,++ot.usedTimes;break}}return ot===void 0&&(ot=new bR(o,U,R,f),_.push(ot)),ot}function I(R){if(--R.usedTimes===0){const U=_.indexOf(R);_[U]=_[_.length-1],_.pop(),R.destroy()}}function P(R){p.remove(R)}function st(){p.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:O,acquireProgram:X,releaseProgram:I,releaseShaderCache:P,programs:_,dispose:st}}function DR(){let o=new WeakMap;function e(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function i(f){o.delete(f)}function s(f,d,h){o.get(f)[d]=h}function u(){o=new WeakMap}return{get:e,remove:i,update:s,dispose:u}}function LR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ey(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ny(){const o=[];let e=0;const i=[],s=[],u=[];function f(){e=0,i.length=0,s.length=0,u.length=0}function d(m,S,M,b,T,x){let y=o[e];return y===void 0?(y={id:m.id,object:m,geometry:S,material:M,groupOrder:b,renderOrder:m.renderOrder,z:T,group:x},o[e]=y):(y.id=m.id,y.object=m,y.geometry=S,y.material=M,y.groupOrder=b,y.renderOrder=m.renderOrder,y.z=T,y.group=x),e++,y}function h(m,S,M,b,T,x){const y=d(m,S,M,b,T,x);M.transmission>0?s.push(y):M.transparent===!0?u.push(y):i.push(y)}function p(m,S,M,b,T,x){const y=d(m,S,M,b,T,x);M.transmission>0?s.unshift(y):M.transparent===!0?u.unshift(y):i.unshift(y)}function _(m,S){i.length>1&&i.sort(m||LR),s.length>1&&s.sort(S||ey),u.length>1&&u.sort(S||ey)}function v(){for(let m=e,S=o.length;m<S;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:h,unshift:p,finish:v,sort:_}}function UR(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new ny,o.set(s,[d])):u>=f.length?(d=new ny,f.push(d)):d=f[u],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function NR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new k,color:new xe};break;case"SpotLight":i={position:new k,direction:new k,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=i,i}}}function OR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let PR=0;function zR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function IR(o,e){const i=new NR,s=OR(),u={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)u.probe.push(new k);const f=new k,d=new sn,h=new sn;function p(v,m){let S=0,M=0,b=0;for(let ct=0;ct<9;ct++)u.probe[ct].set(0,0,0);let T=0,x=0,y=0,N=0,w=0,O=0,X=0,I=0,P=0,st=0,R=0;v.sort(zR);const U=m===!0?Math.PI:1;for(let ct=0,xt=v.length;ct<xt;ct++){const G=v[ct],Q=G.color,H=G.intensity,at=G.distance,et=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)S+=Q.r*H*U,M+=Q.g*H*U,b+=Q.b*H*U;else if(G.isLightProbe){for(let ft=0;ft<9;ft++)u.probe[ft].addScaledVector(G.sh.coefficients[ft],H);R++}else if(G.isDirectionalLight){const ft=i.get(G);if(ft.color.copy(G.color).multiplyScalar(G.intensity*U),G.castShadow){const ht=G.shadow,$=s.get(G);$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,u.directionalShadow[T]=$,u.directionalShadowMap[T]=et,u.directionalShadowMatrix[T]=G.shadow.matrix,O++}u.directional[T]=ft,T++}else if(G.isSpotLight){const ft=i.get(G);ft.position.setFromMatrixPosition(G.matrixWorld),ft.color.copy(Q).multiplyScalar(H*U),ft.distance=at,ft.coneCos=Math.cos(G.angle),ft.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ft.decay=G.decay,u.spot[y]=ft;const ht=G.shadow;if(G.map&&(u.spotLightMap[P]=G.map,P++,ht.updateMatrices(G),G.castShadow&&st++),u.spotLightMatrix[y]=ht.matrix,G.castShadow){const $=s.get(G);$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,u.spotShadow[y]=$,u.spotShadowMap[y]=et,I++}y++}else if(G.isRectAreaLight){const ft=i.get(G);ft.color.copy(Q).multiplyScalar(H),ft.halfWidth.set(G.width*.5,0,0),ft.halfHeight.set(0,G.height*.5,0),u.rectArea[N]=ft,N++}else if(G.isPointLight){const ft=i.get(G);if(ft.color.copy(G.color).multiplyScalar(G.intensity*U),ft.distance=G.distance,ft.decay=G.decay,G.castShadow){const ht=G.shadow,$=s.get(G);$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,$.shadowCameraNear=ht.camera.near,$.shadowCameraFar=ht.camera.far,u.pointShadow[x]=$,u.pointShadowMap[x]=et,u.pointShadowMatrix[x]=G.shadow.matrix,X++}u.point[x]=ft,x++}else if(G.isHemisphereLight){const ft=i.get(G);ft.skyColor.copy(G.color).multiplyScalar(H*U),ft.groundColor.copy(G.groundColor).multiplyScalar(H*U),u.hemi[w]=ft,w++}}N>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(u.rectAreaLTC1=Ut.LTC_FLOAT_1,u.rectAreaLTC2=Ut.LTC_FLOAT_2):(u.rectAreaLTC1=Ut.LTC_HALF_1,u.rectAreaLTC2=Ut.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(u.rectAreaLTC1=Ut.LTC_FLOAT_1,u.rectAreaLTC2=Ut.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(u.rectAreaLTC1=Ut.LTC_HALF_1,u.rectAreaLTC2=Ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),u.ambient[0]=S,u.ambient[1]=M,u.ambient[2]=b;const ot=u.hash;(ot.directionalLength!==T||ot.pointLength!==x||ot.spotLength!==y||ot.rectAreaLength!==N||ot.hemiLength!==w||ot.numDirectionalShadows!==O||ot.numPointShadows!==X||ot.numSpotShadows!==I||ot.numSpotMaps!==P||ot.numLightProbes!==R)&&(u.directional.length=T,u.spot.length=y,u.rectArea.length=N,u.point.length=x,u.hemi.length=w,u.directionalShadow.length=O,u.directionalShadowMap.length=O,u.pointShadow.length=X,u.pointShadowMap.length=X,u.spotShadow.length=I,u.spotShadowMap.length=I,u.directionalShadowMatrix.length=O,u.pointShadowMatrix.length=X,u.spotLightMatrix.length=I+P-st,u.spotLightMap.length=P,u.numSpotLightShadowsWithMaps=st,u.numLightProbes=R,ot.directionalLength=T,ot.pointLength=x,ot.spotLength=y,ot.rectAreaLength=N,ot.hemiLength=w,ot.numDirectionalShadows=O,ot.numPointShadows=X,ot.numSpotShadows=I,ot.numSpotMaps=P,ot.numLightProbes=R,u.version=PR++)}function _(v,m){let S=0,M=0,b=0,T=0,x=0;const y=m.matrixWorldInverse;for(let N=0,w=v.length;N<w;N++){const O=v[N];if(O.isDirectionalLight){const X=u.directional[S];X.direction.setFromMatrixPosition(O.matrixWorld),f.setFromMatrixPosition(O.target.matrixWorld),X.direction.sub(f),X.direction.transformDirection(y),S++}else if(O.isSpotLight){const X=u.spot[b];X.position.setFromMatrixPosition(O.matrixWorld),X.position.applyMatrix4(y),X.direction.setFromMatrixPosition(O.matrixWorld),f.setFromMatrixPosition(O.target.matrixWorld),X.direction.sub(f),X.direction.transformDirection(y),b++}else if(O.isRectAreaLight){const X=u.rectArea[T];X.position.setFromMatrixPosition(O.matrixWorld),X.position.applyMatrix4(y),h.identity(),d.copy(O.matrixWorld),d.premultiply(y),h.extractRotation(d),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),X.halfWidth.applyMatrix4(h),X.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const X=u.point[M];X.position.setFromMatrixPosition(O.matrixWorld),X.position.applyMatrix4(y),M++}else if(O.isHemisphereLight){const X=u.hemi[x];X.direction.setFromMatrixPosition(O.matrixWorld),X.direction.transformDirection(y),x++}}}return{setup:p,setupView:_,state:u}}function iy(o,e){const i=new IR(o,e),s=[],u=[];function f(){s.length=0,u.length=0}function d(m){s.push(m)}function h(m){u.push(m)}function p(m){i.setup(s,m)}function _(m){i.setupView(s,m)}return{init:f,state:{lightsArray:s,shadowsArray:u,lights:i},setupLights:p,setupLightsView:_,pushLight:d,pushShadow:h}}function BR(o,e){let i=new WeakMap;function s(f,d=0){const h=i.get(f);let p;return h===void 0?(p=new iy(o,e),i.set(f,[p])):d>=h.length?(p=new iy(o,e),h.push(p)):p=h[d],p}function u(){i=new WeakMap}return{get:s,dispose:u}}class FR extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HR extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XR(o,e,i){let s=new _p;const u=new ue,f=new ue,d=new $e,h=new FR({depthPacking:IE}),p=new HR,_={},v=i.maxTextureSize,m={[dr]:Xn,[Xn]:dr,[Ci]:Ci},S=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:GR,fragmentShader:VR}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Nn;b.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ke(b,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vy;let y=this.type;this.render=function(I,P,st){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const R=o.getRenderTarget(),U=o.getActiveCubeFace(),ot=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(lr),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const xt=y!==Ta&&this.type===Ta,G=y===Ta&&this.type!==Ta;for(let Q=0,H=I.length;Q<H;Q++){const at=I[Q],et=at.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;u.copy(et.mapSize);const ft=et.getFrameExtents();if(u.multiply(ft),f.copy(et.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/ft.x),u.x=f.x*ft.x,et.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/ft.y),u.y=f.y*ft.y,et.mapSize.y=f.y)),et.map===null||xt===!0||G===!0){const $=this.type!==Ta?{minFilter:Gn,magFilter:Gn}:{};et.map!==null&&et.map.dispose(),et.map=new Zr(u.x,u.y,$),et.map.texture.name=at.name+".shadowMap",et.camera.updateProjectionMatrix()}o.setRenderTarget(et.map),o.clear();const ht=et.getViewportCount();for(let $=0;$<ht;$++){const pt=et.getViewport($);d.set(f.x*pt.x,f.y*pt.y,f.x*pt.z,f.y*pt.w),ct.viewport(d),et.updateMatrices(at,$),s=et.getFrustum(),O(P,st,et.camera,at,this.type)}et.isPointLightShadow!==!0&&this.type===Ta&&N(et,st),et.needsUpdate=!1}y=this.type,x.needsUpdate=!1,o.setRenderTarget(R,U,ot)};function N(I,P){const st=e.update(T);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Zr(u.x,u.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(P,null,st,S,T,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(P,null,st,M,T,null)}function w(I,P,st,R){let U=null;const ot=st.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(ot!==void 0)U=ot;else if(U=st.isPointLight===!0?p:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ct=U.uuid,xt=P.uuid;let G=_[ct];G===void 0&&(G={},_[ct]=G);let Q=G[xt];Q===void 0&&(Q=U.clone(),G[xt]=Q,P.addEventListener("dispose",X)),U=Q}if(U.visible=P.visible,U.wireframe=P.wireframe,R===Ta?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:m[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,st.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const ct=o.properties.get(U);ct.light=st}return U}function O(I,P,st,R,U){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&U===Ta)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,I.matrixWorld);const xt=e.update(I),G=I.material;if(Array.isArray(G)){const Q=xt.groups;for(let H=0,at=Q.length;H<at;H++){const et=Q[H],ft=G[et.materialIndex];if(ft&&ft.visible){const ht=w(I,ft,R,U);I.onBeforeShadow(o,I,P,st,xt,ht,et),o.renderBufferDirect(st,null,xt,ht,I,et),I.onAfterShadow(o,I,P,st,xt,ht,et)}}}else if(G.visible){const Q=w(I,G,R,U);I.onBeforeShadow(o,I,P,st,xt,Q,null),o.renderBufferDirect(st,null,xt,Q,I,null),I.onAfterShadow(o,I,P,st,xt,Q,null)}}const ct=I.children;for(let xt=0,G=ct.length;xt<G;xt++)O(ct[xt],P,st,R,U)}function X(I){I.target.removeEventListener("dispose",X);for(const st in _){const R=_[st],U=I.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}function WR(o,e,i){const s=i.isWebGL2;function u(){let B=!1;const bt=new $e;let At=null;const Jt=new $e(0,0,0,0);return{setMask:function(ee){At!==ee&&!B&&(o.colorMask(ee,ee,ee,ee),At=ee)},setLocked:function(ee){B=ee},setClear:function(ee,ze,Ie,Qe,De){De===!0&&(ee*=Qe,ze*=Qe,Ie*=Qe),bt.set(ee,ze,Ie,Qe),Jt.equals(bt)===!1&&(o.clearColor(ee,ze,Ie,Qe),Jt.copy(bt))},reset:function(){B=!1,At=null,Jt.set(-1,0,0,0)}}}function f(){let B=!1,bt=null,At=null,Jt=null;return{setTest:function(ee){ee?Nt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(ee){bt!==ee&&!B&&(o.depthMask(ee),bt=ee)},setFunc:function(ee){if(At!==ee){switch(ee){case dE:o.depthFunc(o.NEVER);break;case pE:o.depthFunc(o.ALWAYS);break;case mE:o.depthFunc(o.LESS);break;case Ec:o.depthFunc(o.LEQUAL);break;case gE:o.depthFunc(o.EQUAL);break;case _E:o.depthFunc(o.GEQUAL);break;case vE:o.depthFunc(o.GREATER);break;case yE:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}At=ee}},setLocked:function(ee){B=ee},setClear:function(ee){Jt!==ee&&(o.clearDepth(ee),Jt=ee)},reset:function(){B=!1,bt=null,At=null,Jt=null}}}function d(){let B=!1,bt=null,At=null,Jt=null,ee=null,ze=null,Ie=null,Qe=null,De=null;return{setTest:function(Te){B||(Te?Nt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Te){bt!==Te&&!B&&(o.stencilMask(Te),bt=Te)},setFunc:function(Te,Le,hi){(At!==Te||Jt!==Le||ee!==hi)&&(o.stencilFunc(Te,Le,hi),At=Te,Jt=Le,ee=hi)},setOp:function(Te,Le,hi){(ze!==Te||Ie!==Le||Qe!==hi)&&(o.stencilOp(Te,Le,hi),ze=Te,Ie=Le,Qe=hi)},setLocked:function(Te){B=Te},setClear:function(Te){De!==Te&&(o.clearStencil(Te),De=Te)},reset:function(){B=!1,bt=null,At=null,Jt=null,ee=null,ze=null,Ie=null,Qe=null,De=null}}}const h=new u,p=new f,_=new d,v=new WeakMap,m=new WeakMap;let S={},M={},b=new WeakMap,T=[],x=null,y=!1,N=null,w=null,O=null,X=null,I=null,P=null,st=null,R=new xe(0,0,0),U=0,ot=!1,ct=null,xt=null,G=null,Q=null,H=null;const at=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,ft=0;const ht=o.getParameter(o.VERSION);ht.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(ht)[1]),et=ft>=1):ht.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),et=ft>=2);let $=null,pt={};const rt=o.getParameter(o.SCISSOR_BOX),C=o.getParameter(o.VIEWPORT),j=new $e().fromArray(rt),_t=new $e().fromArray(C);function vt(B,bt,At,Jt){const ee=new Uint8Array(4),ze=o.createTexture();o.bindTexture(B,ze),o.texParameteri(B,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(B,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ie=0;Ie<At;Ie++)s&&(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)?o.texImage3D(bt,0,o.RGBA,1,1,Jt,0,o.RGBA,o.UNSIGNED_BYTE,ee):o.texImage2D(bt+Ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ee);return ze}const Lt={};Lt[o.TEXTURE_2D]=vt(o.TEXTURE_2D,o.TEXTURE_2D,1),Lt[o.TEXTURE_CUBE_MAP]=vt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Lt[o.TEXTURE_2D_ARRAY]=vt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Lt[o.TEXTURE_3D]=vt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),p.setClear(1),_.setClear(0),Nt(o.DEPTH_TEST),p.setFunc(Ec),It(!1),L(H0),Nt(o.CULL_FACE),Pt(lr);function Nt(B){S[B]!==!0&&(o.enable(B),S[B]=!0)}function Ct(B){S[B]!==!1&&(o.disable(B),S[B]=!1)}function St(B,bt){return M[B]!==bt?(o.bindFramebuffer(B,bt),M[B]=bt,s&&(B===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=bt),B===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=bt)),!0):!1}function V(B,bt){let At=T,Jt=!1;if(B)if(At=b.get(bt),At===void 0&&(At=[],b.set(bt,At)),B.isWebGLMultipleRenderTargets){const ee=B.texture;if(At.length!==ee.length||At[0]!==o.COLOR_ATTACHMENT0){for(let ze=0,Ie=ee.length;ze<Ie;ze++)At[ze]=o.COLOR_ATTACHMENT0+ze;At.length=ee.length,Jt=!0}}else At[0]!==o.COLOR_ATTACHMENT0&&(At[0]=o.COLOR_ATTACHMENT0,Jt=!0);else At[0]!==o.BACK&&(At[0]=o.BACK,Jt=!0);Jt&&(i.isWebGL2?o.drawBuffers(At):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(At))}function Pe(B){return x!==B?(o.useProgram(B),x=B,!0):!1}const jt={[Wr]:o.FUNC_ADD,[JM]:o.FUNC_SUBTRACT,[$M]:o.FUNC_REVERSE_SUBTRACT};if(s)jt[W0]=o.MIN,jt[q0]=o.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(jt[W0]=B.MIN_EXT,jt[q0]=B.MAX_EXT)}const Qt={[tE]:o.ZERO,[eE]:o.ONE,[nE]:o.SRC_COLOR,[tp]:o.SRC_ALPHA,[lE]:o.SRC_ALPHA_SATURATE,[sE]:o.DST_COLOR,[aE]:o.DST_ALPHA,[iE]:o.ONE_MINUS_SRC_COLOR,[ep]:o.ONE_MINUS_SRC_ALPHA,[oE]:o.ONE_MINUS_DST_COLOR,[rE]:o.ONE_MINUS_DST_ALPHA,[uE]:o.CONSTANT_COLOR,[cE]:o.ONE_MINUS_CONSTANT_COLOR,[fE]:o.CONSTANT_ALPHA,[hE]:o.ONE_MINUS_CONSTANT_ALPHA};function Pt(B,bt,At,Jt,ee,ze,Ie,Qe,De,Te){if(B===lr){y===!0&&(Ct(o.BLEND),y=!1);return}if(y===!1&&(Nt(o.BLEND),y=!0),B!==QM){if(B!==N||Te!==ot){if((w!==Wr||I!==Wr)&&(o.blendEquation(o.FUNC_ADD),w=Wr,I=Wr),Te)switch(B){case co:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case G0:o.blendFunc(o.ONE,o.ONE);break;case V0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case X0:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case co:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case G0:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case V0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case X0:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}O=null,X=null,P=null,st=null,R.set(0,0,0),U=0,N=B,ot=Te}return}ee=ee||bt,ze=ze||At,Ie=Ie||Jt,(bt!==w||ee!==I)&&(o.blendEquationSeparate(jt[bt],jt[ee]),w=bt,I=ee),(At!==O||Jt!==X||ze!==P||Ie!==st)&&(o.blendFuncSeparate(Qt[At],Qt[Jt],Qt[ze],Qt[Ie]),O=At,X=Jt,P=ze,st=Ie),(Qe.equals(R)===!1||De!==U)&&(o.blendColor(Qe.r,Qe.g,Qe.b,De),R.copy(Qe),U=De),N=B,ot=!1}function le(B,bt){B.side===Ci?Ct(o.CULL_FACE):Nt(o.CULL_FACE);let At=B.side===Xn;bt&&(At=!At),It(At),B.blending===co&&B.transparent===!1?Pt(lr):Pt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),p.setFunc(B.depthFunc),p.setTest(B.depthTest),p.setMask(B.depthWrite),h.setMask(B.colorWrite);const Jt=B.stencilWrite;_.setTest(Jt),Jt&&(_.setMask(B.stencilWriteMask),_.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),_.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),nt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Nt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function It(B){ct!==B&&(B?o.frontFace(o.CW):o.frontFace(o.CCW),ct=B)}function L(B){B!==jM?(Nt(o.CULL_FACE),B!==xt&&(B===H0?o.cullFace(o.BACK):B===ZM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),xt=B}function A(B){B!==G&&(et&&o.lineWidth(B),G=B)}function nt(B,bt,At){B?(Nt(o.POLYGON_OFFSET_FILL),(Q!==bt||H!==At)&&(o.polygonOffset(bt,At),Q=bt,H=At)):Ct(o.POLYGON_OFFSET_FILL)}function yt(B){B?Nt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function Mt(B){B===void 0&&(B=o.TEXTURE0+at-1),$!==B&&(o.activeTexture(B),$=B)}function Tt(B,bt,At){At===void 0&&($===null?At=o.TEXTURE0+at-1:At=$);let Jt=pt[At];Jt===void 0&&(Jt={type:void 0,texture:void 0},pt[At]=Jt),(Jt.type!==B||Jt.texture!==bt)&&($!==At&&(o.activeTexture(At),$=At),o.bindTexture(B,bt||Lt[B]),Jt.type=B,Jt.texture=bt)}function Xt(){const B=pt[$];B!==void 0&&B.type!==void 0&&(o.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function wt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Bt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qt(){try{o.texSubImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $t(){try{o.texSubImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(){try{o.texStorage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Yt(){try{o.texStorage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Vt(){try{o.texImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(){try{o.texImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(B){j.equals(B)===!1&&(o.scissor(B.x,B.y,B.z,B.w),j.copy(B))}function ve(B){_t.equals(B)===!1&&(o.viewport(B.x,B.y,B.z,B.w),_t.copy(B))}function We(B,bt){let At=m.get(bt);At===void 0&&(At=new WeakMap,m.set(bt,At));let Jt=At.get(B);Jt===void 0&&(Jt=o.getUniformBlockIndex(bt,B.name),At.set(B,Jt))}function Kt(B,bt){const Jt=m.get(bt).get(B);v.get(bt)!==Jt&&(o.uniformBlockBinding(bt,Jt,B.__bindingPointIndex),v.set(bt,Jt))}function Rt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),s===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},$=null,pt={},M={},b=new WeakMap,T=[],x=null,y=!1,N=null,w=null,O=null,X=null,I=null,P=null,st=null,R=new xe(0,0,0),U=0,ot=!1,ct=null,xt=null,G=null,Q=null,H=null,j.set(0,0,o.canvas.width,o.canvas.height),_t.set(0,0,o.canvas.width,o.canvas.height),h.reset(),p.reset(),_.reset()}return{buffers:{color:h,depth:p,stencil:_},enable:Nt,disable:Ct,bindFramebuffer:St,drawBuffers:V,useProgram:Pe,setBlending:Pt,setMaterial:le,setFlipSided:It,setCullFace:L,setLineWidth:A,setPolygonOffset:nt,setScissorTest:yt,activeTexture:Mt,bindTexture:Tt,unbindTexture:Xt,compressedTexImage2D:wt,compressedTexImage3D:Bt,texImage2D:Vt,texImage3D:Ot,updateUBOMapping:We,uniformBlockBinding:Kt,texStorage2D:Gt,texStorage3D:Yt,texSubImage2D:qt,texSubImage3D:$t,compressedTexSubImage2D:Et,compressedTexSubImage3D:Ft,scissor:te,viewport:ve,reset:Rt}}function qR(o,e,i,s,u,f,d){const h=u.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let m;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,A){return M?new OffscreenCanvas(L,A):wc("canvas")}function T(L,A,nt,yt){let Mt=1;if((L.width>yt||L.height>yt)&&(Mt=yt/Math.max(L.width,L.height)),Mt<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const Tt=A?lp:Math.floor,Xt=Tt(Mt*L.width),wt=Tt(Mt*L.height);m===void 0&&(m=b(Xt,wt));const Bt=nt?b(Xt,wt):m;return Bt.width=Xt,Bt.height=wt,Bt.getContext("2d").drawImage(L,0,0,Xt,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Xt+"x"+wt+")."),Bt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return Sv(L.width)&&Sv(L.height)}function y(L){return h?!1:L.wrapS!==Fi||L.wrapT!==Fi||L.minFilter!==Gn&&L.minFilter!==Ai}function N(L,A){return L.generateMipmaps&&A&&L.minFilter!==Gn&&L.minFilter!==Ai}function w(L){o.generateMipmap(L)}function O(L,A,nt,yt,Mt=!1){if(h===!1)return A;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Tt=A;if(A===o.RED&&(nt===o.FLOAT&&(Tt=o.R32F),nt===o.HALF_FLOAT&&(Tt=o.R16F),nt===o.UNSIGNED_BYTE&&(Tt=o.R8)),A===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(Tt=o.R8UI),nt===o.UNSIGNED_SHORT&&(Tt=o.R16UI),nt===o.UNSIGNED_INT&&(Tt=o.R32UI),nt===o.BYTE&&(Tt=o.R8I),nt===o.SHORT&&(Tt=o.R16I),nt===o.INT&&(Tt=o.R32I)),A===o.RG&&(nt===o.FLOAT&&(Tt=o.RG32F),nt===o.HALF_FLOAT&&(Tt=o.RG16F),nt===o.UNSIGNED_BYTE&&(Tt=o.RG8)),A===o.RGBA){const Xt=Mt?bc:Ge.getTransfer(yt);nt===o.FLOAT&&(Tt=o.RGBA32F),nt===o.HALF_FLOAT&&(Tt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(Tt=Xt===Ke?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(Tt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(Tt=o.RGB5_A1)}return(Tt===o.R16F||Tt===o.R32F||Tt===o.RG16F||Tt===o.RG32F||Tt===o.RGBA16F||Tt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Tt}function X(L,A,nt){return N(L,nt)===!0||L.isFramebufferTexture&&L.minFilter!==Gn&&L.minFilter!==Ai?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function I(L){return L===Gn||L===Y0||L===_d?o.NEAREST:o.LINEAR}function P(L){const A=L.target;A.removeEventListener("dispose",P),R(A),A.isVideoTexture&&v.delete(A)}function st(L){const A=L.target;A.removeEventListener("dispose",st),ot(A)}function R(L){const A=s.get(L);if(A.__webglInit===void 0)return;const nt=L.source,yt=S.get(nt);if(yt){const Mt=yt[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&U(L),Object.keys(yt).length===0&&S.delete(nt)}s.remove(L)}function U(L){const A=s.get(L);o.deleteTexture(A.__webglTexture);const nt=L.source,yt=S.get(nt);delete yt[A.__cacheKey],d.memory.textures--}function ot(L){const A=L.texture,nt=s.get(L),yt=s.get(A);if(yt.__webglTexture!==void 0&&(o.deleteTexture(yt.__webglTexture),d.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Mt=0;Mt<6;Mt++){if(Array.isArray(nt.__webglFramebuffer[Mt]))for(let Tt=0;Tt<nt.__webglFramebuffer[Mt].length;Tt++)o.deleteFramebuffer(nt.__webglFramebuffer[Mt][Tt]);else o.deleteFramebuffer(nt.__webglFramebuffer[Mt]);nt.__webglDepthbuffer&&o.deleteRenderbuffer(nt.__webglDepthbuffer[Mt])}else{if(Array.isArray(nt.__webglFramebuffer))for(let Mt=0;Mt<nt.__webglFramebuffer.length;Mt++)o.deleteFramebuffer(nt.__webglFramebuffer[Mt]);else o.deleteFramebuffer(nt.__webglFramebuffer);if(nt.__webglDepthbuffer&&o.deleteRenderbuffer(nt.__webglDepthbuffer),nt.__webglMultisampledFramebuffer&&o.deleteFramebuffer(nt.__webglMultisampledFramebuffer),nt.__webglColorRenderbuffer)for(let Mt=0;Mt<nt.__webglColorRenderbuffer.length;Mt++)nt.__webglColorRenderbuffer[Mt]&&o.deleteRenderbuffer(nt.__webglColorRenderbuffer[Mt]);nt.__webglDepthRenderbuffer&&o.deleteRenderbuffer(nt.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Mt=0,Tt=A.length;Mt<Tt;Mt++){const Xt=s.get(A[Mt]);Xt.__webglTexture&&(o.deleteTexture(Xt.__webglTexture),d.memory.textures--),s.remove(A[Mt])}s.remove(A),s.remove(L)}let ct=0;function xt(){ct=0}function G(){const L=ct;return L>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+u.maxTextures),ct+=1,L}function Q(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function H(L,A){const nt=s.get(L);if(L.isVideoTexture&&le(L),L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){const yt=L.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(nt,L,A);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+A)}function at(L,A){const nt=s.get(L);if(L.version>0&&nt.__version!==L.version){j(nt,L,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+A)}function et(L,A){const nt=s.get(L);if(L.version>0&&nt.__version!==L.version){j(nt,L,A);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+A)}function ft(L,A){const nt=s.get(L);if(L.version>0&&nt.__version!==L.version){_t(nt,L,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+A)}const ht={[Tc]:o.REPEAT,[Fi]:o.CLAMP_TO_EDGE,[ap]:o.MIRRORED_REPEAT},$={[Gn]:o.NEAREST,[Y0]:o.NEAREST_MIPMAP_NEAREST,[_d]:o.NEAREST_MIPMAP_LINEAR,[Ai]:o.LINEAR,[RE]:o.LINEAR_MIPMAP_NEAREST,[Ml]:o.LINEAR_MIPMAP_LINEAR},pt={[FE]:o.NEVER,[qE]:o.ALWAYS,[HE]:o.LESS,[Ly]:o.LEQUAL,[GE]:o.EQUAL,[WE]:o.GEQUAL,[VE]:o.GREATER,[XE]:o.NOTEQUAL};function rt(L,A,nt){if(nt?(o.texParameteri(L,o.TEXTURE_WRAP_S,ht[A.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ht[A.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ht[A.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,$[A.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,$[A.minFilter])):(o.texParameteri(L,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(L,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(A.wrapS!==Fi||A.wrapT!==Fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,o.TEXTURE_MAG_FILTER,I(A.magFilter)),o.texParameteri(L,o.TEXTURE_MIN_FILTER,I(A.minFilter)),A.minFilter!==Gn&&A.minFilter!==Ai&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,pt[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const yt=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Gn||A.minFilter!==_d&&A.minFilter!==Ml||A.type===or&&e.has("OES_texture_float_linear")===!1||h===!1&&A.type===El&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||s.get(A).__currentAnisotropy)&&(o.texParameterf(L,yt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,u.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy)}}function C(L,A){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",P));const yt=A.source;let Mt=S.get(yt);Mt===void 0&&(Mt={},S.set(yt,Mt));const Tt=Q(A);if(Tt!==L.__cacheKey){Mt[Tt]===void 0&&(Mt[Tt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,nt=!0),Mt[Tt].usedTimes++;const Xt=Mt[L.__cacheKey];Xt!==void 0&&(Mt[L.__cacheKey].usedTimes--,Xt.usedTimes===0&&U(A)),L.__cacheKey=Tt,L.__webglTexture=Mt[Tt].texture}return nt}function j(L,A,nt){let yt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(yt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(yt=o.TEXTURE_3D);const Mt=C(L,A),Tt=A.source;i.bindTexture(yt,L.__webglTexture,o.TEXTURE0+nt);const Xt=s.get(Tt);if(Tt.version!==Xt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+nt);const wt=Ge.getPrimaries(Ge.workingColorSpace),Bt=A.colorSpace===wi?null:Ge.getPrimaries(A.colorSpace),qt=A.colorSpace===wi||wt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const $t=y(A)&&x(A.image)===!1;let Et=T(A.image,$t,!1,u.maxTextureSize);Et=It(A,Et);const Ft=x(Et)||h,Gt=f.convert(A.format,A.colorSpace);let Yt=f.convert(A.type),Vt=O(A.internalFormat,Gt,Yt,A.colorSpace,A.isVideoTexture);rt(yt,A,Ft);let Ot;const te=A.mipmaps,ve=h&&A.isVideoTexture!==!0&&Vt!==Cy,We=Xt.__version===void 0||Mt===!0,Kt=X(A,Et,Ft);if(A.isDepthTexture)Vt=o.DEPTH_COMPONENT,h?A.type===or?Vt=o.DEPTH_COMPONENT32F:A.type===sr?Vt=o.DEPTH_COMPONENT24:A.type===kr?Vt=o.DEPTH24_STENCIL8:Vt=o.DEPTH_COMPONENT16:A.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===jr&&Vt===o.DEPTH_COMPONENT&&A.type!==mp&&A.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=sr,Yt=f.convert(A.type)),A.format===mo&&Vt===o.DEPTH_COMPONENT&&(Vt=o.DEPTH_STENCIL,A.type!==kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=kr,Yt=f.convert(A.type))),We&&(ve?i.texStorage2D(o.TEXTURE_2D,1,Vt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Vt,Et.width,Et.height,0,Gt,Yt,null));else if(A.isDataTexture)if(te.length>0&&Ft){ve&&We&&i.texStorage2D(o.TEXTURE_2D,Kt,Vt,te[0].width,te[0].height);for(let Rt=0,B=te.length;Rt<B;Rt++)Ot=te[Rt],ve?i.texSubImage2D(o.TEXTURE_2D,Rt,0,0,Ot.width,Ot.height,Gt,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,Rt,Vt,Ot.width,Ot.height,0,Gt,Yt,Ot.data);A.generateMipmaps=!1}else ve?(We&&i.texStorage2D(o.TEXTURE_2D,Kt,Vt,Et.width,Et.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et.width,Et.height,Gt,Yt,Et.data)):i.texImage2D(o.TEXTURE_2D,0,Vt,Et.width,Et.height,0,Gt,Yt,Et.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ve&&We&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Kt,Vt,te[0].width,te[0].height,Et.depth);for(let Rt=0,B=te.length;Rt<B;Rt++)Ot=te[Rt],A.format!==Hi?Gt!==null?ve?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,0,Ot.width,Ot.height,Et.depth,Gt,Ot.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Rt,Vt,Ot.width,Ot.height,Et.depth,0,Ot.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?i.texSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,0,Ot.width,Ot.height,Et.depth,Gt,Yt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Rt,Vt,Ot.width,Ot.height,Et.depth,0,Gt,Yt,Ot.data)}else{ve&&We&&i.texStorage2D(o.TEXTURE_2D,Kt,Vt,te[0].width,te[0].height);for(let Rt=0,B=te.length;Rt<B;Rt++)Ot=te[Rt],A.format!==Hi?Gt!==null?ve?i.compressedTexSubImage2D(o.TEXTURE_2D,Rt,0,0,Ot.width,Ot.height,Gt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,Rt,Vt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?i.texSubImage2D(o.TEXTURE_2D,Rt,0,0,Ot.width,Ot.height,Gt,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,Rt,Vt,Ot.width,Ot.height,0,Gt,Yt,Ot.data)}else if(A.isDataArrayTexture)ve?(We&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Kt,Vt,Et.width,Et.height,Et.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Gt,Yt,Et.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Et.width,Et.height,Et.depth,0,Gt,Yt,Et.data);else if(A.isData3DTexture)ve?(We&&i.texStorage3D(o.TEXTURE_3D,Kt,Vt,Et.width,Et.height,Et.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Gt,Yt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,Et.width,Et.height,Et.depth,0,Gt,Yt,Et.data);else if(A.isFramebufferTexture){if(We)if(ve)i.texStorage2D(o.TEXTURE_2D,Kt,Vt,Et.width,Et.height);else{let Rt=Et.width,B=Et.height;for(let bt=0;bt<Kt;bt++)i.texImage2D(o.TEXTURE_2D,bt,Vt,Rt,B,0,Gt,Yt,null),Rt>>=1,B>>=1}}else if(te.length>0&&Ft){ve&&We&&i.texStorage2D(o.TEXTURE_2D,Kt,Vt,te[0].width,te[0].height);for(let Rt=0,B=te.length;Rt<B;Rt++)Ot=te[Rt],ve?i.texSubImage2D(o.TEXTURE_2D,Rt,0,0,Gt,Yt,Ot):i.texImage2D(o.TEXTURE_2D,Rt,Vt,Gt,Yt,Ot);A.generateMipmaps=!1}else ve?(We&&i.texStorage2D(o.TEXTURE_2D,Kt,Vt,Et.width,Et.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,Gt,Yt,Et)):i.texImage2D(o.TEXTURE_2D,0,Vt,Gt,Yt,Et);N(A,Ft)&&w(yt),Xt.__version=Tt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function _t(L,A,nt){if(A.image.length!==6)return;const yt=C(L,A),Mt=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+nt);const Tt=s.get(Mt);if(Mt.version!==Tt.__version||yt===!0){i.activeTexture(o.TEXTURE0+nt);const Xt=Ge.getPrimaries(Ge.workingColorSpace),wt=A.colorSpace===wi?null:Ge.getPrimaries(A.colorSpace),Bt=A.colorSpace===wi||Xt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const qt=A.isCompressedTexture||A.image[0].isCompressedTexture,$t=A.image[0]&&A.image[0].isDataTexture,Et=[];for(let Rt=0;Rt<6;Rt++)!qt&&!$t?Et[Rt]=T(A.image[Rt],!1,!0,u.maxCubemapSize):Et[Rt]=$t?A.image[Rt].image:A.image[Rt],Et[Rt]=It(A,Et[Rt]);const Ft=Et[0],Gt=x(Ft)||h,Yt=f.convert(A.format,A.colorSpace),Vt=f.convert(A.type),Ot=O(A.internalFormat,Yt,Vt,A.colorSpace),te=h&&A.isVideoTexture!==!0,ve=Tt.__version===void 0||yt===!0;let We=X(A,Ft,Gt);rt(o.TEXTURE_CUBE_MAP,A,Gt);let Kt;if(qt){te&&ve&&i.texStorage2D(o.TEXTURE_CUBE_MAP,We,Ot,Ft.width,Ft.height);for(let Rt=0;Rt<6;Rt++){Kt=Et[Rt].mipmaps;for(let B=0;B<Kt.length;B++){const bt=Kt[B];A.format!==Hi?Yt!==null?te?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,B,0,0,bt.width,bt.height,Yt,bt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,B,Ot,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,B,0,0,bt.width,bt.height,Yt,Vt,bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,B,Ot,bt.width,bt.height,0,Yt,Vt,bt.data)}}}else{Kt=A.mipmaps,te&&ve&&(Kt.length>0&&We++,i.texStorage2D(o.TEXTURE_CUBE_MAP,We,Ot,Et[0].width,Et[0].height));for(let Rt=0;Rt<6;Rt++)if($t){te?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Et[Rt].width,Et[Rt].height,Yt,Vt,Et[Rt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ot,Et[Rt].width,Et[Rt].height,0,Yt,Vt,Et[Rt].data);for(let B=0;B<Kt.length;B++){const At=Kt[B].image[Rt].image;te?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,B+1,0,0,At.width,At.height,Yt,Vt,At.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,B+1,Ot,At.width,At.height,0,Yt,Vt,At.data)}}else{te?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Yt,Vt,Et[Rt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ot,Yt,Vt,Et[Rt]);for(let B=0;B<Kt.length;B++){const bt=Kt[B];te?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,B+1,0,0,Yt,Vt,bt.image[Rt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,B+1,Ot,Yt,Vt,bt.image[Rt])}}}N(A,Gt)&&w(o.TEXTURE_CUBE_MAP),Tt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function vt(L,A,nt,yt,Mt,Tt){const Xt=f.convert(nt.format,nt.colorSpace),wt=f.convert(nt.type),Bt=O(nt.internalFormat,Xt,wt,nt.colorSpace);if(!s.get(A).__hasExternalTextures){const $t=Math.max(1,A.width>>Tt),Et=Math.max(1,A.height>>Tt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,Tt,Bt,$t,Et,A.depth,0,Xt,wt,null):i.texImage2D(Mt,Tt,Bt,$t,Et,0,Xt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Pt(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,Mt,s.get(nt).__webglTexture,0,Qt(A)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,yt,Mt,s.get(nt).__webglTexture,Tt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Lt(L,A,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let yt=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(nt||Pt(A)){const Mt=A.depthTexture;Mt&&Mt.isDepthTexture&&(Mt.type===or?yt=o.DEPTH_COMPONENT32F:Mt.type===sr&&(yt=o.DEPTH_COMPONENT24));const Tt=Qt(A);Pt(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Tt,yt,A.width,A.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Tt,yt,A.width,A.height)}else o.renderbufferStorage(o.RENDERBUFFER,yt,A.width,A.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const yt=Qt(A);nt&&Pt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,yt,o.DEPTH24_STENCIL8,A.width,A.height):Pt(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,yt,o.DEPTH24_STENCIL8,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,L)}else{const yt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Mt=0;Mt<yt.length;Mt++){const Tt=yt[Mt],Xt=f.convert(Tt.format,Tt.colorSpace),wt=f.convert(Tt.type),Bt=O(Tt.internalFormat,Xt,wt,Tt.colorSpace),qt=Qt(A);nt&&Pt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Bt,A.width,A.height):Pt(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Bt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Nt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);const yt=s.get(A.depthTexture).__webglTexture,Mt=Qt(A);if(A.depthTexture.format===jr)Pt(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,Mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(A.depthTexture.format===mo)Pt(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,Mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Ct(L){const A=s.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Nt(A.__webglFramebuffer,L)}else if(nt){A.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[yt]),A.__webglDepthbuffer[yt]=o.createRenderbuffer(),Lt(A.__webglDepthbuffer[yt],L,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),Lt(A.__webglDepthbuffer,L,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function St(L,A,nt){const yt=s.get(L);A!==void 0&&vt(yt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Ct(L)}function V(L){const A=L.texture,nt=s.get(L),yt=s.get(A);L.addEventListener("dispose",st),L.isWebGLMultipleRenderTargets!==!0&&(yt.__webglTexture===void 0&&(yt.__webglTexture=o.createTexture()),yt.__version=A.version,d.memory.textures++);const Mt=L.isWebGLCubeRenderTarget===!0,Tt=L.isWebGLMultipleRenderTargets===!0,Xt=x(L)||h;if(Mt){nt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(h&&A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer[wt]=[];for(let Bt=0;Bt<A.mipmaps.length;Bt++)nt.__webglFramebuffer[wt][Bt]=o.createFramebuffer()}else nt.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(h&&A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)nt.__webglFramebuffer[wt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Tt)if(u.drawBuffers){const wt=L.texture;for(let Bt=0,qt=wt.length;Bt<qt;Bt++){const $t=s.get(wt[Bt]);$t.__webglTexture===void 0&&($t.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&L.samples>0&&Pt(L)===!1){const wt=Tt?A:[A];nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Bt=0;Bt<wt.length;Bt++){const qt=wt[Bt];nt.__webglColorRenderbuffer[Bt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Bt]);const $t=f.convert(qt.format,qt.colorSpace),Et=f.convert(qt.type),Ft=O(qt.internalFormat,$t,Et,qt.colorSpace,L.isXRRenderTarget===!0),Gt=Qt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt,Ft,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Bt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Lt(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Mt){i.bindTexture(o.TEXTURE_CUBE_MAP,yt.__webglTexture),rt(o.TEXTURE_CUBE_MAP,A,Xt);for(let wt=0;wt<6;wt++)if(h&&A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)vt(nt.__webglFramebuffer[wt][Bt],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Bt);else vt(nt.__webglFramebuffer[wt],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);N(A,Xt)&&w(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Tt){const wt=L.texture;for(let Bt=0,qt=wt.length;Bt<qt;Bt++){const $t=wt[Bt],Et=s.get($t);i.bindTexture(o.TEXTURE_2D,Et.__webglTexture),rt(o.TEXTURE_2D,$t,Xt),vt(nt.__webglFramebuffer,L,$t,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,0),N($t,Xt)&&w(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(h?wt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(wt,yt.__webglTexture),rt(wt,A,Xt),h&&A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)vt(nt.__webglFramebuffer[Bt],L,A,o.COLOR_ATTACHMENT0,wt,Bt);else vt(nt.__webglFramebuffer,L,A,o.COLOR_ATTACHMENT0,wt,0);N(A,Xt)&&w(wt),i.unbindTexture()}L.depthBuffer&&Ct(L)}function Pe(L){const A=x(L)||h,nt=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let yt=0,Mt=nt.length;yt<Mt;yt++){const Tt=nt[yt];if(N(Tt,A)){const Xt=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,wt=s.get(Tt).__webglTexture;i.bindTexture(Xt,wt),w(Xt),i.unbindTexture()}}}function jt(L){if(h&&L.samples>0&&Pt(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],nt=L.width,yt=L.height;let Mt=o.COLOR_BUFFER_BIT;const Tt=[],Xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=s.get(L),Bt=L.isWebGLMultipleRenderTargets===!0;if(Bt)for(let qt=0;qt<A.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let qt=0;qt<A.length;qt++){Tt.push(o.COLOR_ATTACHMENT0+qt),L.depthBuffer&&Tt.push(Xt);const $t=wt.__ignoreDepthValues!==void 0?wt.__ignoreDepthValues:!1;if($t===!1&&(L.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Bt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,wt.__webglColorRenderbuffer[qt]),$t===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Xt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Xt])),Bt){const Et=s.get(A[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,nt,yt,0,0,nt,yt,Mt,o.NEAREST),_&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Tt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Bt)for(let qt=0;qt<A.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,wt.__webglColorRenderbuffer[qt]);const $t=s.get(A[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,$t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}}function Qt(L){return Math.min(u.maxSamples,L.samples)}function Pt(L){const A=s.get(L);return h&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function le(L){const A=d.render.frame;v.get(L)!==A&&(v.set(L,A),L.update())}function It(L,A){const nt=L.colorSpace,yt=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===sp||nt!==Ra&&nt!==wi&&(Ge.getTransfer(nt)===Ke?h===!1?e.has("EXT_sRGB")===!0&&yt===Hi?(L.format=sp,L.minFilter=Ai,L.generateMipmaps=!1):A=Ny.sRGBToLinear(A):(yt!==Hi||Mt!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),A}this.allocateTextureUnit=G,this.resetTextureUnits=xt,this.setTexture2D=H,this.setTexture2DArray=at,this.setTexture3D=et,this.setTextureCube=ft,this.rebindTextures=St,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Pt}function YR(o,e,i){const s=i.isWebGL2;function u(f,d=wi){let h;const p=Ge.getTransfer(d);if(f===cr)return o.UNSIGNED_BYTE;if(f===Ey)return o.UNSIGNED_SHORT_4_4_4_4;if(f===Ty)return o.UNSIGNED_SHORT_5_5_5_1;if(f===CE)return o.BYTE;if(f===wE)return o.SHORT;if(f===mp)return o.UNSIGNED_SHORT;if(f===My)return o.INT;if(f===sr)return o.UNSIGNED_INT;if(f===or)return o.FLOAT;if(f===El)return s?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(f===DE)return o.ALPHA;if(f===Hi)return o.RGBA;if(f===LE)return o.LUMINANCE;if(f===UE)return o.LUMINANCE_ALPHA;if(f===jr)return o.DEPTH_COMPONENT;if(f===mo)return o.DEPTH_STENCIL;if(f===sp)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(f===NE)return o.RED;if(f===by)return o.RED_INTEGER;if(f===OE)return o.RG;if(f===Ay)return o.RG_INTEGER;if(f===Ry)return o.RGBA_INTEGER;if(f===vd||f===yd||f===Sd||f===xd)if(p===Ke)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(f===vd)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(f===yd)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(f===Sd)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(f===xd)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(f===vd)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(f===yd)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(f===Sd)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(f===xd)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(f===k0||f===j0||f===Z0||f===K0)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(f===k0)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(f===j0)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(f===Z0)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(f===K0)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(f===Cy)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(f===Q0||f===J0)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(f===Q0)return p===Ke?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(f===J0)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(f===$0||f===tv||f===ev||f===nv||f===iv||f===av||f===rv||f===sv||f===ov||f===lv||f===uv||f===cv||f===fv||f===hv)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(f===$0)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(f===tv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(f===ev)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(f===nv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(f===iv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(f===av)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(f===rv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(f===sv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(f===ov)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(f===lv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(f===uv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(f===cv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(f===fv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(f===hv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(f===Md||f===dv||f===pv)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(f===Md)return p===Ke?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(f===dv)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(f===pv)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(f===PE||f===mv||f===gv||f===_v)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(f===Md)return h.COMPRESSED_RED_RGTC1_EXT;if(f===mv)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(f===gv)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(f===_v)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return f===kr?s?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[f]!==void 0?o[f]:null}return{convert:u}}class kR extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vl extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jR={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let u=null,f=null,d=null;const h=this._targetRay,p=this._grip,_=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(_&&e.hand){d=!0;for(const T of e.hand.values()){const x=i.getJointPose(T,s),y=this._getHandJoint(_,T);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const v=_.joints["index-finger-tip"],m=_.joints["thumb-tip"],S=v.position.distanceTo(m.position),M=.02,b=.005;_.inputState.pinching&&S>M+b?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!_.inputState.pinching&&S<=M-b&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(u=i.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(jR)))}return h!==null&&(h.visible=u!==null),p!==null&&(p.visible=f!==null),_!==null&&(_.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new vl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class ZR extends _o{constructor(e,i){super();const s=this;let u=null,f=1,d=null,h="local-floor",p=1,_=null,v=null,m=null,S=null,M=null,b=null;const T=i.getContextAttributes();let x=null,y=null;const N=[],w=[],O=new ue;let X=null;const I=new ci;I.layers.enable(1),I.viewport=new $e;const P=new ci;P.layers.enable(2),P.viewport=new $e;const st=[I,P],R=new kR;R.layers.enable(1),R.layers.enable(2);let U=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let C=N[rt];return C===void 0&&(C=new kd,N[rt]=C),C.getTargetRaySpace()},this.getControllerGrip=function(rt){let C=N[rt];return C===void 0&&(C=new kd,N[rt]=C),C.getGripSpace()},this.getHand=function(rt){let C=N[rt];return C===void 0&&(C=new kd,N[rt]=C),C.getHandSpace()};function ct(rt){const C=w.indexOf(rt.inputSource);if(C===-1)return;const j=N[C];j!==void 0&&(j.update(rt.inputSource,rt.frame,_||d),j.dispatchEvent({type:rt.type,data:rt.inputSource}))}function xt(){u.removeEventListener("select",ct),u.removeEventListener("selectstart",ct),u.removeEventListener("selectend",ct),u.removeEventListener("squeeze",ct),u.removeEventListener("squeezestart",ct),u.removeEventListener("squeezeend",ct),u.removeEventListener("end",xt),u.removeEventListener("inputsourceschange",G);for(let rt=0;rt<N.length;rt++){const C=w[rt];C!==null&&(w[rt]=null,N[rt].disconnect(C))}U=null,ot=null,e.setRenderTarget(x),M=null,S=null,m=null,u=null,y=null,pt.stop(),s.isPresenting=!1,e.setPixelRatio(X),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){f=rt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){h=rt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||d},this.setReferenceSpace=function(rt){_=rt},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return m},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(rt){if(u=rt,u!==null){if(x=e.getRenderTarget(),u.addEventListener("select",ct),u.addEventListener("selectstart",ct),u.addEventListener("selectend",ct),u.addEventListener("squeeze",ct),u.addEventListener("squeezestart",ct),u.addEventListener("squeezeend",ct),u.addEventListener("end",xt),u.addEventListener("inputsourceschange",G),T.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(O),u.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const C={antialias:u.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,i,C),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),y=new Zr(M.framebufferWidth,M.framebufferHeight,{format:Hi,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let C=null,j=null,_t=null;T.depth&&(_t=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,C=T.stencil?mo:jr,j=T.stencil?kr:sr);const vt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:f};m=new XRWebGLBinding(u,i),S=m.createProjectionLayer(vt),u.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),y=new Zr(S.textureWidth,S.textureHeight,{format:Hi,type:cr,depthTexture:new Yy(S.textureWidth,S.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const Lt=e.properties.get(y);Lt.__ignoreDepthValues=S.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(p),_=null,d=await u.requestReferenceSpace(h),pt.setContext(u),pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode};function G(rt){for(let C=0;C<rt.removed.length;C++){const j=rt.removed[C],_t=w.indexOf(j);_t>=0&&(w[_t]=null,N[_t].disconnect(j))}for(let C=0;C<rt.added.length;C++){const j=rt.added[C];let _t=w.indexOf(j);if(_t===-1){for(let Lt=0;Lt<N.length;Lt++)if(Lt>=w.length){w.push(j),_t=Lt;break}else if(w[Lt]===null){w[Lt]=j,_t=Lt;break}if(_t===-1)break}const vt=N[_t];vt&&vt.connect(j)}}const Q=new k,H=new k;function at(rt,C,j){Q.setFromMatrixPosition(C.matrixWorld),H.setFromMatrixPosition(j.matrixWorld);const _t=Q.distanceTo(H),vt=C.projectionMatrix.elements,Lt=j.projectionMatrix.elements,Nt=vt[14]/(vt[10]-1),Ct=vt[14]/(vt[10]+1),St=(vt[9]+1)/vt[5],V=(vt[9]-1)/vt[5],Pe=(vt[8]-1)/vt[0],jt=(Lt[8]+1)/Lt[0],Qt=Nt*Pe,Pt=Nt*jt,le=_t/(-Pe+jt),It=le*-Pe;C.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(It),rt.translateZ(le),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert();const L=Nt+le,A=Ct+le,nt=Qt-It,yt=Pt+(_t-It),Mt=St*Ct/A*L,Tt=V*Ct/A*L;rt.projectionMatrix.makePerspective(nt,yt,Mt,Tt,L,A),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}function et(rt,C){C===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(C.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(u===null)return;R.near=P.near=I.near=rt.near,R.far=P.far=I.far=rt.far,(U!==R.near||ot!==R.far)&&(u.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,ot=R.far);const C=rt.parent,j=R.cameras;et(R,C);for(let _t=0;_t<j.length;_t++)et(j[_t],C);j.length===2?at(R,I,P):R.projectionMatrix.copy(I.projectionMatrix),ft(rt,R,C)};function ft(rt,C,j){j===null?rt.matrix.copy(C.matrixWorld):(rt.matrix.copy(j.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(C.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(C.projectionMatrix),rt.projectionMatrixInverse.copy(C.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=op*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(rt){p=rt,S!==null&&(S.fixedFoveation=rt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=rt)};let ht=null;function $(rt,C){if(v=C.getViewerPose(_||d),b=C,v!==null){const j=v.views;M!==null&&(e.setRenderTargetFramebuffer(y,M.framebuffer),e.setRenderTarget(y));let _t=!1;j.length!==R.cameras.length&&(R.cameras.length=0,_t=!0);for(let vt=0;vt<j.length;vt++){const Lt=j[vt];let Nt=null;if(M!==null)Nt=M.getViewport(Lt);else{const St=m.getViewSubImage(S,Lt);Nt=St.viewport,vt===0&&(e.setRenderTargetTextures(y,St.colorTexture,S.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(y))}let Ct=st[vt];Ct===void 0&&(Ct=new ci,Ct.layers.enable(vt),Ct.viewport=new $e,st[vt]=Ct),Ct.matrix.fromArray(Lt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Lt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),vt===0&&(R.matrix.copy(Ct.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_t===!0&&R.cameras.push(Ct)}}for(let j=0;j<N.length;j++){const _t=w[j],vt=N[j];_t!==null&&vt!==void 0&&vt.update(_t,C,_||d)}ht&&ht(rt,C),C.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:C}),b=null}const pt=new Wy;pt.setAnimationLoop($),this.setAnimationLoop=function(rt){ht=rt},this.dispose=function(){}}}function KR(o,e){function i(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function s(x,y){y.color.getRGB(x.fogColor.value,Gy(o)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function u(x,y,N,w,O){y.isMeshBasicMaterial||y.isMeshLambertMaterial?f(x,y):y.isMeshToonMaterial?(f(x,y),m(x,y)):y.isMeshPhongMaterial?(f(x,y),v(x,y)):y.isMeshStandardMaterial?(f(x,y),S(x,y),y.isMeshPhysicalMaterial&&M(x,y,O)):y.isMeshMatcapMaterial?(f(x,y),b(x,y)):y.isMeshDepthMaterial?f(x,y):y.isMeshDistanceMaterial?(f(x,y),T(x,y)):y.isMeshNormalMaterial?f(x,y):y.isLineBasicMaterial?(d(x,y),y.isLineDashedMaterial&&h(x,y)):y.isPointsMaterial?p(x,y,N,w):y.isSpriteMaterial?_(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,i(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Xn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,i(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Xn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,i(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,i(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const N=e.get(y).envMap;if(N&&(x.envMap.value=N,x.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap){x.lightMap.value=y.lightMap;const w=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=y.lightMapIntensity*w,i(y.lightMap,x.lightMapTransform)}y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,x.aoMapTransform))}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform))}function h(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function p(x,y,N,w){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*N,x.scale.value=w*.5,y.map&&(x.map.value=y.map,i(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function _(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function v(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function m(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function S(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,x.roughnessMapTransform)),e.get(y).envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function M(x,y,N){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&x.clearcoatNormalScale.value.negate())),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,y){y.matcap&&(x.matcap.value=y.matcap)}function T(x,y){const N=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function QR(o,e,i,s){let u={},f={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(N,w){const O=w.program;s.uniformBlockBinding(N,O)}function _(N,w){let O=u[N.id];O===void 0&&(b(N),O=v(N),u[N.id]=O,N.addEventListener("dispose",x));const X=w.program;s.updateUBOMapping(N,X);const I=e.render.frame;f[N.id]!==I&&(S(N),f[N.id]=I)}function v(N){const w=m();N.__bindingPointIndex=w;const O=o.createBuffer(),X=N.__size,I=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,X,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,O),O}function m(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(N){const w=u[N.id],O=N.uniforms,X=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let I=0,P=O.length;I<P;I++){const st=Array.isArray(O[I])?O[I]:[O[I]];for(let R=0,U=st.length;R<U;R++){const ot=st[R];if(M(ot,I,R,X)===!0){const ct=ot.__offset,xt=Array.isArray(ot.value)?ot.value:[ot.value];let G=0;for(let Q=0;Q<xt.length;Q++){const H=xt[Q],at=T(H);typeof H=="number"||typeof H=="boolean"?(ot.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,ct+G,ot.__data)):H.isMatrix3?(ot.__data[0]=H.elements[0],ot.__data[1]=H.elements[1],ot.__data[2]=H.elements[2],ot.__data[3]=0,ot.__data[4]=H.elements[3],ot.__data[5]=H.elements[4],ot.__data[6]=H.elements[5],ot.__data[7]=0,ot.__data[8]=H.elements[6],ot.__data[9]=H.elements[7],ot.__data[10]=H.elements[8],ot.__data[11]=0):(H.toArray(ot.__data,G),G+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,ot.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,w,O,X){const I=N.value,P=w+"_"+O;if(X[P]===void 0)return typeof I=="number"||typeof I=="boolean"?X[P]=I:X[P]=I.clone(),!0;{const st=X[P];if(typeof I=="number"||typeof I=="boolean"){if(st!==I)return X[P]=I,!0}else if(st.equals(I)===!1)return st.copy(I),!0}return!1}function b(N){const w=N.uniforms;let O=0;const X=16;for(let P=0,st=w.length;P<st;P++){const R=Array.isArray(w[P])?w[P]:[w[P]];for(let U=0,ot=R.length;U<ot;U++){const ct=R[U],xt=Array.isArray(ct.value)?ct.value:[ct.value];for(let G=0,Q=xt.length;G<Q;G++){const H=xt[G],at=T(H),et=O%X;et!==0&&X-et<at.boundary&&(O+=X-et),ct.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=O,O+=at.storage}}}const I=O%X;return I>0&&(O+=X-I),N.__size=O,N.__cache={},this}function T(N){const w={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(w.boundary=4,w.storage=4):N.isVector2?(w.boundary=8,w.storage=8):N.isVector3||N.isColor?(w.boundary=16,w.storage=12):N.isVector4?(w.boundary=16,w.storage=16):N.isMatrix3?(w.boundary=48,w.storage=48):N.isMatrix4?(w.boundary=64,w.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),w}function x(N){const w=N.target;w.removeEventListener("dispose",x);const O=d.indexOf(w.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(u[w.id]),delete u[w.id],delete f[w.id]}function y(){for(const N in u)o.deleteBuffer(u[N]);d=[],u={},f={}}return{bind:p,update:_,dispose:y}}class Jy{constructor(e={}){const{canvas:i=kE(),context:s=null,depth:u=!0,stencil:f=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:_=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let S;s!==null?S=s.getContextAttributes().alpha:S=d;const M=new Uint32Array(4),b=new Int32Array(4);let T=null,x=null;const y=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this._useLegacyLights=!1,this.toneMapping=ur,this.toneMappingExposure=1;const w=this;let O=!1,X=0,I=0,P=null,st=-1,R=null;const U=new $e,ot=new $e;let ct=null;const xt=new xe(0);let G=0,Q=i.width,H=i.height,at=1,et=null,ft=null;const ht=new $e(0,0,Q,H),$=new $e(0,0,Q,H);let pt=!1;const rt=new _p;let C=!1,j=!1,_t=null;const vt=new sn,Lt=new ue,Nt=new k,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return P===null?at:1}let V=s;function Pe(D,K){for(let lt=0;lt<D.length;lt++){const dt=D[lt],ut=i.getContext(dt,K);if(ut!==null)return ut}return null}try{const D={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:_,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pp}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",B,!1),i.addEventListener("webglcontextcreationerror",bt,!1),V===null){const K=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&K.shift(),V=Pe(K,D),V===null)throw Pe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let jt,Qt,Pt,le,It,L,A,nt,yt,Mt,Tt,Xt,wt,Bt,qt,$t,Et,Ft,Gt,Yt,Vt,Ot,te,ve;function We(){jt=new oA(V),Qt=new eA(V,jt,e),jt.init(Qt),Ot=new YR(V,jt,Qt),Pt=new WR(V,jt,Qt),le=new cA(V),It=new DR,L=new qR(V,jt,Pt,It,Qt,Ot,le),A=new iA(w),nt=new sA(w),yt=new vT(V,Qt),te=new $1(V,jt,yt,Qt),Mt=new lA(V,yt,le,te),Tt=new pA(V,Mt,yt,le),Gt=new dA(V,Qt,L),$t=new nA(It),Xt=new wR(w,A,nt,jt,Qt,te,$t),wt=new KR(w,It),Bt=new UR,qt=new BR(jt,Qt),Ft=new J1(w,A,nt,Pt,Tt,S,p),Et=new XR(w,Tt,Qt),ve=new QR(V,le,Qt,Pt),Yt=new tA(V,jt,le,Qt),Vt=new uA(V,jt,le,Qt),le.programs=Xt.programs,w.capabilities=Qt,w.extensions=jt,w.properties=It,w.renderLists=Bt,w.shadowMap=Et,w.state=Pt,w.info=le}We();const Kt=new ZR(w,V);this.xr=Kt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=jt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=jt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(D){D!==void 0&&(at=D,this.setSize(Q,H,!1))},this.getSize=function(D){return D.set(Q,H)},this.setSize=function(D,K,lt=!0){if(Kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=D,H=K,i.width=Math.floor(D*at),i.height=Math.floor(K*at),lt===!0&&(i.style.width=D+"px",i.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(Q*at,H*at).floor()},this.setDrawingBufferSize=function(D,K,lt){Q=D,H=K,at=lt,i.width=Math.floor(D*lt),i.height=Math.floor(K*lt),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(U)},this.getViewport=function(D){return D.copy(ht)},this.setViewport=function(D,K,lt,dt){D.isVector4?ht.set(D.x,D.y,D.z,D.w):ht.set(D,K,lt,dt),Pt.viewport(U.copy(ht).multiplyScalar(at).floor())},this.getScissor=function(D){return D.copy($)},this.setScissor=function(D,K,lt,dt){D.isVector4?$.set(D.x,D.y,D.z,D.w):$.set(D,K,lt,dt),Pt.scissor(ot.copy($).multiplyScalar(at).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(D){Pt.setScissorTest(pt=D)},this.setOpaqueSort=function(D){et=D},this.setTransparentSort=function(D){ft=D},this.getClearColor=function(D){return D.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(D=!0,K=!0,lt=!0){let dt=0;if(D){let ut=!1;if(P!==null){const zt=P.texture.format;ut=zt===Ry||zt===Ay||zt===by}if(ut){const zt=P.texture.type,kt=zt===cr||zt===sr||zt===mp||zt===kr||zt===Ey||zt===Ty,ne=Ft.getClearColor(),re=Ft.getClearAlpha(),ce=ne.r,oe=ne.g,ie=ne.b;kt?(M[0]=ce,M[1]=oe,M[2]=ie,M[3]=re,V.clearBufferuiv(V.COLOR,0,M)):(b[0]=ce,b[1]=oe,b[2]=ie,b[3]=re,V.clearBufferiv(V.COLOR,0,b))}else dt|=V.COLOR_BUFFER_BIT}K&&(dt|=V.DEPTH_BUFFER_BIT),lt&&(dt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",B,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Bt.dispose(),qt.dispose(),It.dispose(),A.dispose(),nt.dispose(),Tt.dispose(),te.dispose(),ve.dispose(),Xt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",De),Kt.removeEventListener("sessionend",Te),_t&&(_t.dispose(),_t=null),Le.stop()};function Rt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const D=le.autoReset,K=Et.enabled,lt=Et.autoUpdate,dt=Et.needsUpdate,ut=Et.type;We(),le.autoReset=D,Et.enabled=K,Et.autoUpdate=lt,Et.needsUpdate=dt,Et.type=ut}function bt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function At(D){const K=D.target;K.removeEventListener("dispose",At),Jt(K)}function Jt(D){ee(D),It.remove(D)}function ee(D){const K=It.get(D).programs;K!==void 0&&(K.forEach(function(lt){Xt.releaseProgram(lt)}),D.isShaderMaterial&&Xt.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,lt,dt,ut,zt){K===null&&(K=Ct);const kt=ut.isMesh&&ut.matrixWorld.determinant()<0,ne=gr(D,K,lt,dt,ut);Pt.setMaterial(dt,kt);let re=lt.index,ce=1;if(dt.wireframe===!0){if(re=Mt.getWireframeAttribute(lt),re===void 0)return;ce=2}const oe=lt.drawRange,ie=lt.attributes.position;let me=oe.start*ce,Be=(oe.start+oe.count)*ce;zt!==null&&(me=Math.max(me,zt.start*ce),Be=Math.min(Be,(zt.start+zt.count)*ce)),re!==null?(me=Math.max(me,0),Be=Math.min(Be,re.count)):ie!=null&&(me=Math.max(me,0),Be=Math.min(Be,ie.count));const je=Be-me;if(je<0||je===1/0)return;te.setup(ut,dt,ne,lt,re);let di,Ze=Yt;if(re!==null&&(di=yt.get(re),Ze=Vt,Ze.setIndex(di)),ut.isMesh)dt.wireframe===!0?(Pt.setLineWidth(dt.wireframeLinewidth*St()),Ze.setMode(V.LINES)):Ze.setMode(V.TRIANGLES);else if(ut.isLine){let de=dt.linewidth;de===void 0&&(de=1),Pt.setLineWidth(de*St()),ut.isLineSegments?Ze.setMode(V.LINES):ut.isLineLoop?Ze.setMode(V.LINE_LOOP):Ze.setMode(V.LINE_STRIP)}else ut.isPoints?Ze.setMode(V.POINTS):ut.isSprite&&Ze.setMode(V.TRIANGLES);if(ut.isBatchedMesh)Ze.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else if(ut.isInstancedMesh)Ze.renderInstances(me,je,ut.count);else if(lt.isInstancedBufferGeometry){const de=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,$r=Math.min(lt.instanceCount,de);Ze.renderInstances(me,je,$r)}else Ze.render(me,je)};function ze(D,K,lt){D.transparent===!0&&D.side===Ci&&D.forceSinglePass===!1?(D.side=Xn,D.needsUpdate=!0,aa(D,K,lt),D.side=dr,D.needsUpdate=!0,aa(D,K,lt),D.side=Ci):aa(D,K,lt)}this.compile=function(D,K,lt=null){lt===null&&(lt=D),x=qt.get(lt),x.init(),N.push(x),lt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(K.layers)&&(x.pushLight(ut),ut.castShadow&&x.pushShadow(ut))}),D!==lt&&D.traverseVisible(function(ut){ut.isLight&&ut.layers.test(K.layers)&&(x.pushLight(ut),ut.castShadow&&x.pushShadow(ut))}),x.setupLights(w._useLegacyLights);const dt=new Set;return D.traverse(function(ut){const zt=ut.material;if(zt)if(Array.isArray(zt))for(let kt=0;kt<zt.length;kt++){const ne=zt[kt];ze(ne,lt,ut),dt.add(ne)}else ze(zt,lt,ut),dt.add(zt)}),N.pop(),x=null,dt},this.compileAsync=function(D,K,lt=null){const dt=this.compile(D,K,lt);return new Promise(ut=>{function zt(){if(dt.forEach(function(kt){It.get(kt).currentProgram.isReady()&&dt.delete(kt)}),dt.size===0){ut(D);return}setTimeout(zt,10)}jt.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Ie=null;function Qe(D){Ie&&Ie(D)}function De(){Le.stop()}function Te(){Le.start()}const Le=new Wy;Le.setAnimationLoop(Qe),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(D){Ie=D,Kt.setAnimationLoop(D),D===null?Le.stop():Le.start()},Kt.addEventListener("sessionstart",De),Kt.addEventListener("sessionend",Te),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(K),K=Kt.getCamera()),D.isScene===!0&&D.onBeforeRender(w,D,K,P),x=qt.get(D,N.length),x.init(),N.push(x),vt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),rt.setFromProjectionMatrix(vt),j=this.localClippingEnabled,C=$t.init(this.clippingPlanes,j),T=Bt.get(D,y.length),T.init(),y.push(T),hi(D,K,0,w.sortObjects),T.finish(),w.sortObjects===!0&&T.sort(et,ft),this.info.render.frame++,C===!0&&$t.beginShadows();const lt=x.state.shadowsArray;if(Et.render(lt,D,K),C===!0&&$t.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ft.render(T,D),x.setupLights(w._useLegacyLights),K.isArrayCamera){const dt=K.cameras;for(let ut=0,zt=dt.length;ut<zt;ut++){const kt=dt[ut];Al(T,D,kt,kt.viewport)}}else Al(T,D,K);P!==null&&(L.updateMultisampleRenderTarget(P),L.updateRenderTargetMipmap(P)),D.isScene===!0&&D.onAfterRender(w,D,K),te.resetDefaultState(),st=-1,R=null,N.pop(),N.length>0?x=N[N.length-1]:x=null,y.pop(),y.length>0?T=y[y.length-1]:T=null};function hi(D,K,lt,dt){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)lt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||rt.intersectsSprite(D)){dt&&Nt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(vt);const kt=Tt.update(D),ne=D.material;ne.visible&&T.push(D,kt,ne,lt,Nt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||rt.intersectsObject(D))){const kt=Tt.update(D),ne=D.material;if(dt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Nt.copy(D.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Nt.copy(kt.boundingSphere.center)),Nt.applyMatrix4(D.matrixWorld).applyMatrix4(vt)),Array.isArray(ne)){const re=kt.groups;for(let ce=0,oe=re.length;ce<oe;ce++){const ie=re[ce],me=ne[ie.materialIndex];me&&me.visible&&T.push(D,kt,me,lt,Nt.z,ie)}}else ne.visible&&T.push(D,kt,ne,lt,Nt.z,null)}}const zt=D.children;for(let kt=0,ne=zt.length;kt<ne;kt++)hi(zt[kt],K,lt,dt)}function Al(D,K,lt,dt){const ut=D.opaque,zt=D.transmissive,kt=D.transparent;x.setupLightsView(lt),C===!0&&$t.setGlobalState(w.clippingPlanes,lt),zt.length>0&&Bc(ut,zt,K,lt),dt&&Pt.viewport(U.copy(dt)),ut.length>0&&ia(ut,K,lt),zt.length>0&&ia(zt,K,lt),kt.length>0&&ia(kt,K,lt),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Bc(D,K,lt,dt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;const zt=Qt.isWebGL2;_t===null&&(_t=new Zr(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")?El:cr,minFilter:Ml,samples:zt?4:0})),w.getDrawingBufferSize(Lt),zt?_t.setSize(Lt.x,Lt.y):_t.setSize(lp(Lt.x),lp(Lt.y));const kt=w.getRenderTarget();w.setRenderTarget(_t),w.getClearColor(xt),G=w.getClearAlpha(),G<1&&w.setClearColor(16777215,.5),w.clear();const ne=w.toneMapping;w.toneMapping=ur,ia(D,lt,dt),L.updateMultisampleRenderTarget(_t),L.updateRenderTargetMipmap(_t);let re=!1;for(let ce=0,oe=K.length;ce<oe;ce++){const ie=K[ce],me=ie.object,Be=ie.geometry,je=ie.material,di=ie.group;if(je.side===Ci&&me.layers.test(dt.layers)){const Ze=je.side;je.side=Xn,je.needsUpdate=!0,pr(me,lt,dt,Be,je,di),je.side=Ze,je.needsUpdate=!0,re=!0}}re===!0&&(L.updateMultisampleRenderTarget(_t),L.updateRenderTargetMipmap(_t)),w.setRenderTarget(kt),w.setClearColor(xt,G),w.toneMapping=ne}function ia(D,K,lt){const dt=K.isScene===!0?K.overrideMaterial:null;for(let ut=0,zt=D.length;ut<zt;ut++){const kt=D[ut],ne=kt.object,re=kt.geometry,ce=dt===null?kt.material:dt,oe=kt.group;ne.layers.test(lt.layers)&&pr(ne,K,lt,re,ce,oe)}}function pr(D,K,lt,dt,ut,zt){D.onBeforeRender(w,K,lt,dt,ut,zt),D.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ut.onBeforeRender(w,K,lt,dt,D,zt),ut.transparent===!0&&ut.side===Ci&&ut.forceSinglePass===!1?(ut.side=Xn,ut.needsUpdate=!0,w.renderBufferDirect(lt,K,dt,ut,D,zt),ut.side=dr,ut.needsUpdate=!0,w.renderBufferDirect(lt,K,dt,ut,D,zt),ut.side=Ci):w.renderBufferDirect(lt,K,dt,ut,D,zt),D.onAfterRender(w,K,lt,dt,ut,zt)}function aa(D,K,lt){K.isScene!==!0&&(K=Ct);const dt=It.get(D),ut=x.state.lights,zt=x.state.shadowsArray,kt=ut.state.version,ne=Xt.getParameters(D,ut.state,zt,K,lt),re=Xt.getProgramCacheKey(ne);let ce=dt.programs;dt.environment=D.isMeshStandardMaterial?K.environment:null,dt.fog=K.fog,dt.envMap=(D.isMeshStandardMaterial?nt:A).get(D.envMap||dt.environment),ce===void 0&&(D.addEventListener("dispose",At),ce=new Map,dt.programs=ce);let oe=ce.get(re);if(oe!==void 0){if(dt.currentProgram===oe&&dt.lightsStateVersion===kt)return mr(D,ne),oe}else ne.uniforms=Xt.getUniforms(D),D.onBuild(lt,ne,w),D.onBeforeCompile(ne,w),oe=Xt.acquireProgram(ne,re),ce.set(re,oe),dt.uniforms=ne.uniforms;const ie=dt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ie.clippingPlanes=$t.uniform),mr(D,ne),dt.needsLights=Fc(D),dt.lightsStateVersion=kt,dt.needsLights&&(ie.ambientLightColor.value=ut.state.ambient,ie.lightProbe.value=ut.state.probe,ie.directionalLights.value=ut.state.directional,ie.directionalLightShadows.value=ut.state.directionalShadow,ie.spotLights.value=ut.state.spot,ie.spotLightShadows.value=ut.state.spotShadow,ie.rectAreaLights.value=ut.state.rectArea,ie.ltc_1.value=ut.state.rectAreaLTC1,ie.ltc_2.value=ut.state.rectAreaLTC2,ie.pointLights.value=ut.state.point,ie.pointLightShadows.value=ut.state.pointShadow,ie.hemisphereLights.value=ut.state.hemi,ie.directionalShadowMap.value=ut.state.directionalShadowMap,ie.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,ie.spotShadowMap.value=ut.state.spotShadowMap,ie.spotLightMatrix.value=ut.state.spotLightMatrix,ie.spotLightMap.value=ut.state.spotLightMap,ie.pointShadowMap.value=ut.state.pointShadowMap,ie.pointShadowMatrix.value=ut.state.pointShadowMatrix),dt.currentProgram=oe,dt.uniformsList=null,oe}function Gi(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=Mc.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function mr(D,K){const lt=It.get(D);lt.outputColorSpace=K.outputColorSpace,lt.batching=K.batching,lt.instancing=K.instancing,lt.instancingColor=K.instancingColor,lt.skinning=K.skinning,lt.morphTargets=K.morphTargets,lt.morphNormals=K.morphNormals,lt.morphColors=K.morphColors,lt.morphTargetsCount=K.morphTargetsCount,lt.numClippingPlanes=K.numClippingPlanes,lt.numIntersection=K.numClipIntersection,lt.vertexAlphas=K.vertexAlphas,lt.vertexTangents=K.vertexTangents,lt.toneMapping=K.toneMapping}function gr(D,K,lt,dt,ut){K.isScene!==!0&&(K=Ct),L.resetTextureUnits();const zt=K.fog,kt=dt.isMeshStandardMaterial?K.environment:null,ne=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ra,re=(dt.isMeshStandardMaterial?nt:A).get(dt.envMap||kt),ce=dt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,oe=!!lt.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),ie=!!lt.morphAttributes.position,me=!!lt.morphAttributes.normal,Be=!!lt.morphAttributes.color;let je=ur;dt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(je=w.toneMapping);const di=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ze=di!==void 0?di.length:0,de=It.get(dt),$r=x.state.lights;if(C===!0&&(j===!0||D!==R)){const On=D===R&&dt.id===st;$t.setState(dt,D,On)}let Fe=!1;dt.version===de.__version?(de.needsLights&&de.lightsStateVersion!==$r.state.version||de.outputColorSpace!==ne||ut.isBatchedMesh&&de.batching===!1||!ut.isBatchedMesh&&de.batching===!0||ut.isInstancedMesh&&de.instancing===!1||!ut.isInstancedMesh&&de.instancing===!0||ut.isSkinnedMesh&&de.skinning===!1||!ut.isSkinnedMesh&&de.skinning===!0||ut.isInstancedMesh&&de.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&de.instancingColor===!1&&ut.instanceColor!==null||de.envMap!==re||dt.fog===!0&&de.fog!==zt||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==$t.numPlanes||de.numIntersection!==$t.numIntersection)||de.vertexAlphas!==ce||de.vertexTangents!==oe||de.morphTargets!==ie||de.morphNormals!==me||de.morphColors!==Be||de.toneMapping!==je||Qt.isWebGL2===!0&&de.morphTargetsCount!==Ze)&&(Fe=!0):(Fe=!0,de.__version=dt.version);let pi=de.currentProgram;Fe===!0&&(pi=aa(dt,K,ut));let _r=!1,Qn=!1,Vi=!1;const en=pi.getUniforms(),Wn=de.uniforms;if(Pt.useProgram(pi.program)&&(_r=!0,Qn=!0,Vi=!0),dt.id!==st&&(st=dt.id,Qn=!0),_r||R!==D){en.setValue(V,"projectionMatrix",D.projectionMatrix),en.setValue(V,"viewMatrix",D.matrixWorldInverse);const On=en.map.cameraPosition;On!==void 0&&On.setValue(V,Nt.setFromMatrixPosition(D.matrixWorld)),Qt.logarithmicDepthBuffer&&en.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&en.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),R!==D&&(R=D,Qn=!0,Vi=!0)}if(ut.isSkinnedMesh){en.setOptional(V,ut,"bindMatrix"),en.setOptional(V,ut,"bindMatrixInverse");const On=ut.skeleton;On&&(Qt.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),en.setValue(V,"boneTexture",On.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ut.isBatchedMesh&&(en.setOptional(V,ut,"batchingTexture"),en.setValue(V,"batchingTexture",ut._matricesTexture,L));const nn=lt.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0&&Qt.isWebGL2===!0)&&Gt.update(ut,lt,pi),(Qn||de.receiveShadow!==ut.receiveShadow)&&(de.receiveShadow=ut.receiveShadow,en.setValue(V,"receiveShadow",ut.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(Wn.envMap.value=re,Wn.flipEnvMap.value=re.isCubeTexture&&re.isRenderTargetTexture===!1?-1:1),Qn&&(en.setValue(V,"toneMappingExposure",w.toneMappingExposure),de.needsLights&&Rl(Wn,Vi),zt&&dt.fog===!0&&wt.refreshFogUniforms(Wn,zt),wt.refreshMaterialUniforms(Wn,dt,at,H,_t),Mc.upload(V,Gi(de),Wn,L)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(Mc.upload(V,Gi(de),Wn,L),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&en.setValue(V,"center",ut.center),en.setValue(V,"modelViewMatrix",ut.modelViewMatrix),en.setValue(V,"normalMatrix",ut.normalMatrix),en.setValue(V,"modelMatrix",ut.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const On=dt.uniformsGroups;for(let ts=0,Cl=On.length;ts<Cl;ts++)if(Qt.isWebGL2){const Xi=On[ts];ve.update(Xi,pi),ve.bind(Xi,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Rl(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function Fc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(D,K,lt){It.get(D.texture).__webglTexture=K,It.get(D.depthTexture).__webglTexture=lt;const dt=It.get(D);dt.__hasExternalTextures=!0,dt.__hasExternalTextures&&(dt.__autoAllocateDepthBuffer=lt===void 0,dt.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),dt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,K){const lt=It.get(D);lt.__webglFramebuffer=K,lt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,lt=0){P=D,X=K,I=lt;let dt=!0,ut=null,zt=!1,kt=!1;if(D){const re=It.get(D);re.__useDefaultFramebuffer!==void 0?(Pt.bindFramebuffer(V.FRAMEBUFFER,null),dt=!1):re.__webglFramebuffer===void 0?L.setupRenderTarget(D):re.__hasExternalTextures&&L.rebindTextures(D,It.get(D.texture).__webglTexture,It.get(D.depthTexture).__webglTexture);const ce=D.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(kt=!0);const oe=It.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(oe[K])?ut=oe[K][lt]:ut=oe[K],zt=!0):Qt.isWebGL2&&D.samples>0&&L.useMultisampledRTT(D)===!1?ut=It.get(D).__webglMultisampledFramebuffer:Array.isArray(oe)?ut=oe[lt]:ut=oe,U.copy(D.viewport),ot.copy(D.scissor),ct=D.scissorTest}else U.copy(ht).multiplyScalar(at).floor(),ot.copy($).multiplyScalar(at).floor(),ct=pt;if(Pt.bindFramebuffer(V.FRAMEBUFFER,ut)&&Qt.drawBuffers&&dt&&Pt.drawBuffers(D,ut),Pt.viewport(U),Pt.scissor(ot),Pt.setScissorTest(ct),zt){const re=It.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,re.__webglTexture,lt)}else if(kt){const re=It.get(D.texture),ce=K||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,re.__webglTexture,lt||0,ce)}st=-1},this.readRenderTargetPixels=function(D,K,lt,dt,ut,zt,kt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=It.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&kt!==void 0&&(ne=ne[kt]),ne){Pt.bindFramebuffer(V.FRAMEBUFFER,ne);try{const re=D.texture,ce=re.format,oe=re.type;if(ce!==Hi&&Ot.convert(ce)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ie=oe===El&&(jt.has("EXT_color_buffer_half_float")||Qt.isWebGL2&&jt.has("EXT_color_buffer_float"));if(oe!==cr&&Ot.convert(oe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(oe===or&&(Qt.isWebGL2||jt.has("OES_texture_float")||jt.has("WEBGL_color_buffer_float")))&&!ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-dt&&lt>=0&&lt<=D.height-ut&&V.readPixels(K,lt,dt,ut,Ot.convert(ce),Ot.convert(oe),zt)}finally{const re=P!==null?It.get(P).__webglFramebuffer:null;Pt.bindFramebuffer(V.FRAMEBUFFER,re)}}},this.copyFramebufferToTexture=function(D,K,lt=0){const dt=Math.pow(2,-lt),ut=Math.floor(K.image.width*dt),zt=Math.floor(K.image.height*dt);L.setTexture2D(K,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,D.x,D.y,ut,zt),Pt.unbindTexture()},this.copyTextureToTexture=function(D,K,lt,dt=0){const ut=K.image.width,zt=K.image.height,kt=Ot.convert(lt.format),ne=Ot.convert(lt.type);L.setTexture2D(lt,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,lt.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,lt.unpackAlignment),K.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,dt,D.x,D.y,ut,zt,kt,ne,K.image.data):K.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,dt,D.x,D.y,K.mipmaps[0].width,K.mipmaps[0].height,kt,K.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,dt,D.x,D.y,kt,ne,K.image),dt===0&&lt.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(D,K,lt,dt,ut=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const zt=D.max.x-D.min.x+1,kt=D.max.y-D.min.y+1,ne=D.max.z-D.min.z+1,re=Ot.convert(dt.format),ce=Ot.convert(dt.type);let oe;if(dt.isData3DTexture)L.setTexture3D(dt,0),oe=V.TEXTURE_3D;else if(dt.isDataArrayTexture||dt.isCompressedArrayTexture)L.setTexture2DArray(dt,0),oe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,dt.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,dt.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,dt.unpackAlignment);const ie=V.getParameter(V.UNPACK_ROW_LENGTH),me=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Be=V.getParameter(V.UNPACK_SKIP_PIXELS),je=V.getParameter(V.UNPACK_SKIP_ROWS),di=V.getParameter(V.UNPACK_SKIP_IMAGES),Ze=lt.isCompressedTexture?lt.mipmaps[ut]:lt.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Ze.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ze.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,D.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,D.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,D.min.z),lt.isDataTexture||lt.isData3DTexture?V.texSubImage3D(oe,ut,K.x,K.y,K.z,zt,kt,ne,re,ce,Ze.data):lt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(oe,ut,K.x,K.y,K.z,zt,kt,ne,re,Ze.data)):V.texSubImage3D(oe,ut,K.x,K.y,K.z,zt,kt,ne,re,ce,Ze),V.pixelStorei(V.UNPACK_ROW_LENGTH,ie),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,me),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Be),V.pixelStorei(V.UNPACK_SKIP_ROWS,je),V.pixelStorei(V.UNPACK_SKIP_IMAGES,di),ut===0&&dt.generateMipmaps&&V.generateMipmap(oe),Pt.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?L.setTextureCube(D,0):D.isData3DTexture?L.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?L.setTexture2DArray(D,0):L.setTexture2D(D,0),Pt.unbindTexture()},this.resetState=function(){X=0,I=0,P=null,Pt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===gp?"display-p3":"srgb",i.unpackColorSpace=Ge.workingColorSpace===Nc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wn?fr:wy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fr?wn:Ra}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JR extends Jy{}JR.prototype.isWebGL1Renderer=!0;class ay extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class $R{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=rp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let u=0,f=this.stride;u<f;u++)this.array[e+u]=i.array[s+u];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new k;class Dc{constructor(e,i,s,u=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=u}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}setX(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=ba(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=ba(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=ba(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=ba(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,u){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),u=Xe(u,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),s=Xe(s,this.array),u=Xe(u,this.array),f=Xe(f,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=u,this.data.array[e+3]=f,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const u=s*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)i.push(this.data.array[u+f])}return new fi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const u=s*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)i.push(this.data.array[u+f])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $y extends Jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let io;const dl=new k,ao=new k,ro=new k,so=new ue,pl=new ue,tS=new sn,_c=new k,ml=new k,vc=new k,ry=new ue,jd=new ue,sy=new ue;class t2 extends mn{constructor(e=new $y){if(super(),this.isSprite=!0,this.type="Sprite",io===void 0){io=new Nn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new $R(i,5);io.setIndex([0,1,2,0,2,3]),io.setAttribute("position",new Dc(s,3,0,!1)),io.setAttribute("uv",new Dc(s,2,3,!1))}this.geometry=io,this.material=e,this.center=new ue(.5,.5)}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ao.setFromMatrixScale(this.matrixWorld),tS.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ro.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ao.multiplyScalar(-ro.z);const s=this.material.rotation;let u,f;s!==0&&(f=Math.cos(s),u=Math.sin(s));const d=this.center;yc(_c.set(-.5,-.5,0),ro,d,ao,u,f),yc(ml.set(.5,-.5,0),ro,d,ao,u,f),yc(vc.set(.5,.5,0),ro,d,ao,u,f),ry.set(0,0),jd.set(1,0),sy.set(1,1);let h=e.ray.intersectTriangle(_c,ml,vc,!1,dl);if(h===null&&(yc(ml.set(-.5,.5,0),ro,d,ao,u,f),jd.set(0,1),h=e.ray.intersectTriangle(_c,vc,ml,!1,dl),h===null))return;const p=e.ray.origin.distanceTo(dl);p<e.near||p>e.far||i.push({distance:p,point:dl.clone(),uv:Ri.getInterpolation(dl,_c,ml,vc,ry,jd,sy,new ue),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function yc(o,e,i,s,u,f){so.subVectors(o,i).addScalar(.5).multiply(s),u!==void 0?(pl.x=f*so.x-u*so.y,pl.y=u*so.x+f*so.y):pl.copy(so),o.copy(e),o.x+=pl.x,o.y+=pl.y,o.applyMatrix4(tS)}class fp extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oy=new sn,hp=new zy,Sc=new Oc,xc=new k;class ly extends mn{constructor(e=new Nn,i=new fp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,u=this.matrixWorld,f=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(u),Sc.radius+=f,e.ray.intersectsSphere(Sc)===!1)return;oy.copy(u).invert(),hp.copy(e.ray).applyMatrix4(oy);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,_=s.index,m=s.attributes.position;if(_!==null){const S=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let b=S,T=M;b<T;b++){const x=_.getX(b);xc.fromBufferAttribute(m,x),uy(xc,x,p,u,e,i,this)}}else{const S=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let b=S,T=M;b<T;b++)xc.fromBufferAttribute(m,b),uy(xc,b,p,u,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function uy(o,e,i,s,u,f,d){const h=hp.distanceSqToPoint(o);if(h<i){const p=new k;hp.closestPointToPoint(o,p),p.applyMatrix4(s);const _=u.ray.origin.distanceTo(p);if(_<u.near||_>u.far)return;f.push({distance:_,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,object:d})}}class yp extends Kn{constructor(e,i,s,u,f,d,h,p,_){super(e,i,s,u,f,d,h,p,_),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sp extends Nn{constructor(e=1,i=32,s=0,u=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:u},i=Math.max(3,i);const f=[],d=[],h=[],p=[],_=new k,v=new ue;d.push(0,0,0),h.push(0,0,1),p.push(.5,.5);for(let m=0,S=3;m<=i;m++,S+=3){const M=s+m/i*u;_.x=e*Math.cos(M),_.y=e*Math.sin(M),d.push(_.x,_.y,_.z),h.push(0,0,1),v.x=(d[S]/e+1)/2,v.y=(d[S+1]/e+1)/2,p.push(v.x,v.y)}for(let m=1;m<=i;m++)f.push(m,m+1,0);this.setIndex(f),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ea extends Nn{constructor(e=1,i=1,s=1,u=32,f=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:u,heightSegments:f,openEnded:d,thetaStart:h,thetaLength:p};const _=this;u=Math.floor(u),f=Math.floor(f);const v=[],m=[],S=[],M=[];let b=0;const T=[],x=s/2;let y=0;N(),d===!1&&(e>0&&w(!0),i>0&&w(!1)),this.setIndex(v),this.setAttribute("position",new on(m,3)),this.setAttribute("normal",new on(S,3)),this.setAttribute("uv",new on(M,2));function N(){const O=new k,X=new k;let I=0;const P=(i-e)/s;for(let st=0;st<=f;st++){const R=[],U=st/f,ot=U*(i-e)+e;for(let ct=0;ct<=u;ct++){const xt=ct/u,G=xt*p+h,Q=Math.sin(G),H=Math.cos(G);X.x=ot*Q,X.y=-U*s+x,X.z=ot*H,m.push(X.x,X.y,X.z),O.set(Q,P,H).normalize(),S.push(O.x,O.y,O.z),M.push(xt,1-U),R.push(b++)}T.push(R)}for(let st=0;st<u;st++)for(let R=0;R<f;R++){const U=T[R][st],ot=T[R+1][st],ct=T[R+1][st+1],xt=T[R][st+1];v.push(U,ot,xt),v.push(ot,ct,xt),I+=6}_.addGroup(y,I,0),y+=I}function w(O){const X=b,I=new ue,P=new k;let st=0;const R=O===!0?e:i,U=O===!0?1:-1;for(let ct=1;ct<=u;ct++)m.push(0,x*U,0),S.push(0,U,0),M.push(.5,.5),b++;const ot=b;for(let ct=0;ct<=u;ct++){const G=ct/u*p+h,Q=Math.cos(G),H=Math.sin(G);P.x=R*H,P.y=x*U,P.z=R*Q,m.push(P.x,P.y,P.z),S.push(0,U,0),I.x=Q*.5+.5,I.y=H*.5*U+.5,M.push(I.x,I.y),b++}for(let ct=0;ct<u;ct++){const xt=X+ct,G=ot+ct;O===!0?v.push(G,G+1,xt):v.push(G+1,G,xt),st+=3}_.addGroup(y,st,O===!0?1:2),y+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xp extends Nn{constructor(e=.5,i=1,s=32,u=1,f=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:u,thetaStart:f,thetaLength:d},s=Math.max(3,s),u=Math.max(1,u);const h=[],p=[],_=[],v=[];let m=e;const S=(i-e)/u,M=new k,b=new ue;for(let T=0;T<=u;T++){for(let x=0;x<=s;x++){const y=f+x/s*d;M.x=m*Math.cos(y),M.y=m*Math.sin(y),p.push(M.x,M.y,M.z),_.push(0,0,1),b.x=(M.x/i+1)/2,b.y=(M.y/i+1)/2,v.push(b.x,b.y)}m+=S}for(let T=0;T<u;T++){const x=T*(s+1);for(let y=0;y<s;y++){const N=y+x,w=N,O=N+s+1,X=N+s+2,I=N+1;h.push(w,O,I),h.push(O,X,I)}}this.setIndex(h),this.setAttribute("position",new on(p,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Lc extends Nn{constructor(e=1,i=32,s=16,u=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:u,phiLength:f,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(d+h,Math.PI);let _=0;const v=[],m=new k,S=new k,M=[],b=[],T=[],x=[];for(let y=0;y<=s;y++){const N=[],w=y/s;let O=0;y===0&&d===0?O=.5/i:y===s&&p===Math.PI&&(O=-.5/i);for(let X=0;X<=i;X++){const I=X/i;m.x=-e*Math.cos(u+I*f)*Math.sin(d+w*h),m.y=e*Math.cos(d+w*h),m.z=e*Math.sin(u+I*f)*Math.sin(d+w*h),b.push(m.x,m.y,m.z),S.copy(m).normalize(),T.push(S.x,S.y,S.z),x.push(I+O,1-w),N.push(_++)}v.push(N)}for(let y=0;y<s;y++)for(let N=0;N<i;N++){const w=v[y][N+1],O=v[y][N],X=v[y+1][N],I=v[y+1][N+1];(y!==0||d>0)&&M.push(w,O,I),(y!==s-1||p<Math.PI)&&M.push(O,X,I)}this.setIndex(M),this.setAttribute("position",new on(b,3)),this.setAttribute("normal",new on(T,3)),this.setAttribute("uv",new on(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xl extends Nn{constructor(e=1,i=.4,s=12,u=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:u,arc:f},s=Math.floor(s),u=Math.floor(u);const d=[],h=[],p=[],_=[],v=new k,m=new k,S=new k;for(let M=0;M<=s;M++)for(let b=0;b<=u;b++){const T=b/u*f,x=M/s*Math.PI*2;m.x=(e+i*Math.cos(x))*Math.cos(T),m.y=(e+i*Math.cos(x))*Math.sin(T),m.z=i*Math.sin(x),h.push(m.x,m.y,m.z),v.x=e*Math.cos(T),v.y=e*Math.sin(T),S.subVectors(m,v).normalize(),p.push(S.x,S.y,S.z),_.push(b/u),_.push(M/s)}for(let M=1;M<=s;M++)for(let b=1;b<=u;b++){const T=(u+1)*M+b-1,x=(u+1)*(M-1)+b-1,y=(u+1)*(M-1)+b,N=(u+1)*M+b;d.push(T,x,N),d.push(x,y,N)}this.setIndex(d),this.setAttribute("position",new on(h,3)),this.setAttribute("normal",new on(p,3)),this.setAttribute("uv",new on(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yl extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dy,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zd extends yl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mp extends mn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}class e2 extends Mp{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Kd=new sn,cy=new k,fy=new k;class eS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;cy.setFromMatrixPosition(e.matrixWorld),i.position.copy(cy),fy.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(fy),i.updateMatrixWorld(),Kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hy=new sn,gl=new k,Qd=new k;class n2 extends eS{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,u=this.matrix,f=e.distance||s.far;f!==s.far&&(s.far=f,s.updateProjectionMatrix()),gl.setFromMatrixPosition(e.matrixWorld),s.position.copy(gl),Qd.copy(s.position),Qd.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Qd),s.updateMatrixWorld(),u.makeTranslation(-gl.x,-gl.y,-gl.z),hy.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hy)}}class i2 extends Mp{constructor(e,i,s=0,u=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=u,this.shadow=new n2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class a2 extends eS{constructor(){super(new qy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class r2 extends Mp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new a2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);const li=1,oo=2.5,rr=.14,_l=2.1,ui={x:.5,y:oo+.3},dy=(o,e=8,i=256)=>{const s=document.createElement("canvas");s.width=e,s.height=i;const u=s.getContext("2d"),f=u.createLinearGradient(0,0,0,i);return o.forEach(([d,h])=>f.addColorStop(d,h)),u.fillStyle=f,u.fillRect(0,0,e,i),new yp(s)},s2=o=>{const e=document.createElement("canvas");e.width=128,e.height=48;const i=e.getContext("2d");i.font="700 30px system-ui, sans-serif",i.textAlign="left",i.textBaseline="middle",i.fillStyle="#e9f8ff",i.fillText(o,6,26);const s=new t2(new $y({map:new yp(e),transparent:!0,depthTest:!1}));return s.scale.set(.62,.23,1),s.renderOrder=10,s};function o2({fill:o,flowing:e,capacity:i}){const s=Cn.useRef(null),u=Cn.useRef({fill:o,flowing:e});return u.current={fill:o,flowing:e},Cn.useEffect(()=>{const f=s.current,d=new Jy({antialias:!0,alpha:!0});d.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),d.outputEncoding=fr,d.toneMapping=Sy,d.toneMappingExposure=1.15,f.appendChild(d.domElement);const h=new ay,p=new ci(30,1,.1,60);p.position.set(0,2.3,8.8),p.lookAt(.55,1.75,0);const _=new ay;_.add(new ke(new Lc(20,32,16),new qr({map:dy([[0,"#e8f6ff"],[.45,"#3b78b0"],[1,"#04101f"]]),side:Xn}))),[[-6,4,4,5,3],[6,3,-2,3,6]].forEach(([Ft,Gt,Yt,Vt,Ot])=>{const te=new ke(new zc(Vt,Ot),new qr({color:16777215,side:Ci}));te.position.set(Ft,Gt,Yt),te.lookAt(0,1.5,0),_.add(te)});const v=new up(d);h.environment=v.fromScene(_,.03).texture,h.add(new e2(12576511,266268,.7));const m=new r2(16777215,1.3);m.position.set(4,6,5),h.add(m);const S=new i2(5232895,1.2,14);S.position.set(-3,2,-3),h.add(S);const M=new vl;h.add(M);const b=document.createElement("canvas");b.width=b.height=128;const T=b.getContext("2d"),x=T.createRadialGradient(64,64,6,64,64,64);x.addColorStop(0,"rgba(0,0,0,.65)"),x.addColorStop(1,"rgba(0,0,0,0)"),T.fillStyle=x,T.fillRect(0,0,128,128);const y=new ke(new Sp(2.1,48),new qr({map:new yp(b),transparent:!0,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.y=.002,h.add(y);const N=new Zd({color:13627391,metalness:0,roughness:.04,transparent:!0,opacity:.17,envMapIntensity:1.8,clearcoat:1,clearcoatRoughness:0,side:Ci,depthWrite:!1}),w=new ke(new ea(li,li,oo,72,1,!0),N);w.position.y=oo/2,w.renderOrder=3,M.add(w);const O=new yl({color:15005695,roughness:.18,metalness:.1,transparent:!0,opacity:.32,envMapIntensity:1.1,depthWrite:!1});for(let Ft=1;Ft<=7;Ft++){const Gt=new ke(new xl(li+.012,.016,10,72),O);Gt.rotation.x=Math.PI/2,Gt.position.y=Ft*oo/8,Gt.renderOrder=4,M.add(Gt)}const X=new yl({color:1784412,roughness:.45,metalness:.55,envMapIntensity:1.2}),I=new ke(new ea(li+.07,li+.12,rr,72),X);I.position.y=rr/2,M.add(I);const P=new ke(new xl(li,.05,12,72),X);P.rotation.x=Math.PI/2,P.position.y=oo,M.add(P);const st=new yl({color:13621731,roughness:.22,metalness:.95,envMapIntensity:1.6}),R=oo+1,U=new ke(new ea(.075,.075,1.7,20),st);U.rotation.z=Math.PI/2,U.position.set(ui.x+.85,R,0),M.add(U);const ot=new ke(new ea(.075,.075,R-ui.y,20),st);ot.position.set(ui.x,(R+ui.y)/2,0),M.add(ot);const ct=new ke(new Lc(.1,20,14),st);ct.position.set(ui.x,R,0),M.add(ct);const xt=new ke(new ea(.1,.07,.12,20),st);xt.position.set(ui.x,ui.y-.04,0),M.add(xt);const G=new yl({color:15026253,roughness:.4,metalness:.3}),Q=new ke(new xl(.2,.035,10,28),G);Q.position.set(ui.x+1.2,R+.2,0),M.add(Q);const H=new ke(new ea(.03,.03,.2,10),st);H.position.set(ui.x+1.2,R+.1,0),M.add(H);const at=new ea(li-.04,li-.04,1,72,1,!1);at.translate(0,.5,0);const et=new ke(at,new Zd({color:689904,transparent:!0,opacity:.72,roughness:.12,metalness:0,envMapIntensity:.35,depthWrite:!1}));et.position.y=rr,et.renderOrder=1,M.add(et);const ft=new xp(0,li-.04,72,16);ft.rotateX(-Math.PI/2);const ht=new ke(ft,new Zd({color:5030143,transparent:!0,opacity:.85,roughness:.06,metalness:.1,envMapIntensity:.9,side:Ci,depthWrite:!1}));ht.renderOrder=2,M.add(ht);const $=Float32Array.from(ft.attributes.position.array),pt=dy([[0,"rgba(255,255,255,0)"],[.5,"rgba(255,255,255,.95)"],[1,"rgba(255,255,255,0)"]],4,64);pt.wrapT=Tc,pt.repeat.set(1,6);const rt=new ke(new ea(.05,.06,1,16,1,!0),new qr({color:11069183,map:pt,transparent:!0,opacity:.8,depthWrite:!1}));rt.renderOrder=5,M.add(rt);const C=36,j=new Float32Array(C*3),_t=new Float32Array(C*3),vt=new Float32Array(C),Lt=new Nn;Lt.setAttribute("position",new fi(j,3));const Nt=new ly(Lt,new fp({color:15399423,size:.06,transparent:!0,opacity:.85,depthWrite:!1}));Nt.renderOrder=6,Nt.frustumCulled=!1,M.add(Nt);const Ct=60,St=new Float32Array(Ct*3),V=new Float32Array(Ct),Pe=Ft=>{const Gt=Math.random()*Math.PI*2,Yt=Math.sqrt(Math.random())*(li-.15);St[Ft*3]=Math.cos(Gt)*Yt,St[Ft*3+1]=rr+.05,St[Ft*3+2]=Math.sin(Gt)*Yt,V[Ft]=.25+Math.random()*.5};for(let Ft=0;Ft<Ct;Ft++)Pe(Ft),St[Ft*3+1]=rr+Math.random()*_l;const jt=new Nn;jt.setAttribute("position",new fi(St,3));const Qt=new ly(jt,new fp({color:16777215,size:.045,transparent:!0,opacity:.6,depthWrite:!1}));Qt.renderOrder=6,Qt.frustumCulled=!1,M.add(Qt);const Pt=new qr({color:15333631}),le=new ke(new Kr(.015,_l,.015),Pt);le.position.set(li+.3,rr+_l/2,0),h.add(le);for(let Ft=0;Ft<=4;Ft++){const Gt=rr+_l*Ft/4,Yt=new ke(new Kr(.16,.02,.02),Pt);Yt.position.set(li+.3,Gt,0),h.add(Yt);const Vt=s2(`${Math.round(i*(Ft/4)*10)/10} L`);Vt.position.set(li+.3+.52,Gt,0),h.add(Vt)}const It=()=>{const Ft=f.clientWidth||300,Gt=f.clientHeight||400;d.setSize(Ft,Gt),p.aspect=Ft/Gt,p.updateProjectionMatrix()};It();const L=new ResizeObserver(It);L.observe(f);let A=null,nt=-.35;const yt=d.domElement;yt.style.touchAction="pan-y",yt.style.cursor="grab";const Mt=Ft=>{A={x:Ft.clientX,yaw:nt},yt.setPointerCapture(Ft.pointerId),yt.style.cursor="grabbing"},Tt=Ft=>{A&&(nt=A.yaw+(Ft.clientX-A.x)*.01)},Xt=()=>{A=null,yt.style.cursor="grab"};yt.addEventListener("pointerdown",Mt),yt.addEventListener("pointermove",Tt),yt.addEventListener("pointerup",Xt),yt.addEventListener("pointercancel",Xt);let wt,Bt=performance.now(),qt=0,$t=0;const Et=Ft=>{const Gt=Math.min(.05,(Ft-Bt)/1e3),Yt=Math.min(.5,(Ft-Bt)/1e3);Bt=Ft,qt+=Gt;const{fill:Vt,flowing:Ot}=u.current;$t+=(Math.max(0,Math.min(1,Vt))-$t)*(1-Math.exp(-Yt*5));const te=$t*_l,ve=rr+te;A||(nt+=(Math.sin(qt*.35)*.18-.35-nt)*.01),M.rotation.y=nt,et.visible=te>.004,et.scale.y=Math.max(te,.001),ht.visible=et.visible,ht.position.y=ve;const We=Ot?.04:.012,Kt=ft.attributes.position;for(let B=0;B<Kt.count;B++){const bt=$[B*3],At=$[B*3+2],Jt=Math.hypot(bt-ui.x,At);Kt.array[B*3+1]=We*(Math.sin(bt*5+qt*2.2)+.7*Math.cos(At*6+qt*1.7))+(Ot?.05*Math.sin(Jt*16-qt*7)*Math.exp(-Jt*2):0)}Kt.needsUpdate=!0,ft.computeVertexNormals();const Rt=Ot&&$t<.995;if(rt.visible=Nt.visible=Rt,Rt){const B=Math.max(.05,ui.y-.1-ve);rt.scale.y=B,rt.position.set(ui.x,ve+B/2,0),pt.offset.y-=Gt*2.6,rt.material.opacity=.65+Math.sin(qt*30)*.1;for(let bt=0;bt<C;bt++){if((vt[bt]-=Gt)<=0){vt[bt]=.35+Math.random()*.4,j.set([ui.x,ve,0],bt*3);const At=Math.random()*Math.PI*2,Jt=.3+Math.random()*.6;_t.set([Math.cos(At)*Jt,1.1+Math.random()*1.2,Math.sin(At)*Jt],bt*3)}_t[bt*3+1]-=7*Gt;for(let At=0;At<3;At++)j[bt*3+At]+=_t[bt*3+At]*Gt}Lt.attributes.position.needsUpdate=!0}Qt.visible=te>.05;for(let B=0;B<Ct;B++)St[B*3+1]+=V[B]*Gt*(Ot?1.4:.35),St[B*3]+=Math.sin(qt*2+B)*.0015,St[B*3+1]>ve-.03&&Pe(B);jt.attributes.position.needsUpdate=!0,Q.rotation.z=Ot?qt*2:Q.rotation.z,d.render(h,p),wt=requestAnimationFrame(Et)};return wt=requestAnimationFrame(Et),()=>{var Ft;cancelAnimationFrame(wt),L.disconnect(),yt.removeEventListener("pointerdown",Mt),yt.removeEventListener("pointermove",Tt),yt.removeEventListener("pointerup",Xt),yt.removeEventListener("pointercancel",Xt),h.traverse(Gt=>{var Yt;(Yt=Gt.geometry)==null||Yt.dispose(),[].concat(Gt.material||[]).forEach(Vt=>{var Ot;(Ot=Vt.map)==null||Ot.dispose(),Vt.dispose()})}),(Ft=h.environment)==null||Ft.dispose(),v.dispose(),d.dispose(),yt.parentNode===f&&f.removeChild(yt)}},[i]),J.jsx("div",{ref:s,className:"wt-3d",role:"img","aria-label":"Transparent water tank showing the current water level"})}const Ae={rate:200,deliveryBase:3e3,perJar:500,jar:20,gstHalf:9,min:5,max:500,sliderMax:200},Jd={name:"AquaPure Water Services",gstin:"27XXXXX0000X1ZX",address:"Registered office address, City, State"},py=["8 AM – 10 AM","10 AM – 12 PM","12 PM – 2 PM","2 PM – 4 PM","4 PM – 6 PM"],l2=[[20,"Ghar"],[40,"Family"],[60,"Party"],[100,"Society"]],my=["SBI","HDFC Bank","ICICI Bank","Axis Bank","Kotak Mahindra Bank","Bank of Maharashtra"],u2=["Order","Payment","Bill","Water"],c2=120,f2=new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}),bi=o=>f2.format(o/100),$d=()=>new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}),gy=(o,e)=>o==="COD"?e==="DELIVERY"?"Cash on delivery":"Pay at counter":{UPI:"UPI",CARD:"Card",NETBANKING:"Net banking"}[o],h2=(o,e)=>{const i=o*Ae.rate,s=e==="DELIVERY"?Ae.deliveryBase+Math.ceil(o/Ae.jar)*Ae.perJar:0,u=i+s,f=Math.round(u*Ae.gstHalf/100);return{water:i,delivery:s,taxable:u,cgst:f,sgst:f,total:u+f*2}},_y={IDLE:2,DISPENSING:2,READY:3,DONE:5};function d2({liters:o,ok:e}){const i=e?Math.min(1,o/120):0,s=72,u=Math.round(s*Math.min(1,(e?o:0)/Ae.sliderMax)),f=210-i*165;return J.jsxs("div",{className:"wt-gauge",children:[J.jsxs("svg",{viewBox:"0 0 240 240","aria-hidden":"true",children:[J.jsxs("defs",{children:[J.jsxs("linearGradient",{id:"wtg",x1:"0",y1:"0",x2:"1",y2:"1",children:[J.jsx("stop",{offset:"0",stopColor:"#7a5cff"}),J.jsx("stop",{offset:"1",stopColor:"#35e6ff"})]}),J.jsx("clipPath",{id:"wtc",children:J.jsx("circle",{cx:"120",cy:"120",r:"90"})})]}),Array.from({length:s},(d,h)=>{const p=h/s*Math.PI*2-Math.PI/2;return J.jsx("circle",{cx:120+Math.cos(p)*112,cy:120+Math.sin(p)*112,r:"2.3",fill:"url(#wtg)",opacity:h<u?1:.35},h)}),J.jsx("circle",{cx:"120",cy:"120",r:"94",fill:"#0a2447",stroke:"#2b5578",strokeWidth:"3"}),J.jsx("g",{clipPath:"url(#wtc)",children:J.jsx("g",{style:{transform:`translateY(${f}px)`,transition:"transform .4s ease"},children:J.jsx("path",{className:"wt-wave",d:"M0 12 Q30 0 60 12 T120 12 T180 12 T240 12 T300 12 T360 12 T420 12 T480 12 V220 H0 Z",fill:"#3ee6ff"})})})]}),J.jsxs("div",{className:"wt-gauge-txt",children:[J.jsxs("b",{children:[e?o:0," L"]}),J.jsxs("span",{children:[bi(Ae.rate)," per liter"]})]})]})}function p2(){const[o,e]=Cn.useState("Order"),[i,s]=Cn.useState({name:"",phone:"",address:"",liters:20,mode:"DELIVERY",slot:py[1]}),[u,f]=Cn.useState({method:"UPI",upi:"",bank:my[0]}),[d,h]=Cn.useState(null),[p,_]=Cn.useState("IDLE"),[v,m]=Cn.useState(0),[S,M]=Cn.useState({}),[b,T]=Cn.useState(!1),[x,y]=Cn.useState(""),N=($,pt)=>s(rt=>({...rt,[$]:pt})),w=!!d,O=w?d.liters:Number(i.liters),X=Number.isInteger(O)&&O>=Ae.min&&O<=Ae.max,I=w?d.mode:i.mode,P=w?d:X?h2(O,I):null,st=X?Math.ceil(O/Ae.jar):0,R=()=>X?i.name.trim()?/^[6-9]\d{9}$/.test(i.phone)?i.mode==="DELIVERY"&&!i.address.trim()?"Please enter the delivery address.":"":"Enter a valid 10-digit mobile number.":"Please enter your full name.":`Enter a volume between ${Ae.min} and ${Ae.max} litres.`,U=()=>u.method==="UPI"&&!/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(u.upi)?"Enter a valid UPI ID (e.g. name@bank).":"",ot=$=>{if(w&&($==="Order"||$==="Payment"))return;const pt=$!=="Order"&&$!=="Water"?R():"",rt=!pt&&$==="Bill"?U():"";if(pt||rt){y(pt||rt),e(pt?"Order":"Payment");return}y(""),e($)};Cn.useEffect(()=>{if(p!=="DISPENSING")return;const $=setInterval(()=>m(pt=>Math.min(d.liters,pt+d.liters/c2)),100);return()=>clearInterval($)},[p,d]),Cn.useEffect(()=>{p==="DISPENSING"&&d&&v>=d.liters&&(_("READY"),M($=>({...$,2:$d()})))},[v,p,d]),Cn.useEffect(()=>{if(!d||p!=="IDLE")return;const $=setTimeout(()=>{m(0),_("DISPENSING")},1500);return()=>clearTimeout($)},[d,p]);const ct=()=>{const $=R()||U();if($){y($),e(R()?"Order":"Payment");return}y(""),T(!0),setTimeout(()=>{const pt=u.method==="COD",rt=Date.now().toString(36).toUpperCase(),C=$d();h({...i,liters:O,...P,method:u.method,paid:!pt,ref:pt?null:`TXN${rt}`,invoiceNo:`INV-${rt}`,date:new Date().toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"})}),M({0:C,1:C}),T(!1),e("Water")},1200)},xt=()=>{const $=$d();_("DONE"),M(pt=>({...pt,3:$,4:$})),h(pt=>({...pt,paid:!0}))},G=()=>{h(null),_("IDLE"),m(0),M({}),y(""),e("Order")},Q=w?Math.round(v/d.liters*100):0,H=w?Math.min(st,Math.floor(v/Ae.jar)+1):0,at=w?["Order placed",d.method==="COD"?"Order confirmed (pay later)":"Payment received","Filling and sealing",d.mode==="DELIVERY"?"Out for delivery":"Ready for collection",d.mode==="DELIVERY"?"Delivered":"Collected"]:[],et=$=>$===2&&p==="IDLE"?"Starting shortly…":$===2?`${Q}% filled · jar ${H} of ${st}`:$===3?d.mode==="DELIVERY"?`Slot: ${d.slot}`:"Collect from the plant counter":"",ft=w?p==="IDLE"?"Order confirmed":p==="DISPENSING"?"Filling in progress":p==="READY"?d.mode==="DELIVERY"?"Out for delivery":"Ready for collection":"Completed":"No active order",ht={"--p":`${(Math.min(X?O:Ae.min,Ae.sliderMax)-Ae.min)/(Ae.sliderMax-Ae.min)*100}%`};return J.jsxs("div",{className:"wt",children:[J.jsx("nav",{className:"wt-tabs no-print","aria-label":"Order steps",children:u2.map($=>J.jsx("button",{type:"button",className:"wt-tab"+(o===$?" is-on":""),"aria-current":o===$?"step":void 0,disabled:w&&($==="Order"||$==="Payment"),onClick:()=>ot($),children:$},$))}),x&&J.jsx("p",{className:"wt-err no-print",role:"alert",children:x}),o==="Order"&&J.jsxs("div",{className:"wt-col",children:[J.jsxs("section",{className:"wt-card",children:[J.jsx(d2,{liters:O,ok:X}),J.jsxs("div",{className:"wt-qty",children:[J.jsx("button",{type:"button",className:"wt-step","aria-label":"Decrease by 5 litres",onClick:()=>N("liters",Math.max(Ae.min,(X?O:Ae.min)-5)),children:"−"}),J.jsx("input",{type:"range",className:"wt-range",style:ht,min:Ae.min,max:Ae.sliderMax,step:5,value:X?Math.min(O,Ae.sliderMax):Ae.min,onChange:$=>N("liters",Number($.target.value)),"aria-label":"Litres"}),J.jsx("button",{type:"button",className:"wt-step","aria-label":"Increase by 5 litres",onClick:()=>N("liters",Math.min(Ae.max,(X?O:Ae.min)+5)),children:"+"})]}),J.jsx("div",{className:"wt-presets",children:l2.map(([$,pt])=>J.jsxs("button",{type:"button",className:"wt-preset"+(O===$?" is-on":""),onClick:()=>N("liters",$),children:[J.jsxs("b",{children:[$,"L"]}),J.jsx("span",{children:pt})]},$))})]}),J.jsxs("section",{className:"wt-card",children:[J.jsxs("div",{className:"wt-seg",children:[J.jsx("button",{type:"button",className:i.mode==="DELIVERY"?"is-on":"",onClick:()=>N("mode","DELIVERY"),children:"🚚 Home delivery"}),J.jsx("button",{type:"button",className:i.mode==="PICKUP"?"is-on":"",onClick:()=>N("mode","PICKUP"),children:"🏭 Plant pickup · free"})]}),J.jsxs("label",{className:"wt-field",children:["Full name",J.jsx("input",{value:i.name,autoComplete:"name",onChange:$=>N("name",$.target.value)})]}),J.jsxs("label",{className:"wt-field",children:["Mobile number",J.jsx("input",{inputMode:"numeric",maxLength:10,autoComplete:"tel",value:i.phone,onChange:$=>N("phone",$.target.value.replace(/\D/g,""))})]}),i.mode==="DELIVERY"&&J.jsxs(J.Fragment,{children:[J.jsxs("label",{className:"wt-field",children:["Delivery address",J.jsx("textarea",{rows:2,autoComplete:"street-address",value:i.address,onChange:$=>N("address",$.target.value)})]}),J.jsxs("label",{className:"wt-field",children:["Delivery slot (today)",J.jsx("select",{value:i.slot,onChange:$=>N("slot",$.target.value),children:py.map($=>J.jsx("option",{children:$},$))})]})]})]}),J.jsxs("button",{type:"button",className:"wt-go",onClick:()=>ot("Payment"),children:["Continue to payment",P?` · ${bi(P.total)}`:""]})]}),o==="Payment"&&J.jsxs("div",{className:"wt-col",children:[J.jsxs("section",{className:"wt-card",children:[J.jsx("h3",{className:"wt-h",children:"Payment method"}),J.jsx("div",{className:"wt-grid",children:[["UPI","Any UPI app"],["CARD","Credit or debit card"],["NETBANKING","All major banks"],["COD",i.mode==="DELIVERY"?"Pay when delivered":"Pay at the plant"]].map(([$,pt])=>J.jsxs("button",{type:"button",className:"wt-tile"+(u.method===$?" is-on":""),onClick:()=>{f(rt=>({...rt,method:$})),y("")},children:[J.jsx("b",{children:gy($,i.mode)}),J.jsx("span",{children:pt})]},$))}),u.method==="UPI"&&J.jsxs("label",{className:"wt-field",children:["UPI ID",J.jsx("input",{placeholder:"name@bank",value:u.upi,onChange:$=>f(pt=>({...pt,upi:$.target.value.trim()}))})]}),u.method==="NETBANKING"&&J.jsxs("label",{className:"wt-field",children:["Select bank",J.jsx("select",{value:u.bank,onChange:$=>f(pt=>({...pt,bank:$.target.value})),children:my.map($=>J.jsx("option",{children:$},$))})]}),u.method==="CARD"&&J.jsx("p",{className:"wt-note",children:"You will enter card details on the secure payment page. Card numbers are never entered or stored here."}),u.method==="COD"&&J.jsxs("p",{className:"wt-note",children:["No advance payment needed. Please pay ",i.mode==="DELIVERY"?"the delivery executive":"at the plant counter"," when you receive your water."]})]}),J.jsxs("div",{className:"wt-two",children:[J.jsx("button",{type:"button",className:"wt-ghost",onClick:()=>ot("Order"),children:"Back"}),J.jsx("button",{type:"button",className:"wt-go",onClick:()=>ot("Bill"),children:"Review bill"})]})]}),o==="Bill"&&J.jsxs("div",{className:"wt-col",children:[J.jsxs("section",{className:"wt-card wt-invoice",children:[w&&J.jsx("div",{className:"wt-stamp"+(d.paid?"":" is-due"),children:d.paid?"PAID":"PAYMENT DUE"}),J.jsxs("div",{className:"wt-inv-head",children:[J.jsx("b",{children:w?"TAX INVOICE":"ESTIMATE"}),J.jsxs("span",{children:[Jd.name,J.jsx("br",{}),"GSTIN: ",Jd.gstin,J.jsx("br",{}),Jd.address]})]}),w?J.jsxs("p",{className:"wt-meta",children:[J.jsx("b",{children:d.invoiceNo})," · ",d.date,J.jsx("br",{}),"Billed to: ",d.name," · ",d.phone,d.mode==="DELIVERY"?J.jsxs(J.Fragment,{children:[J.jsx("br",{}),"Deliver to: ",d.address,J.jsx("br",{}),"Slot: ",d.slot]}):J.jsxs(J.Fragment,{children:[J.jsx("br",{}),"Self pickup from plant"]})]}):J.jsx("p",{className:"wt-meta",children:"Final invoice is generated once the order is placed."}),P?J.jsx("div",{className:"wt-scroll",children:J.jsxs("table",{className:"wt-table",children:[J.jsx("thead",{children:J.jsxs("tr",{children:[J.jsx("th",{children:"Description"}),J.jsx("th",{className:"num",children:"Qty"}),J.jsx("th",{className:"num",children:"Rate"}),J.jsx("th",{className:"num",children:"Amount"})]})}),J.jsxs("tbody",{children:[J.jsxs("tr",{children:[J.jsx("td",{children:"Purified drinking water"}),J.jsxs("td",{className:"num",children:[O," L"]}),J.jsx("td",{className:"num",children:bi(Ae.rate)}),J.jsx("td",{className:"num",children:bi(P.water)})]}),I==="DELIVERY"&&J.jsxs("tr",{children:[J.jsxs("td",{children:["Delivery charges",J.jsxs("small",{children:[bi(Ae.deliveryBase)," + ",bi(Ae.perJar)," × ",st," jar",st===1?"":"s"]})]}),J.jsx("td",{className:"num",children:"1"}),J.jsx("td",{className:"num",children:"—"}),J.jsx("td",{className:"num",children:bi(P.delivery)})]})]}),J.jsxs("tfoot",{children:[J.jsxs("tr",{children:[J.jsx("td",{colSpan:3,children:"Taxable value"}),J.jsx("td",{className:"num",children:bi(P.taxable)})]}),J.jsxs("tr",{children:[J.jsxs("td",{colSpan:3,children:["CGST @ ",Ae.gstHalf,"%"]}),J.jsx("td",{className:"num",children:bi(P.cgst)})]}),J.jsxs("tr",{children:[J.jsxs("td",{colSpan:3,children:["SGST @ ",Ae.gstHalf,"%"]}),J.jsx("td",{className:"num",children:bi(P.sgst)})]}),J.jsxs("tr",{className:"wt-grand",children:[J.jsx("td",{colSpan:3,children:"Total"}),J.jsx("td",{className:"num",children:bi(P.total)})]})]})]})}):J.jsxs("p",{className:"wt-err",children:["Enter a volume between ",Ae.min," and ",Ae.max," litres."]}),w&&J.jsxs("p",{className:"wt-meta",children:["Payment: ",gy(d.method,d.mode)," · ",J.jsx("b",{children:d.paid?`Paid${d.ref?` (ref ${d.ref})`:""}`:"Payable "+(d.mode==="DELIVERY"?"on delivery":"at counter")}),J.jsx("br",{}),"This is a computer-generated invoice."]})]}),w?J.jsxs("div",{className:"wt-two no-print",children:[J.jsx("button",{type:"button",className:"wt-ghost",onClick:()=>window.print(),children:"Print invoice"}),J.jsx("button",{type:"button",className:"wt-go",onClick:()=>e("Water"),children:"Watch the tank"})]}):J.jsxs("div",{className:"wt-two no-print",children:[J.jsx("button",{type:"button",className:"wt-ghost",onClick:()=>ot("Payment"),children:"Back"}),J.jsx("button",{type:"button",className:"wt-go",onClick:ct,disabled:b||!P,children:b?"Processing…":u.method==="COD"?"Place order":`Pay ${P?bi(P.total):""}`})]})]}),o==="Water"&&J.jsxs("div",{className:"wt-water-grid",children:[J.jsxs("section",{className:"wt-card wt-tankcard",children:[J.jsx(o2,{fill:w?v/d.liters:0,flowing:p==="DISPENSING",capacity:w?d.liters:20}),J.jsxs("div",{className:"wt-meter","aria-live":"polite",children:[J.jsx("small",{children:ft}),J.jsxs("b",{children:[w?v.toFixed(1):"0.0",J.jsxs("em",{children:[" / ",w?d.liters:0," L"]})]})]}),J.jsx("p",{className:"wt-hint",children:"Drag the tank to rotate it"})]}),J.jsx("section",{className:"wt-side",children:w?J.jsxs(J.Fragment,{children:[J.jsxs("div",{className:"wt-card",children:[J.jsx("h3",{className:"wt-h",children:"Order tracking"}),J.jsx("ol",{className:"wt-track",children:at.map(($,pt)=>{const rt=p==="DONE"||pt<_y[p]?"done":pt===_y[p]?"active":"todo";return J.jsxs("li",{className:"wt-trk is-"+rt,children:[J.jsx("span",{className:"wt-node",children:rt==="done"?"✓":pt+1}),J.jsxs("div",{children:[J.jsx("b",{children:$}),J.jsx("small",{children:rt==="done"?S[pt]||"":rt==="active"?et(pt):""})]})]},$)})}),p==="READY"&&J.jsx("button",{type:"button",className:"wt-go",onClick:xt,children:d.mode==="DELIVERY"?"Mark as delivered":"Mark as collected"}),p==="DONE"&&J.jsx("p",{className:"wt-ok",children:"Order completed. Thank you for ordering."})]}),J.jsxs("div",{className:"wt-two",children:[J.jsx("button",{type:"button",className:"wt-ghost",onClick:()=>e("Bill"),children:"View bill"}),J.jsx("button",{type:"button",className:"wt-ghost",onClick:G,children:"New order"})]})]}):J.jsxs("div",{className:"wt-card",children:[J.jsx("h3",{className:"wt-h",children:"No active order"}),J.jsx("p",{className:"wt-note",children:"Place an order and the tank fills here, litre by litre."}),J.jsx("button",{type:"button",className:"wt-go",onClick:()=>e("Order"),children:"Start an order"})]})})]})]})}const m2="9";function g2(){return Cn.useEffect(()=>(document.body.dataset.task=m2,()=>{delete document.body.dataset.task}),[]),J.jsxs("main",{className:"page",children:[J.jsxs("div",{className:"page-head",children:[J.jsx("span",{className:"task-chip",children:"Task 9"}),J.jsx("h1",{className:"page-title",children:"Purified Water Order"}),J.jsx("p",{className:"page-sub",children:"Enter the litres of purified water you need, pay with UPI, card, net banking or cash on delivery, get a bill with delivery charges, and receive your water."})]}),J.jsx(p2,{})]})}kM.createRoot(document.getElementById("root")).render(J.jsx(Cn.StrictMode,{children:J.jsx(g2,{})}));
