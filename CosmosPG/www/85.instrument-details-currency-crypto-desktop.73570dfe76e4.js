webpackJsonp([85],{2030:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=a(1),i=a.n(s),c=a(2004),o=a(217),m=a(2001),u=a(2005),p=a(290),_=a(2006),b=a(289),f=a(218),d=a(291),y=a(2007),E=a(2008),v=a(2009),h=a(17),N=a.n(h),w=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return N()(a),a}return r(t,e),w(t,[{key:"render",value:function(){var e=this,t=this.props.symbol;return i.a.createElement("div",{className:"instrument-details__header pane pane__xfluid"},i.a.createElement("div",{className:"instrument-details__header__left pane pane__column"},i.a.createElement("div",{className:"pane pane__fluid pane__column"},i.a.createElement("div",{className:"pane pane__row pane--bottom"},i.a.createElement(c.a,{symbol:t}),i.a.createElement("div",{className:"pane pane__column"},i.a.createElement("div",{className:"instrument-details__title"},i.a.createElement(o.a,{as:"span",symbol:t}),i.a.createElement(_.a,{symbol:t})),i.a.createElement("div",{className:"instrument-details__description"},i.a.createElement(m.a,{as:"span",symbol:t}))),i.a.createElement(b.a,{as:"span",className:"instrument-details__price",symbol:t}),i.a.createElement("span",{className:"instrument-details__change"},i.a.createElement(u.a,{symbol:t,showDir:!0}),i.a.createElement(p.a,{symbol:t,showDir:!0}))))),i.a.createElement("div",{className:"instrument-details__header__right pane pane__column"},i.a.createElement("div",{className:"instrument-details__actions"},i.a.createElement("div",{className:"instrument-details__actions__small"},i.a.createElement(d.a,{onClick:function(a){return e.toggleFavorite(a,t)},symbol:t,as:"div",className:"large-s-px",yes:"icon-star-filled",no:"icon-star"}),i.a.createElement(v.a,{as:null},i.a.createElement(v.b,{onClick:this.openPriceAlerts,symbol:t,as:"div",className:"medium-b-px",yes:"icon-bell-filled",no:"icon-bell"}))),i.a.createElement(E.a,{symbol:t,onClick:function(a){return e.sell(a,t)},className:"price-button_labeled--big"}),i.a.createElement(y.a,{symbol:t,onClick:function(a){return e.buy(a,t)},className:"price-button_labeled--big"}))))}}]),t}(f.a);t.a=g},2686:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=a.n(l),s=a(11),i=a.n(s),c=a(2030),o=a(2388),m=function(e){var t=e.className,a=e.symbol,l=i()(n({"instrument-details":!0,pane:!0,pane__xfluid:!0,pane__yfluid:!0},t,!!t));return r.a.createElement("div",{className:l},r.a.createElement(c.a,{symbol:a}),r.a.createElement(o.a,{symbol:a}))};t.default=m}});