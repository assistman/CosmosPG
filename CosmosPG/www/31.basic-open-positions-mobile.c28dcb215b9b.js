webpackJsonp([31],{1991:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n.n(i),c=n(816),l=n(804),u=n(812),m=n(813),p=n(811),d=n(809),f=n(810),b=n(2024),v=n(808),h=n(803),y=n(817),E=n(815),_=n(801),g=n(807),N=n(822),O=n(823),P=n(2112),C=n(2126),w=n(2076),j=n.n(w),x=n(0),k=n.n(x),I=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(2856);var S=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),I(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.symbols;return t.hasData?s.a.createElement("div",{className:"pane pane__column"},s.a.createElement("div",{className:"pane"}),s.a.createElement("div",{className:"pane cancel-all"},s.a.createElement(j.a,{className:"btn btn-primary pane__fluid"})),s.a.createElement("div",{className:"pane pane__fluid"},s.a.createElement("div",{className:"instruments-table SM tab-orders"},s.a.createElement("table",null,s.a.createElement("tbody",{className:"rows"},k.a.map(n,function(t){return s.a.createElement(i.Fragment,{key:t},s.a.createElement(O.a,{key:t,as:"tr",className:"row has-expand",symbol:t,onClick:function(n){return e.selectInstrument(n,t)}},s.a.createElement("td",{className:"cell-instrument-name-with-change instrument-name-with-change"},s.a.createElement(_.a,{as:"div",symbol:t,className:"name"}),s.a.createElement(N.a,{symbol:t,as:"div",className:"change flex flex-start"},s.a.createElement(g.a,{symbol:t}))),s.a.createElement("td",{className:"rate-with-button block cell-rate-with-button block"},s.a.createElement("div",null,s.a.createElement("div",{className:"rate"},s.a.createElement(d.a,{as:"div",symbol:t,className:"change"},s.a.createElement(p.a,{as:"span",symbol:t}))),s.a.createElement("div",{className:"button"},s.a.createElement(f.a,{onClick:function(n){return e.sell(n,t)},as:"button",symbol:t,className:"btn  btn-sell  btn-primary btn-xs"},__("actions.sell"))))),s.a.createElement("td",{className:"rate-with-button block cell-rate-with-button block"},s.a.createElement("div",null,s.a.createElement("div",{className:"rate"},s.a.createElement(u.a,{as:"div",symbol:t,className:"change"},s.a.createElement(l.a,{as:"span",symbol:t}))),s.a.createElement("div",{className:"button"},s.a.createElement(m.a,{onClick:function(n){return e.buy(n,t)},as:"button",symbol:t,className:"btn  btn-buy  btn-primary btn-xs"},__("actions.buy"))))),s.a.createElement("td",{className:"actions"},s.a.createElement("div",{className:"actions"},s.a.createElement("div",{className:"btn btn-icon",onClick:function(n){return e.toggleFavorite(n,t)}},s.a.createElement(v.a,{symbol:t,as:"div",className:"",yes:"icon-star-filled",no:"icon-star"})),s.a.createElement("div",{className:"btn btn-icon"},s.a.createElement("div",{className:"icon-instrument-info",onClick:function(n){return e.openInstrumentDetails(n,t)}})),s.a.createElement("div",{className:"btn btn-icon"},s.a.createElement(c.a,{onClick:function(n){return e.closeAllInstrumentPositions(n,t)},as:"div",symbol:t,className:"icon icon-close-all"}))))),s.a.createElement(y.a,{symbol:t,as:"tr",className:"row-expand"},s.a.createElement(b.default,{as:"td",colSpan:5,symbol:t,editPosition:e.editPosition,closePosition:e.closePosition,selectInstrument:e.selectInstrument})))})))))):s.a.createElement(P.default,{as:"div",className:"pane pane__yfluid flex flex-valign-center flex-align-center"})}}]),t}(h.a);t.default=Object(C.a)(Object(E.a)(S))},2018:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){var n=t.positionCode,a=(t.as,e.positions.OPEN_POSITION[n]),o=a&&a.expirationDate||!1;return{value:o,shouldShowExpiration:!d.a.mobile()&&o}}var r=n(1),i=n.n(r),s=n(12),c=n.n(s),l=n(3),u=n(4),m=n.n(u),p=n(17),d=n.n(p),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a=Object(l.connect)(o)(c()({render:function(){var e=this.props,t=e.value,n=e.as,o=e.shouldShowExpiration,r=(e.dispatch,e.positionCode,e.children,e.before),s=e.after,c=a(e,["value","as","shouldShowExpiration","dispatch","positionCode","children","before","after"]);return o&&!1!==t?i.a.createElement(n||"span",f({},c),r,m()(t).utc().format("DD/MM/YYYY HH:mm"),s):null}}))},2019:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){var n=t.positionCode,a=(t.as,e.positions.OPEN_POSITION[n]);return{value:a&&a._priceChange||!1,enabled:d.a.isOpenPositionChangePriceEnabled()}}var r=n(1),i=n.n(r),s=n(12),c=n.n(s),l=n(3),u=n(28),m=n.n(u),p=n(9),d=n.n(p),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a=Object(l.connect)(o)(c()({render:function(){var e=this.props,t=e.value,n=e.as,o=e.enabled,r=(e.dispatch,e.positionCode,e.children,e.before),s=e.after,c=a(e,["value","as","enabled","dispatch","positionCode","children","before","after"]);return o&&!1!==t?i.a.createElement(n||"span",f({},c),r,m()(t).format("0,0.00%"),s):null}}))},2024:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){var n=t.positionCode,a=(t.as,e.positions.OPEN_POSITION[n]);return{value:a&&a.modifiedTime||!1}}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e){return{selectInstrument:function(t,n){e(Object(f.selectInstrumentSymbolAndUpdateUrl)(n))},editPosition:function(e,t){e.preventDefault(),e.stopPropagation();var n=d.a.getPositionByCode(t);l.a.trigger("ui:edit-position",n)},closePosition:function(e,t){var n=d.a.getPositionByCode(t);l.a.trigger("ui:close-position",n)}}}function s(e){return{closingPosition:e.positions.closingPosition}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(2),l=n.n(c),u=n(1),m=n.n(u),p=n(60),d=n.n(p),f=n(33),b=n(3),v=n(835),h=n(825),y=n(830),E=n(831),_=n(827),g=n(828),N=n(12),O=n.n(N),P=n(4),C=n.n(P),w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j=Object(b.connect)(o)(O()({render:function(){var e=this.props,t=e.value,n=e.as,o=(e.dispatch,e.positionCode,e.children,e.before),r=e.after,i=a(e,["value","as","dispatch","positionCode","children","before","after"]);return!1===t?null:m.a.createElement(n||"span",w({},i),o,C()(t).utc().format("DD/MM/YYYY HH:mm"),r)}})),x=n(824),k=n(829),I=n(2018),S=n(2019),L=n(816),D=n(826),M=n(10),T=n(11),Y=n.n(T),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H=function(e){var t=e.selectInstrument,n=e.editPosition,a=e.closePosition,o=e.closingPosition,i=r(e,["selectInstrument","editPosition","closePosition","closingPosition"]);return m.a.createElement(v.a,B({},i,{renderItem:function(e){return m.a.createElement("div",{onClick:function(e){return t(e,i.symbol)},className:Y()({"subrow-expanded grid-12 grid-noGutter position":!0,"request-processing":o[e]&&o[e].status===M.PROCESSING}),key:"position-"+e},m.a.createElement("div",{className:"col-7 grid-middle position__info"},m.a.createElement("div",{className:"col-4 position__type"},m.a.createElement("i",{className:"icon icon-verify-account-grey"}),m.a.createElement("span",{className:"subrow-expanded__title"},__("p_l"),": "),m.a.createElement(x.a,{as:"span",className:"change",positionCode:e},m.a.createElement(h.a,{positionCode:e}))),m.a.createElement("div",{className:"col-8 info"},m.a.createElement("span",null,m.a.createElement("span",null,m.a.createElement(_.a,{positionCode:e,as:"b"}),": "," ",m.a.createElement(g.a,{positionCode:e,abs:!0})," @ ",m.a.createElement(k.a,{positionCode:e})),m.a.createElement(y.a,{positionCode:e,before:m.a.createElement("b",null,", "+__("notification.protection.takeProfit")+" ")}),m.a.createElement(E.a,{positionCode:e,before:m.a.createElement("b",null,", "+__("notification.protection.stopLoss")+" ")}),m.a.createElement(j,{as:"span",positionCode:e,before:m.a.createElement("b",null,", ",__("actions.modified_on")," ")}),m.a.createElement(S.a,{as:"span",positionCode:e,before:m.a.createElement("b",null,","," "+__("tab.open_positions.column.price.change")+" ")}),m.a.createElement(I.a,{as:"span",positionCode:e,before:m.a.createElement("b",null,","," "+__("tab.open_positions.column.expiration")+" ")})))),m.a.createElement("div",{className:"col-4 grid-middle grid-right"},m.a.createElement(D.a,{as:"div",className:"btn btn-operation btn-sm instrument-list-btn instrument-list-btn--edit",symbol:i.symbol,onClick:function(t){return n(t,e)}},m.a.createElement(D.a,{as:"div"},__("actions.edit"))),m.a.createElement(L.a,{as:"div",className:"btn btn-close-min-width btn-operation btn-sm instrument-list-btn instrument-list-btn--close",symbol:i.symbol,onClick:function(t){return a(t,e)}},m.a.createElement("div",null,__("close")))))}}))};t.default=Object(b.connect)(s,i)(H)},2076:function(e,t,n){var a=n(1),o=n(12),r=n(2),i=n(15),s=n(0),c=n(60),l="change:sellTradable change:buyTradable change:outOfMarketHours change:isMarginLevelLow",u=function(){return s.filter(s.keys(c._instrumentIds),function(e){var t=i.getInstrumentById(e);return t&&t.isClosable()}).length};e.exports=o({displayName:"exports",getDefaultProps:function(){return{className:"",prevent:!1}},getInitialState:function(){return{disabled:!u()}},click:function(e){!1!==this.props.prevent&&(e.preventDefault(),e.stopPropagation()),r.trigger("positions:close_all")},componentDidMount:function(){this.createListener(),c.on("add-instrument",this.updateListener,this),c.on("remove-instrument",this.updateListener,this)},componentWillUnmount:function(){this.removeListener(),c.off("add-instrument",this.updateListener,this),c.off("remove-instrument",this.updateListener,this)},shouldComponentUpdate:function(e,t){return t.disabled!==this.state.disabled},updateListener:function(){this.removeListener(),this.createListener(),this.update()},createListener:function(){var e=this;s.map(s.keys(c._instrumentIds),function(t){var n=i.getInstrumentById(t);n&&n.on(l,e.update,e)})},removeListener:function(){var e=this;s.map(s.keys(c._instrumentIds),function(t){var n=i.getInstrumentById(t);n&&n.off(l,e.update,e)})},update:function(){this.setState({disabled:!u()})},render:function(){return a.createElement("button",{className:"btn "+this.props.className,disabled:this.state.disabled,onClick:this.click},__("actions.close_all_positions"))}})},2112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=n.n(a),r=function(e){return o.a.createElement(e.as,e,o.a.createElement("div",null,o.a.createElement("div",{className:"icon icon-open-positions-empty"}),o.a.createElement("div",{className:"caption"},__("tab.open_positions.empty.caption")),o.a.createElement("div",{className:"text"},__("tab.open_positions.empty.text")),o.a.createElement("a",{className:"btn btn-primary",href:"#trading"},__("tab.favorites.empty.button"))))};r.defaultProps={as:"div"},t.default=r},2126:function(e,t,n){"use strict";function a(e){return{symbols:Object(o.h)(e),symbolsSortName:Object(s.getSymbolsSortName)(e),hasData:Object(o.i)(e)>0}}var o=n(220),r=n(1),i=(n.n(r),n(3)),s=n(121),c=function(e){return Object(i.connect)(a)(e)};t.a=c},2856:function(e,t,n){var a=n(2857);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;n(1953)(a,o);a.locals&&(e.exports=a.locals)},2857:function(e,t,n){t=e.exports=n(1952)(void 0),t.push([e.i,".cancel-all{margin:0 5px 1px!important}",""])}});