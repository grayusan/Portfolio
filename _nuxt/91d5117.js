(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{228:function(t,e,r){var content=r(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("8afa4acc",content,!0,{sourceMap:!1})},233:function(t,e,r){"use strict";r(228)},234:function(t,e,r){(e=r(25)(!1)).push([t.i,"#bad_idea_title{margin-top:20px;margin-bottom:12px}.card{margin-bottom:20px}.card-text{text-decoration:none}#card-title-dec,.card-titile{display:inline-block;background:linear-gradient(transparent 90%,#00ffc3 0)}#club_top_title{margin-bottom:15px}",""]),t.exports=e},253:function(t,e,r){"use strict";r.r(e);r(32);var n=r(6),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.prev=1,e.next=4,r("articles",n.slug).where({tags:{$contains:"portfolio"}}).only(["title","description","createdAt","slug"]).sortBy("-createdAt","asc").fetch();case 4:return c=e.sent,e.abrupt("return",{articles:c});case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Problem handling something: ".concat(e.t0,"."));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=(r(233),r(22)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h2",{attrs:{id:"bad_idea_title"}},[t._v("Portfolio")]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"card"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title",staticStyle:{display:"inline"},attrs:{id:"card-title-dec"}},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticStyle:{display:"inline"}},[t._v(t._s(t.formatDate(article.createdAt))+" ")])])])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);