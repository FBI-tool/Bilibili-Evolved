!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/check-in-center"]=t():e["utils/check-in-center"]=t()}(globalThis,(()=>(()=>{"use strict";var e={481:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"multiple-widgets"},e._l(e.items,(function(n){return t("DefaultWidget",{key:n.name,attrs:{disabled:n.disabled,"data-name":n.name,name:n.displayName,icon:n.icon},on:{click:function(t){return e.runItemAction(n,t)}}})})),1)};o._withStripped=!0;const i=coreApis.ui,s=coreApis.ajax,r=coreApis.toast;var a=n(847);const c=coreApis.pluginApis.data,d=[{name:"seeds-to-coins",displayName:"瓜子换硬币",icon:"mdi-seed-outline",action:async()=>{const e=await(0,s.postTextWithCredentials)("https://api.live.bilibili.com/xlive/revenue/v1/wallet/silver2coin",new URLSearchParams({csrf:(0,a.getCsrf)(),csrf_token:(0,a.getCsrf)()})),t=JSON.parse(e);0!==t.code?r.Toast.info(t.message,"瓜子换硬币",3e3):r.Toast.success(`${t.message}\n剩余银瓜子:${t.data.silver}`,"瓜子换硬币",3e3)}}],[l]=(0,c.registerAndGetData)("checkInCenter.items",d);var p=function(e,t,n,o,i,s,r,a){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=c):i&&(c=a?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:d}}(Vue.extend({components:{DefaultWidget:i.DefaultWidget},data:()=>({items:l}),methods:{async runItemAction(e,t){try{this.$set(e,"disabled",!0);const n=this.$el.querySelector(`[data-name='${e.name}']`);await e.action(n,t)}finally{e.disabled=!1}}}}),o,[],!1,null,null,null);const u=p.exports},847:e=>{e.exports=coreApis.utils}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};n.d(o,{component:()=>r});const i=coreApis.componentApis.define;var s=n(847);const r=(0,i.defineComponentMetadata)({name:"checkInCenter",displayName:"签到助手",description:{"zh-CN":"在功能面板中提供一些可以每日进行的操作."},tags:[componentsTags.utils],entry:none,widget:{component:()=>Promise.resolve().then(n.bind(n,481)).then((e=>e.default)),condition:()=>Boolean((0,s.getUID)())},commitHash:"5afe3037e36e084800c58ea47a454e17226cf461",coreVersion:"2.10.0"});return o=o.component})()));