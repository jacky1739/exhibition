(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5851dea6"],{"1dde":function(t,e,c){var s=c("d039"),n=c("b622"),r=c("2d00"),i=n("species");t.exports=function(t){return r>=51||!s((function(){var e=[],c=e.constructor={};return c[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},5895:function(t,e,c){"use strict";c.r(e);var s=c("7a23"),n={class:"wrap container"},r={class:"row shadow p-4 mb-5"},i=Object(s["f"])('<div class="row d-flex justify-content-center"><div class="col-md-5"><ul class="d-flex justify-content-between"><li><p class="circle d-flex justify-content-center bg-third text-black rounded-circle mb-2 border border-secondary py-2 m0-auto">1</p><p class="font-size-light">購物車</p></li><li><p class="circle d-flex justify-content-center bg-third text-black rounded-circle mb-2 border border-secondary py-2 m0-auto">2</p><p class="font-size-light">填寫資料</p></li><li class="position-relative"><p class="circle d-flex justify-content-center bg-secondary rounded-circle mb-2 text-white py-2 m0-auto">3</p><p class="font-size-light">確認訂單</p></li></ul></div></div><div class="col-md-7"><h2>訂單成立</h2><p class="font-size-light">感謝您訂購本次的展覽，祝您參觀愉快</p><div class="checkout-img"></div></div>',2),o={class:"col-md-5"},a={class:"boder-primary p-3 mb-4"},l=Object(s["h"])("h3",{class:"mb-4"},[Object(s["h"])("i",{class:"bi bi-cart"}),Object(s["g"])(" 訂單明細")],-1),d={class:"w-100"},u={class:"d-flex justify-content-between"},b={class:"font-size-light"},f={class:"font-size-light"},p={class:"d-flex justify-content-between w-100"},h={class:"font-size-light"},j={class:"font-size-light"},O={class:"w-100"},v={class:"d-flex justify-content-between border-top pt-4"},g=Object(s["h"])("p",{class:"font-size-Regular"},"總計",-1),y={class:"font-size-Regular text-danger"},m={class:"w-100"},w={class:"d-flex justify-content-between border-top pt-4"},x=Object(s["h"])("p",{class:"font-size-Regular"},"付款狀態",-1),z={class:"d-grid gap-2"},k={class:"mt-4 mb-3 d-flex"},B=Object(s["h"])("button",{class:"btn btn-secondary btn-sm",type:"button"},[Object(s["h"])("i",{class:"bi bi-arrow-left"})],-1),L=Object(s["h"])("p",{class:"ml-1 font-size-light align-items-center",style:{"margin-bottom":"0px"}},"返回展覽",-1);function P(t,e,c,P,$,A){var I=Object(s["y"])("Loading"),R=Object(s["y"])("router-link");return Object(s["t"])(),Object(s["d"])(s["a"],null,[Object(s["h"])(I,{isLoading:$.Loading},null,8,["isLoading"]),Object(s["h"])("div",n,[Object(s["h"])("div",r,[i,Object(s["h"])("div",o,[Object(s["h"])("div",a,[l,(Object(s["t"])(!0),Object(s["d"])(s["a"],null,Object(s["x"])($.allProducts,(function(t){return Object(s["t"])(),Object(s["d"])("div",{class:"d-flex mb-4",key:t},[Object(s["h"])("img",{src:t.product.imageUrl,class:"orderImg mr-0",alt:"結帳頁面圖片"},null,8,["src"]),Object(s["h"])("div",d,[Object(s["h"])("div",u,[Object(s["h"])("p",b,Object(s["B"])(t.product.title),1),Object(s["h"])("p",f,"X "+Object(s["B"])(t.qty),1)]),Object(s["h"])("div",p,[Object(s["h"])("p",h,"$ "+Object(s["B"])(t.product.price)+"/ 張",1),Object(s["h"])("p",j,"$ "+Object(s["B"])(t.final_total),1)])])])})),128)),Object(s["h"])("div",O,[Object(s["h"])("div",v,[g,Object(s["h"])("p",y,"$ "+Object(s["B"])($.sum),1)])]),Object(s["h"])("div",m,[Object(s["h"])("div",w,[x,Object(s["h"])("p",{class:["font-size-Regular",{"text-success":!0===$.isPaid}]},Object(s["B"])($.pay),3)])])]),Object(s["h"])("div",{class:["w-100",{"d-none":!0===$.isPaid}]},[Object(s["h"])("div",z,[Object(s["h"])("button",{class:"btn btn-secondary py-3 px-7",type:"submit",onClick:e[1]||(e[1]=function(){return A.payOrder&&A.payOrder.apply(A,arguments)})},"確認結帳")])],2),Object(s["h"])("div",k,[Object(s["h"])(R,{to:"/allproducts"},{default:Object(s["H"])((function(){return[B]})),_:1}),L])])])])],64)}c("99af");var $=c("e4f3"),A={data:function(){return{allProducts:[],order:{user:{}},orderId:"",sum:0,isPaid:!1,pay:"尚未付款",Loading:!1}},methods:{getOrder:function(){var t=this;this.Loading=!0,this.orderId=this.$route.params.orderId;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("finaltwo","/order/").concat(this.orderId);this.$http.get(e).then((function(e){t.allProducts=e.data.order.products,t.sum=e.data.order.total,t.Loading=!1})).catch((function(t){alert(t.message)}))},payOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("finaltwo","/pay/").concat(this.orderId);this.$http.post(e).then((function(e){e.data.success&&(t.isPaid=e.data.success,t.pay="付款成功",t.$swal("付款成功!!"),$["a"].emit("update-cart"))})).catch((function(t){alert(t.message)}))}},mounted:function(){this.getOrder()}};A.render=P;e["default"]=A},"65f0":function(t,e,c){var s=c("861d"),n=c("e8b5"),r=c("b622"),i=r("species");t.exports=function(t,e){var c;return n(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!n(c.prototype)?s(c)&&(c=c[i],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},8418:function(t,e,c){"use strict";var s=c("c04e"),n=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var i=s(e);i in t?n.f(t,i,r(0,c)):t[i]=c}},"99af":function(t,e,c){"use strict";var s=c("23e7"),n=c("d039"),r=c("e8b5"),i=c("861d"),o=c("7b0b"),a=c("50c4"),l=c("8418"),d=c("65f0"),u=c("1dde"),b=c("b622"),f=c("2d00"),p=b("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",O=f>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),v=u("concat"),g=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},y=!O||!v;s({target:"Array",proto:!0,forced:y},{concat:function(t){var e,c,s,n,r,i=o(this),u=d(i,0),b=0;for(e=-1,s=arguments.length;e<s;e++)if(r=-1===e?i:arguments[e],g(r)){if(n=a(r.length),b+n>h)throw TypeError(j);for(c=0;c<n;c++,b++)c in r&&l(u,b,r[c])}else{if(b>=h)throw TypeError(j);l(u,b++,r)}return u.length=b,u}})},e4f3:function(t,e,c){"use strict";var s=function(t){return{all:t=t||new Map,on:function(e,c){var s=t.get(e);s?s.push(c):t.set(e,[c])},off:function(e,c){var s=t.get(e);s&&(c?s.splice(s.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var s=t.get(e);s&&s.slice().map((function(t){t(c)})),(s=t.get("*"))&&s.slice().map((function(t){t(e,c)}))}}},n=s();e["a"]=n},e8b5:function(t,e,c){var s=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}}}]);
//# sourceMappingURL=chunk-5851dea6.275ebf08.js.map