webpackJsonp([41],{2089:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(17),c=n.n(i),l=n(3),s=n.n(l),u=n(145),m=n(1),p=n.n(m),d=n(10),f=n.n(d),h=n(6),b=n.n(h),v=n(67),y=n(2),E=n(28),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=Object(u.a)(function(){return n.e(47).then(n.bind(null,2816))}),C=Object(u.a)(function(){return n.e(62).then(n.bind(null,2821))}),O=function(){return{isTradingViewChart:b.a.getUserCommonData().isAdvancedTradingView()&&f.a.isChartModeSwitcherEnabled()&&b.a.getUserCommonData().getChartMode()===v.CHART_MODE_ADVANCED&&f.a.isMultiChartsTradingViewEnabled()}},g=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return c()(n),n}return o(t,e),w(t,[{key:"render",value:function(){var e=this.props,n=e.isTradingViewChart,a=e.className,r=n?C:_;return p.a.createElement("div",{className:a},p.a.createElement("div",{className:"multi-charts-wrapper popup-item"},p.a.createElement("div",{className:"popup-item-wrapper"},p.a.createElement("div",{className:"hidden-xs multi-charts-top"},p.a.createElement("div",{className:"header-actions fn-close-popup btn"},p.a.createElement("i",{className:"icon-close-blue",onClick:t.onClose}))),p.a.createElement("div",{className:"multi-charts"},p.a.createElement("div",{className:"header-block overflow-unset"},p.a.createElement("div",{className:"multi-charts-header"},p.a.createElement("div",{className:"header-title"},p.a.createElement("div",{className:"title"},__("tab.multi_charts"))))),p.a.createElement(r,null)))))}}],[{key:"onClose",value:function(){store.dispatch(Object(E.updateUrlBySelectedInstrumentSymbol)()),s.a.trigger("ui:close-multi-charts")}}]),t}(m.Component);t.default=Object(y.connect)(O)(g)}});