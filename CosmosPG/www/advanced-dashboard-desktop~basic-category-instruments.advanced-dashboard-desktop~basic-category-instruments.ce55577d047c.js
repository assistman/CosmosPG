(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advanced-dashboard-desktop~basic-category-instruments"],{

/***/ "./src/js/components/virtual-instrument-list/VirtualInstrumentListWrapper.jsx":
/*!************************************************************************************!*\
  !*** ./src/js/components/virtual-instrument-list/VirtualInstrumentListWrapper.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-autobind */ \"./node_modules/react-autobind/index.js\");\n/* harmony import */ var react_autobind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_autobind__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized */ \"./node_modules/react-virtualized/dist/es/index.js\");\n/* harmony import */ var store_ui_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/ui.selectors */ \"./src/js/store/ui.selectors.js\");\n/* harmony import */ var modules_instruments_instruments_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modules/instruments/instruments.utils */ \"./src/js/modules/instruments/instruments.utils.js\");\n/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-custom-scrollbars */ \"./node_modules/react-custom-scrollbars/lib/index.js\");\n/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var store_ui_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! store/ui.actions */ \"./src/js/store/ui.actions.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\nfunction mapState(state) {\n    return {\n        totalPositionsCount: state.positions.totalPositionsCount,\n        totalOrdersCount: state.orders.totalOrdersCount,\n        selectedSymbol: state.ui.selectedInstrumentCategorySymbol,\n        categoryTreePath: Object(store_ui_selectors__WEBPACK_IMPORTED_MODULE_5__[\"getSelectedInstrumentCategoryTreePath\"])(state),\n        section: Object(store_ui_selectors__WEBPACK_IMPORTED_MODULE_5__[\"getUiSection\"])(state),\n        shouldInstrumentBeCentered: state.ui.shouldInstrumentBeCentered,\n        symbolsSortName: Object(store_ui_selectors__WEBPACK_IMPORTED_MODULE_5__[\"getSymbolsSortName\"])(state),\n        symbolsSortDirection: Object(store_ui_selectors__WEBPACK_IMPORTED_MODULE_5__[\"getSymbolsSortDirection\"])(state)\n    };\n}\n\nfunction mapDispatch(dispatch) {\n    return {\n        updateShouldInstrumentBeCentered: function updateShouldInstrumentBeCentered(shouldBeCentered) {\n            dispatch(Object(store_ui_actions__WEBPACK_IMPORTED_MODULE_8__[\"setShouldInstrumentBeCentered\"])(shouldBeCentered));\n        }\n    };\n}\n\nvar VirtualInstrumentListWrapper = function (_React$Component) {\n    _inherits(VirtualInstrumentListWrapper, _React$Component);\n\n    function VirtualInstrumentListWrapper(props) {\n        _classCallCheck(this, VirtualInstrumentListWrapper);\n\n        var _this = _possibleConstructorReturn(this, (VirtualInstrumentListWrapper.__proto__ || Object.getPrototypeOf(VirtualInstrumentListWrapper)).call(this, props));\n\n        _this.state = {\n            scrollTop: 0,\n            scrollLeft: 0\n        };\n        _this._isMounted = false;\n\n\n        react_autobind__WEBPACK_IMPORTED_MODULE_2___default()(_this);\n\n        _this._scrollbar = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n        _this._list = null;\n        _this.measurer = Object(modules_instruments_instruments_utils__WEBPACK_IMPORTED_MODULE_6__[\"createInstrumentListMeasurerWrapper\"])(_this, { CellMeasurerCache: react_virtualized__WEBPACK_IMPORTED_MODULE_4__[\"CellMeasurerCache\"] });\n        return _this;\n    }\n\n    _createClass(VirtualInstrumentListWrapper, [{\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            this._isMounted = false;\n            this.measurer();\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this._isMounted = true;\n            this._scrollToRow(this.props);\n        }\n    }, {\n        key: 'componentWillUpdate',\n        value: function componentWillUpdate() {\n            this.measurer.resizeAll(false);\n        }\n    }, {\n        key: 'componentDidUpdate',\n        value: function componentDidUpdate(prevProps) {\n            if (prevProps.shouldInstrumentBeCentered) {\n                this._scrollToRow(prevProps);\n            }\n\n            if (!underscore__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(prevProps.symbols, this.props.symbols)) {\n                this._scrollToRow(this.props);\n            }\n        }\n    }, {\n        key: 'handleScroll',\n        value: function handleScroll(_ref) {\n            var target = _ref.target;\n            var scrollTop = target.scrollTop,\n                scrollLeft = target.scrollLeft;\n            var grid = this._list.Grid;\n\n\n            grid.handleScrollEvent({ scrollTop: scrollTop, scrollLeft: scrollLeft });\n            this.setState({ scrollTop: scrollTop, scrollLeft: scrollLeft });\n        }\n    }, {\n        key: 'handleUpdate',\n        value: function handleUpdate() {\n            if (this.props.shouldInstrumentBeCentered) {\n                this._scrollToRow(this.props);\n            }\n\n            if (this._scrollbar.current && this._scrollbar.current.getScrollTop() !== this.state.scrollTop) {\n                this._scrollbar.current.scrollTop(this.state.scrollTop);\n            }\n        }\n    }, {\n        key: '_scrollToRow',\n        value: function _scrollToRow(props) {\n            var _this2 = this;\n\n            var scrollIndex = this._getSymbolIndexFromProps(props);\n            var grid = this._list.Grid;\n\n            var scrollTop = 0;\n\n            this.props.updateShouldInstrumentBeCentered(false);\n\n            underscore__WEBPACK_IMPORTED_MODULE_1___default.a.delay(function () {\n                if (!_this2._isMounted) {\n                    return;\n                }\n\n                _this2._list && _this2._list.scrollToRow(scrollIndex === -1 ? 0 : scrollIndex);\n                scrollTop = grid && grid.state.scrollTop;\n                _this2.setState({ scrollTop: scrollTop });\n            }, 0);\n        }\n    }, {\n        key: '_getSymbolIndexFromProps',\n        value: function _getSymbolIndexFromProps(props) {\n            return underscore__WEBPACK_IMPORTED_MODULE_1___default.a.indexOf(props.symbols, props.selectedSymbol);\n        }\n    }, {\n        key: '_rowRenderer',\n        value: function _rowRenderer(params) {\n            var _props = this.props,\n                renderer = _props.renderer,\n                symbols = _props.symbols;\n            var index = params.index,\n                key = params.key,\n                parent = params.parent;\n\n            var symbol = symbols[index];\n\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                react_virtualized__WEBPACK_IMPORTED_MODULE_4__[\"CellMeasurer\"],\n                { cache: this._cache, columnIndex: 0, key: key, parent: parent, rowIndex: index },\n                renderer(_extends({}, params, { symbol: symbol, measurer: this.measurer }))\n            );\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            var _props2 = this.props,\n                path = _props2.path,\n                symbols = _props2.symbols,\n                renderer = _props2.renderer,\n                totalPositionsCount = _props2.totalPositionsCount,\n                totalOrdersCount = _props2.totalOrdersCount,\n                symbolsSortName = _props2.symbolsSortName,\n                symbolsSortDirection = _props2.symbolsSortDirection,\n                scrollAlignmentTop = _props2.scrollAlignmentTop;\n\n\n            if (!underscore__WEBPACK_IMPORTED_MODULE_1___default.a.isFunction(renderer)) {\n                return null;\n            }\n\n            var listKey = 'list-' + path + '-' + totalPositionsCount + '-' + totalOrdersCount + '-' + symbolsSortName + '-' + symbolsSortDirection;\n            var listStyle = {\n                overflowX: false,\n                overflowY: false\n            };\n\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                react_virtualized__WEBPACK_IMPORTED_MODULE_4__[\"AutoSizer\"],\n                null,\n                function (_ref2) {\n                    var height = _ref2.height,\n                        width = _ref2.width;\n                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_7__[\"Scrollbars\"],\n                        {\n                            autoHide: true,\n                            ref: _this3._scrollbar,\n                            style: { width: width, height: height },\n                            renderTrackVertical: function renderTrackVertical(_ref3) {\n                                var style = _ref3.style,\n                                    props = _objectWithoutProperties(_ref3, ['style']);\n\n                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', _extends({}, props, { style: _extends({}, style, { width: '8px', top: '0px', bottom: '0px', right: '1px', borderRadius: 0 }) }));\n                            },\n                            renderThumbVertical: function renderThumbVertical(_ref4) {\n                                var style = _ref4.style,\n                                    props = _objectWithoutProperties(_ref4, ['style']);\n\n                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', _extends({}, props, { style: _extends({}, style), className: 'custom-scrolling-vertical-thumb' }));\n                            },\n                            renderView: function renderView(_ref5) {\n                                var style = _ref5.style,\n                                    props = _objectWithoutProperties(_ref5, ['style']);\n\n                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', _extends({}, props, { style: _extends({}, style, { overflowX: 'hidden', marginBottom: 0 }) }));\n                            },\n                            onScroll: _this3.handleScroll,\n                            onUpdate: _this3.handleUpdate },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_4__[\"List\"], {\n                            ref: function ref(node) {\n                                _this3._list = node;\n                            },\n                            style: listStyle,\n                            key: listKey,\n                            height: height,\n                            'aria-label': '',\n                            rowCount: underscore__WEBPACK_IMPORTED_MODULE_1___default.a.size(symbols),\n                            overscanRowCount: 10,\n                            width: width,\n                            deferredMeasurementCache: _this3._cache,\n                            rowHeight: _this3._cache.rowHeight,\n                            rowRenderer: _this3._rowRenderer,\n                            scrollToAlignment: scrollAlignmentTop ? 'start' : 'center'\n                        })\n                    );\n                }\n            );\n        }\n    }]);\n\n    return VirtualInstrumentListWrapper;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nVirtualInstrumentListWrapper.defaultProps = {\n    symbols: [],\n    shouldShowPositions: true,\n    shouldShowOrders: true,\n    renderer: underscore__WEBPACK_IMPORTED_MODULE_1___default.a.noop\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapState, mapDispatch)(VirtualInstrumentListWrapper));\n\n//# sourceURL=webpack:///./src/js/components/virtual-instrument-list/VirtualInstrumentListWrapper.jsx?");

/***/ })

}]);