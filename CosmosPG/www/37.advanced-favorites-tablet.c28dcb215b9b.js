webpackJsonp([37],{1994:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),c=n(2010),l=n(815),s=n(1),u=n.n(s),m=n(0),d=n.n(m),p=n(2092),f=n(804),b=n(812),v=n(813),E=n(811),_=n(809),y=n(810),h=n(2025),O=n(2024),g=n(808),N=n(2125),P=n(803),w=n(817),j=n(801),I=n(807),C=n(822),x=n(823),S=n(853),k=n(852),D=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),T=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),D(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.symbolsSortName,a=t.symbols;return t.hasData?u.a.createElement("div",{className:"instruments-table simple-instrument-list simple-instrument-list--fluid pane pane__sm-xfluid"},u.a.createElement("table",null,u.a.createElement("thead",{className:"columns"},u.a.createElement("tr",null,u.a.createElement(c.a,{as:"th",active:n===i.INSTRUMENT_SORT.NAME,onSort:this.sortByName,className:"column column-instrument-name-with-change column-sortable instrument-name__cell_width_medium"},__("table.header.symbol")),u.a.createElement("th",{className:"column cell-anim-button-rate block"},__("actions.sell")),u.a.createElement("th",{className:"column cell-spread-with-direction"}),u.a.createElement("th",{className:"column cell-anim-button-rate block"},__("actions.buy")),u.a.createElement("th",{className:"column column-change column-sortable"},__("actions.change")),u.a.createElement("th",{className:"column column-actions"}))),u.a.createElement("tbody",{className:"rows"},d.a.map(a,function(t){return[u.a.createElement(x.a,{key:t,as:"tr",className:"row",symbol:t,onClick:function(n){return e.selectInstrument(n,t)}},u.a.createElement("td",{className:"cell-instrument-name-with-change instrument-name-with-change instrument-name__cell_width_medium"},u.a.createElement(j.a,{symbol:t,className:"name"})),u.a.createElement("td",{className:"cell-anim-button-rate"},u.a.createElement(_.a,{as:"div",symbol:t,className:"price-button price-button_ani_xfluid"},u.a.createElement(y.a,{onClick:function(n){return e.sell(n,t)},as:"div",symbol:t,className:"price-button__wrapper btn"},u.a.createElement(E.a,{as:"span",symbol:t,className:"price-button__title price-button__title_self-end"})))),u.a.createElement("td",{className:"cell-spread-with-direction"},u.a.createElement("div",{className:"spread flex flex-column flex-align-center"},u.a.createElement("div",null,u.a.createElement(b.a,{symbol:t,as:"i",className:"icon icon-arrow",disableEqualState:!0})),u.a.createElement(k.a,{symbol:t,as:"div"},u.a.createElement(S.a,{symbol:t})))),u.a.createElement("td",{className:"cell-anim-button-rate"},u.a.createElement(b.a,{as:"div",symbol:t,className:"price-button price-button_ani_xfluid"},u.a.createElement(v.a,{onClick:function(n){return e.buy(n,t)},as:"div",symbol:t,className:"price-button__wrapper btn"},u.a.createElement(f.a,{as:"span",symbol:t,className:"price-button__title price-button__title_self-start"})))),u.a.createElement("td",{className:"cell-change"},u.a.createElement(C.a,{symbol:t,className:"change"},u.a.createElement(I.a,{symbol:t}))),u.a.createElement("td",{className:"cell-actions actions"},u.a.createElement("div",{className:"actions"},u.a.createElement("div",{className:"btn btn-icon",onClick:function(n){return e.toggleFavorite(n,t)}},u.a.createElement(g.a,{symbol:t,as:"div",className:"",yes:"icon-star-filled",no:"icon-star"})),u.a.createElement("div",{className:"btn btn-icon"},u.a.createElement("div",{className:"icon-instrument-info",onClick:function(n){return e.openInstrumentDetails(n,t)}}))))),u.a.createElement(w.a,{symbol:t,as:"tr",className:"row-expand"},u.a.createElement(O.default,{as:"td",colSpan:5,symbol:t,editPosition:e.editPosition,closePosition:e.closePosition,selectInstrument:e.selectInstrument}),u.a.createElement(h.default,{as:"td",colSpan:5,symbol:t,editOrder:e.editOrder,cancelOrder:e.cancelOrder,selectInstrument:e.selectInstrument}))]})))):u.a.createElement(N.a,{className:"pane pane__fluid flex flex-valign-center flex-align-center"})}}]),t}(P.a);t.default=Object(p.a)(Object(l.a)(T))},2010:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(1),l=n.n(c),s=n(0),u=n.n(s),m=n(108),d=n.n(m),p=n(10),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={dirIndex:0},e.click=e.click.bind(e),e}return i(t,e),b(t,[{key:"click",value:function(e){e.preventDefault();var t=++this.state.dirIndex%this.props.dirs.length;this.setState({dirIndex:t}),this.props.onSort(this.props.dirs[t])}},{key:"render",value:function(){var e=this.props,t=e.children,n=(e.onSort,e.active),r=(e.dirIndex,e.dirs,e.dirsIcons),o=a(e,["children","onSort","active","dirIndex","dirs","dirsIcons"]);return l.a.createElement(o.as,f({},o,{onClick:this.click}),t," ",n&&d()(r[this.state.dirIndex]))}}]),t}(c.Component);v.defaultProps={as:"span",onSort:u.a.noop,active:!1,dirIndex:0,dirs:[p.SORT_DIRECTION_ASC,p.SORT_DIRECTION_DESC],dirsIcons:["&#9650;","&#9660;"]},t.a=v},2018:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.positionCode,a=(t.as,e.positions.OPEN_POSITION[n]),r=a&&a.expirationDate||!1;return{value:r,shouldShowExpiration:!p.a.mobile()&&r}}var o=n(1),i=n.n(o),c=n(12),l=n.n(c),s=n(3),u=n(4),m=n.n(u),d=n(17),p=n.n(d),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a=Object(s.connect)(r)(l()({render:function(){var e=this.props,t=e.value,n=e.as,r=e.shouldShowExpiration,o=(e.dispatch,e.positionCode,e.children,e.before),c=e.after,l=a(e,["value","as","shouldShowExpiration","dispatch","positionCode","children","before","after"]);return r&&!1!==t?i.a.createElement(n||"span",f({},l),o,m()(t).utc().format("DD/MM/YYYY HH:mm"),c):null}}))},2019:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.positionCode,a=(t.as,e.positions.OPEN_POSITION[n]);return{value:a&&a._priceChange||!1,enabled:p.a.isOpenPositionChangePriceEnabled()}}var o=n(1),i=n.n(o),c=n(12),l=n.n(c),s=n(3),u=n(28),m=n.n(u),d=n(9),p=n.n(d),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a=Object(s.connect)(r)(l()({render:function(){var e=this.props,t=e.value,n=e.as,r=e.enabled,o=(e.dispatch,e.positionCode,e.children,e.before),c=e.after,l=a(e,["value","as","enabled","dispatch","positionCode","children","before","after"]);return r&&!1!==t?i.a.createElement(n||"span",f({},l),o,m()(t).format("0,0.00%"),c):null}}))},2024:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.positionCode,a=(t.as,e.positions.OPEN_POSITION[n]);return{value:a&&a.modifiedTime||!1}}function o(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e){return{selectInstrument:function(t,n){e(Object(f.selectInstrumentSymbolAndUpdateUrl)(n))},editPosition:function(e,t){e.preventDefault(),e.stopPropagation();var n=p.a.getPositionByCode(t);s.a.trigger("ui:edit-position",n)},closePosition:function(e,t){var n=p.a.getPositionByCode(t);s.a.trigger("ui:close-position",n)}}}function c(e){return{closingPosition:e.positions.closingPosition}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),s=n.n(l),u=n(1),m=n.n(u),d=n(60),p=n.n(d),f=n(33),b=n(3),v=n(835),E=n(825),_=n(830),y=n(831),h=n(827),O=n(828),g=n(12),N=n.n(g),P=n(4),w=n.n(P),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},I=Object(b.connect)(r)(N()({render:function(){var e=this.props,t=e.value,n=e.as,r=(e.dispatch,e.positionCode,e.children,e.before),o=e.after,i=a(e,["value","as","dispatch","positionCode","children","before","after"]);return!1===t?null:m.a.createElement(n||"span",j({},i),r,w()(t).utc().format("DD/MM/YYYY HH:mm"),o)}})),C=n(824),x=n(829),S=n(2018),k=n(2019),D=n(816),T=n(826),M=n(10),R=n(11),Y=n.n(R),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U=function(e){var t=e.selectInstrument,n=e.editPosition,a=e.closePosition,r=e.closingPosition,i=o(e,["selectInstrument","editPosition","closePosition","closingPosition"]);return m.a.createElement(v.a,B({},i,{renderItem:function(e){return m.a.createElement("div",{onClick:function(e){return t(e,i.symbol)},className:Y()({"subrow-expanded grid-12 grid-noGutter position":!0,"request-processing":r[e]&&r[e].status===M.PROCESSING}),key:"position-"+e},m.a.createElement("div",{className:"col-7 grid-middle position__info"},m.a.createElement("div",{className:"col-4 position__type"},m.a.createElement("i",{className:"icon icon-verify-account-grey"}),m.a.createElement("span",{className:"subrow-expanded__title"},__("p_l"),": "),m.a.createElement(C.a,{as:"span",className:"change",positionCode:e},m.a.createElement(E.a,{positionCode:e}))),m.a.createElement("div",{className:"col-8 info"},m.a.createElement("span",null,m.a.createElement("span",null,m.a.createElement(h.a,{positionCode:e,as:"b"}),": "," ",m.a.createElement(O.a,{positionCode:e,abs:!0})," @ ",m.a.createElement(x.a,{positionCode:e})),m.a.createElement(_.a,{positionCode:e,before:m.a.createElement("b",null,", "+__("notification.protection.takeProfit")+" ")}),m.a.createElement(y.a,{positionCode:e,before:m.a.createElement("b",null,", "+__("notification.protection.stopLoss")+" ")}),m.a.createElement(I,{as:"span",positionCode:e,before:m.a.createElement("b",null,", ",__("actions.modified_on")," ")}),m.a.createElement(k.a,{as:"span",positionCode:e,before:m.a.createElement("b",null,","," "+__("tab.open_positions.column.price.change")+" ")}),m.a.createElement(S.a,{as:"span",positionCode:e,before:m.a.createElement("b",null,","," "+__("tab.open_positions.column.expiration")+" ")})))),m.a.createElement("div",{className:"col-4 grid-middle grid-right"},m.a.createElement(T.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn instrument-list-btn--edit",symbol:i.symbol,onClick:function(t){return n(t,e)}},m.a.createElement(T.a,{as:"div"},__("actions.edit"))),m.a.createElement(D.a,{as:"div",className:"btn btn-close-min-width btn-operation btn-sm instrument-list-btn instrument-list-btn--close",symbol:i.symbol,onClick:function(t){return a(t,e)}},m.a.createElement("div",null,__("close")))))}}))};t.default=Object(b.connect)(c,i)(U)},2025:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e){return{selectInstrument:function(t,n){e(Object(d.selectInstrumentSymbolAndUpdateUrl)(n))},cancelOrder:function(e,t){var n=m.a.getOrderById(t);i.a.trigger("ui:cancel-order",n)},editOrder:function(e,t){e.preventDefault(),e.stopPropagation();var n=m.a.getOrderById(t);i.a.trigger("ui:edit-order",n)}}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n.n(o),c=n(1),l=n.n(c),s=n(3),u=n(110),m=n.n(u),d=n(33),p=n(836),f=n(423),b=n(425),v=n(424),E=n(420),_=n(419),y=n(833),h=n(834),O=n(832),g=n(819),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P=function(e){var t=e.selectInstrument,n=e.editOrder,r=e.cancelOrder,o=a(e,["selectInstrument","editOrder","cancelOrder"]);return l.a.createElement(p.a,N({},o,{renderItem:function(e){return l.a.createElement("div",{onClick:function(e){return t(e,o.symbol)},className:"subrow-expanded grid-12 grid-noGutter order",key:"order-"+e},l.a.createElement("div",{className:"col-8 grid-middle order__info"},l.a.createElement("div",{className:"col-4 order__type"},l.a.createElement("i",{className:"icon icon-order-grey"}),l.a.createElement("span",{className:"subrow-expanded__title"},__("order"),": "),l.a.createElement(v.default,{orderId:e,as:"b"})," ",l.a.createElement(f.default,{orderId:e,as:"b"})," "),l.a.createElement("div",{className:"col-8 info"},l.a.createElement("span",null,l.a.createElement("span",null,l.a.createElement("b",null,__("order.form.amount.cfd")),":"," "),l.a.createElement("span",null,l.a.createElement(E.default,{orderId:e})," ",l.a.createElement(b.default,{orderId:e,as:"span"})," ",l.a.createElement(_.default,{orderId:e}),l.a.createElement(y.a,{orderId:e,before:l.a.createElement("b",null,", "+__("notification.protection.stopLoss")+" ")}),l.a.createElement(h.a,{orderId:e,before:l.a.createElement("b",null,", "+__("notification.protection.takeProfit")+" ")}))))),l.a.createElement("div",{className:"col-4 grid-middle grid-right"},l.a.createElement(O.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn",symbol:o.symbol,onClick:function(t){return n(t,e)}},l.a.createElement(O.a,{as:"div"},__("actions.edit"))),l.a.createElement(g.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn",symbol:o.symbol,onClick:function(t){return r(t,e)}},l.a.createElement("div",null,__("actions.cancel")))))}}))};t.default=Object(s.connect)(null,r)(P)},2092:function(e,t,n){"use strict";function a(e){return{symbols:Object(i.getSortedFavoritesSymbols)(e),symbolsSortName:Object(i.getSymbolsSortName)(e),symbolsSortDirection:Object(i.getSymbolsSortDirection)(e),hasData:Object(c.getTotalFavoritesCount)(e)>0}}var r=n(1),o=(n.n(r),n(3)),i=n(121),c=n(57),l=function(e){return Object(o.connect)(a)(e)};t.a=l},2125:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=function(e){return r.a.createElement("div",e,r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-favorites-large"}),r.a.createElement("div",{className:"large-px"},__("tab.favorites.empty.caption")),r.a.createElement("div",{className:"smaller-px"},__("tab.favorites.empty.text")," ",r.a.createElement("span",{className:"icon icon-fav-light"})),r.a.createElement("br",null),r.a.createElement("a",{className:"btn btn-primary",href:"#trading"},__("tab.favorites.empty.button"))))};t.a=o}});