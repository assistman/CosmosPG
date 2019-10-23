(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advanced-dashboard-mobile~basic-dashboard-desktop~basic-dashboard-mobile~basic-dashboard-tablet"],{

/***/ "./src/js/modules/instrument-details/components/IsInstrumentDetailsOpen.jsx":
/*!**********************************************************************************!*\
  !*** ./src/js/modules/instrument-details/components/IsInstrumentDetailsOpen.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common.types */ \"./src/js/common.types.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var store_ui_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/ui.selectors */ \"./src/js/store/ui.selectors.js\");\n\n\n\n\n\nvar IsInstrumentDetailsOpen = function IsInstrumentDetailsOpen(_ref) {\n    var open = _ref.open,\n        invert = _ref.invert,\n        children = _ref.children;\n    return (invert ? !open : open) ? children : null;\n};\n\nfunction mapState(state) {\n    return {\n        open: Object(store_ui_selectors__WEBPACK_IMPORTED_MODULE_3__[\"getInstrumentDetailsState\"])(state) === common_types__WEBPACK_IMPORTED_MODULE_0__[\"OPEN\"]\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapState)(IsInstrumentDetailsOpen));\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/components/IsInstrumentDetailsOpen.jsx?");

/***/ })

}]);