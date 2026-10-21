function He(r,a){for(var o=0;o<a.length;o++){const u=a[o];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in r)){const v=Object.getOwnPropertyDescriptor(u,c);v&&Object.defineProperty(r,c,v.get?v:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}function Ue(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var se={exports:{}},y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=Symbol.for("react.element"),We=Symbol.for("react.portal"),Ze=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Qe=Symbol.for("react.profiler"),Xe=Symbol.for("react.provider"),Ke=Symbol.for("react.context"),Je=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),er=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),ne=Symbol.iterator;function tr(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ce=Object.assign,ue={};function q(r,a,o){this.props=r,this.context=a,this.refs=ue,this.updater=o||le}q.prototype.isReactComponent={};q.prototype.setState=function(r,a){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,a,"setState")};q.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function he(){}he.prototype=q.prototype;function Z(r,a,o){this.props=r,this.context=a,this.refs=ue,this.updater=o||le}var G=Z.prototype=new he;G.constructor=Z;ce(G,q.prototype);G.isPureReactComponent=!0;var oe=Array.isArray,de=Object.prototype.hasOwnProperty,Q={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function fe(r,a,o){var u,c={},v=null,w=null;if(a!=null)for(u in a.ref!==void 0&&(w=a.ref),a.key!==void 0&&(v=""+a.key),a)de.call(a,u)&&!ye.hasOwnProperty(u)&&(c[u]=a[u]);var b=arguments.length-2;if(b===1)c.children=o;else if(1<b){for(var k=Array(b),_=0;_<b;_++)k[_]=arguments[_+2];c.children=k}if(r&&r.defaultProps)for(u in b=r.defaultProps,b)c[u]===void 0&&(c[u]=b[u]);return{$$typeof:F,type:r,key:v,ref:w,props:c,_owner:Q.current}}function ar(r,a){return{$$typeof:F,type:r.type,key:a,ref:r.ref,props:r.props,_owner:r._owner}}function X(r){return typeof r=="object"&&r!==null&&r.$$typeof===F}function nr(r){var a={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(o){return a[o]})}var ie=/\/+/g;function W(r,a){return typeof r=="object"&&r!==null&&r.key!=null?nr(""+r.key):a.toString(36)}function $(r,a,o,u,c){var v=typeof r;(v==="undefined"||v==="boolean")&&(r=null);var w=!1;if(r===null)w=!0;else switch(v){case"string":case"number":w=!0;break;case"object":switch(r.$$typeof){case F:case We:w=!0}}if(w)return w=r,c=c(w),r=u===""?"."+W(w,0):u,oe(c)?(o="",r!=null&&(o=r.replace(ie,"$&/")+"/"),$(c,a,o,"",function(_){return _})):c!=null&&(X(c)&&(c=ar(c,o+(!c.key||w&&w.key===c.key?"":(""+c.key).replace(ie,"$&/")+"/")+r)),a.push(c)),1;if(w=0,u=u===""?".":u+":",oe(r))for(var b=0;b<r.length;b++){v=r[b];var k=u+W(v,b);w+=$(v,a,o,k,c)}else if(k=tr(r),typeof k=="function")for(r=k.call(r),b=0;!(v=r.next()).done;)v=v.value,k=u+W(v,b++),w+=$(v,a,o,k,c);else if(v==="object")throw a=String(r),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return w}function B(r,a,o){if(r==null)return r;var u=[],c=0;return $(r,u,"","",function(v){return a.call(o,v,c++)}),u}function or(r){if(r._status===-1){var a=r._result;a=a(),a.then(function(o){(r._status===0||r._status===-1)&&(r._status=1,r._result=o)},function(o){(r._status===0||r._status===-1)&&(r._status=2,r._result=o)}),r._status===-1&&(r._status=0,r._result=a)}if(r._status===1)return r._result.default;throw r._result}var j={current:null},V={transition:null},ir={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:V,ReactCurrentOwner:Q};function pe(){throw Error("act(...) is not supported in production builds of React.")}y.Children={map:B,forEach:function(r,a,o){B(r,function(){a.apply(this,arguments)},o)},count:function(r){var a=0;return B(r,function(){a++}),a},toArray:function(r){return B(r,function(a){return a})||[]},only:function(r){if(!X(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};y.Component=q;y.Fragment=Ze;y.Profiler=Qe;y.PureComponent=Z;y.StrictMode=Ge;y.Suspense=Ye;y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ir;y.act=pe;y.cloneElement=function(r,a,o){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var u=ce({},r.props),c=r.key,v=r.ref,w=r._owner;if(a!=null){if(a.ref!==void 0&&(v=a.ref,w=Q.current),a.key!==void 0&&(c=""+a.key),r.type&&r.type.defaultProps)var b=r.type.defaultProps;for(k in a)de.call(a,k)&&!ye.hasOwnProperty(k)&&(u[k]=a[k]===void 0&&b!==void 0?b[k]:a[k])}var k=arguments.length-2;if(k===1)u.children=o;else if(1<k){b=Array(k);for(var _=0;_<k;_++)b[_]=arguments[_+2];u.children=b}return{$$typeof:F,type:r.type,key:c,ref:v,props:u,_owner:w}};y.createContext=function(r){return r={$$typeof:Ke,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:Xe,_context:r},r.Consumer=r};y.createElement=fe;y.createFactory=function(r){var a=fe.bind(null,r);return a.type=r,a};y.createRef=function(){return{current:null}};y.forwardRef=function(r){return{$$typeof:Je,render:r}};y.isValidElement=X;y.lazy=function(r){return{$$typeof:rr,_payload:{_status:-1,_result:r},_init:or}};y.memo=function(r,a){return{$$typeof:er,type:r,compare:a===void 0?null:a}};y.startTransition=function(r){var a=V.transition;V.transition={};try{r()}finally{V.transition=a}};y.unstable_act=pe;y.useCallback=function(r,a){return j.current.useCallback(r,a)};y.useContext=function(r){return j.current.useContext(r)};y.useDebugValue=function(){};y.useDeferredValue=function(r){return j.current.useDeferredValue(r)};y.useEffect=function(r,a){return j.current.useEffect(r,a)};y.useId=function(){return j.current.useId()};y.useImperativeHandle=function(r,a,o){return j.current.useImperativeHandle(r,a,o)};y.useInsertionEffect=function(r,a){return j.current.useInsertionEffect(r,a)};y.useLayoutEffect=function(r,a){return j.current.useLayoutEffect(r,a)};y.useMemo=function(r,a){return j.current.useMemo(r,a)};y.useReducer=function(r,a,o){return j.current.useReducer(r,a,o)};y.useRef=function(r){return j.current.useRef(r)};y.useState=function(r){return j.current.useState(r)};y.useSyncExternalStore=function(r,a,o){return j.current.useSyncExternalStore(r,a,o)};y.useTransition=function(){return j.current.useTransition()};y.version="18.3.1";se.exports=y;var O=se.exports;const sr=Ue(O),hr=He({__proto__:null,default:sr},[O]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ve=(...r)=>r.filter((a,o,u)=>!!a&&a.trim()!==""&&u.indexOf(a)===o).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=O.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:u,className:c="",children:v,iconNode:w,...b},k)=>O.createElement("svg",{ref:k,...cr,width:a,height:a,stroke:r,strokeWidth:u?Number(o)*24/Number(a):o,className:ve("lucide",c),...b},[...w.map(([_,L])=>O.createElement(_,L)),...Array.isArray(v)?v:[v]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(r,a)=>{const o=O.forwardRef(({className:u,...c},v)=>O.createElement(ur,{ref:v,iconNode:a,className:ve(`lucide-${lr(r)}`,u),...c}));return o.displayName=`${r}`,o};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=l("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=l("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=l("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=l("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=l("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=l("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=l("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=l("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=l("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=l("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=l("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=l("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=l("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=l("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=l("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=l("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=l("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=l("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=l("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=l("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=l("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=l("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=l("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=l("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=l("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=l("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=l("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=l("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=l("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=l("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=l("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=l("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=l("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=l("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=l("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=l("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=l("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=l("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=l("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=l("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=l("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=l("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=l("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=l("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=l("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var K={};(function r(a,o,u,c){var v=!!(a.Worker&&a.Blob&&a.Promise&&a.OffscreenCanvas&&a.OffscreenCanvasRenderingContext2D&&a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype.transferControlToOffscreen&&a.URL&&a.URL.createObjectURL),w=typeof Path2D=="function"&&typeof DOMMatrix=="function",b=function(){if(!a.OffscreenCanvas)return!1;try{var t=new OffscreenCanvas(1,1),e=t.getContext("2d");e.fillRect(0,0,1,1);var n=t.transferToImageBitmap();e.createPattern(n,"no-repeat")}catch{return!1}return!0}();function k(){}function _(t){var e=o.exports.Promise,n=e!==void 0?e:a.Promise;return typeof n=="function"?new n(t):(t(k,k),null)}var L=function(t,e){return{transform:function(n){if(t)return n;if(e.has(n))return e.get(n);var s=new OffscreenCanvas(n.width,n.height),h=s.getContext("2d");return h.drawImage(n,0,0),e.set(n,s),s},clear:function(){e.clear()}}}(b,new Map),N=function(){var t=Math.floor(16.666666666666668),e,n,s={},h=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(d){var f=Math.random();return s[f]=requestAnimationFrame(function i(p){h===p||h+t-1<p?(h=p,delete s[f],d()):s[f]=requestAnimationFrame(i)}),f},n=function(d){s[d]&&cancelAnimationFrame(s[d])}):(e=function(d){return setTimeout(d,t)},n=function(d){return clearTimeout(d)}),{frame:e,cancel:n}}(),me=function(){var t,e,n={};function s(h){function d(f,i){h.postMessage({options:f||{},callback:i})}h.init=function(i){var p=i.transferControlToOffscreen();h.postMessage({canvas:p},[p])},h.fire=function(i,p,M){if(e)return d(i,null),e;var x=Math.random().toString(36).slice(2);return e=_(function(g){function C(E){E.data.callback===x&&(delete n[x],h.removeEventListener("message",C),e=null,L.clear(),M(),g())}h.addEventListener("message",C),d(i,x),n[x]=C.bind(null,{data:{callback:x}})}),e},h.reset=function(){h.postMessage({reset:!0});for(var i in n)n[i](),delete n[i]}}return function(){if(t)return t;if(!u&&v){var h=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([h])))}catch(d){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",d),null}s(t)}return t}}(),ke={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Me(t,e){return e?e(t):t}function ge(t){return t!=null}function S(t,e,n){return Me(t&&ge(t[e])?t[e]:ke[e],n)}function we(t){return t<0?0:Math.floor(t)}function be(t,e){return Math.floor(Math.random()*(e-t))+t}function D(t){return parseInt(t,16)}function xe(t){return t.map(Ce)}function Ce(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:D(e.substring(0,2)),g:D(e.substring(2,4)),b:D(e.substring(4,6))}}function Se(t){var e=S(t,"origin",Object);return e.x=S(e,"x",Number),e.y=S(e,"y",Number),e}function _e(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function Ee(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function je(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function Re(t,e,n,s,h,d,f,i,p){t.save(),t.translate(e,n),t.rotate(d),t.scale(s,h),t.arc(0,0,1,f,i,p),t.restore()}function Pe(t){var e=t.angle*(Math.PI/180),n=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}function Ae(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var n=e.tick++/e.totalTicks,s=e.x+e.random*e.tiltCos,h=e.y+e.random*e.tiltSin,d=e.wobbleX+e.random*e.tiltCos,f=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),w&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))t.fill(Ie(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(d-s)*.1,Math.abs(f-h)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var i=Math.PI/10*e.wobble,p=Math.abs(d-s)*.1,M=Math.abs(f-h)*.1,x=e.shape.bitmap.width*e.scalar,g=e.shape.bitmap.height*e.scalar,C=new DOMMatrix([Math.cos(i)*p,Math.sin(i)*p,-Math.sin(i)*M,Math.cos(i)*M,e.x,e.y]);C.multiplySelf(new DOMMatrix(e.shape.matrix));var E=t.createPattern(L.transform(e.shape.bitmap),"no-repeat");E.setTransform(C),t.globalAlpha=1-n,t.fillStyle=E,t.fillRect(e.x-x/2,e.y-g/2,x,g),t.globalAlpha=1}else if(e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(d-s)*e.ovalScalar,Math.abs(f-h)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):Re(t,e.x,e.y,Math.abs(d-s)*e.ovalScalar,Math.abs(f-h)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var m=Math.PI/2*3,R=4*e.scalar,P=8*e.scalar,A=e.x,I=e.y,T=5,z=Math.PI/T;T--;)A=e.x+Math.cos(m)*P,I=e.y+Math.sin(m)*P,t.lineTo(A,I),m+=z,A=e.x+Math.cos(m)*R,I=e.y+Math.sin(m)*R,t.lineTo(A,I),m+=z;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(h)),t.lineTo(Math.floor(d),Math.floor(f)),t.lineTo(Math.floor(s),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function ze(t,e,n,s,h){var d=e.slice(),f=t.getContext("2d"),i,p,M=_(function(x){function g(){i=p=null,f.clearRect(0,0,s.width,s.height),L.clear(),h(),x()}function C(){u&&!(s.width===c.width&&s.height===c.height)&&(s.width=t.width=c.width,s.height=t.height=c.height),!s.width&&!s.height&&(n(t),s.width=t.width,s.height=t.height),f.clearRect(0,0,s.width,s.height),d=d.filter(function(E){return Ae(f,E)}),d.length?i=N.frame(C):g()}i=N.frame(C),p=g});return{addFettis:function(x){return d=d.concat(x),M},canvas:t,promise:M,reset:function(){i&&N.cancel(i),p&&p()}}}function J(t,e){var n=!t,s=!!S(e||{},"resize"),h=!1,d=S(e,"disableForReducedMotion",Boolean),f=v&&!!S(e||{},"useWorker"),i=f?me():null,p=n?_e:Ee,M=t&&i?!!t.__confetti_initialized:!1,x=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,g;function C(m,R,P){for(var A=S(m,"particleCount",we),I=S(m,"angle",Number),T=S(m,"spread",Number),z=S(m,"startVelocity",Number),qe=S(m,"decay",Number),Le=S(m,"gravity",Number),Fe=S(m,"drift",Number),ee=S(m,"colors",xe),Be=S(m,"ticks",Number),re=S(m,"shapes"),$e=S(m,"scalar"),Ve=!!S(m,"flat"),te=Se(m),ae=A,U=[],Ne=t.width*te.x,De=t.height*te.y;ae--;)U.push(Pe({x:Ne,y:De,angle:I,spread:T,startVelocity:z,color:ee[ae%ee.length],shape:re[be(0,re.length)],ticks:Be,decay:qe,gravity:Le,drift:Fe,scalar:$e,flat:Ve}));return g?g.addFettis(U):(g=ze(t,U,p,R,P),g.promise)}function E(m){var R=d||S(m,"disableForReducedMotion",Boolean),P=S(m,"zIndex",Number);if(R&&x)return _(function(z){z()});n&&g?t=g.canvas:n&&!t&&(t=je(P),document.body.appendChild(t)),s&&!M&&p(t);var A={width:t.width,height:t.height};i&&!M&&i.init(t),M=!0,i&&(t.__confetti_initialized=!0);function I(){if(i){var z={getBoundingClientRect:function(){if(!n)return t.getBoundingClientRect()}};p(z),i.postMessage({resize:{width:z.width,height:z.height}});return}A.width=A.height=null}function T(){g=null,s&&(h=!1,a.removeEventListener("resize",I)),n&&t&&(document.body.contains(t)&&document.body.removeChild(t),t=null,M=!1)}return s&&!h&&(h=!0,a.addEventListener("resize",I,!1)),i?i.fire(m,A,T):C(m,A,T)}return E.reset=function(){i&&i.reset(),g&&g.reset()},E}var H;function Y(){return H||(H=J(null,{useWorker:!0,resize:!0})),H}function Ie(t,e,n,s,h,d,f){var i=new Path2D(t),p=new Path2D;p.addPath(i,new DOMMatrix(e));var M=new Path2D;return M.addPath(p,new DOMMatrix([Math.cos(f)*h,Math.sin(f)*h,-Math.sin(f)*d,Math.cos(f)*d,n,s])),M}function Te(t){if(!w)throw new Error("path confetti are not supported in this browser");var e,n;typeof t=="string"?e=t:(e=t.path,n=t.matrix);var s=new Path2D(e),h=document.createElement("canvas"),d=h.getContext("2d");if(!n){for(var f=1e3,i=f,p=f,M=0,x=0,g,C,E=0;E<f;E+=2)for(var m=0;m<f;m+=2)d.isPointInPath(s,E,m,"nonzero")&&(i=Math.min(i,E),p=Math.min(p,m),M=Math.max(M,E),x=Math.max(x,m));g=M-i,C=x-p;var R=10,P=Math.min(R/g,R/C);n=[P,0,0,P,-Math.round(g/2+i)*P,-Math.round(C/2+p)*P]}return{type:"path",path:e,matrix:n}}function Oe(t){var e,n=1,s="#000000",h='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof t=="string"?e=t:(e=t.text,n="scalar"in t?t.scalar:n,h="fontFamily"in t?t.fontFamily:h,s="color"in t?t.color:s);var d=10*n,f=""+d+"px "+h,i=new OffscreenCanvas(d,d),p=i.getContext("2d");p.font=f;var M=p.measureText(e),x=Math.ceil(M.actualBoundingBoxRight+M.actualBoundingBoxLeft),g=Math.ceil(M.actualBoundingBoxAscent+M.actualBoundingBoxDescent),C=2,E=M.actualBoundingBoxLeft+C,m=M.actualBoundingBoxAscent+C;x+=C+C,g+=C+C,i=new OffscreenCanvas(x,g),p=i.getContext("2d"),p.font=f,p.fillStyle=s,p.fillText(e,E,m);var R=1/n;return{type:"bitmap",bitmap:i.transferToImageBitmap(),matrix:[R,0,0,R,-x*R/2,-g*R/2]}}o.exports=function(){return Y().apply(this,arguments)},o.exports.reset=function(){Y().reset()},o.exports.create=J,o.exports.shapeFromPath=Te,o.exports.shapeFromText=Oe})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),K,!1);const at=K.exports;K.exports.create;export{dr as A,kr as B,Sr as C,jr as D,Rr as E,Pr as F,Ir as G,_r as H,Br as I,Lr as J,Or as K,qr as L,Dr as M,at as N,fr as O,Tr as P,Hr as Q,hr as R,Kr as S,Jr as T,Yr as U,et as W,rt as X,tt as Z,Zr as a,$r as b,Xr as c,br as d,Ur as e,Er as f,Ue as g,Gr as h,Cr as i,mr as j,Wr as k,gr as l,Mr as m,vr as n,sr as o,pr as p,Nr as q,O as r,Qr as s,yr as t,zr as u,xr as v,Ar as w,Fr as x,Vr as y,wr as z};
