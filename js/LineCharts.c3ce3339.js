(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LineCharts","about"],{4155:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"mt-6",attrs:{fluid:""}},[e("div",{staticClass:"lineCharts-page"},[e("v-row",[e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card",{staticClass:"mx-1 mb-1"},[e("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(t.randomNumber()+10),"lazy-src":"https://picsum.photos/10/6?image="+(t.randomNumber()+10),"aspect-ratio":"2.0"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[e("v-card-title",{staticClass:"white--text mt-8"},[e("v-spacer"),e("v-avatar",{attrs:{color:"teal",size:"56"}},[e("span",{staticClass:"white--text text-h6"},[t._v("8/9")])])],1)],1),e("v-card-title",{staticClass:"pa-5 pb-3"},[e("p",[t._v("생산 종합 실적(지표)")]),e("v-spacer"),e("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,r=a.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[e("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[e("v-list",t._l(t.menu,(function(a,s){return e("v-list-item",{key:s,on:{click:function(){}}},[e("v-list-item-title",[t._v(t._s(a))])],1)})),1)],1)],1),e("v-card-text",{staticClass:"pa-5 pt-0"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"mt-16",attrs:{cols:"6"}},[e("div",{staticClass:"font-weight-medium text-h2 red--text mt-1",domProps:{textContent:t._s(t.bureqty)}}),e("h5",[t._v("금일 성형 생산 본수 종합 실적은 97% 입니다.")])]),e("v-col",{attrs:{cols:"6"}},[e("ApexChart",{attrs:{type:"radialBar",height:"250",options:t.apexpies.options,series:t.apexpies.series}})],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card",{staticClass:"mx-1 mb-1"},[e("v-card-title",{staticClass:"pa-5 pb-3"},[e("p",[t._v("Mixing Real-Time Chart")]),e("v-spacer"),e("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,r=a.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[e("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[e("v-list",t._l(t.menu,(function(a,s){return e("v-list-item",{key:s,on:{click:function(){}}},[e("v-list-item-title",[t._v(t._s(a))])],1)})),1)],1)],1),e("v-card-text",{staticClass:"pa-5 pt-0"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("ApexChart",{attrs:{type:"line",height:"250",options:t.apexLinesWithData.options,series:t.apexLinesWithData.series}})],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card",{staticClass:"mx-1 mb-1"},[e("v-card-title",{staticClass:"pa-5 pb-3"},[e("p",[t._v("Apex Line Chart with Data Labels")]),e("v-spacer"),e("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,r=a.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[e("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[e("v-list",t._l(t.menu,(function(a,s){return e("v-list-item",{key:s,on:{click:function(){}}},[e("v-list-item-title",[t._v(t._s(a))])],1)})),1)],1)],1),e("v-card-text",{staticClass:"pa-5 pt-0"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",[e("ApexChart",{attrs:{type:"line",height:"350",options:t.apexLines.options,series:t.apexLines.series}})],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card",{staticClass:"mx-1 mb-1"},[e("v-card-title",{staticClass:"pa-5 pb-3"},[e("p",[t._v("Apex Zoomable Timeseries Chart")]),e("v-spacer"),e("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,r=a.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[e("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[e("v-list",t._l(t.menu,(function(a,s){return e("v-list-item",{key:s,on:{click:function(){}}},[e("v-list-item-title",[t._v(t._s(a))])],1)})),1)],1)],1),e("v-card-text",{staticClass:"pa-5 pt-0 pb-0"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"my-auto",attrs:{cols:"12"}},[e("ApexChart",{attrs:{type:"area",height:"350",options:t.apexArea.options,series:t.apexArea.series}})],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card",{staticClass:"mx-1 mb-1"},[e("v-card-title",{staticClass:"pa-5 pb-3"},[e("p",[t._v("Gradient Chart")]),e("v-spacer"),e("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,r=a.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[e("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[e("v-list",t._l(t.menu,(function(a,s){return e("v-list-item",{key:s,on:{click:function(){}}},[e("v-list-item-title",[t._v(t._s(a))])],1)})),1)],1)],1),e("v-card-text",{staticClass:"pa-5 pt-0"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[e("ApexChart",{ref:"realtimeChart",attrs:{type:"line",height:"330",options:t.apexDynamic.options,series:t.apexDynamic.series}})],1)],1)],1)],1)],1)],1)],1)])},r=[],i=(e("b680"),e("a1bc")),o=e("1321"),n=e.n(o),c={name:"LineCharts",components:{ApexChart:n.a},data:function(){return{menu:["Edit","Copy","Delete","Print"],bureqty:"12,457",apexpies:{series:[97],options:{chart:{height:250,type:"radialBar",offsetY:-10},plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"16px",color:"primary",offsetY:-10},value:{offsetY:10,fontSize:"22px",color:"primary",formatter:function(t){return t+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["생산 달성률"]}},apexLines:{series:[{name:"Desktops",data:[13,8,8,9,10,8,9,12,18,7,19,17,20,16,0,0,0]}],options:{chart:{height:300,type:"line",toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},colors:[i["a"].light.primary],grid:{row:{colors:[i["a"].light.primary,"transparent"],opacity:.1}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}},apexLinesWithData:{series:[{name:"BB05",data:[10,14,15,14,5,10,14,14,9,10,14,10,4,13,1,0,0]},{name:"BB09",data:[13,15,15,15,0,13,16,16,13,6,15,15,2,14,6,0,0]},{name:"BB10",data:[13,15,15,15,0,13,16,16,13,6,15,15,2,14,6,0,0]},{name:"BB11",data:[13,14,15,16,0,14,15,16,16,5,16,10,6,16,4,0,0]},{name:"BB12",data:[13,17,17,15,0,9,11,15,14,6,17,14,3,16,5,0,0]}],options:{chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},yaxis:{min:0,max:30},colors:[i["a"].light.primary,i["a"].light.info,i["a"].light.secondaryConst,i["a"].light.warning,i["a"].light.successConst],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:4},grid:{borderColor:"#e7e7e7",row:{colors:[i["a"].light.primary,"transparent"],opacity:.1}},markers:{size:2,colors:[i["a"].light.warning],strokeColors:"#fff",strokeWidth:1,hover:{size:7}},xaxis:{categories:["06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30"]},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-0,offsetX:-5}}},apexArea:{series:[{name:"XYZ MOTORS",data:this.dates()}],options:{chart:{type:"area",stacked:!1,height:350,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{show:!1}},dataLabels:{enabled:!1},markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},yaxis:{labels:{formatter:function(t){return(t/1e6).toFixed(0)}}},xaxis:{type:"datetime"},tooltip:{shared:!1,y:{formatter:function(t){return(t/1e6).toFixed(0)}}}}},apexDynamic:{series:[{name:"Likes",data:[4,3,10,9,29,19,22,9,12,7,19,5,13,9,17,2,7,5]}],options:{chart:{type:"line",toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[i["a"].light.success],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{width:7,curve:"smooth"},markers:{size:4,colors:[i["a"].light.warning],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},yaxis:{min:-10,max:40},xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001","3/11/2001","4/11/2001","5/11/2001","6/11/2001"]},legend:{show:!1}}}}},methods:{dates:function(){for(var t=[],a=0;a<100;a++){var e=Math.floor(100*Math.random())+100;t.push([a,e])}return t},randomNumber:function(){var t=0;return t=Math.ceil(1e3*Math.random()),t}}},l=c,d=e("2877"),p=e("6544"),v=e.n(p),u=e("8212"),m=e("8336"),h=e("b0af"),g=e("99d9"),f=e("62ad"),b=e("a523"),y=e("132d"),C=e("adda"),x=e("a722"),_=e("8860"),k=e("da13"),w=e("5d23"),A=e("e449"),F=e("490a"),B=e("0fd9"),L=e("2fa4"),V=Object(d["a"])(l,s,r,!1,null,null,null);a["default"]=V.exports;v()(V,{VAvatar:u["a"],VBtn:m["a"],VCard:h["a"],VCardText:g["c"],VCardTitle:g["d"],VCol:f["a"],VContainer:b["a"],VIcon:y["a"],VImg:C["a"],VLayout:x["a"],VList:_["a"],VListItem:k["a"],VListItemTitle:w["c"],VMenu:A["a"],VProgressCircular:F["a"],VRow:B["a"],VSpacer:L["a"]})},"615b":function(t,a,e){},"99d9":function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"d",(function(){return c}));var s=e("b0af"),r=e("80d2"),i=Object(r["i"])("v-card__actions"),o=Object(r["i"])("v-card__subtitle"),n=Object(r["i"])("v-card__text"),c=Object(r["i"])("v-card__title");s["a"]},a1bc:function(t,a,e){"use strict";e("99af");var s="https://sing-generator-node.herokuapp.com",r="",i="".concat(s).concat(r?":".concat(r):"","/api"),o="https://demo.flatlogic.com/vue-material";a["a"]={light:{primary:"#536dfe",primaryConst:"#536dfe",secondary:"#FF5C93",secondaryConst:"#FF5C93",error:"#FF4081",warning:"#FFC260",success:"#3CD4A0",successConst:"#3CD4A0",info:"#9013FE",greyBold:"#4a4a4a",greyBoldConst:"#4a4a4a",greyMedium:"#6e6e6e",greyTint:"#b9b9b9",default:"#e0e0e0",iconColor:"#FFFFFF59"},dark:{primary:"#536dfe",primaryConst:"#536dfe",secondary:"#FF5C93",secondaryConst:"#FF5C93",success:"#3CD4A0",successConst:"#3CD4A0",error:"#FF4081",greyMedium:"#bfbfbf",greyBold:"#d6d6d6",greyBoldConst:"#4a4a4a",greyTint:"#9b9b9b",default:"#e0e0e0"},hostApi:s,portApi:r,baseURLApi:i,redirectUrl:o,isBackend:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BACKEND,remote:"https://sing-generator-node.herokuapp.com",auth:{email:"admin@flatlogic.com",password:"password"}}},a722:function(t,a,e){"use strict";e("20f6");var s=e("e8f2");a["a"]=Object(s["a"])("layout")},b0af:function(t,a,e){"use strict";var s=e("5530"),r=(e("a9e3"),e("615b"),e("10d2")),i=e("297c"),o=e("1c87"),n=e("58df");a["a"]=Object(n["a"])(i["a"],o["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var a=this.generateRouteLink(),e=a.tag,s=a.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=LineCharts.c3ce3339.js.map