(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cde9b952"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),c=r("9112");for(var a in o){var u=n[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(f){s.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"466d":function(t,e,r){"use strict";var n=r("d784"),o=r("825a"),i=r("50c4"),c=r("1d80"),a=r("8aa5"),u=r("14c3");n("match",(function(t,e,r){return[function(e){var r=c(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,this,t);if(n.done)return n.value;var c=o(this),s=String(t);if(!c.global)return u(c,s);var f=c.unicode;c.lastIndex=0;var l,d=[],b=0;while(null!==(l=u(c,s))){var h=String(l[0]);d[b]=h,""===h&&(c.lastIndex=a(s,i(c.lastIndex),f)),b++}return 0===b?null:d}]}))},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),c=i("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),c=r("e95a"),a=r("50c4"),u=r("8418"),s=r("35a1");t.exports=function(t){var e,r,f,l,d,b,h=o(t),v="function"==typeof this?this:Array,p=arguments.length,y=p>1?arguments[1]:void 0,g=void 0!==y,m=s(h),O=0;if(g&&(y=n(y,p>2?arguments[2]:void 0,2)),void 0==m||v==Array&&c(m))for(e=a(h.length),r=new v(e);e>O;O++)b=g?y(h[O],O):h[O],u(r,O,b);else for(l=m.call(h),d=l.next,r=new v;!(f=d.call(l)).done;O++)b=g?i(l,y,[f.value,O],!0):f.value,u(r,O,b);return r.length=O,r}},6062:function(t,e,r){"use strict";var n=r("6d61"),o=r("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},6566:function(t,e,r){"use strict";var n=r("9bf2").f,o=r("7c73"),i=r("e2cc"),c=r("0366"),a=r("19aa"),u=r("2266"),s=r("7dd0"),f=r("2626"),l=r("83ab"),d=r("f183").fastKey,b=r("69f3"),h=b.set,v=b.getterFor;t.exports={getConstructor:function(t,e,r,s){var f=t((function(t,n){a(t,f,e),h(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=n&&u(n,t[s],{that:t,AS_ENTRIES:r})})),b=v(e),p=function(t,e,r){var n,o,i=b(t),c=y(t,e);return c?c.value=r:(i.last=c={index:o=d(e,!0),key:e,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=c),n&&(n.next=c),l?i.size++:t.size++,"F"!==o&&(i.index[o]=c)),t},y=function(t,e){var r,n=b(t),o=d(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return i(f.prototype,{clear:function(){var t=this,e=b(t),r=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,r=b(e),n=y(e,t);if(n){var o=n.next,i=n.previous;delete r.index[n.index],n.removed=!0,i&&(i.next=o),o&&(o.previous=i),r.first==n&&(r.first=o),r.last==n&&(r.last=i),l?r.size--:e.size--}return!!n},forEach:function(t){var e,r=b(this),n=c(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:r.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),i(f.prototype,r?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),l&&n(f.prototype,"size",{get:function(){return b(this).size}}),f},setStrong:function(t,e,r){var n=e+" Iterator",o=v(e),i=v(n);s(t,e,(function(t,e){h(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,r=t.last;while(r&&r.removed)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),f(e)}}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),c=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6d61":function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("94ca"),c=r("6eeb"),a=r("f183"),u=r("2266"),s=r("19aa"),f=r("861d"),l=r("d039"),d=r("1c7e"),b=r("d44e"),h=r("7156");t.exports=function(t,e,r){var v=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),y=v?"set":"add",g=o[t],m=g&&g.prototype,O=g,j={},w=function(t){var e=m[t];c(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!f(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})},x=i(t,"function"!=typeof g||!(p||m.forEach&&!l((function(){(new g).entries().next()}))));if(x)O=r.getConstructor(e,t,v,y),a.REQUIRED=!0;else if(i(t,!0)){var S=new O,E=S[y](p?{}:-0,1)!=S,k=l((function(){S.has(1)})),A=d((function(t){new g(t)})),D=!p&&l((function(){var t=new g,e=5;while(e--)t[y](e,e);return!t.has(-0)}));A||(O=e((function(e,r){s(e,O,t);var n=h(new g,e,O);return void 0!=r&&u(r,n[y],{that:n,AS_ENTRIES:v}),n})),O.prototype=m,m.constructor=O),(k||D)&&(w("delete"),w("has"),v&&w("get")),(D||E)&&w(y),p&&m.clear&&delete m.clear}return j[t]=O,n({global:!0,forced:O!=g},j),b(O,t),p||r.setStrong(O,t,v),O}},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var i,c;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(c=i.prototype)&&c!==r.prototype&&o(t,c),t}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),i=r("e8b5"),c=r("861d"),a=r("7b0b"),u=r("50c4"),s=r("8418"),f=r("65f0"),l=r("1dde"),d=r("b622"),b=r("2d00"),h=d("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",y=b>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=l("concat"),m=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},O=!y||!g;n({target:"Array",proto:!0,forced:O},{concat:function(t){var e,r,n,o,i,c=a(this),l=f(c,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?c:arguments[e],m(i)){if(o=u(i.length),d+o>v)throw TypeError(p);for(r=0;r<o;r++,d++)r in i&&s(l,d,i[r])}else{if(d>=v)throw TypeError(p);s(l,d++,i)}return l.length=d,l}})},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(c){throw o(t),c}}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),u=r("4930"),s=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),h=r("825a"),v=r("7b0b"),p=r("fc6a"),y=r("c04e"),g=r("5c6c"),m=r("7c73"),O=r("df75"),j=r("241c"),w=r("057f"),x=r("7418"),S=r("06cf"),E=r("9bf2"),k=r("d1e7"),A=r("9112"),D=r("6eeb"),P=r("5692"),C=r("f772"),I=r("d012"),T=r("90e3"),z=r("b622"),$=r("e538"),N=r("746f"),R=r("d44e"),F=r("69f3"),J=r("b727").forEach,W=C("hidden"),L="Symbol",B="prototype",M=z("toPrimitive"),U=F.set,_=F.getterFor(L),Q=Object[B],K=o.Symbol,q=i("JSON","stringify"),H=S.f,G=E.f,V=w.f,X=k.f,Y=P("symbols"),Z=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),rt=P("wks"),nt=o.QObject,ot=!nt||!nt[B]||!nt[B].findChild,it=a&&f((function(){return 7!=m(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(Q,e);n&&delete Q[e],G(t,e,r),n&&t!==Q&&G(Q,e,n)}:G,ct=function(t,e){var r=Y[t]=m(K[B]);return U(r,{type:L,tag:t,description:e}),a||(r.description=e),r},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ut=function(t,e,r){t===Q&&ut(Z,e,r),h(t);var n=y(e,!0);return h(r),l(Y,n)?(r.enumerable?(l(t,W)&&t[W][n]&&(t[W][n]=!1),r=m(r,{enumerable:g(0,!1)})):(l(t,W)||G(t,W,g(1,{})),t[W][n]=!0),it(t,n,r)):G(t,n,r)},st=function(t,e){h(t);var r=p(e),n=O(r).concat(ht(r));return J(n,(function(e){a&&!lt.call(r,e)||ut(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):st(m(t),e)},lt=function(t){var e=y(t,!0),r=X.call(this,e);return!(this===Q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,W)&&this[W][e])||r)},dt=function(t,e){var r=p(t),n=y(e,!0);if(r!==Q||!l(Y,n)||l(Z,n)){var o=H(r,n);return!o||!l(Y,n)||l(r,W)&&r[W][n]||(o.enumerable=!0),o}},bt=function(t){var e=V(p(t)),r=[];return J(e,(function(t){l(Y,t)||l(I,t)||r.push(t)})),r},ht=function(t){var e=t===Q,r=V(e?Z:p(t)),n=[];return J(r,(function(t){!l(Y,t)||e&&!l(Q,t)||n.push(Y[t])})),n};if(u||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===Q&&r.call(Z,t),l(this,W)&&l(this[W],e)&&(this[W][e]=!1),it(this,e,g(1,t))};return a&&ot&&it(Q,e,{configurable:!0,set:r}),ct(e,t)},D(K[B],"toString",(function(){return _(this).tag})),D(K,"withoutSetter",(function(t){return ct(T(t),t)})),k.f=lt,E.f=ut,S.f=dt,j.f=w.f=bt,x.f=ht,$.f=function(t){return ct(z(t),t)},a&&(G(K[B],"description",{configurable:!0,get:function(){return _(this).description}}),c||D(Q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:K}),J(O(rt),(function(t){N(t)})),n({target:L,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=K(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(v(t))}}),q){var vt=!u||f((function(){var t=K();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,q.apply(null,o)}})}K[B][M]||A(K[B],M,K[B].valueOf),R(K,L),I[W]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),c=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:c},{from:o})},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/,u="name";n&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),c=r("50c4"),a=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,d=7==t,b=5==t||l;return function(h,v,p,y){for(var g,m,O=i(h),j=o(O),w=n(v,p,3),x=c(j.length),S=0,E=y||a,k=e?E(h,x):r||d?E(h,0):void 0;x>S;S++)if((b||S in j)&&(g=j[S],m=w(g,S,O),t))if(e)k[S]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:u.call(k,g)}else switch(t){case 4:return!1;case 7:u.call(k,g)}return l?-1:s||f?f:k}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},bb2f:function(t,e,r){var n=r("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),c=r("5135"),a=r("861d"),u=r("9bf2").f,s=r("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(d,f);var b=d.prototype=f.prototype;b.constructor=d;var h=b.toString,v="Symbol(test)"==String(f("test")),p=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(c(l,t))return"";var r=v?e.slice(7,-1):e.replace(p,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e4f3:function(t,e,r){"use strict";var n=function(t){return{all:t=t||new Map,on:function(e,r){var n=t.get(e);n?n.push(r):t.set(e,[r])},off:function(e,r){var n=t.get(e);n&&(r?n.splice(n.indexOf(r)>>>0,1):t.set(e,[]))},emit:function(e,r){var n=t.get(e);n&&n.slice().map((function(t){t(r)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,r)}))}}},o=n();e["a"]=o},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ef81:function(t,e,r){"use strict";r.r(e);var n=r("7a23");function o(t,e,r,o,i,c){var a=Object(n["y"])("Loading"),u=Object(n["y"])("Products");return Object(n["t"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(a,{isLoading:i.Loading},null,8,["isLoading"]),Object(n["h"])(u,{tospecial:i.products},null,8,["tospecial"])],64)}r("99af"),r("a4d3"),r("e01a");var i={class:"container wrap min-height"},c={class:"row",id:"toProducts"},a=Object(n["h"])("h2",{class:"font-size-bold mb-4 text-center"},"1/1 ~ 9/2 所有展覽...",-1),u={class:"category"},s={class:"container"},f={class:"row"},l={class:"col-md-10 m0-auto d-flex justify-content-center category mb-4 border-bottom border-secondary mb-5 flex-wrap"},d={class:"col-md-10 m0-auto d-flex products-card"},b={class:"col-md-4"},h={class:"col-md-8 product-card-body d-flex justify-content-between flex-column border card-body-color"},v={class:"product-card-title"},p={class:"ellipsis product-card-text"},y={class:"card-price"},g={class:"text-muted"},m=Object(n["h"])("button",{type:"button",class:"btn btn-secondary mr-0"},"查看詳情",-1);function O(t,e,r,o,O,j){var w=Object(n["y"])("router-link");return Object(n["t"])(),Object(n["d"])("div",i,[Object(n["h"])("div",c,[a,Object(n["h"])("section",u,[Object(n["h"])("div",s,[Object(n["h"])("div",f,[Object(n["h"])("ul",l,[Object(n["h"])("li",null,[Object(n["h"])("button",{class:"btn btn-secondary category-btn rounded-0",onClick:e[1]||(e[1]=Object(n["J"])((function(t){return j.addWordToData("all")}),["prevent"]))},"全部展覽")]),Object(n["h"])("li",null,[Object(n["h"])("button",{class:"btn btn-secondary category-btn rounded-0",onClick:e[2]||(e[2]=Object(n["J"])((function(t){return j.addWordToData("special")}),["prevent"]))},"特別展覽")]),Object(n["h"])("li",null,[Object(n["h"])("button",{class:"btn btn-secondary category-btn rounded-0",onClick:e[3]||(e[3]=Object(n["J"])((function(t){return j.addWordToData("hot")}),["prevent"]))},"熱門展覽")]),Object(n["h"])("li",null,[Object(n["h"])("button",{class:"btn btn-secondary category-btn rounded-0",onClick:e[4]||(e[4]=Object(n["J"])((function(t){return j.addWordToData("normal")}),["prevent"]))},"一般展覽")])])])])]),(Object(n["t"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(O.filterData,(function(e){return Object(n["t"])(),Object(n["d"])("div",{class:"row mb-5 ml-0 mr-0",key:e},[Object(n["h"])("div",d,[Object(n["h"])("div",b,[Object(n["h"])("img",{src:e.imageUrl,alt:"產品圖片"},null,8,["src"])]),Object(n["h"])("div",h,[Object(n["h"])("div",null,[Object(n["h"])("h2",v,Object(n["B"])(e.title),1),Object(n["h"])("p",p,Object(n["B"])(e.description),1)]),Object(n["h"])("div",null,[Object(n["h"])("p",y,[Object(n["h"])("small",g,[Object(n["h"])("del",null,"NT$ "+Object(n["B"])(t.$toCurrency(e.origin_price)),1),Object(n["g"])("/ NT$ "+Object(n["B"])(t.$toCurrency(e.price)),1)])]),Object(n["h"])("div",null,[Object(n["h"])(w,{to:"/product/".concat(e.id)},{default:Object(n["H"])((function(){return[m]})),_:2},1032,["to"]),Object(n["h"])("button",{type:"button",class:"btn btn-third border-secondary",onClick:function(t){return j.addToCart(e.id)},disabled:O.loadingStatus.loadingItem===e.id},"加入購物車",8,["onClick","disabled"])])])])])])})),128))])])}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function w(t){if(Array.isArray(t))return j(t)}r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function x(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0");function S(t,e){if(t){if("string"===typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,e):void 0}}function E(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(t){return w(t)||x(t)||S(t)||E()}r("6062"),r("159b"),r("4de4"),r("ac1f"),r("466d");var A=r("e4f3"),D={data:function(){return{allProducts:[],categories:[],selectCategory:"",loadingStatus:{loadingItem:""},filterData:[]}},props:["tospecial"],methods:{addToCart:function(t){var e=this;this.loadingStatus.loadingItem=t;var r={product_id:t,qty:1},n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("finaltwo","/cart");this.$http.post(n,{data:r}).then((function(t){t.data.success&&(e.loadingStatus.loadingItem="",A["a"].emit("update-cart"),e.$swal({title:"已加入購物車!!",position:"top-end",showConfirmButton:!1,timer:1500}))})).catch((function(t){alert(t.message)}))},getCategories:function(){var t=new Set;this.allProducts.forEach((function(e){t.add(e.category)})),this.categories=k(t)},addWordToData:function(t){var e=this,r=new Set;switch(t){case"all":this.filterData=this.tospecial;break;case"special":this.allProducts.forEach((function(t){"特別展覽"===t.category&&(r.add(t),e.filterData=k(r))}));break;case"hot":this.allProducts.forEach((function(t){"熱門展覽"===t.category&&(r.add(t),e.filterData=k(r))}));break;case"normal":this.allProducts.forEach((function(t){"一般展覽"===t.category&&(r.add(t),e.filterData=k(r))}));break}}},watch:{tospecial:function(){this.allProducts=this.tospecial,this.filterData=this.tospecial,this.getCategories()}},computed:{filterProducts:function(){var t=this;return this.allProducts.filter((function(e){return e.category.match(t.selectCategory)}))}}};D.render=O;var P=D,C={components:{Products:P},data:function(){return{products:[],Loading:!1}},methods:{getData:function(){var t=this;this.Loading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("finaltwo","/products");this.$http.get(e).then((function(e){e.data.success&&(t.products=e.data.products,t.Loading=!1)})).catch((function(t){alert(t.message)}))}},mounted:function(){this.getData()}};C.render=o;e["default"]=C},f183:function(t,e,r){var n=r("d012"),o=r("861d"),i=r("5135"),c=r("9bf2").f,a=r("90e3"),u=r("bb2f"),s=a("meta"),f=0,l=Object.isExtensible||function(){return!0},d=function(t){c(t,s,{value:{objectID:"O"+ ++f,weakData:{}}})},b=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,s)){if(!l(t))return"F";if(!e)return"E";d(t)}return t[s].objectID},h=function(t,e){if(!i(t,s)){if(!l(t))return!0;if(!e)return!1;d(t)}return t[s].weakData},v=function(t){return u&&p.REQUIRED&&l(t)&&!i(t,s)&&d(t),t},p=t.exports={REQUIRED:!1,fastKey:b,getWeakData:h,onFreeze:v};n[s]=!0},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),i=r("e8b5"),c=r("23cb"),a=r("50c4"),u=r("fc6a"),s=r("8418"),f=r("b622"),l=r("1dde"),d=l("slice"),b=f("species"),h=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,f,l=u(this),d=a(l.length),p=c(t,d),y=c(void 0===e?d:e,d);if(i(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(l,p,y);for(n=new(void 0===r?Array:r)(v(y-p,0)),f=0;p<y;p++,f++)p in l&&s(n,f,l[p]);return n.length=f,n}})}}]);
//# sourceMappingURL=chunk-cde9b952.ef4c30b6.js.map