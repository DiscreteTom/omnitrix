(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{445:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return v}));var n=r(448),o=r(0),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");n.a},448:function(t,e,r){"use strict";r(14),r(13),r(12),r(5),r(16),r(10),r(17);var n=r(2),o=(r(22),r(203),r(204),r(449),r(205)),c=r(453),l=r(90),d=r(6);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},449:function(t,e,r){var content=r(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("e23b7040",content,!0,{sourceMap:!1})},450:function(t,e,r){var n=r(18)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},508:function(t,e,r){"use strict";r(13),r(12),r(16),r(17);var n=r(2),o=(r(5),r(22),r(14),r(24),r(67),r(456),r(42),r(457),r(458),r(459),r(460),r(461),r(462),r(463),r(464),r(465),r(466),r(467),r(468),r(469),r(43),r(46),r(10),r(68),r(292),r(1)),c=r(87),l=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=f.reduce((function(t,e){return t["offset"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),y=f.reduce((function(t,e){return t["order"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(y)};function _(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var O=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var v=O.get(l);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var n=r[t],o=_(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),O.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},509:function(t,e,r){"use strict";r(13),r(12),r(16),r(17);var n=r(2),o=(r(5),r(46),r(64),r(29),r(14),r(24),r(67),r(456),r(42),r(457),r(458),r(459),r(460),r(461),r(462),r(463),r(464),r(465),r(466),r(467),r(468),r(469),r(43),r(10),r(292),r(1)),c=r(87),l=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return f.reduce((function(r,n){return r[t+Object(l.E)(n)]=e(),r}),{})}var y=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},x=m("align",(function(){return{type:String,default:null,validator:y}})),_=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},O=m("justify",(function(){return{type:String,default:null,validator:_}})),j=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},w=m("alignContent",(function(){return{type:String,default:null,validator:j}})),k={align:Object.keys(x),justify:Object.keys(O),alignContent:Object.keys(w)},S={align:"align",justify:"justify",alignContent:"align-content"};function B(t,e,r){var n=S[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var C=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},x),{},{justify:{type:String,default:null,validator:_}},O),{},{alignContent:{type:String,default:null,validator:j}},w),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var v=C.get(l);return v||function(){var t,e;for(e in v=[],k)k[e].forEach((function(t){var n=r[t],o=B(e,t,n);o&&v.push(o)}));v.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),C.set(l,v)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},751:function(t,e,r){"use strict";r.r(e);r(62),r(5),r(73);var n=["Binary (Base 2)","Ternary (Base 3)","Quaternary (Base 4)","Octal (Base 8)","Decimal (Base 10)","Hexadecimal (Base 16)"],o={};n.map((function(t){return o[t]=""}));var c={data:function(){return{result:o,fromValue:"1234567890",fromFormat:"Decimal (Base 10)",formats:n,custom:[]}},methods:{calculate:function(){var input,base;switch(this.fromFormat){case"Binary (Base 2)":base=2;break;case"Ternary (Base 3)":base=3;break;case"Quaternary (Base 4)":base=4;break;case"Octal (Base 8)":base=8;break;case"Decimal (Base 10)":base=10;break;case"Hexadecimal (Base 16)":base=16}try{input=parseInt(this.fromValue,base)}catch(t){return this.result["Binary (Base 2)"]=t.toString(),this.result["Ternary (Base 3)"]=t.toString(),this.result["Quaternary (Base 4)"]=t.toString(),this.result["Octal (Base 8)"]=t.toString(),this.result["Decimal (Base 10)"]=t.toString(),this.result["Hexadecimal (Base 16)"]=t.toString(),void this.custom.map((function(e){return e.txt=t.toString()}))}this.result["Binary (Base 2)"]=input.toString(2),this.result["Ternary (Base 3)"]=input.toString(3),this.result["Quaternary (Base 4)"]=input.toString(4),this.result["Octal (Base 8)"]=input.toString(8),this.result["Decimal (Base 10)"]=input.toString(10),this.result["Hexadecimal (Base 16)"]=input.toString(16),this.custom.map((function(t){try{t.txt=input.toString(t.base)}catch(e){t.txt=e.toString()}}))}},mounted:function(){this.calculate()},watch:{fromFormat:function(){this.calculate()}}},l=r(61),d=r(66),v=r.n(d),f=r(210),h=r(448),m=r(445),y=r(508),x=r(190),_=r(509),O=r(497),j=r(521),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mx-2"},[r("div",{staticClass:"d-flex mb-3"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:t.$vuetify.breakpoint.smAndUp?4:12}},[r("v-select",{class:t.$vuetify.breakpoint.smAndUp?"mr-3":"mb-3",attrs:{label:"From",items:t.formats,outlined:"",dense:"","hide-details":""},model:{value:t.fromFormat,callback:function(e){t.fromFormat=e},expression:"fromFormat"}})],1),t._v(" "),r("v-col",{attrs:{cols:t.$vuetify.breakpoint.smAndUp?8:12}},[r("v-text-field",{attrs:{label:"Value",outlined:"",dense:"","hide-details":""},on:{input:t.calculate},model:{value:t.fromValue,callback:function(e){t.fromValue=e},expression:"fromValue"}})],1)],1)],1)]),t._v(" "),r("div",{staticClass:"d-flex flex-wrap"},[t._l(t.result,(function(e,n){return r("v-card",{key:n,staticClass:"mx-2 my-2 flex-grow-1",attrs:{hover:""},on:{click:function(r){t.$copyText(e).then((function(){return t.$bus.$emit("append-msg","Copied")}))}}},[r("v-card-title",[t._v(" "+t._s(n)+" ")]),t._v(" "),r("v-card-text",[t._v("\n        "+t._s(e)+"\n      ")])],1)})),t._v(" "),t._l(t.custom,(function(e,i){return r("v-card",{key:i,staticClass:"mx-2 my-2 flex-grow-1",attrs:{hover:""},on:{click:function(r){t.$copyText(e.txt).then((function(){return t.$bus.$emit("append-msg","Copied")}))}}},[r("v-card-title",[r("v-text-field",{staticClass:"mr-3",attrs:{label:"Base (2-36)",outlined:"",dense:"",type:"number","hide-details":""},on:{input:t.calculate,click:function(t){t.stopPropagation()}},model:{value:e.base,callback:function(r){t.$set(e,"base",r)},expression:"item.base"}}),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.custom.splice(i,1)}}},[r("v-icon",[t._v(" mdi-close ")])],1)],1),t._v(" "),r("v-card-text",[t._v("\n        "+t._s(e.txt)+"\n      ")])],1)})),t._v(" "),r("v-card",{staticClass:"mx-2 my-2 flex-grow-1 d-flex align-center justify-center",attrs:{hover:""},on:{click:function(e){t.custom.push({base:2}),t.calculate()}}},[r("v-icon",[t._v(" mdi-plus ")]),t._v(" "),r("v-card-subtitle",[t._v(" Custom Base ")])],1)],2)])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a,VCard:h.a,VCardSubtitle:m.a,VCardText:m.b,VCardTitle:m.c,VCol:y.a,VIcon:x.a,VRow:_.a,VSelect:O.a,VTextField:j.a})}}]);