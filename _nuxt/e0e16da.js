(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(t,e,o){"use strict";var r=o(259),n=o.n(r);o(367),o(368),o(369),o(370),o(371);e.a=function(t,e){e("prism",n.a)}},242:function(t,e,o){var content=o(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("48517564",content,!0,{sourceMap:!1})},261:function(t,e,o){"use strict";var r=o(204),n=o.n(r),c={data:function(){return{leftDrawer:!0,isMounted:!1,clipboard:null,pages:[{to:"/data-transformer",icon:"mdi-file-replace-outline",text:"Data Transformer"},{to:"/time-calculator",icon:"mdi-clock-outline",text:"Time Calculator"},{to:"/text-codec",icon:"mdi-code-tags",text:"Text Codec"},{to:"/number-convertor",icon:"mdi-hexadecimal",text:"Number Convertor"},{to:"/random",icon:"mdi-help-circle-outline",text:"Random Generator"}]}},computed:{url:function(){return this.isMounted?window.location.href:""}},mounted:function(){this.isMounted=!0,this.clipboard=new n.a("#share-btn")},destroyed:function(){delete this.clipboard}},l=o(91),v=o(125),d=o.n(v),f=o(382),m=o(389),_=o(383),h=o(262),x=o(390),w=o(384),V=o(184),y=o(185),k=o(121),C=o(186),D=o(119),N=o(385),L=o(388),T=o(386),A=o(258),E=o(387),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("v-navigation-drawer",{attrs:{clipped:"",fixed:"",app:""},model:{value:t.leftDrawer,callback:function(e){t.leftDrawer=e},expression:"leftDrawer"}},[o("v-list",t._l(t.pages,(function(e){return o("v-list-item",{key:e.text,attrs:{exact:"",to:e.to}},[o("v-list-item-action",[o("v-icon",[t._v(" "+t._s(e.icon)+" ")])],1),t._v(" "),o("v-list-item-content",[t._v(t._s(e.text))])],1)})),1)],1),t._v(" "),o("v-app-bar",{attrs:{"clipped-left":"",fixed:"",app:"",dense:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.leftDrawer=!t.leftDrawer}}}),t._v(" "),o("v-toolbar-title",{staticClass:"d-flex"},[o("div",{staticStyle:{color:"#55f50a",transform:"scale(0.8, 1.5)"}},[t._v(">")]),t._v(" "),o("span",{staticClass:"mx-2"},[t._v("Omnitrix")]),t._v(" "),o("div",{staticStyle:{color:"#55f50a",transform:"scale(0.8, 1.5)"}},[t._v("<")])]),t._v(" "),o("v-spacer"),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-btn",t._g({attrs:{icon:"",href:"https://github.com/DiscreteTom/Omnitrix"}},r),[o("v-icon",[t._v("mdi-github")])],1)]}}])},[t._v(" "),o("span",[t._v("View Source Code")])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-btn",t._g({attrs:{icon:"","data-clipboard-text":t.url,id:"share-btn"}},r),[o("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),o("span",[t._v("Copy Link")])])],1),t._v(" "),o("v-main",[o("v-container",[o("Nuxt")],1)],1),t._v(" "),o("v-footer",{attrs:{inset:"",absolute:"",app:""}},[o("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VApp:f.a,VAppBar:m.a,VAppBarNavIcon:_.a,VBtn:h.a,VContainer:x.a,VFooter:w.a,VIcon:V.a,VList:y.a,VListItem:k.a,VListItemAction:C.a,VListItemContent:D.a,VMain:N.a,VNavigationDrawer:L.a,VSpacer:T.a,VToolbarTitle:A.a,VTooltip:E.a})},271:function(t,e,o){o(272),t.exports=o(273)},301:function(t,e,o){"use strict";o(242)},302:function(t,e,o){var r=o(19)(!1);r.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=r},79:function(t,e,o){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(o(301),o(91)),c=o(125),l=o.n(c),v=o(382),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[271,12,4,13]]]);