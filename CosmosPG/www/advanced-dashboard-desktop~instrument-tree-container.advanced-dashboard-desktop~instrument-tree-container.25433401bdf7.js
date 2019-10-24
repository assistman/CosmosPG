(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advanced-dashboard-desktop~instrument-tree-container"],{

/***/ "./src/js/modules/orders/components/OrdersCount.jsx":
/*!**********************************************************!*\
  !*** ./src/js/modules/orders/components/OrdersCount.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _orders_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.selectors */ \"./src/js/modules/orders/orders.selectors.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nfunction mapState(state) {\n    return {\n        value: Object(_orders_selectors__WEBPACK_IMPORTED_MODULE_2__[\"getTotalOrdersCount\"])(state)\n    };\n}\n\nvar OrdersCount = function OrdersCount(_ref) {\n    var as = _ref.as,\n        value = _ref.value,\n        dispatch = _ref.dispatch,\n        props = _objectWithoutProperties(_ref, ['as', 'value', 'dispatch']);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(as || 'span', _extends({}, props), value);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapState)(OrdersCount));\n\n//# sourceURL=webpack:///./src/js/modules/orders/components/OrdersCount.jsx?");

/***/ })

}]);