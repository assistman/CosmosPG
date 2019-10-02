(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-content-mobile"],{

/***/ "./src/js/modules/services/news/components/NewsContentMobile.js":
/*!**********************************************************************!*\
  !*** ./src/js/modules/services/news/components/NewsContentMobile.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/js/modules/instrument-details/components/instrument-details-tabs/News/NewsMobile.jsx (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _NewsTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsTitle */ \"./src/js/modules/services/news/components/NewsTitle.js\");\n/* harmony import */ var _NewsPublishDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsPublishDate */ \"./src/js/modules/services/news/components/NewsPublishDate.js\");\n/* harmony import */ var _NewsWireName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsWireName */ \"./src/js/modules/services/news/components/NewsWireName.js\");\n/* harmony import */ var _NewsSelectedState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewsSelectedState */ \"./src/js/modules/services/news/components/NewsSelectedState.js\");\n/* harmony import */ var _NewsFilterBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewsFilterBlock */ \"./src/js/modules/services/news/components/NewsFilterBlock.js\");\n/* harmony import */ var _news_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../news.actions */ \"./src/js/modules/services/news/news.actions.js\");\n/* harmony import */ var _NewsText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NewsText */ \"./src/js/modules/services/news/components/NewsText.js\");\n/* harmony import */ var _NewsSourceName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NewsSourceName */ \"./src/js/modules/services/news/components/NewsSourceName.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core */ \"./src/js/core.js\");\n/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _news_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../news.types */ \"./src/js/modules/services/news/news.types.js\");\n/* harmony import */ var _components_ServicesLabelNew__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ServicesLabelNew */ \"./src/js/modules/services/components/ServicesLabelNew.js\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _news_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../news.selectors */ \"./src/js/modules/services/news/news.selectors.js\");\n/* harmony import */ var utils_eventos_trading_tools_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/eventos.trading-tools.service */ \"./src/js/utils/eventos.trading-tools.service.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar mapState = function mapState(state, _ref) {\n    var ticker = _ref.ticker,\n        defaultNewsId = _ref.defaultNewsId;\n    return {\n        news: Object(_news_selectors__WEBPACK_IMPORTED_MODULE_14__[\"getNewsByTicker\"])(state, ticker),\n        selectedNewsId: defaultNewsId,\n        filter: Object(_news_selectors__WEBPACK_IMPORTED_MODULE_14__[\"getNewsFilterByTicker\"])(state, ticker),\n        status: Object(_news_selectors__WEBPACK_IMPORTED_MODULE_14__[\"getNewsStatusByTicker\"])(state, ticker)\n    };\n};\n\nvar NewsContentMobile = function (_React$PureComponent) {\n    _inherits(NewsContentMobile, _React$PureComponent);\n\n    function NewsContentMobile() {\n        var _ref2;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, NewsContentMobile);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = NewsContentMobile.__proto__ || Object.getPrototypeOf(NewsContentMobile)).call.apply(_ref2, [this].concat(args))), _this), _this.click = function (id) {\n            var _this$props = _this.props,\n                dispatch = _this$props.dispatch,\n                ticker = _this$props.ticker,\n                onSelect = _this$props.onSelect;\n\n\n            if (id) {\n                Object(utils_eventos_trading_tools_service__WEBPACK_IMPORTED_MODULE_15__[\"sendEventosNewsAction\"])(id);\n            }\n\n            dispatch(Object(_news_actions__WEBPACK_IMPORTED_MODULE_6__[\"selectNews\"])(id, ticker));\n            _this._container.scrollIntoView(true);\n\n            if (underscore__WEBPACK_IMPORTED_MODULE_13___default.a.isFunction(onSelect)) {\n                onSelect(id);\n            }\n\n            ticker === _news_types__WEBPACK_IMPORTED_MODULE_11__[\"ALL_NEWS\"] && core__WEBPACK_IMPORTED_MODULE_10___default.a.navigate('#news/' + id, { trigger: false });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(NewsContentMobile, [{\n        key: 'getChildContext',\n        value: function getChildContext() {\n            return {\n                ticker: this.props.ticker\n            };\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var _props = this.props,\n                selectedNewsId = _props.selectedNewsId,\n                filter = _props.filter,\n                isShowFilter = _props.isShowFilter,\n                innerView = _props.innerView;\n\n            var shouldShowNewsDetails = selectedNewsId;\n            var shouldShowNewsList = !shouldShowNewsDetails;\n\n            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                'div',\n                { className: 'pane pane__yfluid', ref: function ref(node) {\n                        _this2._container = node;\n                    } },\n                shouldShowNewsDetails && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                    'div',\n                    { className: 'news__mobile full pane__fluid' },\n                    innerView && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                        'div',\n                        { className: 'news__mobile__back pane flex-valign-center btn', onClick: function onClick(e) {\n                                return _this2.click(null);\n                            } },\n                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('span', { className: 'icon icon-prev-arrow-grey' }),\n                        '\\xA0\\xA0',\n                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                            'span',\n                            null,\n                            __('actions.back')\n                        )\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                        'div',\n                        { className: 'date smaller-px' },\n                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_NewsPublishDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { id: selectedNewsId, className: 'small-b-px text-muted' }),\n                        ' |',\n                        ' ',\n                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_NewsWireName__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { id: selectedNewsId, className: 'small-b-px' })\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_NewsTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        id: selectedNewsId,\n                        as: 'div',\n                        className: 'caption medium-px '\n                    }),\n                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_NewsText__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        id: selectedNewsId,\n                        as: 'div',\n                        className: 'text smaller-px'\n                    }),\n                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                        'div',\n                        { className: 'source' },\n                        __('source'),\n                        ':',\n                        ' ',\n                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_NewsSourceName__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { id: selectedNewsId, as: 'span' })\n                    )\n                ),\n                shouldShowNewsList && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                    'div',\n                    { className: 'news__mobile list list--column' },\n                    isShowFilter && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_NewsFilterBlock__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null),\n                    underscore__WEBPACK_IMPORTED_MODULE_13___default.a.map(filter, function (key) {\n                        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                            _NewsSelectedState__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            {\n                                as: 'div',\n                                id: key,\n                                key: key,\n                                className: 'list__item',\n                                notActiveClassName: 'color__platform-3 bg__platform-1-hover',\n                                activeClassName: 'active bg__platform-1',\n                                onClick: function onClick(e) {\n                                    return _this2.click(key);\n                                }\n                            },\n                            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                                'div',\n                                { className: 'pane pane__fluid pane__row' },\n                                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                                    'div',\n                                    { className: 'pane pane__fluid flex flex-column' },\n                                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                                        'div',\n                                        { className: 'date smaller-px' },\n                                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_NewsPublishDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { id: key, className: 'small-b-px text-muted' }),\n                                        '  ',\n                                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_NewsWireName__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { as: 'span', className: 'small-b-px', id: key }),\n                                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ServicesLabelNew__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null)\n                                    ),\n                                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_NewsTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        id: key,\n                                        as: 'div',\n                                        className: 'title bold smaller-px'\n                                    })\n                                ),\n                                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\n                                    'div',\n                                    { className: 'pane flex flex-valign-center arrow' },\n                                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('div', { className: 'right icon-marketsX-popup-arrow-right' }),\n                                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('div', { className: 'left icon-marketsX-popup-arrow-left' })\n                                )\n                            )\n                        );\n                    })\n                )\n            );\n        }\n    }]);\n\n    return NewsContentMobile;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.PureComponent);\n\nNewsContentMobile.defaultProps = {\n    isShowFilter: true,\n    defaultNewsId: undefined,\n    onSelect: undefined,\n    innerView: false\n};\nNewsContentMobile.childContextTypes = {\n    ticker: function ticker() {\n        return null;\n    }\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapState)(NewsContentMobile));\n\n//# sourceURL=webpack:///./src/js/modules/services/news/components/NewsContentMobile.js?");

/***/ })

}]);