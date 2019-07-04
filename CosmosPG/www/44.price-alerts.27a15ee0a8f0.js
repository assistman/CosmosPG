webpackJsonp([44],{1954:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=n.n(i),s=n(805),r=n.n(s),l=n(2876),a=n.n(l),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u=function(t){return o.a.createElement(r.a,c({name:a.a},t))};e.default=u},2179:function(t,e,n){var i;void 0!==(i=function(t,e,i){var o=n(1),s=n(227),r=n(228),l=(n(7),n(2)),a=n(9),c=n(11),u=c({displayName:"PriceAlertInfoButton",getDefaultProps:function(){return{model:"",onClick:function(){}}},getInstrumentId:function(){return parseInt(this.props.model.get("instrumentId")||this.props.model.get("id"))},getSavedPriceAlerts:function(){return this.props.model.get("priceAlerts").filter(function(t){return t.isAvailableOnServer()})},getInitialState:function(){return{isSet:!!this.getSavedPriceAlerts().length}},update:function(){var t=this.getSavedPriceAlerts();this.setState({isSet:!!t.length})},componentDidMount:function(){this.props.model.get("priceAlerts").on("add change:id delete reset",this.update,this)},componentWillUnmount:function(){this.props.model.get("priceAlerts").off("add change:id delete reset",this.update,this)},onClick:function(t){if(t.stopPropagation(),this.state.isSet)l.trigger("ui:price-alerts",this.props.model.get("instrumentSymbol"));else{new r({parent:document.body,model:new s({instrumentId:this.getInstrumentId()})});this.props.onClick()}},render:function(){if(!a.isLive()||!a.isPriceAlertsEnabled())return null;var t=[this.state.isSet?"icon-bell-filled":"icon-bell"];return o.createElement("div",{onClick:this.onClick,className:"btn btn-icon"},o.createElement("div",{className:t.join(" ")}))}});i.exports=u}.call(e,n,e,t))&&(t.exports=i)},2876:function(t,e,n){(function(i){var o;void 0!==(o=function(t,e,i){var o=n(13),s=n(41),r=n(815),l=n(297),a=n(2877),c=n(0),u=n(2),d=n(2879).default,p=n(7),m=n(231),h=n(51),f=o.extend({collection:new s,tagName:"div",className:"price-alerts-grid",gridColumns:{actions:{type:a}},events:function(){return this.addEvents(o)({"click .goto-trading":"gotoTrading"})},createCollection:function(){var t={};m.each(function(e){t[e.getInstrument().getSymbol()]=e.getInstrument()},this),t=c.values(t),h.add(t),this.collection.reset(t,{silent:!1,merge:!1,sort:!0})},updateChartVisibility:function(){if(!p.getUserCommonData().isAdvancedTradingView()){var t=this.collection.isEmpty()?"chart:display:hide":"chart:display:show";u.trigger(t)}},initialize:function(t){p.getAlertsStorage().loadAllAlertsData(),o.prototype.initialize.apply(this,arguments),m.on("add reset",this.priceAlertsUpdated,this),this.collection.on("change:priceAlertsAvailability",this.priceAlertsUpdated,this),this.createCollection(),this.updateChartVisibility(),this.render()},getColumnConfig:function(t){return this.gridColumns[t]||l.getColumnConfig(t)},priceAlertsUpdated:function(){this.createCollection(),this.selectInstrument(),this.updateChartVisibility()},getSelectedInstrument:function(){var t=p.getApplicationSettings(),e=this.collection.findWhere({symbol:t.get("tabs:alerts:selectedInstrumentSymbol")});return e||(e=this.collection.first()),e&&t.set("tabs:alerts:selectedInstrumentSymbol",e.get("symbol")),e},selectInstrument:function(){var t=this.getSelectedInstrument();this.selectedRowId=null,t&&!p.getUserCommonData().isAdvancedTradingView()&&(u.trigger("ui:instruments:select-instrument",t.get("symbol"),t),this.selectedRowId=t.cid,setTimeout(function(){u.trigger("instrument:selected",t)},1))},render:function(){o.prototype.render.call(this),this.selectInstrument(),this.gridView=r({className:"tab-price-alerts",collection:this.collection,initialSort:__("Instrument"),empty:d,onRowClick:function(t,e){if(p.getUserCommonData().isAdvancedTradingView()){var n="price-alerts/"+e.get("symbol");p.getApplicationSettings().set("tabs:alerts:selectedInstrumentSymbol",e.get("symbol")),u.trigger("ui:instruments:select-instrument",e.get("symbol"),e),u.navigate(n,{trigger:!1,replace:!0})}},customRowsComponent:n(2880),customRowComponent:n(2882),columns:[this.getColumnConfig("instrumentName"),this.getColumnConfig("rateWithSellButton"),this.getColumnConfig("rateWithBuyButton"),this.getColumnConfig("change"),this.getColumnConfig("sentiment"),this.getColumnConfig("priceAlertNewButton")],columnsMD:[this.getColumnConfig("instrumentNameWithChange"),this.getColumnConfig("blockRateWithSellButton"),this.getColumnConfig("blockRateWithBuyButton"),this.getColumnConfig("sentiment"),this.getColumnConfig("priceAlertNewButton")],columnsSM:[this.getColumnConfig("instrumentNameWithChange"),this.getColumnConfig("blockRateWithSellButton"),this.getColumnConfig("blockRateWithBuyButton"),this.getColumnConfig("priceAlertNewButton")],columnsXS:[this.getColumnConfig("instrumentNameWithChange"),this.getColumnConfig("blockRateWithSellButton"),this.getColumnConfig("blockRateWithBuyButton"),this.getColumnConfig("priceAlertNewButton")],selectedRowId:this.selectedRowId},this.el),u.trigger("chart:display:hide")},destroy:function(){o.prototype.destroy.call(this),m.off("add reset",this.priceAlertsUpdated,this),this.collection.off("change:priceAlertsAvailability",this.priceAlertsUpdated,this),this.gridView.destroy()},gotoTrading:function(){u.trigger("chart:display:show"),u.navigate("#trading")}});i.exports=f}.call(e,n,e,t))&&(t.exports=o)}).call(e,n(0))},2877:function(t,e,n){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var r,l=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();void 0!==(r=function(t,e,r){var a=n(1),c=n(2878),u=n(818),d=n(2179),p=n(15),m=n(7),h=n(27),f=n(16),g=function(t){function e(t){i(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));h(n);var s=n.props.model.get("symbol"),r=p.getInstrumentBySymbol(s);return n.state={symbol:s,instrument:r,isTradingOutOfTradingHoursIconEnabled:n.getTradingOutOfTradingHoursIconEnabled(r.status)},n}return s(e,t),l(e,[{key:"componentDidMount",value:function(){this.subscribe(this.state.instrument)}},{key:"componentWillUnmount",value:function(){this.unsubscribe(this.state.instrument)}},{key:"componentWillReceiveProps",value:function(t){t.model.get("symbol")!==this.state.symbol&&this.updateState(t)}},{key:"updateState",value:function(t){this.unsubscribe(this.state.instrument);var e=t.get("symbol"),n=p.getInstrumentBySymbol(e);this.setState({symbol:e,instrument:n,isTradingOutOfTradingHoursIconEnabled:this.getTradingOutOfTradingHoursIconEnabled(n.status)}),this.subscribe(this.state.instrument)}},{key:"unsubscribe",value:function(t){t.off("change:allowOrdersOutsideOfTradingHours",this.update,this),t.off("change:outOfMarketHours",this.update,this)}},{key:"subscribe",value:function(t){t.on("change:allowOrdersOutsideOfTradingHours",this.update,this),t.on("change:outOfMarketHours",this.update,this)}},{key:"getTradingOutOfTradingHoursIconEnabled",value:function(t){return m.getUserCommonData().isAdvancedTradingView()&&!f.mobile()&&t.canTradeOutsideOfTradingHours()}},{key:"update",value:function(){this.setState({isTradingOutOfTradingHoursIconEnabled:this.getTradingOutOfTradingHoursIconEnabled(this.state.instrument.status)})}},{key:"render",value:function(){return a.createElement("td",{className:this.props.className+" actions"},a.createElement("div",{className:"actions"},this.state.isTradingOutOfTradingHoursIconEnabled&&a.createElement("div",{className:"btn btn-icon","aria-label":__("icon.outside_of_trading_hours.tooltip")},a.createElement("div",{className:"icon-oth icon-out-of-trading-hours"})),a.createElement(u,{symbol:this.state.symbol}),!this.props.isHidePriceAlertsButton&&a.createElement(d,{model:this.props.model}),!this.props.isHideInstrumentInfoButton&&a.createElement(c,{model:this.props.model})))}}]),e}(a.Component);g.defaultProps={isHidePriceAlertsButton:!1,isHideInstrumentInfoButton:!1},r.exports=g}.call(e,n,e,t))&&(t.exports=r)},2878:function(t,e,n){function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l,a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();void 0!==(l=function(t,e,l){var c=n(1),u=n(2),d=n(12),p=n(27),m=function(t){function e(t){o(this,e);var n=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return p(n),n}return r(e,t),a(e,[{key:"onClick",value:function(){var t=this.props.model.get("instrumentSymbol");u.trigger("ui:instrument",t,!1,!0)}},{key:"render",value:function(){var t=this.props.className,e=d(i({"icon-information":!0},t,!!t));return c.createElement("div",{onClick:this.onClick,className:"btn btn-icon"},c.createElement("div",{className:e}))}}]),e}(c.Component);m.defaultProps={model:""},l.exports=m}.call(e,n,e,t))&&(t.exports=l)},2879:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=n.n(i),s=n(7),r=n.n(s);e.default=function(){var t=!r.a.getUserCommonData().isAdvancedTradingView(),e=t?__("tab.price-alerts.empty.text"):__("tab.price-alerts.empty.text.advanced");return o.a.createElement("div",null,o.a.createElement("div",{className:"icon icon-price-alerts-empty"}),o.a.createElement("div",{className:"caption"},__("tab.price-alerts.empty.caption")),o.a.createElement("div",{className:"text"},e),t&&o.a.createElement("a",{className:"btn btn-primary goto-trading",href:"#trading"},__("tab.orders.empty.button")))}},2880:function(t,e,n){(function(i){var o;void 0!==(o=function(t,e,i){var o=n(1),s=n(429),r=n(2881),l=n(15),a=n(11),c=n(0),u=a({displayName:"GridRows",getDefaultProps:function(){return{columns:[],collection:[],screenSize:null,customRowComponent:null,customRowComponentXS:null,customRowComponentSM:null,customRowComponentMD:null,customRowComponentLG:null,onRowClick:function(){},selectedRowId:null}},getInitialState:function(){return{columns:this.props.columns,collection:this.props.collection,selectedRowId:this.props.selectedRowId,viewport:{top:0,height:0}}},getComponent:function(){var t=this.props.screenSize,e=this.props.customRowComponent||s;if(c.isEmpty(t))return e;var n="customRowComponent"+t,i=this.props[n];return c.isEmpty(i)?e:i},setSelectedRow:function(t){this.setState({selectedRowId:t})},getSelectedRowElement:function(){var t=this.refs[this.state.selectedRowId+"-selected"];return t&&t.getHTMLElement()},onRowClick:function(t,e){this.setState({selectedRowId:e.cid}),c.isFunction(this.props.onRowClick)&&this.props.onRowClick(t,e)},componentWillMount:function(){this.updateViewport=c.throttle(this.updateViewport,500)},componentDidMount:function(){this.updateViewport()},updateViewport:function(){this.isMounted()&&this.container.clientHeight&&this.setState({viewport:{top:this.container.scrollTop,height:this.container.clientHeight}})},render:function(){var t=this,e=this.state.columns,n=this.getComponent(),i=this.state.selectedRowId,s=this.state.collection.map(function(t,s){var a=t.get("isSelected")||i===t.cid,c=l.getInstrumentBySymbol(t.get("symbol")),u=c&&c.get("id");return[o.createElement(n,{key:t.cid+a,columns:e,model:t,ref:t.cid+"-selected",isSelected:a,screenSize:this.props.screenSize,onRowClick:this.onRowClick}),o.createElement(r,{instrumentId:u,colSpan:this.props.columns.length})]},this);return o.createElement("tbody",{className:"rows",onScroll:this.updateViewport,ref:function(e){t.container=e}},s)}});i.exports=u}.call(e,n,e,t))&&(t.exports=o)}).call(e,n(0))},2881:function(t,e,n){(function(i){var o;void 0!==(o=function(t,e,o){var s=n(1),r=n(887),l=n(15),a=n(11);o.exports=a({displayName:"exports",getDefaultProps:function(){return{instrumentId:null}},getInitialState:function(){return{hasAlerts:!1,invalidate:!1}},componentDidMount:function(){this.listener("on")},componentWillUnmount:function(){this.listener("off")},listener:function(t){var e=l.getInstrumentById(this.props.instrumentId);e&&(e.getPriceAlerts()[t]("add delete reset",this.alertsCollectionUpdated,this),e.getPriceAlerts()[t]("change",this.alertChanged,this))},forceUpdateFunction:function(){this.forceUpdate()},alertChanged:function(){this.setState({invalidate:!this.state.invalidate})},alertsCollectionUpdated:function(){this.setState({hasAlerts:l.getInstrumentById(this.props.instrumentId).getSavedPriceAlerts().length>0})},getAmountLabel:function(t){return __(t.getType().gridLabel)},getAlertComponent:function(t,e){var n=t.getId(),o=t.getType().get("localizationKey"),l="tab.price-alerts.table-labels."+o,a=t.get("sendTo"),c=[];i.each(a,function(t,e){t&&c.push(__("tab.price-alerts.notification-types."+e))});var u=this.getAmountLabel(t),d=t.getParameterValue("paramValue1");return d=t.getType().gridValueFormatter(d),s.createElement("div",{className:"subrow-expanded grid-12 grid-noGutter",key:n+"-alert"},s.createElement("div",{className:"col-8 grid-middle"},s.createElement("div",{className:"col-4"},s.createElement("i",{className:"icon-bell"}),s.createElement("b",null,__(l))),s.createElement("div",{className:"col-8 info"},d&&s.createElement("span",{className:["pa-amount",o].join(" ")},u,": ",s.createElement("b",null,d),", "),s.createElement("span",{className:"pa-notifications"},__("tab.price-alerts.grid.columns.notification-type"),": ",s.createElement("b",null,c.join(", "))))),s.createElement("div",{className:"col-4 grid-middle grid-right"},s.createElement(r,{model:t,tagName:"div"})))},render:function(){var t=l.getInstrumentById(this.props.instrumentId),e=t.getSavedPriceAlerts(),n=["row-expand",0===e.length?"hidden":""].join(" ");return s.createElement("tr",{className:n},s.createElement("td",{colSpan:this.props.colSpan},e.map(function(t,e){return this.getAlertComponent(t,e)},this)))}})}.call(e,n,e,t))&&(t.exports=o)}).call(e,n(0))},2882:function(t,e,n){(function(i){var o;void 0!==(o=function(t,e,o){var s=n(1),r=n(296),l=n(15),a=n(11),c=a({displayName:"GridRow",getDefaultProps:function(){return{model:null,columns:[],screenSize:null,onRowClick:function(){},selectedRowClass:"selected",isSelected:!1,showOpenPositions:!0,showOrders:!0}},getInitialState:function(){var t=l.getInstrumentBySymbol(this.props.model.get("symbol"));return{hasExpand:t&&t.getSavedPriceAlerts().length,isLoaded:!1,viewportTop:0,viewportHeight:0}},getRenderCells:function(){var t=this.props.model;return this.props.columns.map(function(e,n){var o=e.type||r,l=i.extend({},e.cellProps,{key:n,column:e,model:t,isLoaded:this.state.isLoaded});return s.createElement(o,l)}.bind(this))},getHTMLElement:function(){return this.refs.container},onRowClick:function(t){this.props.onRowClick(t,this.props.model)},componentWillMount:function(){this.updateVisibilityStatus=i.throttle(this.updateVisibilityStatus,500)},componentDidMount:function(){this.listener("on"),this.updateVisibilityStatus()},componentWillUnmount:function(){this.listener("off")},componentDidUpdate:function(){this.updateVisibilityStatus()},updateVisibilityStatus:function(){if(this.isMounted()){var t=this.getHTMLElement(),e=t.parentNode,n=e.scrollTop,i=e.scrollTop+e.clientHeight,o={};this.state.isLoaded||this.state.viewportTop===e.scrollTop||(o.viewportTop=e.scrollTop),this.state.isLoaded||this.state.viewportHeight===e.clientHeight||(o.viewportHeight=e.clientHeight),!this.state.isLoaded&&n<t.offsetTop+t.clientHeight&&t.offsetTop<i&&(o.isLoaded=!0),Object.keys(o).length&&this.setState(o)}},listener:function(t){var e=l.getInstrumentBySymbol(this.props.model.get("symbol"));e&&e.getPriceAlerts()[t]("add change:id delete",this.update,this)},update:function(){var t=l.getInstrumentBySymbol(this.props.model.get("symbol"));t&&(this.setState({hasExpand:t.getSavedPriceAlerts().length>0}),this.updateVisibilityStatus())},render:function(){var t=["row",this.props.isSelected?this.props.selectedRowClass:"",this.state.hasExpand?"has-expand":""].join(" ");return s.createElement("tr",{ref:"container",className:t,onClick:this.onRowClick},this.getRenderCells())}});o.exports=c}.call(e,n,e,t))&&(t.exports=o)}).call(e,n(0))}});