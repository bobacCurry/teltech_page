(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fadd60e"],{"1fe9":function(t,e,n){},"97b9":function(t,e,n){"use strict";var s=n("1fe9"),o=n.n(s);o.a},b39f:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"g",(function(){return a})),n.d(e,"c",(function(){return l})),n.d(e,"f",(function(){return u}));var s=n("66df"),o=function(t){return s["a"].request({url:"/service/client/add_finish/".concat(t),method:"post"})},r=function(t,e){return s["a"].request({url:"/service/client/get_notused_client",method:"get"})},i=function(t,e){return s["a"].request({url:"/service/client/get_nomal_client",method:"get"})},c=function(t){return s["a"].request({url:"/service/client/del_user_client/".concat(t),method:"post"})},a=function(t){return s["a"].request({url:"/service/client/restore/".concat(t),method:"post"})},l=function(t){return s["a"].request({url:"/service/client/get_add_chat/".concat(t),method:"get"})},u=function(t){return s["a"].request({url:"/service/client/get_client/".concat(t),method:"get"})}},ef12:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("Col",{staticClass:"demo-spin-col",attrs:{span:"18"}},[n("Spin",{attrs:{fix:""}},[n("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"ios-loading",size:"60"}}),n("div",[t._v("执行中...")])],1)],1):t._e(),n("h2",[t._v("添加私发配置")]),n("br"),n("ul",{staticClass:"flex-start-top"},[n("li",[n("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"群名称（将人拉入该群）"},model:{value:t.new_person.target,callback:function(e){t.$set(t.new_person,"target",e)},expression:"new_person.target"}})],1),t._v("\n\t\t\t   \n\t\t\t"),n("li",[n("Input",{staticStyle:{width:"300px"},attrs:{type:"textarea",placeholder:"私发内容"},model:{value:t.new_person.text,callback:function(e){t.$set(t.new_person,"text",e)},expression:"new_person.text"}})],1),t._v("\n\t\t\t   \n"),n("li",[n("Button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.addPerson}},[t._v("创建私发服务")])],1)]),n("Divider"),n("h2",[t._v("私发配置列表")]),n("div",[n("ul",{staticClass:"flex-start-top"},t._l(t.person_list,(function(e,s){return n("li",{key:s,staticClass:"service-item-frame"},[n("Collapse",[n("Panel",{attrs:{name:"目标群"}},[t._v("\n\t\t\t\t            目标群\n\t\t\t\t            "),n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"flex-start-center"},[n("div",{staticStyle:{"font-size":"14px"}},[t._v("\n\t\t\t\t\t            \t\t群名称："),n("a",{attrs:{href:"https://t.me/"+e.target,target:"blank"}},[t._v(t._s(e.target))])]),t._v("\n\t\t\t\t\t            \t   \n\t\t\t\t\t            \t"),n("div",[n("Button",{attrs:{type:"error",size:"small"},on:{click:function(n){return t.delPerson(e._id)}}},[t._v("删除服务")])],1)])])]),n("Panel",{attrs:{name:"私发内容"}},[t._v("\n\t\t\t\t            私发内容\n\t\t\t\t            "),n("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n\t\t\t\t            \t"+t._s(e.text)+"\n\t\t\t\t            ")])]),n("Panel",{attrs:{name:"待发送的用户"}},[t._v("\n\t\t\t\t            待发送的用户\n\t\t\t\t            "),n("div",{attrs:{slot:"content"},slot:"content"},t._l(e.send_list,(function(e,s){return n("Tag",{attrs:{color:"primary"}},[t._v(t._s(e))])})),1)]),n("Panel",{attrs:{name:"已发送的用户"}},[t._v("\n\t\t\t\t            已发送的用户\n\t\t\t\t            "),n("div",{attrs:{slot:"content"},slot:"content"},t._l(e.sended_list,(function(e,s){return n("Tag",{attrs:{color:"primary"}},[t._v(t._s(e))])})),1)]),n("Panel",{attrs:{name:"可发用户"}},[t._v("\n\t\t\t\t            飞机号列表\n\t\t\t\t            "),n("div",{attrs:{slot:"content"},slot:"content"},[n("ul",[t._l(e.phone_list,(function(o,r){return n("li",{key:r,staticClass:"flex-start-center phone-item-frame"},[n("div",{staticClass:"phone-item"},[t._v(t._s(o))]),t._v("\n\t\t\t\t            \t\t\t   \n\t\t\t\t            \t\t\t"),n("div",[n("Button",{attrs:{type:"primary",size:"small",disabled:t.loading},on:{click:function(n){return t.sendMessage(e._id,o)}}},[t._v("执行发送")])],1),t._v("\n\t\t\t\t            \t\t\t   \n\t\t\t\t            \t\t\t"),n("div",[n("Button",{attrs:{type:"error",size:"small"},on:{click:function(n){return t.delPersonPhone(e._id,o,s)}}},[t._v("删除TG")])],1)])})),n("li",{staticClass:"flex-start-center phone-item-frame"},[n("div",{staticClass:"phone-item"},[n("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"选择TG实例"},model:{value:t.new_phone,callback:function(e){t.new_phone=e},expression:"new_phone"}},t._l(t.client_list,(function(e,s){return n("Option",{key:s,attrs:{value:e.phone}},[t._v(t._s(e.phone))])})),1)],1),t._v("\n\t\t\t\t            \t\t\t   \n\t\t\t\t            \t\t\t"),n("div",[n("Button",{attrs:{type:"primary",size:"small",disabled:t.loading},on:{click:function(n){return t.addPersonPhone(e._id,s)}}},[t._v("绑定TG")])],1)])],2)])])],1)],1)})),0)])],1)},o=[],r=n("b39f"),i=n("66df"),c=function(t){return i["a"].request({url:"/service/person/add_person",method:"post",data:t})},a=function(){return i["a"].request({url:"/service/person/get_person",method:"post"})},l=function(t){return i["a"].request({url:"/service/person/del_person/".concat(t),method:"post"})},u=function(t,e){return i["a"].request({url:"/service/person/add_person_phone",method:"post",data:{_id:t,phone:e}})},d=function(t,e){return i["a"].request({url:"/service/person/del_person_phone",method:"post",data:{_id:t,phone:e}})},p=function(t,e){return i["a"].request({url:"/service/person/send_message/".concat(t,"/").concat(e),method:"post"})},_={data:function(){return{new_person:{target:"",text:"",no_admin:!0},person_list:[],new_phone:"",client_list:[],loading:!1}},mounted:function(){this.getNomal(),this.getPerson()},methods:{getNomal:function(){var t=this;Object(r["d"])().then((function(e){e.data.success&&(t.client_list=e.data.msg)}))},addPerson:function(){var t=this;if(!this.new_person.target.trim()||!this.new_person.text.trim())return this.$Notice.error({title:"信息不完整"});this.loading=!0,c(this.new_person).then((function(e){var n=e.data;return t.loading=!1,n.success?(t.new_person.target="",t.new_person.text="",t.getPerson(),t.$Notice.success({title:"保存成功"})):t.$Notice.error({title:n.msg})})).catch((function(e){t.loading=!1,console.log(e)}))},getPerson:function(){var t=this;a().then((function(e){var n=e.data;if(!n.success)return t.$Notice.error({title:n.msg});t.person_list=n.msg})).catch((function(t){console.log(t)}))},delPerson:function(t){var e=this;this.$Modal.confirm({title:"删除该服务",content:"是否删除该私发服务？",onOk:function(){l(t).then((function(t){var n=t.data;return n.success?(e.getPerson(),e.$Notice.success({title:n.msg})):e.$Notice.error({title:n.msg})})).catch((function(t){console.log(t)}))}})},addPersonPhone:function(t,e){var n=this;this.loading=!0,u(t,this.new_phone).then((function(t){var s=t.data;return s.success?(n.person_list[e].phone_list.push(n.new_phone),n.getNomal(),n.new_phone="",n.loading=!1,n.$Notice.success({title:s.msg})):n.$Notice.error({title:s.msg})})).catch((function(t){n.loading=!1,console.log(t)}))},delPersonPhone:function(t,e,n){var s=this;d(t,e).then((function(t){var o=t.data;if(!o.success)return s.$Notice.error({title:o.msg});var r=s.person_list[n].phone_list.indexOf(e);return s.person_list[n].phone_list.splice(r,1),s.getNomal(),s.$Notice.success({title:o.msg})})).catch((function(t){console.log(t)}))},sendMessage:function(t,e){var n=this;this.loading=!0,p(t,e).then((function(t){var e=t.data;return n.loading=!1,e.success?n.$Notice.success({title:e.msg}):n.$Notice.error({title:e.msg})})).catch((function(t){console.log(t),n.loading=!1}))}}},f=_,h=(n("97b9"),n("2877")),v=Object(h["a"])(f,s,o,!1,null,"a3987552",null);e["default"]=v.exports}}]);