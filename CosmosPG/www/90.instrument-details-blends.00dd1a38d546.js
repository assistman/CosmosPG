webpackJsonp([90],{2613:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{loadAnalyticsRecommendations:function(){return e(Object(p.u)())},checkIfAnalystsEnabled:function(){return e(Object(b.checkAnalystsEnabled)())}}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=n.n(l),i=n(38),s=n(138),f=n(2),p=n(193),b=n(298),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=Object(s.a)(function(){return n.e(45).then(n.bind(null,2683))}),d=Object(s.a)(function(){return n.e(44).then(n.bind(null,2684))}),h=Object(s.a)(function(){return n.e(43).then(n.bind(null,2685))}),O=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),y(t,[{key:"componentDidMount",value:function(){this.props.checkIfAnalystsEnabled(),this.props.loadAnalyticsRecommendations()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.symbol;return u.a.createElement("div",{className:"pane pane__xfluid pane__yfluid"},u.a.createElement(i.default,{desktop:!0},u.a.createElement(m,{className:t,symbol:n})),u.a.createElement(i.default,{tablet:!0},u.a.createElement(h,{className:t,symbol:n})),u.a.createElement(i.default,{mobile:!0},u.a.createElement(d,{className:t,symbol:n})))}}]),t}(u.a.Component);t.default=Object(f.connect)(null,c)(O)}});