webpackJsonp([33],{1950:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{symbolsSortName:Object(P.getSymbolsSortName)(e)}}function u(e){return{sortByName:function(t){e(Object(k.setSymbolsSort)(w.INSTRUMENT_SORT.NAME,t)),e(Object(k.setShouldInstrumentBeCentered)(!0))}}}Object.defineProperty(t,"__esModule",{value:!0});var f=n(2336),p=n(1958),d=n(1973),b=n(1971),m=n(2115),y=n(1),v=n.n(y),h=n(4),O=n(0),g=n.n(O),_=n(2061),E=n.n(_),j=n(2040),w=n(10),I=n(1992),P=n(163),k=n(47),S=(n(2862),n(1957)),N=n(797),C=n(796),R=n(1984),T=n(217),x=n(1985),D=n(2623),M=n(1982),A=n(1983),L=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),L(t,[{key:"render",value:function(){var e=this.props,t=e.selectInstrument,n=e.editOrder,r=e.cancelOrder,o=e.symbol,a=e.orderId;return v.a.createElement("div",{onClick:function(e){return t(e,o)},className:"subrow-expanded grid-12 grid-noGutter order new-advanced__order-details"},v.a.createElement("div",{className:"col-9 grid-middle order__info"},v.a.createElement("div",{className:"col-6"},v.a.createElement("span",null,v.a.createElement(S.a,{symbol:o,as:"b"}))),v.a.createElement("div",{className:"col-3"},v.a.createElement("span",null,v.a.createElement(N.default,{orderId:a,as:"b"}))),v.a.createElement("div",{className:"col-3"},v.a.createElement("span",null,v.a.createElement(C.default,{orderId:a,as:"b"})))),v.a.createElement("div",{className:"col-3 grid-middle grid-right"},v.a.createElement(R.a,{as:"div",className:"btn instrument-list-btn",symbol:o,onClick:function(e){return n(e,a)}},v.a.createElement(R.a,{as:"div",symbol:o},v.a.createElement(T.default,{name:"edit",size:14}))),v.a.createElement(x.a,{as:"div",className:"btn btn-sm instrument-list-btn",symbol:o,onClick:function(e){return r(e,a)}},v.a.createElement(T.default,{name:"close",size:14}))),v.a.createElement("div",{className:"col-12 grid-middle info"},v.a.createElement("div",null,v.a.createElement(D.a,{orderId:a,as:"span"})),v.a.createElement("div",null,v.a.createElement("span",null,v.a.createElement(M.a,{orderId:a,before:v.a.createElement("b",null,__("notification.protection.stopLoss")+" "),after:", "}),v.a.createElement(A.a,{orderId:a,before:v.a.createElement("b",null,__("notification.protection.takeProfit")+" ")})))))}}]),t}(y.Component);U.defaultProps={selectInstrument:g.a.noop,editOrder:g.a.noop,cancelOrder:g.a.noop};var B=U,F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),V=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),F(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.symbols,r=t.hasData,o=t.symbolsSortName,a=t.sortByName;return r?v.a.createElement("div",{className:"instruments-table simple-instrument-list pane pane__sm-xfluid"},v.a.createElement("div",{className:"pane pane__fluid"},v.a.createElement("div",{className:"instruments-table simple-instrument-list pane pane__sm-xfluid"},v.a.createElement("table",null,v.a.createElement("tbody",{className:"rows"},v.a.createElement("tr",{className:"row-header grid-12"},v.a.createElement("th",{className:"col-9 grid-middle order__info"},v.a.createElement(I.a,{as:"div",active:o===w.INSTRUMENT_SORT.NAME,onSort:a,className:"col-6 cursor--pointer"},__("table.header.symbol")),v.a.createElement("div",{className:"col-3 grid-middle"},__("table.header.amount")),v.a.createElement("div",{className:"col-3 grid-middle"},__("table.header.rate")))),g.a.map(n,function(t){return v.a.createElement(d.a,{key:t,symbol:t,onClick:function(n){return e.openInstrumentDetails(n,t)},as:"tr",className:"row-expand"},v.a.createElement(f.a,{as:"td",colSpan:5,symbol:t,editOrder:e.editOrder,cancelOrder:e.cancelOrder,selectInstrument:e.selectInstrument,RenderComponent:B}))}))))),v.a.createElement("div",{className:"pane"},v.a.createElement(E.a,{className:"btn-primary pane__fluid"}))):v.a.createElement(j.default,{as:"div",className:"pane pane__yfluid flex flex-valign-center flex-align-center"})}}]),t}(p.a);t.default=Object(m.a)(Object(b.a)(Object(h.connect)(l,u)(V)))},1957:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){var n=t.symbol,r=t.as,o=void 0===r?"span":r;return{value:Object(c.getInstrumentName)(e,n),as:o}}var a=n(1),i=n.n(a),s=n(4),c=n(84),l=function(e){var t=e.value,n=(e.symbol,e.dispatch,r(e,["value","symbol","dispatch"]));return i.a.createElement(n.as,n,t)};t.a=Object(s.connect)(o)(l)},1958:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(10),s=n(2),c=n.n(s),l=n(1),u=n.n(l),f=n(0),p=n.n(f),d=n(47),b=n(215),m=n(216),y=n(794),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),v(t,[{key:"selectInstrument",value:function(e,t){e.stopPropagation(),e.preventDefault(),store.dispatch(Object(d.setShouldInstrumentBeCentered)(!1)),p.a.delay(function(){return store.dispatch(Object(d.selectInstrumentSymbolAndUpdateUrl)(t))},10)}},{key:"sortByName",value:function(e){store.dispatch(Object(d.setSymbolsSort)(i.INSTRUMENT_SORT.NAME,e))}},{key:"sortByChange",value:function(e){store.dispatch(Object(d.setSymbolsSort)(i.INSTRUMENT_SORT.CHANGE,e))}},{key:"sortBySentiments",value:function(e){store.dispatch(Object(d.setSymbolsSort)(i.INSTRUMENT_SORT.SENTIMENT,e))}},{key:"toggleFavorite",value:function(e,t){e.preventDefault(),e.stopPropagation(),c.a.trigger("favorites:toggle",t)}},{key:"buy",value:function(e,t){Object(b.h)(t)&&c.a.trigger("ui:new-position",{direction:i.BUY,symbolOrId:t})}},{key:"sell",value:function(e,t){Object(b.m)(t)&&c.a.trigger("ui:new-position",{direction:i.SELL,symbolOrId:t})}},{key:"editPosition",value:function(e,t){e.preventDefault(),e.stopPropagation(),store.dispatch(Object(m.editPosition)(t))}},{key:"closePosition",value:function(e,t){e.preventDefault(),e.stopPropagation(),store.dispatch(Object(m.closePosition)(t))}},{key:"cancelOrder",value:function(e,t){e.preventDefault(),e.stopPropagation(),store.dispatch(Object(y.b)(t))}},{key:"editOrder",value:function(e,t){e.preventDefault(),e.stopPropagation(),store.dispatch(Object(y.c)(t))}},{key:"closeInstrumentDetails",value:function(e,t){e.preventDefault(),e.stopPropagation(),c.a.trigger("ui:close-instrument-details",t)}},{key:"openPriceAlerts",value:function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.preventDefault(),e.stopPropagation(),c.a.trigger("ui:create-price-alert",t)}},{key:"cancelAllInstrumentOrders",value:function(e,t){e.preventDefault(),e.stopPropagation(),c.a.trigger("instrument:orders:cancel_all",t)}},{key:"closeAllInstrumentPositions",value:function(e,t){e.preventDefault(),e.stopPropagation(),c.a.trigger("instrument:positions:close_all",t)}},{key:"openInstrumentDetails",value:function(e,t){store.dispatch(Object(d.toggleInstrumentDetails)(t))}},{key:"render",value:function(){return null}}]),t}(u.a.Component);t.a=h},1971:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{setInstrumentInfoVisibleIfNeeded:function(t){var n=t?c.VISIBLE:c.HIDDEN;e(Object(p.changeInstrumentInfoVisibility)(n))},dispatch:e}}function s(e){return{deepLinkSymbol:e.deepLinks.list.symbol,selectedSymbol:e.ui.selectedInstrumentCategorySymbol}}var c=n(10),l=n(1),u=n.n(l),f=n(4),p=n(47),d=n(0),b=n.n(d),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){var t=function(t){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,t),m(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.symbols,n=e.hasData,r=e.selectedSymbol,o=b.a.isArray(t)?t:b.a.keys(t);b.a.isNil(this.props.deepLinkSymbol)&&(b.a.contains(o,r)||this.props.dispatch(Object(p.selectInstrumentCategorySymbol)(b.a.first(o))),this.props.setInstrumentInfoVisibleIfNeeded(n),this.props.deepLinkSymbol&&b.a.delay(function(){return store.dispatch(clearDeepLinkParam("symbol"))},0))}},{key:"componentDidUpdate",value:function(){this.props.setInstrumentInfoVisibleIfNeeded(this.props.hasData)}},{key:"render",value:function(){return u.a.createElement(e,this.props)}}]),n}(u.a.Component);return Object(f.connect)(s,i)(t)};t.a=y},1973:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){var n=t.symbol;return{positionsAvailable:void 0!==e.positions.instrumentPositions[n],ordersAvailable:void 0!==e.orders.instrumentOrders[n]}}var a=n(1),i=n.n(a),s=n(4),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(e){var t=e.as,n=e.positionsAvailable,o=e.ordersAvailable,a=(e.dispatch,e.children),s=(e.symbol,r(e,["as","positionsAvailable","ordersAvailable","dispatch","children","symbol"]));return n||o?i.a.createElement(t||"span",c({},s),a):null};t.a=Object(s.connect)(o)(l)},1982:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){var n=t.orderId,r=e.orders.ORDER[n],o=r&&e.instruments.FX_INSTRUMENT[r._instrumentSymbol],a=r&&r.stopLoss,i=o&&o.precision;return{value:r&&o&&a&&a.fixedPrice,precision:i}}var a=n(1),i=n.n(a),s=n(11),c=n.n(s),l=n(4),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.a=Object(l.connect)(o)(c()({render:function(){var e=this.props,t=e.as,n=e.before,o=e.after,a=(e.orderId,e.value),s=e.precision,c=(e.dispatch,r(e,["as","before","after","orderId","value","precision","dispatch"]));return null===a?null:i.a.createElement(t||"span",u({},c),n,Number(a).toFixed(s),o)}}))},1983:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){var n=t.orderId,r=e.orders.ORDER[n],o=r&&e.instruments.FX_INSTRUMENT[r._instrumentSymbol],a=r&&r.takeProfit,i=o&&o.precision;return{value:r&&o&&a&&a.fixedPrice,precision:i}}var a=n(1),i=n.n(a),s=n(11),c=n.n(s),l=n(4),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.a=Object(l.connect)(o)(c()({render:function(){var e=this.props,t=e.before,n=e.after,o=e.as,a=(e.orderId,e.value),s=e.precision,c=(e.dispatch,r(e,["before","after","as","orderId","value","precision","dispatch"]));return null===a?null:i.a.createElement(o||"span",u({},c),t,Number(a).toFixed(s),n)}}))},1984:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){var n=t.symbol,r=t.onClick,o=void 0===r?m.a.noop:r,a=t.as,i=void 0===a?"span":a;return{editable:Object(y.j)(e,n),onClick:o,as:i}}var l=n(1),u=n.n(l),f=n(12),p=n.n(f),d=n(4),b=n(0),m=n.n(b),y=n(215),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),h(t,[{key:"onClick",value:function(e){var t=this.props,n=t.onClick;t.editable&&n(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.editable,a=(t.dispatch,t.symbol),i=t.className,s=t.children,c=o(t,["editable","dispatch","symbol","className","children"]),l=p()(r({disabled:!n},i,!!i));return n||(c.disabled=!0,c["aria-label"]=Object(y.f)(a)),u.a.createElement(c.as,v({className:l},c,{onClick:function(t){return e.onClick(t)}}),s)}}]),t}(u.a.Component);t.a=Object(d.connect)(c)(O)},1985:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){var n=t.symbol;return{cancelable:Object(y.i)(e,n)}}var l=n(1),u=n.n(l),f=n(12),p=n.n(f),d=n(4),b=n(0),m=n.n(b),y=n(215),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),h(t,[{key:"onClick",value:function(e){var t=this.props,n=t.onClick;t.cancelable&&n(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.cancelable,a=(t.dispatch,t.symbol),i=t.className,s=(t.onClick,t.children),c=o(t,["cancelable","dispatch","symbol","className","onClick","children"]),l=p()(r({disabled:!n},i,!!i));return n||(c.disabled=!0,c["aria-label"]=Object(y.f)(a)),u.a.createElement(c.as,v({className:l},c,{onClick:function(t){return e.onClick(t)}}),s)}}]),t}(u.a.Component);O.defaultProps={onClick:m.a.noop,as:"span"},t.a=Object(d.connect)(c)(O)},1989:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){var n=t.symbol,r=e.orders.instrumentOrdersCounter[n];return{counter:r?r._count:0,list:e.orders.instrumentOrders[n]}}var a=n(1),i=n.n(a),s=n(4),c=n(0),l=n.n(c),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(e){var t=e.as,n=e.counter,o=e.renderItem,a=e.list,s=(e.dispatch,e.children,e.symbol,r(e,["as","counter","renderItem","list","dispatch","children","symbol"]));if(!n)return null;var c=l.a.keys(a);return i.a.createElement(t||"div",u({},s),l.a.map(c,o))};t.a=Object(s.connect)(o)(f)},1992:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(1),c=n.n(s),l=n(0),u=n.n(l),f=n(107),p=n.n(f),d=n(10),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={dirIndex:0},e.click=e.click.bind(e),e}return i(t,e),m(t,[{key:"click",value:function(e){e.preventDefault();var t=++this.state.dirIndex%this.props.dirs.length;this.setState({dirIndex:t}),this.props.onSort(this.props.dirs[t])}},{key:"render",value:function(){var e=this.props,t=e.children,n=(e.onSort,e.active),o=(e.dirIndex,e.dirs,e.dirsIcons),a=r(e,["children","onSort","active","dirIndex","dirs","dirsIcons"]);return c.a.createElement(a.as,b({},a,{onClick:this.click}),t," ",n&&p()(o[this.state.dirIndex]))}}]),t}(s.Component);y.defaultProps={as:"span",onSort:u.a.noop,active:!1,dirIndex:0,dirs:[d.SORT_DIRECTION_ASC,d.SORT_DIRECTION_DESC],dirsIcons:["&#9650;","&#9660;"]},t.a=y},2040:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n.n(r),a=function(e){return o.a.createElement(e.as,e,o.a.createElement("div",null,o.a.createElement("div",{className:"icon icon-orders-empty"}),o.a.createElement("div",{className:"caption"},__("tab.orders.empty.line1")),o.a.createElement("div",{className:"text"},__("tab.orders.empty.line2")),o.a.createElement("div",{className:"text"},__("tab.orders.empty.line3")),o.a.createElement("br",null),o.a.createElement("a",{className:"btn btn-primary",href:"#trading"},__("tab.orders.empty.button"))))};a.defaultProps={as:"div"},t.default=a},2046:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return e.replace(/\$/g,"")}var s=n(1),c=n.n(s),l=n(2),u=n.n(l),f=n(0),p=n.n(f),d=n(23),b=n.n(d),m=n(8),y=n.n(m),v=function(e,t){y.a.requestConversionSubscription(e,t,b.a.getAtmosphereId())},h=function(e,t){y.a.requestConversionUnsubscription(e,t,b.a.getAtmosphereId())},O=n(27),g=n.n(O),_=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),j=1,w=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=i(e.from),s=i(e.to);return n.state={from:a,to:s,conversionRate:j},g()(n),n}return a(t,e),E(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.from,n=e.to;if(t=i(t),n=i(n),t===n)return void this.setState({from:t,to:n,conversionRate:1});t===this.state.from&&n===this.state.to||(this.updateSubscription({from:t,to:n}),this.setState({from:t,to:n}))}},{key:"componentDidMount",value:function(){u.a.on("stream:type:CONVERSION_RATE",this.onConversionRateChange),this.subscribeConversionRate(this.state)}},{key:"subscribeConversionRate",value:function(e){var t=e.from,n=e.to;v(t,n)}},{key:"unsubscribeConversionRate",value:function(e){var t=e.from,n=e.to;h(t,n)}},{key:"updateSubscription",value:function(e){this.unsubscribeConversionRate(this.state),this.subscribeConversionRate(e)}},{key:"componentWillUnmount",value:function(){u.a.off("stream:type:CONVERSION_RATE",this.onConversionRateChange),this.unsubscribeConversionRate(this.state)}},{key:"onConversionRateChange",value:function(e){var t=_(e,1),n=t[0],r=n.from,o=n.to,a=n.value;r===this.state.from&&o===this.state.to&&(this.setState({conversionRate:a}),this.unsubscribeConversionRate({from:r,to:o}),this.props.onConversionRateChange(n))}},{key:"render",value:function(){var e=this.state.conversionRate;return p.a.isFunction(this.props.children)?this.props.children(e):null}}]),t}(c.a.Component);w.defaultProps={onConversionRateChange:p.a.noop};t.a=w},2061:function(e,t,n){var r=n(1),o=n(11),a=n(2),i=n(15),s=n(0),c=n(109),l="change:sellTradable change:buyTradable change:outOfMarketHours change:isMarginLevelLow change:cancelable",u=function(){return s.filter(s.keys(c._instrumentIds),function(e){var t=i.getInstrumentById(e);return t&&t.status.isCancelable()}).length};e.exports=o({displayName:"exports",getDefaultProps:function(){return{className:"",prevent:!1}},getInitialState:function(){return{disabled:!u()}},click:function(e){!1!==this.props.prevent&&(e.preventDefault(),e.stopPropagation()),a.trigger("orders:cancel_all")},componentDidMount:function(){this.createListener(),c.on("add-instrument",this.createSubscription,this),c.on("remove-instrument",this.removeSubscription,this)},componentWillUnmount:function(){this.removeListener(),c.off("add-instrument",this.createSubscription,this),c.off("remove-instrument",this.removeSubscription,this)},shouldComponentUpdate:function(e,t){return t.disabled!==this.state.disabled},createSubscription:function(e){var t=i.getInstrumentById(e);t&&(t.on(l,this.update,this),this.update())},removeSubscription:function(e){var t=i.getInstrumentById(e);t&&(t.off(l,this.update,this),this.update())},updateListener:function(){this.removeListener(),this.createListener(),this.update()},createListener:function(){s.map(s.keys(c._instrumentIds),this.createSubscription,this)},removeListener:function(){s.map(s.keys(c._instrumentIds),this.removeSubscription,this)},update:function(){this.setState({disabled:!u()})},render:function(){return r.createElement("button",{className:"btn "+this.props.className,disabled:this.state.disabled,onClick:this.click},__("actions.cancel_all_orders"))}})},2115:function(e,t,n){"use strict";function r(e){return{symbols:Object(o.f)(e),symbolsSortName:Object(s.getSymbolsSortName)(e),hasData:Object(o.h)(e)>0}}var o=n(808),a=n(1),i=(n.n(a),n(4)),s=n(163),c=function(e){return Object(i.connect)(r)(e)};t.a=c},2336:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function s(e){return{selectInstrument:function(t,n){e(Object(f.selectInstrumentSymbolAndUpdateUrl)(n))}}}var c=n(1),l=n.n(c),u=n(4),f=n(47),p=n(1989),d=(n(2337),n(797)),b=n(796),m=n(1984),y=n(1985),v=n(217),h=n(1982),O=n(1983),g=n(0),_=n.n(g),E=n(800),j=n(799),w=n(801),I=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),P=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),I(t,[{key:"render",value:function(){var e=this.props,t=e.selectInstrument,n=e.editOrder,r=e.cancelOrder,o=e.symbol,a=e.orderId;return l.a.createElement("div",{onClick:function(e){return t(e,o)},className:"subrow-expanded grid-12 grid-noGutter order new-advanced__order-details"},l.a.createElement("div",{className:"col-9 grid-middle order__info"},l.a.createElement("div",{className:"col-4"},l.a.createElement("div",null,l.a.createElement("b",null,__("order"),": ")),l.a.createElement("div",null,l.a.createElement(E.default,{orderId:a})," ",l.a.createElement(j.default,{orderId:a})," ")),l.a.createElement("div",{className:"col-8"},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("b",null,__("order.form.amount.cfd")),":"," ",l.a.createElement(d.default,{orderId:a})," ",l.a.createElement(w.default,{orderId:a,as:"span"}))," ",l.a.createElement(b.default,{orderId:a})," "),l.a.createElement("div",null,l.a.createElement(h.a,{orderId:a,before:l.a.createElement("b",null,__("notification.protection.stopLoss")+" ")}),l.a.createElement(O.a,{orderId:a,before:l.a.createElement("b",null," ",__("notification.protection.takeProfit")+" ")})))),l.a.createElement("div",{className:"col-3 grid-middle grid-right"},l.a.createElement(m.a,{as:"div",className:"btn instrument-list-btn",symbol:o,onClick:function(e){return n(e,a)}},l.a.createElement(m.a,{as:"div",symbol:o},l.a.createElement(v.default,{name:"edit",size:14}))),l.a.createElement(y.a,{as:"div",className:"btn btn-sm instrument-list-btn",symbol:o,onClick:function(e){return r(e,a)}},l.a.createElement(v.default,{name:"close",size:14}))))}}]),t}(c.Component);P.defaultProps={selectInstrument:_.a.noop,editOrder:_.a.noop,cancelOrder:_.a.noop};var k=P,S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N=function(e){var t=e.selectInstrument,n=e.editOrder,r=e.cancelOrder,o=e.RenderComponent,a=i(e,["selectInstrument","editOrder","cancelOrder","RenderComponent"]);return l.a.createElement(p.a,S({},a,{className:"advanced-orders-list",renderItem:function(e){return l.a.createElement(o,{selectInstrument:t,editOrder:n,cancelOrder:r,symbol:a.symbol,orderId:e,key:"order-"+e})}}))};N.defaultProps={RenderComponent:k};t.a=Object(u.connect)(null,s)(N)},2337:function(e,t,n){var r=n(2338);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(1905)(r,o);r.locals&&(e.exports=r.locals)},2338:function(e,t,n){t=e.exports=n(1904)(void 0),t.push([e.i,".instruments-table>table .rows .row-expand .advanced-orders-list .info{padding:0}.instruments-table>table .rows .row-expand .advanced-orders-list .info div{font-size:11px}",""])},2623:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n=t.orderId,r=Object(d.a)(e,n),o=Object(d.e)(e,n),a=Object(d.d)(e,n),i=Object(d.b)(e,n),s=Object(d.c)(e,n),c=Object(m.getInstrumentMarginRatePercent)(e,a);return{action:r,spread:Object(m.getInstrumentSpread)(e,a),priceRate:s,amount:i,type:o,symbol:a,marginRate:c,instrumentCurrency:Object(m.getInstrumentCurrency)(e,a)}}function c(e){return{loadMargining:function(t){e(Object(y.loadMarginingSettings)(t))}}}function l(e,t,n,r,o){var a=void 0;t/=100,e/=100;var i=t*n;return a=r===b.BUY?(o+(o-t))/2:(o+(o+t))/2,n*a*e+i}var u=n(1),f=n.n(u),p=n(4),d=n(808),b=n(10),m=n(84),y=n(281),v=n(2046),h=n(7),O=n.n(h),g=n(29),_=n.n(g),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),j=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),E(t,[{key:"componentDidMount",value:function(){this.props.loadMargining(this.props.symbol)}},{key:"render",value:function(){var e=this.props,t=(e.orderId,e.amount),n=e.type,o=e.action,a=(e.dispatch,e.marginRate),i=e.spread,s=(e.symbol,e.priceRate),c=e.instrumentCurrency,u=(e.loadMargining,r(e,["orderId","amount","type","action","dispatch","marginRate","spread","symbol","priceRate","instrumentCurrency","loadMargining"])),p=l(a,i,Math.abs(t),o,Number(s)),d=O.a.getUserCurrency(),b=O.a.getUserCurrencySymbol();return f.a.createElement(v.a,{from:c,to:d},function(e){return f.a.createElement(u.as,u,f.a.createElement("b",null,"STOP"===n?__("type.STOP"):__("type.LIMIT")," ",o," ",__("order.margin"),":")," ",_()(p*e).formatForeignCurrency(b))})}}]),t}(f.a.Component);j.defaultProps={as:"span"},t.a=Object(p.connect)(s,c)(j)},2862:function(e,t,n){var r=n(2863);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(1905)(r,o);r.locals&&(e.exports=r.locals)},2863:function(e,t,n){t=e.exports=n(1904)(void 0),t.push([e.i,".instruments-table>table .rows .row-header{padding:11px 1em}",""])}});