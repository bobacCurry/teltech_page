(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22ab9c92"],{"22ce":function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"g",(function(){return c})),r.d(e,"f",(function(){return a})),r.d(e,"e",(function(){return o})),r.d(e,"c",(function(){return s})),r.d(e,"a",(function(){return u})),r.d(e,"d",(function(){return d}));var n=r("66df"),i=function(t){return n["a"].request({url:"/service/push/add",data:t,method:"post"})},c=function(t,e){return n["a"].request({url:"/service/push/update/".concat(t),method:"post",data:e})},a=function(){return n["a"].request({url:"/service/push/get",method:"get"})},o=function(t){return n["a"].request({url:"/service/push/get_one/".concat(t),method:"get"})},s=function(t){return n["a"].request({url:"/service/push/change_status/".concat(t),method:"post"})},u=function(t){return n["a"].request({url:"/service/vip/add_chat",method:"post",data:t})},d=function(t){return n["a"].request({url:"/service/vip/get_add_chat/".concat(t),method:"get"})}},"5a51":function(t,e,r){},"82f9c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"service-group-detail"},[r("div",{staticClass:"flex-between-center title"},[r("h2",[t._v("创建服务订单")]),r("div",[r("Button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.updatePush}},[t._v("保存服务")])],1)]),r("div",{staticClass:"content"},[r("div",{staticClass:"content-title"},[t._v("业务配置")]),r("div",{staticClass:"flex-start-center"},[r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"200px"},attrs:{disabled:!0,placeholder:"广告业务类型"},model:{value:t.order.chat_type,callback:function(e){t.$set(t.order,"chat_type",e)},expression:"order.chat_type"}},t._l(t.chatType,(function(e,n){return r("Option",{key:n,attrs:{value:n}},[t._v(t._s(e))])})),1)],1),r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"广告文本类型"},model:{value:t.order.text_type,callback:function(e){t.$set(t.order,"text_type",e)},expression:"order.text_type"}},t._l(t.textType,(function(e,n){return r("Option",{key:n,attrs:{value:n}},[t._v(t._s(e))])})),1)],1),r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"选择TG实例"},model:{value:t.order.phone,callback:function(e){t.$set(t.order,"phone",e)},expression:"order.phone"}},t._l(t.phoneList,(function(e,n){return r("Option",{key:n,attrs:{value:e.phone}},[t._v(t._s(e.phone))])})),1)],1),r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择发送的时间(分)"},model:{value:t.order.minute,callback:function(e){t.$set(t.order,"minute",e)},expression:"order.minute"}},t._l(t.minuteList,(function(e,n){return r("Option",{key:n,attrs:{value:e}},[t._v("\n\t\t\t        \t"+t._s(e)+" 分 - "+t._s(e+20)+" 分 -  "+t._s(e+40)+" 分\n\t\t\t        ")])})),1)],1),r("div",{staticClass:"option-item"},[r("Input",{attrs:{placeholder:"服务备注"},model:{value:t.order.title,callback:function(e){t.$set(t.order,"title",e)},expression:"order.title"}})],1)])]),r("div",{staticClass:"content"},[r("div",{staticClass:"content-title"},[t._v("广告群配置（已选择 "+t._s(this.order.chat.length)+"个）")]),r("div",{staticClass:"flex-start-center"},[r("CheckboxGroup",{model:{value:t.order.chat,callback:function(e){t.$set(t.order,"chat",e)},expression:"order.chat"}},t._l(t.chatList,(function(e,n){return r("Checkbox",{key:n,attrs:{label:e.chatid}},[r("span",{staticClass:"check-item"},[t._v(t._s(e.chatid)+" "),e.auth?r("label",{staticStyle:{color:"red"}},[t._v("(需验证)")]):t._e()])])})),1)],1)]),r("div",{staticClass:"content"},[r("div",{staticClass:"content-title"},[t._v("广告内容配置")]),1==t.order.text_type?r("div",{staticClass:"flex-start-center"},[t.order.media?r("div",{staticClass:"image-frame back-image",style:{"background-image":"url("+t.order.media+")"}},[r("Icon",{staticClass:"close",attrs:{type:"ios-close-circle",size:"30",color:"red"},on:{click:function(e){t.order.media=""}}})],1):r("div",{staticClass:"image-frame",on:{click:t.selectImg}},[r("Icon",{attrs:{type:"ios-add-circle",size:"100"}})],1),r("form",{staticStyle:{display:"none"},attrs:{id:"img-form"}},[r("input",{attrs:{id:"img-input",type:"file",accept:"image/*"},on:{change:function(e){return t.getImg(e)}}})]),r("Input",{staticClass:"text-frame",attrs:{type:"textarea",placeholder:"请输入文字文案",autosize:{minRows:10}},model:{value:t.order.caption,callback:function(e){t.$set(t.order,"caption",e)},expression:"order.caption"}})],1):r("div",[r("Input",{staticClass:"text-frame",attrs:{type:"textarea",placeholder:"请输入广告文案",autosize:{minRows:10}},model:{value:t.order.text,callback:function(e){t.$set(t.order,"text",e)},expression:"order.text"}})],1)])])},i=[],c=r("75fc"),a=r("9328"),o=r("acd9"),s=r("b39f"),u=r("22ce"),d=r("7e1e"),l={mounted:function(){this.getDetail(this.$route.params._id),this.getClient()},data:function(){return{chatType:a["b"],textType:a["f"],minuteList:a["d"],clientList:[],chatList:[],phone:"",loading:!1,order:{title:"",chat_type:0,text_type:"",phone:"",chat:[],text:"",media:"",caption:"",minute:""}}},computed:{phoneList:function(){return[].concat(Object(c["a"])(this.clientList),[{phone:this.phone}])}},methods:{getDetail:function(t){var e=this;Object(u["e"])(t).then((function(t){if(!t.data.success)return e.$Notice.error({title:"服务信息不存在"}),e.$router.go(-1);e.order=t.data.msg,e.phone=t.data.msg.phone,e.order.minute=t.data.msg.minute[0],e.getChat()}))},getClient:function(){var t=this;Object(s["a"])().then((function(e){e.data.success&&(t.clientList=e.data.msg)}))},getChat:function(){var t=this;Object(o["c"])(this.order.chat_type).then((function(e){e.data.success&&(t.chatList=e.data.msg)}))},updatePush:function(){var t=this;return String(this.order.chat_type)?String(this.order.text_type)?this.order.phone?String(this.order.minute)?this.order.chat.length?("0"!==String(this.order.text_type)||this.order.text.trim())&&("1"!==String(this.order.text_type)||this.order.media.trim())?this.order.chat.length>80?this.$Notice.error({title:"最多选择80个群"}):(this.loading=!0,void Object(u["g"])(this.$route.params._id,this.order).then((function(e){return e.data.success?(t.$router.push("/deal/service"),t.$Notice.success({title:e.data.msg})):t.$Notice.error({title:e.data.msg})})).catch((function(e){t.$Notice.error({title:e.response.data.msg})})).finally((function(){t.loading=!1}))):this.$Notice.error({title:"请填写广告文本"}):this.$Notice.error({title:"请选择要发送的群组"}):this.$Notice.error({title:"请选择发送的时间"}):this.$Notice.error({title:"请选择TG实例"}):this.$Notice.error({title:"请选择文本类型"}):this.$Notice.error({title:"请选择服务类型"})},selectImg:function(){document.getElementById("img-input").click()},getImg:function(t){var e=t.target.files[0];if(t.target.value="",!e)return!1;if(e.size>3e5)return this.$Notice.error({title:"图片大小不得超过300kb"});var r=this,n=new FileReader;n.readAsDataURL(e),n.onload=function(){r.upload(this.result)}},upload:function(t){var e=this;Object(d["b"])({image:t}).then((function(t){var r=t.data;r.success?e.order.media=r.path:e.$Notice.error({title:r.msg})}))}}},h=l,p=(r("cc9a"),r("2877")),f=Object(p["a"])(h,n,i,!1,null,"70ba1d42",null);e["default"]=f.exports},9328:function(t,e,r){"use strict";r.d(e,"e",(function(){return n})),r.d(e,"c",(function(){return i})),r.d(e,"b",(function(){return c})),r.d(e,"f",(function(){return a})),r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return s}));var n=["群发服务","私信服务","拉群服务"],i=["未开启","正常","被禁言（spam）","被封禁（banned）"],c=["招聘","BC推广","美食外卖","其他推广"],a=["文字","图片"],o=["未通过","通过"],s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]},acd9:function(t,e,r){"use strict";r.d(e,"e",(function(){return i})),r.d(e,"f",(function(){return c})),r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return s})),r.d(e,"c",(function(){return u}));var n=r("66df"),i=function(){return n["a"].request({url:"service/client/get_user_client",method:"get"})},c=function(t){return n["a"].request({url:"service/auth/send_code/".concat(t),method:"post"})},a=function(t,e){return n["a"].request({url:"service/auth/confirm_code/".concat(t,"/").concat(e),method:"post"})},o=function(t,e,r){return n["a"].request({url:"service/chat/add_chat/".concat(t,"/").concat(e,"/").concat(r),method:"post"})},s=function(t,e){return n["a"].request({url:"service/chat/get_user_chat/".concat(t,"/").concat(e),method:"get"})},u=function(t){return n["a"].request({url:"/service/chat/get_chat/".concat(t),method:"get"})}},b39f:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return c}));var n=r("66df"),i=function(t,e){return n["a"].request({url:"/service/client/get_notused_client",method:"get"})},c=function(t){return n["a"].request({url:"/service/client/restore/".concat(t),method:"post"})}},cc9a:function(t,e,r){"use strict";var n=r("5a51"),i=r.n(n);i.a}}]);