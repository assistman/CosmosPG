(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advanced-favorites-mobile~basic-favorites~basic-favorites-mobile~basic-favorites-tablet"],{

/***/ "./src/js/modules/instruments/components/FavoritesEmpty.jsx":
/*!******************************************************************!*\
  !*** ./src/js/modules/instruments/components/FavoritesEmpty.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar FavoritesEmpty = function FavoritesEmpty(props) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        props,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"div\",\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", { className: \"icon icon-favorites-large\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"div\",\n                { className: \"large-px\" },\n                __('tab.favorites.empty.caption')\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"div\",\n                { className: \"smaller-px\" },\n                __('tab.favorites.empty.text'),\n                \" \",\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", { className: \"icon icon-fav-light\" })\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"a\",\n                { className: \"btn btn-primary\", href: \"#trading\" },\n                __('tab.favorites.empty.button')\n            )\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavoritesEmpty);\n\n//# sourceURL=webpack:///./src/js/modules/instruments/components/FavoritesEmpty.jsx?");

/***/ }),

/***/ "./src/js/modules/instruments/components/FavoritesHOC.jsx":
/*!****************************************************************!*\
  !*** ./src/js/modules/instruments/components/FavoritesHOC.jsx ***!
  \****************************************************************/
/*! exports provided: FavoritesHOC, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavoritesHOC\", function() { return FavoritesHOC; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var store_ui_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/ui.selectors */ \"./src/js/store/ui.selectors.js\");\n/* harmony import */ var user_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! user/user.selectors */ \"./src/js/modules/user/user.selectors.js\");\n\n\n\n\n\nfunction mapState(state) {\n    return {\n        symbols: Object(store_ui_selectors__WEBPACK_IMPORTED_MODULE_2__[\"getSortedFavoritesSymbols\"])(state),\n        symbolsSortName: Object(store_ui_selectors__WEBPACK_IMPORTED_MODULE_2__[\"getSymbolsSortName\"])(state),\n        symbolsSortDirection: Object(store_ui_selectors__WEBPACK_IMPORTED_MODULE_2__[\"getSymbolsSortDirection\"])(state),\n        hasData: Object(user_user_selectors__WEBPACK_IMPORTED_MODULE_3__[\"getTotalFavoritesCount\"])(state) > 0\n    };\n}\n\nvar FavoritesHOC = function FavoritesHOC(Component) {\n    return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapState)(Component);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavoritesHOC);\n\n//# sourceURL=webpack:///./src/js/modules/instruments/components/FavoritesHOC.jsx?");

/***/ })

}]);