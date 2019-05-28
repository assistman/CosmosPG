webpackJsonp([49],{

/***/ 1906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n// EXTERNAL MODULE: ./src/js/common.types.js\nvar common_types = __webpack_require__(13);\n\n// EXTERNAL MODULE: ./src/js/components/DeviceComponent.js\nvar DeviceComponent = __webpack_require__(293);\nvar DeviceComponent_default = /*#__PURE__*/__webpack_require__.n(DeviceComponent);\n\n// EXTERNAL MODULE: ./src/js/modules/open-positions/components/PositionsCount.jsx\nvar PositionsCount = __webpack_require__(2560);\n\n// EXTERNAL MODULE: ./src/js/modules/open-positions/jsx/open.positions.detach.button.jsx\nvar open_positions_detach_button = __webpack_require__(2818);\nvar open_positions_detach_button_default = /*#__PURE__*/__webpack_require__.n(open_positions_detach_button);\n\n// EXTERNAL MODULE: ./src/js/modules/orders/components/OrdersCount.jsx\nvar OrdersCount = __webpack_require__(2561);\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(4);\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// EXTERNAL MODULE: ./node_modules/react-classset/classSet.js\nvar classSet = __webpack_require__(15);\nvar classSet_default = /*#__PURE__*/__webpack_require__.n(classSet);\n\n// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules\nvar es = __webpack_require__(7);\n\n// EXTERNAL MODULE: ./src/js/store/ui.actions.js\nvar ui_actions = __webpack_require__(54);\n\n// EXTERNAL MODULE: ./node_modules/underscore/underscore.js\nvar underscore = __webpack_require__(0);\nvar underscore_default = /*#__PURE__*/__webpack_require__.n(underscore);\n\n// EXTERNAL MODULE: ./src/js/common/localization.js\nvar localization = __webpack_require__(26);\nvar localization_default = /*#__PURE__*/__webpack_require__.n(localization);\n\n// CONCATENATED MODULE: ./src/js/modules/instruments-tree/components/InstrumentCategoryName.jsx\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nfunction InstrumentCategoryName_mapState(state, _ref) {\n    var pathUrl = _ref.pathUrl;\n\n    var category = state.instruments.treePathsMap[pathUrl];\n\n    return {\n        localizationKey: category && category._localizedNameKey,\n        name: category && category.category\n    };\n}\n\n/* harmony default export */ var InstrumentCategoryName = (Object(es[\"connect\"])(InstrumentCategoryName_mapState)(function (_ref2) {\n    var value = _ref2.value,\n        pathUrl = _ref2.pathUrl,\n        localizationKey = _ref2.localizationKey,\n        name = _ref2.name,\n        dispatch = _ref2.dispatch,\n        as = _ref2.as,\n        props = _objectWithoutProperties(_ref2, ['value', 'pathUrl', 'localizationKey', 'name', 'dispatch', 'as']);\n\n    return react_default.a.createElement(as || 'div', _extends({}, props), localization_default.a.fixCategoryName(localizationKey, name));\n}));\n// EXTERNAL MODULE: ./src/js/core.js\nvar core = __webpack_require__(5);\nvar core_default = /*#__PURE__*/__webpack_require__.n(core);\n\n// CONCATENATED MODULE: ./src/js/modules/instruments-tree/components/InstrumentTreeCategory.jsx\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\nvar InstrumentTreeCategory_InstrumentTreeCategory = function (_Component) {\n    _inherits(InstrumentTreeCategory, _Component);\n\n    function InstrumentTreeCategory(props) {\n        _classCallCheck(this, InstrumentTreeCategory);\n\n        var _this = _possibleConstructorReturn(this, (InstrumentTreeCategory.__proto__ || Object.getPrototypeOf(InstrumentTreeCategory)).call(this, props));\n\n        _this.click = _this.click.bind(_this);\n        return _this;\n    }\n\n    _createClass(InstrumentTreeCategory, [{\n        key: 'click',\n        value: function click(e) {\n            e.preventDefault();\n            e.stopPropagation();\n            this.props.selectCategoryPath(this.props.node._pathUrl);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var classes = classSet_default()({\n                node: true,\n                tree_node_selected: this.props.selected\n            });\n\n            return react_default.a.createElement(\n                'div',\n                { className: classes, onMouseDown: this.click },\n                react_default.a.createElement(\n                    'div',\n                    { className: 'name' },\n                    react_default.a.createElement('div', { className: 'icon' }),\n                    react_default.a.createElement(InstrumentCategoryName, { as: 'div', className: 'text', pathUrl: this.props.node._pathUrl })\n                )\n            );\n        }\n    }]);\n\n    return InstrumentTreeCategory;\n}(react[\"Component\"]);\n\nfunction mapStateToProps(state, props) {\n    var _state$ui = state.ui,\n        selectedInstrumentCategoryTreePath = _state$ui.selectedInstrumentCategoryTreePath,\n        section = _state$ui.section;\n\n\n    return {\n        selected: section === common_types[\"UI_SECTION_TRADING\"] && props.node._pathUrl === selectedInstrumentCategoryTreePath\n    };\n}\n\nfunction mapDispatchToProps(dispatch) {\n    return {\n        selectCategoryPath: underscore_default.a.throttle(function (path) {\n            dispatch(Object(ui_actions[\"selectInstrumentCategoryTreePath\"])(path));\n            dispatch(Object(ui_actions[\"selectFirstSymbolInSymbolList\"])(path));\n            dispatch(Object(ui_actions[\"closeInstrumentDetails\"])());\n            dispatch(Object(ui_actions[\"setTradingSection\"])());\n        }, 10)\n    };\n}\n\n/* harmony default export */ var components_InstrumentTreeCategory = (Object(es[\"connect\"])(mapStateToProps, mapDispatchToProps)(InstrumentTreeCategory_InstrumentTreeCategory));\n// EXTERNAL MODULE: ./src/js/modules/instruments-tree/instruments.tree.utils.js\nvar instruments_tree_utils = __webpack_require__(287);\n\n// EXTERNAL MODULE: ./src/js/store/ui.selectors.js\nvar ui_selectors = __webpack_require__(155);\n\n// CONCATENATED MODULE: ./src/js/modules/instruments-tree/components/InstrumentCategoryNode.jsx\nvar InstrumentCategoryNode__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction InstrumentCategoryNode__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction InstrumentCategoryNode__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction InstrumentCategoryNode__inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar InstrumentCategoryNode_mapState = function mapState(state) {\n    return {\n        categoriesOpenState: Object(ui_selectors[\"getInstrumentTreeCategoriesOpenState\"])(state),\n        selectedInstrumentCategoryTreePath: Object(ui_selectors[\"getSelectedInstrumentCategoryTreePath\"])(state)\n    };\n};\n\nvar InstrumentCategoryNode_mapDispatch = function mapDispatch(dispatch) {\n    return {\n        setCategoryState: function setCategoryState() {\n            dispatch(ui_actions[\"setInstrumentTreeCategoryState\"].apply(undefined, arguments));\n        }\n    };\n};\n\nvar InstrumentCategoryNode_InstrumentCategoryNodeComponent = function (_Component) {\n    InstrumentCategoryNode__inherits(InstrumentCategoryNodeComponent, _Component);\n\n    function InstrumentCategoryNodeComponent(props) {\n        InstrumentCategoryNode__classCallCheck(this, InstrumentCategoryNodeComponent);\n\n        var _this = InstrumentCategoryNode__possibleConstructorReturn(this, (InstrumentCategoryNodeComponent.__proto__ || Object.getPrototypeOf(InstrumentCategoryNodeComponent)).call(this, props));\n\n        _this.click = _this.click.bind(_this);\n        return _this;\n    }\n\n    InstrumentCategoryNode__createClass(InstrumentCategoryNodeComponent, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.checkShouldCategoryBeOpened(this.props);\n        }\n    }, {\n        key: 'componentDidUpdate',\n        value: function componentDidUpdate() {\n            this.checkShouldCategoryBeOpened(this.props);\n        }\n    }, {\n        key: 'checkShouldCategoryBeOpened',\n        value: function checkShouldCategoryBeOpened(props) {\n            var node = props.node,\n                selectedInstrumentCategoryTreePath = props.selectedInstrumentCategoryTreePath,\n                setCategoryState = props.setCategoryState,\n                categoriesOpenState = props.categoriesOpenState;\n\n\n            if (categoriesOpenState[node._pathUrl] === true) {\n                return;\n            }\n\n            if (node._pathUrl && this.checkIsCategoryActive(node._pathUrl, selectedInstrumentCategoryTreePath)) {\n                setCategoryState(node._pathUrl, true);\n            }\n        }\n    }, {\n        key: 'checkIsCategoryActive',\n        value: function checkIsCategoryActive(nodePath, path) {\n            var lowerCasedPath = String(path).toLowerCase();\n            var lowerCasedCategory = String(nodePath).toLowerCase();\n\n            return lowerCasedPath.indexOf(lowerCasedCategory) !== -1;\n        }\n    }, {\n        key: 'click',\n        value: function click(event) {\n            event.stopPropagation();\n            var _props = this.props,\n                node = _props.node,\n                categoriesOpenState = _props.categoriesOpenState,\n                selectedInstrumentCategoryTreePath = _props.selectedInstrumentCategoryTreePath;\n\n\n            if (!this.checkIsCategoryActive(node._pathUrl, selectedInstrumentCategoryTreePath)) {\n                this.props.setCategoryState(node._pathUrl, !categoriesOpenState[node._pathUrl]);\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _props2 = this.props,\n                node = _props2.node,\n                categoriesOpenState = _props2.categoriesOpenState;\n\n            var isClosed = !categoriesOpenState[node._pathUrl];\n\n            if (node.empty) {\n                return null;\n            }\n\n            var classes = classSet_default()({\n                node: true,\n                folder: true,\n                closed: isClosed\n            });\n\n            return react_default.a.createElement(\n                'div',\n                { className: classes },\n                react_default.a.createElement(\n                    'div',\n                    { className: 'name', onClick: this.click },\n                    react_default.a.createElement(\n                        'div',\n                        { className: 'icon' },\n                        react_default.a.createElement('i', { className: 'arrow' })\n                    ),\n                    react_default.a.createElement(InstrumentCategoryName, { as: 'div', className: 'text', pathUrl: node._pathUrl })\n                ),\n                !isClosed && node.elements && node.elements.length && react_default.a.createElement(\n                    'div',\n                    { className: 'children' },\n                    underscore_default.a.map(node.elements, function (category) {\n                        if (Object(instruments_tree_utils[\"f\" /* isEmptyCategory */])(category)) {\n                            return null;\n                        }\n\n                        return Object(instruments_tree_utils[\"e\" /* hasSubCategories */])(category) ? react_default.a.createElement(InstrumentCategoryNode, { key: category._pathUrl, node: category }) : react_default.a.createElement(components_InstrumentTreeCategory, { key: category._pathUrl, node: category });\n                    })\n                )\n            );\n        }\n    }]);\n\n    return InstrumentCategoryNodeComponent;\n}(react[\"Component\"]);\n\nvar InstrumentCategoryNode = Object(es[\"connect\"])(InstrumentCategoryNode_mapState, InstrumentCategoryNode_mapDispatch)(InstrumentCategoryNode_InstrumentCategoryNodeComponent);\n\n/* harmony default export */ var components_InstrumentCategoryNode = (InstrumentCategoryNode);\n// CONCATENATED MODULE: ./src/js/modules/instruments-tree/components/InstrumentTree.jsx\n\n\n\n\n\n\n\nfunction InstrumentTree_mapStateToProps(state) {\n    return {\n        tree: state.instruments.tree\n    };\n}\n\nvar InstrumentTree_InstrumentTree = function InstrumentTree(_ref) {\n    var tree = _ref.tree;\n\n    var instrumentTree = underscore_default.a.map(tree, function (node) {\n\n        if (node.empty) {\n            return null;\n        }\n\n        if (Object(instruments_tree_utils[\"e\" /* hasSubCategories */])(node)) {\n            return react_default.a.createElement(components_InstrumentCategoryNode, { key: node._pathUrl, node: node });\n        }\n\n        return react_default.a.createElement(components_InstrumentTreeCategory, { key: node._pathUrl, node: node });\n    });\n\n    return react_default.a.createElement(\n        'div',\n        { className: 'tree-container' },\n        instrumentTree\n    );\n};\n\n/* harmony default export */ var components_InstrumentTree = (Object(es[\"connect\"])(InstrumentTree_mapStateToProps)(InstrumentTree_InstrumentTree));\n// CONCATENATED MODULE: ./src/js/modules/instruments-tree/components/InstrumentTreeContainer.jsx\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SelectedSectionState\", function() { return SelectedSectionState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InstrumentTreeContainer\", function() { return InstrumentTreeContainer_InstrumentTreeContainer; });\nvar InstrumentTreeContainer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction InstrumentTreeContainer__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\nfunction InstrumentTreeContainer_mapState(state) {\n    return {\n        section: state.ui.section\n    };\n}\n\nfunction InstrumentTreeContainer_mapDispatch(dispatch) {\n    return {\n        openFavoritesSection: function openFavoritesSection() {\n            dispatch(Object(ui_actions[\"closeInstrumentDetails\"])());\n            dispatch(Object(ui_actions[\"setFavoritesSection\"])());\n        },\n        openOpenPositionSection: function openOpenPositionSection() {\n            dispatch(Object(ui_actions[\"closeInstrumentDetails\"])());\n            dispatch(Object(ui_actions[\"setOpenPositionsSection\"])());\n        },\n        openOrdersSection: function openOrdersSection() {\n            dispatch(Object(ui_actions[\"closeInstrumentDetails\"])());\n            dispatch(Object(ui_actions[\"setOrdersSection\"])());\n        }\n    };\n}\n\nvar SelectedSectionState = Object(es[\"connect\"])(InstrumentTreeContainer_mapState)(function (_ref) {\n    var _classSet;\n\n    var dispatch = _ref.dispatch,\n        className = _ref.className,\n        section = _ref.section,\n        sectionName = _ref.sectionName,\n        children = _ref.children,\n        props = InstrumentTreeContainer__objectWithoutProperties(_ref, ['dispatch', 'className', 'section', 'sectionName', 'children']);\n\n    var classes = classSet_default()((_classSet = {}, _defineProperty(_classSet, className, !!className), _defineProperty(_classSet, 'tree_node_selected', section === sectionName), _classSet));\n\n    return react_default.a.createElement(props.as || 'div', InstrumentTreeContainer__extends({}, props, { className: classes }), children);\n});\n\n\nvar InstrumentTreeContainer_InstrumentTreeContainer = function InstrumentTreeContainer(_ref2) {\n    var openFavoritesSection = _ref2.openFavoritesSection,\n        openOpenPositionSection = _ref2.openOpenPositionSection,\n        openOrdersSection = _ref2.openOrdersSection;\n    return react_default.a.createElement(\n        'div',\n        { className: 'pane pane__column pane__fluid' },\n        react_default.a.createElement(\n            'div',\n            { className: 'tree-container menu' },\n            react_default.a.createElement(\n                SelectedSectionState,\n                { as: 'div', className: 'node', sectionName: common_types[\"UI_SECTION_FAVORITES\"] },\n                react_default.a.createElement(\n                    'div',\n                    { className: 'name', id: 'instruments-tree-favorites', onClick: openFavoritesSection },\n                    react_default.a.createElement('div', { className: 'icon' }),\n                    react_default.a.createElement(\n                        'div',\n                        { className: 'text' },\n                        __('tab.favorites')\n                    )\n                )\n            ),\n            react_default.a.createElement(\n                SelectedSectionState,\n                { as: 'div', className: 'node', sectionName: common_types[\"UI_SECTION_OPEN_POSITION\"] },\n                react_default.a.createElement(\n                    'div',\n                    { className: 'name', id: 'instruments-tree-open-positions', onClick: openOpenPositionSection },\n                    react_default.a.createElement('div', { className: 'icon' }),\n                    react_default.a.createElement(\n                        'div',\n                        { className: 'text flex flex-valign-center' },\n                        __('tab.open_positions'),\n                        react_default.a.createElement(\n                            'div',\n                            { className: 'badge' },\n                            react_default.a.createElement(PositionsCount[\"a\" /* default */], { as: 'span' })\n                        ),\n                        react_default.a.createElement(\n                            DeviceComponent_default.a,\n                            { desktop: true },\n                            react_default.a.createElement(open_positions_detach_button_default.a, { as: 'span' })\n                        )\n                    )\n                )\n            ),\n            react_default.a.createElement(\n                SelectedSectionState,\n                { as: 'div', className: 'node', sectionName: common_types[\"UI_SECTION_ORDERS\"] },\n                react_default.a.createElement(\n                    'div',\n                    { className: 'name', id: 'instruments-tree-orders', onClick: openOrdersSection },\n                    react_default.a.createElement('div', { className: 'icon' }),\n                    react_default.a.createElement(\n                        'div',\n                        { className: 'text  flex flex-valign-center' },\n                        __('tab.orders'),\n                        react_default.a.createElement(\n                            'div',\n                            { className: 'badge' },\n                            react_default.a.createElement(OrdersCount[\"a\" /* default */], { as: 'span' })\n                        )\n                    )\n                )\n            )\n        ),\n        react_default.a.createElement(\n            'div',\n            { className: 'instruments-tree' },\n            react_default.a.createElement(components_InstrumentTree, null)\n        )\n    );\n};\n\n/* harmony default export */ var components_InstrumentTreeContainer = __webpack_exports__[\"default\"] = (Object(es[\"connect\"])(null, InstrumentTreeContainer_mapDispatch)(InstrumentTreeContainer_InstrumentTreeContainer));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/instruments-tree/components/InstrumentTreeContainer.jsx + 4 modules\n// module id = 1906\n// module chunks = 49\n\n//# sourceURL=webpack:///./src/js/modules/instruments-tree/components/InstrumentTreeContainer.jsx_+_4_modules?");

/***/ }),

/***/ 1980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getAllInstrumentSymbolsWithPositions; });\n/* unused harmony export getOpenPositionsMap */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return getTotalPositionsCount; });\n/* unused harmony export getAllInstrumentPositionsCounters */\n/* unused harmony export getInstrumentPositionsCounter */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return isInstrumentPositionsAvailable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return getSortedPositionsSymbols; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_instruments_instruments_utils__ = __webpack_require__(200);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__(44);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_ui_selectors__ = __webpack_require__(155);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_common_selectors__ = __webpack_require__(79);\n\n\n\n\n\n\nvar getPositions = function getPositions(state) {\n    return state.positions;\n};\n\nvar getInstrumentPositions = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__[\"a\" /* createSelector */])(getPositions, function (positions) {\n    return positions.instrumentPositions;\n});\n\nvar getAllInstrumentSymbolsWithPositions = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__[\"a\" /* createSelector */])(getInstrumentPositions, function (positions) {\n    return __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.keys(positions);\n});\n\nvar getInstrumentPositionSymbols = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__[\"a\" /* createSelector */])(getPositions, function (positions) {\n    return __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.keys(positions.instrumentPositions);\n});\n\nvar getOpenPositionsMap = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__[\"a\" /* createSelector */])(getPositions, function (positions) {\n    return positions.OPEN_POSITION;\n});\n\nvar getTotalPositionsCount = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__[\"a\" /* createSelector */])(getPositions, function (positions) {\n    return positions.totalPositionsCount;\n});\n\nvar getAllInstrumentPositionsCounters = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__[\"a\" /* createSelector */])(getPositions, function (positions) {\n    return positions.instrumentPositionsCounter;\n});\n\nvar getInstrumentPositionsCounter = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__[\"a\" /* createSelector */])([getAllInstrumentPositionsCounters, __WEBPACK_IMPORTED_MODULE_4_store_common_selectors__[\"a\" /* getPropValue */]], function (positionsCounters, symbol) {\n    return positionsCounters[symbol];\n});\n\nvar isInstrumentPositionsAvailable = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__[\"a\" /* createSelector */])(getInstrumentPositionsCounter, function (counterPositions) {\n    return !!counterPositions && counterPositions._count > 0;\n});\n\nvar getSortedPositionsSymbols = Object(__WEBPACK_IMPORTED_MODULE_1_reselect__[\"a\" /* createSelector */])([__WEBPACK_IMPORTED_MODULE_2_store_ui_selectors__[\"getInstrumentSymbolMap\"], getInstrumentPositionSymbols, __WEBPACK_IMPORTED_MODULE_2_store_ui_selectors__[\"getSymbolsSortName\"], __WEBPACK_IMPORTED_MODULE_2_store_ui_selectors__[\"getSymbolsSortDirection\"]], __WEBPACK_IMPORTED_MODULE_0_modules_instruments_instruments_utils__[\"n\" /* sortInstruments */]);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/open-positions/positions.selectors.js\n// module id = 1980\n// module chunks = 2 20 21 22 23 24 49 58\n\n//# sourceURL=webpack:///./src/js/modules/open-positions/positions.selectors.js?");

/***/ }),

/***/ 2560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_open_positions_positions_selectors__ = __webpack_require__(1980);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nfunction mapStateToProps(state) {\n    return { value: Object(__WEBPACK_IMPORTED_MODULE_0_open_positions_positions_selectors__[\"c\" /* getTotalPositionsCount */])(state) };\n}\n\nvar PositionsCount = function PositionsCount(_ref) {\n    var value = _ref.value,\n        as = _ref.as,\n        dispatch = _ref.dispatch,\n        props = _objectWithoutProperties(_ref, ['value', 'as', 'dispatch']);\n\n    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(as || 'span', _extends({}, props), value);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__[\"connect\"])(mapStateToProps)(PositionsCount));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/open-positions/components/PositionsCount.jsx\n// module id = 2560\n// module chunks = 2 49\n\n//# sourceURL=webpack:///./src/js/modules/open-positions/components/PositionsCount.jsx?");

/***/ }),

/***/ 2561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_selectors__ = __webpack_require__(797);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nfunction mapState(state) {\n    return {\n        value: Object(__WEBPACK_IMPORTED_MODULE_2__orders_selectors__[\"e\" /* getTotalOrdersCount */])(state)\n    };\n}\n\nvar OrdersCount = function OrdersCount(_ref) {\n    var as = _ref.as,\n        value = _ref.value,\n        dispatch = _ref.dispatch,\n        props = _objectWithoutProperties(_ref, ['as', 'value', 'dispatch']);\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(as || 'span', _extends({}, props), value);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapState)(OrdersCount));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/orders/components/OrdersCount.jsx\n// module id = 2561\n// module chunks = 2 49\n\n//# sourceURL=webpack:///./src/js/modules/orders/components/OrdersCount.jsx?");

/***/ }),

/***/ 2818:
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(4);\nvar createReactClass = __webpack_require__(14);\nvar classSet = __webpack_require__(15);\nvar user = __webpack_require__(10);\nvar positions = __webpack_require__(65);\nvar core = __webpack_require__(5);\n\nvar settings = function settings() {\n    return user.getApplicationSettings();\n};\n\nmodule.exports = createReactClass({\n    displayName: 'exports',\n    getDefaultProps: function getDefaultProps() {\n        return {\n            as: 'span',\n            className: ''\n        };\n    },\n    getInitialState: function getInitialState() {\n        return {\n            visible: positions.size(),\n            open: settings().floatingOpenPositionsEnabled()\n        };\n    },\n    componentDidMount: function componentDidMount() {\n        settings().on('change:floatingOpenPositionsEnabled', this.handle, this);\n        positions.on('remove update', this.handle, this);\n    },\n    componentWillUnmount: function componentWillUnmount() {\n        settings().off('change:floatingOpenPositionsEnabled', this.handle, this);\n        positions.off('remove update', this.handle, this);\n    },\n    handle: function handle() {\n        this.setState({\n            visible: positions.size(),\n            open: settings().floatingOpenPositionsEnabled()\n        });\n    },\n    click: function click(event) {\n        event.stopPropagation();\n        var isFloatingOpenPositionEnabled = !settings().floatingOpenPositionsEnabled();\n\n        settings().floatingOpenPositionsEnabled(isFloatingOpenPositionEnabled);\n        core.trigger('ui:click:floating:open-positions', isFloatingOpenPositionEnabled);\n    },\n    render: function render() {\n        var _props = this.props,\n            as = _props.as,\n            className = _props.className;\n        var _state = this.state,\n            open = _state.open,\n            visible = _state.visible;\n\n        var classes = classSet({\n            'icon-open-floating-view': !open,\n            'icon-close-floating-view': open\n        });\n\n        if (!visible) {\n            return null;\n        }\n\n        return React.createElement(as, { className: className + ' ' + classes, onClick: this.click });\n    }\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/open-positions/jsx/open.positions.detach.button.jsx\n// module id = 2818\n// module chunks = 49\n\n//# sourceURL=webpack:///./src/js/modules/open-positions/jsx/open.positions.detach.button.jsx?");

/***/ })

});