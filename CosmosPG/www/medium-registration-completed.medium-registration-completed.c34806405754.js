(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medium-registration-completed"],{

/***/ "./src/js/modules/medium-registration-completed/consts.js":
/*!****************************************************************!*\
  !*** ./src/js/modules/medium-registration-completed/consts.js ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var EMPTY = 'EMPTY';\n    var LOADING = 'LOADING';\n    var SUCCESS = 'SUCCESS';\n    var ERROR = 'ERROR';\n\n    module.exports = {\n        EMPTY: EMPTY,\n        LOADING: LOADING,\n        SUCCESS: SUCCESS,\n        ERROR: ERROR\n    };\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/js/modules/medium-registration-completed/consts.js?");

/***/ }),

/***/ "./src/js/modules/medium-registration-completed/index.js":
/*!***************************************************************!*\
  !*** ./src/js/modules/medium-registration-completed/index.js ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var MediumRegistrationCompletedView = __webpack_require__(/*! modules/medium-registration-completed/medium.registration.completed.view */ \"./src/js/modules/medium-registration-completed/medium.registration.completed.view.js\");\n    var MediumRegistrationCompletedModel = __webpack_require__(/*! modules/medium-registration-completed/medium.registration.completed.model */ \"./src/js/modules/medium-registration-completed/medium.registration.completed.model.js\");\n\n    module.exports = {\n        MediumRegistrationCompletedView: MediumRegistrationCompletedView,\n        MediumRegistrationCompletedModel: MediumRegistrationCompletedModel\n    };\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/js/modules/medium-registration-completed/index.js?");

/***/ }),

/***/ "./src/js/modules/medium-registration-completed/medium.registration.completed.model.js":
/*!*********************************************************************************************!*\
  !*** ./src/js/modules/medium-registration-completed/medium.registration.completed.model.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var LeverageModel = __webpack_require__(/*! modules/account-settings/leverage.model */ \"./src/js/modules/account-settings/leverage.model.js\");\n\n    var _require = __webpack_require__(/*! ./consts */ \"./src/js/modules/medium-registration-completed/consts.js\"),\n        EMPTY = _require.EMPTY,\n        LOADING = _require.LOADING,\n        SUCCESS = _require.SUCCESS,\n        ERROR = _require.ERROR;\n\n    var MediumRegistrationCompletedModel = LeverageModel.extend({\n        defaults: function defaults() {\n            return {\n                statusOfLeverages: EMPTY\n            };\n        },\n        initialize: function initialize() {\n            this.loadLeverages();\n        },\n        loadLeverages: function loadLeverages() {\n            var status = this.control('statusOfLeverages');\n\n            status(LOADING);\n\n            this.load().then(function (res) {\n                return status(SUCCESS);\n            }).catch(function (err) {\n                return status(ERROR);\n            });\n        }\n    });\n\n    module.exports = MediumRegistrationCompletedModel;\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/js/modules/medium-registration-completed/medium.registration.completed.model.js?");

/***/ }),

/***/ "./src/js/modules/medium-registration-completed/medium.registration.completed.view.js":
/*!********************************************************************************************!*\
  !*** ./src/js/modules/medium-registration-completed/medium.registration.completed.view.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var core = __webpack_require__(/*! core */ \"./src/js/core.js\");\n    var PopupView = __webpack_require__(/*! modules/popup/popup.view */ \"./src/js/modules/popup/popup.view.js\");\n    var settings = __webpack_require__(/*! store/settings */ \"./src/js/store/settings.js\");\n    var MediumRegistrationCompletedTemplate = _.template(__webpack_require__(/*! ./templates/medium.registration.completed.html */ \"./src/js/modules/medium-registration-completed/templates/medium.registration.completed.html\"));\n    var LoadingView = __webpack_require__(/*! modules/loading/loading.view */ \"./src/js/modules/loading/loading.view.js\");\n\n    var _require = __webpack_require__(/*! ./consts */ \"./src/js/modules/medium-registration-completed/consts.js\"),\n        SUCCESS = _require.SUCCESS,\n        ERROR = _require.ERROR;\n\n    var MediumRegistrationCompletedView = PopupView.extend({\n        className: 'medium-registration-completed',\n        name: 'medium-registration',\n\n        events: function events() {\n            return _.extend({}, _.result(PopupView.prototype, 'events'), {\n                'click .fn-accept': 'onAccept'\n            });\n        },\n\n        initialize: function initialize() {\n            PopupView.prototype.initialize.apply(this, arguments);\n            this.listenTo(this.model, 'change:statusOfLeverages', this.onStatusOfLeveragesChanged);\n\n            this.render();\n        },\n        render: function render() {\n            this.onStatusOfLeveragesChanged();\n        },\n        renderContent: function renderContent() {\n            PopupView.prototype.render.call(this);\n            this.setContent(MediumRegistrationCompletedTemplate({\n                leverage: this.model.getCurrentLeverageValue()\n            }));\n        },\n        onStatusOfLeveragesChanged: function onStatusOfLeveragesChanged() {\n            var status = this.model.get('statusOfLeverages');\n\n            switch (status) {\n                case SUCCESS:\n                    this.renderContent();\n                    break;\n                case ERROR:\n                    core.trigger('ui:message-box', {\n                        text: __('indigo.generic.error.message')\n                    });\n                    break;\n            }\n        },\n        onAccept: function onAccept(event) {\n            event.preventDefault();\n            this.close();\n        },\n        hideContent: function hideContent() {\n            this.$('.leverage').css('visibility', 'hidden');\n            this.$('.leverage-mobile').css('visibility', 'hidden');\n        },\n        showContent: function showContent() {\n            this.$('.leverage').css('visibility', 'visible');\n            this.$('.leverage-mobile').css('visibility', 'visible');\n        }\n    });\n\n    module.exports = MediumRegistrationCompletedView;\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/medium-registration-completed/medium.registration.completed.view.js?");

/***/ }),

/***/ "./src/js/modules/medium-registration-completed/templates/medium.registration.completed.html":
/*!***************************************************************************************************!*\
  !*** ./src/js/modules/medium-registration-completed/templates/medium.registration.completed.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"medium-registration-completed-content hidden-xs\\\">\\n    <div class=\\\"medium-registration-completed-text\\\">\\n        <%= __('medium_score.registration.completed.message')%>\\n    </div>\\n    <div class=\\\"medium-registration-completed-text\\\">\\n        <%= __('medium_score.registration.completed.note')%>\\n    </div>\\n    <div class=\\\"medium-registration-completed-action\\\">\\n        <a class=\\\"btn btn-primary btn-block fn-accept\\\" href=\\\"#\\\">\\n            <div class=\\\"button-container\\\">\\n                <span>\\n                    <%=__('actions.confirm')%>\\n                </span>\\n            </div>\\n        </a>\\n    </div>\\n    <!-- <div class=\\\"medium-registration-completed-text\\\">\\n        <%= __('medium_score.registration.completed.leverage', leverage)%>\\n    </div> -->\\n    <div class=\\\"line\\\"></div>\\n    <div class=\\\"medium-registration-completed-footer\\\">\\n        <%=__('medium_score.registration.completed.footer')%>\\n    </div>\\n</div>\\n\\n<!-- MOBILE -->\\n<div class=\\\"medium-registration-completed-content-mobile hidden-sm hidden-md hidden-lg\\\">\\n    <div class=\\\"mobile-content\\\">\\n        <div class=\\\"mobile-content-top\\\">\\n            <div class=\\\"medium-registration-completed-text\\\">\\n                <%= __('medium_score.registration.completed.message')%>\\n            </div>\\n            <div class=\\\"medium-registration-completed-text\\\">\\n                <%= __('medium_score.registration.completed.note')%>\\n            </div>\\n            <!-- <div class=\\\"medium-registration-completed-text\\\">\\n                <%= __('medium_score.registration.completed.leverage', leverage)%>\\n            </div> -->\\n        </div>\\n        <div class=\\\"modile-footer\\\">\\n            <div class=\\\"line\\\"></div>\\n            <div class=\\\"medium-registration-completed-footer\\\">\\n                <%=__('medium_score.registration.completed.footer')%>\\n            </div>\\n        </div>\\n    </div>\\n    <div class=\\\"mobile-actions\\\">\\n        <a class=\\\"btn btn-primary btn-block fn-accept\\\" href=\\\"#\\\">\\n            <%=__('actions.confirm')%>\\n        </a>\\n    </div>\\n</div>\";\n\n//# sourceURL=webpack:///./src/js/modules/medium-registration-completed/templates/medium.registration.completed.html?");

/***/ })

}]);