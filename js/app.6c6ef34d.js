(function(e){function t(t){for(var o,r,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function s(e){return l.p+"js/"+({Login:"Login",qrscan:"qrscan"}[e]||e)+"."+{Login:"6016657a",qrscan:"e783055b"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={Login:1,qrscan:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({Login:"Login",qrscan:"qrscan"}[e]||e)+"."+{Login:"54a8c28e",qrscan:"38e9a8ea"}[e]+".css",i=l.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===o||u===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],m.parentNode.removeChild(m),n(a)},m.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(m)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}i[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{color:"Lighen-5",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-system-bar"),n("v-list",[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})],1)],1),n("v-list-item",{attrs:{link:""}},[e.isLogin?n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[e._v(" "+e._s(e.userInfo.name)+" ")]),n("v-list-item-subtitle",[e._v(e._s(e.userInfo.email)+" ")])],1):e._e(),n("v-list-item-action",[n("v-icon",[e._v("mdi-menu-down")])],1)],1)],1),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.appBarDrawerSelectedItem,callback:function(t){e.appBarDrawerSelectedItem=t},expression:"appBarDrawerSelectedItem"}},e._l(e.appBarDrawerLeftitems,(function(t,o){return n("v-list-item",{key:o},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.text)}})],1)],1)})),1)],1)],1),n("v-app-bar",{attrs:{color:"indigo darken-2",dense:"",dark:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("div",{staticClass:"px-3"},[n("v-flex",{attrs:{xs12:""}},[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:e.avatar1,alt:"John"}})],1),n("v-text-field",{staticClass:"questrial no-top-padding",attrs:{placeholder:" Search","hide-details":"","prepend-icon":"mdi-magnify","single-line":""}})],1)],1)],1),n("v-spacer"),e.isLogin?n("div",["100017"===e.userInfo.userid?n("v-btn",{staticClass:"ma-2 white--text",attrs:{small:"",color:"primary",router:"",to:{name:"Signin"}}},[e._v("Sigin "),n("v-icon",{attrs:{right:"",dark:""}},[e._v(" mdi-login ")])],1):e._e()],1):e._e(),e.isMobile()?e._e():n("div",{staticClass:".d-none .d-lg-flex .d-xl-none"},[e.isLogin?n("h4",[e._v(e._s(e.userInfo.name)+" ")]):e._e()]),e.isLogin?n("v-btn",{attrs:{small:"",color:"secondary"},on:{click:function(t){return e.$store.dispatch("logout")}}},[e._v("Logout "),n("v-icon",{attrs:{right:"",dark:""}},[e._v(" mdi-logout ")])],1):n("v-btn",{staticClass:"ma-2 white--text",attrs:{small:"",color:"primary",router:"",to:{name:"Login"}}},[e._v("Login "),n("v-icon",{attrs:{right:"",dark:""}},[e._v(" mdi-login ")])],1),e.isMobile()?n("div",{staticClass:"d-none d-sm-flex"},[e.isLogin?n("v-btn",{attrs:{"x-small":"",color:"secondary"},on:{click:function(t){return e.$store.dispatch("logout")}}},[e._v("Logout "),n("v-icon",{attrs:{right:"",dark:""}},[e._v(" mdi-logout ")])],1):n("v-btn",{staticClass:"ma-2 white--text",attrs:{small:"",color:"primary",router:"",to:{name:"Login"}}},[e._v("Login "),n("v-icon",{attrs:{right:"",dark:""}},[e._v(" mdi-login ")])],1)],1):e._e()],1),n("v-main",{staticClass:"grey lighten-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{xl:"12"}},[n("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}},[n("v-bottom-navigation",[n("v-btn",{attrs:{value:"Feed",router:"",to:{name:"Feed",params:{id:1,name:"Feed"}}}},[n("span",[e._v("Home")]),n("v-icon",{attrs:{color:"blue darken-2"}},[e._v("mdi-home ")])],1),n("v-btn",{attrs:{value:"TimeChart",router:"",to:{name:"LineCharts",params:{id:1,name:"Mix"}}}},[n("span",[e._v("설비가동현황")]),n("v-icon",{attrs:{color:"blue darken-2"}},[e._v("mdi-finance ")])],1),e._l(e.subMenuBtns,(function(t,o){var r=t[0],i=t[1];return n("v-menu",{key:r,attrs:{rounded:i,"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.attrs,a=t.on;return[n("v-btn",e._g(e._b({attrs:{color:e.colors[o]}},"v-btn",i,!1),a),[n("span",[e._v(e._s(r)+" ")]),n("v-icon",{attrs:{color:"blue darken-2"}},[e._v("mdi-application")])],1)]}}],null,!0)},[n("v-list",e._l(e.subMenuItems,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.route,link:""}},[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)})),1)],1)}))],2),e.$route.meta.keepAlive?n("keep-alive",[n("router-view")],1):n("router-view")],1)],1)],1)],1)],1),n("v-footer",{attrs:{color:"secondary",dark:"",fixed:""}},[n("div",{staticClass:"mx-auto"},[e._v(" Copyright © "+e._s((new Date).getFullYear())+" ")])])],1)},i=[],a=n("5530"),s=n("2909"),l=(n("d81d"),n("159b"),n("2f62")),c={components:{},data:function(){return{drawer:!1,appBarDrawerSelectedItem:0,appBarDrawerLeftitems:[{text:"My profile",icon:"mdi-folder"},{text:"History",icon:"mdi-account-multiple"},{text:"One-Point Lession",icon:"mdi-star"},{text:"Trouble-Shooting Guide",icon:"mdi-history"},{text:"System Catagory",icon:"mdi-check-circle"},{text:"Global Serivce Contact",icon:"mdi-upload"},{text:"Local System Configuration",icon:"mdi-cloud-upload"}],links:[],loginUser:null,events:["click","mousemove","mousedown","scroll","keypress","load"],avatar1:n("c2d1"),logoutTimer:null,subMenuBtns:[["품질관리","0"]],items:Object(s["a"])(Array(4)).map((function(e,t){return"Item ".concat(t)})),colors:["normal","error","teal darken-1"],subMenuItemsX:[],subMenuItems:[{title:"Login",route:"/Login"},{title:"qrscan",route:"/qrscan"}]}},methods:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},test:function(){alert("test")},resetTimer:function(){clearTimeout(this.logoutTimer),this.setTimers()},setTimers:function(){this.logoutTimer=setTimeout(this.autoLogoutUser,18e5)},autoLogoutUser:function(){!0===this.isLogin&&(alert("Are you still here ? system auto logout !!"),this.$store.dispatch("logout"))},movetoScreen:function(e){switch(null===localStorage.getItem("token")&&this.$router.push("/login"),e){case"Item Code":null===localStorage.getItem("token")&&this.$router.push("/ScrapInput");break;case"winaki":break}}},computed:Object(a["a"])({},Object(l["c"])(["isLogin","userInfo","isAdminLogin"])),created:function(){console.log("vue created "),null===localStorage.getItem("token")&&this.$router.push("/Login")},mounted:function(){this.events.forEach((function(e){window.addEventListener(e,this.resetTimer)}),this),this.setTimers()}},u=c,d=(n("034f"),n("2877")),m=n("6544"),g=n.n(m),p=n("7496"),v=n("40dc"),f=n("5bc1"),h=n("b81c"),b=n("8336"),L=n("62ad"),k=n("a523"),y=n("ce7e"),w=n("0e8f"),_=n("553a"),S=n("132d"),x=n("adda"),I=n("8860"),C=n("da13"),V=n("1800"),A=n("8270"),E=n("5d23"),T=n("1baa"),M=n("34c3"),O=n("f6c4"),B=n("e449"),j=n("f774"),P=n("0fd9"),q=n("8dd9"),D=n("2fa4"),F=n("afd9"),$=n("8654"),N=Object(d["a"])(u,r,i,!1,null,null,null),U=N.exports;g()(N,{VApp:p["a"],VAppBar:v["a"],VAppBarNavIcon:f["a"],VBottomNavigation:h["a"],VBtn:b["a"],VCol:L["a"],VContainer:k["a"],VDivider:y["a"],VFlex:w["a"],VFooter:_["a"],VIcon:S["a"],VImg:x["a"],VList:I["a"],VListItem:C["a"],VListItemAction:V["a"],VListItemAvatar:A["a"],VListItemContent:E["a"],VListItemGroup:T["a"],VListItemIcon:M["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"],VMain:O["a"],VMenu:B["a"],VNavigationDrawer:j["a"],VRow:P["a"],VSheet:q["a"],VSpacer:D["a"],VSystemBar:F["a"],VTextField:$["a"]});n("d3b7"),n("3ca3"),n("ddb0");var H=n("8c4f"),G=(n("b0c0"),n("bc3a")),J=n.n(G);o["a"].use(l["a"]);var K=new l["a"].Store({state:{allUsers:[{id:"100017",name:"winaki",password:"100017",email:"winaki@kumhotire.com"},{id:"999999",name:"Admin",password:"ktgmes",email:"admin@kumhotire.com"}],isLogin:!1,isAdminLogin:!1,isLoginError:!1,loginUser:null,loginName:null,userInfo:[{userid:"",name:"",email:"",dept:"",password:""}],isSignin:!1},mutations:{loginSuccess:function(e,t){e.isLogin=!0,e.isLoginError=!1,e.userInfo=t},adminloginSuccess:function(e){e.isAdminLogin=!0},loginError:function(e){e.isLogin=!1,e.isLoginError=!0},logout:function(e){e.isLogin=!1,e.isAdminLogin=!1,e.isLoginError=!1,e.userInfo=null},SigninSuccess:function(e){e.isSignin=!0}},actions:{login:function(e,t){var n=e.state,o=e.commit,r=e.dispatch;console.log(n.isLogin),console.log(t);var i={userid:"",name:"",dept:"",email:t.tfemail,password:t.tfpassword};console.log("login action"),console.log(i),J.a.post("https://all.ktgga.com:5000/login",i).then((function(e){console.log("login response: "),console.log(e),200===e.status?(localStorage.setItem("token",e.data.token),console.log("nodejs"+e.data),o("loginSuccess",i),"100017"===i.userid&&o("adminloginSuccess"),r("getMemberInfo")):(o("loginError"),localStorage.clear())})).catch((function(e){console.log(e),o("loginError"),localStorage.clear()}))},getMemberInfo:function(e){var t=e.commit,n=localStorage.getItem("token"),o={headers:{token:n}};console.log("token"+n),""!==n&&null!==n&&J.a.get("https://all.ktgga.com:5000/user",o).then((function(e){console.log("user response : "),console.log(e.data);var n={userid:e.data.user.userid,name:e.data.user.name,email:e.data.user.email,dept:e.data.user.dept};t("loginSuccess",n),z.push({name:"Feed"})})).catch((function(){alert("id and password not correct")}))},signin:function(e,t){var n=e.state,o=e.commit;console.log(n.isLogin),console.log(t),J.a.post("https://all.ktgga.com:5000/signin",{userid:t.tfuserid,name:t.tfname,dept:t.tfdept,email:t.tfemail,password:t.tfpassword}).then((function(e){console.log(e),200===e.status?(o("logout"),localStorage.clear(),z.push({name:"Login"})):(o("loginError"),localStorage.clear()),o("SigninSuccess")})).catch((function(e){console.log(e)}))},logout:function(e){var t=e.commit;t("logout"),localStorage.clear(),z.push({name:"Login"})}},modules:{}});o["a"].use(H["a"]);var R=function(e,t,n){!0===K.state.isLogin?n("/Home"):n()},X=[{path:"/Login",name:"Login",beforeEnter:R,component:function(){return n.e("Login").then(n.bind(null,"a55b"))},meta:{keepAlive:!0}},{path:"/qrscan",name:"qrscan",component:function(){return n.e("qrscan").then(n.bind(null,"7bf3"))},meta:{keepAlive:!1}}],Y=new H["a"]({mode:"history",base:"/",routes:X}),z=Y,Q=n("f309");o["a"].use(Q["a"]);var W=new Q["a"]({icons:{iconfont:"mdi"}}),Z=n("1321"),ee=n.n(Z),te=n("6612"),ne=n.n(te),oe=n("3b0c");o["a"].config.productionTip=!1,o["a"].filter("numFormat",Object(oe["a"])(ne.a)),new o["a"]({router:z,store:K,beforeCreate:function(){this.$store.dispatch("getMemberInfo")},vuetify:W,VueApexCharts:ee.a,render:function(e){return e(U)}}).$mount("#app")},"85ec":function(e,t,n){},c2d1:function(e,t,n){e.exports=n.p+"img/help.e9ec5413.png"}});
//# sourceMappingURL=app.6c6ef34d.js.map