(window.webpackJsonp=window.webpackJsonp||[]).push([[32,17,22,29],{361:function(t,n,e){"use strict";e.d(n,"e",(function(){return h})),e.d(n,"b",(function(){return d})),e.d(n,"a",(function(){return m})),e.d(n,"d",(function(){return v})),e.d(n,"c",(function(){return $}));e(14),e(32),e(127),e(237),e(238),e(61),e(97),e(35),e(240),e(77);var r=e(362),c=e.n(r),o=e(96),f=e(363),l=f.a.reduce((function(t,n){return t[n.abbr||n.name]=n,t}),{});function h(t){var n=t.join(".");return n.endsWith("區")||(n+="區"),n}function d(t){if(t){if(t.name&&t.avatar)return t;var n=l[t];if(n||(n=f.a.find((function(p){return p.name===t}))),!n)throw new Error("Undefined party: ".concat(t));return n}}function m(t){return c()(t).format("YYYY.MM.DD")}function v(t){if(t){var n=t.offsetTop-o.e;setTimeout((function(){window.scrollTo({top:n,behavior:"smooth"})}))}}function $(t){var n=/st|nd|rd|th/,e=(t=t.toString()).match(n);t=t.replace(n,"");var r=o.g[t];if(!r)throw new Error("Undefined number: ".concat(t));return e?"第".concat(r):r}},362:function(t,n,e){t.exports=function(){"use strict";var t=1e3,n=6e4,e=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",c="week",o="month",f="quarter",l="year",h="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},g={s:y,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,o),s=e-i<0,u=n.clone().add(r+(s?-1:1),o);return+(-(r+(e-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:l,w:c,d:a,D:h,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",M={};M[w]=$;var p=function(t){return t instanceof O},_=function t(n,e,r){var i;if(!n)return w;if("string"==typeof n){var s=n.toLowerCase();M[s]&&(i=s),e&&(M[s]=e,i=s);var u=n.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=n.name;M[a]=n,i=a}return!r&&i&&(w=i),i||!r&&w},D=function(t,n){if(p(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new O(e)},S=g;S.l=_,S.i=p,S.w=function(t,n){return D(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var O=function(){function $(t){this.$L=_(t.locale,null,!0),this.parse(t)}var y=$.prototype;return y.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(S.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return S},y.isValid=function(){return!(this.$d.toString()===d)},y.isSame=function(t,n){var e=D(t);return this.startOf(n)<=e&&e<=this.endOf(n)},y.isAfter=function(t,n){return D(t)<this.startOf(n)},y.isBefore=function(t,n){return this.endOf(n)<D(t)},y.$g=function(t,n,e){return S.u(t)?this[n]:this.set(e,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,n){var e=this,r=!!S.u(n)||n,f=S.p(t),d=function(t,n){var i=S.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?i:i.endOf(a)},m=function(t,n){return S.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},v=this.$W,$=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case l:return r?d(1,0):d(31,11);case o:return r?d(1,$):d(0,$+1);case c:var w=this.$locale().weekStart||0,M=(v<w?v+7:v)-w;return d(r?y-M:y+(6-M),$);case a:case h:return m(g+"Hours",0);case u:return m(g+"Minutes",1);case s:return m(g+"Seconds",2);case i:return m(g+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,n){var e,c=S.p(t),f="set"+(this.$u?"UTC":""),d=(e={},e[a]=f+"Date",e[h]=f+"Date",e[o]=f+"Month",e[l]=f+"FullYear",e[u]=f+"Hours",e[s]=f+"Minutes",e[i]=f+"Seconds",e[r]=f+"Milliseconds",e)[c],m=c===a?this.$D+(n-this.$W):n;if(c===o||c===l){var v=this.clone().set(h,1);v.$d[d](m),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},y.set=function(t,n){return this.clone().$set(t,n)},y.get=function(t){return this[S.p(t)]()},y.add=function(r,f){var h,d=this;r=Number(r);var m=S.p(f),v=function(t){var n=D(d);return S.w(n.date(n.date()+Math.round(t*r)),d)};if(m===o)return this.set(o,this.$M+r);if(m===l)return this.set(l,this.$y+r);if(m===a)return v(1);if(m===c)return v(7);var $=(h={},h[s]=n,h[u]=e,h[i]=t,h)[m]||1,y=this.$d.getTime()+r*$;return S.w(y,this)},y.subtract=function(t,n){return this.add(-1*t,n)},y.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,u=this.$m,a=this.$M,c=e.weekdays,o=e.months,f=function(t,e,i,s){return t&&(t[e]||t(n,r))||i[e].slice(0,s)},l=function(t){return S.s(s%12||12,t,"0")},h=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:f(e.monthsShort,a,o,3),MMMM:f(o,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:f(e.weekdaysMin,this.$W,c,2),ddd:f(e.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:S.s(s,2,"0"),h:l(1),hh:l(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:S.s(u,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,n){return n||m[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,d){var m,v=S.p(h),$=D(r),y=($.utcOffset()-this.utcOffset())*n,g=this-$,w=S.m(this,$);return w=(m={},m[l]=w/12,m[o]=w,m[f]=w/3,m[c]=(g-y)/6048e5,m[a]=(g-y)/864e5,m[u]=g/e,m[s]=g/n,m[i]=g/t,m)[v]||g,d?w:S.a(w)},y.daysInMonth=function(){return this.endOf(o).$D},y.$locale=function(){return M[this.$L]},y.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=_(t,n,!0);return r&&(e.$L=r),e},y.clone=function(){return S.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},$}(),x=O.prototype;return D.prototype=x,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",o],["$y",l],["$D",h]].forEach((function(t){x[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),D.extend=function(t,n){return t.$i||(t(n,O,D),t.$i=!0),D},D.locale=_,D.isDayjs=p,D.unix=function(t){return D(1e3*t)},D.en=M[w],D.Ls=M,D.p={},D}()},363:function(t){t.exports=JSON.parse('{"a":[{"name":"中國國民黨","abbr":"國民黨","avatar":"/content-img/party-國.png"},{"name":"民主進步黨","abbr":"民進黨","avatar":"/content-img/party-民.png"},{"name":"台灣團結聯盟","avatar":"/content-img/party-台.png"},{"name":"無黨籍","avatar":"/content-img/party-無.png"},{"name":"台灣基進","avatar":"/content-img/party-基.png"},{"name":"時代力量","avatar":"/content-img/party-時.png"},{"name":"新黨","avatar":"/content-img/party-新.png"},{"name":"台灣民眾黨","avatar":"/content-img/party-眾.png"},{"name":"綠黨","avatar":"/content-img/party-綠.png"}]}')},367:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return l}));var r=e(27),c=(e(128),e(41),e(52),e(14),e(97),e(78),"台南市議會觀測站"),o=t.env.SITE_URL||"https://tcco.tnsprout.org";function f(t,content){var n,e=t.startsWith("og:")?"property":"name";return n={hid:t},Object(r.a)(n,e,t),Object(r.a)(n,"content",content),n}function l(t){var title=t.title,n=t.description,e=t.coverUrl;function r(t){return"string"==typeof t?t:"function"==typeof t?t.call(this):t.toString()}return function(){var t=r.bind(this),head={meta:[]},l="".concat(t(title=title||"")),h=l?"".concat(l," | ").concat(c):c;if(head.title=h,head.meta.push(f("og:title",h)),head.meta.push(f("twitter:title",h)),n){var d=t(n);head.meta.push(f("description",d)),head.meta.push(f("og:description",d)),head.meta.push(f("twitter:description",d))}if(e){var m=t(e);m&&(m.startsWith("/")?m="".concat(o).concat(m):m.startsWith("http")||(m="".concat(o,"/").concat(m)),head.meta.push(f("og:image",m)),head.meta.push(f("twitter:image",m)),head.meta.push(f("twitter:card","summary_large_image")))}if(this&&(title||n||e)){var v="".concat(o).concat(this.$route.path);head.meta.push(f("og:url",v))}return head}}}).call(this,e(129))},386:function(t,n,e){"use strict";e.r(n);var r=e(361),c={props:{date:{type:String,required:!0}},computed:{value:function(){return Object(r.a)(this.date)}}},o=e(26),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("span",[t._v(t._s(t.value))])}),[],!1,null,null,null);n.default=component.exports},462:function(t,n,e){var content=e(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(34).default)("368e6e30",content,!0,{sourceMap:!1})},548:function(t,n,e){"use strict";e(462)},549:function(t,n,e){var r=e(33)(!1);r.push([t.i,".article__topMeta[data-v-4bc235b4]{margin:2rem}.article__social>a[data-v-4bc235b4]:not(:last-child){margin-right:1rem}.article .nuxt-content-container[data-v-4bc235b4] {line-height:normal}.article .nuxt-content-container[data-v-4bc235b4]  h1,.article .nuxt-content-container[data-v-4bc235b4]  h2{font-size:1.25rem}.article .nuxt-content-container[data-v-4bc235b4]  h3{font-size:1rem}.article h1[data-v-4bc235b4]{margin-bottom:.75rem}@media screen and (min-width:30em){.article__topMeta[data-v-4bc235b4]{margin:4rem 0 1.5rem}.article h1[data-v-4bc235b4]{margin-bottom:1.5rem}.article .nuxt-content-container[data-v-4bc235b4]{line-height:1.75}}",""]),t.exports=r},586:function(t,n,e){"use strict";e.r(n);var r=e(12),c=(e(78),e(64),e(367)),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,c,article;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,r=t.params,c=t.redirect,n.prev=1,n.next=4,e("article",r.article).fetch();case 4:article=n.sent,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),c("/article");case 10:return n.abrupt("return",{article:article});case 11:case"end":return n.stop()}}),n,null,[[1,7]])})))()},head:Object(c.b)({title:function(){return this.article.title},description:function(){return this.article.summary},coverUrl:function(){return this.article.coverImage}}),computed:{socialList:function(){return[{network:"facebook",icon:"logo-facebook"},{network:"line",icon:"logo-line"},{network:"twitter",icon:"logo-twitter"}]},link:function(){var path=this.$route.path;return"".concat(c.a).concat(path)}}},f=(e(548),e(26)),component=Object(f.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"article pageContainer"},[e("div",{staticClass:"article__topMeta flex justify-center justify-between-ns items-center"},[e("tcw-date",{staticClass:"ls1 f6 dn db-ns",attrs:{date:t.article.createdAt}}),e("div",{staticClass:"article__social"},t._l(t.socialList,(function(n){return e("share-network",{key:n.network,attrs:{network:n.network,title:t.article.title,description:t.article.summary,url:t.link}},[e("tcw-icon",{attrs:{icon:n.icon,size:"large"}})],1)})),1)],1),e("h1",{staticClass:"f3 ls4"},[t._v(t._s(t.article.title))]),e("tcw-date",{staticClass:"ls1 f6 mb3 db dn-ns",attrs:{date:t.article.createdAt}}),e("nuxt-content",{staticClass:"ls2 lh",attrs:{document:t.article}})],1)}),[],!1,null,"4bc235b4",null);n.default=component.exports;installComponents(component,{TcwDate:e(386).default,TcwIcon:e(239).default})}}]);