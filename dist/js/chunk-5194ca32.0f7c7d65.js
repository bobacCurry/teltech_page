(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5194ca32"],{"150f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-add"},[n("div",{staticClass:"zone-frame"},[n("h2",[t._v("新增拉人服务")]),n("div",{staticClass:"add-user flex-start-center"},[n("div",{staticClass:"info-item"},[n("Input",{attrs:{placeholder:"群名称（将人拉入该群）"},model:{value:t.target,callback:function(e){t.target=e},expression:"target"}})],1),t._v("\n\t\t\t \n\t\t\t"),n("div",{staticClass:"info-item"},[n("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"选择TG账号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}},t._l(t.clientList,(function(e,a){return n("Option",{key:a,attrs:{value:e.phone}},[t._v(t._s(e.phone))])})),1)],1),t._v("\n\t\t\t \n\t\t\t"),n("div",{staticClass:"info-item"},[n("Button",{attrs:{type:"primary",disabled:t.loading},on:{click:function(e){return t.add()}}},[t._v("创建拉人服务")])],1)])]),n("div",{staticClass:"zone-frame"},[n("h2",[t._v("新增拉人服务")]),n("div",{staticClass:"add-user flex-start-center"},t._l(t.addList,(function(e,a){return n("Card",{key:a,staticClass:"add-item"},[n("Collapse",{model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[n("Panel",{attrs:{name:"1"}},[t._v("\n\t\t\t        \t拉人的目标群\n\t\t\t           \t"),n("p",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(e.target))])]),n("Panel",{attrs:{name:"2"}},[t._v("\n\t\t\t            拉人的telegram号\n\t\t\t            "),n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"flex-start-center"},[n("Select",{staticStyle:{width:"50%"},attrs:{placeholder:"选择TG账号"},model:{value:t.addPhone,callback:function(e){t.addPhone=e},expression:"addPhone"}},t._l(t.clientList,(function(a,r){return-1===e.phone.indexOf(a.phone)?n("Option",{key:r,attrs:{value:a.phone}},[t._v(t._s(a.phone))]):t._e()})),1),t._v("\n\t\t\t\t\t\t\t     \n\t\t\t            \t\t"),n("Button",{attrs:{type:"primary",disabled:t.loading},on:{click:function(n){return t.addPhonePost(t.addPhone,e._id)}}},[t._v("添加拉人号")])],1),n("div",{staticStyle:{"margin-top":"10px"}},t._l(e.phone,(function(e,a){return n("Tag",{attrs:{color:"primary"}},[t._v(t._s(e))])})),1)])]),n("Panel",{attrs:{name:"3"}},[t._v("\n\t\t\t            从下列群拉人\n\t\t\t            "),n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"flex-start-center"},[n("Input",{staticStyle:{width:"50%"},attrs:{placeholder:"群名称（将人拉入该群）"},model:{value:t.addChat,callback:function(e){t.addChat=e},expression:"addChat"}}),t._v("\n\t\t\t            \t\t \n\t\t\t            \t\t"),n("Button",{attrs:{type:"primary",disabled:t.loading},on:{click:function(n){return t.AddChatUser(t.addChat,e._id)}}},[t._v("添加群")])],1),n("div",{staticStyle:{"margin-top":"10px"}},t._l(e.chatids,(function(e,a){return n("Tag",{attrs:{color:"primary"}},[t._v(t._s(e))])})),1)])]),n("Panel",{attrs:{name:"4"}},[t._v("\n\t\t\t            需要拉的用户数量\n\t\t\t            "),n("p",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(e.uids.length)+" 个")])]),n("Panel",{attrs:{name:"5"}},[t._v("\n\t\t\t            拉入成功的数量\n\t\t\t            "),n("p",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(e.success.length)+" 个")])]),n("Panel",{attrs:{name:"6"}},[t._v("\n\t\t\t            拉入失败的数量\n\t\t\t            "),n("p",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(e.fail.length)+" 个")])])],1)],1)})),1)])])},r=[],s=(n("a481"),n("acd9")),o=n("66df"),c=function(t,e){return o["a"].request({url:"group/add_member/new_chat_user/".concat(t,"/").concat(e),method:"post"})},i=function(){return o["a"].request({url:"group/add_member/get_chat_user",method:"get"})},d=function(t,e){return o["a"].request({url:"group/add_member/add_chat_phone/".concat(t,"/").concat(e),method:"post"})},l=function(t,e){return o["a"].request({url:"group/add_member/add_chat_user/".concat(t,"/").concat(e),method:"post"})},u={data:function(){return{clientList:[],phone:"",target:"",panel:"1",addList:[],addPhone:"",addChat:"",loading:!1}},mounted:function(){this.getChatUser(),this.getUserClient()},methods:{add:function(){var t=this;return this.target.trim()?this.phone?(this.target=this.target.replace("https://t.me/",""),this.target=this.target.replace("@",""),this.loading=!0,void c(this.phone,this.target).then((function(e){var n=e.data;n.success?t.$Notice.success({title:n.msg}):t.$Notice.error({title:n.msg}),t.phone="",t.target="",t.loading=!1,t.getChatUser()}))):this.$Notice.error({title:"请选择一个tg账号"}):this.$Notice.error({title:"目标群群名称不得为空"})},getChatUser:function(){var t=this;i().then((function(e){var n=e.data;t.addList=n.msg}))},getUserClient:function(){var t=this;Object(s["e"])().then((function(e){var n=e.data;t.clientList=n.msg}))},addPhonePost:function(t,e){var n=this;return t?e?(this.loading=!0,void d(t,e).then((function(t){var e=t.data;e.success?(n.$Notice.success({title:e.msg}),n.addPhone="",n.getChatUser()):n.$Notice.error({title:e.msg}),n.loading=!1}))):this.$Notice.error({title:"服务不得为空"}):this.$Notice.error({title:"电话号不得为空"})},AddChatUser:function(t,e){var n=this;return t=t.replace("https://t.me/",""),t=t.replace("@",""),t?e?(this.loading=!0,void l(t,e).then((function(t){var e=t.data;e.success?(n.$Notice.success({title:e.msg}),n.addChat="",n.getChatUser()):n.$Notice.error({title:e.msg}),n.loading=!1}))):this.$Notice.error({title:"服务不得为空"}):this.$Notice.error({title:"群名称不得为空"})}}},h=u,p=(n("65f4"),n("2877")),v=Object(p["a"])(h,a,r,!1,null,"47b680bd",null);e["default"]=v.exports},"65f4":function(t,e,n){"use strict";var a=n("7101"),r=n.n(a);r.a},7101:function(t,e,n){},acd9:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return d}));var a=n("66df"),r=function(){return a["a"].request({url:"service/client/get_user_client",method:"get"})},s=function(t){return a["a"].request({url:"service/auth/send_code/".concat(t),method:"post"})},o=function(t,e){return a["a"].request({url:"service/auth/confirm_code/".concat(t,"/").concat(e),method:"post"})},c=function(t,e,n){return a["a"].request({url:"service/chat/add_chat/".concat(t,"/").concat(e,"/").concat(n),method:"post"})},i=function(t,e){return a["a"].request({url:"service/chat/get_user_chat/".concat(t,"/").concat(e),method:"get"})},d=function(t){return a["a"].request({url:"/service/chat/get_chat/".concat(t),method:"get"})}}}]);