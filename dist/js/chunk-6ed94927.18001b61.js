(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ed94927"],{"058f":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"hr-client"}},[e("ul",{staticClass:"flex-start-center"},[t._l(t.clientList,(function(n,i){return e("li",{key:i,staticClass:"client-item-frame"},[e("Card",{staticClass:"client-item"},[e("div",{staticClass:"item-info"},[t._v("实例信息")]),e("div",{staticClass:"item-info"},[t._v("TG账号："),e("b",[t._v(t._s(n.phone))])]),e("div",{staticClass:"item-info"},[t._v("TG用户名：\n            "),n.info?e("span",[t._v(t._s(n.info.first_name))]):t._e()]),e("div",{staticClass:"item-info"},[t._v("实例状态：\n            "),e("span",{style:{color:2==n.status||3==n.status?"red":""}},[t._v(t._s(t.clientStatus[n.status]))]),2==n.status||4==n.status?e("a",{on:{click:function(e){return t.restore(n.phone)}}},[t._v("已恢复")]):t._e(),0==n.status?e("span",[e("a",{on:{click:function(e){return t.$router.push("/add_chat?phone="+n.phone)}}},[t._v(" 去加群 ")]),t._v("("),e("a",{staticStyle:{color:"red"},on:{click:function(e){return t.addFinish(n.phone,i)}}},[t._v(" 已加过 ")]),t._v(")\n            ")]):t._e()]),e("div",{staticClass:"item-info"},[t._v("是否使用："),n.used?e("span",{staticStyle:{color:"red"}},[t._v("已使用")]):e("span",[t._v("未使用")])]),e("div",{staticClass:"item-info"},[t._v("删除账号："),e("a",{on:{click:function(e){return t.delClient(n.phone)}}},[t._v("确认删除")])])])],1)})),e("li",{staticClass:"client-item-frame"},[e("Card",{staticClass:"client-item"},[t.newClient.binding?e("div",[e("div",{staticClass:"bind-item"},[e("Input",{attrs:{placeholder:"TG账号（带国家区号）"},model:{value:t.newClient.phone,callback:function(n){t.$set(t.newClient,"phone",n)},expression:"newClient.phone"}},[t.newClient.timer?e("Button",{staticStyle:{width:"100px"},attrs:{slot:"append",disabled:t.newClient.timer>0},slot:"append"},[t._v("已发送 "+t._s(t.newClient.timer)+"s")]):e("Button",{staticStyle:{width:"100px"},attrs:{slot:"append",disabled:t.loading},on:{click:t.sendCode},slot:"append"},[t._v("发送验证码")])],1)],1),e("div",{staticClass:"bind-item"},[e("Input",{attrs:{placeholder:"输入验证码"},model:{value:t.newClient.code,callback:function(n){t.$set(t.newClient,"code",n)},expression:"newClient.code"}},[e("Button",{staticStyle:{width:"100px"},attrs:{slot:"append",disabled:t.loading},on:{click:t.confirmCode},slot:"append"},[t._v("确认验证码")])],1)],1),e("div",{staticClass:"bind-item"},[e("Button",{staticClass:"cancel-bind",attrs:{type:"error"},on:{click:t.cancelConfirm}},[t._v("取消绑定")])],1)]):e("Button",{attrs:{type:"primary"},on:{click:function(n){t.newClient.binding=!0}}},[t._v("绑定已注册的TG账号")])],1)],1)],2)])},c=[],o=e("b39f"),r=e("acd9"),s=e("9328"),a={data:function(){return{clientList:[],clientStatus:s["c"],newClient:{binding:!1,phone:"",code:"",type:null,timer:0},countdown:null,loading:!1}},mounted:function(){this.getClient()},methods:{getClient:function(){var t=this;Object(r["e"])().then((function(n){n.data.success&&(t.clientList=n.data.msg)}))},addFinish:function(t,n){var e=this;this.$Modal.confirm({title:"确认加过群了么？",content:"这个飞机号已经加过群了是吧，没加过群要先去加群的哦～～",onOk:function(){Object(o["a"])(t).then((function(t){var i=t.data;i.success&&(e.clientList[n].status=1)}))}})},sendCode:function(){var t=this;if(!this.newClient.phone.trim())return this.$Notice.error({title:"请输入telegram账号"});Object(r["f"])(this.newClient.phone).then((function(n){return n.data.success?(t.newClient.phone="",t.newClient.code="",t.newClient.binding=!1,t.getClient(),t.$Notice.success({title:"绑定成功"})):t.$Notice.error({title:n.data.msg})})).catch((function(n){return t.$Notice.error({title:n.response.data.msg})})).finally((function(){t.stopCount(),t.loading=!1})),this.startCount()},confirmCode:function(){return this.newClient.phone.trim()?this.newClient.timer?this.newClient.code?(this.loading=!0,void Object(r["b"])(this.newClient.phone,this.newClient.code).then((function(t){console.log(t.data)}))):this.$Notice.error({title:"请输入验证码"}):this.$Notice.error({title:"请先发送验证码"}):this.$Notice.error({title:"请输入telegram账号"})},cancelConfirm:function(){this.newClient.phone.trim()&&this.newClient.timer&&Object(r["b"])(this.newClient.phone,"1111").then((function(t){console.log(t.data)})),this.newClient.binding=!1,this.newClient.phone="",this.newClient.code="",this.newClient.type=null,this.stopCount()},startCount:function(){var t=this;this.newClient.timer=130,this.countdown=setInterval((function(){t.newClient.timer--,0===t.newClient.timer&&clearInterval(t.countdown)}),1e3)},stopCount:function(){this.newClient.timer=0,clearInterval(this.countdown)},restore:function(t){var n=this;if(this.loading)return!1;this.loading=!0,Object(o["g"])(t).then((function(t){t.data;n.getClient()})).finally((function(){n.loading=!1}))},delClient:function(t){var n=this;this.$Modal.confirm({title:"是否删除该账号？",content:"是否删除该账号？",onOk:function(){Object(o["b"])(t).then((function(t){var e=t.data;return e.success?(n.getClient(),n.$Notice.success({title:e.msg})):n.$Notice.error({title:"解除错误",desc:e.msg})}))}})},getlClient:function(t){var n=this;if(this.loading)return!1;this.loading=!0,Object(o["f"])(t).then((function(t){t.data;n.getClient()})).finally((function(){n.$Notice.info({title:"更新完毕"}),n.loading=!1}))}}},u=a,l=(e("162f"),e("2877")),d=Object(l["a"])(u,i,c,!1,null,"c7d57374",null);n["default"]=d.exports},"162f":function(t,n,e){"use strict";var i=e("de96"),c=e.n(i);c.a},9328:function(t,n,e){"use strict";e.d(n,"f",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return o})),e.d(n,"g",(function(){return r})),e.d(n,"a",(function(){return s})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return u}));var i=["群发服务","私信服务","拉群服务"],c=["新绑定","正常","被禁言（spam）","被封禁（banned）","验证失效"],o=["工作信息","商业推广","美食外卖","其他业务1","其他业务2"],r=["文字","图片"],s=["未通过","通过"],a=[1,2,3,4,5],u=[1,2,3,4,5,6]},acd9:function(t,n,e){"use strict";e.d(n,"e",(function(){return c})),e.d(n,"f",(function(){return o})),e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return s})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return u}));var i=e("66df"),c=function(){return i["a"].request({url:"service/client/get_user_client",method:"get"})},o=function(t){return i["a"].request({url:"service/auth/send_code/".concat(t),method:"post"})},r=function(t,n){return i["a"].request({url:"service/auth/confirm_code/".concat(t,"/").concat(n),method:"post"})},s=function(t,n,e){return i["a"].request({url:"service/chat/add_chat",data:{chatname:t,type:n,auth:e},method:"post"})},a=function(t){return i["a"].request({url:"/service/chat/get_chat/".concat(t),method:"get"})},u=function(t){return i["a"].request({url:"/service/chat/get_update_chat/".concat(t),method:"get"})}},b39f:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"e",(function(){return o})),e.d(n,"d",(function(){return r})),e.d(n,"b",(function(){return s})),e.d(n,"g",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"f",(function(){return l}));var i=e("66df"),c=function(t){return i["a"].request({url:"/service/client/add_finish/".concat(t),method:"post"})},o=function(t,n){return i["a"].request({url:"/service/client/get_notused_client",method:"get"})},r=function(t,n){return i["a"].request({url:"/service/client/get_nomal_client",method:"get"})},s=function(t){return i["a"].request({url:"/service/client/del_user_client/".concat(t),method:"post"})},a=function(t){return i["a"].request({url:"/service/client/restore/".concat(t),method:"post"})},u=function(t){return i["a"].request({url:"/service/client/get_add_chat/".concat(t),method:"get"})},l=function(t){return i["a"].request({url:"/service/client/get_client/".concat(t),method:"get"})}},de96:function(t,n,e){}}]);