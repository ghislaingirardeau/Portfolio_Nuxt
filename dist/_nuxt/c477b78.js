(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{205:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{index:0,direction:null}},props:{ImageArray:Array},methods:{nextSlide:function(){this.index===this.ImageArray.length-1&&(this.index=-1),this.direction="right",this.index++},previousSlide:function(){0===this.index&&(this.index=this.ImageArray.length),this.direction="left",this.index--},indexSlide:function(i){i>this.index?this.direction="right":i<this.index&&(this.direction="left"),this.index=i}}},l=n(35),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"carousel"},[e._t("default"),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:e.ImageArray.length>1,expression:"ImageArray.length > 1"}],staticClass:"btn__slide btn__slide--prev",on:{click:function(t){return t.preventDefault(),e.previousSlide.apply(null,arguments)}}},[e._v(" < ")]),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:e.ImageArray.length>1,expression:"ImageArray.length > 1"}],staticClass:"btn__slide btn__slide--next",on:{click:function(t){return t.preventDefault(),e.nextSlide.apply(null,arguments)}}},[e._v(" > ")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.ImageArray.length>1,expression:"ImageArray.length > 1"}],staticClass:"btn__index"},e._l(e.ImageArray,(function(i,t){return n("button",{key:i,class:{active:t===e.index},on:{click:function(n){return n.preventDefault(),e.indexSlide(t)}}})})),0)],2)}),[],!1,null,null,null);t.default=component.exports}}]);