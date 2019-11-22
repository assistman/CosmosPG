(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1978:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1972),i=a(228),s=a(1962),o=a(1967),c=a(303),u=a(1968),m=a(302),p=a(229),f=a(304),_=a(1969),d=a(1970),b=a(1971),v=a(15),y=a.n(v),E=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return y()(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),E(t,[{key:"render",value:function(){var e=this,t=this.props.symbol;return r.a.createElement("div",{className:"instrument-details-header"},r.a.createElement("div",{className:"instrument-details__header pane pane__xfluid"},r.a.createElement("div",{className:"instrument-details__header__left pane pane__column"},r.a.createElement("div",{className:"pane pane__fluid pane__column"},r.a.createElement("div",{className:"pane pane__column"},r.a.createElement("div",{className:"pane pane__row"},r.a.createElement(l.a,{symbol:t}),r.a.createElement("div",{className:"pane__column"},r.a.createElement("div",{className:"instrument-details__title"},r.a.createElement(i.a,{as:"span",symbol:t}),r.a.createElement(u.a,{symbol:t})),r.a.createElement("div",{className:"instrument-details__description"},r.a.createElement(s.a,{as:"span",symbol:t})))),r.a.createElement("div",{className:"pane pane__row"},r.a.createElement(m.a,{as:"span",className:"instrument-details__price",symbol:t}),r.a.createElement("span",{className:"instrument-details__change"},r.a.createElement(o.a,{symbol:t,showDir:!0}),r.a.createElement(c.a,{symbol:t,showDir:!0})))))),r.a.createElement("div",{className:"instrument-details__header__right pane pane__column"},r.a.createElement("div",{className:"instrument-details__actions"},r.a.createElement("div",{className:"instrument-details__actions__small"},r.a.createElement(f.a,{onClick:function(a){return e.toggleFavorite(a,t)},symbol:t,as:"div",className:"fs-13",yes:"icon-star-filled",no:"icon-star"}),r.a.createElement(b.a,{as:null},r.a.createElement(b.b,{onClick:this.openPriceAlerts,symbol:t,as:"div",className:"fs-13",yes:"icon-bell-filled",no:"icon-bell"}))),r.a.createElement("div",{className:"pane pane__row"},r.a.createElement(d.a,{symbol:t,onClick:function(a){return e.sell(a,t)},className:"price-button_labeled--small"}),r.a.createElement(_.a,{symbol:t,onClick:function(a){return e.buy(a,t)},className:"price-button_labeled--small"}))))))}}]),t}(p.a);t.a=h},1988:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(7),i=a.n(l),s=a(1),o=a.n(s),c=a(4),u=a(2),m=a(2e3),p=a(55);function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var _=Object(u.a)(p.isFundamentalsEnabled,(function(e){var t;return f(t={},m.b,!e),f(t,m.d,!e),f(t,m.c,!e),f(t,m.a,!e),f(t,m.e,!e),f(t,m.f,!e),f(t,m.g,!e),t}));function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=function(e){var t=e.field;return r.a.createElement("div",{className:i()(d({"statistics-row":!0},t.className,!!t.className))},r.a.createElement("span",null,t.title),t.view&&t.view)};t.a=Object(c.connect)((function(e,t){var a=t.symbol;return{unavailableFields:_(e,a)}}))((function(e){var t=e.listOfFields,a=e.className,n=e.unavailableFields,l=o.a.reject(t,(function(e){return n[e.name]}));return!o.a.isEmpty(l)&&r.a.createElement("div",{className:i()(d({"statistics-column":!0},a,!!a))},l.map((function(e,t){return r.a.createElement(b,{field:e,key:"statisticsRow"+t})})))}))},2e3:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"g",(function(){return s})),a.d(t,"e",(function(){return o})),a.d(t,"f",(function(){return c}));var n="FundamentalDividendPerShare",r="FundamentalMarketCap",l="FundamentalEps",i="FundamentalBeta",s="FundamentalVolume",o="FundamentalTenDaysAvg",c="FundamentalThreeMonthsAvg"},2009:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),i=a(19),s=a(3),o=a(16),c=a.n(o);t.a=Object(l.connect)((function(e,t){var a=t.symbol,n=t.as,r=void 0===n?"span":n;return{value:Object(i.getInstrumentCryptoStartDate)(e,a),as:r}}))((function(e){var t=e.value,a=(e.dispatch,e.symbol,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["value","dispatch","symbol"]));return r.a.createElement(a.as,a,t?c()(t,"DD/MM/YYYY").format("MMM. DD, YYYY"):s.NA)}))},2080:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1965),i=a(1963),s=a(1966),o=a(4),c=a(31),u=a(1988),m=a(19),p=a(3);var f=Object(o.connect)((function(e,t){var a=t.symbol,n=t.as,r=void 0===n?"span":n;return{value:Object(m.getInstrumentCryptoNetworkHS)(e,a)||p.NA,as:r}}))((function(e){var t=e.value,a=(e.dispatch,e.symbol,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["value","dispatch","symbol"]));return r.a.createElement(a.as,a,t)}));var _=Object(o.connect)((function(e,t){var a=t.symbol,n=t.as,r=void 0===n?"span":n;return{value:Object(m.getInstrumentCryptoCoinType)(e,a)||p.NA,as:r}}))((function(e){var t=e.value,a=(e.dispatch,e.symbol,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["value","dispatch","symbol"]));return r.a.createElement(a.as,a,t)})),d=a(2009);var b=Object(o.connect)((function(e,t){var a=t.symbol,n=t.as,r=void 0===n?"span":n;return{value:Object(m.getInstrumentCryptoBlockPr)(e,a)||p.NA,as:r}}))((function(e){var t=e.value,a=(e.dispatch,e.symbol,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["value","dispatch","symbol"]));return r.a.createElement(a.as,a,t)}));var v=Object(o.connect)((function(e,t){var a=t.symbol,n=t.as,r=void 0===n?"span":n;return{value:Object(m.getInstrumentCryptoBlockNo)(e,a)||p.NA,as:r}}))((function(e){var t=e.value,a=(e.dispatch,e.symbol,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["value","dispatch","symbol"]));return r.a.createElement(a.as,a,t)}));var y=Object(o.connect)((function(e,t){var a=t.symbol,n=t.as,r=void 0===n?"span":n;return{value:Object(m.getInstrumentCryptoTwitter)(e,a)||"",as:r}}))((function(e){var t=e.value,a=(e.dispatch,e.symbol,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["value","dispatch","symbol"]));return r.a.createElement(a.as,a,t?r.a.createElement("a",{href:"https://twitter.com/"+t},"@",t):p.NA)})),E=a(228),h=a(1973),O=a(170),w=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var N=function(e){return[{title:__("instrument_info.start_date"),view:r.a.createElement("div",null,r.a.createElement(d.a,{symbol:e}))},{title:__("instrument_info.network_h_s"),view:r.a.createElement("div",null,r.a.createElement(f,{symbol:e}))},{title:__("instrument_info.twitter"),view:r.a.createElement(y,{symbol:e})},{title:__("instrument_info.coin_type"),view:r.a.createElement(_,{symbol:e})},{title:__("instrument_info.block_pr"),view:r.a.createElement(b,{symbol:e})},{title:__("instrument_info.block_no"),view:r.a.createElement(v,{symbol:e})}]},j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),w(t,[{key:"componentWillMount",value:function(){this.props.loadCryptoInfo()}},{key:"render",value:function(){var e=this.props.symbol;return r.a.createElement("div",{className:"pane pane__fluid"},r.a.createElement(c.default,{desktop:!0},r.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile"},r.a.createElement("div",{className:"instrument-details__profile__caption"},r.a.createElement(E.a,{as:"span",symbol:e})," ",__("instrument_info.profile")),r.a.createElement("div",{className:"pane pane__row pane__fluid"},r.a.createElement("div",{className:"instrument-details__profile__description-wrapper"},r.a.createElement(h.a,{symbol:e,className:"instrument-details__profile__description"}),r.a.createElement(u.a,{listOfFields:N(e),className:"instrument-details__profile__table"}))))),r.a.createElement(c.default,{tablet:!0,mobile:!0},r.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile instrument-details__profile--mobile"},r.a.createElement("div",{className:"instrument-details__profile__caption"},r.a.createElement(E.a,{as:"span",symbol:e})," ",__("instrument_info.profile")),r.a.createElement("div",{className:"pane pane__column pane__fluid"},r.a.createElement(h.a,{symbol:e,className:"instrument-details__profile__description"}),r.a.createElement(u.a,{listOfFields:N(e),className:"instrument-details__profile__table"})))))}}]),t}(r.a.Component),g=Object(o.connect)(null,(function(e){return{loadCryptoInfo:function(){return e(Object(O.loadCryptoInfo)())}}}))(j),k=a(261),P=a.n(k),C=function(e,t){return e.unshift({id:i.INSTRUMENT_OVERVIEW,title:"instrument_info.tab.key_statistics",view:r.a.createElement(r.a.Fragment,null,r.a.createElement(c.default,{desktop:!0,tablet:!0},r.a.createElement("div",{className:"pane__scroll-content"},r.a.createElement(P.a,null,r.a.createElement(s.a,{symbol:t})))),r.a.createElement(c.default,{mobile:!0},r.a.createElement(s.a,{symbol:t}))),viewOptions:{className:"pane__scroll"},disabled:!1},{id:i.INSTRUMENT_PROFILE,title:"instrument_info.tab.profile",view:r.a.createElement(r.a.Fragment,null,r.a.createElement(c.default,{desktop:!0,tablet:!0},r.a.createElement("div",{className:"pane__scroll-content"},r.a.createElement(P.a,null,r.a.createElement(g,{symbol:t})))),r.a.createElement(c.default,{mobile:!0},r.a.createElement(g,{symbol:t}))),viewOptions:{className:"pane__scroll"},disabled:!1}),e};t.a=function(e){var t=e.symbol;return r.a.createElement(l.a,{symbol:t,extendTabs:C})}},2757:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),s=a(1978),o=a(2080);t.default=function(e){var t,a,n,l=e.className,c=e.symbol,u=i()((n=!!l,(a=l)in(t={"instrument-details":!0,"instrument-details--tablet":!0,pane:!0,pane__xfluid:!0,pane__yfluid:!0})?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t));return r.a.createElement("div",{className:u},r.a.createElement(s.a,{symbol:c}),r.a.createElement(o.a,{symbol:c}))}}}]);