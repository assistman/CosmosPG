webpackJsonp([101],{2044:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=a(1),l=a.n(o),i=a(2011),c=a(1969),p=a(1986),m=a(2012),u=a(1973),f=a(2013),d=a(1972),_=a(1971),b=a(1974),y=a(2007),v=a(2016),E=a(32),h=a.n(E),N=a(2015),w=a(2014),x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),O=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return h()(a),a}return s(t,e),x(t,[{key:"render",value:function(){var e=this,t=this.props.symbol;return l.a.createElement("div",{className:"instrument-details__header pane pane__xfluid pane__column"},l.a.createElement("div",{className:"pane pane__row"},l.a.createElement("div",{className:"pane"},l.a.createElement(i.a,{symbol:t}),l.a.createElement("div",{className:"pane pane__column"},l.a.createElement("div",{className:"instrument-details__title"},l.a.createElement(c.a,{as:"span",symbol:t})),l.a.createElement("div",{className:"instrument-details__description"},l.a.createElement(p.a,{as:"span",symbol:t})))),l.a.createElement("div",{className:"instrument-details__actions pane pane__row"},l.a.createElement("div",{className:"instrument-details__actions__small"},l.a.createElement(b.a,{onClick:function(a){return e.toggleFavorite(a,t)},symbol:t,as:"div",className:"large-s-px",yes:"icon-star-filled",no:"icon-star"}),l.a.createElement(y.a,{as:null},l.a.createElement(y.b,{onClick:this.openPriceAlerts,symbol:t,as:"div",className:"medium-b-px",yes:"icon-bell-filled",no:"icon-bell"}))))),l.a.createElement("div",{className:"pane pane__row pane--bottom"},l.a.createElement(d.a,{as:"span",className:"instrument-details__price",symbol:t}),l.a.createElement("span",{className:"instrument-details__change"},l.a.createElement(m.a,{symbol:t,showDir:!0}),l.a.createElement(u.a,{symbol:t,showDir:!0}))),l.a.createElement("div",{className:"pane pane__row"},l.a.createElement(v.a,{className:"instrument-details__time",pre:__("instrument_info.as_of")+" ",post:"  ",symbol:t,format:"MMMM DD YYYY HH:mm"})),l.a.createElement("div",{className:"pane pane__row"},l.a.createElement(f.a,{symbol:t})),l.a.createElement("div",{className:"instrument-details__actions pane__xfluid"},l.a.createElement(N.a,{symbol:t,onClick:function(a){return e.sell(a,t)}}),l.a.createElement(w.a,{symbol:t,onClick:function(a){return e.buy(a,t)}})))}}]),t}(_.a);t.a=O},2830:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return{symbol:Object(b.getInstrumentDetailsSymbol)(e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),i=a.n(l),c=a(805),p=a(6),m=a(1971),u=a(1969),f=a(1986),d=a(2044),_=a(2640),b=a(158),y=a(11),v=a.n(y),E=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),E(t,[{key:"render",value:function(){var e=this,t=this.props.symbol,a=v()({"x-popup x-popup-stretch-xs x-popup-no-padding-xs x-popup-absolute":!0,"responsive-popup responsive-popup-absolute":!0,"responsive-popup-translucent-1 x-popup-translucent-1":!0,"show-popup responsive-popup-opened":!0});return i.a.createElement(c.default,{className:a,name:"instrument-details-commodity"},i.a.createElement(p.Provider,{store:store},i.a.createElement("div",{className:"x-popup-box responsive-container"},i.a.createElement("div",{className:"x-popup-panel responsive-panel"},i.a.createElement("div",{className:"x-popup-holder"},i.a.createElement("div",{className:"x-popup-content"},i.a.createElement("div",{className:"responsive-popup-content"},i.a.createElement("div",{className:"x-popup-header responsive-header responsive-header-bg-style-grey responsive-header-style-wizard"},i.a.createElement("div",{className:"previous btn",onClick:function(a){return e.closeInstrumentDetails(a,t)}},i.a.createElement("div",{className:"arrow"}),i.a.createElement("div",{className:"caption"},__("actions.back"))),i.a.createElement("div",{className:"caption"},i.a.createElement("div",{className:"instrument-details__title"},i.a.createElement(u.a,{as:"span",symbol:t})),i.a.createElement("div",{className:"smaller-px"},i.a.createElement(f.a,{as:"span",symbol:t})))),i.a.createElement("div",{className:"responsive-popup-body pane__scroll"},i.a.createElement("div",{className:"instrument-details instrument-details--mobile pane__xfluid pane__yfluid pane__scroll-content"},i.a.createElement("div",{className:"instrument-details__container"},i.a.createElement(d.a,{symbol:t}),i.a.createElement(_.a,{symbol:t})))))))))))}}]),t}(m.a);t.default=Object(p.connect)(o)(h)}});