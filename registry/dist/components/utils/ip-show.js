!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/ip-show"]=t():e["utils/ip-show"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,i={913:e=>{e.exports=coreApis.componentApis.utils.commentApis}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var l=a[e]={exports:{}};return i[e](l,l.exports,s),l.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(i,a){if(1&a&&(i=this(i)),8&a)return i;if("object"==typeof i&&i){if(4&a&&i.__esModule)return i;if(16&a&&"function"==typeof i.then)return i}var l=Object.create(null);s.r(l);var n={};e=e||[null,t({}),t([]),t(t)];for(var o=2&a&&i;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>n[e]=()=>i[e]));return n.default=()=>i,s.d(l,n),l},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};s.d(l,{component:()=>_});const n=coreApis.componentApis.define,o=coreApis.spinQuery;let r,c=2;const p=function(e,t,i){const a=this._parentBlacklistDom(e,t,i),s=[`<div class="con ${i===t?"no-border":""}">`,`<div class="user">${this._createNickNameDom(e)}`,this._createLevelLink(e),this._identity(e.mid,e.assist,e.member.fans_detail),`${this._createNameplate(e.member.nameplate)+this._createUserSailing(e)}</div>`,this._createMsgContent(e),this._createPerfectReply(e),'<div class="info">',this._createPlatformDom(e.content.plat),'<span class="time-location">','<span class="reply-time">'.concat(this._formateTime(e.ctime),"</span>"),e?.reply_control?.location?`<span class="reply-location" style="margin-left:15px;">${e?.reply_control?.location||""}</span>`:"","</span>",e.lottery_id?"":`<span class="like ${1===e.action?"liked":""}"><i></i><span>${e.like?e.like:""}</span></span>`,e.lottery_id?"":`<span class="hate ${2===e.action?"hated":""}"><i></i></span>`,e.lottery_id?"":this._createReplyBtn(e.rcount),e.lottery_id&&e.mid!==r.userStatus.mid?"":`<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>${this._canSetTop(e)?`<li class="set-top">${e.isUpTop?"取消置顶":"设为置顶"}</li>`:""}${this._canBlackList(e.mid)?'<li class="blacklist">加入黑名单</li>':""}${this._canReport(e.mid)?'<li class="report">举报</li>':""}${this._canDel(e.mid)&&!e.isTop?`<li class="del" data-mid="${e.mid}">删除</li>`:""}</ul></div></div>`,this._createLotteryContent(e.content),this._createVoteContent(e.content),this._createTags(e),"</div>",'<div class="reply-box">',this._createSubReplyList(e.replies,e.rcount,!1,e.rpid,e.folder&&e.folder.has_folded,e.reply_control),"</div>",'<div class="paging-box">',"</div>","</div>"].join("");return e.state===r.blacklistCode?a:s},d=function(e,t){return[`<div class="reply-item reply-wrap" data-id="${e.rpid}" data-index="${t}">`,this._createSubReplyUserFace(e),'<div class="reply-con">','<div class="user">',this._createNickNameDom(e),this._createLevelLink(e),this._identity(e.mid),this._createSubMsgContent(e),"</div>","</div>",'<div class="info">','<span class="time-location">','<span class="reply-time">'.concat(this._formateTime(e.ctime),"</span>"),e?.reply_control?.location?`<span class="reply-location" style="margin-left:15px;">${e?.reply_control?.location||""}</span>`:"","</span>",`<span class="like ${1===e.action?"liked":""}"><i></i><span>${e.like?e.like:""}</span></span>`,`<span class="hate ${2===e.action?"hated":""}"><i></i></span>`,'<span class="reply btn-hover">回复</span>',`<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>${this._canBlackList(e.mid)?'<li class="blacklist">加入黑名单</li>':""}${this._canReport(e.mid)?'<li class="report">举报</li>':""}${this._canDel(e.mid)?`<li class="del" data-mid="${e.mid}">删除</li>`:""}</ul></div></div>`,"</div>","</div>"].join("")},m=function(e,t,i){const a=this._parentBlacklistDom(e,t,i),s=[`<div class="con ${i===t?"no-border":""}">`,`<div class="user">${this._identity(e.mid,e.assist,e.member.fans_detail)}`,`<a data-usercard-mid="${e.mid}" href="//space.bilibili.com/${e.mid}" target="_blank" class="name ${this._createVipClass(e.member.vip.vipType,e.member.vip.vipStatus,e.member.vip.themeType)}">${this._unhtmlFix(e.member.uname)}</a><a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l${e.member.level_info.current_level}"></i></a>${this._createNameplate(e.member.nameplate)}${this._createUserSailing(e.member&&e.member.user_sailing||{})}</div>`,this._createMsgContent(e),'<div class="info">',e.floor?`<span class="floor">#${e.floor}</span>`:"",this._createPlatformDom(e.content.plat),`<span class="time">${this._formateTime(e.ctime)}</span>`,e?.reply_control?.location?`<span style="margin-left:0px;">${e?.reply_control?.location||""}</span>`:"",e.lottery_id?"":`<span class="like ${1===e.action?"liked":""}"><i></i><span>${e.like||""}</span></span>`,e.lottery_id?"":`<span class="hate ${2===e.action?"hated":""}"><i></i></span>`,e.lottery_id?"":this._createReplyBtn(e.rcount),e.lottery_id&&e.mid!==this.userStatus.mid?"":`<div class="operation more-operation"><div class="spot"></div><div class="opera-list"><ul>${this._canSetTop(e)?`<li class="set-top">${e.isUpTop?"取消置顶":"设为置顶"}</li>`:""}${this._canBlackList(e.mid)?'<li class="blacklist">加入黑名单</li>':""}${this._canReport(e.mid)?'<li class="report">举报</li>':""}${this._canDel(e.mid)&&!e.isTop?`<li class="del" data-mid="${e.mid}">删除</li>`:""}</ul></div></div>`,this._createLotteryContent(e.content),this._createVoteContent(e.content),this._createTags(e),"</div>",'<div class="reply-box">',this._createSubReplyList(e.replies,e.rcount,!1,e.rpid,e.folder&&e.folder.has_folded),"</div>",'<div class="paging-box">',"</div>","</div>"].join("");return e.state===this.blacklistCode?a:s},h=function(e,t){return[`<div class="reply-item reply-wrap" data-id="${e.rpid}" data-index="${t}">`,`<a href="//space.bilibili.com/${e.mid}" data-usercard-mid="${e.mid}" target="_blank" class="reply-face">`,`<img src="${this._trimHttpFix(this._webpFix(e.member.avatar,{w:52,h:52}))}" alt="">`,"</a>",'<div class="reply-con">','<div class="user">',`<a href="//space.bilibili.com/${e.mid}" target="_blank" data-usercard-mid="${e.mid}" class="name ${this._createVipClass(e.member.vip.vipType,e.member.vip.vipStatus,e.member.vip.themeType)}">${this._unhtmlFix(e.member.uname)}</a>`,`<a class="level-link" href="//www.bilibili.com/blackboard/help.html#%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E7%9B%B8%E5%85%B3" target="_blank"><i class="level l${e.member.level_info.current_level}"></i></a>`,this._createSubMsgContent(e),"</div>","</div>",'<div class="info">',`<span class="time">${this._formateTime(e.ctime)}</span>`,e?.reply_control?.location?`<span style="margin-left:0px;">${e?.reply_control?.location||""}</span>`:"",`<span class="like ${1===e.action?"liked":""}"><i></i><span>${e.like||""}</span></span>`,`<span class="hate ${2===e.action?"hated":""}"><i></i></span>`,'<span class="reply btn-hover">回复</span>',`<div class="operation btn-hover btn-hide-re"><div class="spot"></div><div class="opera-list"><ul>${this._canBlackList(e.mid)?'<li class="blacklist">加入黑名单</li>':""}${this._canReport(e.mid)?'<li class="report">举报</li>':""}${this._canDel(e.mid)?`<li class="del" data-mid="${e.mid}">删除</li>`:""}</ul></div></div>`,"</div>","</div>"].join("")},u=new MutationObserver((e=>{e.forEach((()=>{void 0!==unsafeWindow.bbComment&&(r=unsafeWindow.bbComment,"blackroom"===unsafeWindow.location.href.split("/")[3]?(r.prototype._unhtmlFix=function(e,t){return e?
// eslint-disable-next-line @typescript-eslint/no-shadow
e.replace(t||/[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\\d+);)?/g,(function(e,t){return t?e:{"<":"","&":"",'"':"",">":"","'":""}[e]})):""},r.prototype._trimHttpFix=function(e){return e?e.replace(/^http:/,""):""},r.prototype._webpFix=function(e,t){if(!e)return e;const i=e.match(/(.*\\.(jpg|jpeg|gif|png|bmp))(\\?.*)?/);let a=-1!==e.indexOf("/bfs/");return i&&"gif"!==i[2]&&"bmp"!==i[2]&&a?(a=t.w,e=t.h,e=a&&e?`@${a}w_${e}h`:"@",t=i[3]||"",this.isWebp?`${i[1]+e}.webp${t}`:`${i[1]+e}.${i[2]}${t}`):e},r.prototype._createListCon=m,r.prototype._createSubReplyItem=h):(r.prototype._createListCon=p,r.prototype._createSubReplyItem=d),c=1,u.disconnect())}))}));u.observe(document.head,{childList:!0});const v=e=>{e.forEach((async e=>{const t=(e=>{const t=e.frameworkSpecificProps;return t?.reply_control?.location??void 0})(e);if(void 0===t)return;const i=await(e.shadowDomEntry?(0,o.select)((()=>e.shadowDomEntry.querySelector("#pubdate")),{queryInterval:100,maxRetry:30}):e.element.querySelector(".reply-info>.reply-time")??e.element.querySelector(".sub-reply-info>.sub-reply-time"));if(null===i)return;const a=i.querySelector(".ip-location");if(null!==a)return void(a.innerText=t);const s=document.createElement("span");s.className="ip-location",s.style.marginLeft="15px",s.innerText=t,i.appendChild(s)}))},_=(0,n.defineComponentMetadata)({name:"ipShow",author:{name:"Light_Quanta",link:"https://github.com/LightQuanta"},displayName:"评论区IP属地显示",tags:[componentsTags.utils],entry:async()=>{const{forEachCommentItem:e}=await Promise.resolve().then(s.t.bind(s,913,23));e({added:e=>{2===c&&(v([e,...e.replies]),e.addEventListener("repliesUpdate",(e=>v(e.detail))))}})},description:{"zh-CN":"在评论区显示评论的IP属地信息"},commitHash:"5afe3037e36e084800c58ea47a454e17226cf461",coreVersion:"2.10.0"});return l=l.component})()));