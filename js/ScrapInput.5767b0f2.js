(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ScrapInput"],{"9d01":function(t,e,a){},"9d30":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("v-div",[a("v-chip",{staticClass:"ma-2 mp-2",attrs:{flat:"",close:"",color:"cyan",label:"","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-tag-outline ")]),t._v(" Out-Door Scrap In & Out ")],1)],1)],1),a("v-container",[a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"12",lg:"1",xl:"1"}},[a("v-menu",{ref:"fmenu",attrs:{"close-on-content-click":!1,"return-value":t.fdate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.fdate=e},"update:return-value":function(e){t.fdate=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Fdate","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.fdate,callback:function(e){t.fdate=e},expression:"fdate"}},"v-text-field",s,!1),i))]}}]),model:{value:t.fmenu,callback:function(e){t.fmenu=e},expression:"fmenu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.fdate,callback:function(e){t.fdate=e},expression:"fdate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.fmenu=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.fmenu.save(t.fdate)}}},[t._v(" OK ")])],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"12",lg:"1",xl:"1"}},[a("v-menu",{ref:"tmenu",attrs:{"close-on-content-click":!1,"return-value":t.tdate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.tdate=e},"update:return-value":function(e){t.tdate=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Tdate","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.tdate,callback:function(e){t.tdate=e},expression:"tdate"}},"v-text-field",s,!1),i))]}}]),model:{value:t.tmenu,callback:function(e){t.tmenu=e},expression:"tmenu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.tdate,callback:function(e){t.tdate=e},expression:"tdate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.tmenu=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.tmenu.save(t.tdate)}}},[t._v(" OK ")])],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"12",lg:"1",xl:"1"}},[a("v-text-field",{attrs:{label:"Ser."},model:{value:t.paraSer,callback:function(e){t.paraSer=e},expression:"paraSer"}})],1),a("v-col",{attrs:{cols:"12",sm:"1"}},[a("v-select",{attrs:{items:t.statusType,"item-text":"name",label:"Status","single-line":""},model:{value:t.paraStatus,callback:function(e){t.paraStatus=e},expression:"paraStatus"}})],1),a("v-col",{attrs:{cols:"12",sm:"1"}},[a("v-select",{attrs:{items:t.zoneitems,"item-text":"name",label:"ZONE","single-line":""},model:{value:t.paraZone,callback:function(e){t.paraZone=e},expression:"paraZone"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"1",lg:"1",xl:"1"}},[a("v-btn",t._g(t._b({staticClass:"pa-1 ma-1",attrs:{color:"primary",dark:"","align-content-start":"","flex-wrap":""},on:{click:function(e){return t.fetchScrapData()}}},"v-btn",t.attrs,!1),t.on),[t._v(" Search ")])],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"1",lg:"1",xl:"1"}},[a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"pa-1 ma-1",attrs:{color:"primary",dark:"","align-content-start":"","flex-wrap":""}},"v-btn",s,!1),i),[t._v(" New Item ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.odsitems,"item-text":"name",label:"POS#","single-line":""},model:{value:t.editedItem.odsl,callback:function(e){t.$set(t.editedItem,"odsl",e)},expression:"editedItem.odsl"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.zoneitems,"item-text":"name",label:"ZONE","single-line":""},on:{change:t.lf_changeScrapItems},model:{value:t.editedItem.zone,callback:function(e){t.$set(t.editedItem,"zone",e)},expression:"editedItem.zone"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.scrapitems,"item-text":"name",label:"SCRAP ITEM","single-line":""},model:{value:t.editedItem.scrapitem,callback:function(e){t.$set(t.editedItem,"scrapitem",e)},expression:"editedItem.scrapitem"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Weight(Kg)"},model:{value:t.editedItem.plastic1,callback:function(e){t.$set(t.editedItem,"plastic1",e)},expression:"editedItem.plastic1"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.saveToServer}},[t._v(" Save ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"1",lg:"1",xl:"1"}},[a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"pa-1 ma-1",attrs:{color:"primary",dark:"","align-content-start":"","flex-wrap":""}},"v-btn",s,!1),i),[t._v(" Item Out ")])]}}]),model:{value:t.dialogOut,callback:function(e){t.dialogOut=e},expression:"dialogOut"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.OutformTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.tsPos,"item-text":"name",label:"TSPOS#","single-line":""},model:{value:t.outSelectedItem.tsPos,callback:function(e){t.$set(t.outSelectedItem,"tsPos",e)},expression:"outSelectedItem.tsPos"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"TOTAL WT(kg)"},model:{value:t.outSelectedItem.tstotwt,callback:function(e){t.$set(t.outSelectedItem,"tstotwt",e)},expression:"outSelectedItem.tstotwt"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"EMPTY WT(kg)"},model:{value:t.outSelectedItem.tsemptywt,callback:function(e){t.$set(t.outSelectedItem,"tsemptywt",e)},expression:"outSelectedItem.tsemptywt"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"SCRAP WT(kg)"},model:{value:t.outSelectedItem.tsscrwt,callback:function(e){t.$set(t.outSelectedItem,"tsscrwt",e)},expression:"outSelectedItem.tsscrwt"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"TRUCK NO"},model:{value:t.outSelectedItem.truckno,callback:function(e){t.$set(t.outSelectedItem,"truckno",e)},expression:"outSelectedItem.truckno"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"SCRAP COMPANY"},model:{value:t.outSelectedItem.scrcmpy,callback:function(e){t.$set(t.outSelectedItem,"scrcmpy",e)},expression:"outSelectedItem.scrcmpy"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"DRIVER NAME"},model:{value:t.outSelectedItem.drvname,callback:function(e){t.$set(t.outSelectedItem,"drvname",e)},expression:"outSelectedItem.drvname"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.OutDialogClose}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.saveToQAC3070Server}},[t._v(" Save ")])],1)],1)],1)],1)],1)],1)]),a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.dsScrapDataList,"sort-by":"rowseq","sort-desc":!0,"show-select":"","single-select":t.singleSelect,"item-key":"rowseq"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-switch",{staticClass:"pa-3",attrs:{label:"Single select"},model:{value:t.singleSelect,callback:function(e){t.singleSelect=e},expression:"singleSelect"}})]},proxy:!0},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"item.plastic1",fn:function(e){var i=e.item;return[a("v-chip",{attrs:{color:t.getColor(i.plastic1),dark:""}},[t._v(" "+t._s(i.plastic1.toLocaleString())+" ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" Reset ")])]},proxy:!0},{key:"footer",fn:function(){return[a("div",[a("v-divider"),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"ml-1",attrs:{cols:"12",sm:"12",md:"1",lg:"1",xl:"1"}},[a("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white"}},[t._v(" TOTAL ")])],1),a("v-col",{staticClass:"ml-1",attrs:{cols:"12",sm:"12",md:"1",lg:"1",xl:"1"}},[a("v-badge",{staticClass:"ma-2 mt-4",attrs:{color:"green",content:t.dsScrapDataList.length,value:t.dsScrapDataList.length}},[t._v(" ( Rows ) ")])],1),a("v-col",{staticClass:"ml-1",attrs:{cols:"12",sm:"12",md:"1",lg:"1",xl:"1"}},[a("v-badge",{staticClass:"ma-2 mt-4",attrs:{color:"green",content:"wt"}},[t._v(" "+t._s(t.scrapwtsum.toLocaleString())+" (kg) ")])],1)],1)],1)]},proxy:!0}]),model:{value:t.selectedRows,callback:function(e){t.selectedRows=e},expression:"selectedRows"}})],1)],1)},s=[],n=a("5530"),l=(a("d3b7"),a("25f0"),a("159b"),a("a434"),a("bc3a")),o=a.n(l),c=a("2f62"),r=a("c1df"),d=a.n(r),m={data:function(){return{singleSelect:!1,selectedRows:[],dialog:!1,dialogDelete:!1,dialogOut:!1,headers2:[{text:"InDate",align:"start",value:"intime"},{text:"SER",value:"rowseq"},{text:"STATUS",value:"status"},{text:"LOCATION",value:"odsl"},{text:"SCARP ZONE",value:"zone"},{text:"SCRAP ITEM",value:"scrapitem"},{text:"WT(Kg)",align:"end",value:"plastic1"},{text:"Id",align:"start",value:"chgname"},{text:"OutDate",align:"start",value:"outdattime"},{text:"Actions",value:"actions",sortable:!1}],headers:[{text:"InDate",align:"start",value:"INTIME"},{text:"SER",value:"ROWSEQ"},{text:"STATUS",value:"STATUS"},{text:"LOCATION",value:"ODSL"},{text:"SCARP ZONE",value:"ZONE"},{text:"SCRAP ITEM",value:"SCRAPITEM"},{text:"WT(Kg)",align:"end",value:"PLASTIC1"},{text:"Id",align:"start",value:"CHGNAME"},{text:"OutDate",align:"start",value:"OUTDATTIME"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],dsScrapDataList:[],dsResult:[],selectData:"",scrapwtsum:0,tscrapwtsum:"",editedIndex:-1,editedItem:{intime:"",rowseq:0,odsl:"",zone:"",scrapitem:"",plastic1:0,chgname:""},outSelectedIndex:-1,outSelectedItem:{tsPos:"",tstotwt:0,tsemptywt:0,tsscrwt:0,truckno:"",scrcmpy:"",drvname:""},defaultItem:{intime:"",rowseq:0,odsl:"",zone:"",scrapitem:"",plastic1:0,chgname:""},odsitems:[{name:"ODSCR1",id:1},{name:"ODSCR2",id:2}],tsPos:[{name:"TS1",id:1},{name:"TS2",id:2}],zoneitems_org:[{name:"MIXING",id:1},{name:"APU(170)",id:2},{name:"F-CAL(120)",id:3},{name:"BODY-CUTTER(15A)",id:4},{name:"BELT-CUTTER(15B)",id:5},{name:"RUBBER-SLITTER(15M)",id:6},{name:"APEX(16A)",id:7},{name:"SWB(16B)",id:8},{name:"CAPPLY(16C)",id:9},{name:"FABRIC-INSERT(16F)",id:10}],zoneitems:[{name:"MIXING",id:1},{name:"APU",id:2},{name:"F-CAL",id:3},{name:"BODY-CUTTER",id:4},{name:"BELT-CUTTER",id:5},{name:"RUBBER-SLITTER",id:6},{name:"APEX",id:7},{name:"SWB",id:8},{name:"CAPPLY",id:9},{name:"FABRIC-INSERT",id:10}],scrapitems_org:[{name:"MIXING_MB(MB)",id:1},{name:"MIXING_FM(FM)",id:2},{name:"MIXING_RW(RW)",id:3},{name:"APU_FABRIC(H_FA)",id:4},{name:"APU_STEEL(H_ST)",id:5},{name:"APU_TREAD/SIDE(H_TR)",id:6},{name:"APU_INNER(H_SI)",id:7},{name:"APU_MIXRUB(H_MX)",id:8},{name:"REMILL_TREAD(M_TR)",id:9},{name:"REMILL_SIDE(M_SI)",id:10},{name:"REMILL_INNER(M_IN)",id:11},{name:"FCAL_TOPCORD(FB_TC)",id:12},{name:"FCAL_RAWCORD(RC_RC)",id:13},{name:"FCAL_RUBBER(RU_RU)",id:14},{name:"BELT_SCRAP(ST_BS)",id:15},{name:"BELT_RUBBER(ST_RU)",id:16},{name:"BODY_CUTTER(FB_FB)",id:17},{name:"BODY_RE-CUTTER(FB_RC)",id:18},{name:"RUBBER_SLITTER(SL_SL)",id:19},{name:"APEX_SCRAP(AP_AA)",id:20},{name:"APEX_REWORK(RR_RE)",id:21},{name:"BEAD_COAT(ST_CS)",id:22},{name:"BEAD_RUBBER(RU_RU)",id:23},{name:"BEAD_REWORK(RW_RW)",id:24},{name:"WIDE_CAPPLY(FB_WC)",id:25},{name:"MINI_CAPPLY(FB_MC)",id:26},{name:"FI_HIGHTABLE(FI_HT)",id:27},{name:"FI_FabricInsert(FI_FI)",id:28}],scrapitems:[{name:"MIXING_MB",id:1},{name:"MIXING_FM",id:2},{name:"MIXING_RW",id:3},{name:"APU_FABRIC",id:4},{name:"APU_STEEL",id:5},{name:"APU_TREAD/SIDE",id:6},{name:"APU_INNER",id:7},{name:"APU_MIXRUB",id:8},{name:"REMILL_TREAD",id:9},{name:"REMILL_SIDE",id:10},{name:"REMILL_INNER",id:11},{name:"FCAL_TOPCORD",id:12},{name:"FCAL_RAWCORD",id:13},{name:"FCAL_RUBBER",id:14},{name:"BELT_SCRAP",id:15},{name:"BELT_RUBBER",id:16},{name:"BODY_CUTTER",id:17},{name:"BODY_RE-CUTTER",id:18},{name:"RUBBER_SLITTER",id:19},{name:"APEX_SCRAP",id:20},{name:"APEX_REWORK",id:21},{name:"BEAD_COAT",id:22},{name:"BEAD_RUBBER",id:23},{name:"BEAD_REWORK",id:24},{name:"WIDE_CAPPLY",id:25},{name:"MINI_CAPPLY",id:26},{name:"FI_HIGHTABLE",id:27},{name:"FI_FabricInsert",id:28}],fdate:(new Date).toISOString().substring(0,10),tdate:(new Date).toISOString().substring(0,10),fmenu:!1,tmenu:!1,modal:!1,menu2:!1,paraSer:"",paraStatus:"",statusType:[{name:"IN",id:1},{name:"OUT",id:2}],paraZone:""}},computed:Object(n["a"])({formTitle:function(){return-1===this.editedIndex?"New Scrap Item":"Edit Item"},OutformTitle:function(){return this.selectedRows.length>0?"ITEM OUT":"ITEMS NOT SELECTED"}},Object(c["c"])(["isLogin","userInfo"])),watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){this.fetchScrapData()},fetchScrapData:function(){var t=this,e=localStorage.getItem("token");d()(this.fdate.toString()).format("YYYYMMDD"),d()(this.tdate.toString()).format("YYYYMMDD");"IN"===this.paraStatus?this.paraStatus="1":"OUT"===this.paraStatus&&(this.paraStatus="2");var a={headers:{token:e,"Access-Control-Allow-Origin":"*"},params:{fdate:"20210105",tdate:"20210120",formName:"QAC3040",method:"getList"}};o.a.get("/kgjProject/kvm/CommonActionVM.mdo",a).then((function(e){console.log(e.data),t.dsScrapDataList=e.data.RESULT,console.log(t.dsScrapDataList),t.scrapwtsum=0,t.dsScrapDataList.forEach((function(e){t.scrapwtsum+=Math.round(parseFloat(e.plastic1))}))})).catch((function(t){console.log(t)}))},lf_changeScrapItems:function(){switch(this.editedItem.zone){case"MIXING":this.scrapitems=new Array({name:"MIXING_MB(MB)",id:1},{name:"MIXING_FM(FM)",id:2},{name:"MIXING_RW(RW)",id:3});break;case"APU":this.scrapitems=new Array({name:"APU_FABRIC",id:4},{name:"APU_STEEL",id:5},{name:"APU_TREAD/SIDE",id:6},{name:"APU_INNER(H_SI)",id:7},{name:"APU_MIXRUB",id:8},{name:"REMILL_TREAD",id:9},{name:"REMILL_SIDE",id:10},{name:"REMILL_INNER",id:11});break;case"F-CAL":this.scrapitems=new Array({name:"FCAL_TOPCORD",id:12},{name:"FCAL_RAWCORD",id:13},{name:"FCAL_RUBBER",id:14});break;case"BODY-CUTTER":this.scrapitems=new Array({name:"BODY_CUTTER",id:17},{name:"BODY_RE-CUTTER",id:18});break;case"BELT-CUTTER":this.scrapitems=new Array({name:"BELT_SCRAP",id:15},{name:"BELT_RUBBER",id:16});break;case"RUBBER-SLITTER":this.scrapitems=new Array({name:"RUBBER_SLITTER",id:19});break;case"APEX":this.scrapitems=new Array({name:"APEX_SCRAP",id:20},{name:"APEX_REWORK",id:21});break;case"SWB":this.scrapitems=new Array({name:"BEAD_COAT",id:22},{name:"BEAD_RUBBER",id:23},{name:"BEAD_REWORK",id:24});break;case"CAPPLY":this.scrapitems=new Array({name:"WIDE_CAPPLY",id:25},{name:"MINI_CAPPLY",id:26});break;case"FABRIC-INSERT":this.scrapitems=new Array({name:"FI_HIGHTABLE",id:27},{name:"FI_FabricInsert",id:28});break}},editItem:function(t){this.editedIndex=this.dsScrapDataList.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.dsScrapDataList.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.dsScrapDataList.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},OutDialogClose:function(){var t=this;this.dialogOut=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?(console.log(this.editedItem.scrapitem),Object.assign(this.dsScrapDataList[this.editedIndex],this.editedItem)):(console.log(this.editedItem.plastic1),console.log(this.editedItem.zone),this.dsScrapDataList.push(this.editedItem)),this.close()},saveToServer:function(){var t=this;if(console.log("editIndex : "+this.editedIndex),this.editedIndex>-1)console.log(this.editItem);else{console.log("editIndex : "+this.editedIndex),this.editedItem.chgname=this.userInfo.userid,console.log("editedItem"),console.log(this.editedItem);var e={intime:"",rowseq:"",odsl:this.editedItem.odsl,zone:this.editedItem.zone,scrapitem:this.editedItem.scrapitem,plastic1:this.editedItem.plastic1,chgname:this.userInfo.userid};o.a.get("/ktgProject/insertQAC3065Data.mdo",{params:e}).then((function(e){console.log(e.data),t.fetchScrapData()})).catch((function(){console.log("error")})),this.close()}},saveToQAC3070Server:function(){var t=this;if(console.log(this.outSelectedItem),this.outSelectedItem.length<=0)console.log("NO SELECTED ITEM ");else{this.editedItem.chgname=this.userInfo.userid,console.log("editedItem"),console.log(this.editedItem);var e=(new Date).toString(),a=d()(e.toString()).format("YYYYMMDDHHmmss"),i={tsoutdat:"",outser:a,tsno:this.outSelectedItem.tsPos.substring(2,3),tstotwt:this.outSelectedItem.tstotwt,tsemptywt:this.outSelectedItem.tsemptywt,tsscrwt:this.outSelectedItem.tsscrwt,truckno:this.outSelectedItem.truckno,scrcmpy:this.outSelectedItem.scrcmpy,drvname:this.outSelectedItem.drvname,userid:this.userInfo.userid};o.a.get("/ktgProject/insertQAC3070Data.mdo",{params:i}).then((function(t){console.log(t.data)})).catch((function(){console.log("error")})),console.log("selectedRows"),console.log(this.selectedRows),this.selectedRows.forEach((function(t){t.outser=a})),console.log("selectedRows2"),console.log(this.selectedRows),o.a.post("/ktgProject/updateQAC3065Data.mdo",this.selectedRows).then((function(e){console.log(e.data),t.fetchScrapData(),t.selectedRows=[]})).catch((function(){console.log("error")})),this.OutDialogClose()}},getColor:function(t){var e="";return t>100&&(e="orange"),t>500&&(e="red"),t<100&&(e="green"),e}}},u=m,h=a("2877"),v=a("6544"),p=a.n(v),f=a("4ca6"),I=a("8336"),g=a("b0af"),S=a("99d9"),R=a("cc20"),_=a("62ad"),E=a("a523"),C=a("8fea"),A=a("2e4b"),b=a("169a"),T=a("ce7e"),x=a("132d"),k=a("e449"),D=a("0fd9"),w=a("b974"),B=a("2fa4"),O=(a("ec29"),a("9d01"),a("fe09")),L=a("c37a"),P=a("c3f0"),y=a("0789"),M=a("490a"),U=a("80d2"),F=O["a"].extend({name:"v-switch",directives:{Touch:P["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},L["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(y["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(M["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===U["y"].left&&this.isActive||t.keyCode===U["y"].right&&!this.isActive)&&this.onChange()}}}),N=a("8654"),V=Object(h["a"])(u,i,s,!1,null,null,null);e["default"]=V.exports;p()(V,{VBadge:f["a"],VBtn:I["a"],VCard:g["a"],VCardActions:S["a"],VCardText:S["c"],VCardTitle:S["d"],VChip:R["a"],VCol:_["a"],VContainer:E["a"],VDataTable:C["a"],VDatePicker:A["a"],VDialog:b["a"],VDivider:T["a"],VIcon:x["a"],VMenu:k["a"],VRow:D["a"],VSelect:w["a"],VSpacer:B["a"],VSwitch:F,VTextField:N["a"]})},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";a("d3b7"),a("25f0"),a("4de4");var i=a("c37a"),s=a("5607"),n=a("2b0e"),l=n["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),o=a("8547"),c=a("58df");function r(t){t.preventDefault()}e["a"]=Object(c["a"])(i["a"],l,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:r},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===i&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=ScrapInput.5767b0f2.js.map