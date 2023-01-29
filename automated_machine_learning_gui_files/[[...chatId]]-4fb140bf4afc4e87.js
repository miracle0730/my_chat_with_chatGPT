(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6],{49529:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat/[[...chatId]]",function(){return n(7462)}])},7462:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return E},default:function(){return O}});var r=n(61706),a=n(31501),s=n(61079),u=n(45813),o=n(35250),c=n(91530),i=n.n(c),d=n(61432),l=n(70079),f=n(73925),h=n(62676),p="oai/apps/hasSeenReleaseAnnouncement",m="2023-01-09";function v(e){var t=e.hasSeenOnboardingDate,n=(0,l.useState)(function(){return!Boolean(h.m.getItem("".concat(p,"/").concat(m)))&&!!t&&t<new Date(m)}),r=n[0],a=n[1],s=(0,l.useState)(!1),u=s[0],c=s[1];(0,l.useEffect)(function(){c(!0)},[]);var i=(0,l.useCallback)(function(){h.m.setItem("".concat(p,"/").concat(m),!0),a(!1)},[]);return u?(0,o.jsx)(f.Z,{size:"xs",isOpen:r,onModalClose:i,type:"success",title:"",primaryButton:(0,o.jsx)(f.m,{title:"Sounds good!",color:"primary",onClick:i}),children:(0,o.jsxs)("div",{className:"mb-6 flex flex-col gap-6",children:[(0,o.jsx)("div",{className:"text-gray-800 dark:text-white",children:"Jan 9 version update"}),(0,o.jsx)("div",{className:"text-2xl",children:"Here's what's new"}),(0,o.jsx)("div",{className:"prose text-base dark:prose-invert",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"We made more improvements to the ChatGPT model! It should be generally better across a wide range of topics and has improved factuality."}),(0,o.jsx)("li",{children:"Stop generating: Based on your feedback, we're rolling out the ability to stop generating ChatGPT's response."})]})})]})}):null}var g=n(52916),x=n(44513),_=n(49690),y=n(66285),I=n(500),b=n(12762),w=n(98943),j=n(89874),S=n(60814),C=n(80836),Z=n(36613);n(24638);var k=function(){return{thread:C.Cv.createTree(),currentLeafId:"root",threadId:null,title:"New chat"}};function P(){return(P=(0,r.Z)(function(e,t,n){var r,o,c;return(0,u.__generator)(this,function(u){switch(u.label){case 0:r=null,u.label=1;case 1:if(u.trys.push([1,4,,5]),!e)return[3,3];return[4,S.ZP.getConversation(e,n,t)];case 2:var i,d,l,f,h;return l=null===(d=Object.values((i=r=u.sent()).mapping).find(function(e){return null===e.parent}))||void 0===d?void 0:d.id,f=new Set,h=new Set,[2,{thread:((i.moderation_results||[]).forEach(function(e){e.blocked?h.add(e.message_id):e.flagged&&f.add(e.message_id)}),o={rootId:l,mapping:Object.keys(i.mapping).reduce(function(e,t){var n,r=i.mapping[t],u=r.parent,o=r.children,c=(0,j.Z)(r,["parent","children"]),d=i.mapping[t].message||C.Cv.createRootMessage();return h.has(d.id)?n=Z.sK:f.has(d.id)&&(n=Z.Mf),e[t]=(0,a.Z)((0,s.Z)((0,a.Z)({},c),{message:d,children:o||[],parentId:u||"",type:C.uV[d.role]}),n&&{metadata:n}),e},{}),currentLeafId:i.current_node}).mapping||C.Cv.createTree(),currentLeafId:o.currentLeafId||o.rootId||"root",threadId:e,title:r.title||null}];case 3:return[3,5];case 4:return c=u.sent(),console.error(c),[3,5];case 5:return[2,k()]}})})).apply(this,arguments)}function N(){return(N=(0,r.Z)(function(e){return(0,u.__generator)(this,function(t){switch(t.label){case 0:return[4,function(e,t,n){return P.apply(this,arguments)}(e,!1)];case 1:return[2,t.sent()]}})})).apply(this,arguments)}var E=!0;function O(e){var t=e.user,n=e.accessToken,r=e.features,u=e.pages,c=e.initialData,h=e.accountStatus,p=e.hasPuidCookie,m=(0,l.useState)(!1),j=m[0],S=m[1],C=(0,l.useMemo)(function(){return I.TJ},[]),Z=(0,d.useRouter)(),P=(0,l.useState)(c),E=P[0],O=P[1],T=(0,x.PV)(C.id).getHasSeenOnboardingDate,D=(0,l.useMemo)(function(){return{app:w.VY,origin:"chat"}},[]);(0,_.Z)("ChatGPT",t,n,D);var M=(0,y.m)(function(e){return{account:e.account,accountUser:e.accountUser,updateAccount:e.updateAccount}}),A=M.account,B=M.accountUser,L=M.updateAccount;return(0,l.useEffect)(function(){(null==A?void 0:A.status)==="free"&&(p?L({account:(0,s.Z)((0,a.Z)({},A),{status:"pro"}),accountUser:B}):h&&L(h))},[L,h,p,A,B]),(0,l.useEffect)(function(){S(!T())},[T]),(0,l.useEffect)(function(){var e,t=null===(e=Z.query.chatId)||void 0===e?void 0:e[0];t!==E.threadId&&(t?(function(e){return N.apply(this,arguments)})(t).then(function(e){return e&&O(e)}):O(k()))},[n,c.threadId,Z.query.chatId,null==E?void 0:E.threadId,]),(0,o.jsx)(I.yP.Provider,{value:C,children:(0,o.jsxs)(b.Af.Provider,{value:D,children:[(0,o.jsx)(f.Z,{isOpen:j,onModalClose:i(),type:"success",title:"",primaryButton:void 0,children:(0,o.jsx)(x.ZP,{onClose:function(){return S(!1)}})}),(0,o.jsx)(v,{hasSeenOnboardingDate:T()}),(0,o.jsx)(g.Z,{contextName:"proxy",initialData:E,features:new Set(r),pages:u},E.threadId)]})})}}},function(e){e.O(0,[861,741,798,979,424,762,218,660,814,650,786,774,888,179],function(){return e(e.s=49529)}),_N_E=e.O()}]);