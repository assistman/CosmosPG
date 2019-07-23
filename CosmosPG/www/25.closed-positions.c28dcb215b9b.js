webpackJsonp([25],{2001:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(815),o=i(1),s=i.n(o),l=i(837),r=i.n(l),a=i(2868),d=i.n(a),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},u=function(e){return s.a.createElement(r.a,c({name:d.a},e))};t.default=Object(n.a)(u)},2660:function(e,t,i){(function(n,o){var s;void 0!==(s=function(e,t,n){var o=i(6),s=i(0),l=i(13),r=i(29),a=i(2),d=i(43),c=i(140),u=i(4),p=i(7),h=i(226),m=i(124),f=s.template(i(2661)),g=s.template(i(2662)),v=l.extend({filter:{instruments:"null",period:"today",beginPeriod:new Date,endPeriod:new Date},filterOptions:{instruments:{},period:{custom:"period.custom",all:"period.all",today:"period.day","7|Date":"period.week","14|Date":"period.fortnight","1|Month":"period.month","3|Month":"period.season","6|Month":"period.halfyear","12|Month":"period.year"}},collection:new d,itemsStore:{},calendarInstances:{},localStorageKey:null,tagName:"div",className:"content",prepareFilters:function(){var e=this;if("null"!==this.filter.instruments){var t=c.getInstrumentBySymbol(this.filter.instruments);t?this.filterOptions.instruments[t.get("symbol")]=t.get("name"):this.filterOptions.instruments[this.filter.instruments]=this.filter.instruments}this.$el.find(".filter-basic .form-inline").empty(),s.each(this.filterOptions,function(t,i,n){e.$el.find(".filter-basic .form-inline").append(f({filterKey:i,filter:e.filter[i],filterOptions:t})),e.$el.find("#label-"+i).html(__("history."+i))}),this.hideLoading()},events:function(){return s.extend({},s.result(l.prototype,"events"),{"change select[data-key=instruments]":"onFilterUpdated","change select[data-key=status]":"onFilterUpdated","change select[data-key=period]":"onFilterPeriodUpdated"})},updateFilter:function(e,t){this.filter[e]=t,this.showLoading(),this.applyFilter()},onFilterUpdated:function(e){this.updateFilter(e.currentTarget.dataset.key,e.currentTarget.value)},onFilterDatesUpdated:function(e,t,i,n){var o=e[0],s=o.getDate()+"-"+(o.getMonth()+1)+"-"+o.getFullYear(),l=this.userTimezone.convertDateToTimestamp(s,"DD-MM-YYYY"),r=new Date(l);this.filter.period="custom",this.$el.find("select[data-key=period]").val(this.filter.period),this.updateFilter(i.element.dataset.key,r),this.calendarInstances.begin.set("maxDate",this.filter.endPeriod),this.calendarInstances.end.set("minDate",this.userTimezone.convertTimestampAsNewDate(l))},onFilterPeriodUpdated:function(e){var t=e.currentTarget.dataset.key,i=o(this.$el.find(".custom-period")),n=m.user,s=e.currentTarget.value;if(this.showLoading(),this.filter[t]=s,"custom"===s){var l=this.calendarInstances.begin.selectedDates[0],r=this.calendarInstances.end.selectedDates[0],a=void 0,d=void 0;if(l){var c=l.getDate()+"-"+(l.getMonth()+1)+"-"+l.getFullYear();a=n.convertDateAsNewDate(c,"DD-MM-YYYY")}else a=new Date;if(r){var u=r.getDate()+"-"+(r.getMonth()+1)+"-"+r.getFullYear();d=n.convertDateAsNewDate(u,"DD-MM-YYYY")}else d=new Date;return i.removeClass("hidden"),this.filter.beginPeriod=a,this.filter.endPeriod=d,void this.applyFilter()}i.addClass("hidden");var h=new Date,f=new Date;"all"===s&&(f=this.userTimezone.setTimestampAsNewDate(p.getUserInfoModel().get("account").accountCreationTime)),s=s.split("|"),2===s.length&&f["set"+s[1]](f["get"+s[1]]()-s[0]),this.filter.beginPeriod=f,this.filter.endPeriod=h,this.applyFilter()},showLoading:function(){this.$el.addClass("content-loading"),this.loadingView&&this.loadingView.destroy(),this.loadingTimeout&&clearTimeout(this.loadingTimeout),this.loadingTimeout=setTimeout(this.onDataUnavailable.bind(this),1e4),this.loadingView=new r({parent:this.$el,position:"absolute",translucent:"2"})},checkFilterRange:function(){!this.filter||this.filter.beginPeriod&&this.filter.endPeriod||(this.filter.beginPeriod=this.userTimezone.getMoment().subtract(1,"days").toDate(),this.filter.endPeriod=new Date),this.filter&&u(this.filter.endPeriod).isBefore(this.filter.beginPeriod)&&(this.filter.beginPeriod=this.filter.endPeriod)},hideLoading:function(){this.loadingTimeout&&clearTimeout(this.loadingTimeout),this.$el.removeClass("content-loading"),this.loadingView&&this.loadingView.destroy()},initialize:function(e){if(this.userTimezone=m.user,l.prototype.initialize.apply(this,arguments),this.localStorageKey){var t=localStorage.getItem(this.localStorageKey);t&&(this.filter=JSON.parse(t))}this.subscribeAndRender()},subscribeAndRender:function(){this.delegateEvents(),p.getUserCommonData().isAdvancedTradingView()||a.trigger("chart:display:hide"),this.listenTo(this.itemsStore,"change",this.prepareFilters),this.render(),this.applyFilter()},formatDate:function(e){var t=e;return s.isUndefined(t)&&(t=new Date),this.userTimezone.formatTimestamp(t,"YYYY-MM-DD")},render:function(){var e=this,t=new Date;return l.prototype.render.call(this),this.$el.find(".panel-heading").html(g({filter:this.filter})),this.prepareFilters(),this.checkFilterRange(),this.calendarInstances.begin=new h(this.$el.find("input[data-key=beginPeriod]")[0],{maxDate:u(this.filter.endPeriod).isBefore(t)?this.filter.endPeriod:t,minDate:this.userTimezone.convertTimestampAsNewDate(p.getUserInfoModel().get("account").accountCreationTime),dateFormat:"d/m/Y",disableMobile:!0,defaultDate:this.filter.beginPeriod,onChange:function(t,i,n){e.onFilterDatesUpdated(t,i,n,"start")}}),this.calendarInstances.end=new h(this.$el.find("input[data-key=endPeriod]")[0],{maxDate:new Date,minDate:this.filter.beginPeriod,dateFormat:"d/m/Y",disableMobile:!0,defaultDate:this.filter.endPeriod,onChange:function(t,i,n){e.onFilterDatesUpdated(t,i,n,"end")}}),this},destroy:function(){l.prototype.destroy.call(this),s.each(this.calendarInstances,function(e){e.destroy()})}});n.exports=v}.call(t,i,t,e))&&(e.exports=s)}).call(t,i(0),i(6))},2661:function(e,t){e.exports='<div class="form-group"><label class="_sr-only" for="input-<%=filterKey%>" id="label-<%=filterKey%>"></label><div class="styled-select"><select class="form-control" data-key="<%=filterKey%>" id="input-<%=filterKey%>"> <% _.forEach(filterOptions, function(value, key) { %> <option value="<%= key %>" <% if(key == filter){print(\'selected\');} %>><% if (filterKey === \'instruments\') {%><%= value %><%} else {%><%= __(value) %><% } %></option> <% }); %> </select></div></div>'},2662:function(e,t){e.exports='<nav class="navbar"><div class="navbar-header"><div class="navbar-form filter-basic"><div class="form-inline"></div></div><div class="navbar-form filter-period"><div class="form-inline"><div class="form-group custom-period <% if(filter.period !== \'custom\'){print(\'hidden\');} %> inner-addon right-addon"><label class="_sr-only" for="inputFrom"><%=__(\'history.from\')%></label><input type="text" class="form-control" data-key="beginPeriod" id="inputFrom"> <i class="glyphicon icon-calendar"></i></div><div class="form-group custom-period <% if(filter.period !== \'custom\'){print(\'hidden\');} %> inner-addon right-addon"><label class="_sr-only" for="inputTo"><%=__(\'history.to\')%></label><input type="text" class="form-control" data-key="endPeriod" id="inputTo"> <i class="glyphicon icon-calendar"></i></div></div></div></div></nav>'},2663:function(e,t,i){(function(n){var o;void 0!==(o=function(e,t,n){var o=i(1),s=i(907).default,l=i(438),r=i(2664),a=i(0),d=i(12),c=d({displayName:"GridRows",getDefaultProps:function(){return{columns:[],hiddenColumns:[],collection:[],screenSize:null,customRowComponent:null,customRowComponentXS:null,customRowComponentSM:null,customRowComponentMD:null,customRowComponentLG:null,onRowClick:function(){},selectedRowId:null,toggleOnRowClick:!1,autoHideColumns:!1}},getInitialState:function(){return{collection:this.props.collection,rows:this.props.collection.slice(0,20),selectedRowId:this.props.selectedRowId,expandedRows:[],hasMore:!0}},getComponent:function(){var e=this.props.screenSize,t=this.props.customRowComponent||l;if(a.isEmpty(e))return t;var i="customRowComponent"+e,n=this.props[i];return a.isEmpty(n)?t:n},onRowClick:function(e,t){this.setState({selectedRowId:t.cid}),a.isFunction(this.props.onRowClick)&&this.props.onRowClick(e,t)},onRowToggle:function(e){var t=this.state.expandedRows,i=-1!==t.indexOf(e),n=i?t.filter(function(t){return t!==e}):t.concat(e);this.setState({expandedRows:n,selectedRowId:e})},renderItem:function(e,t,i){var n=this,s=function(){return n.onRowToggle(e.cid)},l=this.state.selectedRowId===e.cid,a=-1!==this.state.expandedRows.indexOf(e.cid),d=[o.createElement(t,{key:e.cid+l,columns:this.props.columns,model:e,isSelected:l,isExpanded:a,couldBeExpanded:!!this.props.hiddenColumns.length,screenSize:this.props.screenSize,onRowClick:this.onRowClick,toggle:s,toggleOnRowClick:this.props.toggleOnRowClick,index:i,autoHideColumns:this.props.autoHideColumns})];return a&&this.props.hiddenColumns.length&&d.push(o.createElement(r,{key:e.cid+"-expanded",columns:this.props.columns,hiddenColumns:this.props.hiddenColumns,model:e,isSelected:l,screenSize:this.props.screenSize,toggle:s})),d},handleInfiniteLoad:function(){var e=this.state.rows.length,t=this.state.collection.slice(e,e+20),i=this.state.collection.length>this.state.rows.length+20;this.setState({isInfiniteLoading:!1,rows:this.state.rows.concat(t),hasMore:i})},loader:function(){return o.createElement("tr",{className:"loader"},o.createElement("td",null,__("loader.loading")))},render:function(){var e=this.getComponent(),t=this.state.rows.map(function(t,i){return this.renderItem(t,e,i)}.bind(this));return o.createElement(s,{element:"tbody",className:"rows",useWindow:!1,selfScrolled:!0,loadMore:this.handleInfiniteLoad,hasMore:this.state.hasMore,loader:this.loader(),threshold:100},t)}});n.exports=c}.call(t,i,t,e))&&(e.exports=o)}).call(t,i(0))},2664:function(e,t,i){var n;void 0!==(n=function(e,t,n){var o=i(1),s=i(2665),l=i(12),r=l({displayName:"GridRowExpanded",getDefaultProps:function(){return{key:"",model:null,columns:[],hiddenColumns:[],screenSize:null,contentComponent:null,isSelected:!1,selectedRowClass:"selected",toggle:function(){}}},getRenderContent:function(){var e=this.props.contentComponent||s;return o.createElement(e,{model:this.props.model,columns:this.props.hiddenColumns})},render:function(){var e=["row","expandable-content",this.props.isSelected?this.props.selectedRowClass:""].join(" ");return o.createElement("tr",{className:e},o.createElement("td",{colSpan:this.props.columns.length},this.getRenderContent()))}});n.exports=r}.call(t,i,t,e))&&(e.exports=n)},2665:function(e,t,i){(function(n){var o;void 0!==(o=function(e,t,n){var o=i(1),s=i(0),l=i(12),r=l({displayName:"Grid",getDefaultProps:function(){return{columns:[],model:null}},getColumnByName:function(e){return s.filter(this.props.columns,function(t){return e===t.name})[0]},render:function(){return o.createElement("div",{className:"properties-table"},o.createElement("table",null,o.createElement("tbody",null,this.getDataRows())))},getDataRows:function(){var e=this.props.model;return this.props.columns.map(function(t,i){var n=t.type||GridCell,l=s.extend({},t.cellProps,{key:i,column:t,model:e});return o.createElement("tr",{key:e.cid+i},o.createElement("th",null,__(t.name),":"),o.createElement(n,l))})}});n.exports=r}.call(t,i,t,e))&&(e.exports=o)}).call(t,i(0))},2666:function(e,t,i){(function(n){var o;void 0!==(o=function(e,t,o){var s=i(1),l=i(299),r=i(12),a=r({displayName:"GridRow",getDefaultProps:function(){return{key:"",model:null,columns:[],screenSize:null,selectedRowClass:"selected",isSelected:!1,isExpanded:!1,couldBeExpanded:!1,onRowClick:function(){},toggle:function(){},toggleOnRowClick:!1,autoHideColumns:!1,index:0}},getInitialState:function(){return{isExpanded:!1,columns:this.props.columns}},toggle:function(){var e=!this.state.isExpanded;this.props.toggle(),this.setState({isExpanded:e})},getRenderCells:function(){return this.props.columns.map(function(e,t){var i=e.type||l,o=n.extend({},e.cellProps,{key:t,column:e,model:this.props.model,expandableElement:this});return s.createElement(i,o)},this)},onRowClick:function(e){this.props.toggleOnRowClick&&this.props.couldBeExpanded&&this.toggle(),this.props.onRowClick(e,this.props.model)},render:function(){var e=["row","expandable",this.props.isSelected?this.props.selectedRowClass:"",this.props.isExpanded?"expanded":""].join(" ");return s.createElement("tr",{className:e,onClick:this.onRowClick},this.getRenderCells())}});o.exports=a}.call(t,i,t,e))&&(e.exports=o)}).call(t,i(0))},2868:function(e,t,i){(function(n){var o;void 0!==(o=function(e,t,n){var o=(i(6),i(0)),s=i(2),l=i(8),r=i(23),a=i(2660),d=i(910),c=o.template(i(2869)),u=i(2870),p=i(300),h=i(847),m=i(1),f=i(16),g=i(139),v=i(7),C=i(124),y=C.TIMEZONE_LOCAL_ID;s.on("ui:login:submit",function(){return localStorage.removeItem("closed_positions_filter")});var w=a.extend({filter:{instruments:"null",period:"today",beginPeriod:new Date,endPeriod:new Date},unavailableDataTemplate:o.template(i(2871)),itemsStore:d,gridColumnsConfig:{},localStorageKey:"closed_positions_filter",events:function(){return o.extend({},o.result(a.prototype,"events"),{"click .fn-close-popup":"onClose"})},initialize:function(e){a.prototype.initialize.apply(this,arguments),this.listenTo(this.itemsStore,"change",this.updateTotalPL),s.trigger("chart:display:hide")},prepareFilters:function(){var e=[];this.filterOptions.instruments={null:__("history.order.status.any")},o.each(this.itemsStore.get("filterAll"),function(e){this.filterOptions.instruments[e.symbol]=e.name},this),e=this.itemsStore.get("filtered"),this.collection.reset(e),a.prototype.prepareFilters.call(this)},applyFilter:function(){var e=v.getUserCommonData().getUserTimezoneObject(),t=e.id,i=e.offset,n=null;t===y&&(n={id:t,gmt:y,offset:i});var s={beginPeriod:this.formatDate(this.filter.beginPeriod),endPeriod:this.formatDate(this.filter.endPeriod),filterId:o.uniqueId("gwt-uid-")+".",showPositions:!0,symbol:this.filter.instruments,timeZoneTO:n};localStorage.setItem(this.localStorageKey,JSON.stringify(this.filter)),l.subscribePositionsFilters(r.getAtmosphereId(),s)},getColumnConfig:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.gridColumnsConfig[e];return o.extend(i||p.getColumnConfig(e),t)},render:function(){this.$el.html(c()),a.prototype.render.call(this),this.gridView=h({className:"tab-closed-positions",collection:this.collection,empty:u,initialSort:__("history.position.exit.time"),customRowsComponent:i(2663),customRowComponent:i(2666),toggleOnRowClick:!0,autoHideColumns:!0,columns:[this.getColumnConfig("toggleExpandableRow"),this.getColumnConfig("instrumentName"),this.getColumnConfig("positionDirection"),this.getColumnConfig("orderQuantity"),this.getColumnConfig("pl"),this.getColumnConfig("positionEntryPrice",{alwaysInExpandable:!0}),this.getColumnConfig("positionExitPrice",{alwaysInExpandable:!0}),this.getColumnConfig("positionEntryTime"),this.getColumnConfig("positionExitTime"),this.getColumnConfig("positionNumber"),this.getColumnConfig("orderNumber",{alwaysInExpandable:!0}),this.getColumnConfig("positionCloseReason")],columnsMD:[this.getColumnConfig("toggleExpandableRow"),this.getColumnConfig("instrumentName"),this.getColumnConfig("positionDirection"),this.getColumnConfig("orderQuantity"),this.getColumnConfig("pl"),this.getColumnConfig("positionEntryPrice"),this.getColumnConfig("positionExitPrice")],columnsSM:[this.getColumnConfig("toggleExpandableRow"),this.getColumnConfig("instrumentName"),this.getColumnConfig("positionDirection"),this.getColumnConfig("orderQuantity"),this.getColumnConfig("pl")],columnsXS:[this.getColumnConfig("toggleExpandableRow"),this.getColumnConfig("instrumentName"),this.getColumnConfig("positionDirection"),this.getColumnConfig("orderQuantity"),this.getColumnConfig("pl")]},this.$el.find(".closed-positions-grid")[0])},onDataUnavailable:function(){this.hideLoading(),this.$el.find(".closed-positions-grid").html(this.unavailableDataTemplate())},destroy:function(){f.unmountComponentAtNode(this.$el.find(".panel-total-pl")[0]),a.prototype.destroy.call(this),o.isUndefined(this.gridView)||this.gridView.destroy(),this.collection.reset()},updateTotalPL:function(e){var t=e.get("filtered"),i=o.reduce(t,function(e,t){return e+t.plOpen},0);f.render(m.createElement(g,{value:i,inline:!0,text:__("history.position.total.pl"),prefix:v.getUserCurrencySymbol(),precision:2,alwaysPrecision:!0,shouldZeroHide:!0}),this.$el.find(".panel-total-pl")[0])},onClose:function(){s.navigateBack()}});n.exports=w}.call(t,i,t,e))&&(e.exports=o)}).call(t,i(0))},2869:function(e,t){e.exports='<div class="closed-positions filter-tab"><div class="closed-positions-header"><div class="closed-positions-title"><div><%=__(\'tab.closed_positions\')%></div></div><div class="header-actions fn-close-popup"><i class="icon-close-circle"></i></div></div><div class="panel pane__yfluid"><div class="panel-heading"></div><div class="panel-total-pl"></div><div class="panel-body pane__yfluid pane--height"><div class="pane pane__fluid pane--height pane__scroll"><div class="pane pane--height pane__scroll-content"><div class="closed-positions-grid"></div></div></div></div></div></div>'},2870:function(e,t,i){var n;void 0!==(n=function(e,t,n){var o=i(1),s=i(12),l=s({displayName:"Empty",render:function(){return o.createElement("div",{className:"empty"},o.createElement("div",{className:"icon icon-closed-positions-empty"}),o.createElement("div",{className:"caption"},__("instruments.nodata.closed_positions")),o.createElement("div",{className:"text"},__("history.empty.text")))}});n.exports=l}.call(t,i,t,e))&&(e.exports=n)},2871:function(e,t){e.exports='<div class="filters-unavailable-data"><div class="filters-unavailable-data-image"></div><div class="filters-unavailable-data-message"><%-__(\'chart.no_data\')%></div></div>'}});