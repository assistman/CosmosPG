(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{2808:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),s=a(7),c=a.n(s),i=a(1992),o=a(46),d=a(1974),_=a(158),p=a(2258),m=a(2259),v=a(2260),u=a(2261),f=a(2262),b=a(2263),h=a(2264),w=a(2265),E=a(228),g=a(15),y=a.n(g),N=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var k=48;var I=function(e){function t(e,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return n._cache=new _.c({fixedWidth:!0,minHeight:k}),y()(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),N(t,[{key:"componentDidMount",value:function(){this.props.loadEvents(),window.addEventListener("resize",this._resizeAll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._resizeAll)}},{key:"_resizeAll",value:function(){this._cache.clearAll(),this._list&&this._list.recomputeRowHeights()}},{key:"_setListRef",value:function(e){this._list=e}},{key:"_toggleRow",value:function(e,t,a){e.preventDefault(),e.stopPropagation(),this._cache.clear(t,0),this._list&&this._list.recomputeRowHeights(),this.props.toggleRow(a)}},{key:"_rowRenderer",value:function(e){var t=this,a=e.index,n=e.key,r=e.parent,s=e.style,c=this.props,i=c.list,o=c.openedInsightsRows,d=c.onItemClick;return l.a.createElement(_.b,{cache:this._cache,columnIndex:0,key:n,parent:r,rowIndex:a},l.a.createElement("div",{style:s,className:"pane pane__column events-and-trade__table-column flex-align-center"},l.a.createElement("div",{className:"pane pane--no-margin events-and-trade__table-row pane__row flex-valign-center "},l.a.createElement("div",{className:"pane pane__row pane_padded-small flex-valign-center events-and-trade__table-cell events-and-trade__event-cell clickable",onClick:function(e){return t._toggleRow(e,a,i[a])}},l.a.createElement("div",{className:"pane events-and-trade__arrow"},o[i[a]]?"▼":"►"),l.a.createElement(p.a,{eventId:i[a]}),l.a.createElement(m.a,{eventId:i[a]})),l.a.createElement("div",{className:"pane pane__row pane_padded-small flex-valign-center events-and-trade__table-cell events-and-trade__time-cell"},l.a.createElement(v.a,{eventId:i[a]})),l.a.createElement("div",{className:"pane pane__row pane_padded-small flex-valign-center events-and-trade__table-cell events-and-trade__opportunities-cell"},l.a.createElement(u.a,{eventId:i[a]})),l.a.createElement("div",{className:"pane pane__row pane_padded-small flex-valign-center events-and-trade__table-cell events-and-trade__range-cell"},l.a.createElement(f.a,{eventId:i[a]})),l.a.createElement("div",{className:"pane pane__row pane_padded-small flex-valign-center events-and-trade__table-cell events-and-trade__reminder-cell"},l.a.createElement(b.a,{eventId:i[a],target:"_blank"}),l.a.createElement(h.a,{eventId:i[a],target:"_blank"})),l.a.createElement("div",{className:"pane pane__row pane_padded-small flex-valign-center events-and-trade__table-cell events-and-trade__actions-cell"},l.a.createElement("button",{className:"btn btn-default",onClick:d.bind(null,i[a])},__("actions.more_details")))),o[i[a]]&&l.a.createElement(w.a,{as:"div",className:"events-and-trade__description",eventId:i[a]})))}},{key:"render",value:function(){var e,t,a,n=this,r=this.props,s=r.className,i=r.list,o=r.symbol,d=(r.openedInsightsRows,c()((a=!!s,(t=s)in(e={"events-and-trade":!0,pane:!0,pane__column:!0,pane__fluid:!0})?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e)));return l.a.createElement("div",{className:d},l.a.createElement("div",{className:"pane pane__column"},l.a.createElement("div",{className:"instrument-details__profile__caption"},__("instrument_info.tab.events.events_for")," ",l.a.createElement(E.a,{as:"span",symbol:o}))),l.a.createElement("div",{className:"pane pane__column pane__fluid "},l.a.createElement("div",{className:"pane pane__row pane--no-margin events-and-trade__table-column events-and-trade__table-column--head"},l.a.createElement("div",{className:"pane events-and-trade__table-cell events-and-trade__event-cell"},__("events_and_trade.event")),l.a.createElement("div",{className:"pane events-and-trade__table-cell events-and-trade__time-cell"},__("events_and_trade.local_time")),l.a.createElement("div",{className:"pane events-and-trade__table-cell events-and-trade__opportunities-cell"},l.a.createElement("span",{className:"question-tooltip","aria-label":__("events_and_trade.trade_opportunities.tooltip")}),__("events_and_trade.trade_opportunities")),l.a.createElement("div",{className:"pane events-and-trade__table-cell events-and-trade__range-cell"},l.a.createElement("span",{className:"question-tooltip","aria-label":__("events_and_trade.prediction_range.tooltip")}),__("events_and_trade.prediction_range")),l.a.createElement("div",{className:"pane events-and-trade__table-cell events-and-trade__reminder-cell"},__("events_and_trade.reminder")),l.a.createElement("div",{className:"pane events-and-trade__table-cell events-and-trade__actions-cell"})),l.a.createElement("div",{className:"pane pane__column pane__fluid"},l.a.createElement(_.a,null,(function(e){var t=e.height,a=e.width;return l.a.createElement(_.d,{ref:n._setListRef,tabIndex:-1,"aria-label":"",deferredMeasurementCache:n._cache,height:t,rowCount:i.length,width:a,rowHeight:n._cache.rowHeight,rowRenderer:n._rowRenderer})})))))}}]),t}(l.a.Component);t.default=Object(r.connect)((function(e,t){var a=t.symbol;return{list:Object(d.h)(e,a),openedInsightsRows:Object(d.i)(e)}}),(function(e){return{loadEvents:function(){e(Object(i.b)())},onItemClick:function(t){e(Object(i.c)(t)),e(Object(o.closeInstrumentDetails)())},toggleRow:function(t){e(Object(i.d)(t))}}}))(I)}}]);