(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{403:function(t,e,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("2716f794",content,!0,{sourceMap:!1})},435:function(t,e,r){"use strict";r(403)},436:function(t,e,r){var n=r(33)(!1);n.push([t.i,".districtSum[data-v-12bb2e8e]{padding:0 .75rem}.districtSum h2[data-v-12bb2e8e]{font-size:1.25rem;letter-spacing:1.66px;margin-top:.75rem}.districtSum h2[data-v-12bb2e8e]:not(:last-child){margin-top:2.25rem}.districtSum__statsList[data-v-12bb2e8e]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:.5rem;-moz-column-gap:.5rem;column-gap:.5rem;grid-row-gap:.5rem;row-gap:.5rem}.districtSum__statsList .orgTag[data-v-12bb2e8e]:nth-child(n+7){display:none}.districtSum__statsList--all .orgTag[data-v-12bb2e8e]:nth-child(n+7){display:flex}.districtSum__statsList--all .districtSum__showMore[data-v-12bb2e8e]{display:none}.districtSum__showMore[data-v-12bb2e8e]{position:absolute;bottom:0;left:0;right:0;border:none;width:100%;padding-top:2rem;font-size:.875rem;color:#11111e;text-decoration:underline;-webkit-text-decoration-color:#11111e;text-decoration-color:#11111e;background:linear-gradient(180deg,rgba(255,255,254,0),#fffffe 50%)}.districtSum__article[data-v-12bb2e8e] {line-height:normal;letter-spacing:1.33px}.districtSum__article[data-v-12bb2e8e]  ul{margin:0;padding:0}.districtSum__article[data-v-12bb2e8e]  ul li{list-style:none;line-height:1.5}@media screen and (min-width:30em){.districtSum[data-v-12bb2e8e]{padding:0;display:grid;grid-template-columns:12rem 1fr;grid-column-gap:2rem;-moz-column-gap:2rem;column-gap:2rem;grid-row-gap:2rem;row-gap:2rem;align-items:flex-start}.districtSum h2[data-v-12bb2e8e]{border-bottom:1px solid #979797;padding-bottom:1rem;margin-top:0;letter-spacing:2.33px;display:inline-block}.districtSum h2[data-v-12bb2e8e]:not(:last-child){margin-top:0}.districtSum__statsList[data-v-12bb2e8e]{grid-template-columns:repeat(3,1fr);grid-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;grid-row-gap:1rem;row-gap:1rem}}@media screen and (min-width:60em){.districtSum[data-v-12bb2e8e]{grid-template-columns:13rem 1fr;grid-column-gap:5rem;-moz-column-gap:5rem;column-gap:5rem}.districtSum h2[data-v-12bb2e8e]{font-size:1.75rem;padding-bottom:1.5rem}.districtSum__statsList[data-v-12bb2e8e]{grid-template-columns:repeat(4,1fr)}.districtSum__statsList .orgTag[data-v-12bb2e8e]:nth-child(n+7){display:flex}.districtSum__statsList .orgTag[data-v-12bb2e8e]:nth-child(n+13){display:none}.districtSum__statsList--all .orgTag[data-v-12bb2e8e]:nth-child(n+13){display:flex}}.counSum[data-v-12bb2e8e]{margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid #d8d8d8}.counSum h2[data-v-12bb2e8e]{margin-bottom:1.25rem}@media screen and (min-width:30em){.counSum[data-v-12bb2e8e]{margin-top:3rem;padding-top:3rem}.counSum h2[data-v-12bb2e8e]{margin-bottom:3.5rem}.counSum__list[data-v-12bb2e8e]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:3rem;-moz-column-gap:3rem;column-gap:3rem;grid-row-gap:2rem;row-gap:2rem}}@media screen and (min-width:60em){.counSum__list[data-v-12bb2e8e]{grid-column-gap:6rem;-moz-column-gap:6rem;column-gap:6rem;grid-row-gap:3.5rem;row-gap:3.5rem}}",""]),t.exports=n},478:function(t,e,r){"use strict";r.r(e);var n=r(371),o={props:{meta:{type:Object,required:!0},relatedStats:{type:Object,required:!0},round:{type:String,required:!0}},data:function(){return{isShowingAllStats:!1}},computed:{intro:function(){return this.meta.intro}},methods:{showAllStats:function(){this.isShowingAllStats=!0},orgInterpellationLink:function(t){return{name:"round-interpellation",params:{round:this.round},query:{district:this.meta.districtId,catType:"org",catValue:t}}},councilorStats:function(t){return Object(n.get)(this.relatedStats,"".concat(t.id,".org"),[])}}},d=(r(435),r(26)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"districtSumWrapper"},[r("div",{staticClass:"districtSum"},[t._m(0),r("div",{staticClass:"districtSum__article"},[t.intro.body?r("nuxt-content",{attrs:{document:t.intro}}):r("div",{staticClass:"o-50"},[t._v("待撰寫")])],1),t._m(1),r("div",{staticClass:"districtSum__statsList relative mt3 mt0-ns",class:{"districtSum__statsList--all":t.isShowingAllStats}},[t._l(t.relatedStats.total.org,(function(e){return r("org-stats-tag",{key:e.name,attrs:{stats:e,to:t.orgInterpellationLink(e.name)}})})),r("button",{staticClass:"districtSum__showMore pointer",on:{click:t.showAllStats}},[t._v("顯示所有局處")])],2)]),r("div",{staticClass:"counSum"},[r("h2",{staticClass:"fw5 f3 f2-l ls4 lh-normal"},[t._v("應屆議員")]),r("div",{staticClass:"counSum__list"},t._l(t.meta.councilors,(function(e){return r("councilor-card",{key:e.id,staticClass:"mb2 mb0-ns",attrs:{person:e,round:t.round,"related-org-stats":t.councilorStats(e)}})})),1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"f4 f3-ns nowrap"},[t._v("選區情報")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"f4 f3-ns nowrap"},[t._v("質詢相關局處")])])}],!1,null,"12bb2e8e",null);e.default=component.exports;installComponents(component,{OrgStatsTag:r(414).default,CouncilorCard:r(479).default})}}]);