webpackJsonp([93],{

/***/ 1981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_instruments_components_InstrumentDetailsImage__ = __webpack_require__(1948);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_instruments_components_Name__ = __webpack_require__(1908);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_modules_instruments_components_Description__ = __webpack_require__(1921);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_modules_instruments_components_Change__ = __webpack_require__(1949);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_modules_instruments_components_PercentChange__ = __webpack_require__(1913);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_modules_instruments_components_AvailabilityLabel__ = __webpack_require__(1950);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_modules_instruments_components_Ask__ = __webpack_require__(1911);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_modules_instruments_components_InstrumentActionsWrapper__ = __webpack_require__(1910);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_modules_instruments_components_FavoriteInstrumentState__ = __webpack_require__(1912);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_modules_instrument_details_components_InstrumentDetailsButtonBuy__ = __webpack_require__(1951);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_modules_instrument_details_components_InstrumentDetailsButtonSell__ = __webpack_require__(1952);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_modules_price_alerts_components__ = __webpack_require__(1953);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__InstrumentLastQuoteTime__ = __webpack_require__(1954);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_autobind__ = __webpack_require__(34);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_autobind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_autobind__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar InstrumentDetailsHeader = function (_InstrumentActionsWra) {\n    _inherits(InstrumentDetailsHeader, _InstrumentActionsWra);\n\n    function InstrumentDetailsHeader(props) {\n        _classCallCheck(this, InstrumentDetailsHeader);\n\n        var _this = _possibleConstructorReturn(this, (InstrumentDetailsHeader.__proto__ || Object.getPrototypeOf(InstrumentDetailsHeader)).call(this, props));\n\n        __WEBPACK_IMPORTED_MODULE_14_react_autobind___default()(_this);\n        return _this;\n    }\n\n    _createClass(InstrumentDetailsHeader, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var symbol = this.props.symbol;\n\n\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { className: 'instrument-details__header pane pane__xfluid pane__row' },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'div',\n                    { className: 'instrument-details__header__left pane pane__column' },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { className: 'pane pane__fluid pane__column' },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            { className: 'pane pane__row pane--bottom' },\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_modules_instruments_components_InstrumentDetailsImage__[\"a\" /* default */], { symbol: symbol }),\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                'div',\n                                { className: 'pane pane__column' },\n                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                    'div',\n                                    { className: 'instrument-details__title' },\n                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_modules_instruments_components_Name__[\"a\" /* default */], { as: 'span', symbol: symbol })\n                                ),\n                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                    'div',\n                                    { className: 'instrument-details__description' },\n                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_modules_instruments_components_Description__[\"a\" /* default */], { as: 'span', symbol: symbol })\n                                )\n                            ),\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_modules_instruments_components_Ask__[\"a\" /* default */], { as: 'span', className: 'instrument-details__price', symbol: symbol }),\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                'span',\n                                { className: 'instrument-details__change' },\n                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_modules_instruments_components_Change__[\"a\" /* default */], { symbol: symbol, showDir: true }),\n                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_modules_instruments_components_PercentChange__[\"a\" /* default */], { symbol: symbol, showDir: true })\n                            )\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            { className: 'pane pane__row' },\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_modules_instruments_components_AvailabilityLabel__[\"a\" /* default */], { symbol: symbol }),\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__InstrumentLastQuoteTime__[\"a\" /* default */], {\n                                className: 'instrument-details__time',\n                                pre: '\\xA0\\xA0|\\xA0\\xA0' + __('instrument_info.as_of') + '\\xA0',\n                                post: '',\n                                symbol: symbol, format: 'MMMM DD YYYY HH:mm'\n                            })\n                        )\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'div',\n                    { className: 'instrument-details__header__right pane pane__column' },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { className: 'instrument-details__actions' },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            { className: 'instrument-details__actions__small' },\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_modules_instruments_components_FavoriteInstrumentState__[\"a\" /* default */], {\n                                onClick: function onClick(event) {\n                                    return _this2.toggleFavorite(event, symbol);\n                                },\n                                symbol: symbol,\n                                as: 'div',\n                                className: 'large-s-px',\n                                yes: 'icon-star-filled',\n                                no: 'icon-star'\n                            }),\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                __WEBPACK_IMPORTED_MODULE_12_modules_price_alerts_components__[\"a\" /* IsPriceAlertsEnabled */],\n                                { as: null },\n                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_modules_price_alerts_components__[\"b\" /* PriceAlertInstrumentState */], {\n                                    onClick: this.openPriceAlerts,\n                                    symbol: symbol,\n                                    as: 'div',\n                                    className: 'medium-b-px',\n                                    yes: 'icon-bell-filled',\n                                    no: 'icon-bell'\n                                })\n                            )\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_modules_instrument_details_components_InstrumentDetailsButtonSell__[\"a\" /* default */], {\n                            symbol: symbol,\n                            onClick: function onClick(event) {\n                                return _this2.sell(event, symbol);\n                            },\n                            className: 'price-button_labeled--big'\n                        }),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_modules_instrument_details_components_InstrumentDetailsButtonBuy__[\"a\" /* default */], {\n                            symbol: symbol,\n                            onClick: function onClick(event) {\n                                return _this2.buy(event, symbol);\n                            },\n                            className: 'price-button_labeled--big'\n                        })\n                    )\n                )\n            );\n        }\n    }]);\n\n    return InstrumentDetailsHeader;\n}(__WEBPACK_IMPORTED_MODULE_8_modules_instruments_components_InstrumentActionsWrapper__[\"a\" /* default */]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (InstrumentDetailsHeader);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/instrument-details/components/InstrumentDetailsHeaderDesktop.jsx\n// module id = 1981\n// module chunks = 55 92 93 94 95 96 97 98\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/components/InstrumentDetailsHeaderDesktop.jsx?");

/***/ }),

/***/ 2791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InstrumentDetailsHeaderDesktop__ = __webpack_require__(1981);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InstrumentDetailsEtfsTabs__ = __webpack_require__(2588);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_classset__ = __webpack_require__(15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_classset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_classset__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar InstrumentDetailsEtfsDesktop = function (_React$Component) {\n    _inherits(InstrumentDetailsEtfsDesktop, _React$Component);\n\n    function InstrumentDetailsEtfsDesktop() {\n        _classCallCheck(this, InstrumentDetailsEtfsDesktop);\n\n        return _possibleConstructorReturn(this, (InstrumentDetailsEtfsDesktop.__proto__ || Object.getPrototypeOf(InstrumentDetailsEtfsDesktop)).apply(this, arguments));\n    }\n\n    _createClass(InstrumentDetailsEtfsDesktop, [{\n        key: 'render',\n        value: function render() {\n            var _props = this.props,\n                className = _props.className,\n                symbol = _props.symbol;\n\n            var wrapperClassName = __WEBPACK_IMPORTED_MODULE_3_react_classset___default()(_defineProperty({\n                'instrument-details': true,\n                'pane': true,\n                'pane__xfluid': true,\n                'pane__yfluid': true\n            }, className, !!className));\n\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { className: wrapperClassName },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__InstrumentDetailsHeaderDesktop__[\"a\" /* default */], { symbol: symbol }),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__InstrumentDetailsEtfsTabs__[\"a\" /* default */], { symbol: symbol })\n            );\n        }\n    }]);\n\n    return InstrumentDetailsEtfsDesktop;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstrumentDetailsEtfsDesktop);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/instrument-details/components/instrumentDetailsEtfs/InstrumentDetailsEtfsDesktop.jsx\n// module id = 2791\n// module chunks = 93\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/components/instrumentDetailsEtfs/InstrumentDetailsEtfsDesktop.jsx?");

/***/ })

});