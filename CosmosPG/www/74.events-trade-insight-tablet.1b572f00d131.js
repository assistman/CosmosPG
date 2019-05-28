webpackJsonp([74],{

/***/ 1998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (_ref) {\n    var _ref$title = _ref.title,\n        title = _ref$title === undefined ? '' : _ref$title,\n        _ref$start = _ref.start,\n        start = _ref$start === undefined ? 0 : _ref$start,\n        _ref$end = _ref.end,\n        end = _ref$end === undefined ? 0 : _ref$end,\n        _ref$description = _ref.description,\n        description = _ref$description === undefined ? '' : _ref$description,\n        _ref$href = _ref.href,\n        href = _ref$href === undefined ? window.location.href : _ref$href,\n        props = _objectWithoutProperties(_ref, ['title', 'start', 'end', 'description', 'href']);\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({ href: encodeURI(['https://www.google.com/calendar/render', '?action=TEMPLATE', '&text=' + title, '&dates=' + (__WEBPACK_IMPORTED_MODULE_1_moment___default()(start).format('YYYYMMDD[T]HHmmss') || ''), '/' + (__WEBPACK_IMPORTED_MODULE_1_moment___default()(end).format('YYYYMMDD[T]HHmmss') || ''), '&details=' + description, '&location=' + href + '?path=webinars', '&sprop=&sprop=name:'].join('')) }, props));\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/GoogleCalendarLink.jsx\n// module id = 1998\n// module chunks = 0 1 2 74 75 76\n\n//# sourceURL=webpack:///./src/js/components/GoogleCalendarLink.jsx?");

/***/ }),

/***/ 1999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (_ref) {\n    var _ref$title = _ref.title,\n        title = _ref$title === undefined ? '' : _ref$title,\n        _ref$start = _ref.start,\n        start = _ref$start === undefined ? 0 : _ref$start,\n        _ref$end = _ref.end,\n        end = _ref$end === undefined ? 0 : _ref$end,\n        _ref$description = _ref.description,\n        description = _ref$description === undefined ? '' : _ref$description,\n        _ref$href = _ref.href,\n        href = _ref$href === undefined ? window.location.href : _ref$href,\n        props = _objectWithoutProperties(_ref, ['title', 'start', 'end', 'description', 'href']);\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'a',\n        _extends({ href: encodeURI('data:text/calendar;charset=utf8,' + ['BEGIN:VCALENDAR', 'VERSION:2.0', 'BEGIN:VEVENT', 'URL:' + href + '?path=webinars', 'DTSTART:' + __WEBPACK_IMPORTED_MODULE_1_moment___default()(start).format('YYYYMMDD[T]HHmmss'), 'DTEND:' + __WEBPACK_IMPORTED_MODULE_1_moment___default()(end).format('YYYYMMDD[T]HHmmss'), 'SUMMARY:' + title, 'DESCRIPTION:' + description, 'END:VEVENT', 'END:VCALENDAR'].join('\\n')) }, props),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon' })\n    );\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/OutlookCalendarLink.jsx\n// module id = 1999\n// module chunks = 0 1 2 74 75 76\n\n//# sourceURL=webpack:///./src/js/components/OutlookCalendarLink.jsx?");

/***/ }),

/***/ 2295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__ = __webpack_require__(1956);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nfunction mapState(state, _ref) {\n    var eventId = _ref.eventId;\n\n    return {\n        src: Object(__WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__[\"c\" /* getEventsAndTradeEventFlag */])(state, eventId)\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapState)(function (_ref2) {\n    var src = _ref2.src,\n        eventId = _ref2.eventId,\n        dispatch = _ref2.dispatch,\n        props = _objectWithoutProperties(_ref2, ['src', 'eventId', 'dispatch']);\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', _extends({}, props, { src: src }));\n}));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/events-and-trade/components/EventsAndTradeFlag.jsx\n// module id = 2295\n// module chunks = 74 75 76\n\n//# sourceURL=webpack:///./src/js/modules/events-and-trade/components/EventsAndTradeFlag.jsx?");

/***/ }),

/***/ 2296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__ = __webpack_require__(1956);\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nfunction mapState(state, _ref) {\n    var eventId = _ref.eventId,\n        _ref$as = _ref.as,\n        as = _ref$as === undefined ? 'span' : _ref$as;\n\n    return {\n        value: Object(__WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__[\"d\" /* getEventsAndTradeEventName */])(state, eventId),\n        as: as\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapState)(function (_ref2) {\n    var value = _ref2.value,\n        dispatch = _ref2.dispatch,\n        eventId = _ref2.eventId,\n        props = _objectWithoutProperties(_ref2, ['value', 'dispatch', 'eventId']);\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        props.as,\n        props,\n        value\n    );\n}));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/events-and-trade/components/EventsAndTradeName.jsx\n// module id = 2296\n// module chunks = 74 75 76\n\n//# sourceURL=webpack:///./src/js/modules/events-and-trade/components/EventsAndTradeName.jsx?");

/***/ }),

/***/ 2297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__ = __webpack_require__(1956);\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nfunction mapState(state, _ref) {\n    var eventId = _ref.eventId,\n        _ref$as = _ref.as,\n        as = _ref$as === undefined ? 'span' : _ref$as;\n\n    return {\n        value: Object(__WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__[\"a\" /* getEventsAndTradeEventDate */])(state, eventId),\n        as: as\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapState)(function (_ref2) {\n    var value = _ref2.value,\n        dispatch = _ref2.dispatch,\n        eventId = _ref2.eventId,\n        props = _objectWithoutProperties(_ref2, ['value', 'dispatch', 'eventId']);\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        props.as,\n        props,\n        value\n    );\n}));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/events-and-trade/components/EventsAndTradeDate.jsx\n// module id = 2297\n// module chunks = 74 75 76\n\n//# sourceURL=webpack:///./src/js/modules/events-and-trade/components/EventsAndTradeDate.jsx?");

/***/ }),

/***/ 2298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__ = __webpack_require__(1956);\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nfunction mapState(state, _ref) {\n    var eventId = _ref.eventId,\n        _ref$as = _ref.as,\n        as = _ref$as === undefined ? 'span' : _ref$as;\n\n    return {\n        value: Object(__WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__[\"e\" /* getEventsAndTradeEventOpportunities */])(state, eventId),\n        as: as\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapState)(function (_ref2) {\n    var value = _ref2.value,\n        dispatch = _ref2.dispatch,\n        eventId = _ref2.eventId,\n        props = _objectWithoutProperties(_ref2, ['value', 'dispatch', 'eventId']);\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        props.as,\n        props,\n        value,\n        ' ',\n        __('autochartist.text.opportunities_available')\n    );\n}));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/events-and-trade/components/EventsAndTradeOpportunities.jsx\n// module id = 2298\n// module chunks = 74 75 76\n\n//# sourceURL=webpack:///./src/js/modules/events-and-trade/components/EventsAndTradeOpportunities.jsx?");

/***/ }),

/***/ 2299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__ = __webpack_require__(1956);\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nfunction mapState(state, _ref) {\n    var eventId = _ref.eventId,\n        _ref$as = _ref.as,\n        as = _ref$as === undefined ? 'span' : _ref$as;\n\n    return {\n        value: Object(__WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__[\"f\" /* getEventsAndTradeEventPrediction */])(state, eventId),\n        as: as\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapState)(function (_ref2) {\n    var value = _ref2.value,\n        dispatch = _ref2.dispatch,\n        eventId = _ref2.eventId,\n        props = _objectWithoutProperties(_ref2, ['value', 'dispatch', 'eventId']);\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        props.as,\n        props,\n        value\n    );\n}));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/events-and-trade/components/EventsAndTradePrediction.jsx\n// module id = 2299\n// module chunks = 74 75 76\n\n//# sourceURL=webpack:///./src/js/modules/events-and-trade/components/EventsAndTradePrediction.jsx?");

/***/ }),

/***/ 2300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_GoogleCalendarLink__ = __webpack_require__(1998);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_and_trade_selectors__ = __webpack_require__(1956);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\n\nfunction mapState(state, _ref) {\n    var eventId = _ref.eventId;\n\n    return {\n        title: Object(__WEBPACK_IMPORTED_MODULE_3__events_and_trade_selectors__[\"d\" /* getEventsAndTradeEventName */])(state, eventId) || '',\n        start: Object(__WEBPACK_IMPORTED_MODULE_3__events_and_trade_selectors__[\"g\" /* getEventsAndTradeEventTimestamp */])(state, eventId) || 0,\n        end: Object(__WEBPACK_IMPORTED_MODULE_3__events_and_trade_selectors__[\"g\" /* getEventsAndTradeEventTimestamp */])(state, eventId) || 0,\n        description: Object(__WEBPACK_IMPORTED_MODULE_3__events_and_trade_selectors__[\"b\" /* getEventsAndTradeEventDescription */])(state, eventId) || ''\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__[\"connect\"])(mapState)(function (_ref2) {\n    var eventId = _ref2.eventId,\n        dispatch = _ref2.dispatch,\n        title = _ref2.title,\n        start = _ref2.start,\n        end = _ref2.end,\n        description = _ref2.description,\n        className = _ref2.className,\n        _ref2$href = _ref2.href,\n        href = _ref2$href === undefined ? window.location.href : _ref2$href,\n        props = _objectWithoutProperties(_ref2, ['eventId', 'dispatch', 'title', 'start', 'end', 'description', 'className', 'href']);\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components_GoogleCalendarLink__[\"a\" /* default */], _extends({\n        title: title,\n        start: start,\n        end: end,\n        description: description,\n        href: href,\n        className: 'icon icon-google ' + (className ? className : '')\n    }, props));\n}));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/events-and-trade/components/EventsAndTradeGoogleCalendarLink.jsx\n// module id = 2300\n// module chunks = 74 75 76\n\n//# sourceURL=webpack:///./src/js/modules/events-and-trade/components/EventsAndTradeGoogleCalendarLink.jsx?");

/***/ }),

/***/ 2301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_OutlookCalendarLink__ = __webpack_require__(1999);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_and_trade_selectors__ = __webpack_require__(1956);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\n\nfunction mapState(state, _ref) {\n    var eventId = _ref.eventId;\n\n    return {\n        title: Object(__WEBPACK_IMPORTED_MODULE_3__events_and_trade_selectors__[\"d\" /* getEventsAndTradeEventName */])(state, eventId) || '',\n        start: Object(__WEBPACK_IMPORTED_MODULE_3__events_and_trade_selectors__[\"g\" /* getEventsAndTradeEventTimestamp */])(state, eventId) || 0,\n        end: Object(__WEBPACK_IMPORTED_MODULE_3__events_and_trade_selectors__[\"g\" /* getEventsAndTradeEventTimestamp */])(state, eventId) || 0,\n        description: Object(__WEBPACK_IMPORTED_MODULE_3__events_and_trade_selectors__[\"b\" /* getEventsAndTradeEventDescription */])(state, eventId) || ''\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__[\"connect\"])(mapState)(function (_ref2) {\n    var eventId = _ref2.eventId,\n        dispatch = _ref2.dispatch,\n        title = _ref2.title,\n        start = _ref2.start,\n        end = _ref2.end,\n        description = _ref2.description,\n        className = _ref2.className,\n        _ref2$href = _ref2.href,\n        href = _ref2$href === undefined ? window.location.href : _ref2$href,\n        props = _objectWithoutProperties(_ref2, ['eventId', 'dispatch', 'title', 'start', 'end', 'description', 'className', 'href']);\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components_OutlookCalendarLink__[\"a\" /* default */], _extends({\n        title: title,\n        start: start,\n        end: end,\n        description: description,\n        href: href,\n        className: 'icon icon-outlook ' + (className ? className : '')\n    }, props));\n}));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/events-and-trade/components/EventsAndTradeOutlookCalendarLink.jsx\n// module id = 2301\n// module chunks = 74 75 76\n\n//# sourceURL=webpack:///./src/js/modules/events-and-trade/components/EventsAndTradeOutlookCalendarLink.jsx?");

/***/ }),

/***/ 2302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__ = __webpack_require__(1956);\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\nfunction mapState(state, _ref) {\n    var eventId = _ref.eventId,\n        _ref$as = _ref.as,\n        as = _ref$as === undefined ? 'span' : _ref$as;\n\n    return {\n        value: Object(__WEBPACK_IMPORTED_MODULE_2__events_and_trade_selectors__[\"b\" /* getEventsAndTradeEventDescription */])(state, eventId),\n        as: as\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapState)(function (_ref2) {\n    var value = _ref2.value,\n        dispatch = _ref2.dispatch,\n        eventId = _ref2.eventId,\n        props = _objectWithoutProperties(_ref2, ['value', 'dispatch', 'eventId']);\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        props.as,\n        props,\n        value\n    );\n}));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/events-and-trade/components/EventsAndTradeDescription.jsx\n// module id = 2302\n// module chunks = 74 75 76\n\n//# sourceURL=webpack:///./src/js/modules/events-and-trade/components/EventsAndTradeDescription.jsx?");

/***/ }),

/***/ 2823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_classset__ = __webpack_require__(15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_classset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_classset__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_and_trade_actions__ = __webpack_require__(2091);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_ui_actions__ = __webpack_require__(54);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_and_trade_selectors__ = __webpack_require__(1956);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_virtualized__ = __webpack_require__(795);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_GoogleCalendarLink__ = __webpack_require__(1998);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components_OutlookCalendarLink__ = __webpack_require__(1999);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__EventsAndTradeFlag__ = __webpack_require__(2295);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__EventsAndTradeName__ = __webpack_require__(2296);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__EventsAndTradeDate__ = __webpack_require__(2297);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__EventsAndTradeOpportunities__ = __webpack_require__(2298);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__EventsAndTradePrediction__ = __webpack_require__(2299);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__EventsAndTradeGoogleCalendarLink__ = __webpack_require__(2300);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__EventsAndTradeOutlookCalendarLink__ = __webpack_require__(2301);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__EventsAndTradeDescription__ = __webpack_require__(2302);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CLOSED_ROW_HEIGHT = 150;\n\nfunction mapStateToProps(state, _ref) {\n    var symbol = _ref.symbol;\n\n    return {\n        list: Object(__WEBPACK_IMPORTED_MODULE_5__events_and_trade_selectors__[\"h\" /* getEventsAndTradeEventsList */])(state, symbol),\n        openedInsightsRows: Object(__WEBPACK_IMPORTED_MODULE_5__events_and_trade_selectors__[\"i\" /* getEventsAndTradeOpenedInsightsRows */])(state)\n    };\n}\n\nfunction mapDispatch(dispatch, state) {\n    return {\n        loadEvents: function loadEvents() {\n            dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__events_and_trade_actions__[\"b\" /* loadEventsAndTrades */])());\n        },\n        onItemClick: function onItemClick(eventId) {\n            dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__events_and_trade_actions__[\"c\" /* selectEvent */])(eventId));\n            dispatch(Object(__WEBPACK_IMPORTED_MODULE_4_store_ui_actions__[\"closeInstrumentDetails\"])());\n        },\n        toggleRow: function toggleRow(eventId) {\n            dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__events_and_trade_actions__[\"d\" /* toggleRow */])(eventId));\n        }\n    };\n}\n\nvar EventsAndTradeInsightTablet = function (_React$Component) {\n    _inherits(EventsAndTradeInsightTablet, _React$Component);\n\n    function EventsAndTradeInsightTablet(props, context) {\n        _classCallCheck(this, EventsAndTradeInsightTablet);\n\n        var _this = _possibleConstructorReturn(this, (EventsAndTradeInsightTablet.__proto__ || Object.getPrototypeOf(EventsAndTradeInsightTablet)).call(this, props, context));\n\n        _this._cache = new __WEBPACK_IMPORTED_MODULE_6_react_virtualized__[\"c\" /* CellMeasurerCache */]({\n            fixedWidth: true,\n            minHeight: CLOSED_ROW_HEIGHT\n        });\n\n        _this._rowRenderer = _this._rowRenderer.bind(_this);\n        _this._toggleRow = _this._toggleRow.bind(_this);\n        _this._resizeAll = _this._resizeAll.bind(_this);\n        _this._setListRef = _this._setListRef.bind(_this);\n        return _this;\n    }\n\n    _createClass(EventsAndTradeInsightTablet, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.loadEvents();\n            window.addEventListener('resize', this._resizeAll);\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            window.removeEventListener('resize', this._resizeAll);\n        }\n    }, {\n        key: '_resizeAll',\n        value: function _resizeAll() {\n            this._cache.clearAll();\n\n            if (this._list) {\n                this._list.recomputeRowHeights();\n            }\n        }\n    }, {\n        key: '_setListRef',\n        value: function _setListRef(ref) {\n            this._list = ref;\n        }\n    }, {\n        key: '_toggleRow',\n        value: function _toggleRow(e, index, eventId) {\n            e.preventDefault();\n            e.stopPropagation();\n\n            this._cache.clear(index, 0);\n\n            if (this._list) {\n                this._list.recomputeRowHeights();\n            }\n\n            this.props.toggleRow(eventId);\n        }\n    }, {\n        key: '_rowRenderer',\n        value: function _rowRenderer(_ref2) {\n            var _this2 = this;\n\n            var index = _ref2.index,\n                key = _ref2.key,\n                parent = _ref2.parent,\n                style = _ref2.style;\n            var _props = this.props,\n                list = _props.list,\n                openedInsightsRows = _props.openedInsightsRows,\n                onItemClick = _props.onItemClick;\n\n\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_6_react_virtualized__[\"b\" /* CellMeasurer */],\n                {\n                    cache: this._cache,\n                    columnIndex: 0,\n                    key: key,\n                    parent: parent,\n                    rowIndex: index\n                },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    'div',\n                    { style: style, className: 'pane pane__column events-and-trade__table-column flex-align-center' },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { className: 'events-and-trade__table-row pane pane--no-margin pane__row flex-valign-center flex-align-between clickable', onClick: function onClick(e) {\n                                return _this2._toggleRow(e, index, list[index]);\n                            } },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            { className: 'pane pane__row pane_padded-small flex-valign-center' },\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                'div',\n                                { className: 'pane events-and-trade__arrow' },\n                                openedInsightsRows[list[index]] ? '▼' : '►'\n                            ),\n                            '\\xA0',\n                            __('events_and_trade.event'),\n                            ':'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            { className: 'pane pane__row pane_padded-small flex-valign-center' },\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__EventsAndTradeFlag__[\"a\" /* default */], { eventId: list[index] }),\n                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__EventsAndTradeName__[\"a\" /* default */], { eventId: list[index] })\n                        )\n                    ),\n                    openedInsightsRows[list[index]] && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__EventsAndTradeDescription__[\"a\" /* default */], { as: 'div', className: 'events-and-trade__description', eventId: list[index] }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { className: 'events-and-trade__table-row pane pane--no-margin pane__row flex-valign-center flex-align-between' },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            null,\n                            __('events_and_trade.local_time'),\n                            ':'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__EventsAndTradeDate__[\"a\" /* default */], { eventId: list[index] })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { className: 'events-and-trade__table-row pane pane--no-margin pane__row flex-valign-center flex-align-between' },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            null,\n                            __('events_and_trade.trade_opportunities'),\n                            ':'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__EventsAndTradeOpportunities__[\"a\" /* default */], { eventId: list[index] })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { className: 'events-and-trade__table-row pane pane--no-margin pane__row flex-valign-center flex-align-between' },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'div',\n                            null,\n                            __('events_and_trade.prediction_range'),\n                            ':'\n                        ),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__EventsAndTradePrediction__[\"a\" /* default */], { eventId: list[index] })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'div',\n                        { className: 'events-and-trade__table-row pane pane--no-margin pane__row flex-valign-center flex-align-end' },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__EventsAndTradeGoogleCalendarLink__[\"a\" /* default */], { eventId: list[index], target: '_blank' }),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__EventsAndTradeOutlookCalendarLink__[\"a\" /* default */], { eventId: list[index], target: '_blank' }),\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            'button',\n                            { className: 'btn btn-default', onClick: onItemClick.bind(null, list[index]) },\n                            __('actions.more_details')\n                        )\n                    )\n                )\n            );\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            var _props2 = this.props,\n                className = _props2.className,\n                list = _props2.list,\n                symbol = _props2.symbol,\n                openedInsightsRows = _props2.openedInsightsRows;\n\n\n            var wrapperClassName = __WEBPACK_IMPORTED_MODULE_2_react_classset___default()(_defineProperty({\n                'events-and-trade': true,\n                'events-and-trade--tablet': true,\n                'pane': true,\n                'pane__column': true,\n                'pane__fluid': true\n            }, className, !!className));\n\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { className: wrapperClassName },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    __WEBPACK_IMPORTED_MODULE_6_react_virtualized__[\"a\" /* AutoSizer */],\n                    null,\n                    function (_ref3) {\n                        var height = _ref3.height,\n                            width = _ref3.width;\n                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_virtualized__[\"d\" /* List */], {\n                            ref: _this3._setListRef,\n                            tabIndex: -1,\n                            'aria-label': '',\n                            deferredMeasurementCache: _this3._cache,\n                            height: height,\n                            rowCount: list.length,\n                            width: width,\n                            rowHeight: _this3._cache.rowHeight,\n                            rowRenderer: _this3._rowRenderer\n                        });\n                    }\n                )\n            );\n        }\n    }]);\n\n    return EventsAndTradeInsightTablet;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapStateToProps, mapDispatch)(EventsAndTradeInsightTablet));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/modules/events-and-trade/components/EventsAndTradeInsightTablet.jsx\n// module id = 2823\n// module chunks = 74\n\n//# sourceURL=webpack:///./src/js/modules/events-and-trade/components/EventsAndTradeInsightTablet.jsx?");

/***/ })

});