"use strict";var m=Object.defineProperty;var l=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var u=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))_.call(e,t)&&u(r,t,e[t]);if(l)for(var t of l(e))b.call(e,t)&&u(r,t,e[t]);return r};Object.defineProperty(exports,"__esModule",{value:!0});exports[Symbol.toStringTag]="Module";var v=require("js-config-helper"),w=require("axios"),h=require("antd"),N=require("js-form-helper");function f(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var x=f(v),d=f(w),g=f(N);class y{__(e,t=null,i=null){return this.get(e,t,i)}add(e,t=null){t||(t=this.locale),this.translations.set(t,Object.assign({},this.translations.get(t),e))}choice(e,t=1,i=null,n=null){n||(n=this.locale);let s=null;const o=this.fetch(`${n}.${e}`);if(!o)return this.options.storeNotFounds&&window[this.options.globalName]._notFounds.push(e),this.forceDisplayKeys?i?this.constructor.replaceString(e,i):e:"";const a=o.split("|");return a.some(p=>(s=this.constructor.matchChoiceCount(p,t),s)),s===!1&&(s=t>1?a[1]:a[0]),this._returnString(e,s,i)}constructor(e={},t="en",i={}){i=Object.assign({globalName:"translations",forceDisplayKeys:!0,storeNotFounds:!0},i),this.forceDisplayKeys=i.forceDisplayKeys,this.locale=t,this.translations=new Map,i.globalName&&(window[i.globalName]===void 0&&(window[i.globalName]={}),e=Object.assign({},window[i.globalName],e),i.storeNotFounds&&(window[i.globalName]._notFounds=[])),this.set(e,this.locale),this.options=i}static decodeHtml(e){const t=document.createElement("textarea");return t.innerHTML=e,t.value}fetch(e){const t=e.split("."),i=t.shift();let n=this.translations.get(i);return t.forEach(s=>{n&&(n=n[s])}),n}get(e,t=null,i=null){typeof t=="string"&&(i=t,t=null),i||(i=this.locale);const n=this.fetch(`${i}.${e}`);return this._returnString(e,n,t)}has(e,t=null){return t||(t=this.locale),this.fetch(`${t}.${e}`)!==void 0}static matchChoiceCount(e,t){const i=e.match(/^[{[]([^[\]{}]*)[}\]](.*)/);if(!i)return!1;if(i[1].includes(",")){const[n,s]=i[1].split(",",2);if(s==="*"&&t>=n||n==="*"&&t<=s||t>=n&&t<=s)return i[2]}return parseInt(i[1],10)===t?i[2]:null}static replaceString(e,t){return t?Object.entries(t).reduce((i,[n,s])=>{s=String(s);const o=n.toLowerCase();return i.replace(`:${o}`,s).replace(`:${o.toUpperCase()}`,s.toUpperCase()).replace(`:${o.charAt(0).toUpperCase()}${o.slice(1)}`,`${s.charAt(0).toUpperCase()}${s.slice(1)}`)},e):e}_returnString(e,t,i){return typeof t!="string"&&this.forceDisplayKeys&&(t=e,this.options.storeNotFounds&&window[this.options.globalName]._notFounds.push(e)),i&&(t=this.constructor.replaceString(t,i)),this.constructor.decodeHtml(t)}setLocale(e){this.locale=e}set(e,t=null){t||(t=this.locale),this.translations.set(t,e)}}function $(r={},e="en",t={}){return new y(r,e,t)}exports.api=void 0;exports.http=void 0;exports.config=void 0;exports.i18n=void 0;exports.store=void 0;exports.form=void 0;exports.formApi=void 0;exports.message=void 0;exports.notification=void 0;exports.exported=void 0;function C(r){var e,t,i;if(r){if(exports.config=new x.default(r),exports.http=exports.config.get("override.http")||d.default.create(),exports.api=exports.config.get("override")||d.default.create({baseURL:exports.config.get("api.url")}),exports.config.has("exclude.form")||(exports.form=function(n,s){return new g.default(n,c({http:exports.http},s))},exports.formApi=function(n,s){return new g.default(n,c({http:exports.api},s))}),exports.config.has("exclude.message")||(exports.message=exports.config.get("override.message")||h.message),exports.config.has("exclude.notification")||(exports.notification=exports.config.get("override.notification")||h.notification),!exports.config.has("exclude.i18n")){const n=r.translations[r.locale];exports.i18n=$(n,r.locale,{globalName:"translations",forceDisplayKeys:!0,storeNotFounds:!0})}exports.store=exports.config.get("override.store"),exports.exported={config:exports.config,api:exports.api,http:exports.http,i18n:exports.i18n,form:exports.form,formApi:exports.formApi,store:exports.store,t:(e=exports.i18n)==null?void 0:e.__.bind(exports.i18n),__:(t=exports.i18n)==null?void 0:t.__.bind(exports.i18n),choice:(i=exports.i18n)==null?void 0:i.choice.bind(exports.i18n),message:exports.message,notification:exports.notification},exports.config.has("debug")&&console.log("\u2934 useUp() accessible vars :",exports.exported)}return exports.exported}exports.useUp=C;
