var ky=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var SR=ky(eu=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var oh={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function Xy(){if(O_)return Oo;O_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:f,ref:o!==void 0?o:null,props:c}}return Oo.Fragment=t,Oo.jsx=n,Oo.jsxs=n,Oo}var P_;function Wy(){return P_||(P_=1,oh.exports=Xy()),oh.exports}var xn=Wy(),lh={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function qy(){if(z_)return se;z_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(L,K,ft){this.props=L,this.context=K,this.refs=T,this.updater=ft||y}S.prototype.isReactComponent={},S.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function v(){}v.prototype=S.prototype;function O(L,K,ft){this.props=L,this.context=K,this.refs=T,this.updater=ft||y}var D=O.prototype=new v;D.constructor=O,E(D,S.prototype),D.isPureReactComponent=!0;var R=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function z(L,K,ft,gt,Q,_t){return ft=_t.ref,{$$typeof:r,type:L,key:K,ref:ft!==void 0?ft:null,props:_t}}function k(L,K){return z(L.type,K,void 0,void 0,void 0,L.props)}function U(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function C(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ft){return K[ft]})}var G=/\/+/g;function it(L,K){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):K.toString(36)}function at(){}function ut(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(at,at):(L.status="pending",L.then(function(K){L.status==="pending"&&(L.status="fulfilled",L.value=K)},function(K){L.status==="pending"&&(L.status="rejected",L.reason=K)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ct(L,K,ft,gt,Q){var _t=typeof L;(_t==="undefined"||_t==="boolean")&&(L=null);var dt=!1;if(L===null)dt=!0;else switch(_t){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(L.$$typeof){case r:case t:dt=!0;break;case g:return dt=L._init,ct(dt(L._payload),K,ft,gt,Q)}}if(dt)return Q=Q(L),dt=gt===""?"."+it(L,0):gt,R(Q)?(ft="",dt!=null&&(ft=dt.replace(G,"$&/")+"/"),ct(Q,K,ft,"",function(ie){return ie})):Q!=null&&(U(Q)&&(Q=k(Q,ft+(Q.key==null||L&&L.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+dt)),K.push(Q)),1;dt=0;var Tt=gt===""?".":gt+":";if(R(L))for(var Ct=0;Ct<L.length;Ct++)gt=L[Ct],_t=Tt+it(gt,Ct),dt+=ct(gt,K,ft,_t,Q);else if(Ct=x(L),typeof Ct=="function")for(L=Ct.call(L),Ct=0;!(gt=L.next()).done;)gt=gt.value,_t=Tt+it(gt,Ct++),dt+=ct(gt,K,ft,_t,Q);else if(_t==="object"){if(typeof L.then=="function")return ct(ut(L),K,ft,gt,Q);throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return dt}function P(L,K,ft){if(L==null)return L;var gt=[],Q=0;return ct(L,gt,"","",function(_t){return K.call(ft,_t,Q++)}),gt}function J(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(ft){(L._status===0||L._status===-1)&&(L._status=1,L._result=ft)},function(ft){(L._status===0||L._status===-1)&&(L._status=2,L._result=ft)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function St(){}return se.Children={map:P,forEach:function(L,K,ft){P(L,function(){K.apply(this,arguments)},ft)},count:function(L){var K=0;return P(L,function(){K++}),K},toArray:function(L){return P(L,function(K){return K})||[]},only:function(L){if(!U(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},se.Component=S,se.Fragment=n,se.Profiler=o,se.PureComponent=O,se.StrictMode=a,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,se.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},se.cache=function(L){return function(){return L.apply(null,arguments)}},se.cloneElement=function(L,K,ft){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var gt=E({},L.props),Q=L.key,_t=void 0;if(K!=null)for(dt in K.ref!==void 0&&(_t=void 0),K.key!==void 0&&(Q=""+K.key),K)!B.call(K,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&K.ref===void 0||(gt[dt]=K[dt]);var dt=arguments.length-2;if(dt===1)gt.children=ft;else if(1<dt){for(var Tt=Array(dt),Ct=0;Ct<dt;Ct++)Tt[Ct]=arguments[Ct+2];gt.children=Tt}return z(L.type,Q,void 0,void 0,_t,gt)},se.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},se.createElement=function(L,K,ft){var gt,Q={},_t=null;if(K!=null)for(gt in K.key!==void 0&&(_t=""+K.key),K)B.call(K,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(Q[gt]=K[gt]);var dt=arguments.length-2;if(dt===1)Q.children=ft;else if(1<dt){for(var Tt=Array(dt),Ct=0;Ct<dt;Ct++)Tt[Ct]=arguments[Ct+2];Q.children=Tt}if(L&&L.defaultProps)for(gt in dt=L.defaultProps,dt)Q[gt]===void 0&&(Q[gt]=dt[gt]);return z(L,_t,void 0,void 0,null,Q)},se.createRef=function(){return{current:null}},se.forwardRef=function(L){return{$$typeof:h,render:L}},se.isValidElement=U,se.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:J}},se.memo=function(L,K){return{$$typeof:p,type:L,compare:K===void 0?null:K}},se.startTransition=function(L){var K=F.T,ft={};F.T=ft;try{var gt=L(),Q=F.S;Q!==null&&Q(ft,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(St,Y)}catch(_t){Y(_t)}finally{F.T=K}},se.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},se.use=function(L){return F.H.use(L)},se.useActionState=function(L,K,ft){return F.H.useActionState(L,K,ft)},se.useCallback=function(L,K){return F.H.useCallback(L,K)},se.useContext=function(L){return F.H.useContext(L)},se.useDebugValue=function(){},se.useDeferredValue=function(L,K){return F.H.useDeferredValue(L,K)},se.useEffect=function(L,K,ft){var gt=F.H;if(typeof ft=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return gt.useEffect(L,K)},se.useId=function(){return F.H.useId()},se.useImperativeHandle=function(L,K,ft){return F.H.useImperativeHandle(L,K,ft)},se.useInsertionEffect=function(L,K){return F.H.useInsertionEffect(L,K)},se.useLayoutEffect=function(L,K){return F.H.useLayoutEffect(L,K)},se.useMemo=function(L,K){return F.H.useMemo(L,K)},se.useOptimistic=function(L,K){return F.H.useOptimistic(L,K)},se.useReducer=function(L,K,ft){return F.H.useReducer(L,K,ft)},se.useRef=function(L){return F.H.useRef(L)},se.useState=function(L){return F.H.useState(L)},se.useSyncExternalStore=function(L,K,ft){return F.H.useSyncExternalStore(L,K,ft)},se.useTransition=function(){return F.H.useTransition()},se.version="19.1.0",se}var I_;function Gd(){return I_||(I_=1,lh.exports=qy()),lh.exports}var Wo=Gd(),ch={exports:{}},Po={},uh={exports:{}},fh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function Yy(){return B_||(B_=1,function(r){function t(P,J){var Y=P.length;P.push(J);t:for(;0<Y;){var St=Y-1>>>1,L=P[St];if(0<o(L,J))P[St]=J,P[Y]=L,Y=St;else break t}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var J=P[0],Y=P.pop();if(Y!==J){P[0]=Y;t:for(var St=0,L=P.length,K=L>>>1;St<K;){var ft=2*(St+1)-1,gt=P[ft],Q=ft+1,_t=P[Q];if(0>o(gt,Y))Q<L&&0>o(_t,gt)?(P[St]=_t,P[Q]=Y,St=Q):(P[St]=gt,P[ft]=Y,St=ft);else if(Q<L&&0>o(_t,Y))P[St]=_t,P[Q]=Y,St=Q;else break t}}return J}function o(P,J){var Y=P.sortIndex-J.sortIndex;return Y!==0?Y:P.id-J.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,x=3,y=!1,E=!1,T=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function R(P){for(var J=n(p);J!==null;){if(J.callback===null)a(p);else if(J.startTime<=P)a(p),J.sortIndex=J.expirationTime,t(m,J);else break;J=n(p)}}function F(P){if(T=!1,R(P),!E)if(n(m)!==null)E=!0,B||(B=!0,it());else{var J=n(p);J!==null&&ct(F,J.startTime-P)}}var B=!1,z=-1,k=5,U=-1;function C(){return S?!0:!(r.unstable_now()-U<k)}function G(){if(S=!1,B){var P=r.unstable_now();U=P;var J=!0;try{t:{E=!1,T&&(T=!1,O(z),z=-1),y=!0;var Y=x;try{e:{for(R(P),_=n(m);_!==null&&!(_.expirationTime>P&&C());){var St=_.callback;if(typeof St=="function"){_.callback=null,x=_.priorityLevel;var L=St(_.expirationTime<=P);if(P=r.unstable_now(),typeof L=="function"){_.callback=L,R(P),J=!0;break e}_===n(m)&&a(m),R(P)}else a(m);_=n(m)}if(_!==null)J=!0;else{var K=n(p);K!==null&&ct(F,K.startTime-P),J=!1}}break t}finally{_=null,x=Y,y=!1}J=void 0}}finally{J?it():B=!1}}}var it;if(typeof D=="function")it=function(){D(G)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ut=at.port2;at.port1.onmessage=G,it=function(){ut.postMessage(null)}}else it=function(){v(G,0)};function ct(P,J){z=v(function(){P(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var Y=x;x=J;try{return P()}finally{x=Y}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,J){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=x;x=P;try{return J()}finally{x=Y}},r.unstable_scheduleCallback=function(P,J,Y){var St=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?St+Y:St):Y=St,P){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,P={id:g++,callback:J,priorityLevel:P,startTime:Y,expirationTime:L,sortIndex:-1},Y>St?(P.sortIndex=Y,t(p,P),n(m)===null&&P===n(p)&&(T?(O(z),z=-1):T=!0,ct(F,Y-St))):(P.sortIndex=L,t(m,P),E||y||(E=!0,B||(B=!0,it()))),P},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(P){var J=x;return function(){var Y=x;x=J;try{return P.apply(this,arguments)}finally{x=Y}}}}(fh)),fh}var F_;function Zy(){return F_||(F_=1,uh.exports=Yy()),uh.exports}var hh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function jy(){if(H_)return Ln;H_=1;var r=Gd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Ln.flushSync=function(m){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=g,a.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Ln.requestFormReset=function(m){a.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.0",Ln}var G_;function Ky(){if(G_)return hh.exports;G_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),hh.exports=jy(),hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function Qy(){if(V_)return Po;V_=1;var r=Zy(),t=Gd(),n=Ky();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return h(u),e;if(d===l)return h(u),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=u,l=d;else{for(var M=!1,b=u.child;b;){if(b===s){M=!0,s=u,l=d;break}if(b===l){M=!0,l=u,s=d;break}b=b.sibling}if(!M){for(b=d.child;b;){if(b===s){M=!0,s=d,l=u;break}if(b===l){M=!0,l=d,s=u;break}b=b.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case D:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case R:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case k:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var ct=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},St=[],L=-1;function K(e){return{current:e}}function ft(e){0>L||(e.current=St[L],St[L]=null,L--)}function gt(e,i){L++,St[L]=e.current,e.current=i}var Q=K(null),_t=K(null),dt=K(null),Tt=K(null);function Ct(e,i){switch(gt(dt,i),gt(_t,e),gt(Q,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?l_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=l_(i),e=c_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ft(Q),gt(Q,e)}function ie(){ft(Q),ft(_t),ft(dt)}function Yt(e){e.memoizedState!==null&&gt(Tt,e);var i=Q.current,s=c_(i,e.type);i!==s&&(gt(_t,e),gt(Q,s))}function Ae(e){_t.current===e&&(ft(Q),ft(_t)),Tt.current===e&&(ft(Tt),Co._currentValue=Y)}var we=Object.prototype.hasOwnProperty,oe=r.unstable_scheduleCallback,H=r.unstable_cancelCallback,Sn=r.unstable_shouldYield,ae=r.unstable_requestPaint,Jt=r.unstable_now,Gt=r.unstable_getCurrentPriorityLevel,Ue=r.unstable_ImmediatePriority,Vt=r.unstable_UserBlockingPriority,N=r.unstable_NormalPriority,A=r.unstable_LowPriority,et=r.unstable_IdlePriority,yt=r.log,Mt=r.unstable_setDisableYieldValue,pt=null,zt=null;function At(e){if(typeof yt=="function"&&Mt(e),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(pt,e)}catch{}}var Rt=Math.clz32?Math.clz32:Ft,ge=Math.log,bt=Math.LN2;function Ft(e){return e>>>=0,e===0?32:31-(ge(e)/bt|0)|0}var Zt=256,Kt=4194304;function Ot(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ce(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~d,l!==0?u=Ot(l):(M&=b,M!==0?u=Ot(M):s||(s=b&~e,s!==0&&(u=Ot(s))))):(b=l&~d,b!==0?u=Ot(b):M!==0?u=Ot(M):s||(s=l&~e,s!==0&&(u=Ot(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function ee(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Le(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=Zt;return Zt<<=1,(Zt&4194048)===0&&(Zt=256),e}function Lt(){var e=Kt;return Kt<<=1,(Kt&62914560)===0&&(Kt=4194304),e}function lt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function vt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pt(e,i,s,l,u,d){var M=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(s=M&~s;0<s;){var ht=31-Rt(s),xt=1<<ht;b[ht]=0,I[ht]=-1;var nt=tt[ht];if(nt!==null)for(tt[ht]=null,ht=0;ht<nt.length;ht++){var st=nt[ht];st!==null&&(st.lane&=-536870913)}s&=~xt}l!==0&&Nt(e,l,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~i))}function Nt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Rt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function ne(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Rt(s),u=1<<l;u&i|e[l]&i&&(e[l]|=i),s&=~u}}function He(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:w_(e.type))}function Yn(e,i){var s=J.p;try{return J.p=e,i()}finally{J.p=s}}var dn=Math.random().toString(36).slice(2),rn="__reactFiber$"+dn,Mn="__reactProps$"+dn,Bn="__reactContainer$"+dn,ja="__reactEvents$"+dn,il="__reactListeners$"+dn,al="__reactHandles$"+dn,Ka="__reactResources$"+dn,fa="__reactMarker$"+dn;function ha(e){delete e[rn],delete e[Mn],delete e[ja],delete e[il],delete e[al]}function Oi(e){var i=e[rn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Bn]||s[rn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=d_(e);e!==null;){if(s=e[rn])return s;e=d_(e)}return i}e=s,s=e.parentNode}return null}function Pi(e){if(e=e[rn]||e[Bn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Qa(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function da(e){var i=e[Ka];return i||(i=e[Ka]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function en(e){e[fa]=!0}var sl=new Set,rl={};function zi(e,i){w(e,i),w(e+"Capture",i)}function w(e,i){for(rl[e]=i,e=0;e<i.length;e++)sl.add(i[e])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},ot={};function j(e){return we.call(ot,e)?!0:we.call(rt,e)?!1:Z.test(e)?ot[e]=!0:(rt[e]=!0,!1)}function Et(e,i,s){if(j(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function wt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Dt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var It,$t;function Wt(e){if(It===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);It=i&&i[1]||"",$t=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+$t}var Xt=!1;function de(e,i){if(!e||Xt)return"";Xt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(st){var nt=st}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(st){nt=st}e.call(xt.prototype)}}else{try{throw Error()}catch(st){nt=st}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(st){if(st&&nt&&typeof st.stack=="string")return[st.stack,nt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),M=d[0],b=d[1];if(M&&b){var I=M.split(`
`),tt=b.split(`
`);for(u=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(l===I.length||u===tt.length)for(l=I.length-1,u=tt.length-1;1<=l&&0<=u&&I[l]!==tt[u];)u--;for(;1<=l&&0<=u;l--,u--)if(I[l]!==tt[u]){if(l!==1||u!==1)do if(l--,u--,0>u||I[l]!==tt[u]){var ht=`
`+I[l].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=l&&0<=u);break}}}finally{Xt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Wt(s):""}function Ee(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return Wt("Activity");default:return""}}function We(e){try{var i="";do i+=Ee(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qt(e){var i=ve(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,d=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,d.call(this,M)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ze(e){e._valueTracker||(e._valueTracker=qt(e))}function Se(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=ve(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pa=/[\n"\\]/g;function Ge(e){return e.replace(pa,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ii(e,i,s,l,u,d,M,b){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+_e(i)):e.value!==""+_e(i)&&(e.value=""+_e(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?Dn(e,M,_e(i)):s!=null?Dn(e,M,_e(s)):l!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+_e(b):e.removeAttribute("name")}function Be(e,i,s,l,u,d,M,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+_e(s):"",i=i!=null?""+_e(i):s,b||i===e.value||(e.value=i),e.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Dn(e,i,s){i==="number"&&Cn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function on(e,i,s,l){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&l&&(e[s].defaultSelected=!0)}else{for(s=""+_e(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function pn(e,i,s){if(i!=null&&(i=""+_e(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+_e(s):""}function En(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(ct(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=_e(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Mi(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lp(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Bi.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function cp(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&lp(e,u,l)}else for(var d in i)i.hasOwnProperty(d)&&lp(e,d,i[d])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return Vv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ru=null;function ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,Ns=null;function up(e){var i=Pi(e);if(i&&(e=i.stateNode)){var s=e[Mn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ii(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ge(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var u=l[Mn]||null;if(!u)throw Error(a(90));Ii(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Se(l)}break t;case"textarea":pn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&on(e,!!s.multiple,i,!1)}}}var lu=!1;function fp(e,i,s){if(lu)return e(i,s);lu=!0;try{var l=e(i);return l}finally{if(lu=!1,(Ls!==null||Ns!==null)&&(ql(),Ls&&(i=Ls,e=Ns,Ns=Ls=null,up(i),e)))for(i=0;i<e.length;i++)up(e[i])}}function Gr(e,i){var s=e.stateNode;if(s===null)return null;var l=s[Mn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(Fi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{cu=!1}var ma=null,uu=null,ll=null;function hp(){if(ll)return ll;var e,i=uu,s=i.length,l,u="value"in ma?ma.value:ma.textContent,d=u.length;for(e=0;e<s&&i[e]===u[e];e++);var M=s-e;for(l=1;l<=M&&i[s-l]===u[d-l];l++);return ll=u.slice(e,1<l?1-l:void 0)}function cl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function dp(){return!1}function Fn(e){function i(s,l,u,d,M){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ul:dp,this.isPropagationStopped=dp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),i}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Fn(Ja),kr=g({},Ja,{view:0,detail:0}),kv=Fn(kr),fu,hu,Xr,hl=g({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(fu=e.screenX-Xr.screenX,hu=e.screenY-Xr.screenY):hu=fu=0,Xr=e),fu)},movementY:function(e){return"movementY"in e?e.movementY:hu}}),pp=Fn(hl),Xv=g({},hl,{dataTransfer:0}),Wv=Fn(Xv),qv=g({},kr,{relatedTarget:0}),du=Fn(qv),Yv=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=Fn(Yv),jv=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kv=Fn(jv),Qv=g({},Ja,{data:0}),mp=Fn(Qv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=tx[e])?!!i[e]:!1}function pu(){return ex}var nx=g({},kr,{key:function(e){if(e.key){var i=Jv[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ix=Fn(nx),ax=g({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Fn(ax),sx=g({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),rx=Fn(sx),ox=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Fn(ox),cx=g({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Fn(cx),fx=g({},Ja,{newState:0,oldState:0}),hx=Fn(fx),dx=[9,13,27,32],mu=Fi&&"CompositionEvent"in window,Wr=null;Fi&&"documentMode"in document&&(Wr=document.documentMode);var px=Fi&&"TextEvent"in window&&!Wr,_p=Fi&&(!mu||Wr&&8<Wr&&11>=Wr),vp=" ",xp=!1;function yp(e,i){switch(e){case"keyup":return dx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Os=!1;function mx(e,i){switch(e){case"compositionend":return Sp(i);case"keypress":return i.which!==32?null:(xp=!0,vp);case"textInput":return e=i.data,e===vp&&xp?null:e;default:return null}}function gx(e,i){if(Os)return e==="compositionend"||!mu&&yp(e,i)?(e=hp(),ll=uu=ma=null,Os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _p&&i.locale!=="ko"?null:i.data;default:return null}}var _x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!_x[e.type]:i==="textarea"}function Ep(e,i,s,l){Ls?Ns?Ns.push(l):Ns=[l]:Ls=l,i=Jl(i,"onChange"),0<i.length&&(s=new fl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var qr=null,Yr=null;function vx(e){i_(e,0)}function dl(e){var i=Qa(e);if(Se(i))return e}function Tp(e,i){if(e==="change")return i}var bp=!1;if(Fi){var gu;if(Fi){var _u="oninput"in document;if(!_u){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),_u=typeof Ap.oninput=="function"}gu=_u}else gu=!1;bp=gu&&(!document.documentMode||9<document.documentMode)}function Rp(){qr&&(qr.detachEvent("onpropertychange",wp),Yr=qr=null)}function wp(e){if(e.propertyName==="value"&&dl(Yr)){var i=[];Ep(i,Yr,e,ou(e)),fp(vx,i)}}function xx(e,i,s){e==="focusin"?(Rp(),qr=i,Yr=s,qr.attachEvent("onpropertychange",wp)):e==="focusout"&&Rp()}function yx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Yr)}function Sx(e,i){if(e==="click")return dl(i)}function Mx(e,i){if(e==="input"||e==="change")return dl(i)}function Ex(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Zn=typeof Object.is=="function"?Object.is:Ex;function Zr(e,i){if(Zn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!we.call(i,u)||!Zn(e[u],i[u]))return!1}return!0}function Cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dp(e,i){var s=Cp(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Cp(s)}}function Up(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Up(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Cn(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Cn(e.document)}return i}function vu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Tx=Fi&&"documentMode"in document&&11>=document.documentMode,Ps=null,xu=null,jr=null,yu=!1;function Np(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;yu||Ps==null||Ps!==Cn(l)||(l=Ps,"selectionStart"in l&&vu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jr&&Zr(jr,l)||(jr=l,l=Jl(xu,"onSelect"),0<l.length&&(i=new fl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=Ps)))}function $a(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var zs={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Su={},Op={};Fi&&(Op=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function ts(e){if(Su[e])return Su[e];if(!zs[e])return e;var i=zs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Op)return Su[e]=i[s];return e}var Pp=ts("animationend"),zp=ts("animationiteration"),Ip=ts("animationstart"),bx=ts("transitionrun"),Ax=ts("transitionstart"),Rx=ts("transitioncancel"),Bp=ts("transitionend"),Fp=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function di(e,i){Fp.set(e,i),zi(i,[e])}var Hp=new WeakMap;function ii(e,i){if(typeof e=="object"&&e!==null){var s=Hp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:We(i)},Hp.set(e,i),i)}return{value:e,source:i,stack:We(i)}}var ai=[],Is=0,Eu=0;function pl(){for(var e=Is,i=Eu=Is=0;i<e;){var s=ai[i];ai[i++]=null;var l=ai[i];ai[i++]=null;var u=ai[i];ai[i++]=null;var d=ai[i];if(ai[i++]=null,l!==null&&u!==null){var M=l.pending;M===null?u.next=u:(u.next=M.next,M.next=u),l.pending=u}d!==0&&Gp(s,u,d)}}function ml(e,i,s,l){ai[Is++]=e,ai[Is++]=i,ai[Is++]=s,ai[Is++]=l,Eu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Tu(e,i,s,l){return ml(e,i,s,l),gl(e)}function Bs(e,i){return ml(e,null,null,i),gl(e)}function Gp(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var u=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Rt(s),e=d.hiddenUpdates,l=e[u],l===null?e[u]=[i]:l.push(i),i.lane=s|536870912),d):null}function gl(e){if(50<So)throw So=0,Uf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Fs={};function wx(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,i,s,l){return new wx(e,i,s,l)}function bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,i){var s=e.alternate;return s===null?(s=jn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Vp(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function _l(e,i,s,l,u,d){var M=0;if(l=e,typeof e=="function")bu(e)&&(M=1);else if(typeof e=="string")M=Dy(e,s,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=jn(31,s,i,u),e.elementType=U,e.lanes=d,e;case E:return es(s.children,u,d,i);case T:M=8,u|=24;break;case S:return e=jn(12,s,i,u|2),e.elementType=S,e.lanes=d,e;case F:return e=jn(13,s,i,u),e.elementType=F,e.lanes=d,e;case B:return e=jn(19,s,i,u),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case D:M=10;break t;case O:M=9;break t;case R:M=11;break t;case z:M=14;break t;case k:M=16,l=null;break t}M=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=jn(M,s,i,u),i.elementType=e,i.type=l,i.lanes=d,i}function es(e,i,s,l){return e=jn(7,e,l,i),e.lanes=s,e}function Au(e,i,s){return e=jn(6,e,null,i),e.lanes=s,e}function Ru(e,i,s){return i=jn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Hs=[],Gs=0,vl=null,xl=0,si=[],ri=0,ns=null,Gi=1,Vi="";function is(e,i){Hs[Gs++]=xl,Hs[Gs++]=vl,vl=e,xl=i}function kp(e,i,s){si[ri++]=Gi,si[ri++]=Vi,si[ri++]=ns,ns=e;var l=Gi;e=Vi;var u=32-Rt(l)-1;l&=~(1<<u),s+=1;var d=32-Rt(i)+u;if(30<d){var M=u-u%5;d=(l&(1<<M)-1).toString(32),l>>=M,u-=M,Gi=1<<32-Rt(i)+u|s<<u|l,Vi=d+e}else Gi=1<<d|s<<u|l,Vi=e}function wu(e){e.return!==null&&(is(e,1),kp(e,1,0))}function Cu(e){for(;e===vl;)vl=Hs[--Gs],Hs[Gs]=null,xl=Hs[--Gs],Hs[Gs]=null;for(;e===ns;)ns=si[--ri],si[ri]=null,Vi=si[--ri],si[ri]=null,Gi=si[--ri],si[ri]=null}var Pn=null,je=null,Re=!1,as=null,Ei=!1,Du=Error(a(519));function ss(e){var i=Error(a(418,""));throw Jr(ii(i,e)),Du}function Xp(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[rn]=e,i[Mn]=l,s){case"dialog":me("cancel",i),me("close",i);break;case"iframe":case"object":case"embed":me("load",i);break;case"video":case"audio":for(s=0;s<Eo.length;s++)me(Eo[s],i);break;case"source":me("error",i);break;case"img":case"image":case"link":me("error",i),me("load",i);break;case"details":me("toggle",i);break;case"input":me("invalid",i),Be(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ze(i);break;case"select":me("invalid",i);break;case"textarea":me("invalid",i),En(i,l.value,l.defaultValue,l.children),Ze(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||o_(i.textContent,s)?(l.popover!=null&&(me("beforetoggle",i),me("toggle",i)),l.onScroll!=null&&me("scroll",i),l.onScrollEnd!=null&&me("scrollend",i),l.onClick!=null&&(i.onclick=$l),i=!0):i=!1,i||ss(e)}function Wp(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Pn=Pn.return}}function Kr(e){if(e!==Pn)return!1;if(!Re)return Wp(e),Re=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Yf(e.type,e.memoizedProps)),s=!s),s&&je&&ss(e),Wp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){je=mi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}je=null}}else i===27?(i=je,Ua(e.type)?(e=Qf,Qf=null,je=e):je=i):je=Pn?mi(e.stateNode.nextSibling):null;return!0}function Qr(){je=Pn=null,Re=!1}function qp(){var e=as;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),as=null),e}function Jr(e){as===null?as=[e]:as.push(e)}var Uu=K(null),rs=null,ki=null;function ga(e,i,s){gt(Uu,i._currentValue),i._currentValue=s}function Xi(e){e._currentValue=Uu.current,ft(Uu)}function Lu(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Nu(e,i,s,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var I=0;I<i.length;I++)if(b.context===i[I]){d.lanes|=s,b=d.alternate,b!==null&&(b.lanes|=s),Lu(d.return,s,e),l||(M=null);break t}d=b.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(a(341));M.lanes|=s,d=M.alternate,d!==null&&(d.lanes|=s),Lu(M,s,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function $r(e,i,s,l){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var b=u.type;Zn(u.pendingProps.value,M.value)||(e!==null?e.push(b):e=[b])}}else if(u===Tt.current){if(M=u.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}u=u.return}e!==null&&Nu(i,e,s,l),i.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function os(e){rs=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return Yp(rs,e)}function Sl(e,i){return rs===null&&os(e),Yp(e,i)}function Yp(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ki===null){if(e===null)throw Error(a(308));ki=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ki=ki.next=i;return s}var Cx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Dx=r.unstable_scheduleCallback,Ux=r.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Cx,data:new Map,refCount:0}}function to(e){e.refCount--,e.refCount===0&&Dx(Ux,function(){e.controller.abort()})}var eo=null,Pu=0,Vs=0,ks=null;function Lx(e,i){if(eo===null){var s=eo=[];Pu=0,Vs=Bf(),ks={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Pu++,i.then(Zp,Zp),i}function Zp(){if(--Pu===0&&eo!==null){ks!==null&&(ks.status="fulfilled");var e=eo;eo=null,Vs=0,ks=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Nx(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var jp=P.S;P.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Lx(e,i),jp!==null&&jp(e,i)};var ls=K(null);function zu(){var e=ls.current;return e!==null?e:Ve.pooledCache}function Ml(e,i){i===null?gt(ls,ls.current):gt(ls,i.pool)}function Kp(){var e=zu();return e===null?null:{parent:ln._currentValue,pool:e}}var no=Error(a(460)),Qp=Error(a(474)),El=Error(a(542)),Iu={then:function(){}};function Jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tl(){}function $p(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Tl,Tl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,em(e),e;default:if(typeof i.status=="string")i.then(Tl,Tl);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,em(e),e}throw io=i,no}}var io=null;function tm(){if(io===null)throw Error(a(459));var e=io;return io=null,e}function em(e){if(e===no||e===El)throw Error(a(483))}var _a=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ce&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=gl(e),Gp(e,null,s),i}return ml(e,l,i,s),gl(e)}function ao(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,ne(e,s)}}function Hu(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Gu=!1;function so(){if(Gu){var e=ks;if(e!==null)throw e}}function ro(e,i,s,l){Gu=!1;var u=e.updateQueue;_a=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var I=b,tt=I.next;I.next=null,M===null?d=tt:M.next=tt,M=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==M&&(b===null?ht.firstBaseUpdate=tt:b.next=tt,ht.lastBaseUpdate=I))}if(d!==null){var xt=u.baseState;M=0,ht=tt=I=null,b=d;do{var nt=b.lane&-536870913,st=nt!==b.lane;if(st?(xe&nt)===nt:(l&nt)===nt){nt!==0&&nt===Vs&&(Gu=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var te=e,jt=b;nt=i;var Pe=s;switch(jt.tag){case 1:if(te=jt.payload,typeof te=="function"){xt=te.call(Pe,xt,nt);break t}xt=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=jt.payload,nt=typeof te=="function"?te.call(Pe,xt,nt):te,nt==null)break t;xt=g({},xt,nt);break t;case 2:_a=!0}}nt=b.callback,nt!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[nt]:st.push(nt))}else st={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(tt=ht=st,I=xt):ht=ht.next=st,M|=nt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;st=b,b=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ht===null&&(I=xt),u.baseState=I,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,d===null&&(u.shared.lanes=0),Ra|=M,e.lanes=M,e.memoizedState=xt}}function nm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function im(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)nm(s[e],i)}var Xs=K(null),bl=K(0);function am(e,i){e=Qi,gt(bl,e),gt(Xs,i),Qi=e|i.baseLanes}function Vu(){gt(bl,Qi),gt(Xs,Xs.current)}function ku(){Qi=bl.current,ft(Xs),ft(bl)}var ya=0,ue=null,Ne=null,nn=null,Al=!1,Ws=!1,cs=!1,Rl=0,oo=0,qs=null,Ox=0;function Je(){throw Error(a(321))}function Xu(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Zn(e[s],i[s]))return!1;return!0}function Wu(e,i,s,l,u,d){return ya=d,ue=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=e===null||e.memoizedState===null?Gm:Vm,cs=!1,d=s(l,u),cs=!1,Ws&&(d=rm(i,s,l,u)),sm(e),d}function sm(e){P.H=Nl;var i=Ne!==null&&Ne.next!==null;if(ya=0,nn=Ne=ue=null,Al=!1,oo=0,qs=null,i)throw Error(a(300));e===null||mn||(e=e.dependencies,e!==null&&yl(e)&&(mn=!0))}function rm(e,i,s,l){ue=e;var u=0;do{if(Ws&&(qs=null),oo=0,Ws=!1,25<=u)throw Error(a(301));if(u+=1,nn=Ne=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=Gx,d=i(s,l)}while(Ws);return d}function Px(){var e=P.H,i=e.useState()[0];return i=typeof i.then=="function"?lo(i):i,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ue.flags|=1024),i}function qu(){var e=Rl!==0;return Rl=0,e}function Yu(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Zu(e){if(Al){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Al=!1}ya=0,nn=Ne=ue=null,Ws=!1,oo=Rl=0,qs=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ue.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Ne===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var i=nn===null?ue.memoizedState:nn.next;if(i!==null)nn=i,Ne=e;else{if(e===null)throw ue.alternate===null?Error(a(467)):Error(a(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},nn===null?ue.memoizedState=nn=e:nn=nn.next=e}return nn}function ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(e){var i=oo;return oo+=1,qs===null&&(qs=[]),e=$p(qs,e,i),i=ue,(nn===null?i.memoizedState:nn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?Gm:Vm),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return lo(e);if(e.$$typeof===D)return Un(e)}throw Error(a(438,String(e)))}function Ku(e){var i=null,s=ue.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=ju(),ue.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=C;return i.index++,s}function Wi(e,i){return typeof i=="function"?i(e):i}function Cl(e){var i=an();return Qu(i,Ne,e)}function Qu(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var u=e.baseQueue,d=l.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}i.baseQueue=u=d,l.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var b=M=null,I=null,tt=i,ht=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(xe&xt)===xt:(ya&xt)===xt){var nt=tt.revertLane;if(nt===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===Vs&&(ht=!0);else if((ya&nt)===nt){tt=tt.next,nt===Vs&&(ht=!0);continue}else xt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(b=I=xt,M=d):I=I.next=xt,ue.lanes|=nt,Ra|=nt;xt=tt.action,cs&&s(d,xt),d=tt.hasEagerState?tt.eagerState:s(d,xt)}else nt={lane:xt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(b=I=nt,M=d):I=I.next=nt,ue.lanes|=xt,Ra|=xt;tt=tt.next}while(tt!==null&&tt!==i);if(I===null?M=d:I.next=b,!Zn(d,e.memoizedState)&&(mn=!0,ht&&(s=ks,s!==null)))throw s;e.memoizedState=d,e.baseState=M,e.baseQueue=I,l.lastRenderedState=d}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ju(e){var i=an(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);Zn(d,i.memoizedState)||(mn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function om(e,i,s){var l=ue,u=an(),d=Re;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!Zn((Ne||u).memoizedState,s);M&&(u.memoizedState=s,mn=!0),u=u.queue;var b=um.bind(null,l,u,e);if(co(2048,8,b,[e]),u.getSnapshot!==i||M||nn!==null&&nn.memoizedState.tag&1){if(l.flags|=2048,Ys(9,Dl(),cm.bind(null,l,u,s,i),null),Ve===null)throw Error(a(349));d||(ya&124)!==0||lm(l,i,s)}return s}function lm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ue.updateQueue,i===null?(i=ju(),ue.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function cm(e,i,s,l){i.value=s,i.getSnapshot=l,fm(i)&&hm(e)}function um(e,i,s){return s(function(){fm(i)&&hm(e)})}function fm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Zn(e,s)}catch{return!0}}function hm(e){var i=Bs(e,2);i!==null&&ti(i,e,2)}function $u(e){var i=Hn();if(typeof e=="function"){var s=e;if(e=s(),cs){At(!0);try{s()}finally{At(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},i}function dm(e,i,s,l){return e.baseState=s,Qu(e,Ne,typeof l=="function"?l:Wi)}function zx(e,i,s,l,u){if(Ll(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};P.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,pm(i,d)):(d.next=s.next,i.pending=s.next=d)}}function pm(e,i){var s=i.action,l=i.payload,u=e.state;if(i.isTransition){var d=P.T,M={};P.T=M;try{var b=s(u,l),I=P.S;I!==null&&I(M,b),mm(e,i,b)}catch(tt){tf(e,i,tt)}finally{P.T=d}}else try{d=s(u,l),mm(e,i,d)}catch(tt){tf(e,i,tt)}}function mm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){gm(e,i,l)},function(l){return tf(e,i,l)}):gm(e,i,s)}function gm(e,i,s){i.status="fulfilled",i.value=s,_m(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,pm(e,s)))}function tf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,_m(i),i=i.next;while(i!==l)}e.action=null}function _m(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function vm(e,i){return i}function xm(e,i){if(Re){var s=Ve.formState;if(s!==null){t:{var l=ue;if(Re){if(je){e:{for(var u=je,d=Ei;u.nodeType!==8;){if(!d){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){je=mi(u.nextSibling),l=u.data==="F!";break t}}ss(l)}l=!1}l&&(i=s[0])}}return s=Hn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vm,lastRenderedState:i},s.queue=l,s=Bm.bind(null,ue,l),l.dispatch=s,l=$u(!1),d=rf.bind(null,ue,!1,l.queue),l=Hn(),u={state:i,dispatch:null,action:e,pending:null},l.queue=u,s=zx.bind(null,ue,u,d,s),u.dispatch=s,l.memoizedState=e,[i,s,!1]}function ym(e){var i=an();return Sm(i,Ne,e)}function Sm(e,i,s){if(i=Qu(e,i,vm)[0],e=Cl(Wi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=lo(i)}catch(M){throw M===no?El:M}else l=i;i=an();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(ue.flags|=2048,Ys(9,Dl(),Ix.bind(null,u,s),null)),[l,d,e]}function Ix(e,i){e.action=i}function Mm(e){var i=an(),s=Ne;if(s!==null)return Sm(i,s,e);an(),i=i.memoizedState,s=an();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Ys(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=ue.updateQueue,i===null&&(i=ju(),ue.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Dl(){return{destroy:void 0,resource:void 0}}function Em(){return an().memoizedState}function Ul(e,i,s,l){var u=Hn();l=l===void 0?null:l,ue.flags|=e,u.memoizedState=Ys(1|i,Dl(),s,l)}function co(e,i,s,l){var u=an();l=l===void 0?null:l;var d=u.memoizedState.inst;Ne!==null&&l!==null&&Xu(l,Ne.memoizedState.deps)?u.memoizedState=Ys(i,d,s,l):(ue.flags|=e,u.memoizedState=Ys(1|i,d,s,l))}function Tm(e,i){Ul(8390656,8,e,i)}function bm(e,i){co(2048,8,e,i)}function Am(e,i){return co(4,2,e,i)}function Rm(e,i){return co(4,4,e,i)}function wm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Cm(e,i,s){s=s!=null?s.concat([e]):null,co(4,4,wm.bind(null,i,e),s)}function ef(){}function Dm(e,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Xu(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Um(e,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Xu(i,l[1]))return l[0];if(l=e(),cs){At(!0);try{e()}finally{At(!1)}}return s.memoizedState=[l,i],l}function nf(e,i,s){return s===void 0||(ya&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Og(),ue.lanes|=e,Ra|=e,s)}function Lm(e,i,s,l){return Zn(s,i)?s:Xs.current!==null?(e=nf(e,s,l),Zn(e,i)||(mn=!0),e):(ya&42)===0?(mn=!0,e.memoizedState=s):(e=Og(),ue.lanes|=e,Ra|=e,i)}function Nm(e,i,s,l,u){var d=J.p;J.p=d!==0&&8>d?d:8;var M=P.T,b={};P.T=b,rf(e,!1,i,s);try{var I=u(),tt=P.S;if(tt!==null&&tt(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=Nx(I,l);uo(e,i,ht,$n(e))}else uo(e,i,l,$n(e))}catch(xt){uo(e,i,{then:function(){},status:"rejected",reason:xt},$n())}finally{J.p=d,P.T=M}}function Bx(){}function af(e,i,s,l){if(e.tag!==5)throw Error(a(476));var u=Om(e).queue;Nm(e,u,i,Y,s===null?Bx:function(){return Pm(e),s(l)})}function Om(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Pm(e){var i=Om(e).next.queue;uo(e,i,{},$n())}function sf(){return Un(Co)}function zm(){return an().memoizedState}function Im(){return an().memoizedState}function Fx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=$n();e=va(s);var l=xa(i,e,s);l!==null&&(ti(l,i,s),ao(l,i,s)),i={cache:Ou()},e.payload=i;return}i=i.return}}function Hx(e,i,s){var l=$n();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Ll(e)?Fm(i,s):(s=Tu(e,i,s,l),s!==null&&(ti(s,e,l),Hm(s,i,l)))}function Bm(e,i,s){var l=$n();uo(e,i,s,l)}function uo(e,i,s,l){var u={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ll(e))Fm(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var M=i.lastRenderedState,b=d(M,s);if(u.hasEagerState=!0,u.eagerState=b,Zn(b,M))return ml(e,i,u,0),Ve===null&&pl(),!1}catch{}finally{}if(s=Tu(e,i,u,l),s!==null)return ti(s,e,l),Hm(s,i,l),!0}return!1}function rf(e,i,s,l){if(l={lane:2,revertLane:Bf(),action:l,hasEagerState:!1,eagerState:null,next:null},Ll(e)){if(i)throw Error(a(479))}else i=Tu(e,s,l,2),i!==null&&ti(i,e,2)}function Ll(e){var i=e.alternate;return e===ue||i!==null&&i===ue}function Fm(e,i){Ws=Al=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Hm(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,ne(e,s)}}var Nl={readContext:Un,use:wl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},Gm={readContext:Un,use:wl,useCallback:function(e,i){return Hn().memoizedState=[e,i===void 0?null:i],e},useContext:Un,useEffect:Tm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Ul(4194308,4,wm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Ul(4194308,4,e,i)},useInsertionEffect:function(e,i){Ul(4,2,e,i)},useMemo:function(e,i){var s=Hn();i=i===void 0?null:i;var l=e();if(cs){At(!0);try{e()}finally{At(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Hn();if(s!==void 0){var u=s(i);if(cs){At(!0);try{s(i)}finally{At(!1)}}}else u=i;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=Hx.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var i=Hn();return e={current:e},i.memoizedState=e},useState:function(e){e=$u(e);var i=e.queue,s=Bm.bind(null,ue,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:ef,useDeferredValue:function(e,i){var s=Hn();return nf(s,e,i)},useTransition:function(){var e=$u(!1);return e=Nm.bind(null,ue,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=ue,u=Hn();if(Re){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ve===null)throw Error(a(349));(xe&124)!==0||lm(l,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,Tm(um.bind(null,l,d,e),[e]),l.flags|=2048,Ys(9,Dl(),cm.bind(null,l,d,s,i),null),s},useId:function(){var e=Hn(),i=Ve.identifierPrefix;if(Re){var s=Vi,l=Gi;s=(l&~(1<<32-Rt(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Rl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Ox++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:sf,useFormState:xm,useActionState:xm,useOptimistic:function(e){var i=Hn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=rf.bind(null,ue,!0,s),s.dispatch=i,[e,i]},useMemoCache:Ku,useCacheRefresh:function(){return Hn().memoizedState=Fx.bind(null,ue)}},Vm={readContext:Un,use:wl,useCallback:Dm,useContext:Un,useEffect:bm,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Um,useReducer:Cl,useRef:Em,useState:function(){return Cl(Wi)},useDebugValue:ef,useDeferredValue:function(e,i){var s=an();return Lm(s,Ne.memoizedState,e,i)},useTransition:function(){var e=Cl(Wi)[0],i=an().memoizedState;return[typeof e=="boolean"?e:lo(e),i]},useSyncExternalStore:om,useId:zm,useHostTransitionStatus:sf,useFormState:ym,useActionState:ym,useOptimistic:function(e,i){var s=an();return dm(s,Ne,e,i)},useMemoCache:Ku,useCacheRefresh:Im},Gx={readContext:Un,use:wl,useCallback:Dm,useContext:Un,useEffect:bm,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Um,useReducer:Ju,useRef:Em,useState:function(){return Ju(Wi)},useDebugValue:ef,useDeferredValue:function(e,i){var s=an();return Ne===null?nf(s,e,i):Lm(s,Ne.memoizedState,e,i)},useTransition:function(){var e=Ju(Wi)[0],i=an().memoizedState;return[typeof e=="boolean"?e:lo(e),i]},useSyncExternalStore:om,useId:zm,useHostTransitionStatus:sf,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,i){var s=an();return Ne!==null?dm(s,Ne,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Im},Zs=null,fo=0;function Ol(e){var i=fo;return fo+=1,Zs===null&&(Zs=[]),$p(Zs,e,i)}function ho(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Pl(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function km(e){var i=e._init;return i(e._payload)}function Xm(e){function i(q,X){if(e){var $=q.deletions;$===null?(q.deletions=[X],q.flags|=16):$.push(X)}}function s(q,X){if(!e)return null;for(;X!==null;)i(q,X),X=X.sibling;return null}function l(q){for(var X=new Map;q!==null;)q.key!==null?X.set(q.key,q):X.set(q.index,q),q=q.sibling;return X}function u(q,X){return q=Hi(q,X),q.index=0,q.sibling=null,q}function d(q,X,$){return q.index=$,e?($=q.alternate,$!==null?($=$.index,$<X?(q.flags|=67108866,X):$):(q.flags|=67108866,X)):(q.flags|=1048576,X)}function M(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function b(q,X,$,mt){return X===null||X.tag!==6?(X=Au($,q.mode,mt),X.return=q,X):(X=u(X,$),X.return=q,X)}function I(q,X,$,mt){var Ht=$.type;return Ht===E?ht(q,X,$.props.children,mt,$.key):X!==null&&(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===k&&km(Ht)===X.type)?(X=u(X,$.props),ho(X,$),X.return=q,X):(X=_l($.type,$.key,$.props,null,q.mode,mt),ho(X,$),X.return=q,X)}function tt(q,X,$,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Ru($,q.mode,mt),X.return=q,X):(X=u(X,$.children||[]),X.return=q,X)}function ht(q,X,$,mt,Ht){return X===null||X.tag!==7?(X=es($,q.mode,mt,Ht),X.return=q,X):(X=u(X,$),X.return=q,X)}function xt(q,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Au(""+X,q.mode,$),X.return=q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return $=_l(X.type,X.key,X.props,null,q.mode,$),ho($,X),$.return=q,$;case y:return X=Ru(X,q.mode,$),X.return=q,X;case k:var mt=X._init;return X=mt(X._payload),xt(q,X,$)}if(ct(X)||it(X))return X=es(X,q.mode,$,null),X.return=q,X;if(typeof X.then=="function")return xt(q,Ol(X),$);if(X.$$typeof===D)return xt(q,Sl(q,X),$);Pl(q,X)}return null}function nt(q,X,$,mt){var Ht=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:b(q,X,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Ht?I(q,X,$,mt):null;case y:return $.key===Ht?tt(q,X,$,mt):null;case k:return Ht=$._init,$=Ht($._payload),nt(q,X,$,mt)}if(ct($)||it($))return Ht!==null?null:ht(q,X,$,mt,null);if(typeof $.then=="function")return nt(q,X,Ol($),mt);if($.$$typeof===D)return nt(q,X,Sl(q,$),mt);Pl(q,$)}return null}function st(q,X,$,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get($)||null,b(X,q,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return q=q.get(mt.key===null?$:mt.key)||null,I(X,q,mt,Ht);case y:return q=q.get(mt.key===null?$:mt.key)||null,tt(X,q,mt,Ht);case k:var he=mt._init;return mt=he(mt._payload),st(q,X,$,mt,Ht)}if(ct(mt)||it(mt))return q=q.get($)||null,ht(X,q,mt,Ht,null);if(typeof mt.then=="function")return st(q,X,$,Ol(mt),Ht);if(mt.$$typeof===D)return st(q,X,$,Sl(X,mt),Ht);Pl(X,mt)}return null}function te(q,X,$,mt){for(var Ht=null,he=null,kt=X,Qt=X=0,_n=null;kt!==null&&Qt<$.length;Qt++){kt.index>Qt?(_n=kt,kt=null):_n=kt.sibling;var Te=nt(q,kt,$[Qt],mt);if(Te===null){kt===null&&(kt=_n);break}e&&kt&&Te.alternate===null&&i(q,kt),X=d(Te,X,Qt),he===null?Ht=Te:he.sibling=Te,he=Te,kt=_n}if(Qt===$.length)return s(q,kt),Re&&is(q,Qt),Ht;if(kt===null){for(;Qt<$.length;Qt++)kt=xt(q,$[Qt],mt),kt!==null&&(X=d(kt,X,Qt),he===null?Ht=kt:he.sibling=kt,he=kt);return Re&&is(q,Qt),Ht}for(kt=l(kt);Qt<$.length;Qt++)_n=st(kt,q,Qt,$[Qt],mt),_n!==null&&(e&&_n.alternate!==null&&kt.delete(_n.key===null?Qt:_n.key),X=d(_n,X,Qt),he===null?Ht=_n:he.sibling=_n,he=_n);return e&&kt.forEach(function(za){return i(q,za)}),Re&&is(q,Qt),Ht}function jt(q,X,$,mt){if($==null)throw Error(a(151));for(var Ht=null,he=null,kt=X,Qt=X=0,_n=null,Te=$.next();kt!==null&&!Te.done;Qt++,Te=$.next()){kt.index>Qt?(_n=kt,kt=null):_n=kt.sibling;var za=nt(q,kt,Te.value,mt);if(za===null){kt===null&&(kt=_n);break}e&&kt&&za.alternate===null&&i(q,kt),X=d(za,X,Qt),he===null?Ht=za:he.sibling=za,he=za,kt=_n}if(Te.done)return s(q,kt),Re&&is(q,Qt),Ht;if(kt===null){for(;!Te.done;Qt++,Te=$.next())Te=xt(q,Te.value,mt),Te!==null&&(X=d(Te,X,Qt),he===null?Ht=Te:he.sibling=Te,he=Te);return Re&&is(q,Qt),Ht}for(kt=l(kt);!Te.done;Qt++,Te=$.next())Te=st(kt,q,Qt,Te.value,mt),Te!==null&&(e&&Te.alternate!==null&&kt.delete(Te.key===null?Qt:Te.key),X=d(Te,X,Qt),he===null?Ht=Te:he.sibling=Te,he=Te);return e&&kt.forEach(function(Vy){return i(q,Vy)}),Re&&is(q,Qt),Ht}function Pe(q,X,$,mt){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var Ht=$.key;X!==null;){if(X.key===Ht){if(Ht=$.type,Ht===E){if(X.tag===7){s(q,X.sibling),mt=u(X,$.props.children),mt.return=q,q=mt;break t}}else if(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===k&&km(Ht)===X.type){s(q,X.sibling),mt=u(X,$.props),ho(mt,$),mt.return=q,q=mt;break t}s(q,X);break}else i(q,X);X=X.sibling}$.type===E?(mt=es($.props.children,q.mode,mt,$.key),mt.return=q,q=mt):(mt=_l($.type,$.key,$.props,null,q.mode,mt),ho(mt,$),mt.return=q,q=mt)}return M(q);case y:t:{for(Ht=$.key;X!==null;){if(X.key===Ht)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){s(q,X.sibling),mt=u(X,$.children||[]),mt.return=q,q=mt;break t}else{s(q,X);break}else i(q,X);X=X.sibling}mt=Ru($,q.mode,mt),mt.return=q,q=mt}return M(q);case k:return Ht=$._init,$=Ht($._payload),Pe(q,X,$,mt)}if(ct($))return te(q,X,$,mt);if(it($)){if(Ht=it($),typeof Ht!="function")throw Error(a(150));return $=Ht.call($),jt(q,X,$,mt)}if(typeof $.then=="function")return Pe(q,X,Ol($),mt);if($.$$typeof===D)return Pe(q,X,Sl(q,$),mt);Pl(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(s(q,X.sibling),mt=u(X,$),mt.return=q,q=mt):(s(q,X),mt=Au($,q.mode,mt),mt.return=q,q=mt),M(q)):s(q,X)}return function(q,X,$,mt){try{fo=0;var Ht=Pe(q,X,$,mt);return Zs=null,Ht}catch(kt){if(kt===no||kt===El)throw kt;var he=jn(29,kt,null,q.mode);return he.lanes=mt,he.return=q,he}finally{}}}var js=Xm(!0),Wm=Xm(!1),oi=K(null),Ti=null;function Sa(e){var i=e.alternate;gt(cn,cn.current&1),gt(oi,e),Ti===null&&(i===null||Xs.current!==null||i.memoizedState!==null)&&(Ti=e)}function qm(e){if(e.tag===22){if(gt(cn,cn.current),gt(oi,e),Ti===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ti=e)}}else Ma()}function Ma(){gt(cn,cn.current),gt(oi,oi.current)}function qi(e){ft(oi),Ti===e&&(Ti=null),ft(cn)}var cn=K(0);function zl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Kf(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function of(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var lf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=$n(),u=va(l);u.payload=i,s!=null&&(u.callback=s),i=xa(e,u,l),i!==null&&(ti(i,e,l),ao(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=$n(),u=va(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=xa(e,u,l),i!==null&&(ti(i,e,l),ao(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=$n(),l=va(s);l.tag=2,i!=null&&(l.callback=i),i=xa(e,l,s),i!==null&&(ti(i,e,s),ao(i,e,s))}};function Ym(e,i,s,l,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,M):i.prototype&&i.prototype.isPureReactComponent?!Zr(s,l)||!Zr(u,d):!0}function Zm(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&lf.enqueueReplaceState(i,i.state,null)}function us(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function jm(e){Il(e)}function Km(e){console.error(e)}function Qm(e){Il(e)}function Bl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Jm(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cf(e,i,s){return s=va(s),s.tag=3,s.payload={element:null},s.callback=function(){Bl(e,i)},s}function $m(e){return e=va(e),e.tag=3,e}function tg(e,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;e.payload=function(){return u(d)},e.callback=function(){Jm(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Jm(i,s,l),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Vx(e,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&$r(i,s,u,!0),s=oi.current,s!==null){switch(s.tag){case 13:return Ti===null?Nf():s.alternate===null&&Ke===0&&(Ke=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===Iu?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Pf(e,l,u)),!1;case 22:return s.flags|=65536,l===Iu?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Pf(e,l,u)),!1}throw Error(a(435,s.tag))}return Pf(e,l,u),Nf(),!1}if(Re)return i=oi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==Du&&(e=Error(a(422),{cause:l}),Jr(ii(e,s)))):(l!==Du&&(i=Error(a(423),{cause:l}),Jr(ii(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=ii(l,s),u=cf(e.stateNode,l,u),Hu(e,u),Ke!==4&&(Ke=2)),!1;var d=Error(a(520),{cause:l});if(d=ii(d,s),yo===null?yo=[d]:yo.push(d),Ke!==4&&(Ke=2),i===null)return!0;l=ii(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=cf(s.stateNode,l,e),Hu(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(wa===null||!wa.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=$m(u),tg(u,e,s,l),Hu(s,u),!1}s=s.return}while(s!==null);return!1}var eg=Error(a(461)),mn=!1;function Tn(e,i,s,l){i.child=e===null?Wm(i,null,s,l):js(i,e.child,s,l)}function ng(e,i,s,l,u){s=s.render;var d=i.ref;if("ref"in l){var M={};for(var b in l)b!=="ref"&&(M[b]=l[b])}else M=l;return os(i),l=Wu(e,i,s,M,d,u),b=qu(),e!==null&&!mn?(Yu(e,i,u),Yi(e,i,u)):(Re&&b&&wu(i),i.flags|=1,Tn(e,i,l,u),i.child)}function ig(e,i,s,l,u){if(e===null){var d=s.type;return typeof d=="function"&&!bu(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,ag(e,i,d,l,u)):(e=_l(s.type,null,l,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!_f(e,u)){var M=d.memoizedProps;if(s=s.compare,s=s!==null?s:Zr,s(M,l)&&e.ref===i.ref)return Yi(e,i,u)}return i.flags|=1,e=Hi(d,l),e.ref=i.ref,e.return=i,i.child=e}function ag(e,i,s,l,u){if(e!==null){var d=e.memoizedProps;if(Zr(d,l)&&e.ref===i.ref)if(mn=!1,i.pendingProps=l=d,_f(e,u))(e.flags&131072)!==0&&(mn=!0);else return i.lanes=e.lanes,Yi(e,i,u)}return uf(e,i,s,l,u)}function sg(e,i,s){var l=i.pendingProps,u=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|s:s,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return rg(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(i,d!==null?d.cachePool:null),d!==null?am(i,d):Vu(),qm(i);else return i.lanes=i.childLanes=536870912,rg(e,i,d!==null?d.baseLanes|s:s,s)}else d!==null?(Ml(i,d.cachePool),am(i,d),Ma(),i.memoizedState=null):(e!==null&&Ml(i,null),Vu(),Ma());return Tn(e,i,u,s),i.child}function rg(e,i,s,l){var u=zu();return u=u===null?null:{parent:ln._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},e!==null&&Ml(i,null),Vu(),qm(i),e!==null&&$r(e,i,l,!0),null}function Fl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function uf(e,i,s,l,u){return os(i),s=Wu(e,i,s,l,void 0,u),l=qu(),e!==null&&!mn?(Yu(e,i,u),Yi(e,i,u)):(Re&&l&&wu(i),i.flags|=1,Tn(e,i,s,u),i.child)}function og(e,i,s,l,u,d){return os(i),i.updateQueue=null,s=rm(i,l,s,u),sm(e),l=qu(),e!==null&&!mn?(Yu(e,i,d),Yi(e,i,d)):(Re&&l&&wu(i),i.flags|=1,Tn(e,i,s,d),i.child)}function lg(e,i,s,l,u){if(os(i),i.stateNode===null){var d=Fs,M=s.contextType;typeof M=="object"&&M!==null&&(d=Un(M)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=lf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Bu(i),M=s.contextType,d.context=typeof M=="object"&&M!==null?Un(M):Fs,d.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(of(i,s,M,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&lf.enqueueReplaceState(d,d.state,null),ro(i,l,d,u),so(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var b=i.memoizedProps,I=us(s,b);d.props=I;var tt=d.context,ht=s.contextType;M=Fs,typeof ht=="object"&&ht!==null&&(M=Un(ht));var xt=s.getDerivedStateFromProps;ht=typeof xt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,ht||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||tt!==M)&&Zm(i,d,l,M),_a=!1;var nt=i.memoizedState;d.state=nt,ro(i,l,d,u),so(),tt=i.memoizedState,b||nt!==tt||_a?(typeof xt=="function"&&(of(i,s,xt,l),tt=i.memoizedState),(I=_a||Ym(i,s,I,l,nt,tt,M))?(ht||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=tt),d.props=l,d.state=tt,d.context=M,l=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Fu(e,i),M=i.memoizedProps,ht=us(s,M),d.props=ht,xt=i.pendingProps,nt=d.context,tt=s.contextType,I=Fs,typeof tt=="object"&&tt!==null&&(I=Un(tt)),b=s.getDerivedStateFromProps,(tt=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==xt||nt!==I)&&Zm(i,d,l,I),_a=!1,nt=i.memoizedState,d.state=nt,ro(i,l,d,u),so();var st=i.memoizedState;M!==xt||nt!==st||_a||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof b=="function"&&(of(i,s,b,l),st=i.memoizedState),(ht=_a||Ym(i,s,ht,l,nt,st,I)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(tt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,st,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,st,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=st),d.props=l,d.state=st,d.context=I,l=ht):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Fl(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=js(i,e.child,null,u),i.child=js(i,null,s,u)):Tn(e,i,s,u),i.memoizedState=d.state,e=i.child):e=Yi(e,i,u),e}function cg(e,i,s,l){return Qr(),i.flags|=256,Tn(e,i,s,l),i.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(e){return{baseLanes:e,cachePool:Kp()}}function df(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=li),e}function ug(e,i,s){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),M&&(u=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(Re){if(u?Sa(i):Ma(),Re){var b=je,I;if(I=b){t:{for(I=b,b=Ei;I.nodeType!==8;){if(!b){b=null;break t}if(I=mi(I.nextSibling),I===null){b=null;break t}}b=I}b!==null?(i.memoizedState={dehydrated:b,treeContext:ns!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},I=jn(18,null,null,0),I.stateNode=b,I.return=i,i.child=I,Pn=i,je=null,I=!0):I=!1}I||ss(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Kf(b)?i.lanes=32:i.lanes=536870912,null;qi(i)}return b=l.children,l=l.fallback,u?(Ma(),u=i.mode,b=Hl({mode:"hidden",children:b},u),l=es(l,u,s,null),b.return=i,l.return=i,b.sibling=l,i.child=b,u=i.child,u.memoizedState=hf(s),u.childLanes=df(e,M,s),i.memoizedState=ff,l):(Sa(i),pf(i,b))}if(I=e.memoizedState,I!==null&&(b=I.dehydrated,b!==null)){if(d)i.flags&256?(Sa(i),i.flags&=-257,i=mf(e,i,s)):i.memoizedState!==null?(Ma(),i.child=e.child,i.flags|=128,i=null):(Ma(),u=l.fallback,b=i.mode,l=Hl({mode:"visible",children:l.children},b),u=es(u,b,s,null),u.flags|=2,l.return=i,u.return=i,l.sibling=u,i.child=l,js(i,e.child,null,s),l=i.child,l.memoizedState=hf(s),l.childLanes=df(e,M,s),i.memoizedState=ff,i=u);else if(Sa(i),Kf(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var tt=M.dgst;M=tt,l=Error(a(419)),l.stack="",l.digest=M,Jr({value:l,source:null,stack:null}),i=mf(e,i,s)}else if(mn||$r(e,i,s,!1),M=(s&e.childLanes)!==0,mn||M){if(M=Ve,M!==null&&(l=s&-s,l=(l&42)!==0?1:He(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Bs(e,l),ti(M,e,l),eg;b.data==="$?"||Nf(),i=mf(e,i,s)}else b.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,je=mi(b.nextSibling),Pn=i,Re=!0,as=null,Ei=!1,e!==null&&(si[ri++]=Gi,si[ri++]=Vi,si[ri++]=ns,Gi=e.id,Vi=e.overflow,ns=i),i=pf(i,l.children),i.flags|=4096);return i}return u?(Ma(),u=l.fallback,b=i.mode,I=e.child,tt=I.sibling,l=Hi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,tt!==null?u=Hi(tt,u):(u=es(u,b,s,null),u.flags|=2),u.return=i,l.return=i,l.sibling=u,i.child=l,l=u,u=i.child,b=e.child.memoizedState,b===null?b=hf(s):(I=b.cachePool,I!==null?(tt=ln._currentValue,I=I.parent!==tt?{parent:tt,pool:tt}:I):I=Kp(),b={baseLanes:b.baseLanes|s,cachePool:I}),u.memoizedState=b,u.childLanes=df(e,M,s),i.memoizedState=ff,l):(Sa(i),s=e.child,e=s.sibling,s=Hi(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=s,i.memoizedState=null,s)}function pf(e,i){return i=Hl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Hl(e,i){return e=jn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function mf(e,i,s){return js(i,e.child,null,s),e=pf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function fg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Lu(e.return,i,s)}function gf(e,i,s,l,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=u)}function hg(e,i,s){var l=i.pendingProps,u=l.revealOrder,d=l.tail;if(Tn(e,i,l.children,s),l=cn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fg(e,s,i);else if(e.tag===19)fg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(gt(cn,l),u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&zl(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),gf(i,!1,u,s,d);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&zl(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}gf(i,!0,s,null,d);break;case"together":gf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yi(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ra|=i.lanes,(s&i.childLanes)===0)if(e!==null){if($r(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Hi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Hi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function _f(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function kx(e,i,s){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),ga(i,ln,e.memoizedState.cache),Qr();break;case 27:case 5:Yt(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:ga(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Sa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?ug(e,i,s):(Sa(i),e=Yi(e,i,s),e!==null?e.sibling:null);Sa(i);break;case 19:var u=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||($r(e,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return hg(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(cn,cn.current),l)break;return null;case 22:case 23:return i.lanes=0,sg(e,i,s);case 24:ga(i,ln,e.memoizedState.cache)}return Yi(e,i,s)}function dg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)mn=!0;else{if(!_f(e,s)&&(i.flags&128)===0)return mn=!1,kx(e,i,s);mn=(e.flags&131072)!==0}else mn=!1,Re&&(i.flags&1048576)!==0&&kp(i,xl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,u=l._init;if(l=u(l._payload),i.type=l,typeof l=="function")bu(l)?(e=us(l,e),i.tag=1,i=lg(null,i,l,e,s)):(i.tag=0,i=uf(null,i,l,e,s));else{if(l!=null){if(u=l.$$typeof,u===R){i.tag=11,i=ng(null,i,l,e,s);break t}else if(u===z){i.tag=14,i=ig(null,i,l,e,s);break t}}throw i=ut(l)||l,Error(a(306,i,""))}}return i;case 0:return uf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=us(l,i.pendingProps),lg(e,i,l,u,s);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;u=d.element,Fu(e,i),ro(i,l,null,s);var M=i.memoizedState;if(l=M.cache,ga(i,ln,l),l!==d.cache&&Nu(i,[ln],s,!0),so(),l=M.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=cg(e,i,l,s);break t}else if(l!==u){u=ii(Error(a(424)),i),Jr(u),i=cg(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=mi(e.firstChild),Pn=i,Re=!0,as=null,Ei=!0,s=Wm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Qr(),l===u){i=Yi(e,i,s);break t}Tn(e,i,l,s)}i=i.child}return i;case 26:return Fl(e,i),e===null?(s=__(i.type,null,i.pendingProps,null))?i.memoizedState=s:Re||(s=i.type,e=i.pendingProps,l=tc(dt.current).createElement(s),l[rn]=i,l[Mn]=e,An(l,s,e),en(l),i.stateNode=l):i.memoizedState=__(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Yt(i),e===null&&Re&&(l=i.stateNode=p_(i.type,i.pendingProps,dt.current),Pn=i,Ei=!0,u=je,Ua(i.type)?(Qf=u,je=mi(l.firstChild)):je=u),Tn(e,i,i.pendingProps.children,s),Fl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Re&&((u=l=je)&&(l=_y(l,i.type,i.pendingProps,Ei),l!==null?(i.stateNode=l,Pn=i,je=mi(l.firstChild),Ei=!1,u=!0):u=!1),u||ss(i)),Yt(i),u=i.type,d=i.pendingProps,M=e!==null?e.memoizedProps:null,l=d.children,Yf(u,d)?l=null:M!==null&&Yf(u,M)&&(i.flags|=32),i.memoizedState!==null&&(u=Wu(e,i,Px,null,null,s),Co._currentValue=u),Fl(e,i),Tn(e,i,l,s),i.child;case 6:return e===null&&Re&&((e=s=je)&&(s=vy(s,i.pendingProps,Ei),s!==null?(i.stateNode=s,Pn=i,je=null,e=!0):e=!1),e||ss(i)),null;case 13:return ug(e,i,s);case 4:return Ct(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=js(i,null,l,s):Tn(e,i,l,s),i.child;case 11:return ng(e,i,i.type,i.pendingProps,s);case 7:return Tn(e,i,i.pendingProps,s),i.child;case 8:return Tn(e,i,i.pendingProps.children,s),i.child;case 12:return Tn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ga(i,i.type,l.value),Tn(e,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,os(i),u=Un(u),l=l(u),i.flags|=1,Tn(e,i,l,s),i.child;case 14:return ig(e,i,i.type,i.pendingProps,s);case 15:return ag(e,i,i.type,i.pendingProps,s);case 19:return hg(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=Hl(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Hi(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return sg(e,i,s);case 24:return os(i),l=Un(ln),e===null?(u=zu(),u===null&&(u=Ve,d=Ou(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:l,cache:u},Bu(i),ga(i,ln,u)):((e.lanes&s)!==0&&(Fu(e,i),ro(i,null,null,s),so()),u=e.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),ga(i,ln,l)):(l=d.cache,ga(i,ln,l),l!==u.cache&&Nu(i,[ln],s,!0))),Tn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Zi(e){e.flags|=4}function pg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!M_(i)){if(i=oi.current,i!==null&&((xe&4194048)===xe?Ti!==null:(xe&62914560)!==xe&&(xe&536870912)===0||i!==Ti))throw io=Iu,Qp;e.flags|=8192}}function Gl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Lt():536870912,e.lanes|=i,$s|=i)}function po(e,i){if(!Re)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function Xx(e,i,s){var l=i.pendingProps;switch(Cu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(i),null;case 1:return qe(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Xi(ln),ie(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Kr(i)?Zi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qp())),qe(i),null;case 26:return s=i.memoizedState,e===null?(Zi(i),s!==null?(qe(i),pg(i,s)):(qe(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Zi(i),qe(i),pg(i,s)):(qe(i),i.flags&=-16777217):(e.memoizedProps!==l&&Zi(i),qe(i),i.flags&=-16777217),null;case 27:Ae(i),s=dt.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Zi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return qe(i),null}e=Q.current,Kr(i)?Xp(i):(e=p_(u,l,s),i.stateNode=e,Zi(i))}return qe(i),null;case 5:if(Ae(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Zi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return qe(i),null}if(e=Q.current,Kr(i))Xp(i);else{switch(u=tc(dt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(s,{is:l.is}):u.createElement(s)}}e[rn]=i,e[Mn]=l;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(An(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(i)}}return qe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Zi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=dt.current,Kr(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[rn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||o_(e.nodeValue,s)),e||ss(i)}else e=tc(e).createTextNode(l),e[rn]=i,i.stateNode=e}return qe(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Kr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[rn]=i}else Qr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qe(i),u=!1}else u=qp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(qi(i),i):(qi(i),null)}if(qi(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),Gl(i,i.updateQueue),qe(i),null;case 4:return ie(),e===null&&Vf(i.stateNode.containerInfo),qe(i),null;case 10:return Xi(i.type),qe(i),null;case 19:if(ft(cn),u=i.memoizedState,u===null)return qe(i),null;if(l=(i.flags&128)!==0,d=u.rendering,d===null)if(l)po(u,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=zl(e),d!==null){for(i.flags|=128,po(u,!1),e=d.updateQueue,i.updateQueue=e,Gl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Vp(s,e),s=s.sibling;return gt(cn,cn.current&1|2),i.child}e=e.sibling}u.tail!==null&&Jt()>Xl&&(i.flags|=128,l=!0,po(u,!1),i.lanes=4194304)}else{if(!l)if(e=zl(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Gl(i,e),po(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Re)return qe(i),null}else 2*Jt()-u.renderingStartTime>Xl&&s!==536870912&&(i.flags|=128,l=!0,po(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(e=u.last,e!==null?e.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Jt(),i.sibling=null,e=cn.current,gt(cn,l?e&1|2:e&1),i):(qe(i),null);case 22:case 23:return qi(i),ku(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(qe(i),i.subtreeFlags&6&&(i.flags|=8192)):qe(i),s=i.updateQueue,s!==null&&Gl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&ft(ls),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Xi(ln),qe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Wx(e,i){switch(Cu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Xi(ln),ie(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ae(i),null;case 13:if(qi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Qr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return ft(cn),null;case 4:return ie(),null;case 10:return Xi(i.type),null;case 22:case 23:return qi(i),ku(),e!==null&&ft(ls),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Xi(ln),null;case 25:return null;default:return null}}function mg(e,i){switch(Cu(i),i.tag){case 3:Xi(ln),ie();break;case 26:case 27:case 5:Ae(i);break;case 4:ie();break;case 13:qi(i);break;case 19:ft(cn);break;case 10:Xi(i.type);break;case 22:case 23:qi(i),ku(),e!==null&&ft(ls);break;case 24:Xi(ln)}}function mo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&e)===e){l=void 0;var d=s.create,M=s.inst;l=d(),M.destroy=l}s=s.next}while(s!==u)}}catch(b){Fe(i,i.return,b)}}function Ea(e,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&e)===e){var M=l.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,u=i;var I=s,tt=b;try{tt()}catch(ht){Fe(u,I,ht)}}}l=l.next}while(l!==d)}}catch(ht){Fe(i,i.return,ht)}}function gg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{im(i,s)}catch(l){Fe(e,e.return,l)}}}function _g(e,i,s){s.props=us(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Fe(e,i,l)}}function go(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(u){Fe(e,i,u)}}function bi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Fe(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Fe(e,i,u)}else s.current=null}function vg(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Fe(e,e.return,u)}}function vf(e,i,s){try{var l=e.stateNode;hy(l,e.type,s,i),l[Mn]=i}catch(u){Fe(e,e.return,u)}}function xg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yf(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=$l));else if(l!==4&&(l===27&&Ua(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(yf(e,i,s),e=e.sibling;e!==null;)yf(e,i,s),e=e.sibling}function Vl(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Ua(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Vl(e,i,s),e=e.sibling;e!==null;)Vl(e,i,s),e=e.sibling}function yg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);An(i,l,s),i[rn]=e,i[Mn]=s}catch(d){Fe(e,e.return,d)}}var ji=!1,$e=!1,Sf=!1,Sg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function qx(e,i){if(e=e.containerInfo,Wf=rc,e=Lp(e),vu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var M=0,b=-1,I=-1,tt=0,ht=0,xt=e,nt=null;e:for(;;){for(var st;xt!==s||u!==0&&xt.nodeType!==3||(b=M+u),xt!==d||l!==0&&xt.nodeType!==3||(I=M+l),xt.nodeType===3&&(M+=xt.nodeValue.length),(st=xt.firstChild)!==null;)nt=xt,xt=st;for(;;){if(xt===e)break e;if(nt===s&&++tt===u&&(b=M),nt===d&&++ht===l&&(I=M),(st=xt.nextSibling)!==null)break;xt=nt,nt=xt.parentNode}xt=st}s=b===-1||I===-1?null:{start:b,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(qf={focusedElem:e,selectionRange:s},rc=!1,gn=i;gn!==null;)if(i=gn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,gn=e;else for(;gn!==null;){switch(i=gn,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var te=us(s.type,u,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(te,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(jt){Fe(s,s.return,jt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)jf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,gn=e;break}gn=i.return}}function Mg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ta(e,s),l&4&&mo(5,s);break;case 1:if(Ta(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(M){Fe(s,s.return,M)}else{var u=us(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Fe(s,s.return,M)}}l&64&&gg(s),l&512&&go(s,s.return);break;case 3:if(Ta(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{im(e,i)}catch(M){Fe(s,s.return,M)}}break;case 27:i===null&&l&4&&yg(s);case 26:case 5:Ta(e,s),i===null&&l&4&&vg(s),l&512&&go(s,s.return);break;case 12:Ta(e,s);break;case 13:Ta(e,s),l&4&&bg(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=ey.bind(null,s),xy(e,s))));break;case 22:if(l=s.memoizedState!==null||ji,!l){i=i!==null&&i.memoizedState!==null||$e,u=ji;var d=$e;ji=l,($e=i)&&!d?ba(e,s,(s.subtreeFlags&8772)!==0):Ta(e,s),ji=u,$e=d}break;case 30:break;default:Ta(e,s)}}function Eg(e){var i=e.alternate;i!==null&&(e.alternate=null,Eg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ha(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,Gn=!1;function Ki(e,i,s){for(s=s.child;s!==null;)Tg(e,i,s),s=s.sibling}function Tg(e,i,s){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(pt,s)}catch{}switch(s.tag){case 26:$e||bi(s,i),Ki(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:$e||bi(s,i);var l=ke,u=Gn;Ua(s.type)&&(ke=s.stateNode,Gn=!1),Ki(e,i,s),bo(s.stateNode),ke=l,Gn=u;break;case 5:$e||bi(s,i);case 6:if(l=ke,u=Gn,ke=null,Ki(e,i,s),ke=l,Gn=u,ke!==null)if(Gn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(s.stateNode)}catch(d){Fe(s,i,d)}else try{ke.removeChild(s.stateNode)}catch(d){Fe(s,i,d)}break;case 18:ke!==null&&(Gn?(e=ke,h_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),No(e)):h_(ke,s.stateNode));break;case 4:l=ke,u=Gn,ke=s.stateNode.containerInfo,Gn=!0,Ki(e,i,s),ke=l,Gn=u;break;case 0:case 11:case 14:case 15:$e||Ea(2,s,i),$e||Ea(4,s,i),Ki(e,i,s);break;case 1:$e||(bi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&_g(s,i,l)),Ki(e,i,s);break;case 21:Ki(e,i,s);break;case 22:$e=(l=$e)||s.memoizedState!==null,Ki(e,i,s),$e=l;break;default:Ki(e,i,s)}}function bg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{No(e)}catch(s){Fe(i,i.return,s)}}function Yx(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Sg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Sg),i;default:throw Error(a(435,e.tag))}}function Mf(e,i){var s=Yx(e);i.forEach(function(l){var u=ny.bind(null,e,l);s.has(l)||(s.add(l),l.then(u,u))})}function Kn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],d=e,M=i,b=M;t:for(;b!==null;){switch(b.tag){case 27:if(Ua(b.type)){ke=b.stateNode,Gn=!1;break t}break;case 5:ke=b.stateNode,Gn=!1;break t;case 3:case 4:ke=b.stateNode.containerInfo,Gn=!0;break t}b=b.return}if(ke===null)throw Error(a(160));Tg(d,M,u),ke=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ag(i,e),i=i.sibling}var pi=null;function Ag(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(i,e),Qn(e),l&4&&(Ea(3,e,e.return),mo(3,e),Ea(5,e,e.return));break;case 1:Kn(i,e),Qn(e),l&512&&($e||s===null||bi(s,s.return)),l&64&&ji&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=pi;if(Kn(i,e),Qn(e),l&512&&($e||s===null||bi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[fa]||d[rn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),An(d,l,s),d[rn]=e,en(d),l=d;break t;case"link":var M=y_("link","href",u).get(l+(s.href||""));if(M){for(var b=0;b<M.length;b++)if(d=M[b],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(b,1);break e}}d=u.createElement(l),An(d,l,s),u.head.appendChild(d);break;case"meta":if(M=y_("meta","content",u).get(l+(s.content||""))){for(b=0;b<M.length;b++)if(d=M[b],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(b,1);break e}}d=u.createElement(l),An(d,l,s),u.head.appendChild(d);break;default:throw Error(a(468,l))}d[rn]=e,en(d),l=d}e.stateNode=l}else S_(u,e.type,e.stateNode);else e.stateNode=x_(u,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?S_(u,e.type,e.stateNode):x_(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&vf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Kn(i,e),Qn(e),l&512&&($e||s===null||bi(s,s.return)),s!==null&&l&4&&vf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Kn(i,e),Qn(e),l&512&&($e||s===null||bi(s,s.return)),e.flags&32){u=e.stateNode;try{Mi(u,"")}catch(st){Fe(e,e.return,st)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,vf(e,u,s!==null?s.memoizedProps:u)),l&1024&&(Sf=!0);break;case 6:if(Kn(i,e),Qn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(st){Fe(e,e.return,st)}}break;case 3:if(ic=null,u=pi,pi=ec(i.containerInfo),Kn(i,e),pi=u,Qn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{No(i.containerInfo)}catch(st){Fe(e,e.return,st)}Sf&&(Sf=!1,Rg(e));break;case 4:l=pi,pi=ec(e.stateNode.containerInfo),Kn(i,e),Qn(e),pi=l;break;case 12:Kn(i,e),Qn(e);break;case 13:Kn(i,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(wf=Jt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mf(e,l)));break;case 22:u=e.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,tt=ji,ht=$e;if(ji=tt||u,$e=ht||I,Kn(i,e),$e=ht,ji=tt,Qn(e),l&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||I||ji||$e||fs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(d=I.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=I.stateNode;var xt=I.memoizedProps.style,nt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(st){Fe(I,I.return,st)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(st){Fe(I,I.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Mf(e,s))));break;case 19:Kn(i,e),Qn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mf(e,l)));break;case 30:break;case 21:break;default:Kn(i,e),Qn(e)}}function Qn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(xg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=xf(e);Vl(e,d,u);break;case 5:var M=s.stateNode;s.flags&32&&(Mi(M,""),s.flags&=-33);var b=xf(e);Vl(e,b,M);break;case 3:case 4:var I=s.stateNode.containerInfo,tt=xf(e);yf(e,tt,I);break;default:throw Error(a(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Rg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Rg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ta(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Mg(e,i.alternate,i),i=i.sibling}function fs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ea(4,i,i.return),fs(i);break;case 1:bi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&_g(i,i.return,s),fs(i);break;case 27:bo(i.stateNode);case 26:case 5:bi(i,i.return),fs(i);break;case 22:i.memoizedState===null&&fs(i);break;case 30:fs(i);break;default:fs(i)}e=e.sibling}}function ba(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=e,d=i,M=d.flags;switch(d.tag){case 0:case 11:case 15:ba(u,d,s),mo(4,d);break;case 1:if(ba(u,d,s),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Fe(l,l.return,tt)}if(l=d,u=l.updateQueue,u!==null){var b=l.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)nm(I[u],b)}catch(tt){Fe(l,l.return,tt)}}s&&M&64&&gg(d),go(d,d.return);break;case 27:yg(d);case 26:case 5:ba(u,d,s),s&&l===null&&M&4&&vg(d),go(d,d.return);break;case 12:ba(u,d,s);break;case 13:ba(u,d,s),s&&M&4&&bg(u,d);break;case 22:d.memoizedState===null&&ba(u,d,s),go(d,d.return);break;case 30:break;default:ba(u,d,s)}i=i.sibling}}function Ef(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&to(s))}function Tf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&to(e))}function Ai(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)wg(e,i,s,l),i=i.sibling}function wg(e,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ai(e,i,s,l),u&2048&&mo(9,i);break;case 1:Ai(e,i,s,l);break;case 3:Ai(e,i,s,l),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&to(e)));break;case 12:if(u&2048){Ai(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,M=d.id,b=d.onPostCommit;typeof b=="function"&&b(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Fe(i,i.return,I)}}else Ai(e,i,s,l);break;case 13:Ai(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,M=i.alternate,i.memoizedState!==null?d._visibility&2?Ai(e,i,s,l):_o(e,i):d._visibility&2?Ai(e,i,s,l):(d._visibility|=2,Ks(e,i,s,l,(i.subtreeFlags&10256)!==0)),u&2048&&Ef(M,i);break;case 24:Ai(e,i,s,l),u&2048&&Tf(i.alternate,i);break;default:Ai(e,i,s,l)}}function Ks(e,i,s,l,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,M=i,b=s,I=l,tt=M.flags;switch(M.tag){case 0:case 11:case 15:Ks(d,M,b,I,u),mo(8,M);break;case 23:break;case 22:var ht=M.stateNode;M.memoizedState!==null?ht._visibility&2?Ks(d,M,b,I,u):_o(d,M):(ht._visibility|=2,Ks(d,M,b,I,u)),u&&tt&2048&&Ef(M.alternate,M);break;case 24:Ks(d,M,b,I,u),u&&tt&2048&&Tf(M.alternate,M);break;default:Ks(d,M,b,I,u)}i=i.sibling}}function _o(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,u=l.flags;switch(l.tag){case 22:_o(s,l),u&2048&&Ef(l.alternate,l);break;case 24:_o(s,l),u&2048&&Tf(l.alternate,l);break;default:_o(s,l)}i=i.sibling}}var vo=8192;function Qs(e){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)Cg(e),e=e.sibling}function Cg(e){switch(e.tag){case 26:Qs(e),e.flags&vo&&e.memoizedState!==null&&Ly(pi,e.memoizedState,e.memoizedProps);break;case 5:Qs(e);break;case 3:case 4:var i=pi;pi=ec(e.stateNode.containerInfo),Qs(e),pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=vo,vo=16777216,Qs(e),vo=i):Qs(e));break;default:Qs(e)}}function Dg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function xo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];gn=l,Lg(l,e)}Dg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,kl(e)):xo(e);break;default:xo(e)}}function kl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];gn=l,Lg(l,e)}Dg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ea(8,i,i.return),kl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,kl(i));break;default:kl(i)}e=e.sibling}}function Lg(e,i){for(;gn!==null;){var s=gn;switch(s.tag){case 0:case 11:case 15:Ea(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:to(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,gn=l;else t:for(s=e;gn!==null;){l=gn;var u=l.sibling,d=l.return;if(Eg(l),l===s){gn=null;break t}if(u!==null){u.return=d,gn=u;break t}gn=d}}}var Zx={getCacheForType:function(e){var i=Un(ln),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},jx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ve=null,pe=null,xe=0,De=0,Jn=null,Aa=!1,Js=!1,bf=!1,Qi=0,Ke=0,Ra=0,hs=0,Af=0,li=0,$s=0,yo=null,Vn=null,Rf=!1,wf=0,Xl=1/0,Wl=null,wa=null,bn=0,Ca=null,tr=null,er=0,Cf=0,Df=null,Ng=null,So=0,Uf=null;function $n(){if((Ce&2)!==0&&xe!==0)return xe&-xe;if(P.T!==null){var e=Vs;return e!==0?e:Bf()}return Me()}function Og(){li===0&&(li=(xe&536870912)===0||Re?W():536870912);var e=oi.current;return e!==null&&(e.flags|=32),li}function ti(e,i,s){(e===Ve&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(nr(e,0),Da(e,xe,li,!1)),vt(e,s),((Ce&2)===0||e!==Ve)&&(e===Ve&&((Ce&2)===0&&(hs|=s),Ke===4&&Da(e,xe,li,!1)),Ri(e))}function Pg(e,i,s){if((Ce&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||ee(e,i),u=l?Jx(e,i):Of(e,i,!0),d=l;do{if(u===0){Js&&!l&&Da(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!Kx(s)){u=Of(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var b=e;u=yo;var I=b.current.memoizedState.isDehydrated;if(I&&(nr(b,M).flags|=256),M=Of(b,M,!1),M!==2){if(bf&&!I){b.errorRecoveryDisabledLanes|=d,hs|=d,u=4;break t}d=Vn,Vn=u,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){nr(e,0),Da(e,i,0,!0);break}t:{switch(l=e,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Da(l,i,li,!Aa);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=wf+300-Jt(),10<u)){if(Da(l,i,li,!Aa),ce(l,0,!0)!==0)break t;l.timeoutHandle=u_(zg.bind(null,l,s,Vn,Wl,Rf,i,li,hs,$s,Aa,d,2,-0,0),u);break t}zg(l,s,Vn,Wl,Rf,i,li,hs,$s,Aa,d,0,-0,0)}}break}while(!0);Ri(e)}function zg(e,i,s,l,u,d,M,b,I,tt,ht,xt,nt,st){if(e.timeoutHandle=-1,xt=i.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(wo={stylesheets:null,count:0,unsuspend:Uy},Cg(i),xt=Ny(),xt!==null)){e.cancelPendingCommit=xt(kg.bind(null,e,i,d,s,l,u,M,b,I,ht,1,nt,st)),Da(e,d,M,!tt);return}kg(e,i,d,s,l,u,M,b,I)}function Kx(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],d=u.getSnapshot;u=u.value;try{if(!Zn(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Da(e,i,s,l){i&=~Af,i&=~hs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var u=i;0<u;){var d=31-Rt(u),M=1<<d;l[d]=-1,u&=~M}s!==0&&Nt(e,s,i)}function ql(){return(Ce&6)===0?(Mo(0),!1):!0}function Lf(){if(pe!==null){if(De===0)var e=pe.return;else e=pe,ki=rs=null,Zu(e),Zs=null,fo=0,e=pe;for(;e!==null;)mg(e.alternate,e),e=e.return;pe=null}}function nr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,py(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Lf(),Ve=e,pe=s=Hi(e.current,null),xe=i,De=0,Jn=null,Aa=!1,Js=ee(e,i),bf=!1,$s=li=Af=hs=Ra=Ke=0,Vn=yo=null,Rf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var u=31-Rt(l),d=1<<u;i|=e[u],l&=~d}return Qi=i,pl(),s}function Ig(e,i){ue=null,P.H=Nl,i===no||i===El?(i=tm(),De=3):i===Qp?(i=tm(),De=4):De=i===eg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Jn=i,pe===null&&(Ke=1,Bl(e,ii(i,e.current)))}function Bg(){var e=P.H;return P.H=Nl,e===null?Nl:e}function Fg(){var e=P.A;return P.A=Zx,e}function Nf(){Ke=4,Aa||(xe&4194048)!==xe&&oi.current!==null||(Js=!0),(Ra&134217727)===0&&(hs&134217727)===0||Ve===null||Da(Ve,xe,li,!1)}function Of(e,i,s){var l=Ce;Ce|=2;var u=Bg(),d=Fg();(Ve!==e||xe!==i)&&(Wl=null,nr(e,i)),i=!1;var M=Ke;t:do try{if(De!==0&&pe!==null){var b=pe,I=Jn;switch(De){case 8:Lf(),M=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(i=!0);var tt=De;if(De=0,Jn=null,ir(e,b,I,tt),s&&Js){M=0;break t}break;default:tt=De,De=0,Jn=null,ir(e,b,I,tt)}}Qx(),M=Ke;break}catch(ht){Ig(e,ht)}while(!0);return i&&e.shellSuspendCounter++,ki=rs=null,Ce=l,P.H=u,P.A=d,pe===null&&(Ve=null,xe=0,pl()),M}function Qx(){for(;pe!==null;)Hg(pe)}function Jx(e,i){var s=Ce;Ce|=2;var l=Bg(),u=Fg();Ve!==e||xe!==i?(Wl=null,Xl=Jt()+500,nr(e,i)):Js=ee(e,i);t:do try{if(De!==0&&pe!==null){i=pe;var d=Jn;e:switch(De){case 1:De=0,Jn=null,ir(e,i,d,1);break;case 2:case 9:if(Jp(d)){De=0,Jn=null,Gg(i);break}i=function(){De!==2&&De!==9||Ve!==e||(De=7),Ri(e)},d.then(i,i);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:Jp(d)?(De=0,Jn=null,Gg(i)):(De=0,Jn=null,ir(e,i,d,7));break;case 5:var M=null;switch(pe.tag){case 26:M=pe.memoizedState;case 5:case 27:var b=pe;if(!M||M_(M)){De=0,Jn=null;var I=b.sibling;if(I!==null)pe=I;else{var tt=b.return;tt!==null?(pe=tt,Yl(tt)):pe=null}break e}}De=0,Jn=null,ir(e,i,d,5);break;case 6:De=0,Jn=null,ir(e,i,d,6);break;case 8:Lf(),Ke=6;break t;default:throw Error(a(462))}}$x();break}catch(ht){Ig(e,ht)}while(!0);return ki=rs=null,P.H=l,P.A=u,Ce=s,pe!==null?0:(Ve=null,xe=0,pl(),Ke)}function $x(){for(;pe!==null&&!Sn();)Hg(pe)}function Hg(e){var i=dg(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,i===null?Yl(e):pe=i}function Gg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=og(s,i,i.pendingProps,i.type,void 0,xe);break;case 11:i=og(s,i,i.pendingProps,i.type.render,i.ref,xe);break;case 5:Zu(i);default:mg(s,i),i=pe=Vp(i,Qi),i=dg(s,i,Qi)}e.memoizedProps=e.pendingProps,i===null?Yl(e):pe=i}function ir(e,i,s,l){ki=rs=null,Zu(i),Zs=null,fo=0;var u=i.return;try{if(Vx(e,u,i,s,xe)){Ke=1,Bl(e,ii(s,e.current)),pe=null;return}}catch(d){if(u!==null)throw pe=u,d;Ke=1,Bl(e,ii(s,e.current)),pe=null;return}i.flags&32768?(Re||l===1?e=!0:Js||(xe&536870912)!==0?e=!1:(Aa=e=!0,(l===2||l===9||l===3||l===6)&&(l=oi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Vg(i,e)):Yl(i)}function Yl(e){var i=e;do{if((i.flags&32768)!==0){Vg(i,Aa);return}e=i.return;var s=Xx(i.alternate,i,Qi);if(s!==null){pe=s;return}if(i=i.sibling,i!==null){pe=i;return}pe=i=e}while(i!==null);Ke===0&&(Ke=5)}function Vg(e,i){do{var s=Wx(e.alternate,e);if(s!==null){s.flags&=32767,pe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){pe=e;return}pe=e=s}while(e!==null);Ke=6,pe=null}function kg(e,i,s,l,u,d,M,b,I){e.cancelPendingCommit=null;do Zl();while(bn!==0);if((Ce&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Eu,Pt(e,s,d,M,b,I),e===Ve&&(pe=Ve=null,xe=0),tr=i,Ca=e,er=s,Cf=d,Df=u,Ng=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,iy(N,function(){return Zg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,u=J.p,J.p=2,M=Ce,Ce|=4;try{qx(e,i,s)}finally{Ce=M,J.p=u,P.T=l}}bn=1,Xg(),Wg(),qg()}}function Xg(){if(bn===1){bn=0;var e=Ca,i=tr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var l=J.p;J.p=2;var u=Ce;Ce|=4;try{Ag(i,e);var d=qf,M=Lp(e.containerInfo),b=d.focusedElem,I=d.selectionRange;if(M!==b&&b&&b.ownerDocument&&Up(b.ownerDocument.documentElement,b)){if(I!==null&&vu(b)){var tt=I.start,ht=I.end;if(ht===void 0&&(ht=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(ht,b.value.length);else{var xt=b.ownerDocument||document,nt=xt&&xt.defaultView||window;if(nt.getSelection){var st=nt.getSelection(),te=b.textContent.length,jt=Math.min(I.start,te),Pe=I.end===void 0?jt:Math.min(I.end,te);!st.extend&&jt>Pe&&(M=Pe,Pe=jt,jt=M);var q=Dp(b,jt),X=Dp(b,Pe);if(q&&X&&(st.rangeCount!==1||st.anchorNode!==q.node||st.anchorOffset!==q.offset||st.focusNode!==X.node||st.focusOffset!==X.offset)){var $=xt.createRange();$.setStart(q.node,q.offset),st.removeAllRanges(),jt>Pe?(st.addRange($),st.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),st.addRange($))}}}}for(xt=[],st=b;st=st.parentNode;)st.nodeType===1&&xt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<xt.length;b++){var mt=xt[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}rc=!!Wf,qf=Wf=null}finally{Ce=u,J.p=l,P.T=s}}e.current=i,bn=2}}function Wg(){if(bn===2){bn=0;var e=Ca,i=tr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var l=J.p;J.p=2;var u=Ce;Ce|=4;try{Mg(e,i.alternate,i)}finally{Ce=u,J.p=l,P.T=s}}bn=3}}function qg(){if(bn===4||bn===3){bn=0,ae();var e=Ca,i=tr,s=er,l=Ng;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?bn=5:(bn=0,tr=Ca=null,Yg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(wa=null),tn(s),i=i.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(pt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=P.T,u=J.p,J.p=2,P.T=null;try{for(var d=e.onRecoverableError,M=0;M<l.length;M++){var b=l[M];d(b.value,{componentStack:b.stack})}}finally{P.T=i,J.p=u}}(er&3)!==0&&Zl(),Ri(e),u=e.pendingLanes,(s&4194090)!==0&&(u&42)!==0?e===Uf?So++:(So=0,Uf=e):So=0,Mo(0)}}function Yg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,to(i)))}function Zl(e){return Xg(),Wg(),qg(),Zg()}function Zg(){if(bn!==5)return!1;var e=Ca,i=Cf;Cf=0;var s=tn(er),l=P.T,u=J.p;try{J.p=32>s?32:s,P.T=null,s=Df,Df=null;var d=Ca,M=er;if(bn=0,tr=Ca=null,er=0,(Ce&6)!==0)throw Error(a(331));var b=Ce;if(Ce|=4,Ug(d.current),wg(d,d.current,M,s),Ce=b,Mo(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(pt,d)}catch{}return!0}finally{J.p=u,P.T=l,Yg(e,i)}}function jg(e,i,s){i=ii(s,i),i=cf(e.stateNode,i,2),e=xa(e,i,2),e!==null&&(vt(e,2),Ri(e))}function Fe(e,i,s){if(e.tag===3)jg(e,e,s);else for(;i!==null;){if(i.tag===3){jg(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))){e=ii(s,e),s=$m(2),l=xa(i,s,2),l!==null&&(tg(s,l,i,e),vt(l,2),Ri(l));break}}i=i.return}}function Pf(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new jx;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(bf=!0,u.add(s),e=ty.bind(null,e,i,s),i.then(e,e))}function ty(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ve===e&&(xe&s)===s&&(Ke===4||Ke===3&&(xe&62914560)===xe&&300>Jt()-wf?(Ce&2)===0&&nr(e,0):Af|=s,$s===xe&&($s=0)),Ri(e)}function Kg(e,i){i===0&&(i=Lt()),e=Bs(e,i),e!==null&&(vt(e,i),Ri(e))}function ey(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Kg(e,s)}function ny(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Kg(e,s)}function iy(e,i){return oe(e,i)}var jl=null,ar=null,zf=!1,Kl=!1,If=!1,ds=0;function Ri(e){e!==ar&&e.next===null&&(ar===null?jl=ar=e:ar=ar.next=e),Kl=!0,zf||(zf=!0,sy())}function Mo(e,i){if(!If&&Kl){If=!0;do for(var s=!1,l=jl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var M=l.suspendedLanes,b=l.pingedLanes;d=(1<<31-Rt(42|e)+1)-1,d&=u&~(M&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,t_(l,d))}else d=xe,d=ce(l,l===Ve?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ee(l,d)||(s=!0,t_(l,d));l=l.next}while(s);If=!1}}function ay(){Qg()}function Qg(){Kl=zf=!1;var e=0;ds!==0&&(dy()&&(e=ds),ds=0);for(var i=Jt(),s=null,l=jl;l!==null;){var u=l.next,d=Jg(l,i);d===0?(l.next=null,s===null?jl=u:s.next=u,u===null&&(ar=s)):(s=l,(e!==0||(d&3)!==0)&&(Kl=!0)),l=u}Mo(e)}function Jg(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Rt(d),b=1<<M,I=u[M];I===-1?((b&s)===0||(b&l)!==0)&&(u[M]=Le(b,i)):I<=i&&(e.expiredLanes|=b),d&=~b}if(i=Ve,s=xe,s=ce(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(De===2||De===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&H(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||ee(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&H(l),tn(s)){case 2:case 8:s=Vt;break;case 32:s=N;break;case 268435456:s=et;break;default:s=N}return l=$g.bind(null,e),s=oe(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&H(l),e.callbackPriority=2,e.callbackNode=null,2}function $g(e,i){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Zl()&&e.callbackNode!==s)return null;var l=xe;return l=ce(e,e===Ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Pg(e,l,i),Jg(e,Jt()),e.callbackNode!=null&&e.callbackNode===s?$g.bind(null,e):null)}function t_(e,i){if(Zl())return null;Pg(e,i,!0)}function sy(){my(function(){(Ce&6)!==0?oe(Ue,ay):Qg()})}function Bf(){return ds===0&&(ds=W()),ds}function e_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function n_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function ry(e,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var d=e_((u[Mn]||null).action),M=l.submitter;M&&(i=(i=M[Mn]||null)?e_(i.formAction):M.getAttribute("formAction"),i!==null&&(d=i,M=null));var b=new fl("action","action",null,l,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ds!==0){var I=M?n_(u,M):new FormData(u);af(s,{pending:!0,data:I,method:u.method,action:d},null,I)}}else typeof d=="function"&&(b.preventDefault(),I=M?n_(u,M):new FormData(u),af(s,{pending:!0,data:I,method:u.method,action:d},d,I))},currentTarget:u}]})}}for(var Ff=0;Ff<Mu.length;Ff++){var Hf=Mu[Ff],oy=Hf.toLowerCase(),ly=Hf[0].toUpperCase()+Hf.slice(1);di(oy,"on"+ly)}di(Pp,"onAnimationEnd"),di(zp,"onAnimationIteration"),di(Ip,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(bx,"onTransitionRun"),di(Ax,"onTransitionStart"),di(Rx,"onTransitionCancel"),di(Bp,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function i_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],u=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var M=l.length-1;0<=M;M--){var b=l[M],I=b.instance,tt=b.currentTarget;if(b=b.listener,I!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=tt;try{d(u)}catch(ht){Il(ht)}u.currentTarget=null,d=I}else for(M=0;M<l.length;M++){if(b=l[M],I=b.instance,tt=b.currentTarget,b=b.listener,I!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=tt;try{d(u)}catch(ht){Il(ht)}u.currentTarget=null,d=I}}}}function me(e,i){var s=i[ja];s===void 0&&(s=i[ja]=new Set);var l=e+"__bubble";s.has(l)||(a_(i,e,2,!1),s.add(l))}function Gf(e,i,s){var l=0;i&&(l|=4),a_(s,e,l,i)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Vf(e){if(!e[Ql]){e[Ql]=!0,sl.forEach(function(s){s!=="selectionchange"&&(cy.has(s)||Gf(s,!1,e),Gf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Ql]||(i[Ql]=!0,Gf("selectionchange",!1,i))}}function a_(e,i,s,l){switch(w_(i)){case 2:var u=zy;break;case 8:u=Iy;break;default:u=nh}s=u.bind(null,i,s,e),u=void 0,!cu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function kf(e,i,s,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var b=l.stateNode.containerInfo;if(b===u)break;if(M===4)for(M=l.return;M!==null;){var I=M.tag;if((I===3||I===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;b!==null;){if(M=Oi(b),M===null)return;if(I=M.tag,I===5||I===6||I===26||I===27){l=d=M;continue t}b=b.parentNode}}l=l.return}fp(function(){var tt=d,ht=ou(s),xt=[];t:{var nt=Fp.get(e);if(nt!==void 0){var st=fl,te=e;switch(e){case"keypress":if(cl(s)===0)break t;case"keydown":case"keyup":st=ix;break;case"focusin":te="focus",st=du;break;case"focusout":te="blur",st=du;break;case"beforeblur":case"afterblur":st=du;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=rx;break;case Pp:case zp:case Ip:st=Zv;break;case Bp:st=lx;break;case"scroll":case"scrollend":st=kv;break;case"wheel":st=ux;break;case"copy":case"cut":case"paste":st=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=gp;break;case"toggle":case"beforetoggle":st=hx}var jt=(i&4)!==0,Pe=!jt&&(e==="scroll"||e==="scrollend"),q=jt?nt!==null?nt+"Capture":null:nt;jt=[];for(var X=tt,$;X!==null;){var mt=X;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||q===null||(mt=Gr(X,q),mt!=null&&jt.push(To(X,mt,$))),Pe)break;X=X.return}0<jt.length&&(nt=new st(nt,te,null,s,ht),xt.push({event:nt,listeners:jt}))}}if((i&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",nt&&s!==ru&&(te=s.relatedTarget||s.fromElement)&&(Oi(te)||te[Bn]))break t;if((st||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,st?(te=s.relatedTarget||s.toElement,st=tt,te=te?Oi(te):null,te!==null&&(Pe=c(te),jt=te.tag,te!==Pe||jt!==5&&jt!==27&&jt!==6)&&(te=null)):(st=null,te=tt),st!==te)){if(jt=pp,mt="onMouseLeave",q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(jt=gp,mt="onPointerLeave",q="onPointerEnter",X="pointer"),Pe=st==null?nt:Qa(st),$=te==null?nt:Qa(te),nt=new jt(mt,X+"leave",st,s,ht),nt.target=Pe,nt.relatedTarget=$,mt=null,Oi(ht)===tt&&(jt=new jt(q,X+"enter",te,s,ht),jt.target=$,jt.relatedTarget=Pe,mt=jt),Pe=mt,st&&te)e:{for(jt=st,q=te,X=0,$=jt;$;$=sr($))X++;for($=0,mt=q;mt;mt=sr(mt))$++;for(;0<X-$;)jt=sr(jt),X--;for(;0<$-X;)q=sr(q),$--;for(;X--;){if(jt===q||q!==null&&jt===q.alternate)break e;jt=sr(jt),q=sr(q)}jt=null}else jt=null;st!==null&&s_(xt,nt,st,jt,!1),te!==null&&Pe!==null&&s_(xt,Pe,te,jt,!0)}}t:{if(nt=tt?Qa(tt):window,st=nt.nodeName&&nt.nodeName.toLowerCase(),st==="select"||st==="input"&&nt.type==="file")var Ht=Tp;else if(Mp(nt))if(bp)Ht=Mx;else{Ht=yx;var he=xx}else st=nt.nodeName,!st||st.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&su(tt.elementType)&&(Ht=Tp):Ht=Sx;if(Ht&&(Ht=Ht(e,tt))){Ep(xt,Ht,s,ht);break t}he&&he(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&Dn(nt,"number",nt.value)}switch(he=tt?Qa(tt):window,e){case"focusin":(Mp(he)||he.contentEditable==="true")&&(Ps=he,xu=tt,jr=null);break;case"focusout":jr=xu=Ps=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Np(xt,s,ht);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":Np(xt,s,ht)}var kt;if(mu)t:{switch(e){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else Os?yp(e,s)&&(Qt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Qt="onCompositionStart");Qt&&(_p&&s.locale!=="ko"&&(Os||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&Os&&(kt=hp()):(ma=ht,uu="value"in ma?ma.value:ma.textContent,Os=!0)),he=Jl(tt,Qt),0<he.length&&(Qt=new mp(Qt,e,null,s,ht),xt.push({event:Qt,listeners:he}),kt?Qt.data=kt:(kt=Sp(s),kt!==null&&(Qt.data=kt)))),(kt=px?mx(e,s):gx(e,s))&&(Qt=Jl(tt,"onBeforeInput"),0<Qt.length&&(he=new mp("onBeforeInput","beforeinput",null,s,ht),xt.push({event:he,listeners:Qt}),he.data=kt)),ry(xt,e,tt,s,ht)}i_(xt,i)})}function To(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Jl(e,i){for(var s=i+"Capture",l=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Gr(e,s),u!=null&&l.unshift(To(e,u,d)),u=Gr(e,i),u!=null&&l.push(To(e,u,d))),e.tag===3)return l;e=e.return}return[]}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function s_(e,i,s,l,u){for(var d=i._reactName,M=[];s!==null&&s!==l;){var b=s,I=b.alternate,tt=b.stateNode;if(b=b.tag,I!==null&&I===l)break;b!==5&&b!==26&&b!==27||tt===null||(I=tt,u?(tt=Gr(s,d),tt!=null&&M.unshift(To(s,tt,I))):u||(tt=Gr(s,d),tt!=null&&M.push(To(s,tt,I)))),s=s.return}M.length!==0&&e.push({event:i,listeners:M})}var uy=/\r\n?/g,fy=/\u0000|\uFFFD/g;function r_(e){return(typeof e=="string"?e:""+e).replace(uy,`
`).replace(fy,"")}function o_(e,i){return i=r_(i),r_(e)===i}function $l(){}function Oe(e,i,s,l,u,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mi(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mi(e,""+l);break;case"className":wt(e,"class",l);break;case"tabIndex":wt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(e,s,l);break;case"style":cp(e,l,d);break;case"data":if(i!=="object"){wt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=ol(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Oe(e,i,"name",u.name,u,null),Oe(e,i,"formEncType",u.formEncType,u,null),Oe(e,i,"formMethod",u.formMethod,u,null),Oe(e,i,"formTarget",u.formTarget,u,null)):(Oe(e,i,"encType",u.encType,u,null),Oe(e,i,"method",u.method,u,null),Oe(e,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=ol(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=$l);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=ol(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":me("beforetoggle",e),me("toggle",e),Et(e,"popover",l);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Et(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Gv.get(s)||s,Et(e,s,l))}}function Xf(e,i,s,l,u,d){switch(s){case"style":cp(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Mi(e,l):(typeof l=="number"||typeof l=="bigint")&&Mi(e,""+l);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=$l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=e[Mn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,u);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Et(e,s,l)}}}function An(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var l=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var M=s[d];if(M!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Oe(e,i,d,M,s,null)}}u&&Oe(e,i,"srcSet",s.srcSet,s,null),l&&Oe(e,i,"src",s.src,s,null);return;case"input":me("invalid",e);var b=d=M=u=null,I=null,tt=null;for(l in s)if(s.hasOwnProperty(l)){var ht=s[l];if(ht!=null)switch(l){case"name":u=ht;break;case"type":M=ht;break;case"checked":I=ht;break;case"defaultChecked":tt=ht;break;case"value":d=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:Oe(e,i,l,ht,s,null)}}Be(e,d,b,I,tt,M,u,!1),Ze(e);return;case"select":me("invalid",e),l=M=d=null;for(u in s)if(s.hasOwnProperty(u)&&(b=s[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":M=b;break;case"multiple":l=b;default:Oe(e,i,u,b,s,null)}i=d,s=M,e.multiple=!!l,i!=null?on(e,!!l,i,!1):s!=null&&on(e,!!l,s,!0);return;case"textarea":me("invalid",e),d=u=l=null;for(M in s)if(s.hasOwnProperty(M)&&(b=s[M],b!=null))switch(M){case"value":l=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Oe(e,i,M,b,s,null)}En(e,l,u,d),Ze(e);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(l=s[I],l!=null))switch(I){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Oe(e,i,I,l,s,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(l=0;l<Eo.length;l++)me(Eo[l],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in s)if(s.hasOwnProperty(tt)&&(l=s[tt],l!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Oe(e,i,tt,l,s,null)}return;default:if(su(i)){for(ht in s)s.hasOwnProperty(ht)&&(l=s[ht],l!==void 0&&Xf(e,i,ht,l,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(l=s[b],l!=null&&Oe(e,i,b,l,s,null))}function hy(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,b=null,I=null,tt=null,ht=null;for(st in s){var xt=s[st];if(s.hasOwnProperty(st)&&xt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=xt;default:l.hasOwnProperty(st)||Oe(e,i,st,null,l,xt)}}for(var nt in l){var st=l[nt];if(xt=s[nt],l.hasOwnProperty(nt)&&(st!=null||xt!=null))switch(nt){case"type":d=st;break;case"name":u=st;break;case"checked":tt=st;break;case"defaultChecked":ht=st;break;case"value":M=st;break;case"defaultValue":b=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:st!==xt&&Oe(e,i,nt,st,l,xt)}}Ii(e,M,b,I,tt,ht,d,u);return;case"select":st=M=b=nt=null;for(d in s)if(I=s[d],s.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":st=I;default:l.hasOwnProperty(d)||Oe(e,i,d,null,l,I)}for(u in l)if(d=l[u],I=s[u],l.hasOwnProperty(u)&&(d!=null||I!=null))switch(u){case"value":nt=d;break;case"defaultValue":b=d;break;case"multiple":M=d;default:d!==I&&Oe(e,i,u,d,l,I)}i=b,s=M,l=st,nt!=null?on(e,!!s,nt,!1):!!l!=!!s&&(i!=null?on(e,!!s,i,!0):on(e,!!s,s?[]:"",!1));return;case"textarea":st=nt=null;for(b in s)if(u=s[b],s.hasOwnProperty(b)&&u!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(e,i,b,null,l,u)}for(M in l)if(u=l[M],d=s[M],l.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":nt=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&Oe(e,i,M,u,l,d)}pn(e,nt,st);return;case"option":for(var te in s)if(nt=s[te],s.hasOwnProperty(te)&&nt!=null&&!l.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Oe(e,i,te,null,l,nt)}for(I in l)if(nt=l[I],st=s[I],l.hasOwnProperty(I)&&nt!==st&&(nt!=null||st!=null))switch(I){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Oe(e,i,I,nt,l,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in s)nt=s[jt],s.hasOwnProperty(jt)&&nt!=null&&!l.hasOwnProperty(jt)&&Oe(e,i,jt,null,l,nt);for(tt in l)if(nt=l[tt],st=s[tt],l.hasOwnProperty(tt)&&nt!==st&&(nt!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(a(137,i));break;default:Oe(e,i,tt,nt,l,st)}return;default:if(su(i)){for(var Pe in s)nt=s[Pe],s.hasOwnProperty(Pe)&&nt!==void 0&&!l.hasOwnProperty(Pe)&&Xf(e,i,Pe,void 0,l,nt);for(ht in l)nt=l[ht],st=s[ht],!l.hasOwnProperty(ht)||nt===st||nt===void 0&&st===void 0||Xf(e,i,ht,nt,l,st);return}}for(var q in s)nt=s[q],s.hasOwnProperty(q)&&nt!=null&&!l.hasOwnProperty(q)&&Oe(e,i,q,null,l,nt);for(xt in l)nt=l[xt],st=s[xt],!l.hasOwnProperty(xt)||nt===st||nt==null&&st==null||Oe(e,i,xt,nt,l,st)}var Wf=null,qf=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function l_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Yf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Zf=null;function dy(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var u_=typeof setTimeout=="function"?setTimeout:void 0,py=typeof clearTimeout=="function"?clearTimeout:void 0,f_=typeof Promise=="function"?Promise:void 0,my=typeof queueMicrotask=="function"?queueMicrotask:typeof f_<"u"?function(e){return f_.resolve(null).then(e).catch(gy)}:u_;function gy(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function h_(e,i){var s=i,l=0,u=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<l&&8>l){s=l;var M=e.ownerDocument;if(s&1&&bo(M.documentElement),s&2&&bo(M.body),s&4)for(s=M.head,bo(s),M=s.firstChild;M;){var b=M.nextSibling,I=M.nodeName;M[fa]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=b}}if(u===0){e.removeChild(d),No(i);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:l=s.charCodeAt(0)-48;else l=0;s=d}while(s);No(i)}function jf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":jf(s),ha(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function _y(e,i,s,l){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[fa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function vy(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=mi(e.nextSibling),e===null))return null;return e}function Kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function xy(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function mi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Qf=null;function d_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function p_(e,i,s){switch(i=tc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function bo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ha(e)}var ci=new Map,m_=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=J.d;J.d={f:yy,r:Sy,D:My,C:Ey,L:Ty,m:by,X:Ry,S:Ay,M:wy};function yy(){var e=Ji.f(),i=ql();return e||i}function Sy(e){var i=Pi(e);i!==null&&i.tag===5&&i.type==="form"?Pm(i):Ji.r(e)}var rr=typeof document>"u"?null:document;function g_(e,i,s){var l=rr;if(l&&typeof i=="string"&&i){var u=Ge(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),m_.has(u)||(m_.add(u),e={rel:e,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),An(i,"link",e),en(i),l.head.appendChild(i)))}}function My(e){Ji.D(e),g_("dns-prefetch",e,null)}function Ey(e,i){Ji.C(e,i),g_("preconnect",e,i)}function Ty(e,i,s){Ji.L(e,i,s);var l=rr;if(l&&e&&i){var u='link[rel="preload"][as="'+Ge(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Ge(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Ge(s.imageSizes)+'"]')):u+='[href="'+Ge(e)+'"]';var d=u;switch(i){case"style":d=or(e);break;case"script":d=lr(e)}ci.has(d)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),ci.set(d,e),l.querySelector(u)!==null||i==="style"&&l.querySelector(Ao(d))||i==="script"&&l.querySelector(Ro(d))||(i=l.createElement("link"),An(i,"link",e),en(i),l.head.appendChild(i)))}}function by(e,i){Ji.m(e,i);var s=rr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Ge(l)+'"][href="'+Ge(e)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=lr(e)}if(!ci.has(d)&&(e=g({rel:"modulepreload",href:e},i),ci.set(d,e),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Ro(d)))return}l=s.createElement("link"),An(l,"link",e),en(l),s.head.appendChild(l)}}}function Ay(e,i,s){Ji.S(e,i,s);var l=rr;if(l&&e){var u=da(l).hoistableStyles,d=or(e);i=i||"default";var M=u.get(d);if(!M){var b={loading:0,preload:null};if(M=l.querySelector(Ao(d)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=ci.get(d))&&Jf(e,s);var I=M=l.createElement("link");en(I),An(I,"link",e),I._p=new Promise(function(tt,ht){I.onload=tt,I.onerror=ht}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,nc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:b},u.set(d,M)}}}function Ry(e,i){Ji.X(e,i);var s=rr;if(s&&e){var l=da(s).hoistableScripts,u=lr(e),d=l.get(u);d||(d=s.querySelector(Ro(u)),d||(e=g({src:e,async:!0},i),(i=ci.get(u))&&$f(e,i),d=s.createElement("script"),en(d),An(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function wy(e,i){Ji.M(e,i);var s=rr;if(s&&e){var l=da(s).hoistableScripts,u=lr(e),d=l.get(u);d||(d=s.querySelector(Ro(u)),d||(e=g({src:e,async:!0,type:"module"},i),(i=ci.get(u))&&$f(e,i),d=s.createElement("script"),en(d),An(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function __(e,i,s,l){var u=(u=dt.current)?ec(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=or(s.href),s=da(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=or(s.href);var d=da(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(Ao(e)))&&!d._p&&(M.instance=d,M.state.loading=5),ci.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ci.set(e,s),d||Cy(u,e,s,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=lr(s),s=da(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function or(e){return'href="'+Ge(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function v_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Cy(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),An(i,"link",s),en(i),e.head.appendChild(i))}function lr(e){return'[src="'+Ge(e)+'"]'}function Ro(e){return"script[async]"+e}function x_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Ge(s.href)+'"]');if(l)return i.instance=l,en(l),l;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),en(l),An(l,"style",u),nc(l,s.precedence,e),i.instance=l;case"stylesheet":u=or(s.href);var d=e.querySelector(Ao(u));if(d)return i.state.loading|=4,i.instance=d,en(d),d;l=v_(s),(u=ci.get(u))&&Jf(l,u),d=(e.ownerDocument||e).createElement("link"),en(d);var M=d;return M._p=new Promise(function(b,I){M.onload=b,M.onerror=I}),An(d,"link",l),i.state.loading|=4,nc(d,s.precedence,e),i.instance=d;case"script":return d=lr(s.src),(u=e.querySelector(Ro(d)))?(i.instance=u,en(u),u):(l=s,(u=ci.get(d))&&(l=g({},s),$f(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),en(u),An(u,"link",l),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,nc(l,s.precedence,e));return i.instance}function nc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,M=0;M<l.length;M++){var b=l[M];if(b.dataset.precedence===i)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Jf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function $f(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var ic=null;function y_(e,i,s){if(ic===null){var l=new Map,u=ic=new Map;u.set(s,l)}else u=ic,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var d=s[u];if(!(d[fa]||d[rn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(i)||"";M=e+M;var b=l.get(M);b?b.push(d):l.set(M,[d])}}return l}function S_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Dy(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function M_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var wo=null;function Uy(){}function Ly(e,i,s){if(wo===null)throw Error(a(475));var l=wo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=or(s.href),d=e.querySelector(Ao(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=ac.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,en(d);return}d=e.ownerDocument||e,s=v_(s),(u=ci.get(u))&&Jf(s,u),d=d.createElement("link"),en(d);var M=d;M._p=new Promise(function(b,I){M.onload=b,M.onerror=I}),An(d,"link",s),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=ac.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function Ny(){if(wo===null)throw Error(a(475));var e=wo;return e.stylesheets&&e.count===0&&th(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&th(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function ac(){if(this.count--,this.count===0){if(this.stylesheets)th(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function th(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,i.forEach(Oy,e),sc=null,ac.call(e))}function Oy(e,i){if(!(i.state.loading&4)){var s=sc.get(e);if(s)var l=s.get(null);else{s=new Map,sc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}u=i.instance,M=u.getAttribute("data-precedence"),d=s.get(M)||l,d===l&&s.set(null,u),s.set(M,u),this.count++,l=ac.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Co={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Py(e,i,s,l,u,d,M,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lt(0),this.hiddenUpdates=lt(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function E_(e,i,s,l,u,d,M,b,I,tt,ht,xt){return e=new Py(e,i,s,M,b,I,tt,xt),i=1,d===!0&&(i|=24),d=jn(3,null,null,i),e.current=d,d.stateNode=e,i=Ou(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},Bu(d),e}function T_(e){return e?(e=Fs,e):Fs}function b_(e,i,s,l,u,d){u=T_(u),l.context===null?l.context=u:l.pendingContext=u,l=va(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=xa(e,l,i),s!==null&&(ti(s,e,i),ao(s,e,i))}function A_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function eh(e,i){A_(e,i),(e=e.alternate)&&A_(e,i)}function R_(e){if(e.tag===13){var i=Bs(e,67108864);i!==null&&ti(i,e,67108864),eh(e,67108864)}}var rc=!0;function zy(e,i,s,l){var u=P.T;P.T=null;var d=J.p;try{J.p=2,nh(e,i,s,l)}finally{J.p=d,P.T=u}}function Iy(e,i,s,l){var u=P.T;P.T=null;var d=J.p;try{J.p=8,nh(e,i,s,l)}finally{J.p=d,P.T=u}}function nh(e,i,s,l){if(rc){var u=ih(l);if(u===null)kf(e,i,l,oc,s),C_(e,l);else if(Fy(u,e,i,s,l))l.stopPropagation();else if(C_(e,l),i&4&&-1<By.indexOf(e)){for(;u!==null;){var d=Pi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Ot(d.pendingLanes);if(M!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var I=1<<31-Rt(M);b.entanglements[1]|=I,M&=~I}Ri(d),(Ce&6)===0&&(Xl=Jt()+500,Mo(0))}}break;case 13:b=Bs(d,2),b!==null&&ti(b,d,2),ql(),eh(d,2)}if(d=ih(l),d===null&&kf(e,i,l,oc,s),d===u)break;u=d}u!==null&&l.stopPropagation()}else kf(e,i,l,null,s)}}function ih(e){return e=ou(e),ah(e)}var oc=null;function ah(e){if(oc=null,e=Oi(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return oc=e,null}function w_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case Ue:return 2;case Vt:return 8;case N:case A:return 32;case et:return 268435456;default:return 32}default:return 32}}var sh=!1,La=null,Na=null,Oa=null,Do=new Map,Uo=new Map,Pa=[],By="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C_(e,i){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Do.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(i.pointerId)}}function Lo(e,i,s,l,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=Pi(i),i!==null&&R_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function Fy(e,i,s,l,u){switch(i){case"focusin":return La=Lo(La,e,i,s,l,u),!0;case"dragenter":return Na=Lo(Na,e,i,s,l,u),!0;case"mouseover":return Oa=Lo(Oa,e,i,s,l,u),!0;case"pointerover":var d=u.pointerId;return Do.set(d,Lo(Do.get(d)||null,e,i,s,l,u)),!0;case"gotpointercapture":return d=u.pointerId,Uo.set(d,Lo(Uo.get(d)||null,e,i,s,l,u)),!0}return!1}function D_(e){var i=Oi(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,Yn(e.priority,function(){if(s.tag===13){var l=$n();l=He(l);var u=Bs(s,l);u!==null&&ti(u,s,l),eh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=ih(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);ru=l,s.target.dispatchEvent(l),ru=null}else return i=Pi(s),i!==null&&R_(i),e.blockedOn=s,!1;i.shift()}return!0}function U_(e,i,s){lc(e)&&s.delete(i)}function Hy(){sh=!1,La!==null&&lc(La)&&(La=null),Na!==null&&lc(Na)&&(Na=null),Oa!==null&&lc(Oa)&&(Oa=null),Do.forEach(U_),Uo.forEach(U_)}function cc(e,i){e.blockedOn===i&&(e.blockedOn=null,sh||(sh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Hy)))}var uc=null;function L_(e){uc!==e&&(uc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){uc===e&&(uc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],u=e[i+2];if(typeof l!="function"){if(ah(l||s)===null)continue;break}var d=Pi(s);d!==null&&(e.splice(i,3),i-=3,af(d,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function No(e){function i(I){return cc(I,e)}La!==null&&cc(La,e),Na!==null&&cc(Na,e),Oa!==null&&cc(Oa,e),Do.forEach(i),Uo.forEach(i);for(var s=0;s<Pa.length;s++){var l=Pa[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Pa.length&&(s=Pa[0],s.blockedOn===null);)D_(s),s.blockedOn===null&&Pa.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],d=s[l+1],M=u[Mn]||null;if(typeof d=="function")M||L_(s);else if(M){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[Mn]||null)b=M.formAction;else if(ah(u)!==null)continue}else b=M.action;typeof b=="function"?s[l+1]=b:(s.splice(l,3),l-=3),L_(s)}}}function rh(e){this._internalRoot=e}fc.prototype.render=rh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=$n();b_(s,l,e,i,null,null)},fc.prototype.unmount=rh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;b_(e.current,2,null,e,null,null),ql(),i[Bn]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Me();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Pa.length&&i!==0&&i<Pa[s].priority;s++);Pa.splice(s,0,e),s===0&&D_(e)}};var N_=t.version;if(N_!=="19.1.0")throw Error(a(527,N_,"19.1.0"));J.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Gy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{pt=hc.inject(Gy),zt=hc}catch{}}return Po.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",u=jm,d=Km,M=Qm,b=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=E_(e,1,!1,null,null,s,l,u,d,M,b,null),e[Bn]=i.current,Vf(e),new rh(i)},Po.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,u="",d=jm,M=Km,b=Qm,I=null,tt=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks),s.formState!==void 0&&(tt=s.formState)),i=E_(e,1,!0,i,s??null,l,u,d,M,b,I,tt),i.context=T_(null),s=i.current,l=$n(),l=He(l),u=va(l),u.callback=null,xa(s,u,l),s=l,i.current.lanes=s,vt(i,s),Ri(i),e[Bn]=i.current,Vf(e),new fc(i)},Po.version="19.1.0",Po}var k_;function Jy(){if(k_)return ch.exports;k_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ch.exports=Qy(),ch.exports}var $y=Jy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="175",Ar={ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tS=0,X_=1,eS=2,J0=1,nS=2,sa=3,Ya=0,Wn=1,ra=2,Wa=0,Rr=1,W_=2,q_=3,Y_=4,iS=5,Ms=100,aS=101,sS=102,rS=103,oS=104,lS=200,cS=201,uS=202,fS=203,jh=204,Kh=205,hS=206,dS=207,pS=208,mS=209,gS=210,_S=211,vS=212,xS=213,yS=214,Qh=0,Jh=1,$h=2,Dr=3,td=4,ed=5,nd=6,id=7,$0=0,SS=1,MS=2,qa=0,ES=1,TS=2,bS=3,AS=4,RS=5,wS=6,CS=7,tv=300,Ur=301,Lr=302,ad=303,sd=304,nu=306,rd=1e3,Ts=1001,od=1002,Si=1003,DS=1004,dc=1005,Ci=1006,dh=1007,bs=1008,ua=1009,ev=1010,nv=1011,Zo=1012,kd=1013,Rs=1014,oa=1015,el=1016,Xd=1017,Wd=1018,jo=1020,iv=35902,av=1021,sv=1022,yi=1023,rv=1024,ov=1025,Ko=1026,Qo=1027,lv=1028,qd=1029,cv=1030,Yd=1031,Zd=1033,Gc=33776,Vc=33777,kc=33778,Xc=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37808,gd=37809,_d=37810,vd=37811,xd=37812,yd=37813,Sd=37814,Md=37815,Ed=37816,Td=37817,bd=37818,Ad=37819,Rd=37820,wd=37821,Wc=36492,Cd=36494,Dd=36495,uv=36283,Ud=36284,Ld=36285,Nd=36286,US=3200,LS=3201,fv=0,NS=1,Xa="",fi="srgb",Nr="srgb-linear",jc="linear",ze="srgb",cr=7680,Z_=519,OS=512,PS=513,zS=514,hv=515,IS=516,BS=517,FS=518,HS=519,j_=35044,K_="300 es",la=2e3,Kc=2001;class Us{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=Math.PI/180,Od=180/Math.PI;function Ir(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]).toLowerCase()}function fe(r,t,n){return Math.max(t,Math.min(n,r))}function GS(r,t){return(r%t+t)%t}function ph(r,t,n){return(1-n)*r+n*t}function zo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const VS={DEG2RAD:qc};class Bt{constructor(t=0,n=0){Bt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(fe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(fe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*o+t.x,this.y=c*o+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,n,a,o,c,f,h,m,p){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,p)}set(t,n,a,o,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[3],m=a[6],p=a[1],g=a[4],_=a[7],x=a[2],y=a[5],E=a[8],T=o[0],S=o[3],v=o[6],O=o[1],D=o[4],R=o[7],F=o[2],B=o[5],z=o[8];return c[0]=f*T+h*O+m*F,c[3]=f*S+h*D+m*B,c[6]=f*v+h*R+m*z,c[1]=p*T+g*O+_*F,c[4]=p*S+g*D+_*B,c[7]=p*v+g*R+_*z,c[2]=x*T+y*O+E*F,c[5]=x*S+y*D+E*B,c[8]=x*v+y*R+E*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return n*f*g-n*h*p-a*c*g+a*h*m+o*c*p-o*f*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*f-h*p,x=h*m-g*c,y=p*c-f*m,E=n*_+a*x+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(o*p-g*a)*T,t[2]=(h*a-o*f)*T,t[3]=x*T,t[4]=(g*n-o*m)*T,t[5]=(o*c-h*n)*T,t[6]=y*T,t[7]=(a*m-p*n)*T,t[8]=(f*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*h)+f+t,-o*p,o*m,-o*(-p*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(mh.makeScale(t,n)),this}rotate(t){return this.premultiply(mh.makeRotation(-t)),this}translate(t,n){return this.premultiply(mh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new re;function dv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kS(){const r=Qc("canvas");return r.style.display="block",r}const Q_={};function Yc(r){r in Q_||(Q_[r]=!0,console.warn(r))}function XS(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function WS(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qS(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const J_=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$_=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YS(){const r={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ze&&(o.r=ca(o.r),o.g=ca(o.g),o.b=ca(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(o.r=wr(o.r),o.g=wr(o.g),o.b=wr(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Xa?jc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Nr]:{primaries:t,whitePoint:a,transfer:jc,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:a,transfer:ze,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),r}const be=YS();function ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ur;class ZS{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{ur===void 0&&(ur=Qc("canvas")),ur.width=t.width,ur.height=t.height;const o=ur.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=ur}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Qc("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=ca(c[f]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ca(n[a]/255)*255):n[a]=ca(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jS=0;class jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Ir(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(gh(o[f].image)):c.push(gh(o[f]))}else c=gh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function gh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ZS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KS=0;class qn extends Us{constructor(t=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,a=Ts,o=Ts,c=Ci,f=bs,h=yi,m=ua,p=qn.DEFAULT_ANISOTROPY,g=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Ir(),this.name="",this.source=new jd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rd:t.x=t.x-Math.floor(t.x);break;case Ts:t.x=t.x<0?0:1;break;case od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rd:t.y=t.y-Math.floor(t.y);break;case Ts:t.y=t.y<0?0:1;break;case od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=tv;qn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,n=0,a=0,o=1){Qe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],E=m[9],T=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,R=(y+1)/2,F=(v+1)/2,B=(g+x)/4,z=(_+T)/4,k=(E+S)/4;return D>R&&D>F?D<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(D),o=B/a,c=z/a):R>F?R<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),a=B/o,c=k/o):F<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),a=z/c,o=k/c),this.set(a,o,c,n),this}let O=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(_-T)/O,this.z=(x-g)/O,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this.z=fe(this.z,t.z,n.z),this.w=fe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this.z=fe(this.z,t,n),this.w=fe(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(fe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QS extends Us{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Qe(0,0,t,n),this.scissorTest=!1,this.viewport=new Qe(0,0,t,n);const o={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new qn(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new jd(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends QS{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class pv extends qn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Si,this.minFilter=Si,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class JS extends qn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Si,this.minFilter=Si,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,f,h){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3];const x=c[f+0],y=c[f+1],E=c[f+2],T=c[f+3];if(h===0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=x,t[n+1]=y,t[n+2]=E,t[n+3]=T;return}if(_!==T||m!==x||p!==y||g!==E){let S=1-h;const v=m*x+p*y+g*E+_*T,O=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const F=Math.sqrt(D),B=Math.atan2(F,v*O);S=Math.sin(S*B)/F,h=Math.sin(h*B)/F}const R=h*O;if(m=m*S+x*R,p=p*S+y*R,g=g*S+E*R,_=_*S+T*R,S===1-h){const F=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=F,p*=F,g*=F,_*=F}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,c,f){const h=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=c[f],x=c[f+1],y=c[f+2],E=c[f+3];return t[n]=h*E+g*_+m*y-p*x,t[n+1]=m*E+g*x+p*_-h*y,t[n+2]=p*E+g*y+h*x-m*_,t[n+3]=g*E-h*_-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(a/2),g=h(o/2),_=h(c/2),x=m(a/2),y=m(o/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*_+p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_-x*y*E;break;case"YXZ":this._x=x*g*_+p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_+x*y*E;break;case"ZXY":this._x=x*g*_-p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_-x*y*E;break;case"ZYX":this._x=x*g*_-p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_+x*y*E;break;case"YZX":this._x=x*g*_+p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_-x*y*E;break;case"XZY":this._x=x*g*_-p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],g=n[6],_=n[10],x=a+h+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-o)*y}else if(a>h&&a>_){const y=2*Math.sqrt(1+a-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+f)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-a-_);this._w=(c-p)/y,this._x=(o+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-a-h);this._w=(f-o)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,f=t._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+f*h+o*p-c*m,this._y=o*g+f*m+c*h-a*p,this._z=c*g+f*p+a*m-o*h,this._w=f*g-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,f=this._w;let h=f*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=o,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*a+n*this._x,this._y=y*o+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),_=Math.sin((1-n)*g)/p,x=Math.sin(n*g)/p;return this._w=f*_+this._w*x,this._x=a*_+this._x*x,this._y=o*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,n=0,a=0){V.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(t0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(t0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,f=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*o-h*a),g=2*(h*n-c*o),_=2*(c*a-f*n);return this.x=n+m*p+f*_-h*g,this.y=a+m*g+h*p-c*_,this.z=o+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this.z=fe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this.z=fe(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(fe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*f-a*m,this.z=a*h-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(fe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new V,t0=new Cs;class nl{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(gi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(gi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=gi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,gi):gi.fromBufferAttribute(c,f),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),pc.copy(a.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),mc.subVectors(this.max,Io),fr.subVectors(t.a,Io),hr.subVectors(t.b,Io),dr.subVectors(t.c,Io),Ia.subVectors(hr,fr),Ba.subVectors(dr,hr),ps.subVectors(fr,dr);let n=[0,-Ia.z,Ia.y,0,-Ba.z,Ba.y,0,-ps.z,ps.y,Ia.z,0,-Ia.x,Ba.z,0,-Ba.x,ps.z,0,-ps.x,-Ia.y,Ia.x,0,-Ba.y,Ba.x,0,-ps.y,ps.x,0];return!vh(n,fr,hr,dr,mc)||(n=[1,0,0,0,1,0,0,0,1],!vh(n,fr,hr,dr,mc))?!1:(gc.crossVectors(Ia,Ba),n=[gc.x,gc.y,gc.z],vh(n,fr,hr,dr,mc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new V,new V,new V,new V,new V,new V,new V,new V],gi=new V,pc=new nl,fr=new V,hr=new V,dr=new V,Ia=new V,Ba=new V,ps=new V,Io=new V,mc=new V,gc=new V,ms=new V;function vh(r,t,n,a,o){for(let c=0,f=r.length-3;c<=f;c+=3){ms.fromArray(r,c);const h=o.x*Math.abs(ms.x)+o.y*Math.abs(ms.y)+o.z*Math.abs(ms.z),m=t.dot(ms),p=n.dot(ms),g=a.dot(ms);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const $S=new nl,Bo=new V,xh=new V;class iu{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):$S.setFromPoints(t).getCenter(a);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const n=Bo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Bo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(xh)),this.expandByPoint(Bo.copy(t.center).sub(xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new V,yh=new V,_c=new V,Fa=new V,Sh=new V,vc=new V,Mh=new V;class Kd{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ta.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,n),ta.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){yh.copy(t).add(n).multiplyScalar(.5),_c.copy(n).sub(t).normalize(),Fa.copy(this.origin).sub(yh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(_c),h=Fa.dot(this.direction),m=-Fa.dot(_c),p=Fa.lengthSq(),g=Math.abs(1-f*f);let _,x,y,E;if(g>0)if(_=f*m-h,x=f*h-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const T=1/g;_*=T,x*=T,y=_*(_+f*x+2*h)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(yh).addScaledVector(_c,x),y}intersectSphere(t,n){ta.subVectors(t.center,this.origin);const a=ta.dot(this.direction),o=ta.dot(ta)-a*a,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(a=(t.min.x-x.x)*p,o=(t.max.x-x.x)*p):(a=(t.max.x-x.x)*p,o=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),a>f||c>o||((c>a||isNaN(a))&&(a=c),(f<o||isNaN(o))&&(o=f),_>=0?(h=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,n,a,o,c){Sh.subVectors(n,t),vc.subVectors(a,t),Mh.crossVectors(Sh,vc);let f=this.direction.dot(Mh),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Fa.subVectors(this.origin,t);const m=h*this.direction.dot(vc.crossVectors(Fa,vc));if(m<0)return null;const p=h*this.direction.dot(Sh.cross(Fa));if(p<0||m+p>f)return null;const g=-h*Fa.dot(Mh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,n,a,o,c,f,h,m,p,g,_,x,y,E,T,S){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,f,h,m,p,g,_,x,y,E,T,S)}set(t,n,a,o,c,f,h,m,p,g,_,x,y,E,T,S){const v=this.elements;return v[0]=t,v[4]=n,v[8]=a,v[12]=o,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=E,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/pr.setFromMatrixColumn(t,0).length(),c=1/pr.setFromMatrixColumn(t,1).length(),f=1/pr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,y=f*_,E=h*g,T=h*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=y+E*p,n[5]=x-T*p,n[9]=-h*m,n[2]=T-x*p,n[6]=E+y*p,n[10]=f*m}else if(t.order==="YXZ"){const x=m*g,y=m*_,E=p*g,T=p*_;n[0]=x+T*h,n[4]=E*h-y,n[8]=f*p,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=y*h-E,n[6]=T+x*h,n[10]=f*m}else if(t.order==="ZXY"){const x=m*g,y=m*_,E=p*g,T=p*_;n[0]=x-T*h,n[4]=-f*_,n[8]=E+y*h,n[1]=y+E*h,n[5]=f*g,n[9]=T-x*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const x=f*g,y=f*_,E=h*g,T=h*_;n[0]=m*g,n[4]=E*p-y,n[8]=x*p+T,n[1]=m*_,n[5]=T*p+x,n[9]=y*p-E,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,E=h*m,T=h*p;n[0]=m*g,n[4]=T-x*_,n[8]=E*_+y,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=y*_+E,n[10]=x-T*_}else if(t.order==="XZY"){const x=f*m,y=f*p,E=h*m,T=h*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=x*_+T,n[5]=f*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=h*g,n[10]=T*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tM,t,eM)}lookAt(t,n,a){const o=this.elements;return ei.subVectors(t,n),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ha.crossVectors(a,ei),Ha.lengthSq()===0&&(Math.abs(a.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ha.crossVectors(a,ei)),Ha.normalize(),xc.crossVectors(ei,Ha),o[0]=Ha.x,o[4]=xc.x,o[8]=ei.x,o[1]=Ha.y,o[5]=xc.y,o[9]=ei.y,o[2]=Ha.z,o[6]=xc.z,o[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,f=a[0],h=a[4],m=a[8],p=a[12],g=a[1],_=a[5],x=a[9],y=a[13],E=a[2],T=a[6],S=a[10],v=a[14],O=a[3],D=a[7],R=a[11],F=a[15],B=o[0],z=o[4],k=o[8],U=o[12],C=o[1],G=o[5],it=o[9],at=o[13],ut=o[2],ct=o[6],P=o[10],J=o[14],Y=o[3],St=o[7],L=o[11],K=o[15];return c[0]=f*B+h*C+m*ut+p*Y,c[4]=f*z+h*G+m*ct+p*St,c[8]=f*k+h*it+m*P+p*L,c[12]=f*U+h*at+m*J+p*K,c[1]=g*B+_*C+x*ut+y*Y,c[5]=g*z+_*G+x*ct+y*St,c[9]=g*k+_*it+x*P+y*L,c[13]=g*U+_*at+x*J+y*K,c[2]=E*B+T*C+S*ut+v*Y,c[6]=E*z+T*G+S*ct+v*St,c[10]=E*k+T*it+S*P+v*L,c[14]=E*U+T*at+S*J+v*K,c[3]=O*B+D*C+R*ut+F*Y,c[7]=O*z+D*G+R*ct+F*St,c[11]=O*k+D*it+R*P+F*L,c[15]=O*U+D*at+R*J+F*K,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],y=t[14],E=t[3],T=t[7],S=t[11],v=t[15];return E*(+c*m*_-o*p*_-c*h*x+a*p*x+o*h*y-a*m*y)+T*(+n*m*y-n*p*x+c*f*x-o*f*y+o*p*g-c*m*g)+S*(+n*p*_-n*h*y-c*f*_+a*f*y+c*h*g-a*p*g)+v*(-o*h*g-n*m*_+n*h*x+o*f*_-a*f*x+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],y=t[11],E=t[12],T=t[13],S=t[14],v=t[15],O=_*S*p-T*x*p+T*m*y-h*S*y-_*m*v+h*x*v,D=E*x*p-g*S*p-E*m*y+f*S*y+g*m*v-f*x*v,R=g*T*p-E*_*p+E*h*y-f*T*y-g*h*v+f*_*v,F=E*_*m-g*T*m-E*h*x+f*T*x+g*h*S-f*_*S,B=n*O+a*D+o*R+c*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=O*z,t[1]=(T*x*c-_*S*c-T*o*y+a*S*y+_*o*v-a*x*v)*z,t[2]=(h*S*c-T*m*c+T*o*p-a*S*p-h*o*v+a*m*v)*z,t[3]=(_*m*c-h*x*c-_*o*p+a*x*p+h*o*y-a*m*y)*z,t[4]=D*z,t[5]=(g*S*c-E*x*c+E*o*y-n*S*y-g*o*v+n*x*v)*z,t[6]=(E*m*c-f*S*c-E*o*p+n*S*p+f*o*v-n*m*v)*z,t[7]=(f*x*c-g*m*c+g*o*p-n*x*p-f*o*y+n*m*y)*z,t[8]=R*z,t[9]=(E*_*c-g*T*c-E*a*y+n*T*y+g*a*v-n*_*v)*z,t[10]=(f*T*c-E*h*c+E*a*p-n*T*p-f*a*v+n*h*v)*z,t[11]=(g*h*c-f*_*c-g*a*p+n*_*p+f*a*y-n*h*y)*z,t[12]=F*z,t[13]=(g*T*o-E*_*o+E*a*x-n*T*x-g*a*S+n*_*S)*z,t[14]=(E*h*o-f*T*o-E*a*m+n*T*m+f*a*S-n*h*S)*z,t[15]=(f*_*o-g*h*o+g*a*m-n*_*m-f*a*x+n*h*x)*z,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+a,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+a,g*m-o*f,0,p*m-o*h,g*m+o*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,f){return this.set(1,a,c,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,g=f+f,_=h+h,x=c*p,y=c*g,E=c*_,T=f*g,S=f*_,v=h*_,O=m*p,D=m*g,R=m*_,F=a.x,B=a.y,z=a.z;return o[0]=(1-(T+v))*F,o[1]=(y+R)*F,o[2]=(E-D)*F,o[3]=0,o[4]=(y-R)*B,o[5]=(1-(x+v))*B,o[6]=(S+O)*B,o[7]=0,o[8]=(E+D)*z,o[9]=(S-O)*z,o[10]=(1-(x+T))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=pr.set(o[0],o[1],o[2]).length();const f=pr.set(o[4],o[5],o[6]).length(),h=pr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],_i.copy(this);const p=1/c,g=1/f,_=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,n.setFromRotationMatrix(_i),a.x=c,a.y=f,a.z=h,this}makePerspective(t,n,a,o,c,f,h=la){const m=this.elements,p=2*c/(n-t),g=2*c/(a-o),_=(n+t)/(n-t),x=(a+o)/(a-o);let y,E;if(h===la)y=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===Kc)y=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,a,o,c,f,h=la){const m=this.elements,p=1/(n-t),g=1/(a-o),_=1/(f-c),x=(n+t)*p,y=(a+o)*g;let E,T;if(h===la)E=(f+c)*_,T=-2*_;else if(h===Kc)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=T,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const pr=new V,_i=new Xe,tM=new V(0,0,0),eM=new V(1,1,1),Ha=new V,xc=new V,ei=new V,e0=new Xe,n0=new Cs;class Ui{constructor(t=0,n=0,a=0,o=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],m=o[1],p=o[5],g=o[9],_=o[2],x=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(fe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-fe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(fe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return e0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(e0,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return n0.setFromEuler(this),this.setFromQuaternion(n0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class mv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nM=0;const i0=new V,mr=new Cs,ea=new Xe,yc=new V,Fo=new V,iM=new V,aM=new Cs,a0=new V(1,0,0),s0=new V(0,1,0),r0=new V(0,0,1),o0={type:"added"},sM={type:"removed"},gr={type:"childadded",child:null},Eh={type:"childremoved",child:null};class Rn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const t=new V,n=new Ui,a=new Cs,o=new V(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Xe},normalMatrix:{value:new re}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return mr.setFromAxisAngle(t,n),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,n){return mr.setFromAxisAngle(t,n),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(a0,t)}rotateY(t){return this.rotateOnAxis(s0,t)}rotateZ(t){return this.rotateOnAxis(r0,t)}translateOnAxis(t,n){return i0.copy(t).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(a0,t)}translateY(t){return this.translateOnAxis(s0,t)}translateZ(t){return this.translateOnAxis(r0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?yc.copy(t):yc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Fo,yc,this.up):ea.lookAt(yc,Fo,this.up),this.quaternion.setFromRotationMatrix(ea),o&&(ea.extractRotation(o.matrixWorld),mr.setFromRotationMatrix(ea),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(o0),gr.child=t,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(sM),Eh.child=t,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(o0),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,iM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,aM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),x.length>0&&(a.skeletons=x),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=o,a;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Rn.DEFAULT_UP=new V(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new V,na=new V,Th=new V,ia=new V,_r=new V,vr=new V,l0=new V,bh=new V,Ah=new V,Rh=new V,wh=new Qe,Ch=new Qe,Dh=new Qe;class xi{constructor(t=new V,n=new V,a=new V){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),vi.subVectors(t,n),o.cross(vi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){vi.subVectors(o,n),na.subVectors(a,n),Th.subVectors(t,n);const f=vi.dot(vi),h=vi.dot(na),m=vi.dot(Th),p=na.dot(na),g=na.dot(Th),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-h*g)*x,E=(f*g-h*m)*x;return c.set(1-y-E,E,y)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,n,a,o,c,f,h,m){return this.getBarycoord(t,n,a,o,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ia.x),m.addScaledVector(f,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(t,n,a,o,c,f){return wh.setScalar(0),Ch.setScalar(0),Dh.setScalar(0),wh.fromBufferAttribute(t,n),Ch.fromBufferAttribute(t,a),Dh.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(wh,c.x),f.addScaledVector(Ch,c.y),f.addScaledVector(Dh,c.z),f}static isFrontFacing(t,n,a,o){return vi.subVectors(a,n),na.subVectors(t,n),vi.cross(na).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),vi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return xi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return xi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let f,h;_r.subVectors(o,a),vr.subVectors(c,a),bh.subVectors(t,a);const m=_r.dot(bh),p=vr.dot(bh);if(m<=0&&p<=0)return n.copy(a);Ah.subVectors(t,o);const g=_r.dot(Ah),_=vr.dot(Ah);if(g>=0&&_<=g)return n.copy(o);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(a).addScaledVector(_r,f);Rh.subVectors(t,c);const y=_r.dot(Rh),E=vr.dot(Rh);if(E>=0&&y<=E)return n.copy(c);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(a).addScaledVector(vr,h);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return l0.subVectors(c,o),h=(_-g)/(_-g+(y-E)),n.copy(o).addScaledVector(l0,h);const v=1/(S+T+x);return f=T*v,h=x*v,n.copy(a).addScaledVector(_r,f).addScaledVector(vr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Uh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class ye{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,n),this}setRGB(t,n,a,o=be.workingColorSpace){return this.r=t,this.g=n,this.b=a,be.toWorkingColorSpace(this,o),this}setHSL(t,n,a,o=be.workingColorSpace){if(t=GS(t,1),n=fe(n,0,1),a=fe(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=Uh(f,c,t+1/3),this.g=Uh(f,c,t),this.b=Uh(f,c,t-1/3)}return be.toWorkingColorSpace(this,o),this}setStyle(t,n=fi){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=fi){const a=gv[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return be.fromWorkingColorSpace(On.copy(this),t),Math.round(fe(On.r*255,0,255))*65536+Math.round(fe(On.g*255,0,255))*256+Math.round(fe(On.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=be.workingColorSpace){be.fromWorkingColorSpace(On.copy(this),n);const a=On.r,o=On.g,c=On.b,f=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=be.workingColorSpace){return be.fromWorkingColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=fi){be.fromWorkingColorSpace(On.copy(this),t);const n=On.r,a=On.g,o=On.b;return t!==fi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+n,Ga.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ga),t.getHSL(Sc);const a=ph(Ga.h,Sc.h,n),o=ph(Ga.s,Sc.s,n),c=ph(Ga.l,Sc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new ye;ye.NAMES=gv;let rM=0;class Br extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=Rr,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=Kh,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(a.blending=this.blending),this.side!==Ya&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==jh&&(a.blendSrc=this.blendSrc),this.blendDst!==Kh&&(a.blendDst=this.blendDst),this.blendEquation!==Ms&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Z_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=o(t.textures),f=o(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jc extends Br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=$0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new V,Mc=new Bt;let oM=0;class Di{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=j_,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Mc.fromBufferAttribute(this,n),Mc.applyMatrix3(t),this.setXY(n,Mc.x,Mc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=zo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=kn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),o=kn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),o=kn(o,this.array),c=kn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==j_&&(t.usage=this.usage),t}}class _v extends Di{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class vv extends Di{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class wn extends Di{constructor(t,n,a){super(new Float32Array(t),n,a)}}let lM=0;const ui=new Xe,Lh=new Rn,xr=new V,ni=new nl,Ho=new nl,vn=new V;class yn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dv(t)?vv:_v)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new re().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,n,a){return ui.makeTranslation(t,n,a),this.applyMatrix4(ui),this}scale(t,n,a){return ui.makeScale(t,n,a),this.applyMatrix4(ui),this}lookAt(t){return Lh.lookAt(t),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new wn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const a=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ni.min,Ho.min),ni.expandByPoint(vn),vn.addVectors(ni.max,Ho.max),ni.expandByPoint(vn)):(ni.expandByPoint(Ho.min),ni.expandByPoint(Ho.max))}ni.getCenter(a);let o=0;for(let c=0,f=t.count;c<f;c++)vn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(vn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)vn.fromBufferAttribute(h,p),m&&(xr.fromBufferAttribute(t,p),vn.add(xr)),o=Math.max(o,a.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let k=0;k<a.count;k++)h[k]=new V,m[k]=new V;const p=new V,g=new V,_=new V,x=new Bt,y=new Bt,E=new Bt,T=new V,S=new V;function v(k,U,C){p.fromBufferAttribute(a,k),g.fromBufferAttribute(a,U),_.fromBufferAttribute(a,C),x.fromBufferAttribute(c,k),y.fromBufferAttribute(c,U),E.fromBufferAttribute(c,C),g.sub(p),_.sub(p),y.sub(x),E.sub(x);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(G),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(G),h[k].add(T),h[U].add(T),h[C].add(T),m[k].add(S),m[U].add(S),m[C].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let k=0,U=O.length;k<U;++k){const C=O[k],G=C.start,it=C.count;for(let at=G,ut=G+it;at<ut;at+=3)v(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const D=new V,R=new V,F=new V,B=new V;function z(k){F.fromBufferAttribute(o,k),B.copy(F);const U=h[k];D.copy(U),D.sub(F.multiplyScalar(F.dot(U))).normalize(),R.crossVectors(B,U);const G=R.dot(m[k])<0?-1:1;f.setXYZW(k,D.x,D.y,D.z,G)}for(let k=0,U=O.length;k<U;++k){const C=O[k],G=C.start,it=C.count;for(let at=G,ut=G+it;at<ut;at+=3)z(t.getX(at+0)),z(t.getX(at+1)),z(t.getX(at+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,y=a.count;x<y;x++)a.setXYZ(x,0,0,0);const o=new V,c=new V,f=new V,h=new V,m=new V,p=new V,g=new V,_=new V;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),T=t.getX(x+1),S=t.getX(x+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),f.fromBufferAttribute(n,S),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,T),p.fromBufferAttribute(a,S),h.add(g),m.add(g),p.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=n.count;x<y;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)vn.fromBufferAttribute(t,n),vn.normalize(),t.setXYZ(n,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,x=new p.constructor(m.length*g);let y=0,E=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*g;for(let v=0;v<g;v++)x[E++]=p[y++]}return new Di(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yn,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=t(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=t(x,a);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c0=new Xe,gs=new Kd,Ec=new iu,u0=new V,Tc=new V,bc=new V,Ac=new V,Nh=new V,Rc=new V,f0=new V,wc=new V;class In extends Rn{constructor(t=new yn,n=new Jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Rc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Nh.fromBufferAttribute(_,t),f?Rc.addScaledVector(Nh,g):Rc.addScaledVector(Nh.sub(n),g))}n.add(Rc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ec.copy(a.boundingSphere),Ec.applyMatrix4(c),gs.copy(t.ray).recast(t.near),!(Ec.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Ec,u0)===null||gs.origin.distanceToSquared(u0)>(t.far-t.near)**2))&&(c0.copy(c).invert(),gs.copy(t.ray).applyMatrix4(c0),!(a.boundingBox!==null&&gs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,gs)))}_computeIntersections(t,n,a){let o;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const S=x[E],v=f[S.materialIndex],O=Math.max(S.start,y.start),D=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let R=O,F=D;R<F;R+=3){const B=h.getX(R),z=h.getX(R+1),k=h.getX(R+2);o=Cc(this,v,t,a,p,g,_,B,z,k),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let S=E,v=T;S<v;S+=3){const O=h.getX(S),D=h.getX(S+1),R=h.getX(S+2);o=Cc(this,f,t,a,p,g,_,O,D,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const S=x[E],v=f[S.materialIndex],O=Math.max(S.start,y.start),D=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let R=O,F=D;R<F;R+=3){const B=R,z=R+1,k=R+2;o=Cc(this,v,t,a,p,g,_,B,z,k),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let S=E,v=T;S<v;S+=3){const O=S,D=S+1,R=S+2;o=Cc(this,f,t,a,p,g,_,O,D,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function cM(r,t,n,a,o,c,f,h){let m;if(t.side===Wn?m=a.intersectTriangle(f,c,o,!0,h):m=a.intersectTriangle(o,c,f,t.side===Ya,h),m===null)return null;wc.copy(h),wc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(wc);return p<n.near||p>n.far?null:{distance:p,point:wc.clone(),object:r}}function Cc(r,t,n,a,o,c,f,h,m,p){r.getVertexPosition(h,Tc),r.getVertexPosition(m,bc),r.getVertexPosition(p,Ac);const g=cM(r,t,n,a,Tc,bc,Ac,f0);if(g){const _=new V;xi.getBarycoord(f0,Tc,bc,Ac,_),o&&(g.uv=xi.getInterpolatedAttribute(o,h,m,p,_,new Bt)),c&&(g.uv1=xi.getInterpolatedAttribute(c,h,m,p,_,new Bt)),f&&(g.normal=xi.getInterpolatedAttribute(f,h,m,p,_,new V),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new V,materialIndex:0};xi.getNormal(Tc,bc,Ac,x.normal),g.face=x,g.barycoord=_}return g}class Fr extends yn{constructor(t=1,n=1,a=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,y=0;E("z","y","x",-1,-1,a,n,t,f,c,0),E("z","y","x",1,-1,a,n,-t,f,c,1),E("x","z","y",1,1,t,a,n,o,f,2),E("x","z","y",1,-1,t,a,-n,o,f,3),E("x","y","z",1,-1,t,n,a,o,c,4),E("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new wn(p,3)),this.setAttribute("normal",new wn(g,3)),this.setAttribute("uv",new wn(_,2));function E(T,S,v,O,D,R,F,B,z,k,U){const C=R/z,G=F/k,it=R/2,at=F/2,ut=B/2,ct=z+1,P=k+1;let J=0,Y=0;const St=new V;for(let L=0;L<P;L++){const K=L*G-at;for(let ft=0;ft<ct;ft++){const gt=ft*C-it;St[T]=gt*O,St[S]=K*D,St[v]=ut,p.push(St.x,St.y,St.z),St[T]=0,St[S]=0,St[v]=B>0?1:-1,g.push(St.x,St.y,St.z),_.push(ft/z),_.push(1-L/k),J+=1}}for(let L=0;L<k;L++)for(let K=0;K<z;K++){const ft=x+K+ct*L,gt=x+K+ct*(L+1),Q=x+(K+1)+ct*(L+1),_t=x+(K+1)+ct*L;m.push(ft,gt,_t),m.push(gt,Q,_t),Y+=6}h.addGroup(y,Y,U),y+=Y,x+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function zn(r){const t={};for(let n=0;n<r.length;n++){const a=Or(r[n]);for(const o in a)t[o]=a[o]}return t}function uM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function xv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const fM={clone:Or,merge:zn};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Za extends Br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=dM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=uM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class yv extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=la}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new V,h0=new Bt,d0=new Bt;class hi extends yv{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,n){return this.getViewBounds(t,h0,d0),n.subVectors(d0,h0)}setViewOffset(t,n,a,o,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(qc*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*o/m,n-=f.offsetY*a/p,o*=f.width/m,a*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yr=-90,Sr=1;class pM extends Rn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hi(yr,Sr,t,n);o.layers=this.layers,this.add(o);const c=new hi(yr,Sr,t,n);c.layers=this.layers,this.add(c);const f=new hi(yr,Sr,t,n);f.layers=this.layers,this.add(f);const h=new hi(yr,Sr,t,n);h.layers=this.layers,this.add(h);const m=new hi(yr,Sr,t,n);m.layers=this.layers,this.add(m);const p=new hi(yr,Sr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,f,h,m]=n;for(const p of n)this.remove(p);if(t===la)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Kc)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,f),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,m),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(_,x,y),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Sv extends qn{constructor(t=[],n=Ur,a,o,c,f,h,m,p,g){super(t,n,a,o,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mM extends ws{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Sv(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ci}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Fr(5,5,5),c=new Za({name:"CubemapFromEquirect",uniforms:Or(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Wn,blending:Wa});c.uniforms.tEquirect.value=n;const f=new In(o,c),h=n.minFilter;return n.minFilter===bs&&(n.minFilter=Ci),new pM(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,o);t.setRenderTarget(c)}}let Vo=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const gM={type:"move"};class Oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const S=n.getJointPose(T,a),v=this._getHandJoint(p,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(gM)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Vo;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class _M extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ph=new V,vM=new V,xM=new re;class ka{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Ph.subVectors(a,n).cross(vM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Ph),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||xM.getNormalMatrix(t),o=this.coplanarPoint(Ph).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new iu,Dc=new V;class Qd{constructor(t=new ka,n=new ka,a=new ka,o=new ka,c=new ka,f=new ka){this.planes=[t,n,a,o,c,f]}set(t,n,a,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=la){const a=this.planes,o=t.elements,c=o[0],f=o[1],h=o[2],m=o[3],p=o[4],g=o[5],_=o[6],x=o[7],y=o[8],E=o[9],T=o[10],S=o[11],v=o[12],O=o[13],D=o[14],R=o[15];if(a[0].setComponents(m-c,x-p,S-y,R-v).normalize(),a[1].setComponents(m+c,x+p,S+y,R+v).normalize(),a[2].setComponents(m+f,x+g,S+E,R+O).normalize(),a[3].setComponents(m-f,x-g,S-E,R-O).normalize(),a[4].setComponents(m-h,x-_,S-T,R-D).normalize(),n===la)a[5].setComponents(m+h,x+_,S+T,R+D).normalize();else if(n===Kc)a[5].setComponents(h,_,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Dc.x=o.normal.x>0?t.max.x:t.min.x,Dc.y=o.normal.y>0?t.max.y:t.min.y,Dc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pd extends Br{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $c=new V,tu=new V,p0=new Xe,Go=new Kd,Uc=new iu,zh=new V,m0=new V;class vs extends Rn{constructor(t=new yn,n=new Pd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)$c.fromBufferAttribute(n,o-1),tu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=$c.distanceTo(tu);t.setAttribute("lineDistance",new wn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Uc.copy(a.boundingSphere),Uc.applyMatrix4(o),Uc.radius+=c,t.ray.intersectsSphere(Uc)===!1)return;p0.copy(o).invert(),Go.copy(t.ray).applyMatrix4(p0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=a.index,x=a.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=y,S=E-1;T<S;T+=p){const v=g.getX(T),O=g.getX(T+1),D=Lc(this,t,Go,m,v,O,T);D&&n.push(D)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(y),v=Lc(this,t,Go,m,T,S,E-1);v&&n.push(v)}}else{const y=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=y,S=E-1;T<S;T+=p){const v=Lc(this,t,Go,m,T,T+1,T);v&&n.push(v)}if(this.isLineLoop){const T=Lc(this,t,Go,m,E-1,y,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Lc(r,t,n,a,o,c,f){const h=r.geometry.attributes.position;if($c.fromBufferAttribute(h,o),tu.fromBufferAttribute(h,c),n.distanceSqToSegment($c,tu,zh,m0)>a)return;zh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(zh);if(!(p<t.near||p>t.far))return{distance:p,point:m0.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class Mv extends qn{constructor(t,n,a=Rs,o,c,f,h=Si,m=Si,p,g=Ko){if(g!==Ko&&g!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,f,h,m,g,a,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let f;n?f=n:f=t*a[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=a[o]-f,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,a[o]===f)return o/(c-1);const g=a[o],x=a[o+1]-g,y=(f-g)/x;return(o+y)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const f=this.getPoint(o),h=this.getPoint(c),m=n||(f.isVector2?new Bt:new V);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new V,o=[],c=[],f=[],h=new V,m=new Xe;for(let y=0;y<=t;y++){const E=y/t;o[y]=this.getTangentAt(E,new V)}c[0]=new V,f[0]=new V;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),x=Math.abs(o[0].z);g<=p&&(p=g,a.set(1,0,0)),_<=p&&(p=_,a.set(0,1,0)),x<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),f[0].crossVectors(o[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(o[y-1],o[y]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(fe(o[y-1].dot(o[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(h,E))}f[y].crossVectors(o[y],c[y])}if(n===!0){let y=Math.acos(fe(c[0].dot(c[t]),-1,1));y/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],y*E)),f[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Jd extends Ni{constructor(t=0,n=0,a=1,o=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new Bt){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(f?c=0:c=o),this.aClockwise===!0&&!f&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=m-this.aX,y=p-this.aY;m=x*g-y*_+this.aX,p=x*_+y*g+this.aY}return a.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yM extends Jd{constructor(t,n,a,o,c,f){super(t,n,a,a,o,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function $d(){let r=0,t=0,n=0,a=0;function o(c,f,h,m){r=c,t=h,n=-3*c+3*f-2*h-m,a=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){o(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,g,_){let x=(f-c)/p-(h-c)/(p+g)+(h-f)/g,y=(h-f)/g-(m-f)/(g+_)+(m-h)/_;x*=g,y*=g,o(f,h,x,y)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+a*h}}}const Nc=new V,Ih=new $d,Bh=new $d,Fh=new $d;class SM extends Ni{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new V){const a=n,o=this.points,c=o.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:(Nc.subVectors(o[0],o[1]).add(o[0]),p=Nc);const _=o[h%c],x=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(Nc.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Nc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),y),T=Math.pow(_.distanceToSquared(x),y),S=Math.pow(x.distanceToSquared(g),y);T<1e-4&&(T=1),E<1e-4&&(E=T),S<1e-4&&(S=T),Ih.initNonuniformCatmullRom(p.x,_.x,x.x,g.x,E,T,S),Bh.initNonuniformCatmullRom(p.y,_.y,x.y,g.y,E,T,S),Fh.initNonuniformCatmullRom(p.z,_.z,x.z,g.z,E,T,S)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(p.x,_.x,x.x,g.x,this.tension),Bh.initCatmullRom(p.y,_.y,x.y,g.y,this.tension),Fh.initCatmullRom(p.z,_.z,x.z,g.z,this.tension));return a.set(Ih.calc(m),Bh.calc(m),Fh.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new V().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function g0(r,t,n,a,o){const c=(a-t)*.5,f=(o-n)*.5,h=r*r,m=r*h;return(2*n-2*a+c+f)*m+(-3*n+3*a-2*c-f)*h+c*r+n}function MM(r,t){const n=1-r;return n*n*t}function EM(r,t){return 2*(1-r)*r*t}function TM(r,t){return r*r*t}function qo(r,t,n,a){return MM(r,t)+EM(r,n)+TM(r,a)}function bM(r,t){const n=1-r;return n*n*n*t}function AM(r,t){const n=1-r;return 3*n*n*r*t}function RM(r,t){return 3*(1-r)*r*r*t}function wM(r,t){return r*r*r*t}function Yo(r,t,n,a,o){return bM(r,t)+AM(r,n)+RM(r,a)+wM(r,o)}class Ev extends Ni{constructor(t=new Bt,n=new Bt,a=new Bt,o=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Bt){const a=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Yo(t,o.x,c.x,f.x,h.x),Yo(t,o.y,c.y,f.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class CM extends Ni{constructor(t=new V,n=new V,a=new V,o=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new V){const a=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Yo(t,o.x,c.x,f.x,h.x),Yo(t,o.y,c.y,f.y,h.y),Yo(t,o.z,c.z,f.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tv extends Ni{constructor(t=new Bt,n=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Bt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Bt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class DM extends Ni{constructor(t=new V,n=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new V){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new V){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bv extends Ni{constructor(t=new Bt,n=new Bt,a=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Bt){const a=n,o=this.v0,c=this.v1,f=this.v2;return a.set(qo(t,o.x,c.x,f.x),qo(t,o.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Av extends Ni{constructor(t=new V,n=new V,a=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new V){const a=n,o=this.v0,c=this.v1,f=this.v2;return a.set(qo(t,o.x,c.x,f.x),qo(t,o.y,c.y,f.y),qo(t,o.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rv extends Ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Bt){const a=n,o=this.points,c=(o.length-1)*t,f=Math.floor(c),h=c-f,m=o[f===0?f:f-1],p=o[f],g=o[f>o.length-2?o.length-1:f+1],_=o[f>o.length-3?o.length-1:f+2];return a.set(g0(h,m.x,p.x,g.x,_.x),g0(h,m.y,p.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Bt().fromArray(o))}return this}}var _0=Object.freeze({__proto__:null,ArcCurve:yM,CatmullRomCurve3:SM,CubicBezierCurve:Ev,CubicBezierCurve3:CM,EllipseCurve:Jd,LineCurve:Tv,LineCurve3:DM,QuadraticBezierCurve:bv,QuadraticBezierCurve3:Av,SplineCurve:Rv});class UM extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _0[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const f=o[c]-a,h=this.curves[c],m=h.getLength(),p=m===0?0:1-f/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const f=c[o],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(h);for(let p=0;p<m.length;p++){const g=m[p];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new _0[o.type]().fromJSON(o))}return this}}class zd extends UM{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new Tv(this.currentPoint.clone(),new Bt(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new bv(this.currentPoint.clone(),new Bt(t,n),new Bt(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,f){const h=new Ev(this.currentPoint.clone(),new Bt(t,n),new Bt(a,o),new Bt(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new Rv(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,a,o,c,f),this}absarc(t,n,a,o,c,f){return this.absellipse(t,n,a,a,o,c,f),this}ellipse(t,n,a,o,c,f,h,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,a,o,c,f,h,m),this}absellipse(t,n,a,o,c,f,h,m){const p=new Jd(t,n,a,o,c,f,h,m);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tp extends yn{constructor(t=1,n=1,a=1,o=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;o=Math.floor(o),c=Math.floor(c);const g=[],_=[],x=[],y=[];let E=0;const T=[],S=a/2;let v=0;O(),f===!1&&(t>0&&D(!0),n>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new wn(_,3)),this.setAttribute("normal",new wn(x,3)),this.setAttribute("uv",new wn(y,2));function O(){const R=new V,F=new V;let B=0;const z=(n-t)/a;for(let k=0;k<=c;k++){const U=[],C=k/c,G=C*(n-t)+t;for(let it=0;it<=o;it++){const at=it/o,ut=at*m+h,ct=Math.sin(ut),P=Math.cos(ut);F.x=G*ct,F.y=-C*a+S,F.z=G*P,_.push(F.x,F.y,F.z),R.set(ct,z,P).normalize(),x.push(R.x,R.y,R.z),y.push(at,1-C),U.push(E++)}T.push(U)}for(let k=0;k<o;k++)for(let U=0;U<c;U++){const C=T[U][k],G=T[U+1][k],it=T[U+1][k+1],at=T[U][k+1];(t>0||U!==0)&&(g.push(C,G,at),B+=3),(n>0||U!==c-1)&&(g.push(G,it,at),B+=3)}p.addGroup(v,B,0),v+=B}function D(R){const F=E,B=new Bt,z=new V;let k=0;const U=R===!0?t:n,C=R===!0?1:-1;for(let it=1;it<=o;it++)_.push(0,S*C,0),x.push(0,C,0),y.push(.5,.5),E++;const G=E;for(let it=0;it<=o;it++){const ut=it/o*m+h,ct=Math.cos(ut),P=Math.sin(ut);z.x=U*P,z.y=S*C,z.z=U*ct,_.push(z.x,z.y,z.z),x.push(0,C,0),B.x=ct*.5+.5,B.y=P*.5*C+.5,y.push(B.x,B.y),E++}for(let it=0;it<o;it++){const at=F+it,ut=G+it;R===!0?g.push(ut,ut+1,at):g.push(ut+1,ut,at),k+=3}p.addGroup(v,k,R===!0?1:2),v+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hh extends zd{constructor(t){super(t),this.uuid=Ir(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new zd().fromJSON(o))}return this}}function LM(r,t,n=2){const a=t&&t.length,o=a?t[0]*n:r.length;let c=wv(r,0,o,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h,m,p;if(a&&(c=IM(r,t,c,n)),r.length>80*n){h=1/0,m=1/0;let g=-1/0,_=-1/0;for(let x=n;x<o;x+=n){const y=r[x],E=r[x+1];y<h&&(h=y),E<m&&(m=E),y>g&&(g=y),E>_&&(_=E)}p=Math.max(g-h,_-m),p=p!==0?32767/p:0}return Jo(c,f,n,h,m,p,0),f}function wv(r,t,n,a,o){let c;if(o===ZM(r,t,n,a)>0)for(let f=t;f<n;f+=a)c=v0(f/a|0,r[f],r[f+1],c);else for(let f=n-a;f>=t;f-=a)c=v0(f/a|0,r[f],r[f+1],c);return c&&Pr(c,c.next)&&(tl(c),c=c.next),c}function Ds(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(Pr(n,n.next)||Ye(n.prev,n,n.next)===0)){if(tl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function Jo(r,t,n,a,o,c,f){if(!r)return;!f&&c&&VM(r,a,o,c);let h=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?OM(r,a,o,c):NM(r)){t.push(m.i,r.i,p.i),tl(r),r=p.next,h=p.next;continue}if(r=p,r===h){f?f===1?(r=PM(Ds(r),t),Jo(r,t,n,a,o,c,2)):f===2&&zM(r,t,n,a,o,c):Jo(Ds(r),t,n,a,o,c,1);break}}}function NM(r){const t=r.prev,n=r,a=r.next;if(Ye(t,n,a)>=0)return!1;const o=t.x,c=n.x,f=a.x,h=t.y,m=n.y,p=a.y,g=Math.min(o,c,f),_=Math.min(h,m,p),x=Math.max(o,c,f),y=Math.max(h,m,p);let E=a.next;for(;E!==t;){if(E.x>=g&&E.x<=x&&E.y>=_&&E.y<=y&&ko(o,h,c,m,f,p,E.x,E.y)&&Ye(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function OM(r,t,n,a){const o=r.prev,c=r,f=r.next;if(Ye(o,c,f)>=0)return!1;const h=o.x,m=c.x,p=f.x,g=o.y,_=c.y,x=f.y,y=Math.min(h,m,p),E=Math.min(g,_,x),T=Math.max(h,m,p),S=Math.max(g,_,x),v=Id(y,E,t,n,a),O=Id(T,S,t,n,a);let D=r.prevZ,R=r.nextZ;for(;D&&D.z>=v&&R&&R.z<=O;){if(D.x>=y&&D.x<=T&&D.y>=E&&D.y<=S&&D!==o&&D!==f&&ko(h,g,m,_,p,x,D.x,D.y)&&Ye(D.prev,D,D.next)>=0||(D=D.prevZ,R.x>=y&&R.x<=T&&R.y>=E&&R.y<=S&&R!==o&&R!==f&&ko(h,g,m,_,p,x,R.x,R.y)&&Ye(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;D&&D.z>=v;){if(D.x>=y&&D.x<=T&&D.y>=E&&D.y<=S&&D!==o&&D!==f&&ko(h,g,m,_,p,x,D.x,D.y)&&Ye(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;R&&R.z<=O;){if(R.x>=y&&R.x<=T&&R.y>=E&&R.y<=S&&R!==o&&R!==f&&ko(h,g,m,_,p,x,R.x,R.y)&&Ye(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function PM(r,t){let n=r;do{const a=n.prev,o=n.next.next;!Pr(a,o)&&Dv(a,n,n.next,o)&&$o(a,o)&&$o(o,a)&&(t.push(a.i,n.i,o.i),tl(n),tl(n.next),n=r=o),n=n.next}while(n!==r);return Ds(n)}function zM(r,t,n,a,o,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&WM(f,h)){let m=Uv(f,h);f=Ds(f,f.next),m=Ds(m,m.next),Jo(f,t,n,a,o,c,0),Jo(m,t,n,a,o,c,0);return}h=h.next}f=f.next}while(f!==r)}function IM(r,t,n,a){const o=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*a,m=c<f-1?t[c+1]*a:r.length,p=wv(r,h,m,a,!1);p===p.next&&(p.steiner=!0),o.push(XM(p))}o.sort(BM);for(let c=0;c<o.length;c++)n=FM(o[c],n);return n}function BM(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function FM(r,t){const n=HM(r,t);if(!n)return t;const a=Uv(n,r);return Ds(a,a.next),Ds(n,n.next)}function HM(r,t){let n=t;const a=r.x,o=r.y;let c=-1/0,f;if(Pr(r,n))return n;do{if(Pr(r,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const _=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=a&&_>c&&(c=_,f=n.x<n.next.x?n:n.next,_===a))return f}n=n.next}while(n!==t);if(!f)return null;const h=f,m=f.x,p=f.y;let g=1/0;n=f;do{if(a>=n.x&&n.x>=m&&a!==n.x&&Cv(o<p?a:c,o,m,p,o<p?c:a,o,n.x,n.y)){const _=Math.abs(o-n.y)/(a-n.x);$o(n,r)&&(_<g||_===g&&(n.x>f.x||n.x===f.x&&GM(f,n)))&&(f=n,g=_)}n=n.next}while(n!==h);return f}function GM(r,t){return Ye(r.prev,r,t.prev)<0&&Ye(t.next,r,r.next)<0}function VM(r,t,n,a){let o=r;do o.z===0&&(o.z=Id(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,kM(o)}function kM(r){let t,n=1;do{let a=r,o;r=null;let c=null;for(t=0;a;){t++;let f=a,h=0;for(let p=0;p<n&&(h++,f=f.nextZ,!!f);p++);let m=n;for(;h>0||m>0&&f;)h!==0&&(m===0||!f||a.z<=f.z)?(o=a,a=a.nextZ,h--):(o=f,f=f.nextZ,m--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;a=f}c.nextZ=null,n*=2}while(t>1);return r}function Id(r,t,n,a,o){return r=(r-n)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function XM(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function Cv(r,t,n,a,o,c,f,h){return(o-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(a-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(o-f)*(a-h)}function ko(r,t,n,a,o,c,f,h){return!(r===f&&t===h)&&Cv(r,t,n,a,o,c,f,h)}function WM(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!qM(r,t)&&($o(r,t)&&$o(t,r)&&YM(r,t)&&(Ye(r.prev,r,t.prev)||Ye(r,t.prev,t))||Pr(r,t)&&Ye(r.prev,r,r.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Pr(r,t){return r.x===t.x&&r.y===t.y}function Dv(r,t,n,a){const o=Pc(Ye(r,t,n)),c=Pc(Ye(r,t,a)),f=Pc(Ye(n,a,r)),h=Pc(Ye(n,a,t));return!!(o!==c&&f!==h||o===0&&Oc(r,n,t)||c===0&&Oc(r,a,t)||f===0&&Oc(n,r,a)||h===0&&Oc(n,t,a))}function Oc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Pc(r){return r>0?1:r<0?-1:0}function qM(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&Dv(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function $o(r,t){return Ye(r.prev,r,r.next)<0?Ye(r,t,r.next)>=0&&Ye(r,r.prev,t)>=0:Ye(r,t,r.prev)<0||Ye(r,r.next,t)<0}function YM(r,t){let n=r,a=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function Uv(r,t){const n=Bd(r.i,r.x,r.y),a=Bd(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function v0(r,t,n,a){const o=Bd(r,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function tl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Bd(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ZM(r,t,n,a){let o=0;for(let c=t,f=n-a;c<n;c+=a)o+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return o}class jM{static triangulate(t,n,a=2){return LM(t,n,a)}}class ep{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return ep.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];x0(t),y0(a,t);let f=t.length;n.forEach(x0);for(let m=0;m<n.length;m++)o.push(f),f+=n[m].length,y0(a,n[m]);const h=jM.triangulate(a,o);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function x0(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function y0(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class zr extends yn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,f=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,g=m+1,_=t/h,x=n/m,y=[],E=[],T=[],S=[];for(let v=0;v<g;v++){const O=v*x-f;for(let D=0;D<p;D++){const R=D*_-c;E.push(R,-O,0),T.push(0,0,1),S.push(D/h),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<h;O++){const D=O+p*v,R=O+p*(v+1),F=O+1+p*(v+1),B=O+1+p*v;y.push(D,R,B),y.push(R,F,B)}this.setIndex(y),this.setAttribute("position",new wn(E,3)),this.setAttribute("normal",new wn(T,3)),this.setAttribute("uv",new wn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.widthSegments,t.heightSegments)}}class np extends yn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(f+h,Math.PI);let p=0;const g=[],_=new V,x=new V,y=[],E=[],T=[],S=[];for(let v=0;v<=a;v++){const O=[],D=v/a;let R=0;v===0&&f===0?R=.5/n:v===a&&m===Math.PI&&(R=-.5/n);for(let F=0;F<=n;F++){const B=F/n;_.x=-t*Math.cos(o+B*c)*Math.sin(f+D*h),_.y=t*Math.cos(f+D*h),_.z=t*Math.sin(o+B*c)*Math.sin(f+D*h),E.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),S.push(B+R,1-D),O.push(p++)}g.push(O)}for(let v=0;v<a;v++)for(let O=0;O<n;O++){const D=g[v][O+1],R=g[v][O],F=g[v+1][O],B=g[v+1][O+1];(v!==0||f>0)&&y.push(D,R,B),(v!==a-1||m<Math.PI)&&y.push(R,F,B)}this.setIndex(y),this.setAttribute("position",new wn(E,3)),this.setAttribute("normal",new wn(T,3)),this.setAttribute("uv",new wn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new np(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ip extends yn{constructor(t=1,n=.4,a=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:c},a=Math.floor(a),o=Math.floor(o);const f=[],h=[],m=[],p=[],g=new V,_=new V,x=new V;for(let y=0;y<=a;y++)for(let E=0;E<=o;E++){const T=E/o*c,S=y/a*Math.PI*2;_.x=(t+n*Math.cos(S))*Math.cos(T),_.y=(t+n*Math.cos(S))*Math.sin(T),_.z=n*Math.sin(S),h.push(_.x,_.y,_.z),g.x=t*Math.cos(T),g.y=t*Math.sin(T),x.subVectors(_,g).normalize(),m.push(x.x,x.y,x.z),p.push(E/o),p.push(y/a)}for(let y=1;y<=a;y++)for(let E=1;E<=o;E++){const T=(o+1)*y+E-1,S=(o+1)*(y-1)+E-1,v=(o+1)*(y-1)+E,O=(o+1)*y+E;f.push(T,S,O),f.push(S,v,O)}this.setIndex(f),this.setAttribute("position",new wn(h,3)),this.setAttribute("normal",new wn(m,3)),this.setAttribute("uv",new wn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class zc extends Br{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fv,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class KM extends Br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=US,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class QM extends Br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const S0={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class JM{constructor(t,n,a){const o=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,o.onProgress!==void 0&&o.onProgress(g,f,h),f===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const y=p[_],E=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const $M=new JM;class ap{constructor(t){this.manager=t!==void 0?t:$M,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(o,c){a.load(t,o,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ap.DEFAULT_MATERIAL_NAME="__DEFAULT";const aa={};class tE extends Error{constructor(t,n){super(t),this.response=n}}class eE extends ap{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,n,a,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=S0.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(c),this.manager.itemEnd(t)},0),c;if(aa[t]!==void 0){aa[t].push({onLoad:n,onProgress:a,onError:o});return}aa[t]=[],aa[t].push({onLoad:n,onProgress:a,onError:o});const f=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,m=this.responseType;fetch(f).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=aa[t],_=p.body.getReader(),x=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=x?parseInt(x):0,E=y!==0;let T=0;const S=new ReadableStream({start(v){O();function O(){_.read().then(({done:D,value:R})=>{if(D)v.close();else{T+=R.byteLength;const F=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:y});for(let B=0,z=g.length;B<z;B++){const k=g[B];k.onProgress&&k.onProgress(F)}v.enqueue(R),O()}},D=>{v.error(D)})}}});return new Response(S)}else throw new tE(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return p.json();default:if(h==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),x=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(x);return p.arrayBuffer().then(E=>y.decode(E))}}}).then(p=>{S0.add(t,p);const g=aa[t];delete aa[t];for(let _=0,x=g.length;_<x;_++){const y=g[_];y.onLoad&&y.onLoad(p)}}).catch(p=>{const g=aa[t];if(g===void 0)throw this.manager.itemError(t),p;delete aa[t];for(let _=0,x=g.length;_<x;_++){const y=g[_];y.onError&&y.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Lv extends Rn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Gh=new Xe,M0=new V,E0=new V;class nE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;M0.setFromMatrixPosition(t.matrixWorld),n.position.copy(M0),E0.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(E0),n.updateMatrixWorld(),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Gh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Nv extends yv{constructor(t=-1,n=1,a=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class iE extends nE{constructor(){super(new Nv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aE extends Lv{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new iE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sE extends Lv{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class rE extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class T0{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(fe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class oE{constructor(){this.type="ShapePath",this.color=new ye,this.subPaths=[],this.currentPath=null}moveTo(t,n){return this.currentPath=new zd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,n),this}lineTo(t,n){return this.currentPath.lineTo(t,n),this}quadraticCurveTo(t,n,a,o){return this.currentPath.quadraticCurveTo(t,n,a,o),this}bezierCurveTo(t,n,a,o,c,f){return this.currentPath.bezierCurveTo(t,n,a,o,c,f),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function n(v){const O=[];for(let D=0,R=v.length;D<R;D++){const F=v[D],B=new Hh;B.curves=F.curves,O.push(B)}return O}function a(v,O){const D=O.length;let R=!1;for(let F=D-1,B=0;B<D;F=B++){let z=O[F],k=O[B],U=k.x-z.x,C=k.y-z.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(z=O[B],U=-U,k=O[F],C=-C),v.y<z.y||v.y>k.y)continue;if(v.y===z.y){if(v.x===z.x)return!0}else{const G=C*(v.x-z.x)-U*(v.y-z.y);if(G===0)return!0;if(G<0)continue;R=!R}}else{if(v.y!==z.y)continue;if(k.x<=v.x&&v.x<=z.x||z.x<=v.x&&v.x<=k.x)return!0}}return R}const o=ep.isClockWise,c=this.subPaths;if(c.length===0)return[];let f,h,m;const p=[];if(c.length===1)return h=c[0],m=new Hh,m.curves=h.curves,p.push(m),p;let g=!o(c[0].getPoints());g=t?!g:g;const _=[],x=[];let y=[],E=0,T;x[E]=void 0,y[E]=[];for(let v=0,O=c.length;v<O;v++)h=c[v],T=h.getPoints(),f=o(T),f=t?!f:f,f?(!g&&x[E]&&E++,x[E]={s:new Hh,p:T},x[E].s.curves=h.curves,g&&E++,y[E]=[]):y[E].push({h,p:T[0]});if(!x[0])return n(c);if(x.length>1){let v=!1,O=0;for(let D=0,R=x.length;D<R;D++)_[D]=[];for(let D=0,R=x.length;D<R;D++){const F=y[D];for(let B=0;B<F.length;B++){const z=F[B];let k=!0;for(let U=0;U<x.length;U++)a(z.p,x[U].p)&&(D!==U&&O++,k?(k=!1,_[U].push(z)):v=!0);k&&_[D].push(z)}}O>0&&v===!1&&(y=_)}let S;for(let v=0,O=x.length;v<O;v++){m=x[v].s,p.push(m),S=y[v];for(let D=0,R=S.length;D<R;D++)m.holes.push(S[D].h)}return p}}class lE extends Us{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function b0(r,t,n,a){const o=cE(a);switch(n){case av:return r*t;case rv:return r*t;case ov:return r*t*2;case lv:return r*t/o.components*o.byteLength;case qd:return r*t/o.components*o.byteLength;case cv:return r*t*2/o.components*o.byteLength;case Yd:return r*t*2/o.components*o.byteLength;case sv:return r*t*3/o.components*o.byteLength;case yi:return r*t*4/o.components*o.byteLength;case Zd:return r*t*4/o.components*o.byteLength;case Gc:case Vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case kc:case Xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cd:case fd:return Math.max(r,16)*Math.max(t,8)/4;case ld:case ud:return Math.max(r,8)*Math.max(t,8)/2;case hd:case dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case _d:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case vd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case yd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Md:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Rd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case wd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Wc:case Cd:case Dd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case uv:case Ud:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ld:case Nd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cE(r){switch(r){case ua:case ev:return{byteLength:1,components:1};case Zo:case nv:case el:return{byteLength:2,components:1};case Xd:case Wd:return{byteLength:2,components:4};case Rs:case kd:case oa:return{byteLength:4,components:1};case iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ov(){let r=null,t=!1,n=null,a=null;function o(c,f){n(c,f),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function uE(r){const t=new WeakMap;function n(h,m){const p=h.array,g=h.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<_.length;y++){const E=_[x],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:f}}var fE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hE=`#ifdef USE_ALPHAHASH
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
#endif`,dE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_E=`#ifdef USE_AOMAP
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
#endif`,vE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TE=`#ifdef USE_IRIDESCENCE
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
#endif`,bE=`#ifdef USE_BUMPMAP
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
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OE=`#define PI 3.141592653589793
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
} // validated`,PE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zE=`vec3 transformedNormal = objectNormal;
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
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,XE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
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
}`,$E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nT=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,iT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,aT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lT=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,cT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,uT=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,fT=`#if defined( RE_IndirectDiffuse )
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
#endif`,hT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yT=`#if defined( USE_POINTS_UV )
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
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ET=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NT=`#ifdef USE_NORMALMAP
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
#endif`,OT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,HT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QT=`#ifdef USE_SKINNING
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
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ib=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ab=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fb=`uniform sampler2D t2D;
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,_b=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vb=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,xb=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,bb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ab=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Rb=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wb=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Cb=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Db=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Ub=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lb=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Nb=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ob=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Pb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,zb=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Ib=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Bb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Fb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Hb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Gb=`uniform vec3 color;
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
}`,Vb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,kb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,le={alphahash_fragment:fE,alphahash_pars_fragment:hE,alphamap_fragment:dE,alphamap_pars_fragment:pE,alphatest_fragment:mE,alphatest_pars_fragment:gE,aomap_fragment:_E,aomap_pars_fragment:vE,batching_pars_vertex:xE,batching_vertex:yE,begin_vertex:SE,beginnormal_vertex:ME,bsdfs:EE,iridescence_fragment:TE,bumpmap_pars_fragment:bE,clipping_planes_fragment:AE,clipping_planes_pars_fragment:RE,clipping_planes_pars_vertex:wE,clipping_planes_vertex:CE,color_fragment:DE,color_pars_fragment:UE,color_pars_vertex:LE,color_vertex:NE,common:OE,cube_uv_reflection_fragment:PE,defaultnormal_vertex:zE,displacementmap_pars_vertex:IE,displacementmap_vertex:BE,emissivemap_fragment:FE,emissivemap_pars_fragment:HE,colorspace_fragment:GE,colorspace_pars_fragment:VE,envmap_fragment:kE,envmap_common_pars_fragment:XE,envmap_pars_fragment:WE,envmap_pars_vertex:qE,envmap_physical_pars_fragment:iT,envmap_vertex:YE,fog_vertex:ZE,fog_pars_vertex:jE,fog_fragment:KE,fog_pars_fragment:QE,gradientmap_pars_fragment:JE,lightmap_pars_fragment:$E,lights_lambert_fragment:tT,lights_lambert_pars_fragment:eT,lights_pars_begin:nT,lights_toon_fragment:aT,lights_toon_pars_fragment:sT,lights_phong_fragment:rT,lights_phong_pars_fragment:oT,lights_physical_fragment:lT,lights_physical_pars_fragment:cT,lights_fragment_begin:uT,lights_fragment_maps:fT,lights_fragment_end:hT,logdepthbuf_fragment:dT,logdepthbuf_pars_fragment:pT,logdepthbuf_pars_vertex:mT,logdepthbuf_vertex:gT,map_fragment:_T,map_pars_fragment:vT,map_particle_fragment:xT,map_particle_pars_fragment:yT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:MT,morphinstance_vertex:ET,morphcolor_vertex:TT,morphnormal_vertex:bT,morphtarget_pars_vertex:AT,morphtarget_vertex:RT,normal_fragment_begin:wT,normal_fragment_maps:CT,normal_pars_fragment:DT,normal_pars_vertex:UT,normal_vertex:LT,normalmap_pars_fragment:NT,clearcoat_normal_fragment_begin:OT,clearcoat_normal_fragment_maps:PT,clearcoat_pars_fragment:zT,iridescence_pars_fragment:IT,opaque_fragment:BT,packing:FT,premultiplied_alpha_fragment:HT,project_vertex:GT,dithering_fragment:VT,dithering_pars_fragment:kT,roughnessmap_fragment:XT,roughnessmap_pars_fragment:WT,shadowmap_pars_fragment:qT,shadowmap_pars_vertex:YT,shadowmap_vertex:ZT,shadowmask_pars_fragment:jT,skinbase_vertex:KT,skinning_pars_vertex:QT,skinning_vertex:JT,skinnormal_vertex:$T,specularmap_fragment:tb,specularmap_pars_fragment:eb,tonemapping_fragment:nb,tonemapping_pars_fragment:ib,transmission_fragment:ab,transmission_pars_fragment:sb,uv_pars_fragment:rb,uv_pars_vertex:ob,uv_vertex:lb,worldpos_vertex:cb,background_vert:ub,background_frag:fb,backgroundCube_vert:hb,backgroundCube_frag:db,cube_vert:pb,cube_frag:mb,depth_vert:gb,depth_frag:_b,distanceRGBA_vert:vb,distanceRGBA_frag:xb,equirect_vert:yb,equirect_frag:Sb,linedashed_vert:Mb,linedashed_frag:Eb,meshbasic_vert:Tb,meshbasic_frag:bb,meshlambert_vert:Ab,meshlambert_frag:Rb,meshmatcap_vert:wb,meshmatcap_frag:Cb,meshnormal_vert:Db,meshnormal_frag:Ub,meshphong_vert:Lb,meshphong_frag:Nb,meshphysical_vert:Ob,meshphysical_frag:Pb,meshtoon_vert:zb,meshtoon_frag:Ib,points_vert:Bb,points_frag:Fb,shadow_vert:Hb,shadow_frag:Gb,sprite_vert:Vb,sprite_frag:kb},Ut={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},wi={basic:{uniforms:zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:zn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:zn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:zn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:zn([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:zn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:zn([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:zn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:zn([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:zn([Ut.common,Ut.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:zn([Ut.lights,Ut.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};wi.physical={uniforms:zn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const Ic={r:0,b:0,g:0},xs=new Ui,Xb=new Xe;function Wb(r,t,n,a,o,c,f){const h=new ye(0);let m=c===!0?0:1,p,g,_=null,x=0,y=null;function E(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?n:t).get(R)),R}function T(D){let R=!1;const F=E(D);F===null?v(h,m):F&&F.isColor&&(v(F,1),R=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(D,R){const F=E(R);F&&(F.isCubeTexture||F.mapping===nu)?(g===void 0&&(g=new In(new Fr(1,1,1),new Za({name:"BackgroundCubeMaterial",uniforms:Or(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),xs.copy(R.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(xs)),g.material.toneMapped=be.getTransfer(F.colorSpace)!==ze,(_!==F||x!==F.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=F,x=F.version,y=r.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new In(new zr(2,2),new Za({name:"BackgroundMaterial",uniforms:Or(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=be.getTransfer(F.colorSpace)!==ze,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||x!==F.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=F,x=F.version,y=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,R){D.getRGB(Ic,xv(r)),a.buffers.color.setClear(Ic.r,Ic.g,Ic.b,R,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,R=1){h.set(D),m=R,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(h,m)},render:T,addToRenderList:S,dispose:O}}function qb(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=x(null);let c=o,f=!1;function h(C,G,it,at,ut){let ct=!1;const P=_(at,it,G);c!==P&&(c=P,p(c.object)),ct=y(C,at,it,ut),ct&&E(C,at,it,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(ct||f)&&(f=!1,R(C,G,it,at),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function _(C,G,it){const at=it.wireframe===!0;let ut=a[C.id];ut===void 0&&(ut={},a[C.id]=ut);let ct=ut[G.id];ct===void 0&&(ct={},ut[G.id]=ct);let P=ct[at];return P===void 0&&(P=x(m()),ct[at]=P),P}function x(C){const G=[],it=[],at=[];for(let ut=0;ut<n;ut++)G[ut]=0,it[ut]=0,at[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:it,attributeDivisors:at,object:C,attributes:{},index:null}}function y(C,G,it,at){const ut=c.attributes,ct=G.attributes;let P=0;const J=it.getAttributes();for(const Y in J)if(J[Y].location>=0){const L=ut[Y];let K=ct[Y];if(K===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),L===void 0||L.attribute!==K||K&&L.data!==K.data)return!0;P++}return c.attributesNum!==P||c.index!==at}function E(C,G,it,at){const ut={},ct=G.attributes;let P=0;const J=it.getAttributes();for(const Y in J)if(J[Y].location>=0){let L=ct[Y];L===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const K={};K.attribute=L,L&&L.data&&(K.data=L.data),ut[Y]=K,P++}c.attributes=ut,c.attributesNum=P,c.index=at}function T(){const C=c.newAttributes;for(let G=0,it=C.length;G<it;G++)C[G]=0}function S(C){v(C,0)}function v(C,G){const it=c.newAttributes,at=c.enabledAttributes,ut=c.attributeDivisors;it[C]=1,at[C]===0&&(r.enableVertexAttribArray(C),at[C]=1),ut[C]!==G&&(r.vertexAttribDivisor(C,G),ut[C]=G)}function O(){const C=c.newAttributes,G=c.enabledAttributes;for(let it=0,at=G.length;it<at;it++)G[it]!==C[it]&&(r.disableVertexAttribArray(it),G[it]=0)}function D(C,G,it,at,ut,ct,P){P===!0?r.vertexAttribIPointer(C,G,it,ut,ct):r.vertexAttribPointer(C,G,it,at,ut,ct)}function R(C,G,it,at){T();const ut=at.attributes,ct=it.getAttributes(),P=G.defaultAttributeValues;for(const J in ct){const Y=ct[J];if(Y.location>=0){let St=ut[J];if(St===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const L=St.normalized,K=St.itemSize,ft=t.get(St);if(ft===void 0)continue;const gt=ft.buffer,Q=ft.type,_t=ft.bytesPerElement,dt=Q===r.INT||Q===r.UNSIGNED_INT||St.gpuType===kd;if(St.isInterleavedBufferAttribute){const Tt=St.data,Ct=Tt.stride,ie=St.offset;if(Tt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<Y.locationSize;Yt++)v(Y.location+Yt,Tt.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Yt=0;Yt<Y.locationSize;Yt++)S(Y.location+Yt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Yt=0;Yt<Y.locationSize;Yt++)D(Y.location+Yt,K/Y.locationSize,Q,L,Ct*_t,(ie+K/Y.locationSize*Yt)*_t,dt)}else{if(St.isInstancedBufferAttribute){for(let Tt=0;Tt<Y.locationSize;Tt++)v(Y.location+Tt,St.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Tt=0;Tt<Y.locationSize;Tt++)S(Y.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Tt=0;Tt<Y.locationSize;Tt++)D(Y.location+Tt,K/Y.locationSize,Q,L,K*_t,K/Y.locationSize*Tt*_t,dt)}}else if(P!==void 0){const L=P[J];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(Y.location,L);break;case 3:r.vertexAttrib3fv(Y.location,L);break;case 4:r.vertexAttrib4fv(Y.location,L);break;default:r.vertexAttrib1fv(Y.location,L)}}}}O()}function F(){k();for(const C in a){const G=a[C];for(const it in G){const at=G[it];for(const ut in at)g(at[ut].object),delete at[ut];delete G[it]}delete a[C]}}function B(C){if(a[C.id]===void 0)return;const G=a[C.id];for(const it in G){const at=G[it];for(const ut in at)g(at[ut].object),delete at[ut];delete G[it]}delete a[C.id]}function z(C){for(const G in a){const it=a[G];if(it[C.id]===void 0)continue;const at=it[C.id];for(const ut in at)g(at[ut].object),delete at[ut];delete it[C.id]}}function k(){U(),f=!0,c!==o&&(c=o,p(c.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:k,resetDefaultState:U,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:S,disableUnusedAttributes:O}}function Yb(r,t,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,a,1)}function m(p,g,_,x){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*x[T];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Zb(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(z){return!(z!==yi&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const k=z===el&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ua&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==oa&&!k)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:F,maxSamples:B}}function jb(r){const t=this;let n=null,a=0,o=!1,c=!1;const f=new ka,h=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||a!==0||o;return o=x,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,y){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!o||E===null||E.length===0||c&&!S)c?g(null):p();else{const O=c?0:a,D=O*4;let R=v.clippingState||null;m.value=R,R=g(E,x,D,y);for(let F=0;F!==D;++F)R[F]=n[F];v.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,x,y,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const v=y+T*4,O=x.matrixWorldInverse;h.getNormalMatrix(O),(S===null||S.length<v)&&(S=new Float32Array(v));for(let D=0,R=y;D!==T;++D,R+=4)f.copy(_[D]).applyMatrix4(O,h),f.normal.toArray(S,R),S[R+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function Kb(r){let t=new WeakMap;function n(f,h){return h===ad?f.mapping=Ur:h===sd&&(f.mapping=Lr),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===ad||h===sd)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new mM(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",o),n(p.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Tr=4,A0=[.125,.215,.35,.446,.526,.582],Es=20,Vh=new Nv,R0=new ye;let kh=null,Xh=0,Wh=0,qh=!1;const Ss=(1+Math.sqrt(5))/2,Mr=1/Ss,w0=[new V(-Ss,Mr,0),new V(Ss,Mr,0),new V(-Mr,0,Ss),new V(Mr,0,Ss),new V(0,Ss,-Mr),new V(0,Ss,Mr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Qb=new V;class C0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:f=256,position:h=Qb}=c;kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Xh,Wh),this._renderer.xr.enabled=qh,t.scissorTest=!1,Bc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ur||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:el,format:yi,colorSpace:Nr,depthBuffer:!1},o=D0(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D0(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jb(c)),this._blurMaterial=$b(c,t,n)}return o}_compileMaterial(t){const n=new In(this._lodPlanes[0],t);this._renderer.compile(n,Vh)}_sceneToCubeUV(t,n,a,o,c){const m=new hi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(R0),_.toneMapping=qa,_.autoClear=!1;const E=new Jc({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),T=new In(new Fr,E);let S=!1;const v=t.background;v?v.isColor&&(E.color.copy(v),t.background=null,S=!0):(E.color.copy(R0),S=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):D===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const R=this._cubeSize;Bc(o,D*R,O>2?R:0,R,R),_.setRenderTarget(o),S&&_.render(T,m),_.render(t,m)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=y,_.autoClear=x,t.background=v}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Ur||t.mapping===Lr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=L0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U0());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new In(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Bc(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,Vh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=w0[(o-c-1)%w0.length];this._blur(t,c-1,c,f,h)}n.autoClear=a}_blur(t,n,a,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,o,"latitudinal",c),this._halfBlur(f,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new In(this._lodPlanes[o],p),x=p.uniforms,y=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Es-1),T=c/E,S=isFinite(c)?1+Math.floor(g*T):Es;S>Es&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Es}`);const v=[];let O=0;for(let z=0;z<Es;++z){const k=z/T,U=Math.exp(-k*k/2);v.push(U),z===0?O+=U:z<S&&(O+=2*U)}for(let z=0;z<v.length;z++)v[z]=v[z]/O;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-a;const R=this._sizeLods[o],F=3*R*(o>D-Tr?o-D+Tr:0),B=4*(this._cubeSize-R);Bc(n,F,B,3*R,2*R),m.setRenderTarget(n),m.render(_,Vh)}}function Jb(r){const t=[],n=[],a=[];let o=r;const c=r-Tr+1+A0.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);n.push(h);let m=1/h;f>r-Tr?m=A0[f-r+Tr-1]:f===0&&(m=0),a.push(m);const p=1/(h-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,S=2,v=1,O=new Float32Array(T*E*y),D=new Float32Array(S*E*y),R=new Float32Array(v*E*y);for(let B=0;B<y;B++){const z=B%3*2/3-1,k=B>2?0:-1,U=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];O.set(U,T*E*B),D.set(x,S*E*B);const C=[B,B,B,B,B,B];R.set(C,v*E*B)}const F=new yn;F.setAttribute("position",new Di(O,T)),F.setAttribute("uv",new Di(D,S)),F.setAttribute("faceIndex",new Di(R,v)),t.push(F),o>Tr&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function D0(r,t,n){const a=new ws(r,t,n);return a.texture.mapping=nu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Bc(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function $b(r,t,n){const a=new Float32Array(Es),o=new V(0,1,0);return new Za({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:sp(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function U0(){return new Za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function L0(){return new Za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function sp(){return`

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
	`}function t1(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,p=m===ad||m===sd,g=m===Ur||m===Lr;if(p||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new C0(r)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new C0(r)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function o(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function e1(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Yc("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function n1(r,t,n,a){const o={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete o[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(_,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const O=y.array;T=y.version;for(let D=0,R=O.length;D<R;D+=3){const F=O[D+0],B=O[D+1],z=O[D+2];x.push(F,B,B,z,z,F)}}else if(E!==void 0){const O=E.array;T=E.version;for(let D=0,R=O.length/3-1;D<R;D+=3){const F=D+0,B=D+1,z=D+2;x.push(F,B,B,z,z,F)}}else return;const S=new(dv(x)?vv:_v)(x,1);S.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function i1(r,t,n){let a;function o(x){a=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,y){r.drawElements(a,y,c,x*f),n.update(y,a,1)}function p(x,y,E){E!==0&&(r.drawElementsInstanced(a,y,c,x*f,E),n.update(y,a,E))}function g(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,x,0,E);let S=0;for(let v=0;v<E;v++)S+=y[v];n.update(S,a,1)}function _(x,y,E,T){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/f,y[v],T[v]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,x,0,T,0,E);let v=0;for(let O=0;O<E;O++)v+=y[O]*T[O];n.update(v,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function a1(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function s1(r,t,n){const a=new WeakMap,o=new Qe;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=a.get(h);if(x===void 0||x.count!==_){let C=function(){k.dispose(),a.delete(h),h.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),S===!0&&(R=3);let F=h.attributes.position.count*R,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*B*4*_),k=new pv(z,F,B,_);k.type=oa,k.needsUpdate=!0;const U=R*4;for(let G=0;G<_;G++){const it=v[G],at=O[G],ut=D[G],ct=F*B*4*G;for(let P=0;P<it.count;P++){const J=P*U;E===!0&&(o.fromBufferAttribute(it,P),z[ct+J+0]=o.x,z[ct+J+1]=o.y,z[ct+J+2]=o.z,z[ct+J+3]=0),T===!0&&(o.fromBufferAttribute(at,P),z[ct+J+4]=o.x,z[ct+J+5]=o.y,z[ct+J+6]=o.z,z[ct+J+7]=0),S===!0&&(o.fromBufferAttribute(ut,P),z[ct+J+8]=o.x,z[ct+J+9]=o.y,z[ct+J+10]=o.z,z[ct+J+11]=ut.itemSize===4?o.w:1)}}x={count:_,texture:k,size:new Bt(F,B)},a.set(h,x),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function r1(r,t,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);if(o.get(_)!==p&&(t.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function f(){o=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const Pv=new qn,N0=new Mv(1,1),zv=new pv,Iv=new JS,Bv=new Sv,O0=[],P0=[],z0=new Float32Array(16),I0=new Float32Array(9),B0=new Float32Array(4);function Hr(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=O0[o];if(c===void 0&&(c=new Float32Array(o),O0[o]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function fn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function hn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function au(r,t){let n=P0[t];n===void 0&&(n=new Int32Array(t),P0[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function o1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function l1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;r.uniform2fv(this.addr,t),hn(n,t)}}function c1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(fn(n,t))return;r.uniform3fv(this.addr,t),hn(n,t)}}function u1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;r.uniform4fv(this.addr,t),hn(n,t)}}function f1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(fn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),hn(n,t)}else{if(fn(n,a))return;B0.set(a),r.uniformMatrix2fv(this.addr,!1,B0),hn(n,a)}}function h1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(fn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),hn(n,t)}else{if(fn(n,a))return;I0.set(a),r.uniformMatrix3fv(this.addr,!1,I0),hn(n,a)}}function d1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(fn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),hn(n,t)}else{if(fn(n,a))return;z0.set(a),r.uniformMatrix4fv(this.addr,!1,z0),hn(n,a)}}function p1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function m1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;r.uniform2iv(this.addr,t),hn(n,t)}}function g1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fn(n,t))return;r.uniform3iv(this.addr,t),hn(n,t)}}function _1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;r.uniform4iv(this.addr,t),hn(n,t)}}function v1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function x1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fn(n,t))return;r.uniform2uiv(this.addr,t),hn(n,t)}}function y1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fn(n,t))return;r.uniform3uiv(this.addr,t),hn(n,t)}}function S1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fn(n,t))return;r.uniform4uiv(this.addr,t),hn(n,t)}}function M1(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(N0.compareFunction=hv,c=N0):c=Pv,n.setTexture2D(t||c,o)}function E1(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||Iv,o)}function T1(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||Bv,o)}function b1(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||zv,o)}function A1(r){switch(r){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return h1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return x1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return b1}}function R1(r,t){r.uniform1fv(this.addr,t)}function w1(r,t){const n=Hr(t,this.size,2);r.uniform2fv(this.addr,n)}function C1(r,t){const n=Hr(t,this.size,3);r.uniform3fv(this.addr,n)}function D1(r,t){const n=Hr(t,this.size,4);r.uniform4fv(this.addr,n)}function U1(r,t){const n=Hr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function L1(r,t){const n=Hr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function N1(r,t){const n=Hr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function O1(r,t){r.uniform1iv(this.addr,t)}function P1(r,t){r.uniform2iv(this.addr,t)}function z1(r,t){r.uniform3iv(this.addr,t)}function I1(r,t){r.uniform4iv(this.addr,t)}function B1(r,t){r.uniform1uiv(this.addr,t)}function F1(r,t){r.uniform2uiv(this.addr,t)}function H1(r,t){r.uniform3uiv(this.addr,t)}function G1(r,t){r.uniform4uiv(this.addr,t)}function V1(r,t,n){const a=this.cache,o=t.length,c=au(n,o);fn(a,c)||(r.uniform1iv(this.addr,c),hn(a,c));for(let f=0;f!==o;++f)n.setTexture2D(t[f]||Pv,c[f])}function k1(r,t,n){const a=this.cache,o=t.length,c=au(n,o);fn(a,c)||(r.uniform1iv(this.addr,c),hn(a,c));for(let f=0;f!==o;++f)n.setTexture3D(t[f]||Iv,c[f])}function X1(r,t,n){const a=this.cache,o=t.length,c=au(n,o);fn(a,c)||(r.uniform1iv(this.addr,c),hn(a,c));for(let f=0;f!==o;++f)n.setTextureCube(t[f]||Bv,c[f])}function W1(r,t,n){const a=this.cache,o=t.length,c=au(n,o);fn(a,c)||(r.uniform1iv(this.addr,c),hn(a,c));for(let f=0;f!==o;++f)n.setTexture2DArray(t[f]||zv,c[f])}function q1(r){switch(r){case 5126:return R1;case 35664:return w1;case 35665:return C1;case 35666:return D1;case 35674:return U1;case 35675:return L1;case 35676:return N1;case 5124:case 35670:return O1;case 35667:case 35671:return P1;case 35668:case 35672:return z1;case 35669:case 35673:return I1;case 5125:return B1;case 36294:return F1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return W1}}class Y1{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=A1(n.type)}}class Z1{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=q1(n.type)}}class j1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function F0(r,t){r.seq.push(t),r.map[t.id]=t}function K1(r,t,n){const a=r.name,o=a.length;for(Yh.lastIndex=0;;){const c=Yh.exec(a),f=Yh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===o){F0(n,p===void 0?new Y1(h,r,t):new Z1(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new j1(h),F0(n,_)),n=_}}}class Zc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),f=t.getUniformLocation(n,c.name);K1(c,f,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in n&&a.push(f)}return a}}function H0(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const Q1=37297;let J1=0;function $1(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=o;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const G0=new re;function tA(r){be._getMatrix(G0,be.workingColorSpace,r);const t=`mat3( ${G0.elements.map(n=>n.toFixed(4))} )`;switch(be.getTransfer(r)){case jc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function V0(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),o=r.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+$1(r.getShaderSource(t),f)}else return o}function eA(r,t){const n=tA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nA(r,t){let n;switch(t){case ES:n="Linear";break;case TS:n="Reinhard";break;case bS:n="Cineon";break;case AS:n="ACESFilmic";break;case wS:n="AgX";break;case CS:n="Neutral";break;case RS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fc=new V;function iA(){be.getLuminanceCoefficients(Fc);const r=Fc.x.toFixed(4),t=Fc.y.toFixed(4),n=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function sA(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function rA(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function Xo(r){return r!==""}function k0(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function X0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(r){return r.replace(oA,cA)}const lA=new Map;function cA(r,t){let n=le[t];if(n===void 0){const a=lA.get(t);if(a!==void 0)n=le[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Fd(n)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W0(r){return r.replace(uA,fA)}function fA(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function q0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===J0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===nS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function dA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ur:case Lr:t="ENVMAP_TYPE_CUBE";break;case nu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function mA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $0:t="ENVMAP_BLENDING_MULTIPLY";break;case SS:t="ENVMAP_BLENDING_MIX";break;case MS:t="ENVMAP_BLENDING_ADD";break}return t}function gA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function _A(r,t,n,a){const o=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=hA(n),p=dA(n),g=pA(n),_=mA(n),x=gA(n),y=aA(n),E=sA(c),T=o.createProgram();let S,v,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Xo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Xo).join(`
`),v.length>0&&(v+=`
`)):(S=[q0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),v=[q0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qa?"#define TONE_MAPPING":"",n.toneMapping!==qa?le.tonemapping_pars_fragment:"",n.toneMapping!==qa?nA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,eA("linearToOutputTexel",n.outputColorSpace),iA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),f=Fd(f),f=k0(f,n),f=X0(f,n),h=Fd(h),h=k0(h,n),h=X0(h,n),f=W0(f),h=W0(h),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=O+S+f,R=O+v+h,F=H0(o,o.VERTEX_SHADER,D),B=H0(o,o.FRAGMENT_SHADER,R);o.attachShader(T,F),o.attachShader(T,B),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function z(G){if(r.debug.checkShaderErrors){const it=o.getProgramInfoLog(T).trim(),at=o.getShaderInfoLog(F).trim(),ut=o.getShaderInfoLog(B).trim();let ct=!0,P=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ct=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,F,B);else{const J=V0(o,F,"vertex"),Y=V0(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+it+`
`+J+`
`+Y)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(at===""||ut==="")&&(P=!1);P&&(G.diagnostics={runnable:ct,programLog:it,vertexShader:{log:at,prefix:S},fragmentShader:{log:ut,prefix:v}})}o.deleteShader(F),o.deleteShader(B),k=new Zc(o,T),U=rA(o,T)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,Q1)),C},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=J1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=B,this}let vA=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new yA(t),n.set(t,a)),a}}class yA{constructor(t){this.id=vA++,this.code=t,this.usedTimes=0}}function SA(r,t,n,a,o,c,f){const h=new mv,m=new xA,p=new Set,g=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,C,G,it,at){const ut=it.fog,ct=at.geometry,P=U.isMeshStandardMaterial?it.environment:null,J=(U.isMeshStandardMaterial?n:t).get(U.envMap||P),Y=J&&J.mapping===nu?J.image.height:null,St=E[U.type];U.precision!==null&&(y=o.getMaxPrecision(U.precision),y!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",y,"instead."));const L=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,K=L!==void 0?L.length:0;let ft=0;ct.morphAttributes.position!==void 0&&(ft=1),ct.morphAttributes.normal!==void 0&&(ft=2),ct.morphAttributes.color!==void 0&&(ft=3);let gt,Q,_t,dt;if(St){const Me=wi[St];gt=Me.vertexShader,Q=Me.fragmentShader}else gt=U.vertexShader,Q=U.fragmentShader,m.update(U),_t=m.getVertexShaderID(U),dt=m.getFragmentShaderID(U);const Tt=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),ie=at.isInstancedMesh===!0,Yt=at.isBatchedMesh===!0,Ae=!!U.map,we=!!U.matcap,oe=!!J,H=!!U.aoMap,Sn=!!U.lightMap,ae=!!U.bumpMap,Jt=!!U.normalMap,Gt=!!U.displacementMap,Ue=!!U.emissiveMap,Vt=!!U.metalnessMap,N=!!U.roughnessMap,A=U.anisotropy>0,et=U.clearcoat>0,yt=U.dispersion>0,Mt=U.iridescence>0,pt=U.sheen>0,zt=U.transmission>0,At=A&&!!U.anisotropyMap,Rt=et&&!!U.clearcoatMap,ge=et&&!!U.clearcoatNormalMap,bt=et&&!!U.clearcoatRoughnessMap,Ft=Mt&&!!U.iridescenceMap,Zt=Mt&&!!U.iridescenceThicknessMap,Kt=pt&&!!U.sheenColorMap,Ot=pt&&!!U.sheenRoughnessMap,ce=!!U.specularMap,ee=!!U.specularColorMap,Le=!!U.specularIntensityMap,W=zt&&!!U.transmissionMap,Lt=zt&&!!U.thicknessMap,lt=!!U.gradientMap,vt=!!U.alphaMap,Pt=U.alphaTest>0,Nt=!!U.alphaHash,ne=!!U.extensions;let He=qa;U.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(He=r.toneMapping);const tn={shaderID:St,shaderType:U.type,shaderName:U.name,vertexShader:gt,fragmentShader:Q,defines:U.defines,customVertexShaderID:_t,customFragmentShaderID:dt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:y,batching:Yt,batchingColor:Yt&&at._colorsTexture!==null,instancing:ie,instancingColor:ie&&at.instanceColor!==null,instancingMorph:ie&&at.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Tt===null?r.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Nr,alphaToCoverage:!!U.alphaToCoverage,map:Ae,matcap:we,envMap:oe,envMapMode:oe&&J.mapping,envMapCubeUVHeight:Y,aoMap:H,lightMap:Sn,bumpMap:ae,normalMap:Jt,displacementMap:x&&Gt,emissiveMap:Ue,normalMapObjectSpace:Jt&&U.normalMapType===NS,normalMapTangentSpace:Jt&&U.normalMapType===fv,metalnessMap:Vt,roughnessMap:N,anisotropy:A,anisotropyMap:At,clearcoat:et,clearcoatMap:Rt,clearcoatNormalMap:ge,clearcoatRoughnessMap:bt,dispersion:yt,iridescence:Mt,iridescenceMap:Ft,iridescenceThicknessMap:Zt,sheen:pt,sheenColorMap:Kt,sheenRoughnessMap:Ot,specularMap:ce,specularColorMap:ee,specularIntensityMap:Le,transmission:zt,transmissionMap:W,thicknessMap:Lt,gradientMap:lt,opaque:U.transparent===!1&&U.blending===Rr&&U.alphaToCoverage===!1,alphaMap:vt,alphaTest:Pt,alphaHash:Nt,combine:U.combine,mapUv:Ae&&T(U.map.channel),aoMapUv:H&&T(U.aoMap.channel),lightMapUv:Sn&&T(U.lightMap.channel),bumpMapUv:ae&&T(U.bumpMap.channel),normalMapUv:Jt&&T(U.normalMap.channel),displacementMapUv:Gt&&T(U.displacementMap.channel),emissiveMapUv:Ue&&T(U.emissiveMap.channel),metalnessMapUv:Vt&&T(U.metalnessMap.channel),roughnessMapUv:N&&T(U.roughnessMap.channel),anisotropyMapUv:At&&T(U.anisotropyMap.channel),clearcoatMapUv:Rt&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:ge&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(U.sheenRoughnessMap.channel),specularMapUv:ce&&T(U.specularMap.channel),specularColorMapUv:ee&&T(U.specularColorMap.channel),specularIntensityMapUv:Le&&T(U.specularIntensityMap.channel),transmissionMapUv:W&&T(U.transmissionMap.channel),thicknessMapUv:Lt&&T(U.thicknessMap.channel),alphaMapUv:vt&&T(U.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Jt||A),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ct.attributes.uv&&(Ae||vt),fog:!!ut,useFog:U.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ct,skinning:at.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ft,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:Ae&&U.map.isVideoTexture===!0&&be.getTransfer(U.map.colorSpace)===ze,decodeVideoTextureEmissive:Ue&&U.emissiveMap.isVideoTexture===!0&&be.getTransfer(U.emissiveMap.colorSpace)===ze,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ra,flipSided:U.side===Wn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ne&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&U.extensions.multiDraw===!0||Yt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function v(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const G in U.defines)C.push(G),C.push(U.defines[G]);return U.isRawShaderMaterial===!1&&(O(C,U),D(C,U),C.push(r.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function O(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function D(U,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),U.push(h.mask)}function R(U){const C=E[U.type];let G;if(C){const it=wi[C];G=fM.clone(it.uniforms)}else G=U.uniforms;return G}function F(U,C){let G;for(let it=0,at=g.length;it<at;it++){const ut=g[it];if(ut.cacheKey===C){G=ut,++G.usedTimes;break}}return G===void 0&&(G=new _A(r,C,U,c),g.push(G)),G}function B(U){if(--U.usedTimes===0){const C=g.indexOf(U);g[C]=g[g.length-1],g.pop(),U.destroy()}}function z(U){m.remove(U)}function k(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:R,acquireProgram:F,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:k}}function MA(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function o(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function EA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Y0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Z0(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function f(_,x,y,E,T,S){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=S),t++,v}function h(_,x,y,E,T,S){const v=f(_,x,y,E,T,S);y.transmission>0?a.push(v):y.transparent===!0?o.push(v):n.push(v)}function m(_,x,y,E,T,S){const v=f(_,x,y,E,T,S);y.transmission>0?a.unshift(v):y.transparent===!0?o.unshift(v):n.unshift(v)}function p(_,x){n.length>1&&n.sort(_||EA),a.length>1&&a.sort(x||Y0),o.length>1&&o.sort(x||Y0)}function g(){for(let _=t,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:m,finish:g,sort:p}}function TA(){let r=new WeakMap;function t(a,o){const c=r.get(a);let f;return c===void 0?(f=new Z0,r.set(a,[f])):o>=c.length?(f=new Z0,c.push(f)):f=c[o],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function bA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new V,color:new ye};break;case"SpotLight":n={position:new V,direction:new V,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":n={color:new ye,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=n,n}}}function AA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let RA=0;function wA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function CA(r){const t=new bA,n=AA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new V);const o=new V,c=new Xe,f=new Xe;function h(p){let g=0,_=0,x=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let y=0,E=0,T=0,S=0,v=0,O=0,D=0,R=0,F=0,B=0,z=0;p.sort(wA);for(let U=0,C=p.length;U<C;U++){const G=p[U],it=G.color,at=G.intensity,ut=G.distance,ct=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=it.r*at,_+=it.g*at,x+=it.b*at;else if(G.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(G.sh.coefficients[P],at);z++}else if(G.isDirectionalLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const J=G.shadow,Y=n.get(G);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,a.directionalShadow[y]=Y,a.directionalShadowMap[y]=ct,a.directionalShadowMatrix[y]=G.shadow.matrix,O++}a.directional[y]=P,y++}else if(G.isSpotLight){const P=t.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(it).multiplyScalar(at),P.distance=ut,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,a.spot[T]=P;const J=G.shadow;if(G.map&&(a.spotLightMap[F]=G.map,F++,J.updateMatrices(G),G.castShadow&&B++),a.spotLightMatrix[T]=J.matrix,G.castShadow){const Y=n.get(G);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,a.spotShadow[T]=Y,a.spotShadowMap[T]=ct,R++}T++}else if(G.isRectAreaLight){const P=t.get(G);P.color.copy(it).multiplyScalar(at),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=P,S++}else if(G.isPointLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const J=G.shadow,Y=n.get(G);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,Y.shadowCameraNear=J.camera.near,Y.shadowCameraFar=J.camera.far,a.pointShadow[E]=Y,a.pointShadowMap[E]=ct,a.pointShadowMatrix[E]=G.shadow.matrix,D++}a.point[E]=P,E++}else if(G.isHemisphereLight){const P=t.get(G);P.skyColor.copy(G.color).multiplyScalar(at),P.groundColor.copy(G.groundColor).multiplyScalar(at),a.hemi[v]=P,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ut.LTC_FLOAT_1,a.rectAreaLTC2=Ut.LTC_FLOAT_2):(a.rectAreaLTC1=Ut.LTC_HALF_1,a.rectAreaLTC2=Ut.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=x;const k=a.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==S||k.hemiLength!==v||k.numDirectionalShadows!==O||k.numPointShadows!==D||k.numSpotShadows!==R||k.numSpotMaps!==F||k.numLightProbes!==z)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=S,a.point.length=E,a.hemi.length=v,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=R+F-B,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=z,k.directionalLength=y,k.pointLength=E,k.spotLength=T,k.rectAreaLength=S,k.hemiLength=v,k.numDirectionalShadows=O,k.numPointShadows=D,k.numSpotShadows=R,k.numSpotMaps=F,k.numLightProbes=z,a.version=RA++)}function m(p,g){let _=0,x=0,y=0,E=0,T=0;const S=g.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const D=p[v];if(D.isDirectionalLight){const R=a.directional[_];R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),_++}else if(D.isSpotLight){const R=a.spot[y];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const R=a.rectArea[E];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),f.identity(),c.copy(D.matrixWorld),c.premultiply(S),f.extractRotation(c),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const R=a.point[x];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const R=a.hemi[T];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:a}}function j0(r){const t=new CA(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function DA(r){let t=new WeakMap;function n(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new j0(r),t.set(o,[h])):c>=f.length?(h=new j0(r),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LA=`uniform sampler2D shadow_pass;
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
}`;function NA(r,t,n){let a=new Qd;const o=new Bt,c=new Bt,f=new Qe,h=new KM({depthPacking:LS}),m=new QM,p={},g=n.maxTextureSize,_={[Ya]:Wn,[Wn]:Ya,[ra]:ra},x=new Za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:UA,fragmentShader:LA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new yn;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new In(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J0;let v=this.type;this.render=function(B,z,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const U=r.getRenderTarget(),C=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),it=r.state;it.setBlending(Wa),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const at=v!==sa&&this.type===sa,ut=v===sa&&this.type!==sa;for(let ct=0,P=B.length;ct<P;ct++){const J=B[ct],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const St=Y.getFrameExtents();if(o.multiply(St),c.copy(Y.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/St.x),o.x=c.x*St.x,Y.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/St.y),o.y=c.y*St.y,Y.mapSize.y=c.y)),Y.map===null||at===!0||ut===!0){const K=this.type!==sa?{minFilter:Si,magFilter:Si}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ws(o.x,o.y,K),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const L=Y.getViewportCount();for(let K=0;K<L;K++){const ft=Y.getViewport(K);f.set(c.x*ft.x,c.y*ft.y,c.x*ft.z,c.y*ft.w),it.viewport(f),Y.updateMatrices(J,K),a=Y.getFrustum(),R(z,k,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===sa&&O(Y,k),Y.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(U,C,G)};function O(B,z){const k=t.update(T);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ws(o.x,o.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,k,x,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,k,y,T,null)}function D(B,z,k,U){let C=null;const G=k.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)C=G;else if(C=k.isPointLight===!0?m:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const it=C.uuid,at=z.uuid;let ut=p[it];ut===void 0&&(ut={},p[it]=ut);let ct=ut[at];ct===void 0&&(ct=C.clone(),ut[at]=ct,z.addEventListener("dispose",F)),C=ct}if(C.visible=z.visible,C.wireframe=z.wireframe,U===sa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:_[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const it=r.properties.get(C);it.light=k}return C}function R(B,z,k,U,C){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===sa)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,B.matrixWorld);const at=t.update(B),ut=B.material;if(Array.isArray(ut)){const ct=at.groups;for(let P=0,J=ct.length;P<J;P++){const Y=ct[P],St=ut[Y.materialIndex];if(St&&St.visible){const L=D(B,St,U,C);B.onBeforeShadow(r,B,z,k,at,L,Y),r.renderBufferDirect(k,null,at,L,B,Y),B.onAfterShadow(r,B,z,k,at,L,Y)}}}else if(ut.visible){const ct=D(B,ut,U,C);B.onBeforeShadow(r,B,z,k,at,ct,null),r.renderBufferDirect(k,null,at,ct,B,null),B.onAfterShadow(r,B,z,k,at,ct,null)}}const it=B.children;for(let at=0,ut=it.length;at<ut;at++)R(it[at],z,k,U,C)}function F(B){B.target.removeEventListener("dispose",F);for(const k in p){const U=p[k],C=B.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const OA={[Qh]:Jh,[$h]:nd,[td]:id,[Dr]:ed,[Jh]:Qh,[nd]:$h,[id]:td,[ed]:Dr};function PA(r,t){function n(){let W=!1;const Lt=new Qe;let lt=null;const vt=new Qe(0,0,0,0);return{setMask:function(Pt){lt!==Pt&&!W&&(r.colorMask(Pt,Pt,Pt,Pt),lt=Pt)},setLocked:function(Pt){W=Pt},setClear:function(Pt,Nt,ne,He,tn){tn===!0&&(Pt*=He,Nt*=He,ne*=He),Lt.set(Pt,Nt,ne,He),vt.equals(Lt)===!1&&(r.clearColor(Pt,Nt,ne,He),vt.copy(Lt))},reset:function(){W=!1,lt=null,vt.set(-1,0,0,0)}}}function a(){let W=!1,Lt=!1,lt=null,vt=null,Pt=null;return{setReversed:function(Nt){if(Lt!==Nt){const ne=t.get("EXT_clip_control");Nt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),Lt=Nt;const He=Pt;Pt=null,this.setClear(He)}},getReversed:function(){return Lt},setTest:function(Nt){Nt?Tt(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(Nt){lt!==Nt&&!W&&(r.depthMask(Nt),lt=Nt)},setFunc:function(Nt){if(Lt&&(Nt=OA[Nt]),vt!==Nt){switch(Nt){case Qh:r.depthFunc(r.NEVER);break;case Jh:r.depthFunc(r.ALWAYS);break;case $h:r.depthFunc(r.LESS);break;case Dr:r.depthFunc(r.LEQUAL);break;case td:r.depthFunc(r.EQUAL);break;case ed:r.depthFunc(r.GEQUAL);break;case nd:r.depthFunc(r.GREATER);break;case id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=Nt}},setLocked:function(Nt){W=Nt},setClear:function(Nt){Pt!==Nt&&(Lt&&(Nt=1-Nt),r.clearDepth(Nt),Pt=Nt)},reset:function(){W=!1,lt=null,vt=null,Pt=null,Lt=!1}}}function o(){let W=!1,Lt=null,lt=null,vt=null,Pt=null,Nt=null,ne=null,He=null,tn=null;return{setTest:function(Me){W||(Me?Tt(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Me){Lt!==Me&&!W&&(r.stencilMask(Me),Lt=Me)},setFunc:function(Me,Yn,dn){(lt!==Me||vt!==Yn||Pt!==dn)&&(r.stencilFunc(Me,Yn,dn),lt=Me,vt=Yn,Pt=dn)},setOp:function(Me,Yn,dn){(Nt!==Me||ne!==Yn||He!==dn)&&(r.stencilOp(Me,Yn,dn),Nt=Me,ne=Yn,He=dn)},setLocked:function(Me){W=Me},setClear:function(Me){tn!==Me&&(r.clearStencil(Me),tn=Me)},reset:function(){W=!1,Lt=null,lt=null,vt=null,Pt=null,Nt=null,ne=null,He=null,tn=null}}}const c=new n,f=new a,h=new o,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],E=null,T=!1,S=null,v=null,O=null,D=null,R=null,F=null,B=null,z=new ye(0,0,0),k=0,U=!1,C=null,G=null,it=null,at=null,ut=null;const ct=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,J=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=J>=2);let St=null,L={};const K=r.getParameter(r.SCISSOR_BOX),ft=r.getParameter(r.VIEWPORT),gt=new Qe().fromArray(K),Q=new Qe().fromArray(ft);function _t(W,Lt,lt,vt){const Pt=new Uint8Array(4),Nt=r.createTexture();r.bindTexture(W,Nt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<lt;ne++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,vt,0,r.RGBA,r.UNSIGNED_BYTE,Pt):r.texImage2D(Lt+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pt);return Nt}const dt={};dt[r.TEXTURE_2D]=_t(r.TEXTURE_2D,r.TEXTURE_2D,1),dt[r.TEXTURE_CUBE_MAP]=_t(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[r.TEXTURE_2D_ARRAY]=_t(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),dt[r.TEXTURE_3D]=_t(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Tt(r.DEPTH_TEST),f.setFunc(Dr),ae(!1),Jt(X_),Tt(r.CULL_FACE),H(Wa);function Tt(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Ct(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function ie(W,Lt){return _[W]!==Lt?(r.bindFramebuffer(W,Lt),_[W]=Lt,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Lt),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Yt(W,Lt){let lt=y,vt=!1;if(W){lt=x.get(Lt),lt===void 0&&(lt=[],x.set(Lt,lt));const Pt=W.textures;if(lt.length!==Pt.length||lt[0]!==r.COLOR_ATTACHMENT0){for(let Nt=0,ne=Pt.length;Nt<ne;Nt++)lt[Nt]=r.COLOR_ATTACHMENT0+Nt;lt.length=Pt.length,vt=!0}}else lt[0]!==r.BACK&&(lt[0]=r.BACK,vt=!0);vt&&r.drawBuffers(lt)}function Ae(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const we={[Ms]:r.FUNC_ADD,[aS]:r.FUNC_SUBTRACT,[sS]:r.FUNC_REVERSE_SUBTRACT};we[rS]=r.MIN,we[oS]=r.MAX;const oe={[lS]:r.ZERO,[cS]:r.ONE,[uS]:r.SRC_COLOR,[jh]:r.SRC_ALPHA,[gS]:r.SRC_ALPHA_SATURATE,[pS]:r.DST_COLOR,[hS]:r.DST_ALPHA,[fS]:r.ONE_MINUS_SRC_COLOR,[Kh]:r.ONE_MINUS_SRC_ALPHA,[mS]:r.ONE_MINUS_DST_COLOR,[dS]:r.ONE_MINUS_DST_ALPHA,[_S]:r.CONSTANT_COLOR,[vS]:r.ONE_MINUS_CONSTANT_COLOR,[xS]:r.CONSTANT_ALPHA,[yS]:r.ONE_MINUS_CONSTANT_ALPHA};function H(W,Lt,lt,vt,Pt,Nt,ne,He,tn,Me){if(W===Wa){T===!0&&(Ct(r.BLEND),T=!1);return}if(T===!1&&(Tt(r.BLEND),T=!0),W!==iS){if(W!==S||Me!==U){if((v!==Ms||R!==Ms)&&(r.blendEquation(r.FUNC_ADD),v=Ms,R=Ms),Me)switch(W){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case W_:r.blendFunc(r.ONE,r.ONE);break;case q_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Y_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case W_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case q_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Y_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}O=null,D=null,F=null,B=null,z.set(0,0,0),k=0,S=W,U=Me}return}Pt=Pt||Lt,Nt=Nt||lt,ne=ne||vt,(Lt!==v||Pt!==R)&&(r.blendEquationSeparate(we[Lt],we[Pt]),v=Lt,R=Pt),(lt!==O||vt!==D||Nt!==F||ne!==B)&&(r.blendFuncSeparate(oe[lt],oe[vt],oe[Nt],oe[ne]),O=lt,D=vt,F=Nt,B=ne),(He.equals(z)===!1||tn!==k)&&(r.blendColor(He.r,He.g,He.b,tn),z.copy(He),k=tn),S=W,U=!1}function Sn(W,Lt){W.side===ra?Ct(r.CULL_FACE):Tt(r.CULL_FACE);let lt=W.side===Wn;Lt&&(lt=!lt),ae(lt),W.blending===Rr&&W.transparent===!1?H(Wa):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const vt=W.stencilWrite;h.setTest(vt),vt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ue(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Tt(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function ae(W){C!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),C=W)}function Jt(W){W!==tS?(Tt(r.CULL_FACE),W!==G&&(W===X_?r.cullFace(r.BACK):W===eS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),G=W}function Gt(W){W!==it&&(P&&r.lineWidth(W),it=W)}function Ue(W,Lt,lt){W?(Tt(r.POLYGON_OFFSET_FILL),(at!==Lt||ut!==lt)&&(r.polygonOffset(Lt,lt),at=Lt,ut=lt)):Ct(r.POLYGON_OFFSET_FILL)}function Vt(W){W?Tt(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function N(W){W===void 0&&(W=r.TEXTURE0+ct-1),St!==W&&(r.activeTexture(W),St=W)}function A(W,Lt,lt){lt===void 0&&(St===null?lt=r.TEXTURE0+ct-1:lt=St);let vt=L[lt];vt===void 0&&(vt={type:void 0,texture:void 0},L[lt]=vt),(vt.type!==W||vt.texture!==Lt)&&(St!==lt&&(r.activeTexture(lt),St=lt),r.bindTexture(W,Lt||dt[W]),vt.type=W,vt.texture=Lt)}function et(){const W=L[St];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function yt(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ft(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Kt(W){gt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Ot(W){Q.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function ce(W,Lt){let lt=p.get(Lt);lt===void 0&&(lt=new WeakMap,p.set(Lt,lt));let vt=lt.get(W);vt===void 0&&(vt=r.getUniformBlockIndex(Lt,W.name),lt.set(W,vt))}function ee(W,Lt){const vt=p.get(Lt).get(W);m.get(Lt)!==vt&&(r.uniformBlockBinding(Lt,vt,W.__bindingPointIndex),m.set(Lt,vt))}function Le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},St=null,L={},_={},x=new WeakMap,y=[],E=null,T=!1,S=null,v=null,O=null,D=null,R=null,F=null,B=null,z=new ye(0,0,0),k=0,U=!1,C=null,G=null,it=null,at=null,ut=null,gt.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Tt,disable:Ct,bindFramebuffer:ie,drawBuffers:Yt,useProgram:Ae,setBlending:H,setMaterial:Sn,setFlipSided:ae,setCullFace:Jt,setLineWidth:Gt,setPolygonOffset:Ue,setScissorTest:Vt,activeTexture:N,bindTexture:A,unbindTexture:et,compressedTexImage2D:yt,compressedTexImage3D:Mt,texImage2D:Ft,texImage3D:Zt,updateUBOMapping:ce,uniformBlockBinding:ee,texStorage2D:ge,texStorage3D:bt,texSubImage2D:pt,texSubImage3D:zt,compressedTexSubImage2D:At,compressedTexSubImage3D:Rt,scissor:Kt,viewport:Ot,reset:Le}}function zA(r,t,n,a,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Bt,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,A){return y?new OffscreenCanvas(N,A):Qc("canvas")}function T(N,A,et){let yt=1;const Mt=Vt(N);if((Mt.width>et||Mt.height>et)&&(yt=et/Math.max(Mt.width,Mt.height)),yt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pt=Math.floor(yt*Mt.width),zt=Math.floor(yt*Mt.height);_===void 0&&(_=E(pt,zt));const At=A?E(pt,zt):_;return At.width=pt,At.height=zt,At.getContext("2d").drawImage(N,0,0,pt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+pt+"x"+zt+")."),At}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function S(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(N,A,et,yt,Mt=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pt=A;if(A===r.RED&&(et===r.FLOAT&&(pt=r.R32F),et===r.HALF_FLOAT&&(pt=r.R16F),et===r.UNSIGNED_BYTE&&(pt=r.R8)),A===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.R8UI),et===r.UNSIGNED_SHORT&&(pt=r.R16UI),et===r.UNSIGNED_INT&&(pt=r.R32UI),et===r.BYTE&&(pt=r.R8I),et===r.SHORT&&(pt=r.R16I),et===r.INT&&(pt=r.R32I)),A===r.RG&&(et===r.FLOAT&&(pt=r.RG32F),et===r.HALF_FLOAT&&(pt=r.RG16F),et===r.UNSIGNED_BYTE&&(pt=r.RG8)),A===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RG8UI),et===r.UNSIGNED_SHORT&&(pt=r.RG16UI),et===r.UNSIGNED_INT&&(pt=r.RG32UI),et===r.BYTE&&(pt=r.RG8I),et===r.SHORT&&(pt=r.RG16I),et===r.INT&&(pt=r.RG32I)),A===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),et===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),et===r.UNSIGNED_INT&&(pt=r.RGB32UI),et===r.BYTE&&(pt=r.RGB8I),et===r.SHORT&&(pt=r.RGB16I),et===r.INT&&(pt=r.RGB32I)),A===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),et===r.UNSIGNED_INT&&(pt=r.RGBA32UI),et===r.BYTE&&(pt=r.RGBA8I),et===r.SHORT&&(pt=r.RGBA16I),et===r.INT&&(pt=r.RGBA32I)),A===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),A===r.RGBA){const zt=Mt?jc:be.getTransfer(yt);et===r.FLOAT&&(pt=r.RGBA32F),et===r.HALF_FLOAT&&(pt=r.RGBA16F),et===r.UNSIGNED_BYTE&&(pt=zt===ze?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function R(N,A){let et;return N?A===null||A===Rs||A===jo?et=r.DEPTH24_STENCIL8:A===oa?et=r.DEPTH32F_STENCIL8:A===Zo&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Rs||A===jo?et=r.DEPTH_COMPONENT24:A===oa?et=r.DEPTH_COMPONENT32F:A===Zo&&(et=r.DEPTH_COMPONENT16),et}function F(N,A){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Si&&N.minFilter!==Ci?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function B(N){const A=N.target;A.removeEventListener("dispose",B),k(A),A.isVideoTexture&&g.delete(A)}function z(N){const A=N.target;A.removeEventListener("dispose",z),C(A)}function k(N){const A=a.get(N);if(A.__webglInit===void 0)return;const et=N.source,yt=x.get(et);if(yt){const Mt=yt[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&U(N),Object.keys(yt).length===0&&x.delete(et)}a.remove(N)}function U(N){const A=a.get(N);r.deleteTexture(A.__webglTexture);const et=N.source,yt=x.get(et);delete yt[A.__cacheKey],f.memory.textures--}function C(N){const A=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(A.__webglFramebuffer[yt]))for(let Mt=0;Mt<A.__webglFramebuffer[yt].length;Mt++)r.deleteFramebuffer(A.__webglFramebuffer[yt][Mt]);else r.deleteFramebuffer(A.__webglFramebuffer[yt]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[yt])}else{if(Array.isArray(A.__webglFramebuffer))for(let yt=0;yt<A.__webglFramebuffer.length;yt++)r.deleteFramebuffer(A.__webglFramebuffer[yt]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let yt=0;yt<A.__webglColorRenderbuffer.length;yt++)A.__webglColorRenderbuffer[yt]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[yt]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const et=N.textures;for(let yt=0,Mt=et.length;yt<Mt;yt++){const pt=a.get(et[yt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),f.memory.textures--),a.remove(et[yt])}a.remove(N)}let G=0;function it(){G=0}function at(){const N=G;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),G+=1,N}function ut(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function ct(N,A){const et=a.get(N);if(N.isVideoTexture&&Gt(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const yt=N.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(et,N,A);return}}n.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+A)}function P(N,A){const et=a.get(N);if(N.version>0&&et.__version!==N.version){Q(et,N,A);return}n.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+A)}function J(N,A){const et=a.get(N);if(N.version>0&&et.__version!==N.version){Q(et,N,A);return}n.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+A)}function Y(N,A){const et=a.get(N);if(N.version>0&&et.__version!==N.version){_t(et,N,A);return}n.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+A)}const St={[rd]:r.REPEAT,[Ts]:r.CLAMP_TO_EDGE,[od]:r.MIRRORED_REPEAT},L={[Si]:r.NEAREST,[DS]:r.NEAREST_MIPMAP_NEAREST,[dc]:r.NEAREST_MIPMAP_LINEAR,[Ci]:r.LINEAR,[dh]:r.LINEAR_MIPMAP_NEAREST,[bs]:r.LINEAR_MIPMAP_LINEAR},K={[OS]:r.NEVER,[HS]:r.ALWAYS,[PS]:r.LESS,[hv]:r.LEQUAL,[zS]:r.EQUAL,[FS]:r.GEQUAL,[IS]:r.GREATER,[BS]:r.NOTEQUAL};function ft(N,A){if(A.type===oa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ci||A.magFilter===dh||A.magFilter===dc||A.magFilter===bs||A.minFilter===Ci||A.minFilter===dh||A.minFilter===dc||A.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,St[A.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,St[A.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,St[A.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,L[A.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,L[A.minFilter]),A.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,K[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Si||A.minFilter!==dc&&A.minFilter!==bs||A.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function gt(N,A){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",B));const yt=A.source;let Mt=x.get(yt);Mt===void 0&&(Mt={},x.set(yt,Mt));const pt=ut(A);if(pt!==N.__cacheKey){Mt[pt]===void 0&&(Mt[pt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,et=!0),Mt[pt].usedTimes++;const zt=Mt[N.__cacheKey];zt!==void 0&&(Mt[N.__cacheKey].usedTimes--,zt.usedTimes===0&&U(A)),N.__cacheKey=pt,N.__webglTexture=Mt[pt].texture}return et}function Q(N,A,et){let yt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(yt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(yt=r.TEXTURE_3D);const Mt=gt(N,A),pt=A.source;n.bindTexture(yt,N.__webglTexture,r.TEXTURE0+et);const zt=a.get(pt);if(pt.version!==zt.__version||Mt===!0){n.activeTexture(r.TEXTURE0+et);const At=be.getPrimaries(be.workingColorSpace),Rt=A.colorSpace===Xa?null:be.getPrimaries(A.colorSpace),ge=A.colorSpace===Xa||At===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let bt=T(A.image,!1,o.maxTextureSize);bt=Ue(A,bt);const Ft=c.convert(A.format,A.colorSpace),Zt=c.convert(A.type);let Kt=D(A.internalFormat,Ft,Zt,A.colorSpace,A.isVideoTexture);ft(yt,A);let Ot;const ce=A.mipmaps,ee=A.isVideoTexture!==!0,Le=zt.__version===void 0||Mt===!0,W=pt.dataReady,Lt=F(A,bt);if(A.isDepthTexture)Kt=R(A.format===Qo,A.type),Le&&(ee?n.texStorage2D(r.TEXTURE_2D,1,Kt,bt.width,bt.height):n.texImage2D(r.TEXTURE_2D,0,Kt,bt.width,bt.height,0,Ft,Zt,null));else if(A.isDataTexture)if(ce.length>0){ee&&Le&&n.texStorage2D(r.TEXTURE_2D,Lt,Kt,ce[0].width,ce[0].height);for(let lt=0,vt=ce.length;lt<vt;lt++)Ot=ce[lt],ee?W&&n.texSubImage2D(r.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Ft,Zt,Ot.data):n.texImage2D(r.TEXTURE_2D,lt,Kt,Ot.width,Ot.height,0,Ft,Zt,Ot.data);A.generateMipmaps=!1}else ee?(Le&&n.texStorage2D(r.TEXTURE_2D,Lt,Kt,bt.width,bt.height),W&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,Zt,bt.data)):n.texImage2D(r.TEXTURE_2D,0,Kt,bt.width,bt.height,0,Ft,Zt,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ee&&Le&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,Kt,ce[0].width,ce[0].height,bt.depth);for(let lt=0,vt=ce.length;lt<vt;lt++)if(Ot=ce[lt],A.format!==yi)if(Ft!==null)if(ee){if(W)if(A.layerUpdates.size>0){const Pt=b0(Ot.width,Ot.height,A.format,A.type);for(const Nt of A.layerUpdates){const ne=Ot.data.subarray(Nt*Pt/Ot.data.BYTES_PER_ELEMENT,(Nt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,Nt,Ot.width,Ot.height,1,Ft,ne)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Ot.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,lt,Kt,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?W&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Zt,Ot.data):n.texImage3D(r.TEXTURE_2D_ARRAY,lt,Kt,Ot.width,Ot.height,bt.depth,0,Ft,Zt,Ot.data)}else{ee&&Le&&n.texStorage2D(r.TEXTURE_2D,Lt,Kt,ce[0].width,ce[0].height);for(let lt=0,vt=ce.length;lt<vt;lt++)Ot=ce[lt],A.format!==yi?Ft!==null?ee?W&&n.compressedTexSubImage2D(r.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Ft,Ot.data):n.compressedTexImage2D(r.TEXTURE_2D,lt,Kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?W&&n.texSubImage2D(r.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,Ft,Zt,Ot.data):n.texImage2D(r.TEXTURE_2D,lt,Kt,Ot.width,Ot.height,0,Ft,Zt,Ot.data)}else if(A.isDataArrayTexture)if(ee){if(Le&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,Kt,bt.width,bt.height,bt.depth),W)if(A.layerUpdates.size>0){const lt=b0(bt.width,bt.height,A.format,A.type);for(const vt of A.layerUpdates){const Pt=bt.data.subarray(vt*lt/bt.data.BYTES_PER_ELEMENT,(vt+1)*lt/bt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,bt.width,bt.height,1,Ft,Zt,Pt)}A.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Zt,bt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Kt,bt.width,bt.height,bt.depth,0,Ft,Zt,bt.data);else if(A.isData3DTexture)ee?(Le&&n.texStorage3D(r.TEXTURE_3D,Lt,Kt,bt.width,bt.height,bt.depth),W&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Zt,bt.data)):n.texImage3D(r.TEXTURE_3D,0,Kt,bt.width,bt.height,bt.depth,0,Ft,Zt,bt.data);else if(A.isFramebufferTexture){if(Le)if(ee)n.texStorage2D(r.TEXTURE_2D,Lt,Kt,bt.width,bt.height);else{let lt=bt.width,vt=bt.height;for(let Pt=0;Pt<Lt;Pt++)n.texImage2D(r.TEXTURE_2D,Pt,Kt,lt,vt,0,Ft,Zt,null),lt>>=1,vt>>=1}}else if(ce.length>0){if(ee&&Le){const lt=Vt(ce[0]);n.texStorage2D(r.TEXTURE_2D,Lt,Kt,lt.width,lt.height)}for(let lt=0,vt=ce.length;lt<vt;lt++)Ot=ce[lt],ee?W&&n.texSubImage2D(r.TEXTURE_2D,lt,0,0,Ft,Zt,Ot):n.texImage2D(r.TEXTURE_2D,lt,Kt,Ft,Zt,Ot);A.generateMipmaps=!1}else if(ee){if(Le){const lt=Vt(bt);n.texStorage2D(r.TEXTURE_2D,Lt,Kt,lt.width,lt.height)}W&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ft,Zt,bt)}else n.texImage2D(r.TEXTURE_2D,0,Kt,Ft,Zt,bt);S(A)&&v(yt),zt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function _t(N,A,et){if(A.image.length!==6)return;const yt=gt(N,A),Mt=A.source;n.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+et);const pt=a.get(Mt);if(Mt.version!==pt.__version||yt===!0){n.activeTexture(r.TEXTURE0+et);const zt=be.getPrimaries(be.workingColorSpace),At=A.colorSpace===Xa?null:be.getPrimaries(A.colorSpace),Rt=A.colorSpace===Xa||zt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const ge=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Ft=[];for(let vt=0;vt<6;vt++)!ge&&!bt?Ft[vt]=T(A.image[vt],!0,o.maxCubemapSize):Ft[vt]=bt?A.image[vt].image:A.image[vt],Ft[vt]=Ue(A,Ft[vt]);const Zt=Ft[0],Kt=c.convert(A.format,A.colorSpace),Ot=c.convert(A.type),ce=D(A.internalFormat,Kt,Ot,A.colorSpace),ee=A.isVideoTexture!==!0,Le=pt.__version===void 0||yt===!0,W=Mt.dataReady;let Lt=F(A,Zt);ft(r.TEXTURE_CUBE_MAP,A);let lt;if(ge){ee&&Le&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,ce,Zt.width,Zt.height);for(let vt=0;vt<6;vt++){lt=Ft[vt].mipmaps;for(let Pt=0;Pt<lt.length;Pt++){const Nt=lt[Pt];A.format!==yi?Kt!==null?ee?W&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt,0,0,Nt.width,Nt.height,Kt,Nt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt,ce,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?W&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt,0,0,Nt.width,Nt.height,Kt,Ot,Nt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt,ce,Nt.width,Nt.height,0,Kt,Ot,Nt.data)}}}else{if(lt=A.mipmaps,ee&&Le){lt.length>0&&Lt++;const vt=Vt(Ft[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,ce,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(bt){ee?W&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ft[vt].width,Ft[vt].height,Kt,Ot,Ft[vt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,Ft[vt].width,Ft[vt].height,0,Kt,Ot,Ft[vt].data);for(let Pt=0;Pt<lt.length;Pt++){const ne=lt[Pt].image[vt].image;ee?W&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt+1,0,0,ne.width,ne.height,Kt,Ot,ne.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt+1,ce,ne.width,ne.height,0,Kt,Ot,ne.data)}}else{ee?W&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Kt,Ot,Ft[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,Kt,Ot,Ft[vt]);for(let Pt=0;Pt<lt.length;Pt++){const Nt=lt[Pt];ee?W&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt+1,0,0,Kt,Ot,Nt.image[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt+1,ce,Kt,Ot,Nt.image[vt])}}}S(A)&&v(r.TEXTURE_CUBE_MAP),pt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function dt(N,A,et,yt,Mt,pt){const zt=c.convert(et.format,et.colorSpace),At=c.convert(et.type),Rt=D(et.internalFormat,zt,At,et.colorSpace),ge=a.get(A),bt=a.get(et);if(bt.__renderTarget=A,!ge.__hasExternalTextures){const Ft=Math.max(1,A.width>>pt),Zt=Math.max(1,A.height>>pt);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?n.texImage3D(Mt,pt,Rt,Ft,Zt,A.depth,0,zt,At,null):n.texImage2D(Mt,pt,Rt,Ft,Zt,0,zt,At,null)}n.bindFramebuffer(r.FRAMEBUFFER,N),Jt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,Mt,bt.__webglTexture,0,ae(A)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,yt,Mt,bt.__webglTexture,pt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(N,A,et){if(r.bindRenderbuffer(r.RENDERBUFFER,N),A.depthBuffer){const yt=A.depthTexture,Mt=yt&&yt.isDepthTexture?yt.type:null,pt=R(A.stencilBuffer,Mt),zt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=ae(A);Jt(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,pt,A.width,A.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,pt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,pt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,N)}else{const yt=A.textures;for(let Mt=0;Mt<yt.length;Mt++){const pt=yt[Mt],zt=c.convert(pt.format,pt.colorSpace),At=c.convert(pt.type),Rt=D(pt.internalFormat,zt,At,pt.colorSpace),ge=ae(A);et&&Jt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Rt,A.width,A.height):Jt(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,Rt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Rt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=a.get(A.depthTexture);yt.__renderTarget=A,(!yt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ct(A.depthTexture,0);const Mt=yt.__webglTexture,pt=ae(A);if(A.depthTexture.format===Ko)Jt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0);else if(A.depthTexture.format===Qo)Jt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function ie(N){const A=a.get(N),et=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const yt=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),yt){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,yt.removeEventListener("dispose",Mt)};yt.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=yt}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ct(A.__webglFramebuffer,N)}else if(et){A.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(n.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[yt]),A.__webglDepthbuffer[yt]===void 0)A.__webglDepthbuffer[yt]=r.createRenderbuffer(),Tt(A.__webglDepthbuffer[yt],N,!1);else{const Mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer[yt];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,pt)}}else if(n.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Tt(A.__webglDepthbuffer,N,!1);else{const yt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,Mt)}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(N,A,et){const yt=a.get(N);A!==void 0&&dt(yt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&ie(N)}function Ae(N){const A=N.texture,et=a.get(N),yt=a.get(A);N.addEventListener("dispose",z);const Mt=N.textures,pt=N.isWebGLCubeRenderTarget===!0,zt=Mt.length>1;if(zt||(yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture()),yt.__version=A.version,f.memory.textures++),pt){et.__webglFramebuffer=[];for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer[At]=[];for(let Rt=0;Rt<A.mipmaps.length;Rt++)et.__webglFramebuffer[At][Rt]=r.createFramebuffer()}else et.__webglFramebuffer[At]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer=[];for(let At=0;At<A.mipmaps.length;At++)et.__webglFramebuffer[At]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(zt)for(let At=0,Rt=Mt.length;At<Rt;At++){const ge=a.get(Mt[At]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&Jt(N)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let At=0;At<Mt.length;At++){const Rt=Mt[At];et.__webglColorRenderbuffer[At]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[At]);const ge=c.convert(Rt.format,Rt.colorSpace),bt=c.convert(Rt.type),Ft=D(Rt.internalFormat,ge,bt,Rt.colorSpace,N.isXRRenderTarget===!0),Zt=ae(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Ft,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,et.__webglColorRenderbuffer[At])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),Tt(et.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){n.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),ft(r.TEXTURE_CUBE_MAP,A);for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0)for(let Rt=0;Rt<A.mipmaps.length;Rt++)dt(et.__webglFramebuffer[At][Rt],N,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Rt);else dt(et.__webglFramebuffer[At],N,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);S(A)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let At=0,Rt=Mt.length;At<Rt;At++){const ge=Mt[At],bt=a.get(ge);n.bindTexture(r.TEXTURE_2D,bt.__webglTexture),ft(r.TEXTURE_2D,ge),dt(et.__webglFramebuffer,N,ge,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,0),S(ge)&&v(r.TEXTURE_2D)}n.unbindTexture()}else{let At=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(At=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(At,yt.__webglTexture),ft(At,A),A.mipmaps&&A.mipmaps.length>0)for(let Rt=0;Rt<A.mipmaps.length;Rt++)dt(et.__webglFramebuffer[Rt],N,A,r.COLOR_ATTACHMENT0,At,Rt);else dt(et.__webglFramebuffer,N,A,r.COLOR_ATTACHMENT0,At,0);S(A)&&v(At),n.unbindTexture()}N.depthBuffer&&ie(N)}function we(N){const A=N.textures;for(let et=0,yt=A.length;et<yt;et++){const Mt=A[et];if(S(Mt)){const pt=O(N),zt=a.get(Mt).__webglTexture;n.bindTexture(pt,zt),v(pt),n.unbindTexture()}}}const oe=[],H=[];function Sn(N){if(N.samples>0){if(Jt(N)===!1){const A=N.textures,et=N.width,yt=N.height;let Mt=r.COLOR_BUFFER_BIT;const pt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=a.get(N),At=A.length>1;if(At)for(let Rt=0;Rt<A.length;Rt++)n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Rt=0;Rt<A.length;Rt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),At){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Rt]);const ge=a.get(A[Rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,et,yt,0,0,et,yt,Mt,r.NEAREST),m===!0&&(oe.length=0,H.length=0,oe.push(r.COLOR_ATTACHMENT0+Rt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(oe.push(pt),H.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,oe))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),At)for(let Rt=0;Rt<A.length;Rt++){n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Rt]);const ge=a.get(A[Rt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,ge,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const A=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function ae(N){return Math.min(o.maxSamples,N.samples)}function Jt(N){const A=a.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Gt(N){const A=f.render.frame;g.get(N)!==A&&(g.set(N,A),N.update())}function Ue(N,A){const et=N.colorSpace,yt=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==Nr&&et!==Xa&&(be.getTransfer(et)===ze?(yt!==yi||Mt!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),A}function Vt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=it,this.setTexture2D=ct,this.setTexture2DArray=P,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=Yt,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Jt}function IA(r,t){function n(a,o=Xa){let c;const f=be.getTransfer(o);if(a===ua)return r.UNSIGNED_BYTE;if(a===Xd)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Wd)return r.UNSIGNED_SHORT_5_5_5_1;if(a===iv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===ev)return r.BYTE;if(a===nv)return r.SHORT;if(a===Zo)return r.UNSIGNED_SHORT;if(a===kd)return r.INT;if(a===Rs)return r.UNSIGNED_INT;if(a===oa)return r.FLOAT;if(a===el)return r.HALF_FLOAT;if(a===av)return r.ALPHA;if(a===sv)return r.RGB;if(a===yi)return r.RGBA;if(a===rv)return r.LUMINANCE;if(a===ov)return r.LUMINANCE_ALPHA;if(a===Ko)return r.DEPTH_COMPONENT;if(a===Qo)return r.DEPTH_STENCIL;if(a===lv)return r.RED;if(a===qd)return r.RED_INTEGER;if(a===cv)return r.RG;if(a===Yd)return r.RG_INTEGER;if(a===Zd)return r.RGBA_INTEGER;if(a===Gc||a===Vc||a===kc||a===Xc)if(f===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ld||a===cd||a===ud||a===fd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===hd||a===dd||a===pd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===hd||a===dd)return f===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===pd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===md||a===gd||a===_d||a===vd||a===xd||a===yd||a===Sd||a===Md||a===Ed||a===Td||a===bd||a===Ad||a===Rd||a===wd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===md)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===gd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===_d)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===vd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===xd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===yd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Sd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Md)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ed)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Td)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===bd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ad)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Rd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===wd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Wc||a===Cd||a===Dd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Wc)return f===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Cd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===uv||a===Ud||a===Ld||a===Nd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Wc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ld)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Nd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===jo?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const BA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const o=new qn,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Za({vertexShader:BA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new In(new zr(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GA extends Us{constructor(t,n){super();const a=this;let o=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,E=null;const T=new HA,S=n.getContextAttributes();let v=null,O=null;const D=[],R=[],F=new Bt;let B=null;const z=new hi;z.viewport=new Qe;const k=new hi;k.viewport=new Qe;const U=[z,k],C=new rE;let G=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let _t=D[Q];return _t===void 0&&(_t=new Oh,D[Q]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(Q){let _t=D[Q];return _t===void 0&&(_t=new Oh,D[Q]=_t),_t.getGripSpace()},this.getHand=function(Q){let _t=D[Q];return _t===void 0&&(_t=new Oh,D[Q]=_t),_t.getHandSpace()};function at(Q){const _t=R.indexOf(Q.inputSource);if(_t===-1)return;const dt=D[_t];dt!==void 0&&(dt.update(Q.inputSource,Q.frame,p||f),dt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ut(){o.removeEventListener("select",at),o.removeEventListener("selectstart",at),o.removeEventListener("selectend",at),o.removeEventListener("squeeze",at),o.removeEventListener("squeezestart",at),o.removeEventListener("squeezeend",at),o.removeEventListener("end",ut),o.removeEventListener("inputsourceschange",ct);for(let Q=0;Q<D.length;Q++){const _t=R[Q];_t!==null&&(R[Q]=null,D[Q].disconnect(_t))}G=null,it=null,T.reset(),t.setRenderTarget(v),y=null,x=null,_=null,o=null,O=null,gt.stop(),a.isPresenting=!1,t.setPixelRatio(B),t.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(v=t.getRenderTarget(),o.addEventListener("select",at),o.addEventListener("selectstart",at),o.addEventListener("selectend",at),o.addEventListener("squeeze",at),o.addEventListener("squeezestart",at),o.addEventListener("squeezeend",at),o.addEventListener("end",ut),o.addEventListener("inputsourceschange",ct),S.xrCompatible!==!0&&await n.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Tt=null,Ct=null;S.depth&&(Ct=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,dt=S.stencil?Qo:Ko,Tt=S.stencil?jo:Rs);const ie={colorFormat:n.RGBA8,depthFormat:Ct,scaleFactor:c};_=new XRWebGLBinding(o,n),x=_.createProjectionLayer(ie),o.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new ws(x.textureWidth,x.textureHeight,{format:yi,type:ua,depthTexture:new Mv(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const dt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,dt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new ws(y.framebufferWidth,y.framebufferHeight,{format:yi,type:ua,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await o.requestReferenceSpace(h),gt.setContext(o),gt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ct(Q){for(let _t=0;_t<Q.removed.length;_t++){const dt=Q.removed[_t],Tt=R.indexOf(dt);Tt>=0&&(R[Tt]=null,D[Tt].disconnect(dt))}for(let _t=0;_t<Q.added.length;_t++){const dt=Q.added[_t];let Tt=R.indexOf(dt);if(Tt===-1){for(let ie=0;ie<D.length;ie++)if(ie>=R.length){R.push(dt),Tt=ie;break}else if(R[ie]===null){R[ie]=dt,Tt=ie;break}if(Tt===-1)break}const Ct=D[Tt];Ct&&Ct.connect(dt)}}const P=new V,J=new V;function Y(Q,_t,dt){P.setFromMatrixPosition(_t.matrixWorld),J.setFromMatrixPosition(dt.matrixWorld);const Tt=P.distanceTo(J),Ct=_t.projectionMatrix.elements,ie=dt.projectionMatrix.elements,Yt=Ct[14]/(Ct[10]-1),Ae=Ct[14]/(Ct[10]+1),we=(Ct[9]+1)/Ct[5],oe=(Ct[9]-1)/Ct[5],H=(Ct[8]-1)/Ct[0],Sn=(ie[8]+1)/ie[0],ae=Yt*H,Jt=Yt*Sn,Gt=Tt/(-H+Sn),Ue=Gt*-H;if(_t.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ue),Q.translateZ(Gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ct[10]===-1)Q.projectionMatrix.copy(_t.projectionMatrix),Q.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Vt=Yt+Gt,N=Ae+Gt,A=ae-Ue,et=Jt+(Tt-Ue),yt=we*Ae/N*Vt,Mt=oe*Ae/N*Vt;Q.projectionMatrix.makePerspective(A,et,yt,Mt,Vt,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function St(Q,_t){_t===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(_t.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let _t=Q.near,dt=Q.far;T.texture!==null&&(T.depthNear>0&&(_t=T.depthNear),T.depthFar>0&&(dt=T.depthFar)),C.near=k.near=z.near=_t,C.far=k.far=z.far=dt,(G!==C.near||it!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,it=C.far),z.layers.mask=Q.layers.mask|2,k.layers.mask=Q.layers.mask|4,C.layers.mask=z.layers.mask|k.layers.mask;const Tt=Q.parent,Ct=C.cameras;St(C,Tt);for(let ie=0;ie<Ct.length;ie++)St(Ct[ie],Tt);Ct.length===2?Y(C,z,k):C.projectionMatrix.copy(z.projectionMatrix),L(Q,C,Tt)};function L(Q,_t,dt){dt===null?Q.matrix.copy(_t.matrixWorld):(Q.matrix.copy(dt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(_t.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(_t.projectionMatrix),Q.projectionMatrixInverse.copy(_t.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Od*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let K=null;function ft(Q,_t){if(g=_t.getViewerPose(p||f),E=_t,g!==null){const dt=g.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let Tt=!1;dt.length!==C.cameras.length&&(C.cameras.length=0,Tt=!0);for(let Yt=0;Yt<dt.length;Yt++){const Ae=dt[Yt];let we=null;if(y!==null)we=y.getViewport(Ae);else{const H=_.getViewSubImage(x,Ae);we=H.viewport,Yt===0&&(t.setRenderTargetTextures(O,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(O))}let oe=U[Yt];oe===void 0&&(oe=new hi,oe.layers.enable(Yt),oe.viewport=new Qe,U[Yt]=oe),oe.matrix.fromArray(Ae.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ae.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(we.x,we.y,we.width,we.height),Yt===0&&(C.matrix.copy(oe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Tt===!0&&C.cameras.push(oe)}const Ct=o.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const Yt=_.getDepthInformation(dt[0]);Yt&&Yt.isValid&&Yt.texture&&T.init(t,Yt,o.renderState)}}for(let dt=0;dt<D.length;dt++){const Tt=R[dt],Ct=D[dt];Tt!==null&&Ct!==void 0&&Ct.update(Tt,_t,p||f)}K&&K(Q,_t),_t.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:_t}),E=null}const gt=new Ov;gt.setAnimationLoop(ft),this.setAnimationLoop=function(Q){K=Q},this.dispose=function(){}}}const ys=new Ui,VA=new Xe;function kA(r,t){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function a(S,v){v.color.getRGB(S.fogColor.value,xv(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,O,D,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,R)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),T(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?m(S,v,O,D):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Wn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Wn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const O=t.get(v),D=O.envMap,R=O.envMapRotation;D&&(S.envMap.value=D,ys.copy(R),ys.x*=-1,ys.y*=-1,ys.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),S.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(ys)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,O,D){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*O,S.scale.value=D*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,O){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const O=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function XA(r,t,n,a){let o={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,D){const R=D.program;a.uniformBlockBinding(O,R)}function p(O,D){let R=o[O.id];R===void 0&&(E(O),R=g(O),o[O.id]=R,O.addEventListener("dispose",S));const F=D.program;a.updateUBOMapping(O,F);const B=t.render.frame;c[O.id]!==B&&(x(O),c[O.id]=B)}function g(O){const D=_();O.__bindingPointIndex=D;const R=r.createBuffer(),F=O.__size,B=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,R),R}function _(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const D=o[O.id],R=O.uniforms,F=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let B=0,z=R.length;B<z;B++){const k=Array.isArray(R[B])?R[B]:[R[B]];for(let U=0,C=k.length;U<C;U++){const G=k[U];if(y(G,B,U,F)===!0){const it=G.__offset,at=Array.isArray(G.value)?G.value:[G.value];let ut=0;for(let ct=0;ct<at.length;ct++){const P=at[ct],J=T(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,it+ut,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,ut),ut+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,it,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(O,D,R,F){const B=O.value,z=D+"_"+R;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const k=F[z];if(typeof B=="number"||typeof B=="boolean"){if(k!==B)return F[z]=B,!0}else if(k.equals(B)===!1)return k.copy(B),!0}return!1}function E(O){const D=O.uniforms;let R=0;const F=16;for(let z=0,k=D.length;z<k;z++){const U=Array.isArray(D[z])?D[z]:[D[z]];for(let C=0,G=U.length;C<G;C++){const it=U[C],at=Array.isArray(it.value)?it.value:[it.value];for(let ut=0,ct=at.length;ut<ct;ut++){const P=at[ut],J=T(P),Y=R%F,St=Y%J.boundary,L=Y+St;R+=St,L!==0&&F-L<J.storage&&(R+=F-L),it.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=R,R+=J.storage}}}const B=R%F;return B>0&&(R+=F-B),O.__size=R,O.__cache={},this}function T(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function S(O){const D=O.target;D.removeEventListener("dispose",S);const R=f.indexOf(D.__bindingPointIndex);f.splice(R,1),r.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function v(){for(const O in o)r.deleteBuffer(o[O]);f=[],o={},c={}}return{bind:m,update:p,dispose:v}}class WA{constructor(t={}){const{canvas:n=kS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,v=null;const O=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let F=!1;this._outputColorSpace=fi;let B=0,z=0,k=null,U=-1,C=null;const G=new Qe,it=new Qe;let at=null;const ut=new ye(0);let ct=0,P=n.width,J=n.height,Y=1,St=null,L=null;const K=new Qe(0,0,P,J),ft=new Qe(0,0,P,J);let gt=!1;const Q=new Qd;let _t=!1,dt=!1;const Tt=new Xe,Ct=new Xe,ie=new V,Yt=new Qe,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function oe(){return k===null?Y:1}let H=a;function Sn(w,Z){return n.getContext(w,Z)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vd}`),n.addEventListener("webglcontextlost",vt,!1),n.addEventListener("webglcontextrestored",Pt,!1),n.addEventListener("webglcontextcreationerror",Nt,!1),H===null){const Z="webgl2";if(H=Sn(Z,w),H===null)throw Sn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ae,Jt,Gt,Ue,Vt,N,A,et,yt,Mt,pt,zt,At,Rt,ge,bt,Ft,Zt,Kt,Ot,ce,ee,Le,W;function Lt(){ae=new e1(H),ae.init(),ee=new IA(H,ae),Jt=new Zb(H,ae,t,ee),Gt=new PA(H,ae),Jt.reverseDepthBuffer&&x&&Gt.buffers.depth.setReversed(!0),Ue=new a1(H),Vt=new MA,N=new zA(H,ae,Gt,Vt,Jt,ee,Ue),A=new Kb(R),et=new t1(R),yt=new uE(H),Le=new qb(H,yt),Mt=new n1(H,yt,Ue,Le),pt=new r1(H,Mt,yt,Ue),Kt=new s1(H,Jt,N),bt=new jb(Vt),zt=new SA(R,A,et,ae,Jt,Le,bt),At=new kA(R,Vt),Rt=new TA,ge=new DA(ae),Zt=new Wb(R,A,et,Gt,pt,y,m),Ft=new NA(R,pt,Jt),W=new XA(H,Ue,Jt,Gt),Ot=new Yb(H,ae,Ue),ce=new i1(H,ae,Ue),Ue.programs=zt.programs,R.capabilities=Jt,R.extensions=ae,R.properties=Vt,R.renderLists=Rt,R.shadowMap=Ft,R.state=Gt,R.info=Ue}Lt();const lt=new GA(R,H);this.xr=lt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(P,J,!1))},this.getSize=function(w){return w.set(P,J)},this.setSize=function(w,Z,rt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,J=Z,n.width=Math.floor(w*Y),n.height=Math.floor(Z*Y),rt===!0&&(n.style.width=w+"px",n.style.height=Z+"px"),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(P*Y,J*Y).floor()},this.setDrawingBufferSize=function(w,Z,rt){P=w,J=Z,Y=rt,n.width=Math.floor(w*rt),n.height=Math.floor(Z*rt),this.setViewport(0,0,w,Z)},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,Z,rt,ot){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,Z,rt,ot),Gt.viewport(G.copy(K).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(ft)},this.setScissor=function(w,Z,rt,ot){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,Z,rt,ot),Gt.scissor(it.copy(ft).multiplyScalar(Y).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(w){Gt.setScissorTest(gt=w)},this.setOpaqueSort=function(w){St=w},this.setTransparentSort=function(w){L=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,rt=!0){let ot=0;if(w){let j=!1;if(k!==null){const Et=k.texture.format;j=Et===Zd||Et===Yd||Et===qd}if(j){const Et=k.texture.type,wt=Et===ua||Et===Rs||Et===Zo||Et===jo||Et===Xd||Et===Wd,Dt=Zt.getClearColor(),It=Zt.getClearAlpha(),$t=Dt.r,Wt=Dt.g,Xt=Dt.b;wt?(E[0]=$t,E[1]=Wt,E[2]=Xt,E[3]=It,H.clearBufferuiv(H.COLOR,0,E)):(T[0]=$t,T[1]=Wt,T[2]=Xt,T[3]=It,H.clearBufferiv(H.COLOR,0,T))}else ot|=H.COLOR_BUFFER_BIT}Z&&(ot|=H.DEPTH_BUFFER_BIT),rt&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",vt,!1),n.removeEventListener("webglcontextrestored",Pt,!1),n.removeEventListener("webglcontextcreationerror",Nt,!1),Zt.dispose(),Rt.dispose(),ge.dispose(),Vt.dispose(),A.dispose(),et.dispose(),pt.dispose(),Le.dispose(),W.dispose(),zt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",rn),lt.removeEventListener("sessionend",Mn),Bn.stop()};function vt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const w=Ue.autoReset,Z=Ft.enabled,rt=Ft.autoUpdate,ot=Ft.needsUpdate,j=Ft.type;Lt(),Ue.autoReset=w,Ft.enabled=Z,Ft.autoUpdate=rt,Ft.needsUpdate=ot,Ft.type=j}function Nt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ne(w){const Z=w.target;Z.removeEventListener("dispose",ne),He(Z)}function He(w){tn(w),Vt.remove(w)}function tn(w){const Z=Vt.get(w).programs;Z!==void 0&&(Z.forEach(function(rt){zt.releaseProgram(rt)}),w.isShaderMaterial&&zt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,rt,ot,j,Et){Z===null&&(Z=Ae);const wt=j.isMesh&&j.matrixWorld.determinant()<0,Dt=Qa(w,Z,rt,ot,j);Gt.setMaterial(ot,wt);let It=rt.index,$t=1;if(ot.wireframe===!0){if(It=Mt.getWireframeAttribute(rt),It===void 0)return;$t=2}const Wt=rt.drawRange,Xt=rt.attributes.position;let de=Wt.start*$t,Ee=(Wt.start+Wt.count)*$t;Et!==null&&(de=Math.max(de,Et.start*$t),Ee=Math.min(Ee,(Et.start+Et.count)*$t)),It!==null?(de=Math.max(de,0),Ee=Math.min(Ee,It.count)):Xt!=null&&(de=Math.max(de,0),Ee=Math.min(Ee,Xt.count));const We=Ee-de;if(We<0||We===1/0)return;Le.setup(j,ot,Dt,rt,It);let _e,ve=Ot;if(It!==null&&(_e=yt.get(It),ve=ce,ve.setIndex(_e)),j.isMesh)ot.wireframe===!0?(Gt.setLineWidth(ot.wireframeLinewidth*oe()),ve.setMode(H.LINES)):ve.setMode(H.TRIANGLES);else if(j.isLine){let qt=ot.linewidth;qt===void 0&&(qt=1),Gt.setLineWidth(qt*oe()),j.isLineSegments?ve.setMode(H.LINES):j.isLineLoop?ve.setMode(H.LINE_LOOP):ve.setMode(H.LINE_STRIP)}else j.isPoints?ve.setMode(H.POINTS):j.isSprite&&ve.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Yc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ve.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,Ze=j._multiDrawCounts,Se=j._multiDrawCount,Cn=It?yt.get(It).bytesPerElement:1,pa=Vt.get(ot).currentProgram.getUniforms();for(let Ge=0;Ge<Se;Ge++)pa.setValue(H,"_gl_DrawID",Ge),ve.render(qt[Ge]/Cn,Ze[Ge])}else if(j.isInstancedMesh)ve.renderInstances(de,We,j.count);else if(rt.isInstancedBufferGeometry){const qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ze=Math.min(rt.instanceCount,qt);ve.renderInstances(de,We,Ze)}else ve.render(de,We)};function Me(w,Z,rt){w.transparent===!0&&w.side===ra&&w.forceSinglePass===!1?(w.side=Wn,w.needsUpdate=!0,ha(w,Z,rt),w.side=Ya,w.needsUpdate=!0,ha(w,Z,rt),w.side=ra):ha(w,Z,rt)}this.compile=function(w,Z,rt=null){rt===null&&(rt=w),v=ge.get(rt),v.init(Z),D.push(v),rt.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),w!==rt&&w.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const ot=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Et=j.material;if(Et)if(Array.isArray(Et))for(let wt=0;wt<Et.length;wt++){const Dt=Et[wt];Me(Dt,rt,j),ot.add(Dt)}else Me(Et,rt,j),ot.add(Et)}),v=D.pop(),ot},this.compileAsync=function(w,Z,rt=null){const ot=this.compile(w,Z,rt);return new Promise(j=>{function Et(){if(ot.forEach(function(wt){Vt.get(wt).currentProgram.isReady()&&ot.delete(wt)}),ot.size===0){j(w);return}setTimeout(Et,10)}ae.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Yn=null;function dn(w){Yn&&Yn(w)}function rn(){Bn.stop()}function Mn(){Bn.start()}const Bn=new Ov;Bn.setAnimationLoop(dn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(w){Yn=w,lt.setAnimationLoop(w),w===null?Bn.stop():Bn.start()},lt.addEventListener("sessionstart",rn),lt.addEventListener("sessionend",Mn),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Z),Z=lt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,Z,k),v=ge.get(w,D.length),v.init(Z),D.push(v),Ct.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Q.setFromProjectionMatrix(Ct),dt=this.localClippingEnabled,_t=bt.init(this.clippingPlanes,dt),S=Rt.get(w,O.length),S.init(),O.push(S),lt.enabled===!0&&lt.isPresenting===!0){const Et=R.xr.getDepthSensingMesh();Et!==null&&ja(Et,Z,-1/0,R.sortObjects)}ja(w,Z,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(St,L),we=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,we&&Zt.addToRenderList(S,w),this.info.render.frame++,_t===!0&&bt.beginShadows();const rt=v.state.shadowsArray;Ft.render(rt,w,Z),_t===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=S.opaque,j=S.transmissive;if(v.setupLights(),Z.isArrayCamera){const Et=Z.cameras;if(j.length>0)for(let wt=0,Dt=Et.length;wt<Dt;wt++){const It=Et[wt];al(ot,j,w,It)}we&&Zt.render(w);for(let wt=0,Dt=Et.length;wt<Dt;wt++){const It=Et[wt];il(S,w,It,It.viewport)}}else j.length>0&&al(ot,j,w,Z),we&&Zt.render(w),il(S,w,Z);k!==null&&z===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),w.isScene===!0&&w.onAfterRender(R,w,Z),Le.resetDefaultState(),U=-1,C=null,D.pop(),D.length>0?(v=D[D.length-1],_t===!0&&bt.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function ja(w,Z,rt,ot){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){ot&&Yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ct);const wt=pt.update(w),Dt=w.material;Dt.visible&&S.push(w,wt,Dt,rt,Yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const wt=pt.update(w),Dt=w.material;if(ot&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Yt.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Yt.copy(wt.boundingSphere.center)),Yt.applyMatrix4(w.matrixWorld).applyMatrix4(Ct)),Array.isArray(Dt)){const It=wt.groups;for(let $t=0,Wt=It.length;$t<Wt;$t++){const Xt=It[$t],de=Dt[Xt.materialIndex];de&&de.visible&&S.push(w,wt,de,rt,Yt.z,Xt)}}else Dt.visible&&S.push(w,wt,Dt,rt,Yt.z,null)}}const Et=w.children;for(let wt=0,Dt=Et.length;wt<Dt;wt++)ja(Et[wt],Z,rt,ot)}function il(w,Z,rt,ot){const j=w.opaque,Et=w.transmissive,wt=w.transparent;v.setupLightsView(rt),_t===!0&&bt.setGlobalState(R.clippingPlanes,rt),ot&&Gt.viewport(G.copy(ot)),j.length>0&&Ka(j,Z,rt),Et.length>0&&Ka(Et,Z,rt),wt.length>0&&Ka(wt,Z,rt),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function al(w,Z,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ot.id]===void 0&&(v.state.transmissionRenderTarget[ot.id]=new ws(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?el:ua,minFilter:bs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Et=v.state.transmissionRenderTarget[ot.id],wt=ot.viewport||G;Et.setSize(wt.z*R.transmissionResolutionScale,wt.w*R.transmissionResolutionScale);const Dt=R.getRenderTarget();R.setRenderTarget(Et),R.getClearColor(ut),ct=R.getClearAlpha(),ct<1&&R.setClearColor(16777215,.5),R.clear(),we&&Zt.render(rt);const It=R.toneMapping;R.toneMapping=qa;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),v.setupLightsView(ot),_t===!0&&bt.setGlobalState(R.clippingPlanes,ot),Ka(w,rt,ot),N.updateMultisampleRenderTarget(Et),N.updateRenderTargetMipmap(Et),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Xt=0,de=Z.length;Xt<de;Xt++){const Ee=Z[Xt],We=Ee.object,_e=Ee.geometry,ve=Ee.material,qt=Ee.group;if(ve.side===ra&&We.layers.test(ot.layers)){const Ze=ve.side;ve.side=Wn,ve.needsUpdate=!0,fa(We,rt,ot,_e,ve,qt),ve.side=Ze,ve.needsUpdate=!0,Wt=!0}}Wt===!0&&(N.updateMultisampleRenderTarget(Et),N.updateRenderTargetMipmap(Et))}R.setRenderTarget(Dt),R.setClearColor(ut,ct),$t!==void 0&&(ot.viewport=$t),R.toneMapping=It}function Ka(w,Z,rt){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let j=0,Et=w.length;j<Et;j++){const wt=w[j],Dt=wt.object,It=wt.geometry,$t=wt.group;let Wt=wt.material;Wt.allowOverride===!0&&ot!==null&&(Wt=ot),Dt.layers.test(rt.layers)&&fa(Dt,Z,rt,It,Wt,$t)}}function fa(w,Z,rt,ot,j,Et){w.onBeforeRender(R,Z,rt,ot,j,Et),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(R,Z,rt,ot,w,Et),j.transparent===!0&&j.side===ra&&j.forceSinglePass===!1?(j.side=Wn,j.needsUpdate=!0,R.renderBufferDirect(rt,Z,ot,j,w,Et),j.side=Ya,j.needsUpdate=!0,R.renderBufferDirect(rt,Z,ot,j,w,Et),j.side=ra):R.renderBufferDirect(rt,Z,ot,j,w,Et),w.onAfterRender(R,Z,rt,ot,j,Et)}function ha(w,Z,rt){Z.isScene!==!0&&(Z=Ae);const ot=Vt.get(w),j=v.state.lights,Et=v.state.shadowsArray,wt=j.state.version,Dt=zt.getParameters(w,j.state,Et,Z,rt),It=zt.getProgramCacheKey(Dt);let $t=ot.programs;ot.environment=w.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(w.isMeshStandardMaterial?et:A).get(w.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",ne),$t=new Map,ot.programs=$t);let Wt=$t.get(It);if(Wt!==void 0){if(ot.currentProgram===Wt&&ot.lightsStateVersion===wt)return Pi(w,Dt),Wt}else Dt.uniforms=zt.getUniforms(w),w.onBeforeCompile(Dt,R),Wt=zt.acquireProgram(Dt,It),$t.set(It,Wt),ot.uniforms=Dt.uniforms;const Xt=ot.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xt.clippingPlanes=bt.uniform),Pi(w,Dt),ot.needsLights=en(w),ot.lightsStateVersion=wt,ot.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),ot.currentProgram=Wt,ot.uniformsList=null,Wt}function Oi(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=Zc.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Pi(w,Z){const rt=Vt.get(w);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Qa(w,Z,rt,ot,j){Z.isScene!==!0&&(Z=Ae),N.resetTextureUnits();const Et=Z.fog,wt=ot.isMeshStandardMaterial?Z.environment:null,Dt=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Nr,It=(ot.isMeshStandardMaterial?et:A).get(ot.envMap||wt),$t=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Wt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Xt=!!rt.morphAttributes.position,de=!!rt.morphAttributes.normal,Ee=!!rt.morphAttributes.color;let We=qa;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(We=R.toneMapping);const _e=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ve=_e!==void 0?_e.length:0,qt=Vt.get(ot),Ze=v.state.lights;if(_t===!0&&(dt===!0||w!==C)){const pn=w===C&&ot.id===U;bt.setState(ot,w,pn)}let Se=!1;ot.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ze.state.version||qt.outputColorSpace!==Dt||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isBatchedMesh&&qt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qt.instancingMorph===!1&&j.morphTexture!==null||qt.envMap!==It||ot.fog===!0&&qt.fog!==Et||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==bt.numPlanes||qt.numIntersection!==bt.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==Wt||qt.morphTargets!==Xt||qt.morphNormals!==de||qt.morphColors!==Ee||qt.toneMapping!==We||qt.morphTargetsCount!==ve)&&(Se=!0):(Se=!0,qt.__version=ot.version);let Cn=qt.currentProgram;Se===!0&&(Cn=ha(ot,Z,j));let pa=!1,Ge=!1,Ii=!1;const Be=Cn.getUniforms(),Dn=qt.uniforms;if(Gt.useProgram(Cn.program)&&(pa=!0,Ge=!0,Ii=!0),ot.id!==U&&(U=ot.id,Ge=!0),pa||C!==w){Gt.buffers.depth.getReversed()?(Tt.copy(w.projectionMatrix),WS(Tt),qS(Tt),Be.setValue(H,"projectionMatrix",Tt)):Be.setValue(H,"projectionMatrix",w.projectionMatrix),Be.setValue(H,"viewMatrix",w.matrixWorldInverse);const En=Be.map.cameraPosition;En!==void 0&&En.setValue(H,ie.setFromMatrixPosition(w.matrixWorld)),Jt.logarithmicDepthBuffer&&Be.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Be.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Ge=!0,Ii=!0)}if(j.isSkinnedMesh){Be.setOptional(H,j,"bindMatrix"),Be.setOptional(H,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Be.setValue(H,"boneTexture",pn.boneTexture,N))}j.isBatchedMesh&&(Be.setOptional(H,j,"batchingTexture"),Be.setValue(H,"batchingTexture",j._matricesTexture,N),Be.setOptional(H,j,"batchingIdTexture"),Be.setValue(H,"batchingIdTexture",j._indirectTexture,N),Be.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Be.setValue(H,"batchingColorTexture",j._colorsTexture,N));const on=rt.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Kt.update(j,rt,Cn),(Ge||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,Be.setValue(H,"receiveShadow",j.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Dn.envMap.value=It,Dn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(Dn.envMapIntensity.value=Z.environmentIntensity),Ge&&(Be.setValue(H,"toneMappingExposure",R.toneMappingExposure),qt.needsLights&&da(Dn,Ii),Et&&ot.fog===!0&&At.refreshFogUniforms(Dn,Et),At.refreshMaterialUniforms(Dn,ot,Y,J,v.state.transmissionRenderTarget[w.id]),Zc.upload(H,Oi(qt),Dn,N)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Zc.upload(H,Oi(qt),Dn,N),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Be.setValue(H,"center",j.center),Be.setValue(H,"modelViewMatrix",j.modelViewMatrix),Be.setValue(H,"normalMatrix",j.normalMatrix),Be.setValue(H,"modelMatrix",j.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const pn=ot.uniformsGroups;for(let En=0,Mi=pn.length;En<Mi;En++){const Bi=pn[En];W.update(Bi,Cn),W.bind(Bi,Cn)}}return Cn}function da(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function en(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,Z,rt){const ot=Vt.get(w);ot.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Vt.get(w.texture).__webglTexture=Z,Vt.get(w.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const rt=Vt.get(w);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const sl=H.createFramebuffer();this.setRenderTarget=function(w,Z=0,rt=0){k=w,B=Z,z=rt;let ot=!0,j=null,Et=!1,wt=!1;if(w){const It=Vt.get(w);if(It.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(It.__webglFramebuffer===void 0)N.setupRenderTarget(w);else if(It.__hasExternalTextures)N.rebindTextures(w,Vt.get(w.texture).__webglTexture,Vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xt=w.depthTexture;if(It.__boundDepthTexture!==Xt){if(Xt!==null&&Vt.has(Xt)&&(w.width!==Xt.image.width||w.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(w)}}const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(wt=!0);const Wt=Vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[Z])?j=Wt[Z][rt]:j=Wt[Z],Et=!0):w.samples>0&&N.useMultisampledRTT(w)===!1?j=Vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?j=Wt[rt]:j=Wt,G.copy(w.viewport),it.copy(w.scissor),at=w.scissorTest}else G.copy(K).multiplyScalar(Y).floor(),it.copy(ft).multiplyScalar(Y).floor(),at=gt;if(rt!==0&&(j=sl),Gt.bindFramebuffer(H.FRAMEBUFFER,j)&&ot&&Gt.drawBuffers(w,j),Gt.viewport(G),Gt.scissor(it),Gt.setScissorTest(at),Et){const It=Vt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,It.__webglTexture,rt)}else if(wt){const It=Vt.get(w.texture),$t=Z;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.__webglTexture,rt,$t)}else if(w!==null&&rt!==0){const It=Vt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,It.__webglTexture,rt)}U=-1},this.readRenderTargetPixels=function(w,Z,rt,ot,j,Et,wt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){Gt.bindFramebuffer(H.FRAMEBUFFER,Dt);try{const It=w.texture,$t=It.format,Wt=It.type;if(!Jt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-ot&&rt>=0&&rt<=w.height-j&&H.readPixels(Z,rt,ot,j,ee.convert($t),ee.convert(Wt),Et)}finally{const It=k!==null?Vt.get(k).__webglFramebuffer:null;Gt.bindFramebuffer(H.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,Z,rt,ot,j,Et,wt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt)if(Z>=0&&Z<=w.width-ot&&rt>=0&&rt<=w.height-j){Gt.bindFramebuffer(H.FRAMEBUFFER,Dt);const It=w.texture,$t=It.format,Wt=It.type;if(!Jt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Xt),H.bufferData(H.PIXEL_PACK_BUFFER,Et.byteLength,H.STREAM_READ),H.readPixels(Z,rt,ot,j,ee.convert($t),ee.convert(Wt),0);const de=k!==null?Vt.get(k).__webglFramebuffer:null;Gt.bindFramebuffer(H.FRAMEBUFFER,de);const Ee=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await XS(H,Ee,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Xt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Et),H.deleteBuffer(Xt),H.deleteSync(Ee),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,rt=0){const ot=Math.pow(2,-rt),j=Math.floor(w.image.width*ot),Et=Math.floor(w.image.height*ot),wt=Z!==null?Z.x:0,Dt=Z!==null?Z.y:0;N.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,wt,Dt,j,Et),Gt.unbindTexture()};const rl=H.createFramebuffer(),zi=H.createFramebuffer();this.copyTextureToTexture=function(w,Z,rt=null,ot=null,j=0,Et=null){Et===null&&(j!==0?(Yc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=j,j=0):Et=0);let wt,Dt,It,$t,Wt,Xt,de,Ee,We;const _e=w.isCompressedTexture?w.mipmaps[Et]:w.image;if(rt!==null)wt=rt.max.x-rt.min.x,Dt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,Wt=rt.min.y,Xt=rt.isBox3?rt.min.z:0;else{const on=Math.pow(2,-j);wt=Math.floor(_e.width*on),Dt=Math.floor(_e.height*on),w.isDataArrayTexture?It=_e.depth:w.isData3DTexture?It=Math.floor(_e.depth*on):It=1,$t=0,Wt=0,Xt=0}ot!==null?(de=ot.x,Ee=ot.y,We=ot.z):(de=0,Ee=0,We=0);const ve=ee.convert(Z.format),qt=ee.convert(Z.type);let Ze;Z.isData3DTexture?(N.setTexture3D(Z,0),Ze=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(N.setTexture2DArray(Z,0),Ze=H.TEXTURE_2D_ARRAY):(N.setTexture2D(Z,0),Ze=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const Se=H.getParameter(H.UNPACK_ROW_LENGTH),Cn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pa=H.getParameter(H.UNPACK_SKIP_PIXELS),Ge=H.getParameter(H.UNPACK_SKIP_ROWS),Ii=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,_e.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_e.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,Wt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xt);const Be=w.isDataArrayTexture||w.isData3DTexture,Dn=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const on=Vt.get(w),pn=Vt.get(Z),En=Vt.get(on.__renderTarget),Mi=Vt.get(pn.__renderTarget);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,En.__webglFramebuffer),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Bi=0;Bi<It;Bi++)Be&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.get(w).__webglTexture,j,Xt+Bi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.get(Z).__webglTexture,Et,We+Bi)),H.blitFramebuffer($t,Wt,wt,Dt,de,Ee,wt,Dt,H.DEPTH_BUFFER_BIT,H.NEAREST);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||Vt.has(w)){const on=Vt.get(w),pn=Vt.get(Z);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,rl),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,zi);for(let En=0;En<It;En++)Be?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,on.__webglTexture,j,Xt+En):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,on.__webglTexture,j),Dn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Et,We+En):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Et),j!==0?H.blitFramebuffer($t,Wt,wt,Dt,de,Ee,wt,Dt,H.COLOR_BUFFER_BIT,H.NEAREST):Dn?H.copyTexSubImage3D(Ze,Et,de,Ee,We+En,$t,Wt,wt,Dt):H.copyTexSubImage2D(Ze,Et,de,Ee,$t,Wt,wt,Dt);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Dn?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Ze,Et,de,Ee,We,wt,Dt,It,ve,qt,_e.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(Ze,Et,de,Ee,We,wt,Dt,It,ve,_e.data):H.texSubImage3D(Ze,Et,de,Ee,We,wt,Dt,It,ve,qt,_e):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Et,de,Ee,wt,Dt,ve,qt,_e.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Et,de,Ee,_e.width,_e.height,ve,_e.data):H.texSubImage2D(H.TEXTURE_2D,Et,de,Ee,wt,Dt,ve,qt,_e);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Cn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pa),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ge),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ii),Et===0&&Z.generateMipmaps&&H.generateMipmap(Ze),Gt.unbindTexture()},this.copyTextureToTexture3D=function(w,Z,rt=null,ot=null,j=0){return Yc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,Z,rt,ot,j)},this.initRenderTarget=function(w){Vt.get(w).__webglFramebuffer===void 0&&N.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?N.setTextureCube(w,0):w.isData3DTexture?N.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?N.setTexture2DArray(w,0):N.setTexture2D(w,0),Gt.unbindTexture()},this.resetState=function(){B=0,z=0,k=null,Gt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),n.unpackColorSpace=be._getUnpackColorSpace()}}class qA{static createButton(t,n={}){const a=document.createElement("button");function o(p){let g=null;async function _(E){E.addEventListener("end",x),await t.xr.setSession(E),a.textContent="STOP XR",g=E}function x(){g.removeEventListener("end",x),a.textContent="START XR",g=null}a.style.display="",a.style.cursor="pointer",a.style.left="calc(50% - 50px)",a.style.width="100px",a.textContent="START XR";const y={...n,optionalFeatures:["local-floor","bounded-floor","layers",...n.optionalFeatures||[]]};a.onmouseenter=function(){a.style.opacity="1.0"},a.onmouseleave=function(){a.style.opacity="0.5"},a.onclick=function(){g===null?navigator.xr.requestSession(p,y).then(_):(g.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession(p,y).then(_).catch(E=>{console.warn(E)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession(p,y).then(_).catch(E=>{console.warn(E)})}function c(){a.style.display="",a.style.cursor="auto",a.style.left="calc(50% - 75px)",a.style.width="150px",a.onmouseenter=null,a.onmouseleave=null,a.onclick=null}function f(){c(),a.textContent="XR NOT SUPPORTED"}function h(p){c(),console.warn("Exception when trying to call xr.isSessionSupported",p),a.textContent="XR NOT ALLOWED"}function m(p){p.style.position="absolute",p.style.bottom="20px",p.style.padding="12px 6px",p.style.border="1px solid #fff",p.style.borderRadius="4px",p.style.background="rgba(0,0,0,0.1)",p.style.color="#fff",p.style.font="normal 13px sans-serif",p.style.textAlign="center",p.style.opacity="0.5",p.style.outline="none",p.style.zIndex="999"}if("xr"in navigator)return a.id="XRButton",a.style.display="none",m(a),navigator.xr.isSessionSupported("immersive-ar").then(function(p){p?o("immersive-ar"):navigator.xr.isSessionSupported("immersive-vr").then(function(g){g?o("immersive-vr"):f()}).catch(h)}).catch(h),a;{const p=document.createElement("a");return window.isSecureContext===!1?(p.href=document.location.href.replace(/^http:/,"https:"),p.innerHTML="WEBXR NEEDS HTTPS"):(p.href="https://immersiveweb.dev/",p.innerHTML="WEBXR NOT AVAILABLE"),p.style.left="calc(50% - 90px)",p.style.width="180px",p.style.textDecoration="none",m(p),p}}}const K0={type:"change"},rp={type:"start"},Fv={type:"end"},Hc=new Kd,Q0=new ka,YA=Math.cos(70*VS.DEG2RAD),un=new V,Xn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zh=1e-6;class ZA extends lE{constructor(t,n=null){super(t,n),this.state=Ie.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Cs,this._lastTargetPosition=new V,this._quat=new Cs().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new T0,this._sphericalDelta=new T0,this._scale=1,this._panOffset=new V,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new V,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KA.bind(this),this._onPointerDown=jA.bind(this),this._onPointerUp=QA.bind(this),this._onContextMenu=aR.bind(this),this._onMouseWheel=tR.bind(this),this._onKeyDown=eR.bind(this),this._onTouchStart=nR.bind(this),this._onTouchMove=iR.bind(this),this._onMouseDown=JA.bind(this),this._onMouseMove=$A.bind(this),this._interceptControlDown=sR.bind(this),this._interceptControlUp=rR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(K0),this.update(),this.state=Ie.NONE}update(t=null){const n=this.object.position;un.copy(n).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=Xn:a>Math.PI&&(a-=Xn),o<-Math.PI?o+=Xn:o>Math.PI&&(o-=Xn),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),n.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=un.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new V(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new V(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Hc.origin.copy(this.object.position),Hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hc.direction))<YA?this.object.lookAt(this.target):(Q0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hc.intersectPlane(Q0,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zh||this._lastTargetPosition.distanceToSquared(this.target)>Zh?(this.dispatchEvent(K0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){un.setFromMatrixColumn(n,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,n){this.screenSpacePanning===!0?un.setFromMatrixColumn(n,1):(un.setFromMatrixColumn(n,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;un.copy(o).sub(this.target);let c=un.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,f=a.width,h=a.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Bt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function jA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function KA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function QA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fv),this.state=Ie.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function JA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ie.DOLLY;break;case Ar.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ie.ROTATE}break;case Ar.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(rp)}function $A(r){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function tR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(r.preventDefault(),this.dispatchEvent(rp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Fv))}function eR(r){this.enabled!==!1&&this._handleKeyDown(r)}function nR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ie.TOUCH_ROTATE;break;case Er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case Er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ie.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(rp)}function iR(r){switch(this._trackPointer(r),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ie.NONE}}function aR(r){this.enabled!==!1&&r.preventDefault()}function sR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Cr=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return r},Out:function(r){return r},InOut:function(r){return r}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var t=1.70158;return r===1?1:r*r*((t+1)*r-t)},Out:function(r){var t=1.70158;return r===0?0:--r*r*((t+1)*r+t)+1},InOut:function(r){var t=2.5949095;return(r*=2)<1?.5*(r*r*((t+1)*r-t)):.5*((r-=2)*r*((t+1)*r+t)+2)}}),Bounce:Object.freeze({In:function(r){return 1-Cr.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?Cr.Bounce.In(r*2)*.5:Cr.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(t){return Math.pow(t,r)},Out:function(t){return 1-Math.pow(1-t,r)},InOut:function(t){return t<.5?Math.pow(t*2,r)/2:(1-Math.pow(2-t*2,r))/2+.5}}}}),br=function(){return performance.now()},Hv=function(){function r(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,t)}return r.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(n){return t._tweens[n]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(){for(var t,n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];for(var o=0,c=n;o<c.length;o++){var f=c[o];(t=f._group)===null||t===void 0||t.remove(f),f._group=this,this._tweens[f.getId()]=f,this._tweensAddedDuringUpdate[f.getId()]=f}},r.prototype.remove=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var a=0,o=t;a<o.length;a++){var c=o[a];c._group=void 0,delete this._tweens[c.getId()],delete this._tweensAddedDuringUpdate[c.getId()]}},r.prototype.allStopped=function(){return this.getAll().every(function(t){return!t.isPlaying()})},r.prototype.update=function(t,n){t===void 0&&(t=br()),n===void 0&&(n=!0);var a=Object.keys(this._tweens);if(a.length!==0)for(;a.length>0;){this._tweensAddedDuringUpdate={};for(var o=0;o<a.length;o++){var c=this._tweens[a[o]],f=!n;c&&c.update(t,f)===!1&&!n&&this.remove(c)}a=Object.keys(this._tweensAddedDuringUpdate)}},r}(),As={Linear:function(r,t){var n=r.length-1,a=n*t,o=Math.floor(a),c=As.Utils.Linear;return t<0?c(r[0],r[1],a):t>1?c(r[n],r[n-1],n-a):c(r[o],r[o+1>n?n:o+1],a-o)},Bezier:function(r,t){for(var n=0,a=r.length-1,o=Math.pow,c=As.Utils.Bernstein,f=0;f<=a;f++)n+=o(1-t,a-f)*o(t,f)*r[f]*c(a,f);return n},CatmullRom:function(r,t){var n=r.length-1,a=n*t,o=Math.floor(a),c=As.Utils.CatmullRom;return r[0]===r[n]?(t<0&&(o=Math.floor(a=n*(1+t))),c(r[(o-1+n)%n],r[o],r[(o+1)%n],r[(o+2)%n],a-o)):t<0?r[0]-(c(r[0],r[0],r[1],r[1],-a)-r[0]):t>1?r[n]-(c(r[n],r[n],r[n-1],r[n-1],a-n)-r[n]):c(r[o?o-1:0],r[o],r[n<o+1?n:o+1],r[n<o+2?n:o+2],a-o)},Utils:{Linear:function(r,t,n){return(t-r)*n+r},Bernstein:function(r,t){var n=As.Utils.Factorial;return n(r)/n(t)/n(r-t)},Factorial:function(){var r=[1];return function(t){var n=1;if(r[t])return r[t];for(var a=t;a>1;a--)n*=a;return r[t]=n,n}}(),CatmullRom:function(r,t,n,a,o){var c=(n-r)*.5,f=(a-t)*.5,h=o*o,m=o*h;return(2*t-2*n+c+f)*m+(-3*t+3*n-2*c-f)*h+c*o+t}}},op=function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r}(),Hd=new Hv,oR=function(){function r(t,n){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Cr.Linear.None,this._interpolationFunction=As.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=op.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=t,typeof n=="object"?(this._group=n,n.add(this)):n===!0&&(this._group=Hd,Hd.add(this))}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.getDuration=function(){return this._duration},r.prototype.to=function(t,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=n<0?0:n,this},r.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},r.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},r.prototype.start=function(t,n){if(t===void 0&&(t=br()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var a in this._valuesStartRepeat)this._swapEndStartRepeatValues(a),this._valuesStart[a]=this._valuesStartRepeat[a]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var o={};for(var c in this._valuesEnd)o[c]=this._valuesEnd[c];this._valuesEnd=o}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},r.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},r.prototype._setupProperties=function(t,n,a,o,c){for(var f in a){var h=t[f],m=Array.isArray(h),p=m?"array":typeof h,g=!m&&Array.isArray(a[f]);if(!(p==="undefined"||p==="function")){if(g){var _=a[f];if(_.length===0)continue;for(var x=[h],y=0,E=_.length;y<E;y+=1){var T=this._handleRelativeValue(h,_[y]);if(isNaN(T)){g=!1,console.warn("Found invalid interpolation list. Skipping.");break}x.push(T)}g&&(a[f]=x)}if((p==="object"||m)&&h&&!g){n[f]=m?[]:{};var S=h;for(var v in S)n[f][v]=S[v];o[f]=m?[]:{};var _=a[f];if(!this._isDynamic){var O={};for(var v in _)O[v]=_[v];a[f]=_=O}this._setupProperties(S,n[f],_,o[f],c)}else(typeof n[f]>"u"||c)&&(n[f]=h),m||(n[f]*=1),g?o[f]=a[f].slice().reverse():o[f]=n[f]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},r.prototype.pause=function(t){return t===void 0&&(t=br()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this)},r.prototype.resume=function(t){return t===void 0&&(t=br()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this)},r.prototype.stopChainedTweens=function(){for(var t=0,n=this._chainedTweens.length;t<n;t++)this._chainedTweens[t].stop();return this},r.prototype.group=function(t){return t?(t.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},r.prototype.remove=function(){var t;return(t=this._group)===null||t===void 0||t.remove(this),this},r.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},r.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},r.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},r.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},r.prototype.easing=function(t){return t===void 0&&(t=Cr.Linear.None),this._easingFunction=t,this},r.prototype.interpolation=function(t){return t===void 0&&(t=As.Linear),this._interpolationFunction=t,this},r.prototype.chain=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return this._chainedTweens=t,this},r.prototype.onStart=function(t){return this._onStartCallback=t,this},r.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},r.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},r.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},r.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},r.prototype.onStop=function(t){return this._onStopCallback=t,this},r.prototype.update=function(t,n){var a=this,o;if(t===void 0&&(t=br()),n===void 0&&(n=r.autoStartOnUpdate),this._isPaused)return!0;var c;if(!this._goToEnd&&!this._isPlaying)if(n)this.start(t,!0);else return!1;if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var f=t-this._startTime,h=this._duration+((o=this._repeatDelayTime)!==null&&o!==void 0?o:this._delayTime),m=this._duration+this._repeat*h,p=function(){if(a._duration===0||f>m)return 1;var T=Math.trunc(f/h),S=f-T*h,v=Math.min(S/a._duration,1);return v===0&&f===a._duration?1:v},g=p(),_=this._easingFunction(g);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,_),this._onUpdateCallback&&this._onUpdateCallback(this._object,g),this._duration===0||f>=this._duration)if(this._repeat>0){var x=Math.min(Math.trunc((f-this._duration)/h)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=x);for(c in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[c]=="string"&&(this._valuesStartRepeat[c]=this._valuesStartRepeat[c]+parseFloat(this._valuesEnd[c])),this._yoyo&&this._swapEndStartRepeatValues(c),this._valuesStart[c]=this._valuesStartRepeat[c];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=h*x,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var y=0,E=this._chainedTweens.length;y<E;y++)this._chainedTweens[y].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(t,n,a,o){for(var c in a)if(n[c]!==void 0){var f=n[c]||0,h=a[c],m=Array.isArray(t[c]),p=Array.isArray(h),g=!m&&p;g?t[c]=this._interpolationFunction(h,o):typeof h=="object"&&h?this._updateProperties(t[c],f,h,o):(h=this._handleRelativeValue(f,h),typeof h=="number"&&(t[c]=f+(h-f)*o))}},r.prototype._handleRelativeValue=function(t,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?t+parseFloat(n):parseFloat(n)},r.prototype._swapEndStartRepeatValues=function(t){var n=this._valuesStartRepeat[t],a=this._valuesEnd[t];typeof a=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(a):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=n},r.autoStartOnUpdate=!1,r}(),lR="25.0.0",cR=op.nextId,Li=Hd,uR=Li.getAll.bind(Li),fR=Li.removeAll.bind(Li),hR=Li.add.bind(Li),dR=Li.remove.bind(Li),pR=Li.update.bind(Li),eu={Easing:Cr,Group:Hv,Interpolation:As,now:br,Sequence:op,nextId:cR,Tween:oR,VERSION:lR,getAll:uR,removeAll:fR,add:hR,remove:dR,update:pR};class mR extends ap{constructor(t){super(t)}load(t,n,a,o){const c=this,f=new eE(this.manager);f.setPath(this.path),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(t,function(h){const m=c.parse(JSON.parse(h));n&&n(m)},a,o)}parse(t){return new gR(t)}}class gR{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,n=100){const a=[],o=_R(t,n,this.data);for(let c=0,f=o.length;c<f;c++)a.push(...o[c].toShapes());return a}}function _R(r,t,n){const a=Array.from(r),o=t/n.resolution,c=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*o,f=[];let h=0,m=0;for(let p=0;p<a.length;p++){const g=a[p];if(g===`
`)h=0,m-=c;else{const _=vR(g,o,h,m,n);h+=_.offsetX,f.push(_.path)}}return f}function vR(r,t,n,a,o){const c=o.glyphs[r]||o.glyphs["?"];if(!c){console.error('THREE.Font: character "'+r+'" does not exists in font family '+o.familyName+".");return}const f=new oE;let h,m,p,g,_,x,y,E;if(c.o){const T=c._cachedOutline||(c._cachedOutline=c.o.split(" "));for(let S=0,v=T.length;S<v;)switch(T[S++]){case"m":h=T[S++]*t+n,m=T[S++]*t+a,f.moveTo(h,m);break;case"l":h=T[S++]*t+n,m=T[S++]*t+a,f.lineTo(h,m);break;case"q":p=T[S++]*t+n,g=T[S++]*t+a,_=T[S++]*t+n,x=T[S++]*t+a,f.quadraticCurveTo(_,x,p,g);break;case"b":p=T[S++]*t+n,g=T[S++]*t+a,_=T[S++]*t+n,x=T[S++]*t+a,y=T[S++]*t+n,E=T[S++]*t+a,f.bezierCurveTo(_,x,y,E,p,g);break}}return{offsetX:c.ha*t,path:f}}function xR(){const r=Wo.useRef(null),[t,n]=Wo.useState({made:0,missed:0,fgPercent:"0.0"});return Wo.useEffect(()=>{const a=new _M,o=new Vo;a.add(o),a.background=new ye(1710618);const c=new hi(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.set(0,20,35),c.lookAt(0,0,0);const f=new WA({antialias:!0});f.setSize(window.innerWidth,window.innerHeight),f.shadowMap.enabled=!0,f.xr.enabled=!0,r.current&&(r.current.appendChild(f.domElement),"xr"in navigator&&document.body.appendChild(qA.createButton(f)));const h=new ZA(c,f.domElement);h.enableDamping=!0,h.dampingFactor=.05;const m=new sE(16777215,.5);a.add(m);const p=new aE(16777215,1);p.position.set(5,10,7.5),p.castShadow=!0,a.add(p);const g=new zr(50,94),_=new zc({color:9127187,roughness:.7,metalness:.1}),x=new In(g,_);x.rotation.x=-Math.PI/2,x.receiveShadow=!0,a.add(x);const y=new In(new Fr(6,4,.2),new zc({color:16777215}));y.position.set(0,10,-47),y.castShadow=!0,a.add(y);const E=new In(new ip(.75,.08,16,100),new zc({color:16729344}));E.rotation.x=Math.PI/2,E.position.set(0,9.8,-46.7),E.castShadow=!0,a.add(E);const T=(L,K,ft,gt)=>{const Q=new zr(L,K),_t=new Jc({color:gt,transparent:!0,opacity:.25,depthWrite:!1}),dt=new In(Q,_t);dt.rotation.x=-Math.PI/2,dt.position.copy(ft),a.add(dt)},S=new tp(.7,.7,1.5,12),v=new Jc({color:16777215,wireframe:!0}),O=new In(S,v);O.position.set(0,9.1,-46.7),a.add(O),new mR().load("/fonts/helvetiker_regular.typeface.json",L=>{T(16,19,new V(0,.11,-37.5),47334),T(40,28,new V(0,.11,-10),16747520),T(50,20,new V(0,.11,24.5),8388736)});const R=new Pd({color:16777215,linewidth:2}),F=[new V(-25,.1,-47),new V(25,.1,-47),new V(25,.1,47),new V(-25,.1,47),new V(-25,.1,-47)];a.add(new vs(new yn().setFromPoints(F),R));const B=new yn,z=[],k=23.75,U=4;for(let L=.12;L<=.88;L+=.01){const K=L*Math.PI;z.push(new V(Math.cos(K)*k,.1,Math.sin(K)*k-U))}B.setFromPoints(z),a.add(new vs(B,R));const C=new yn().setFromPoints([new V(-8,.1,-47),new V(-8,.1,-28),new V(8,.1,-28),new V(8,.1,-47),new V(-8,.1,-47)]);a.add(new vs(C,R));const G=new yn,it=[];for(let L=0;L<=Math.PI*2;L+=.05)it.push(new V(Math.cos(L)*6,.1,-28+Math.sin(L)*6));G.setFromPoints(it),a.add(new vs(G,R));const at=new yn().setFromPoints([new V(-3,.1,-47),new V(3,.1,-47)]);a.add(new vs(at,R)),[[-7,-34],[-7,-40],[7,-34],[7,-40]].forEach(([L,K])=>{const ft=new yn().setFromPoints([new V(L,.1,K),new V(L,.1,K+1)]);a.add(new vs(ft,R))});let ut=0,ct=[],P=!1;function J(L,K){const ft=new In(new np(.3,8,8),new zc({color:16753920}));ft.castShadow=!0;const gt=new V(L.x_ft,1,L.y_ft);ft.position.copy(gt),o.add(ft);const Q=(L.result||"").toLowerCase().includes("made"),_t=Q?65280:16711680,dt=new V,Tt=new V;Q?(dt.set(0,9.8,-46.7),Tt.set((gt.x+dt.x)/2,Math.max(20,gt.y+15),(gt.z+dt.z)/2)):Math.random()<.7?(dt.set(0+(Math.random()-.5)*1.5,9.5,-46.7+(Math.random()-.5)*1.5),Tt.set((gt.x+dt.x)/2,12,(gt.z+dt.z)/2)):(dt.set(gt.x+(Math.random()-.5)*10,1,gt.z-15),Tt.set((gt.x+dt.x)/2,8,(gt.z+dt.z)/2));const Ct=new Av(gt,Tt,dt),ie=new yn().setFromPoints(Ct.getPoints(50)),Yt=new Pd({color:_t,linewidth:2}),Ae=new vs(ie,Yt);o.add(Ae);const we=Q?120:100,oe=Date.now(),H=()=>{const Sn=Date.now()-oe,ae=Math.min(Sn/(we*16),1),Jt=Ct.getPoint(ae),Gt=Math.sin(ae*Math.PI)*(Q?5:3);ft.position.set(Jt.x,Jt.y+Gt,Jt.z),ft.rotation.x=ae*Math.PI*2,ft.rotation.z=ae*Math.PI*1.5,ae<1?requestAnimationFrame(H):setTimeout(()=>{o.remove(ft),o.remove(Ae),ft.geometry.dispose(),ft.material.dispose(),Ae.geometry.dispose(),Ae.material.dispose(),K()},Q?1e3:500)};H()}function Y(){ut>=ct.length||P||(P=!0,J(ct[ut++],()=>{P=!1}))}async function St(){try{const L=await fetch("tatum_game7_webxr_coords.json");if(!L.ok)throw new Error("Failed to load shot data");ct=await L.json();let K=0,ft=0;for(const gt of ct)(gt.result||"").toLowerCase().includes("made")?K++:ft++;n({made:K,missed:ft,fgPercent:(K/(K+ft)*100).toFixed(1)})}catch(L){console.error("Error loading shots:",L)}}return St(),f.setAnimationLoop(()=>{eu.update(),h.update(),f.render(a,c),P||Y()}),()=>{r.current&&(f.dispose(),a.clear(),r.current.removeChild(f.domElement),eu.removeAll())}},[]),xn.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh"},children:[xn.jsx("div",{ref:r,style:{width:"100%",height:"100%"}}),xn.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white",padding:"10px 15px",borderRadius:"8px",fontSize:"14px",lineHeight:"1.6",zIndex:1e3},children:[xn.jsx("strong",{children:"Legend"}),xn.jsx("br",{}),xn.jsx("span",{style:{color:"#00ff00"},children:"●"})," Made Shot",xn.jsx("br",{}),xn.jsx("span",{style:{color:"#ff0000"},children:"●"})," Missed Shot",xn.jsx("br",{}),xn.jsx("span",{style:{color:"#ffa500"},children:"●"})," Shot Origin"]}),xn.jsxs("div",{style:{position:"absolute",top:"10px",left:"10px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white",padding:"10px 15px",borderRadius:"8px",fontSize:"14px",lineHeight:"1.6",zIndex:1e3},children:[xn.jsx("strong",{children:"Shot Stats"}),xn.jsx("br",{}),"🟢 Made: ",t.made,xn.jsx("br",{}),"🔴 Missed: ",t.missed,xn.jsx("br",{}),"🎯 FG%: ",t.fgPercent,"%"]})]})}function yR(){const[r,t]=Wo.useState();return xn.jsx(xR,{})}$y.createRoot(document.getElementById("root")).render(xn.jsx(Wo.StrictMode,{children:xn.jsx(yR,{})}))});export default SR();
