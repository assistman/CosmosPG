(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1977:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1972),o=n(228),i=n(1962),s=n(1967),c=n(303),u=n(1968),p=n(302),m=n(229),f=n(304),d=n(1971),_=n(15),b=n.n(_),v=n(1970),y=n(1969),E=n(101),h=n(410),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var N=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={priceAlertsPopup:!1},b()(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),w(t,[{key:"openPriceAlertsPopup",value:function(e){this.setState({priceAlertsPopup:e})}},{key:"render",value:function(){var e=this,t=this.props.symbol,n=this.state.priceAlertsPopup;return r.a.createElement("div",{className:"instrument-details__header pane pane__xfluid pane__column"},n&&r.a.createElement(E.default,null,r.a.createElement(E.default.Nav,null,r.a.createElement(E.default.NavLeft,null,r.a.createElement("button",{onClick:function(){return e.openPriceAlertsPopup(!1)}},r.a.createElement("span",{className:"popup-mobile__nav-rotate"},r.a.createElement("i",{className:"icon-view-details"})),"   ",__("actions.back"))),r.a.createElement(E.default.NavCenter,null,r.a.createElement("div",null,__("tab.price_alerts")))),r.a.createElement(E.default.Body,{className:"popup-mobile__body pane pane__fluid"},r.a.createElement(h.default,{className:"pane pane__xfluid",onClose:function(){return e.openPriceAlertsPopup(!1)}}))),r.a.createElement("div",{className:"pane pane__row"},r.a.createElement("div",{className:"pane"},r.a.createElement(l.a,{symbol:t}),r.a.createElement("div",{className:"pane pane__column"},r.a.createElement("div",{className:"instrument-details__title"},r.a.createElement(o.a,{as:"span",symbol:t})),r.a.createElement("div",{className:"instrument-details__description"},r.a.createElement(i.a,{as:"span",symbol:t})))),r.a.createElement("div",{className:"instrument-details__actions pane pane__row"},r.a.createElement("div",{className:"instrument-details__actions__small"},r.a.createElement(f.a,{onClick:function(n){return e.toggleFavorite(n,t)},symbol:t,as:"div",className:"large-s-px",yes:"icon-star-filled",no:"icon-star"}),r.a.createElement(d.a,{as:null},r.a.createElement(d.b,{onClick:this.openPriceAlerts,openPriceAlertsPopup:this.openPriceAlertsPopup,symbol:t,as:"div",className:"medium-b-px",yes:"icon-bell-filled",no:"icon-bell"}))))),r.a.createElement("div",{className:"pane pane__row pane--bottom"},r.a.createElement(p.a,{as:"span",className:"instrument-details__price",symbol:t}),r.a.createElement("span",{className:"instrument-details__change"},r.a.createElement(s.a,{symbol:t,showDir:!0}),r.a.createElement(c.a,{symbol:t,showDir:!0}))),r.a.createElement("div",{className:"pane pane__row"},r.a.createElement(u.a,{symbol:t,minimize:!1})),r.a.createElement("div",{className:"instrument-details__actions pane__xfluid"},r.a.createElement(v.a,{symbol:t,onClick:function(n){return e.sell(n,t)}}),r.a.createElement(y.a,{symbol:t,onClick:function(n){return e.buy(n,t)}})))}}]),t}(m.a);t.a=N},1988:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(7),o=n.n(l),i=n(1),s=n.n(i),c=n(4),u=n(2),p=n(2e3),m=n(55);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=Object(u.a)(m.isFundamentalsEnabled,(function(e){var t;return f(t={},p.b,!e),f(t,p.d,!e),f(t,p.c,!e),f(t,p.a,!e),f(t,p.e,!e),f(t,p.f,!e),f(t,p.g,!e),t}));function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){var t=e.field;return r.a.createElement("div",{className:o()(_({"statistics-row":!0},t.className,!!t.className))},r.a.createElement("span",null,t.title),t.view&&t.view)};t.a=Object(c.connect)((function(e,t){var n=t.symbol;return{unavailableFields:d(e,n)}}))((function(e){var t=e.listOfFields,n=e.className,a=e.unavailableFields,l=s.a.reject(t,(function(e){return a[e.name]}));return!s.a.isEmpty(l)&&r.a.createElement("div",{className:o()(_({"statistics-column":!0},n,!!n))},l.map((function(e,t){return r.a.createElement(b,{field:e,key:"statisticsRow"+t})})))}))},2e3:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return c}));var a="FundamentalDividendPerShare",r="FundamentalMarketCap",l="FundamentalEps",o="FundamentalBeta",i="FundamentalVolume",s="FundamentalTenDaysAvg",c="FundamentalThreeMonthsAvg"},2009:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(4),o=n(19),i=n(3),s=n(16),c=n.n(s);t.a=Object(l.connect)((function(e,t){var n=t.symbol,a=t.as,r=void 0===a?"span":a;return{value:Object(o.getInstrumentCryptoStartDate)(e,n),as:r}}))((function(e){var t=e.value,n=(e.dispatch,e.symbol,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["value","dispatch","symbol"]));return r.a.createElement(n.as,n,t?c()(t,"DD/MM/YYYY").format("MMM. DD, YYYY"):i.NA)}))},2080:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1965),o=n(1963),i=n(1966),s=n(4),c=n(31),u=n(1988),p=n(19),m=n(3);var f=Object(s.connect)((function(e,t){var n=t.symbol,a=t.as,r=void 0===a?"span":a;return{value:Object(p.getInstrumentCryptoNetworkHS)(e,n)||m.NA,as:r}}))((function(e){var t=e.value,n=(e.dispatch,e.symbol,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["value","dispatch","symbol"]));return r.a.createElement(n.as,n,t)}));var d=Object(s.connect)((function(e,t){var n=t.symbol,a=t.as,r=void 0===a?"span":a;return{value:Object(p.getInstrumentCryptoCoinType)(e,n)||m.NA,as:r}}))((function(e){var t=e.value,n=(e.dispatch,e.symbol,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["value","dispatch","symbol"]));return r.a.createElement(n.as,n,t)})),_=n(2009);var b=Object(s.connect)((function(e,t){var n=t.symbol,a=t.as,r=void 0===a?"span":a;return{value:Object(p.getInstrumentCryptoBlockPr)(e,n)||m.NA,as:r}}))((function(e){var t=e.value,n=(e.dispatch,e.symbol,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["value","dispatch","symbol"]));return r.a.createElement(n.as,n,t)}));var v=Object(s.connect)((function(e,t){var n=t.symbol,a=t.as,r=void 0===a?"span":a;return{value:Object(p.getInstrumentCryptoBlockNo)(e,n)||m.NA,as:r}}))((function(e){var t=e.value,n=(e.dispatch,e.symbol,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["value","dispatch","symbol"]));return r.a.createElement(n.as,n,t)}));var y=Object(s.connect)((function(e,t){var n=t.symbol,a=t.as,r=void 0===a?"span":a;return{value:Object(p.getInstrumentCryptoTwitter)(e,n)||"",as:r}}))((function(e){var t=e.value,n=(e.dispatch,e.symbol,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["value","dispatch","symbol"]));return r.a.createElement(n.as,n,t?r.a.createElement("a",{href:"https://twitter.com/"+t},"@",t):m.NA)})),E=n(228),h=n(1973),w=n(170),N=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var O=function(e){return[{title:__("instrument_info.start_date"),view:r.a.createElement("div",null,r.a.createElement(_.a,{symbol:e}))},{title:__("instrument_info.network_h_s"),view:r.a.createElement("div",null,r.a.createElement(f,{symbol:e}))},{title:__("instrument_info.twitter"),view:r.a.createElement(y,{symbol:e})},{title:__("instrument_info.coin_type"),view:r.a.createElement(d,{symbol:e})},{title:__("instrument_info.block_pr"),view:r.a.createElement(b,{symbol:e})},{title:__("instrument_info.block_no"),view:r.a.createElement(v,{symbol:e})}]},j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),N(t,[{key:"componentWillMount",value:function(){this.props.loadCryptoInfo()}},{key:"render",value:function(){var e=this.props.symbol;return r.a.createElement("div",{className:"pane pane__fluid"},r.a.createElement(c.default,{desktop:!0},r.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile"},r.a.createElement("div",{className:"instrument-details__profile__caption"},r.a.createElement(E.a,{as:"span",symbol:e})," ",__("instrument_info.profile")),r.a.createElement("div",{className:"pane pane__row pane__fluid"},r.a.createElement("div",{className:"instrument-details__profile__description-wrapper"},r.a.createElement(h.a,{symbol:e,className:"instrument-details__profile__description"}),r.a.createElement(u.a,{listOfFields:O(e),className:"instrument-details__profile__table"}))))),r.a.createElement(c.default,{tablet:!0,mobile:!0},r.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile instrument-details__profile--mobile"},r.a.createElement("div",{className:"instrument-details__profile__caption"},r.a.createElement(E.a,{as:"span",symbol:e})," ",__("instrument_info.profile")),r.a.createElement("div",{className:"pane pane__column pane__fluid"},r.a.createElement(h.a,{symbol:e,className:"instrument-details__profile__description"}),r.a.createElement(u.a,{listOfFields:O(e),className:"instrument-details__profile__table"})))))}}]),t}(r.a.Component),P=Object(s.connect)(null,(function(e){return{loadCryptoInfo:function(){return e(Object(w.loadCryptoInfo)())}}}))(j),g=n(261),k=n.n(g),x=function(e,t){return e.unshift({id:o.INSTRUMENT_OVERVIEW,title:"instrument_info.tab.key_statistics",view:r.a.createElement(r.a.Fragment,null,r.a.createElement(c.default,{desktop:!0,tablet:!0},r.a.createElement("div",{className:"pane__scroll-content"},r.a.createElement(k.a,null,r.a.createElement(i.a,{symbol:t})))),r.a.createElement(c.default,{mobile:!0},r.a.createElement(i.a,{symbol:t}))),viewOptions:{className:"pane__scroll"},disabled:!1},{id:o.INSTRUMENT_PROFILE,title:"instrument_info.tab.profile",view:r.a.createElement(r.a.Fragment,null,r.a.createElement(c.default,{desktop:!0,tablet:!0},r.a.createElement("div",{className:"pane__scroll-content"},r.a.createElement(k.a,null,r.a.createElement(P,{symbol:t})))),r.a.createElement(c.default,{mobile:!0},r.a.createElement(P,{symbol:t}))),viewOptions:{className:"pane__scroll"},disabled:!1}),e};t.a=function(e){var t=e.symbol;return r.a.createElement(l.a,{symbol:t,extendTabs:x})}},2756:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=(n(630),n(4)),o=n(229),i=n(228),s=n(1962),c=n(1977),u=n(2080),p=n(7),m=n.n(p),f=n(101),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),d(t,[{key:"render",value:function(){var e=this,t=this.props.symbol;m()({"x-popup x-popup-stretch-xs x-popup-no-padding-xs x-popup-absolute":!0,"responsive-popup responsive-popup-absolute":!0,"responsive-popup-translucent-1 x-popup-translucent-1":!0,"show-popup responsive-popup-opened":!0});return r.a.createElement(l.Provider,{store:store},r.a.createElement(f.default,null,r.a.createElement(f.default.Nav,null,r.a.createElement(f.default.NavLeft,null,r.a.createElement("button",{onClick:function(n){return e.closeInstrumentDetails(n,t)}},r.a.createElement("span",{className:"popup-mobile__nav-rotate"},r.a.createElement("i",{className:"icon-view-details"})),"   ",__("actions.back"))),r.a.createElement(f.default.NavCenter,null,r.a.createElement("div",{className:"caption"},r.a.createElement("div",{className:"instrument-details__title"},r.a.createElement(i.a,{as:"span",symbol:t})),r.a.createElement("div",{className:"smaller-px"},r.a.createElement(s.a,{as:"span",symbol:t}))))),r.a.createElement(f.default.Body,{className:"popup-mobile__body pane pane__fluid"},r.a.createElement("div",{className:"responsive-popup-body pane__scroll"},r.a.createElement("div",{className:"instrument-details instrument-details--mobile pane__xfluid pane__yfluid pane__scroll-content"},r.a.createElement("div",{className:"instrument-details__container"},r.a.createElement(c.a,{symbol:t}),r.a.createElement(u.a,{symbol:t})))))))}}]),t}(o.a);t.default=_}}]);