(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{2290:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),a=n.n(i),c=n(4),s=n(516),p=n(2381),u=n(2096),l=n(149),f=n(3),y=n(56),b=n(262),w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),h(t,[{key:"componentDidMount",value:function(){this.props.loadNews(this.props.ticker)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.ticker,n=e.ticker;t!==n&&(this.props.resetNewsByTicker(t),this.props.loadNews(n))}},{key:"render",value:function(){var e=this.props,t=e.status,n=e.isEmpty,r=e.empty,i=e.ticker,c=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["status","isEmpty","empty","ticker"]),s=o.a.isEmpty(i),y=t===f.SUCCESS;return s||!y||n?a.a.createElement("div",{className:"pane pane__fluid flex-valign-center flex-align-center"},s&&a.a.createElement(u.a,{text:r}),!s&&!y&&a.a.createElement(l.a,null),!s&&y&&n&&a.a.createElement(u.a,{text:r})):a.a.createElement(p.default,w({},c,{ticker:i}))}}]),t}(i.Component);v.defaultProps={ticker:y.a,isShowFilter:!1},t.default=Object(c.connect)((function(e,t){var n=t.ticker;return{status:Object(b.k)(e,n),isEmpty:Object(b.c)(e,n)}}),(function(e){return{resetNewsByTicker:function(t){e(Object(s.resetNewsByTicker)(t))},loadNews:function(t){e(Object(s.loadNews)(t,!0,t===y.a))}}}))(v)}}]);