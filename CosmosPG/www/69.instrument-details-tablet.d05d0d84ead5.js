webpackJsonp([69],{2140:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function l(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function r(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}var s=t(1),i=t.n(s),c=t(2115),o=t(235),m=t(2112),u=t(2116),_=t(312),p=t(2117),d=t(311),f=t(236),b=t(313),y=t(2118),E=t(2119),v=t(2120),h=t(17),N=t.n(h),w=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),O=function(e){function a(e){n(this,a);var t=l(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return N()(t),t}return r(a,e),w(a,[{key:"render",value:function(){var e=this,a=this.props.symbol;return i.a.createElement("div",{className:"instrument-details-header"},i.a.createElement("div",{className:"instrument-details__header pane pane__xfluid"},i.a.createElement("div",{className:"instrument-details__header__left pane pane__column"},i.a.createElement("div",{className:"pane pane__fluid pane__column"},i.a.createElement("div",{className:"pane pane__column"},i.a.createElement("div",{className:"pane pane__row"},i.a.createElement(c.a,{symbol:a}),i.a.createElement("div",{className:"pane__column"},i.a.createElement("div",{className:"instrument-details__title"},i.a.createElement(o.a,{as:"span",symbol:a}),i.a.createElement(p.a,{symbol:a})),i.a.createElement("div",{className:"instrument-details__description"},i.a.createElement(m.a,{as:"span",symbol:a})))),i.a.createElement("div",{className:"pane pane__row"},i.a.createElement(d.a,{as:"span",className:"instrument-details__price",symbol:a}),i.a.createElement("span",{className:"instrument-details__change"},i.a.createElement(u.a,{symbol:a,showDir:!0}),i.a.createElement(_.a,{symbol:a,showDir:!0})))))),i.a.createElement("div",{className:"instrument-details__header__right pane pane__column"},i.a.createElement("div",{className:"instrument-details__actions"},i.a.createElement("div",{className:"instrument-details__actions__small"},i.a.createElement(b.a,{onClick:function(t){return e.toggleFavorite(t,a)},symbol:a,as:"div",className:"fs-13",yes:"icon-star-filled",no:"icon-star"}),i.a.createElement(v.a,{as:null},i.a.createElement(v.b,{onClick:this.openPriceAlerts,symbol:a,as:"div",className:"fs-13",yes:"icon-bell-filled",no:"icon-bell"}))),i.a.createElement("div",{className:"pane pane__row"},i.a.createElement(E.a,{symbol:a,onClick:function(t){return e.sell(t,a)},className:"price-button_labeled--small"}),i.a.createElement(y.a,{symbol:a,onClick:function(t){return e.buy(t,a)},className:"price-button_labeled--small"}))))))}}]),a}(f.a);a.a=O},2786:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}Object.defineProperty(a,"__esModule",{value:!0});var l=t(1),r=t.n(l),s=t(11),i=t.n(s),c=t(2140),o=t(2485),m=function(e){var a=e.className,t=e.symbol,l=i()(n({"instrument-details":!0,"instrument-details--tablet":!0,pane:!0,pane__xfluid:!0,pane__yfluid:!0},a,!!a));return r.a.createElement("div",{className:l},r.a.createElement(c.a,{symbol:t}),r.a.createElement(o.a,{symbol:t}))};a.default=m}});