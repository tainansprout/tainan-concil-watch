(window.webpackJsonp=window.webpackJsonp||[]).push([[31,19,22],{361:function(t,e,r){"use strict";r.d(e,"e",(function(){return f})),r.d(e,"b",(function(){return m})),r.d(e,"a",(function(){return h})),r.d(e,"d",(function(){return v})),r.d(e,"c",(function(){return y}));r(14),r(32),r(127),r(237),r(238),r(61),r(97),r(35),r(240),r(77);var n=r(362),c=r.n(n),o=r(96),d=r(363),l=d.a.reduce((function(t,e){return t[e.abbr||e.name]=e,t}),{});function f(t){var e=t.join(".");return e.endsWith("區")||(e+="區"),e}function m(t){if(t){if(t.name&&t.avatar)return t;var e=l[t];if(e||(e=d.a.find((function(p){return p.name===t}))),!e)throw new Error("Undefined party: ".concat(t));return e}}function h(t){return c()(t).format("YYYY.MM.DD")}function v(t){if(t){var e=t.offsetTop-o.e;setTimeout((function(){window.scrollTo({top:e,behavior:"smooth"})}))}}function y(t){var e=/st|nd|rd|th/,r=(t=t.toString()).match(e);t=t.replace(e,"");var n=o.g[t];if(!n)throw new Error("Undefined number: ".concat(t));return r?"第".concat(n):n}},363:function(t){t.exports=JSON.parse('{"a":[{"name":"中國國民黨","abbr":"國民黨","avatar":"/content-img/party-國.png"},{"name":"民主進步黨","abbr":"民進黨","avatar":"/content-img/party-民.png"},{"name":"台灣團結聯盟","avatar":"/content-img/party-台.png"},{"name":"無黨籍","avatar":"/content-img/party-無.png"},{"name":"台灣基進","avatar":"/content-img/party-基.png"},{"name":"時代力量","avatar":"/content-img/party-時.png"},{"name":"新黨","avatar":"/content-img/party-新.png"},{"name":"台灣民眾黨","avatar":"/content-img/party-眾.png"},{"name":"綠黨","avatar":"/content-img/party-綠.png"}]}')},364:function(t,e,r){var content=r(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("1b03501f",content,!0,{sourceMap:!1})},367:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l}));var n=r(27),c=(r(128),r(41),r(52),r(14),r(97),r(78),"台南市議會觀測站"),o=t.env.SITE_URL||"https://tcco.tnsprout.org";function d(t,content){var e,r=t.startsWith("og:")?"property":"name";return e={hid:t},Object(n.a)(e,r,t),Object(n.a)(e,"content",content),e}function l(t){var title=t.title,e=t.description,r=t.coverUrl;function n(t){return"string"==typeof t?t:"function"==typeof t?t.call(this):t.toString()}return function(){var t=n.bind(this),head={meta:[]},l="".concat(t(title=title||"")),f=l?"".concat(l," | ").concat(c):c;if(head.title=f,head.meta.push(d("og:title",f)),head.meta.push(d("twitter:title",f)),e){var m=t(e);head.meta.push(d("description",m)),head.meta.push(d("og:description",m)),head.meta.push(d("twitter:description",m))}if(r){var h=t(r);h&&(h.startsWith("/")?h="".concat(o).concat(h):h.startsWith("http")||(h="".concat(o,"/").concat(h)),head.meta.push(d("og:image",h)),head.meta.push(d("twitter:image",h)),head.meta.push(d("twitter:card","summary_large_image")))}if(this&&(title||e||r)){var v="".concat(o).concat(this.$route.path);head.meta.push(d("og:url",v))}return head}}}).call(this,r(129))},368:function(t,e,r){"use strict";r(364)},369:function(t,e,r){var n=r(33)(!1);n.push([t.i,".districtText[data-v-6f29000c]{color:#00000f;text-decoration:none;line-height:normal;font-weight:400}.districtText--multiEle[data-v-6f29000c]{font-weight:300}.districtText--multiEle .districtText__name[data-v-6f29000c],.districtText--multiEle .districtText__town[data-v-6f29000c]{text-decoration:underline}.districtText--active[data-v-6f29000c]{color:#49b0d5;font-weight:400;-webkit-text-decoration-color:#49b0d5;text-decoration-color:#49b0d5}.districtText__square[data-v-6f29000c]{background-color:#49b0d5;height:.625rem;width:.625rem}.districtText__town--active[data-v-6f29000c]{color:#49b0d5;-webkit-text-decoration-color:#49b0d5;text-decoration-color:#49b0d5;font-weight:400}",""]),t.exports=n},373:function(t,e,r){"use strict";r.r(e);var n=r(27);r(50),r(237),r(43),r(41),r(45),r(14),r(62),r(42),r(63);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{district:{type:Object,required:!0},isSingleElement:{type:Boolean,default:!1},activeArea:{default:null,validator:function(area){return!area||["district","town"].includes(area.type)&&area.id}},isQuotaVisible:{type:Boolean,default:!1}},data:function(){return{localActiveArea:this.activeArea}},computed:{isDistrictActive:function(){var t=this.activeArea;return t&&"district"===t.type&&t.id===this.district.districtId},townLabelList:function(){var t=this.district.townList;if(!t.length)return[];var e=t[t.length-1];return e.endsWith("區")||(t[t.length-1]="".concat(e,"區")),t}},watch:{activeArea:function(t){(t||this.localActiveArea)&&(t?this.localActiveArea&&t.type===this.localActiveArea.type&&t.id===this.localActiveArea.id||(this.localActiveArea=o({},t)):this.localActiveArea=null)}},methods:{isTownActive:function(t){var e=this.activeArea;return t=t.endsWith("區")?t:"".concat(t,"區"),e&&"town"===e.type&&e.id===t},activateArea:function(t,e){"town"===t&&(e=e.endsWith("區")?e:"".concat(e,"區")),this.localActiveArea={type:t,id:e},this.$emit("update:activeArea",this.localActiveArea)},deactivateArea:function(){this.localActiveArea=null,this.$emit("update:activeArea",null)}}},l=(r(368),r(26)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"districtText fw3 f6 ls2",class:{"districtText--multiEle":!t.isSingleElement,"districtText--active":t.isDistrictActive}},[t.isSingleElement?t._e():r("div",{staticClass:"districtText__square dn dib-ns mr1"}),r("div",{staticClass:"districtText__name db di-ns mr2",on:{mouseover:function(e){return t.activateArea("district",t.district.districtId)},mouseleave:t.deactivateArea}},[r("div",{staticClass:"di f5 f6-ns"},[t._v(t._s(t.district.districtTitle))]),t.isQuotaVisible?r("div",{staticClass:"f7 di ml4"},[t._v(t._s(t.district.districtQuota)+" 席")]):t._e()]),r("div",{staticClass:"districtText__townList db di-ns mt2 mt0-l"},[t.isSingleElement?r("span",[t._v(t._s(t.townLabelList.join(".")))]):t._l(t.townLabelList,(function(e){return r("span",{key:e,staticClass:"districtText__town mr1",class:{"districtText__town--active":t.isTownActive(e)},on:{mouseover:function(r){return t.activateArea("town",e)},mouseleave:t.deactivateArea}},[t._v(t._s(e))])}))],2)])}),[],!1,null,"6f29000c",null);e.default=component.exports},470:function(t,e,r){var content=r(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("1ac7615e",content,!0,{sourceMap:!1})},567:function(t,e,r){t.exports=r.p+"img/algolia.4b520e0.svg"},569:function(t,e,r){"use strict";r(470)},570:function(t,e,r){var n=r(33)(!1);n.push([t.i,".int[data-v-ab11c4cc]{padding:1rem 0}.int__districtList[data-v-ab11c4cc]{margin:1.75rem auto 2.25rem}.int__districtList.dropdown[data-v-ab11c4cc]  .background{z-index:1000}.int__districtList.dropdown[data-v-ab11c4cc]  .dropdown-trigger{width:100%}.int__districtList.dropdown[data-v-ab11c4cc]  .dropdown-menu{z-index:1000!important}.int__districtList.dropdown[data-v-ab11c4cc]  .dropdown-content{padding:0;border-radius:0;border:1px solid #d8d8d8}.int__districtList.dropdown[data-v-ab11c4cc]  .dropdown-item{padding:1rem}.int__districtList.dropdown[data-v-ab11c4cc]  .dropdown-item.is-active{background:none}.int__districtList.dropdown[data-v-ab11c4cc]  .dropdown-item+.dropdown-item{border-top:1px solid #d8d8d8}.int__districtList.dropdown[data-v-ab11c4cc]  .dropdown-item .districtText__name .f5{font-size:.875rem}.int__districtList.dropdown[data-v-ab11c4cc]  .dropdown-item .districtText__name+div{margin-top:.5rem}.int__districtTrigger[data-v-ab11c4cc]{padding:.75rem;background:none;border:1px solid #8dee72;text-align:left}.int__district[data-v-ab11c4cc]{border:none;background:none}.int__searchBox[data-v-ab11c4cc]{padding:0 .5rem}.int__query[data-v-ab11c4cc]{border:1px solid #d8d8d8;padding:.5rem 2rem}.int__algolia a[data-v-ab11c4cc]{-webkit-text-decoration-color:#979797;text-decoration-color:#979797;color:#979797}.int__algolia a[data-v-ab11c4cc]:hover{font-weight:400}.int__algolia img[data-v-ab11c4cc]{width:4rem}@media screen and (min-width:30em){.int[data-v-ab11c4cc]{padding:4rem 0}.int__searchBox[data-v-ab11c4cc]{max-width:52rem;padding:0 1rem}.int__districtList[data-v-ab11c4cc]{margin-top:3.5rem;padding:0 .5rem 3.5rem;display:grid;grid-template-columns:1fr 1fr;grid-row-gap:.5rem;row-gap:.5rem;justify-content:center;border-bottom:1px solid #d8d8d8}.int__districtList[data-v-ab11c4cc]  .districtText{letter-spacing:1px}}@media screen and (min-width:60em){.int__districtList[data-v-ab11c4cc]{width:calc(100% - 2rem);padding:0 0 3.5rem;margin-bottom:6rem;grid-template-columns:1fr 1fr 1fr}}",""]),t.exports=n},590:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"int__algolia mt2 tr"},[n("a",{staticClass:"f6 inline-flex items-center underline",attrs:{href:"https://www.algolia.com",target:"_blank"}},[t._v("搜尋服務使用"),n("img",{staticClass:"ml1",attrs:{src:r(567)}})])])}],c=(r(41),r(62),r(63),r(27)),o=r(12),d=(r(64),r(45),r(14),r(387),r(413),r(414),r(51),r(128),r(42),r(245),r(238),r(32),r(242),r(43),r(35),r(161),r(568)),l=r.n(d),f=r(376),defs=r(96),m=r(367);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,d,l,f,m,h,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=n.round||defs.b,e.next=4,r("council",c,"district-map").fetch();case 4:return o=e.sent,e.next=7,r("council",c,"councilor-map").fetch();case 7:return d=e.sent,e.next=10,r("council",c,"sayit").fetch();case 10:return l=e.sent,e.next=13,r("council",c,"sayit/stats").fetch();case 13:return f=e.sent,m={org:{}},h=l.flatMap((function(t){return t.sayit?t.sayit.filter((function(t){return!t.date.startsWith("Invalid")})).map((function(e){return v(v({},e),{},{councilorId:t.id,councilorRound:c})})):[]})).sort((function(a,b){return b.date.localeCompare(a.date)})).filter((function(t){var e=!1;return t.relatedOrgs.forEach((function(t){m.org[t]||(m.org[t]=0),m.org[t]<4&&(m.org[t]+=1,e=!0)})),e})),y=f.all,e.abrupt("return",{round:c,districtMap:o,councilorMap:d,defaultSayList:h,defaultSayitStats:y});case 18:case"end":return e.stop()}}),e)})))()},data:function(){var t=l()("UBG8A7D3KK","2e53b0b2355e9770e1d013ab7e6ba26f"),e=t.initIndex("tcco_prod");return{algoliaResult:[],hasNoMoreResult:!1,algoliaClient:t,algoliaIndex:e,orgFacets:null}},head:Object(m.b)({title:"搜質詢"}),computed:{query:{get:function(){return(this.$route.query.query||"").trim()},set:function(t){this.resetQuery(t)}},district:function(){var t=this.$route.query.district||"";return this.districtMap[t]||null},category:{get:function(){var t=this.$route.query,e=t.catType,r=t.catValue;return"null"===e?null:"org"===e&&this.defaultSayitStats.org.find((function(t){return t.name===r}))?{type:e,value:r}:v({},defs.a)},set:function(t){this.updateSearchQuery({category:t})}},districtList:function(){var t=Object.values(this.districtMap).filter((function(t){return t.districtId}));return t.push({districtId:"all",districtTitle:"所有選區",townList:[]}),t},isDefaultView:function(){return this.category&&"all"===this.category.value&&!this.district},sayList:function(){return this.isDefaultView?this.defaultSayList:this.algoliaResult},sayitStats:function(){var t=this;return this.isDefaultView||!this.orgFacets?this.defaultSayitStats:{org:Object.keys(this.orgFacets).map((function(e){return{name:e,count:t.orgFacets[e]}})).sort((function(a,b){return b.count-a.count}))}},activeDistrict:function(){return this.district?{type:"district",id:this.district.districtId}:{type:"district",id:"all"}}},watch:{category:function(t,e){t&&this.updateSayitStats(),this.resetSearch()},query:function(){this.normalizeSearchInNeeded()||this.resetSearch()},district:function(){this.normalizeSearchInNeeded()||this.resetSearch()}},mounted:function(){this.normalizeSearchInNeeded()},methods:{normalizeSearchInNeeded:function(){return!(!this.query&&!this.district||!this.category||"all"!==this.category.value)&&(this.updateSearchQuery({category:null}),!0)},updateSearchQuery:function(t){var e=t.query,r=t.category,n=t.district,c=v({},this.$route.query);void 0!==e&&(e?c.query=e:delete c.query),void 0!==r&&(r?(c.catType=r.type,c.catValue=r.value):c.catType="null"),void 0!==n&&(n?c.district=n.districtId:delete c.district),c.district||c.query?"all"===c.catValue&&(c.catType="null",delete c.catValue):"null"===c.catType&&delete c.catType,this.$router.push({name:this.$route.name,params:this.$route.params,query:c})},updateSayitStats:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={hitsPerPage:0,facets:["relatedOrgs"]},t.district&&(r.facetFilters=["councilor.districtId:".concat(t.district.districtId)]),e.next=4,t.algoliaIndex.search(t.query,r);case 4:n=e.sent,c=n.facets,t.orgFacets=c.relatedOrgs;case 7:case"end":return e.stop()}}),e)})))()},toggleDistrict:function(t){var e={};"all"===t.districtId||this.district&&this.district.districtId===t.districtId?e.district=null:e.district=t,this.updateSearchQuery(e)},resetQuery:Object(f.debounce)((function(t){this.updateSearchQuery({query:t})}),300),resetSearch:Object(f.debounce)((function(){this.algoliaResult=[],this.hasNoMoreResult=!1,this.$refs.main&&this.$refs.main.resetInfiniteLoading()}),50),searchInterpellation:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={hitsPerPage:30,page:Math.floor(t.algoliaResult.length/30),facets:["relatedOrgs"],facetFilters:[]},t.category&&"org"===t.category.type&&r.facetFilters.push("relatedOrgs:".concat(t.category.value)),t.district&&r.facetFilters.push("councilor.districtId:".concat(t.district.districtId)),e.next=5,t.algoliaIndex.search(t.query,r);case 5:return n=e.sent,c=n.hits,o=n.nbPages,d=n.facets,t.category&&"org"===t.category.type||(t.orgFacets=d.relatedOrgs),c.forEach((function(e){t.algoliaResult.push(v(v({},e),{},{councilorId:e.councilor.id,councilorRound:t.round}))})),t.hasNoMoreResult=r.page+1>=o,e.abrupt("return",c.length);case 13:case"end":return e.stop()}}),e)})))()},loadMore:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.hasNoMoreResult){r.next=3;break}return t.complete(),r.abrupt("return");case 3:return r.next=5,e.searchInterpellation();case 5:r.sent?t.loaded():t.complete();case 7:case"end":return r.stop()}}),r)})))()}}},_=(r(569),r(26)),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pageContainer"},[r("div",{staticClass:"int"},[r("div",{staticClass:"int__searchBox center"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],staticClass:"w-100 int__query br-pill",attrs:{placeholder:"搜尋質詢議題",type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0)]),r("div",{staticClass:"db dn-ns"},[r("b-dropdown",{staticClass:"int__districtList w-100",attrs:{"aria-role":"menu"}},[r("template",{slot:"trigger"},[r("button",{staticClass:"int__districtTrigger w-100 flex justify-between items-center"},["all"===t.activeDistrict.id?r("span",[t._v("查看全部選區")]):r("district-text",{attrs:{district:t.district}}),r("tcw-icon",{attrs:{icon:"chevron-down-gray"}})],1)]),t._l(t.districtList,(function(e){return r("b-dropdown-item",{key:e.districtId,attrs:{value:e,"aria-role":"menuitem"},on:{click:function(r){return t.toggleDistrict(e)}}},[r("district-text",{attrs:{district:e,"active-area":t.activeDistrict}})],1)}))],2)],1),r("div",{staticClass:"int__districtList dn db-ns"},t._l(t.districtList,(function(e){return r("button",{key:e.districtId,staticClass:"int__district tl pa0 pointer",on:{click:function(r){return t.toggleDistrict(e)}}},[r("district-text",{attrs:{district:e,"active-area":t.activeDistrict}})],1)})),0),r("interpellation-landing",{ref:"main",attrs:{"councilor-map":t.councilorMap,"say-list":t.sayList,stats:t.sayitStats,category:t.category,"is-static":!1},on:{"update:category":function(e){t.category=e},infinite:t.loadMore}})],1)])}),n,!1,null,"ab11c4cc",null);e.default=component.exports;installComponents(component,{DistrictText:r(373).default,TcwIcon:r(239).default,InterpellationLanding:r(476).default})}}]);