(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{496:function(t,e,r){"use strict";r(13),r(12),r(16),r(17);var n=r(2),c=(r(4),r(22),r(14),r(24),r(65),r(445),r(42),r(446),r(447),r(448),r(449),r(450),r(451),r(452),r(453),r(454),r(455),r(456),r(457),r(458),r(43),r(46),r(10),r(67),r(287),r(1)),o=r(87),l=r(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(m),offset:Object.keys(y),order:Object.keys(O)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var S=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=S.get(l);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var n=r[t],c=j(e,t,n);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),S.set(l,d)}(),t(r.tag,Object(o.a)(data,{class:d}),c)}})},497:function(t,e,r){"use strict";r(13),r(12),r(16),r(17);var n=r(2),c=(r(4),r(46),r(62),r(28),r(14),r(24),r(65),r(445),r(42),r(446),r(447),r(448),r(449),r(450),r(451),r(452),r(453),r(454),r(455),r(456),r(457),r(458),r(43),r(10),r(287),r(1)),o=r(87),l=r(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function y(t,e){return v.reduce((function(r,n){return r[t+Object(l.x)(n)]=e(),r}),{})}var O=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},h=y("align",(function(){return{type:String,default:null,validator:O}})),j=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},S=y("justify",(function(){return{type:String,default:null,validator:j}})),x=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},w=y("alignContent",(function(){return{type:String,default:null,validator:x}})),B={align:Object.keys(h),justify:Object.keys(S),alignContent:Object.keys(w)},k={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,r){var n=k[t];if(null!=r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return(n+="-".concat(r)).toLowerCase()}}var _=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},h),{},{justify:{type:String,default:null,validator:j}},S),{},{alignContent:{type:String,default:null,validator:x}},w),render:function(t,e){var r=e.props,data=e.data,c=e.children,l="";for(var f in r)l+=String(r[f]);var d=_.get(l);return d||function(){var t,e;for(e in d=[],B)B[e].forEach((function(t){var n=r[t],c=C(e,t,n);c&&d.push(c)}));d.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),_.set(l,d)}(),t(r.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},601:function(t,e,r){"use strict";r.r(e);r(63),r(4),r(73);var n=["Binary (Base 2)","Ternary (Base 3)","Quaternary (Base 4)","Octal (Base 8)","Decimal (Base 10)","Hexadecimal (Base 16)"],c={};n.map((function(t){return c[t]=""}));var o={data:function(){return{result:c,fromValue:"1234567890",fromFormat:"Decimal (Base 10)",formats:n,custom:[]}},methods:{calculate:function(){var input,base;switch(this.fromFormat){case"Binary (Base 2)":base=2;break;case"Ternary (Base 3)":base=3;break;case"Quaternary (Base 4)":base=4;break;case"Octal (Base 8)":base=8;break;case"Decimal (Base 10)":base=10;break;case"Hexadecimal (Base 16)":base=16}try{input=parseInt(this.fromValue,base)}catch(t){return this.result["Binary (Base 2)"]=t.toString(),this.result["Ternary (Base 3)"]=t.toString(),this.result["Quaternary (Base 4)"]=t.toString(),this.result["Octal (Base 8)"]=t.toString(),this.result["Decimal (Base 10)"]=t.toString(),this.result["Hexadecimal (Base 16)"]=t.toString(),void this.custom.map((function(e){return e.txt=t.toString()}))}this.result["Binary (Base 2)"]=input.toString(2),this.result["Ternary (Base 3)"]=input.toString(3),this.result["Quaternary (Base 4)"]=input.toString(4),this.result["Octal (Base 8)"]=input.toString(8),this.result["Decimal (Base 10)"]=input.toString(10),this.result["Hexadecimal (Base 16)"]=input.toString(12),this.custom.map((function(t){try{t.txt=input.toString(t.base)}catch(e){t.txt=e.toString()}}))}},mounted:function(){this.calculate()},watch:{fromFormat:function(){this.calculate()}}},l=r(72),f=r(95),d=r.n(f),v=r(204),m=r(443),y=r(438),O=r(496),h=r(188),j=r(497),S=r(509),x=r(486),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mx-2"},[r("div",{staticClass:"d-flex mb-3"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:t.$vuetify.breakpoint.smAndUp?4:12}},[r("v-select",{class:t.$vuetify.breakpoint.smAndUp?"mr-3":"mb-3",attrs:{label:"From",items:t.formats,outlined:"",dense:"","hide-details":""},model:{value:t.fromFormat,callback:function(e){t.fromFormat=e},expression:"fromFormat"}})],1),t._v(" "),r("v-col",{attrs:{cols:t.$vuetify.breakpoint.smAndUp?8:12}},[r("v-text-field",{attrs:{label:"Value",outlined:"",dense:"","hide-details":""},on:{input:t.calculate},model:{value:t.fromValue,callback:function(e){t.fromValue=e},expression:"fromValue"}})],1)],1)],1)]),t._v(" "),r("div",{staticClass:"d-flex flex-wrap"},[t._l(t.result,(function(e,n){return r("v-card",{key:n,staticClass:"mx-2 my-2 flex-grow-1",attrs:{hover:""},on:{click:function(r){t.$copyText(e).then((function(){return t.$bus.$emit("append-msg","Copied")}))}}},[r("v-card-title",[t._v(" "+t._s(n)+" ")]),t._v(" "),r("v-card-text",[t._v("\n        "+t._s(e)+"\n      ")])],1)})),t._v(" "),t._l(t.custom,(function(e,i){return r("v-card",{key:i,staticClass:"mx-2 my-2 flex-grow-1",attrs:{hover:""},on:{click:function(r){t.$copyText(e.txt).then((function(){return t.$bus.$emit("append-msg","Copied")}))}}},[r("v-card-title",[r("v-text-field",{staticClass:"mr-3",attrs:{label:"Base (2-36)",outlined:"",dense:"",type:"number","hide-details":""},on:{input:t.calculate,click:function(t){t.stopPropagation()}},model:{value:e.base,callback:function(r){t.$set(e,"base",r)},expression:"item.base"}}),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.custom.pop(i)}}},[r("v-icon",[t._v(" mdi-close ")])],1)],1),t._v(" "),r("v-card-text",[t._v("\n        "+t._s(e.txt)+"\n      ")])],1)})),t._v(" "),r("v-card",{staticClass:"mx-2 my-2 flex-grow-1 d-flex align-center justify-center",attrs:{hover:""},on:{click:function(e){t.custom.push({base:2}),t.calculate()}}},[r("v-icon",[t._v(" mdi-plus ")]),t._v(" "),r("v-card-subtitle",[t._v(" Custom Base ")])],1)],2)])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardSubtitle:y.a,VCardText:y.b,VCardTitle:y.c,VCol:O.a,VIcon:h.a,VRow:j.a,VSelect:S.a,VTextField:x.a})}}]);