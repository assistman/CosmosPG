webpackJsonp([80],{2142:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=a(1),s=a.n(o),i=a(2115),c=a(235),p=a(2112),u=a(2116),m=a(312),f=a(2117),_=a(311),d=a(236),b=a(313),y=a(2120),E=a(17),v=a.n(E),h=a(2119),N=a(2118),w=a(239),P=a(325),O=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={priceAlertsPopup:!1},v()(a),a}return l(t,e),O(t,[{key:"openPriceAlertsPopup",value:function(e){this.setState({priceAlertsPopup:e})}},{key:"render",value:function(){var e=this,t=this.props.symbol,a=this.state.priceAlertsPopup;return s.a.createElement("div",{className:"instrument-details__header pane pane__xfluid pane__column"},a&&s.a.createElement(w.default,null,s.a.createElement(w.default.Nav,null,s.a.createElement(w.default.NavLeft,null,s.a.createElement("button",{onClick:function(){return e.openPriceAlertsPopup(!1)}},s.a.createElement("span",{className:"popup-mobile__nav-rotate"},s.a.createElement("i",{className:"icon-view-details"})),"   ",__("actions.back"))),s.a.createElement(w.default.NavCenter,null,s.a.createElement("div",null,__("tab.price_alerts")))),s.a.createElement(w.default.Body,{className:"popup-mobile__body pane pane__fluid"},s.a.createElement(P.default,{className:"pane pane__xfluid",onClose:function(){return e.openPriceAlertsPopup(!1)}}))),s.a.createElement("div",{className:"pane pane__row"},s.a.createElement("div",{className:"pane"},s.a.createElement(i.a,{symbol:t}),s.a.createElement("div",{className:"pane pane__column"},s.a.createElement("div",{className:"instrument-details__title"},s.a.createElement(c.a,{as:"span",symbol:t})),s.a.createElement("div",{className:"instrument-details__description"},s.a.createElement(p.a,{as:"span",symbol:t})))),s.a.createElement("div",{className:"instrument-details__actions pane pane__row"},s.a.createElement("div",{className:"instrument-details__actions__small"},s.a.createElement(b.a,{onClick:function(a){return e.toggleFavorite(a,t)},symbol:t,as:"div",className:"large-s-px",yes:"icon-star-filled",no:"icon-star"}),s.a.createElement(y.a,{as:null},s.a.createElement(y.b,{onClick:this.openPriceAlerts,openPriceAlertsPopup:this.openPriceAlertsPopup,symbol:t,as:"div",className:"medium-b-px",yes:"icon-bell-filled",no:"icon-bell"}))))),s.a.createElement("div",{className:"pane pane__row pane--bottom"},s.a.createElement(_.a,{as:"span",className:"instrument-details__price",symbol:t}),s.a.createElement("span",{className:"instrument-details__change"},s.a.createElement(u.a,{symbol:t,showDir:!0}),s.a.createElement(m.a,{symbol:t,showDir:!0}))),s.a.createElement("div",{className:"pane pane__row"},s.a.createElement(f.a,{symbol:t,minimize:!1})),s.a.createElement("div",{className:"instrument-details__actions pane__xfluid"},s.a.createElement(h.a,{symbol:t,onClick:function(a){return e.sell(a,t)}}),s.a.createElement(N.a,{symbol:t,onClick:function(a){return e.buy(a,t)}})))}}]),t}(d.a);t.a=x},2804:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),s=a.n(o),i=(a(476),a(2)),c=a(236),p=a(235),u=a(2112),m=a(2142),f=a(2501),_=a(11),d=a.n(_),b=a(239),y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),E=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),y(t,[{key:"render",value:function(){var e=this,t=this.props.symbol;d()({"x-popup x-popup-stretch-xs x-popup-no-padding-xs x-popup-absolute":!0,"responsive-popup responsive-popup-absolute":!0,"responsive-popup-translucent-1 x-popup-translucent-1":!0,"show-popup responsive-popup-opened":!0});return s.a.createElement(i.Provider,{store:store},s.a.createElement(b.default,null,s.a.createElement(b.default.Nav,null,s.a.createElement(b.default.NavLeft,null,s.a.createElement("button",{onClick:function(a){return e.closeInstrumentDetails(a,t)}},s.a.createElement("span",{className:"popup-mobile__nav-rotate"},s.a.createElement("i",{className:"icon-view-details"})),"   ",__("actions.back"))),s.a.createElement(b.default.NavCenter,null,s.a.createElement("div",{className:"caption"},s.a.createElement("div",{className:"instrument-details__title"},s.a.createElement(p.a,{as:"span",symbol:t})),s.a.createElement("div",{className:"smaller-px"},s.a.createElement(u.a,{as:"span",symbol:t}))))),s.a.createElement(b.default.Body,{className:"popup-mobile__body pane pane__fluid"},s.a.createElement("div",{className:"responsive-popup-body pane__scroll"},s.a.createElement("div",{className:"instrument-details instrument-details--mobile pane__xfluid pane__yfluid pane__scroll-content"},s.a.createElement("div",{className:"instrument-details__container"},s.a.createElement(m.a,{symbol:t}),s.a.createElement(f.a,{symbol:t})))))))}}]),t}(c.a);t.default=E}});