(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PostReply"],{1681:function(t,e,a){},"28e0":function(t,e,a){},5318:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{staticClass:"justify-center",attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-layout",{attrs:{wrap:"",column:""}},[a("v-flex",{attrs:{"d-inline-flex":"",xs6:""}},[a("v-card",{staticStyle:{width:"100%"},attrs:{color:"basil"}},[a("v-chip",{staticClass:"ma-2",attrs:{color:"primary",label:""}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-tag-outline ")]),a("span",[t._v(t._s(t.dialogTitle))])],1),a("v-list",[a("v-list-item",{attrs:{link:""}},[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})],1),a("v-list-item-content",[t.isLogin?a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.userInfo.name)+" ")]):t._e(),t.isLogin?a("v-list-item-subtitle",[t._v(t._s(t.userInfo.email)+" / "+t._s(t.userInfo.dept)+" ")]):t._e()],1)],1)],1),a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-textarea",{attrs:{clearable:"",counter:"","clear-icon":"mdi-close-circle",label:"Text",value:"This is clearable text."},model:{value:t.postReplyText,callback:function(e){t.postReplyText=e},expression:"postReplyText"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.close()}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.fnSubmitTodo()}}},[t._v(" Save ")])],1)],1)],1)],1)],1)],1)],1)],1)},i=[],o=a("5530"),n=(a("d3b7"),a("25f0"),a("159b"),a("b0c0"),a("a434"),a("2f62")),l=a("c1df"),r=a.n(l),c=a("59ca"),u=a.n(c),h=(a("ae8c"),a("588e"),a("e71f"),a("05a2")),p={data:function(){return{dialogBBS:!1,dialogTitle:"Make Reply",postReplyText:"You can type in here please..!!",fileDownloadURL:[],files:[],readers:[],oPostLists:[],storageFileURLs:[],storageFileNames:[],insertIdx:0}},firebase:{oPostLists:h["c"]},computed:Object(o["a"])({formTitle:function(){return-1===this.editedIndex?"New Scrap Item":"Edit Item"},OutformTitle:function(){return this.selectedRows.length>0?"ITEM OUT":"ITEMS NOT SELECTED"}},Object(n["c"])(["isLogin","userInfo"])),methods:{close:function(){console.log("postReplyText : "+this.postReplyText),this.$router.push("/")},fnSubmitTodo:function(){var t=this,e=new Date,a=e.toDateString()+" "+e.getHours()+":"+e.getMinutes(),s=(new Date).toString(),i=r()(s.toString()).format("YYYYMMDDHHmmss"),o=(new Date).toISOString();if(this.files.length>0)this.files.forEach((function(e,s){var n=h["d"].ref("images").child("pic"+o+e.name).put(e);n.on("state_changed",(function(t){var e=t.bytesTransferred/t.totalBytes*100;console.log("업로드: "+e+"% 완료",t.state)}),(function(t){console.log(t)}),(function(){n.snapshot.ref.getDownloadURL().then((function(e){if(console.log("업로드URL:",e),t.storageFileURLs.push(e),t.files.length<=t.storageFileURLs.length){t.files.forEach((function(e,a){t.storageFileNames[a]=e.name}));t.userInfo.userid,t.userInfo.name,t.postReplyText,t.storageFileURLs,t.storageFileNames;h["a"].add({pstdat:i,userid:t.userInfo.userid,name:t.userInfo.name,category:t.systemCategory[t.tab].name,postComment:t.postReplyText,storageFileURLs:t.storageFileURLs,storageFileNames:t.storageFileNames,createdAt:a}).then((function(t){console.log(t)})).then((function(t){console.log(t)})),t.postReplyText="",t.storageFileURLs.splice(0,t.storageFileURLs.length),t.storageFileNames.splice(0,t.storageFileNames.length),t.files.splice(0,t.files.length),t.$router.push("/")}}))}))}));else{var n;console.log("no files");var l=this.$route.query.docid,c=[{replydat:i,replyuserid:this.userInfo.userid,replyname:this.userInfo.name,replyComment:this.postReplyText,storageFileURLs:this.storageFileURLs,storageFileNames:this.storageFileNames,createdAt:a}];console.log(c),h["a"].doc(l).update({postReplys:(n=u.a.firestore.FieldValue).arrayUnion.apply(n,c)}).then((function(t){console.log(t)})).then((function(t){console.log(t)})),this.postReplyText="",this.$router.push("/")}},addFiles2:function(){var t=this;this.apictures="",this.files.forEach((function(e,a){t.readers[a]=new FileReader,t.readers[a].onloadend=function(e){var s=t.readers[a].result,i=t.$refs.file[a];i.src=s},t.readers[a].readAsDataURL(t.files[a])}))}}},d=p,f=(a("dc3d"),a("2877")),g=a("6544"),v=a.n(g),m=a("8336"),b=a("b0af"),y=a("99d9"),x=a("cc20"),I=a("a523"),C=a("0e8f"),w=a("132d"),R=a("adda"),T=a("a722"),L=a("8860"),F=a("da13"),k=a("8270"),S=a("5d23"),$=a("2fa4"),O=a("a844"),V=Object(f["a"])(d,s,i,!1,null,null,null);e["default"]=V.exports;v()(V,{VBtn:m["a"],VCard:b["a"],VCardActions:y["a"],VCardText:y["c"],VChip:x["a"],VContainer:I["a"],VFlex:C["a"],VIcon:w["a"],VImg:R["a"],VLayout:T["a"],VList:L["a"],VListItem:F["a"],VListItemAvatar:k["a"],VListItemContent:S["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VSpacer:$["a"],VTextarea:O["a"]})},"8adc":function(t,e,a){},a722:function(t,e,a){"use strict";a("20f6");var s=a("e8f2");e["a"]=Object(s["a"])("layout")},a844:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("1681"),a("8654")),o=a("58df"),n=Object(o["a"])(i["a"]);e["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},cc20:function(t,e,a){"use strict";var s=a("3835"),i=a("5530"),o=(a("4de4"),a("8adc"),a("58df")),n=a("0789"),l=a("9d26"),r=a("a9ad"),c=a("4e82"),u=a("7560"),h=a("f2e7"),p=a("1c87"),d=a("af2b"),f=a("d9bd");e["a"]=Object(o["a"])(r["a"],d["a"],p["a"],u["a"],Object(c["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({"v-chip":!0},p["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(p["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(s["a"])(e,2),i=a[0],o=a[1];t.$attrs.hasOwnProperty(i)&&Object(f["a"])(i,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(l["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(n["b"],t)},genClose:function(){var t=this;return this.$createElement(l["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),s=a.tag,o=a.data;o.attrs=Object(i["a"])(Object(i["a"])({},o.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:o.attrs.tabindex}),o.directives.push({name:"show",value:this.active}),o=this.setBackgroundColor(this.color,o);var n=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(n,o),e)}})},dc3d:function(t,e,a){"use strict";a("28e0")}}]);
//# sourceMappingURL=PostReply.e6d1f79b.js.map