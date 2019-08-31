webpackJsonp([57],{2e3:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.as,a=void 0===n?"span":n,r=t.symbol;return{value:Object(l.getInstrumentDescription)(e,r),as:a}}var o=n(1),i=n.n(o),s=n(2),l=n(31),c=function(e){var t=e.value,n=(e.symbol,e.dispatch,a(e,["value","symbol","dispatch"]));return i.a.createElement(n.as,n,t)};t.a=Object(s.connect)(r)(c)},2002:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"INSTRUMENT_ORDER",function(){return a}),n.d(t,"INSTRUMENT_OPEN_POSITIONS",function(){return r}),n.d(t,"INSTRUMENT_CHART",function(){return o}),n.d(t,"INSTRUMENT_OVERVIEW",function(){return i}),n.d(t,"RELATED_INSTRUMENTS",function(){return s}),n.d(t,"INSTRUMENT_PROFILE",function(){return l}),n.d(t,"INSTRUMENT_CONVERTER",function(){return c}),n.d(t,"INSTRUMENT_EVENTS",function(){return u}),n.d(t,"INSTRUMENT_INSIGHT",function(){return m}),n.d(t,"INSTRUMENT_FINANCIALS",function(){return p}),n.d(t,"INSTRUMENT_PERFORMANCE",function(){return f}),n.d(t,"INSTRUMENT_NEWS",function(){return b}),n.d(t,"CLOSE_ALL_POSITIONS",function(){return d}),n.d(t,"CANCEL_ALL_ORDERS",function(){return y});var a="instrument-order",r="instrument-open-positions",o="instrument-chart",i="instrument-overview",s="related-instruments",l="instrument-profile",c="instrument-converter",u="instrument-events",m="instrument-insight",p="instrument-financials",f="instrument-performance",b="instrument-news",d="close-all-positions",y="cancel-all-orders"},2003:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){var n=t.symbol;return{categoryName:Object(c.getInstrumentCategory)(e,n)}}var i=n(1),s=n.n(i),l=n(2),c=n(31),u=n(5),m=n(2017),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f=function(e){var t=e.category,n=a(e,["category"]);n.as=n.as||"div";var r="icon-"+t+"-ico fs-30 instrument-details-no-image";return s.a.createElement(n.as,p({className:r},n))};f.defaultProps={category:"no-category"};var b=f,d=function(e){var t=e.symbol,n=e.categoryName,a=r(e,["symbol","categoryName"]),o=u.INSTRUMENT_CATEGORIES.BONDS,i=u.INSTRUMENT_CATEGORIES.INDEX,l=u.INSTRUMENT_CATEGORIES.ETFS,c=n.split(".")[0].toLowerCase(),p=c===o||c===l||c===i?s.a.createElement(b,{category:c}):s.a.createElement(m.a,{symbol:t});return s.a.createElement(a.as,null,p)};d.defaultProps={as:"span"};t.a=Object(l.connect)(o)(d)},2004:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){var n=t.symbol,a=t.as,r=void 0===a?"span":a,o=t.up,i=void 0===o?"up":o,s=t.down,l=void 0===s?"down":s,c=Object(m.getInstrumentChange)(e,n);return{value:c?c.change:"",sign:c?c.sign:"",dir:c?c.dir:0,as:r,up:i,down:l}}var i=n(1),s=n.n(i),l=n(2),c=n(11),u=n.n(c),m=n(31),p=function(e){var t,n=e.value,o=e.sign,i=e.dir,l=e.up,c=e.down,m=e.className,p=e.showDir,f=r(e,["value","sign","dir","up","down","className","showDir"]),b=u()((t={},a(t,l,p&&i>0),a(t,c,p&&i<0),a(t,m,!!m),t));return s.a.createElement(f.as,{className:b},n?o+n:0)};t.a=Object(l.connect)(o)(p)},2005:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){var n=t.symbol,a=t.as,r=void 0===a?"span":a;return{instrumentAvailable:Object(m.isInstrumentTradable)(e,n),isOTH:Object(m.isInstrumentOTH)(e,n),as:r}}var i=n(1),s=n.n(i),l=n(2),c=n(11),u=n.n(c),m=n(31),p=function(e){var t=e.instrumentAvailable,n=e.isOTH,o=e.className,i=r(e,["instrumentAvailable","isOTH","className"]),l=u()(a({"instrument-availability":!0},o,!!o)),c=u()({"instrument-availability__icon":!0,"instrument-availability__icon--available":t,"instrument-availability__icon--not-available":!t&&!n,"instrument-availability__icon--pending-orders":!t&&n}),m="instrument_info.available_for_trading";return t||n||(m="instrument_info.not_available_for_trading"),!t&&n&&(m="instrument.info.trading.outside_of_trading_hours"),s.a.createElement(i.as,{className:l},s.a.createElement("i",{className:c}),__(m))};t.a=Object(l.connect)(o)(p)},2006:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(289),o=n(292),i=n(293),s=n(1),l=n.n(s),c=n(11),u=n.n(c),m=function(e){var t=e.symbol,n=e.onClick,s=e.className;return l.a.createElement(o.a,{as:"div",symbol:t,className:u()(a({"button price-button price-button_ani price-button_labeled autotests-instrument-details-action-buy":!0},s,!!s))},l.a.createElement(i.a,{className:"price-button__wrapper btn",onClick:n,symbol:t},l.a.createElement("div",{className:"price-button__subtitle"},__("actions.buy")),l.a.createElement("div",{className:"price-button__title price-button__title_self-end"},l.a.createElement(r.a,{as:"span",symbol:t}))))};t.a=m},2007:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(294),o=n(295),i=n(296),s=n(1),l=n.n(s),c=n(11),u=n.n(c),m=function(e){var t=e.symbol,n=e.onClick,s=e.className;return l.a.createElement(o.a,{as:"div",symbol:t,className:u()(a({"button price-button price-button_ani price-button_labeled autotests-instrument-details-action-sell":!0},s,!!s))},l.a.createElement(i.a,{className:"price-button__wrapper btn",onClick:n,symbol:t},l.a.createElement("div",{className:"price-button__subtitle"},__("actions.sell")),l.a.createElement("div",{className:"price-button__title price-button__title_self-end"},l.a.createElement(r.a,{as:"span",symbol:t}))))};t.a=m},2008:function(e,t,n){"use strict";var a=n(836);n.d(t,"a",function(){return a.a});var r=n(837);n.d(t,"b",function(){return r.a})},2009:function(e,t,n){"use strict";(function(e){function a(e,t){var n=(t.symbol,t.as);return{timestamp:e.instruments.instrumentLastQuoteTime,as:n||"span"}}var r=n(192),o=n(1),i=n.n(o),s=n(12),l=n.n(s),c=n(2),u=n(3),m=n.n(u),p=n(4),f=(n.n(p),n(95)),b=n.n(f);t.a=Object(c.connect)(a)(l()({getConfig:function(e){return[{aggregationPeriod:{name:"1m",seconds:60,intraday:!1},expansionBarsCount:0,extendedHours:!1,forexPriceField:"bid",id:"instrument-last-quote-time-"+e,maxBarsCount:1,range:{name:"170 Years",duration:5375808e3,defaultAggregationPeriod:{name:"1m",seconds:60,intraday:!1}},studySubscription:[],subtopic:"instrument-last-quote-time-"+e,symbol:e,updateInterval:3e3}]},componentDidMount:function(){this.update(this.props.symbol)},componentWillUnmount:function(){m.a.off("stream:type:chartFeedSubtopic",this.onWSFeed,this)},componentWillUpdate:function(e){e.symbol!==this.props.symbol&&(this.update(e.symbol),this.props.dispatch(Object(r.setInstrumentLastQuoteTime)(null)))},update:function(e){m.a.on("stream:type:chartFeedSubtopic",this.onWSFeed,this),this.props.dispatch(Object(r.subscribeChartFeed)(this.getConfig(e)))},onWSFeed:function(t){if(e.isObject(t)){var n="instrument-last-quote-time-"+this.props.symbol;t.historyRequestID===n&&(t.data&&t.data.length>0&&this.props.dispatch(Object(r.setInstrumentLastQuoteTime)(t.data[0].timestamp)),this.props.dispatch(Object(r.unsubscribeChartFeed)([n])),m.a.off("stream:type:chartFeedSubtopic",this.onWSFeed,this))}},render:function(){var e=this.props,t=(e.dispatch,e.children,e.timestamp),n=e.format,a=e.className,r=e.pre,o=e.post,s=b.a.user;return t&&t>0?i.a.createElement(e.as,{className:a},r+s.applyOffsetToTimestamp(t,n)+" ("+s.GMTPostfix()+")"+o):null}}))}).call(t,n(0))},2017:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}var o=n(1),i=n.n(o),s=n(11),l=n.n(s),c=n(55),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m=function(e){var t,n=e.symbol,o=e.className,s=r(e,["symbol","className"]);if(!n||"string"!=typeof n)return null;var m=Object(c.transformSBSymbolToSymbol)(n).replace("/","").toLowerCase()||"";s.as=s.as||"div";var p=l()((t={},a(t,"instrument-img instrument-img-"+m,!0),a(t,o,!!o),t));return i.a.createElement(s.as,u({className:p},s))};t.a=m},2018:function(e,t,n){"use strict";var a=n(138);t.a=Object(a.a)(function(){return n.e(49).then(n.bind(null,2064))})},2019:function(e,t,n){"use strict";function a(e,t){var n=t.symbol;return n||(n=Object(c.getInstrumentDetailsSymbol)(e)),{symbol:n,type:Object(u.getInstrumentType)(e,n),category:Object(u.getInstrumentCategory)(e,n)}}var r=n(1),o=n.n(r),i=n(2),s=n(138),l=n(5),c=n(71),u=n(31),m=Object(s.a)(function(){return n.e(51).then(n.bind(null,2069))}),p=Object(s.a)(function(){return n.e(53).then(n.bind(null,2072))}),f=Object(s.a)(function(){return n.e(54).then(n.bind(null,2073))}),b=Object(s.a)(function(){return n.e(50).then(n.bind(null,2074))}),d=Object(s.a)(function(){return n.e(60).then(n.bind(null,2075))});t.a=Object(i.connect)(a)(function(e){var t=e.symbol,n=(e.type,e.category);return n=n.toLowerCase(),n.startsWith(l.INSTRUMENT_CATEGORIES.CURRENCY)?o.a.createElement(m,{symbol:t}):n.startsWith(l.INSTRUMENT_CATEGORIES.CRYPTO)?o.a.createElement(b,{symbol:t}):n.startsWith(l.INSTRUMENT_CATEGORIES.SHARES)?o.a.createElement(p,{symbol:t}):n.startsWith(l.INSTRUMENT_CATEGORIES.BLENDS)?o.a.createElement(d,{symbol:t}):o.a.createElement(f,{symbol:t})})},2024:function(e,t,n){"use strict";var a=n(138);t.a=Object(a.a)(function(){return n.e(48).then(n.bind(null,2089))})},2025:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n(1),l=n.n(s),c=n(11),u=n.n(c),m=n(72),p=n.n(m),f=n(25),b=n.n(f),d=n(9),y=n.n(d),_=n(5),E=n(0),v=n.n(E),N=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){return function(t){return function(n){function i(){var e,t,n,o;a(this,i);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return t=n=r(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(l))),n.state={status:_.PENDING},n._isMounted=!1,o=t,r(n,o)}return o(i,n),N(i,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){var t=this,n=v.a.asStringArray(e),a=v.a.reject(n,b.a.hasTranslationKey);if(v.a.isEmpty(a))return void this.setState({status:_.SUCCESS});this._isMounted=!0,y.a.loadDictionaryOnDemand(b.a.getCurrentLanguage(),a).then(function(e){var n=e.data;v.a.isEmpty(n)&&(n=v.a.object(a,Array(a.length))),b.a.mergeDictionaryOnDemand(n),t._isMounted&&t.setState({status:_.SUCCESS})}).catch(function(){t._isMounted&&t.setState({status:_.ERROR})})}},{key:"render",value:function(){return this.state.status===_.PENDING?null:l.a.createElement(t,this.props)}}]),i}(l.a.Component)}},O=h,w=n(55),S=function(e){var t=e.symbol,n=e.className,a=e.demand,r=void 0===a||a,o=e.translationBaseKey,s=void 0===o?"instrument_info.profile.description":o;if(!t||"string"!=typeof t)return null;var c=u()(i({"profile-description":!0},n,!!n)),m=Object(w.transformSBSymbolToSymbol)(t).replace("/",""),f=(r?"on_demand.":"")+s+"."+m,b=function(){return l.a.createElement("div",{className:c},p()(__(f)))};if(!r)return l.a.createElement(b,null);var d=O(f)(b);return l.a.createElement(d,null)};t.a=S},2033:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{isNewsFeedEnabled:Object(b.isNewsFeedEnabled)(e),isNewsAlertEnabled:Object(b.isAcuityNewsSentimentEnabled)(e)}}function s(e){return{loadNewsAlertsBySymbol:function(t){return e(Object(u.d)(t))},loadNewsBySymbol:function(t){return e(Object(m.loadNews)(t,!1,!1))},loadSentimentBySymbol:function(t){return e(Object(u.m)(t))},checkIfNewsSentimentEnabled:function(){return e(Object(f.checkNewsSentimentEnabled)())},checkIfNewsAlertsEnabled:function(){return e(Object(f.checkAcuityNewsSentimentEnabled)())},checkIfNewsFeedEnabled:function(){return e(Object(f.checkNewsFeedEnabled)())}}}var l=n(1),c=n.n(l),u=n(832),m=n(431),p=n(2),f=n(298),b=n(85),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=function(e){var t=function(t){function n(){var e,t,o,i;a(this,n);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return t=o=r(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),o.componentDidMount=function(){var e=o.props.symbol;o.props.isNewsAlertEnabled&&o.props.loadNewsAlertsBySymbol(e),o.props.isNewsFeedEnabled&&o.props.loadNewsBySymbol(e),o.props.loadSentimentBySymbol(e),o.props.checkIfNewsSentimentEnabled(),o.props.checkIfNewsAlertsEnabled(),o.props.checkIfNewsFeedEnabled()},i=t,r(o,i)}return o(n,t),d(n,[{key:"componentWillReceiveProps",value:function(e){e.isNewsFeedEnabled&&e.isNewsFeedEnabled!==this.props.isNewsFeedEnabled&&this.props.loadNewsBySymbol(e.symbol),e.isNewsFeedEnabled&&e.symbol!==this.props.symbol&&this.props.loadNewsBySymbol(e.symbol),e.isNewsAlertEnabled!==this.props.isNewsAlertEnabled&&e.isNewsAlertEnabled&&this.props.loadNewsAlertsBySymbol(e.symbol),e.isNewsAlertEnabled&&e.symbol!==this.props.symbol&&(this.props.loadNewsAlertsBySymbol(e.symbol),this.props.loadSentimentBySymbol(e.symbol))}},{key:"render",value:function(){return c.a.createElement(e,this.props)}}]),n}(c.a.Component);return Object(p.connect)(i,s)(t)};t.a=y},2088:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(41),i=n(2024),s=n(218),l=n(2025),c=function(e){var t=e.symbol;return r.a.createElement("div",{className:"pane pane__fluid"},r.a.createElement(o.g,{desktop:!0},r.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile"},r.a.createElement("div",{className:"pane pane__row pane__fluid"},r.a.createElement("div",{className:"instrument-details__profile__description-wrapper"},r.a.createElement("div",{className:"instrument-details__profile__caption"},r.a.createElement(s.a,{as:"span",symbol:t})," ",__("instrument_info.profile")),r.a.createElement(l.a,{symbol:t,className:"instrument-details__profile__description"})),r.a.createElement("div",{className:"pane pane__fluid instrument-details__profile__chart"},r.a.createElement(i.a,{key:t,symbol:t,className:"chart-box--not-full pane pane__fluid"}))))),r.a.createElement(o.g,{tablet:!0,mobile:!0},r.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile instrument-details__profile--mobile"},r.a.createElement("div",{className:"instrument-details__profile__caption"},r.a.createElement(s.a,{as:"span",symbol:t})," ",__("instrument_info.profile")),r.a.createElement("div",{className:"pane pane__column pane__fluid"},r.a.createElement(l.a,{symbol:t,className:"instrument-details__profile__description"}),r.a.createElement("div",{className:"pane pane__fluid instrument-details__profile__chart"},r.a.createElement(i.a,{key:t,symbol:t,className:"chart-box--not-full pane pane__fluid"}))))))};t.a=c},2391:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),s=n.n(i),l=n(2018),c=n(2019),u=n(2088),m=n(2002),p=n(220),f=n.n(p),b=n(38),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),d(t,[{key:"extendTabs",value:function(e,t){return e.unshift({id:m.INSTRUMENT_PROFILE,title:"instrument_info.tab.profile",view:s.a.createElement(s.a.Fragment,null,s.a.createElement(b.default,{desktop:!0,tablet:!0},s.a.createElement("div",{className:"pane__scroll-content"},s.a.createElement(f.a,null,s.a.createElement(u.a,{symbol:t})))),s.a.createElement(b.default,{mobile:!0},s.a.createElement(u.a,{symbol:t}))),viewOptions:{className:"pane__scroll"}}),e.unshift({id:m.INSTRUMENT_OVERVIEW,title:"instrument_info.tab.key_statistics",view:s.a.createElement(s.a.Fragment,null,s.a.createElement(b.default,{desktop:!0,tablet:!0},s.a.createElement("div",{className:"pane__scroll-content"},s.a.createElement(f.a,null,s.a.createElement(c.a,{symbol:t})))),s.a.createElement(b.default,{mobile:!0},s.a.createElement(c.a,{symbol:t}))),viewOptions:{className:"pane__scroll"}}),e}},{key:"render",value:function(){return s.a.createElement(l.a,{symbol:this.props.symbol,extendTabs:this.extendTabs})}}]),t}(s.a.Component);t.a=y},2617:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=n.n(a),o=n(38),i=n(138),s=n(2033),l=Object(i.a)(function(){return n.e(83).then(n.bind(null,2695))}),c=Object(i.a)(function(){return n.e(76).then(n.bind(null,2696))}),u=Object(i.a)(function(){return n.e(69).then(n.bind(null,2697))}),m=function(e){var t=e.className,n=e.symbol;return r.a.createElement("div",{className:"pane pane__xfluid pane__yfluid"},r.a.createElement(o.default,{desktop:!0},r.a.createElement(l,{symbol:n,className:t})),r.a.createElement(o.default,{tablet:!0},r.a.createElement(u,{symbol:n,className:t})),r.a.createElement(o.default,{mobile:!0},r.a.createElement(c,{symbol:n,className:t})))};t.default=Object(s.a)(m)}});