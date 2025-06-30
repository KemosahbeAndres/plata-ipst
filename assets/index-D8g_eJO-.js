(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function zc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},Nr=[],Kt=()=>{},M_=()=>!1,jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kc=t=>t.startsWith("onUpdate:"),at=Object.assign,Wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},L_=Object.prototype.hasOwnProperty,Re=(t,e)=>L_.call(t,e),he=Array.isArray,Os=t=>$o(t)==="[object Map]",F_=t=>$o(t)==="[object Set]",de=t=>typeof t=="function",He=t=>typeof t=="string",es=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",wd=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),U_=Object.prototype.toString,$o=t=>U_.call(t),B_=t=>$o(t).slice(8,-1),j_=t=>$o(t)==="[object Object]",Gc=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ds=zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$_=/-(\w)/g,kt=Ho(t=>t.replace($_,(e,n)=>n?n.toUpperCase():"")),H_=/\B([A-Z])/g,Yn=Ho(t=>t.replace(H_,"-$1").toLowerCase()),qo=Ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),Na=Ho(t=>t?`on${qo(t)}`:""),Ln=(t,e)=>!Object.is(t,e),Yi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},sc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ic=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zu;const zo=()=>zu||(zu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qc(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?W_(r):Qc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Le(t))return t}const q_=/;(?![^(]*\))/g,z_=/:([^]+)/,K_=/\/\*[^]*?\*\//g;function W_(t){const e={};return t.replace(K_,"").split(q_).forEach(n=>{if(n){const r=n.split(z_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yc(t){let e="";if(He(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=Yc(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const G_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Q_=zc(G_);function Ad(t){return!!t||t===""}/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mt;class Rd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mt,!e&&mt&&(this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mt;try{return mt=this,e()}finally{mt=n}}}on(){++this._on===1&&(this.prevScope=mt,mt=this)}off(){this._on>0&&--this._on===0&&(mt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Y_(t){return new Rd(t)}function X_(){return mt}let Ce;const xa=new WeakSet;class bd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mt&&mt.active&&mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xa.has(this)&&(xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ku(this),Cd(this);const e=Ce,n=Lt;Ce=this,Lt=!0;try{return this.fn()}finally{kd(this),Ce=e,Lt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zc(e);this.deps=this.depsTail=void 0,Ku(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oc(this)&&this.run()}get dirty(){return oc(this)}}let Sd=0,Ns,xs;function Pd(t,e=!1){if(t.flags|=8,e){t.next=xs,xs=t;return}t.next=Ns,Ns=t}function Xc(){Sd++}function Jc(){if(--Sd>0)return;if(xs){let e=xs;for(xs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ns;){let e=Ns;for(Ns=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Cd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Zc(r),J_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function oc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Vd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Xs)||(t.globalVersion=Xs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!oc(t))))return;t.flags|=2;const e=t.dep,n=Ce,r=Lt;Ce=t,Lt=!0;try{Cd(t);const s=t.fn(t._value);(e.version===0||Ln(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ce=n,Lt=r,kd(t),t.flags&=-3}}function Zc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Zc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function J_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Lt=!0;const Od=[];function pn(){Od.push(Lt),Lt=!1}function gn(){const t=Od.pop();Lt=t===void 0?!0:t}function Ku(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ce;Ce=void 0;try{e()}finally{Ce=n}}}let Xs=0;class Z_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class el{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ce||!Lt||Ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ce)n=this.activeLink=new Z_(Ce,this),Ce.deps?(n.prevDep=Ce.depsTail,Ce.depsTail.nextDep=n,Ce.depsTail=n):Ce.deps=Ce.depsTail=n,Dd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ce.depsTail,n.nextDep=void 0,Ce.depsTail.nextDep=n,Ce.depsTail=n,Ce.deps===n&&(Ce.deps=r)}return n}trigger(e){this.version++,Xs++,this.notify(e)}notify(e){Xc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jc()}}}function Dd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Dd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ac=new WeakMap,ar=Symbol(""),cc=Symbol(""),Js=Symbol("");function rt(t,e,n){if(Lt&&Ce){let r=ac.get(t);r||ac.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new el),s.map=r,s.key=n),s.track()}}function ln(t,e,n,r,s,i){const o=ac.get(t);if(!o){Xs++;return}const c=l=>{l&&l.trigger()};if(Xc(),e==="clear")o.forEach(c);else{const l=he(t),h=l&&Gc(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Js||!es(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(Js)),e){case"add":l?h&&c(o.get("length")):(c(o.get(ar)),Os(t)&&c(o.get(cc)));break;case"delete":l||(c(o.get(ar)),Os(t)&&c(o.get(cc)));break;case"set":Os(t)&&c(o.get(ar));break}}Jc()}function Rr(t){const e=Ae(t);return e===t?e:(rt(e,"iterate",Js),Ft(t)?e:e.map(dt))}function tl(t){return rt(t=Ae(t),"iterate",Js),t}const ey={__proto__:null,[Symbol.iterator](){return Ma(this,Symbol.iterator,dt)},concat(...t){return Rr(this).concat(...t.map(e=>he(e)?Rr(e):e))},entries(){return Ma(this,"entries",t=>(t[1]=dt(t[1]),t))},every(t,e){return rn(this,"every",t,e,void 0,arguments)},filter(t,e){return rn(this,"filter",t,e,n=>n.map(dt),arguments)},find(t,e){return rn(this,"find",t,e,dt,arguments)},findIndex(t,e){return rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return rn(this,"findLast",t,e,dt,arguments)},findLastIndex(t,e){return rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return La(this,"includes",t)},indexOf(...t){return La(this,"indexOf",t)},join(t){return Rr(this).join(t)},lastIndexOf(...t){return La(this,"lastIndexOf",t)},map(t,e){return rn(this,"map",t,e,void 0,arguments)},pop(){return Is(this,"pop")},push(...t){return Is(this,"push",t)},reduce(t,...e){return Wu(this,"reduce",t,e)},reduceRight(t,...e){return Wu(this,"reduceRight",t,e)},shift(){return Is(this,"shift")},some(t,e){return rn(this,"some",t,e,void 0,arguments)},splice(...t){return Is(this,"splice",t)},toReversed(){return Rr(this).toReversed()},toSorted(t){return Rr(this).toSorted(t)},toSpliced(...t){return Rr(this).toSpliced(...t)},unshift(...t){return Is(this,"unshift",t)},values(){return Ma(this,"values",dt)}};function Ma(t,e,n){const r=tl(t),s=r[e]();return r!==t&&!Ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const ty=Array.prototype;function rn(t,e,n,r,s,i){const o=tl(t),c=o!==t&&!Ft(t),l=o[e];if(l!==ty[e]){const p=l.apply(t,i);return c?dt(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,dt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Wu(t,e,n,r){const s=tl(t);let i=n;return s!==t&&(Ft(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,dt(c),l,t)}),s[e](i,...r)}function La(t,e,n){const r=Ae(t);rt(r,"iterate",Js);const s=r[e](...n);return(s===-1||s===!1)&&sl(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Is(t,e,n=[]){pn(),Xc();const r=Ae(t)[e].apply(t,n);return Jc(),gn(),r}const ny=zc("__proto__,__v_isRef,__isVue"),Nd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(es));function ry(t){es(t)||(t=String(t));const e=Ae(this);return rt(e,"has",t),e.hasOwnProperty(t)}class xd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?dy:Ud:i?Fd:Ld).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let l;if(o&&(l=ey[n]))return l;if(n==="hasOwnProperty")return ry}const c=Reflect.get(e,n,ot(e)?e:r);return(es(n)?Nd.has(n):ny(n))||(s||rt(e,"get",n),i)?c:ot(c)?o&&Gc(n)?c:c.value:Le(c)?s?jd(c):Ko(c):c}}class Md extends xd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ur(i);if(!Ft(r)&&!ur(r)&&(i=Ae(i),r=Ae(r)),!he(e)&&ot(i)&&!ot(r))return l?!1:(i.value=r,!0)}const o=he(e)&&Gc(n)?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,ot(e)?e:s);return e===Ae(s)&&(o?Ln(r,i)&&ln(e,"set",n,r):ln(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ln(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!es(n)||!Nd.has(n))&&rt(e,"has",n),r}ownKeys(e){return rt(e,"iterate",he(e)?"length":ar),Reflect.ownKeys(e)}}class sy extends xd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const iy=new Md,oy=new sy,ay=new Md(!0);const lc=t=>t,Bi=t=>Reflect.getPrototypeOf(t);function cy(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Os(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?lc:e?uc:dt;return!e&&rt(i,"iterate",l?cc:ar),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function ji(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ly(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(Ln(s,c)&&rt(o,"get",s),rt(o,"get",c));const{has:l}=Bi(o),h=e?lc:t?uc:dt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&rt(Ae(s),"iterate",ar),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(Ln(s,c)&&rt(o,"has",s),rt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),h=e?lc:t?uc:dt;return!t&&rt(l,"iterate",ar),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return at(n,t?{add:ji("add"),set:ji("set"),delete:ji("delete"),clear:ji("clear")}:{add(s){!e&&!Ft(s)&&!ur(s)&&(s=Ae(s));const i=Ae(this);return Bi(i).has.call(i,s)||(i.add(s),ln(i,"add",s,s)),this},set(s,i){!e&&!Ft(i)&&!ur(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=Bi(o);let h=c.call(o,s);h||(s=Ae(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?Ln(i,f)&&ln(o,"set",s,i):ln(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=Bi(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&ln(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&ln(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cy(s,t,e)}),n}function nl(t,e){const n=ly(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const uy={get:nl(!1,!1)},hy={get:nl(!1,!0)},fy={get:nl(!0,!1)};const Ld=new WeakMap,Fd=new WeakMap,Ud=new WeakMap,dy=new WeakMap;function py(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gy(t){return t.__v_skip||!Object.isExtensible(t)?0:py(B_(t))}function Ko(t){return ur(t)?t:rl(t,!1,iy,uy,Ld)}function Bd(t){return rl(t,!1,ay,hy,Fd)}function jd(t){return rl(t,!0,oy,fy,Ud)}function rl(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=gy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Ms(t){return ur(t)?Ms(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function sl(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function $d(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&sc(t,"__v_skip",!0),t}const dt=t=>Le(t)?Ko(t):t,uc=t=>Le(t)?jd(t):t;function ot(t){return t?t.__v_isRef===!0:!1}function fo(t){return Hd(t,!1)}function my(t){return Hd(t,!0)}function Hd(t,e){return ot(t)?t:new _y(t,e)}class _y{constructor(e,n){this.dep=new el,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||ur(e);e=r?e:Ae(e),Ln(e,n)&&(this._rawValue=e,this._value=r?e:dt(e),this.dep.trigger())}}function cr(t){return ot(t)?t.value:t}const yy={get:(t,e,n)=>e==="__v_raw"?t:cr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ot(s)&&!ot(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qd(t){return Ms(t)?t:new Proxy(t,yy)}class vy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new el(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return Pd(this,!0),!0}get value(){const e=this.dep.track();return Vd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ey(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new vy(r,s,n)}const $i={},po=new WeakMap;let sr;function Ty(t,e=!1,n=sr){if(n){let r=po.get(n);r||po.set(n,r=[]),r.push(t)}}function Iy(t,e,n=Pe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=H=>s?H:Ft(H)||s===!1||s===0?un(H,1):un(H);let f,p,g,_,C=!1,k=!1;if(ot(t)?(p=()=>t.value,C=Ft(t)):Ms(t)?(p=()=>h(t),C=!0):he(t)?(k=!0,C=t.some(H=>Ms(H)||Ft(H)),p=()=>t.map(H=>{if(ot(H))return H.value;if(Ms(H))return h(H);if(de(H))return l?l(H,2):H()})):de(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){pn();try{g()}finally{gn()}}const H=sr;sr=f;try{return l?l(t,3,[_]):t(_)}finally{sr=H}}:p=Kt,e&&s){const H=p,ce=s===!0?1/0:s;p=()=>un(H(),ce)}const O=X_(),j=()=>{f.stop(),O&&O.active&&Wc(O.effects,f)};if(i&&e){const H=e;e=(...ce)=>{H(...ce),j()}}let F=k?new Array(t.length).fill($i):$i;const $=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const ce=f.run();if(s||C||(k?ce.some((ae,w)=>Ln(ae,F[w])):Ln(ce,F))){g&&g();const ae=sr;sr=f;try{const w=[ce,F===$i?void 0:k&&F[0]===$i?[]:F,_];F=ce,l?l(e,3,w):e(...w)}finally{sr=ae}}}else f.run()};return c&&c($),f=new bd(p),f.scheduler=o?()=>o($,!1):$,_=H=>Ty(H,!1,f),g=f.onStop=()=>{const H=po.get(f);if(H){if(l)l(H,4);else for(const ce of H)ce();po.delete(f)}},e?r?$(!0):F=f.run():o?o($.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function un(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ot(t))un(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)un(t[r],e,n);else if(F_(t)||Os(t))t.forEach(r=>{un(r,e,n)});else if(j_(t)){for(const r in t)un(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&un(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function di(t,e,n,r){try{return r?t(...r):t()}catch(s){Wo(s,e,n)}}function Jt(t,e,n,r){if(de(t)){const s=di(t,e,n,r);return s&&wd(s)&&s.catch(i=>{Wo(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Jt(t[i],e,n,r));return s}}function Wo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Pe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){pn(),di(i,null,10,[t,l,h]),gn();return}}wy(t,n,s,r,o)}function wy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const pt=[];let Ht=-1;const xr=[];let Cn=null,br=0;const zd=Promise.resolve();let go=null;function Kd(t){const e=go||zd;return t?e.then(this?t.bind(this):t):e}function Ay(t){let e=Ht+1,n=pt.length;for(;e<n;){const r=e+n>>>1,s=pt[r],i=Zs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function il(t){if(!(t.flags&1)){const e=Zs(t),n=pt[pt.length-1];!n||!(t.flags&2)&&e>=Zs(n)?pt.push(t):pt.splice(Ay(e),0,t),t.flags|=1,Wd()}}function Wd(){go||(go=zd.then(Qd))}function Ry(t){he(t)?xr.push(...t):Cn&&t.id===-1?Cn.splice(br+1,0,t):t.flags&1||(xr.push(t),t.flags|=1),Wd()}function Gu(t,e,n=Ht+1){for(;n<pt.length;n++){const r=pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Gd(t){if(xr.length){const e=[...new Set(xr)].sort((n,r)=>Zs(n)-Zs(r));if(xr.length=0,Cn){Cn.push(...e);return}for(Cn=e,br=0;br<Cn.length;br++){const n=Cn[br];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Cn=null,br=0}}const Zs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Qd(t){try{for(Ht=0;Ht<pt.length;Ht++){const e=pt[Ht];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),di(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ht<pt.length;Ht++){const e=pt[Ht];e&&(e.flags&=-2)}Ht=-1,pt.length=0,Gd(),go=null,(pt.length||xr.length)&&Qd()}}let Tt=null,Yd=null;function mo(t){const e=Tt;return Tt=t,Yd=t&&t.type.__scopeId||null,e}function by(t,e=Tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ch(-1);const i=mo(e);let o;try{o=t(...s)}finally{mo(i),r._d&&ch(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Qu(t,e){if(Tt===null)return t;const n=Xo(Tt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Pe]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&un(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(pn(),Jt(l,n,8,[t.el,c,t,e]),gn())}}const Xd=Symbol("_vte"),Sy=t=>t.__isTeleport,Ls=t=>t&&(t.disabled||t.disabled===""),Yu=t=>t&&(t.defer||t.defer===""),Xu=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ju=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,hc=(t,e)=>{const n=t&&t.to;return He(n)?e?e(n):null:n},Jd={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,h){const{mc:f,pc:p,pbc:g,o:{insert:_,querySelector:C,createText:k,createComment:O}}=h,j=Ls(e.props);let{shapeFlag:F,children:$,dynamicChildren:H}=e;if(t==null){const ce=e.el=k(""),ae=e.anchor=k("");_(ce,n,r),_(ae,n,r);const w=(E,A)=>{F&16&&(s&&s.isCE&&(s.ce._teleportTarget=E),f($,E,A,s,i,o,c,l))},y=()=>{const E=e.target=hc(e.props,C),A=Zd(E,e,k,_);E&&(o!=="svg"&&Xu(E)?o="svg":o!=="mathml"&&Ju(E)&&(o="mathml"),j||(w(E,A),Xi(e,!1)))};j&&(w(n,ae),Xi(e,!0)),Yu(e.props)?(e.el.__isMounted=!1,ft(()=>{y(),delete e.el.__isMounted},i)):y()}else{if(Yu(e.props)&&t.el.__isMounted===!1){ft(()=>{Jd.process(t,e,n,r,s,i,o,c,l,h)},i);return}e.el=t.el,e.targetStart=t.targetStart;const ce=e.anchor=t.anchor,ae=e.target=t.target,w=e.targetAnchor=t.targetAnchor,y=Ls(t.props),E=y?n:ae,A=y?ce:w;if(o==="svg"||Xu(ae)?o="svg":(o==="mathml"||Ju(ae))&&(o="mathml"),H?(g(t.dynamicChildren,H,E,s,i,o,c),ll(t,e,!0)):l||p(t,e,E,A,s,i,o,c,!1),j)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Hi(e,n,ce,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=hc(e.props,C);R&&Hi(e,R,null,h,0)}else y&&Hi(e,ae,w,h,1);Xi(e,j)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:h,targetAnchor:f,target:p,props:g}=t;if(p&&(s(h),s(f)),i&&s(l),o&16){const _=i||!Ls(g);for(let C=0;C<c.length;C++){const k=c[C];r(k,e,n,_,!!k.dynamicChildren)}}},move:Hi,hydrate:Py};function Hi(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:h,props:f}=t,p=i===2;if(p&&r(o,e,n),(!p||Ls(f))&&l&16)for(let g=0;g<h.length;g++)s(h[g],e,n,2);p&&r(c,e,n)}function Py(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:h,createText:f}},p){const g=e.target=hc(e.props,l);if(g){const _=Ls(e.props),C=g._lpa||g.firstChild;if(e.shapeFlag&16)if(_)e.anchor=p(o(t),e,c(t),n,r,s,i),e.targetStart=C,e.targetAnchor=C&&o(C);else{e.anchor=o(t);let k=C;for(;k;){if(k&&k.nodeType===8){if(k.data==="teleport start anchor")e.targetStart=k;else if(k.data==="teleport anchor"){e.targetAnchor=k,g._lpa=e.targetAnchor&&o(e.targetAnchor);break}}k=o(k)}e.targetAnchor||Zd(g,e,f,h),p(C&&o(C),e,g,n,r,s,i)}Xi(e,_)}return e.anchor&&o(e.anchor)}const FS=Jd;function Xi(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Zd(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Xd]=i,t&&(r(s,t),r(i,t)),i}function ol(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ol(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ep(t,e){return de(t)?at({name:t.name},e,{setup:t}):t}function tp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fs(t,e,n,r,s=!1){if(he(t)){t.forEach((C,k)=>Fs(C,e&&(he(e)?e[k]:e),n,r,s));return}if(Us(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Fs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Xo(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Pe?c.refs={}:c.refs,p=c.setupState,g=Ae(p),_=p===Pe?()=>!1:C=>Re(g,C);if(h!=null&&h!==l&&(He(h)?(f[h]=null,_(h)&&(p[h]=null)):ot(h)&&(h.value=null)),de(l))di(l,c,12,[o,f]);else{const C=He(l),k=ot(l);if(C||k){const O=()=>{if(t.f){const j=C?_(l)?p[l]:f[l]:l.value;s?he(j)&&Wc(j,i):he(j)?j.includes(i)||j.push(i):C?(f[l]=[i],_(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else C?(f[l]=o,_(l)&&(p[l]=o)):k&&(l.value=o,t.k&&(f[t.k]=o))};o?(O.id=-1,ft(O,n)):O()}}}zo().requestIdleCallback;zo().cancelIdleCallback;const Us=t=>!!t.type.__asyncLoader,np=t=>t.type.__isKeepAlive;function Cy(t,e){rp(t,"a",e)}function ky(t,e){rp(t,"da",e)}function rp(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Go(e,r,n),n){let s=n.parent;for(;s&&s.parent;)np(s.parent.vnode)&&Vy(r,e,n,s),s=s.parent}}function Vy(t,e,n,r){const s=Go(e,t,r,!0);sp(()=>{Wc(r[e],s)},n)}function Go(t,e,n=it,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{pn();const c=pi(n),l=Jt(e,n,t,o);return c(),gn(),l});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=it)=>{(!ti||t==="sp")&&Go(t,(...r)=>e(...r),n)},Oy=En("bm"),Dy=En("m"),Ny=En("bu"),xy=En("u"),My=En("bum"),sp=En("um"),Ly=En("sp"),Fy=En("rtg"),Uy=En("rtc");function By(t,e=it){Go("ec",t,e)}const jy="components";function US(t,e){return Hy(jy,t,!0,e)||t}const $y=Symbol.for("v-ndc");function Hy(t,e,n=!0,r=!1){const s=Tt||it;if(s){const i=s.type;{const c=Ov(i,!1);if(c&&(c===e||c===kt(e)||c===qo(kt(e))))return i}const o=Zu(s[t]||i[t],e)||Zu(s.appContext[t],e);return!o&&r?i:o}}function Zu(t,e){return t&&(t[e]||t[kt(e)]||t[qo(kt(e))])}const fc=t=>t?Ap(t)?Xo(t):fc(t.parent):null,Bs=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fc(t.parent),$root:t=>fc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>op(t),$forceUpdate:t=>t.f||(t.f=()=>{il(t.update)}),$nextTick:t=>t.n||(t.n=Kd.bind(t.proxy)),$watch:t=>uv.bind(t)}),Fa=(t,e)=>t!==Pe&&!t.__isScriptSetup&&Re(t,e),qy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Fa(r,e))return o[e]=1,r[e];if(s!==Pe&&Re(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return o[e]=3,i[e];if(n!==Pe&&Re(n,e))return o[e]=4,n[e];dc&&(o[e]=0)}}const f=Bs[e];let p,g;if(f)return e==="$attrs"&&rt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Pe&&Re(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Re(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Fa(s,e)?(s[e]=n,!0):r!==Pe&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Pe&&Re(t,o)||Fa(e,o)||(c=i[0])&&Re(c,o)||Re(r,o)||Re(Bs,o)||Re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function eh(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dc=!0;function zy(t){const e=op(t),n=t.proxy,r=t.ctx;dc=!1,e.beforeCreate&&th(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:C,activated:k,deactivated:O,beforeDestroy:j,beforeUnmount:F,destroyed:$,unmounted:H,render:ce,renderTracked:ae,renderTriggered:w,errorCaptured:y,serverPrefetch:E,expose:A,inheritAttrs:R,components:S,directives:I,filters:lt}=e;if(h&&Ky(h,r,null),o)for(const ye in o){const ge=o[ye];de(ge)&&(r[ye]=ge.bind(n))}if(s){const ye=s.call(n,n);Le(ye)&&(t.data=Ko(ye))}if(dc=!0,i)for(const ye in i){const ge=i[ye],vt=de(ge)?ge.bind(n,n):de(ge.get)?ge.get.bind(n,n):Kt,Vt=!de(ge)&&de(ge.set)?ge.set.bind(n):Kt,At=Dt({get:vt,set:Vt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>At.value,set:Oe=>At.value=Oe})}if(c)for(const ye in c)ip(c[ye],r,n,ye);if(l){const ye=de(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(ge=>{Ji(ge,ye[ge])})}f&&th(f,t,"c");function Fe(ye,ge){he(ge)?ge.forEach(vt=>ye(vt.bind(n))):ge&&ye(ge.bind(n))}if(Fe(Oy,p),Fe(Dy,g),Fe(Ny,_),Fe(xy,C),Fe(Cy,k),Fe(ky,O),Fe(By,y),Fe(Uy,ae),Fe(Fy,w),Fe(My,F),Fe(sp,H),Fe(Ly,E),he(A))if(A.length){const ye=t.exposed||(t.exposed={});A.forEach(ge=>{Object.defineProperty(ye,ge,{get:()=>n[ge],set:vt=>n[ge]=vt})})}else t.exposed||(t.exposed={});ce&&t.render===Kt&&(t.render=ce),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),I&&(t.directives=I),E&&tp(t)}function Ky(t,e,n=Kt){he(t)&&(t=pc(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=Wt(s.from||r,s.default,!0):i=Wt(s.from||r):i=Wt(s),ot(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function th(t,e,n){Jt(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ip(t,e,n,r){let s=r.includes(".")?yp(n,r):()=>n[r];if(He(t)){const i=e[t];de(i)&&Zi(s,i)}else if(de(t))Zi(s,t.bind(n));else if(Le(t))if(he(t))t.forEach(i=>ip(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&Zi(s,i,t)}}function op(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>_o(l,h,o,!0)),_o(l,e,o)),Le(e)&&i.set(e,l),l}function _o(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_o(t,i,n,!0),s&&s.forEach(o=>_o(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Wy[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Wy={data:nh,props:rh,emits:rh,methods:Rs,computed:Rs,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Rs,directives:Rs,watch:Qy,provide:nh,inject:Gy};function nh(t,e){return e?t?function(){return at(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function Gy(t,e){return Rs(pc(t),pc(e))}function pc(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Rs(t,e){return t?at(Object.create(null),t,e):e}function rh(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:at(Object.create(null),eh(t),eh(e??{})):e}function Qy(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=ht(t[r],e[r]);return n}function ap(){return{app:null,config:{isNativeTag:M_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yy=0;function Xy(t,e){return function(r,s=null){de(r)||(r=at({},r)),s!=null&&!Le(s)&&(s=null);const i=ap(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Yy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Nv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&de(f.install)?(o.add(f),f.install(h,...p)):de(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const _=h._ceVNode||Pt(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),l=!0,h._container=f,f.__vue_app__=h,Xo(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Jt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Mr;Mr=h;try{return f()}finally{Mr=p}}};return h}}let Mr=null;function Ji(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function Wt(t,e,n=!1){const r=it||Tt;if(r||Mr){let s=Mr?Mr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}const cp={},lp=()=>Object.create(cp),up=t=>Object.getPrototypeOf(t)===cp;function Jy(t,e,n,r=!1){const s={},i=lp();t.propsDefaults=Object.create(null),hp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Bd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Zy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Qo(t.emitsOptions,g))continue;const _=e[g];if(l)if(Re(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const C=kt(g);s[C]=gc(l,c,C,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{hp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=Yn(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=gc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&ln(t.attrs,"set","")}function hp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ds(l))continue;const h=e[l];let f;s&&Re(s,f=kt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Qo(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ae(n),h=c||Pe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=gc(s,l,p,h[p],t,!Re(h,p))}}return o}function gc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=pi(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Yn(n))&&(r=!0))}return r}const ev=new WeakMap;function fp(t,e,n=!1){const r=n?ev:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const f=p=>{l=!0;const[g,_]=fp(p,e,!0);at(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Le(t)&&r.set(t,Nr),Nr;if(he(i))for(let f=0;f<i.length;f++){const p=kt(i[f]);sh(p)&&(o[p]=Pe)}else if(i)for(const f in i){const p=kt(f);if(sh(p)){const g=i[f],_=o[p]=he(g)||de(g)?{type:g}:at({},g),C=_.type;let k=!1,O=!0;if(he(C))for(let j=0;j<C.length;++j){const F=C[j],$=de(F)&&F.name;if($==="Boolean"){k=!0;break}else $==="String"&&(O=!1)}else k=de(C)&&C.name==="Boolean";_[0]=k,_[1]=O,(k||Re(_,"default"))&&c.push(p)}}const h=[o,c];return Le(t)&&r.set(t,h),h}function sh(t){return t[0]!=="$"&&!Ds(t)}const al=t=>t[0]==="_"||t==="$stable",cl=t=>he(t)?t.map(zt):[zt(t)],tv=(t,e,n)=>{if(e._n)return e;const r=by((...s)=>cl(e(...s)),n);return r._c=!1,r},dp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(al(s))continue;const i=t[s];if(de(i))e[s]=tv(s,i,r);else if(i!=null){const o=cl(i);e[s]=()=>o}}},pp=(t,e)=>{const n=cl(e);t.slots.default=()=>n},gp=(t,e,n)=>{for(const r in e)(n||!al(r))&&(t[r]=e[r])},nv=(t,e,n)=>{const r=t.slots=lp();if(t.vnode.shapeFlag&32){const s=e.__;s&&sc(r,"__",s,!0);const i=e._;i?(gp(r,e,n),n&&sc(r,"_",i,!0)):dp(e,r)}else e&&pp(t,e)},rv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Pe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:gp(s,e,n):(i=!e.$stable,dp(e,s)),o=e}else e&&(pp(t,e),o={default:1});if(i)for(const c in s)!al(c)&&o[c]==null&&delete s[c]},ft=_v;function sv(t){return iv(t)}function iv(t,e){const n=zo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=Kt,insertStaticContent:C}=t,k=(v,T,b,N=null,L=null,x=null,G=void 0,z=null,q=!!T.dynamicChildren)=>{if(v===T)return;v&&!ws(v,T)&&(N=D(v),Oe(v,L,x,!0),v=null),T.patchFlag===-2&&(q=!1,T.dynamicChildren=null);const{type:B,ref:ee,shapeFlag:W}=T;switch(B){case Yo:O(v,T,b,N);break;case jr:j(v,T,b,N);break;case Ba:v==null&&F(T,b,N,G);break;case cn:S(v,T,b,N,L,x,G,z,q);break;default:W&1?ce(v,T,b,N,L,x,G,z,q):W&6?I(v,T,b,N,L,x,G,z,q):(W&64||W&128)&&B.process(v,T,b,N,L,x,G,z,q,J)}ee!=null&&L?Fs(ee,v&&v.ref,x,T||v,!T):ee==null&&v&&v.ref!=null&&Fs(v.ref,null,x,v,!0)},O=(v,T,b,N)=>{if(v==null)r(T.el=c(T.children),b,N);else{const L=T.el=v.el;T.children!==v.children&&h(L,T.children)}},j=(v,T,b,N)=>{v==null?r(T.el=l(T.children||""),b,N):T.el=v.el},F=(v,T,b,N)=>{[v.el,v.anchor]=C(v.children,T,b,N,v.el,v.anchor)},$=({el:v,anchor:T},b,N)=>{let L;for(;v&&v!==T;)L=g(v),r(v,b,N),v=L;r(T,b,N)},H=({el:v,anchor:T})=>{let b;for(;v&&v!==T;)b=g(v),s(v),v=b;s(T)},ce=(v,T,b,N,L,x,G,z,q)=>{T.type==="svg"?G="svg":T.type==="math"&&(G="mathml"),v==null?ae(T,b,N,L,x,G,z,q):E(v,T,L,x,G,z,q)},ae=(v,T,b,N,L,x,G,z)=>{let q,B;const{props:ee,shapeFlag:W,transition:Z,dirs:oe}=v;if(q=v.el=o(v.type,x,ee&&ee.is,ee),W&8?f(q,v.children):W&16&&y(v.children,q,null,N,L,Ua(v,x),G,z),oe&&nr(v,null,N,"created"),w(q,v,v.scopeId,G,N),ee){for(const fe in ee)fe!=="value"&&!Ds(fe)&&i(q,fe,null,ee[fe],x,N);"value"in ee&&i(q,"value",null,ee.value,x),(B=ee.onVnodeBeforeMount)&&$t(B,N,v)}oe&&nr(v,null,N,"beforeMount");const re=ov(L,Z);re&&Z.beforeEnter(q),r(q,T,b),((B=ee&&ee.onVnodeMounted)||re||oe)&&ft(()=>{B&&$t(B,N,v),re&&Z.enter(q),oe&&nr(v,null,N,"mounted")},L)},w=(v,T,b,N,L)=>{if(b&&_(v,b),N)for(let x=0;x<N.length;x++)_(v,N[x]);if(L){let x=L.subTree;if(T===x||Ep(x.type)&&(x.ssContent===T||x.ssFallback===T)){const G=L.vnode;w(v,G,G.scopeId,G.slotScopeIds,L.parent)}}},y=(v,T,b,N,L,x,G,z,q=0)=>{for(let B=q;B<v.length;B++){const ee=v[B]=z?kn(v[B]):zt(v[B]);k(null,ee,T,b,N,L,x,G,z)}},E=(v,T,b,N,L,x,G)=>{const z=T.el=v.el;let{patchFlag:q,dynamicChildren:B,dirs:ee}=T;q|=v.patchFlag&16;const W=v.props||Pe,Z=T.props||Pe;let oe;if(b&&rr(b,!1),(oe=Z.onVnodeBeforeUpdate)&&$t(oe,b,T,v),ee&&nr(T,v,b,"beforeUpdate"),b&&rr(b,!0),(W.innerHTML&&Z.innerHTML==null||W.textContent&&Z.textContent==null)&&f(z,""),B?A(v.dynamicChildren,B,z,b,N,Ua(T,L),x):G||ge(v,T,z,null,b,N,Ua(T,L),x,!1),q>0){if(q&16)R(z,W,Z,b,L);else if(q&2&&W.class!==Z.class&&i(z,"class",null,Z.class,L),q&4&&i(z,"style",W.style,Z.style,L),q&8){const re=T.dynamicProps;for(let fe=0;fe<re.length;fe++){const ve=re[fe],ze=W[ve],Ke=Z[ve];(Ke!==ze||ve==="value")&&i(z,ve,ze,Ke,L,b)}}q&1&&v.children!==T.children&&f(z,T.children)}else!G&&B==null&&R(z,W,Z,b,L);((oe=Z.onVnodeUpdated)||ee)&&ft(()=>{oe&&$t(oe,b,T,v),ee&&nr(T,v,b,"updated")},N)},A=(v,T,b,N,L,x,G)=>{for(let z=0;z<T.length;z++){const q=v[z],B=T[z],ee=q.el&&(q.type===cn||!ws(q,B)||q.shapeFlag&198)?p(q.el):b;k(q,B,ee,null,N,L,x,G,!0)}},R=(v,T,b,N,L)=>{if(T!==b){if(T!==Pe)for(const x in T)!Ds(x)&&!(x in b)&&i(v,x,T[x],null,L,N);for(const x in b){if(Ds(x))continue;const G=b[x],z=T[x];G!==z&&x!=="value"&&i(v,x,z,G,L,N)}"value"in b&&i(v,"value",T.value,b.value,L)}},S=(v,T,b,N,L,x,G,z,q)=>{const B=T.el=v?v.el:c(""),ee=T.anchor=v?v.anchor:c("");let{patchFlag:W,dynamicChildren:Z,slotScopeIds:oe}=T;oe&&(z=z?z.concat(oe):oe),v==null?(r(B,b,N),r(ee,b,N),y(T.children||[],b,ee,L,x,G,z,q)):W>0&&W&64&&Z&&v.dynamicChildren?(A(v.dynamicChildren,Z,b,L,x,G,z),(T.key!=null||L&&T===L.subTree)&&ll(v,T,!0)):ge(v,T,b,ee,L,x,G,z,q)},I=(v,T,b,N,L,x,G,z,q)=>{T.slotScopeIds=z,v==null?T.shapeFlag&512?L.ctx.activate(T,b,N,G,q):lt(T,b,N,L,x,G,q):wt(v,T,q)},lt=(v,T,b,N,L,x,G)=>{const z=v.component=Sv(v,N,L);if(np(v)&&(z.ctx.renderer=J),Pv(z,!1,G),z.asyncDep){if(L&&L.registerDep(z,Fe,G),!v.el){const q=z.subTree=Pt(jr);j(null,q,T,b)}}else Fe(z,v,T,b,L,x,G)},wt=(v,T,b)=>{const N=T.component=v.component;if(gv(v,T,b))if(N.asyncDep&&!N.asyncResolved){ye(N,T,b);return}else N.next=T,N.update();else T.el=v.el,N.vnode=T},Fe=(v,T,b,N,L,x,G)=>{const z=()=>{if(v.isMounted){let{next:W,bu:Z,u:oe,parent:re,vnode:fe}=v;{const Je=mp(v);if(Je){W&&(W.el=fe.el,ye(v,W,G)),Je.asyncDep.then(()=>{v.isUnmounted||z()});return}}let ve=W,ze;rr(v,!1),W?(W.el=fe.el,ye(v,W,G)):W=fe,Z&&Yi(Z),(ze=W.props&&W.props.onVnodeBeforeUpdate)&&$t(ze,re,W,fe),rr(v,!0);const Ke=oh(v),Rt=v.subTree;v.subTree=Ke,k(Rt,Ke,p(Rt.el),D(Rt),v,L,x),W.el=Ke.el,ve===null&&mv(v,Ke.el),oe&&ft(oe,L),(ze=W.props&&W.props.onVnodeUpdated)&&ft(()=>$t(ze,re,W,fe),L)}else{let W;const{el:Z,props:oe}=T,{bm:re,m:fe,parent:ve,root:ze,type:Ke}=v,Rt=Us(T);rr(v,!1),re&&Yi(re),!Rt&&(W=oe&&oe.onVnodeBeforeMount)&&$t(W,ve,T),rr(v,!0);{ze.ce&&ze.ce._def.shadowRoot!==!1&&ze.ce._injectChildStyle(Ke);const Je=v.subTree=oh(v);k(null,Je,b,N,v,L,x),T.el=Je.el}if(fe&&ft(fe,L),!Rt&&(W=oe&&oe.onVnodeMounted)){const Je=T;ft(()=>$t(W,ve,Je),L)}(T.shapeFlag&256||ve&&Us(ve.vnode)&&ve.vnode.shapeFlag&256)&&v.a&&ft(v.a,L),v.isMounted=!0,T=b=N=null}};v.scope.on();const q=v.effect=new bd(z);v.scope.off();const B=v.update=q.run.bind(q),ee=v.job=q.runIfDirty.bind(q);ee.i=v,ee.id=v.uid,q.scheduler=()=>il(ee),rr(v,!0),B()},ye=(v,T,b)=>{T.component=v;const N=v.vnode.props;v.vnode=T,v.next=null,Zy(v,T.props,N,b),rv(v,T.children,b),pn(),Gu(v),gn()},ge=(v,T,b,N,L,x,G,z,q=!1)=>{const B=v&&v.children,ee=v?v.shapeFlag:0,W=T.children,{patchFlag:Z,shapeFlag:oe}=T;if(Z>0){if(Z&128){Vt(B,W,b,N,L,x,G,z,q);return}else if(Z&256){vt(B,W,b,N,L,x,G,z,q);return}}oe&8?(ee&16&&gt(B,L,x),W!==B&&f(b,W)):ee&16?oe&16?Vt(B,W,b,N,L,x,G,z,q):gt(B,L,x,!0):(ee&8&&f(b,""),oe&16&&y(W,b,N,L,x,G,z,q))},vt=(v,T,b,N,L,x,G,z,q)=>{v=v||Nr,T=T||Nr;const B=v.length,ee=T.length,W=Math.min(B,ee);let Z;for(Z=0;Z<W;Z++){const oe=T[Z]=q?kn(T[Z]):zt(T[Z]);k(v[Z],oe,b,null,L,x,G,z,q)}B>ee?gt(v,L,x,!0,!1,W):y(T,b,N,L,x,G,z,q,W)},Vt=(v,T,b,N,L,x,G,z,q)=>{let B=0;const ee=T.length;let W=v.length-1,Z=ee-1;for(;B<=W&&B<=Z;){const oe=v[B],re=T[B]=q?kn(T[B]):zt(T[B]);if(ws(oe,re))k(oe,re,b,null,L,x,G,z,q);else break;B++}for(;B<=W&&B<=Z;){const oe=v[W],re=T[Z]=q?kn(T[Z]):zt(T[Z]);if(ws(oe,re))k(oe,re,b,null,L,x,G,z,q);else break;W--,Z--}if(B>W){if(B<=Z){const oe=Z+1,re=oe<ee?T[oe].el:N;for(;B<=Z;)k(null,T[B]=q?kn(T[B]):zt(T[B]),b,re,L,x,G,z,q),B++}}else if(B>Z)for(;B<=W;)Oe(v[B],L,x,!0),B++;else{const oe=B,re=B,fe=new Map;for(B=re;B<=Z;B++){const We=T[B]=q?kn(T[B]):zt(T[B]);We.key!=null&&fe.set(We.key,B)}let ve,ze=0;const Ke=Z-re+1;let Rt=!1,Je=0;const wn=new Array(Ke);for(B=0;B<Ke;B++)wn[B]=0;for(B=oe;B<=W;B++){const We=v[B];if(ze>=Ke){Oe(We,L,x,!0);continue}let bt;if(We.key!=null)bt=fe.get(We.key);else for(ve=re;ve<=Z;ve++)if(wn[ve-re]===0&&ws(We,T[ve])){bt=ve;break}bt===void 0?Oe(We,L,x,!0):(wn[bt-re]=B+1,bt>=Je?Je=bt:Rt=!0,k(We,T[bt],b,null,L,x,G,z,q),ze++)}const ls=Rt?av(wn):Nr;for(ve=ls.length-1,B=Ke-1;B>=0;B--){const We=re+B,bt=T[We],Ai=We+1<ee?T[We+1].el:N;wn[B]===0?k(null,bt,b,Ai,L,x,G,z,q):Rt&&(ve<0||B!==ls[ve]?At(bt,b,Ai,2):ve--)}}},At=(v,T,b,N,L=null)=>{const{el:x,type:G,transition:z,children:q,shapeFlag:B}=v;if(B&6){At(v.component.subTree,T,b,N);return}if(B&128){v.suspense.move(T,b,N);return}if(B&64){G.move(v,T,b,J);return}if(G===cn){r(x,T,b);for(let W=0;W<q.length;W++)At(q[W],T,b,N);r(v.anchor,T,b);return}if(G===Ba){$(v,T,b);return}if(N!==2&&B&1&&z)if(N===0)z.beforeEnter(x),r(x,T,b),ft(()=>z.enter(x),L);else{const{leave:W,delayLeave:Z,afterLeave:oe}=z,re=()=>{v.ctx.isUnmounted?s(x):r(x,T,b)},fe=()=>{W(x,()=>{re(),oe&&oe()})};Z?Z(x,re,fe):fe()}else r(x,T,b)},Oe=(v,T,b,N=!1,L=!1)=>{const{type:x,props:G,ref:z,children:q,dynamicChildren:B,shapeFlag:ee,patchFlag:W,dirs:Z,cacheIndex:oe}=v;if(W===-2&&(L=!1),z!=null&&(pn(),Fs(z,null,b,v,!0),gn()),oe!=null&&(T.renderCache[oe]=void 0),ee&256){T.ctx.deactivate(v);return}const re=ee&1&&Z,fe=!Us(v);let ve;if(fe&&(ve=G&&G.onVnodeBeforeUnmount)&&$t(ve,T,v),ee&6)jt(v.component,b,N);else{if(ee&128){v.suspense.unmount(b,N);return}re&&nr(v,null,T,"beforeUnmount"),ee&64?v.type.remove(v,T,b,J,N):B&&!B.hasOnce&&(x!==cn||W>0&&W&64)?gt(B,T,b,!1,!0):(x===cn&&W&384||!L&&ee&16)&&gt(q,T,b),N&&De(v)}(fe&&(ve=G&&G.onVnodeUnmounted)||re)&&ft(()=>{ve&&$t(ve,T,v),re&&nr(v,null,T,"unmounted")},b)},De=v=>{const{type:T,el:b,anchor:N,transition:L}=v;if(T===cn){In(b,N);return}if(T===Ba){H(v);return}const x=()=>{s(b),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(v.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:z}=L,q=()=>G(b,x);z?z(v.el,x,q):q()}else x()},In=(v,T)=>{let b;for(;v!==T;)b=g(v),s(v),v=b;s(T)},jt=(v,T,b)=>{const{bum:N,scope:L,job:x,subTree:G,um:z,m:q,a:B,parent:ee,slots:{__:W}}=v;ih(q),ih(B),N&&Yi(N),ee&&he(W)&&W.forEach(Z=>{ee.renderCache[Z]=void 0}),L.stop(),x&&(x.flags|=8,Oe(G,v,T,b)),z&&ft(z,T),ft(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},gt=(v,T,b,N=!1,L=!1,x=0)=>{for(let G=x;G<v.length;G++)Oe(v[G],T,b,N,L)},D=v=>{if(v.shapeFlag&6)return D(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=g(v.anchor||v.el),b=T&&T[Xd];return b?g(b):T};let Y=!1;const Q=(v,T,b)=>{v==null?T._vnode&&Oe(T._vnode,null,null,!0):k(T._vnode||null,v,T,null,null,null,b),T._vnode=v,Y||(Y=!0,Gu(),Gd(),Y=!1)},J={p:k,um:Oe,m:At,r:De,mt:lt,mc:y,pc:ge,pbc:A,n:D,o:t};return{render:Q,hydrate:void 0,createApp:Xy(Q)}}function Ua({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ov(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ll(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=kn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&ll(o,c)),c.type===Yo&&(c.el=o.el),c.type===jr&&!c.el&&(c.el=o.el)}}function av(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mp(e)}function ih(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const cv=Symbol.for("v-scx"),lv=()=>Wt(cv);function Zi(t,e,n){return _p(t,e,n)}function _p(t,e,n=Pe){const{immediate:r,deep:s,flush:i,once:o}=n,c=at({},n),l=e&&r||!e&&i!=="post";let h;if(ti){if(i==="sync"){const _=lv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Kt,_.resume=Kt,_.pause=Kt,_}}const f=it;c.call=(_,C,k)=>Jt(_,f,C,k);let p=!1;i==="post"?c.scheduler=_=>{ft(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,C)=>{C?_():il(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=Iy(t,e,c);return ti&&(h?h.push(g):l&&g()),g}function uv(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?yp(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=pi(this),c=_p(s,i.bind(r),n);return o(),c}function yp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const hv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kt(e)}Modifiers`]||t[`${Yn(e)}Modifiers`];function fv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),o=i&&hv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>He(f)?f.trim():f)),o.number&&(s=n.map(ic)));let c,l=r[c=Na(e)]||r[c=Na(kt(e))];!l&&i&&(l=r[c=Na(Yn(e))]),l&&Jt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Jt(h,t,6,s)}}function vp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=h=>{const f=vp(h,e,!0);f&&(c=!0,at(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Le(t)&&r.set(t,null),null):(he(i)?i.forEach(l=>o[l]=null):at(o,i),Le(t)&&r.set(t,o),o)}function Qo(t,e){return!t||!jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Yn(e))||Re(t,e))}function oh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:C,inheritAttrs:k}=t,O=mo(t);let j,F;try{if(n.shapeFlag&4){const H=s||r,ce=H;j=zt(h.call(ce,H,f,p,_,g,C)),F=c}else{const H=e;j=zt(H.length>1?H(p,{attrs:c,slots:o,emit:l}):H(p,null)),F=e.props?c:dv(c)}}catch(H){js.length=0,Wo(H,t,1),j=Pt(jr)}let $=j;if(F&&k!==!1){const H=Object.keys(F),{shapeFlag:ce}=$;H.length&&ce&7&&(i&&H.some(Kc)&&(F=pv(F,i)),$=$r($,F,!1,!0))}return n.dirs&&($=$r($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&ol($,n.transition),j=$,mo(O),j}const dv=t=>{let e;for(const n in t)(n==="class"||n==="style"||jo(n))&&((e||(e={}))[n]=t[n]);return e},pv=(t,e)=>{const n={};for(const r in t)(!Kc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ah(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!Qo(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?ah(r,o,h):!0:!!o;return!1}function ah(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Qo(n,i))return!0}return!1}function mv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ep=t=>t.__isSuspense;function _v(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):Ry(t)}const cn=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),jr=Symbol.for("v-cmt"),Ba=Symbol.for("v-stc"),js=[];let It=null;function Tp(t=!1){js.push(It=t?null:[])}function yv(){js.pop(),It=js[js.length-1]||null}let ei=1;function ch(t,e=!1){ei+=t,t<0&&It&&e&&(It.hasOnce=!0)}function Ip(t){return t.dynamicChildren=ei>0?It||Nr:null,yv(),ei>0&&It&&It.push(t),t}function vv(t,e,n,r,s,i){return Ip(on(t,e,n,r,s,i,!0))}function Ev(t,e,n,r,s){return Ip(Pt(t,e,n,r,s,!0))}function yo(t){return t?t.__v_isVNode===!0:!1}function ws(t,e){return t.type===e.type&&t.key===e.key}const wp=({key:t})=>t??null,eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||ot(t)||de(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function on(t,e=null,n=null,r=0,s=null,i=t===cn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wp(e),ref:e&&eo(e),scopeId:Yd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return c?(ul(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),ei>0&&!o&&It&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&It.push(l),l}const Pt=Tv;function Tv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$y)&&(t=jr),yo(t)){const c=$r(t,e,!0);return n&&ul(c,n),ei>0&&!i&&It&&(c.shapeFlag&6?It[It.indexOf(t)]=c:It.push(c)),c.patchFlag=-2,c}if(Dv(t)&&(t=t.__vccOpts),e){e=Iv(e);let{class:c,style:l}=e;c&&!He(c)&&(e.class=Yc(c)),Le(l)&&(sl(l)&&!he(l)&&(l=at({},l)),e.style=Qc(l))}const o=He(t)?1:Ep(t)?128:Sy(t)?64:Le(t)?4:de(t)?2:0;return on(t,e,n,r,s,o,i,!0)}function Iv(t){return t?sl(t)||up(t)?at({},t):t:null}function $r(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Av(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&wp(h),ref:e&&e.ref?n&&i?he(i)?i.concat(eo(e)):[i,eo(e)]:eo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==cn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$r(t.ssContent),ssFallback:t.ssFallback&&$r(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ol(f,l.clone(f)),f}function wv(t=" ",e=0){return Pt(Yo,null,t,e)}function zt(t){return t==null||typeof t=="boolean"?Pt(jr):he(t)?Pt(cn,null,t.slice()):yo(t)?kn(t):Pt(Yo,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$r(t)}function ul(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ul(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!up(e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[wv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Av(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Yc([e.class,r.class]));else if(s==="style")e.style=Qc([e.style,r.style]);else if(jo(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $t(t,e,n,r=null){Jt(t,e,7,[n,r])}const Rv=ap();let bv=0;function Sv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Rv,i={uid:bv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fp(r,s),emitsOptions:vp(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fv.bind(null,i),t.ce&&t.ce(i),i}let it=null,vo,mc;{const t=zo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};vo=e("__VUE_INSTANCE_SETTERS__",n=>it=n),mc=e("__VUE_SSR_SETTERS__",n=>ti=n)}const pi=t=>{const e=it;return vo(t),t.scope.on(),()=>{t.scope.off(),vo(e)}},lh=()=>{it&&it.scope.off(),vo(null)};function Ap(t){return t.vnode.shapeFlag&4}let ti=!1;function Pv(t,e=!1,n=!1){e&&mc(e);const{props:r,children:s}=t.vnode,i=Ap(t);Jy(t,r,i,e),nv(t,s,n||e);const o=i?Cv(t,e):void 0;return e&&mc(!1),o}function Cv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qy);const{setup:r}=n;if(r){pn();const s=t.setupContext=r.length>1?Vv(t):null,i=pi(t),o=di(r,t,0,[t.props,s]),c=wd(o);if(gn(),i(),(c||t.sp)&&!Us(t)&&tp(t),c){if(o.then(lh,lh),e)return o.then(l=>{uh(t,l)}).catch(l=>{Wo(l,t,0)});t.asyncDep=o}else uh(t,o)}else Rp(t)}function uh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=qd(e)),Rp(t)}function Rp(t,e,n){const r=t.type;t.render||(t.render=r.render||Kt);{const s=pi(t);pn();try{zy(t)}finally{gn(),s()}}}const kv={get(t,e){return rt(t,"get",""),t[e]}};function Vv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kv),slots:t.slots,emit:t.emit,expose:e}}function Xo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qd($d(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bs)return Bs[n](t)},has(e,n){return n in e||n in Bs}})):t.proxy}function Ov(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function Dv(t){return de(t)&&"__vccOpts"in t}const Dt=(t,e)=>Ey(t,e,ti);function bp(t,e,n){const r=arguments.length;return r===2?Le(e)&&!he(e)?yo(e)?Pt(t,null,[e]):Pt(t,e):Pt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&yo(n)&&(n=[n]),Pt(t,e,n))}const Nv="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _c;const hh=typeof window<"u"&&window.trustedTypes;if(hh)try{_c=hh.createPolicy("vue",{createHTML:t=>t})}catch{}const Sp=_c?t=>_c.createHTML(t):t=>t,xv="http://www.w3.org/2000/svg",Mv="http://www.w3.org/1998/Math/MathML",an=typeof document<"u"?document:null,fh=an&&an.createElement("template"),Lv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?an.createElementNS(xv,t):e==="mathml"?an.createElementNS(Mv,t):n?an.createElement(t,{is:n}):an.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>an.createTextNode(t),createComment:t=>an.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>an.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{fh.innerHTML=Sp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=fh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Fv=Symbol("_vtc");function Uv(t,e,n){const r=t[Fv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const dh=Symbol("_vod"),Bv=Symbol("_vsh"),jv=Symbol(""),$v=/(^|;)\s*display\s*:/;function Hv(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&to(r,c,"")}else for(const o in e)n[o]==null&&to(r,o,"");for(const o in n)o==="display"&&(i=!0),to(r,o,n[o])}else if(s){if(e!==n){const o=r[jv];o&&(n+=";"+o),r.cssText=n,i=$v.test(n)}}else e&&t.removeAttribute("style");dh in t&&(t[dh]=i?r.display:"",t[Bv]&&(r.display="none"))}const ph=/\s*!important$/;function to(t,e,n){if(he(n))n.forEach(r=>to(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=qv(t,e);ph.test(n)?t.setProperty(Yn(r),n.replace(ph,""),"important"):t[r]=n}}const gh=["Webkit","Moz","ms"],ja={};function qv(t,e){const n=ja[e];if(n)return n;let r=kt(e);if(r!=="filter"&&r in t)return ja[e]=r;r=qo(r);for(let s=0;s<gh.length;s++){const i=gh[s]+r;if(i in t)return ja[e]=i}return e}const mh="http://www.w3.org/1999/xlink";function _h(t,e,n,r,s,i=Q_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(mh,e.slice(6,e.length)):t.setAttributeNS(mh,e,n):n==null||i&&!Ad(n)?t.removeAttribute(e):t.setAttribute(e,i?"":es(n)?String(n):n)}function yh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Sp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ad(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Sr(t,e,n,r){t.addEventListener(e,n,r)}function zv(t,e,n,r){t.removeEventListener(e,n,r)}const vh=Symbol("_vei");function Kv(t,e,n,r,s=null){const i=t[vh]||(t[vh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Wv(e);if(r){const h=i[e]=Yv(r,s);Sr(t,c,h,l)}else o&&(zv(t,c,o,l),i[e]=void 0)}}const Eh=/(?:Once|Passive|Capture)$/;function Wv(t){let e;if(Eh.test(t)){e={};let r;for(;r=t.match(Eh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yn(t.slice(2)),e]}let $a=0;const Gv=Promise.resolve(),Qv=()=>$a||(Gv.then(()=>$a=0),$a=Date.now());function Yv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Jt(Xv(r,n.value),e,5,[r])};return n.value=t,n.attached=Qv(),n}function Xv(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Th=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Uv(t,r,o):e==="style"?Hv(t,n,r):jo(e)?Kc(e)||Kv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zv(t,e,r,o))?(yh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_h(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!He(r))?yh(t,kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_h(t,e,r,o))};function Zv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Th(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Th(e)&&He(n)?!1:e in t}const Ih=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>Yi(e,n):e};function eE(t){t.target.composing=!0}function wh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ha=Symbol("_assign"),Ah={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ha]=Ih(s);const i=r||s.props&&s.props.type==="number";Sr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=ic(c)),t[Ha](c)}),n&&Sr(t,"change",()=>{t.value=t.value.trim()}),e||(Sr(t,"compositionstart",eE),Sr(t,"compositionend",wh),Sr(t,"change",wh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ha]=Ih(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?ic(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},tE=["ctrl","shift","alt","meta"],nE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tE.some(n=>t[`${n}Key`]&&!e.includes(n))},BS=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=nE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},rE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Rh=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Yn(s.key);if(e.some(o=>o===i||rE[o]===i))return t(s)})},sE=at({patchProp:Jv},Lv);let bh;function iE(){return bh||(bh=sv(sE))}const oE=(...t)=>{const e=iE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=cE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,aE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function aE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function cE(t){return He(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const lE=Symbol();var Sh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Sh||(Sh={}));function uE(){const t=Y_(!0),e=t.run(()=>fo({}));let n=[],r=[];const s=$d({install(i){s._a=i,i.provide(lE,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Pr=typeof document<"u";function Pp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Pp(t.default)}const we=Object.assign;function qa(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ut(s)?s.map(t):t(s)}return n}const $s=()=>{},Ut=Array.isArray,Cp=/#/g,fE=/&/g,dE=/\//g,pE=/=/g,gE=/\?/g,kp=/\+/g,mE=/%5B/g,_E=/%5D/g,Vp=/%5E/g,yE=/%60/g,Op=/%7B/g,vE=/%7C/g,Dp=/%7D/g,EE=/%20/g;function hl(t){return encodeURI(""+t).replace(vE,"|").replace(mE,"[").replace(_E,"]")}function TE(t){return hl(t).replace(Op,"{").replace(Dp,"}").replace(Vp,"^")}function yc(t){return hl(t).replace(kp,"%2B").replace(EE,"+").replace(Cp,"%23").replace(fE,"%26").replace(yE,"`").replace(Op,"{").replace(Dp,"}").replace(Vp,"^")}function IE(t){return yc(t).replace(pE,"%3D")}function wE(t){return hl(t).replace(Cp,"%23").replace(gE,"%3F")}function AE(t){return t==null?"":wE(t).replace(dE,"%2F")}function ni(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const RE=/\/$/,bE=t=>t.replace(RE,"");function za(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=kE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ni(o)}}function SE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ph(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function PE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Hr(e.matched[r],n.matched[s])&&Np(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Np(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!CE(t[n],e[n]))return!1;return!0}function CE(t,e){return Ut(t)?Ch(t,e):Ut(e)?Ch(e,t):t===e}function Ch(t,e){return Ut(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function kE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ri;(function(t){t.pop="pop",t.push="push"})(ri||(ri={}));var Hs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hs||(Hs={}));function VE(t){if(!t)if(Pr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bE(t)}const OE=/^[^#]+#/;function DE(t,e){return t.replace(OE,"#")+e}function NE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Jo=()=>({left:window.scrollX,top:window.scrollY});function xE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=NE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function kh(t,e){return(history.state?history.state.position-e:-1)+t}const vc=new Map;function ME(t,e){vc.set(t,e)}function LE(t){const e=vc.get(t);return vc.delete(t),e}let FE=()=>location.protocol+"//"+location.host;function xp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Ph(l,"")}return Ph(n,t)+r+s}function UE(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=xp(t,location),C=n.value,k=e.value;let O=0;if(g){if(n.value=_,e.value=g,o&&o===C){o=null;return}O=k?g.position-k.position:0}else r(_);s.forEach(j=>{j(n.value,C,{delta:O,type:ri.pop,direction:O?O>0?Hs.forward:Hs.back:Hs.unknown})})};function l(){o=n.value}function h(g){s.push(g);const _=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(we({},g.state,{scroll:Jo()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Vh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Jo():null}}function BE(t){const{history:e,location:n}=window,r={value:xp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:FE()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(l,h){const f=we({},e.state,Vh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=we({},s.value,e.state,{forward:l,scroll:Jo()});i(f.current,f,!0);const p=we({},Vh(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function jE(t){t=VE(t);const e=BE(t),n=UE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:DE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function $E(t){return typeof t=="string"||t&&typeof t=="object"}function Mp(t){return typeof t=="string"||typeof t=="symbol"}const Lp=Symbol("");var Oh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Oh||(Oh={}));function qr(t,e){return we(new Error,{type:t,[Lp]:!0},e)}function sn(t,e){return t instanceof Error&&Lp in t&&(e==null||!!(t.type&e))}const Dh="[^/]+?",HE={sensitive:!1,strict:!1,start:!0,end:!0},qE=/[.+*?^${}()[\]/\\]/g;function zE(t,e){const n=we({},HE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(qE,"\\$&"),_+=40;else if(g.type===1){const{value:C,repeatable:k,optional:O,regexp:j}=g;i.push({name:C,repeatable:k,optional:O});const F=j||Dh;if(F!==Dh){_+=10;try{new RegExp(`(${F})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${C}" (${F}): `+H.message)}}let $=k?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||($=O&&h.length<2?`(?:/${$})`:"/"+$),O&&($+="?"),s+=$,_+=20,O&&(_+=-8),k&&(_+=-20),F===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",C=i[g-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:k,optional:O}=_,j=C in h?h[C]:"";if(Ut(j)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const F=Ut(j)?j.join("/"):j;if(!F)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=F}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function KE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Fp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=KE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Nh(r))return 1;if(Nh(s))return-1}return s.length-r.length}function Nh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const WE={type:0,value:""},GE=/[a-zA-Z0-9_]/;function QE(t){if(!t)return[[]];if(t==="/")return[[WE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:GE.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function YE(t,e,n){const r=zE(QE(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function XE(t,e){const n=[],r=new Map;e=Fh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const C=!_,k=Mh(p);k.aliasOf=_&&_.record;const O=Fh(e,p),j=[k];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of H)j.push(Mh(we({},k,{components:_?_.record.components:k.components,path:ce,aliasOf:_?_.record:k})))}let F,$;for(const H of j){const{path:ce}=H;if(g&&ce[0]!=="/"){const ae=g.record.path,w=ae[ae.length-1]==="/"?"":"/";H.path=g.record.path+(ce&&w+ce)}if(F=YE(H,g,O),_?_.alias.push(F):($=$||F,$!==F&&$.alias.push(F),C&&p.name&&!Lh(F)&&o(p.name)),Up(F)&&l(F),k.children){const ae=k.children;for(let w=0;w<ae.length;w++)i(ae[w],F,_&&_.children[w])}_=_||F}return $?()=>{o($)}:$s}function o(p){if(Mp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=eT(p,n);n.splice(g,0,p),p.record.name&&!Lh(p)&&r.set(p.record.name,p)}function h(p,g){let _,C={},k,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw qr(1,{location:p});O=_.record.name,C=we(xh(g.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&xh(p.params,_.keys.map($=>$.name))),k=_.stringify(C)}else if(p.path!=null)k=p.path,_=n.find($=>$.re.test(k)),_&&(C=_.parse(k),O=_.record.name);else{if(_=g.name?r.get(g.name):n.find($=>$.re.test(g.path)),!_)throw qr(1,{location:p,currentLocation:g});O=_.record.name,C=we({},g.params,p.params),k=_.stringify(C)}const j=[];let F=_;for(;F;)j.unshift(F.record),F=F.parent;return{name:O,path:k,params:C,matched:j,meta:ZE(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function xh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Mh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:JE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function JE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Lh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ZE(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Fh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function eT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Fp(t,e[i])<0?r=i:n=i+1}const s=tT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function tT(t){let e=t;for(;e=e.parent;)if(Up(e)&&Fp(t,e)===0)return e}function Up({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function nT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(kp," "),o=i.indexOf("="),c=ni(o<0?i:i.slice(0,o)),l=o<0?null:ni(i.slice(o+1));if(c in e){let h=e[c];Ut(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Uh(t){let e="";for(let n in t){const r=t[n];if(n=IE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ut(r)?r.map(i=>i&&yc(i)):[r&&yc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function rT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ut(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const sT=Symbol(""),Bh=Symbol(""),Zo=Symbol(""),Bp=Symbol(""),Ec=Symbol("");function As(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(qr(4,{from:n,to:e})):g instanceof Error?l(g):$E(g)?l(qr(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function Ka(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Pp(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Vn(f,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=hE(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Vn(_,n,r,o,c,s)()}))}}return i}function jh(t){const e=Wt(Zo),n=Wt(Bp),r=Dt(()=>{const l=cr(t.to);return e.resolve(l)}),s=Dt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(Hr.bind(null,f));if(g>-1)return g;const _=$h(l[h-2]);return h>1&&$h(f)===_&&p[p.length-1].path!==_?p.findIndex(Hr.bind(null,l[h-2])):g}),i=Dt(()=>s.value>-1&&lT(n.params,r.value.params)),o=Dt(()=>s.value>-1&&s.value===n.matched.length-1&&Np(n.params,r.value.params));function c(l={}){if(cT(l)){const h=e[cr(t.replace)?"replace":"push"](cr(t.to)).catch($s);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Dt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function iT(t){return t.length===1?t[0]:t}const oT=ep({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:jh,setup(t,{slots:e}){const n=Ko(jh(t)),{options:r}=Wt(Zo),s=Dt(()=>({[Hh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&iT(e.default(n));return t.custom?i:bp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),aT=oT;function cT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ut(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function $h(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hh=(t,e,n)=>t??e??n,uT=ep({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Wt(Ec),s=Dt(()=>t.route||r.value),i=Wt(Bh,0),o=Dt(()=>{let h=cr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Dt(()=>s.value.matched[o.value]);Ji(Bh,Dt(()=>o.value+1)),Ji(sT,c),Ji(Ec,s);const l=fo();return Zi(()=>[l.value,c.value,t.name],([h,f,p],[g,_,C])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!Hr(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return qh(n.default,{Component:g,route:h});const _=p.props[f],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,O=bp(g,we({},C,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return qh(n.default,{Component:O,route:h})||O}}});function qh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jp=uT;function hT(t){const e=XE(t.routes,t),n=t.parseQuery||nT,r=t.stringifyQuery||Uh,s=t.history,i=As(),o=As(),c=As(),l=my(Sn);let h=Sn;Pr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=qa.bind(null,D=>""+D),p=qa.bind(null,AE),g=qa.bind(null,ni);function _(D,Y){let Q,J;return Mp(D)?(Q=e.getRecordMatcher(D),J=Y):J=D,e.addRoute(J,Q)}function C(D){const Y=e.getRecordMatcher(D);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(D=>D.record)}function O(D){return!!e.getRecordMatcher(D)}function j(D,Y){if(Y=we({},Y||l.value),typeof D=="string"){const b=za(n,D,Y.path),N=e.resolve({path:b.path},Y),L=s.createHref(b.fullPath);return we(b,N,{params:g(N.params),hash:ni(b.hash),redirectedFrom:void 0,href:L})}let Q;if(D.path!=null)Q=we({},D,{path:za(n,D.path,Y.path).path});else{const b=we({},D.params);for(const N in b)b[N]==null&&delete b[N];Q=we({},D,{params:p(b)}),Y.params=p(Y.params)}const J=e.resolve(Q,Y),Te=D.hash||"";J.params=f(g(J.params));const v=SE(r,we({},D,{hash:TE(Te),path:J.path})),T=s.createHref(v);return we({fullPath:v,hash:Te,query:r===Uh?rT(D.query):D.query||{}},J,{redirectedFrom:void 0,href:T})}function F(D){return typeof D=="string"?za(n,D,l.value.path):we({},D)}function $(D,Y){if(h!==D)return qr(8,{from:Y,to:D})}function H(D){return w(D)}function ce(D){return H(we(F(D),{replace:!0}))}function ae(D){const Y=D.matched[D.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let J=typeof Q=="function"?Q(D):Q;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=F(J):{path:J},J.params={}),we({query:D.query,hash:D.hash,params:J.path!=null?{}:D.params},J)}}function w(D,Y){const Q=h=j(D),J=l.value,Te=D.state,v=D.force,T=D.replace===!0,b=ae(Q);if(b)return w(we(F(b),{state:typeof b=="object"?we({},Te,b.state):Te,force:v,replace:T}),Y||Q);const N=Q;N.redirectedFrom=Y;let L;return!v&&PE(r,J,Q)&&(L=qr(16,{to:N,from:J}),At(J,J,!0,!1)),(L?Promise.resolve(L):A(N,J)).catch(x=>sn(x)?sn(x,2)?x:Vt(x):ge(x,N,J)).then(x=>{if(x){if(sn(x,2))return w(we({replace:T},F(x.to),{state:typeof x.to=="object"?we({},Te,x.to.state):Te,force:v}),Y||N)}else x=S(N,J,!0,T,Te);return R(N,J,x),x})}function y(D,Y){const Q=$(D,Y);return Q?Promise.reject(Q):Promise.resolve()}function E(D){const Y=In.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(D):D()}function A(D,Y){let Q;const[J,Te,v]=fT(D,Y);Q=Ka(J.reverse(),"beforeRouteLeave",D,Y);for(const b of J)b.leaveGuards.forEach(N=>{Q.push(Vn(N,D,Y))});const T=y.bind(null,D,Y);return Q.push(T),gt(Q).then(()=>{Q=[];for(const b of i.list())Q.push(Vn(b,D,Y));return Q.push(T),gt(Q)}).then(()=>{Q=Ka(Te,"beforeRouteUpdate",D,Y);for(const b of Te)b.updateGuards.forEach(N=>{Q.push(Vn(N,D,Y))});return Q.push(T),gt(Q)}).then(()=>{Q=[];for(const b of v)if(b.beforeEnter)if(Ut(b.beforeEnter))for(const N of b.beforeEnter)Q.push(Vn(N,D,Y));else Q.push(Vn(b.beforeEnter,D,Y));return Q.push(T),gt(Q)}).then(()=>(D.matched.forEach(b=>b.enterCallbacks={}),Q=Ka(v,"beforeRouteEnter",D,Y,E),Q.push(T),gt(Q))).then(()=>{Q=[];for(const b of o.list())Q.push(Vn(b,D,Y));return Q.push(T),gt(Q)}).catch(b=>sn(b,8)?b:Promise.reject(b))}function R(D,Y,Q){c.list().forEach(J=>E(()=>J(D,Y,Q)))}function S(D,Y,Q,J,Te){const v=$(D,Y);if(v)return v;const T=Y===Sn,b=Pr?history.state:{};Q&&(J||T?s.replace(D.fullPath,we({scroll:T&&b&&b.scroll},Te)):s.push(D.fullPath,Te)),l.value=D,At(D,Y,Q,T),Vt()}let I;function lt(){I||(I=s.listen((D,Y,Q)=>{if(!jt.listening)return;const J=j(D),Te=ae(J);if(Te){w(we(Te,{replace:!0,force:!0}),J).catch($s);return}h=J;const v=l.value;Pr&&ME(kh(v.fullPath,Q.delta),Jo()),A(J,v).catch(T=>sn(T,12)?T:sn(T,2)?(w(we(F(T.to),{force:!0}),J).then(b=>{sn(b,20)&&!Q.delta&&Q.type===ri.pop&&s.go(-1,!1)}).catch($s),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ge(T,J,v))).then(T=>{T=T||S(J,v,!1),T&&(Q.delta&&!sn(T,8)?s.go(-Q.delta,!1):Q.type===ri.pop&&sn(T,20)&&s.go(-1,!1)),R(J,v,T)}).catch($s)}))}let wt=As(),Fe=As(),ye;function ge(D,Y,Q){Vt(D);const J=Fe.list();return J.length?J.forEach(Te=>Te(D,Y,Q)):console.error(D),Promise.reject(D)}function vt(){return ye&&l.value!==Sn?Promise.resolve():new Promise((D,Y)=>{wt.add([D,Y])})}function Vt(D){return ye||(ye=!D,lt(),wt.list().forEach(([Y,Q])=>D?Q(D):Y()),wt.reset()),D}function At(D,Y,Q,J){const{scrollBehavior:Te}=t;if(!Pr||!Te)return Promise.resolve();const v=!Q&&LE(kh(D.fullPath,0))||(J||!Q)&&history.state&&history.state.scroll||null;return Kd().then(()=>Te(D,Y,v)).then(T=>T&&xE(T)).catch(T=>ge(T,D,Y))}const Oe=D=>s.go(D);let De;const In=new Set,jt={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:j,options:t,push:H,replace:ce,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Fe.add,isReady:vt,install(D){const Y=this;D.component("RouterLink",aT),D.component("RouterView",jp),D.config.globalProperties.$router=Y,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>cr(l)}),Pr&&!De&&l.value===Sn&&(De=!0,H(s.location).catch(Te=>{}));const Q={};for(const Te in Sn)Object.defineProperty(Q,Te,{get:()=>l.value[Te],enumerable:!0});D.provide(Zo,Y),D.provide(Bp,Bd(Q)),D.provide(Ec,l);const J=D.unmount;In.add(D),D.unmount=function(){In.delete(D),In.size<1&&(h=Sn,I&&I(),I=null,l.value=Sn,De=!1,ye=!1),J()}}};function gt(D){return D.reduce((Y,Q)=>Y.then(()=>E(Q)),Promise.resolve())}return jt}function fT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>Hr(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>Hr(h,l))||s.push(l))}return[n,r,s]}function dT(){return Wt(Zo)}const pT={__name:"App",setup(t){return(e,n)=>(Tp(),Ev(cr(jp)))}},gT="modulepreload",mT=function(t){return"/plata-ipst/"+t},zh={},_T=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let l=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(n.map(h=>{if(h=mT(h),h in zh)return;zh[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":gT,f||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((_,C)=>{g.addEventListener("load",_),g.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},yT="/plata-ipst/assets/fondo01-Rp0Idm-h.jpg",vT=()=>{};var Kh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ET=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($p(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ET(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new TT;const g=i<<2|c>>4;if(r.push(g),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IT=function(t){const e=$p(t);return Hp.encodeByteArray(e,!0)},Eo=function(t){return IT(t).replace(/\./g,"")},qp=function(t){try{return Hp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=()=>wT().__FIREBASE_DEFAULTS__,RT=()=>{if(typeof process>"u"||typeof Kh>"u")return;const t=Kh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qp(t[1]);return e&&JSON.parse(e)},ea=()=>{try{return vT()||AT()||RT()||bT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zp=t=>{var e,n;return(n=(e=ea())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ST=t=>{const e=zp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kp=()=>{var t;return(t=ea())===null||t===void 0?void 0:t.config},Wp=t=>{var e;return(e=ea())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){return t.endsWith(".cloudworkstations.dev")}async function Gp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Eo(JSON.stringify(n)),Eo(JSON.stringify(o)),""].join(".")}const qs={};function kT(){const t={prod:[],emulator:[]};for(const e of Object.keys(qs))qs[e]?t.emulator.push(e):t.prod.push(e);return t}function VT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Wh=!1;function Qp(t,e){if(typeof window>"u"||typeof document>"u"||!ts(window.location.host)||qs[t]===e||qs[t]||Wh)return;qs[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=kT().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Wh=!0,o()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=VT(r),_=n("text"),C=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),O=document.getElementById(k)||document.createElement("a"),j=n("preprendIcon"),F=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const $=g.element;c($),f(O,k);const H=h();l(F,j),$.append(F,C,O,H),document.body.appendChild($)}i?(C.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function DT(){var t;const e=(t=ea())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LT(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FT(){return!DT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UT(){try{return typeof indexedDB=="object"}catch{return!1}}function BT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jT,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$T(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Tn(s,c,r)}}function $T(t,e){return t.replace(HT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const HT=/\{\$([^}]+)}/g;function qT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gh(i)&&Gh(o)){if(!hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zT(t,e){const n=new KT(t,e);return n.subscribe.bind(n)}class KT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wa),s.error===void 0&&(s.error=Wa),s.complete===void 0&&(s.complete=Wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YT(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QT(t){return t===ir?void 0:t}function YT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const JT={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},ZT=me.INFO,eI={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},tI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=eI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fl{constructor(e){this.name=e,this._logLevel=ZT,this._logHandler=tI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const nI=(t,e)=>e.some(n=>t instanceof n);let Qh,Yh;function rI(){return Qh||(Qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sI(){return Yh||(Yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yp=new WeakMap,Tc=new WeakMap,Xp=new WeakMap,Ga=new WeakMap,dl=new WeakMap;function iI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yp.set(n,t)}).catch(()=>{}),dl.set(e,t),e}function oI(t){if(Tc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Tc.set(t,e)}let Ic={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aI(t){Ic=t(Ic)}function cI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qa(this),e,...n);return Xp.set(r,e.sort?e.sort():[e]),Fn(r)}:sI().includes(t)?function(...e){return t.apply(Qa(this),e),Fn(Yp.get(this))}:function(...e){return Fn(t.apply(Qa(this),e))}}function lI(t){return typeof t=="function"?cI(t):(t instanceof IDBTransaction&&oI(t),nI(t,rI())?new Proxy(t,Ic):t)}function Fn(t){if(t instanceof IDBRequest)return iI(t);if(Ga.has(t))return Ga.get(t);const e=lI(t);return e!==t&&(Ga.set(t,e),dl.set(e,t)),e}const Qa=t=>dl.get(t);function uI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Fn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fn(o.result),l.oldVersion,l.newVersion,Fn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const hI=["get","getKey","getAll","getAllKeys","count"],fI=["put","add","delete","clear"],Ya=new Map;function Xh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ya.get(e))return Ya.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Ya.set(e,i),i}aI(t=>({...t,get:(e,n,r)=>Xh(e,n)||t.get(e,n,r),has:(e,n)=>!!Xh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pI(t){const e=t.getComponent();return e?.type==="VERSION"}const wc="@firebase/app",Jh="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new fl("@firebase/app"),gI="@firebase/app-compat",mI="@firebase/analytics-compat",_I="@firebase/analytics",yI="@firebase/app-check-compat",vI="@firebase/app-check",EI="@firebase/auth",TI="@firebase/auth-compat",II="@firebase/database",wI="@firebase/data-connect",AI="@firebase/database-compat",RI="@firebase/functions",bI="@firebase/functions-compat",SI="@firebase/installations",PI="@firebase/installations-compat",CI="@firebase/messaging",kI="@firebase/messaging-compat",VI="@firebase/performance",OI="@firebase/performance-compat",DI="@firebase/remote-config",NI="@firebase/remote-config-compat",xI="@firebase/storage",MI="@firebase/storage-compat",LI="@firebase/firestore",FI="@firebase/ai",UI="@firebase/firestore-compat",BI="firebase",jI="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="[DEFAULT]",$I={[wc]:"fire-core",[gI]:"fire-core-compat",[_I]:"fire-analytics",[mI]:"fire-analytics-compat",[vI]:"fire-app-check",[yI]:"fire-app-check-compat",[EI]:"fire-auth",[TI]:"fire-auth-compat",[II]:"fire-rtdb",[wI]:"fire-data-connect",[AI]:"fire-rtdb-compat",[RI]:"fire-fn",[bI]:"fire-fn-compat",[SI]:"fire-iid",[PI]:"fire-iid-compat",[CI]:"fire-fcm",[kI]:"fire-fcm-compat",[VI]:"fire-perf",[OI]:"fire-perf-compat",[DI]:"fire-rc",[NI]:"fire-rc-compat",[xI]:"fire-gcs",[MI]:"fire-gcs-compat",[LI]:"fire-fst",[UI]:"fire-fst-compat",[FI]:"fire-vertex","fire-js":"fire-js",[BI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map,HI=new Map,Rc=new Map;function Zh(t,e){try{t.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zr(t){const e=t.name;if(Rc.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of To.values())Zh(n,t);for(const n of HI.values())Zh(n,t);return!0}function pl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new gi("app","Firebase",qI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=jI;function Jp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ac,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(n||(n=Kp()),!n)throw Un.create("no-options");const i=To.get(s);if(i){if(hr(n,i.options)&&hr(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const o=new XT(s);for(const l of Rc.values())o.addComponent(l);const c=new zI(n,r,o);return To.set(s,c),c}function Zp(t=Ac){const e=To.get(t);if(!e&&t===Ac&&Kp())return Jp();if(!e)throw Un.create("no-app",{appName:t});return e}function Bn(t,e,n){var r;let s=(r=$I[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(c.join(" "));return}zr(new fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="firebase-heartbeat-database",WI=1,si="firebase-heartbeat-store";let Xa=null;function eg(){return Xa||(Xa=uI(KI,WI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(si)}catch(n){console.warn(n)}}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),Xa}async function GI(t){try{const n=(await eg()).transaction(si),r=await n.objectStore(si).get(tg(t));return await n.done,r}catch(e){if(e instanceof Tn)mn.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e?.message});mn.warn(n.message)}}}async function ef(t,e){try{const r=(await eg()).transaction(si,"readwrite");await r.objectStore(si).put(e,tg(t)),await r.done}catch(n){if(n instanceof Tn)mn.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n?.message});mn.warn(r.message)}}}function tg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=1024,YI=30;class XI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>YI){const o=ew(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tf(),{heartbeatsToSend:r,unsentEntries:s}=JI(this._heartbeatsCache.heartbeats),i=Eo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return mn.warn(n),""}}}function tf(){return new Date().toISOString().substring(0,10)}function JI(t,e=QI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),nf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),nf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UT()?BT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ef(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ef(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nf(t){return Eo(JSON.stringify({version:2,heartbeats:t})).length}function ew(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){zr(new fr("platform-logger",e=>new dI(e),"PRIVATE")),zr(new fr("heartbeat",e=>new XI(e),"PRIVATE")),Bn(wc,Jh,t),Bn(wc,Jh,"esm2017"),Bn("fire-js","")}tw("");var nw="firebase",rw="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn(nw,rw,"app");function gl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ng(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sw=ng,rg=new gi("auth","Firebase",ng());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new fl("@firebase/auth");function iw(t,...e){Io.logLevel<=me.WARN&&Io.warn(`Auth (${ns}): ${t}`,...e)}function no(t,...e){Io.logLevel<=me.ERROR&&Io.error(`Auth (${ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw ml(t,...e)}function Gt(t,...e){return ml(t,...e)}function sg(t,e,n){const r=Object.assign(Object.assign({},sw()),{[e]:n});return new gi("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return sg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ml(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rg.create(t,...e)}function se(t,e,...n){if(!t)throw ml(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw no(e),new Error(e)}function _n(t,e){t||hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ow(){return rf()==="http:"||rf()==="https:"}function rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ow()||xT()||"connection"in navigator)?navigator.onLine:!0}function cw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=OT()||MT()}get(){return aw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hw=new _i(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,s={}){return og(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=mi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return NT()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ts(t.emulatorConfig.host)&&(h.credentials="include"),ig.fetch()(await ag(t,t.config.apiHost,n,c),h)})}async function og(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lw),e);try{const s=new dw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw qi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw qi(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw sg(t,f,h);Bt(t,f)}}catch(s){if(s instanceof Tn)throw s;Bt(t,"network-request-failed",{message:String(s)})}}async function ta(t,e,n,r,s={}){const i=await Xn(t,e,n,r,s);return"mfaPendingCredential"in i&&Bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function ag(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?_l(t.config,s):`${t.config.apiScheme}://${s}`;return uw.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function fw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),hw.get())})}}function qi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Gt(t,e,r);return s.customData._tokenResponse=n,s}function sf(t){return t!==void 0&&t.enterprise!==void 0}class pw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gw(t,e){return Xn(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function wo(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _w(t,e=!1){const n=yt(t),r=await n.getIdToken(e),s=yl(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:zs(Ja(s.auth_time)),issuedAtTime:zs(Ja(s.iat)),expirationTime:zs(Ja(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ja(t){return Number(t)*1e3}function yl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return no("JWT malformed, contained fewer than 3 sections"),null;try{const s=qp(n);return s?JSON.parse(s):(no("Failed to decode base64 JWT payload"),null)}catch(s){return no("Caught error parsing JWT payload as JSON",s?.toString()),null}}function of(t){const e=yl(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&yw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ii(t,wo(n,{idToken:r}));se(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cg(i.providerUserInfo):[],c=Tw(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!c?.length,f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Sc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Ew(t){const e=yt(t);await Ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cg(t){return t.map(e=>{var{providerId:n}=e,r=gl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(t,e){const n=await og(t,{},async()=>{const r=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await ag(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&ts(t.emulatorConfig.host)&&(l.credentials="include"),ig.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ww(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):of(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=of(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Iw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Lr;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Sc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _w(this,e)}reload(){return Ew(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await ii(this,mw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,j=(h=n.createdAt)!==null&&h!==void 0?h:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:H,isAnonymous:ce,providerData:ae,stsTokenManager:w}=n;se($&&w,e,"internal-error");const y=Lr.fromJSON(this.name,w);se(typeof $=="string",e,"internal-error"),Pn(p,e.name),Pn(g,e.name),se(typeof H=="boolean",e,"internal-error"),se(typeof ce=="boolean",e,"internal-error"),Pn(_,e.name),Pn(C,e.name),Pn(k,e.name),Pn(O,e.name),Pn(j,e.name),Pn(F,e.name);const E=new xt({uid:$,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:ce,photoURL:C,phoneNumber:_,tenantId:k,stsTokenManager:y,createdAt:j,lastLoginAt:F});return ae&&Array.isArray(ae)&&(E.providerData=ae.map(A=>Object.assign({},A))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Lr;s.updateFromServerResponse(n);const i=new xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ao(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new Lr;c.updateFromIdToken(r);const l=new xt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Sc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new Map;function fn(t){_n(t instanceof Function,"Expected a class definition");let e=af.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,af.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lg.type="NONE";const cf=lg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t,e,n){return`firebase:${t}:${e}:${n}`}class Fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ro(this.userKey,s.apiKey,i),this.fullPersistenceKey=ro("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wo(this.auth,{idToken:e}).catch(()=>{});return n?xt._fromGetAccountInfoResponse(this.auth,n,e):null}return xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fr(fn(cf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||fn(cf);const o=ro(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await wo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await xt._fromGetAccountInfoResponse(e,g,f)}else p=xt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Fr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Fr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ug(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gg(e))return"Blackberry";if(mg(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||fg(e))&&!e.includes("edge/"))return"Chrome";if(pg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function ug(t=ct()){return/firefox\//i.test(t)}function hg(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fg(t=ct()){return/crios\//i.test(t)}function dg(t=ct()){return/iemobile/i.test(t)}function pg(t=ct()){return/android/i.test(t)}function gg(t=ct()){return/blackberry/i.test(t)}function mg(t=ct()){return/webos/i.test(t)}function vl(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Aw(t=ct()){var e;return vl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rw(){return LT()&&document.documentMode===10}function _g(t=ct()){return vl(t)||pg(t)||mg(t)||gg(t)||/windows phone/i.test(t)||dg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t,e=[]){let n;switch(t){case"Browser":n=lf(ct());break;case"Worker":n=`${lf(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=6;class Cw{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Pw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uf(this),this.idTokenSubscription=new uf(this),this.beforeStateQueue=new bw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wo(this,{idToken:e}),r=await xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ao(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(jn(this));const n=e?yt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sw(this),n=new Cw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ww(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&iw(`Error while retrieving App Check token: ${n.error}`),n?.token}}function rs(t){return yt(t)}class uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=zT(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vw(t){na=t}function vg(t){return na.loadJS(t)}function Ow(){return na.recaptchaEnterpriseScript}function Dw(){return na.gapiScript}function Nw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class xw{constructor(){this.enterprise=new Mw}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Mw{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Lw="recaptcha-enterprise",Eg="NO_RECAPTCHA";class Fw{constructor(e){this.type=Lw,this.auth=rs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{gw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new pw(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;sf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Eg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&sf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ow();l.length!==0&&(l+=c),vg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function hf(t,e,n,r=!1,s=!1){const i=new Fw(t);let o;if(s)o=Eg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ff(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await hf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await hf(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t,e){const n=pl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(hr(i,e??{}))return s;Bt(s,"already-initialized")}return n.initialize({options:e})}function Bw(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(fn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function jw(t,e,n){const r=rs(t);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Tg(e),{host:o,port:c}=$w(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(hr(h,r.config.emulator)&&hr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ts(o)?(Gp(`${i}//${o}${l}`),Qp("Auth",!0)):Hw()}function Tg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $w(t){const e=Tg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:df(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:df(o)}}}function df(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Hw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}async function qw(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(t,e){return ta(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(t,e){return ta(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function Ww(t,e){return ta(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends El{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new oi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ff(e,n,"signInWithPassword",zw);case"emailLink":return Kw(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ff(e,r,"signUpPassword",qw);case"emailLink":return Ww(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(t,e){return ta(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="http://localhost";class dr extends El{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new dr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ur(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ur(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ur(e,n)}buildRequest(){const e={requestUri:Gw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yw(t){const e=bs(Ss(t)).link,n=e?bs(Ss(e)).deep_link_id:null,r=bs(Ss(t)).deep_link_id;return(r?bs(Ss(r)).link:null)||r||n||e||t}class Tl{constructor(e){var n,r,s,i,o,c;const l=bs(Ss(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Qw((s=l.mode)!==null&&s!==void 0?s:null);se(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Yw(e);try{return new Tl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,n){return oi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tl.parseLink(n);return se(r,"argument-error"),oi._fromEmailAndCode(e,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Ig{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends yi{constructor(){super("facebook.com")}static credential(e){return dr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends yi{constructor(){super("github.com")}static credential(e){return dr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends yi{constructor(){super("twitter.com")}static credential(e,n){return dr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await xt._fromIdTokenResponse(e,r,s),o=pf(r);return new Kr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=pf(r);return new Kr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function pf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Tn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ro.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ro(e,n,r,s)}}function wg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ro._fromErrorAndOperation(t,i,e,r):i})}async function Xw(t,e,n=!1){const r=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,e,n=!1){const{auth:r}=t;if(Nt(r.app))return Promise.reject(jn(r));const s="reauthenticate";try{const i=await ii(t,wg(r,s,e,t),n);se(i.idToken,r,"internal-error");const o=yl(i.idToken);se(o,r,"internal-error");const{sub:c}=o;return se(t.uid===c,r,"user-mismatch"),Kr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Bt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(t,e,n=!1){if(Nt(t.app))return Promise.reject(jn(t));const r="signIn",s=await wg(t,r,e),i=await Kr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Zw(t,e){return Ag(rs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t){const e=rs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function tA(t,e,n){return Nt(t.app)?Promise.reject(jn(t)):Zw(yt(t),ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&eA(t),r})}function nA(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function rA(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}function jS(t){return yt(t).signOut()}const bo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bo,"1"),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=1e3,iA=10;class bg extends Rg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Rw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,iA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bg.type="LOCAL";const oA=bg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg extends Rg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sg.type="SESSION";const Pg=Sg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await aA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ra.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Il("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function lA(t){Qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function uA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hA(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fA(){return Cg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="firebaseLocalStorageDb",dA=1,So="firebaseLocalStorage",Vg="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sa(t,e){return t.transaction([So],e?"readwrite":"readonly").objectStore(So)}function pA(){const t=indexedDB.deleteDatabase(kg);return new vi(t).toPromise()}function Pc(){const t=indexedDB.open(kg,dA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(So,{keyPath:Vg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(So)?e(r):(r.close(),await pA(),e(await Pc()))})})}async function gf(t,e,n){const r=sa(t,!0).put({[Vg]:e,value:n});return new vi(r).toPromise()}async function gA(t,e){const n=sa(t,!1).get(e),r=await new vi(n).toPromise();return r===void 0?null:r.value}function mf(t,e){const n=sa(t,!0).delete(e);return new vi(n).toPromise()}const mA=800,_A=3;class Og{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_A)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ra._getInstance(fA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uA(),!this.activeServiceWorker)return;this.sender=new cA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pc();return await gf(e,bo,"1"),await mf(e,bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=sa(s,!1).getAll();return new vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Og.type="LOCAL";const yA=Og;new _i(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t,e){return e?fn(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends El{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EA(t){return Ag(t.auth,new wl(t),t.bypassAuthState)}function TA(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Jw(n,new wl(t),t.bypassAuthState)}async function IA(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Xw(n,new wl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EA;case"linkViaPopup":case"linkViaRedirect":return IA;case"reauthViaPopup":case"reauthViaRedirect":return TA;default:Bt(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=new _i(2e3,1e4);class Dr extends Dg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Il();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wA.get())};e()}}Dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="pendingRedirect",so=new Map;class RA extends Dg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=so.get(this.auth._key());if(!e){try{const r=await bA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}so.set(this.auth._key(),e)}return this.bypassAuthState||so.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bA(t,e){const n=CA(e),r=PA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function SA(t,e){so.set(t._key(),e)}function PA(t){return fn(t._redirectPersistence)}function CA(t){return ro(AA,t.config.apiKey,t.name)}async function kA(t,e,n=!1){if(Nt(t.app))return Promise.reject(jn(t));const r=rs(t),s=vA(r,e),o=await new RA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=10*60*1e3;class OA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ng(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VA&&this.cachedEventUids.clear(),this.cachedEventUids.has(_f(e))}saveEventToCache(e){this.cachedEventUids.add(_f(e)),this.lastProcessedEventTime=Date.now()}}function _f(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ng({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function DA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ng(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MA=/^https?/;async function LA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NA(t);for(const n of e)try{if(FA(n))return}catch{}Bt(t,"unauthorized-domain")}function FA(t){const e=bc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MA.test(n))return!1;if(xA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new _i(3e4,6e4);function yf(){const t=Qt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BA(t){return new Promise((e,n)=>{var r,s,i;function o(){yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yf(),n(Gt(t,"network-request-failed"))},timeout:UA.get()})}if(!((s=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)o();else{const c=Nw("iframefcb");return Qt()[c]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},vg(`${Dw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw io=null,e})}let io=null;function jA(t){return io=io||BA(t),io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=new _i(5e3,15e3),HA="__/auth/iframe",qA="emulator/auth/iframe",zA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WA(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_l(e,qA):`https://${t.config.authDomain}/${HA}`,r={apiKey:e.apiKey,appName:t.name,v:ns},s=KA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mi(r).slice(1)}`}async function GA(t){const e=await jA(t),n=Qt().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:WA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),c=Qt().setTimeout(()=>{i(o)},$A.get());function l(){Qt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YA=500,XA=600,JA="_blank",ZA="http://localhost";class vf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function e0(t,e,n,r=YA,s=XA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},QA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ct().toLowerCase();n&&(c=fg(h)?JA:n),ug(h)&&(e=e||ZA,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[_,C])=>`${g}${_}=${C},`,"");if(Aw(h)&&c!=="_self")return t0(e||"",c),new vf(null);const p=window.open(e||"",c,f);se(p,t,"popup-blocked");try{p.focus()}catch{}return new vf(p)}function t0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="__/auth/handler",r0="emulator/auth/handler",s0=encodeURIComponent("fac");async function Ef(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ns,eventId:s};if(e instanceof Ig){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof yi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${s0}=${encodeURIComponent(l)}`:"";return`${i0(t)}?${mi(c).slice(1)}${h}`}function i0({config:t}){return t.emulator?_l(t,r0):`https://${t.authDomain}/${n0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="webStorageSupport";class o0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pg,this._completeRedirectFn=kA,this._overrideRedirectResult=SA}async _openPopup(e,n,r,s){var i;_n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ef(e,n,r,bc(),s);return e0(e,o,Il())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ef(e,n,r,bc(),s);return lA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GA(e),r=new OA(e);return n.register("authEvent",s=>(se(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Za,{type:Za},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[Za];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _g()||hg()||vl()}}const a0=o0;var Tf="@firebase/auth",If="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function u0(t){zr(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yg(t)},h=new kw(r,s,i,l);return Bw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zr(new fr("auth-internal",e=>{const n=rs(e.getProvider("auth").getImmediate());return(r=>new c0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(Tf,If,l0(t)),Bn(Tf,If,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=5*60,f0=Wp("authIdTokenMaxAge")||h0;let wf=null;const d0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>f0)return;const s=n?.token;wf!==s&&(wf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function p0(t=Zp()){const e=pl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Uw(t,{popupRedirectResolver:a0,persistence:[yA,oA,Pg]}),r=Wp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=d0(i.toString());rA(n,o,()=>o(n.currentUser)),nA(n,c=>o(c))}}const s=zp("auth");return s&&jw(n,`http://${s}`),n}function g0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Vw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",g0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});u0("Browser");var Af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $n,xg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function E(){}E.prototype=y.prototype,w.D=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(A,R,S){for(var I=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)I[lt-2]=arguments[lt];return y.prototype[R].apply(A,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,E){E||(E=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;16>R;++R)A[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],R=w.g[2];var S=w.g[3],I=y+(S^E&(R^S))+A[0]+3614090360&4294967295;y=E+(I<<7&4294967295|I>>>25),I=S+(R^y&(E^R))+A[1]+3905402710&4294967295,S=y+(I<<12&4294967295|I>>>20),I=R+(E^S&(y^E))+A[2]+606105819&4294967295,R=S+(I<<17&4294967295|I>>>15),I=E+(y^R&(S^y))+A[3]+3250441966&4294967295,E=R+(I<<22&4294967295|I>>>10),I=y+(S^E&(R^S))+A[4]+4118548399&4294967295,y=E+(I<<7&4294967295|I>>>25),I=S+(R^y&(E^R))+A[5]+1200080426&4294967295,S=y+(I<<12&4294967295|I>>>20),I=R+(E^S&(y^E))+A[6]+2821735955&4294967295,R=S+(I<<17&4294967295|I>>>15),I=E+(y^R&(S^y))+A[7]+4249261313&4294967295,E=R+(I<<22&4294967295|I>>>10),I=y+(S^E&(R^S))+A[8]+1770035416&4294967295,y=E+(I<<7&4294967295|I>>>25),I=S+(R^y&(E^R))+A[9]+2336552879&4294967295,S=y+(I<<12&4294967295|I>>>20),I=R+(E^S&(y^E))+A[10]+4294925233&4294967295,R=S+(I<<17&4294967295|I>>>15),I=E+(y^R&(S^y))+A[11]+2304563134&4294967295,E=R+(I<<22&4294967295|I>>>10),I=y+(S^E&(R^S))+A[12]+1804603682&4294967295,y=E+(I<<7&4294967295|I>>>25),I=S+(R^y&(E^R))+A[13]+4254626195&4294967295,S=y+(I<<12&4294967295|I>>>20),I=R+(E^S&(y^E))+A[14]+2792965006&4294967295,R=S+(I<<17&4294967295|I>>>15),I=E+(y^R&(S^y))+A[15]+1236535329&4294967295,E=R+(I<<22&4294967295|I>>>10),I=y+(R^S&(E^R))+A[1]+4129170786&4294967295,y=E+(I<<5&4294967295|I>>>27),I=S+(E^R&(y^E))+A[6]+3225465664&4294967295,S=y+(I<<9&4294967295|I>>>23),I=R+(y^E&(S^y))+A[11]+643717713&4294967295,R=S+(I<<14&4294967295|I>>>18),I=E+(S^y&(R^S))+A[0]+3921069994&4294967295,E=R+(I<<20&4294967295|I>>>12),I=y+(R^S&(E^R))+A[5]+3593408605&4294967295,y=E+(I<<5&4294967295|I>>>27),I=S+(E^R&(y^E))+A[10]+38016083&4294967295,S=y+(I<<9&4294967295|I>>>23),I=R+(y^E&(S^y))+A[15]+3634488961&4294967295,R=S+(I<<14&4294967295|I>>>18),I=E+(S^y&(R^S))+A[4]+3889429448&4294967295,E=R+(I<<20&4294967295|I>>>12),I=y+(R^S&(E^R))+A[9]+568446438&4294967295,y=E+(I<<5&4294967295|I>>>27),I=S+(E^R&(y^E))+A[14]+3275163606&4294967295,S=y+(I<<9&4294967295|I>>>23),I=R+(y^E&(S^y))+A[3]+4107603335&4294967295,R=S+(I<<14&4294967295|I>>>18),I=E+(S^y&(R^S))+A[8]+1163531501&4294967295,E=R+(I<<20&4294967295|I>>>12),I=y+(R^S&(E^R))+A[13]+2850285829&4294967295,y=E+(I<<5&4294967295|I>>>27),I=S+(E^R&(y^E))+A[2]+4243563512&4294967295,S=y+(I<<9&4294967295|I>>>23),I=R+(y^E&(S^y))+A[7]+1735328473&4294967295,R=S+(I<<14&4294967295|I>>>18),I=E+(S^y&(R^S))+A[12]+2368359562&4294967295,E=R+(I<<20&4294967295|I>>>12),I=y+(E^R^S)+A[5]+4294588738&4294967295,y=E+(I<<4&4294967295|I>>>28),I=S+(y^E^R)+A[8]+2272392833&4294967295,S=y+(I<<11&4294967295|I>>>21),I=R+(S^y^E)+A[11]+1839030562&4294967295,R=S+(I<<16&4294967295|I>>>16),I=E+(R^S^y)+A[14]+4259657740&4294967295,E=R+(I<<23&4294967295|I>>>9),I=y+(E^R^S)+A[1]+2763975236&4294967295,y=E+(I<<4&4294967295|I>>>28),I=S+(y^E^R)+A[4]+1272893353&4294967295,S=y+(I<<11&4294967295|I>>>21),I=R+(S^y^E)+A[7]+4139469664&4294967295,R=S+(I<<16&4294967295|I>>>16),I=E+(R^S^y)+A[10]+3200236656&4294967295,E=R+(I<<23&4294967295|I>>>9),I=y+(E^R^S)+A[13]+681279174&4294967295,y=E+(I<<4&4294967295|I>>>28),I=S+(y^E^R)+A[0]+3936430074&4294967295,S=y+(I<<11&4294967295|I>>>21),I=R+(S^y^E)+A[3]+3572445317&4294967295,R=S+(I<<16&4294967295|I>>>16),I=E+(R^S^y)+A[6]+76029189&4294967295,E=R+(I<<23&4294967295|I>>>9),I=y+(E^R^S)+A[9]+3654602809&4294967295,y=E+(I<<4&4294967295|I>>>28),I=S+(y^E^R)+A[12]+3873151461&4294967295,S=y+(I<<11&4294967295|I>>>21),I=R+(S^y^E)+A[15]+530742520&4294967295,R=S+(I<<16&4294967295|I>>>16),I=E+(R^S^y)+A[2]+3299628645&4294967295,E=R+(I<<23&4294967295|I>>>9),I=y+(R^(E|~S))+A[0]+4096336452&4294967295,y=E+(I<<6&4294967295|I>>>26),I=S+(E^(y|~R))+A[7]+1126891415&4294967295,S=y+(I<<10&4294967295|I>>>22),I=R+(y^(S|~E))+A[14]+2878612391&4294967295,R=S+(I<<15&4294967295|I>>>17),I=E+(S^(R|~y))+A[5]+4237533241&4294967295,E=R+(I<<21&4294967295|I>>>11),I=y+(R^(E|~S))+A[12]+1700485571&4294967295,y=E+(I<<6&4294967295|I>>>26),I=S+(E^(y|~R))+A[3]+2399980690&4294967295,S=y+(I<<10&4294967295|I>>>22),I=R+(y^(S|~E))+A[10]+4293915773&4294967295,R=S+(I<<15&4294967295|I>>>17),I=E+(S^(R|~y))+A[1]+2240044497&4294967295,E=R+(I<<21&4294967295|I>>>11),I=y+(R^(E|~S))+A[8]+1873313359&4294967295,y=E+(I<<6&4294967295|I>>>26),I=S+(E^(y|~R))+A[15]+4264355552&4294967295,S=y+(I<<10&4294967295|I>>>22),I=R+(y^(S|~E))+A[6]+2734768916&4294967295,R=S+(I<<15&4294967295|I>>>17),I=E+(S^(R|~y))+A[13]+1309151649&4294967295,E=R+(I<<21&4294967295|I>>>11),I=y+(R^(E|~S))+A[4]+4149444226&4294967295,y=E+(I<<6&4294967295|I>>>26),I=S+(E^(y|~R))+A[11]+3174756917&4294967295,S=y+(I<<10&4294967295|I>>>22),I=R+(y^(S|~E))+A[2]+718787259&4294967295,R=S+(I<<15&4294967295|I>>>17),I=E+(S^(R|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var E=y-this.blockSize,A=this.B,R=this.h,S=0;S<y;){if(R==0)for(;S<=E;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(A[R++]=w.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<y;)if(A[R++]=w[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var E=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=E&255,E/=256;for(this.u(w),w=Array(16),y=E=0;4>y;++y)for(var A=0;32>A;A+=8)w[E++]=this.g[y]>>>A&255;return w};function i(w,y){var E=c;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function o(w,y){this.h=y;for(var E=[],A=!0,R=w.length-1;0<=R;R--){var S=w[R]|0;A&&S==y||(E[R]=S,A=!1)}this.g=E}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return O(h(-w));for(var y=[],E=1,A=0;w>=E;A++)y[A]=w/E|0,E*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return O(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),A=p,R=0;R<w.length;R+=8){var S=Math.min(8,w.length-R),I=parseInt(w.substring(R,R+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(I))):(A=A.j(E),A=A.add(h(I)))}return A}var p=l(0),g=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var w=0,y=1,E=0;E<this.g.length;E++){var A=this.i(E);w+=(0<=A?A:4294967296+A)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(k(this))return"-"+O(this).toString(w);for(var y=h(Math.pow(w,6)),E=this,A="";;){var R=H(E,y).g;E=j(E,R.j(y));var S=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=R,C(E))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=j(this,w),k(w)?-1:C(w)?0:1};function O(w){for(var y=w.g.length,E=[],A=0;A<y;A++)E[A]=~w.g[A];return new o(E,~w.h).add(g)}t.abs=function(){return k(this)?O(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],A=0,R=0;R<=y;R++){var S=A+(this.i(R)&65535)+(w.i(R)&65535),I=(S>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=I>>>16,S&=65535,I&=65535,E[R]=I<<16|S}return new o(E,E[E.length-1]&-2147483648?-1:0)};function j(w,y){return w.add(O(y))}t.j=function(w){if(C(this)||C(w))return p;if(k(this))return k(w)?O(this).j(O(w)):O(O(this).j(w));if(k(w))return O(this.j(O(w)));if(0>this.l(_)&&0>w.l(_))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,E=[],A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var S=this.i(A)>>>16,I=this.i(A)&65535,lt=w.i(R)>>>16,wt=w.i(R)&65535;E[2*A+2*R]+=I*wt,F(E,2*A+2*R),E[2*A+2*R+1]+=S*wt,F(E,2*A+2*R+1),E[2*A+2*R+1]+=I*lt,F(E,2*A+2*R+1),E[2*A+2*R+2]+=S*lt,F(E,2*A+2*R+2)}for(A=0;A<y;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=y;A<2*y;A++)E[A]=0;return new o(E,0)};function F(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function $(w,y){this.g=w,this.h=y}function H(w,y){if(C(y))throw Error("division by zero");if(C(w))return new $(p,p);if(k(w))return y=H(O(w),y),new $(O(y.g),O(y.h));if(k(y))return y=H(w,O(y)),new $(O(y.g),y.h);if(30<w.g.length){if(k(w)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,A=y;0>=A.l(w);)E=ce(E),A=ce(A);var R=ae(E,1),S=ae(A,1);for(A=ae(A,2),E=ae(E,2);!C(A);){var I=S.add(A);0>=I.l(w)&&(R=R.add(E),S=I),A=ae(A,1),E=ae(E,1)}return y=j(w,R.j(y)),new $(R,y)}for(R=p;0<=w.l(y);){for(E=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(E),I=S.j(y);k(I)||0<I.l(w);)E-=A,S=h(E),I=S.j(y);C(S)&&(S=g),R=R.add(S),w=j(w,I)}return new $(R,w)}t.A=function(w){return H(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)&w.i(A);return new o(E,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)|w.i(A);return new o(E,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)^w.i(A);return new o(E,this.h^w.h)};function ce(w){for(var y=w.g.length+1,E=[],A=0;A<y;A++)E[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(E,w.h)}function ae(w,y){var E=y>>5;y%=32;for(var A=w.g.length-E,R=[],S=0;S<A;S++)R[S]=0<y?w.i(S+E)>>>y|w.i(S+E+1)<<32-y:w.i(S+E);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,$n=o}).apply(typeof Af<"u"?Af:typeof self<"u"?self:typeof window<"u"?window:{});var zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mg,Ps,Lg,oo,Cc,Fg,Ug,Bg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof zi=="object"&&zi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,P={next:function(){if(!m&&d<a.length){var V=d++;return{value:u(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,P,V){for(var K=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)K[Se-2]=arguments[Se];return u.prototype[P].apply(m,K)}}function k(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function O(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const P=a.length||0,V=m.length||0;a.length=P+V;for(let K=0;K<V;K++)a[P+K]=m[K]}else a.push(m)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ce=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ae(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function y(a){const u={};for(const d in a)u[d]=a[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let V=0;V<E.length;V++)d=E[V],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function I(){var a=vt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class lt{constructor(){this.h=this.g=null}add(u,d){const m=wt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var wt=new j(()=>new Fe,a=>a.reset());class Fe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ge=!1,vt=new lt,Vt=()=>{const a=c.Promise.resolve(void 0);ye=()=>{a.then(At)}};var At=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){S(d)}var u=wt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ge=!1};function Oe(){this.s=this.s,this.C=this.C}Oe.prototype.s=!1,Oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function De(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var In=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function jt(a,u){if(De.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ce){e:{try{H(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:gt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&jt.aa.h.call(this)}}C(jt,De);var gt={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(a,u,d,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++Y,this.da=this.fa=!1}function J(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,u,d,m,P){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var K=T(a,u,m,P);return-1<K?(u=a[K],d||(u.fa=!1)):(u=new Q(u,this.src,V,!!m,P),u.fa=d,a.push(u)),u};function v(a,u){var d=u.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,u,void 0),V;(V=0<=P)&&Array.prototype.splice.call(m,P,1),V&&(J(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function T(a,u,d,m){for(var P=0;P<a.length;++P){var V=a[P];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==m)return P}return-1}var b="closure_lm_"+(1e6*Math.random()|0),N={};function L(a,u,d,m,P){if(Array.isArray(u)){for(var V=0;V<u.length;V++)L(a,u[V],d,m,P);return null}return d=oe(d),a&&a[D]?a.K(u,d,h(m)?!!m.capture:!1,P):x(a,u,d,!1,m,P)}function x(a,u,d,m,P,V){if(!u)throw Error("Invalid event type");var K=h(P)?!!P.capture:!!P,Se=W(a);if(Se||(a[b]=Se=new Te(a)),d=Se.add(u,d,m,K,V),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)In||(P=K),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(B(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return u.call(a.src,a.listener,d)}const u=ee;return a}function z(a,u,d,m,P){if(Array.isArray(u))for(var V=0;V<u.length;V++)z(a,u[V],d,m,P);else m=h(m)?!!m.capture:!!m,d=oe(d),a&&a[D]?(a=a.i,u=String(u).toString(),u in a.g&&(V=a.g[u],d=T(V,d,m,P),-1<d&&(J(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[u],a.h--)))):a&&(a=W(a))&&(u=a.g[u.toString()],a=-1,u&&(a=T(u,d,m,P)),(d=-1<a?u[a]:null)&&q(d))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[D])v(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(B(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=W(u))?(v(d,a),d.h==0&&(d.src=null,u[b]=null)):J(a)}}}function B(a){return a in N?N[a]:N[a]="on"+a}function ee(a,u){if(a.da)a=!0;else{u=new jt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&q(a),a=d.call(m,u)}return a}function W(a){return a=a[b],a instanceof Te?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(u){return a.handleEvent(u)}),a[Z])}function re(){Oe.call(this),this.i=new Te(this),this.M=this,this.F=null}C(re,Oe),re.prototype[D]=!0,re.prototype.removeEventListener=function(a,u,d,m){z(this,a,u,d,m)};function fe(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new De(u,a);else if(u instanceof De)u.target=u.target||a;else{var P=u;u=new De(m,a),A(u,P)}if(P=!0,d)for(var V=d.length-1;0<=V;V--){var K=u.g=d[V];P=ve(K,m,!0,u)&&P}if(K=u.g=a,P=ve(K,m,!0,u)&&P,P=ve(K,m,!1,u)&&P,d)for(V=0;V<d.length;V++)K=u.g=d[V],P=ve(K,m,!1,u)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)J(d[m]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},re.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function ve(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,V=0;V<u.length;++V){var K=u[V];if(K&&!K.da&&K.capture==d){var Se=K.listener,Ge=K.ha||K.src;K.fa&&v(a.i,K),P=Se.call(Ge,m)!==!1&&P}}return P&&!m.defaultPrevented}function ze(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Ke(a){a.g=ze(()=>{a.g=null,a.i&&(a.i=!1,Ke(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Rt extends Oe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ke(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(a){Oe.call(this),this.h=a,this.g={}}C(Je,Oe);var wn=[];function ls(a){ae(a.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},a),a.g={}}Je.prototype.N=function(){Je.aa.N.call(this),ls(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var We=c.JSON.stringify,bt=c.JSON.parse,Ai=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function va(){}va.prototype.h=null;function eu(a){return a.h||(a.h=a.i())}function tu(){}var us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ea(){De.call(this,"d")}C(Ea,De);function Ta(){De.call(this,"c")}C(Ta,De);var Jn={},nu=null;function Ri(){return nu=nu||new re}Jn.La="serverreachability";function ru(a){De.call(this,Jn.La,a)}C(ru,De);function hs(a){const u=Ri();fe(u,new ru(u))}Jn.STAT_EVENT="statevent";function su(a,u){De.call(this,Jn.STAT_EVENT,a),this.stat=u}C(su,De);function ut(a){const u=Ri();fe(u,new su(u,a))}Jn.Ma="timingevent";function iu(a,u){De.call(this,Jn.Ma,a),this.size=u}C(iu,De);function fs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function d_(a,u,d,m,P,V){a.info(function(){if(a.g)if(V)for(var K="",Se=V.split("&"),Ge=0;Ge<Se.length;Ge++){var Ie=Se[Ge].split("=");if(1<Ie.length){var Ze=Ie[0];Ie=Ie[1];var et=Ze.split("_");K=2<=et.length&&et[1]=="type"?K+(Ze+"="+Ie+"&"):K+(Ze+"=redacted&")}}else K=null;else K=V;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+K})}function p_(a,u,d,m,P,V,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+V+" "+K})}function Tr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+m_(a,d)+(m?" "+m:"")})}function g_(a,u){a.info(function(){return"TIMEOUT: "+u})}ds.prototype.info=function(){};function m_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var V=P[0];if(V!="noop"&&V!="stop"&&V!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return We(d)}catch{return u}}var bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ou={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ia;function Si(){}C(Si,va),Si.prototype.g=function(){return new XMLHttpRequest},Si.prototype.i=function(){return{}},Ia=new Si;function An(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new Je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new au}function au(){this.i=null,this.g="",this.h=!1}var cu={},wa={};function Aa(a,u,d){a.L=1,a.v=Vi(tn(u)),a.m=d,a.P=!0,lu(a,null)}function lu(a,u){a.F=Date.now(),Pi(a),a.A=tn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),wu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new au,a.g=ju(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Rt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(wn[0]=P.toString()),P=wn);for(var V=0;V<P.length;V++){var K=L(d,P[V],m||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),hs(),d_(a.i,a.u,a.A,a.l,a.R,a.m)}An.prototype.ca=function(a){a=a.target;const u=this.M;u&&nn(a)==3?u.j():this.Y(a)},An.prototype.Y=function(a){try{if(a==this.g)e:{const et=nn(this.g);var u=this.g.Ba();const Ar=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||ku(this.g)))){this.J||et!=4||u==7||(u==8||0>=Ar?hs(3):hs(2)),Ra(this);var d=this.g.Z();this.X=d;t:if(uu(this)){var m=ku(this.g);a="";var P=m.length,V=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),ps(this);var K="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(V&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,p_(this.i,this.u,this.A,this.l,this.R,et,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Ge=this.g;if((Se=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Se)){var Ie=Se;break t}}Ie=null}if(d=Ie)Tr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ba(this,d);else{this.o=!1,this.s=3,ut(12),Zn(this),ps(this);break e}}if(this.P){d=!0;let Ot;for(;!this.J&&this.C<K.length;)if(Ot=__(this,K),Ot==wa){et==4&&(this.s=4,ut(14),d=!1),Tr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==cu){this.s=4,ut(15),Tr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Tr(this.i,this.l,Ot,null),ba(this,Ot);if(uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||K.length!=0||this.h.h||(this.s=1,ut(16),d=!1),this.o=this.o&&d,!d)Tr(this.i,this.l,K,"[Invalid Chunked Response]"),Zn(this),ps(this);else if(0<K.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Oa(Ze),Ze.M=!0,ut(11))}}else Tr(this.i,this.l,K,null),ba(this,K);et==4&&Zn(this),this.o&&!this.J&&(et==4?Lu(this.j,this):(this.o=!1,Pi(this)))}else N_(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Zn(this),ps(this)}}}catch{}finally{}};function uu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function __(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?wa:(d=Number(u.substring(d,m)),isNaN(d)?cu:(m+=1,m+d>u.length?wa:(u=u.slice(m,m+d),a.C=m+d,u)))}An.prototype.cancel=function(){this.J=!0,Zn(this)};function Pi(a){a.S=Date.now()+a.I,hu(a,a.I)}function hu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fs(g(a.ba,a),u)}function Ra(a){a.B&&(c.clearTimeout(a.B),a.B=null)}An.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(g_(this.i,this.A),this.L!=2&&(hs(),ut(17)),Zn(this),this.s=2,ps(this)):hu(this,this.S-a)};function ps(a){a.j.G==0||a.J||Lu(a.j,a)}function Zn(a){Ra(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,ls(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ba(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Sa(d.h,a))){if(!a.K&&Sa(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Li(d),xi(d);else break e;Va(d),ut(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=fs(g(d.Za,d),6e3));if(1>=pu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else tr(d,11)}else if((a.K||d.g==a)&&Li(d),!F(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Ie=P[u];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const Ze=Ie[3];Ze!=null&&(d.la=Ze,d.j.info("VER="+d.la));const et=Ie[4];et!=null&&(d.Aa=et,d.j.info("SVER="+d.Aa));const Ar=Ie[5];Ar!=null&&typeof Ar=="number"&&0<Ar&&(m=1.5*Ar,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ot=a.g;if(Ot){const Ui=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var V=m.h;V.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Pa(V,V.h),V.h=null))}if(m.D){const Da=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Da&&(m.ya=Da,ke(m.I,m.D,Da))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var K=a;if(m.qa=Bu(m,m.J?m.ia:null,m.W),K.K){gu(m.h,K);var Se=K,Ge=m.L;Ge&&(Se.I=Ge),Se.B&&(Ra(Se),Pi(Se)),m.g=K}else xu(m);0<d.i.length&&Mi(d)}else Ie[0]!="stop"&&Ie[0]!="close"||tr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?tr(d,7):ka(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}hs(4)}catch{}}var y_=class{constructor(a,u){this.g=a,this.map=u}};function fu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function du(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function pu(a){return a.h?1:a.g?a.g.size:0}function Sa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Pa(a,u){a.g?a.g.add(u):a.h=u}function gu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}fu.prototype.cancel=function(){if(this.i=mu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return k(a.i)}function v_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function E_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function _u(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=E_(a),m=v_(a),P=m.length,V=0;V<P;V++)u.call(void 0,m[V],d&&d[V],a)}var yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),P=null;if(0<=m){var V=a[d].substring(0,m);P=a[d].substring(m+1)}else V=a[d];u(V,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof er){this.h=a.h,Ci(this,a.j),this.o=a.o,this.g=a.g,ki(this,a.s),this.l=a.l;var u=a.i,d=new _s;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),vu(this,d),this.m=a.m}else a&&(u=String(a).match(yu))?(this.h=!1,Ci(this,u[1]||"",!0),this.o=gs(u[2]||""),this.g=gs(u[3]||"",!0),ki(this,u[4]),this.l=gs(u[5]||"",!0),vu(this,u[6]||"",!0),this.m=gs(u[7]||"")):(this.h=!1,this.i=new _s(null,this.h))}er.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ms(u,Eu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ms(u,Eu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ms(d,d.charAt(0)=="/"?A_:w_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ms(d,b_)),a.join("")};function tn(a){return new er(a)}function Ci(a,u,d){a.j=d?gs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ki(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function vu(a,u,d){u instanceof _s?(a.i=u,S_(a.i,a.h)):(d||(u=ms(u,R_)),a.i=new _s(u,a.h))}function ke(a,u,d){a.i.set(u,d)}function Vi(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function gs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ms(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,I_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function I_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Eu=/[#\/\?@]/g,w_=/[#\?:]/g,A_=/[#\?]/g,R_=/[#\?@]/g,b_=/#/g;function _s(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Rn(a){a.g||(a.g=new Map,a.h=0,a.i&&T_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=_s.prototype,t.add=function(a,u){Rn(this),this.i=null,a=Ir(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Tu(a,u){Rn(a),u=Ir(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Iu(a,u){return Rn(a),u=Ir(a,u),a.g.has(u)}t.forEach=function(a,u){Rn(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){Rn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const P=a[m];for(let V=0;V<P.length;V++)d.push(u[m])}return d},t.V=function(a){Rn(this);let u=[];if(typeof a=="string")Iu(this,a)&&(u=u.concat(this.g.get(Ir(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Rn(this),this.i=null,a=Ir(this,a),Iu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function wu(a,u,d){Tu(a,u),0<d.length&&(a.i=null,a.g.set(Ir(a,u),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const V=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var P=V;K[m]!==""&&(P+="="+encodeURIComponent(String(K[m]))),a.push(P)}}return this.i=a.join("&")};function Ir(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function S_(a,u){u&&!a.j&&(Rn(a),a.i=null,a.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(Tu(this,m),wu(this,P,d))},a)),a.j=u}function P_(a,u){const d=new ds;if(c.Image){const m=new Image;m.onload=_(bn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=_(bn,d,"TestLoadImage: error",!1,u,m),m.onabort=_(bn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(bn,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function C_(a,u){const d=new ds,m=new AbortController,P=setTimeout(()=>{m.abort(),bn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(P),V.ok?bn(d,"TestPingServer: ok",!0,u):bn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),bn(d,"TestPingServer: error",!1,u)})}function bn(a,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function k_(){this.g=new Ai}function V_(a,u,d){const m=d||"";try{_u(a,function(P,V){let K=P;h(P)&&(K=We(P)),u.push(m+V+"="+encodeURIComponent(K))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function Oi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Oi,va),Oi.prototype.g=function(){return new Di(this.l,this.j)},Oi.prototype.i=function(a){return function(){return a}}({});function Di(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Di,re),t=Di.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,vs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Au(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Au(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ys(this):vs(this),this.readyState==3&&Au(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ys(this))},t.Qa=function(a){this.g&&(this.response=a,ys(this))},t.ga=function(){this.g&&ys(this)};function ys(a){a.readyState=4,a.l=null,a.j=null,a.v=null,vs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function vs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ru(a){let u="";return ae(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ca(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Ru(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ke(a,u,d))}function xe(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(xe,re);var O_=/^https?$/i,D_=["POST","PUT"];t=xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ia.g(),this.v=this.o?eu(this.o):eu(Ia),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(V){bu(this,V);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())d.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(D_,u,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of d)this.g.setRequestHeader(V,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cu(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){bu(this,V)}};function bu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Su(a),Ni(a)}function Su(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),Ni(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ni(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Pu(this):this.bb())},t.bb=function(){Pu(this)};function Pu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||nn(a)!=4||a.Z()!=2)){if(a.u&&nn(a)==4)ze(a.Ea,0,a);else if(fe(a,"readystatechange"),nn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=K===0){var P=String(a.D).match(yu)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),m=!O_.test(P?P.toLowerCase():"")}d=m}if(d)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var V=2<nn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Su(a)}}finally{Ni(a)}}}}function Ni(a,u){if(a.g){Cu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||fe(a,"ready");try{d.onreadystatechange=m}catch{}}}function Cu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),bt(u)}};function ku(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function N_(a){const u={};a=(a.g&&2<=nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(F(a[m]))continue;var d=R(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[P]||[];u[P]=V,V.push(d)}w(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Vu(a){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,a),this.cb=Es("retryDelaySeedMs",1e4,a),this.Wa=Es("forwardChannelMaxRetries",2,a),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new fu(a&&a.concurrentRequestLimit),this.Da=new k_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Vu.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){ut(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Bu(this,null,this.W),Mi(this)};function ka(a){if(Ou(a),a.G==3){var u=a.U++,d=tn(a.I);if(ke(d,"SID",a.K),ke(d,"RID",u),ke(d,"TYPE","terminate"),Ts(a,d),u=new An(a,a.j,u),u.L=2,u.v=Vi(tn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=ju(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Pi(u)}Uu(a)}function xi(a){a.g&&(Oa(a),a.g.cancel(),a.g=null)}function Ou(a){xi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Li(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Mi(a){if(!du(a.h)&&!a.s){a.s=!0;var u=a.Ga;ye||Vt(),ge||(ye(),ge=!0),vt.add(u,a),a.B=0}}function x_(a,u){return pu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fs(g(a.Ga,a,u),Fu(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new An(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(P.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Nu(this,P,u),d=tn(this.I),ke(d,"RID",a),ke(d,"CVER",22),this.D&&ke(d,"X-HTTP-Session-Id",this.D),Ts(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(Ru(V)))+"&"+u:this.m&&Ca(d,this.m,V)),Pa(this.h,P),this.Ua&&ke(d,"TYPE","init"),this.P?(ke(d,"$req",u),ke(d,"SID","null"),P.T=!0,Aa(P,d,null)):Aa(P,d,u),this.G=2}}else this.G==3&&(a?Du(this,a):this.i.length==0||du(this.h)||Du(this))};function Du(a,u){var d;u?d=u.l:d=a.U++;const m=tn(a.I);ke(m,"SID",a.K),ke(m,"RID",d),ke(m,"AID",a.T),Ts(a,m),a.m&&a.o&&Ca(m,a.m,a.o),d=new An(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Nu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Pa(a.h,d),Aa(d,m,u)}function Ts(a,u){a.H&&ae(a.H,function(d,m){ke(u,m,d)}),a.l&&_u({},function(d,m){ke(u,m,d)})}function Nu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let V=-1;for(;;){const K=["count="+d];V==-1?0<d?(V=P[0].g,K.push("ofs="+V)):V=0:K.push("ofs="+V);let Se=!0;for(let Ge=0;Ge<d;Ge++){let Ie=P[Ge].g;const Ze=P[Ge].map;if(Ie-=V,0>Ie)V=Math.max(0,P[Ge].g-100),Se=!1;else try{V_(Ze,K,"req"+Ie+"_")}catch{m&&m(Ze)}}if(Se){m=K.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function xu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ye||Vt(),ge||(ye(),ge=!0),vt.add(u,a),a.v=0}}function Va(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fs(g(a.Fa,a),Fu(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Mu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),xi(this),Mu(this))};function Oa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Mu(a){a.g=new An(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=tn(a.qa);ke(u,"RID","rpc"),ke(u,"SID",a.K),ke(u,"AID",a.T),ke(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(u,"TO",a.ja),ke(u,"TYPE","xmlhttp"),Ts(a,u),a.m&&a.o&&Ca(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Vi(tn(u)),d.m=null,d.P=!0,lu(d,a)}t.Za=function(){this.C!=null&&(this.C=null,xi(this),Va(this),ut(19))};function Li(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Lu(a,u){var d=null;if(a.g==u){Li(a),Oa(a),a.g=null;var m=2}else if(Sa(a.h,u))d=u.D,gu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=Ri(),fe(m,new iu(m,d)),Mi(a)}else xu(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&x_(a,u)||m==2&&Va(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:tr(a,5);break;case 4:tr(a,10);break;case 3:tr(a,6);break;default:tr(a,2)}}}function Fu(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function tr(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const P=!m;m=new er(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ci(m,"https"),Vi(m),P?P_(m.toString(),d):C_(m.toString(),d)}else ut(2);a.G=0,a.l&&a.l.sa(u),Uu(a),Ou(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Uu(a){if(a.G=0,a.ka=[],a.l){const u=mu(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Bu(a,u,d){var m=d instanceof er?tn(d):new er(d);if(m.g!="")u&&(m.g=u+"."+m.g),ki(m,m.s);else{var P=c.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var V=new er(null);m&&Ci(V,m),u&&(V.g=u),P&&ki(V,P),d&&(V.l=d),m=V}return d=a.D,u=a.ya,d&&u&&ke(m,d,u),ke(m,"VER",a.la),Ts(a,m),m}function ju(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new xe(new Oi({eb:d})):new xe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $u(){}t=$u.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Fi(){}Fi.prototype.g=function(a,u){return new Et(a,u)};function Et(a,u){re.call(this),this.g=new Vu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new wr(this)}C(Et,re),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){ka(this.g)},Et.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=We(a),a=d);u.i.push(new y_(u.Ya++,a)),u.G==3&&Mi(u)},Et.prototype.N=function(){this.g.l=null,delete this.j,ka(this.g),delete this.g,Et.aa.N.call(this)};function Hu(a){Ea.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Hu,Ea);function qu(){Ta.call(this),this.status=1}C(qu,Ta);function wr(a){this.g=a}C(wr,$u),wr.prototype.ua=function(){fe(this.g,"a")},wr.prototype.ta=function(a){fe(this.g,new Hu(a))},wr.prototype.sa=function(a){fe(this.g,new qu)},wr.prototype.ra=function(){fe(this.g,"b")},Fi.prototype.createWebChannel=Fi.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Bg=function(){return new Fi},Ug=function(){return Ri()},Fg=Jn,Cc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,oo=bi,ou.COMPLETE="complete",Lg=ou,tu.EventType=us,us.OPEN="a",us.CLOSE="b",us.ERROR="c",us.MESSAGE="d",re.prototype.listen=re.prototype.K,Ps=tu,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,Mg=xe}).apply(typeof zi<"u"?zi:typeof self<"u"?self:typeof window<"u"?window:{});const Rf="@firebase/firestore",bf="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new fl("@firebase/firestore");function Cr(){return pr.logLevel}function X(t,...e){if(pr.logLevel<=me.DEBUG){const n=e.map(Al);pr.debug(`Firestore (${is}): ${t}`,...n)}}function yn(t,...e){if(pr.logLevel<=me.ERROR){const n=e.map(Al);pr.error(`Firestore (${is}): ${t}`,...n)}}function Wr(t,...e){if(pr.logLevel<=me.WARN){const n=e.map(Al);pr.warn(`Firestore (${is}): ${t}`,...n)}}function Al(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,jg(t,r,n)}function jg(t,e,n){let r=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw yn(r),new Error(r)}function be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||jg(e,s,r)}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class m0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class _0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class y0{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new lr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string",31837,{l:r}),new $g(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class v0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class E0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new v0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){be(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Sf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Sf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=I0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function kc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return pe(r,s);{const i=Hg(),o=w0(i.encode(Pf(t,n)),i.encode(Pf(e,n)));return o!==0?o:pe(r,s)}}n+=r>65535?2:1}return pe(t.length,e.length)}function Pf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function w0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return pe(t[n],e[n]);return pe(t.length,e.length)}function Gr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=-62135596800,kf=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*kf);return new je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Cf)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kf}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Cf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new je(0,0))}static max(){return new le(new je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="__name__";class qt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=qt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return pe(e.length,n.length)}static compareSegments(e,n){const r=qt.isNumericId(e),s=qt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?qt.extractNumericId(e).compare(qt.extractNumericId(n)):kc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $n.fromString(e.substring(4,e.length-2))}}class Ve extends qt{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const A0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends qt{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return A0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vf}static keyField(){return new Ye([Vf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new te(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new te(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ve.fromString(e))}static fromName(e){return new ne(Ve.fromString(e).popFirst(5))}static empty(){return new ne(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ve(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=-1;function R0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new qn(s,ne.empty(),e)}function b0(t){return new qn(t.readTime,t.key,ai)}class qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qn(le.min(),ne.empty(),ai)}static max(){return new qn(le.max(),ne.empty(),ai)}}function S0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class C0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==P0)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function k0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function as(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ia.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=-1;function oa(t){return t==null}function Po(t){return t===0&&1/t==-1/0}function V0(t){return typeof t=="number"&&Number.isInteger(t)&&!Po(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="";function O0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Of(e)),e=D0(t.get(n),e);return Of(e)}function D0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case zg:n+="";break;default:n+=i}}return n}function Of(t){return t+zg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ki(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ki(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ki(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ki(this.root,e,this.comparator,!0)}}class Ki{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nf(this.data.getIterator())}getIteratorFrom(e){return new Nf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Nf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new $e(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wg("Invalid base64 string: "+i):i}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const N0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(be(!!t,39018),typeof t=="string"){let e=0;const n=N0.exec(t);if(be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Kn(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="server_timestamp",Qg="__type__",Yg="__previous_value__",Xg="__local_write_time__";function bl(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Qg])===null||n===void 0?void 0:n.stringValue)===Gg}function aa(t){const e=t.mapValue.fields[Yg];return bl(e)?aa(e):e}function ci(t){const e=zn(t.mapValue.fields[Xg].timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const Co="(default)";class li{constructor(e,n){this.projectId=e,this.database=n||Co}static empty(){return new li("","")}get isDefaultDatabase(){return this.database===Co}isEqual(e){return e instanceof li&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="__type__",M0="__max__",Wi={mapValue:{}},Zg="__vector__",ko="value";function Wn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bl(t)?4:F0(t)?9007199254740991:L0(t)?10:11:ie(28295,{value:t})}function Zt(t,e){if(t===e)return!0;const n=Wn(t);if(n!==Wn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ci(t).isEqual(ci(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=zn(s.timestampValue),c=zn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Kn(s.bytesValue).isEqual(Kn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Me(s.doubleValue),c=Me(i.doubleValue);return o===c?Po(o)===Po(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Gr(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Df(o)!==Df(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Zt(o[l],c[l])))return!1;return!0}(t,e);default:return ie(52216,{left:t})}}function ui(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function Qr(t,e){if(t===e)return 0;const n=Wn(t),r=Wn(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Me(i.integerValue||i.doubleValue),l=Me(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return xf(t.timestampValue,e.timestampValue);case 4:return xf(ci(t),ci(e));case 5:return kc(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Kn(i),l=Kn(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=pe(c[h],l[h]);if(f!==0)return f}return pe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=pe(Me(i.latitude),Me(o.latitude));return c!==0?c:pe(Me(i.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Mf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},g=o.fields||{},_=(c=p[ko])===null||c===void 0?void 0:c.arrayValue,C=(l=g[ko])===null||l===void 0?void 0:l.arrayValue,k=pe(((h=_?.values)===null||h===void 0?void 0:h.length)||0,((f=C?.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Mf(_,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Wi.mapValue&&o===Wi.mapValue)return 0;if(i===Wi.mapValue)return 1;if(o===Wi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=kc(l[p],f[p]);if(g!==0)return g;const _=Qr(c[l[p]],h[f[p]]);if(_!==0)return _}return pe(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ie(23264,{Pe:n})}}function xf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=zn(t),r=zn(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function Mf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Qr(n[s],r[s]);if(i)return i}return pe(n.length,r.length)}function Yr(t){return Vc(t)}function Vc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Kn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Vc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Vc(n.fields[o])}`;return s+"}"}(t.mapValue):ie(61005,{value:t})}function ao(t){switch(Wn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=aa(t);return e?16+ao(e):16;case 5:return 2*t.stringValue.length;case 6:return Kn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ao(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return _r(r.fields,(i,o)=>{s+=i.length+ao(o)}),s}(t.mapValue);default:throw ie(13486,{value:t})}}function Oc(t){return!!t&&"integerValue"in t}function Sl(t){return!!t&&"arrayValue"in t}function Lf(t){return!!t&&"nullValue"in t}function Ff(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function co(t){return!!t&&"mapValue"in t}function L0(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Jg])===null||n===void 0?void 0:n.stringValue)===Zg}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function F0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===M0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!co(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ks(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());co(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];co(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){_r(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new St(Ks(this.value))}}function em(t){const e=[];return _r(t.fields,(n,r)=>{const s=new Ye([n]);if(co(r)){const i=em(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new st(e,0,le.min(),le.min(),le.min(),St.empty(),0)}static newFoundDocument(e,n,r,s){return new st(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new st(e,2,n,le.min(),le.min(),St.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,le.min(),le.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.position=e,this.inclusive=n}}function Uf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=Qr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function U0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{}class Be extends tm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new j0(e,n,r):n==="array-contains"?new q0(e,r):n==="in"?new z0(e,r):n==="not-in"?new K0(e,r):n==="array-contains-any"?new W0(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $0(e,r):new H0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Qr(n,this.value)):n!==null&&Wn(this.value)===Wn(n)&&this.matchesComparison(Qr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends tm{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new en(e,n)}matches(e){return nm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function nm(t){return t.op==="and"}function rm(t){return B0(t)&&nm(t)}function B0(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function Dc(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Yr(t.value);if(rm(t))return t.filters.map(e=>Dc(e)).join(",");{const e=t.filters.map(n=>Dc(n)).join(",");return`${t.op}(${e})`}}function sm(t,e){return t instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&sm(o,s.filters[c]),!0):!1}(t,e):void ie(19439)}function im(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Yr(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(im).join(" ,")+"}"}(t):"Filter"}class j0 extends Be{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class $0 extends Be{constructor(e,n){super(e,"in",n),this.keys=om("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class H0 extends Be{constructor(e,n){super(e,"not-in",n),this.keys=om("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function om(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class q0 extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sl(n)&&ui(n.arrayValue,this.value)}}class z0 extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ui(this.value.arrayValue,n)}}class K0 extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ui(this.value.arrayValue,n)}}class W0 extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ui(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Ie=null}}function jf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new G0(t,e,n,r,s,i,o)}function Pl(t){const e=ue(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Yr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Yr(r)).join(",")),e.Ie=n}return e.Ie}function Cl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!U0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bf(t.startAt,e.startAt)&&Bf(t.endAt,e.endAt)}function Nc(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Q0(t,e,n,r,s,i,o,c){return new ca(t,e,n,r,s,i,o,c)}function kl(t){return new ca(t)}function $f(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Y0(t){return t.collectionGroup!==null}function Ws(t){const e=ue(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new $e(Ye.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Oo(i,r))}),n.has(Ye.keyField().canonicalString())||e.Ee.push(new Oo(Ye.keyField(),r))}return e.Ee}function Yt(t){const e=ue(t);return e.de||(e.de=X0(e,Ws(t))),e.de}function X0(t,e){if(t.limitType==="F")return jf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Oo(s.field,i)});const n=t.endAt?new Vo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vo(t.startAt.position,t.startAt.inclusive):null;return jf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xc(t,e,n){return new ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function la(t,e){return Cl(Yt(t),Yt(e))&&t.limitType===e.limitType}function am(t){return`${Pl(Yt(t))}|lt:${t.limitType}`}function kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>im(s)).join(", ")}]`),oa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Yr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Yr(s)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function ua(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ws(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Uf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Ws(r),s)||r.endAt&&!function(o,c,l){const h=Uf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Ws(r),s))}(t,e)}function J0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cm(t){return(e,n)=>{let r=!1;for(const s of Ws(t)){const i=Z0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Z0(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Qr(l,h):ie(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_r(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Kg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=new Ne(ne.comparator);function vn(){return eR}const lm=new Ne(ne.comparator);function Cs(...t){let e=lm;for(const n of t)e=e.insert(n.key,n);return e}function um(t){let e=lm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function or(){return Gs()}function hm(){return Gs()}function Gs(){return new yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const tR=new Ne(ne.comparator),nR=new $e(ne.comparator);function _e(...t){let e=nR;for(const n of t)e=e.add(n);return e}const rR=new $e(pe);function sR(){return rR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Po(e)?"-0":e}}function fm(t){return{integerValue:""+t}}function iR(t,e){return V0(e)?fm(e):Vl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this._=void 0}}function oR(t,e,n){return t instanceof Do?function(s,i){const o={fields:{[Qg]:{stringValue:Gg},[Xg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bl(i)&&(i=aa(i)),i&&(o.fields[Yg]=i),{mapValue:o}}(n,e):t instanceof hi?pm(t,e):t instanceof fi?gm(t,e):function(s,i){const o=dm(s,i),c=Hf(o)+Hf(s.Re);return Oc(o)&&Oc(s.Re)?fm(c):Vl(s.serializer,c)}(t,e)}function aR(t,e,n){return t instanceof hi?pm(t,e):t instanceof fi?gm(t,e):n}function dm(t,e){return t instanceof No?function(r){return Oc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Do extends ha{}class hi extends ha{constructor(e){super(),this.elements=e}}function pm(t,e){const n=mm(e);for(const r of t.elements)n.some(s=>Zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class fi extends ha{constructor(e){super(),this.elements=e}}function gm(t,e){let n=mm(e);for(const r of t.elements)n=n.filter(s=>!Zt(s,r));return{arrayValue:{values:n}}}class No extends ha{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Hf(t){return Me(t.integerValue||t.doubleValue)}function mm(t){return Sl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function cR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof hi&&s instanceof hi||r instanceof fi&&s instanceof fi?Gr(r.elements,s.elements,Zt):r instanceof No&&s instanceof No?Zt(r.Re,s.Re):r instanceof Do&&s instanceof Do}(t.transform,e.transform)}class lR{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fa{}function _m(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vm(t.key,dn.none()):new Ei(t.key,t.data,dn.none());{const n=t.data,r=St.empty();let s=new $e(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new vr(t.key,r,new Mt(s.toArray()),dn.none())}}function uR(t,e,n){t instanceof Ei?function(s,i,o){const c=s.value.clone(),l=zf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof vr?function(s,i,o){if(!lo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=zf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ym(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof Ei?function(i,o,c,l){if(!lo(i.precondition,o))return c;const h=i.value.clone(),f=Kf(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof vr?function(i,o,c,l){if(!lo(i.precondition,o))return c;const h=Kf(i.fieldTransforms,l,o),f=o.data;return f.setAll(ym(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return lo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function hR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=dm(r.transform,s||null);i!=null&&(n===null&&(n=St.empty()),n.set(r.field,i))}return n||null}function qf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gr(r,s,(i,o)=>cR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ei extends fa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vr extends fa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ym(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zf(t,e,n){const r=new Map;be(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,aR(o,c,n[s]))}return r}function Kf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,oR(i,o,e))}return r}class vm extends fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fR extends fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&uR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=_m(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Gr(this.mutations,e.mutations,(n,r)=>qf(n,r))&&Gr(this.baseMutations,e.baseMutations,(n,r)=>qf(n,r))}}class Ol{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return tR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ol(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,Ee;function mR(t){switch(t){case U.OK:return ie(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function Em(t){if(t===void 0)return yn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Ue.OK:return U.OK;case Ue.CANCELLED:return U.CANCELLED;case Ue.UNKNOWN:return U.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return U.INTERNAL;case Ue.UNAVAILABLE:return U.UNAVAILABLE;case Ue.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ue.NOT_FOUND:return U.NOT_FOUND;case Ue.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ue.ABORTED:return U.ABORTED;case Ue.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ue.DATA_LOSS:return U.DATA_LOSS;default:return ie(39323,{code:t})}}(Ee=Ue||(Ue={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new $n([4294967295,4294967295],0);function Wf(t){const e=Hg().encode(t),n=new xg;return n.update(e),new Uint8Array(n.digest())}function Gf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $n([n,r],0),new $n([s,i],0)]}class Dl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ks(`Invalid padding: ${n}`);if(r<0)throw new ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ks(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=$n.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply($n.fromNumber(r)));return s.compare(_R)===1&&(s=new $n([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Wf(e),[r,s]=Gf(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Dl(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.pe===0)return;const n=Wf(e),[r,s]=Gf(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ti.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new da(le.min(),s,new Ne(pe),vn(),_e())}}class Ti{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ti(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class Tm{constructor(e,n){this.targetId=e,this.Ce=n}}class Im{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Qf{constructor(){this.Fe=0,this.Me=Yf(),this.xe=Xe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=_e(),n=_e(),r=_e();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie(38017,{changeType:i})}}),new Ti(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Yf()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,be(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class yR{constructor(e){this.ze=e,this.je=new Map,this.He=vn(),this.Je=Gi(),this.Ye=Gi(),this.Ze=new Ne(pe)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(Nc(i))if(r===0){const o=new ne(i.path);this.tt(n,o,st.newNoDocument(o,le.min()))}else be(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const c=this.ct(e),l=c?this.lt(c,e,o):1;if(l!==0){this.st(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Kn(r).toUint8Array()}catch(l){if(l instanceof Wg)return Wr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Dl(o,s,i)}catch(l){return Wr(l instanceof ks?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.pe===0?null:c}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const c=this._t(o);if(c){if(i.current&&Nc(c.target)){const l=new ne(c.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,st.newNoDocument(l,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=_e();this.Ye.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this._t(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new da(e,n,this.Ze,this.He,r);return this.He=vn(),this.Je=Gi(),this.Ye=Gi(),this.Ze=new Ne(pe),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Qf,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new $e(pe),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new $e(pe),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Qf),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Gi(){return new Ne(ne.comparator)}function Yf(){return new Ne(ne.comparator)}const vR={asc:"ASCENDING",desc:"DESCENDING"},ER={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TR={and:"AND",or:"OR"};class IR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mc(t,e){return t.useProto3Json||oa(e)?e:{value:e}}function xo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wR(t,e){return xo(t,e.toTimestamp())}function Xt(t){return be(!!t,49232),le.fromTimestamp(function(n){const r=zn(n);return new je(r.seconds,r.nanos)}(t))}function Nl(t,e){return Lc(t,e).canonicalString()}function Lc(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Am(t){const e=Ve.fromString(t);return be(Cm(e),10190,{key:e.toString()}),e}function Fc(t,e){return Nl(t.databaseId,e.path)}function ec(t,e){const n=Am(e);if(n.get(1)!==t.databaseId.projectId)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(bm(n))}function Rm(t,e){return Nl(t.databaseId,e)}function AR(t){const e=Am(t);return e.length===4?Ve.emptyPath():bm(e)}function Uc(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bm(t){return be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Xf(t,e,n){return{name:Fc(t,e),fields:n.value.mapValue.fields}}function RR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string",58123),Xe.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Xe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?U.UNKNOWN:Em(h.code);return new te(f,h.message||"")}(o);n=new Im(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ec(t,r.document.name),i=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):le.min(),c=new St({mapValue:{fields:r.document.fields}}),l=st.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new uo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ec(t,r.document),i=r.readTime?Xt(r.readTime):le.min(),o=st.newNoDocument(s,i),c=r.removedTargetIds||[];n=new uo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ec(t,r.document),i=r.removedTargetIds||[];n=new uo([],i,s,null)}else{if(!("filter"in e))return ie(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gR(s,i),c=r.targetId;n=new Tm(c,o)}}return n}function bR(t,e){let n;if(e instanceof Ei)n={update:Xf(t,e.key,e.value)};else if(e instanceof vm)n={delete:Fc(t,e.key)};else if(e instanceof vr)n={update:Xf(t,e.key,e.data),updateMask:xR(e.fieldMask)};else{if(!(e instanceof fR))return ie(16599,{ft:e.type});n={verify:Fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Do)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof hi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof No)return{fieldPath:o.field.canonicalString(),increment:c.Re};throw ie(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie(27497)}(t,e.precondition)),n}function SR(t,e){return t&&t.length>0?(be(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Xt(s.updateTime):Xt(i);return o.isEqual(le.min())&&(o=Xt(i)),new lR(o,s.transformResults||[])}(n,e))):[]}function PR(t,e){return{documents:[Rm(t,e.path)]}}function CR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Rm(t,s);const i=function(h){if(h.length!==0)return Pm(en.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Vr(g.field),direction:OR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Mc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:n,parent:s}}function kR(t){let e=AR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Sm(p);return g instanceof en&&rm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new Oo(Or(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,oa(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,_=p.values||[];return new Vo(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new Vo(_,g)}(n.endAt)),Q0(e,s,o,i,c,"F",l,h)}function VR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Or(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Or(n.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Or(n.unaryFilter.field);return Be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Or(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(t):t.fieldFilter!==void 0?function(n){return Be.create(Or(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>Sm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(n.compositeFilter.op))}(t):ie(30097,{filter:t})}function OR(t){return vR[t]}function DR(t){return ER[t]}function NR(t){return TR[t]}function Vr(t){return{fieldPath:t.canonicalString()}}function Or(t){return Ye.fromServerFormat(t.fieldPath)}function Pm(t){return t instanceof Be?function(n){if(n.op==="=="){if(Ff(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NAN"}};if(Lf(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ff(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NAN"}};if(Lf(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vr(n.field),op:DR(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>Pm(s));return r.length===1?r[0]:{compositeFilter:{op:NR(n.op),filters:r}}}(t):ie(54877,{filter:t})}function xR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Cm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r,s,i=le.min(),o=le.min(),c=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.wt=e}}function LR(t){const e=kR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.Cn=new UR}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(qn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class UR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new $e(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},km=41943040;class _t{static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(km,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Xr(0)}static lr(){return new Xr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="LruGarbageCollector",BR=1048576;function ed([t,e],[n,r]){const s=pe(t,n);return s===0?pe(e,r):s}class jR{constructor(e){this.Er=e,this.buffer=new $e(ed),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ed(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $R{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){X(Zf,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){as(n)?X(Zf,"Ignoring IndexedDB error during garbage collection: ",n):await os(n)}await this.mr(3e5)})}}class HR{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(ia.le);const r=new jR(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Jf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jf):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Cr()<=me.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function qR(t,e){return new HR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.changes=new yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qs(r.mutation,s,Mt.empty(),je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=or();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Cs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=vn();const o=Gs(),c=function(){return Gs()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof vr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Qs(f.mutation,h,f.mutation.getFieldMask(),je.now())):o.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new KR(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Gs();let s=new Ne((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Mt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=hm();f.forEach(g=>{if(!i.has(g)){const _=_m(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Y0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(or());let c=ai,l=i;return o.next(h=>M.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,_e())).next(f=>({batchId:c,changes:um(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let s=Cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Cs();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,l=>{const h=function(p,g){return new ca(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,st.newInvalidDocument(f)))});let c=Cs();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Qs(f.mutation,h,Mt.empty(),je.now()),ua(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return M.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:LR(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.overlays=new Ne(ne.comparator),this.Qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=or();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=or(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ne((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=or(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=or(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return M.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pR(n,r));let i=this.Qr.get(n);i===void 0&&(i=_e(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.$r=new $e(qe.Ur),this.Kr=new $e(qe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new qe(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new qe(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new ne(new Ve([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new ne(new Ve([])),r=new qe(n,e),s=new qe(n,e+1);let i=_e();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return ne.comparator(e.key,n.key)||pe(e.Zr,n.Zr)}static Wr(e,n){return pe(e.Zr,n.Zr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new $e(qe.Ur)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Xr=this.Xr.add(new qe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Rl:this.nr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const c=this.ei(o.Zr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(pe);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],c=>{r=r.add(c.Zr)})}),M.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new qe(new ne(i),0);let c=new $e(pe);return this.Xr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Zr)),!0)},o),M.resolve(this.ni(c))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return M.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new qe(n,0),s=this.Xr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.ii=e,this.docs=function(){return new Ne(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=vn();const o=n.path,c=new ne(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||S0(b0(f),r)<=0||(s.has(f.key)||ua(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie(9500)}si(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZR(this)}getSize(e){return M.resolve(this.size)}}class ZR extends zR{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.persistence=e,this.oi=new yr(n=>Pl(n),Cl),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this._i=0,this.ai=new xl,this.targetCount=0,this.ui=Xr.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),M.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Xr(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Tr(n),M.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.ci={},this.overlays={},this.li=new ia(0),this.hi=!1,this.hi=!0,this.Pi=new YR,this.referenceDelegate=e(this),this.Ti=new eb(this),this.indexManager=new FR,this.remoteDocumentCache=function(s){return new JR(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new MR(n),this.Ei=new GR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new XR(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new tb(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return M.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class tb extends C0{constructor(e){super(),this.currentSequenceNumber=e}}class Ml{constructor(e){this.persistence=e,this.Vi=new xl,this.mi=null}static fi(e){return new Ml(e)}get gi(){if(this.mi)return this.mi;throw ie(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.gi,r=>{const s=ne.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return M.or([()=>M.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Mo{constructor(e,n){this.persistence=e,this.yi=new yr(r=>O0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=qR(this,n)}static fi(e,n){return new Mo(e,n)}di(){}Ai(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return M.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ao(e.data.value)),n}Dr(e,n,r){return M.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ll(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return FT()?8:k0(ct())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.bs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new nb;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.fs)return this.Ds(e,n,o,c.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(Cr()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),M.resolve()):(Cr()<=me.DEBUG&&X("QueryEngine","Query:",kr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Cr()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):M.resolve())}ws(e,n){if($f(n))return M.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=xc(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.ys.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.vs(n,c);return this.Cs(n,h,o,l.readTime)?this.ws(e,xc(n,null,"F")):this.Fs(e,h,n,l)}))})))}bs(e,n,r,s){return $f(n)||s.isEqual(le.min())?M.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(Cr()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),kr(n)),this.Fs(e,o,n,R0(s,ai)).next(c=>c))})}vs(e,n){let r=new $e(cm(e));return n.forEach((s,i)=>{ua(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Cr()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",kr(n)),this.ys.getDocumentsMatchingQuery(e,n,qn.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="LocalStore",sb=3e8;class ib{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Ne(pe),this.Os=new yr(i=>Pl(i),Cl),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WR(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function ob(t,e,n,r){return new ib(t,e,n,r)}async function Om(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({ks:h,removedBatchIds:o,addedBatchIds:c}))})})}function ab(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let _=M.resolve();return g.forEach(C=>{_=_.next(()=>f.getEntry(l,C)).next(k=>{const O=h.docVersions.get(C);be(O!==null,48541),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Dm(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function cb(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ti.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Xe.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(k,O,j){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=sb?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,_,f)&&c.push(n.Ti.updateTargetData(i,_))});let l=vn(),h=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(lb(i,o,e.documentUpdates).next(f=>{l=f.qs,h=f.Qs})),!r.isEqual(le.min())){const f=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return M.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.xs=s,i))}function lb(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=vn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(Fl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{qs:o,Qs:s}})}function ub(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Rl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hb(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new Mn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function Bc(t,e,n){const r=ue(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!as(o))throw o;X(Fl,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function td(t,e,n){const r=ue(t);let s=le.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=ue(l),g=p.Os.get(f);return g!==void 0?M.resolve(p.xs.get(g)):p.Ti.getTargetData(h,f)}(r,o,Yt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:_e())).next(c=>(fb(r,J0(e),c),{documents:c,$s:i})))}function fb(t,e,n){let r=t.Ns.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class nd{constructor(){this.activeTargetIds=sR()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class db{constructor(){this.xo=new nd,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new nd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="ConnectivityMonitor";class sd{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){X(rd,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){X(rd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi=null;function jc(){return Qi===null?Qi=function(){return 268435456+Math.round(2147483648*Math.random())}():Qi++,"0x"+Qi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="RestConnection",gb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mb{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Co?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=jc(),c=this.jo(e,n.toUriEncodedString());X(tc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(l,s,i);const{host:h}=new URL(c),f=ts(h);return this.Jo(e,c,l,r,f).then(p=>(X(tc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Wr(tc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+is}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=gb[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class yb extends mb{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=jc();return new Promise((c,l)=>{const h=new Mg;h.setWithCredentials(!0),h.listenOnce(Lg.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case oo.NO_ERROR:const p=h.getResponseJson();X(tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case oo.TIMEOUT:X(tt,`RPC '${e}' ${o} timed out`),l(new te(U.DEADLINE_EXCEEDED,"Request time out"));break;case oo.HTTP_ERROR:const g=h.getStatus();if(X(tt,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_?.error;if(C&&C.status&&C.message){const k=function(j){const F=j.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(F)>=0?F:U.UNKNOWN}(C.status);l(new te(k,C.message))}else l(new te(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new te(U.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{h_:e,streamId:o,P_:h.getLastErrorCode(),T_:h.getLastError()})}}finally{X(tt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);X(tt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}I_(e,n,r){const s=jc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Bg(),c=Ug(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(tt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.E_(p);let g=!1,_=!1;const C=new _b({Zo:O=>{_?X(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(X(tt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(tt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Xo:()=>p.close()}),k=(O,j,F)=>{O.listen(j,$=>{try{F($)}catch(H){setTimeout(()=>{throw H},0)}})};return k(p,Ps.EventType.OPEN,()=>{_||(X(tt,`RPC '${e}' stream ${s} transport opened.`),C.__())}),k(p,Ps.EventType.CLOSE,()=>{_||(_=!0,X(tt,`RPC '${e}' stream ${s} transport closed`),C.u_(),this.d_(p))}),k(p,Ps.EventType.ERROR,O=>{_||(_=!0,Wr(tt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),C.u_(new te(U.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ps.EventType.MESSAGE,O=>{var j;if(!_){const F=O.data[0];be(!!F,16349);const $=F,H=$?.error||((j=$[0])===null||j===void 0?void 0:j.error);if(H){X(tt,`RPC '${e}' stream ${s} received error:`,H);const ce=H.status;let ae=function(E){const A=Ue[E];if(A!==void 0)return Em(A)}(ce),w=H.message;ae===void 0&&(ae=U.INTERNAL,w="Unknown error status: "+ce+" with message "+H.message),_=!0,C.u_(new te(ae,w)),p.close()}else X(tt,`RPC '${e}' stream ${s} received:`,F),C.c_(F)}}),k(c,Fg.STAT_EVENT,O=>{O.stat===Cc.PROXY?X(tt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Cc.NOPROXY&&X(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.a_()},0),C}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function nc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){return new IR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="PersistentStream";class xm{constructor(e,n,r,s,i,o,c,l){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Nm(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{e(()=>{const s=new te(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return X(id,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(X(id,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vb extends xm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=RR(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?Xt(o.readTime):le.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=Uc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Nc(l)?{documents:PR(i,l)}:{query:CR(i,l).gt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=wm(i,o.resumeToken);const h=Mc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(le.min())>0){c.readTime=xo(i,o.snapshotVersion.toTimestamp());const h=Mc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=VR(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=Uc(this.serializer),n.removeTarget=e,this.Q_(n)}}class Eb extends xm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=SR(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=Uc(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bR(this.serializer,r))};this.Q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{}class Ib extends Tb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Lc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(U.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Yo(e,Lc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(U.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class wb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(yn(n),this.ua=!1):X("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="RemoteStore";class Ab{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(o=>{r.enqueueAndForget(async()=>{Er(this)&&(X(gr,"Restarting streams for network reachability change."),await async function(l){const h=ue(l);h.da.add(4),await Ii(h),h.Va.set("Unknown"),h.da.delete(4),await ga(h)}(this))})}),this.Va=new wb(r,s)}}async function ga(t){if(Er(t))for(const e of t.Aa)await e(!0)}async function Ii(t){for(const e of t.Aa)await e(!1)}function Mm(t,e){const n=ue(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),$l(n)?jl(n):cs(n).N_()&&Bl(n,e))}function Ul(t,e){const n=ue(t),r=cs(n);n.Ea.delete(e),r.N_()&&Lm(n,e),n.Ea.size===0&&(r.N_()?r.k_():Er(n)&&n.Va.set("Unknown"))}function Bl(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}cs(t).Z_(e)}function Lm(t,e){t.ma.Ke(e),cs(t).X_(e)}function jl(t){t.ma=new yR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),cs(t).start(),t.Va.ca()}function $l(t){return Er(t)&&!cs(t).O_()&&t.Ea.size>0}function Er(t){return ue(t).da.size===0}function Fm(t){t.ma=void 0}async function Rb(t){t.Va.set("Online")}async function bb(t){t.Ea.forEach((e,n)=>{Bl(t,e)})}async function Sb(t,e){Fm(t),$l(t)?(t.Va.Pa(e),jl(t)):t.Va.set("Unknown")}async function Pb(t,e,n){if(t.Va.set("Online"),e instanceof Im&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.ma.removeTarget(c))}(t,e)}catch(r){X(gr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lo(t,r)}else if(e instanceof uo?t.ma.Xe(e):e instanceof Tm?t.ma.ot(e):t.ma.nt(e),!n.isEqual(le.min()))try{const r=await Dm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.ma.It(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ea.get(l);if(!f)return;i.Ea.set(l,f.withResumeToken(Xe.EMPTY_BYTE_STRING,f.snapshotVersion)),Lm(i,l);const p=new Mn(f.target,l,h,f.sequenceNumber);Bl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(gr,"Failed to raise snapshot:",r),await Lo(t,r)}}async function Lo(t,e,n){if(!as(e))throw e;t.da.add(1),await Ii(t),t.Va.set("Offline"),n||(n=()=>Dm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(gr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await ga(t)})}function Um(t,e){return e().catch(n=>Lo(t,n,e))}async function ma(t){const e=ue(t),n=Gn(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Rl;for(;Cb(e);)try{const s=await ub(e.localStore,r);if(s===null){e.Ia.length===0&&n.k_();break}r=s.batchId,kb(e,s)}catch(s){await Lo(e,s)}Bm(e)&&jm(e)}function Cb(t){return Er(t)&&t.Ia.length<10}function kb(t,e){t.Ia.push(e);const n=Gn(t);n.N_()&&n.ea&&n.ta(e.mutations)}function Bm(t){return Er(t)&&!Gn(t).O_()&&t.Ia.length>0}function jm(t){Gn(t).start()}async function Vb(t){Gn(t).ia()}async function Ob(t){const e=Gn(t);for(const n of t.Ia)e.ta(n.mutations)}async function Db(t,e,n){const r=t.Ia.shift(),s=Ol.from(r,e,n);await Um(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ma(t)}async function Nb(t,e){e&&Gn(t).ea&&await async function(r,s){if(function(o){return mR(o)&&o!==U.ABORTED}(s.code)){const i=r.Ia.shift();Gn(r).L_(),await Um(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ma(r)}}(t,e),Bm(t)&&jm(t)}async function od(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),X(gr,"RemoteStore received new credentials");const r=Er(n);n.da.add(3),await Ii(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await ga(n)}async function xb(t,e){const n=ue(t);e?(n.da.delete(2),await ga(n)):e||(n.da.add(2),await Ii(n),n.Va.set("Unknown"))}function cs(t){return t.fa||(t.fa=function(n,r,s){const i=ue(n);return i.oa(),new vb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:Rb.bind(null,t),n_:bb.bind(null,t),i_:Sb.bind(null,t),Y_:Pb.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),$l(t)?jl(t):t.Va.set("Unknown")):(await t.fa.stop(),Fm(t))})),t.fa}function Gn(t){return t.ga||(t.ga=function(n,r,s){const i=ue(n);return i.oa(),new Eb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:Vb.bind(null,t),i_:Nb.bind(null,t),na:Ob.bind(null,t),ra:Db.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await ma(t)):(await t.ga.stop(),t.Ia.length>0&&(X(gr,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Hl(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ql(t,e){if(yn("AsyncQueue",`${e}: ${t}`),as(t))return new te(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{static emptySet(e){return new Br(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Cs(),this.sortedSet=new Ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Br)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Br;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.pa=new Ne(ne.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):ie(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Jr{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Jr(e,n,Br.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class Lb{constructor(){this.queries=cd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=cd(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new te(U.ABORTED,"Firestore shutting down"))}}function cd(){return new yr(t=>am(t),la)}async function Fb(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new Mb,r=e.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=ql(o,`Initialization of query '${kr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&zl(n)}async function Ub(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Bb(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Ma(s)&&(r=!0);o.ba=s}}r&&zl(n)}function jb(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function zl(t){t.Ca.forEach(e=>{e.next()})}var $c,ld;(ld=$c||($c={})).xa="default",ld.Cache="cache";class $b{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Jr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=Jr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==$c.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.key=e}}class Hm{constructor(e){this.key=e}}class Hb{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=_e(),this.mutatedKeys=_e(),this.Za=cm(e),this.Xa=new Br(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new ad,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=ua(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;g&&_?g.data.isEqual(_.data)?C!==k&&(r.track({type:3,doc:_}),O=!0):this.ru(g,_)||(r.track({type:2,doc:_}),O=!0,(l&&this.Za(_,l)>0||h&&this.Za(_,h)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),O=!0):g&&!_&&(r.track({type:1,doc:g}),O=!0,(l||h)&&(c=!0)),O&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Xa:o,nu:r,Cs:c,mutatedKeys:i}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((f,p)=>function(_,C){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Vt:O})}};return k(_)-k(C)}(f.type,p.type)||this.Za(f.doc,p.doc)),this.iu(r),s=s!=null&&s;const c=n&&!s?this.su():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Ja;return this.Ja=l,o.length!==0||h?{snapshot:new Jr(this.query,e.Xa,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:c}:{ou:c}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new ad,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=_e(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Hm(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new $m(r))}),n}au(e){this.Ha=e.$s,this.Ya=_e();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return Jr.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Kl="SyncEngine";class qb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zb{constructor(e){this.key=e,this.cu=!1}}class Kb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new yr(c=>am(c),la),this.Pu=new Map,this.Tu=new Set,this.Iu=new Ne(ne.comparator),this.Eu=new Map,this.du=new xl,this.Au={},this.Ru=new Map,this.Vu=Xr.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function Wb(t,e,n=!0){const r=Qm(t);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await qm(r,e,n,!0),s}async function Gb(t,e){const n=Qm(t);await qm(n,e,!0,!1)}async function qm(t,e,n,r){const s=await hb(t.localStore,Yt(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Qb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Mm(t.remoteStore,s),c}async function Qb(t,e,n,r,s){t.fu=(p,g,_)=>async function(k,O,j,F){let $=O.view.tu(j);$.Cs&&($=await td(k.localStore,O.query,!1).then(({documents:w})=>O.view.tu(w,$)));const H=F&&F.targetChanges.get(O.targetId),ce=F&&F.targetMismatches.get(O.targetId)!=null,ae=O.view.applyChanges($,k.isPrimaryClient,H,ce);return hd(k,O.targetId,ae.ou),ae.snapshot}(t,p,g,_);const i=await td(t.localStore,e,!0),o=new Hb(e,i.$s),c=o.tu(i.documents),l=Ti.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);hd(t,n,h.ou);const f=new qb(e,n,o);return t.hu.set(e,f),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),h.snapshot}async function Yb(t,e,n){const r=ue(t),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(o=>!la(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ul(r.remoteStore,s.targetId),Hc(r,s.targetId)}).catch(os)):(Hc(r,s.targetId),await Bc(r.localStore,s.targetId,!0))}async function Xb(t,e){const n=ue(t),r=n.hu.get(e),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ul(n.remoteStore,r.targetId))}async function Jb(t,e,n){const r=iS(t);try{const s=await function(o,c){const l=ue(o),h=je.now(),f=c.reduce((_,C)=>_.add(C.key),_e());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=vn(),k=_e();return l.Bs.getEntries(_,f).next(O=>{C=O,C.forEach((j,F)=>{F.isValidDocument()||(k=k.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,C)).next(O=>{p=O;const j=[];for(const F of c){const $=hR(F,p.get(F.key).overlayedDocument);$!=null&&j.push(new vr(F.key,$,em($.value.mapValue),dn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,j,c)}).next(O=>{g=O;const j=O.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(_,O.batchId,j)})}).then(()=>({batchId:g.batchId,changes:um(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Au[o.currentUser.toKey()];h||(h=new Ne(pe)),h=h.insert(c,l),o.Au[o.currentUser.toKey()]=h}(r,s.batchId,n),await wi(r,s.changes),await ma(r.remoteStore)}catch(s){const i=ql(s,"Failed to persist write");n.reject(i)}}async function zm(t,e){const n=ue(t);try{const r=await cb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.cu=!0:s.modifiedDocuments.size>0?be(o.cu,14607):s.removedDocuments.size>0&&(be(o.cu,42227),o.cu=!1))}),await wi(n,r,e)}catch(r){await os(r)}}function ud(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,o)=>{const c=o.view.Fa(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ue(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.Sa)g.Fa(c)&&(h=!0)}),h&&zl(l)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zb(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Ne(ne.comparator);o=o.insert(i,st.newNoDocument(i,le.min()));const c=_e().add(i),l=new da(le.min(),new Map,new Ne(pe),o,c);await zm(r,l),r.Iu=r.Iu.remove(i),r.Eu.delete(e),Wl(r)}else await Bc(r.localStore,e,!1).then(()=>Hc(r,e,n)).catch(os)}async function eS(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await ab(n.localStore,e);Wm(n,r,null),Km(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wi(n,s)}catch(s){await os(s)}}async function tS(t,e,n){const r=ue(t);try{const s=await function(o,c){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(be(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Wm(r,e,n),Km(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wi(r,s)}catch(s){await os(s)}}function Km(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function Wm(t,e,n){const r=ue(t);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function Hc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||Gm(t,r)})}function Gm(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(Ul(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),Wl(t))}function hd(t,e,n){for(const r of n)r instanceof $m?(t.du.addReference(r.key,e),nS(t,r)):r instanceof Hm?(X(Kl,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||Gm(t,r.key)):ie(19791,{pu:r})}function nS(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(X(Kl,"New document in limbo: "+n),t.Tu.add(r),Wl(t))}function Wl(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new ne(Ve.fromString(e)),r=t.Vu.next();t.Eu.set(r,new zb(n)),t.Iu=t.Iu.insert(n,r),Mm(t.remoteStore,new Mn(Yt(kl(n.path)),r,"TargetPurposeLimboResolution",ia.le))}}async function wi(t,e,n){const r=ue(t),s=[],i=[],o=[];r.hu.isEmpty()||(r.hu.forEach((c,l)=>{o.push(r.fu(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n?.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Ll.Rs(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.lu.Y_(s),await async function(l,h){const f=ue(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.ds,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>M.forEach(g.As,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!as(p))throw p;X(Fl,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.xs.get(g),C=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(C);f.xs=f.xs.insert(g,k)}}}(r.localStore,i))}async function rS(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){X(Kl,"User change. New user:",e.toKey());const r=await Om(n.localStore,e);n.currentUser=e,function(i,o){i.Ru.forEach(c=>{c.forEach(l=>{l.reject(new te(U.CANCELLED,o))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wi(n,r.ks)}}function sS(t,e){const n=ue(t),r=n.Eu.get(e);if(r&&r.cu)return _e().add(r.key);{let s=_e();const i=n.Pu.get(e);if(!i)return s;for(const o of i){const c=n.hu.get(o);s=s.unionWith(c.view.eu)}return s}}function Qm(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zb.bind(null,e),e.lu.Y_=Bb.bind(null,e.eventManager),e.lu.gu=jb.bind(null,e.eventManager),e}function iS(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tS.bind(null,e),e}class Fo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return ob(this.persistence,new rb,e.initialUser,this.serializer)}Su(e){return new Vm(Ml.fi,this.serializer)}bu(e){return new db}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fo.provider={build:()=>new Fo};class oS extends Fo{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){be(this.persistence.referenceDelegate instanceof Mo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $R(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new Vm(r=>Mo.fi(r,n),this.serializer)}}class qc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ud(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rS.bind(null,this.syncEngine),await xb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Lb}()}createDatastore(e){const n=pa(e.databaseInfo.databaseId),r=function(i){return new yb(i)}(e.databaseInfo);return function(i,o,c,l){return new Ib(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new Ab(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>ud(this.syncEngine,n,0),function(){return sd.C()?new sd:new pb}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new Kb(s,i,o,c,l,h);return f&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);X(gr,"RemoteStore shutting down."),i.da.add(5),await Ii(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}qc.provider={build:()=>new qc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="FirestoreClient";class cS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=qg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(Qn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(Qn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ql(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rc(t,e){t.asyncQueue.verifyOperationInProgress(),X(Qn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Om(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function fd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lS(t);X(Qn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>od(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>od(e.remoteStore,s)),t._onlineComponents=e}async function lS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(Qn,"Using user provided OfflineComponentProvider");try{await rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await rc(t,new Fo)}}else X(Qn,"Using default OfflineComponentProvider"),await rc(t,new oS(void 0));return t._offlineComponents}async function Ym(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(Qn,"Using user provided OnlineComponentProvider"),await fd(t,t._uninitializedComponentsProvider._online)):(X(Qn,"Using default OnlineComponentProvider"),await fd(t,new qc))),t._onlineComponents}function uS(t){return Ym(t).then(e=>e.syncEngine)}async function dd(t){const e=await Ym(t),n=e.eventManager;return n.onListen=Wb.bind(null,e.syncEngine),n.onUnlisten=Yb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Gb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Xb.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e,n){if(!n)throw new te(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hS(t,e,n,r){if(e===!0&&r===!0)throw new te(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gd(t){if(!ne.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function md(t){if(ne.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function Ys(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gl(t);throw new te(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="firestore.googleapis.com",_d=!0;class yd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zm,this.ssl=_d}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:_d;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=km;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BR)throw new te(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _a{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new m0;switch(r.type){case"firstParty":return new E0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pd.get(n);r&&(X("ComponentProvider","Removing Datastore"),pd.delete(n),r.terminate())}(this),Promise.resolve()}}function fS(t,e,n,r={}){var s;t=Ys(t,_a);const i=ts(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(Gp(`https://${l}`),Qp("Firestore",!0)),o.host!==Zm&&o.host!==l&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!hr(h,c)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=nt.MOCK_USER;else{f=CT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new te(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new nt(g)}t._authCredentials=new _0(new $g(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ya(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Hn extends ya{constructor(e,n,r){super(e,n,kl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new ne(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function HS(t,e,...n){if(t=yt(t),Jm("collection","path",e),t instanceof _a){const r=Ve.fromString(e,...n);return md(r),new Hn(t,null,r)}{if(!(t instanceof Ct||t instanceof Hn))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return md(r),new Hn(t.firestore,null,r)}}function dS(t,e,...n){if(t=yt(t),arguments.length===1&&(e=qg.newId()),Jm("doc","path",e),t instanceof _a){const r=Ve.fromString(e,...n);return gd(r),new Ct(t,null,new ne(r))}{if(!(t instanceof Ct||t instanceof Hn))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return gd(r),new Ct(t.firestore,t instanceof Hn?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="AsyncQueue";class Ed{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Nm(this,"async_queue_retry"),this.rc=()=>{const r=nc();r&&X(vd,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=nc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new lr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!as(e))throw e;X(vd,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,yn("INTERNAL UNHANDLED ERROR: ",Td(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const s=Hl.createAndSchedule(this,e,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&ie(47125,{cc:Td(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function Td(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Uo extends _a{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ed,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ed(e),this._firestoreClient=void 0,await e}}}function pS(t,e){const n=typeof t=="object"?t:Zp(),r=typeof t=="string"?t:Co,s=pl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ST("firestore");i&&fS(s,...i)}return s}function e_(t){if(t._terminated)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gS(t),t._firestoreClient}function gS(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new x0(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Xm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new cS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zr(Xe.fromBase64String(e))}catch(n){throw new te(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zr(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=/^__.*__$/;class _S{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ei(e,this.data,n,this.fieldTransforms)}}function n_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{Ic:t})}}class Jl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Jl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Bo(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(n_(this.Ic)&&mS.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class yS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pa(e)}bc(e,n,r,s=!1){return new Jl({Ic:e,methodName:n,wc:r,path:Ye.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vS(t){const e=t._freezeSettings(),n=pa(t._databaseId);return new yS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ES(t,e,n,r,s,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,s);o_("Data must be an object, but it was:",o,r);const c=s_(r,o);let l,h;if(i.merge)l=new Mt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=TS(e,p,n);if(!o.contains(g))throw new te(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);wS(f,g)||f.push(g)}l=new Mt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new _S(new St(c),l,h)}function r_(t,e){if(i_(t=yt(t)))return o_("Unsupported field value:",e,t),s_(t,e);if(t instanceof t_)return function(r,s){if(!n_(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=r_(c,s.fc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=je.fromDate(r);return{timestampValue:xo(s.serializer,i)}}if(r instanceof je){const i=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xo(s.serializer,i)}}if(r instanceof Yl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zr)return{bytesValue:wm(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xl)return function(o,c){return{mapValue:{fields:{[Jg]:{stringValue:Zg},[ko]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.gc("VectorValues must only contain numeric values.");return Vl(c.serializer,h)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${Gl(r)}`)}(t,e)}function s_(t,e){const n={};return Kg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(t,(r,s)=>{const i=r_(s,e.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function i_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Yl||t instanceof Zr||t instanceof Ct||t instanceof t_||t instanceof Xl)}function o_(t,e,n){if(!i_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Gl(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function TS(t,e,n){if((e=yt(e))instanceof Ql)return e._internalPath;if(typeof e=="string")return a_(t,e);throw Bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const IS=new RegExp("[~\\*/\\[\\]]");function a_(t,e,n){if(e.search(IS)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ql(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new te(U.INVALID_ARGUMENT,c+t+l)}function wS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(l_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AS extends c_{data(){return super.data()}}function l_(t,e){return typeof e=="string"?a_(t,e):e instanceof Ql?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bS{convertValue(e,n="none"){switch(Wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Kn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _r(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ko].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Me(o.doubleValue));return new Xl(i)}convertGeoPoint(e){return new Yl(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=aa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ci(e));default:return null}}convertTimestamp(e){const n=zn(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);be(Cm(r),9688,{name:e});const s=new li(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class u_ extends c_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(l_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ho extends u_{data(e={}){return super.data(e)}}class PS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ho(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new ho(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ho(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:CS(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}class h_ extends bS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function qS(t,e){const n=Ys(t.firestore,Uo),r=dS(t),s=SS(t.converter,e);return kS(n,[ES(vS(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then(()=>r)}function zS(t,...e){var n,r,s;t=yt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Id(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Id(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,f;if(t instanceof Ct)h=Ys(t.firestore,Uo),f=kl(t._key.path),l={next:p=>{e[o]&&e[o](VS(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Ys(t,ya);h=Ys(p.firestore,Uo),f=p._query;const g=new h_(h);l={next:_=>{e[o]&&e[o](new PS(h,g,p,_))},error:e[o+1],complete:e[o+2]},RS(t._query)}return function(g,_,C,k){const O=new aS(k),j=new $b(_,O,C);return g.asyncQueue.enqueueAndForget(async()=>Fb(await dd(g),j)),()=>{O.xu(),g.asyncQueue.enqueueAndForget(async()=>Ub(await dd(g),j))}}(e_(h),f,c,l)}function kS(t,e){return function(r,s){const i=new lr;return r.asyncQueue.enqueueAndForget(async()=>Jb(await uS(r),s,i)),i.promise}(e_(t),e)}function VS(t,e,n){const r=n.docs.get(e._key),s=new h_(t);return new u_(t,s,e._key,r,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){is=s})(ns),zr(new fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Uo(new y0(r.getProvider("auth-internal")),new T0(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new li(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Bn(Rf,bf,e),Bn(Rf,bf,"esm2017")})();const OS={apiKey:"AIzaSyAtiqUAlEeGRNRCPmyvNycemyXQqKIJjrk",authDomain:"agenda-ipst.firebaseapp.com",projectId:"agenda-ipst",storageBucket:"agenda-ipst.firebasestorage.app",messagingSenderId:"684948026013",appId:"1:684948026013:web:e26acd5e09a86b0516da74"},f_=Jp(OS),DS=p0(f_),KS=pS(f_),NS={class:"login-container mt-4"},xS={class:"p-5"},MS={__name:"LoginView",setup(t){const e=fo(""),n=fo(""),r=dT(),s=async()=>{try{await tA(DS,e.value,n.value),r.push("/calendar")}catch(i){alert("Error: "+i.message)}};return(i,o)=>(Tp(),vv("div",NS,[on("div",xS,[o[2]||(o[2]=on("h2",{class:"mb-3"},"Iniciar Sesión",-1)),Qu(on("input",{class:"form-control mb-2",onKeypress:Rh(s,["enter"]),"onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c),placeholder:"Correo"},null,544),[[Ah,e.value]]),Qu(on("input",{class:"form-control mb-2",onKeypress:Rh(s,["enter"]),"onUpdate:modelValue":o[1]||(o[1]=c=>n.value=c),type:"password",placeholder:"Contraseña"},null,544),[[Ah,n.value]]),on("button",{class:"btn btn-primary",onClick:s},"Entrar")]),o[3]||(o[3]=on("div",{class:"background"},[on("img",{src:yT,alt:"",class:"img-login"})],-1))]))}},LS=hT({history:jE("/plata-ipst"),routes:[{path:"/",name:"login",component:MS},{path:"/calendar",name:"calendar",component:()=>_T(()=>import("./CalendarView-n7nk4Scz.js"),[])}]}),Zl=oE(pT);Zl.use(uE());Zl.use(LS);Zl.mount("#app");export{cn as F,FS as T,KS as a,zS as b,HS as c,ep as d,Ev as e,Tp as f,dT as g,bp as h,US as i,vv as j,on as k,Pt as l,wv as m,DS as n,Dy as o,BS as p,Qu as q,fo as r,jS as s,qS as t,cr as u,Ah as v,by as w};
