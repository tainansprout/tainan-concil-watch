(window.webpackJsonp=window.webpackJsonp||[]).push([[6,18,21],{358:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"b",(function(){return f}));r(76),r(14),r(97),r(33),r(237),r(77);var n=r(359),c=r.n(n),o=r(96);function l(t){return c()(t).format("YYYY.MM.DD")}function d(t){if(t){var e=t.offsetTop-o.d;setTimeout((function(){window.scrollTo({top:e,behavior:"smooth"})}))}}function f(t){var e=/st|nd|rd|th/,r=(t=t.toString()).match(e);t=t.replace(e,"");var n=o.f[t];if(!n)throw new Error("Undefined number: ".concat(t));return r?"第".concat(n):n}},360:function(t,e,r){var content=r(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("14be79a2",content,!0,{sourceMap:!1})},361:function(t,e,r){var content=r(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("55ba80e6",content,!0,{sourceMap:!1})},363:function(t,e,r){var content=r(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("7d388273",content,!0,{sourceMap:!1})},365:function(t,e,r){"use strict";r.r(e);r(78),r(127);var defs=r(96),n=r(358),c={props:{councilorMap:{type:Object,required:!0},sayit:{type:Object,required:!0}},computed:{councilor:function(){return this.councilorMap[this.sayit.councilorId]},district:function(){return"".concat(this.councilor.districtTitle," | ").concat(this.councilor.townList.join("."))},roundLabel:function(){var t=Object(n.b)(this.sayit.councilorRound||defs.a),e=Object(n.b)(this.sayit.round);return"".concat(t,"屆第").concat(e,"次").concat(this.sayit.type)}}},o=(r(369),r(27)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"intCard pb3 bb b--moon-gray mb3"},[r("div",{staticClass:"flex-l flex-row-reverse justify-between mb3"},[r("div",{staticClass:"f6 gray"},[t._v(t._s(t.sayit.date))]),r("div",{staticClass:"mt3 mt0-l"},[r("div",{staticClass:"f6 gray mb1"},[t._v("質詢議員： "+t._s(t.councilor.name))]),r("div",{staticClass:"f6 gray"},[t._v("選舉區域： "+t._s(t.district))])])]),r("h2",{staticClass:"f4 f3-l fw6"},[t._v(t._s(t.sayit.summary))]),r("p",[t._v(t._s(t.sayit.say))]),r("div",{staticClass:"flex-l justify-between"},[r("div",{staticClass:"f6"},[t._v("來源出處： "+t._s(t.roundLabel))]),r("div",{staticClass:"dn light-blue f6"},[t._v("閱讀更多")])])])}),[],!1,null,"37314b42",null);e.default=component.exports},367:function(t,e,r){"use strict";r(360)},368:function(t,e,r){var n=r(42)(!1);n.push([t.i,".districtText[data-v-62b292ce]{color:#00000f;text-decoration:none}.districtText--multiEle .districtText__name[data-v-62b292ce],.districtText--multiEle .districtText__town[data-v-62b292ce]{text-decoration:underline}.districtText--active[data-v-62b292ce]{color:#49b0d5;-webkit-text-decoration-color:#49b0d5;text-decoration-color:#49b0d5}.districtText__square[data-v-62b292ce]{background-color:#49b0d5;height:.625rem;width:.625rem}.districtText__town--active[data-v-62b292ce]{color:#49b0d5;-webkit-text-decoration-color:#49b0d5;text-decoration-color:#49b0d5}",""]),t.exports=n},369:function(t,e,r){"use strict";r(361)},370:function(t,e,r){var n=r(42)(!1);n.push([t.i,"",""]),t.exports=n},374:function(t,e,r){var content=r(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("775b45f2",content,!0,{sourceMap:!1})},376:function(t,e,r){"use strict";r.r(e);var n=r(20);r(50),r(238),r(36),r(34),r(44),r(14),r(51),r(35),r(52);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{district:{type:Object,required:!0},isSingleElement:{type:Boolean,default:!1},activeArea:{default:null,validator:function(area){return!area||["district","town"].includes(area.type)&&area.id}},isQuotaVisible:{type:Boolean,default:!1}},data:function(){return{localActiveArea:this.activeArea}},computed:{isDistrictActive:function(){var t=this.activeArea;return t&&"district"===t.type&&t.id===this.district.districtId},townLabelList:function(){var t=this.district.townList;if(!t.length)return[];var e=t[t.length-1];return e.endsWith("區")||(t[t.length-1]="".concat(e,"區")),t}},watch:{activeArea:function(t){(t||this.localActiveArea)&&(t?this.localActiveArea&&t.type===this.localActiveArea.type&&t.id===this.localActiveArea.id||(this.localActiveArea=o({},t)):this.localActiveArea=null)}},methods:{isTownActive:function(t){var e=this.activeArea;return t=t.endsWith("區")?t:"".concat(t,"區"),e&&"town"===e.type&&e.id===t},activateArea:function(t,e){"town"===t&&(e=e.endsWith("區")?e:"".concat(e,"區")),this.localActiveArea={type:t,id:e},this.$emit("update:activeArea",this.localActiveArea)},deactivateArea:function(){this.localActiveArea=null,this.$emit("update:activeArea",null)}}},d=(r(367),r(27)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"districtText fw3 f6",class:{"districtText--multiEle":!t.isSingleElement,"districtText--active":t.isDistrictActive}},[r("div",{staticClass:"districtText__square dn dib-ns mr1"}),r("div",{staticClass:"districtText__name db di-ns mr2",on:{mouseover:function(e){return t.activateArea("district",t.district.districtId)},mouseleave:t.deactivateArea}},[r("div",{staticClass:"di f5 f6-ns"},[t._v(t._s(t.district.districtTitle))]),t.isQuotaVisible?r("div",{staticClass:"f7 di ml4"},[t._v(t._s(t.district.districtQuota)+" 席")]):t._e()]),r("div",{staticClass:"db di-ns mt3 mt0-l"},[t.isSingleElement?r("span",[t._v(t._s(t.townLabelList.join(".")))]):t._l(t.townLabelList,(function(e){return r("span",{key:e,staticClass:"districtText__town mr1",class:{"districtText__town--active":t.isTownActive(e)},on:{mouseover:function(r){return t.activateArea("town",e)},mouseleave:t.deactivateArea}},[t._v(t._s(e))])}))],2)])}),[],!1,null,"62b292ce",null);e.default=component.exports},380:function(t,e,r){"use strict";r(363)},381:function(t,e,r){var n=r(42)(!1);n.push([t.i,".intCat__more[data-v-46f5463d]{outline:none;border:none;background:none}",""]),t.exports=n},388:function(t,e,r){"use strict";r.r(e);r(14);var n={props:{councilorMap:{type:Object,required:!0},name:{type:String,required:!0},sayList:{type:Array,required:!0,validator:function(t){return t.every((function(t){return t.councilorId&&t.summary}))}},hasMore:{type:Boolean,default:!1}},methods:{showMore:function(){this.$emit("more")}}},c=(r(380),r(27)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"intCat"},[t.hasMore?r("div",{staticClass:"tr"},[r("button",{staticClass:"intCat__more pv2 mb3 pointer",on:{click:t.showMore}},[t._v("閱讀全部 >")])]):t._e(),r("div",{staticClass:"intCat__title f3 fw5 pb3 mb4 bb b--gray bw2"},[t._v("/ "+t._s(t.name))]),t._l(t.sayList,(function(e,n){return r("interpellation-card",{key:n,attrs:{"councilor-map":t.councilorMap,sayit:e}})}))],2)}),[],!1,null,"46f5463d",null);e.default=component.exports;installComponents(component,{InterpellationCard:r(365).default})},397:function(t,e,r){"use strict";r(374)},398:function(t,e,r){var n=r(42)(!1);n.push([t.i,"@media screen and (min-width:60em){.intLanding[data-v-51674af9]{display:grid;grid-template-columns:14rem 1fr;grid-column-gap:5rem;-moz-column-gap:5rem;column-gap:5rem;align-items:start}.intLanding__stats[data-v-51674af9]{position:-webkit-sticky;position:sticky;top:4rem}}.stats__item[data-v-51674af9]{background:none}.stats__item[data-v-51674af9]:nth-child(n+7){display:none}@media screen and (min-width:60em){.stats__item[data-v-51674af9]{border-width:0 0 1px}.stats__item[data-v-51674af9]:nth-child(n+7){display:flex}}.stats__item--active[data-v-51674af9]{color:#49b0d5}",""]),t.exports=n},407:function(t,e,r){"use strict";r.r(e);var n=r(20),c=(r(14),r(50),r(44),r(79),r(54),r(35),r(53),r(32),r(36),r(34),r(51),r(52),r(366)),o=r(422),l=r.n(o),defs=r(96),d=r(358);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{InfiniteLoading:l.a},props:{councilorMap:{type:Object,required:!0},sayList:{type:Array,required:!0,validator:function(t){return t.every((function(t){return t.councilorId&&t.summary}))}},stats:{type:Object,required:!0,validator:function(t){return t.org}},category:{default:void 0,validator:function(t){return!t||["org"].includes(t.type)&&t.value}},isStatic:{type:Boolean,default:!0}},data:function(){return{cursor:10,targetCategory:this.category,infiniteId:0}},computed:{targetSayList:function(){var t=this;return this.isStatic&&this.targetCategory&&"org"===this.targetCategory.type?this.sayList.filter((function(e){return e.relatedOrgs.includes(t.targetCategory.value)})):this.sayList},visibleSayList:function(){return this.targetSayList.slice(0,this.cursor)},isShowingAllCategory:function(){return this.targetCategory&&"all"===this.targetCategory.value},perCategorySayList:function(){if(!this.isShowingAllCategory)return[];if("org"!==this.targetCategory.type)return[];var t=this.sayList.reduce((function(t,e){return e.relatedOrgs.forEach((function(r){t[r]||(t[r]=[]),t[r].length<=3&&t[r].push(e)})),t}),{});return this.stats.org.filter((function(e){return t[e.name]})).map((function(e){return y(y({},e),{},{sayList:t[e.name].slice(0,3),hasMore:t[e.name].length>3})}))}},watch:{infiniteId:function(){var t=this;this.$nextTick((function(){t.scrollToMain()}))},category:function(t){if(t||this.targetCategory){var e=!1;t?this.targetCategory&&t.type===this.targetCategory.type&&t.value===this.targetCategory.value||(this.targetCategory=y({},t),e=!0):(this.targetCategory=void 0,e=!0),e&&this.resetInfiniteLoading()}}},methods:{resetInfiniteLoading:Object(c.debounce)((function(){this.cursor=10,this.infiniteId+=1}),200),isCatActive:function(t,e){return this.targetCategory&&this.targetCategory.type===t&&this.targetCategory.value===e},filter:function(t,e){this.targetCategory={type:t,value:e},this.resetInfiniteLoading(),this.$emit("update:category",this.targetCategory)},loadMoreSayList:function(t){if(this.visibleSayList.length<this.targetSayList.length)return this.cursor+=10,void this.$nextTick((function(){t.loaded()}));this.isStatic?t.complete():this.$emit("infinite",t)},scrollToMain:function(){var main=this.$refs.main;if(main){var t=main.getBoundingClientRect(),e=t.y+120>window.innerHeight;(t.y<defs.d||e)&&Object(d.c)(main)}}}},v=(r(397),r(27)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"intLanding"},[r("div",{staticClass:"intLanding__stats stats"},[r("h2",{staticClass:"f4 f3-l mb3"},[t._v("質詢局處")]),t._l(t.stats.org,(function(e){return r("button",{key:e.name,staticClass:"stats__item ba b--moon-gray flex-l justify-between f5 f4-l w-100-l pa2 pv3-l ph0-l mr2 mb2 ma0-l pointer",class:{"stats__item--active":t.isCatActive("org",e.name)},on:{click:function(r){return t.filter("org",e.name)}}},[r("span",{staticClass:"mr2 mr0-l"},[t._v(t._s(e.name))]),r("span",[t._v(t._s(e.count))])])}))],2),r("div",{ref:"main",staticClass:"intLanding__main mt3"},[t.isShowingAllCategory?t._l(t.perCategorySayList,(function(e){return r("interpellation-category",{key:e.name,staticClass:"mb5",attrs:{name:e.name,"councilor-map":t.councilorMap,"say-list":e.sayList,"has-more":e.hasMore},on:{more:function(r){return t.filter("org",e.name)}}})})):[t._l(t.visibleSayList,(function(e,n){return r("interpellation-card",{key:e.objectID||n,attrs:{"councilor-map":t.councilorMap,sayit:e}})})),r("client-only",[r("infinite-loading",{attrs:{identifier:t.infiniteId},on:{infinite:t.loadMoreSayList}},[r("div",{staticClass:"f6 gray",attrs:{slot:"no-more"},slot:"no-more"},[t._v("已顯示所有搜尋結果")]),r("div",{staticClass:"f6 gray",attrs:{slot:"no-results"},slot:"no-results"},[t.isShowingAllCategory?r("span",[t._v("找不到任何結果，或許換個關鍵字試試？")]):r("div",{staticClass:"pointer",on:{click:function(e){return t.filter("org","all")}}},[t._v("找不到任何結果，或許看看"),r("div",{staticClass:"di underline"},[t._v("所有局處？")])])])])],1)]],2)])}),[],!1,null,"51674af9",null);e.default=component.exports;installComponents(component,{InterpellationCategory:r(388).default,InterpellationCard:r(365).default})},452:function(t,e,r){var content=r(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("4b775d68",content,!0,{sourceMap:!1})},540:function(t,e,r){"use strict";r(452)},541:function(t,e,r){var n=r(42)(!1);n.push([t.i,".int__districtList[data-v-48c00f98]{display:none}@media screen and (min-width:30em){.int__districtList[data-v-48c00f98]{width:40rem;display:grid;grid-template-columns:1fr 1fr;grid-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;grid-row-gap:.75rem;row-gap:.75rem;justify-content:center}}@media screen and (min-width:60em){.int__districtList[data-v-48c00f98]{width:60rem;grid-template-columns:1fr 1fr 1fr}}.int__district[data-v-48c00f98]{border:none;background:none}.int__query[data-v-48c00f98]{border:1px solid #d8d8d8;padding:.5rem 2rem}",""]),t.exports=n},560:function(t,e,r){"use strict";r.r(e);r(34),r(51),r(52);var n=r(20),c=r(12),o=(r(63),r(44),r(14),r(413),r(536),r(538),r(53),r(129),r(35),r(245),r(239),r(32),r(242),r(36),r(33),r(161),r(539)),l=r.n(o),d=r(366),defs=r(96);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={type:"org",value:"all"},v={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,l,d,f,h,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=n.round||defs.a,e.next=4,r("council",c,"district-map").fetch();case 4:return o=e.sent,e.next=7,r("council",c,"councilor-map").fetch();case 7:return l=e.sent,e.next=10,r("council",c,"sayit").fetch();case 10:return d=e.sent,e.next=13,r("council",c,"sayit/stats").fetch();case 13:return f=e.sent,h={org:{}},v=d.flatMap((function(t){return t.sayit?t.sayit.filter((function(t){return!t.date.startsWith("Invalid")})).map((function(e){return y(y({},e),{},{councilorId:t.id,councilorRound:c})})):[]})).sort((function(a,b){return b.date.localeCompare(a.date)})).filter((function(t){var e=!1;return t.relatedOrgs.forEach((function(t){h.org[t]||(h.org[t]=0),h.org[t]<4&&(h.org[t]+=1,e=!0)})),e})),m=f.all,e.abrupt("return",{round:c,districtMap:o,councilorMap:l,defaultSayList:v,defaultSayitStats:m});case 18:case"end":return e.stop()}}),e)})))()},data:function(){var t=l()("UBG8A7D3KK","2e53b0b2355e9770e1d013ab7e6ba26f"),e=t.initIndex("tcco_prod");return{algoliaResult:[],hasNoMoreResult:!1,algoliaClient:t,algoliaIndex:e,orgFacets:null}},computed:{query:{get:function(){return(this.$route.query.query||"").trim()},set:function(t){this.resetQuery(t)}},district:function(){var t=this.$route.query.district||"";return this.districtMap[t]||null},category:{get:function(){var t=this.$route.query,e=t.catType,r=t.catValue;return"null"===e?null:"org"===e&&this.defaultSayitStats.org.find((function(t){return t.name===r}))?{type:e,value:r}:y({},h)},set:function(t){this.updateSearchQuery({category:t})}},districtList:function(){var t=Object.values(this.districtMap).filter((function(t){return t.districtId}));return t.push({districtId:"all",districtTitle:"所有選區",townList:[]}),t},isDefaultView:function(){return this.category&&"all"===this.category.value&&!this.district},sayList:function(){return this.isDefaultView?this.defaultSayList:this.algoliaResult},sayitStats:function(){var t=this;return this.isDefaultView||!this.orgFacets?this.defaultSayitStats:{org:Object.keys(this.orgFacets).map((function(e){return{name:e,count:t.orgFacets[e]}})).sort((function(a,b){return b.count-a.count}))}},activeDistrict:function(){return this.district?{type:"district",id:this.district.districtId}:{type:"district",id:"all"}}},watch:{category:function(t,e){t&&this.updateSayitStats(),this.resetSearch()},query:function(){this.normalizeSearchInNeeded()||this.resetSearch()},district:function(){this.normalizeSearchInNeeded()||this.resetSearch()}},mounted:function(){this.normalizeSearchInNeeded()},methods:{normalizeSearchInNeeded:function(){return!(!this.query&&!this.district||!this.category||"all"!==this.category.value)&&(this.updateSearchQuery({category:null}),!0)},updateSearchQuery:function(t){var e=t.query,r=t.category,n=t.district,c=y({},this.$route.query);void 0!==e&&(e?c.query=e:delete c.query),void 0!==r&&(r?(c.catType=r.type,c.catValue=r.value):c.catType="null"),void 0!==n&&(n?c.district=n.districtId:delete c.district),c.district||c.query?"all"===c.catValue&&(c.catType="null",delete c.catValue):"null"===c.catType&&delete c.category,this.$router.push({name:this.$route.name,query:c})},updateSayitStats:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={hitsPerPage:0,facets:["relatedOrgs"]},t.district&&(r.facetFilters=["councilor.districtId:".concat(t.district.districtId)]),e.next=4,t.algoliaIndex.search(t.query,r);case 4:n=e.sent,c=n.facets,t.orgFacets=c.relatedOrgs;case 7:case"end":return e.stop()}}),e)})))()},toggleDistrict:function(t){var e={};"all"===t.districtId||this.district&&this.district.districtId===t.districtId?e.district=null:e.district=t,this.updateSearchQuery(e)},resetQuery:Object(d.debounce)((function(t){this.updateSearchQuery({query:t})}),300),resetSearch:Object(d.debounce)((function(){this.algoliaResult=[],this.hasNoMoreResult=!1,this.$refs.main&&this.$refs.main.resetInfiniteLoading()}),50),searchInterpellation:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={hitsPerPage:30,page:Math.floor(t.algoliaResult.length/30),facets:["relatedOrgs"],facetFilters:[]},t.category&&"org"===t.category.type&&r.facetFilters.push("relatedOrgs:".concat(t.category.value)),t.district&&r.facetFilters.push("councilor.districtId:".concat(t.district.districtId)),e.next=5,t.algoliaIndex.search(t.query,r);case 5:return n=e.sent,c=n.hits,o=n.nbPages,l=n.facets,t.category&&"org"===t.category.type||(t.orgFacets=l.relatedOrgs),c.forEach((function(e){t.algoliaResult.push(y(y({},e),{},{councilorId:e.councilor.id,councilorRound:t.round}))})),t.hasNoMoreResult=r.page+1>=o,e.abrupt("return",c.length);case 13:case"end":return e.stop()}}),e)})))()},loadMore:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.hasNoMoreResult){r.next=3;break}return t.complete(),r.abrupt("return");case 3:return r.next=5,e.searchInterpellation();case 5:r.sent?t.loaded():t.complete();case 7:case"end":return r.stop()}}),r)})))()}}},m=(r(540),r(27)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"int mw8 ph3 center pv3 pv4-l"},[r("div",{staticClass:"mv4"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],staticClass:"w-100 int__query br-pill",attrs:{placeholder:"搜尋質詢議題",type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"int__districtList mv4 center pb4 bb b--gray"},t._l(t.districtList,(function(e){return r("button",{key:e.districtId,staticClass:"int__district tl pa0 pointer",on:{click:function(r){return t.toggleDistrict(e)}}},[r("district-text",{attrs:{district:e,"active-area":t.activeDistrict}})],1)})),0),r("interpellation-landing",{ref:"main",attrs:{"councilor-map":t.councilorMap,"say-list":t.sayList,stats:t.sayitStats,category:t.category,"is-static":!1},on:{"update:category":function(e){t.category=e},infinite:t.loadMore}})],1)}),[],!1,null,"48c00f98",null);e.default=component.exports;installComponents(component,{DistrictText:r(376).default,InterpellationLanding:r(407).default})}}]);