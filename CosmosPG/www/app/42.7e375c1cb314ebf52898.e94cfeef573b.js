(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1953:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(4),c=t(2352),i=t(2214),o=t(2353),s=t(2354);var u=Object(l.connect)((function(e,a){var t=a.alertId,n=a.as,r=void 0===n?"div":n,l=e.acuityTrading.alertsMap[t];return{value:l&&l.timeString,as:r}}))((function(e){var a=e.value,t=(e.dispatch,e.alertId,function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(e,["value","dispatch","alertId"]));return r.a.createElement(t.as,t,a)})),m=t(2355),p=t(2215),_=t(2216),d=t(2111),f=t(2112),v=t(158),y=t(514),b=t(261),E=t.n(b),h=t(122),w=t(87),g=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}();var N=83,O=48;var x=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),g(a,[{key:"_toggleRow",value:function(e,a,t){e.preventDefault(),e.stopPropagation(),this.refs.autosizer.refs.list.recomputeRowHeights(a),this.refs.autosizer.refs.list.forceUpdateGrid(),this.props.toggleRow(t)}},{key:"render",value:function(){var e=this,a=this.props,t=a.list,n=a.onItemClick,l=a.openRowAlerts;return r.a.createElement("div",{className:"pane pane__column acuity__table"},r.a.createElement("div",{className:"pane pane__row pane_padded-small acuity__table-columns"},r.a.createElement("div",{className:"pane acuity__table-column-instrument"},__("acuity-trading.list.column.instrument.title")),r.a.createElement("div",{className:"pane acuity__table-column-time"},__("acuity-trading.list.column.time_of_alert.title")),r.a.createElement("div",{className:"pane acuity__table-column-sentiment"},__("acuity-trading.list.column.sentiment_confidence.title")),r.a.createElement("div",{className:"pane acuity__table-column-duration"},__("acuity-trading.list.column.duration.title")),r.a.createElement("div",{className:"pane acuity__table-column-trade"},__("acuity-trading.list.column.trade.title"))),r.a.createElement("div",{className:"pane pane__xfluid pane__yfluid flex-column"},r.a.createElement(E.a,null,r.a.createElement(v.a,{ref:"autosizer"},(function(a){var y=a.height,b=a.width;return r.a.createElement(v.d,{ref:"list",tabIndex:-1,"aria-label":"",height:y,rowCount:t.length,width:b,rowHeight:function(e){return function(e,a,t){return t[a[e.index]]?N:O}(e,t,l)},rowRenderer:function(a){var l=a.index,v=(a.isScrolling,a.isVisible,a.key),y=(a.parent,a.style);return r.a.createElement(m.a,{as:"div",key:v,onClick:function(){return n(t[l])},style:y,alertId:t[l],className:"flex flex-column flex-align-center acuity__table-row",openClassName:"acuity__table-row_open",selectedClassName:"acuity__table-row_selected"},r.a.createElement("div",{className:"pane pane__row pane_padded-small flex-valign-center acuity__table-row-body"},r.a.createElement("div",{className:"pane pane__row pane_padded-small flex-valign-center acuity__table-cell-instrument"},r.a.createElement("div",{className:"pane",onClick:function(a){return e._toggleRow(a,l,t[l])}},r.a.createElement("i",{className:"acuity__arrow"})),r.a.createElement("div",{className:"pane icon acuity__instrument-icon"},r.a.createElement(d.a,{as:"div",alertId:t[l],className:"acuity__instrument-icon-body"})),r.a.createElement("div",{className:"acuity__instrument-title"},r.a.createElement(f.a,{as:"div",alertId:t[l],className:"pane acuity__instrument-name"}),r.a.createElement(c.a,{as:"div",alertId:t[l],className:"pane acuity__instrument-ticker"}))),r.a.createElement(u,{as:"div",className:"pane acuity__table-cell-time",alertId:t[l]}),r.a.createElement("div",{className:"pane pane__row pane_padded-small flex-valign-center acuity__table-cell-sentiment"},r.a.createElement("div",{className:"pane"},r.a.createElement(s.a,{as:"i",className:"icon",alertId:t[l],upClassName:"icon-direction-up",downClassName:"icon-direction-down"})),r.a.createElement(s.a,{as:"div",className:"pane change",alertId:t[l]},r.a.createElement(o.a,{as:"span",alertId:t[l]}))),r.a.createElement("div",{className:"pane pane__row pane_padded-small flex-valign-center acuity__table-cell-duration"},r.a.createElement("div",{className:"pane"},r.a.createElement(w.default,{name:"time",size:"17"})),r.a.createElement("div",{className:"pane"},__("acuity-trading.duration"))),r.a.createElement("div",{className:"pane pane__row acuity__table-cell-trade"},r.a.createElement("div",{className:"pane"},r.a.createElement(_.a,{alertId:t[l]})),r.a.createElement("div",{className:"pane"},r.a.createElement(p.a,{alertId:t[l]})))),r.a.createElement(i.a,{as:"div",className:"acuity__table-row-description",alertId:t[l]}))}})})))))}}]),a}(r.a.Component),j=Object(l.connect)((function(e){return{list:e.acuityTrading.filteredAlerts,openRowAlerts:e.acuityTrading.openRowAlerts}}),(function(e){return{onItemClick:function(a){Object(h.sendEventosNewsAlertsAction)(a),e(Object(y.f)(a))},toggleRow:function(a){e(Object(y.p)(a))}}}))(x),k=t(366),I=t(2356),C=t(2357),P=t(2358),T=t(2359),R=t(26),A=t.n(R);var S=Object(l.connect)((function(e,a){var t=a.as,n=void 0===t?"div":t,r=e.acuityTrading.selectedAlertId,l=e.acuityTrading.alertsMap[r],c=l&&l.symbol,i=A.a.getInstrumentBySymbol(c);return{value:i&&i.getDescription(),as:n}}))((function(e){var a=e.value,t=(e.dispatch,e.alertId,function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(e,["value","dispatch","alertId"]));return r.a.createElement(t.as,t,a)})),z=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};var D=Object(l.connect)((function(e){return{alertId:e.acuityTrading.selectedAlertId}}))((function(e){var a=e.alertId,t=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(e,["alertId"]);return r.a.createElement(d.a,z({alertId:a},t))})),M=t(2113),L=t(2114),H=t(2115),J=t(2116),B=t(2360),F=t(2361),G=t(633),U=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},V=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}();var q=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),V(a,[{key:"render",value:function(){var e=this.props,a=e.symbol,t=(e.dispatch,e.onClick),n=(e.alertId,e.propagate,function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(e,["symbol","dispatch","onClick","alertId","propagate"]));return r.a.createElement("a",U({href:"#"},n,{onClick:function(e){return t(e,a)}}),__("acuity-trading.alerts.show_all",""))}}]),a}(n.Component),K=Object(l.connect)((function(e,a){var t=a.alertId;return{symbol:Object(G.b)(e,t)}}),(function(e,a){var t=a.propagate,n=void 0!==t&&t;return{onClick:function(a,t){a.preventDefault(),n||a.stopPropagation(),e(Object(y.i)(t))}}}))(q),Q=t(2217),W=t(44),X=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}();var Y=Object(W.default)((function(){return Promise.all([t.e(5),t.e(9),t.e(16),t.e(26),t.e(124)]).then(t.bind(null,2290))}));var Z=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),X(a,[{key:"componentDidMount",value:function(){Object(h.sendEventosNewsAction)()}},{key:"render",value:function(){var e=this.props.ticker;return r.a.createElement(Y,{ticker:e,empty:__("news.instruments.page.empty"),isShowFilter:!1})}}]),a}(n.Component),$=Object(l.connect)((function(e){var a=e.acuityTrading,t=a&&a.selectedAlertId,n=a&&a.alertsMap,r=n&&t&&n[t];return{ticker:r&&r._symbol}}))(Z),ee=t(2362),ae=t(2363),te=t(2218),ne=t(2117),re=t(2364),le=t(2057),ce=t(650),ie=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}();var oe=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),ie(a,[{key:"render",value:function(){var e=this.props.alerts;return 0===e.length?null:r.a.createElement("div",null,__("total.results",e.length))}}]),a}(n.Component),se=Object(l.connect)((function(e){return{alerts:Object(G.g)(e)}}))(oe),ue=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}();var me=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),ue(a,[{key:"render",value:function(){var e=this.props,a=e.onClose,t=e.onLoadAlertsSuccess;return r.a.createElement("div",{className:"popup popup-absolute page pane pane__fluid acuity__page popup-item"},r.a.createElement("div",{className:"popup-item-wrapper"},r.a.createElement("div",{className:"pane header header_gray"},r.a.createElement("div",{className:"header__body"},r.a.createElement("div",{className:"header__title flex"},r.a.createElement("div",{className:"title"},__("acuity-trading.page.title")),r.a.createElement("div",{className:"take-tour"},__("tipranks.text.take_tour"))),r.a.createElement("div",{className:"header__description"},__("acuity-trading.page.description"))),r.a.createElement("div",{className:"pane flex flex-valign-end header__controls acuity-header__controls"},r.a.createElement("div",{className:"pane pane__row"},r.a.createElement("div",{className:"pane flex-column flex-align-end"},r.a.createElement("div",{className:"acuity__selected-instruments-num"},r.a.createElement(se,null))),r.a.createElement("div",{className:"pane flex-column"},r.a.createElement("div",{className:"acuity__header-control-label"},__("form.controls.category.label"),":"),r.a.createElement("div",{className:"acuity__dropdown"},r.a.createElement(I.a,null))),r.a.createElement("div",{className:"pane flex-column"},r.a.createElement("div",{className:"acuity__header-control-label"},__("form.controls.instrument.label"),":"),r.a.createElement("div",{className:"acuity__dropdown"},r.a.createElement(C.a,null))),r.a.createElement("div",{className:"pane flex-column"},r.a.createElement("div",{className:"acuity__header-control-label"},__("form.controls.level_of_confidence.label")),r.a.createElement("div",{className:"pane pane__fluid flex-valign-center"},r.a.createElement(F.a,{className:"acuity__range-control flex flex-valign-center"}))),r.a.createElement("div",{className:"pane flex-column"},r.a.createElement("div",{className:"pane pane__row acuity__header-control-label"},r.a.createElement("div",{className:"pane pane__row pane_padded-small flex-valign-center"},r.a.createElement("div",{className:"pane"},r.a.createElement("i",{className:"icon icon-help","data-tooltip-align":"left","aria-label":__("acuity-trading.interval.tooltip")})),r.a.createElement("div",{className:"pane"},__("form.controls.interval.label"),":"))),r.a.createElement("div",{className:"acuity__dropdown"},r.a.createElement(P.a,null))))),r.a.createElement("div",{className:"header__actions"},r.a.createElement("div",{onClick:a},r.a.createElement("i",{className:"icon-close-blue"})))),r.a.createElement("div",{className:"page__body pane__pad acuity__body"},r.a.createElement(ae.a,{errorComponent:r.a.createElement(le.a,null),loadComponent:r.a.createElement(ce.a,null),successComponent:r.a.createElement(re.a,null,(function(e){var a=e.classId,n=e.interval;return r.a.createElement(te.a,{classId:a,interval:n,onSuccess:t,errorComponent:r.a.createElement(le.a,null),loadComponent:r.a.createElement(ce.a,null),successComponent:r.a.createElement("div",{className:"pane pane__fluid pane__column"},r.a.createElement("div",{className:"pane pane__fluid pane__row"},r.a.createElement("div",{className:"pane acuity__list"},r.a.createElement(j,null)),r.a.createElement(Q.a,null,(function(e){var a=e.alertId,t=e.symbol;return r.a.createElement("div",{className:"pane pane__fluid pane__column acuity__info"},r.a.createElement("div",{className:"pane pane__fluid pane__column acuity__info-content"},r.a.createElement("div",{className:"pane pane__row acuity__info-instrument-block"},r.a.createElement("div",{className:"pane pane__yfluid acuity__info-instrument-icon"},r.a.createElement(D,{as:"div"})),r.a.createElement("div",{className:"pane pane__row flex-valign-center"},r.a.createElement("div",{className:"pane flex-column flex-align-between"},r.a.createElement("div",{className:"pane acuity__info-instrument-name"},r.a.createElement(f.a,{alertId:a,as:"div"})),r.a.createElement("div",{className:"acuity__info-instrument-ticker"},r.a.createElement(T.a,{as:"div"}))),r.a.createElement("div",{className:"pane"},r.a.createElement(ee.a,null))),r.a.createElement("div",{className:"pane pane__fluid flex-valign-center flex-align-end"},r.a.createElement(K,{alertId:a,className:"btn btn-primary acuity__info-show-all"}))),r.a.createElement("div",{className:"acuity__info-instrument-details"},r.a.createElement(S,{as:"div"})),r.a.createElement("div",{className:"pane pane__fluid"},r.a.createElement(k.Tabs,{className:"react-tabs react-tabs_small acuity__tabs pane pane__column pane__fluid"},r.a.createElement(k.TabList,null,r.a.createElement("div",{className:"react-tabs__tab-list__container"},r.a.createElement(k.Tab,null,__("acuity-trading.news_sentiment")),r.a.createElement(k.Tab,null,__("acuity-trading.tab.news.label")))),r.a.createElement(k.TabPanel,{className:"flex flex-stretch react-tabs__tab-panel"},r.a.createElement(ne.a,{alertId:a,interval:n,errorComponent:r.a.createElement(le.a,null),loadComponent:r.a.createElement(ce.a,null),successComponent:r.a.createElement("div",{className:"pane pane__fluid"},r.a.createElement(J.a,{as:"div",className:"pane pane__column pane__fluid"},r.a.createElement("div",{className:"pane pane__row"},r.a.createElement("div",{className:"pane pane__fluid acuity__block acuity__info-news-sentiment-volumes"},r.a.createElement("div",{className:"pane pane__column pane__fluid"},r.a.createElement("div",{className:"pane pane__row flex-align-between"},r.a.createElement("div",{className:"acuity__info-news-bar-label"},__("acuity-trading.news_volume")),r.a.createElement("div",{className:"flex flex-valign-center"},r.a.createElement("i",{className:"icon icon-help","data-tooltip-align":"left","aria-label":__("acuity-trading.news-volume.tooltip")}))),r.a.createElement(L.a,{as:"div",className:"pane pane__fluid"}),r.a.createElement("div",{className:"pane pane__row flex-align-between"},r.a.createElement("div",{className:"acuity__info-news-bar-label"},__("acuity-trading.fear_index")),r.a.createElement("div",{className:"flex flex-valign-center"},r.a.createElement("i",{className:"icon icon-help","data-tooltip-align":"left","aria-label":__("acuity-trading.fear-index.tooltip")}))),r.a.createElement(M.a,{as:"div",className:"pane pane__fluid"}))),r.a.createElement("div",{className:"pane pane__column pane__fluid acuity__block acuity__info-news-sentiment-circle"},r.a.createElement("div",{className:"pane pane__row pane__fluid flex-align-between"},r.a.createElement("div",{className:"pane flex-valign-center acuity__info-news-bar-label"},__("acuity-trading.news_sentiment")),r.a.createElement("i",{className:"icon icon-help","data-tooltip-align":"top","aria-label":__("acuity-trading.sentiment.tooltip")})),r.a.createElement(H.a,{as:"div",className:"pane pane__fluid flex-align-center flex-valign-center"}))),r.a.createElement("div",{className:"pane pane__fluid acuity__block acuity__info-chart"},r.a.createElement(B.a,null))),r.a.createElement(J.a,{as:"div",invert:!0},__("acuity-trading.news_sentiment.empty",t)))})),r.a.createElement(k.TabPanel,{className:"flex flex-stretch react-tabs__tab-panel acuity__tab--news-feed"},r.a.createElement($,null))))))}))),r.a.createElement("div",{className:"pane acuity-disclaimer"},__("tipranks.text.disclaimer")))})}))}))))}}]),a}(r.a.PureComponent);a.default=Object(l.connect)(null,(function(e){return{onLoadAlertsSuccess:function(){e(Object(y.h)())}}}))(me)}}]);