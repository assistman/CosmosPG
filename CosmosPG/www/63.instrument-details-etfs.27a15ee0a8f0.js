webpackJsonp([63],{1956:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),s=n.n(i),c=n(215),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"componentDidMount",value:function(){Object(c.q)(this.props.symbol)}},{key:"componentWillUnmount",value:function(){Object(c.r)(this.props.symbol)}},{key:"componentWillUpdate",value:function(e){e.symbol!==this.props.symbol&&(Object(c.r)(this.props.symbol),Object(c.q)(e.symbol))}},{key:"render",value:function(){return null}}]),t}(s.a.Component);t.a=l},1957:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){var n=t.symbol,r=t.as,o=void 0===r?"span":r;return{value:Object(c.getInstrumentName)(e,n),as:o}}var a=n(1),i=n.n(a),s=n(4),c=n(84),u=function(e){var t=e.value,n=(e.symbol,e.dispatch,r(e,["value","symbol","dispatch"]));return i.a.createElement(n.as,n,t)};t.a=Object(s.connect)(o)(u)},1958:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(10),s=n(2),c=n.n(s),u=n(1),l=n.n(u),p=n(0),f=n.n(p),b=n(47),m=n(215),y=n(216),d=n(794),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),v(t,[{key:"selectInstrument",value:function(e,t){e.stopPropagation(),e.preventDefault(),store.dispatch(Object(b.setShouldInstrumentBeCentered)(!1)),f.a.delay(function(){return store.dispatch(Object(b.selectInstrumentSymbolAndUpdateUrl)(t))},10)}},{key:"sortByName",value:function(e){store.dispatch(Object(b.setSymbolsSort)(i.INSTRUMENT_SORT.NAME,e))}},{key:"sortByChange",value:function(e){store.dispatch(Object(b.setSymbolsSort)(i.INSTRUMENT_SORT.CHANGE,e))}},{key:"sortBySentiments",value:function(e){store.dispatch(Object(b.setSymbolsSort)(i.INSTRUMENT_SORT.SENTIMENT,e))}},{key:"toggleFavorite",value:function(e,t){e.preventDefault(),e.stopPropagation(),c.a.trigger("favorites:toggle",t)}},{key:"buy",value:function(e,t){Object(m.h)(t)&&c.a.trigger("ui:new-position",{direction:i.BUY,symbolOrId:t})}},{key:"sell",value:function(e,t){Object(m.m)(t)&&c.a.trigger("ui:new-position",{direction:i.SELL,symbolOrId:t})}},{key:"editPosition",value:function(e,t){e.preventDefault(),e.stopPropagation(),store.dispatch(Object(y.editPosition)(t))}},{key:"closePosition",value:function(e,t){e.preventDefault(),e.stopPropagation(),store.dispatch(Object(y.closePosition)(t))}},{key:"cancelOrder",value:function(e,t){e.preventDefault(),e.stopPropagation(),store.dispatch(Object(d.b)(t))}},{key:"editOrder",value:function(e,t){e.preventDefault(),e.stopPropagation(),store.dispatch(Object(d.c)(t))}},{key:"closeInstrumentDetails",value:function(e,t){e.preventDefault(),e.stopPropagation(),c.a.trigger("ui:close-instrument-details",t)}},{key:"openPriceAlerts",value:function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.preventDefault(),e.stopPropagation(),c.a.trigger("ui:create-price-alert",t)}},{key:"cancelAllInstrumentOrders",value:function(e,t){e.preventDefault(),e.stopPropagation(),c.a.trigger("instrument:orders:cancel_all",t)}},{key:"closeAllInstrumentPositions",value:function(e,t){e.preventDefault(),e.stopPropagation(),c.a.trigger("instrument:positions:close_all",t)}},{key:"openInstrumentDetails",value:function(e,t){store.dispatch(Object(b.toggleInstrumentDetails)(t))}},{key:"render",value:function(){return null}}]),t}(l.a.Component);t.a=h},1959:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(1),u=n.n(c),l=n(12),p=n.n(l),f=n(1956),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,r)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(r)},y=function(e){function t(){var e,n,r,o;a(this,t);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={currentDirection:0},o=n,i(r,o)}return s(t,e),b(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,n=e.direction;0===n&&n!==this.state.currentDirection&&(clearTimeout(this.timout),this.timout=setTimeout(function(){t.setState({currentDirection:n})},1e3)),0!==n&&this.setState({currentDirection:n})}},{key:"componentWillUnmount",value:function(){m(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentWillUnmount",this).call(this),clearTimeout(this.timout)}},{key:"render",value:function(){var e,t=this.props,n=t.loading,a=t.className,i=t.children,s=t.disableEqualState,c=o(t,["loading","className","children","disableEqualState"]),l=this.state.currentDirection,f=1===l,b=-1===l,m=p()((e={},r(e,a,!!a),r(e,"up",f),r(e,"down",b),r(e,"equally",!f&&!b),r(e,"loading",n),e));return s&&(f||b?this.prevDirection=m:m=this.prevDirection||m),u.a.createElement(c.as,{className:m},i)}}]),t}(f.a);y.defaultProps={as:"span",disableEqualState:!1},t.a=y},1960:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n=t.symbol,r=t.as,o=void 0===r?"span":r;return{precision:Object(p.getInstrumentPipsPrecision)(e,n),ask:Object(p.getInstrumentAsk)(e,n),as:o}}var c=n(1),u=n.n(c),l=n(4),p=n(84),f=n(1956),b=n(215),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.children,e.symbol,e.precision),n=e.ask,o=r(e,["dispatch","children","symbol","precision","ask"]),a=Object(b.d)(n,t);return u.a.createElement(o.as,o,a)}}]),t}(f.a);t.a=Object(l.connect)(s)(y)},1961:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.symbol,r=t.as,o=void 0===r?"span":r,a=t.up,i=t.down,s=Object(p.getInstrumentPercentChange)(e,n);return{value:s?s.change:"",sign:s?s.sign:"",dir:s?s.dir:0,as:o,up:a||"up",down:i||"down"}}var i=n(1),s=n.n(i),c=n(4),u=n(12),l=n.n(u),p=n(84),f=n(0),b=n.n(f),m=function(e){var t,n=e.value,a=e.sign,i=e.dir,c=e.up,u=e.down,p=e.className,f=e.showDir,m=o(e,["value","sign","dir","up","down","className","showDir"]),y=l()((t={},r(t,c,i>0),r(t,u,i<0),r(t,p,!!p),t)),d=Number(n),v=b.a.isNumber(d)?a+d.toFixed(2)+"%":0;return f?s.a.createElement(m.as,{className:y},"("+v,s.a.createElement("span",{className:"caret caret--"+(i>0?"up":"down")}),")"):s.a.createElement(m.as,null,v)};t.a=Object(c.connect)(a)(m)},1962:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=e.user,r=n.favoriteInstrumentSymbols;return{consist:n.favoriteInstrumentSymbolsCount&&r[t.symbol]}}var i=n(1),s=n.n(i),c=n(12),u=n.n(c),l=n(4),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(e){var t,n=e.className,a=e.consist,i=e.yes,c=e.no,l=(e.symbol,e.dispatch,e.yesComponent),f=e.noComponent,b=o(e,["className","consist","yes","no","symbol","dispatch","yesComponent","noComponent"]);if(l&&f)return a?l:f;var m=u()((t={},r(t,i,a),r(t,c,!a),r(t,n,!!n),r(t,"cursor--pointer",!0),r(t,"autotests-action-favorite",!0),t));return s.a.createElement(b.as,p({className:m},b))};t.a=Object(l.connect)(a)(f)},1964:function(e,t,n){"use strict";function r(e,t){var n=t.symbol;return{direction:Object(s.getInstrumentAskDirection)(e,n)}}var o=n(1),a=n.n(o),i=n(4),s=n(84),c=n(1959),u=n(0),l=n.n(u),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(e){return a.a.createElement(c.a,p({loading:l.a.isUndefined(e.direction)},e))};t.a=Object(i.connect)(r)(f)},1965:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){var n=t.symbol,r=t.as,o=void 0===r?"span":r;return{tradable:Object(m.h)(n),as:o}}var u=n(1),l=n.n(u),p=n(12),f=n.n(p),b=n(4),m=n(215),y=n(1956),d=n(413),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),h(t,[{key:"render",value:function(){var e,t=this.props,n=t.tradable,a=t.symbol,i=t.className,s=t.children,c=(t.dispatch,o(t,["tradable","symbol","className","children","dispatch"])),u=!n&&Object(m.g)(a,d.SHORT_ONLY_MODE),p=f()((e={},r(e,i,!!i),r(e,"disabled",!n),e));return n||(c["aria-label"]=u),l.a.createElement(c.as,v({className:p},c),s)}}]),t}(y.a);t.a=Object(b.connect)(c)(O)},1966:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n=t.symbol,r=t.as,o=void 0===r?"span":r;return{precision:Object(p.getInstrumentPipsPrecision)(e,n),bid:Object(p.getInstrumentBid)(e,n),as:o}}var c=n(1),u=n.n(c),l=n(4),p=n(84),f=n(1956),b=n(215),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.children,e.symbol,e.precision),n=e.bid,o=r(e,["dispatch","children","symbol","precision","bid"]),a=Object(b.d)(n,t);return u.a.createElement(o.as,o,a)}}]),t}(f.a);t.a=Object(l.connect)(s)(y)},1967:function(e,t,n){"use strict";function r(e,t){var n=t.symbol;return{direction:Object(s.getInstrumentBidDirection)(e,n)}}var o=n(1),a=n.n(o),i=n(4),s=n(84),c=n(1959),u=n(0),l=n.n(u),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(e){return a.a.createElement(c.a,p({loading:l.a.isUndefined(e.direction)},e))};t.a=Object(i.connect)(r)(f)},1968:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){var n=t.symbol,r=t.as,o=void 0===r?"span":r;return{tradable:Object(m.m)(n),as:o}}var u=n(1),l=n.n(u),p=n(12),f=n.n(p),b=n(4),m=n(215),y=n(1956),d=n(413),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),h(t,[{key:"render",value:function(){var e,t=this.props,n=t.tradable,a=t.symbol,i=t.className,s=t.children,c=(t.dispatch,o(t,["tradable","symbol","className","children","dispatch"])),u=!n&&Object(m.g)(a,d.LONG_ONLY_MODE),p=f()((e={},r(e,i,!!i),r(e,"disabled",!n),e));return n||(c["aria-label"]=u),l.a.createElement(c.as,v({className:p},c),s)}}]),t}(y.a);t.a=Object(b.connect)(c)(O)},1970:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){var n=t.as,r=void 0===n?"span":n,o=t.symbol;return{value:Object(c.getInstrumentDescription)(e,o),as:r}}var a=n(1),i=n.n(a),s=n(4),c=n(84),u=function(e){var t=e.value,n=(e.symbol,e.dispatch,r(e,["value","symbol","dispatch"]));return i.a.createElement(n.as,n,t)};t.a=Object(s.connect)(o)(u)},1990:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"INSTRUMENT_ORDER",function(){return r}),n.d(t,"INSTRUMENT_OPEN_POSITIONS",function(){return o}),n.d(t,"INSTRUMENT_CHART",function(){return a}),n.d(t,"INSTRUMENT_OVERVIEW",function(){return i}),n.d(t,"RELATED_INSTRUMENTS",function(){return s}),n.d(t,"INSTRUMENT_PROFILE",function(){return c}),n.d(t,"INSTRUMENT_CONVERTER",function(){return u}),n.d(t,"INSTRUMENT_EVENTS",function(){return l}),n.d(t,"INSTRUMENT_INSIGHT",function(){return p}),n.d(t,"INSTRUMENT_FINANCIALS",function(){return f}),n.d(t,"INSTRUMENT_PERFORMANCE",function(){return b}),n.d(t,"INSTRUMENT_NEWS",function(){return m}),n.d(t,"CLOSE_ALL_POSITIONS",function(){return y}),n.d(t,"CANCEL_ALL_ORDERS",function(){return d});var r="instrument-order",o="instrument-open-positions",a="instrument-chart",i="instrument-overview",s="related-instruments",c="instrument-profile",u="instrument-converter",l="instrument-events",p="instrument-insight",f="instrument-financials",b="instrument-performance",m="instrument-news",y="close-all-positions",d="cancel-all-orders"},1993:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.symbol;return{categoryName:Object(u.getInstrumentCategory)(e,n)}}var i=n(1),s=n.n(i),c=n(4),u=n(84),l=n(10),p=n(2013),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(e){var t=e.category,n=r(e,["category"]);n.as=n.as||"div";var o="icon-"+t+"-ico fs-30 instrument-details-no-image";return s.a.createElement(n.as,f({className:o},n))};b.defaultProps={category:"no-category"};var m=b,y=function(e){var t=e.symbol,n=e.categoryName,r=o(e,["symbol","categoryName"]),a=l.INSTRUMENT_CATEGORIES.BONDS,i=l.INSTRUMENT_CATEGORIES.INDEX,c=l.INSTRUMENT_CATEGORIES.ETFS,u=n.split(".")[0].toLowerCase(),f=u===a||u===c||u===i?s.a.createElement(m,{category:u}):s.a.createElement(p.a,{symbol:t});return s.a.createElement(r.as,null,f)};y.defaultProps={as:"span"};t.a=Object(c.connect)(a)(y)},1994:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.symbol,r=t.as,o=void 0===r?"span":r,a=t.up,i=void 0===a?"up":a,s=t.down,c=void 0===s?"down":s,u=Object(p.getInstrumentChange)(e,n);return{value:u?u.change:"",sign:u?u.sign:"",dir:u?u.dir:0,as:o,up:i,down:c}}var i=n(1),s=n.n(i),c=n(4),u=n(12),l=n.n(u),p=n(84),f=function(e){var t,n=e.value,a=e.sign,i=e.dir,c=e.up,u=e.down,p=e.className,f=e.showDir,b=o(e,["value","sign","dir","up","down","className","showDir"]),m=l()((t={},r(t,c,f&&i>0),r(t,u,f&&i<0),r(t,p,!!p),t));return s.a.createElement(b.as,{className:m},n?a+n:0)};t.a=Object(c.connect)(a)(f)},1995:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.symbol,r=t.as,o=void 0===r?"span":r;return{instrumentAvailable:Object(p.isInstrumentTradable)(e,n),isOTH:Object(p.isInstrumentOTH)(e,n),as:o}}var i=n(1),s=n.n(i),c=n(4),u=n(12),l=n.n(u),p=n(84),f=function(e){var t=e.instrumentAvailable,n=e.isOTH,a=e.className,i=o(e,["instrumentAvailable","isOTH","className"]),c=l()(r({"instrument-availability":!0},a,!!a)),u=l()({"instrument-availability__icon":!0,"instrument-availability__icon--available":t,"instrument-availability__icon--not-available":!t&&!n,"instrument-availability__icon--pending-orders":!t&&n}),p="instrument_info.available_for_trading";return t||n||(p="instrument_info.not_available_for_trading"),!t&&n&&(p="instrument.info.trading.outside_of_trading_hours"),s.a.createElement(i.as,{className:c},s.a.createElement("i",{className:u}),__(p))};t.a=Object(c.connect)(a)(f)},1996:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(1960),a=n(1964),i=n(1965),s=n(1),c=n.n(s),u=n(12),l=n.n(u),p=function(e){var t=e.symbol,n=e.onClick,s=e.className;return c.a.createElement(a.a,{as:"div",symbol:t,className:l()(r({"button price-button price-button_ani price-button_labeled autotests-instrument-details-action-buy":!0},s,!!s))},c.a.createElement(i.a,{className:"price-button__wrapper btn",onClick:n,symbol:t},c.a.createElement("div",{className:"price-button__subtitle"},__("actions.buy")),c.a.createElement("div",{className:"price-button__title price-button__title_self-end"},c.a.createElement(o.a,{as:"span",symbol:t}))))};t.a=p},1997:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(1966),a=n(1967),i=n(1968),s=n(1),c=n.n(s),u=n(12),l=n.n(u),p=function(e){var t=e.symbol,n=e.onClick,s=e.className;return c.a.createElement(a.a,{as:"div",symbol:t,className:l()(r({"button price-button price-button_ani price-button_labeled autotests-instrument-details-action-sell":!0},s,!!s))},c.a.createElement(i.a,{className:"price-button__wrapper btn",onClick:n,symbol:t},c.a.createElement("div",{className:"price-button__subtitle"},__("actions.sell")),c.a.createElement("div",{className:"price-button__title price-button__title_self-end"},c.a.createElement(o.a,{as:"span",symbol:t}))))};t.a=p},1998:function(e,t,n){"use strict";var r=n(2002);n.d(t,"a",function(){return r.a});var o=n(2003);n.d(t,"b",function(){return o.a})},1999:function(e,t,n){"use strict";(function(e){function r(e,t){var n=(t.symbol,t.as);return{timestamp:e.instruments.instrumentLastQuoteTime,as:n||"span"}}var o=n(281),a=n(1),i=n.n(a),s=n(11),c=n.n(s),u=n(4),l=n(2),p=n.n(l),f=n(3),b=(n.n(f),n(122)),m=n.n(b);t.a=Object(u.connect)(r)(c()({getConfig:function(e){return[{aggregationPeriod:{name:"1m",seconds:60,intraday:!1},expansionBarsCount:0,extendedHours:!1,forexPriceField:"bid",id:"instrument-last-quote-time-"+e,maxBarsCount:1,range:{name:"170 Years",duration:5375808e3,defaultAggregationPeriod:{name:"1m",seconds:60,intraday:!1}},studySubscription:[],subtopic:"instrument-last-quote-time-"+e,symbol:e,updateInterval:3e3}]},componentDidMount:function(){this.update(this.props.symbol)},componentWillUnmount:function(){p.a.off("stream:type:chartFeedSubtopic",this.onWSFeed,this)},componentWillUpdate:function(e){e.symbol!==this.props.symbol&&(this.update(e.symbol),this.props.dispatch(Object(o.setInstrumentLastQuoteTime)(null)))},update:function(e){p.a.on("stream:type:chartFeedSubtopic",this.onWSFeed,this),this.props.dispatch(Object(o.subscribeChartFeed)(this.getConfig(e)))},onWSFeed:function(t){if(e.isObject(t)){var n="instrument-last-quote-time-"+this.props.symbol;t.historyRequestID===n&&(t.data&&t.data.length>0&&this.props.dispatch(Object(o.setInstrumentLastQuoteTime)(t.data[0].timestamp)),this.props.dispatch(Object(o.unsubscribeChartFeed)([n])),p.a.off("stream:type:chartFeedSubtopic",this.onWSFeed,this))}},render:function(){var e=this.props,t=(e.dispatch,e.children,e.timestamp),n=e.format,r=e.className,o=e.pre,a=e.post,s=m.a.user;return t&&t>0?i.a.createElement(e.as,{className:r},o+s.applyOffsetToTimestamp(t,n)+" ("+s.GMTPostfix()+")"+a):null}}))}).call(t,n(0))},2002:function(e,t,n){"use strict";(function(e){function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(){return{enabled:p.a.isPriceAlertsEnabled()}}var a=n(4),i=n(1),s=n.n(i),c=n(11),u=n.n(c),l=n(9),p=n.n(l),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.a=Object(a.connect)(o)(u()({render:function(){var t=this.props,n=t.as,o=t.enabled,a=(t.dispatch,t.children),i=r(t,["as","enabled","dispatch","children"]);return o?e.isNull(n)?a:s.a.createElement(n||"span",f({},i),a):null}}))}).call(t,n(0))},2003:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){var n=t.symbol;return{hasPriceAlerts:Object(h.hasInstrumentPriceAlerts)(e,n)}}var u=n(1),l=n.n(u),p=n(12),f=n.n(p),b=n(27),m=n.n(b),y=n(4),d=n(0),v=n.n(d),h=n(84),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return m()(n),n}return s(t,e),O(t,[{key:"onClick",value:function(e){var t=this.props,n=t.onClick,r=t.symbol,o=t.hasPriceAlerts;v.a.isFunction(n)&&n(e,r,o)}},{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.yes,i=t.no,s=t.yesComponent,c=t.noComponent,u=t.hasPriceAlerts,p=o(t,["className","yes","no","yesComponent","noComponent","hasPriceAlerts"]),b=f()((e={},r(e,n,!!n),r(e,a,u),r(e,i,!u),r(e,"cursor--pointer",!0),r(e,"autotests-action-pricealerts",!0),e));return s&&c?l.a.createElement(p.as,{className:b,onClick:this.onClick},u?s:c):l.a.createElement(p.as,{className:b,onClick:this.onClick})}}]),t}(l.a.Component);_.defaultProps={as:"span",className:"",yes:"yes",no:"no",yesComponent:null,noComponent:null,symbol:""},t.a=Object(y.connect)(c)(_)},2013:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var a=n(1),i=n.n(a),s=n(12),c=n.n(s),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(e){var t,n=e.symbol,a=e.className,s=o(e,["symbol","className"]);n=String(n)||"",s.as=s.as||"div";var l=c()((t={},r(t,"instrument-img instrument-img-"+n.replace("/","").toLowerCase(),!0),r(t,a,!!a),t));return i.a.createElement(s.as,u({className:l},s))};t.a=l},2014:function(e,t,n){"use strict";var r=n(164);t.a=Object(r.a)(function(){return n.e(58).then(n.bind(null,2070))})},2015:function(e,t,n){"use strict";function r(e,t){var n=t.symbol;return n||(n=Object(u.getInstrumentDetailsSymbol)(e)),{symbol:n,type:Object(l.getInstrumentType)(e,n),category:Object(l.getInstrumentCategory)(e,n)}}var o=n(1),a=n.n(o),i=n(4),s=n(164),c=n(10),u=n(163),l=n(84),p=Object(s.a)(function(){return n.e(68).then(n.bind(null,2071))}),f=Object(s.a)(function(){return n.e(69).then(n.bind(null,2074))}),b=Object(s.a)(function(){return n.e(70).then(n.bind(null,2075))}),m=Object(s.a)(function(){return n.e(67).then(n.bind(null,2076))}),y=Object(s.a)(function(){return n.e(71).then(n.bind(null,2077))});t.a=Object(i.connect)(r)(function(e){var t=e.symbol,n=(e.type,e.category);return n=n.toLowerCase(),n.startsWith(c.INSTRUMENT_CATEGORIES.CURRENCY)?a.a.createElement(p,{symbol:t}):n.startsWith(c.INSTRUMENT_CATEGORIES.CRYPTO)?a.a.createElement(m,{symbol:t}):n.startsWith(c.INSTRUMENT_CATEGORIES.SHARES)?a.a.createElement(f,{symbol:t}):n.startsWith(c.INSTRUMENT_CATEGORIES.BLENDS)?a.a.createElement(y,{symbol:t}):a.a.createElement(b,{symbol:t})})},2024:function(e,t,n){"use strict";var r=n(164);t.a=Object(r.a)(function(){return n.e(59).then(n.bind(null,2111))})},2025:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n(1),c=n.n(s),u=n(12),l=n.n(u),p=n(107),f=n.n(p),b=n(25),m=n.n(b),y=n(8),d=n.n(y),v=n(10),h=n(0),O=n.n(h),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=function(e){return function(t){return function(n){function i(){var e,t,n,a;r(this,i);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return t=n=o(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(c))),n.state={status:v.PENDING},n._isMounted=!1,a=t,o(n,a)}return a(i,n),_(i,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){var t=this,n=O.a.asStringArray(e),r=O.a.reject(n,m.a.hasTranslationKey);if(O.a.isEmpty(r))return void this.setState({status:v.SUCCESS});this._isMounted=!0,d.a.loadDictionaryOnDemand(m.a.getCurrentLanguage(),r).then(function(e){var n=e.data;O.a.isEmpty(n)&&(n=O.a.object(r,Array(r.length))),m.a.mergeDictionaryOnDemand(n),t._isMounted&&t.setState({status:v.SUCCESS})}).catch(function(){t._isMounted&&t.setState({status:v.ERROR})})}},{key:"render",value:function(){return this.state.status===v.PENDING?null:c.a.createElement(t,this.props)}}]),i}(c.a.Component)}},j=E,w=function(e){var t=e.symbol,n=e.className,r=e.demand,o=void 0===r||r,a=e.translationBaseKey,s=void 0===a?"instrument_info.profile.description":a,u=l()(i({"profile-description":!0},n,!!n)),p=(o?"on_demand.":"")+s+"."+t.replace("/",""),b=function(){return c.a.createElement("div",{className:u},f()(__(p)))};if(!o)return c.a.createElement(b,null);var m=j(p)(b);return c.a.createElement(m,null)};t.a=w},2031:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{isNewsFeedEnabled:Object(m.isNewsFeedEnabled)(e),isNewsAlertEnabled:Object(m.isAcuityNewsSentimentEnabled)(e)}}function s(e){return{loadNewsAlertsBySymbol:function(t){return e(Object(l.d)(t))},loadNewsBySymbol:function(t){return e(Object(p.loadNews)(t,!1,!1))},loadSentimentBySymbol:function(t){return e(Object(l.m)(t))},checkIfNewsSentimentEnabled:function(){return e(Object(b.checkNewsSentimentEnabled)())},checkIfNewsAlertsEnabled:function(){return e(Object(b.checkAcuityNewsSentimentEnabled)())},checkIfNewsFeedEnabled:function(){return e(Object(b.checkNewsFeedEnabled)())}}}var c=n(1),u=n.n(c),l=n(793),p=n(414),f=n(4),b=n(284),m=n(85),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){var t=function(t){function n(){var e,t,a,i;r(this,n);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return t=a=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),a.componentDidMount=function(){var e=a.props.symbol;a.props.isNewsAlertEnabled&&a.props.loadNewsAlertsBySymbol(e),a.props.isNewsFeedEnabled&&a.props.loadNewsBySymbol(e),a.props.loadSentimentBySymbol(e),a.props.checkIfNewsSentimentEnabled(),a.props.checkIfNewsAlertsEnabled(),a.props.checkIfNewsFeedEnabled()},i=t,o(a,i)}return a(n,t),y(n,[{key:"componentWillReceiveProps",value:function(e){e.isNewsFeedEnabled&&e.isNewsFeedEnabled!==this.props.isNewsFeedEnabled&&this.props.loadNewsBySymbol(e.symbol),e.isNewsFeedEnabled&&e.symbol!==this.props.symbol&&this.props.loadNewsBySymbol(e.symbol),e.isNewsAlertEnabled!==this.props.isNewsAlertEnabled&&e.isNewsAlertEnabled&&this.props.loadNewsAlertsBySymbol(e.symbol),e.isNewsAlertEnabled&&e.symbol!==this.props.symbol&&(this.props.loadNewsAlertsBySymbol(e.symbol),this.props.loadSentimentBySymbol(e.symbol))}},{key:"render",value:function(){return u.a.createElement(e,this.props)}}]),n}(u.a.Component);return Object(f.connect)(i,s)(t)};t.a=d},2110:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(33),i=n(2024),s=n(1957),c=n(2025),u=function(e){var t=e.symbol;return o.a.createElement("div",{className:"pane pane__fluid"},o.a.createElement(a.g,{minWidth:1200},o.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile"},o.a.createElement("div",{className:"pane pane__row pane__fluid"},o.a.createElement("div",{className:"instrument-details__profile__description-wrapper"},o.a.createElement("div",{className:"instrument-details__profile__caption"},o.a.createElement(s.a,{as:"span",symbol:t})," ",__("instrument_info.profile")),o.a.createElement(c.a,{symbol:t,className:"instrument-details__profile__description"})),o.a.createElement("div",{className:"pane pane__fluid instrument-details__profile__chart"},o.a.createElement(i.a,{key:t,symbol:t,className:"chart-box--not-full pane pane__fluid"}))))),o.a.createElement(a.g,{maxWidth:1199},o.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile instrument-details__profile--mobile"},o.a.createElement("div",{className:"instrument-details__profile__caption"},o.a.createElement(s.a,{as:"span",symbol:t})," ",__("instrument_info.profile")),o.a.createElement("div",{className:"pane pane__column pane__fluid"},o.a.createElement(c.a,{symbol:t,className:"instrument-details__profile__description"}),o.a.createElement("div",{className:"pane pane__fluid instrument-details__profile__chart"},o.a.createElement(i.a,{key:t,symbol:t,className:"chart-box--not-full pane pane__fluid"}))))))};t.a=u},2652:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n.n(r),a=n(121),i=n(164),s=n(2031),c=Object(i.a)(function(){return n.e(93).then(n.bind(null,2850))}),u=Object(i.a)(function(){return n.e(86).then(n.bind(null,2851))}),l=Object(i.a)(function(){return n.e(79).then(n.bind(null,2852))}),p=function(e){var t=e.className,n=e.symbol;return o.a.createElement("div",{className:"pane pane__fluid pane__yfluid"},o.a.createElement(a.default,{minWidth:1200},o.a.createElement(c,{symbol:n,className:t})),o.a.createElement(a.default,{minWidth:768,maxWidth:1199},o.a.createElement(l,{symbol:n,className:t})),o.a.createElement(a.default,{maxWidth:767},o.a.createElement(u,{symbol:n,className:t})))};t.default=Object(s.a)(p)},2653:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),s=n.n(i),c=n(2014),u=n(2015),l=n(2110),p=n(1990),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"extendTabs",value:function(e,t){return e.unshift({id:p.INSTRUMENT_PROFILE,title:"instrument_info.tab.profile",view:s.a.createElement(l.a,{symbol:t})}),e.unshift({id:p.INSTRUMENT_OVERVIEW,title:"instrument_info.tab.key_statistics",view:s.a.createElement(u.a,{symbol:t})}),e}},{key:"render",value:function(){return s.a.createElement(c.a,{symbol:this.props.symbol,extendTabs:this.extendTabs})}}]),t}(s.a.Component);t.a=b}});