(function(t){function e(e){for(var a,n,i=e[0],l=e[1],u=e[2],m=0,p=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},1:function(t,e){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=(s("db4d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor03"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[t._v(" 用户管理系统 ")]),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:"/"}},[t._v("主页")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:"/about"}},[t._v("关于")])],1)]),s("form",{staticClass:"form-inline my-2 my-lg-0"},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{attrs:{to:"/add"}},[t._v("添加用户")])],1)])])])]),s("router-view")],1)}),o=[],n={name:"App",components:{}},i=n,l=(s("034f"),s("2877")),u=Object(l["a"])(i,r,o,!1,null,null,null),c=u.exports,m=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"About"}},[t._v(" About ")])},d=[],f={name:"About"},v=f,h=Object(l["a"])(v,p,d,!1,null,"6785d2ec",null),b=h.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"Customers container"}},[t.AlertData?s("Alert",{attrs:{message:t.AlertData}}):t._e(),s("h1",{staticClass:"page-header"},[t._v("用户管理系统")]),s("table",{staticClass:"table tabletable-striped"},[t._m(0),s("tbody",t._l(t.customers,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.name))]),s("td",[t._v(t._s(e.sex))]),s("td",[t._v(t._s(e.email))]),s("td",[s("router-link",{staticClass:"btn btn-default",attrs:{to:"/customer/"+e.id}},[t._v("详情")])],1)])})),0)])],1)},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("姓名")]),s("th",[t._v("性别")]),s("th",[t._v("邮箱")])])])}],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alert alert-warning alert-dismissible",attrs:{role:"alert"}},[t._m(0),t._v(" "+t._s(t.message)+" ")])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],y={name:"Alert",props:["message"],data:function(){return{}}},$=y,w=Object(l["a"])($,C,x,!1,null,"58ba2553",null),O=w.exports,j={name:"Customers",components:{Alert:O},data:function(){return{customers:[],AlertData:""}},created:function(){this.fetchCustomers(),this.$http.get("/api").then((function(t){console.log("123"+t)}))},updated:function(){this.fetchCustomers()},methods:{fetchCustomers:function(){var t=this;this.$http.get("http://localhost:3000/users").then((function(e){t.customers=e.body})),this.$route.query.alert&&(this.AlertData=this.$route.query.alert)}}},P=j,A=Object(l["a"])(P,g,_,!1,null,"60dc6bbb",null),k=A.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"Add"}},[s("h1",{staticClass:"page-header"},[t._v("添加用户")]),s("form",{attrs:{action:""},on:{submit:t.addCustomer}},[s("div",{staticClass:"well"},[s("h4",[t._v("用户信息")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.name,expression:"customer.name"}],staticClass:"form-control",attrs:{type:"text",name:"",id:"",placeholder:""},domProps:{value:t.customer.name},on:{input:function(e){e.target.composing||t.$set(t.customer,"name",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("性别")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.sex,expression:"customer.sex"}],staticClass:"form-control",attrs:{type:"text",name:"",id:"",placeholder:""},domProps:{value:t.customer.sex},on:{input:function(e){e.target.composing||t.$set(t.customer,"sex",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("邮箱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.email,expression:"customer.email"}],staticClass:"form-control",attrs:{type:"text",name:"",id:"",placeholder:""},domProps:{value:t.customer.email},on:{input:function(e){e.target.composing||t.$set(t.customer,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("学历")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.education,expression:"customer.education"}],staticClass:"form-control",attrs:{type:"text",name:"",id:"",placeholder:""},domProps:{value:t.customer.education},on:{input:function(e){e.target.composing||t.$set(t.customer,"education",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("毕业学校")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.graduationschool,expression:"customer.graduationschool"}],staticClass:"form-control",attrs:{type:"text",name:"",id:"",placeholder:""},domProps:{value:t.customer.graduationschool},on:{input:function(e){e.target.composing||t.$set(t.customer,"graduationschool",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("职业")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.profession,expression:"customer.profession"}],staticClass:"form-control",attrs:{type:"text",name:"",id:"",placeholder:""},domProps:{value:t.customer.profession},on:{input:function(e){e.target.composing||t.$set(t.customer,"profession",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("个人简介")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.customer.profile,expression:"customer.profile"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.customer.profile},on:{input:function(e){e.target.composing||t.$set(t.customer,"profile",e.target.value)}}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("添加")])])])])},E=[],N=(s("b0c0"),{name:"Add",data:function(){return{customer:{}}},methods:{addCustomer:function(t){var e=this;if(this.customer.name&&this.customer.sex&&this.customer.email){var s={name:this.customer.name,sex:this.customer.sex,email:this.customer.email,education:this.customer.education,graduationschool:this.customer.graduationschool,profession:this.customer.profession,profile:this.customer.profile};this.$http.post("http://localhost:3000/users",s).then((function(t){e.$router.push({path:"/",query:{alert:"用户信息添加成功！"}})})),t.preventDefault()}else console.log("none!");t.preventDefault()}}}),S=N,M=Object(l["a"])(S,D,E,!1,null,"de55c800",null),q=M.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"CustomerDetails"}},[s("h1",{staticClass:"page-header"},[t._v(t._s(t.customer.name))]),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"el-icon-platform-eleme"},[t._v(t._s(t.customer.sex))])]),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"el-icon-platform-eleme"},[t._v(t._s(t.customer.email))])]),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"el-icon-platform-eleme"},[t._v(t._s(t.customer.education))])]),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"el-icon-platform-eleme"},[t._v(t._s(t.customer.graduationschool))])]),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"el-icon-platform-eleme"},[t._v(t._s(t.customer.profession))])]),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"el-icon-platform-eleme"},[t._v(t._s(t.customer.profile))])])])])},J=[],z={name:"CustomerDetails",data:function(){return{customer:""}},created:function(){this.fetchCustomers(this.$route.params.id)},methods:{fetchCustomers:function(t){var e=this;this.$http.get("http://localhost:3000/users/"+t).then((function(t){e.customer=t.body}))}}},B=z,F=Object(l["a"])(B,T,J,!1,null,"a0ee4a9e",null),G=F.exports,H=[{path:"/",component:k},{path:"/about",component:b},{path:"/add",component:q},{path:"/customer/:id",component:G}],I=s("28dd"),K=s("5c96"),L=s.n(K);s("ab8b"),s("3e48"),s("0fae");a["default"].config.productionTip=!1,a["default"].use(m["a"]),a["default"].use(I["a"]),a["default"].use(L.a);var Q=new m["a"]({mode:"history",base:"_dirname",routes:H});new a["default"]({render:function(t){return t(c)},router:Q}).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.f047ecdd.js.map