webpackJsonp([64],{1999:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){var t,n;return n=t=function(t){function n(){return r(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,t),u(n,[{key:"render",value:function(){var t={ticker:this.context.ticker};return l.a.createElement(e,s({},this.props,t))}}]),n}(l.a.Component),t.contextTypes={ticker:function(){return null}},n}var i=n(1),l=n.n(i),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.a=o},2027:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),c=n.n(a),o=n(2),i=n(1999),l=n(430),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e,t){var n=t.id,r=t.ticker;return{value:Object(l.o)(e,r,n).title||null}};t.a=Object(i.a)(Object(o.connect)(u)(function(e){var t=e.value,n=(e.dispatch,e.as),a=(e.ticker,r(e,["value","dispatch","as","ticker"]));return c.a.createElement(n||"span",s({},a),t)}))},2028:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),c=n.n(a),o=n(2),i=n(74),l=n.n(i),s=n(1999),u=n(430),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(e,t){var n=t.id,r=t.ticker,a=Object(u.o)(e,r,n);return{value:a?a.publicationTime:null}};t.a=Object(s.a)(Object(o.connect)(f)(function(e){var t=e.value,n=(e.dispatch,e.as),a=(e.ticker,r(e,["value","dispatch","as","ticker"])),o=l.a.servicesDate(t);return c.a.createElement(n||"span",p({},a),t?o:t)}))},2029:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),c=n.n(a),o=n(2),i=n(1999),l=n(0),s=n.n(l),u=n(430),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f={dow_jones:"icon-dow-jones"},v=function(e,t){var n=t.id,r=t.ticker,a=Object(u.o)(e,r,n),c=a&&a.wire&&String(a.wire).toLowerCase().replace(" ","_");return{iconClassName:s.a.has(f,c)?f[c]:""}};t.a=Object(i.a)(Object(o.connect)(v)(function(e){var t=e.iconClassName,n=(e.dispatch,e.as),a=(e.ticker,r(e,["iconClassName","dispatch","as","ticker"]));return c.a.createElement(n||"span",p({},a),c.a.createElement("i",{className:t}))}))},2065:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),c=n.n(a),o=n(2),i=n(72),l=n.n(i),s=n(1999),u=n(430),p=function(e,t){var n=t.id,r=t.ticker;return{value:Object(u.o)(e,r,n).text}};t.a=Object(s.a)(Object(o.connect)(p)(function(e){var t=e.value,n=(e.dispatch,e.as,e.ticker,r(e,["value","dispatch","as","ticker"]));return c.a.createElement("span",n,l()(t))}))},2066:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),c=n.n(a),o=n(2),i=n(1999),l=n(430),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e,t){var n=t.id,r=t.ticker;return{value:Object(l.o)(e,r,n).source}};t.a=Object(i.a)(Object(o.connect)(u)(function(e){var t=e.value,n=(e.dispatch,e.as),a=(e.ticker,r(e,["value","dispatch","as","ticker"]));return c.a.createElement(n||"span",s({href:t},a),t)}))},2067:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var c=n(11),o=n.n(c),i=n(1),l=n.n(i),s=n(2),u=n(1999),p=n(847),f=n(430),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(e,t){var n=t.id,r=t.ticker,a=t.activeClassName,c=t.notActiveClassName;return{active:n===Object(f.n)(e,r),newItemsId:Object(f.j)(e,r),activeClassName:a||"active",notActiveClassName:c||""}};t.a=Object(u.a)(Object(s.connect)(b)(function(e){var t,n=e.active,c=(e.dispatch,e.children),i=e.activeClassName,s=e.notActiveClassName,u=e.className,f=e.as,b=(e.ticker,a(e,["active","dispatch","children","activeClassName","notActiveClassName","className","as","ticker"]));return b.className=o()((t={},r(t,u,!!u),r(t,i,n),r(t,s,!n),t)),l.a.createElement(p.a,v({as:f,id:e.id,key:e.id},b),c)}))},2068:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(431),i=n(0),l=(n.n(i),n(1)),s=n.n(l),u=n(2),p=n(94),f=n(1999),v=n(430),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e,t){var n=t.ticker,r=Object(v.a)(e,n);return{availableFilters:r,selectedDropdownFilter:Object(v.m)(e,n),isAvailableEnabledFilters:0!==r.length,countAvailableFilters:r.length}},d=function(e){function t(){var e,n,c,i;r(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=c=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),c.onChange=function(e){var t=c.props,n=t.dispatch,r=t.ticker;n(Object(o.selectDropdownFilter)(e,r))},i=n,a(c,i)}return c(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=e.availableFilters,n=e.selectedDropdownFilter;e.isAvailableEnabledFilters,e.countAvailableFilters;return i.isEmpty(t)?null:s.a.createElement("div",{className:"pane filter-block bg__platform-2 color__platform-3 list__item"},s.a.createElement("div",{className:"filter__label"},__("news.page.select.news.feed"),":"),s.a.createElement("div",{className:"filter__select"},s.a.createElement(p.a,{className:"pane pane__fluid services__dropdown",childClassName:"pane pane__fluid",as:"div",ref:"dropdown",selected:n,options:t,onChange:this.onChange})))}}]),t}(l.PureComponent);t.a=Object(f.a)(Object(u.connect)(m)(d))},2158:function(e,t,n){"use strict";var r=n(1),a=n.n(r);t.a=function(e){var t=e.text;return a.a.createElement("div",{className:"pane pane__column news__empty"},a.a.createElement("div",{className:"pane flex-valign-center flex-align-center "},a.a.createElement("div",{className:"icon-empty-news"})),a.a.createElement("div",{className:"text"},t))}},333:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=n(1),s=n.n(l),u=n(220),p=n.n(u),f=n(2027),v=n(2028),b=n(2029),m=n(2065),d=n(2066),y=n(1999),O=n(430),h=function(e,t){var n=t.id,r=t.ticker;return{value:Object(O.o)(e,r,n)}},_=Object(y.a)(Object(i.connect)(h)(function(e){var t=e.value,n=(e.dispatch,e.id),a=(e.ticker,r(e,["value","dispatch","id","ticker"]));return t?s.a.createElement(a.as,a,s.a.createElement("div",{className:"date text-muted"},s.a.createElement(v.a,{id:n,as:"span"})," |"," ",s.a.createElement(b.a,{id:n})),s.a.createElement(f.a,{id:n,as:"div",className:"caption"}),s.a.createElement(m.a,{id:n,as:"div",className:"text"}),s.a.createElement("div",{className:"source"},__("source"),": ",s.a.createElement(d.a,{id:n,as:"span"}))):null})),j=n(2067),w=n(2068),E=n(431),k=n(3),N=n.n(k),g=n(297),P=n(438),C=n(0),x=n.n(C),T=n(882),S=n(67),F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),A=function(e,t){var n=t.ticker;return{news:Object(O.e)(e,n),count:Object(O.f)(e,n),selectedNewsId:Object(O.n)(e,n),filter:Object(O.g)(e,n),status:Object(O.k)(e,n)}},D=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),F(t,[{key:"componentDidMount",value:function(){Object(T.a)(this._listScrollbar,".list--column",".list__item.active")}},{key:"getChildContext",value:function(){return{ticker:this.props.ticker}}},{key:"onClick",value:function(e){var t=this.props,n=t.dispatch,r=t.ticker,a=this._scrollbarContainer.scrollbar;Object(S.sendEventosNewsAction)(e),r===g.a&&N.a.navigate("news/"+e),n(Object(E.selectNews)(e,r)),a.scrollTop=0}},{key:"render",value:function(){var e=this,t=this.props,n=t.selectedNewsId,r=t.filter,a=t.isShowFilter;return s.a.createElement("div",{className:"pane pane__yfluid pane__xfluid"},s.a.createElement("div",{className:"pane pane__column pane__fluid pane__yfluid"},s.a.createElement("div",{className:"pane pane__yfluid news"},s.a.createElement("div",{className:"pane pane__row pane__fluid news__page-container"},s.a.createElement("div",{className:"pane__scroll"},s.a.createElement("div",{className:"pane__scroll-content"},s.a.createElement(p.a,{ref:function(t){e._listScrollbar=t},className:"no-padding"},a&&s.a.createElement(w.a,null),s.a.createElement("div",{className:"list list--column"},x.a.map(r,function(t){return s.a.createElement(j.a,{as:"div",id:t,key:t,className:"list__item flex flex-column",notActiveClassName:"color__platform-3 bg__platform-1-hover",activeClassName:"active bg__platform-1",onClick:function(n){return e.onClick(t)}},s.a.createElement("div",{className:"date text-muted small-px"},s.a.createElement(v.a,{id:t})," | ",s.a.createElement(b.a,{id:t}),s.a.createElement(P.a,{as:"span"})),s.a.createElement(f.a,{id:t,as:"div",className:"color__brand-primary medium-px"}))})))))),s.a.createElement("div",{className:"pane pane__row pane__fluid new__page-full-news"},s.a.createElement("div",{className:"pane__scroll"},s.a.createElement("div",{className:"pane__scroll-content"},s.a.createElement(p.a,{ref:function(t){e._scrollbarContainer=t},className:"no-padding"},s.a.createElement("div",{className:"news__page-content"},n&&s.a.createElement(_,{id:n,as:"div",className:"content"})))))))))}}]),t}(s.a.PureComponent);D.defaultProps={isShowFilter:!0},D.childContextTypes={ticker:function(){return null}};t.default=Object(i.connect)(A)(D)},931:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{resetNewsByTicker:function(t){e(Object(v.resetNewsByTicker)(t))},loadNews:function(t){e(Object(v.loadNews)(t,!0,t===O.a))}}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),s=n.n(l),u=n(1),p=n.n(u),f=n(2),v=n(431),b=n(333),m=n(2158),d=n(231),y=n(5),O=n(297),h=n(430),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),w=function(e,t){var n=t.ticker;return{status:Object(h.k)(e,n),isEmpty:Object(h.c)(e,n)}},E=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),j(t,[{key:"componentDidMount",value:function(){this.props.loadNews(this.props.ticker)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.ticker,n=e.ticker;t!==n&&(this.props.resetNewsByTicker(t),this.props.loadNews(n))}},{key:"render",value:function(){var e=this.props,t=e.status,n=e.isEmpty,a=e.empty,c=e.ticker,o=r(e,["status","isEmpty","empty","ticker"]),i=s.a.isEmpty(c),l=t===y.SUCCESS;return i||!l||n?p.a.createElement("div",{className:"pane pane__fluid flex-valign-center flex-align-center"},i&&p.a.createElement(m.a,{text:a}),!i&&!l&&p.a.createElement(d.a,null),!i&&l&&n&&p.a.createElement(m.a,{text:a})):p.a.createElement(b.default,_({},o,{ticker:c}))}}]),t}(u.Component);E.defaultProps={ticker:O.a,isShowFilter:!1},t.default=Object(f.connect)(w,i)(E)}});