webpackJsonp([52],{2107:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.as,r=void 0===n?"span":n,a=t.symbol;return{value:Object(c.getInstrumentDescription)(e,a),as:r}}var i=n(1),o=n.n(i),s=n(2),c=n(32),l=function(e){var t=e.value,n=(e.symbol,e.dispatch,r(e,["value","symbol","dispatch"]));return o.a.createElement(n.as,n,t)};t.a=Object(s.connect)(a)(l)},2109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"INSTRUMENT_ORDER",function(){return r}),n.d(t,"INSTRUMENT_OPEN_POSITIONS",function(){return a}),n.d(t,"INSTRUMENT_CHART",function(){return i}),n.d(t,"INSTRUMENT_OVERVIEW",function(){return o}),n.d(t,"RELATED_INSTRUMENTS",function(){return s}),n.d(t,"INSTRUMENT_PROFILE",function(){return c}),n.d(t,"INSTRUMENT_CONVERTER",function(){return l}),n.d(t,"INSTRUMENT_EVENTS",function(){return u}),n.d(t,"INSTRUMENT_INSIGHT",function(){return m}),n.d(t,"INSTRUMENT_FINANCIALS",function(){return d}),n.d(t,"INSTRUMENT_PERFORMANCE",function(){return p}),n.d(t,"INSTRUMENT_NEWS",function(){return f}),n.d(t,"CLOSE_ALL_POSITIONS",function(){return b}),n.d(t,"CANCEL_ALL_ORDERS",function(){return y});var r="instrument-order",a="instrument-open-positions",i="instrument-chart",o="instrument-overview",s="related-instruments",c="instrument-profile",l="instrument-converter",u="instrument-events",m="instrument-insight",d="instrument-financials",p="instrument-performance",f="instrument-news",b="close-all-positions",y="cancel-all-orders"},2110:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){var n=t.symbol;return{categoryName:Object(l.getInstrumentCategory)(e,n)}}var o=n(1),s=n.n(o),c=n(2),l=n(32),u=n(5),m=n(2124),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(e){var t=e.category,n=r(e,["category"]);n.as=n.as||"div";var a="icon-"+t+"-ico fs-30 instrument-details-no-image";return s.a.createElement(n.as,d({className:a},n))};p.defaultProps={category:"no-category"};var f=p,b=function(e){var t=e.symbol,n=e.categoryName,r=a(e,["symbol","categoryName"]),i=u.INSTRUMENT_CATEGORIES.BONDS,o=u.INSTRUMENT_CATEGORIES.INDEX,c=u.INSTRUMENT_CATEGORIES.ETFS,l=n.split(".")[0].toLowerCase(),d=l===i||l===c||l===o?s.a.createElement(f,{category:l}):s.a.createElement(m.a,{symbol:t});return s.a.createElement(r.as,null,d)};b.defaultProps={as:"span"};t.a=Object(c.connect)(i)(b)},2111:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r,i=t.up,o=void 0===i?"up":i,s=t.down,c=void 0===s?"down":s,l=Object(m.getInstrumentChange)(e,n);return{value:l?l.change:"",sign:l?l.sign:"",dir:l?l.dir:0,as:a,up:o,down:c}}var o=n(1),s=n.n(o),c=n(2),l=n(11),u=n.n(l),m=n(32),d=function(e){var t,n=e.value,i=e.sign,o=e.dir,c=e.up,l=e.down,m=e.className,d=e.showDir,p=a(e,["value","sign","dir","up","down","className","showDir"]),f=u()((t={},r(t,c,d&&o>0),r(t,l,d&&o<0),r(t,m,!!m),t));return s.a.createElement(p.as,{className:f},n?i+n:0)};t.a=Object(c.connect)(i)(d)},2112:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r;return{instrumentAvailable:Object(m.isInstrumentTradable)(e,n),isOTH:Object(m.isInstrumentOTH)(e,n),as:a}}var o=n(1),s=n.n(o),c=n(2),l=n(11),u=n.n(l),m=n(32),d=function(e){var t=e.instrumentAvailable,n=e.isOTH,i=e.className,o=a(e,["instrumentAvailable","isOTH","className"]),c=u()(r({"instrument-availability":!0},i,!!i)),l=u()({"instrument-availability__icon":!0,"instrument-availability__icon--available":t,"instrument-availability__icon--not-available":!t&&!n,"instrument-availability__icon--pending-orders":!t&&n}),m="instrument_info.available_for_trading";return t||n||(m="instrument_info.not_available_for_trading"),!t&&n&&(m="instrument.info.trading.outside_of_trading_hours"),s.a.createElement(o.as,{className:c},s.a.createElement("i",{className:l}),__(m))};t.a=Object(c.connect)(i)(d)},2113:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(312),i=n(315),o=n(316),s=n(1),c=n.n(s),l=n(11),u=n.n(l),m=function(e){var t=e.symbol,n=e.onClick,s=e.className;return c.a.createElement(i.a,{as:"div",symbol:t,className:u()(r({"button price-button price-button_ani price-button_labeled autotests-instrument-details-action-buy":!0},s,!!s))},c.a.createElement(o.a,{className:"price-button__wrapper btn",onClick:n,symbol:t},c.a.createElement("div",{className:"price-button__subtitle"},__("actions.buy")),c.a.createElement("div",{className:"price-button__title price-button__title_self-end"},c.a.createElement(a.a,{as:"span",symbol:t}))))};t.a=m},2114:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(317),i=n(318),o=n(319),s=n(1),c=n.n(s),l=n(11),u=n.n(l),m=function(e){var t=e.symbol,n=e.onClick,s=e.className;return c.a.createElement(i.a,{as:"div",symbol:t,className:u()(r({"button price-button price-button_ani price-button_labeled autotests-instrument-details-action-sell":!0},s,!!s))},c.a.createElement(o.a,{className:"price-button__wrapper btn",onClick:n,symbol:t},c.a.createElement("div",{className:"price-button__subtitle"},__("actions.sell")),c.a.createElement("div",{className:"price-button__title price-button__title_self-end"},c.a.createElement(a.a,{as:"span",symbol:t}))))};t.a=m},2115:function(e,t,n){"use strict";var r=n(883);n.d(t,"a",function(){return r.a});var a=n(884);n.d(t,"b",function(){return a.a})},2116:function(e,t,n){"use strict";(function(e){function r(e,t){var n=(t.symbol,t.as);return{timestamp:e.instruments.instrumentLastQuoteTime,as:n||"span"}}var a=n(204),i=n(1),o=n.n(i),s=n(12),c=n.n(s),l=n(2),u=n(3),m=n.n(u),d=n(4),p=(n.n(d),n(95)),f=n.n(p);t.a=Object(l.connect)(r)(c()({getConfig:function(e){return[{aggregationPeriod:{name:"1m",seconds:60,intraday:!1},expansionBarsCount:0,extendedHours:!1,forexPriceField:"bid",id:"instrument-last-quote-time-"+e,maxBarsCount:1,range:{name:"170 Years",duration:5375808e3,defaultAggregationPeriod:{name:"1m",seconds:60,intraday:!1}},studySubscription:[],subtopic:"instrument-last-quote-time-"+e,symbol:e,updateInterval:3e3}]},componentDidMount:function(){this.update(this.props.symbol)},componentWillUnmount:function(){m.a.off("stream:type:chartFeedSubtopic",this.onWSFeed,this)},componentWillUpdate:function(e){e.symbol!==this.props.symbol&&(this.update(e.symbol),this.props.dispatch(Object(a.setInstrumentLastQuoteTime)(null)))},update:function(e){m.a.on("stream:type:chartFeedSubtopic",this.onWSFeed,this),this.props.dispatch(Object(a.subscribeChartFeed)(this.getConfig(e)))},onWSFeed:function(t){if(e.isObject(t)){var n="instrument-last-quote-time-"+this.props.symbol;t.historyRequestID===n&&(t.data&&t.data.length>0&&this.props.dispatch(Object(a.setInstrumentLastQuoteTime)(t.data[0].timestamp)),this.props.dispatch(Object(a.unsubscribeChartFeed)([n])),m.a.off("stream:type:chartFeedSubtopic",this.onWSFeed,this))}},render:function(){var e=this.props,t=(e.dispatch,e.children,e.timestamp),n=e.format,r=e.className,a=e.pre,i=e.post,s=f.a.user;return t&&t>0?o.a.createElement(e.as,{className:r},a+s.applyOffsetToTimestamp(t,n)+" ("+s.GMTPostfix()+")"+i):null}}))}).call(t,n(0))},2117:function(e,t,n){"use strict";n.d(t,"j",function(){return d}),n.d(t,"i",function(){return f}),n.d(t,"k",function(){return b}),n.d(t,"h",function(){return y}),n.d(t,"a",function(){return _}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return h}),n.d(t,"g",function(){return x}),n.d(t,"d",function(){return E}),n.d(t,"e",function(){return w}),n.d(t,"f",function(){return O});var r=n(30),a=n(0),i=n.n(a),o=n(5),s=n(57),c=(n(32),function(e){return e.eventsAndTrade}),l=Object(r.a)(c,function(e){return e&&e.enabled}),u=Object(r.a)(c,function(e){return e&&e.status}),m=Object(r.a)(c,function(e){return e&&e.events}),d=(Object(r.a)([l,u,m],function(e,t,n){return e&&t===o.SUCCESS&&!i.a.isEmpty(n)}),Object(r.a)(c,function(e){return e&&e.symbolToEventMap})),p=Object(r.a)(c,function(e){return e&&e.upcoming}),f=Object(r.a)(c,function(e){return e&&e.openedInsightsRows}),b=Object(r.a)([p,s.a],function(e,t){return e[t]}),y=Object(r.a)([d,s.a],function(e,t){return e[t&&t.replace("/","")]}),v=Object(r.a)([m,s.a],function(e,t){return e[t]}),_=Object(r.a)(v,function(e){return e._formatedDate}),g=Object(r.a)(v,function(e){return e._description}),h=Object(r.a)(v,function(e){return e._flag}),x=Object(r.a)(v,function(e){return e._timestamp}),E=Object(r.a)(v,function(e){return e._name}),w=Object(r.a)(v,function(e){return e._opportunitiesQuantity}),O=Object(r.a)(v,function(e){return e._prediction})},2124:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var i=n(1),o=n.n(i),s=n(11),c=n.n(s),l=n(60),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function(e){var t,n=e.symbol,i=e.className,s=a(e,["symbol","className"]);if(!n||"string"!=typeof n)return null;var m=Object(l.transformSBSymbolToSymbol)(n).replace("/","").toLowerCase()||"";s.as=s.as||"div";var d=c()((t={},r(t,"instrument-img instrument-img-"+m,!0),r(t,i,!!i),t));return o.a.createElement(s.as,u({className:d},s))};t.a=m},2125:function(e,t,n){"use strict";var r=n(145);t.a=Object(r.a)(function(){return n.e(49).then(n.bind(null,2171))})},2126:function(e,t,n){"use strict";function r(e,t){var n=t.symbol;return n||(n=Object(l.getInstrumentDetailsSymbol)(e)),{symbol:n,type:Object(u.getInstrumentType)(e,n),category:Object(u.getInstrumentCategory)(e,n)}}var a=n(1),i=n.n(a),o=n(2),s=n(145),c=n(5),l=n(70),u=n(32),m=Object(s.a)(function(){return n.e(51).then(n.bind(null,2176))}),d=Object(s.a)(function(){return n.e(53).then(n.bind(null,2179))}),p=Object(s.a)(function(){return n.e(54).then(n.bind(null,2180))}),f=Object(s.a)(function(){return n.e(50).then(n.bind(null,2181))}),b=Object(s.a)(function(){return n.e(60).then(n.bind(null,2182))});t.a=Object(o.connect)(r)(function(e){var t=e.symbol,n=(e.type,e.category);return n=n.toLowerCase(),n.startsWith(c.INSTRUMENT_CATEGORIES.CURRENCY)?i.a.createElement(m,{symbol:t}):n.startsWith(c.INSTRUMENT_CATEGORIES.CRYPTO)?i.a.createElement(f,{symbol:t}):n.startsWith(c.INSTRUMENT_CATEGORIES.SHARES)?i.a.createElement(d,{symbol:t}):n.startsWith(c.INSTRUMENT_CATEGORIES.BLENDS)?i.a.createElement(b,{symbol:t}):i.a.createElement(p,{symbol:t})})},2131:function(e,t,n){"use strict";var r=n(145);t.a=Object(r.a)(function(){return n.e(48).then(n.bind(null,2196))})},2132:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n(1),c=n.n(s),l=n(11),u=n.n(l),m=n(71),d=n.n(m),p=n(26),f=n.n(p),b=n(9),y=n.n(b),v=n(5),_=n(0),g=n.n(_),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x=function(e){return function(t){return function(n){function o(){var e,t,n,i;r(this,o);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return t=n=a(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(c))),n.state={status:v.PENDING},n._isMounted=!1,i=t,a(n,i)}return i(o,n),h(o,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){var t=this,n=g.a.asStringArray(e),r=g.a.reject(n,f.a.hasTranslationKey);if(g.a.isEmpty(r))return void this.setState({status:v.SUCCESS});this._isMounted=!0,y.a.loadDictionaryOnDemand(f.a.getCurrentLanguage(),r).then(function(e){var n=e.data;g.a.isEmpty(n)&&(n=g.a.object(r,Array(r.length))),f.a.mergeDictionaryOnDemand(n),t._isMounted&&t.setState({status:v.SUCCESS})}).catch(function(){t._isMounted&&t.setState({status:v.ERROR})})}},{key:"render",value:function(){return this.state.status===v.PENDING?null:c.a.createElement(t,this.props)}}]),o}(c.a.Component)}},E=x,w=n(60),O=function(e){var t=e.symbol,n=e.className,r=e.demand,a=void 0===r||r,i=e.translationBaseKey,s=void 0===i?"instrument_info.profile.description":i;if(!t||"string"!=typeof t)return null;var l=u()(o({"profile-description":!0},n,!!n)),m=Object(w.transformSBSymbolToSymbol)(t).replace("/",""),p=(a?"on_demand.":"")+s+"."+m,f=function(){return c.a.createElement("div",{className:l},d()(__(p)))};if(!a)return c.a.createElement(f,null);var b=E(p)(f);return c.a.createElement(b,null)};t.a=O},2140:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return{isNewsFeedEnabled:Object(f.isNewsFeedEnabled)(e),isNewsAlertEnabled:Object(f.isAcuityNewsSentimentEnabled)(e)}}function s(e){return{loadNewsAlertsBySymbol:function(t){return e(Object(u.d)(t))},loadNewsBySymbol:function(t){return e(Object(m.loadNews)(t,!1,!1))},loadSentimentBySymbol:function(t){return e(Object(u.m)(t))},checkIfNewsSentimentEnabled:function(){return e(Object(p.checkNewsSentimentEnabled)())},checkIfNewsAlertsEnabled:function(){return e(Object(p.checkAcuityNewsSentimentEnabled)())},checkIfNewsFeedEnabled:function(){return e(Object(p.checkNewsFeedEnabled)())}}}var c=n(1),l=n.n(c),u=n(879),m=n(471),d=n(2),p=n(321),f=n(84),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){var t=function(t){function n(){var e,t,i,o;r(this,n);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return t=i=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),i.componentDidMount=function(){var e=i.props.symbol;i.props.isNewsAlertEnabled&&i.props.loadNewsAlertsBySymbol(e),i.props.isNewsFeedEnabled&&i.props.loadNewsBySymbol(e),i.props.loadSentimentBySymbol(e),i.props.checkIfNewsSentimentEnabled(),i.props.checkIfNewsAlertsEnabled(),i.props.checkIfNewsFeedEnabled()},o=t,a(i,o)}return i(n,t),b(n,[{key:"componentWillReceiveProps",value:function(e){e.isNewsFeedEnabled&&e.isNewsFeedEnabled!==this.props.isNewsFeedEnabled&&this.props.loadNewsBySymbol(e.symbol),e.isNewsFeedEnabled&&e.symbol!==this.props.symbol&&this.props.loadNewsBySymbol(e.symbol),e.isNewsAlertEnabled!==this.props.isNewsAlertEnabled&&e.isNewsAlertEnabled&&this.props.loadNewsAlertsBySymbol(e.symbol),e.isNewsAlertEnabled&&e.symbol!==this.props.symbol&&(this.props.loadNewsAlertsBySymbol(e.symbol),this.props.loadSentimentBySymbol(e.symbol))}},{key:"render",value:function(){return l.a.createElement(e,this.props)}}]),n}(l.a.Component);return Object(d.connect)(o,s)(t)};t.a=y},2195:function(e,t,n){"use strict";var r=n(1),a=n.n(r),i=n(39),o=n(2131),s=n(236),c=n(2132),l=function(e){var t=e.symbol;return a.a.createElement("div",{className:"pane pane__fluid"},a.a.createElement(i.g,{desktop:!0},a.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile"},a.a.createElement("div",{className:"pane pane__row pane__fluid"},a.a.createElement("div",{className:"instrument-details__profile__description-wrapper"},a.a.createElement("div",{className:"instrument-details__profile__caption"},a.a.createElement(s.a,{as:"span",symbol:t})," ",__("instrument_info.profile")),a.a.createElement(c.a,{symbol:t,className:"instrument-details__profile__description"})),a.a.createElement("div",{className:"pane pane__fluid instrument-details__profile__chart"},a.a.createElement(o.a,{key:t,symbol:t,className:"chart-box--not-full pane pane__fluid"}))))),a.a.createElement(i.g,{tablet:!0,mobile:!0},a.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile instrument-details__profile--mobile"},a.a.createElement("div",{className:"instrument-details__profile__caption"},a.a.createElement(s.a,{as:"span",symbol:t})," ",__("instrument_info.profile")),a.a.createElement("div",{className:"pane pane__column pane__fluid"},a.a.createElement(c.a,{symbol:t,className:"instrument-details__profile__description"}),a.a.createElement("div",{className:"pane pane__fluid instrument-details__profile__chart"},a.a.createElement(o.a,{key:t,symbol:t,className:"chart-box--not-full pane pane__fluid"}))))))};t.a=l},2217:function(e,t,n){"use strict";function r(e){return function(t,n){t(n().eventsAndTrade.status?{type:l.h,payload:e}:a(e))}}function a(e){return function(t,n){var r=n().eventsAndTrade.lastUpdated;d.a.now()-r>_&&(t({types:[l.d,l.f,l.e],additionalData:e,callApi:function(){return Object(u.loadEventsAndTrade)()}}),d.a.after(function(){return t(a())},_))}}function i(){return function(e,t){t().eventsAndTrade.status!==v.SUCCESS&&e({types:[l.a,o,l.b],callApi:function(){return f.a.checkTradingToolEnabled(v.TRADING_TOOLS.EVENTS_AND_TRADE)}})}}function o(e){return function(t){t({type:l.c,payload:e}),t(a())}}function s(e){return function(t){t({type:l.g,payload:e})}}function c(e){return function(t,n){var r=n(),a=r.ui,i=r.eventsAndTrade,o=a.instrumentDetailsSymbol,s=i.events[e],c=o&&o.replace("/","");y.a.navigate("events-and-trade/"+s._event_type_code+"/"+c)}}t.e=r,t.b=a,t.a=i,t.d=s,t.c=c;var l=n(909),u=n(134),m=n(0),d=n.n(m),p=n(10),f=n.n(p),b=n(3),y=n.n(b),v=n(5),_=6e5},2338:function(e,t,n){var r=n(2339);"string"==typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(2065)(r,a);r.locals&&(e.exports=r.locals)},2339:function(e,t,n){t=e.exports=n(2064)(void 0),t.push([e.i,".events-and-trade{font-size:13px}.events-and-trade .ReactVirtualized__List{outline:none}.events-and-trade__table-column{padding:0 10px 0 0;border-bottom-width:1px;border-bottom-style:solid}.events-and-trade__table-column--head{padding:0 20px 0 0}.events-and-trade__table-column button{padding:2px 20px;font-size:13px}.events-and-trade__table-column img{margin:0 8px 0 0}.events-and-trade__table-column .clickable{cursor:pointer}.events-and-trade__table-row{height:48px}.events-and-trade__table-cell{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.events-and-trade__event-cell{width:25%}.events-and-trade__time-cell{width:17%}.events-and-trade__opportunities-cell{width:18%}.events-and-trade__range-cell{width:12%}.events-and-trade__reminder-cell{width:5%}.events-and-trade__actions-cell{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:10%}.events-and-trade__description{padding:0 18px 10px;text-align:left}.events-and-trade--mobile{padding:0 12px;height:100vh}.events-and-trade--mobile .events-and-trade__table-column{padding:12px 0}.events-and-trade--mobile .events-and-trade__table-row{height:30px}.events-and-trade--mobile .events-and-trade__description{padding:0 10px 10px 0}.events-and-trade--mobile .icon-outlook{margin:0 5px 0 0}.events-and-trade--tablet .events-and-trade__table-column{padding:12px 12px 12px 0}.events-and-trade--tablet .events-and-trade__table-column .pane__row{height:30px}.events-and-trade--tablet .events-and-trade__description{padding:0 10px 10px 0}.events-and-trade--tablet .icon-outlook{margin:0 5px 0 0}.events-and-trade .question-tooltip{display:-webkit-flex;display:-ms-flexbox;display:flex;cursor:pointer;padding:5px;margin-left:-5px}.events-and-trade .icon-google{width:16px;height:16px;margin:0 5px 0 0}.events-and-trade.upcoming{display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row}@media only screen and (max-width:824px){.events-and-trade.upcoming{flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column}}.events-and-trade.upcoming .upcoming-first{display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch;-ms-flex-pack:flex-start;-webkit-justify-content:flex-start;justify-content:flex-start;width:188px}@media (max-width:991px){.events-and-trade.upcoming .upcoming-first .information-block{border-right:0}}@media (min-width:1200px){.events-and-trade.upcoming .upcoming-first .information-block{border-right:0}}.events-and-trade.upcoming .upcoming-first-title{flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-ms-flex-pack:flex-start;-webkit-justify-content:flex-start;justify-content:flex-start;font-weight:400;padding:9px 15px;font-size:13px;text-transform:capitalize}.events-and-trade.upcoming .upcoming-first-title,.events-and-trade.upcoming .upcoming-first-title>div{display:-ms-flexbox;display:-webkit-flex;display:flex}.events-and-trade.upcoming .upcoming-first-title i{margin-right:5px;display:block}.events-and-trade.upcoming .upcoming-first-timer{display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;flex:1 1 auto;-webkit-flex:1 1 auto;-webkit-box-flex:1 1 auto;-moz-flex:1 1 auto;-moz-box-flex:1 1 auto;-ms-flex:1 1 auto;height:125px;padding:4px}.events-and-trade.upcoming .upcoming-first-timer-title{text-align:center;font-size:10px;font-weight:700}.events-and-trade.upcoming .upcoming-first-timer-subtitle{text-align:center;font-size:10px;font-weight:400}.events-and-trade.upcoming .upcoming-first-timer-value{text-align:center;font-size:21px;line-height:1;font-weight:700}@media only screen and (min-width:1500px){.events-and-trade.upcoming .upcoming-first{width:225px}.events-and-trade.upcoming .upcoming-first-timer-subtitle,.events-and-trade.upcoming .upcoming-first-timer-title{font-size:13px}.events-and-trade.upcoming .upcoming-first-timer-value{font-size:28px}}@media only screen and (max-width:824px){.events-and-trade.upcoming .upcoming-first{width:100%}.events-and-trade.upcoming .upcoming-first-timer-subtitle,.events-and-trade.upcoming .upcoming-first-timer-title{font-size:13px}.events-and-trade.upcoming .upcoming-first-timer-value{font-size:28px}}@media (min-width:992px) and (max-width:1199px){.events-and-trade.upcoming .upcoming-first{width:100%}}.events-and-trade.upcoming .upcoming-container{padding:10px}.events-and-trade.upcoming .upcoming-top{display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch;-ms-flex-pack:flex-start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-flex:1;-ms-flex:1;flex:1}.events-and-trade.upcoming .upcoming-top-title{font-size:13px;font-weight:400;padding:9px 15px;text-transform:capitalize}@media (max-width:991px){.events-and-trade.upcoming .upcoming-top .information-block{border-left:0}}@media (min-width:1200px){.events-and-trade.upcoming .upcoming-top .information-block{border-left:0}}.events-and-trade.upcoming .upcoming-top-table{margin-left:15px}.events-and-trade.upcoming .upcoming-top-table-columns{border-bottom:1px solid}.events-and-trade.upcoming .upcoming-top-table-columns td{padding:5px 5px 5px 0}.events-and-trade.upcoming .upcoming-top-table-row td{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:7px 7px 7px 0}.events-and-trade.upcoming .upcoming-top-table-row td>div{display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row}.events-and-trade.upcoming .upcoming-top-table-row td .event-name{cursor:pointer}.events-and-trade.upcoming .upcoming-top-table-row td .event-flag{margin-right:5px}.events-and-trade.upcoming .upcoming-top-list{display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column}@media (max-width:1200px){.events-and-trade.upcoming .upcoming-top-list{margin-left:10px}}.events-and-trade.upcoming .upcoming-top-list-item{display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row}.events-and-trade.upcoming .upcoming-top-list-item:not(:last-child){border-bottom:1px solid}.events-and-trade.upcoming .upcoming-top-list-item>div{display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;padding:5px 0}.events-and-trade.upcoming .upcoming-top-list-item>div>div{display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:5px 0}.events-and-trade.upcoming .upcoming-top-list-item>div:first-child{margin-right:12px}.events-and-trade.upcoming .upcoming-top-list-item>div:last-child{-webkit-flex:1;-ms-flex:1;flex:1}.events-and-trade.upcoming .upcoming-top-list-item>div:last-child>div{display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-ms-flex-pack:flex-start;-webkit-justify-content:flex-start;justify-content:flex-start}.events-and-trade.upcoming .upcoming-top-list-item>div:last-child>div .event-name{cursor:pointer}.events-and-trade.upcoming .upcoming-top-list-item>div:last-child>div .event-flag{display:block;margin-right:5px}",""])},2494:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e){var t=N.a.filter(e,function(e){return e.category.toLowerCase().startsWith(H.INSTRUMENT_CATEGORIES.CURRENCY)}),n=N.a.reduce(t,function(e,t){var n=Object(q.transformSBSymbolToSymbol)(t.symbol);return e.push.apply(e,l(n.split("/"))),e},[]);return N.a.unique(n)}function m(e){return{allInstruments:Object(V.getInstrumentSymbolMap)(e)}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function b(e){return{eventsAndTradeEnabled:Object(se.isEventsAndTradeEnabled)(e),symbolToEventMap:Object(ae.j)(e)}}var y=n(1),v=n.n(y),_=n(2),g=n(17),h=n.n(g),x=n(2125),E=n(2195),w=n(2126),O=n(0),N=n.n(O),j=n(11),T=n.n(j),S=function(e){var t=e.children,n=e.className;return v.a.createElement("div",{className:T()(r({"instrument-tab__title":!0},n,!!n))},t)},k=S,C=n(957),I=n(502),A=n(94),R=function(e){var t=e.options,n=e.className,r=e.selected,i=e.title,o=e.onChange;return v.a.createElement(A.a,{options:t,className:T()(a({"instrument-currency-converter__field":!0},n,!!n)),title:i,selected:r,transformOptionText:function(e){return'<span><i class="currency-img currency-img-'+e+'"></i>'+e+"</span>"},onChange:o})},P=R,M=n(21),U=n.n(M),D=n(968),F=n(511),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=1e3,z=function(e){function t(e){o(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={from:e.from,to:e.to,amount:W},h()(n),n}return c(t,e),L(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.from,n=e.to;t===this.state.from&&n===this.state.to||this.setState({from:t,to:n})}},{key:"onChangeCurrency",value:function(e,t){this.setState(function(n){var r=B({},n,i({},e,t));return r.from,r.to,i({},e,t)})}},{key:"switchCurrency",value:function(){this.setState(function(e){var t=e.from;return{from:e.to,to:t}})}},{key:"onChangeAmount",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&isNaN(e)&&(e=W),String(e).length>10&&(e=this.state.amount),this.setState({amount:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.from,r=t.to,a=t.amount,i=this.props.allCurrencies;return v.a.createElement(F.a,{from:n,to:r},function(t){var o=r+" "+U()((a||0)*t).format("0,0.[00]");return v.a.createElement("div",{className:"instrument-currency-converter"},v.a.createElement(k,{className:"instrument-currency-converter__content-title"},__("instrument_info.tab.converter.title")),v.a.createElement("div",{className:"instrument-currency-converter__content"},v.a.createElement(C.a,{className:"instrument-currency-converter__field",value:a,type:"number",title:__("fields.amount"),transformValue:function(e){return parseInt(e,10)},onChange:function(t){return e.onChangeAmount(t)},onBlur:function(t){return e.onChangeAmount(t,!0)}}),v.a.createElement(P,{options:i,title:__("instrument_info.tab.converter.from"),selected:n,onChange:e.onChangeCurrency.bind(e,"from")}),v.a.createElement(I.a,{className:"instrument-currency-converter__btn instrument-currency-converter__btn--reverse",onClick:function(){return e.switchCurrency()}},v.a.createElement("i",{className:"icon icon-reverse"})),v.a.createElement(P,{options:i,title:__("instrument_info.tab.converter.to"),className:"instrument-currency-converter__field--to-currency",selected:r,onChange:e.onChangeCurrency.bind(e,"to")}),v.a.createElement("div",{className:"instrument-currency-converter__result"},v.a.createElement("span",{className:"instrument-currency-converter__text instrument-currency-converter__text--from-currency"},n," ",a||0," ="),v.a.createElement("span",{className:"instrument-currency-converter__text instrument-currency-converter__text--to-currency"},o),v.a.createElement(D.CopyToClipboard,{text:o},v.a.createElement(I.a,{className:"instrument-currency-converter__btn instrument-currency-converter__btn--copy",btnType:"primary"},__("copy"))))))})}}]),t}(v.a.Component);z.defaultProps={allCurrencies:[]};var G=z,V=n(32),H=n(5),q=n(60),Q=function(){function e(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Y=function(e){var t=e.allInstruments,n=e.symbol;if(!n||"string"!=typeof n)return null;var r=Object(q.transformSBSymbolToSymbol)(n).split("/"),a=Q(r,2),i=a[0],o=a[1],s=u(t);return v.a.createElement(G,{from:i,to:o,allCurrencies:s})},K=Object(_.connect)(m)(Y),J=n(37),X=n(145),Z=(n(2338),n(66)),$=Object(X.a)(function(){return n.e(67).then(n.bind(null,2945))}),ee=Object(X.a)(function(){return n.e(66).then(n.bind(null,2946))}),te=Object(X.a)(function(){return n.e(65).then(n.bind(null,2947))}),ne=function(e){var t=e.className,n=e.symbol;return Object(Z.sendEventosEventsAndTradesAction)(),v.a.createElement("div",{className:"pane pane__fluid"},v.a.createElement(J.default,{desktop:!0},v.a.createElement($,{className:t,symbol:n})),v.a.createElement(J.default,{tablet:!0},v.a.createElement(te,{className:t,symbol:n})),v.a.createElement(J.default,{mobile:!0},v.a.createElement(ee,{className:t,symbol:n})))},re=n(2217),ae=n(2117),ie=n(238),oe=n.n(ie),se=n(84),ce=n(2109),le=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ue=function(e){return{checkEventsAndTradesEnabled:function(){return e(Object(re.a)())}}},me=function(e){function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return h()(n),n}return f(t,e),le(t,[{key:"componentDidMount",value:function(){this.props.checkEventsAndTradesEnabled()}},{key:"extendTabs",value:function(e,t){e.unshift({id:ce.INSTRUMENT_PROFILE,title:"instrument_info.tab.profile",view:v.a.createElement(v.a.Fragment,null,v.a.createElement(J.default,{desktop:!0,tablet:!0},v.a.createElement("div",{className:"pane__scroll-content"},v.a.createElement(oe.a,null,v.a.createElement(E.a,{symbol:t})))),v.a.createElement(J.default,{mobile:!0},v.a.createElement(E.a,{symbol:t}))),viewOptions:{className:"pane__scroll"},disabled:!1},{id:ce.INSTRUMENT_CONVERTER,title:"instrument_info.tab.converter",view:v.a.createElement(v.a.Fragment,null,v.a.createElement(J.default,{desktop:!0,tablet:!0},v.a.createElement("div",{className:"pane__scroll-content"},v.a.createElement(oe.a,null,v.a.createElement(K,{symbol:t})))),v.a.createElement(J.default,{mobile:!0},v.a.createElement(K,{symbol:t}))),viewOptions:{className:"pane__scroll"},disabled:!1});var n=t&&t.replace("/","");return this.props.eventsAndTradeEnabled&&this.props.symbolToEventMap[n]&&e.unshift({id:ce.INSTRUMENT_EVENTS,title:"instrument_info.tab.events",view:v.a.createElement(ne,{symbol:t}),disabled:!1}),e.unshift({id:ce.INSTRUMENT_OVERVIEW,title:"instrument_info.tab.key_statistics",view:v.a.createElement(v.a.Fragment,null,v.a.createElement(J.default,{desktop:!0,tablet:!0},v.a.createElement("div",{className:"pane__scroll-content"},v.a.createElement(oe.a,null,v.a.createElement(w.a,{symbol:t})))),v.a.createElement(J.default,{mobile:!0},v.a.createElement(w.a,{symbol:t}))),viewOptions:{className:"pane__scroll"},disabled:!1}),e}},{key:"render",value:function(){return v.a.createElement(x.a,{symbol:this.props.symbol,extendTabs:this.extendTabs})}}]),t}(v.a.Component);t.a=Object(_.connect)(b,ue)(me)},2718:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return{checkEventsAndTradesEnabled:function(){return e(Object(d.checkEventsAndTradeEnabled)())}}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),c=n.n(s),l=n(37),u=n(145),m=n(2),d=n(321),p=n(2140),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=Object(u.a)(function(){return n.e(86).then(n.bind(null,2785))}),y=Object(u.a)(function(){return n.e(79).then(n.bind(null,2788))}),v=Object(u.a)(function(){return n.e(72).then(n.bind(null,2789))}),_=function(e){function t(){var e,n,i,o;r(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=i=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.componentDidMount=function(){i.props.checkEventsAndTradesEnabled()},o=n,a(i,o)}return i(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.symbol;return c.a.createElement("div",{className:"pane pane__xfluid pane__yfluid"},c.a.createElement(l.default,{desktop:!0},c.a.createElement(b,{symbol:n,className:t})),c.a.createElement(l.default,{tablet:!0},c.a.createElement(v,{symbol:n,className:t})),c.a.createElement(l.default,{mobile:!0},c.a.createElement(y,{symbol:n,className:t})))}}]),t}(c.a.Component);t.default=Object(m.connect)(null,o)(Object(p.a)(_))}});