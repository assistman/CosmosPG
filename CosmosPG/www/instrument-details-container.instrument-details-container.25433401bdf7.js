(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instrument-details-container"],{

/***/ "./src/js/modules/instrument-details/LazyInstrumentDetailsContainer.jsx":
/*!******************************************************************************!*\
  !*** ./src/js/modules/instrument-details/LazyInstrumentDetailsContainer.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/js/modules/dashboard/components/DashboardLazyModules.jsx (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common.types */ \"./src/js/common.types.js\");\n/* harmony import */ var components_Lazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Lazy */ \"./src/js/components/Lazy.jsx\");\n/* harmony import */ var modules_instruments_instruments_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/instruments/instruments.selectors */ \"./src/js/modules/instruments/instruments.selectors.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var store_ui_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/ui.selectors */ \"./src/js/store/ui.selectors.js\");\n/* harmony import */ var _instrument_details_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instrument-details.styles.scss */ \"./src/js/modules/instrument-details/instrument-details.styles.scss\");\n/* harmony import */ var _instrument_details_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_instrument_details_styles_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\nvar LazyInstrumentDetailsDefault = Object(components_Lazy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    return Promise.all(/*! import() | instrument-details-default */[__webpack_require__.e(\"instrument-currency-crypto~instrument-details-bonds~instrument-details-commodity~instrument-details-~ff9a0415\"), __webpack_require__.e(\"instrument-details-default\")]).then(__webpack_require__.bind(null, /*! ./LazyInstrumentDetailsDefault */ \"./src/js/modules/instrument-details/LazyInstrumentDetailsDefault.jsx\"));\n});\nvar LazyInstrumentDetailsCurrency = Object(components_Lazy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    return Promise.all(/*! import() | instrument-details-currency */[__webpack_require__.e(\"instrument-currency-crypto~instrument-details-bonds~instrument-details-commodity~instrument-details-~ff9a0415\"), __webpack_require__.e(\"instrument-details-currency\")]).then(__webpack_require__.bind(null, /*! ./LazyInstrumentDetailsCurrency */ \"./src/js/modules/instrument-details/LazyInstrumentDetailsCurrency.jsx\"));\n});\nvar LazyInstrumentDetailsShares = Object(components_Lazy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    return Promise.all(/*! import() | instrument-details-shares */[__webpack_require__.e(\"instrument-currency-crypto~instrument-details-bonds~instrument-details-commodity~instrument-details-~ff9a0415\"), __webpack_require__.e(\"instrument-details-shares\")]).then(__webpack_require__.bind(null, /*! ./LazyInstrumentDetailsShares */ \"./src/js/modules/instrument-details/LazyInstrumentDetailsShares.jsx\"));\n});\nvar LazyInstrumentDetailsBlends = Object(components_Lazy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    return __webpack_require__.e(/*! import() | instrument-details-blends */ \"instrument-details-blends\").then(__webpack_require__.bind(null, /*! ./LazyInstrumentDetailsBlends */ \"./src/js/modules/instrument-details/LazyInstrumentDetailsBlends.jsx\"));\n});\nvar LazyInstrumentDetailsCurrencyCrypto = Object(components_Lazy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    return Promise.all(/*! import() | instrument-currency-crypto */[__webpack_require__.e(\"instrument-currency-crypto~instrument-details-bonds~instrument-details-commodity~instrument-details-~ff9a0415\"), __webpack_require__.e(\"instrument-currency-crypto\")]).then(__webpack_require__.bind(null, /*! ./LazyInstrumentDetailsCurrencyCrypto */ \"./src/js/modules/instrument-details/LazyInstrumentDetailsCurrencyCrypto.jsx\"));\n});\nvar LazyInstrumentDetailsBonds = Object(components_Lazy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    return Promise.all(/*! import() | instrument-details-bonds */[__webpack_require__.e(\"instrument-currency-crypto~instrument-details-bonds~instrument-details-commodity~instrument-details-~ff9a0415\"), __webpack_require__.e(\"instrument-details-bonds\")]).then(__webpack_require__.bind(null, /*! ./LazyInstrumentDetailsBonds */ \"./src/js/modules/instrument-details/LazyInstrumentDetailsBonds.jsx\"));\n});\nvar LazyInstrumentDetailsCommodity = Object(components_Lazy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    return Promise.all(/*! import() | instrument-details-commodity */[__webpack_require__.e(\"instrument-currency-crypto~instrument-details-bonds~instrument-details-commodity~instrument-details-~ff9a0415\"), __webpack_require__.e(\"instrument-details-commodity\")]).then(__webpack_require__.bind(null, /*! ./LazyInstrumentDetailsCommodity */ \"./src/js/modules/instrument-details/LazyInstrumentDetailsCommodity.jsx\"));\n});\nvar LazyInstrumentDetailsEtfs = Object(components_Lazy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    return Promise.all(/*! import() | instrument-details-etfs */[__webpack_require__.e(\"instrument-currency-crypto~instrument-details-bonds~instrument-details-commodity~instrument-details-~ff9a0415\"), __webpack_require__.e(\"instrument-details-etfs\")]).then(__webpack_require__.bind(null, /*! ./LazyInstrumentDetailsEtfs */ \"./src/js/modules/instrument-details/LazyInstrumentDetailsEtfs.jsx\"));\n});\nvar LazyInstrumentDetailsIndices = Object(components_Lazy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n    return Promise.all(/*! import() | instrument-indices */[__webpack_require__.e(\"instrument-currency-crypto~instrument-details-bonds~instrument-details-commodity~instrument-details-~ff9a0415\"), __webpack_require__.e(\"instrument-indices\")]).then(__webpack_require__.bind(null, /*! ./LazyInstrumentDetailsIndices */ \"./src/js/modules/instrument-details/LazyInstrumentDetailsIndices.jsx\"));\n});\n\nfunction mapStateToProps(state) {\n    var symbol = Object(store_ui_selectors__WEBPACK_IMPORTED_MODULE_5__[\"getInstrumentDetailsSymbol\"])(state);\n    var category = Object(modules_instruments_instruments_selectors__WEBPACK_IMPORTED_MODULE_2__[\"getInstrumentCategory\"])(state, symbol);\n\n    return {\n        category: category,\n        symbol: symbol\n    };\n}\n\nvar InstrumentDetailsContainer = function InstrumentDetailsContainer(_ref) {\n    var category = _ref.category,\n        className = _ref.className,\n        symbol = _ref.symbol;\n\n    category = category.toLowerCase();\n\n    if (category.startsWith(common_types__WEBPACK_IMPORTED_MODULE_0__[\"INSTRUMENT_CATEGORIES\"].CRYPTO)) {\n        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LazyInstrumentDetailsCurrencyCrypto, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(common_types__WEBPACK_IMPORTED_MODULE_0__[\"INSTRUMENT_CATEGORIES\"].CURRENCY)) {\n        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LazyInstrumentDetailsCurrency, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(common_types__WEBPACK_IMPORTED_MODULE_0__[\"INSTRUMENT_CATEGORIES\"].SHARES)) {\n        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LazyInstrumentDetailsShares, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(common_types__WEBPACK_IMPORTED_MODULE_0__[\"INSTRUMENT_CATEGORIES\"].BLENDS)) {\n        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LazyInstrumentDetailsBlends, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(common_types__WEBPACK_IMPORTED_MODULE_0__[\"INSTRUMENT_CATEGORIES\"].BONDS)) {\n        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LazyInstrumentDetailsBonds, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(common_types__WEBPACK_IMPORTED_MODULE_0__[\"INSTRUMENT_CATEGORIES\"].COMMODITY)) {\n        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LazyInstrumentDetailsCommodity, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(common_types__WEBPACK_IMPORTED_MODULE_0__[\"INSTRUMENT_CATEGORIES\"].ETFS)) {\n        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LazyInstrumentDetailsEtfs, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(common_types__WEBPACK_IMPORTED_MODULE_0__[\"INSTRUMENT_CATEGORIES\"].INDEX)) {\n        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LazyInstrumentDetailsIndices, { className: className, symbol: symbol });\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LazyInstrumentDetailsDefault, { className: className, symbol: symbol });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps)(InstrumentDetailsContainer));\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/LazyInstrumentDetailsContainer.jsx?");

/***/ })

}]);