(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["QAA1031W"],{"0bc6":function(t,e,i){},2161:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"mt-6",attrs:{fluid:""}},[i("div",{staticClass:"lineCharts-page"},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"450"}},[i("v-toolbar",{attrs:{color:"cyan",dark:""}},[i("v-app-bar-nav-icon"),i("v-toolbar-title",[t._v("Inbox")]),i("v-spacer"),i("v-btn",{attrs:{icon:""}},[i("v-icon",{on:{click:function(e){return t.fetchScrapData()}}},[t._v("mdi-magnify")])],1)],1)],1)],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-card",{staticClass:"mx-1 mb-1"},[i("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(3*t.randomNumber()+10),"lazy-src":"https://picsum.photos/10/6?image="+(3*t.randomNumber()+10),"aspect-ratio":"4.5"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[i("v-card-title",{staticClass:"white--text mt-8"},[i("v-badge",{staticClass:"text-h2 font-weight-bold",attrs:{color:"pink",dot:""}},[t._v(" 2021 ")]),i("v-spacer"),i("v-avatar",{attrs:{color:"teal",size:"56"}},[i("span",{staticClass:"white--text text-h6"},[t._v("All")])])],1)],1),i("v-card-title",[t._v("Defect Rate by Month ")]),i("v-list",{attrs:{flat:"",subheader:"","two-line":"",dense:""}},[i("v-subheader",{attrs:{inset:""}},[t._v("All")]),i("v-divider"),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[i("h3",[t._v(t._s(t._f("numFormat")(e.reqty,"000,000"))+" ")])]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[i("h3",[t._v("생산량(본수)")])])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.wrkday,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[i("h3",[t._v("조업일수(Day) ")])])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdavg,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[i("h3",[t._v("년평균(본수)")])])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdqty,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[i("h3",[t._v(" 불량수량(본수) ")])])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdrate,"000,000.00"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[i("h3",[t._v("불량율 ")])])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)}))],2)],1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-card",{staticClass:"mx-1 mb-1"},[i("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(3*t.randomNumber()+10),"lazy-src":"https://picsum.photos/10/6?image="+(3*t.randomNumber()+10),"aspect-ratio":"4.5"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[i("v-card-title",{staticClass:"white--text mt-8"},[i("v-badge",{staticClass:"text-h2 font-weight-bold",attrs:{color:"pink",dot:""}},[t._v(" 2021 ")]),i("v-spacer"),i("v-avatar",{attrs:{color:"teal",size:"56"}},[i("span",{staticClass:"white--text text-h6"},[t._v("All")])])],1)],1),i("v-card-title",[t._v("Defect Rate by Month ")]),i("v-list",{attrs:{flat:"",subheader:"","two-line":"",dense:""}},[i("v-subheader",{attrs:{inset:""}},[t._v("All")]),i("v-divider"),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.reqty,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[i("h3",[t._v("생산량(본수)")])])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.wrkday,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 조업일수(Day) ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdavg,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 년평균(본수) ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdqty,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 불량수량(본수) ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdrate,"000,000.00"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 불량율 ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)}))],2)],1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-card",{staticClass:"mx-1 mb-1"},[i("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(3*t.randomNumber()+10),"lazy-src":"https://picsum.photos/10/6?image="+(3*t.randomNumber()+10),"aspect-ratio":"4.5"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[i("v-card-title",{staticClass:"white--text mt-8"},[i("v-badge",{staticClass:"text-h2 font-weight-bold",attrs:{color:"pink",dot:""}},[t._v(" 2021 ")]),i("v-spacer"),i("v-avatar",{attrs:{color:"teal",size:"56"}},[i("span",{staticClass:"white--text text-h6"},[t._v("All")])])],1)],1),i("v-card-title",[t._v("Defect Rate by Month ")]),i("v-list",{attrs:{flat:"",subheader:"","two-line":"",dense:""}},[i("v-subheader",{attrs:{inset:""}},[t._v("All")]),i("v-divider"),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.reqty,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[i("h3",[t._v("생산량(본수)")])])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.wrkday,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 조업일수(Day) ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdavg,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 년평균(본수) ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdqty,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 불량수량(본수) ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdrate,"000,000.00"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 불량율 ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)}))],2)],1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-card",{staticClass:"mx-1 mb-1"},[i("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(3*t.randomNumber()+10),"lazy-src":"https://picsum.photos/10/6?image="+(3*t.randomNumber()+10),"aspect-ratio":"4.5"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},[i("v-card-title",{staticClass:"white--text mt-8"},[i("v-badge",{staticClass:"text-h2 font-weight-bold",attrs:{color:"pink",dot:""}},[t._v(" 2021 ")]),i("v-spacer"),i("v-avatar",{attrs:{color:"teal",size:"56"}},[i("span",{staticClass:"white--text text-h6"},[t._v("All")])])],1)],1),i("v-card-title",[t._v("Defect Rate by Month ")]),i("v-list",{attrs:{flat:"",subheader:"","two-line":"",dense:""}},[i("v-subheader",{attrs:{inset:""}},[t._v("All")]),i("v-divider"),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.reqty,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[i("h3",[t._v("생산량(본수)")])])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.wrkday,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 조업일수(Day) ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdavg,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 년평균(본수) ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdqty,"000,000"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 불량수량(본수) ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)})),i("v-divider",{attrs:{inset:""}}),t._l(t.dsItemTotal,(function(e){return i("v-list-item",{key:e.Title},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v(" mdi-folder ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(t._f("numFormat")(e.bdrate,"000,000.00"))+" ")]),i("v-list-item-subtitle",{staticStyle:{color:"teal"}},[t._v(" 불량율 ")])],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":t.active}})],1)],1)}))],2)],1)],1)],1)],1)])},s=[],o=(i("b680"),i("159b"),i("a434"),i("d3b7"),i("25f0"),i("a1bc")),r=(i("1321"),i("bc3a")),n=i.n(r),l=i("c1df"),c=i.n(l),d=(i("f820"),{name:"LineCharts",components:{},data:function(){return{menu:["Edit","Copy","Delete","Print"],dsItemTotal:[],dsQAA1031List:[],cardSubTitle:{wrkdays:"조업일수(日)",reqtys:"생산본수(본)",rewts:"생산중량(kg)",bdavgs:"평균(본)",bdqtys:"불량수량(본)",bdrates:"불량율(%)"},apexLines:{series:[{name:"Desktops",data:[13,8,8,9,10,8,9,12,18,7,19,17,20,16,0,0,0]}],options:{chart:{height:300,type:"line",toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},colors:[o["a"].light.primary],grid:{row:{colors:[o["a"].light.primary,"transparent"],opacity:.1}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}},apexLinesWithData:{series:[{name:"BB05",data:[10,14,15,14,5,10,14,14,9,10,14,10,4,13,1,0,0]},{name:"BB09",data:[13,15,15,15,0,13,16,16,13,6,15,15,2,14,6,0,0]},{name:"BB10",data:[13,15,15,15,0,13,16,16,13,6,15,15,2,14,6,0,0]},{name:"BB11",data:[13,14,15,16,0,14,15,16,16,5,16,10,6,16,4,0,0]},{name:"BB12",data:[13,17,17,15,0,9,11,15,14,6,17,14,3,16,5,0,0]}],options:{chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},yaxis:{min:0,max:30},colors:[o["a"].light.primary,o["a"].light.info,o["a"].light.secondaryConst,o["a"].light.warning,o["a"].light.successConst],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:4},grid:{borderColor:"#e7e7e7",row:{colors:[o["a"].light.primary,"transparent"],opacity:.1}},markers:{size:2,colors:[o["a"].light.warning],strokeColors:"#fff",strokeWidth:1,hover:{size:7}},xaxis:{categories:["06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30"]},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-0,offsetX:-5}}},apexArea:{series:[{name:"XYZ MOTORS",data:this.dates()}],options:{chart:{type:"area",stacked:!1,height:350,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{show:!1}},dataLabels:{enabled:!1},markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},yaxis:{labels:{formatter:function(t){return(t/1e6).toFixed(0)}}},xaxis:{type:"datetime"},tooltip:{shared:!1,y:{formatter:function(t){return(t/1e6).toFixed(0)}}}}},apexDynamic:{series:[{name:"Likes",data:[4,3,10,9,29,19,22,9,12,7,19,5,13,9,17,2,7,5]}],options:{chart:{type:"line",toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[o["a"].light.success],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{width:7,curve:"smooth"},markers:{size:4,colors:[o["a"].light.warning],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},yaxis:{min:-10,max:40},xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001","3/11/2001","4/11/2001","5/11/2001","6/11/2001"]},legend:{show:!1}}}}},methods:{dates:function(){for(var t=[],e=0;e<100;e++){var i=Math.floor(100*Math.random())+100;t.push([e,i])}return t},initialize:function(){this.fetchScrapData()},fetchScrapData:function(){var t=this,e=localStorage.getItem("token"),i={headers:{token:e,"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},params:{formName:"QAA1030",method:"getQAA1031W"}},a={YEAR:"2021",FAC:"2"};n.a.post("/kgjProject/kvm/CommonActionVM.mdo",a,i).then((function(e){var i={wyymm:"",month:"",wrkday:0,sub_wrkday:"",reqty:0,rewt:0,bdqty:0,bdavg:0,bdrate:0,bdcode:"",bddsc:""};console.log(e.data),t.dsQAA1031List=e.data.RESULT,console.log(t.dsQAA1031List);t.dsQAA1031List.forEach((function(t){i.wyymm=t.WYYYY,i.month="All",i.wrkday=t.Y_WRKDAY,i.reqty=t.Y_REQTY,i.rewt=t.Y_WT,i.bdqty+=Math.round(parseFloat(t.Y_BDCNT))})),i.bdavg=parseFloat(i.bdqty/i.wrkday).toFixed(2),i.bdrate=parseFloat(i.bdqty/i.reqty*100).toFixed(2),t.dsItemTotal.splice(0,t.dsItemTotal.length),t.dsItemTotal.push(i),console.log(i),console.log(t.dsItemTotal)})).catch((function(t){console.log(t)}))},lf_changeScrapItems:function(){switch(this.editedItem.zone){case"MIXING":this.scrapitems=new Array({name:"MIXING_MB(MB)",id:1},{name:"MIXING_FM(FM)",id:2},{name:"MIXING_RW(RW)",id:3});break;case"APU":this.scrapitems=new Array({name:"APU_FABRIC",id:4},{name:"APU_STEEL",id:5},{name:"APU_TREAD/SIDE",id:6},{name:"APU_INNER(H_SI)",id:7},{name:"APU_MIXRUB",id:8},{name:"REMILL_TREAD",id:9},{name:"REMILL_SIDE",id:10},{name:"REMILL_INNER",id:11});break;case"F-CAL":this.scrapitems=new Array({name:"FCAL_TOPCORD",id:12},{name:"FCAL_RAWCORD",id:13},{name:"FCAL_RUBBER",id:14});break;case"BODY-CUTTER":this.scrapitems=new Array({name:"BODY_CUTTER",id:17},{name:"BODY_RE-CUTTER",id:18});break;case"BELT-CUTTER":this.scrapitems=new Array({name:"BELT_SCRAP",id:15},{name:"BELT_RUBBER",id:16});break;case"RUBBER-SLITTER":this.scrapitems=new Array({name:"RUBBER_SLITTER",id:19});break;case"APEX":this.scrapitems=new Array({name:"APEX_SCRAP",id:20},{name:"APEX_REWORK",id:21});break;case"SWB":this.scrapitems=new Array({name:"BEAD_COAT",id:22},{name:"BEAD_RUBBER",id:23},{name:"BEAD_REWORK",id:24});break;case"CAPPLY":this.scrapitems=new Array({name:"WIDE_CAPPLY",id:25},{name:"MINI_CAPPLY",id:26});break;case"FABRIC-INSERT":this.scrapitems=new Array({name:"FI_HIGHTABLE",id:27},{name:"FI_FabricInsert",id:28});break}},editItem:function(t){this.editedIndex=this.dsQAA1031List.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.dsQAA1031List.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.dsQAA1031List.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},OutDialogClose:function(){var t=this;this.dialogOut=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?(console.log(this.editedItem.scrapitem),Object.assign(this.dsQAA1031List[this.editedIndex],this.editedItem)):(console.log(this.editedItem.plastic1),console.log(this.editedItem.zone),this.dsQAA1031List.push(this.editedItem)),this.close()},saveToServer:function(){var t=this;if(console.log("editIndex : "+this.editedIndex),this.editedIndex>-1)console.log(this.editItem);else{console.log("editIndex : "+this.editedIndex),this.editedItem.chgname=this.userInfo.userid,console.log("editedItem"),console.log(this.editedItem);var e={intime:"",rowseq:"",odsl:this.editedItem.odsl,zone:this.editedItem.zone,scrapitem:this.editedItem.scrapitem,plastic1:this.editedItem.plastic1,chgname:this.userInfo.userid};n.a.get("/ktgProject/insertQAC3065Data.mdo",{params:e}).then((function(e){console.log(e.data),t.fetchScrapData()})).catch((function(){console.log("error")})),this.close()}},saveToQAC3070Server:function(){var t=this;if(console.log(this.outSelectedItem),this.outSelectedItem.length<=0)console.log("NO SELECTED ITEM ");else{this.editedItem.chgname=this.userInfo.userid,console.log("editedItem"),console.log(this.editedItem);var e=(new Date).toString(),i=c()(e.toString()).format("YYYYMMDDHHmmss"),a={tsoutdat:"",outser:i,tsno:this.outSelectedItem.tsPos.substring(2,3),tstotwt:this.outSelectedItem.tstotwt,tsemptywt:this.outSelectedItem.tsemptywt,tsscrwt:this.outSelectedItem.tsscrwt,truckno:this.outSelectedItem.truckno,scrcmpy:this.outSelectedItem.scrcmpy,drvname:this.outSelectedItem.drvname,userid:this.userInfo.userid};n.a.get("/ktgProject/insertQAC3070Data.mdo",{params:a}).then((function(t){console.log(t.data)})).catch((function(){console.log("error")})),console.log("selectedRows"),console.log(this.selectedRows),this.selectedRows.forEach((function(t){t.outser=i})),console.log("selectedRows2"),console.log(this.selectedRows),n.a.post("/ktgProject/updateQAC3065Data.mdo",this.selectedRows).then((function(e){console.log(e.data),t.fetchScrapData(),t.selectedRows=[]})).catch((function(){console.log("error")})),this.OutDialogClose()}},getColor:function(t){var e="";return t>100&&(e="orange"),t>500&&(e="red"),t<100&&(e="green"),e},randomNumber:function(){var t=0;return t=Math.ceil(180*Math.random()),t}}}),m=d,v=i("2877"),u=i("6544"),h=i.n(u),f=i("5bc1"),p=i("8212"),g=i("4ca6"),b=i("8336"),y=i("b0af"),_=i("99d9"),k=i("5530"),I=(i("6ca7"),i("ec29"),i("9d26")),C=i("c37a"),A=i("fe09"),x=A["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(k["a"])(Object(k["a"])({},C["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(I["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(k["a"])(Object(k["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),T=i("62ad"),w=i("a523"),S=i("ce7e"),B=i("132d"),F=i("adda"),R=i("a722"),E=i("8860"),D=i("da13"),O=i("1800"),L=i("8270"),V=i("5d23"),j=i("490a"),M=i("0fd9"),P=i("2fa4"),$=i("e0c7"),Y=i("71d9"),N=i("2a7f"),z=Object(v["a"])(m,a,s,!1,null,null,null);e["default"]=z.exports;h()(z,{VAppBarNavIcon:f["a"],VAvatar:p["a"],VBadge:g["a"],VBtn:b["a"],VCard:y["a"],VCardTitle:_["d"],VCheckbox:x,VCol:T["a"],VContainer:w["a"],VDivider:S["a"],VIcon:B["a"],VImg:F["a"],VLayout:R["a"],VList:E["a"],VListItem:D["a"],VListItemAction:O["a"],VListItemAvatar:L["a"],VListItemContent:V["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VProgressCircular:j["a"],VRow:M["a"],VSpacer:P["a"],VSubheader:$["a"],VToolbar:Y["a"],VToolbarTitle:N["a"]})},"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var a=i("71d9"),s=i("80d2"),o=Object(s["i"])("v-toolbar__title"),r=Object(s["i"])("v-toolbar__items");a["a"]},"4ca6":function(t,e,i){"use strict";var a=i("15fd"),s=i("5530"),o=(i("a9e3"),i("ff44"),i("132d")),r=i("a9ad"),n=i("7560"),l=i("f2e7"),c=i("f40d"),d=i("fe6c"),m=i("58df"),v=i("80d2");e["a"]=Object(m["a"])(r["a"],Object(d["b"])(["left","bottom"]),n["a"],l["a"],c["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Object(s["a"])({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(v["g"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),i=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),a=this.$createElement("span",i,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[a]):a},genBadgeContent:function(){if(!this.dot){var t=Object(v["s"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(o["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],i=[Object(v["s"])(this)],s=this.$attrs,o=(s["aria-atomic"],s["aria-label"],s["aria-live"],s.role,s.title,Object(a["a"])(s,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?i.unshift(e):i.push(e),t("span",{staticClass:"v-badge",attrs:o,class:this.classes},i)}})},"6ca7":function(t,e,i){},8547:function(t,e,i){"use strict";var a=i("2b0e"),s=i("80d2");e["a"]=a["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["j"]}}})},a1bc:function(t,e,i){"use strict";i("99af");var a="https://sing-generator-node.herokuapp.com",s="",o="".concat(a).concat(s?":".concat(s):"","/api"),r="https://demo.flatlogic.com/vue-material";e["a"]={light:{primary:"#536dfe",primaryConst:"#536dfe",secondary:"#FF5C93",secondaryConst:"#FF5C93",error:"#FF4081",warning:"#FFC260",success:"#3CD4A0",successConst:"#3CD4A0",info:"#9013FE",greyBold:"#4a4a4a",greyBoldConst:"#4a4a4a",greyMedium:"#6e6e6e",greyTint:"#b9b9b9",default:"#e0e0e0",iconColor:"#FFFFFF59"},dark:{primary:"#536dfe",primaryConst:"#536dfe",secondary:"#FF5C93",secondaryConst:"#FF5C93",success:"#3CD4A0",successConst:"#3CD4A0",error:"#FF4081",greyMedium:"#bfbfbf",greyBold:"#d6d6d6",greyBoldConst:"#4a4a4a",greyTint:"#9b9b9b",default:"#e0e0e0"},hostApi:a,portApi:s,baseURLApi:o,redirectUrl:r,isBackend:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BACKEND,remote:"https://sing-generator-node.herokuapp.com",auth:{email:"admin@flatlogic.com",password:"password"}}},a722:function(t,e,i){"use strict";i("20f6");var a=i("e8f2");e["a"]=Object(a["a"])("layout")},e0c7:function(t,e,i){"use strict";var a=i("5530"),s=(i("0bc6"),i("7560")),o=i("58df");e["a"]=Object(o["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(a["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},ec29:function(t,e,i){},f40d:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},fe09:function(t,e,i){"use strict";i("d3b7"),i("25f0"),i("4de4");var a=i("c37a"),s=i("5607"),o=i("2b0e"),r=o["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),n=i("8547"),l=i("58df");function c(t){t.preventDefault()}e["a"]=Object(l["a"])(a["a"],r,n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},ff44:function(t,e,i){}}]);
//# sourceMappingURL=QAA1031W.b80b567e.js.map