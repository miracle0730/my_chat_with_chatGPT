"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{68619:function(e,t,n){var r,o,i,a,c,u,s,d,l,f,m,p;n.d(t,{Jq:function(){return u},Os:function(){return i},PX:function(){return c},u9:function(){return o},uU:function(){return a}}),(s=r||(r={})).Default="default",s.Dark="dark",(d=o||(o={})).Retrieval="retrieval",(l=i||(i={})).Next="next",l.Variant="variant",l.Continue="continue",(f=a||(a={})).Unknown="unknown",f.User="user",f.Assistant="assistant",f.System="system",f.Critic="critic",f.Tool="tool",(m=c||(c={})).Text="text",(p=u||(u={})).Root="root",p.System="system",p.Prompt="prompt",p.Completion="completion"},23119:function(e,t,n){n.d(t,{Y:function(){return y},k:function(){return v}});var r=n(14806),o=n(35250),i=n(19841),a=n(96424),c=n.n(a),u=n(1454),s=n(34303),d=n(79876);function l(){var e=(0,r.Z)(["relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"]);return l=function(){return e},e}function f(){var e=(0,r.Z)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ","\n  ","\n"]);return f=function(){return e},e}function m(){var e=(0,r.Z)(["bg-[#5436DA] rounded-sm text-white flex justify-center items-center relative tracking-widest"]);return m=function(){return e},e}function p(){var e=(0,r.Z)(["relative flex"]);return p=function(){return e},e}var h=s.Z.div(l()),g=s.Z.span(f(),function(e){return"warning"===e.$type&&"bg-orange-500 text-white"},function(e){return"danger"===e.$type&&"bg-red-500 text-white"}),v=function(e){var t=e.iconName,n=e.background,r=e.notice,i="globe"===t?u.RsK:"terminal"===t?u.cDN:d.nI;return(0,o.jsxs)(h,{style:{backgroundColor:n},children:[(0,o.jsx)(d.ZP,{icon:i,size:"medium"}),r&&(0,o.jsx)(g,{$type:r,children:"!"})]})},x=s.Z.div(m()),C=s.Z.div(p()),y=function(e){var t=e.user,n=e.size,r=void 0===n?"small":n,a=e.notice,s=a&&(0,o.jsx)(g,{$type:a,children:"!"});if(null==t?void 0:t.picture)return(0,o.jsxs)(C,{children:[(0,o.jsx)(c(),{src:t.picture,alt:t.name,width:"small"===r?30:38,height:"small"===r?30:38,className:"rounded-sm"}),s]});var l=((null==t?void 0:t.name)||"").split(" ").map(function(e){return e[0]}).join("");return(0,o.jsxs)(x,{className:(0,i.Z)("small"===r?"h-8 w-8 text-xs":"h-10 w-10 text-lg"),children:[l||(0,o.jsx)(d.ZP,{icon:u.fzv,size:"medium"}),s]})}},35873:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(14806),o=n(35250),i=n(70079),a=n(1454),c=n(34303),u=n(60612),s=n(79876);function d(){var e=(0,r.Z)(["flex ml-auto gap-2"]);return d=function(){return e},e}function l(e){var t=e.text,n=e.onCopy,r=(0,i.useState)(!1),c=r[0],d=r[1],l=(0,u.Z)(),m=(0,i.useCallback)(function(){n(),d(!0),setTimeout(function(){l()&&d(!1)},2e3)},[l,n]);return(0,o.jsxs)(o.Fragment,{children:[!c&&(0,o.jsxs)(f,{onClick:m,children:[(0,o.jsx)(s.ZP,{icon:a.j4u}),t]}),c&&(0,o.jsxs)(f,{children:[(0,o.jsx)(s.ZP,{icon:a.UgA}),t&&"Copied!"]})]})}var f=c.Z.button(d())},94279:function(e,t,n){n.d(t,{C:function(){return X},Z:function(){return W}});var r=n(31501),o=n(89874),i=n(14806),a=n(35250),c=n(19841),u=n(70079),s=n(34303),d=n(36613),l=n(80836),f=n(61079),m=n(88366),p=n(15762),h=n(24804),g=n(93362),v=n(45369),x=n(42426),C=n(65028),y=n(86149),Z=n(35873);function k(){var e=(0,i.Z)(["bg-black mb-4 rounded-md"]);return k=function(){return e},e}function b(){var e=(0,i.Z)(["flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"]);return b=function(){return e},e}function P(){var e=(0,i.Z)([""]);return P=function(){return e},e}function w(){var e=(0,i.Z)(["p-4 overflow-y-auto"]);return w=function(){return e},e}function M(){var e=(0,i.Z)(["!whitespace-pre-wrap"]);return M=function(){return e},e}var N=s.Z.div(k()),j=s.Z.div(b()),T=s.Z.span(P()),F=s.Z.div(w()),A=s.Z.code(M());function I(e){var t=e.children,n=e.className,r=e.language,o=e.content,i=(0,u.useCallback)(function(){navigator.clipboard.writeText(o)},[o]);return(0,a.jsxs)(N,{children:[(0,a.jsxs)(j,{children:[r&&(0,a.jsx)(T,{children:r}),(0,a.jsx)(Z.Z,{text:"Copy code",onCopy:i})]}),(0,a.jsx)(F,{children:(0,a.jsx)(A,{className:n,children:t})})]})}var L=[[g.Z,{detect:!0,subset:["python","javascript","java","go","bash","c","cpp","csharp","css","diff","graphql","json","kotlin","less","lua","makefile","markdown","objectivec","perl","php","php-template","plaintext","python-repl","r","ruby","rust","scss","shell","sql","swift","typescript","vbnet","wasm","xml","yaml",],ignoreMissing:!0},],v.Z,[x.Z,{newlines:!0}],],E=[C.Z,[y.Z,{singleDollarTextMath:!1}],],R={code:function(e){var t=e.inline,n=e.node,i=e.className,c=e.children,u=(0,o.Z)(e,["inline","node","className","children"]);if(t)return(0,a.jsx)("code",(0,f.Z)((0,r.Z)({className:i},u),{children:c}));var s=(null==i?void 0:i.startsWith("language-"))?i.split("-")[1]:"";return(0,a.jsx)(I,{language:s,className:i,content:(0,m.B)(n),children:c})}};function _(e){var t=e.size,n=e.children,r=e.className,o=(0,p.F)().theme;return(0,a.jsx)(h.D,{components:R,rehypePlugins:L,remarkPlugins:E,linkTarget:"_new",className:(0,c.Z)(r,"markdown prose w-full break-words dark:prose-invert","dark"===o?"dark":"light","small"===(void 0===t?"medium":t)&&"prose-xs"),children:n})}var U=n(2827),S=n(12762),q=n(98943),J=n(68619),B=n(39690);function z(){var e=(0,i.Z)(["text-center mt-2 flex justify-center"]);return z=function(){return e},e}var D=s.Z.div(z());function $(e){var t=e.initialText,n=e.role,r=e.parentId,o=e.threadId,i=e.currentLeaf,c=e.onCreateNewNode,s=e.onUpdateNode,d=e.onChangeItemInView,l=e.onExitEdit,f=e.onDeleteNode,m=e.onRequestCompletion,p=e.disabled,h=(0,S.WS)(),g=(0,u.useId)(),v="".concat(i,"-").concat(g),x=(0,u.useState)(t||""),C=x[0],y=x[1],Z=(0,u.useRef)(null),k=n!==J.uU.User;(0,u.useEffect)(function(){c(v,r,k?J.Jq.Completion:J.Jq.Prompt,"")},[]);var b=(0,u.useCallback)(function(e){y(e.currentTarget.value)},[]),P=(0,u.useCallback)(function(){s(v,C),d(v),k||m(J.Os.Next,v,{eventSource:"mouse"},!0),l()},[v,k,d,l,m,s,C,]),w=(0,u.useCallback)(function(){f(v),d(i),l(),h(n===J.uU.User?q.s6.cancelEditPrompt:q.s6.cancelEditCompletion,{threadId:o})},[v,i,h,d,f,l,n,o,]);return(0,u.useEffect)(function(){var e=Z.current,t=function(e){"Enter"===e.key&&e.metaKey?P():"Escape"===e.key&&w()};return e&&e.addEventListener("keydown",t),function(){e&&e.removeEventListener("keydown",t)}},[w,P]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(U.ZP,{ref:Z,value:C,onChange:b,className:"m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0"}),(0,a.jsxs)(D,{children:[(0,a.jsx)(B.z,{as:"button",onClick:P,className:"mr-2",disabled:p,children:k?"Save new edit":"Save & Submit"}),(0,a.jsx)(B.z,{as:"button",color:"neutral",onClick:w,children:"Cancel"})]})]})}function V(){var e=(0,i.Z)(["\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n","\n","\n"]);return V=function(){return e},e}var W=u.memo(function(e){var t=e.message,n=e.isEditing,i=e.format,c=e.isCompletionInProgress,s=e.className,f=(0,o.Z)(e,["message","isEditing","format","isCompletionInProgress","className"]),m=(0,u.useMemo)(function(){return t.err||l.Cv.getTextFromMessage(t.message)},[t]);return n?(0,a.jsx)($,(0,r.Z)({currentLeaf:t.nodeId,initialText:m,parentId:t.parentId,role:t.message.role},f)):(0,a.jsx)(X,{text:m,errCode:t.errCode,flag:t.errType,isActive:!0,isCompletionInProgress:c,format:i,className:s,showContentPolicyViolation:t.errCode===d.Dd})});function X(e){var t=e.text,n=e.isActive,r=e.format,o=e.className,i=e.isCompletionInProgress,u=e.flag,s=e.size,d=e.showContentPolicyViolation;return(0,a.jsxs)("div",{className:(0,c.Z)(o,"flex flex-col items-start gap-4 whitespace-pre-wrap",!n&&"hidden","danger"===u&&"flex flex-row gap-2 text-red-500","warning"===u&&"text-orange-500"),children:[r?(0,a.jsx)(_,{size:void 0===s?"medium":s,className:(0,c.Z)("danger"!==u&&i&&"result-streaming","danger"===u&&"text-red-500","warning"===u&&"text-orange-500"),children:""===t?"&#8203;":t}):t,d&&(0,a.jsx)(O,{$flag:u,children:("danger"===u||"warning"===u)&&(0,a.jsx)(K,{})})]})}function K(){return(0,a.jsxs)(a.Fragment,{children:["This content may violate our"," ",(0,a.jsx)("a",{target:"_blank",href:"https://beta.openai.com/docs/usage-policies/content-policy",rel:"noreferrer",className:"bold underline",children:"content policy"}),". If you believe this to be in error, please"," ",(0,a.jsx)("a",{target:"_blank",href:"https://forms.gle/3gyAMj5r5rTEcgbs5",rel:"noreferrer",className:"bold underline",children:"submit your feedback"})," ","— your input will aid our research in this area."]})}var O=s.Z.div(V(),function(e){return"warning"===e.$flag&&"border-orange-500 bg-orange-500/10"},function(e){return"danger"===e.$flag&&"border-red-500 bg-red-500/10"})},80836:function(e,t,n){n.d(t,{Cv:function(){return x},uV:function(){return v}});var r,o,i=n(35025),a=n(43905),c=n(33861),u=n(31501),s=n(89874),d=n(64705),l=n(25769),f=n(84251),m=n.n(f),p=n(8844),h=n(68619),g=(r={},(0,c.Z)(r,h.Jq.Root,h.uU.Unknown),(0,c.Z)(r,h.Jq.Prompt,h.uU.User),(0,c.Z)(r,h.Jq.Completion,h.uU.Assistant),(0,c.Z)(r,h.Jq.System,h.uU.System),r),v=(o={},(0,c.Z)(o,h.uU.Unknown,h.Jq.Root),(0,c.Z)(o,h.uU.System,h.Jq.System),(0,c.Z)(o,h.uU.User,h.Jq.Prompt),(0,c.Z)(o,h.uU.Assistant,h.Jq.Completion),(0,c.Z)(o,h.uU.Critic,h.Jq.Completion),(0,c.Z)(o,h.uU.Tool,h.Jq.Completion),o),x=function(){function e(t){(0,i.Z)(this,e),this.tree=t||e.createTree()}var t=e.prototype;return t.getNode=function(e){return this.tree[e]},t.getMessage=function(e){return this.tree[e].message},t.getMessageId=function(e){return this.tree[e].message.id},t.getMetadata=function(e){return this.tree[e].metadata},t.getLeafFromNode=function(e){for(var t=this.tree[e];;){if(0===t.children.length)return t;t=this.tree[t.children.values().next().value]}},t.getParent=function(e){var t=this.tree[e].parentId;return this.tree[t]},t.getParentId=function(e){var t;return(null===(t=this.getParent(e))||void 0===t?void 0:t.id)||"root"},t.getBranchFromLeaf=function(e){for(var t=[],n=this.tree[e];t.push(n),"root"!==n.type;)n=this.tree[n.parentId];return t.reverse()},t.getChildrenFromNode=function(e){var t=this,n=this.tree[e];return n?Array.from(n.children).map(function(e){return t.tree[e]}):[]},t.addNodeToEnd=function(e,t){if(!this.tree[e])return(0,c.Z)({},t.id,t);this.tree=m()(this.tree,(0,c.Z)({$merge:(0,c.Z)({},t.id,t)},e,{children:{$apply:function(e){return Array.from(new Set((0,d.Z)(e).concat([t.id])))}}}))},t.addNode=function(e,t,n,r,o){var i="string"==typeof t?{id:(0,p.Z)(),role:g[r],content:{content_type:h.PX.Text,parts:[t]}}:t,a=(0,u.Z)({id:e,children:[],parentId:n,type:r,message:i},o?{metadata:o}:{});this.addNodeToEnd(n,a)},t.updateNode=function(e,t){this.tree=m()(this.tree,(0,c.Z)({},e,t))},t.updateNodeMessage=function(e,t){this.tree=m()(this.tree,(0,c.Z)({},e,{message:{$set:t}}))},t.updateNodeText=function(e,t){this.tree=m()(this.tree,(0,c.Z)({},e,{message:{content:{parts:{$set:[t]}}}}))},t.deleteNode=function(e){var t=this.tree,n=t[e],r=(0,s.Z)(t,[e].map(l.Z)),o=n.parentId;this.tree=m()(r,(0,c.Z)({},o,{children:{$apply:function(t){return t.filter(function(t){return t!==e})}}}))},t.getTextFromNode=function(t){return e.getTextFromMessage(this.getMessage(t))},t.getTextFromThread=function(t){return this.getBranchFromLeaf(t).filter(function(e){return e.type!==h.Jq.Root&&e.type!==h.Jq.System}).map(function(t){return e.getTextFromMessage(t.message)}).join("\n\n")},t.getTextFromLastNMessages=function(t,n){return this.getBranchFromLeaf(t).slice(-n).filter(function(e){return e.type!==h.Jq.Root&&e.type!==h.Jq.System}).map(function(t){return e.getTextFromMessage(t.message)}).join("\n\n")},t.getConversationItems=function(e){var t=this,n=[];return this.getBranchFromLeaf(e).forEach(function(e){var r=e.id,o=e.parentId,i=e.message,a=e.metadata,c=n[n.length-1];(null==c?void 0:c.role)===i.role||i.role===h.uU.Tool?n[n.length-1].messages.push((0,u.Z)({nodeId:r,parentId:o,message:i},a)):n.push({role:i.role,messages:[(0,u.Z)({nodeId:r,parentId:o,message:i},a),],variantIds:o?Array.from(t.tree[o].children):[r]})}),n},t.getParentPromptNode=function(e){for(var t=this.tree[e];t.type!==h.Jq.Prompt;)t=this.tree[t.parentId];return t},e.createTree=function(){return{root:{id:"root",children:[],parentId:"",type:h.Jq.Root,message:e.createRootMessage()}}},e.createRootMessage=function(){return{id:(0,p.Z)(),role:g[h.Jq.Root],content:{content_type:h.PX.Text,parts:[]}}},e.getTextFromMessage=function(e){return e.content.content_type===h.PX.Text?e.content.parts.join(""):""},(0,a.Z)(e,[{key:"isFirstCompletion",get:function(){return 3===Object.values(this.tree).length}}]),e}()},60612:function(e,t,n){var r=n(70079);t.Z=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),(0,r.useCallback)(function(){return e.current},[])}},98943:function(e,t,n){n.d(t,{MC:function(){return o},VY:function(){return r},s6:function(){return i}});var r="Explorer: ",o={Dashboard:"Dashboard: ",Thread:"Thread: ",CodeQA:"CodeQA: "},i={pageLoad:function(e){return"".concat(e,"Page Load")},editPrompt:function(e){return"".concat(e,"Edit Prompt")},cancelEditPrompt:function(e){return"".concat(e,"Cancel Edit Prompt")},editCompletion:function(e){return"".concat(e,"Edit Completion")},cancelEditCompletion:function(e){return"".concat(e,"Cancel Edit Completion")},generateCompletion:function(e){return"".concat(e,"Generate Completion")},completionFinished:function(e){return"".concat(e,"Completion Finished")},pauseCompletion:function(e){return"".concat(e,"Pause Completion")},copyToClipboard:function(e){return"".concat(e,"Copy Thread to Clipboard")},copyNodeToClipboard:function(e){return"".concat(e,"Copy Node to Clipboard")},newThread:function(e){return"".concat(e,"Create New Thread")},loadThread:function(e){return"".concat(e,"Load Thread")},renameThread:function(e){return"".concat(e,"Rename Thread")},changeNode:function(e){return"".concat(e,"Change Active Node")},enableFormattingThread:function(e){return"".concat(e,"Enable Thread Formatting")},disableFormattingThread:function(e){return"".concat(e,"Disable Thread Formatting")},enableFormatNode:function(e){return"".concat(e,"Enable Node Formatting")},disableFormatNode:function(e){return"".concat(e,"Disable Node Formatting")},addLink:function(e){return"".concat(e,"Add Link")},removeLink:function(e){return"".concat(e,"Remove Link")},reportResult:function(e){return"".concat(e,"Report Result")},thumbRating:function(e){return"".concat(e,"Rated Result")},allowContactForFeedback:function(e){return"".concat(e,"Allow contact for Feedback")},moderationError:function(e){return"".concat(e,"Moderation: Error")},promptFlaggedByModeration:function(e){return"".concat(e,"Moderation: Prompt Content Flagged")},promptBlockedByModeration:function(e){return"".concat(e,"Moderation: Prompt Content Blocked")},promptUsedRestrictedWords:function(e){return"".concat(e,"Moderation: Prompt Has Restricted Terms")},completionFlaggedByModeration:function(e){return"".concat(e,"Moderation: Completion Content Flagged")},completionBlockedByModeration:function(e){return"".concat(e,"Moderation: Completion Content Blocked")},clickDiscordLink:function(e){return"".concat(e,"Click Discord")},clickFaqLink:function(e){return"".concat(e,"Click FAQ")},rateLimitModalLoaded:function(e){return"".concat(e,"Captcha: Rate Limit Modal - Displayed")},rateLimitModalActionClicked:function(e){return"".concat(e,"Captcha: Rate Limit Modal - Action Clicked")},rateLimitPageLoaded:function(e){return"".concat(e,"Captcha: Rate Limit Page - Loaded")},rateLimitCaptchaReceivedIdLoaded:function(e){return"".concat(e,"Captcha: Rate Limit Page - Response: Id Found")},rateLimitCaptchaReceivedNoIdFound:function(e){return"".concat(e,"Captcha: Rate Limit Page - Response: No Id")},captchaPageLoaded:function(e){return"".concat(e,"Captcha: Submission Page - Loaded")},clickSidebarAccountPaymentMenuItem:function(e){return"".concat(e,"Account Pay: Click Sidebar Account Pay")},clickAccountPaymentSuccessContinue:function(e){return"".concat(e,"Account Pay: Click Account Payment Success Continue")},clickAccountPaymentCheckout:function(e){return"".concat(e,"Account Pay: Payment Checkout Clicked")},closeAccountPaymentModal:function(e){return"".concat(e,"Account Pay: Close Account Payment Modal")},clickSidebarAccountPortalMenuItem:function(e){return"".concat(e,"Account Portal: Click Sidebar Account Portal")},clickAccountCustomerPortal:function(e){return"".concat(e,"Account Portal: Click Manage My Subscription")}}},12762:function(e,t,n){n.d(t,{Af:function(){return f},WS:function(){return m}});var r,o=n(35025),i=n(31501),a=n(61079),c=n(79153),u=n.n(c),s=n(70079),d=n(98943),l=new(function(){function e(){(0,o.Z)(this,e),this._initializedMixpanel=!1,this._identified=!1,this._skipMixpanel=!0}var t=e.prototype;return t.pageview=function(e,t){this._sendMixpanelEvent("View Page",(0,i.Z)({page:e},t))},t.event=function(e,t){this._sendMixpanelEvent(e,t)},t.publicEvent=function(e,t){this._sendMixpanelEvent(e,t,!1)},t.setUser=function(e){if(!this._identified){var t=(e.email||"").toLowerCase();this._skipMixpanel=function(e){for(var t=0,n=0,r=e.length;n<r;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return(t- -2147483647)/4294967294}(t)>.2,(!this._skipMixpanel||e.features.includes("forceAnalytics"))&&(this._initializeMixpanel(),u().identify(e.id),u().people.set({$email:e.email,$user_id:e.id,name:e.name})),this._identified=!0}},t._initializeMixpanel=function(){this._initializedMixpanel||(u().init("d7d7628de9d5e6160010b84db960a7ee"),this._initializedMixpanel=!0)},t._sendMixpanelEvent=function(e,t){var n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(!this._skipMixpanel)(!n||this._identified)&&(this._initializeMixpanel(),t=(0,a.Z)((0,i.Z)({},t),{openai_app:"API"}),u().track(e,t))},e}()),f=(0,s.createContext)({}),m=function(e){var t=(0,s.useContext)(f),n=e||t,r=n.app,o=n.origin;return(0,s.useMemo)(function(){return function(e,t){l.event(e("".concat(r).concat(d.MC.Thread)),(0,a.Z)((0,i.Z)({},t),{origin:o}))}},[r,o])};t.ZP=l},36613:function(e,t,n){n.d(t,{Dd:function(){return a},Mf:function(){return c},_I:function(){return s},sK:function(){return u}});var r=n(95182),o=n.n(r),i=n(60814),a="content_policy",c={errType:"warning",errCode:a},u={err:"Contents may violate our content policy",errType:"danger",errCode:a};function s(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a=o()(e.length,0,4e3),c=o()(e.length-a,0,e.length-1),u=t?e.substring(c,e.length):e;return u?i.ZP.runModerationApi(u,n,r).then(function(e){var t,n;return{isBlocked:Boolean(e.blocked),isFlagged:Boolean(e.flagged)}}).catch(function(e){return console.error(e),{isBlocked:!1,isFlagged:!1,error:e}}):Promise.resolve({isBlocked:!1,isFlagged:!1})}}}]);