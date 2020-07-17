(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13a5bca8"],{"22ce":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"i",(function(){return c})),n.d(e,"g",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return l})),n.d(e,"h",(function(){return h}));var r=n("66df"),i=function(t){return r["a"].request({url:"/service/push/add",data:t,method:"post"})},c=function(t,e){return r["a"].request({url:"/service/push/update/".concat(t),method:"post",data:e})},a=function(t){return r["a"].request({url:"/service/push/get/".concat(t),method:"get"})},o=function(t){return r["a"].request({url:"/service/push/get_one/".concat(t),method:"get"})},s=function(t){return r["a"].request({url:"/service/push/change_status/".concat(t),method:"post"})},u=function(t){return r["a"].request({url:"/service/push/del_push/".concat(t),method:"post"})},d=function(t){return r["a"].request({url:"/service/vip/add_chat",method:"post",data:t})},l=function(t){return r["a"].request({url:"/service/vip/del_add_chat/".concat(t),method:"post"})},h=function(t){return r["a"].request({url:"/service/vip/update_add_chat/".concat(t),method:"post"})}},"22eb":function(t,e,n){"use strict";var r=n("41b8"),i=n.n(r);i.a},"41b8":function(t,e,n){},"82f9c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-group-detail"},[n("div",{staticClass:"flex-between-center title"},[n("h2",[t._v("更新服务配置")]),n("div",[n("Button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.updatePush}},[t._v("保存服务")])],1)]),n("div",{staticClass:"content"},[n("div",{staticClass:"content-title"},[t._v("业务配置")]),n("div",{staticClass:"flex-start-center"},[n("div",{staticClass:"option-item"},[n("Select",{staticStyle:{width:"100px"},attrs:{placeholder:"广告业务类型"},on:{"on-change":t.changeType},model:{value:t.order.chat_type,callback:function(e){t.$set(t.order,"chat_type",e)},expression:"order.chat_type"}},t._l(t.chatType,(function(e,r){return n("Option",{key:r,attrs:{value:r}},[t._v(t._s(e))])})),1)],1),n("div",{staticClass:"option-item"},[n("Select",{staticStyle:{width:"100px"},attrs:{placeholder:"广告文本类型"},model:{value:t.order.text_type,callback:function(e){t.$set(t.order,"text_type",e)},expression:"order.text_type"}},t._l(t.textType,(function(e,r){return n("Option",{key:r,attrs:{value:r}},[t._v(t._s(e))])})),1)],1),n("div",{staticClass:"option-item"},[n("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"选择TG实例"},model:{value:t.order.phone,callback:function(e){t.$set(t.order,"phone",e)},expression:"order.phone"}},t._l(t.phoneList,(function(e,r){return n("Option",{key:r,attrs:{value:e.phone}},[t._v(t._s(e.phone))])})),1)],1),n("div",{staticClass:"option-item"},[n("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择发送的时间(分)"},model:{value:t.order.minute,callback:function(e){t.$set(t.order,"minute",e)},expression:"order.minute"}},t._l(this.minuteList,(function(e,r){return n("Option",{key:r,attrs:{value:e}},[t._v("\n\t\t\t        \t"+t._s([e,e+t.gap,e+2*t.gap,e+3*t.gap].slice(0,t.order.count).join(" - "))+" 分\n\t\t\t        ")])})),1)],1),n("div",{staticClass:"option-item"},[n("Select",{staticStyle:{width:"150px"},model:{value:t.order.count,callback:function(e){t.$set(t.order,"count",e)},expression:"order.count"}},t._l(t.pushCount,(function(e,r){return n("Option",{attrs:{value:e}},[t._v("\n\t\t\t        \t每小时发送"+t._s(e)+"次\n\t\t\t        ")])})),1)],1),n("div",{staticClass:"option-item"},[n("Input",{attrs:{placeholder:"服务备注"},model:{value:t.order.title,callback:function(e){t.$set(t.order,"title",e)},expression:"order.title"}})],1),n("div",{staticClass:"info-item"},[n("Checkbox",{on:{"on-change":t.checkAll}},[t._v("全选")])],1)])]),n("div",{staticClass:"content"},[n("div",{staticClass:"content-title"},[t._v("广告群配置（已选择 "+t._s(this.chat.length)+"个）")]),n("div",{staticClass:"flex-start-center"},[n("CheckboxGroup",{model:{value:t.chat,callback:function(e){t.chat=e},expression:"chat"}},t._l(t.chatList,(function(e,r){return n("Checkbox",{key:r,attrs:{label:e.chatid}},[n("span",{staticClass:"check-item"},[t._v(t._s(e.chatname)+" "),e.auth?n("label",{staticStyle:{color:"red"}},[t._v("(需验证)")]):t._e()])])})),1)],1)]),n("div",{staticClass:"content"},[n("div",{staticClass:"content-title"},[t._v("广告内容配置")]),1==t.order.text_type?n("div",{staticClass:"flex-start-center"},[t.order.media?n("div",{staticClass:"image-frame back-image",style:{"background-image":"url(/api"+t.order.media+")"}},[n("Icon",{staticClass:"close",attrs:{type:"ios-close-circle",size:"30",color:"red"},on:{click:function(e){t.order.media=""}}})],1):n("div",{staticClass:"image-frame",on:{click:t.selectImg}},[n("Icon",{attrs:{type:"ios-add-circle",size:"100"}})],1),n("form",{staticStyle:{display:"none"},attrs:{id:"img-form"}},[n("input",{attrs:{id:"img-input",type:"file",accept:"image/*"},on:{change:function(e){return t.getImg(e)}}})]),n("Input",{staticClass:"text-frame",attrs:{type:"textarea",placeholder:"请输入文字文案",autosize:{minRows:10}},model:{value:t.order.caption,callback:function(e){t.$set(t.order,"caption",e)},expression:"order.caption"}})],1):n("div",[n("Input",{staticClass:"text-frame",attrs:{type:"textarea",placeholder:"请输入广告文案",autosize:{minRows:10}},model:{value:t.order.text,callback:function(e){t.$set(t.order,"text",e)},expression:"order.text"}})],1)])])},i=[],c=(n("ac6a"),n("75fc")),a=n("9328"),o=n("acd9"),s=n("b39f"),u=n("22ce"),d=n("7e1e"),l={mounted:function(){this.getDetail(this.$route.params._id),this.getClient()},data:function(){return{chatType:a["b"],textType:a["f"],pushCount:a["d"],clientList:[],chatList:[],chat:[],phone:"",loading:!1,order:{title:"",chat_type:0,text_type:"",phone:"",chat:[],text:"",media:"",caption:"",minute:"",count:4}}},computed:{phoneList:function(){return[].concat(Object(c["a"])(this.clientList),[{phone:this.phone}])},gap:function(){var t=60/this.order.count;return t},minuteList:function(){for(var t=[],e=0;e<this.gap;e++)t.push(e);return t}},methods:{changeType:function(t){this.order.chat_type=t,this.getChat()},getDetail:function(t){var e=this;Object(u["f"])(t).then((function(t){if(!t.data.success)return e.$Notice.error({title:"服务信息不存在"}),e.$router.go(-1);e.order=t.data.msg,e.phone=t.data.msg.phone,e.order.minute=t.data.msg.minute[0],e.order.count=t.data.msg.count?t.data.msg.count:4,e.getChat()}))},getClient:function(){var t=this;Object(s["d"])().then((function(e){e.data.success&&(t.clientList=e.data.msg)}))},getChat:function(){var t=this;Object(o["c"])(this.order.chat_type).then((function(e){if(e.data.success){t.chatList=e.data.msg;var n=e.data.msg.map((function(t){return t.chatid}));t.order.chat.forEach((function(e,r){-1!==n.indexOf(e.chatid)&&t.chat.push(e.chatid)}))}}))},updatePush:function(){var t=this;return String(this.order.chat_type)?String(this.order.text_type)?this.order.phone?String(this.order.minute)?this.chat.length?("0"!==String(this.order.text_type)||this.order.text.trim())&&("1"!==String(this.order.text_type)||this.order.media.trim())?this.chat.length>200?this.$Notice.error({title:"最多选择200个群"}):(this.loading=!0,this.order.chat=[],this.chatList.forEach((function(e,n){-1!==t.chat.indexOf(e.chatid)&&t.order.chat.push({chatid:e.chatid,chatname:e.chatname})})),void Object(u["i"])(this.$route.params._id,this.order).then((function(e){return e.data.success?(t.$router.push("/deal/service"),t.$Notice.success({title:e.data.msg})):t.$Notice.error({title:e.data.msg})})).catch((function(e){t.$Notice.error({title:e.response.data.msg})})).finally((function(){t.loading=!1}))):this.$Notice.error({title:"请填写广告文本"}):this.$Notice.error({title:"请选择要发送的群组"}):this.$Notice.error({title:"请选择发送的时间"}):this.$Notice.error({title:"请选择TG实例"}):this.$Notice.error({title:"请选择文本类型"}):this.$Notice.error({title:"请选择服务类型"})},selectImg:function(){document.getElementById("img-input").click()},getImg:function(t){var e=t.target.files[0];if(t.target.value="",!e)return!1;if(e.size>3e5)return this.$Notice.error({title:"图片大小不得超过300kb"});var n=this,r=new FileReader;r.readAsDataURL(e),r.onload=function(){n.upload(this.result)}},upload:function(t){var e=this;Object(d["b"])({image:t}).then((function(t){var n=t.data;n.success?e.order.media=n.msg:e.$Notice.error({title:n.msg})}))},checkAll:function(t){if(t){this.chat=[];for(var e=this.chatList.length-1;e>=0;e--)this.chatList[e].auth||this.chat.push(this.chatList[e].chatid)}else this.chat=[]}}},h=l,p=(n("22eb"),n("2877")),f=Object(p["a"])(h,r,i,!1,null,"7cf7b6d5",null);e["default"]=f.exports},9328:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return s}));var r=["群发服务","私信服务","拉群服务"],i=["新绑定","正常","被禁言（spam）","被封禁（banned）","验证失效"],c=["工作信息","商业推广","美食外卖","其他业务"],a=["文字","图片"],o=["未通过","通过"],s=[1,2,3,4]},acd9:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return s}));var r=n("66df"),i=function(){return r["a"].request({url:"service/client/get_user_client",method:"get"})},c=function(t){return r["a"].request({url:"service/auth/send_code/".concat(t),method:"post"})},a=function(t,e){return r["a"].request({url:"service/auth/confirm_code/".concat(t,"/").concat(e),method:"post"})},o=function(t,e,n){return r["a"].request({url:"service/chat/add_chat",data:{chatname:t,type:e,auth:n},method:"post"})},s=function(t){return r["a"].request({url:"/service/chat/get_chat/".concat(t),method:"get"})}},b39f:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return u}));var r=n("66df"),i=function(t){return r["a"].request({url:"/service/client/add_finish/".concat(t),method:"post"})},c=function(t,e){return r["a"].request({url:"/service/client/get_notused_client",method:"get"})},a=function(t){return r["a"].request({url:"/service/client/del_user_client/".concat(t),method:"post"})},o=function(t){return r["a"].request({url:"/service/client/restore/".concat(t),method:"post"})},s=function(t){return r["a"].request({url:"/service/client/get_add_chat/".concat(t),method:"get"})},u=function(t){return r["a"].request({url:"/service/client/get_client/".concat(t),method:"get"})}}}]);