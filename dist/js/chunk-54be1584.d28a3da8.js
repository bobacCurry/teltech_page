(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54be1584"],{"27e5":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"deal-order"},[r("ul",{staticClass:"flex-start-center"},t._l(t.orderList,(function(e,n){return r("li",{key:n,staticClass:"order-item-frame"},[r("Card",{staticClass:"order-item"},[r("div",{staticClass:"item-info"},[t._v("订单号： "+t._s(e._id))]),r("div",{staticClass:"item-info"},[t._v("服务类型： "+t._s(t.serviceType[e.type]))]),0==e.type?r("div",{staticClass:"item-info"},[t._v("购买天数： "+t._s(e.days)+" 天 ")]):t._e(),1==e.type?r("div",{staticClass:"item-info"},[t._v("购买个数： "+t._s(e.nums)+" 个")]):t._e(),r("div",{staticClass:"item-info"},[t._v("订单状态： "+t._s(t._f("getStatus")(e.status)))]),r("div",{staticClass:"item-info"},[t._v("订单备注： "+t._s(e.memo))]),r("div",{staticClass:"item-info"},[t._v("创建时间： "+t._s(t._f("getData")(e.created_at)))])])],1)})),0)])},s=[],a=r("f8b7"),i=r("9328"),u={mounted:function(){this.getOrder()},filters:{getStatus:function(t){return 1===t?"审核通过":-1===t?"审核被拒绝":"暂未审核"},getData:function(t){var e=new Date(t).getFullYear(),r=new Date(t).getMonth()+1,n=new Date(t).getDate();return e+"-"+r+"-"+n}},data:function(){return{orderList:[],serviceType:i["e"],params:{page:1,status:""}}},methods:{getOrder:function(){var t=this;Object(a["d"])(this.params).then((function(e){e.data.success&&(t.orderList=e.data.msg)}))}}},o=u,d=(r("6b5e"),r("2877")),c=Object(d["a"])(o,n,s,!1,null,"772de7aa",null);e["default"]=c.exports},3008:function(t,e,r){},"6b5e":function(t,e,r){"use strict";var n=r("3008"),s=r.n(n);s.a},9328:function(t,e,r){"use strict";r.d(e,"e",(function(){return n})),r.d(e,"c",(function(){return s})),r.d(e,"b",(function(){return a})),r.d(e,"f",(function(){return i})),r.d(e,"a",(function(){return u})),r.d(e,"d",(function(){return o}));var n=["群发服务","私信服务","拉群服务"],s=["未开启","正常","被禁言（spam）","被封禁（banned）","验证失效"],a=["招聘","BC推广","美食外卖","其他推广"],i=["文字","图片"],u=["未通过","通过"],o=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]},f8b7:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"d",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"e",(function(){return u})),r.d(e,"b",(function(){return o}));var n=r("66df"),s=function(t){return n["a"].request({url:"/service/order/add_group_order",method:"post",data:t})},a=function(t){return n["a"].request({url:"/service/order/get_order",method:"get",params:t})},i=function(t){return n["a"].request({url:"/admin/order/get_order",method:"get",params:t})},u=function(t){return n["a"].request({url:"/admin/order/start_order/".concat(t),method:"post"})},o=function(t){return n["a"].request({url:"/admin/order/del_order/".concat(t),method:"post"})}}}]);