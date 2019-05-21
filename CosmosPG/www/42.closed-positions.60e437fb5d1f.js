webpackJsonp([42],{1964:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1980),o=i(1),s=i.n(o),r=i(800),l=i.n(r),a=i(2872),d=i.n(a),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},u=function(e){return s.a.createElement(l.a,c({name:d.a},e))};t.default=Object(n.a)(u)},1980:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e){return{setInstrumentInfoVisibleIfNeeded:function(t){var i=t?a.VISIBLE:a.HIDDEN;e(Object(p.changeInstrumentInfoVisibility)(i))},dispatch:e}}function l(e){return{deepLinkSymbol:e.deepLinks.list.symbol,selectedSymbol:e.ui.selectedInstrumentCategorySymbol}}var a=i(10),d=i(1),c=i.n(d),u=i(6),p=i(54),h=i(0),m=i.n(h),f=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),g=function(e){var t=function(t){function i(){return n(this,i),o(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return s(i,t),f(i,[{key:"componentDidMount",value:function(){var e=this.props,t=e.symbols,i=e.hasData,n=e.selectedSymbol,o=m.a.isArray(t)?t:m.a.keys(t);m.a.isNil(this.props.deepLinkSymbol)&&(m.a.contains(o,n)||this.props.dispatch(Object(p.selectInstrumentSymbolAndUpdateUrl)(m.a.first(o))),this.props.setInstrumentInfoVisibleIfNeeded(i),this.props.deepLinkSymbol&&m.a.delay(function(){return store.dispatch(clearDeepLinkParam("symbol"))},0))}},{key:"componentDidUpdate",value:function(){this.props.setInstrumentInfoVisibleIfNeeded(this.props.hasData)}},{key:"render",value:function(){return c.a.createElement(e,this.props)}}]),i}(c.a.Component);return Object(u.connect)(l,r)(t)};t.a=g},2648:function(e,t,i){(function(n,o){var s;void 0!==(s=function(e,t,n){var o=i(4),s=i(0),r=i(12),l=i(30),a=i(2),d=i(45),c=i(134),u=i(3),p=i(7),h=i(214),m=i(119),f=s.template(i(2649)),g=s.template(i(2650)),y=r.extend({filter:{instruments:"null",period:"today",beginPeriod:new Date,endPeriod:new Date},filterOptions:{instruments:{},period:{custom:"history.period.custom",all:"history.period.all",today:"history.period.day","7|Date":"history.period.week","14|Date":"history.period.fortnight","1|Month":"history.period.month","3|Month":"history.period.season","6|Month":"history.period.halfyear","12|Month":"history.period.year"}},collection:new d,itemsStore:{},calendarInstances:{},localStorageKey:null,tagName:"div",className:"content",prepareFilters:function(){var e=this;if("null"!==this.filter.instruments){var t=c.getInstrumentBySymbol(this.filter.instruments);t?this.filterOptions.instruments[t.get("symbol")]=t.get("name"):this.filterOptions.instruments[this.filter.instruments]=this.filter.instruments}this.$el.find(".filter-basic .form-inline").empty(),s.each(this.filterOptions,function(t,i,n){e.$el.find(".filter-basic .form-inline").append(f({filterKey:i,filter:e.filter[i],filterOptions:t})),e.$el.find("#label-"+i).html(__("history."+i))}),this.hideLoading()},events:function(){return s.extend({},s.result(r.prototype,"events"),{"change select[data-key=instruments]":"onFilterUpdated","change select[data-key=status]":"onFilterUpdated","change select[data-key=period]":"onFilterPeriodUpdated"})},updateFilter:function(e,t){this.filter[e]=t,this.showLoading(),this.applyFilter()},onFilterUpdated:function(e){this.updateFilter(e.currentTarget.dataset.key,e.currentTarget.value)},onFilterDatesUpdated:function(e,t,i,n){var o=e[0],s=o.getDate()+"-"+(o.getMonth()+1)+"-"+o.getFullYear(),r=this.userTimezone.convertDateToTimestamp(s,"DD-MM-YYYY"),l=new Date(r);this.filter.period="custom",this.$el.find("select[data-key=period]").val(this.filter.period),this.updateFilter(i.element.dataset.key,l),this.calendarInstances.begin.set("maxDate",this.filter.endPeriod),this.calendarInstances.end.set("minDate",this.userTimezone.convertTimestampAsNewDate(r))},onFilterPeriodUpdated:function(e){var t=e.currentTarget.dataset.key,i=o(this.$el.find(".custom-period")),n=m.user,s=e.currentTarget.value;if(this.showLoading(),this.filter[t]=s,"custom"===s){var r=this.calendarInstances.begin.selectedDates[0],l=this.calendarInstances.end.selectedDates[0],a=void 0,d=void 0;if(r){var c=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear();a=n.convertDateAsNewDate(c,"DD-MM-YYYY")}else a=new Date;if(l){var u=l.getDate()+"-"+(l.getMonth()+1)+"-"+l.getFullYear();d=n.convertDateAsNewDate(u,"DD-MM-YYYY")}else d=new Date;return i.removeClass("hidden"),this.filter.beginPeriod=a,this.filter.endPeriod=d,void this.applyFilter()}i.addClass("hidden");var h=new Date,f=new Date;"all"===s&&(f=this.userTimezone.setTimestampAsNewDate(p.getUserInfoModel().get("account").accountCreationTime)),s=s.split("|"),2===s.length&&f["set"+s[1]](f["get"+s[1]]()-s[0]),this.filter.beginPeriod=f,this.filter.endPeriod=h,this.applyFilter()},showLoading:function(){this.$el.addClass("content-loading"),this.loadingView&&this.loadingView.destroy(),this.loadingTimeout&&clearTimeout(this.loadingTimeout),this.loadingTimeout=setTimeout(this.onDataUnavailable.bind(this),1e4),this.loadingView=new l({parent:this.$el,position:"absolute",translucent:"2"})},checkFilterRange:function(){!this.filter||this.filter.beginPeriod&&this.filter.endPeriod||(this.filter.beginPeriod=this.userTimezone.getMoment().subtract(1,"days").toDate(),this.filter.endPeriod=new Date),this.filter&&u(this.filter.endPeriod).isBefore(this.filter.beginPeriod)&&(this.filter.beginPeriod=this.filter.endPeriod)},hideLoading:function(){this.loadingTimeout&&clearTimeout(this.loadingTimeout),this.$el.removeClass("content-loading"),this.loadingView&&this.loadingView.destroy()},initialize:function(e){if(this.userTimezone=m.user,r.prototype.initialize.apply(this,arguments),this.localStorageKey){var t=localStorage.getItem(this.localStorageKey);t&&(this.filter=JSON.parse(t))}this.subscribeAndRender()},subscribeAndRender:function(){this.delegateEvents(),p.getUserCommonData().isAdvancedTradingView()||a.trigger("chart:display:hide"),this.listenTo(this.itemsStore,"change",this.prepareFilters),this.render(),this.applyFilter()},formatDate:function(e){var t=e;return s.isUndefined(t)&&(t=new Date),this.userTimezone.formatTimestamp(t,"YYYY-MM-DD")},render:function(){var e=this,t=new Date;return r.prototype.render.call(this),this.$el.find(".panel-heading").html(g({filter:this.filter})),this.prepareFilters(),this.checkFilterRange(),this.calendarInstances.begin=new h(this.$el.find("input[data-key=beginPeriod]")[0],{maxDate:u(this.filter.endPeriod).isBefore(t)?this.filter.endPeriod:t,minDate:this.userTimezone.convertTimestampAsNewDate(p.getUserInfoModel().get("account").accountCreationTime),dateFormat:"d/m/Y",disableMobile:!0,defaultDate:this.filter.beginPeriod,onChange:function(t,i,n){e.onFilterDatesUpdated(t,i,n,"start")}}),this.calendarInstances.end=new h(this.$el.find("input[data-key=endPeriod]")[0],{maxDate:new Date,minDate:this.filter.beginPeriod,dateFormat:"d/m/Y",disableMobile:!0,defaultDate:this.filter.endPeriod,onChange:function(t,i,n){e.onFilterDatesUpdated(t,i,n,"end")}}),this},destroy:function(){r.prototype.destroy.call(this),s.each(this.calendarInstances,function(e){e.destroy()})}});n.exports=y}.call(t,i,t,e))&&(e.exports=s)}).call(t,i(0),i(4))},2649:function(e,t){e.exports='<div class="form-group"><label class="_sr-only" for="input-<%=filterKey%>" id="label-<%=filterKey%>"></label><div class="styled-select"><select class="form-control" data-key="<%=filterKey%>" id="input-<%=filterKey%>"> <% _.forEach(filterOptions, function(value, key) { %> <option value="<%= key %>" <% if(key == filter){print(\'selected\');} %>><% if (filterKey === \'instruments\') {%><%= value %><%} else {%><%= __(value) %><% } %></option> <% }); %> </select></div></div>'},2650:function(e,t){e.exports='<nav class="navbar"><div class="navbar-header"><div class="navbar-form filter-basic"><div class="form-inline"></div></div><div class="navbar-form filter-period"><div class="form-inline"><div class="form-group custom-period <% if(filter.period !== \'custom\'){print(\'hidden\');} %> inner-addon right-addon"><label class="_sr-only" for="inputFrom"><%=__(\'history.from\')%></label><input type="text" class="form-control" data-key="beginPeriod" id="inputFrom"> <i class="glyphicon icon-calendar"></i></div><div class="form-group custom-period <% if(filter.period !== \'custom\'){print(\'hidden\');} %> inner-addon right-addon"><label class="_sr-only" for="inputTo"><%=__(\'history.to\')%></label><input type="text" class="form-control" data-key="endPeriod" id="inputTo"> <i class="glyphicon icon-calendar"></i></div></div></div></div></nav>'},2651:function(e,t,i){(function(n){var o;void 0!==(o=function(e,t,n){var o=i(1),s=i(867).default,r=i(422),l=i(2652),a=i(0),d=o.createClass({displayName:"GridRows",getDefaultProps:function(){return{columns:[],hiddenColumns:[],collection:[],screenSize:null,customRowComponent:null,customRowComponentXS:null,customRowComponentSM:null,customRowComponentMD:null,customRowComponentLG:null,onRowClick:function(){},selectedRowId:null,toggleOnRowClick:!1,autoHideColumns:!1}},getInitialState:function(){return{collection:this.props.collection,rows:this.props.collection.slice(0,20),selectedRowId:this.props.selectedRowId,expandedRows:[],hasMore:!0}},getComponent:function(){var e=this.props.screenSize,t=this.props.customRowComponent||r;if(a.isEmpty(e))return t;var i="customRowComponent"+e,n=this.props[i];return a.isEmpty(n)?t:n},onRowClick:function(e,t){this.setState({selectedRowId:t.cid}),a.isFunction(this.props.onRowClick)&&this.props.onRowClick(e,t)},onRowToggle:function(e){var t=this.state.expandedRows,i=-1!==t.indexOf(e),n=i?t.filter(function(t){return t!==e}):t.concat(e);this.setState({expandedRows:n,selectedRowId:e})},renderItem:function(e,t,i){var n=this,s=function(){return n.onRowToggle(e.cid)},r=this.state.selectedRowId===e.cid,a=-1!==this.state.expandedRows.indexOf(e.cid),d=[o.createElement(t,{key:e.cid+r,columns:this.props.columns,model:e,isSelected:r,isExpanded:a,couldBeExpanded:!!this.props.hiddenColumns.length,screenSize:this.props.screenSize,onRowClick:this.onRowClick,toggle:s,toggleOnRowClick:this.props.toggleOnRowClick,index:i,autoHideColumns:this.props.autoHideColumns})];return a&&this.props.hiddenColumns.length&&d.push(o.createElement(l,{key:e.cid+"-expanded",columns:this.props.columns,hiddenColumns:this.props.hiddenColumns,model:e,isSelected:r,screenSize:this.props.screenSize,toggle:s})),d},handleInfiniteLoad:function(){var e=this.state.rows.length,t=this.state.collection.slice(e,e+20),i=this.state.collection.length>this.state.rows.length+20;this.setState({isInfiniteLoading:!1,rows:this.state.rows.concat(t),hasMore:i})},loader:function(){return o.createElement("tr",{className:"loader"},o.createElement("td",null,__("loader.loading")))},render:function(){var e=this.getComponent(),t=this.state.rows.map(function(t,i){return this.renderItem(t,e,i)}.bind(this));return o.createElement(s,{element:"tbody",className:"rows",useWindow:!1,selfScrolled:!0,loadMore:this.handleInfiniteLoad,hasMore:this.state.hasMore,loader:this.loader(),threshold:100},t)}});n.exports=d}.call(t,i,t,e))&&(e.exports=o)}).call(t,i(0))},2652:function(e,t,i){var n;void 0!==(n=function(e,t,n){var o=i(1),s=i(2653),r=o.createClass({displayName:"GridRowExpanded",getDefaultProps:function(){return{key:"",model:null,columns:[],hiddenColumns:[],screenSize:null,contentComponent:null,isSelected:!1,selectedRowClass:"selected",toggle:function(){}}},getRenderContent:function(){var e=this.props.contentComponent||s;return o.createElement(e,{model:this.props.model,columns:this.props.hiddenColumns})},render:function(){var e=["row","expandable-content",this.props.isSelected?this.props.selectedRowClass:""].join(" ");return o.createElement("tr",{className:e},o.createElement("td",{colSpan:this.props.columns.length},this.getRenderContent()))}});n.exports=r}.call(t,i,t,e))&&(e.exports=n)},2653:function(e,t,i){(function(n){var o;void 0!==(o=function(e,t,n){var o=i(1),s=i(0),r=o.createClass({displayName:"Grid",getDefaultProps:function(){return{columns:[],model:null}},getColumnByName:function(e){return s.filter(this.props.columns,function(t){return e===t.name})[0]},render:function(){return o.createElement("div",{className:"properties-table"},o.createElement("table",null,o.createElement("tbody",null,this.getDataRows())))},getDataRows:function(){var e=this.props.model;return this.props.columns.map(function(t,i){var n=t.type||GridCell,r=s.extend({},t.cellProps,{key:i,column:t,model:e});return o.createElement("tr",{key:e.cid+i},o.createElement("th",null,__(t.name),":"),o.createElement(n,r))})}});n.exports=r}.call(t,i,t,e))&&(e.exports=o)}).call(t,i(0))},2654:function(e,t,i){(function(n){var o;void 0!==(o=function(e,t,o){var s=i(1),r=i(292),l=s.createClass({displayName:"GridRow",getDefaultProps:function(){return{key:"",model:null,columns:[],screenSize:null,selectedRowClass:"selected",isSelected:!1,isExpanded:!1,couldBeExpanded:!1,onRowClick:function(){},toggle:function(){},toggleOnRowClick:!1,autoHideColumns:!1,index:0}},getInitialState:function(){return{isExpanded:!1,columns:this.props.columns}},toggle:function(){var e=!this.state.isExpanded;this.props.toggle(),this.setState({isExpanded:e})},getRenderCells:function(){return this.props.columns.map(function(e,t){var i=e.type||r,o=n.extend({},e.cellProps,{key:t,column:e,model:this.props.model,expandableElement:this});return s.createElement(i,o)},this)},onRowClick:function(e){this.props.toggleOnRowClick&&this.props.couldBeExpanded&&this.toggle(),this.props.onRowClick(e,this.props.model)},render:function(){var e=["row","expandable",this.props.isSelected?this.props.selectedRowClass:"",this.props.isExpanded?"expanded":""].join(" ");return s.createElement("tr",{className:e,onClick:this.onRowClick},this.getRenderCells())}});o.exports=l}.call(t,i,t,e))&&(e.exports=o)}).call(t,i(0))},2872:function(e,t,i){(function(n){var o;void 0!==(o=function(e,t,n){var o=(i(4),i(0)),s=i(2),r=i(8),l=i(23),a=i(2648),d=i(871),c=o.template(i(2873)),u=i(2874),p=i(293),h=i(815),m=i(1),f=i(16),g=i(132),y=i(7),v=i(119),C=v.TIMEZONE_LOCAL_ID;s.on("ui:login:submit",function(){return localStorage.removeItem("closed_positions_filter")});var b=a.extend({filter:{instruments:"null",period:"today",beginPeriod:new Date,endPeriod:new Date},unavailableDataTemplate:o.template(i(2875)),itemsStore:d,gridColumnsConfig:{},localStorageKey:"closed_positions_filter",events:function(){return o.extend({},o.result(a.prototype,"events"),{"click .fn-close-popup":"onClose"})},initialize:function(e){a.prototype.initialize.apply(this,arguments),this.listenTo(this.itemsStore,"change",this.updateTotalPL),s.trigger("chart:display:hide")},prepareFilters:function(){var e=[];this.filterOptions.instruments={null:__("history.order.status.any")},o.each(this.itemsStore.get("filterAll"),function(e){this.filterOptions.instruments[e.symbol]=e.name},this),e=this.itemsStore.get("filtered"),this.collection.reset(e),a.prototype.prepareFilters.call(this)},applyFilter:function(){var e=y.getUserCommonData().getUserTimezoneObject(),t=e.id,i=e.offset,n=null;t===C&&(n={id:t,gmt:C,offset:i});var s={beginPeriod:this.formatDate(this.filter.beginPeriod),endPeriod:this.formatDate(this.filter.endPeriod),filterId:o.uniqueId("gwt-uid-")+".",showPositions:!0,symbol:this.filter.instruments,timeZoneTO:n};localStorage.setItem(this.localStorageKey,JSON.stringify(this.filter)),r.subscribePositionsFilters(l.getAtmosphereId(),s)},getColumnConfig:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.gridColumnsConfig[e];return o.extend(i||p.getColumnConfig(e),t)},render:function(){this.$el.html(c()),a.prototype.render.call(this),this.gridView=h({className:"tab-closed-positions",collection:this.collection,empty:u,initialSort:__("history.position.exit.time"),customRowsComponent:i(2651),customRowComponent:i(2654),toggleOnRowClick:!0,autoHideColumns:!0,columns:[this.getColumnConfig("toggleExpandableRow"),this.getColumnConfig("instrumentName"),this.getColumnConfig("positionDirection"),this.getColumnConfig("orderQuantity"),this.getColumnConfig("pl"),this.getColumnConfig("positionEntryPrice",{alwaysInExpandable:!0}),this.getColumnConfig("positionExitPrice",{alwaysInExpandable:!0}),this.getColumnConfig("positionEntryTime"),this.getColumnConfig("positionExitTime"),this.getColumnConfig("positionNumber"),this.getColumnConfig("orderNumber",{alwaysInExpandable:!0}),this.getColumnConfig("positionCloseReason")],columnsMD:[this.getColumnConfig("toggleExpandableRow"),this.getColumnConfig("instrumentName"),this.getColumnConfig("positionDirection"),this.getColumnConfig("orderQuantity"),this.getColumnConfig("pl"),this.getColumnConfig("positionEntryPrice"),this.getColumnConfig("positionExitPrice")],columnsSM:[this.getColumnConfig("toggleExpandableRow"),this.getColumnConfig("instrumentName"),this.getColumnConfig("positionDirection"),this.getColumnConfig("orderQuantity"),this.getColumnConfig("pl")],columnsXS:[this.getColumnConfig("toggleExpandableRow"),this.getColumnConfig("instrumentName"),this.getColumnConfig("positionDirection"),this.getColumnConfig("orderQuantity"),this.getColumnConfig("pl")]},this.$el.find(".closed-positions-grid")[0])},onDataUnavailable:function(){this.hideLoading(),this.$el.find(".closed-positions-grid").html(this.unavailableDataTemplate())},destroy:function(){f.unmountComponentAtNode(this.$el.find(".panel-total-pl")[0]),a.prototype.destroy.call(this),o.isUndefined(this.gridView)||this.gridView.destroy(),this.collection.reset()},updateTotalPL:function(e){var t=e.get("filtered"),i=o.reduce(t,function(e,t){return e+t.plOpen},0);f.render(m.createElement(g,{value:i,inline:!0,text:__("history.position.total.pl"),prefix:y.getUserCurrencySymbol(),precision:2,alwaysPrecision:!0,shouldZeroHide:!0}),this.$el.find(".panel-total-pl")[0])},onClose:function(){s.navigateBack()}});n.exports=b}.call(t,i,t,e))&&(e.exports=o)}).call(t,i(0))},2873:function(e,t){e.exports='<div class="closed-positions filter-tab"><div class="closed-positions-header"><div class="closed-positions-title"><div><%=__(\'tab.closed_positions\')%></div></div><div class="header-actions fn-close-popup"><i class="icon-close-circle"></i></div></div><div class="panel"><div class="panel-heading"></div><div class="panel-total-pl"></div><div class="panel-body pane--height"><div class="pane pane__fluid pane--height pane__scroll"><div class="pane pane--height pane__scroll-content"><div class="closed-positions-grid"></div></div></div></div></div></div>'},2874:function(e,t,i){var n;void 0!==(n=function(e,t,n){var o=i(1),s=o.createClass({displayName:"Empty",render:function(){return o.createElement("div",{className:"empty"},o.createElement("div",{className:"icon icon-closed-positions-empty"}),o.createElement("div",{className:"caption"},__("instruments.nodata.closed_positions")),o.createElement("div",{className:"text"},__("history.empty.text")))}});n.exports=s}.call(t,i,t,e))&&(e.exports=n)},2875:function(e,t){e.exports='<div class="filters-unavailable-data"><div class="filters-unavailable-data-image"></div><div class="filters-unavailable-data-message"><%-__(\'chart.no_data\')%></div></div>'}});