(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-dashboard-mobile~instrument-details-bond-desktop~instrument-details-bond-mobile~instrument-det~09fe7009"],{

/***/ "./src/js/modules/instruments/components/Description.jsx":
/*!***************************************************************!*\
  !*** ./src/js/modules/instruments/components/Description.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _instruments_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../instruments.selectors */ \"./src/js/modules/instruments/instruments.selectors.js\");\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nfunction mapStateToProps(state, _ref) {\n    var _ref$as = _ref.as,\n        as = _ref$as === undefined ? 'span' : _ref$as,\n        symbol = _ref.symbol;\n\n    return {\n        value: Object(_instruments_selectors__WEBPACK_IMPORTED_MODULE_2__[\"getInstrumentDescription\"])(state, symbol),\n        as: as\n    };\n}\n\nvar Description = function Description(_ref2) {\n    var value = _ref2.value,\n        symbol = _ref2.symbol,\n        dispatch = _ref2.dispatch,\n        props = _objectWithoutProperties(_ref2, ['value', 'symbol', 'dispatch']);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        props.as,\n        props,\n        value\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Description));\n\n//# sourceURL=webpack:///./src/js/modules/instruments/components/Description.jsx?");

/***/ })

}]);