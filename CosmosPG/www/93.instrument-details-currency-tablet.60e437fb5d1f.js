webpackJsonp([93],{2045:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a(1),i=a.n(s),c=a(2011),o=a(1969),m=a(1986),u=a(2012),p=a(1973),_=a(2013),f=a(1972),b=a(1971),d=a(1974),y=a(2007),E=a(2016),v=a(32),N=a.n(v),h=a(2015),w=a(2014),O=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return N()(a),a}return l(t,e),O(t,[{key:"render",value:function(){var e=this,t=this.props.symbol;return i.a.createElement("div",{className:"instrument-details__header pane pane__xfluid pane__column"},i.a.createElement("div",{className:"pane"},i.a.createElement("div",{className:"pane pane__stretch"},i.a.createElement(c.a,{symbol:t}),i.a.createElement("div",{className:"pane pane__column"},i.a.createElement("div",{className:"instrument-details__title"},i.a.createElement(o.a,{as:"span",symbol:t})),i.a.createElement("div",{className:"instrument-details__description"},i.a.createElement(m.a,{as:"span",symbol:t})))),i.a.createElement("div",{className:"instrument-details__actions"},i.a.createElement("div",{className:"instrument-details__actions__small"},i.a.createElement(d.a,{onClick:function(a){return e.toggleFavorite(a,t)},symbol:t,as:"div",className:"large-s-px",yes:"icon-star-filled",no:"icon-star"}),i.a.createElement(y.a,{as:null},i.a.createElement(y.b,{onClick:this.openPriceAlerts,symbol:t,as:"div",className:"medium-b-px",yes:"icon-bell-filled",no:"icon-bell"}))),i.a.createElement("div",{className:"instrument-details__close",onClick:function(a){return e.closeInstrumentDetails(a,t)}},i.a.createElement("i",{className:"icon-close-blue-circle-transparent"})))),i.a.createElement("div",{className:"pane pane__row pane--bottom"},i.a.createElement(f.a,{as:"span",className:"instrument-details__price",symbol:t}),i.a.createElement("span",{className:"instrument-details__change"},i.a.createElement(u.a,{symbol:t,showDir:!0}),i.a.createElement(p.a,{symbol:t,showDir:!0}))),i.a.createElement("div",{className:"pane pane__row"},i.a.createElement(E.a,{className:"instrument-details__time",pre:__("instrument_info.as_of")+" ",post:"  ",symbol:t,format:"MMMM DD YYYY HH:mm"})),i.a.createElement("div",{className:"pane pane__row"},i.a.createElement(_.a,{symbol:t})),i.a.createElement("div",{className:"instrument-details__actions pane__xfluid"},i.a.createElement(h.a,{symbol:t,onClick:function(a){return e.sell(a,t)}}),i.a.createElement(w.a,{symbol:t,onClick:function(a){return e.buy(a,t)}})))}}]),t}(b.a);t.a=g},2819:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),l=a.n(r),s=a(11),i=a.n(s),c=a(2045),o=a(2637),m=function(e){var t=e.className,a=e.symbol,r=i()(n({"instrument-details":!0,"instrument-details--tablet":!0,pane:!0,pane__xfluid:!0,pane__yfluid:!0},t,!!t));return l.a.createElement("div",{className:r},l.a.createElement(c.a,{symbol:a}),l.a.createElement(o.a,{symbol:a}))};t.default=m}});