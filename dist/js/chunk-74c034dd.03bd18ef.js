(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74c034dd"],{"50fc":function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return u}));var a=e("66df"),c=function(t,n){return a["a"].request({url:"/admin/chat/add_chat/".concat(t,"/").concat(n),method:"post"})},r=function(t){return a["a"].request({url:"/admin/chat/del_chat/".concat(t),method:"post"})},s=function(t,n,e,c){return a["a"].request({url:"/admin/chat/get_chat/".concat(e,"/").concat(c),params:{type:t,status:n},method:"get"})},o=function(t){return a["a"].request({url:"/admin/user/get_users/".concat(t),method:"get"})},u=function(t){return a["a"].request({url:"/admin/user/reset_pwd/".concat(t),method:"post"})}},9328:function(t,n,e){"use strict";e.d(n,"f",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return r})),e.d(n,"g",(function(){return s})),e.d(n,"a",(function(){return o})),e.d(n,"d",(function(){return u})),e.d(n,"e",(function(){return i}));var a=["群发服务","私信服务","拉群服务"],c=["新绑定","正常","被禁言（spam）","被封禁（banned）","验证失效"],r=["工作信息","商业推广","美食外卖","其他业务"],s=["文字","图片"],o=["未通过","通过"],u=[1,2,3,4],i=[1,2,3,4,5,6]},a0c7:function(t,n,e){"use strict";var a=e("c205"),c=e.n(a);c.a},c205:function(t,n,e){},d845:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"service-chat"},[e("div",{staticClass:"title"},[e("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"群类型"},on:{"on-change":t.changeType},model:{value:t.type,callback:function(n){t.type=n},expression:"type"}},t._l(this.chatType,(function(n,a){return e("Option",{key:a,attrs:{value:a}},[t._v(t._s(n))])})),1),e("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"审核状态"},on:{"on-change":t.changeStatus},model:{value:t.status,callback:function(n){t.status=n},expression:"status"}},t._l(this.chatStatus,(function(n,a){return e("Option",{key:a,attrs:{value:a}},[t._v(t._s(n))])})),1),e("Table",{attrs:{columns:t.columns,data:t.chatids}}),e("Page",{attrs:{"page-size":50,total:5e3,simple:""},on:{"on-change":t.getChat}})],1)])},c=[],r=e("9328"),s=e("50fc"),o={data:function(){var t=this,n=[{title:"群名称",key:"chatid",render:function(t,n){return t("span",n.row.chatname)}},{title:"群类型",key:"type",render:function(t,n){return t("span",r["b"][n.row.type])}},{title:"是否入群验证",key:"auth",render:function(t,n){return t("div",[t("span",{style:{color:n.row.auth?"red":""}},n.row.auth?"需要":"不需要"),t("Button",{props:{size:"small",disabled:!!n.row.status},style:{marginLeft:"5px"},on:{click:function(){n.row.auth=0===n.row.auth?1:0}}},"切换")])}},{title:"审核状态",key:"status",render:function(t,n){return t("span",{style:{color:n.row.status?"red":""}},n.row.status?"已通过":"未通过")}},{title:"操作",key:"action",render:function(n,e){return n("div",[n("Button",{props:{type:"primary",size:"small",disabled:!!e.row.status},style:{marginRight:"5px"},on:{click:function(){t.addChat(e.row._id,e.row.auth)}}},"通过"),n("Button",{props:{type:"error",size:"small"},on:{click:function(){t.delChat(e.row._id)}}},"删除")])}}];return{chatType:r["b"],chatStatus:r["a"],columns:n,chatids:[],auth:["不需要","需要"],status:0,type:0,new_chat:{chatid:"",type:"",auth:""}}},mounted:function(){this.getChat()},methods:{getChat:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(s["c"])(this.type,this.status,n,50).then((function(n){t.chatids=n.data.msg}))},changeStatus:function(t){this.state=t,this.getChat()},changeType:function(t){this.type=t,this.getChat()},addChat:function(t,n){var e=this;this.$Modal.confirm({title:"是否通过该群？",content:"<div><p>审核通过</p></div>",onOk:function(){Object(s["a"])(t,n).then((function(t){t.data.success?(e.$Notice.success({title:t.data.msg}),e.getChat()):e.$Notice.error({title:t.data.msg})})).catch((function(t){console.log(t)}))}})},delChat:function(t){var n=this;this.$Modal.confirm({title:"是否删除该群？",content:"<p>审核不通过</p>",onOk:function(){Object(s["b"])(t).then((function(t){t.data.success?(n.$Notice.success({title:t.data.msg}),n.getChat()):n.$Notice.error({title:t.data.msg})})).catch((function(t){console.log(t)}))}})}}},u=o,i=(e("a0c7"),e("2877")),d=Object(i["a"])(u,a,c,!1,null,"d5810a4e",null);n["default"]=d.exports}}]);