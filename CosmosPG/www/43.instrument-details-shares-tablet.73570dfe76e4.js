webpackJsonp([43],{2001:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.as,a=void 0===n?"span":n,r=t.symbol;return{value:Object(o.getInstrumentDescription)(e,r),as:a}}var i=n(1),l=n.n(i),s=n(2),o=n(31),c=function(e){var t=e.value,n=(e.symbol,e.dispatch,a(e,["value","symbol","dispatch"]));return l.a.createElement(n.as,n,t)};t.a=Object(s.connect)(r)(c)},2003:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"INSTRUMENT_ORDER",function(){return a}),n.d(t,"INSTRUMENT_OPEN_POSITIONS",function(){return r}),n.d(t,"INSTRUMENT_CHART",function(){return i}),n.d(t,"INSTRUMENT_OVERVIEW",function(){return l}),n.d(t,"RELATED_INSTRUMENTS",function(){return s}),n.d(t,"INSTRUMENT_PROFILE",function(){return o}),n.d(t,"INSTRUMENT_CONVERTER",function(){return c}),n.d(t,"INSTRUMENT_EVENTS",function(){return u}),n.d(t,"INSTRUMENT_INSIGHT",function(){return m}),n.d(t,"INSTRUMENT_FINANCIALS",function(){return f}),n.d(t,"INSTRUMENT_PERFORMANCE",function(){return b}),n.d(t,"INSTRUMENT_NEWS",function(){return _}),n.d(t,"CLOSE_ALL_POSITIONS",function(){return p}),n.d(t,"CANCEL_ALL_ORDERS",function(){return d});var a="instrument-order",r="instrument-open-positions",i="instrument-chart",l="instrument-overview",s="related-instruments",o="instrument-profile",c="instrument-converter",u="instrument-events",m="instrument-insight",f="instrument-financials",b="instrument-performance",_="instrument-news",p="close-all-positions",d="cancel-all-orders"},2004:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e,t){var n=t.symbol;return{categoryName:Object(c.getInstrumentCategory)(e,n)}}var l=n(1),s=n.n(l),o=n(2),c=n(31),u=n(5),m=n(2017),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b=function(e){var t=e.category,n=a(e,["category"]);n.as=n.as||"div";var r="icon-"+t+"-ico fs-30 instrument-details-no-image";return s.a.createElement(n.as,f({className:r},n))};b.defaultProps={category:"no-category"};var _=b,p=function(e){var t=e.symbol,n=e.categoryName,a=r(e,["symbol","categoryName"]),i=u.INSTRUMENT_CATEGORIES.BONDS,l=u.INSTRUMENT_CATEGORIES.INDEX,o=u.INSTRUMENT_CATEGORIES.ETFS,c=n.split(".")[0].toLowerCase(),f=c===i||c===o||c===l?s.a.createElement(_,{category:c}):s.a.createElement(m.a,{symbol:t});return s.a.createElement(a.as,null,f)};p.defaultProps={as:"span"};t.a=Object(o.connect)(i)(p)},2005:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e,t){var n=t.symbol,a=t.as,r=void 0===a?"span":a,i=t.up,l=void 0===i?"up":i,s=t.down,o=void 0===s?"down":s,c=Object(m.getInstrumentChange)(e,n);return{value:c?c.change:"",sign:c?c.sign:"",dir:c?c.dir:0,as:r,up:l,down:o}}var l=n(1),s=n.n(l),o=n(2),c=n(11),u=n.n(c),m=n(31),f=function(e){var t,n=e.value,i=e.sign,l=e.dir,o=e.up,c=e.down,m=e.className,f=e.showDir,b=r(e,["value","sign","dir","up","down","className","showDir"]),_=u()((t={},a(t,o,f&&l>0),a(t,c,f&&l<0),a(t,m,!!m),t));return s.a.createElement(b.as,{className:_},n?i+n:0)};t.a=Object(o.connect)(i)(f)},2006:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e,t){var n=t.symbol;return{instrumentAvailable:Object(m.isInstrumentTradable)(e,n),isOTH:Object(m.isInstrumentOTH)(e,n)}}var l=n(1),s=n.n(l),o=n(2),c=n(11),u=n.n(c),m=n(31),f=function(e){var t=e.instrumentAvailable,n=e.isOTH,i=e.className,l=e.minimize,o=r(e,["instrumentAvailable","isOTH","className","minimize"]),c=u()(a({"instrument-availability":!0},i,!!i)),m=u()({"instrument-availability__icon":!0,"instrument-availability__icon--available":t,"instrument-availability__icon--not-available":!t&&!n,"instrument-availability__icon--pending-orders":!t&&n,"instrument-availability__icon--inline":!l}),f="instrument_info.available_for_trading";return t||n||(f="instrument_info.not_available_for_trading"),!t&&n&&(f="instrument.info.trading.outside_of_trading_hours"),l?s.a.createElement(o.as,{className:c},s.a.createElement("i",{className:m,"aria-label":__(f)})):s.a.createElement(o.as,{className:c},s.a.createElement("i",{className:m}),__(f))};f.defaultProps={minimize:!0,as:"span"},t.a=Object(o.connect)(i)(f)},2007:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(289),i=n(292),l=n(293),s=n(1),o=n.n(s),c=n(11),u=n.n(c),m=function(e){var t=e.symbol,n=e.onClick,s=e.className;return o.a.createElement(i.a,{as:"div",symbol:t,className:u()(a({"button price-button price-button_ani price-button_labeled autotests-instrument-details-action-buy":!0},s,!!s))},o.a.createElement(l.a,{className:"price-button__wrapper btn",onClick:n,symbol:t},o.a.createElement("div",{className:"price-button__subtitle"},__("actions.buy")),o.a.createElement("div",{className:"price-button__title price-button__title_self-end"},o.a.createElement(r.a,{as:"span",symbol:t}))))};t.a=m},2008:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(294),i=n(295),l=n(296),s=n(1),o=n.n(s),c=n(11),u=n.n(c),m=function(e){var t=e.symbol,n=e.onClick,s=e.className;return o.a.createElement(i.a,{as:"div",symbol:t,className:u()(a({"button price-button price-button_ani price-button_labeled autotests-instrument-details-action-sell":!0},s,!!s))},o.a.createElement(l.a,{className:"price-button__wrapper btn",onClick:n,symbol:t},o.a.createElement("div",{className:"price-button__subtitle"},__("actions.sell")),o.a.createElement("div",{className:"price-button__title price-button__title_self-end"},o.a.createElement(r.a,{as:"span",symbol:t}))))};t.a=m},2009:function(e,t,n){"use strict";var a=n(834);n.d(t,"a",function(){return a.a});var r=n(835);n.d(t,"b",function(){return r.a})},2017:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}var i=n(1),l=n.n(i),s=n(11),o=n.n(s),c=n(55),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m=function(e){var t,n=e.symbol,i=e.className,s=r(e,["symbol","className"]);if(!n||"string"!=typeof n)return null;var m=Object(c.transformSBSymbolToSymbol)(n).replace("/","").toLowerCase()||"";s.as=s.as||"div";var f=o()((t={},a(t,"instrument-img instrument-img-"+m,!0),a(t,i,!!i),t));return l.a.createElement(s.as,u({className:f},s))};t.a=m},2018:function(e,t,n){"use strict";var a=n(140);t.a=Object(a.a)(function(){return n.e(49).then(n.bind(null,2064))})},2019:function(e,t,n){"use strict";function a(e,t){var n=t.symbol;return n||(n=Object(c.getInstrumentDetailsSymbol)(e)),{symbol:n,type:Object(u.getInstrumentType)(e,n),category:Object(u.getInstrumentCategory)(e,n)}}var r=n(1),i=n.n(r),l=n(2),s=n(140),o=n(5),c=n(71),u=n(31),m=Object(s.a)(function(){return n.e(51).then(n.bind(null,2069))}),f=Object(s.a)(function(){return n.e(52).then(n.bind(null,2072))}),b=Object(s.a)(function(){return n.e(54).then(n.bind(null,2073))}),_=Object(s.a)(function(){return n.e(50).then(n.bind(null,2074))}),p=Object(s.a)(function(){return n.e(60).then(n.bind(null,2075))});t.a=Object(l.connect)(a)(function(e){var t=e.symbol,n=(e.type,e.category);return n=n.toLowerCase(),n.startsWith(o.INSTRUMENT_CATEGORIES.CURRENCY)?i.a.createElement(m,{symbol:t}):n.startsWith(o.INSTRUMENT_CATEGORIES.CRYPTO)?i.a.createElement(_,{symbol:t}):n.startsWith(o.INSTRUMENT_CATEGORIES.SHARES)?i.a.createElement(f,{symbol:t}):n.startsWith(o.INSTRUMENT_CATEGORIES.BLENDS)?i.a.createElement(p,{symbol:t}):i.a.createElement(b,{symbol:t})})},2024:function(e,t,n){"use strict";var a=n(140);t.a=Object(a.a)(function(){return n.e(48).then(n.bind(null,2089))})},2025:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n(1),o=n.n(s),c=n(11),u=n.n(c),m=n(72),f=n.n(m),b=n(25),_=n.n(b),p=n(9),d=n.n(p),y=n(5),E=n(0),v=n.n(E),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),N=function(e){return function(t){return function(n){function l(){var e,t,n,i;a(this,l);for(var s=arguments.length,o=Array(s),c=0;c<s;c++)o[c]=arguments[c];return t=n=r(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this].concat(o))),n.state={status:y.PENDING},n._isMounted=!1,i=t,r(n,i)}return i(l,n),h(l,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){var t=this,n=v.a.asStringArray(e),a=v.a.reject(n,_.a.hasTranslationKey);if(v.a.isEmpty(a))return void this.setState({status:y.SUCCESS});this._isMounted=!0,d.a.loadDictionaryOnDemand(_.a.getCurrentLanguage(),a).then(function(e){var n=e.data;v.a.isEmpty(n)&&(n=v.a.object(a,Array(a.length))),_.a.mergeDictionaryOnDemand(n),t._isMounted&&t.setState({status:y.SUCCESS})}).catch(function(){t._isMounted&&t.setState({status:y.ERROR})})}},{key:"render",value:function(){return this.state.status===y.PENDING?null:o.a.createElement(t,this.props)}}]),l}(o.a.Component)}},g=N,w=n(55),O=function(e){var t=e.symbol,n=e.className,a=e.demand,r=void 0===a||a,i=e.translationBaseKey,s=void 0===i?"instrument_info.profile.description":i;if(!t||"string"!=typeof t)return null;var c=u()(l({"profile-description":!0},n,!!n)),m=Object(w.transformSBSymbolToSymbol)(t).replace("/",""),b=(r?"on_demand.":"")+s+"."+m,_=function(){return o.a.createElement("div",{className:c},f()(__(b)))};if(!r)return o.a.createElement(_,null);var p=g(b)(_);return o.a.createElement(p,null)};t.a=O},2032:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),s=n.n(l),o=n(2004),c=n(217),u=n(2001),m=n(2005),f=n(290),b=n(2006),_=n(289),p=n(218),d=n(291),y=n(2007),E=n(2008),v=n(2009),h=n(17),N=n.n(h),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return N()(n),n}return i(t,e),g(t,[{key:"render",value:function(){var e=this,t=this.props.symbol;return s.a.createElement("div",{className:"instrument-details-header"},s.a.createElement("div",{className:"instrument-details__header pane pane__xfluid"},s.a.createElement("div",{className:"instrument-details__header__left pane pane__column"},s.a.createElement("div",{className:"pane pane__fluid pane__column"},s.a.createElement("div",{className:"pane pane__column"},s.a.createElement("div",{className:"pane pane__row"},s.a.createElement(o.a,{symbol:t}),s.a.createElement("div",{className:"pane__column"},s.a.createElement("div",{className:"instrument-details__title"},s.a.createElement(c.a,{as:"span",symbol:t}),s.a.createElement(b.a,{symbol:t})),s.a.createElement("div",{className:"instrument-details__description"},s.a.createElement(u.a,{as:"span",symbol:t})))),s.a.createElement("div",{className:"pane pane__row"},s.a.createElement(_.a,{as:"span",className:"instrument-details__price",symbol:t}),s.a.createElement("span",{className:"instrument-details__change"},s.a.createElement(m.a,{symbol:t,showDir:!0}),s.a.createElement(f.a,{symbol:t,showDir:!0})))))),s.a.createElement("div",{className:"instrument-details__header__right pane pane__column"},s.a.createElement("div",{className:"instrument-details__actions"},s.a.createElement("div",{className:"instrument-details__actions__small"},s.a.createElement(d.a,{onClick:function(n){return e.toggleFavorite(n,t)},symbol:t,as:"div",className:"fs-13",yes:"icon-star-filled",no:"icon-star"}),s.a.createElement(v.a,{as:null},s.a.createElement(v.b,{onClick:this.openPriceAlerts,symbol:t,as:"div",className:"fs-13",yes:"icon-bell-filled",no:"icon-bell"}))),s.a.createElement("div",{className:"pane pane__row"},s.a.createElement(E.a,{symbol:t,onClick:function(n){return e.sell(n,t)},className:"price-button_labeled--small"}),s.a.createElement(y.a,{symbol:t,onClick:function(n){return e.buy(n,t)},className:"price-button_labeled--small"}))))))}}]),t}(p.a);t.a=w},2111:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.symbol;return{ticker:Object(o.getInstrumentTicker)(e,n)}}var i=n(1),l=n.n(i),s=n(2),o=n(31),c=function(e){var t=e.ticker,n=(e.symbol,e.dispatch,a(e,["ticker","symbol","dispatch"]));return l.a.createElement(n.as,n,t)};c.defaultProps={as:"span"},t.a=Object(s.connect)(r)(c)},2241:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n=t.symbol;return{isForecastSalesAvailable:Object(y.z)(e,n),isForecastEpsAvailable:Object(y.y)(e,n),isSummaryAvailable:Object(y.w)(e,n),isFinancialInfoAvailable:Object(y.v)(e,n)}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),m=n.n(u),f=n(2),b=n(17),_=n.n(b),p=n(2018),d=n(2019),y=n(840),E=(n(2242),n(42)),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),v(t,[{key:"render",value:function(){var e=this.props,t=e.symbol,n=e.isForecastSalesAvailable,a=e.isForecastEpsAvailable,r=e.isSummaryAvailable,i=e.isFinancialInfoAvailable;return m.a.createElement("div",{className:"financials-tab"},i&&m.a.createElement(y.c,{symbol:t,className:"financials-tab__block financials-tab__block--head"}),m.a.createElement("div",{className:"financials-tab__details"},n&&m.a.createElement(E.c,{className:"financials-tab__block",title:__("financials.forecast")+" - "+__("financials.forecast.sales")},m.a.createElement(y.b,{symbol:t})),a&&m.a.createElement(E.c,{className:"financials-tab__block",title:__("financials.forecast")+" - "+__("financials.forecast.eps")},m.a.createElement(y.a,{symbol:t})),r&&m.a.createElement(E.c,{className:"financials-tab__block",title:__("financials.summary")},m.a.createElement(y.d,{symbol:t}))))}}]),t}(m.a.Component),N=Object(f.connect)(l)(h),g=n(2111),w=function(e){var t=e.symbol;return m.a.createElement("div",{className:"pane pane__fluid"},m.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile-shares"},m.a.createElement("div",{className:"instrument-details__profile-shares__caption"},__("instrument_info.company_details")),m.a.createElement("div",{className:"instrument-details__profile-shares__top-section"},m.a.createElement("div",{className:"instrument-details__profile-shares__column"},m.a.createElement("div",{className:"instrument-details__profile-shares__row"},m.a.createElement("span",null,__("instrument_info.ticker"),":"),m.a.createElement(g.a,{symbol:t})),m.a.createElement("div",{className:"instrument-details__profile-shares__row"},m.a.createElement("span",null,__("instrument_info.company_name"),":"),m.a.createElement(y.i,{symbol:t})),m.a.createElement("div",{className:"instrument-details__profile-shares__row"},m.a.createElement("span",null,__("instrument_info.number_of_employees"),":"),m.a.createElement(y.l,{symbol:t})),m.a.createElement("div",{className:"instrument-details__profile-shares__row"},m.a.createElement("span",null,__("instrument_info.incorporated_country"),":"),m.a.createElement(y.j,{symbol:t}))),m.a.createElement("div",{className:"instrument-details__profile-shares__column"},m.a.createElement("div",{className:"instrument-details__profile-shares__row"},m.a.createElement("span",null,__("instrument_info.public_since"),":"),m.a.createElement(y.p,{symbol:t})),m.a.createElement("div",{className:"instrument-details__profile-shares__row"},m.a.createElement("span",null,__("instrument_info.auditor"),":"),m.a.createElement(y.f,{symbol:t})),m.a.createElement("div",{className:"instrument-details__profile-shares__row"},m.a.createElement("span",null,__("instrument_info.website"),":"),m.a.createElement(y.s,{symbol:t})),m.a.createElement("div",{className:"instrument-details__profile-shares__row"},m.a.createElement("span",null,__("instrument_info.address"),":"),m.a.createElement(y.e,{symbol:t}))),m.a.createElement("div",{className:"instrument-details__profile-shares__column"},m.a.createElement(y.n,{symbol:t}))),m.a.createElement("div",{className:"instrument-details__profile-shares__caption"},__("instrument_info.business_summary")),m.a.createElement(y.h,{symbol:t,className:"instrument-details__profile-shares__summary"})))},O=w,x=n(2003),j=n(220),T=n.n(j),k=n(38),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),I=function(e,t){var n=t.symbol;return{instrumentFundamentalAvailable:Object(y.u)(e,n),instrumentFinancialsAvailable:Object(y.x)(e,n)}},P=function(e){function t(e){s(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return _()(n),n}return c(t,e),S(t,[{key:"extendTabs",value:function(e,t){return this.props.instrumentFundamentalAvailable&&e.unshift({id:x.INSTRUMENT_PROFILE,title:"instrument_info.tab.profile",view:m.a.createElement(m.a.Fragment,null,m.a.createElement(k.default,{desktop:!0,tablet:!0},m.a.createElement("div",{className:"pane__scroll-content"},m.a.createElement(T.a,null,m.a.createElement(O,{symbol:t})))),m.a.createElement(k.default,{mobile:!0},m.a.createElement(O,{symbol:t}))),viewOptions:{className:"pane__scroll"},disabled:!1}),this.props.instrumentFinancialsAvailable&&e.unshift({id:x.INSTRUMENT_FINANCIALS,title:"tab.financials",view:m.a.createElement(m.a.Fragment,null,m.a.createElement(k.default,{desktop:!0,tablet:!0},m.a.createElement("div",{className:"pane__scroll-content"},m.a.createElement(T.a,null,m.a.createElement(N,{symbol:t})))),m.a.createElement(k.default,{mobile:!0},m.a.createElement(N,{symbol:t}))),viewOptions:{className:"pane__scroll"}}),e.unshift({id:x.INSTRUMENT_OVERVIEW,title:"instrument_info.tab.key_statistics",view:m.a.createElement(m.a.Fragment,null,m.a.createElement(k.default,{desktop:!0,tablet:!0},m.a.createElement("div",{className:"pane__scroll-content"},m.a.createElement(T.a,null,m.a.createElement(d.a,{symbol:t})))),m.a.createElement(k.default,{mobile:!0},m.a.createElement(d.a,{symbol:t}))),viewOptions:{className:"pane__scroll"}}),e}},{key:"render",value:function(){return m.a.createElement(p.a,{symbol:this.props.symbol,extendTabs:this.extendTabs})}}]),t}(m.a.Component);t.a=Object(f.connect)(I)(P)},2242:function(e,t,n){var a=n(2243);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(1959)(a,r);a.locals&&(e.exports=a.locals)},2243:function(e,t,n){t=e.exports=n(1958)(void 0),t.push([e.i,".financials-tab{width:100%;font-size:13px}.financials-tab__block{width:100%}.financials-tab__block:not(:last-child){margin-right:7px}html[dir=rtl] .financials-tab__block:not(:last-child){margin-right:0;margin-left:7px}.financials-tab__block--head{margin-bottom:10px}@media (max-width:1200px){.financials-tab__block{margin-bottom:10px}}.financials-tab__details{display:-webkit-flex;display:-ms-flexbox;display:flex}@media (max-width:991px){.financials-tab__details{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}@media (min-width:992px) and (max-width:1199px){.financials-tab__details{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.financials-tab__details .financials-tab__block{width:calc(50% - 3.5px)}.financials-tab__details .financials-tab__block:nth-child(2){margin-right:0}.financials-tab__details .financials-tab__block:last-child{width:100%}}",""])},2244:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n=t.symbol;return{hasData:Object(k.t)(e,n)}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n=t.symbol;return{blendsInstruments:Object(O.getBlendInstruments)(e,n)}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=n(1),p=n.n(_),d=n(2),y=n(17),E=n.n(y),v=n(2018),h=n(0),N=n.n(h),g=n(842),w=n(19),O=n(194),x=n(217),j=n(2111),T=n(2017),k=n(192),S=(n(2245),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),I=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),S(t,[{key:"render",value:function(){var e=this.props,t=e.symbol;return e.hasData?p.a.createElement("div",{className:"instrument-blends"},p.a.createElement("div",{className:"instrument-blends__column instrument-blends__column--instrument"},p.a.createElement(T.a,{symbol:t,className:"instrument-blends__instrument-image"}),p.a.createElement("div",{className:"fs-13 instrument-blends__instrument-content"},p.a.createElement(x.a,{symbol:t,className:"instrument-blends__instrument-name"}),p.a.createElement(j.a,{symbol:t,as:"div"}))),p.a.createElement("div",{className:"instrument-blends__column flex-column instrument-blends__column--consensus"},p.a.createElement("div",{className:"instrument-blends__consensus-content"},p.a.createElement(k.h,{symbol:t,className:"instrument-blends__consensus-text fs-13"}),p.a.createElement(k.a,{symbol:t,className:"instrument-blends__bar"})),p.a.createElement(k.e,{symbol:t,className:"instrument-blends__description"})),p.a.createElement("div",{className:"instrument-blends__column flex-column instrument-blends__column--price-target"},p.a.createElement(k.d,{symbol:t,showTitle:!1,className:"instrument-blends__avg-target-price"}),p.a.createElement(k.i,{symbol:t,className:"instrument-blends__description",showShortDescription:!0}))):null}}]),t}(p.a.Component),P=Object(d.connect)(l)(I),R=(n(2247),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),C=function(e){function t(){return s(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),R(t,[{key:"render",value:function(){var e=this.props.blendsInstruments;return p.a.createElement("div",{className:"insight-blends-tab"},w.default.tablet()?N.a.map(e,function(e,t){return p.a.createElement(P,{symbol:e.instrumentSymbol,key:t})}):p.a.createElement(g.a,{contentClassName:"insight-blends-tab__content",title:p.a.createElement("div",{className:"insight-blends-tab__title"},p.a.createElement("span",{className:"insight-blends-tab__title--instrument"},__("tipranks.text.share")),p.a.createElement("span",{className:"insight-blends-tab__title--consensus"},__("tipranks.text.analyst_consensus")),p.a.createElement("span",{className:"insight-blends-tab__title--price-target"},__("tipranks.text.price_target")))},N.a.map(e,function(e,t){return p.a.createElement(P,{symbol:e.instrumentSymbol,key:t})})))}}]),t}(p.a.Component),A=Object(d.connect)(u)(C),M=n(2019),U=(n(2249),function(e){var t=e.symbol;return p.a.createElement("div",{className:"performance-tab"},p.a.createElement(O.PerformanceChart,{symbol:t}))}),F=U,D=n(42),L=n(2025),B=n(2024),G=function(e){var t=e.symbol;return p.a.createElement("div",{className:"pane pane__fluid"},p.a.createElement(D.g,{desktop:!0},p.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile"},p.a.createElement("div",{className:"pane pane__row pane__fluid"},p.a.createElement("div",{className:"instrument-details__profile__description-wrapper"},p.a.createElement("div",{className:"instrument-details__profile__caption"},p.a.createElement(x.a,{as:"span",symbol:t})," ",__("instrument_info.profile")),p.a.createElement(L.a,{symbol:t,className:"instrument-details__profile__description",translationBaseKey:"blend.details",demand:!1})),p.a.createElement("div",{className:"pane pane__fluid instrument-details__profile__chart"},p.a.createElement(B.a,{key:t,symbol:t,className:"chart-box--not-full pane pane__fluid"}))))),p.a.createElement(D.g,{tablet:!0,mobile:!0},p.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile instrument-details__profile--mobile"},p.a.createElement("div",{className:"instrument-details__profile__caption"},p.a.createElement(x.a,{as:"span",symbol:t})," ",__("instrument_info.profile")),p.a.createElement("div",{className:"pane pane__column pane__fluid"},p.a.createElement(L.a,{symbol:t,className:"instrument-details__profile__description",translationBaseKey:"blend.details",demand:!1}),p.a.createElement("div",{className:"pane pane__fluid instrument-details__profile__chart"},p.a.createElement(B.a,{key:t,symbol:t,className:"chart-box--not-full pane pane__fluid"}))))))},W=G,H=n(2003),V=n(220),z=n.n(V),K=n(38),Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),J=function(e,t){var n=t.symbol;return{instrumentInsightsBlendsAvailable:Object(O.isInstrumentInsightsBlendsAvailable)(e,n),isPerformanceTabAvailable:Object(O.isBasketAvailable)(e,n)}},X=function(e){function t(e){m(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return E()(n),n}return b(t,e),Y(t,[{key:"extendTabs",value:function(e,t){return this.props.isPerformanceTabAvailable&&e.unshift({id:H.INSTRUMENT_PERFORMANCE,title:"blend.performance",view:p.a.createElement(p.a.Fragment,null,p.a.createElement(K.default,{desktop:!0,tablet:!0},p.a.createElement("div",{className:"pane__scroll-content"},p.a.createElement(z.a,null,p.a.createElement(F,{symbol:t})))),p.a.createElement(K.default,{mobile:!0},p.a.createElement(F,{symbol:t}))),viewOptions:{className:"pane__scroll"}}),e.unshift({id:H.INSTRUMENT_PROFILE,title:"instrument_info.tab.profile",view:p.a.createElement(p.a.Fragment,null,p.a.createElement(K.default,{desktop:!0,tablet:!0},p.a.createElement("div",{className:"pane__scroll-content"},p.a.createElement(z.a,null,p.a.createElement(W,{symbol:t})))),p.a.createElement(K.default,{mobile:!0},p.a.createElement(W,{symbol:t}))),viewOptions:{className:"pane__scroll"}}),this.props.instrumentInsightsBlendsAvailable&&e.unshift({id:H.INSTRUMENT_INSIGHT,title:"tab.insights",view:p.a.createElement(p.a.Fragment,null,p.a.createElement(K.default,{desktop:!0,tablet:!0},p.a.createElement("div",{className:"pane__scroll-content"},p.a.createElement(z.a,null,p.a.createElement(A,{symbol:t})))),p.a.createElement(K.default,{mobile:!0},p.a.createElement(A,{symbol:t}))),viewOptions:{className:"pane__scroll"}}),e.unshift({id:H.INSTRUMENT_OVERVIEW,title:"instrument_info.tab.key_statistics",view:p.a.createElement(p.a.Fragment,null,p.a.createElement(K.default,{desktop:!0,tablet:!0},p.a.createElement("div",{className:"pane__scroll-content"},p.a.createElement(z.a,null,p.a.createElement(M.a,{symbol:t})))),p.a.createElement(K.default,{mobile:!0},p.a.createElement(M.a,{symbol:t}))),viewOptions:{className:"pane__scroll"}}),e}},{key:"render",value:function(){return p.a.createElement(v.a,{symbol:this.props.symbol,extendTabs:this.extendTabs})}}]),t}(p.a.Component);t.a=Object(d.connect)(J)(X)},2245:function(e,t,n){var a=n(2246);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(1959)(a,r);a.locals&&(e.exports=a.locals)},2246:function(e,t,n){t=e.exports=n(1958)(void 0),t.push([e.i,".instrument-blends{display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px 10px}@media (max-width:768px){.instrument-blends{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.instrument-blends:not(:last-child){margin-bottom:8px}}.instrument-blends:not(:last-child){border-bottom:1px solid}.instrument-blends__column{display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:10px}@media (max-width:768px){.instrument-blends__column{margin-bottom:15px}}.instrument-blends__column--instrument{-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:15%}@media (max-width:768px){.instrument-blends__column--instrument{width:100%}}.instrument-blends__column--consensus{width:40%;padding-right:50px}@media (max-width:768px){.instrument-blends__column--consensus{width:100%}}html[dir=rtl] .instrument-blends__column--consensus{padding-right:0;padding-left:50px}.instrument-blends__column--price-target{width:45%}@media (max-width:768px){.instrument-blends__column--price-target{width:100%}}.instrument-blends__consensus-text{margin-right:10px;min-width:15%}html[dir=rtl] .instrument-blends__consensus-text{margin-right:0;margin-left:10px}@media (max-width:768px){.instrument-blends__consensus-text{margin-bottom:20px}}.instrument-blends__bar{width:100%}.instrument-blends__instrument-name{font-weight:700}@media (max-width:768px){.instrument-blends__instrument-name{margin-right:10px}html[dir=rtl] .instrument-blends__instrument-name{margin-right:0;margin-left:10px}}.instrument-blends__instrument-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}@media (max-width:768px){.instrument-blends__instrument-content{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}.instrument-blends__consensus-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}@media (max-width:768px){.instrument-blends__consensus-content{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}}.instrument-blends__instrument-image{margin-right:18px}.instrument-blends__avg-target-price .avg-target-price__price{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;line-height:1}.instrument-blends__avg-target-price .avg-target-price__avg-price{font-size:19px}.instrument-blends__avg-target-price .avg-target-price__avg{font-size:13px}.instrument-blends__description{margin-top:5px}",""])},2247:function(e,t,n){var a=n(2248);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(1959)(a,r);a.locals&&(e.exports=a.locals)},2248:function(e,t,n){t=e.exports=n(1958)(void 0),t.push([e.i,".insight-blends-tab{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding-top:12px}.insight-blends-tab__content{padding:0}.insight-blends-tab__title{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.insight-blends-tab__title--instrument{width:15%}.insight-blends-tab__title--consensus{width:40%}.insight-blends-tab__title--price-target{width:45%}",""])},2249:function(e,t,n){var a=n(2250);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(1959)(a,r);a.locals&&(e.exports=a.locals)},2250:function(e,t,n){t=e.exports=n(1958)(void 0),t.push([e.i,".performance-tab{width:100%}",""])},2685:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),l=n(11),s=n.n(l),o=n(2032),c=n(2244),u=function(e){var t=e.className,n=e.symbol,r=s()(a({"instrument-details":!0,"instrument-details--tablet":!0,pane:!0,pane__xfluid:!0,pane__yfluid:!0},t,!!t));return i.a.createElement("div",{className:r},i.a.createElement(o.a,{symbol:n}),i.a.createElement(c.a,{symbol:n}))};t.default=u},2842:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),l=n(11),s=n.n(l),o=n(2032),c=n(2241),u=function(e){var t=e.className,n=e.symbol,r=s()(a({"instrument-details":!0,"instrument-details--tablet":!0,pane:!0,pane__xfluid:!0,pane__yfluid:!0},t,!!t));return i.a.createElement("div",{className:r},i.a.createElement(o.a,{symbol:n}),i.a.createElement(c.a,{symbol:n}))};t.default=u}});