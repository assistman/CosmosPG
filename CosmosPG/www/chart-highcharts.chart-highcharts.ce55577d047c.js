(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart-highcharts"],{

/***/ "./src/js/modules/chart/highcharts/chart-panel/chart.panel.main.view.js":
/*!******************************************************************************!*\
  !*** ./src/js/modules/chart/highcharts/chart-panel/chart.panel.main.view.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_, $) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var ChartPanelView = __webpack_require__(/*! ./chart.panel.view */ \"./src/js/modules/chart/highcharts/chart-panel/chart.panel.view.js\");\n    var $ = __webpack_require__(/*! jquery */ \"./src/vendors/jbone.js\");\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var core = __webpack_require__(/*! core */ \"./src/js/core.js\");\n    var device = __webpack_require__(/*! device */ \"./src/vendors/device.js\").default;\n    var user = __webpack_require__(/*! modules/user/user.model */ \"./src/js/modules/user/user.model.js\");\n    var instruments = __webpack_require__(/*! store/instruments */ \"./src/js/store/instruments.js\");\n    var TradingCentralView = __webpack_require__(/*! ../trading.central.view */ \"./src/js/modules/chart/highcharts/trading.central.view.js\");\n    var ChartsConfigurator = __webpack_require__(/*! ../charts.configurator */ \"./src/js/modules/chart/highcharts/charts.configurator.js\");\n    var DP = __webpack_require__(/*! modules/deep-links/deep.links */ \"./src/js/modules/deep-links/deep.links.js\");\n    var ChartToolbar = __webpack_require__(/*! ../chart.toolbar.view */ \"./src/js/modules/chart/highcharts/chart.toolbar.view.js\");\n\n    var _require = __webpack_require__(/*! store/ui.selectors */ \"./src/js/store/ui.selectors.js\"),\n        getUiSelectedInstrumentCategorySymbol = _require.getUiSelectedInstrumentCategorySymbol;\n\n    var CHART_SETTINGS_KEY = 'chart_settings';\n    var MIN_VIEWPORT_HEIGHT = 500;\n    var ChartsDispatcher = void 0;\n\n    module.exports = ChartPanelView.extend({\n\n        className: 'chart-panel',\n\n        events: function events() {\n            return _.extend({}, _.result(ChartPanelView.prototype, 'events'), {\n                'click .fn-chart-minimize': 'minimize',\n                'click .fn-chart-restore-size': 'restore'\n            });\n        },\n        initialize: function initialize(options) {\n            var _this = this;\n\n            ChartsDispatcher = __webpack_require__(/*! ../charts.dispatcher */ \"./src/js/modules/chart/highcharts/charts.dispatcher.js\");\n\n            this.options = _.extend({}, options, this.loadLocalChartSettings(), {\n                chartId: 'main'\n            });\n\n            var period = null;\n\n            if (user.getApplicationSettings().get('deeplink') === true) {\n                user.getApplicationSettings().set('deeplink', false);\n                period = user.getApplicationSettings().get('chart');\n            }\n\n            if (DP.isDetected() && DP.get('chart')) {\n                period = DP.get('chart');\n            }\n\n            if (period) {\n                _.extend(this.options, { period: period });\n            }\n\n            ChartPanelView.prototype.initialize.call(this, this.options);\n\n            this.listenTo(core, 'ui:instruments:instrument-selected', this.instrumentRowSelected);\n            this.listenTo(core, 'ui:instruments:instrument-subrow-selected', this.instrumentSubrowSelected);\n\n            this.render();\n\n            this.$chartBox = this.$el.parent();\n            this.$chartSplitterBox = $('.chart-splitter-box');\n            this.$chartContainer = this.$el.find('.chart-container');\n            this.$fullscreenNotification = this.$el.find('.chart-fullscreen-notification');\n\n            this.tradingCentral = new TradingCentralView({ el: this.$el.find('.chart-trading-central') }, this.chart);\n            this.initToolbar();\n            this.chartToolbar.show();\n            this.$buyButton = this.$el.find('.chart-panel .chart-buy tr')[0];\n            this.$sellButton = this.$el.find('.chart-panel .chart-sell tr')[0];\n\n            if (this.options.symbol) {\n                this.onInstrumentSelected(this.options.symbol);\n                delete this.options.symbol;\n            } else if (this.instrument) {\n                this.resubscribeChart();\n            }\n\n            if (device.mobile() && device.portrait() && window.innerHeight < MIN_VIEWPORT_HEIGHT) {\n                this.minimize();\n            }\n\n            this.instrumentRowSelected(getUiSelectedInstrumentCategorySymbol(store.getState()));\n\n            if (this.comparisonMode) {\n                this.initComparisonInstruments();\n                _.each(this.options.comparison, function (symbol) {\n                    var instrument = instruments.getInstrumentBySymbol(symbol);\n\n                    if (instrument && instrument.isVisible()) {\n                        _this.addComparisonInstrument(instrument.getSymbol());\n                    }\n                });\n            }\n        },\n        minimize: function minimize() {\n            this.toggleMinimize();\n        },\n        restore: function restore() {\n            this.restoreSize();\n        },\n        getLoadingContainer: function getLoadingContainer() {\n            return this.$el.parent();\n        },\n        showSearch: function showSearch() {\n            if (this.size.fullscreen) {\n                ChartPanelView.prototype.showSearch.call(this);\n            }\n        },\n        initToolbar: function initToolbar() {\n            if (!this.chartToolbar) {\n                this.chartToolbar = new ChartToolbar({\n                    embedded: true,\n                    comparisonMode: this.comparisonMode,\n                    parent: this.$el.find('.chart-header'),\n                    chartPanel: this,\n                    type: this.type,\n                    cursor: this.cursor,\n                    period: this.period,\n                    range: this.range,\n                    rateLine: this.rateLine\n                });\n            }\n        },\n\n\n        render: function render() {\n            this.template = _.template(__webpack_require__(/*! modules/chart/highcharts/chart-panel/templates/chart.panel.main.html */ \"./src/js/modules/chart/highcharts/chart-panel/templates/chart.panel.main.html\"));\n            this.$el.addClass('single');\n            ChartPanelView.prototype.render.call(this);\n        },\n\n        instrumentRowSelected: function instrumentRowSelected(symbol, model) {\n            var tradesConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {\n                openPositionsSelected: true,\n                ordersSelected: true,\n                selectedSubRowsIds: []\n            };\n\n            var instrument = instruments.getInstrumentBySymbol(symbol);\n\n            instrument && this.onInstrumentSelected(symbol, instrument, {\n                showTrades: ChartsDispatcher.getChartSettings().switchers.showTrades,\n                showAllOpenPositions: tradesConfig.openPositionsSelected,\n                showAllOrders: tradesConfig.ordersSelected,\n                visibleTradesIds: tradesConfig.selectedSubRowsIds\n            });\n        },\n        instrumentSubrowSelected: function instrumentSubrowSelected(symbol, model) {\n            var tradesConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {\n                openPositionsSelected: false,\n                ordersSelected: false,\n                selectedSubRowsIds: []\n            };\n\n            var instrument = instruments.getInstrumentBySymbol(symbol);\n\n            instrument && this.onInstrumentSelected(symbol, instrument, {\n                showTrades: ChartsDispatcher.getChartSettings().switchers.showTrades,\n                showAllOpenPositions: tradesConfig.openPositionsSelected,\n                showAllOrders: tradesConfig.ordersSelected,\n                visibleTradesIds: tradesConfig.selectedSubRowsIds\n            });\n        },\n\n        /*------------------*/\n\n        onChangePeriod: function onChangePeriod(period) {\n            ChartPanelView.prototype.onChangePeriod.apply(this, arguments);\n            this.savePeriod(period);\n        },\n\n        onChangeRange: function onChangeRange(range) {\n            ChartPanelView.prototype.onChangeRange.apply(this, arguments);\n            this.saveRange(range);\n        },\n\n        enableComparisonMode: function enableComparisonMode() {\n            var _this2 = this;\n\n            ChartPanelView.prototype.enableComparisonMode.apply(this, arguments);\n            this.saveType(ChartsConfigurator.comparisonType);\n            this.saveRange(this.range);\n\n            if (this.comparisonMode) {\n                _.each(this.loadLocalChartSettings().comparison, function (symbol) {\n                    var instrument = instruments.getInstrumentBySymbol(symbol);\n\n                    if (instrument && instrument.isVisible()) {\n                        _this2.addComparisonInstrument(instrument.getSymbol());\n                    }\n                });\n            }\n        },\n\n        disableComparisonMode: function disableComparisonMode(type, period) {\n            ChartPanelView.prototype.disableComparisonMode.apply(this, arguments);\n            this.saveType(type);\n            this.savePeriod(period);\n        },\n\n        addComparisonInstrument: function addComparisonInstrument(symbol) {\n            ChartPanelView.prototype.addComparisonInstrument.apply(this, arguments);\n\n            if (this.comparisonInstruments.contains(symbol)) {\n                this.saveComparison(symbol, true);\n            }\n        },\n\n        removeComparisonInstrument: function removeComparisonInstrument(symbol) {\n            ChartPanelView.prototype.removeComparisonInstrument.apply(this, arguments);\n            this.saveComparison(symbol, false);\n        },\n\n        onChangeType: function onChangeType(type) {\n            ChartPanelView.prototype.onChangeType.apply(this, arguments);\n            this.saveType(type);\n        },\n\n        onChangeRateLine: function onChangeRateLine(rateLine) {\n            ChartPanelView.prototype.onChangeRateLine.apply(this, arguments);\n            this.saveRateLine(rateLine);\n        },\n\n        onChangeCursor: function onChangeCursor(cursor) {\n            ChartPanelView.prototype.onChangeCursor.apply(this, arguments);\n            this.saveCursor(cursor);\n        },\n\n        saveLocalChartSettings: function saveLocalChartSettings(key, value) {\n            var chartSettings = this.loadLocalChartSettings();\n\n            chartSettings[key] = value;\n            localStorage.setItem(CHART_SETTINGS_KEY, JSON.stringify(chartSettings));\n        },\n\n        loadLocalChartSettings: function loadLocalChartSettings() {\n            var chartSettings = localStorage.getItem(CHART_SETTINGS_KEY);\n\n            return chartSettings ? JSON.parse(chartSettings) : {};\n        },\n\n        saveType: function saveType(type) {\n            this.saveLocalChartSettings('type', type);\n        },\n\n        savePeriod: function savePeriod(period) {\n            this.saveLocalChartSettings('period', period);\n        },\n\n        saveRange: function saveRange(range) {\n            this.saveLocalChartSettings('range', range);\n        },\n\n        saveRateLine: function saveRateLine(rateLine) {\n            this.saveLocalChartSettings('rateLine', rateLine);\n        },\n\n        saveCursor: function saveCursor(cursor) {\n            this.saveLocalChartSettings('cursor', cursor);\n        },\n\n        saveComparison: function saveComparison(symbol, add) {\n            var chartSettings = localStorage.getItem(CHART_SETTINGS_KEY);\n\n            chartSettings = chartSettings ? JSON.parse(chartSettings) : {};\n            var comparisonInstruments = chartSettings['comparison'] || [];\n\n            var index = comparisonInstruments.indexOf(symbol);\n\n            if (add) {\n                if (index < 0) {\n                    comparisonInstruments.push(symbol);\n                }\n            } else {\n                if (index >= 0) {\n                    comparisonInstruments.splice(index, 1);\n                }\n            }\n\n            chartSettings['comparison'] = comparisonInstruments;\n\n            localStorage.setItem(CHART_SETTINGS_KEY, JSON.stringify(chartSettings));\n        },\n\n        setSymbol: function setSymbol(symbol) {\n            this.onInstrumentSelected(symbol);\n        }\n    });\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\"), __webpack_require__(/*! jquery */ \"./src/vendors/jbone.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/chart/highcharts/chart-panel/chart.panel.main.view.js?");

/***/ }),

/***/ "./src/js/modules/chart/highcharts/chart-panel/templates/chart.panel.main.html":
/*!*************************************************************************************!*\
  !*** ./src/js/modules/chart/highcharts/chart-panel/templates/chart.panel.main.html ***!
  \*************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"chart-panel-content\\\">\\n    <div class=\\\"chart-header\\\">\\n        <div class=\\\"chart-info-wrapper fn-show-search\\\">\\n            <div class=\\\"chart-search-button\\\"></div>\\n            <div class=\\\"chart-info\\\">\\n                <div class=\\\"chart-title\\\"></div>\\n                <div class=\\\"chart-subtitle\\\"></div>\\n            </div>\\n            <div class=\\\"chart-basket\\\">\\n                <div class=\\\"chart-basket-title\\\"></div>\\n                <div class=\\\"chart-basket-info\\\"></div>\\n            </div>\\n        </div>\\n    </div>\\n    <div class=\\\"chart-instruments-comparison-panel\\\"></div>\\n    <div class=\\\"chart-container\\\"></div>\\n    <div class=\\\"minimize-mobile fn-chart-minimize mobile\\\"><i class=\\\"icon-double-arrow-down \\\"></i></div>\\n    <div class=\\\"chart-fullscreen-notification\\\">\\n        <%-__('chart.fullscreen_notification')%>\\n    </div>\\n    <div class=\\\"chart-trading-central\\\"></div>\\n    <div class=\\\"chart-search\\\">\\n        <div class=\\\"chart-search-close fn-hide-search\\\"><i class=\\\"icon-close-blue\\\"></i></div>\\n        <div class=\\\"chart-search-block-wrapper\\\"></div>\\n    </div>\\n</div>\\n<div class=\\\"chart-panel-content-minimized\\\">\\n    <i class=\\\"expand icon fn-chart-restore-size hidden-xs\\\"></i><a class=\\\"fn-chart-restore-size hidden-xs\\\"><%=__('chart.expand_chart')%></a>\\n    <div class=\\\"expand restore-size-mobile fn-chart-restore-size hidden-sm hidden-md hidden-lg\\\">\\n        <div><i class=\\\"icon-double-arrow-up\\\"></i></div>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./src/js/modules/chart/highcharts/chart-panel/templates/chart.panel.main.html?");

/***/ }),

/***/ "./src/js/modules/chart/highcharts/components/ChartHighcharts.js":
/*!***********************************************************************!*\
  !*** ./src/js/modules/chart/highcharts/components/ChartHighcharts.js ***!
  \***********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/js/modules/chart/components/ChartComponent.jsx (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_classset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-classset */ \"./node_modules/react-classset/classSet.js\");\n/* harmony import */ var react_classset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_classset__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var modules_chart_highcharts_chart_panel_chart_panel_main_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/chart/highcharts/chart-panel/chart.panel.main.view */ \"./src/js/modules/chart/highcharts/chart-panel/chart.panel.main.view.js\");\n/* harmony import */ var modules_chart_highcharts_chart_panel_chart_panel_main_view__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(modules_chart_highcharts_chart_panel_chart_panel_main_view__WEBPACK_IMPORTED_MODULE_2__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\nvar ChartHighcharts = function (_React$Component) {\n    _inherits(ChartHighcharts, _React$Component);\n\n    function ChartHighcharts() {\n        _classCallCheck(this, ChartHighcharts);\n\n        var _this = _possibleConstructorReturn(this, (ChartHighcharts.__proto__ || Object.getPrototypeOf(ChartHighcharts)).call(this));\n\n        _this.componentRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n        return _this;\n    }\n\n    _createClass(ChartHighcharts, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.$chart = new modules_chart_highcharts_chart_panel_chart_panel_main_view__WEBPACK_IMPORTED_MODULE_2___default.a({ parent: this.componentRef.current });\n            this.$chart.setSymbol(this.props.symbol);\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            if (this.$chart) {\n                this.$chart.destroy();\n            }\n        }\n    }, {\n        key: 'componentWillUpdate',\n        value: function componentWillUpdate(nextProps) {\n            if (this.$chart) {\n                this.$chart.setSymbol(nextProps.symbol);\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _props = this.props,\n                height = _props.height,\n                className = _props.className;\n\n            var classes = react_classset__WEBPACK_IMPORTED_MODULE_1___default()(_defineProperty({\n                'chart-box': true\n            }, className, !!className));\n            var styles = {};\n\n            if (height) {\n                styles = {\n                    height: height + 'px',\n                    minHeight: height + 'px',\n                    maxHeight: height + 'px'\n                };\n            }\n\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: classes, style: styles, ref: this.componentRef });\n        }\n    }]);\n\n    return ChartHighcharts;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nChartHighcharts.defaultProps = {\n    height: 0,\n    symbol: null\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartHighcharts);\n\n//# sourceURL=webpack:///./src/js/modules/chart/highcharts/components/ChartHighcharts.js?");

/***/ }),

/***/ "./src/js/modules/chart/highcharts/templates/trading.central.html":
/*!************************************************************************!*\
  !*** ./src/js/modules/chart/highcharts/templates/trading.central.html ***!
  \************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"tc-wrapper\\\">\\n    <div class=\\\"tc-info\\\">\\n        <div class=\\\"tc-header\\\"><%=formattedTitle%></div>\\n        <div><%=title%></div>\\n        <% _.each(paragraphs, function(paragraph){ %>\\n        <div><%=paragraph%></div>\\n        <% }) %>\\n        <div>(<%=formattedDate%>)</div>\\n    </div>\\n    <div class=\\\"tc-legend-full\\\">\\n        <div class=\\\"tc-header\\\"><%=__('trading.central.study.legend')%></div>\\n        <div class=\\\"tc-resistance\\\"><%= __('trading.central.lines.extended.resistance')%></div>\\n        <div class=\\\"tc-support\\\"><%= __('trading.central.lines.extended.support')%></div>\\n        <div class=\\\"tc-pivot\\\"><%= __('trading.central.lines.extended.pivot')%></div>\\n\\n        <button class=\\\"btn btn-default tc-minimize fn-resize\\\">\\n            <%=__('trading.central.button.minimize')%><i></i>\\n        </button>\\n    </div>\\n</div>\\n<div class=\\\"tc-legend-short\\\">\\n\\n</div>\\n<div class=\\\"tc-button-wrapper\\\" style=\\\"display: none\\\">\\n    <button class=\\\"btn btn-default tc-expand fn-resize\\\">\\n        <%=__('trading.central.button.expand')%><i></i>\\n    </button>\\n</div>\";\n\n//# sourceURL=webpack:///./src/js/modules/chart/highcharts/templates/trading.central.html?");

/***/ }),

/***/ "./src/js/modules/chart/highcharts/trading.central.view.js":
/*!*****************************************************************!*\
  !*** ./src/js/modules/chart/highcharts/trading.central.view.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var View = __webpack_require__(/*! view */ \"./src/js/core/core.view.js\");\n    var $ = __webpack_require__(/*! jquery */ \"./src/vendors/jbone.js\");\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var core = __webpack_require__(/*! core */ \"./src/js/core.js\");\n    var server = __webpack_require__(/*! server */ \"./src/js/modules/server/server.request.js\");\n    var Response = __webpack_require__(/*! utils/response */ \"./src/js/utils/response.js\").default;\n    var moment = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n    var stream = __webpack_require__(/*! modules/stream/stream */ \"./src/js/modules/stream/stream.js\");\n    var user = __webpack_require__(/*! modules/user/user.model */ \"./src/js/modules/user/user.model.js\");\n    var Timezone = __webpack_require__(/*! utils/timezone */ \"./src/js/utils/timezone.js\");\n    var LoadingView = __webpack_require__(/*! modules/loading/loading.view */ \"./src/js/modules/loading/loading.view.js\");\n\n    var _require = __webpack_require__(/*! utils/instrument-utils */ \"./src/js/utils/instrument-utils.js\"),\n        transformSBSymbolToSymbol = _require.transformSBSymbolToSymbol;\n\n    var ChartsDispatcher = __webpack_require__(/*! ./charts.dispatcher */ \"./src/js/modules/chart/highcharts/charts.dispatcher.js\");\n\n    var template = _.template(__webpack_require__(/*! modules/chart/highcharts/templates/trading.central.html */ \"./src/js/modules/chart/highcharts/templates/trading.central.html\"));\n\n    var UNAVAILABLE_MESSAGE = _.template('<div class=\\'tc-instrument-unavailable\\'><%=__(\\'trading.central.unavailable.description\\')%></div>');\n\n    var SECONDS_IN_DAY = 60 * 60 * 24;\n    var INTRADAY_PARAMETER = 'INTRADAY';\n    var SHORT_TERM_PARAMETER = 'ST';\n\n    var DATA_LOADING_TIMEOUT = 10000;\n\n    module.exports = View.extend({\n        events: function events() {\n            return _.extend({}, _.result(View.prototype, 'events'), {\n                'click .fn-resize': 'resize'\n            });\n        },\n\n        minimized: false,\n\n        initialize: function initialize(options, chart) {\n            this.$el.addClass('tc');\n            this.chart = chart;\n            View.prototype.initialize.apply(this, arguments);\n            this.listenTo(core, 'stream:type:TRADING_CENTRAL', this._onTCDataReceived);\n        },\n\n        render: function render() {\n            this.$el.html(template(this.data));\n            this.$el.find('.tc-resistance > span').css('color', this.data.lines[0].colors[0]);\n            this.$el.find('.tc-support > span').css('color', this.data.lines[1].colors[0]);\n            this.$el.find('.tc-pivot > span').css('color', this.data.lines[2].colors[0]);\n        },\n\n        updateChartSize: function updateChartSize() {\n            core.trigger('ui:chart:update-size', -this.height);\n            this.height = this.minimized ? 0 : parseInt(this.$el.css('height'));\n            core.trigger('ui:chart:update-size', this.height);\n        },\n\n        handleSize: function handleSize() {\n            if (this.minimized) {\n                this.$el.find('.tc-wrapper').css('display', 'none');\n                this.$el.find('.tc-button-wrapper').css('display', 'block');\n            } else {\n                this.$el.find('.tc-wrapper').css('display', 'flex');\n                this.$el.find('.tc-button-wrapper').css('display', 'none');\n            }\n\n            this.updateChartSize();\n        },\n\n        resize: function resize() {\n            this.minimized = !this.minimized;\n            this.handleSize();\n            this.chart.reflow();\n            this.chart._redrawChart();\n        },\n\n        _onTCDataReceived: function _onTCDataReceived(data) {\n            if (this.symbol !== data.symbol || this.term !== data.term) {\n                return;\n            }\n\n            this.loadingTimeout && clearTimeout(this.loadingTimeout);\n\n            this.data = _.extend({}, user.getUserCommonData().getTradingCentralSettings(), data);\n            this.data.formattedTitle = __('trading.central.preference.title') + ' ' + __('trading.central.term.' + this.data.term.toLowerCase()) + ' ' + (this.data.pivot === this.data.resistance1 ? __('trading.central.preference.decline') : this.data.pivot === this.data.support1 ? __('trading.central.preference.rise') : '');\n\n            var userTimezone = Timezone.user;\n\n            this.data.formattedDate = userTimezone.applyOffset('' + data.date + data.hour, 'YYYYMMDDHH:mm', 'DD/MM/YYYY HH:mm') + ' (' + userTimezone.GMTPostfix() + ')';\n\n            this.render();\n\n            this.updateChartSize();\n\n            this.handleSize();\n            this.chart.reflow();\n            this.chart.updateTradingCentral(this.data);\n        },\n\n        _onDataUnavailable: function _onDataUnavailable() {\n            this.loadingView && this.loadingView.destroy();\n            this.$el.html(UNAVAILABLE_MESSAGE());\n            this.chart.reflow();\n        },\n\n        isTradingCentralEnabled: function isTradingCentralEnabled() {\n            return Response.desktop() && user.getUserAccountServices().isTradingCentralAvailable() && user.getUserCommonData().isTradingCentralEnabled();\n        },\n\n        subscribe: function subscribe(_ref) {\n            var _this = this;\n\n            var instrument = _ref.instrument,\n                period = _ref.period;\n\n            if (!this.isTradingCentralEnabled()) {\n                return;\n            }\n\n            this.loadingView && this.loadingView.destroy();\n            this.loadingView = new LoadingView({\n                parent: this.$el,\n                position: 'relative',\n                translucent: '2'\n            });\n\n            this.chart.reflow();\n\n            this.loadingTimeout && clearTimeout(this.loadingTimeout);\n            this.loadingTimeout = setTimeout(this._onDataUnavailable.bind(this), DATA_LOADING_TIMEOUT);\n\n            server.unsubscribeTradingCentral(stream.getAtmosphereId()).then(function () {\n                _this.symbol = transformSBSymbolToSymbol(instrument.getSymbol());\n                _this.term = ChartsDispatcher.getPeriod(period).seconds <= SECONDS_IN_DAY ? INTRADAY_PARAMETER : SHORT_TERM_PARAMETER;\n\n                server.subscribeTradingCentral(stream.getAtmosphereId(), _this.symbol, _this.term);\n            });\n        },\n\n        unsubscribe: function unsubscribe() {\n            var _this2 = this;\n\n            this.clear();\n\n            if (!_.isUndefined(this.symbol)) {\n                server.unsubscribeTradingCentral(stream.getAtmosphereId()).then(function () {\n                    return _this2.symbol = undefined;\n                });\n            }\n        },\n\n        clear: function clear() {\n            this.$el.empty();\n            core.trigger('ui:chart:update-size', -this.height);\n            this.height = 0;\n            this.chart.reflow();\n        },\n\n        destroy: function destroy() {\n            View.prototype.destroy.call(this);\n        }\n    });\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/chart/highcharts/trading.central.view.js?");

/***/ })

}]);