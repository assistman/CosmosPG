webpackJsonp([29],{1976:function(e,t,n){"use strict";function i(e){return{section:e.ui.section||e.ui.initialSection,asideBoxState:Object(C.getAsideBoxState)(e),chartVisibility:Object(C.getChartVisibility)(e),chartState:Object(C.getChartState)(e),chartHeight:Object(C.getChartHeight)(e),instrumentInfoVisibility:Object(C.getInstrumentInfoVisibility)(e)}}function o(e){return{toggleAsideBox:function(){e(Object(I.toggleAsideBox)()),O.a.delay(function(){return p.a.trigger("ui:chart:reflow")},0)},onSecondaryPaneSizeChange:function(t){e(Object(I.resizeChart)({height:t})),O.a.delay(function(){return p.a.trigger("ui:chart:reflow")},0)}}}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"BasicDashboardDesktop",function(){return T});var a=n(10),s=n(837),r=n.n(s),l=n(2181),c=n(2),p=n.n(c),u=n(437),h=n.n(u),d=n(845),f=n(2111),m=n(2184),g=n.n(m),v=n(2813),y=n.n(v),E=n(289),S=n.n(E),b=n(1),_=n.n(b),x=n(11),w=n.n(x),z=n(3),P=n(821),M=n.n(P),I=n(33),C=n(121),N=n(0),O=n.n(N),D=n(433),T=function(e){var t=e.section,n=e.asideBoxState,i=e.toggleAsideBox,o=e.onSecondaryPaneSizeChange,s=(e.chartVisibility,e.chartState),c=(e.chartHeight,e.instrumentInfoVisibility),p=w()({pane:!0,"aside-box hidden-xs":!0,"aside-box-opened":n===a.OPEN,"aside-box-closed":n===a.CLOSED});return _.a.createElement("div",{className:"pane pane--height pane__fluid"},_.a.createElement("div",{className:p},_.a.createElement("div",{className:"aside-panel"},_.a.createElement("div",{className:"search-box"},_.a.createElement("div",{className:"search-panel search-wrapper"},_.a.createElement(r.a,{name:S.a,options:{autoRender:!1}}))),_.a.createElement("div",{className:"instruments-tree-box"},_.a.createElement("div",{className:"instruments-tree-panel"},_.a.createElement(M.a,{className:"instruments-tree-content left_menu-wrapper"},_.a.createElement(D.D,null)))),_.a.createElement("div",{className:"account-box"},_.a.createElement("div",{className:"account-panel account_info-wrapper"},_.a.createElement(r.a,{name:h.a.view})))),_.a.createElement("div",{className:"aside-splitter-box hidden-xs",onClick:i},_.a.createElement("div",{className:"aside-splitter-panel"}))),_.a.createElement("div",{className:"pane pane__scroll"},_.a.createElement(l.a,{vertical:!0,primaryIndex:0,lock:s===a.COLLAPSED,collapse:s===a.COLLAPSED,collapseSize:a.BASIC_VIEW_COLLAPSED_CHART_HEIGHT,secondaryInitialSize:a.BASIC_VIEW_INITIAL_CHART_HEIGHT,secondaryMinSize:a.BASIC_VIEW_MIN_CHART_HEIGHT,onSecondaryPaneSizeChange:o},_.a.createElement("div",{className:"tab-box"},_.a.createElement(f.a,null,_.a.createElement(M.a,null,_.a.createElement(D.u,null))),_.a.createElement(f.a,{invert:!0},_.a.createElement("div",{className:"pane pane__xfluid pane__yfluid pane--height"},t===a.UI_SECTION_TRADING&&_.a.createElement(M.a,{className:"pane pane__fluid pane--height flex-scrollbar"},_.a.createElement(D.l,null)),t===a.UI_SECTION_FAVORITES&&_.a.createElement(M.a,{className:"pane pane__fluid pane--height"},_.a.createElement(D.r,null)),t===a.UI_SECTION_OPEN_POSITION&&_.a.createElement(M.a,{className:"pane pane__fluid pane--height"},_.a.createElement(D.v,null)),t===a.UI_SECTION_ORDERS&&_.a.createElement(M.a,{className:"pane pane__fluid pane--height"},_.a.createElement(D.y,null)),t===a.UI_SECTION_CLOSED_POSITIONS&&_.a.createElement(D.B,{className:"pane pane__fluid pane--height"}),t===a.UI_SECTION_CANCELED_ORDERS&&_.a.createElement(D.F,{className:"pane pane__fluid pane--height"}),t===a.UI_SECTION_PRICE_ALERTS&&_.a.createElement(D.G,{className:"pane pane__fluid pane--height"}),t===a.UI_SECTION_MULTI_CHARTS&&_.a.createElement(D.E,{className:"pane pane__yfluid multi-charts-section main-content multi-charts-tab"})))),c===a.VISIBLE&&_.a.createElement(d.default,null)),_.a.createElement(r.a,{name:g.a,className:"floating-open-positions hidden-xs hidden-sm hidden-md",options:{enabled:n===a.CLOSED}})),n===a.CLOSED&&_.a.createElement(r.a,{name:y.a,className:"floating-account-info"}))};t.default=Object(z.connect)(i,o)(T)},2050:function(e,t,n){(function(i){var o;void 0!==(o=function(e,t,i){function o(e,t,n){e.addEventListener(t,n,!0)}function a(e,t,n){e.removeEventListener(t,n,!0)}var s=n(13),r=(n(0),n(6)),l=(n(2),"rtl"===r("html").attr("dir"));i.exports=s.extend({isHidden:!0,initialize:function(e){s.prototype.initialize.apply(this,arguments),this.options=e,this.render(),this.addDragEvents()},render:function(){this.$el.html(this.template(this.options))},toggle:function(e){this.isHidden!==e&&(this.isHidden=e,this.$el.css("display",e?"none":"block"),this.resetPosition())},resetPosition:function(){this.$el.css({top:"",bottom:"",left:"",right:""})},closePopup:function(){this.toggle(!0)},isDragReady:!1,dragoffset:{x:0,y:0},onMouseDown:function(e){this.isDragReady=!0,this.dragoffset.x=e.pageX-this.el.offsetLeft,this.dragoffset.y=e.pageY-this.el.offsetTop},onMouseUp:function(e){this.isDragReady=!1},onMouseMove:function(e){if(this.isDragReady)if(this.el.offsetHeight+Math.abs(e.pageY-this.dragoffset.y)<screen.height&&(this.el.style.top=e.pageY-this.dragoffset.y+"px"),l){var t=screen.width-e.pageX-this.dragoffset.x;if(t+this.el.offsetWidth>screen.width)return;this.el.style.right=t+"px"}else{var n=e.pageX-this.dragoffset.x;if(n+this.el.offsetWidth>screen.width)return;this.el.style.left=n+"px"}},addDragEvents:function(){o(this.el,"mousedown",this.onMouseDown.bind(this)),o(document,"mouseup",this.onMouseUp.bind(this)),o(document,"mousemove",this.onMouseMove.bind(this))},removeDragEvents:function(){a(this.el,"mousedown",this.onMouseDown.bind(this)),a(document,"mouseup",this.onMouseUp.bind(this)),a(document,"mousemove",this.onMouseMove.bind(this))},destroy:function(){this.removeDragEvents(),s.prototype.destroy.call(this)}})}.call(t,n,t,e))&&(e.exports=o)}).call(t,n(6))},2111:function(e,t,n){"use strict";function i(e){return{open:Object(r.getInstrumentDetailsState)(e)===o.OPEN}}var o=n(10),a=n(1),s=(n.n(a),n(3)),r=n(121),l=function(e){var t=e.open,n=e.invert,i=e.children;return(n?!t:t)?i:null};t.a=Object(s.connect)(i)(l)},2181:function(e,t,n){"use strict";function i(e){var t=e.size||0,n=e.percentage?"%":"px",i="layout-pane",o={};return e.primary?i+=" layout-pane-primary":e.vertical?o.height=""+t+n:o.width=""+t+n,c.a.createElement("div",{className:i,style:o},e.children)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(){if(document.body.createTextRange){var e=document.body.createTextRange();e.collapse(),e.select()}else window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}var l=n(1),c=n.n(l);i.defaultProps={vertical:!1,primary:!1,size:0,percentage:!1,children:[]};var p=i,u=(n(2182),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()),h=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleResize=n.handleResize.bind(n),n.handleMouseMove=n.handleMouseMove.bind(n),n.handleMouseUp=n.handleMouseUp.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleSplitterMouseDown=n.handleSplitterMouseDown.bind(n),n.state={secondaryPaneSize:0,resizing:!1},n}return s(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("touchend",this.handleMouseUp),document.addEventListener("touchmove",this.handleTouchMove);var e=void 0;if(void 0!==this.props.secondaryInitialSize)e=this.props.secondaryInitialSize;else{var t=this.container.getBoundingClientRect(),n=void 0;n=this.splitter?this.splitter.getBoundingClientRect():{width:10,height:10},e=this.getSecondaryPaneSize(t,n,{left:t.left+(t.width-n.width)/2,top:t.top+(t.height-n.height)/2},!1)}this.setState({secondaryPaneSize:e})}},{key:"componentDidUpdate",value:function(e,t){t.secondaryPaneSize!==this.state.secondaryPaneSize&&this.props.onSecondaryPaneSizeChange&&this.props.onSecondaryPaneSizeChange(this.state.secondaryPaneSize),t.resizing!==this.state.resizing&&(this.state.resizing?this.props.onDragStart&&this.props.onDragStart():this.props.onDragEnd&&this.props.onDragEnd())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("touchend",this.handleMouseUp),document.removeEventListener("touchmove",this.handleTouchMove)}},{key:"getSecondaryPaneSize",value:function(e,t,n,i){if("number"==typeof this.props.secondaryPaneSize)return this.props.secondaryPaneSize;var o=void 0,a=void 0,s=void 0;this.props.vertical?(o=e.height,a=t.height,s=n.top-e.top):(o=e.width,a=t.width,s=n.left-e.left),i&&(s-=a/2),s<0?s=0:s>o-a&&(s=o-a);var r=void 0;r=1===this.props.primaryIndex?s:o-a-s;var l=o-a-r;return this.props.percentage&&(r=100*r/o,l=100*l/o,a=100*a/o,o=100),l<this.props.primaryMinSize?r=Math.max(r-(this.props.primaryMinSize-l),0):r<this.props.secondaryMinSize&&(r=Math.min(o-a-this.props.primaryMinSize,this.props.secondaryMinSize)),r}},{key:"handleResize",value:function(){if(this.splitter&&!this.props.percentage){var e=this.container.getBoundingClientRect(),t=this.splitter.getBoundingClientRect(),n=this.getSecondaryPaneSize(e,t,{left:t.left,top:t.top},!1);this.setState({secondaryPaneSize:n})}}},{key:"handleMouseMove",value:function(e){if(this.state.resizing){var t=this.container.getBoundingClientRect(),n=this.splitter.getBoundingClientRect(),i=this.getSecondaryPaneSize(t,n,{left:e.clientX,top:e.clientY},!0);r(),this.setState({secondaryPaneSize:i})}}},{key:"handleTouchMove",value:function(e){this.handleMouseMove(e.changedTouches[0])}},{key:"handleSplitterMouseDown",value:function(){this.props.lock||(r(),this.setState({resizing:!0}))}},{key:"handleMouseUp",value:function(){this.setState(function(e){return e.resizing?{resizing:!1}:null})}},{key:"render",value:function(){var e=this,t=this.props,n=t.collapse,i=t.collapseSize,o="splitter-layout";this.props.customClassName&&(o+=" "+this.props.customClassName),this.props.vertical&&(o+=" splitter-layout-vertical"),this.state.resizing&&(o+=" layout-changing");var a=c.a.Children.toArray(this.props.children).slice(0,2);0===a.length&&a.push(c.a.createElement("div",null));for(var s=[],r=0!==this.props.primaryIndex&&1!==this.props.primaryIndex?0:this.props.primaryIndex,l=0;l<a.length;++l){var u=!0,h=null;a.length>1&&l!==r&&(u=!1,h=n?i:this.state.secondaryPaneSize),s.push(c.a.createElement(p,{vertical:this.props.vertical,percentage:this.props.percentage,primary:u,size:h},a[l]))}return c.a.createElement("div",{className:o,ref:function(t){e.container=t}},s[0],s.length>1&&c.a.createElement("div",{role:"separator",className:"layout-splitter",ref:function(t){e.splitter=t},onMouseDown:this.handleSplitterMouseDown,onTouchStart:this.handleSplitterMouseDown}),s.length>1&&s[1])}}]),t}(c.a.Component);h.defaultProps={customClassName:"",vertical:!1,percentage:!1,primaryIndex:0,primaryMinSize:0,secondaryInitialSize:void 0,secondaryMinSize:0,onDragStart:null,onDragEnd:null,onSecondaryPaneSizeChange:null,children:[],secondaryPaneSize:null};t.a=h},2182:function(e,t,n){var i=n(2183);"string"==typeof i&&(i=[[e.i,i,""]]);var o={};o.transform=void 0;n(1953)(i,o);i.locals&&(e.exports=i.locals)},2183:function(e,t,n){t=e.exports=n(1952)(void 0),t.push([e.i,'.splitter-layout{position:absolute;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:100%;overflow:hidden}.splitter-layout,.splitter-layout .layout-pane{display:-webkit-flex;display:-ms-flexbox;display:flex}.splitter-layout .layout-pane{position:relative;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;overflow:auto}.splitter-layout .layout-pane.layout-pane-primary{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.splitter-layout>.layout-splitter{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:10px;height:100%;position:relative;cursor:col-resize}.splitter-layout>.layout-splitter:before{content:" ";position:absolute;height:4px;left:0;right:0;top:3px;width:100%;opacity:0;transition:opacity .3s ease-in-out}.splitter-layout .layout-splitter:hover:before{opacity:1}.splitter-layout.layout-changing{cursor:col-resize}.splitter-layout.splitter-layout-vertical{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.splitter-layout.splitter-layout-vertical.layout-changing{cursor:row-resize}.splitter-layout.splitter-layout-vertical>.layout-splitter{width:100%;height:10px;position:relative;cursor:row-resize}',""])},2184:function(e,t,n){(function(i){var o;void 0!==(o=function(e,t,i){var o=(n(6),n(1)),a=n(0),s=n(16),r=n(2),l=n(43),c=n(60),p=n(2050),u=n(2185),h=function(e){return!a.isNaN(e)&&!a.isNull(e)&&!a.isUndefined(e)},d=function(e,t){return h(t.find(e))};i.exports=p.extend({enabled:!1,collection:new l,template:a.template(n(2187)),events:{"click .fn-close":"closePopup","click .open-positions":"updateOpenPositions"},initialize:function(e){var t=this;p.prototype.initialize.apply(this,arguments),this.enabled=this.options.enabled,this.listenTo(r,"ui:click:floating:open-positions",function(e){t.enabled=e,t.toggle(!t.enabled),t.onPositionsUpdate()}),this.listenTo(c,"update ready",this.onPositionsUpdate),this.render(),this.onPositionsUpdate()},render:function(){p.prototype.render.apply(this,arguments);var e=o.createElement(u,{collection:this.collection});s.render(e,this.$el.find(".positions-container")[0])},onPositionsUpdate:function(){var e=this;if(this.enabled){(0===c.length&&!this.isHidden||c.length>0&&this.isHidden)&&this.toggle(!this.isHidden);var t=c.take(5);t.length===this.collection.length&&t.length===c.length&&a.every(t,function(t){return d(t,e.collection)})||(this.collection.reset({silent:!0}),this.collection.set(t),this.$el.find(".number-of-positions").html(__("position.floating.view.footer",[t.length,c.length])))}},closePopup:function(e){p.prototype.closePopup.apply(this,arguments),this.enabled=!1,r.trigger("ui:close:floating:open-positions")},openPositions:function(){r.trigger("ui:header-itemclick"),r.navigate("/open-positions")}})}.call(t,n,t,e))&&(e.exports=o)}).call(t,n(0))},2185:function(e,t,n){var i;void 0!==(i=function(e,t,i){var o=n(1),a=n(2186),s=n(15),r=n(12);i.exports=r({displayName:"exports",getDefaultProps:function(){return{hasOpenPositions:!1}},getInitialState:function(){return{}},componentDidMount:function(){this.props.collection.on("add remove",this.update,this)},componentWillUnmount:function(){this.props.collection.off("add remove",this.update,this)},update:function(){this.setState({hasOpenPositions:this.props.collection.length>0})},render:function(){return o.createElement("table",null,o.createElement("tbody",null,this.props.collection.map(function(e){var t=s.getInstrumentById(e.get("instrumentId")),n=e.get("positionCode");return t?o.createElement("tr",{key:n+"-position"},o.createElement("td",{className:"instrument-name"},t.get("name")),o.createElement("td",{className:"pl_pos position-value"},o.createElement(a,{key:n+"cell-pl",column:{key:"plOpen"},model:e}))):null},this)))}})}.call(t,n,t,e))&&(e.exports=i)},2186:function(e,t,n){var i;void 0!==(i=function(e,t,i){var o=n(1),a=n(139),s=n(7),r=n(12);i.exports=r({displayName:"exports",getDefaultProps:function(){return{attr:"plOpen"}},getInitialState:function(){return{value:this.props.model.get(this.props.attr)}},componentDidMount:function(){this.props.model.on("change:"+this.props.attr,this.update,this)},componentWillUnmount:function(){this.props.model.off("change:"+this.props.attr,this.update,this)},update:function(){this.setState({value:this.props.model.get(this.props.attr)})},render:function(){return o.createElement(a,{value:this.state.value,precision:2,alwaysPrecision:!0,positiveSymbol:"",prefix:s.getUserCurrencySymbol()})}})}.call(t,n,t,e))&&(e.exports=i)},2187:function(e,t){e.exports='<div class="floating-open-positions-container"><div class="header"><i class="dots-icon"></i> <span><%=__(\'tab.open_positions\')%></span><div class="fn-close icon-close-white"></div></div><div class="content"><div class="positions-container"></div><div class="separator"><span></span></div><div class="footer"><span class="number-of-positions"></span> <a href="#open-positions" class="open-positions"><%=__(\'my.open.positions.link\')%></a></div></div></div>'},2813:function(e,t,n){(function(i){var o;void 0!==(o=function(e,t,i){var o=n(0),a=(n(6),n(2)),s=n(2050),r=n(7),l=n(9),c=n(35),p=n(51);i.exports=s.extend({template:o.template(n(450)),events:function(){return o.extend({},o.result(s.prototype,"events"),{"click .fn-close":"closePopup"})},initialize:function(e){s.prototype.initialize.apply(this,arguments),this.listenTo(a,"user:account-metrics",this.render)},render:function(){var e=r.getUserAccountMetricsModel(),t=r.getUserCurrencySymbol(),n=c(e.getBalance()).formatForeignCurrency(t),i=c(e.getBuyingPower()).formatForeignCurrency(t),o=c(e.getEquity()).formatForeignCurrency(t),a=c(e.getMarginUsed()).formatForeignCurrency(t),s=c(e.getProfitLoss()).formatForeignCurrency(t),u=e.getProfitLoss()>=0,h=e.getRiskLevel(),d=l.isLive()||!p.LOW_SCORE()||!p.FULL_REGISTRATION_COMPLETED(),f={currency:t,balance:n,buyingPower:i,equity:o,marginUsed:a,profitLoss:s,profitLossPositive:u,riskLevel:h,risk_level_class:"help-risk none",platformType:l.getPlatformType(),isPlatformSwitchAllowed:d};this.$el.html(this.template(f))},resetPosition:function(){this.$el.css({top:"",bottom:"",left:"",right:""})}})}.call(t,n,t,e))&&(e.exports=o)}).call(t,n(0))}});