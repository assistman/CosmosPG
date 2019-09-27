(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multi-charts-component"],{

/***/ "./src/js/modules/chart/multi-charts/components/MultiChartsComponent.jsx":
/*!*******************************************************************************!*\
  !*** ./src/js/modules/chart/multi-charts/components/MultiChartsComponent.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/js/modules/dashboard/components/DashboardLazyModules.jsx (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-autobind */ \"./node_modules/react-autobind/index.js\");\n/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modules_stream_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/stream/stream */ \"./src/js/modules/stream/stream.js\");\n/* harmony import */ var modules_stream_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(modules_stream_stream__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Lazy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Lazy */ \"./src/js/components/Lazy.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/settings */ \"./src/js/store/settings.js\");\n/* harmony import */ var store_settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_settings__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var modules_user_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/user/user.model */ \"./src/js/modules/user/user.model.js\");\n/* harmony import */ var modules_user_user_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(modules_user_user_model__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var modules_account_settings_tabs_platform_features_consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modules/account-settings/tabs/platform-features.consts */ \"./src/js/modules/account-settings/tabs/platform-features.consts.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\nvar MultiChartsHighcharts = Object(components_Lazy__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(8), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! modules/chart/multi-charts/components/MultiChartsHighcharts */ \"./src/js/modules/chart/multi-charts/components/MultiChartsHighcharts.jsx\"));\n});\nvar MultiChartsTradingView = Object(components_Lazy__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function () {\n    return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(9), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! modules/chart/multi-charts/components/MultiChartsTradingView */ \"./src/js/modules/chart/multi-charts/components/MultiChartsTradingView.jsx\"));\n});\n\nvar mapStateToProps = function mapStateToProps() {\n    return {\n        isTradingViewChart: modules_user_user_model__WEBPACK_IMPORTED_MODULE_5___default.a.getUserCommonData().isAdvancedTradingView() && store_settings__WEBPACK_IMPORTED_MODULE_4___default.a.isChartModeSwitcherEnabled() && modules_user_user_model__WEBPACK_IMPORTED_MODULE_5___default.a.getUserCommonData().getChartMode() === modules_account_settings_tabs_platform_features_consts__WEBPACK_IMPORTED_MODULE_6__[\"CHART_MODE_ADVANCED\"] && store_settings__WEBPACK_IMPORTED_MODULE_4___default.a.isMultiChartsTradingViewEnabled()\n    };\n};\n\nvar MultiChartsComponent = function (_Component) {\n    _inherits(MultiChartsComponent, _Component);\n\n    function MultiChartsComponent(props) {\n        _classCallCheck(this, MultiChartsComponent);\n\n        var _this = _possibleConstructorReturn(this, (MultiChartsComponent.__proto__ || Object.getPrototypeOf(MultiChartsComponent)).call(this, props));\n\n        react_autobind__WEBPACK_IMPORTED_MODULE_0___default()(_this);\n\n        _this.state = {\n            ready: false\n        };\n        return _this;\n    }\n\n    _createClass(MultiChartsComponent, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            if (modules_stream_stream__WEBPACK_IMPORTED_MODULE_1___default.a.getAtmosphereId()) {\n                this.onStreamReady();\n            } else {\n                modules_stream_stream__WEBPACK_IMPORTED_MODULE_1___default.a.once('ready', this.onStreamReady);\n            }\n        }\n    }, {\n        key: 'onStreamReady',\n        value: function onStreamReady() {\n            this.setState({ ready: true });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var ready = this.state.ready;\n\n\n            if (!ready) {\n                return null;\n            }\n\n            var _props = this.props,\n                isTradingViewChart = _props.isTradingViewChart,\n                props = _objectWithoutProperties(_props, ['isTradingViewChart']);\n\n            return isTradingViewChart ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MultiChartsTradingView, _extends({ className: 'multi-charts-component pane pane__xfluid pane__yfluid' }, props)) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MultiChartsHighcharts, _extends({ className: 'multi-charts-component pane pane__xfluid pane__yfluid' }, props));\n        }\n    }]);\n\n    return MultiChartsComponent;\n}(react__WEBPACK_IMPORTED_MODULE_3__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(mapStateToProps)(MultiChartsComponent));\n\n//# sourceURL=webpack:///./src/js/modules/chart/multi-charts/components/MultiChartsComponent.jsx?");

/***/ })

}]);