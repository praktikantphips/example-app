webpackJsonp([4],{139:function(t,a,i){function e(t){i(259)}var s=i(121)(i(216),i(265),e,"data-v-5e0f8483",null);t.exports=s.exports},216:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{items:[{title:"Dr. Acula Game",description:"Become a vampire doc",avatar:"./statics/dracula-light.jpg",path:"/dracula"},{title:"Conways Game Of life",description:"Create life, and evolve",avatar:"./statics/bacteria128.png",path:"/game-of-life"},{title:"Zen Paintings",description:"Zen paintings from the Rijksmuseum",avatar:"./statics/monalisa128.jpg",path:"/zen-paintings"}]}},computed:{getPath:function(t){return this.items[t].path}}}},254:function(t,a,i){a=t.exports=i(133)(void 0),a.push([t.i,".centerme[data-v-5e0f8483]{max-width:300px;margin:auto}",""])},259:function(t,a,i){var e=i(254);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(134)("688ecb84",e,!0)},265:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"layout-padding",staticStyle:{"max-width":"900px"}},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-title bg-primary text-white"},[t._v("\n          Welcome to this useless App\n      ")]),t._v(" "),i("div",{staticClass:"card-content"},[i("div",{staticClass:"layout-padding"},[i("p",{staticClass:"caption"},[t._v("\n                There isn't much to do around here:\n              ")]),t._v(" "),t._l(t.items,function(a,e){return i("div",{key:"i",staticClass:"list no-border centerme"},[i("router-link",{staticClass:"item item-link two-lines",attrs:{tab:"div",to:a.path}},[i("img",{staticClass:"item-primary",attrs:{src:a.avatar}}),t._v(" "),i("div",{staticClass:"item-content"},[i("div",[t._v(t._s(a.title))]),t._v(" "),i("div",[t._v(t._s(a.description))])])])],1)})],2)])])])])},staticRenderFns:[]}}});