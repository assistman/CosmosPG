webpackJsonp([54],{2013:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),s=n.n(i),c=n(435),l=n.n(c),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"subscribe",value:function(e){var t=this;this.subscription=l.a.createSubscription(u({symbol:e},this.getSubscriptionConfig())).on({load:function(e){t.subscription.stop(),t._mounted&&t.onLoad(e)}}),this.subscription.start()}},{key:"onLoad",value:function(){}},{key:"resetState",value:function(){}},{key:"getSubscriptionConfig",value:function(){return{}}},{key:"unsubscribe",value:function(){this._mounted&&this.resetState(),this.subscription&&this.subscription.stop()}},{key:"componentDidMount",value:function(){this._mounted=!0,this.subscribe(this.props.symbol)}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this.unsubscribe()}},{key:"componentWillUpdate",value:function(e){this.props.symbol!==e.symbol&&(this.unsubscribe(),this.subscribe(e.symbol))}},{key:"render",value:function(){return null}}]),t}(s.a.Component);t.a=f},2051:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(1),o=n.n(a),i=n(11),s=n.n(i),c=function(e){var t=e.field;return o.a.createElement("div",{className:s()(r({"statistics-row":!0},t.className,!!t.className))},o.a.createElement("span",null,t.title),t.view&&t.view)},l=function(e){var t=e.listOfFields,n=e.className;return o.a.createElement("div",{className:s()(r({"statistics-column":!0},n,!!n))},t.map(function(e,t){return o.a.createElement(c,{field:e,key:"statisticsRow"+t})}))};t.a=l},2052:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r;return{value:Object(c.getInstrumentCryptoStartDate)(e,n),as:a}}var o=n(1),i=n.n(o),s=n(2),c=n(31),l=n(5),u=n(4),p=n.n(u),f=function(e){var t=e.value,n=(e.dispatch,e.symbol,r(e,["value","dispatch","symbol"]));return i.a.createElement(n.as,n,t?p()(t,"DD/MM/YYYY").format("MMM. DD, YYYY"):l.NA)};t.a=Object(s.connect)(a)(f)},2070:function(e,t,n){"use strict";function r(e,t){var n=t.symbol,r=Object(s.getInstrumentPrecision)(e,n);return{dayHigh:Object(s.getInstrumentDayHigh)(e,n),dayLow:Object(s.getInstrumentDayLow)(e,n),precision:r,bid:Object(s.getInstrumentBid)(e,n)}}var a=n(1),o=n.n(a),i=n(2),s=n(31),c=n(5),l=n(22),u=n.n(l),p=function(e){var t=e.bid,n=e.dayHigh,r=e.dayLow,a=e.precision;if(!t||!r||!n)return o.a.createElement("span",null,c.NA);t<r&&(r=t),t>n&&(n=t);var i=n-r,s=t-r,l=0!==i?s/i:c.PERCENTS_50_DECIMAL;return o.a.createElement("div",{className:"price-change-bar"},o.a.createElement("div",{className:"text-nowrap"},Number(r).toFixed(a)+" - "+Number(n).toFixed(a)),o.a.createElement("div",{className:"bar"},o.a.createElement("span",{className:"bar-indicator",style:{left:u()(l).toPercent()}})))};t.a=Object(i.connect)(r)(p)},2071:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var n=t.symbol;return{precision:Object(b.getInstrumentPrecision)(e,n),bid:Object(b.getInstrumentBid)(e,n)}}var s=n(1),c=n.n(s),l=n(2),u=n(0),p=n.n(u),f=n(22),m=n.n(f),b=n(31),y=n(5),v=n(2013),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),d(t,[{key:"getSubscriptionConfig",value:function(){return{chartId:"52-week-range",range:y.RANGE_1_YEAR}}},{key:"onLoad",value:function(e){var t=p.a.max(e,function(e){return e.high}).high,n=p.a.min(e,function(e){return e.low}).low;this.setState({yearHigh:t,yearLow:n})}},{key:"resetState",value:function(){return this.setState({yearHigh:null,yearLow:null})}},{key:"render",value:function(){var e=this.props,t=e.bid,n=e.precision;if(!this.state)return c.a.createElement("span",null,y.NA);var r=this.state,a=r.yearHigh,o=r.yearLow;if(!t||!o||!a)return c.a.createElement("span",null,y.NA);t<o&&(o=t),t>a&&(a=t);var i=a-o,s=t-o,l=0!==i?s/i:y.PERCENTS_50_DECIMAL;return c.a.createElement("div",{className:"price-change-bar"},c.a.createElement("div",{className:"text-nowrap"},Number(o).toFixed(n)+" - "+Number(a).toFixed(n)),c.a.createElement("div",{className:"bar"},c.a.createElement("span",{className:"bar-indicator",style:{left:m()(l).toPercent()}})))}}]),t}(v.a);t.a=Object(l.connect)(i)(h)},2073:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=n.n(a),i=n(2051),s=n(2087),c=n(2086),l=n(2079),u=n(2081),p=n(2082),f=n(41),m=n(2085),b=n(2118),y=n(2119),v=n(2080),d=function(e){return[[].concat(r(Object(s.b)(e)))]},h=function(e){return[[].concat(r(Object(s.d)(e))),[].concat(r(Object(s.c)(e)))]},_=function(e){var t=e.symbol;return o.a.createElement("div",{className:"key-statistics"},o.a.createElement("div",{className:"pane pane__fluid"},o.a.createElement("div",null,d(t).map(function(e,t){return o.a.createElement(i.a,{key:"keyStatisticsCol"+t,listOfFields:e})}),o.a.createElement(c.a,{symbol:t},o.a.createElement(u.a,{symbol:t},o.a.createElement(f.c,{title:__("sentiment.title"),tooltip:__("key.statistics.analysis.traders.trend.tooltip"),className:"key-statistics__block key-statistics__block--sm-full-width",contentClassName:"key-statistics__block__content key-statistics__block__content--center"},o.a.createElement(p.a,{symbol:t}))),o.a.createElement(b.a,{symbol:t},o.a.createElement(y.a,{symbol:t})))),o.a.createElement("div",null,o.a.createElement("span",{className:"statistics-title"},__("instrument_info.trading_conditions"))),o.a.createElement("div",{className:"trading-conditions"},h(t).map(function(e,t){return o.a.createElement(i.a,{key:"keyStatisticsCol"+t,listOfFields:e})}),o.a.createElement("div",{className:"statistics-column"},o.a.createElement("div",{className:"statistics-row"},o.a.createElement("span",null,__("instrument_info.instrument_currency")),o.a.createElement("div",null,o.a.createElement(v.a,{symbol:t}))),o.a.createElement(l.a,{className:"statistics-row",symbol:t}),o.a.createElement(m.a,{className:"statistics-row",symbol:t})))))};t.default=_},2079:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(1),c=n.n(s),l=n(2),u=n(192),p=n(31),f=n(72),m=n.n(f),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e,t){var n=t.symbol,r=t.as,a=void 0===r?"div":r,o=Object(p.getInstrumentTradingCalendarsSettings)(e,n);return{name:o&&o.name,html:o&&o.html,as:a}},v=function(e){return{load:function(t){return e(Object(u.loadTradingCalendarsSettings)(t))},clear:function(t){return e(Object(u.clearTradingCalendarsSettings)(t))}}},d=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),b(t,[{key:"componentWillMount",value:function(){this.props.load(this.props.symbol)}},{key:"componentWillUpdate",value:function(e){this.props.symbol!==e.symbol&&(this.props.clear(this.props.symbol),this.props.load(e.symbol))}},{key:"componentWillUnmount",value:function(){this.props.clear(this.props.symbol)}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.html,a=(e.load,e.clear,e.dispatch,e.symbol,r(e,["name","html","load","clear","dispatch","symbol"]));return t&&n?c.a.createElement(a.as,a,c.a.createElement("span",null,t),c.a.createElement("span",null,m()(n))):null}}]),t}(c.a.Component);t.a=Object(l.connect)(y,v)(d)},2080:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),o=n.n(a),i=n(2),s=n(31),c=function(e,t){var n=t.symbol,r=t.as,a=void 0===r?"div":r;return{value:Object(s.getInstrumentCurrency)(e,n),as:a}},l=function(e){var t=e.value,n=(e.dispatch,e.symbol,r(e,["value","dispatch","symbol"]));return!!t&&o.a.createElement(n.as,n,t.replace("$","")||__("instrument_info.none"))};t.a=Object(i.connect)(c)(l)},2081:function(e,t,n){"use strict";function r(e,t){var n=t.symbol;return{isTradersTrendsAvailable:Object(i.isTradersTrendsDataAvailable)(e,n)}}var a=n(1),o=(n.n(a),n(2)),i=n(31);t.a=Object(o.connect)(r)(function(e){var t=e.isTradersTrendsAvailable,n=e.children;return t?n:null})},2082:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=t.symbol;return{longs:Object(p.getInstrumentSentimentLongs)(e,n),shorts:Object(p.getInstrumentSentimentShorts)(e,n)}}var o=n(1),i=n.n(o),s=n(2),c=n(11),l=n.n(c),u=n(2083),p=(n.n(u),n(31)),f=function(e){var t=e.className,n=e.value,a=e.icon,o=e.name;return i.a.createElement("div",{className:l()(r({"trend-info":!0},t,!!t))},i.a.createElement("span",{className:"trend-info__icon"},i.a.createElement("i",{className:a})),i.a.createElement("span",{className:"trend-info__name"},o),i.a.createElement("span",{className:"trend-info__value"},n,"%"))},m=function(e){var t=e.longs,n=e.shorts,a=e.className;return t||n?i.a.createElement("div",{className:l()(r({"traders-trends-content":!0},a,!!a))},i.a.createElement(f,{className:"sellers",icon:"icon-bearish",name:__("sentiment.bearish"),value:n}),i.a.createElement(f,{className:"buyers",icon:"icon-bullish",name:__("sentiment.bullish"),value:t})):null};t.a=Object(s.connect)(a)(m)},2083:function(e,t,n){var r=n(2084);"string"==typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(1958)(r,a);r.locals&&(e.exports=r.locals)},2084:function(e,t,n){t=e.exports=n(1957)(void 0),t.push([e.i,".traders-trends-content{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.traders-trends-content,.trend-info{display:-webkit-flex;display:-ms-flexbox;display:flex}.trend-info{margin:10px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-grid-column-align:center;justify-items:center}.trend-info__icon{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:auto;height:37px;margin-bottom:4px}.trend-info__name,.trend-info__value{font-weight:700;text-transform:uppercase}.trend-info__value{font-size:21px}",""])},2085:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.symbol;return{isAllow:Object(c.isInstrumentAllowOrdersOutsideOfTradingHours)(e,n)}}var o=n(1),i=n.n(o),s=n(2),c=n(31),l=function(e){var t=e.isAllow,n=(e.symbol,e.dispatch,r(e,["isAllow","symbol","dispatch"]));return i.a.createElement("div",n,i.a.createElement("span",null,__("instrument_info.trading.outside_of_trading_hours")),i.a.createElement("div",null,t?__("yes"):__("no"),i.a.createElement("span",{className:"question-tooltip","aria-label":__("help.instrument.trading.outside_of_trading_hours")})))};t.a=Object(s.connect)(a)(l)},2086:function(e,t,n){"use strict";function r(e,t){var n=t.symbol;return{isAtLeastOneItemAvailable:s.a.some([Object(u.isTradersTrendsDataAvailable)(e,n),Object(p.s)(e,n),Object(f.n)(e,n),Object(m.h)(e,n),Object(l.m)(e,n)])}}var a=n(1),o=n.n(a),i=n(0),s=n.n(i),c=n(2),l=n(224),u=n(31),p=n(193),f=n(300),m=n(223),b=function(e){var t=e.isAtLeastOneItemAvailable,n=e.children;return t?o.a.createElement("div",{className:"analysis-and-opinions"},o.a.createElement("div",{className:"analysis-and-opinions-title"},o.a.createElement("span",null," ",__("instrument_info.analysis_and_opinions"))),o.a.createElement("div",{className:"analysis-and-opinions-content"},n)):null};t.a=Object(c.connect)(r)(b)},2087:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r,o=Object(K.getInstrumentPrecision)(e,n);return{value:Object(K.getInstrumentDayOpen)(e,n),precision:o,as:a}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function m(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function h(e){var t=e.minOrderSize,n=e.lotSize,r=e.baseCurrency,a=(t||1)*n,o=__currency(r||"");return o?_e()(a).formatForeignCurrency(o,"$0,0.[00]"):_e()(a).format("0,0.[00]")+" "+__("instrument_info.min_trade_size.units")}function _(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r;return{minOrderSize:Object(K.getInstrumentMinOrderSize)(e,n),lotSize:Object(K.getInstrumentLotSize)(e,n),baseCurrency:Object(K.getInstrumentBaseCurrency)(e,n),as:a}}function O(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function g(e,t){var n=t.symbol;return{amountWordUsed:Object(K.getInstrumentAmountWordUsed)(e,n)}}function w(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function k(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function S(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function C(e,t){var n=t.as,r=void 0===n?"span":n;return{value:Object(K.getInstrumentOvernightInterestTime)(e),as:r}}function I(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function R(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function W(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r;return{precision:Object(K.getInstrumentPrecision)(e,n),as:a}}function D(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function q(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function Y(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function H(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r;return{value:Object(K.getInstrumentCryptoAlgorithm)(e,n)||Q.NA,as:a}}function B(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function G(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r;return{value:Object(K.getInstrumentCryptoMaxSupply)(e,n)||Q.NA,as:a}}var V=n(1),$=n.n(V),J=n(2),K=n(31),Q=n(5),X=Object(J.connect)(a)(function(e){var t=e.value,n=e.precision,a=(e.dispatch,e.symbol,r(e,["value","precision","dispatch","symbol"]));return $.a.createElement(a.as,a,t||0===t?Number(t).toFixed(n):Q.NA)}),Z=n(2070),ee=n(192),te=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ne=function(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r;return{value:Object(K.getInstrumentMarginRatePercent)(e,n),as:a}},re=function(e){return{load:function(t){return e(Object(ee.loadMarginingSettings)(t))},clear:function(t){return e(Object(ee.clearMarginingSettings)(t))}}},ae=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),te(t,[{key:"componentWillMount",value:function(){this.props.load(this.props.symbol)}},{key:"componentWillUpdate",value:function(e){this.props.symbol!==e.symbol&&(this.props.clear(this.props.symbol),this.props.load(e.symbol))}},{key:"componentWillUnmount",value:function(){this.props.clear(this.props.symbol)}},{key:"render",value:function(){var e=this.props,t=e.value,n=(e.load,e.clear,e.dispatch,e.symbol,o(e,["value","load","clear","dispatch","symbol"]));return $.a.createElement(n.as,n,t?t+"%":Q.NA)}}]),t}($.a.Component),oe=Object(J.connect)(ne,re)(ae),ie=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),se=function(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r;return{value:Object(K.getInstrumentMarginRateValue)(e,n),as:a}},ce=function(e){return{load:function(t){return e(Object(ee.loadMarginingSettings)(t))},clear:function(t){return e(Object(ee.clearMarginingSettings)(t))}}},le=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,e),ie(t,[{key:"componentWillMount",value:function(){this.props.load(this.props.symbol)}},{key:"componentWillUpdate",value:function(e){this.props.symbol!==e.symbol&&(this.props.clear(this.props.symbol),this.props.load(e.symbol))}},{key:"componentWillUnmount",value:function(){this.props.clear(this.props.symbol)}},{key:"render",value:function(){var e=this.props,t=e.value,n=(e.load,e.clear,e.dispatch,e.symbol,l(e,["value","load","clear","dispatch","symbol"]));return $.a.createElement(n.as,n,t?"1:"+t:Q.NA)}}]),t}($.a.Component),ue=Object(J.connect)(se,ce)(le),pe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),fe=function(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r;return{value:Object(K.getInstrumentMaintenanceMarginValue)(e,n),as:a}},me=function(e){return{load:function(t){return e(Object(ee.loadMarginingSettings)(t))},clear:function(t){return e(Object(ee.clearMarginingSettings)(t))}}},be=function(e){function t(){return b(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,e),pe(t,[{key:"componentWillMount",value:function(){this.props.load(this.props.symbol)}},{key:"componentWillUpdate",value:function(e){this.props.symbol!==e.symbol&&(this.props.clear(this.props.symbol),this.props.load(e.symbol))}},{key:"componentWillUnmount",value:function(){this.props.clear(this.props.symbol)}},{key:"render",value:function(){var e=this.props,t=e.value,n=(e.load,e.clear,e.dispatch,e.symbol,m(e,["value","load","clear","dispatch","symbol"]));return $.a.createElement(n.as,n,t?t+"%":Q.NA)}}]),t}($.a.Component),ye=Object(J.connect)(fe,me)(be),ve=n(12),de=n.n(ve),he=n(22),_e=n.n(he),Oe=Object(J.connect)(_)(de()({render:function(){var e=this.props,t=(e.minOrderSize,e.lotSize,e.baseCurrency,e.dispatch,e.symbol,d(e,["minOrderSize","lotSize","baseCurrency","dispatch","symbol"]));return $.a.createElement(t.as,t,h(this.props))}})),ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we=function(e){var t=e.amountWordUsed,n=(e.symbol,e.dispatch,O(e,["amountWordUsed","symbol","dispatch"]));return $.a.createElement("span",ge({},n,{className:"question-tooltip","aria-label":t?__("help.instrument.minimum_trade_size_amount"):__("help.instrument.minimum_trade_size_quantity")}))},je=Object(J.connect)(g)(we),Ee=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ne=function(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r,o=Object(K.getInstrumentBuyRate)(e,n);return{value:o?o+"%":Q.NA,as:a}},ke=function(e){return{subscribe:function(t){return e(Object(ee.subscribeSwapRates)(t))},unsubscribe:function(t){return e(Object(ee.unsubscribeSwapRates)(t))}}},xe=function(e){function t(){return j(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return N(t,e),Ee(t,[{key:"componentWillMount",value:function(){this.props.subscribe(this.props.symbol)}},{key:"componentWillUpdate",value:function(e){this.props.symbol!==e.symbol&&(this.props.unsubscribe(this.props.symbol),this.props.subscribe(e.symbol))}},{key:"componentWillUnmount",value:function(){this.props.unsubscribe(this.props.symbol)}},{key:"render",value:function(){var e=this.props,t=e.value,n=(e.subscribe,e.unsubscribe,e.dispatch,e.symbol,w(e,["value","subscribe","unsubscribe","dispatch","symbol"]));return $.a.createElement(n.as,n,t)}}]),t}($.a.Component),Pe=Object(J.connect)(Ne,ke)(xe),Se=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Te=function(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r,o=Object(K.getInstrumentSellRate)(e,n);return{value:o?o+"%":Q.NA,as:a}},Ce=function(e){return{subscribe:function(t){return e(Object(ee.subscribeSwapRates)(t))},unsubscribe:function(t){return e(Object(ee.unsubscribeSwapRates)(t))}}},Ie=function(e){function t(){return x(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return S(t,e),Se(t,[{key:"componentWillMount",value:function(){this.props.subscribe(this.props.symbol)}},{key:"componentWillUpdate",value:function(e){this.props.symbol!==e.symbol&&(this.props.unsubscribe(this.props.symbol),this.props.subscribe(e.symbol))}},{key:"componentWillUnmount",value:function(){this.props.unsubscribe(this.props.symbol)}},{key:"render",value:function(){var e=this.props,t=e.value,n=(e.subscribe,e.unsubscribe,e.dispatch,e.symbol,k(e,["value","subscribe","unsubscribe","dispatch","symbol"]));return $.a.createElement(n.as,n,t)}}]),t}($.a.Component),Ae=Object(J.connect)(Te,Ce)(Ie),Me=n(74),Re=n.n(Me),We=n(72),De=n.n(We),Le=Object(J.connect)(C)(function(e){var t=e.value,n=(e.dispatch,e.symbol,T(e,["value","dispatch","symbol"])),r=t?Re.a.overnightInterestTime(t):__("instrument_info.none");return $.a.createElement(n.as,n,De()(r))}),Ue=n(4),ze=n.n(Ue),Fe=n(2013),qe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ye=function(e){function t(){var e,n,r,a;A(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=r=M(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={value:null},a=n,M(r,a)}return R(t,e),qe(t,[{key:"onLoad",value:function(e){for(var t=ze.a.utc().startOf("day").toDate().getTime(),n=void 0,r=e.length;r--;)if(e[r].timestamp!==t){n=e[r];break}this.setState({value:n&&n.close})}},{key:"resetState",value:function(){this.setState({value:null})}},{key:"getSubscriptionConfig",value:function(){return{chartId:"prev-close",period:"1d",maxBarsCount:2}}},{key:"render",value:function(){var e=this.props,t=e.precision,n=(e.dispatch,e.symbol,I(e,["precision","dispatch","symbol"])),r=this.state.value;return $.a.createElement(n.as,n,r||0===r?Number(r).toFixed(t):Q.NA)}}]),t}(Fe.a),He=Object(J.connect)(W)(Ye),Be=function(e,t){var n=t.symbol,r=t.as,a=void 0===r?"div":r;return{value:Object(K.getInstrumentRolloverDatesValue)(e,n)||__("instrument_info.none"),as:a}},Ge=function(e){var t=e.value,n=(e.dispatch,e.symbol,D(e,["value","dispatch","symbol"]));return $.a.createElement(n.as,n,t)},Ve=Object(J.connect)(Be)(Ge),$e=n(0),Je=n.n($e),Ke=n(11),Qe=n.n(Ke),Xe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ze=function(e,t){var n=t.symbol,r=t.as,a=void 0===r?"span":r;return{bid:Object(K.getInstrumentBid)(e,n),as:a}},et=function(e,t){if(e&&t){t=Number(t),t=Je.a.isNaN(t)?0:t;var n=t?((e-t)/t*100).toFixed(2):(0).toFixed(2);n=Number(n);var r=0===n?"":n<0?"-":"+";return n=0===n?"0":Number(Math.abs(n)).toFixed(2),{sign:r,change:n}}},tt=function(e){function t(){return z(this,t),F(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return q(t,e),Xe(t,[{key:"getSubscriptionConfig",value:function(){return{chartId:"year-change",range:"1y"}}},{key:"onLoad",value:function(e){this.setState({close:e[0].close})}},{key:"resetState",value:function(){return this.setState({close:null})}},{key:"render",value:function(){if(!this.state)return $.a.createElement("span",null,Q.NA);var e=this.state.close,t=this.props,n=t.bid,r=t.className,a=U(t,["bid","className"]);if(!n||!e)return $.a.createElement("span",null,Q.NA);var o=et(n,e),i=o.sign,s=o.change,c=Qe()(L({},r,!!r));return $.a.createElement(a.as,{className:c},s?i+s+"%":0)}}]),t}(Fe.a),nt=Object(J.connect)(Ze)(tt),rt=n(2071),at=n(2052),ot=function(e){var t=e.value,n=(e.dispatch,e.symbol,Y(e,["value","dispatch","symbol"]));return $.a.createElement(n.as,n,t)},it=Object(J.connect)(H)(ot),st=function(e){var t=e.value,n=(e.dispatch,e.symbol,B(e,["value","dispatch","symbol"]));return $.a.createElement(n.as,n,t)},ct=Object(J.connect)(G)(st),lt=n(6),ut=n.n(lt);n.d(t,"b",function(){return pt}),n.d(t,"a",function(){return ft}),n.d(t,"d",function(){return mt}),n.d(t,"c",function(){return bt});var pt=function(e){return[{title:__("instrument_info.open"),view:$.a.createElement("div",null,$.a.createElement(X,{symbol:e}))},{title:__("instrument_info.prev_close"),view:$.a.createElement("div",null,$.a.createElement(He,{symbol:e}))},{title:__("instrument_info.1_year_change"),view:$.a.createElement("div",null,$.a.createElement(nt,{symbol:e}))},{title:__("instrument_info.day_range"),view:$.a.createElement("div",null,$.a.createElement(Z.a,{symbol:e}))},{title:__("instrument_info.52_week_range"),view:$.a.createElement("div",null,$.a.createElement(rt.a,{symbol:e}))}]},ft=function(e){return[{title:__("instrument_info.open"),view:$.a.createElement("div",null,$.a.createElement(X,{symbol:e}))},{title:__("instrument_info.prev_close"),view:$.a.createElement("div",null,$.a.createElement(He,{symbol:e}))},{title:__("instrument_info.start_date"),view:$.a.createElement("div",null,$.a.createElement(at.a,{symbol:e}))},{title:__("instrument_info.max_supply"),view:$.a.createElement("div",null,$.a.createElement(ct,{symbol:e}))},{title:__("instrument_info.algorithm"),view:$.a.createElement("div",null,$.a.createElement(it,{symbol:e}))}]},mt=function(e){return[{title:__("instrument_info.minimum_trade_size"),view:$.a.createElement("div",null,$.a.createElement(Oe,{symbol:e}),$.a.createElement(je,{symbol:e}))},{title:__("instrument_info.overnight_interest_buy"),view:$.a.createElement("div",null,$.a.createElement(Pe,{symbol:e}),$.a.createElement("span",{className:"question-tooltip","aria-label":__("help.instrument.overnight_interest_buy")}))},{title:__("instrument_info.overnight_interest_sell"),view:$.a.createElement("div",null,$.a.createElement(Ae,{symbol:e}),$.a.createElement("span",{className:"question-tooltip","aria-label":__("help.instrument.overnight_interest_buy")}))},{title:__("instrument_info.overnight_interest_time"),view:$.a.createElement("div",null,$.a.createElement(Le,{symbol:e}),$.a.createElement("span",{className:"question-tooltip","aria-label":__("help.instrument.overnight_interest_time")}))}]},bt=function(e){var t=ut.a.getUserCurrencySymbol();return[{title:__("instrument_info.leverage"),view:$.a.createElement("div",null,$.a.createElement(ue,{symbol:e}),$.a.createElement("span",{className:"question-tooltip","aria-label":__("help.instrument.leverage",t)}))},{title:__("instrument_info.initial_margin"),view:$.a.createElement("div",null,$.a.createElement(oe,{symbol:e}),$.a.createElement("span",{className:"question-tooltip","aria-label":__("help.instrument.initial_margin",t)}))},{title:__("instrument_info.maintenance_margin"),view:$.a.createElement("div",null,$.a.createElement(ye,{symbol:e}),$.a.createElement("span",{className:"question-tooltip","aria-label":__("help.instrument.maintenance_margin",t)}))},{title:__("instrument_info.rollover_date"),view:$.a.createElement("div",null,$.a.createElement(Ve,{symbol:e}),$.a.createElement("span",{className:"question-tooltip","aria-label":__("help.instrument.rollover_date")}))}]}},2118:function(e,t,n){"use strict";function r(e){return{isEnabled:Object(m.isNewsSentimentEnabled)(e)}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n=t.symbol;return{isNews_SentimentDataAvailable:Object(p.q)(e,n),isAcuityTradingDataAvailable:Object(f.i)(e,n)}}var c=n(1),l=n.n(c),u=n(2),p=n(838),f=n(834),m=n(85),b=function(e){var t=e.isEnabled,n=e.children;return t?n:null},y=Object(u.connect)(r)(b),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),v(t,[{key:"render",value:function(){var e=this.props,t=e.isNews_SentimentDataAvailable,n=e.isAcuityTradingDataAvailable,r=e.children;return l.a.createElement(y,null,t||n?r:null)}}]),t}(l.a.Component);t.a=Object(u.connect)(s)(d)},2119:function(e,t,n){"use strict";(function(e){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=t.symbol;return{longs:Object(f.k)(e,n),shorts:Object(f.j)(e,n),acuityLongs:Object(m.f)(e,n),acuityShorts:Object(m.e)(e,n)}}function o(e){return{goToInsightSource:function(t){e(Object(v.setSelectedSignalBoxSource)(t)),e(Object(v.setTabIdInstrumentDetails)(d.INSTRUMENT_INSIGHT))}}}var i=n(1),s=n.n(i),c=n(2),l=n(11),u=n.n(l),p=n(2120),f=(n.n(p),n(838)),m=n(834),b=n(73),y=n(844),v=n(27),d=n(2002),h=n(5),_=function(e){var t=e.className,n=e.value,a=e.name;return s.a.createElement("div",{className:u()(r({"trend-info":!0},t,!!t))},s.a.createElement("span",{className:"trend-info__name"},a),s.a.createElement("span",{className:"trend-info__value"},n,"%"))},O=function(t){var n=t.longs,a=t.shorts,o=t.acuityLongs,i=t.acuityShorts,c=t.className,l=t.goToInsightSource;if(e.every([n,a,o,i],function(e){return!e}))return null;var p=void 0,f=void 0,m=h.TRADING_TOOLS.NEWS_SENTIMENT;return n||a?(p=n,f=a):(p=o,f=i,m=h.TRADING_TOOLS.ACUITY),s.a.createElement(y.a,{title:__("key.statistics.analysis.news.sentiment.title"),tooltip:__("key.statistics.analysis.news.sentiment.tooltip"),className:"key-statistics__block clickable",contentClassName:"key-statistics__block__content key-statistics__block__content--center",onClick:l.bind(null,m)},s.a.createElement("div",{className:u()(r({"news-sentiment-content":!0},c,!!c))},s.a.createElement("div",{className:"news-sentiment-icon"},s.a.createElement(b.default,{name:"news_sentiment",size:45})),s.a.createElement("div",{className:"trends"},s.a.createElement(_,{className:"sellers",name:__("sentiment.bearish"),value:f}),s.a.createElement(_,{className:"buyers",name:__("sentiment.bullish"),value:p}))))};t.a=Object(c.connect)(a,o)(O)}).call(t,n(0))},2120:function(e,t,n){var r=n(2121);"string"==typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(1958)(r,a);r.locals&&(e.exports=r.locals)},2121:function(e,t,n){t=e.exports=n(1957)(void 0),t.push([e.i,".news-sentiment-content,.news-sentiment-content .trends{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.news-sentiment-content .trends{display:-webkit-flex;display:-ms-flexbox;display:flex}.news-sentiment-content .news-sentiment-icon span{margin-top:7px;margin:0 auto}.news-sentiment-content .trend-info{margin:10px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-grid-column-align:center;justify-items:center}.news-sentiment-content .trend-info__name{font-weight:700;text-transform:uppercase}.news-sentiment-content .trend-info__value{font-size:13px;font-weight:700;text-transform:uppercase}",""])}});