(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["key-statistics-currency-crypto"],{

/***/ "./src/js/modules/instrument-details/components/key-statistics/KeyStatisticsCurrencyCrypto.jsx":
/*!*****************************************************************************************************************!*\
  !*** ./src/js/modules/instrument-details/components/key-statistics/KeyStatisticsCurrencyCrypto.jsx + 1 modules ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/components/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/events-and-trade/components/UpcomingEventsAndTrade.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instrument-details/components/AnalysisAndOpinions.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instrument-details/components/StatisticsList.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instrument-details/components/key-statistics/KeyStatistics.service.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/DayRangeBar.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/InstrumentCurrency.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/IsAllowOrdersOTHLabel.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/IsEventsAndTradeEnabled.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/IsNewsSentimentAvailable.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/IsTradersTrendsAvailable.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/LatestRates.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/MonthRangeBar.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/NewsContent.jsx (<- Module uses injected variables (_)) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/ThreeMonthsRangeBar.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/TradersTrendsContent.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/TradingHours.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/components/YearRangeBar.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/modules/instruments/instruments.actions.js (<- Module is referenced from these modules with unsupported syntax: ./src/js/classes/instrument.collection.js (referenced with cjs require), ./src/js/store/rollovers.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-classset/classSet.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-redux/es/index.js (<- Module is referenced from these modules with unsupported syntax: ./src/js/modules/account-settings/tabs/tab.localization.js (referenced with cjs require), ./src/js/modules/account-settings/tabs/tab.trading.settings.js (referenced with cjs require), ./src/js/modules/account-settings/tabs/tab.view.settings.js (referenced with cjs require), ./src/js/modules/accountinfo/advanced.account-info.view.js (referenced with cjs require), ./src/js/modules/app/app.view.js (referenced with cjs require), ./src/js/modules/education/education.view.js (referenced with cjs require), ./src/js/modules/events-bus/events.bus.js (referenced with cjs require), ./src/js/modules/header/header.view.js (referenced with cjs require), ./src/js/modules/instrument-details/tabs/tab.positions.orders.js (referenced with cjs require), ./src/js/modules/instruments-tree/instruments.tree.popup.view.js (referenced with cjs require), ./src/js/modules/mobile-navigation-menu/mobile.navigation.menu.view.js (referenced with cjs require), ./src/js/modules/open-positions/instrument.positions.close.all.view.js (referenced with cjs require), ./src/js/modules/orders/instrument.orders.cancel.all.view.js (referenced with cjs require), ./src/js/modules/price-alerts/priceAlerts.view.js (referenced with cjs require), multi underscore backbone highcharts/highstock highcharts/modules/exporting highcharts/modules/offline-exporting flatpickr moment react react-dom redux redux-thunk react-redux axios clone interact.js merge device numbro popper.js tooltip.js react-infinite-scroller react-custom-scrollbars (referenced with single entry)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(\"./node_modules/react/index.js\");\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules\nvar es = __webpack_require__(\"./node_modules/react-redux/es/index.js\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/TradingHours.jsx\nvar TradingHours = __webpack_require__(\"./src/js/modules/instruments/components/TradingHours.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/LatestRates.jsx\nvar LatestRates = __webpack_require__(\"./src/js/modules/instruments/components/LatestRates.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/InstrumentCurrency.jsx\nvar InstrumentCurrency = __webpack_require__(\"./src/js/modules/instruments/components/InstrumentCurrency.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/MonthRangeBar.jsx\nvar MonthRangeBar = __webpack_require__(\"./src/js/modules/instruments/components/MonthRangeBar.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/ThreeMonthsRangeBar.jsx\nvar ThreeMonthsRangeBar = __webpack_require__(\"./src/js/modules/instruments/components/ThreeMonthsRangeBar.jsx\");\n\n// EXTERNAL MODULE: ./node_modules/react-classset/classSet.js\nvar classSet = __webpack_require__(\"./node_modules/react-classset/classSet.js\");\nvar classSet_default = /*#__PURE__*/__webpack_require__.n(classSet);\n\n// CONCATENATED MODULE: ./src/js/modules/instruments/components/SentimentContainer.jsx\n\n\n\nvar SentimentContainer_SentimentContainer = function SentimentContainer(_ref) {\n    var sentimentIconClass = _ref.sentimentIconClass,\n        sentimentTitleKey = _ref.sentimentTitleKey,\n        wideContainerMobile = _ref.wideContainerMobile,\n        children = _ref.children;\n\n\n    return react_default.a.createElement(\n        'div',\n        { className: classSet_default()({ 'sentiment-container statistics-block': true, 'wide-container-mobile': !!wideContainerMobile }) },\n        react_default.a.createElement(\n            'div',\n            { className: 'title' },\n            react_default.a.createElement(\n                'span',\n                null,\n                react_default.a.createElement('i', { className: sentimentIconClass })\n            ),\n            __(sentimentTitleKey)\n        ),\n        children\n    );\n};\n\n/* harmony default export */ var components_SentimentContainer = (SentimentContainer_SentimentContainer);\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/IsTradersTrendsAvailable.jsx\nvar IsTradersTrendsAvailable = __webpack_require__(\"./src/js/modules/instruments/components/IsTradersTrendsAvailable.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/TradersTrendsContent.jsx\nvar TradersTrendsContent = __webpack_require__(\"./src/js/modules/instruments/components/TradersTrendsContent.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/DayRangeBar.jsx\nvar DayRangeBar = __webpack_require__(\"./src/js/modules/instruments/components/DayRangeBar.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/YearRangeBar.jsx\nvar YearRangeBar = __webpack_require__(\"./src/js/modules/instruments/components/YearRangeBar.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/IsEventsAndTradeEnabled.jsx\nvar IsEventsAndTradeEnabled = __webpack_require__(\"./src/js/modules/instruments/components/IsEventsAndTradeEnabled.jsx\");\n\n// EXTERNAL MODULE: ./src/js/components/index.js + 7 modules\nvar components = __webpack_require__(\"./src/js/components/index.js\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/IsNewsSentimentAvailable.jsx + 1 modules\nvar IsNewsSentimentAvailable = __webpack_require__(\"./src/js/modules/instruments/components/IsNewsSentimentAvailable.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/NewsContent.jsx\nvar NewsContent = __webpack_require__(\"./src/js/modules/instruments/components/NewsContent.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instrument-details/components/AnalysisAndOpinions.jsx\nvar AnalysisAndOpinions = __webpack_require__(\"./src/js/modules/instrument-details/components/AnalysisAndOpinions.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/events-and-trade/components/UpcomingEventsAndTrade.jsx + 1 modules\nvar UpcomingEventsAndTrade = __webpack_require__(\"./src/js/modules/events-and-trade/components/UpcomingEventsAndTrade.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instrument-details/components/StatisticsList.jsx\nvar StatisticsList = __webpack_require__(\"./src/js/modules/instrument-details/components/StatisticsList.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instrument-details/components/key-statistics/KeyStatistics.service.jsx + 14 modules\nvar KeyStatistics_service = __webpack_require__(\"./src/js/modules/instrument-details/components/key-statistics/KeyStatistics.service.jsx\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/instruments.actions.js + 1 modules\nvar instruments_actions = __webpack_require__(\"./src/js/modules/instruments/instruments.actions.js\");\n\n// EXTERNAL MODULE: ./src/js/modules/instruments/components/IsAllowOrdersOTHLabel.jsx\nvar IsAllowOrdersOTHLabel = __webpack_require__(\"./src/js/modules/instruments/components/IsAllowOrdersOTHLabel.jsx\");\n\n// CONCATENATED MODULE: ./src/js/modules/instrument-details/components/key-statistics/KeyStatisticsCurrencyCrypto.jsx\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar KeyStatisticsCurrencyCrypto_mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        loadCryptoInfo: function loadCryptoInfo() {\n            return dispatch(Object(instruments_actions[\"loadCryptoInfo\"])());\n        }\n    };\n};\n\nvar KeyStatisticsCurrencyCrypto_getKeyStatisticsInstrumentDetails = function getKeyStatisticsInstrumentDetails(symbol) {\n    return [[].concat(_toConsumableArray(Object(KeyStatistics_service[\"getKeyStatisticsInstrumentDetailsCrypto\"])(symbol))), [{\n        title: __('instrument_info.day_range'),\n        view: react_default.a.createElement(\n            'div',\n            null,\n            react_default.a.createElement(DayRangeBar[\"default\"], { symbol: symbol })\n        )\n    }, {\n        title: __('instrument_info.52_week_range'),\n        view: react_default.a.createElement(\n            'div',\n            null,\n            react_default.a.createElement(YearRangeBar[\"default\"], { symbol: symbol })\n        )\n    }, {\n        title: __('instrument_info.1_month_range'),\n        view: react_default.a.createElement(MonthRangeBar[\"default\"], { symbol: symbol })\n    }, {\n        title: __('instrument_info.3_months_range'),\n        view: react_default.a.createElement(ThreeMonthsRangeBar[\"default\"], { symbol: symbol })\n    }]];\n};\n\nvar KeyStatisticsCurrencyCrypto_getKeyStatisticsTradingConditions = function getKeyStatisticsTradingConditions(symbol) {\n    return [[].concat(_toConsumableArray(Object(KeyStatistics_service[\"getKeyStatisticsTradingConditionsOvernightInfoDefault\"])(symbol))), [].concat(_toConsumableArray(Object(KeyStatistics_service[\"getKeyStatisticsTradingConditionsLeverageInfoDefault\"])(symbol)))];\n};\n\nvar KeyStatisticsCurrencyCrypto_KeyStatisticsCurrencyCrypto = function (_React$Component) {\n    _inherits(KeyStatisticsCurrencyCrypto, _React$Component);\n\n    function KeyStatisticsCurrencyCrypto() {\n        _classCallCheck(this, KeyStatisticsCurrencyCrypto);\n\n        return _possibleConstructorReturn(this, (KeyStatisticsCurrencyCrypto.__proto__ || Object.getPrototypeOf(KeyStatisticsCurrencyCrypto)).apply(this, arguments));\n    }\n\n    _createClass(KeyStatisticsCurrencyCrypto, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            this.props.loadCryptoInfo();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var symbol = this.props.symbol;\n\n\n            return react_default.a.createElement(\n                'div',\n                { className: 'key-statistics' },\n                react_default.a.createElement(\n                    'div',\n                    { className: 'pane pane__fluid' },\n                    react_default.a.createElement(\n                        'div',\n                        null,\n                        KeyStatisticsCurrencyCrypto_getKeyStatisticsInstrumentDetails(symbol).map(function (listOfFields, colIndex) {\n                            return react_default.a.createElement(StatisticsList[\"default\"], { key: 'keyStatisticsCol' + colIndex, listOfFields: listOfFields });\n                        }),\n                        react_default.a.createElement(\n                            'div',\n                            { className: 'statistics-column' },\n                            react_default.a.createElement(LatestRates[\"default\"], { symbol: symbol })\n                        )\n                    ),\n                    react_default.a.createElement(\n                        AnalysisAndOpinions[\"default\"],\n                        { symbol: symbol },\n                        react_default.a.createElement(\n                            IsTradersTrendsAvailable[\"default\"],\n                            { symbol: symbol },\n                            react_default.a.createElement(\n                                components[\"InformationBlock\"],\n                                {\n                                    title: __('sentiment.title'),\n                                    tooltip: __('key.statistics.analysis.traders.trend.tooltip'),\n                                    className: 'key-statistics__block key-statistics__block--sm-full-width',\n                                    contentClassName: 'key-statistics__block__content key-statistics__block__content--center'\n                                },\n                                react_default.a.createElement(TradersTrendsContent[\"default\"], { symbol: symbol })\n                            )\n                        ),\n                        react_default.a.createElement(\n                            IsEventsAndTradeEnabled[\"default\"],\n                            { symbol: symbol },\n                            react_default.a.createElement(UpcomingEventsAndTrade[\"default\"], { className: 'statistics-block', symbol: symbol })\n                        ),\n                        react_default.a.createElement(\n                            IsNewsSentimentAvailable[\"default\"],\n                            { symbol: symbol },\n                            react_default.a.createElement(NewsContent[\"default\"], { symbol: symbol })\n                        )\n                    ),\n                    react_default.a.createElement(\n                        'div',\n                        null,\n                        react_default.a.createElement(\n                            'span',\n                            { className: 'statistics-title' },\n                            __('instrument_info.trading_conditions')\n                        )\n                    ),\n                    react_default.a.createElement(\n                        'div',\n                        { className: 'trading-conditions' },\n                        KeyStatisticsCurrencyCrypto_getKeyStatisticsTradingConditions(symbol).map(function (listOfFields, colIndex) {\n                            return react_default.a.createElement(StatisticsList[\"default\"], { key: 'keyStatisticsCol' + colIndex, listOfFields: listOfFields });\n                        }),\n                        react_default.a.createElement(\n                            'div',\n                            { className: 'statistics-column' },\n                            react_default.a.createElement(\n                                'div',\n                                { className: 'statistics-row' },\n                                react_default.a.createElement(\n                                    'span',\n                                    null,\n                                    __('instrument_info.instrument_currency')\n                                ),\n                                react_default.a.createElement(\n                                    'div',\n                                    null,\n                                    react_default.a.createElement(InstrumentCurrency[\"default\"], { symbol: symbol })\n                                )\n                            ),\n                            react_default.a.createElement(TradingHours[\"default\"], { className: 'statistics-row', symbol: symbol }),\n                            react_default.a.createElement(IsAllowOrdersOTHLabel[\"default\"], { className: 'statistics-row', symbol: symbol })\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return KeyStatisticsCurrencyCrypto;\n}(react_default.a.Component);\n\n/* harmony default export */ var key_statistics_KeyStatisticsCurrencyCrypto = __webpack_exports__[\"default\"] = (Object(es[\"connect\"])(null, KeyStatisticsCurrencyCrypto_mapDispatchToProps)(KeyStatisticsCurrencyCrypto_KeyStatisticsCurrencyCrypto));\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/components/key-statistics/KeyStatisticsCurrencyCrypto.jsx_+_1_modules?");

/***/ })

}]);