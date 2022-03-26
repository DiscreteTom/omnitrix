(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{675:function(e,t,n){"use strict";n.r(t);var r=n(95),c=n(26),o=(n(544),n(5),n(546),n(552),n(554),n(555),n(556),n(559),n(560),n(561),n(562),n(563),n(564),n(565),n(566),n(568),n(569),n(570),n(571),n(572),n(573),n(574),n(575),n(576),n(577),n(578),n(54),n(44),n(64),n(29),n(80),n(666)),l=n(579),d={data:function(){return{secret:"Omnitrix",showSecret:!1,acceptAllDevices:!1,namePrefix:"BLE Raspi Manager",loading:!1,device:null,server:null,service:null,wifiChar:null,cmdChar:null,info:{ssid:"",psk:"",currentIp:"",ipIsStatic:!1,staticIp:"",router:"",staticRouter:""},oldInfo:{ssid:"",psk:"",currentIp:"",ipIsStatic:!1,staticIp:"",router:"",staticRouter:""},showPsk:!1,saving:!1,refreshing:!1,currentCmd:"",cmdResults:[]}},methods:{connect:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,filter;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,n=o.a("discretetom.github.io",o.a.DNS),r=o.a(e.secret,n),c=o.a("wifi",r),l=o.a("cmd",r),filter={},e.acceptAllDevices?filter.acceptAllDevices=!0:filter.namePrefix=e.namePrefix,t.prev=7,t.next=10,navigator.bluetooth.requestDevice({filters:[filter],optionalServices:[r]});case 10:return e.device=t.sent,e.device.addEventListener("gattserverdisconnected",(function(){e.disconnect("Raspi disconnected.")})),e.$bus.$emit("append-msg","Connecting..."),t.next=15,e.device.gatt.connect();case 15:return e.server=t.sent,e.$bus.$emit("append-msg","Getting service..."),t.next=19,e.server.getPrimaryService(r);case 19:return e.service=t.sent,e.$bus.$emit("append-msg","Getting characteristic..."),t.next=23,e.service.getCharacteristic(c);case 23:return e.wifiChar=t.sent,t.next=26,e.service.getCharacteristic(l);case 26:e.cmdChar=t.sent,e.refresh(),t.next=34;break;case 30:t.prev=30,t.t0=t.catch(7),console.log(t.t0),e.disconnect(t.t0);case 34:return t.prev=34,e.loading=!1,t.finish(34);case 37:case"end":return t.stop()}}),t,null,[[7,30,34,37]])})))()},save:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==(n=e.server)&&void 0!==n&&n.connected){t.next=3;break}return e.disconnect("BLE server disconnected."),t.abrupt("return");case 3:return e.saving=!0,t.prev=4,r={SSID:e.info.ssid,PSK:e.info.psk,Static:e.info.ipIsStatic,StaticIP:e.info.staticIp,Router:e.info.staticRouter},c=new TextEncoder,t.next=9,e.wifiChar.writeValue(c.encode(JSON.stringify(r)));case 9:e.$bus.$emit("append-msg","Saved."),(!e.info.ipIsStatic&&e.oldInfo.ipIsStatic||e.info.ipIsStatic&&(e.info.staticIp!=e.oldInfo.staticIp||e.info.staticRouter!=e.oldInfo.staticRouter))&&e.disconnect("Raspi will reboot. Disconnected."),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0),e.disconnect(t.t0);case 17:return t.prev=17,e.saving=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[4,13,17,20]])})))()},disconnect:function(e){this.$bus.$emit("append-msg",e);try{this.device.gatt.disconnect()}catch(e){}this.device=null,this.server=null},refresh:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.refreshing=!0,t.prev=1,e.$bus.$emit("append-msg","Getting information..."),t.next=5,e.wifiChar.readValue();case 5:n=t.sent,r=new TextDecoder("utf-8"),c=JSON.parse(r.decode(n.buffer)),e.info.ssid=c.SSID,e.info.psk=c.PSK,e.info.currentIp=c.CurrentIP,e.info.ipIsStatic=c.Static,e.info.staticIp=c.StaticIP,c.Static?e.info.staticRouter=c.Router:e.info.staticRouter="",e.info.router=c.Router,e.oldInfo=JSON.parse(JSON.stringify(e.info)),e.$bus.$emit("append-msg","Updated."),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(1),e.disconnect(t.t0);case 22:return t.prev=22,e.refreshing=!1,t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[1,19,22,25]])})))()},runCommand:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,o,d,f,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new TextEncoder,c={Cmd:e.currentCmd,UUID:l.a()},e.currentCmd="",t.next=5,e.cmdChar.writeValue(n.encode(JSON.stringify(c)));case 5:c.loading=!0,e.cmdResults.unshift(c),o=new Uint8Array,d=new TextDecoder("utf-8"),f=36;case 10:return t.next=13,new Promise((function(e){return setTimeout(e,1e3)}));case 13:return t.next=15,e.cmdChar.readValue();case 15:if(v=t.sent,d.decode(v.buffer.slice(0,f))!=c.UUID){t.next=23;break}if(v.buffer.byteLength!=f){t.next=20;break}return e.cmdResults.map((function(e){e.UUID==c.UUID&&(e.loading=!1,e.Output=d.decode(o))})),t.abrupt("break",27);case 20:o=new Uint8Array([].concat(Object(r.a)(o),Object(r.a)(new Uint8Array(v.buffer.slice(f))))),t.next=25;break;case 23:return e.cmdResults.map((function(e){e.UUID==c.UUID&&(e.loading=!1,e.Output="Error: Communication was interrupted.")})),t.abrupt("break",27);case 25:t.next=10;break;case 27:case"end":return t.stop()}}),t)})))()}}},f=n(62),v=n(66),m=n.n(v),h=n(208),x=n(447),C=n(444),k=n(669),w=n(670),I=n(671),S=n(672),_=n(190),R=n(170),P=n(541),D=n(509),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mb-3"},[n("v-card-title",[e._v(" Bluetooth LE Configurations ")]),e._v(" "),n("v-card-text",[n("v-text-field",{staticClass:"mb-3",attrs:{label:"Secret",type:e.showSecret?"text":"password",outlined:"",dense:"","hide-details":"","append-icon":e.showSecret?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showSecret=!e.showSecret}},model:{value:e.secret,callback:function(t){e.secret=t},expression:"secret"}}),e._v(" "),n("v-expansion-panels",{staticClass:"mb-3"},[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v("\n            Additional Settings\n          ")]),e._v(" "),n("v-expansion-panel-content",[n("v-switch",{staticClass:"mb-3",attrs:{label:"Accept All Devices",inset:"","hide-details":""},model:{value:e.acceptAllDevices,callback:function(t){e.acceptAllDevices=t},expression:"acceptAllDevices"}}),e._v(" "),n("v-text-field",{attrs:{disabled:e.acceptAllDevices,label:"Device Name Prefix",outlined:"",dense:"","hide-details":""},model:{value:e.namePrefix,callback:function(t){e.namePrefix=t},expression:"namePrefix"}})],1)],1)],1),e._v(" "),n("v-btn",{attrs:{block:"",loading:e.loading,disabled:null!=e.device},on:{click:e.connect}},[e._v("\n        Connect to Raspi\n      ")])],1)],1),e._v(" "),n("v-card",{staticClass:"mb-3",attrs:{disabled:null==e.wifiChar}},[n("v-card-title",[e._v(" Raspberry Pi Network ")]),e._v(" "),n("v-card-text",[n("v-text-field",{staticClass:"mb-3",attrs:{label:"Wifi Name",outlined:"",dense:"","hide-details":""},model:{value:e.info.ssid,callback:function(t){e.$set(e.info,"ssid",t)},expression:"info.ssid"}}),e._v(" "),n("v-text-field",{staticClass:"mb-3",attrs:{label:"Wifi Password",outlined:"",dense:"","hide-details":"",type:e.showPsk?"text":"password","append-icon":e.showPsk?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPsk=!e.showPsk}},model:{value:e.info.psk,callback:function(t){e.$set(e.info,"psk",t)},expression:"info.psk"}}),e._v(" "),n("v-text-field",{staticClass:"mb-3",attrs:{label:"Current IP",outlined:"",dense:"","hide-details":"",disabled:""},model:{value:e.info.currentIp,callback:function(t){e.$set(e.info,"currentIp",t)},expression:"info.currentIp"}}),e._v(" "),n("v-text-field",{staticClass:"mb-3",attrs:{label:"Current Router",outlined:"",dense:"","hide-details":"",disabled:""},model:{value:e.info.router,callback:function(t){e.$set(e.info,"router",t)},expression:"info.router"}}),e._v(" "),n("v-switch",{staticClass:"mb-3",attrs:{label:"Use Static IP",inset:"","hide-details":""},model:{value:e.info.ipIsStatic,callback:function(t){e.$set(e.info,"ipIsStatic",t)},expression:"info.ipIsStatic"}}),e._v(" "),n("v-text-field",{staticClass:"mb-3",attrs:{label:"Static IP with Prefix Length",outlined:"",dense:"",rules:[function(e){return e.includes("/")&&e.split("/")[1].length>0}],"hide-details":"",disabled:!e.info.ipIsStatic,placeholder:"192.168.0.123/24"},model:{value:e.info.staticIp,callback:function(t){e.$set(e.info,"staticIp",t)},expression:"info.staticIp"}}),e._v(" "),n("v-text-field",{staticClass:"mb-3",attrs:{label:"Static Router",outlined:"",dense:"","hide-details":"",disabled:!e.info.ipIsStatic,placeholder:"192.168.0.1"},model:{value:e.info.staticRouter,callback:function(t){e.$set(e.info,"staticRouter",t)},expression:"info.staticRouter"}}),e._v(" "),n("v-btn",{staticClass:"mb-3",attrs:{block:"",loading:e.saving},on:{click:e.save}},[e._v("\n        Save Configuration\n      ")]),e._v(" "),n("v-btn",{attrs:{block:"",loading:e.refreshing},on:{click:e.refresh}},[e._v(" Refresh ")])],1)],1),e._v(" "),n("v-card",{staticClass:"mb-3",attrs:{disabled:null==e.cmdChar}},[n("v-card-title",[e._v(" Run Commands ")]),e._v(" "),n("v-card-text",[n("div",{staticClass:"d-flex align-center mb-3"},[n("v-text-field",{staticClass:"mr-3",attrs:{label:"Shell Command",placeholder:"echo 123",outlined:"",dense:"","hide-details":""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.runCommand.apply(null,arguments)}},model:{value:e.currentCmd,callback:function(t){e.currentCmd=t},expression:"currentCmd"}}),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:e.runCommand}},[n("v-icon",[e._v("mdi-check")])],1)],1),e._v(" "),n("v-expansion-panels",e._l(e.cmdResults,(function(t,i){return n("v-expansion-panel",{key:t.UUID},[n("v-card",[n("v-card-title",{staticClass:"d-flex align-center"},[n("div",{staticClass:"flex-grow-1"},[e._v("\n                "+e._s(t.Cmd)+"\n              ")]),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.cmdResults.pop(i)}}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-subtitle",[e._v("UUID: "+e._s(t.UUID))]),e._v(" "),n("v-card-text",{staticStyle:{overflow:"auto"}},[n("pre",[e._v(e._s(t.Output))]),e._v(" "),t.loading?n("v-progress-circular",{attrs:{indeterminate:""}}):e._e()],1)],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:h.a,VCard:x.a,VCardSubtitle:C.a,VCardText:C.b,VCardTitle:C.c,VExpansionPanel:k.a,VExpansionPanelContent:w.a,VExpansionPanelHeader:I.a,VExpansionPanels:S.a,VIcon:_.a,VProgressCircular:R.a,VSwitch:P.a,VTextField:D.a})}}]);