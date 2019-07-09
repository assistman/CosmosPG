webpackJsonp([21],{1983:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),c=n(2010),l=n(123),s=n(815),u=n(2020),m=n(2021),d=n(1),p=n.n(d),f=n(0),b=n.n(f),y=n(804),h=n(812),v=n(813),E=n(811),O=n(809),g=n(810),_=n(2025),N=n(2024),w=n(808),j=n(2125),P=n(2092),C=n(803),I=n(2338),S=n(817),x=n(2196),k=n(2339),T=n(801),D=n(807),M=n(822),R=n(823),U=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),A=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),U(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.symbolsSortName,a=t.symbols;return t.hasData?p.a.createElement("div",{className:"instruments-table trading-tab "},p.a.createElement("table",null,p.a.createElement("thead",{className:"columns"},p.a.createElement("tr",null,p.a.createElement(c.a,{as:"th",active:n===i.INSTRUMENT_SORT.NAME,onSort:this.sortByName,className:"column column-instrument-name column-sortable"},__("table.header.symbol")),p.a.createElement("th",{className:"column column-rate-with-button"},p.a.createElement("div",null,p.a.createElement("div",null,__("actions.sell")))),p.a.createElement("th",{className:"column column-rate-with-button"},p.a.createElement("div",null,p.a.createElement("div",null,__("actions.buy")))),p.a.createElement(l.default,{minWidth:1050},p.a.createElement("th",{className:"column column-change column-sortable"},__("actions.change"))),p.a.createElement(l.default,{minWidth:1605},p.a.createElement("th",{className:"column column-range"},__("range"))),p.a.createElement(l.default,{minWidth:885},p.a.createElement(c.a,{as:"th",active:n===i.INSTRUMENT_SORT.SENTIMENT,onSort:this.sortBySentiments,className:"column column-sentiment column-sortable"},__("sentiment.title"))),p.a.createElement(l.default,{minWidth:1450},p.a.createElement("th",{className:"column column-mini-chart"},__("table.header.mini-chart"))),p.a.createElement("th",{className:"column"}))),p.a.createElement("tbody",{className:"rows"},b.a.map(a,function(t){return p.a.createElement(d.Fragment,{key:t},p.a.createElement(R.a,{as:"tr",className:"row",symbol:t,onClick:function(n){return e.selectInstrument(n,t)}},p.a.createElement(l.default,{maxWidth:1199},p.a.createElement("td",{className:"cell-instrument-name-with-change instrument-name-with-change"},p.a.createElement(T.a,{symbol:t,className:"instrument-name-cell"}),p.a.createElement(M.a,{symbol:t,as:"div",className:"change flex flex-start"},p.a.createElement(D.a,{symbol:t})))),p.a.createElement(l.default,{minWidth:1200},p.a.createElement("td",{className:"cell-instrument-name instrument-name"},p.a.createElement(T.a,{symbol:t,className:"instrument-name-cell"}))),p.a.createElement("td",{className:"rate-with-button  cell-rate-with-button"},p.a.createElement("div",null,p.a.createElement("div",{className:"rate"},p.a.createElement(O.a,{as:"div",symbol:t,className:"change"},p.a.createElement(E.a,{as:"span",symbol:t}))),p.a.createElement("div",{className:"button"},p.a.createElement(g.a,{onClick:function(n){return e.sell(n,t)},as:"button",symbol:t,className:"btn btn-sell btn-primary btn-xs"},__("actions.sell"))))),p.a.createElement("td",{className:"rate-with-button cell-rate-with-button"},p.a.createElement("div",null,p.a.createElement("div",{className:"rate"},p.a.createElement(h.a,{as:"div",symbol:t,className:"change"},p.a.createElement(y.a,{as:"span",symbol:t}))),p.a.createElement("div",{className:"button"},p.a.createElement(v.a,{onClick:function(n){return e.buy(n,t)},as:"button",symbol:t,className:"btn btn-buy btn-primary btn-xs"},__("actions.buy"))))),p.a.createElement(l.default,{minWidth:1050},p.a.createElement("td",{className:"cell-change"},p.a.createElement(M.a,{symbol:t,className:"change"},p.a.createElement(D.a,{symbol:t})))),p.a.createElement(l.default,{minWidth:1605},p.a.createElement("td",{className:"cell-range"},p.a.createElement(I.a,{symbol:t,as:"div"}))),p.a.createElement(l.default,{minWidth:885},p.a.createElement("td",{className:"sentiment-block"},p.a.createElement(k.a,{as:"div",symbol:t,"data-tooltip-align":"right","aria-label":__("sentiment.text")}))),p.a.createElement(l.default,{minWidth:1450},p.a.createElement("td",{className:"instrument-mini-chart"},p.a.createElement("div",{className:"instrument-mini-chart-cell"},p.a.createElement(x.a,{symbol:t,width:75})))),p.a.createElement("td",{className:"cell-actions actions"},p.a.createElement("div",{className:"actions"},p.a.createElement("div",{className:"btn btn-icon",onClick:function(n){return e.toggleFavorite(n,t)}},p.a.createElement(w.a,{symbol:t,as:"div",className:"",yes:"icon-star-filled",no:"icon-star"})),p.a.createElement(u.a,{as:"div",className:"btn btn-icon",onClick:function(n){return e.openPriceAlerts(n,t)}},p.a.createElement(m.a,{symbol:t,as:"div",className:"",yes:"icon-bell-filled",no:"icon-bell"})),p.a.createElement("div",{className:"btn btn-icon"},p.a.createElement("div",{className:"icon-instrument-info",onClick:function(n){return e.openInstrumentDetails(n,t)}}))))),p.a.createElement(S.a,{symbol:t,as:"tr",className:"row-expand"},p.a.createElement(N.default,{as:"td",colSpan:5,symbol:t,editPosition:e.editPosition,closePosition:e.closePosition,selectInstrument:e.selectInstrument}),p.a.createElement(_.default,{as:"td",colSpan:5,symbol:t,editOrder:e.editOrder,cancelOrder:e.cancelOrder,selectInstrument:e.selectInstrument})))})))):p.a.createElement(j.a,{className:"pane pane__yfluid flex flex-valign-center flex-align-center"})}}]),t}(C.a);t.default=Object(P.a)(Object(s.a)(A))},2010:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(1),l=n.n(c),s=n(0),u=n.n(s),m=n(108),d=n.n(m),p=n(10),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={dirIndex:0},e.click=e.click.bind(e),e}return i(t,e),b(t,[{key:"click",value:function(e){e.preventDefault();var t=++this.state.dirIndex%this.props.dirs.length;this.setState({dirIndex:t}),this.props.onSort(this.props.dirs[t])}},{key:"render",value:function(){var e=this.props,t=e.children,n=(e.onSort,e.active),r=(e.dirIndex,e.dirs,e.dirsIcons),o=a(e,["children","onSort","active","dirIndex","dirs","dirsIcons"]);return l.a.createElement(o.as,f({},o,{onClick:this.click}),t," ",n&&d()(r[this.state.dirIndex]))}}]),t}(c.Component);y.defaultProps={as:"span",onSort:u.a.noop,active:!1,dirIndex:0,dirs:[p.SORT_DIRECTION_ASC,p.SORT_DIRECTION_DESC],dirsIcons:["&#9650;","&#9660;"]},t.a=y},2018:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.positionCode,a=(t.as,e.positions.OPEN_POSITION[n]),r=a&&a.expirationDate||!1;return{value:r,shouldShowExpiration:!p.a.mobile()&&r}}var o=n(1),i=n.n(o),c=n(12),l=n.n(c),s=n(3),u=n(4),m=n.n(u),d=n(17),p=n.n(d),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a=Object(s.connect)(r)(l()({render:function(){var e=this.props,t=e.value,n=e.as,r=e.shouldShowExpiration,o=(e.dispatch,e.positionCode,e.children,e.before),c=e.after,l=a(e,["value","as","shouldShowExpiration","dispatch","positionCode","children","before","after"]);return r&&!1!==t?i.a.createElement(n||"span",f({},l),o,m()(t).utc().format("DD/MM/YYYY HH:mm"),c):null}}))},2019:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.positionCode,a=(t.as,e.positions.OPEN_POSITION[n]);return{value:a&&a._priceChange||!1,enabled:p.a.isOpenPositionChangePriceEnabled()}}var o=n(1),i=n.n(o),c=n(12),l=n.n(c),s=n(3),u=n(28),m=n.n(u),d=n(9),p=n.n(d),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a=Object(s.connect)(r)(l()({render:function(){var e=this.props,t=e.value,n=e.as,r=e.enabled,o=(e.dispatch,e.positionCode,e.children,e.before),c=e.after,l=a(e,["value","as","enabled","dispatch","positionCode","children","before","after"]);return r&&!1!==t?i.a.createElement(n||"span",f({},l),o,m()(t).format("0,0.00%"),c):null}}))},2020:function(e,t,n){"use strict";(function(e){function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(){return{enabled:m.a.isPriceAlertsEnabled()}}var o=n(3),i=n(1),c=n.n(i),l=n(12),s=n.n(l),u=n(9),m=n.n(u),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a=Object(o.connect)(r)(s()({render:function(){var t=this.props,n=t.as,r=t.enabled,o=(t.dispatch,t.children),i=a(t,["as","enabled","dispatch","children"]);return r?e.isNull(n)?o:c.a.createElement(n||"span",d({},i),o):null}}))}).call(t,n(0))},2021:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n=t.symbol;return{hasPriceAlerts:Object(v.hasInstrumentPriceAlerts)(e,n)}}var s=n(1),u=n.n(s),m=n(11),d=n.n(m),p=n(25),f=n.n(p),b=n(3),y=n(0),h=n.n(y),v=n(40),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),O=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return f()(n),n}return c(t,e),E(t,[{key:"onClick",value:function(e){var t=this.props,n=t.onClick,a=t.symbol,r=t.hasPriceAlerts;h.a.isFunction(n)&&n(e,a,r)}},{key:"render",value:function(){var e,t=this.props,n=t.className,o=t.yes,i=t.no,c=t.yesComponent,l=t.noComponent,s=t.hasPriceAlerts,m=r(t,["className","yes","no","yesComponent","noComponent","hasPriceAlerts"]),p=d()((e={},a(e,n,!!n),a(e,o,s),a(e,i,!s),a(e,"cursor--pointer",!0),a(e,"autotests-action-pricealerts",!0),e));return c&&l?u.a.createElement(m.as,{className:p,onClick:this.onClick},s?c:l):u.a.createElement(m.as,{className:p,onClick:this.onClick})}}]),t}(u.a.Component);O.defaultProps={as:"span",className:"",yes:"yes",no:"no",yesComponent:null,noComponent:null,symbol:""},t.a=Object(b.connect)(l)(O)},2024:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.positionCode,a=(t.as,e.positions.OPEN_POSITION[n]);return{value:a&&a.modifiedTime||!1}}function o(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e){return{selectInstrument:function(t,n){e(Object(f.selectInstrumentSymbolAndUpdateUrl)(n))},editPosition:function(e,t){e.preventDefault(),e.stopPropagation();var n=p.a.getPositionByCode(t);s.a.trigger("ui:edit-position",n)},closePosition:function(e,t){var n=p.a.getPositionByCode(t);s.a.trigger("ui:close-position",n)}}}function c(e){return{closingPosition:e.positions.closingPosition}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),s=n.n(l),u=n(1),m=n.n(u),d=n(60),p=n.n(d),f=n(33),b=n(3),y=n(835),h=n(825),v=n(830),E=n(831),O=n(827),g=n(828),_=n(12),N=n.n(_),w=n(4),j=n.n(w),P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},C=Object(b.connect)(r)(N()({render:function(){var e=this.props,t=e.value,n=e.as,r=(e.dispatch,e.positionCode,e.children,e.before),o=e.after,i=a(e,["value","as","dispatch","positionCode","children","before","after"]);return!1===t?null:m.a.createElement(n||"span",P({},i),r,j()(t).utc().format("DD/MM/YYYY HH:mm"),o)}})),I=n(824),S=n(829),x=n(2018),k=n(2019),T=n(816),D=n(826),M=n(10),R=n(11),U=n.n(R),A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W=function(e){var t=e.selectInstrument,n=e.editPosition,a=e.closePosition,r=e.closingPosition,i=o(e,["selectInstrument","editPosition","closePosition","closingPosition"]);return m.a.createElement(y.a,A({},i,{renderItem:function(e){return m.a.createElement("div",{onClick:function(e){return t(e,i.symbol)},className:U()({"subrow-expanded grid-12 grid-noGutter position":!0,"request-processing":r[e]&&r[e].status===M.PROCESSING}),key:"position-"+e},m.a.createElement("div",{className:"col-7 grid-middle position__info"},m.a.createElement("div",{className:"col-4 position__type"},m.a.createElement("i",{className:"icon icon-verify-account-grey"}),m.a.createElement("span",{className:"subrow-expanded__title"},__("p_l"),": "),m.a.createElement(I.a,{as:"span",className:"change",positionCode:e},m.a.createElement(h.a,{positionCode:e}))),m.a.createElement("div",{className:"col-8 info"},m.a.createElement("span",null,m.a.createElement("span",null,m.a.createElement(O.a,{positionCode:e,as:"b"}),": "," ",m.a.createElement(g.a,{positionCode:e,abs:!0})," @ ",m.a.createElement(S.a,{positionCode:e})),m.a.createElement(v.a,{positionCode:e,before:m.a.createElement("b",null,", "+__("notification.protection.takeProfit")+" ")}),m.a.createElement(E.a,{positionCode:e,before:m.a.createElement("b",null,", "+__("notification.protection.stopLoss")+" ")}),m.a.createElement(C,{as:"span",positionCode:e,before:m.a.createElement("b",null,", ",__("actions.modified_on")," ")}),m.a.createElement(k.a,{as:"span",positionCode:e,before:m.a.createElement("b",null,","," "+__("tab.open_positions.column.price.change")+" ")}),m.a.createElement(x.a,{as:"span",positionCode:e,before:m.a.createElement("b",null,","," "+__("tab.open_positions.column.expiration")+" ")})))),m.a.createElement("div",{className:"col-4 grid-middle grid-right"},m.a.createElement(D.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn instrument-list-btn--edit",symbol:i.symbol,onClick:function(t){return n(t,e)}},m.a.createElement(D.a,{as:"div"},__("actions.edit"))),m.a.createElement(T.a,{as:"div",className:"btn btn-close-min-width btn-operation btn-sm instrument-list-btn instrument-list-btn--close",symbol:i.symbol,onClick:function(t){return a(t,e)}},m.a.createElement("div",null,__("close")))))}}))};t.default=Object(b.connect)(c,i)(W)},2025:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e){return{selectInstrument:function(t,n){e(Object(d.selectInstrumentSymbolAndUpdateUrl)(n))},cancelOrder:function(e,t){var n=m.a.getOrderById(t);i.a.trigger("ui:cancel-order",n)},editOrder:function(e,t){e.preventDefault(),e.stopPropagation();var n=m.a.getOrderById(t);i.a.trigger("ui:edit-order",n)}}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n.n(o),c=n(1),l=n.n(c),s=n(3),u=n(110),m=n.n(u),d=n(33),p=n(836),f=n(423),b=n(425),y=n(424),h=n(420),v=n(419),E=n(833),O=n(834),g=n(832),_=n(819),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w=function(e){var t=e.selectInstrument,n=e.editOrder,r=e.cancelOrder,o=a(e,["selectInstrument","editOrder","cancelOrder"]);return l.a.createElement(p.a,N({},o,{renderItem:function(e){return l.a.createElement("div",{onClick:function(e){return t(e,o.symbol)},className:"subrow-expanded grid-12 grid-noGutter order",key:"order-"+e},l.a.createElement("div",{className:"col-8 grid-middle order__info"},l.a.createElement("div",{className:"col-4 order__type"},l.a.createElement("i",{className:"icon icon-order-grey"}),l.a.createElement("span",{className:"subrow-expanded__title"},__("order"),": "),l.a.createElement(y.default,{orderId:e,as:"b"})," ",l.a.createElement(f.default,{orderId:e,as:"b"})," "),l.a.createElement("div",{className:"col-8 info"},l.a.createElement("span",null,l.a.createElement("span",null,l.a.createElement("b",null,__("order.form.amount.cfd")),":"," "),l.a.createElement("span",null,l.a.createElement(h.default,{orderId:e})," ",l.a.createElement(b.default,{orderId:e,as:"span"})," ",l.a.createElement(v.default,{orderId:e}),l.a.createElement(E.a,{orderId:e,before:l.a.createElement("b",null,", "+__("notification.protection.stopLoss")+" ")}),l.a.createElement(O.a,{orderId:e,before:l.a.createElement("b",null,", "+__("notification.protection.takeProfit")+" ")}))))),l.a.createElement("div",{className:"col-4 grid-middle grid-right"},l.a.createElement(g.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn",symbol:o.symbol,onClick:function(t){return n(t,e)}},l.a.createElement(g.a,{as:"div"},__("actions.edit"))),l.a.createElement(_.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn",symbol:o.symbol,onClick:function(t){return r(t,e)}},l.a.createElement("div",null,__("actions.cancel")))))}}))};t.default=Object(s.connect)(null,r)(w)},2092:function(e,t,n){"use strict";function a(e){return{symbols:Object(i.getSortedFavoritesSymbols)(e),symbolsSortName:Object(i.getSymbolsSortName)(e),symbolsSortDirection:Object(i.getSymbolsSortDirection)(e),hasData:Object(c.getTotalFavoritesCount)(e)>0}}var r=n(1),o=(n.n(r),n(3)),i=n(121),c=n(57),l=function(e){return Object(o.connect)(a)(e)};t.a=l},2125:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=function(e){return r.a.createElement("div",e,r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-favorites-large"}),r.a.createElement("div",{className:"large-px"},__("tab.favorites.empty.caption")),r.a.createElement("div",{className:"smaller-px"},__("tab.favorites.empty.text")," ",r.a.createElement("span",{className:"icon icon-fav-light"})),r.a.createElement("br",null),r.a.createElement("a",{className:"btn btn-primary",href:"#trading"},__("tab.favorites.empty.button"))))};t.a=o},2196:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(1),l=n.n(c),s=n(9),u=n.n(s),m=n(0),d=n.n(m),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={timestamp:d.a.now()},e}return i(t,e),f(t,[{key:"shouldComponentUpdate",value:function(e,t){return!(d.a.isEqual(e,this.props)||d.a.isEqual(t,this.state))}},{key:"componentDidMount",value:function(){var e=this;this.delayedUpdate=d.a.debounce(function(){e.setState({timestamp:d.a.now()}),e.delayedUpdate()},u.a.getMiniChartsUpdateInterval())}},{key:"componentWillUnmount",value:function(){this.delayedUpdate=d.a.noop}},{key:"render",value:function(){var e=this.props,t=e.symbol,n=a(e,["symbol"]),r=String(t).replace("/","").replace(" ","").toLowerCase(),o=[u.a.getMiniChartsServiceUrl(),r,".png?t=",this.state.timestamp].join("");return l.a.createElement("img",p({src:o},n))}}]),t}(l.a.Component);t.a=b},2338:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.symbol,a=t.as,r=void 0===a?"span":a,o=Object(l.getInstrumentPrecision)(e,n);return{dayHigh:Object(l.getInstrumentDayHigh)(e,n),dayLow:Object(l.getInstrumentDayLow)(e,n),precision:o,as:r}}var o=n(1),i=n.n(o),c=n(3),l=n(40),s=function(e){var t=(e.dispatch,e.symbol,e.dayHigh),n=e.dayLow,r=e.precision,o=a(e,["dispatch","symbol","dayHigh","dayLow","precision"]);return null===t||null===n?null:i.a.createElement(o.as,o,Number(n).toFixed(r)+" - "+Number(t).toFixed(r))};t.a=Object(c.connect)(r)(s)},2339:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){var n=t.symbol,a=t.as,r=void 0===a?"div":a;return{longs:Object(m.getInstrumentSentimentLongs)(e,n),shorts:Object(m.getInstrumentSentimentShorts)(e,n),as:r}}var i=n(1),c=n.n(i),l=n(3),s=n(11),u=n.n(s),m=n(40),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p=function(e){var t=(e.dispatch,e.className),n=e.longs,o=e.shorts,i=(e.symbol,r(e,["dispatch","className","longs","shorts","symbol"]));if(null===n||null===o)return null;var l=u()(a({sentiment:!0},t,!!t));return c.a.createElement(i.as,d({},i,{className:l}),c.a.createElement("div",{className:"sellers"},o,"%"),c.a.createElement("div",{className:"bar"},c.a.createElement("i",{style:{width:o+"%"}}),c.a.createElement("b",{style:{width:n+"%"}})),c.a.createElement("div",{className:"buyers"},n,"%"))};t.a=Object(l.connect)(o)(p)}});