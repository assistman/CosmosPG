webpackJsonp([45],{1996:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(2010),l=n(804),i=n(812),o=n(813),u=n(811),m=n(809),d=n(810),p=n(2025),f=n(808),b=n(803),h=n(817),_=n(815),y=n(801),v=n(807),E=n(822),N=n(823),O=n(853),g=n(852),I=n(2127),w=n(1),k=n.n(w),S=n(0),j=n.n(S),x=n(2075),P=n.n(x),C=n(2057),T=n(10),D=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),L=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),D(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.symbolsSortName,a=t.symbols;return t.hasData?k.a.createElement("div",{className:"instruments-table simple-instrument-list simple-instrument-list--fluid pane pane__sm-xfluid"},k.a.createElement("div",{className:"pane pane__fluid"},k.a.createElement("div",{className:"instruments-table simple-instrument-list"},k.a.createElement("table",null,k.a.createElement("thead",{className:"columns"},k.a.createElement("tr",null,k.a.createElement(c.a,{as:"th",active:n===T.INSTRUMENT_SORT.NAME,onSort:this.sortByName,className:"column column-instrument-name-with-change column-sortable instrument-name__cell_width_medium"},__("table.header.symbol")),k.a.createElement("th",{className:"column cell-anim-button-rate block"},__("actions.sell")),k.a.createElement("th",{className:"column cell-spread-with-direction"}),k.a.createElement("th",{className:"column cell-anim-button-rate block"},__("actions.buy")),k.a.createElement("th",{className:"column column-change column-sortable"},__("actions.change")),k.a.createElement("th",{className:"column column-actions"}))),k.a.createElement("tbody",{className:"rows"},j.a.map(a,function(t){return[k.a.createElement(N.a,{key:t,as:"tr",className:"row has-expand",symbol:t,onClick:function(n){return e.selectInstrument(n,t)}},k.a.createElement("td",{className:"cell-instrument-name-with-change instrument-name-with-change instrument-name__cell_width_medium"},k.a.createElement(y.a,{symbol:t,className:"name"})),k.a.createElement("td",{className:"cell-anim-button-rate"},k.a.createElement(m.a,{as:"div",symbol:t,className:"price-button price-button_ani_xfluid"},k.a.createElement(d.a,{onClick:function(n){return e.sell(n,t)},as:"div",symbol:t,className:"price-button__wrapper btn"},k.a.createElement(u.a,{as:"span",symbol:t,className:"price-button__title price-button__title_self-end"})))),k.a.createElement("td",{className:"cell-spread-with-direction"},k.a.createElement("div",{className:"spread flex flex-column flex-align-center"},k.a.createElement("div",null,k.a.createElement(i.a,{symbol:t,as:"i",className:"icon icon-arrow",disableEqualState:!0})),k.a.createElement(g.a,{symbol:t,as:"div"},k.a.createElement(O.a,{symbol:t})))),k.a.createElement("td",{className:"cell-anim-button-rate"},k.a.createElement(i.a,{as:"div",symbol:t,className:"price-button price-button_ani_xfluid"},k.a.createElement(o.a,{onClick:function(n){return e.buy(n,t)},as:"div",symbol:t,className:"price-button__wrapper btn"},k.a.createElement(l.a,{as:"span",symbol:t,className:"price-button__title price-button__title_self-start"})))),k.a.createElement("td",{className:"cell-change"},k.a.createElement(E.a,{symbol:t,className:"change"},k.a.createElement(v.a,{symbol:t}))),k.a.createElement("td",{className:"cell-actions actions"},k.a.createElement("div",{className:"actions"},k.a.createElement("div",{className:"btn btn-icon",onClick:function(n){return e.toggleFavorite(n,t)}},k.a.createElement(f.a,{symbol:t,as:"div",className:"",yes:"icon-star-filled",no:"icon-star"})),k.a.createElement("div",{className:"btn btn-icon"},k.a.createElement("div",{className:"icon-instrument-info",onClick:function(n){return e.openInstrumentDetails(n,t)}}))))),k.a.createElement(h.a,{symbol:t,as:"tr",className:"row-expand"},k.a.createElement(p.default,{as:"td",colSpan:5,symbol:t,editOrder:e.editOrder,cancelOrder:e.cancelOrder,selectInstrument:e.selectInstrument}))]}))))),k.a.createElement("div",{className:"pane"},k.a.createElement(P.a,{className:"btn btn-primary pane__fluid"}))):k.a.createElement(C.default,{as:"div",className:"pane pane__fluid flex flex-valign-center flex-align-center"})}}]),t}(b.a);t.default=Object(I.a)(Object(_.a)(L))},2010:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),i=n.n(l),o=n(0),u=n.n(o),m=n(108),d=n.n(m),p=n(10),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(){r(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={dirIndex:0},e.click=e.click.bind(e),e}return c(t,e),b(t,[{key:"click",value:function(e){e.preventDefault();var t=++this.state.dirIndex%this.props.dirs.length;this.setState({dirIndex:t}),this.props.onSort(this.props.dirs[t])}},{key:"render",value:function(){var e=this.props,t=e.children,n=(e.onSort,e.active),r=(e.dirIndex,e.dirs,e.dirsIcons),s=a(e,["children","onSort","active","dirIndex","dirs","dirsIcons"]);return i.a.createElement(s.as,f({},s,{onClick:this.click}),t," ",n&&d()(r[this.state.dirIndex]))}}]),t}(l.Component);h.defaultProps={as:"span",onSort:u.a.noop,active:!1,dirIndex:0,dirs:[p.SORT_DIRECTION_ASC,p.SORT_DIRECTION_DESC],dirsIcons:["&#9650;","&#9660;"]},t.a=h},2025:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e){return{selectInstrument:function(t,n){e(Object(d.selectInstrumentSymbolAndUpdateUrl)(n))},cancelOrder:function(e,t){var n=m.a.getOrderById(t);c.a.trigger("ui:cancel-order",n)},editOrder:function(e,t){e.preventDefault(),e.stopPropagation();var n=m.a.getOrderById(t);c.a.trigger("ui:edit-order",n)}}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),c=n.n(s),l=n(1),i=n.n(l),o=n(3),u=n(110),m=n.n(u),d=n(33),p=n(836),f=n(423),b=n(425),h=n(424),_=n(420),y=n(419),v=n(833),E=n(834),N=n(832),O=n(819),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},I=function(e){var t=e.selectInstrument,n=e.editOrder,r=e.cancelOrder,s=a(e,["selectInstrument","editOrder","cancelOrder"]);return i.a.createElement(p.a,g({},s,{renderItem:function(e){return i.a.createElement("div",{onClick:function(e){return t(e,s.symbol)},className:"subrow-expanded grid-12 grid-noGutter order",key:"order-"+e},i.a.createElement("div",{className:"col-8 grid-middle order__info"},i.a.createElement("div",{className:"col-4 order__type"},i.a.createElement("i",{className:"icon icon-order-grey"}),i.a.createElement("span",{className:"subrow-expanded__title"},__("order"),": "),i.a.createElement(h.default,{orderId:e,as:"b"})," ",i.a.createElement(f.default,{orderId:e,as:"b"})," "),i.a.createElement("div",{className:"col-8 info"},i.a.createElement("span",null,i.a.createElement("span",null,i.a.createElement("b",null,__("order.form.amount.cfd")),":"," "),i.a.createElement("span",null,i.a.createElement(_.default,{orderId:e})," ",i.a.createElement(b.default,{orderId:e,as:"span"})," ",i.a.createElement(y.default,{orderId:e}),i.a.createElement(v.a,{orderId:e,before:i.a.createElement("b",null,", "+__("notification.protection.stopLoss")+" ")}),i.a.createElement(E.a,{orderId:e,before:i.a.createElement("b",null,", "+__("notification.protection.takeProfit")+" ")}))))),i.a.createElement("div",{className:"col-4 grid-middle grid-right"},i.a.createElement(N.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn",symbol:s.symbol,onClick:function(t){return n(t,e)}},i.a.createElement(N.a,{as:"div"},__("actions.edit"))),i.a.createElement(O.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn",symbol:s.symbol,onClick:function(t){return r(t,e)}},i.a.createElement("div",null,__("actions.cancel")))))}}))};t.default=Object(o.connect)(null,r)(I)},2057:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=n.n(a),s=function(e){return r.a.createElement(e.as,e,r.a.createElement("div",null,r.a.createElement("div",{className:"icon icon-orders-empty"}),r.a.createElement("div",{className:"caption"},__("tab.orders.empty.line1")),r.a.createElement("div",{className:"text"},__("tab.orders.empty.line2")),r.a.createElement("div",{className:"text"},__("tab.orders.empty.line3")),r.a.createElement("br",null),r.a.createElement("a",{className:"btn btn-primary",href:"#trading"},__("tab.orders.empty.button"))))};s.defaultProps={as:"div"},t.default=s},2075:function(e,t,n){var a=n(1),r=n(12),s=n(2),c=n(15),l=n(0),i=n(110),o="change:sellTradable change:buyTradable change:outOfMarketHours change:isMarginLevelLow change:cancelable",u=function(){return l.filter(l.keys(i._instrumentIds),function(e){var t=c.getInstrumentById(e);return t&&t.status.isCancelable()}).length};e.exports=r({displayName:"exports",getDefaultProps:function(){return{className:"",prevent:!1}},getInitialState:function(){return{disabled:!u()}},click:function(e){!1!==this.props.prevent&&(e.preventDefault(),e.stopPropagation()),s.trigger("orders:cancel_all")},componentDidMount:function(){this.createListener(),i.on("add-instrument",this.createSubscription,this),i.on("remove-instrument",this.removeSubscription,this)},componentWillUnmount:function(){this.removeListener(),i.off("add-instrument",this.createSubscription,this),i.off("remove-instrument",this.removeSubscription,this)},shouldComponentUpdate:function(e,t){return t.disabled!==this.state.disabled},createSubscription:function(e){var t=c.getInstrumentById(e);t&&(t.on(o,this.update,this),this.update())},removeSubscription:function(e){var t=c.getInstrumentById(e);t&&(t.off(o,this.update,this),this.update())},updateListener:function(){this.removeListener(),this.createListener(),this.update()},createListener:function(){l.map(l.keys(i._instrumentIds),this.createSubscription,this)},removeListener:function(){l.map(l.keys(i._instrumentIds),this.removeSubscription,this)},update:function(){this.setState({disabled:!u()})},render:function(){return a.createElement("button",{className:"btn "+this.props.className,disabled:this.state.disabled,onClick:this.click},__("actions.cancel_all_orders"))}})},2127:function(e,t,n){"use strict";function a(e){return{symbols:Object(r.f)(e),symbolsSortName:Object(l.getSymbolsSortName)(e),hasData:Object(r.h)(e)>0}}var r=n(430),s=n(1),c=(n.n(s),n(3)),l=n(121),i=function(e){return Object(c.connect)(a)(e)};t.a=i}});