(window.webpackJsonp=window.webpackJsonp||[]).push([[20,16,19],{360:function(t,n,e){"use strict";e.d(n,"e",(function(){return l})),e.d(n,"b",(function(){return h})),e.d(n,"a",(function(){return m})),e.d(n,"d",(function(){return v})),e.d(n,"c",(function(){return y}));e(14),e(32),e(127),e(237),e(238),e(63),e(97),e(35),e(240),e(78);var r=e(361),o=e.n(r),c=e(96),d=e(362),f=d.a.reduce((function(t,n){return t[n.abbr||n.name]=n,t}),{});function l(t){var n=t.join(".");return n.endsWith("區")||(n+="區"),n}function h(t){if(t){if(t.name&&t.avatar)return t;var n=f[t];if(n||(n=d.a.find((function(p){return p.name===t}))),!n)throw new Error("Undefined party: ".concat(t));return n}}function m(t){return o()(t).format("YYYY.MM.DD")}function v(t){if(t){var n=t.offsetTop-c.e;setTimeout((function(){window.scrollTo({top:n,behavior:"smooth"})}))}}function y(t){var n=/st|nd|rd|th/,e=(t=t.toString()).match(n);t=t.replace(n,"");var r=c.g[t];if(!r)throw new Error("Undefined number: ".concat(t));return e?"第".concat(r):r}},361:function(t,n,e){t.exports=function(){"use strict";var t=1e3,n=6e4,e=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",d="quarter",f="year",l="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},g={s:$,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,c),s=e-i<0,u=n.clone().add(r+(s?-1:1),c);return+(-(r+(e-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:o,d:a,D:l,h:u,m:s,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",M={};M[_]=y;var p=function(t){return t instanceof S},w=function t(n,e,r){var i;if(!n)return _;if("string"==typeof n){var s=n.toLowerCase();M[s]&&(i=s),e&&(M[s]=e,i=s);var u=n.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=n.name;M[a]=n,i=a}return!r&&i&&(_=i),i||!r&&_},C=function(t,n){if(p(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new S(e)},D=g;D.l=w,D.i=p,D.w=function(t,n){return C(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var S=function(){function y(t){this.$L=w(t.locale,null,!0),this.parse(t)}var $=y.prototype;return $.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return D},$.isValid=function(){return!(this.$d.toString()===h)},$.isSame=function(t,n){var e=C(t);return this.startOf(n)<=e&&e<=this.endOf(n)},$.isAfter=function(t,n){return C(t)<this.startOf(n)},$.isBefore=function(t,n){return this.endOf(n)<C(t)},$.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,n){var e=this,r=!!D.u(n)||n,d=D.p(t),h=function(t,n){var i=D.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?i:i.endOf(a)},m=function(t,n){return D.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},v=this.$W,y=this.$M,$=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case f:return r?h(1,0):h(31,11);case c:return r?h(1,y):h(0,y+1);case o:var _=this.$locale().weekStart||0,M=(v<_?v+7:v)-_;return h(r?$-M:$+(6-M),y);case a:case l:return m(g+"Hours",0);case u:return m(g+"Minutes",1);case s:return m(g+"Seconds",2);case i:return m(g+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,n){var e,o=D.p(t),d="set"+(this.$u?"UTC":""),h=(e={},e[a]=d+"Date",e[l]=d+"Date",e[c]=d+"Month",e[f]=d+"FullYear",e[u]=d+"Hours",e[s]=d+"Minutes",e[i]=d+"Seconds",e[r]=d+"Milliseconds",e)[o],m=o===a?this.$D+(n-this.$W):n;if(o===c||o===f){var v=this.clone().set(l,1);v.$d[h](m),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},$.set=function(t,n){return this.clone().$set(t,n)},$.get=function(t){return this[D.p(t)]()},$.add=function(r,d){var l,h=this;r=Number(r);var m=D.p(d),v=function(t){var n=C(h);return D.w(n.date(n.date()+Math.round(t*r)),h)};if(m===c)return this.set(c,this.$M+r);if(m===f)return this.set(f,this.$y+r);if(m===a)return v(1);if(m===o)return v(7);var y=(l={},l[s]=n,l[u]=e,l[i]=t,l)[m]||1,$=this.$d.getTime()+r*y;return D.w($,this)},$.subtract=function(t,n){return this.add(-1*t,n)},$.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),s=this.$H,u=this.$m,a=this.$M,o=e.weekdays,c=e.months,d=function(t,e,i,s){return t&&(t[e]||t(n,r))||i[e].slice(0,s)},f=function(t){return D.s(s%12||12,t,"0")},l=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:D.s(a+1,2,"0"),MMM:d(e.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:d(e.weekdaysMin,this.$W,o,2),ddd:d(e.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:D.s(s,2,"0"),h:f(1),hh:f(2),a:l(s,u,!0),A:l(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,n){return n||m[t]||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,l,h){var m,v=D.p(l),y=C(r),$=(y.utcOffset()-this.utcOffset())*n,g=this-y,_=D.m(this,y);return _=(m={},m[f]=_/12,m[c]=_,m[d]=_/3,m[o]=(g-$)/6048e5,m[a]=(g-$)/864e5,m[u]=g/e,m[s]=g/n,m[i]=g/t,m)[v]||g,h?_:D.a(_)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=w(t,n,!0);return r&&(e.$L=r),e},$.clone=function(){return D.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},y}(),O=S.prototype;return C.prototype=O,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",f],["$D",l]].forEach((function(t){O[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),C.extend=function(t,n){return t.$i||(t(n,S,C),t.$i=!0),C},C.locale=w,C.isDayjs=p,C.unix=function(t){return C(1e3*t)},C.en=M[_],C.Ls=M,C.p={},C}()},362:function(t){t.exports=JSON.parse('{"a":[{"name":"中國國民黨","abbr":"國民黨","avatar":"/content-img/party-國.png"},{"name":"民主進步黨","abbr":"民進黨","avatar":"/content-img/party-民.png"},{"name":"台灣團結聯盟","avatar":"/content-img/party-台.png"},{"name":"無黨籍","avatar":"/content-img/party-無.png"},{"name":"台灣基進","avatar":"/content-img/party-基.png"},{"name":"時代力量","avatar":"/content-img/party-時.png"},{"name":"新黨","avatar":"/content-img/party-新.png"},{"name":"台灣民眾黨","avatar":"/content-img/party-眾.png"},{"name":"綠黨","avatar":"/content-img/party-綠.png"}]}')},367:function(t,n,e){var content=e(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(34).default)("0e96ee7f",content,!0,{sourceMap:!1})},374:function(t,n,e){var content=e(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(34).default)("077b25ea",content,!0,{sourceMap:!1})},377:function(t,n,e){"use strict";e.r(n);e(77),e(127);var defs=e(96),r=e(360),o={props:{councilorMap:{type:Object,required:!0},sayit:{type:Object,required:!0}},computed:{councilor:function(){return this.councilorMap[this.sayit.councilorId]},district:function(){return"".concat(this.councilor.districtTitle," | ").concat(this.councilor.townList.join("."))},roundLabel:function(){var t=Object(r.c)(this.sayit.councilorRound||defs.b),n=Object(r.c)(this.sayit.round);return"".concat(t,"屆第").concat(n,"次").concat(this.sayit.type)}},methods:{gotoPdf:function(){alert("待做")}}},c=(e(381),e(27)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"intCard"},[e("div",{staticClass:"intCard__meta flex-ns flex-row-reverse justify-between ls3"},[e("div",{staticClass:"f6 gray"},[t._v(t._s(t.sayit.date))]),e("div",{staticClass:"mt3 mt0-ns"},[e("div",{staticClass:"f6 gray mb1"},[t._v("質詢議員： "+t._s(t.councilor.name))]),e("div",{staticClass:"f6 gray"},[t._v("選舉區域： "+t._s(t.district))])])]),e("h2",{staticClass:"f4 f3-ns fw5 ls4"},[t._v(t._s(t.sayit.summary))]),e("p",{staticClass:"ls2"},[t._v(t._s(t.sayit.say)+"...")]),e("button",{staticClass:"intCard__src plainButton pointer flex justify-between w-100",on:{click:t.gotoPdf}},[e("div",{staticClass:"f6 ls1"},[t._v("來源出處： "+t._s(t.roundLabel))]),e("div",{staticClass:"flex ls2"},[e("div",{staticClass:"intCard__more underline dn db-ns"},[t._v("閱讀更多")]),e("tcw-icon",{staticClass:"ml2",attrs:{icon:"chevron-right-gray"}})],1)])])}),[],!1,null,"0904268c",null);n.default=component.exports;installComponents(component,{TcwIcon:e(239).default})},381:function(t,n,e){"use strict";e(367)},382:function(t,n,e){var r=e(33)(!1);r.push([t.i,".intCard[data-v-0904268c]{border-bottom:1px solid #979797;padding-bottom:1.25rem;margin-bottom:1.25rem}.intCard__meta[data-v-0904268c]{margin-bottom:.75rem}.intCard p[data-v-0904268c]{margin:.75rem 0 1.25rem}@media screen and (min-width:30em){.intCard[data-v-0904268c]{padding-bottom:4rem;margin-bottom:4rem}.intCard__meta[data-v-0904268c]{margin-bottom:1.25rem}.intCard p[data-v-0904268c]{margin:1rem 0 2.25rem}.intCard__src:hover .intCard__more[data-v-0904268c]{color:#49b0d5;-webkit-text-decoration-color:#49b0d5;text-decoration-color:#49b0d5}}",""]),t.exports=r},390:function(t,n,e){"use strict";e(374)},391:function(t,n,e){var r=e(33)(!1);r.push([t.i,".intCat__title[data-v-71b2ef68]{padding-bottom:1.5rem;border-bottom:4px solid #979797;margin-bottom:3.5rem}",""]),t.exports=r},396:function(t,n,e){"use strict";e.r(n);e(14);var r={props:{councilorMap:{type:Object,required:!0},name:{type:String,required:!0},sayList:{type:Array,required:!0,validator:function(t){return t.every((function(t){return t.councilorId&&t.summary}))}},hasMore:{type:Boolean,default:!1}},methods:{showMore:function(){this.$emit("more")}}},o=(e(390),e(27)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"intCat"},[e("div",{staticClass:"intCat__title flex justify-between items-center"},[e("div",{staticClass:"f3 fw5"},[t._v("/ "+t._s(t.name))]),t.hasMore?e("button",{staticClass:"intCat__more pv2 plainButton underline pointer flex items-center",on:{click:t.showMore}},[t._v("局處所有相關質詢"),e("tcw-icon",{staticClass:"ml2",attrs:{icon:"chevron-right-gray"}})],1):t._e()]),t._l(t.sayList,(function(n,r){return e("interpellation-card",{key:r,attrs:{"councilor-map":t.councilorMap,sayit:n}})}))],2)}),[],!1,null,"71b2ef68",null);n.default=component.exports;installComponents(component,{TcwIcon:e(239).default,InterpellationCard:e(377).default})}}]);