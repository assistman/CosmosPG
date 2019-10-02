(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["key-statistics-blends"],{

/***/ "./src/js/modules/instrument-details/components/key-statistics/KeyStatisticsBlends.jsx":
/*!*********************************************************************************************!*\
  !*** ./src/js/modules/instrument-details/components/key-statistics/KeyStatisticsBlends.jsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/js/modules/instrument-details/components/instrument-details-tabs/KeyStatistics.jsx (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modules_instruments_components_IsTradersTrendsAvailable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/instruments/components/IsTradersTrendsAvailable */ \"./src/js/modules/instruments/components/IsTradersTrendsAvailable.jsx\");\n/* harmony import */ var modules_instruments_components_TradersTrendsContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/instruments/components/TradersTrendsContent */ \"./src/js/modules/instruments/components/TradersTrendsContent.jsx\");\n/* harmony import */ var modules_instruments_components_TradingHours__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/instruments/components/TradingHours */ \"./src/js/modules/instruments/components/TradingHours.jsx\");\n/* harmony import */ var _AnalysisAndOpinions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AnalysisAndOpinions */ \"./src/js/modules/instrument-details/components/AnalysisAndOpinions.jsx\");\n/* harmony import */ var _StatisticsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StatisticsList */ \"./src/js/modules/instrument-details/components/StatisticsList.jsx\");\n/* harmony import */ var _KeyStatistics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KeyStatistics.service */ \"./src/js/modules/instrument-details/components/key-statistics/KeyStatistics.service.jsx\");\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ \"./src/js/components/index.js\");\n/* harmony import */ var basket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! basket */ \"./src/js/modules/basket/index.js\");\n/* harmony import */ var modules_instruments_components_IsAllowOrdersOTHLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! modules/instruments/components/IsAllowOrdersOTHLabel */ \"./src/js/modules/instruments/components/IsAllowOrdersOTHLabel.jsx\");\n/* harmony import */ var modules_instruments_components_InstrumentCurrency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! modules/instruments/components/InstrumentCurrency */ \"./src/js/modules/instruments/components/InstrumentCurrency.jsx\");\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar getKeyStatisticsInstrumentDetails = function getKeyStatisticsInstrumentDetails(symbol) {\n    return [[].concat(_toConsumableArray(Object(_KeyStatistics_service__WEBPACK_IMPORTED_MODULE_6__[\"getKeyStatisticsInstrumentDetailsDefault\"])(symbol)))];\n};\n\nvar getKeyStatisticsTradingConditions = function getKeyStatisticsTradingConditions(symbol) {\n    return [[].concat(_toConsumableArray(Object(_KeyStatistics_service__WEBPACK_IMPORTED_MODULE_6__[\"getKeyStatisticsTradingConditionsOvernightInfoDefault\"])(symbol))), [].concat(_toConsumableArray(Object(_KeyStatistics_service__WEBPACK_IMPORTED_MODULE_6__[\"getKeyStatisticsTradingConditionsLeverageInfoDefault\"])(symbol)))];\n};\n\nvar KeyStatisticsBlends = function KeyStatisticsBlends(_ref) {\n    var symbol = _ref.symbol;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'key-statistics' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'pane pane__fluid' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'key-statistics__instrument-details' },\n                getKeyStatisticsInstrumentDetails(symbol).map(function (listOfFields, colIndex) {\n                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatisticsList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { key: 'keyStatisticsCol' + colIndex, listOfFields: listOfFields });\n                }),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    basket__WEBPACK_IMPORTED_MODULE_8__[\"IsInstrumentBasketAvailable\"],\n                    { symbol: symbol },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        components__WEBPACK_IMPORTED_MODULE_7__[\"InformationBlock\"],\n                        {\n                            title: __('baskets.title'),\n                            className: 'key-statistics__blends',\n                            contentClassName: 'key-statistics__block__content'\n                        },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(basket__WEBPACK_IMPORTED_MODULE_8__[\"InstrumentBasket\"], { symbol: symbol })\n                    )\n                )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                _AnalysisAndOpinions__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                { symbol: symbol },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    modules_instruments_components_IsTradersTrendsAvailable__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    { symbol: symbol },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        components__WEBPACK_IMPORTED_MODULE_7__[\"InformationBlock\"],\n                        {\n                            title: __('sentiment.title'),\n                            tooltip: __('key.statistics.analysis.traders.trend.tooltip'),\n                            className: 'key-statistics__block key-statistics__block--sm-full-width',\n                            contentClassName: 'key-statistics__block__content key-statistics__block__content--center'\n                        },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_instruments_components_TradersTrendsContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { symbol: symbol })\n                    )\n                )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'span',\n                    { className: 'statistics-title' },\n                    __('instrument_info.trading_conditions')\n                )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'trading-conditions' },\n                getKeyStatisticsTradingConditions(symbol).map(function (listOfFields, colIndex) {\n                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatisticsList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { key: 'keyStatisticsCol' + colIndex, listOfFields: listOfFields });\n                }),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    { className: 'statistics-column' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'div',\n                        { className: 'statistics-row' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'span',\n                            null,\n                            __('instrument_info.instrument_currency')\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                            'div',\n                            null,\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_instruments_components_InstrumentCurrency__WEBPACK_IMPORTED_MODULE_10__[\"default\"], { symbol: symbol })\n                        )\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_instruments_components_TradingHours__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { className: 'statistics-row', symbol: symbol }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modules_instruments_components_IsAllowOrdersOTHLabel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], { className: 'statistics-row', symbol: symbol })\n                )\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (KeyStatisticsBlends);\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/components/key-statistics/KeyStatisticsBlends.jsx?");

/***/ })

}]);