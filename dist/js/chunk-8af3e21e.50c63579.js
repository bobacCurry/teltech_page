(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8af3e21e"],{"12f0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"service-group"},[r("div",{staticClass:"flex-between-center title"},[r("h2",[t._v("创建服务订单")]),r("div",[r("Button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.addPush}},[t._v("保存服务")])],1)]),r("div",{staticClass:"content"},[r("div",{staticClass:"content-title"},[t._v("业务配置")]),r("div",{staticClass:"flex-start-center"},[r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"100px"},attrs:{placeholder:"广告业务类型"},on:{"on-change":t.changeChatType},model:{value:t.order.chat_type,callback:function(e){t.$set(t.order,"chat_type",e)},expression:"order.chat_type"}},t._l(this.chatType,(function(e,n){return r("Option",{key:n,attrs:{value:n}},[t._v(t._s(e))])})),1)],1),r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"100px"},attrs:{placeholder:"广告文本类型"},model:{value:t.order.text_type,callback:function(e){t.$set(t.order,"text_type",e)},expression:"order.text_type"}},t._l(this.textType,(function(e,n){return r("Option",{key:n,attrs:{value:n}},[t._v(t._s(e))])})),1)],1),r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"选择TG账号"},model:{value:t.order.phone,callback:function(e){t.$set(t.order,"phone",e)},expression:"order.phone"}},t._l(this.clientList,(function(e,n){return r("Option",{key:n,attrs:{value:e.phone}},[t._v(t._s(e.phone))])})),1)],1),r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择发送的时间(分)"},model:{value:t.order.minute,callback:function(e){t.$set(t.order,"minute",e)},expression:"order.minute"}},t._l(this.minuteList,(function(e,n){return r("Option",{key:n,attrs:{value:e}},[t._v("\n\t\t\t        \t"+t._s([e,e+t.gap,e+2*t.gap,e+3*t.gap].slice(0,t.order.count).join(" - "))+" 分\n\t\t\t        ")])})),1)],1),r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"150px"},model:{value:t.order.count,callback:function(e){t.$set(t.order,"count",e)},expression:"order.count"}},t._l(t.pushCount,(function(e,n){return r("Option",{attrs:{value:e}},[t._v("\n\t\t\t        \t每小时发送"+t._s(e)+"次\n\t\t\t        ")])})),1)],1),r("div",{staticClass:"option-item"},[r("Input",{attrs:{placeholder:"服务备注"},model:{value:t.order.title,callback:function(e){t.$set(t.order,"title",e)},expression:"order.title"}})],1),r("div",{staticClass:"info-item"},[r("Checkbox",{on:{"on-change":t.checkAll}},[t._v("全选")])],1)])]),r("div",{staticClass:"content"},[r("div",{staticClass:"content-title"},[t._v("广告群配置（已选择 "+t._s(t.chat.length)+"个）")]),r("div",{staticClass:"flex-start-center"},[r("CheckboxGroup",{model:{value:t.chat,callback:function(e){t.chat=e},expression:"chat"}},t._l(t.chatList,(function(e,n){return r("Checkbox",{key:n,attrs:{label:e.chatid}},[r("span",{staticClass:"check-item"},[t._v(t._s(e.chatname)+" "),e.auth?r("label",{staticStyle:{color:"red"}},[t._v("(需验证)")]):t._e()])])})),1)],1)]),r("div",{staticClass:"content"},[r("div",{staticClass:"content-title"},[t._v("广告内容配置")]),1==t.order.text_type?r("div",{staticClass:"flex-start-center"},[t.order.media?r("div",{staticClass:"image-frame back-image",style:{"background-image":"url("+t.order.media+")"}},[r("Icon",{staticClass:"close",attrs:{type:"ios-close-circle",size:"30",color:"red"},on:{click:function(e){t.order.media=""}}})],1):r("div",{staticClass:"image-frame",on:{click:t.selectImg}},[r("Icon",{attrs:{type:"ios-add-circle",size:"100"}})],1),r("form",{staticStyle:{display:"none"},attrs:{id:"img-form"}},[r("input",{attrs:{id:"img-input",type:"file",accept:"image/*"},on:{change:function(e){return t.getImg(e)}}})]),r("Input",{staticClass:"text-frame",attrs:{type:"textarea",placeholder:"请输入文字文案",autosize:{minRows:10}},model:{value:t.order.caption,callback:function(e){t.$set(t.order,"caption",e)},expression:"order.caption"}})],1):r("div",[r("Input",{staticClass:"text-frame",attrs:{type:"textarea",placeholder:"请输入广告文案",autosize:{minRows:10}},model:{value:t.order.text,callback:function(e){t.$set(t.order,"text",e)},expression:"order.text"}})],1)])])},i=[],c=(r("ac6a"),r("9328")),a=r("acd9"),o=r("b39f"),s=r("22ce"),u=r("7e1e"),d={mounted:function(){this.getChat(),this.getClient()},computed:{gap:function(){var t=60/this.order.count;return t},minuteList:function(){for(var t=60/this.order.count,e=[],r=0;r<t;r++)e.push(r);return e}},data:function(){return{chatType:c["b"],textType:c["f"],pushCount:c["d"],clientList:[],chatList:[],loading:!1,chat:[],order:{title:"",chat_type:0,text_type:"",phone:"",chat:[],text:"",media:"",caption:"",minute:0,count:3}}},methods:{getClient:function(){var t=this;Object(o["c"])().then((function(e){e.data.success&&(t.clientList=e.data.msg)}))},getChat:function(){var t=this;Object(a["c"])(this.order.chat_type).then((function(e){e.data.success&&(t.chatList=e.data.msg)}))},changeChatType:function(t){this.order.chat_type=t,this.getChat()},addPush:function(){var t=this;return String(this.order.chat_type)?String(this.order.text_type)?this.order.phone?String(this.order.minute)?this.chat.length?("0"!==String(this.order.text_type)||this.order.text.trim())&&("1"!==String(this.order.text_type)||this.order.media.trim())?this.chat.length>150?this.$Notice.error({title:"最多选择150个群"}):(this.loading=!0,this.order.chat=[],this.chatList.forEach((function(e,r){-1!==t.chat.indexOf(e.chatid)&&t.order.chat.push({chatid:e.chatid,chatname:e.chatname})})),void Object(s["b"])(this.order).then((function(e){return e.data.success?(t.$router.push("/deal/service"),t.$Notice.success({title:e.data.msg})):t.$Notice.error({title:e.data.msg})})).catch((function(e){t.$Notice.error({title:e.response.data.msg})})).finally((function(){t.loading=!1}))):this.$Notice.error({title:"请填写广告文本"}):this.$Notice.error({title:"请选择要发送的群组"}):this.$Notice.error({title:"请选择发送的时间"}):this.$Notice.error({title:"请选择TG实例"}):this.$Notice.error({title:"请选择文本类型"}):this.$Notice.error({title:"请选择服务类型"})},selectImg:function(){document.getElementById("img-input").click()},getImg:function(t){var e=t.target.files[0];if(t.target.value="",!e)return!1;if(e.size>3e5)return this.$Notice.error({title:"图片大小不得超过300kb"});var r=this,n=new FileReader;n.readAsDataURL(e),n.onload=function(){r.upload(this.result)}},upload:function(t){var e=this;Object(u["b"])({image:t}).then((function(t){var r=t.data;r.success?e.order.media=r.path:e.$Notice.error({title:r.msg})}))},checkAll:function(t){if(t){this.chat=[];for(var e=this.chatList.length-1;e>=0;e--)this.chatList[e].auth||this.chat.push(this.chatList[e].chatid)}else this.chat=[]}}},l=d,h=(r("b7bb"),r("2877")),p=Object(h["a"])(l,n,i,!1,null,"83f34d6c",null);e["default"]=p.exports},"22ce":function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"i",(function(){return c})),r.d(e,"g",(function(){return a})),r.d(e,"f",(function(){return o})),r.d(e,"c",(function(){return s})),r.d(e,"e",(function(){return u})),r.d(e,"a",(function(){return d})),r.d(e,"d",(function(){return l})),r.d(e,"h",(function(){return h}));var n=r("66df"),i=function(t){return n["a"].request({url:"/service/push/add",data:t,method:"post"})},c=function(t,e){return n["a"].request({url:"/service/push/update/".concat(t),method:"post",data:e})},a=function(t){return n["a"].request({url:"/service/push/get/".concat(t),method:"get"})},o=function(t){return n["a"].request({url:"/service/push/get_one/".concat(t),method:"get"})},s=function(t){return n["a"].request({url:"/service/push/change_status/".concat(t),method:"post"})},u=function(t){return n["a"].request({url:"/service/push/del_push/".concat(t),method:"post"})},d=function(t){return n["a"].request({url:"/service/vip/add_chat",method:"post",data:t})},l=function(t){return n["a"].request({url:"/service/vip/del_add_chat/".concat(t),method:"post"})},h=function(t){return n["a"].request({url:"/service/vip/update_add_chat/".concat(t),method:"post"})}},"6f16":function(t,e,r){},9328:function(t,e,r){"use strict";r.d(e,"e",(function(){return n})),r.d(e,"c",(function(){return i})),r.d(e,"b",(function(){return c})),r.d(e,"f",(function(){return a})),r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return s}));var n=["群发服务","私信服务","拉群服务"],i=["未开启","正常","被禁言（spam）","被封禁（banned）","验证失效"],c=["工作信息","商业推广","美食外卖","其他业务"],a=["文字","图片"],o=["未通过","通过"],s=[1,2,3,4]},acd9:function(t,e,r){"use strict";r.d(e,"d",(function(){return i})),r.d(e,"e",(function(){return c})),r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return s}));var n=r("66df"),i=function(){return n["a"].request({url:"service/client/get_user_client",method:"get"})},c=function(t){return n["a"].request({url:"service/auth/send_code/".concat(t),method:"post"})},a=function(t,e){return n["a"].request({url:"service/auth/confirm_code/".concat(t,"/").concat(e),method:"post"})},o=function(t,e,r){return n["a"].request({url:"service/chat/add_chat",data:{chatname:t,type:e,auth:r},method:"post"})},s=function(t){return n["a"].request({url:"/service/chat/get_chat/".concat(t),method:"get"})}},b39f:function(t,e,r){"use strict";r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return c})),r.d(e,"e",(function(){return a})),r.d(e,"b",(function(){return o})),r.d(e,"d",(function(){return s}));var n=r("66df"),i=function(t,e){return n["a"].request({url:"/service/client/get_notused_client",method:"get"})},c=function(t){return n["a"].request({url:"/service/client/del_user_client/".concat(t),method:"post"})},a=function(t){return n["a"].request({url:"/service/client/restore/".concat(t),method:"post"})},o=function(t){return n["a"].request({url:"/service/client/get_add_chat/".concat(t),method:"get"})},s=function(t){return n["a"].request({url:"/service/client/get_client/".concat(t),method:"get"})}},b7bb:function(t,e,r){"use strict";var n=r("6f16"),i=r.n(n);i.a}}]);