(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advanced-open-positions-mobile~basic-open-positions~basic-open-positions-mobile~basic-open-positions-tablet"],{

/***/ "./src/js/modules/open-positions/components/OpenPositionsHOC.jsx":
/*!***********************************************************************!*\
  !*** ./src/js/modules/open-positions/components/OpenPositionsHOC.jsx ***!
  \***********************************************************************/
/*! exports provided: OpenPositionsHOC, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpenPositionsHOC\", function() { return OpenPositionsHOC; });\n/* harmony import */ var open_positions_positions_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! open-positions/positions.selectors */ \"./src/js/modules/open-positions/positions.selectors.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var store_ui_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/ui.selectors */ \"./src/js/store/ui.selectors.js\");\n\n\n\n\n\nfunction mapState(state) {\n    return {\n        symbols: Object(open_positions_positions_selectors__WEBPACK_IMPORTED_MODULE_0__[\"getSortedPositionsSymbols\"])(state),\n        symbolsSortName: Object(store_ui_selectors__WEBPACK_IMPORTED_MODULE_3__[\"getSymbolsSortName\"])(state),\n        hasData: Object(open_positions_positions_selectors__WEBPACK_IMPORTED_MODULE_0__[\"getTotalPositionsCount\"])(state) > 0\n    };\n}\n\nvar OpenPositionsHOC = function OpenPositionsHOC(Component) {\n    return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapState)(Component);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (OpenPositionsHOC);\n\n//# sourceURL=webpack:///./src/js/modules/open-positions/components/OpenPositionsHOC.jsx?");

/***/ })

}]);