webpackJsonp([36],{1986:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),l=n(2010),c=n(53),s=n(815),u=n(2020),m=n(2021),d=n(1),p=n.n(d),f=n(25),b=n.n(f),h=n(432),y=n(0),v=n.n(y),E=n(804),O=n(812),_=n(813),g=n(811),w=n(809),P=n(810),N=n(862),C=n(2025),j=n(2024),I=n(808),k=n(803),x=n(817),S=n(801),T=n(807),R=n(822),D=n(823),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),M=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return b()(n),n.measurer=Object(c.c)(n,{CellMeasurerCache:h.c}),n}return o(t,e),A(t,[{key:"componentWillUnmount",value:function(){this.measurer()}},{key:"componentWillUpdate",value:function(){this.measurer.resizeAll()}},{key:"_rowRenderer",value:function(e){var t=this,n=e.index,r=(e.isScrolling,e.isVisible,e.key),a=e.parent,o=e.style,i=this.props.symbols,l=i[n];return p.a.createElement(h.b,{cache:this._cache,columnIndex:0,key:r,parent:a,rowIndex:n},p.a.createElement("div",{style:o},p.a.createElement(D.a,{as:"tr",className:"row",symbol:l,onClick:function(e){return t.selectInstrument(e,l)}},p.a.createElement("td",{className:"cell-instrument-name-with-change instrument-name-with-change instrument-name__cell_width_medium"},p.a.createElement(S.a,{as:"div",symbol:l,className:"name"}),p.a.createElement(R.a,{symbol:l,as:"div",className:"change flex flex-start"},p.a.createElement(T.a,{symbol:l}))),p.a.createElement("td",{className:"rate-with-button block cell-rate-with-button block instrument-sell__cell"},p.a.createElement("div",null,p.a.createElement("div",{className:"rate"},p.a.createElement(w.a,{as:"div",symbol:l,className:"change"},p.a.createElement(g.a,{as:"span",symbol:l}))),p.a.createElement("div",{className:"button"},p.a.createElement(P.a,{onClick:function(e){return t.sell(e,l)},as:"button",symbol:l,className:"btn  btn-sell  btn-primary btn-xs"},__("actions.sell"))))),p.a.createElement("td",{className:"rate-with-button block cell-rate-with-button block instrument-buy__cell"},p.a.createElement("div",null,p.a.createElement("div",{className:"rate"},p.a.createElement(O.a,{as:"div",symbol:l,className:"change"},p.a.createElement(E.a,{as:"span",symbol:l}))),p.a.createElement("div",{className:"button"},p.a.createElement(_.a,{onClick:function(e){return t.buy(e,l)},as:"button",symbol:l,className:"btn  btn-buy  btn-primary btn-xs"},__("actions.buy"))))),p.a.createElement("td",{className:"actions"},p.a.createElement("div",{className:"actions"},p.a.createElement("div",{className:"btn btn-icon",onClick:function(e){return t.toggleFavorite(e,l)}},p.a.createElement(I.a,{symbol:l,as:"div",className:"",yes:"icon-star-filled",no:"icon-star"})),p.a.createElement(u.a,{as:"div",className:"btn btn-icon",onClick:function(e){return t.openPriceAlerts(e,l)}},p.a.createElement(m.a,{symbol:l,as:"div",className:"",yes:"icon-bell-filled",no:"icon-bell"})),p.a.createElement("div",{className:"btn btn-icon"},p.a.createElement("div",{className:"icon-instrument-info",onClick:function(e){return t.openInstrumentDetails(e,l)}}))))),p.a.createElement(x.a,{symbol:l,as:"tr",className:"row-expand"},p.a.createElement(j.default,{as:"td",colSpan:5,symbol:l,editPosition:this.editPosition,closePosition:this.closePosition,selectInstrument:this.selectInstrument}),p.a.createElement(C.default,{as:"td",colSpan:5,symbol:l,editOrder:this.editOrder,cancelOrder:this.cancelOrder,selectInstrument:this.selectInstrument}))))}},{key:"render",value:function(){var e=this,t=this.props,n=t.symbols,r=t.path,a=t.totalPositionsCount,o=t.totalOrdersCount,c=t.symbolsSortName,s=t.symbolsSortDirection,u="list-"+r+"-"+a+"-"+o+"-"+c+"-"+s;return p.a.createElement("div",{className:"instruments-table trading-tab pane__yfluid"},p.a.createElement("table",null,p.a.createElement("thead",{className:"columns"},p.a.createElement("tr",null,p.a.createElement(l.a,{as:"th",active:c===i.INSTRUMENT_SORT.NAME,onSort:this.sortByName,className:"column column-instrument-name column-sortable"},__("table.header.symbol")),p.a.createElement("th",{className:"column column-rate-with-button column-instrument-sell"},p.a.createElement("div",null,p.a.createElement("div",null,__("actions.sell")))),p.a.createElement("th",{className:"column column-rate-with-button column-instrument-buy"},p.a.createElement("div",null,p.a.createElement("div",null,__("actions.buy")))),p.a.createElement("th",{className:"column"}))),p.a.createElement("tbody",{className:"rows"},p.a.createElement(h.a,null,function(t){var r=t.height,a=t.width;return p.a.createElement(h.d,{ref:function(t){e._list=t},key:u,height:r,"aria-label":"",rowCount:v.a.size(n),overscanRowCount:10,width:a,rowHeight:e._cache.rowHeight,rowRenderer:e._rowRenderer,scrollTop:e._scrollTop,onScroll:function(t){var n=t.scrollTop;e._scrollTop=n}})}))))}}]),t}(k.a);t.default=Object(N.a)(Object(s.a)(M))},2010:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),c=n.n(l),s=n(0),u=n.n(s),m=n(108),d=n.n(m),p=n(10),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={dirIndex:0},e.click=e.click.bind(e),e}return i(t,e),b(t,[{key:"click",value:function(e){e.preventDefault();var t=++this.state.dirIndex%this.props.dirs.length;this.setState({dirIndex:t}),this.props.onSort(this.props.dirs[t])}},{key:"render",value:function(){var e=this.props,t=e.children,n=(e.onSort,e.active),a=(e.dirIndex,e.dirs,e.dirsIcons),o=r(e,["children","onSort","active","dirIndex","dirs","dirsIcons"]);return c.a.createElement(o.as,f({},o,{onClick:this.click}),t," ",n&&d()(a[this.state.dirIndex]))}}]),t}(l.Component);h.defaultProps={as:"span",onSort:u.a.noop,active:!1,dirIndex:0,dirs:[p.SORT_DIRECTION_ASC,p.SORT_DIRECTION_DESC],dirsIcons:["&#9650;","&#9660;"]},t.a=h},2018:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.positionCode,r=(t.as,e.positions.OPEN_POSITION[n]),a=r&&r.expirationDate||!1;return{value:a,shouldShowExpiration:!p.a.mobile()&&a}}var o=n(1),i=n.n(o),l=n(12),c=n.n(l),s=n(3),u=n(4),m=n.n(u),d=n(17),p=n.n(d),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.a=Object(s.connect)(a)(c()({render:function(){var e=this.props,t=e.value,n=e.as,a=e.shouldShowExpiration,o=(e.dispatch,e.positionCode,e.children,e.before),l=e.after,c=r(e,["value","as","shouldShowExpiration","dispatch","positionCode","children","before","after"]);return a&&!1!==t?i.a.createElement(n||"span",f({},c),o,m()(t).utc().format("DD/MM/YYYY HH:mm"),l):null}}))},2019:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.positionCode,r=(t.as,e.positions.OPEN_POSITION[n]);return{value:r&&r._priceChange||!1,enabled:p.a.isOpenPositionChangePriceEnabled()}}var o=n(1),i=n.n(o),l=n(12),c=n.n(l),s=n(3),u=n(28),m=n.n(u),d=n(9),p=n.n(d),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.a=Object(s.connect)(a)(c()({render:function(){var e=this.props,t=e.value,n=e.as,a=e.enabled,o=(e.dispatch,e.positionCode,e.children,e.before),l=e.after,c=r(e,["value","as","enabled","dispatch","positionCode","children","before","after"]);return a&&!1!==t?i.a.createElement(n||"span",f({},c),o,m()(t).format("0,0.00%"),l):null}}))},2020:function(e,t,n){"use strict";(function(e){function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(){return{enabled:m.a.isPriceAlertsEnabled()}}var o=n(3),i=n(1),l=n.n(i),c=n(12),s=n.n(c),u=n(9),m=n.n(u),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.a=Object(o.connect)(a)(s()({render:function(){var t=this.props,n=t.as,a=t.enabled,o=(t.dispatch,t.children),i=r(t,["as","enabled","dispatch","children"]);return a?e.isNull(n)?o:l.a.createElement(n||"span",d({},i),o):null}}))}).call(t,n(0))},2021:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){var n=t.symbol;return{hasPriceAlerts:Object(v.hasInstrumentPriceAlerts)(e,n)}}var s=n(1),u=n.n(s),m=n(11),d=n.n(m),p=n(25),f=n.n(p),b=n(3),h=n(0),y=n.n(h),v=n(40),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return f()(n),n}return l(t,e),E(t,[{key:"onClick",value:function(e){var t=this.props,n=t.onClick,r=t.symbol,a=t.hasPriceAlerts;y.a.isFunction(n)&&n(e,r,a)}},{key:"render",value:function(){var e,t=this.props,n=t.className,o=t.yes,i=t.no,l=t.yesComponent,c=t.noComponent,s=t.hasPriceAlerts,m=a(t,["className","yes","no","yesComponent","noComponent","hasPriceAlerts"]),p=d()((e={},r(e,n,!!n),r(e,o,s),r(e,i,!s),r(e,"cursor--pointer",!0),r(e,"autotests-action-pricealerts",!0),e));return l&&c?u.a.createElement(m.as,{className:p,onClick:this.onClick},s?l:c):u.a.createElement(m.as,{className:p,onClick:this.onClick})}}]),t}(u.a.Component);O.defaultProps={as:"span",className:"",yes:"yes",no:"no",yesComponent:null,noComponent:null,symbol:""},t.a=Object(b.connect)(c)(O)},2024:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.positionCode,r=(t.as,e.positions.OPEN_POSITION[n]);return{value:r&&r.modifiedTime||!1}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e){return{selectInstrument:function(t,n){e(Object(f.selectInstrumentSymbolAndUpdateUrl)(n))},editPosition:function(e,t){e.preventDefault(),e.stopPropagation();var n=p.a.getPositionByCode(t);s.a.trigger("ui:edit-position",n)},closePosition:function(e,t){var n=p.a.getPositionByCode(t);s.a.trigger("ui:close-position",n)}}}function l(e){return{closingPosition:e.positions.closingPosition}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(2),s=n.n(c),u=n(1),m=n.n(u),d=n(60),p=n.n(d),f=n(33),b=n(3),h=n(835),y=n(825),v=n(830),E=n(831),O=n(827),_=n(828),g=n(12),w=n.n(g),P=n(4),N=n.n(P),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j=Object(b.connect)(a)(w()({render:function(){var e=this.props,t=e.value,n=e.as,a=(e.dispatch,e.positionCode,e.children,e.before),o=e.after,i=r(e,["value","as","dispatch","positionCode","children","before","after"]);return!1===t?null:m.a.createElement(n||"span",C({},i),a,N()(t).utc().format("DD/MM/YYYY HH:mm"),o)}})),I=n(824),k=n(829),x=n(2018),S=n(2019),T=n(816),R=n(826),D=n(10),A=n(11),M=n.n(A),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e){var t=e.selectInstrument,n=e.editPosition,r=e.closePosition,a=e.closingPosition,i=o(e,["selectInstrument","editPosition","closePosition","closingPosition"]);return m.a.createElement(h.a,Y({},i,{renderItem:function(e){return m.a.createElement("div",{onClick:function(e){return t(e,i.symbol)},className:M()({"subrow-expanded grid-12 grid-noGutter position":!0,"request-processing":a[e]&&a[e].status===D.PROCESSING}),key:"position-"+e},m.a.createElement("div",{className:"col-7 grid-middle position__info"},m.a.createElement("div",{className:"col-4 position__type"},m.a.createElement("i",{className:"icon icon-verify-account-grey"}),m.a.createElement("span",{className:"subrow-expanded__title"},__("p_l"),": "),m.a.createElement(I.a,{as:"span",className:"change",positionCode:e},m.a.createElement(y.a,{positionCode:e}))),m.a.createElement("div",{className:"col-8 info"},m.a.createElement("span",null,m.a.createElement("span",null,m.a.createElement(O.a,{positionCode:e,as:"b"}),": "," ",m.a.createElement(_.a,{positionCode:e,abs:!0})," @ ",m.a.createElement(k.a,{positionCode:e})),m.a.createElement(v.a,{positionCode:e,before:m.a.createElement("b",null,", "+__("notification.protection.takeProfit")+" ")}),m.a.createElement(E.a,{positionCode:e,before:m.a.createElement("b",null,", "+__("notification.protection.stopLoss")+" ")}),m.a.createElement(j,{as:"span",positionCode:e,before:m.a.createElement("b",null,", ",__("actions.modified_on")," ")}),m.a.createElement(S.a,{as:"span",positionCode:e,before:m.a.createElement("b",null,","," "+__("tab.open_positions.column.price.change")+" ")}),m.a.createElement(x.a,{as:"span",positionCode:e,before:m.a.createElement("b",null,","," "+__("tab.open_positions.column.expiration")+" ")})))),m.a.createElement("div",{className:"col-4 grid-middle grid-right"},m.a.createElement(R.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn instrument-list-btn--edit",symbol:i.symbol,onClick:function(t){return n(t,e)}},m.a.createElement(R.a,{as:"div"},__("actions.edit"))),m.a.createElement(T.a,{as:"div",className:"btn btn-close-min-width btn-operation btn-sm instrument-list-btn instrument-list-btn--close",symbol:i.symbol,onClick:function(t){return r(t,e)}},m.a.createElement("div",null,__("close")))))}}))};t.default=Object(b.connect)(l,i)(U)},2025:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e){return{selectInstrument:function(t,n){e(Object(d.selectInstrumentSymbolAndUpdateUrl)(n))},cancelOrder:function(e,t){var n=m.a.getOrderById(t);i.a.trigger("ui:cancel-order",n)},editOrder:function(e,t){e.preventDefault(),e.stopPropagation();var n=m.a.getOrderById(t);i.a.trigger("ui:edit-order",n)}}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n.n(o),l=n(1),c=n.n(l),s=n(3),u=n(110),m=n.n(u),d=n(33),p=n(836),f=n(423),b=n(425),h=n(424),y=n(420),v=n(419),E=n(833),O=n(834),_=n(832),g=n(819),w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P=function(e){var t=e.selectInstrument,n=e.editOrder,a=e.cancelOrder,o=r(e,["selectInstrument","editOrder","cancelOrder"]);return c.a.createElement(p.a,w({},o,{renderItem:function(e){return c.a.createElement("div",{onClick:function(e){return t(e,o.symbol)},className:"subrow-expanded grid-12 grid-noGutter order",key:"order-"+e},c.a.createElement("div",{className:"col-8 grid-middle order__info"},c.a.createElement("div",{className:"col-4 order__type"},c.a.createElement("i",{className:"icon icon-order-grey"}),c.a.createElement("span",{className:"subrow-expanded__title"},__("order"),": "),c.a.createElement(h.default,{orderId:e,as:"b"})," ",c.a.createElement(f.default,{orderId:e,as:"b"})," "),c.a.createElement("div",{className:"col-8 info"},c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("b",null,__("order.form.amount.cfd")),":"," "),c.a.createElement("span",null,c.a.createElement(y.default,{orderId:e})," ",c.a.createElement(b.default,{orderId:e,as:"span"})," ",c.a.createElement(v.default,{orderId:e}),c.a.createElement(E.a,{orderId:e,before:c.a.createElement("b",null,", "+__("notification.protection.stopLoss")+" ")}),c.a.createElement(O.a,{orderId:e,before:c.a.createElement("b",null,", "+__("notification.protection.takeProfit")+" ")}))))),c.a.createElement("div",{className:"col-4 grid-middle grid-right"},c.a.createElement(_.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn",symbol:o.symbol,onClick:function(t){return n(t,e)}},c.a.createElement(_.a,{as:"div"},__("actions.edit"))),c.a.createElement(g.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn",symbol:o.symbol,onClick:function(t){return a(t,e)}},c.a.createElement("div",null,__("actions.cancel")))))}}))};t.default=Object(s.connect)(null,a)(P)}});