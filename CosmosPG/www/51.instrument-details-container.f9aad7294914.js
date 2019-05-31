webpackJsonp([51],{

/***/ 1861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_types__ = __webpack_require__(13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Lazy__ = __webpack_require__(157);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_instruments_instruments_selectors__ = __webpack_require__(90);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_ui_selectors__ = __webpack_require__(156);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instrument_details_styles_scss__ = __webpack_require__(2149);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instrument_details_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__instrument_details_styles_scss__);\n\n\n\n\n\n\n\n\n\nvar LazyInstrumentDetailsDefault = Object(__WEBPACK_IMPORTED_MODULE_1_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(66).then(__webpack_require__.bind(null, 2569));\n});\nvar LazyInstrumentDetailsCurrency = Object(__WEBPACK_IMPORTED_MODULE_1_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(60).then(__webpack_require__.bind(null, 2582));\n});\nvar LazyInstrumentDetailsShares = Object(__WEBPACK_IMPORTED_MODULE_1_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(99).then(__webpack_require__.bind(null, 2584));\n});\nvar LazyInstrumentDetailsBlends = Object(__WEBPACK_IMPORTED_MODULE_1_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(100).then(__webpack_require__.bind(null, 2585));\n});\nvar LazyInstrumentDetailsCurrencyCrypto = Object(__WEBPACK_IMPORTED_MODULE_1_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(61).then(__webpack_require__.bind(null, 2586));\n});\nvar LazyInstrumentDetailsBonds = Object(__WEBPACK_IMPORTED_MODULE_1_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(65).then(__webpack_require__.bind(null, 2588));\n});\nvar LazyInstrumentDetailsCommodity = Object(__WEBPACK_IMPORTED_MODULE_1_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(64).then(__webpack_require__.bind(null, 2590));\n});\nvar LazyInstrumentDetailsEtfs = Object(__WEBPACK_IMPORTED_MODULE_1_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(63).then(__webpack_require__.bind(null, 2592));\n});\nvar LazyInstrumentDetailsIndices = Object(__WEBPACK_IMPORTED_MODULE_1_components_Lazy__[\"a\" /* default */])(function () {\n    return __webpack_require__.e/* import() */(62).then(__webpack_require__.bind(null, 2594));\n});\n\nfunction mapStateToProps(state) {\n    var symbol = Object(__WEBPACK_IMPORTED_MODULE_5_store_ui_selectors__[\"getInstrumentDetailsSymbol\"])(state);\n    var category = Object(__WEBPACK_IMPORTED_MODULE_2_modules_instruments_instruments_selectors__[\"getInstrumentCategory\"])(state, symbol);\n\n    return {\n        category: category,\n        symbol: symbol\n    };\n}\n\nvar InstrumentDetailsContainer = function InstrumentDetailsContainer(_ref) {\n    var category = _ref.category,\n        className = _ref.className,\n        symbol = _ref.symbol;\n\n    category = category.toLowerCase();\n\n    if (category.startsWith(__WEBPACK_IMPORTED_MODULE_0_common_types__[\"INSTRUMENT_CATEGORIES\"].CRYPTO)) {\n        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(LazyInstrumentDetailsCurrencyCrypto, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(__WEBPACK_IMPORTED_MODULE_0_common_types__[\"INSTRUMENT_CATEGORIES\"].CURRENCY)) {\n        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(LazyInstrumentDetailsCurrency, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(__WEBPACK_IMPORTED_MODULE_0_common_types__[\"INSTRUMENT_CATEGORIES\"].SHARES)) {\n        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(LazyInstrumentDetailsShares, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(__WEBPACK_IMPORTED_MODULE_0_common_types__[\"INSTRUMENT_CATEGORIES\"].BLENDS)) {\n        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(LazyInstrumentDetailsBlends, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(__WEBPACK_IMPORTED_MODULE_0_common_types__[\"INSTRUMENT_CATEGORIES\"].BONDS)) {\n        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(LazyInstrumentDetailsBonds, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(__WEBPACK_IMPORTED_MODULE_0_common_types__[\"INSTRUMENT_CATEGORIES\"].COMMODITY)) {\n        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(LazyInstrumentDetailsCommodity, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(__WEBPACK_IMPORTED_MODULE_0_common_types__[\"INSTRUMENT_CATEGORIES\"].ETFS)) {\n        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(LazyInstrumentDetailsEtfs, { className: className, symbol: symbol });\n    }\n\n    if (category.startsWith(__WEBPACK_IMPORTED_MODULE_0_common_types__[\"INSTRUMENT_CATEGORIES\"].INDEX)) {\n        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(LazyInstrumentDetailsIndices, { className: className, symbol: symbol });\n    }\n\n    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(LazyInstrumentDetailsDefault, { className: className, symbol: symbol });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__[\"connect\"])(mapStateToProps)(InstrumentDetailsContainer));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/instrument-details/LazyInstrumentDetailsContainer.jsx\n// module id = 1861\n// module chunks = 2 44 51\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/LazyInstrumentDetailsContainer.jsx?");

/***/ }),

/***/ 1994:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(25)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \".instrument-details{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:14px 10px 10px;font-size:11px}.instrument-details__tabs{flex-direction:column;position:relative}.instrument-details__tabs,.instrument-details__tabs .react-tabs{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column}.instrument-details__tabs .react-tabs{flex-direction:column;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.instrument-details__tabs .react-tabs .react-tabs__tab{font-size:13px;padding:10px 14px;font-weight:400;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;text-transform:capitalize}.instrument-details__tabs .react-tabs .react-tabs__tab--button{padding:7px .125em;margin:0 0 0 auto}.instrument-details__tabs .react-tabs .react-tabs__tab-panel{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.instrument-details .instrument-details-no-image{margin:0 10px}.instrument-details .statistics-column{display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column}@media only screen and (min-width:825px){.instrument-details .statistics-column.with-statistics-blocks{-ms-flex-align:flex-start;-webkit-align-items:flex-start;align-items:flex-start}}.instrument-details .statistics-column:not(:last-child){margin-right:40px}.instrument-details .statistics-column .statistics-row{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-ms-flex-pack:space-between;-webkit-justify-content:space-between;justify-content:space-between;padding:11px 0;border-bottom:2px solid;max-height:40px}.instrument-details .statistics-column .statistics-row.unstyled{border:none}.instrument-details .statistics-column .statistics-row--height-auto{max-height:none}.instrument-details .statistics-column .statistics-row>span:first-child{margin-right:10px}.instrument-details .statistics-column .statistics-row>span{overflow:hidden;text-overflow:ellipsis;display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-align:flex-start;-webkit-align-items:flex-start;align-items:flex-start;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.instrument-details .statistics-column .statistics-row>div:not([class]){display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.instrument-details__tab--chart{position:relative;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:-webkit-max-content;min-height:max-content}.instrument-details__tab--open-positions,.instrument-details__tab--orders{font-size:13px;padding:0 0 50px}.instrument-details .instrument-list-btn{width:95px;font-size:13px;line-height:1.4}.instrument-details .instrument-list-btn:not(:last-child){margin-right:7px}html[dir=rtl] .instrument-details .instrument-list-btn:not(:last-child){margin-left:7px}.instrument-details .close-all-position-button.in-column{width:194px}.instrument-details__header{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.instrument-details__header__right{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.instrument-details__header .instrument-img{margin-top:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.instrument-details__title{font-size:22px;font-weight:700;line-height:1em}.instrument-details__description{font-size:13px}.instrument-details__price{font-size:44px;line-height:44px}.instrument-details__price i{font-size:1.2em;font-style:inherit;line-height:1.2;line-height:inherit}.instrument-details__change{font-size:18px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.instrument-details__change>span{margin:0 0 0 8px}.instrument-details__close{padding:6px;margin:-6px -6px 0 0;cursor:pointer;font-size:18px}.instrument-details__actions,.instrument-details__actions__small{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.instrument-details__actions__small{padding:3px 0;margin:0 0 0 10px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.instrument-details__actions__small .icon{margin:0 3px;cursor:pointer}.instrument-details__actions__small .btn{margin:0 10px 0 0}.instrument-details__actions .button{margin:0 4px}.instrument-details__time{font-size:13px}.instrument-details__profile--mobile{padding:12px;height:100%;overflow-y:auto}.instrument-details__profile__caption{font-size:13px;font-weight:700;padding:12px 0}.instrument-details__profile__description-wrapper{padding:0 40px 0 0;min-width:45%}.instrument-details__profile__description{padding:12px 0;border-top-width:2px;border-top-style:solid;font-size:13px}.instrument-details__profile__chart{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-basis:55%;-ms-flex-preferred-size:55%;flex-basis:55%;padding:15px 20px 0 0}html[dir=rtl] .instrument-details__profile__chart{padding:15px 0 0 20px}@media (max-width:992px){.instrument-details__profile__chart{-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto}}.instrument-details__profile__chart .chart-box{height:100%}.instrument-details__profile .instrument-details__profile__table{margin-bottom:40px}.instrument-details__profile .instrument-details__profile__table:not(:last-child){margin-right:0}.instrument-details .caret{display:inline-block;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;position:relative;bottom:1px}.instrument-details .caret--up{border-top:0;border-bottom:6px solid}.instrument-details .caret--down{border-bottom:0;border-top:6px solid}.instrument-details .btn-price{min-width:95px;min-height:35px;margin:0 .125em}.instrument-details .btn-price__info{margin:0 auto 0 0;font-size:11px;line-height:14px;font-weight:700}.instrument-details .btn-price__price{margin:0 0 0 auto;font-size:15px;line-height:17px;font-weight:700}@media (max-width:1199px){.instrument-details .btn-price{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%;min-height:42px}}.instrument-details .instruments-table table>tbody>tr.row.has-expand,.instrument-details .instruments-table table>thead{display:none!important}.instrument-details .instruments-table table>tbody>tr.row-expand,.instrument-details .instruments-table table>tbody>tr.row-expand>td{border:none!important}.instrument-details .instruments-table table>tbody>tr.row-expand .subrow-expanded{border-left:none;border-bottom:1px solid;padding:1em 0 1em 1em}.instrument-details .instrument-tab__title{font-weight:700;text-transform:capitalize;padding:12px 0;border-bottom:2px solid}.instrument-details__profile-shares{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:13px}@media (max-width:991px){.instrument-details__profile-shares{padding:12px}}.instrument-details__profile-shares__caption{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:40px;border-bottom:2px solid;font-weight:700}.instrument-details__profile-shares__top-section{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:20px}@media (max-width:991px){.instrument-details__profile-shares__top-section{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}}@media (min-width:992px){.instrument-details__profile-shares__caption,.instrument-details__profile-shares__column{min-width:257px;width:30%}}.instrument-details__profile-shares__summary{margin-top:10px}.instrument-details__profile-shares__column{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.instrument-details__profile-shares__column:not(:last-child){margin-right:40px}@media (max-width:991px){.instrument-details__profile-shares__column:not(:last-child){margin-right:0}}.instrument-details__profile-shares__row{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:10px 0;border-bottom:2px solid;height:52px}.instrument-details__profile-shares__row>span:first-child{margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.instrument-details__profile-shares__row>span{overflow:hidden;text-overflow:ellipsis;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.instrument-details__profile-shares__row>span:last-child{text-align:right}.instrument-details__profile-shares .index-membership__title{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:52px;font-weight:700;padding:10px 0}.instrument-details__profile-shares .index-membership__list{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:154px;border-bottom:2px solid;border-top:2px solid;overflow-y:auto}@media (max-width:991px){.instrument-details__profile-shares .index-membership__list{border-top:none;border-bottom:none;height:auto}}.instrument-details__profile-shares .index-membership__list__item{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:50px;padding:10px 0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.instrument-details .instrument-positions-list .order,.instrument-details .instrument-positions-list .position{padding:12px 0 12px 12px;border-bottom:1px solid}.instrument-details .instrument-positions-list .order__type .icon,.instrument-details .instrument-positions-list .position__type .icon{display:none}.instrument-details .instrument-positions-list .order .info>span:not(:last-child):after,.instrument-details .instrument-positions-list .position .info>span:not(:last-child):after{content:\\\", \\\"}.instrument-details .price-button{margin:0 5px}.instrument-details--mobile{padding:0}.instrument-details--mobile .instrument-details__container{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;min-height:-webkit-max-content;min-height:max-content;padding:6px}.instrument-details--mobile .instrument-details__header{padding:10px}.instrument-details--mobile .instrument-details__tabs{height:auto}.instrument-details--mobile .instrument-details__actions{margin:0 0 0 auto;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.instrument-details--mobile .instrument-details__actions__small{padding:0}.instrument-details--mobile .instrument-details__actions__small .btn:last-child{margin:0}.instrument-details--mobile .instrument-details__actions .button{height:36px;width:100%}.instrument-details--mobile .instrument-details__actions .button .price-button__title{font-size:20px}.instrument-details--mobile .instrument-details__actions .button .price-button__wrapper{height:100%;padding:3px 5px!important}.instrument-details--mobile .btn-price{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%}.instrument-details--mobile .minimize-chart,.instrument-details--mobile .minimize-mobile{display:none}.instrument-details--mobile .react-tabs__tab-panel{padding:0;margin-top:6px}.instrument-details--mobile .instruments-table table .rows .row-expand .btn{margin:0 .125em}.instrument-details--mobile .instruments-table table .rows .row-expand .instrument-list-btn:not(:last-child){margin-bottom:5px}.instrument-details--mobile .instrument-positions-list{padding:0 12px}.instrument-details--mobile .instrument-positions-list .order,.instrument-details--mobile .instrument-positions-list .position{padding:13px 0}.instrument-details--mobile .instrument-positions-list .order__type,.instrument-details--mobile .instrument-positions-list .position__type{max-width:100%}.instrument-details--mobile .instrument-positions-list .order__info,.instrument-details--mobile .instrument-positions-list .position__info{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.instrument-details--mobile .instrument-positions-list .order__info .info,.instrument-details--mobile .instrument-positions-list .position__info .info{max-width:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.instrument-details--mobile .instrument-list-btn:not(:last-child){margin:0 0 7px}.instrument-details--mobile .btn.close-all-position-button{width:100%;height:50px;border-width:0;border-top-width:2px;font-weight:700;font-size:16px;position:absolute;bottom:0;left:0;right:0}.instrument-details--mobile .instrument-details__tab--chart .chart-box{max-height:none!important}.instrument-details--tablet .instrument-details__actions{margin:0}.instrument-details--tablet .instrument-details__actions .button{height:36px;width:100%}.instrument-details--tablet .instrument-details__actions .button .price-button__title{font-size:20px}.instrument-details--tablet .instrument-details__actions .button .price-button__wrapper{height:100%;padding:3px 5px!important}.instrument-details--tablet .btn-price{-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%}.instrument-availability{text-transform:uppercase;font-size:13px}.instrument-availability__icon{display:inline-block;width:8px;height:8px;border-radius:50%;margin:0 5px 0 0;position:relative;bottom:1px}.instrument-currency-converter{font-size:13px}@media screen and (max-width:992px){.instrument-currency-converter{padding:4px 16px;width:100%}}.instrument-currency-converter__content{margin-top:18px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (max-width:992px){.instrument-currency-converter__content{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;margin-top:0}}.instrument-currency-converter__content-title{width:300px}@media screen and (max-width:992px){.instrument-currency-converter__content-title{width:100%}}.instrument-currency-converter__from-currency{margin-right:4px}.instrument-currency-converter__result{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}@media screen and (max-width:1200px){.instrument-currency-converter__result{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;margin-top:30px}}@media screen and (max-width:992px){.instrument-currency-converter__result{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}}.instrument-currency-converter__field{margin-right:16px}@media screen and (max-width:992px){.instrument-currency-converter__field{margin-top:16px;margin-right:0}}.instrument-currency-converter__field .dk-selected{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;line-height:40px}.instrument-currency-converter__field--to-currency{margin-top:0}.instrument-currency-converter__field .field-type-select__title{text-transform:capitalize}.instrument-currency-converter__field .input-field[type=number]{height:42px}.instrument-currency-converter__field .input-field[type=number]::-webkit-inner-spin-button,.instrument-currency-converter__field .input-field[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.instrument-currency-converter__text--to-currency{font-size:24px;font-weight:700;margin-left:5px}.instrument-currency-converter .instrument-currency-converter__btn{border:none;border-radius:2px;padding:7px 15px}.instrument-currency-converter .instrument-currency-converter__btn--reverse{margin-right:16px;padding:0}@media screen and (max-width:992px){.instrument-currency-converter .instrument-currency-converter__btn--reverse{margin-top:16px;margin-right:0;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end}}.instrument-currency-converter .instrument-currency-converter__btn:focus .icon{outline:auto}.instrument-currency-converter .instrument-currency-converter__btn--copy{margin-left:16px}.instrument-currency-converter .field-type-input__title,.instrument-currency-converter .field-type-select__title{font-size:13px;margin-bottom:10px}\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/css-loader?minimize!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/js/modules/instrument-details/instrument-details.styles.scss\n// module id = 1994\n// module chunks = 2 42 44 51\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/instrument-details.styles.scss?./node_modules/css-loader?minimize!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ 2149:
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(1994);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(27)(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(true) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(1994, function() {\n\t\t\tvar newContent = __webpack_require__(1994);\n\t\t\tif(typeof newContent === 'string') newContent = [[module.i, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/instrument-details/instrument-details.styles.scss\n// module id = 2149\n// module chunks = 2 42 44 51\n\n//# sourceURL=webpack:///./src/js/modules/instrument-details/instrument-details.styles.scss?");

/***/ })

});