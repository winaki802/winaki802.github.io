(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LineCharts","about"],{4155:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-6",attrs:{fluid:""}},[a("div",{staticClass:"lineCharts-page"},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"mx-1 mb-1"},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(t.randomNumber()+10),"lazy-src":"https://picsum.photos/10/6?image="+(t.randomNumber()+10),"aspect-ratio":"3.0"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[a("v-card-title",{staticClass:"white--text mt-8"},[a("v-spacer"),a("v-avatar",{attrs:{color:"indigo",size:"56"}},[a("span",{staticClass:"white--text text-h6"},[t._v("8/9")])])],1)],1),a("v-card-title",{staticClass:"pa-5 pb-3"},[a("p",[t._v("광주공장 생산종합 (8/9일)")]),a("v-spacer"),a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[a("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.menu,(function(e,s){return a("v-list-item",{key:s,on:{click:function(){}}},[a("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),a("v-card-text",{staticClass:"pa-2 pt-1"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"mt-6",attrs:{cols:"6"}},[a("div",{staticClass:"font-weight-medium text-h3 primary--text mt-1",domProps:{textContent:t._s(t.bureqty)}}),a("h5",[t._v("금일 성형 생산 종합 달성률은 97% 입니다.")])]),a("v-col",{attrs:{cols:"6"}},[a("ApexChart",{attrs:{type:"radialBar",height:"200",options:t.apexpies.options,series:t.buSeries}})],1)],1),a("v-divider"),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"mt-6",attrs:{cols:"6"}},[a("div",{staticClass:"font-weight-medium text-h3 purple--text mt-1",domProps:{textContent:t._s(t.bureqty)}}),a("h5",[t._v("금일 가류 생산 종합 달성률은 97% 입니다.")])]),a("v-col",{attrs:{cols:"6"}},[a("ApexChart",{attrs:{type:"radialBar",height:"200",options:t.apexpies.options,series:t.cuSeries}})],1)],1),a("v-divider"),a("v-row",[a("v-col",{staticClass:"mt-5 ",attrs:{cols:"6"}},[a("div",{staticClass:"font-weight-medium text-h5 warning--text mt-1",domProps:{textContent:t._s(t.bdqty)}}),a("h5",[t._v("금일 불량본수는 38 입니다.")])]),a("v-col",{staticClass:"mt-5 pl-10",attrs:{cols:"6"}},[a("div",{staticClass:"font-weight-medium text-h5 warning--text ml-9 ",domProps:{textContent:t._s(t.bdSeries)}}),a("h5",[t._v("금일 불량률은 0.41% 입니다.")])])],1),a("v-divider"),a("v-row",[a("v-col",{staticClass:"mt-5 ",attrs:{cols:"6"}},[a("div",{staticClass:"font-weight-medium text-h5 teal--text accent-5 mt-1",domProps:{textContent:t._s(t.oeRate1)}}),a("h5",[t._v("금일 순수 OE율은 96.71% 입니다.")])]),a("v-col",{staticClass:"mt-5 pl-10",attrs:{cols:"6"}},[a("div",{staticClass:"font-weight-medium text-h5 teal--text accent-4 ml-9 ",domProps:{textContent:t._s(t.oeRate2)}}),a("h5",[t._v("금일 최종 OE율은 96.71% 입니다.")])])],1),a("v-divider"),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"mt-5",attrs:{cols:"6"}},[a("ApexChart",{attrs:{width:"380",type:"donut",options:t.chartOptions,series:t.worst5series}})],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"mx-1 mb-1"},[a("v-card-title",{staticClass:"pa-5 pb-3"},[a("p",[t._v("Mixing Real-Time Chart")]),a("v-spacer"),a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[a("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.menu,(function(e,s){return a("v-list-item",{key:s,on:{click:function(){}}},[a("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),a("v-card-text",{staticClass:"pa-5 pt-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("ApexChart",{attrs:{type:"line",height:"250",options:t.apexLinesWithData.options,series:t.apexLinesWithData.series}})],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"mx-1 mb-1"},[a("v-card-title",{staticClass:"pa-5 pb-3"},[a("p",[t._v("Apex Line Chart with Data Labels")]),a("v-spacer"),a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[a("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.menu,(function(e,s){return a("v-list-item",{key:s,on:{click:function(){}}},[a("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),a("v-card-text",{staticClass:"pa-5 pt-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("ApexChart",{attrs:{type:"line",height:"350",options:t.apexLines.options,series:t.apexLines.series}})],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"mx-1 mb-1"},[a("v-card-title",{staticClass:"pa-5 pb-3"},[a("p",[t._v("Apex Zoomable Timeseries Chart")]),a("v-spacer"),a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[a("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.menu,(function(e,s){return a("v-list-item",{key:s,on:{click:function(){}}},[a("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),a("v-card-text",{staticClass:"pa-5 pt-0 pb-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"my-auto",attrs:{cols:"12"}},[a("ApexChart",{attrs:{type:"area",height:"350",options:t.apexArea.options,series:t.apexArea.series}})],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"mx-1 mb-1"},[a("v-card-title",{staticClass:"pa-5 pb-3"},[a("p",[t._v("Gradient Chart")]),a("v-spacer"),a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),s),[a("v-icon",{attrs:{color:"greyTint"}},[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.menu,(function(e,s){return a("v-list-item",{key:s,on:{click:function(){}}},[a("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)],1),a("v-card-text",{staticClass:"pa-5 pt-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[a("ApexChart",{ref:"realtimeChart",attrs:{type:"line",height:"330",options:t.apexDynamic.options,series:t.apexDynamic.series}})],1)],1)],1)],1)],1)],1)],1)])},r=[],i=(a("b680"),a("a1bc")),o=a("1321"),n=a.n(o),c={name:"LineCharts",components:{ApexChart:n.a},data:function(){return{menu:["Edit","Copy","Delete","Print"],bureqty:"12,457",cureqty:"11,031",bdqty:"38(24+14)",buSeries:[97],cuSeries:[96.4],bdSeries:"0.41 %",oeRate1:"96.71%",oeRate2:"97.75%",worst5series:[8,5,2,2,2],apexpies:{series:[97],options:{chart:{height:200,type:"radialBar",offsetY:-10},plotOptions:{radialBar:{startAngle:-90,endAngle:90,dataLabels:{name:{fontSize:"12px",color:"primary",offsetY:-20},value:{offsetY:-10,fontSize:"15px",color:"primary",formatter:function(t){return t+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:3},labels:["생산 달성률"]}},chartOptions:{chart:{width:380,type:"donut"},plotOptions:{pie:{startAngle:-90,endAngle:270}},labels:["CON","BALANCE","PLY JOINT OPEN(성형)","INNER(PA,BODY) 겹침","INNER JOINT OPEN"],dataLabels:{enabled:!0},fill:{type:"gradient"},legend:{formatter:function(t,e){return t+" - "+e.w.globals.series[e.seriesIndex]}},title:{text:"불량 Worst-5"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},apexdonut:{chartOptions:{labels:["CON","BALANCE","PLY JOINT OPEN(성형)","INNER(PA,BODY) 겹침","INNER JOINT OPEN"],plotOptions:{pie:{startAngle:-90,endAngle:270}},dataLabels:{enabled:!0},fill:{type:"gradient"},legend:{formatter:function(t){return t}},title:{text:"불량 Worst-5"},responsive:[{breakpoint:480,options:{chart:{width:500},legend:{position:"right"}}}]}},apexLines:{series:[{name:"Desktops",data:[13,8,8,9,10,8,9,12,18,7,19,17,20,16,0,0,0]}],options:{chart:{height:300,type:"line",toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},colors:[i["a"].light.primary],grid:{row:{colors:[i["a"].light.primary,"transparent"],opacity:.1}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}},apexLinesWithData:{series:[{name:"BB05",data:[10,14,15,14,5,10,14,14,9,10,14,10,4,13,1,0,0]},{name:"BB09",data:[13,15,15,15,0,13,16,16,13,6,15,15,2,14,6,0,0]},{name:"BB10",data:[13,15,15,15,0,13,16,16,13,6,15,15,2,14,6,0,0]},{name:"BB11",data:[13,14,15,16,0,14,15,16,16,5,16,10,6,16,4,0,0]},{name:"BB12",data:[13,17,17,15,0,9,11,15,14,6,17,14,3,16,5,0,0]}],options:{chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},yaxis:{min:0,max:30},colors:[i["a"].light.primary,i["a"].light.info,i["a"].light.secondaryConst,i["a"].light.warning,i["a"].light.successConst],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:4},grid:{borderColor:"#e7e7e7",row:{colors:[i["a"].light.primary,"transparent"],opacity:.1}},markers:{size:2,colors:[i["a"].light.warning],strokeColors:"#fff",strokeWidth:1,hover:{size:7}},xaxis:{categories:["06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30"]},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-0,offsetX:-5}}},apexArea:{series:[{name:"XYZ MOTORS",data:this.dates()}],options:{chart:{type:"area",stacked:!1,height:350,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{show:!1}},dataLabels:{enabled:!1},markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},yaxis:{labels:{formatter:function(t){return(t/1e6).toFixed(0)}}},xaxis:{type:"datetime"},tooltip:{shared:!1,y:{formatter:function(t){return(t/1e6).toFixed(0)}}}}},apexDynamic:{series:[{name:"Likes",data:[4,3,10,9,29,19,22,9,12,7,19,5,13,9,17,2,7,5]}],options:{chart:{type:"line",toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[i["a"].light.success],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{width:7,curve:"smooth"},markers:{size:4,colors:[i["a"].light.warning],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},yaxis:{min:-10,max:40},xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001","3/11/2001","4/11/2001","5/11/2001","6/11/2001"]},legend:{show:!1}}}}},methods:{dates:function(){for(var t=[],e=0;e<100;e++){var a=Math.floor(100*Math.random())+100;t.push([e,a])}return t},randomNumber:function(){var t=0;return t=Math.ceil(1e3*Math.random()),t}}},l=c,d=a("2877"),p=a("6544"),v=a.n(p),u=a("8212"),m=a("8336"),h=a("b0af"),g=a("99d9"),f=a("62ad"),b=a("a523"),y=a("ce7e"),C=a("132d"),x=a("adda"),_=a("a722"),w=a("8860"),k=a("da13"),A=a("5d23"),O=a("e449"),B=a("490a"),L=a("0fd9"),F=a("2fa4"),N=Object(d["a"])(l,s,r,!1,null,null,null);e["default"]=N.exports;v()(N,{VAvatar:u["a"],VBtn:m["a"],VCard:h["a"],VCardText:g["c"],VCardTitle:g["d"],VCol:f["a"],VContainer:b["a"],VDivider:y["a"],VIcon:C["a"],VImg:x["a"],VLayout:_["a"],VList:w["a"],VListItem:k["a"],VListItemTitle:A["c"],VMenu:O["a"],VProgressCircular:B["a"],VRow:L["a"],VSpacer:F["a"]})},"615b":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return c}));var s=a("b0af"),r=a("80d2"),i=Object(r["i"])("v-card__actions"),o=Object(r["i"])("v-card__subtitle"),n=Object(r["i"])("v-card__text"),c=Object(r["i"])("v-card__title");s["a"]},a1bc:function(t,e,a){"use strict";a("99af");var s="https://sing-generator-node.herokuapp.com",r="",i="".concat(s).concat(r?":".concat(r):"","/api"),o="https://demo.flatlogic.com/vue-material";e["a"]={light:{primary:"#536dfe",primaryConst:"#536dfe",secondary:"#FF5C93",secondaryConst:"#FF5C93",error:"#FF4081",warning:"#FFC260",success:"#3CD4A0",successConst:"#3CD4A0",info:"#9013FE",greyBold:"#4a4a4a",greyBoldConst:"#4a4a4a",greyMedium:"#6e6e6e",greyTint:"#b9b9b9",default:"#e0e0e0",iconColor:"#FFFFFF59"},dark:{primary:"#536dfe",primaryConst:"#536dfe",secondary:"#FF5C93",secondaryConst:"#FF5C93",success:"#3CD4A0",successConst:"#3CD4A0",error:"#FF4081",greyMedium:"#bfbfbf",greyBold:"#d6d6d6",greyBoldConst:"#4a4a4a",greyTint:"#9b9b9b",default:"#e0e0e0"},hostApi:s,portApi:r,baseURLApi:i,redirectUrl:o,isBackend:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BACKEND,remote:"https://sing-generator-node.herokuapp.com",auth:{email:"admin@flatlogic.com",password:"password"}}},a722:function(t,e,a){"use strict";a("20f6");var s=a("e8f2");e["a"]=Object(s["a"])("layout")},b0af:function(t,e,a){"use strict";var s=a("5530"),r=(a("a9e3"),a("615b"),a("10d2")),i=a("297c"),o=a("1c87"),n=a("58df");e["a"]=Object(n["a"])(i["a"],o["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=LineCharts.6e9c296e.js.map