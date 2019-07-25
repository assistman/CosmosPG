webpackJsonp([88],{

/***/ 2682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Responsive__ = __webpack_require__(60);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_Lazy__ = __webpack_require__(142);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analystsRecommendations__ = __webpack_require__(298);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_settings_actions__ = __webpack_require__(300);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\nvar InstrumentDetailsBlendsDesktop = Object(__WEBPACK_IMPORTED_MODULE_2_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(45).then(__webpack_require__.bind(null, 2836));\n});\nvar InstrumentDetailsBlendsPortalMobile = Object(__WEBPACK_IMPORTED_MODULE_2_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(44).then(__webpack_require__.bind(null, 2837));\n});\nvar InstrumentDetailsBlendsTablet = Object(__WEBPACK_IMPORTED_MODULE_2_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(43).then(__webpack_require__.bind(null, 2838));\n});\n\nfunction mapDispatchToProps(dispatch) {\n    return {\n        loadAnalyticsRecommendations: function loadAnalyticsRecommendations() {\n            return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__analystsRecommendations__[\"u\" /* loadAnalyticsRecommendations */])());\n        },\n        checkIfAnalystsEnabled: function checkIfAnalystsEnabled() {\n            return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5_store_settings_actions__[\"checkAnalystsEnabled\"])());\n        }\n    };\n}\n\nvar LazyInstrumentDetailsBlends = function (_React$Component) {\n    _inherits(LazyInstrumentDetailsBlends, _React$Component);\n\n    function LazyInstrumentDetailsBlends() {\n        _classCallCheck(this, LazyInstrumentDetailsBlends);\n\n        return _possibleConstructorReturn(this, (LazyInstrumentDetailsBlends.__proto__ || Object.getPrototypeOf(LazyInstrumentDetailsBlends)).apply(this, arguments));\n    }\n\n    _createClass(LazyInstrumentDetailsBlends, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.checkIfAnalystsEnabled();\n            this.props.loadAnalyticsRecommendations();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _props = this.props,\n                className = _props.className,\n                symbol = _props.symbol;\n\n\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { className: 'pane pane__xfluid pane__yfluid' },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_1_components_Responsive__[\"default\"],\n                    { desktop: true },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InstrumentDetailsBlendsDesktop, { className: className, symbol: symbol })\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_1_components_Responsive__[\"default\"],\n                    { tablet: true },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InstrumentDetailsBlendsTablet, { className: className, symbol: symbol })\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_1_components_Responsive__[\"default\"],\n                    { mobile: true },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InstrumentDetailsBlendsPortalMobile, { className: className, symbol: symbol })\n                )\n            );\n        }\n    }]);\n\n    return LazyInstrumentDetailsBlends;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__[\"connect\"])(null, mapDispatchToProps)(LazyInstrumentDetailsBlends));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/instrument-details/LazyInstrumentDetailsBlends.jsx\n// module id = 2682\n// module chunks = 88\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/LazyInstrumentDetailsBlends.jsx?");

/***/ })

});