(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LineCharts","about"],{4155:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-6",attrs:{fluid:""}},[a("div",{staticClass:"lineCharts-page"},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"mx-1 mb-1"},[a("v-card-title",{staticClass:"pa-5 pb-3"},[a("p",[t._v("Mixing Real-Time Chart")]),a("v-spacer"),a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[a("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.menu,(function(e,s){return a("v-list-item",{key:s,on:{click:function(){}}},[a("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),a("v-card-text",{staticClass:"pa-5 pt-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("ApexChart",{attrs:{type:"line",height:"250",options:t.apexLinesWithData.options,series:t.apexLinesWithData.series}})],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"mx-1 mb-1"},[a("v-card-title",{staticClass:"pa-5 pb-3"},[a("p",[t._v("Apex Line Chart with Data Labels")]),a("v-spacer"),a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[a("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.menu,(function(e,s){return a("v-list-item",{key:s,on:{click:function(){}}},[a("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),a("v-card-text",{staticClass:"pa-5 pt-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("ApexChart",{attrs:{type:"line",height:"350",options:t.apexLines.options,series:t.apexLines.series}})],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"mx-1 mb-1"},[a("v-card-title",{staticClass:"pa-5 pb-3"},[a("p",[t._v("Apex Zoomable Timeseries Chart")]),a("v-spacer"),a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[a("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.menu,(function(e,s){return a("v-list-item",{key:s,on:{click:function(){}}},[a("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),a("v-card-text",{staticClass:"pa-5 pt-0 pb-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"my-auto",attrs:{cols:"12"}},[a("ApexChart",{attrs:{type:"area",height:"350",options:t.apexArea.options,series:t.apexArea.series}})],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"mx-1 mb-1"},[a("v-card-title",{staticClass:"pa-5 pb-3"},[a("p",[t._v("Gradient Chart")]),a("v-spacer"),a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[a("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.menu,(function(e,s){return a("v-list-item",{key:s,on:{click:function(){}}},[a("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),a("v-card-text",{staticClass:"pa-5 pt-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[a("ApexChart",{ref:"realtimeChart",attrs:{type:"line",height:"330",options:t.apexDynamic.options,series:t.apexDynamic.series}})],1)],1)],1)],1)],1)],1)],1)])},r=[],i=(a("b680"),a("a1bc")),o=a("1321"),n=a.n(o),c={name:"LineCharts",components:{ApexChart:n.a},data:function(){return{menu:["Edit","Copy","Delete","Print"],apexLines:{series:[{name:"Desktops",data:[13,8,8,9,10,8,9,12,18,7,19,17,20,16,0,0,0]}],options:{chart:{height:300,type:"line",toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},colors:[i["a"].light.primary],grid:{row:{colors:[i["a"].light.primary,"transparent"],opacity:.1}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}},apexLinesWithData:{series:[{name:"BB05",data:[10,14,15,14,5,10,14,14,9,10,14,10,4,13,1,0,0]},{name:"BB09",data:[13,15,15,15,0,13,16,16,13,6,15,15,2,14,6,0,0]},{name:"BB10",data:[13,15,15,15,0,13,16,16,13,6,15,15,2,14,6,0,0]},{name:"BB11",data:[13,14,15,16,0,14,15,16,16,5,16,10,6,16,4,0,0]},{name:"BB12",data:[13,17,17,15,0,9,11,15,14,6,17,14,3,16,5,0,0]}],options:{chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},yaxis:{min:0,max:30},colors:[i["a"].light.primary,i["a"].light.info,i["a"].light.secondaryConst,i["a"].light.warning,i["a"].light.successConst],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:4},grid:{borderColor:"#e7e7e7",row:{colors:[i["a"].light.primary,"transparent"],opacity:.1}},markers:{size:2,colors:[i["a"].light.warning],strokeColors:"#fff",strokeWidth:1,hover:{size:7}},xaxis:{categories:["06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30"]},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-0,offsetX:-5}}},apexArea:{series:[{name:"XYZ MOTORS",data:this.dates()}],options:{chart:{type:"area",stacked:!1,height:350,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{show:!1}},dataLabels:{enabled:!1},markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},yaxis:{labels:{formatter:function(t){return(t/1e6).toFixed(0)}}},xaxis:{type:"datetime"},tooltip:{shared:!1,y:{formatter:function(t){return(t/1e6).toFixed(0)}}}}},apexDynamic:{series:[{name:"Likes",data:[4,3,10,9,29,19,22,9,12,7,19,5,13,9,17,2,7,5]}],options:{chart:{type:"line",toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[i["a"].light.success],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{width:7,curve:"smooth"},markers:{size:4,colors:[i["a"].light.warning],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},yaxis:{min:-10,max:40},xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001","3/11/2001","4/11/2001","5/11/2001","6/11/2001"]},legend:{show:!1}}}}},methods:{dates:function(){for(var t=[],e=0;e<100;e++){var a=Math.floor(100*Math.random())+100;t.push([e,a])}return t}}},l=c,d=a("2877"),p=a("6544"),u=a.n(p),v=a("8336"),h=a("b0af"),m=a("99d9"),g=a("62ad"),b=a("a523"),f=a("132d"),y=a("8860"),C=a("da13"),x=a("5d23"),_=a("e449"),k=a("0fd9"),w=a("2fa4"),F=Object(d["a"])(l,s,r,!1,null,null,null);e["default"]=F.exports;u()(F,{VBtn:v["a"],VCard:h["a"],VCardText:m["c"],VCardTitle:m["d"],VCol:g["a"],VContainer:b["a"],VIcon:f["a"],VList:y["a"],VListItem:C["a"],VListItemTitle:x["c"],VMenu:_["a"],VRow:k["a"],VSpacer:w["a"]})},"615b":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return c}));var s=a("b0af"),r=a("80d2"),i=Object(r["i"])("v-card__actions"),o=Object(r["i"])("v-card__subtitle"),n=Object(r["i"])("v-card__text"),c=Object(r["i"])("v-card__title");s["a"]},a1bc:function(t,e,a){"use strict";a("99af");var s="https://sing-generator-node.herokuapp.com",r="",i="".concat(s).concat(r?":".concat(r):"","/api"),o="https://demo.flatlogic.com/vue-material";e["a"]={light:{primary:"#536dfe",primaryConst:"#536dfe",secondary:"#FF5C93",secondaryConst:"#FF5C93",error:"#FF4081",warning:"#FFC260",success:"#3CD4A0",successConst:"#3CD4A0",info:"#9013FE",greyBold:"#4a4a4a",greyBoldConst:"#4a4a4a",greyMedium:"#6e6e6e",greyTint:"#b9b9b9",default:"#e0e0e0",iconColor:"#FFFFFF59"},dark:{primary:"#536dfe",primaryConst:"#536dfe",secondary:"#FF5C93",secondaryConst:"#FF5C93",success:"#3CD4A0",successConst:"#3CD4A0",error:"#FF4081",greyMedium:"#bfbfbf",greyBold:"#d6d6d6",greyBoldConst:"#4a4a4a",greyTint:"#9b9b9b",default:"#e0e0e0"},hostApi:s,portApi:r,baseURLApi:i,redirectUrl:o,isBackend:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BACKEND,remote:"https://sing-generator-node.herokuapp.com",auth:{email:"admin@flatlogic.com",password:"password"}}},b0af:function(t,e,a){"use strict";var s=a("5530"),r=(a("a9e3"),a("615b"),a("10d2")),i=a("297c"),o=a("1c87"),n=a("58df");e["a"]=Object(n["a"])(i["a"],o["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=LineCharts.46ea16e0.js.map