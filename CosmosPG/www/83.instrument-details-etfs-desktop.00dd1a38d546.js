webpackJsonp([83],{2030:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),i=n.n(l),s=n(2003),c=n(218),u=n(2e3),m=n(2004),p=n(290),f=n(2005),_=n(289),b=n(219),y=n(291),d=n(2006),E=n(2007),h=n(2008),v=n(2009),w=n(17),N=n.n(w),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return N()(n),n}return o(t,e),O(t,[{key:"render",value:function(){var e=this,t=this.props.symbol;return i.a.createElement("div",{className:"instrument-details__header pane pane__xfluid"},i.a.createElement("div",{className:"instrument-details__header__left pane pane__column"},i.a.createElement("div",{className:"pane pane__fluid pane__column"},i.a.createElement("div",{className:"pane pane__row pane--bottom"},i.a.createElement(s.a,{symbol:t}),i.a.createElement("div",{className:"pane pane__column"},i.a.createElement("div",{className:"instrument-details__title"},i.a.createElement(c.a,{as:"span",symbol:t})),i.a.createElement("div",{className:"instrument-details__description"},i.a.createElement(u.a,{as:"span",symbol:t}))),i.a.createElement(_.a,{as:"span",className:"instrument-details__price",symbol:t}),i.a.createElement("span",{className:"instrument-details__change"},i.a.createElement(m.a,{symbol:t,showDir:!0}),i.a.createElement(p.a,{symbol:t,showDir:!0}))),i.a.createElement("div",{className:"pane pane__row"},i.a.createElement(f.a,{symbol:t}),i.a.createElement(v.a,{className:"instrument-details__time",pre:"  |  "+__("instrument_info.as_of")+" ",post:"",symbol:t,format:"MMMM DD YYYY HH:mm"})))),i.a.createElement("div",{className:"instrument-details__header__right pane pane__column"},i.a.createElement("div",{className:"instrument-details__actions"},i.a.createElement("div",{className:"instrument-details__actions__small"},i.a.createElement(y.a,{onClick:function(n){return e.toggleFavorite(n,t)},symbol:t,as:"div",className:"large-s-px",yes:"icon-star-filled",no:"icon-star"}),i.a.createElement(h.a,{as:null},i.a.createElement(h.b,{onClick:this.openPriceAlerts,symbol:t,as:"div",className:"medium-b-px",yes:"icon-bell-filled",no:"icon-bell"}))),i.a.createElement(E.a,{symbol:t,onClick:function(n){return e.sell(n,t)},className:"price-button_labeled--big"}),i.a.createElement(d.a,{symbol:t,onClick:function(n){return e.buy(n,t)},className:"price-button_labeled--big"}))))}}]),t}(b.a);t.a=g},2695:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n.n(i),c=n(2030),u=n(2391),m=n(11),p=n.n(m),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.symbol,r=p()(a({"instrument-details":!0,pane:!0,pane__xfluid:!0,pane__yfluid:!0},t,!!t));return s.a.createElement("div",{className:r},s.a.createElement(c.a,{symbol:n}),s.a.createElement(u.a,{symbol:n}))}}]),t}(s.a.Component);t.default=_}});