webpackJsonp([99],{2031:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function l(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function s(e){return{isNewsFeedEnabled:Object(b.isNewsFeedEnabled)(e),isNewsAlertEnabled:Object(b.isAcuityNewsSentimentEnabled)(e)}}function a(e){return{loadNewsAlertsBySymbol:function(n){return e(Object(u.d)(n))},loadNewsBySymbol:function(n){return e(Object(p.loadNews)(n,!1,!1))},loadSentimentBySymbol:function(n){return e(Object(u.m)(n))},checkIfNewsSentimentEnabled:function(){return e(Object(d.checkNewsSentimentEnabled)())},checkIfNewsAlertsEnabled:function(){return e(Object(d.checkAcuityNewsSentimentEnabled)())},checkIfNewsFeedEnabled:function(){return e(Object(d.checkNewsFeedEnabled)())}}}var c=t(1),i=t.n(c),u=t(793),p=t(414),f=t(4),d=t(284),b=t(85),y=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),m=function(e){var n=function(n){function t(){var e,n,l,s;o(this,t);for(var a=arguments.length,c=Array(a),i=0;i<a;i++)c[i]=arguments[i];return n=l=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),l.componentDidMount=function(){var e=l.props.symbol;l.props.isNewsAlertEnabled&&l.props.loadNewsAlertsBySymbol(e),l.props.isNewsFeedEnabled&&l.props.loadNewsBySymbol(e),l.props.loadSentimentBySymbol(e),l.props.checkIfNewsSentimentEnabled(),l.props.checkIfNewsAlertsEnabled(),l.props.checkIfNewsFeedEnabled()},s=n,r(l,s)}return l(t,n),y(t,[{key:"componentWillReceiveProps",value:function(e){e.isNewsFeedEnabled&&e.isNewsFeedEnabled!==this.props.isNewsFeedEnabled&&this.props.loadNewsBySymbol(e.symbol),e.isNewsFeedEnabled&&e.symbol!==this.props.symbol&&this.props.loadNewsBySymbol(e.symbol),e.isNewsAlertEnabled!==this.props.isNewsAlertEnabled&&e.isNewsAlertEnabled&&this.props.loadNewsAlertsBySymbol(e.symbol),e.isNewsAlertEnabled&&e.symbol!==this.props.symbol&&(this.props.loadNewsAlertsBySymbol(e.symbol),this.props.loadSentimentBySymbol(e.symbol))}},{key:"render",value:function(){return i.a.createElement(e,this.props)}}]),t}(i.a.Component);return Object(f.connect)(s,a)(n)};n.a=m},2644:function(e,n,t){"use strict";function o(e){return{types:[w.a,w.c,w.b],additionalData:{symbol:e},callApi:function(){return S.loadAnalystResearchReport(e)}}}function r(e){return{types:[I.a,I.c,I.b],callApi:function(){return R.loadNewsSentiment(e)}}}function l(e){return function(n,t){var o=Object(P.getInstrumentTicker)(t(),e),r=function(){return R.loadNewsSentimentByTicker(o)};return o||(r=function(){return Promise.resolve({})}),n({types:[I.d,I.f,I.e],additionalData:{symbol:e},callApi:r})}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function c(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e){return{loadStockFundamental:function(n){return e(Object(H.C)(n))},loadStockFundamentals:function(){return e(Object(H.D)())},loadAllInsiders:function(){return e(Object(k.n)())},loadInsiderInfo:function(n){return e(Object(k.o)(n))},loadAnalyticsRecommendations:function(){return e(Object(v.u)())},loadBloggers:function(){return e(Object(A.o)())},loadAllHedgefunds:function(){return e(Object(g.i)())},loadHedgefund:function(n){return e(Object(g.j)(n))},loadAnalystResearchReport:function(n){return e(o(n))},loadNewsSentimentInfo:function(n){return e(l(n))},loadNewsSentiment:function(n){return e(r(n))},loadSentimentBySymbol:function(n){return e(Object(C.m)(n))},checkIfBloggersEnabled:function(){return e(Object(W.checkBloggersEnabled)())},checkIfAnalystsEnabled:function(){return e(Object(W.checkAnalystsEnabled)())},checkIfHedgeFundsEnabled:function(){return e(Object(W.checkHedgeFundsEnabled)())},checkIfInsidersEnabled:function(){return e(Object(W.checkInsidersEnabled)())},checkIfNewsSentimentEnabled:function(){return e(Object(W.checkNewsSentimentEnabled)())},checkIfCustomerLevelsEnabled:function(){return e(Object(W.checkCustomerLevelsEnabled)())}}}function u(e,n){var t=n.symbol;return{isFundamentalsAvailable:Object(H.B)(e,t)}}function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function d(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var b=t(1),y=t.n(b),m=t(121),h=t(164),w=t(871),E=t(8),O=t.n(E),N=function(e){return O.a.getAnalystResearchReport(e)},j={loadAnalystResearchReport:N},S=j,k=t(418),v=t(282),A=t(419),g=t(417),I=t(872),_=function(){return O.a.loadNewsSentiment()},B=function(e){return O.a.loadNewsSentimentByTicker(e)},F={loadNewsSentiment:_,loadNewsSentimentByTicker:B},R=F,P=t(84),C=t(793),T=t(4),H=t(810),W=t(284),x=t(2031),D=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),L=function(e){var n=function(n){function t(){var e,n,o,r;s(this,t);for(var l=arguments.length,c=Array(l),i=0;i<l;i++)c[i]=arguments[i];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.componentDidMount=function(){var e=o.props.symbol;o.props.loadStockFundamentals(),o.props.loadStockFundamental(e),o.props.loadAllInsiders().then(function(){o.props.loadInsiderInfo(e)}),o.props.loadAnalyticsRecommendations(),o.props.loadBloggers(),o.props.loadAllHedgefunds().then(function(){o.props.loadHedgefund(e)}),o.props.loadAnalystResearchReport(e),o.props.loadNewsSentimentInfo(e),o.props.loadNewsSentiment(e),o.props.loadSentimentBySymbol(e),o.props.checkIfAnalystsEnabled(),o.props.checkIfBloggersEnabled(),o.props.checkIfHedgeFundsEnabled(),o.props.checkIfInsidersEnabled(),o.props.checkIfNewsSentimentEnabled(),o.props.checkIfCustomerLevelsEnabled()},r=n,a(o,r)}return c(t,n),D(t,[{key:"componentWillReceiveProps",value:function(e){e.symbol!==this.props.symbol&&(e.isFundamentalsAvailable&&this.props.loadStockFundamental(e.symbol),this.props.loadInsiderInfo(e.symbol),this.props.loadHedgefund(e.symbol),this.props.loadAnalystResearchReport(e.symbol),this.props.loadNewsSentimentInfo(e.symbol),this.props.loadNewsSentiment(e.symbol),this.props.loadSentimentBySymbol(e.symbol))}},{key:"render",value:function(){return y.a.createElement(e,this.props)}}]),t}(y.a.Component);return Object(T.connect)(u,i)(Object(x.a)(n))},M=L,J=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),q=Object(h.a)(function(){return t.e(55).then(t.bind(null,2909))}),z=Object(h.a)(function(){return t.e(54).then(t.bind(null,2910))}),G=Object(h.a)(function(){return t.e(53).then(t.bind(null,2911))}),K=function(e){function n(){return p(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,e),J(n,[{key:"render",value:function(){var e=this.props,n=e.className,t=e.symbol;return y.a.createElement("div",{className:"pane pane__fluid pane__yfluid"},y.a.createElement(m.default,{minWidth:1200},y.a.createElement(q,{className:n,symbol:t})),y.a.createElement(m.default,{minWidth:768,maxWidth:1199},y.a.createElement(G,{className:n,symbol:t})),y.a.createElement(m.default,{maxWidth:767},y.a.createElement(z,{className:n,symbol:t})))}}]),n}(y.a.Component);n.default=M(K)}});