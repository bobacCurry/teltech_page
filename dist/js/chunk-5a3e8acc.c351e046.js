(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a3e8acc"],{"22ce":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"e",(function(){return a})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return s})),r.d(e,"b",(function(){return o}));var i=r("66df"),n=function(t){return i["a"].request({url:"/service/push/add",data:t,method:"post"})},a=function(t,e){return i["a"].request({url:"/service/push/update/".concat(t),method:"post",data:e})},c=function(){return i["a"].request({url:"/service/push/get",method:"get"})},s=function(t){return i["a"].request({url:"/service/push/get_one/".concat(t),method:"get"})},o=function(t){return i["a"].request({url:"/service/push/change_status/".concat(t),method:"post"})}},"4e5f":function(t,e,r){},"50fc":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return c}));var i=r("66df"),n=function(t,e){return i["a"].request({url:"/admin/chat/add_chat/".concat(t,"/").concat(e),method:"post"})},a=function(t){return i["a"].request({url:"/admin/chat/del_chat/".concat(t),method:"post"})},c=function(t,e,r,n){return i["a"].request({url:"/admin/chat/get_chat/".concat(r,"/").concat(n),params:{type:t,status:e},method:"get"})}},"79ef":function(t,e,r){"use strict";var i=r("4e5f"),n=r.n(i);n.a},"82f9c":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"service-group-detail"},[r("div",{staticClass:"flex-between-center title"},[r("h2",[t._v("创建服务订单")]),r("div",[r("Button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.updatePush}},[t._v("保存服务")])],1)]),r("div",{staticClass:"content"},[r("div",{staticClass:"content-title"},[t._v("业务配置")]),r("div",{staticClass:"flex-start-center"},[r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"200px"},attrs:{disabled:!0,placeholder:"广告业务类型"},model:{value:t.order.chat_type,callback:function(e){t.$set(t.order,"chat_type",e)},expression:"order.chat_type"}},t._l(t.chatType,(function(e,i){return r("Option",{key:i,attrs:{value:i}},[t._v(t._s(e))])})),1)],1),r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"广告文本类型"},model:{value:t.order.text_type,callback:function(e){t.$set(t.order,"text_type",e)},expression:"order.text_type"}},t._l(t.textType,(function(e,i){return r("Option",{key:i,attrs:{value:i}},[t._v(t._s(e))])})),1)],1),r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"选择TG实例"},model:{value:t.order.phone,callback:function(e){t.$set(t.order,"phone",e)},expression:"order.phone"}},t._l(t.phoneList,(function(e,i){return r("Option",{key:i,attrs:{value:e.phone}},[t._v(t._s(e.phone))])})),1)],1),r("div",{staticClass:"option-item"},[r("Select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择发送的时间(分)"},model:{value:t.order.minute,callback:function(e){t.$set(t.order,"minute",e)},expression:"order.minute"}},t._l(t.minuteList,(function(e,i){return r("Option",{key:i,attrs:{value:e}},[t._v("\n\t\t\t        \t"+t._s(e)+" 分 - "+t._s(e+20)+" 分 -  "+t._s(e+40)+" 分\n\t\t\t        ")])})),1)],1)])]),r("div",{staticClass:"content"},[r("div",{staticClass:"content-title"},[t._v("广告群配置")]),r("div",{staticClass:"flex-start-center"},[r("CheckboxGroup",{model:{value:t.order.chat,callback:function(e){t.$set(t.order,"chat",e)},expression:"order.chat"}},t._l(t.chatList,(function(e,i){return r("Checkbox",{key:i,attrs:{label:e.chatid}},[r("span",{staticClass:"check-item"},[t._v(t._s(e.chatid)+" "),e.auth?r("label",{staticStyle:{color:"red"}},[t._v("(需验证)")]):t._e()])])})),1)],1)]),r("div",{staticClass:"content"},[r("div",{staticClass:"content-title"},[t._v("广告内容配置")]),1==t.order.text_type?r("div",{staticClass:"flex-start-center"},[t.order.media?r("div",{staticClass:"image-frame back-image",style:{"background-image":"url("+t.order.media+")"}},[r("Icon",{staticClass:"close",attrs:{type:"ios-close-circle",size:"30",color:"red"},on:{click:function(e){t.order.media=""}}})],1):r("div",{staticClass:"image-frame"},[r("Icon",{attrs:{type:"ios-add-circle",size:"100"}})],1),r("Input",{staticClass:"text-frame",attrs:{type:"textarea",placeholder:"请输入文字文案",autosize:{minRows:10}},model:{value:t.order.caption,callback:function(e){t.$set(t.order,"caption",e)},expression:"order.caption"}})],1):r("div",[r("Input",{staticClass:"text-frame",attrs:{type:"textarea",placeholder:"请输入广告文案",autosize:{minRows:10}},model:{value:t.order.text,callback:function(e){t.$set(t.order,"text",e)},expression:"order.text"}})],1)])])},n=[],a=r("75fc"),c=r("9328"),s=r("50fc"),o=r("b39f"),u=r("22ce"),d={mounted:function(){this.getDetail(this.$route.params._id),this.getChat(),this.getClient()},data:function(){return{chatType:c["b"],textType:c["f"],minuteList:c["d"],clientList:[],chatList:[],phone:"",loading:!1,order:{chat_type:0,text_type:"",phone:"",chat:[],text:"",media:"",caption:"",minute:""}}},computed:{phoneList:function(){return[].concat(Object(a["a"])(this.clientList),[{phone:this.phone}])}},methods:{getDetail:function(t){var e=this;Object(u["c"])(t).then((function(t){if(!t.data.success)return e.$Notice.error({title:"服务信息不存在"}),e.$router.go(-1);e.order=t.data.msg,e.phone=t.data.msg.phone,e.order.minute=t.data.msg.minute[0]}))},getClient:function(){var t=this;Object(o["a"])().then((function(e){e.data.success&&(t.clientList=e.data.msg)}))},getChat:function(){var t=this;Object(s["c"])(this.order.chat_type,1,1,200).then((function(e){e.data.success&&(t.chatList=e.data.msg)}))},changeChatType:function(t){this.order.chat_type=t,this.getChat()},updatePush:function(){var t=this;return String(this.order.chat_type)?String(this.order.text_type)?this.order.phone?String(this.order.minute)?this.order.chat.length?("0"!==String(this.order.text_type)||this.order.text.trim())&&("1"!==String(this.order.text_type)||this.order.media.trim())?(this.loading=!0,void Object(u["e"])(this.$route.params._id,this.order).then((function(e){return e.data.success?(t.$router.push("/deal/service"),t.$Notice.success({title:e.data.msg})):t.$Notice.error({title:e.data.msg})})).catch((function(e){t.$Notice.error({title:e.response.data.msg})})).finally((function(){t.loading=!1}))):this.$Notice.error({title:"请填写广告文本"}):this.$Notice.error({title:"请选择要发送的群组"}):this.$Notice.error({title:"请选择发送的时间"}):this.$Notice.error({title:"请选择TG实例"}):this.$Notice.error({title:"请选择文本类型"}):this.$Notice.error({title:"请选择服务类型"})}}},l=d,h=(r("79ef"),r("2877")),p=Object(h["a"])(l,i,n,!1,null,"486d3d11",null);e["default"]=p.exports},9328:function(t,e,r){"use strict";r.d(e,"e",(function(){return i})),r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return a})),r.d(e,"f",(function(){return c})),r.d(e,"a",(function(){return s})),r.d(e,"d",(function(){return o}));var i=["群发服务","私信服务","拉群服务"],n=["未开启","正常","被禁言（spam）","被封禁（banned）"],a=["招聘","推广","美食","其他"],c=["文字","图片"],s=["未通过","通过"],o=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]},b39f:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var i=r("66df"),n=function(t,e){return i["a"].request({url:"/service/client/get_notused_client",method:"get"})}}}]);