(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{632:function(t,e,n){"use strict";n.r(e);n(46),n(63),n(29);var l=n(549),r=n.n(l),d={data:function(){return{left:"172.31.0.0/16",right:"172.31.0.1",result:""}},methods:{update:function(){this.left.includes("/")?this.right.includes("/")?this.bothCidr():this.oneCidrOneIp(this.right,this.left):this.right.includes("/")?this.oneCidrOneIp(this.left,this.right):this.bothIp()},bothCidr:function(){var t,e;try{t=new r.a(this.left),e=new r.a(this.right)}catch(t){return void(this.result="Invalid input.")}t.start({type:"bigInteger"})<=e.end({type:"bigInteger"})&&t.end({type:"bigInteger"})>=e.start({type:"bigInteger"})?this.result="CIDR overlapped.":this.result="CIDR NOT overlapped."},bothIp:function(){this.result="Please input at least one CIDR."},oneCidrOneIp:function(t,e){if(r.a.isValidAddress(t)){var n;try{n=new r.a(e)}catch(t){return void(this.result="Invalid input.")}n.contains(t)?this.result="CIDR ".concat(e," contains IP ").concat(t,"."):this.result="CIDR ".concat(e," does NOT contain IP ").concat(t,".")}else this.result="Invalid input."}},mounted:function(){this.update()}},o=n(62),c=n(66),h=n.n(c),v=n(446),f=n(444),I=n(505),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex my-3"},[n("v-text-field",{staticClass:"mr-3",attrs:{label:"IP/CIDR",outlined:"",dense:"","hide-details":""},on:{input:t.update},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}}),t._v(" "),n("v-text-field",{attrs:{label:"Another IP/CIDR",outlined:"",dense:"","hide-details":""},on:{input:t.update},model:{value:t.right,callback:function(e){t.right=e},expression:"right"}})],1),t._v(" "),n("v-card",[n("v-card-title",[t._v(" Result ")]),t._v(" "),n("v-card-text",[t._v("\n      "+t._s(t.result)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VCard:v.a,VCardText:f.b,VCardTitle:f.c,VTextField:I.a})}}]);