(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e5c83d0"],{"058f":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"hr-client"}},[e("ul",{staticClass:"flex-start-center"},[t._l(t.clientList,(function(n,i){return e("li",{key:i,staticClass:"client-item-frame"},[e("Card",{staticClass:"client-item"},[e("div",{staticClass:"item-info"},[t._v("实例信息")]),e("div",{staticClass:"item-info"},[t._v("TG账号："),e("b",[t._v(t._s(n.phone))])]),e("div",{staticClass:"item-info"},[t._v("TG用户名："),n.name?e("span",[t._v(t._s(n.name))]):e("a",[t._v("获取")])]),e("div",{staticClass:"item-info"},[t._v("实例状态：\n            "),e("span",{style:{color:2==n.status||3==n.status?"red":""}},[t._v(t._s(t.clientStatus[n.status]))]),2==n.status?e("a",{on:{click:function(e){return t.restore(n.phone)}}},[t._v("已恢复")]):t._e()]),e("div",{staticClass:"item-info"},[t._v("是否使用："),n.used?e("span",{staticStyle:{color:"red"}},[t._v("已使用")]):e("span",[t._v("未使用")])])])],1)})),e("li",{staticClass:"client-item-frame"},[e("Card",{staticClass:"client-item"},[t.newClient.binding?e("div",[e("div",{staticClass:"bind-item"},[e("Input",{attrs:{placeholder:"TG账号（带国家区号）"},model:{value:t.newClient.phone,callback:function(n){t.$set(t.newClient,"phone",n)},expression:"newClient.phone"}},[t.newClient.timer?e("Button",{staticStyle:{width:"100px"},attrs:{slot:"append",disabled:t.newClient.timer>0},slot:"append"},[t._v("已发送 "+t._s(t.newClient.timer)+"s")]):e("Button",{staticStyle:{width:"100px"},attrs:{slot:"append",disabled:t.laoding},on:{click:t.sendCode},slot:"append"},[t._v("发送验证码")])],1)],1),e("div",{staticClass:"bind-item"},[e("Input",{attrs:{placeholder:"输入验证码"},model:{value:t.newClient.code,callback:function(n){t.$set(t.newClient,"code",n)},expression:"newClient.code"}},[e("Button",{staticStyle:{width:"100px"},attrs:{slot:"append"},on:{click:t.confirmCode},slot:"append"},[t._v("确认验证码")])],1)],1),e("div",{staticClass:"bind-item"},[e("Button",{staticClass:"cancel-bind",attrs:{type:"error"},on:{click:t.cancelConfirm}},[t._v("取消绑定")])],1)]):e("Button",{attrs:{type:"primary"},on:{click:function(n){t.newClient.binding=!0}}},[t._v("绑定已注册的TG账号")])],1)],1)],2)])},c=[],s=e("b39f"),o=e("acd9"),r=e("9328"),a={data:function(){return{clientList:[],clientStatus:r["c"],newClient:{binding:!1,phone:"",code:"",type:null,timer:0},countdown:null,laoding:!1}},mounted:function(){this.getClient()},methods:{getClient:function(){var t=this;Object(o["e"])().then((function(n){n.data.success&&(t.clientList=n.data.msg)}))},sendCode:function(){var t=this;if(!this.newClient.phone.trim())return this.$Notice.error({title:"请输入telegram账号"});Object(o["f"])(this.newClient.phone).then((function(n){return n.data.success?(t.newClient.phone="",t.newClient.code="",t.newClient.binding=!1,t.getClient(),t.$Notice.success({title:n.data.msg})):t.$Notice.error({title:n.data.msg})})).catch((function(n){return t.$Notice.error({title:n.response.data.msg})})).finally((function(){t.stopCount()})),this.startCount()},confirmCode:function(){var t=this;return this.newClient.phone.trim()?this.newClient.timer?this.newClient.code?(this.laoding=!0,void Object(o["b"])(this.newClient.phone,this.newClient.code).then((function(t){console.log(t.data)})).finally((function(){t.laoding=!1}))):this.$Notice.error({title:"请输入验证码"}):this.$Notice.error({title:"请先发送验证码"}):this.$Notice.error({title:"请输入telegram账号"})},cancelConfirm:function(){this.newClient.phone.trim()&&this.newClient.timer&&Object(o["b"])(this.newClient.phone,"1111").then((function(t){console.log(t.data)})),this.newClient.binding=!1,this.newClient.phone="",this.newClient.code="",this.newClient.type=null,this.stopCount()},startCount:function(){var t=this;this.newClient.timer=120,this.countdown=setInterval((function(){t.newClient.timer--,0===t.newClient.timer&&clearInterval(t.countdown)}),1e3)},stopCount:function(){this.newClient.timer=0,clearInterval(this.countdown)},restore:function(t){var n=this;if(this.laoding)return!1;this.laoding=!0,Object(s["b"])(t).then((function(t){t.data;n.getClient()})).finally((function(){n.laoding=!1}))}}},l=a,u=(e("0f75"),e("2877")),d=Object(u["a"])(l,i,c,!1,null,"56915b6b",null);n["default"]=d.exports},"0f75":function(t,n,e){"use strict";var i=e("4039"),c=e.n(i);c.a},4039:function(t,n,e){},9328:function(t,n,e){"use strict";e.d(n,"e",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return s})),e.d(n,"f",(function(){return o})),e.d(n,"a",(function(){return r})),e.d(n,"d",(function(){return a}));var i=["群发服务","私信服务","拉群服务"],c=["未开启","正常","被禁言（spam）","被封禁（banned）"],s=["招聘","BC推广","美食外卖","其他推广"],o=["文字","图片"],r=["未通过","通过"],a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]},acd9:function(t,n,e){"use strict";e.d(n,"e",(function(){return c})),e.d(n,"f",(function(){return s})),e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return r})),e.d(n,"d",(function(){return a})),e.d(n,"c",(function(){return l}));var i=e("66df"),c=function(){return i["a"].request({url:"service/client/get_user_client",method:"get"})},s=function(t){return i["a"].request({url:"service/auth/send_code/".concat(t),method:"post"})},o=function(t,n){return i["a"].request({url:"service/auth/confirm_code/".concat(t,"/").concat(n),method:"post"})},r=function(t,n,e){return i["a"].request({url:"service/chat/add_chat/".concat(t,"/").concat(n,"/").concat(e),method:"post"})},a=function(t,n){return i["a"].request({url:"service/chat/get_user_chat/".concat(t,"/").concat(n),method:"get"})},l=function(t){return i["a"].request({url:"/service/chat/get_chat/".concat(t),method:"get"})}},b39f:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return s}));var i=e("66df"),c=function(t,n){return i["a"].request({url:"/service/client/get_notused_client",method:"get"})},s=function(t){return i["a"].request({url:"/service/client/restore/".concat(t),method:"post"})}}}]);