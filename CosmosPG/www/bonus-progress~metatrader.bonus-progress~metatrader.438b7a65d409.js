(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bonus-progress~metatrader"],{

/***/ "./src/js/modules/bonus/bonus-progress/base.bonus.model.js":
/*!*****************************************************************!*\
  !*** ./src/js/modules/bonus/bonus-progress/base.bonus.model.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var Model = __webpack_require__(/*! model */ \"./src/js/core/core.model.js\");\n    var server = __webpack_require__(/*! server */ \"./src/js/modules/server/server.request.js\");\n\n    module.exports = Model.extend({\n        defaults: function defaults() {\n            return {\n                bonuses: []\n            };\n        },\n        load: function load() {\n            var _this = this;\n\n            return server.queryBonusProgress().then(function (res) {\n                return _this.set({ bonuses: res.data });\n            });\n        },\n        getBonuses: function getBonuses() {\n            return this.get('bonuses');\n        },\n        hasBonuses: function hasBonuses() {\n            return _.isEmpty(this.getBonuses());\n        },\n\n\n        filter: function filter(statuses) {\n            return function (bonus) {\n                return _.contains(statuses, bonus.status);\n            };\n        }\n\n    });\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/bonus/bonus-progress/base.bonus.model.js?");

/***/ }),

/***/ "./src/js/modules/bonus/bonus-progress/base.bonus.view.js":
/*!****************************************************************!*\
  !*** ./src/js/modules/bonus/bonus-progress/base.bonus.view.js ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var View = __webpack_require__(/*! view */ \"./src/js/core/core.view.js\");\n    var bonusUtils = __webpack_require__(/*! ../bonus.utils */ \"./src/js/modules/bonus/bonus.utils.js\");\n\n    module.exports = View.extend({\n\n        enrichBonusInfo: function enrichBonusInfo(info, currency) {\n            var _this = this;\n\n            if (_.isArray(info)) {\n                _.each(info, function (bonus) {\n                    return _this.enrich(bonus, currency);\n                });\n            } else {\n                this.enrich(info, currency);\n            }\n\n            return info;\n        },\n\n        enrich: function enrich(bonus, currency) {\n            if (!_.isEmpty(bonus)) {\n                bonus.statusClass = bonusUtils.getStatusClass(bonus);\n                bonus.statusLabel = bonusUtils.formatStatus(bonus);\n                bonus.title = bonusUtils.getTitle(bonus);\n                bonus.amountTitle = bonusUtils.getAmountTitle(bonus, currency);\n                bonus.note = bonusUtils.getNote(bonus, currency);\n                bonus.points = bonusUtils.getBonusPoints(bonus);\n                bonus.pointsEarned = bonusUtils.getBonusPointsEarned(bonus);\n                bonus.progressPercent = bonusUtils.calculateProgressPercent(bonus);\n                bonus.progressClass = bonusUtils.getProgressClass(bonus);\n                bonus.expirationTime = bonusUtils.formatBonusExpirationTime(bonus, false);\n                bonus.expirationTimeShort = bonusUtils.formatBonusExpirationTime(bonus, true);\n                bonus.expirationDate = bonusUtils.formatBonusExpirationDate(bonus);\n                bonus.helpMessage = bonusUtils.getHelpMessage(bonus, currency);\n            }\n\n            return bonus;\n        }\n    });\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/bonus/bonus-progress/base.bonus.view.js?");

/***/ }),

/***/ "./src/js/modules/bonus/bonus-progress/completed.model.js":
/*!****************************************************************!*\
  !*** ./src/js/modules/bonus/bonus-progress/completed.model.js ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var BaseBonusModel = __webpack_require__(/*! ./base.bonus.model */ \"./src/js/modules/bonus/bonus-progress/base.bonus.model.js\");\n\n    module.exports = BaseBonusModel.extend({\n        defaults: function defaults() {\n            return {\n                completed: []\n            };\n        },\n        initialize: function initialize() {\n            this.load();\n        },\n        load: function load() {\n            this.set({\n                completed: _.filter(this.getBonuses(), this.filter(['COMPLETED', 'LOST', 'EXPIRED']))\n            });\n        },\n        getCompletedBonuses: function getCompletedBonuses() {\n            return this.get('completed');\n        },\n        getAccountCurrency: function getAccountCurrency() {\n            return this.get(\"accountCurrency\");\n        }\n    });\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/bonus/bonus-progress/completed.model.js?");

/***/ }),

/***/ "./src/js/modules/bonus/bonus-progress/completed.view.js":
/*!***************************************************************!*\
  !*** ./src/js/modules/bonus/bonus-progress/completed.view.js ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var BaseBonusView = __webpack_require__(/*! ./base.bonus.view */ \"./src/js/modules/bonus/bonus-progress/base.bonus.view.js\");\n    var template = _.template(__webpack_require__(/*! ./templates/completed.html */ \"./src/js/modules/bonus/bonus-progress/templates/completed.html\"));\n    var bonusItemTemplate = _.template(__webpack_require__(/*! ./templates/bonus.item.grid.html */ \"./src/js/modules/bonus/bonus-progress/templates/bonus.item.grid.html\"));\n\n    module.exports = BaseBonusView.extend({\n\n        className: 'bonus-completed',\n\n        render: function render() {\n            BaseBonusView.prototype.render.call(this);\n\n            this.$el.html(template({\n                bonusTemplate: bonusItemTemplate,\n                completed: this.enrichBonusInfo(this.model.getCompletedBonuses(), this.model.getAccountCurrency())\n            }));\n\n            return this;\n        }\n\n    });\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/bonus/bonus-progress/completed.view.js?");

/***/ }),

/***/ "./src/js/modules/bonus/bonus-progress/in-progress.model.js":
/*!******************************************************************!*\
  !*** ./src/js/modules/bonus/bonus-progress/in-progress.model.js ***!
  \******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var BaseBonusModel = __webpack_require__(/*! ./base.bonus.model */ \"./src/js/modules/bonus/bonus-progress/base.bonus.model.js\");\n\n    module.exports = BaseBonusModel.extend({\n        defaults: function defaults() {\n            return {\n                in_progress: {},\n                waiting: []\n            };\n        },\n        initialize: function initialize() {\n            BaseBonusModel.prototype.initialize.apply(this, arguments);\n            this.load();\n        },\n        load: function load() {\n            this.set({\n                in_progress: this.parseInProgressBonus(),\n                waiting: _.filter(this.getBonuses(), this.filter(['WAITING']))\n            });\n        },\n        parseInProgressBonus: function parseInProgressBonus() {\n            var bonuses = _.filter(this.getBonuses(), this.filter(['IN_PROGRESS']));\n            return !_.isEmpty(bonuses) ? bonuses[0] : {};\n        },\n        getInProgressBonus: function getInProgressBonus() {\n            return this.get('in_progress');\n        },\n        getWaitingBonuses: function getWaitingBonuses() {\n            return this.get('waiting');\n        },\n        getAccountCurrency: function getAccountCurrency() {\n            return this.get(\"accountCurrency\");\n        }\n    });\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/bonus/bonus-progress/in-progress.model.js?");

/***/ }),

/***/ "./src/js/modules/bonus/bonus-progress/in-progress.view.js":
/*!*****************************************************************!*\
  !*** ./src/js/modules/bonus/bonus-progress/in-progress.view.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var BaseBonusView = __webpack_require__(/*! ./base.bonus.view */ \"./src/js/modules/bonus/bonus-progress/base.bonus.view.js\");\n    var template = _.template(__webpack_require__(/*! ./templates/in-progress.html */ \"./src/js/modules/bonus/bonus-progress/templates/in-progress.html\"));\n    var bonusItemTemplate = _.template(__webpack_require__(/*! ./templates/bonus.item.html */ \"./src/js/modules/bonus/bonus-progress/templates/bonus.item.html\"));\n\n    module.exports = BaseBonusView.extend({\n\n        className: 'bonus-in-progress',\n\n        render: function render() {\n            BaseBonusView.prototype.render.call(this);\n            this.$el.html(template({\n                bonusTemplate: bonusItemTemplate,\n                in_progress: this.enrichBonusInfo(this.model.getInProgressBonus(), this.model.getAccountCurrency()),\n                waiting: this.enrichBonusInfo(this.model.getWaitingBonuses(), this.model.getAccountCurrency())\n            }));\n\n            return this;\n        }\n\n    });\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/bonus/bonus-progress/in-progress.view.js?");

/***/ }),

/***/ "./src/js/modules/bonus/bonus-progress/templates/bonus.item.grid.html":
/*!****************************************************************************!*\
  !*** ./src/js/modules/bonus/bonus-progress/templates/bonus.item.grid.html ***!
  \****************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"grid-12-equalHeight bonus-line-grid hidden-xs\\\">\\n    <div class=\\\"col-5 title\\\"><%= bonus.amountTitle %></div>\\n    <div class=\\\"col-2 expiration\\\"><%= bonus.expirationDate %></div>\\n    <div class=\\\"col-3 points\\\"><%= bonus.pointsEarned %></div>\\n    <div class=\\\"col-2\\\">\\n        <div class=\\\"status\\\">\\n            <span class=\\\"<%= bonus.statusClass %>\\\"><%= bonus.statusLabel %></span>\\n            <span class='question-tooltip' aria-label=\\\"<%= bonus.helpMessage %>\\\" data-tooltip-align=\\\"right\\\" ></span>\\n        </div>\\n    </div>\\n</div>\\n\\n\\n<div class=\\\"grid-12-equalHeight bonus-line-grid visible-xs visible-sm visible-md\\\">\\n    <div class=\\\"col-12 bonus-line-column\\\">\\n        <div class=\\\"grid-12-equalHeight-middle\\\">\\n            <div class=\\\"col-5 title\\\"><%=__('bonus.item.completed.name')%></div>\\n            <div class=\\\"col-7 title\\\"><%= bonus.amountTitle %></div>\\n        </div>\\n    </div>\\n    <div class=\\\"col-12 bonus-line-column\\\">\\n        <div class=\\\"grid-12-equalHeight-middle\\\">\\n            <div class=\\\"col-5\\\"><%=__('bonus.item.completed.expiration.title')%></div>\\n            <div class=\\\"col-7 expiration\\\"><%= bonus.expirationDate %></div>\\n        </div>\\n    </div>\\n    <div class=\\\"col-12 bonus-line-column\\\">\\n        <div class=\\\"grid-12-equalHeight-middle\\\">\\n            <div class=\\\"col-5\\\"><%=__('bonus.item.completed.points.earned.title')%></div>\\n            <div class=\\\"col-7 points\\\"><%= bonus.pointsEarned %></div>\\n        </div>\\n    </div>\\n    <div class=\\\"col-12 bonus-line-column\\\">\\n        <div class=\\\"grid-12-equalHeight-middle\\\">\\n            <div class=\\\"col-5\\\"><%=__('bonus.item.status')%></div>\\n            <div class=\\\"col-7 status <%= bonus.statusClass %>\\\"><%= bonus.statusLabel %></div>\\n        </div>\\n    </div>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./src/js/modules/bonus/bonus-progress/templates/bonus.item.grid.html?");

/***/ }),

/***/ "./src/js/modules/bonus/bonus-progress/templates/bonus.item.html":
/*!***********************************************************************!*\
  !*** ./src/js/modules/bonus/bonus-progress/templates/bonus.item.html ***!
  \***********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"bonus-line <%= bonus.statusClass %>\\\">\\n    <div class=\\\"bonus-title\\\">\\n        <span class=\\\"title\\\"><%= bonus.title %></span>\\n        <span class=\\\"note\\\"><%= bonus.note %></span>\\n    </div>\\n    <div class=\\\"bonus-progress\\\">\\n        <div class=\\\"points hidden-xs\\\"><%= bonus.points %></div>\\n\\n        <div class=\\\"bonus-progress-wrapper visible-xs visible-sm visible-md\\\">\\n            <span class=\\\"earned-points <%= bonus.statusClass %>\\\"><%= bonus.points %></span>\\n            <span class=\\\"expiration-short\\\"><%= bonus.expirationTimeShort %></span>\\n        </div>\\n\\n        <div class=\\\"progress-bar <%= bonus.progressClass %>\\\">\\n            <div style=\\\"width: <%= bonus.progressPercent %>%\\\"></div>\\n        </div>\\n\\n        <div class=\\\"expiration hidden-xs\\\"><%= bonus.expirationTime %></div>\\n    </div>\\n    <div class=\\\"bonus-help\\\"><%= bonus.helpMessage %></div>\\n</div>\";\n\n//# sourceURL=webpack:///./src/js/modules/bonus/bonus-progress/templates/bonus.item.html?");

/***/ }),

/***/ "./src/js/modules/bonus/bonus-progress/templates/completed.html":
/*!**********************************************************************!*\
  !*** ./src/js/modules/bonus/bonus-progress/templates/completed.html ***!
  \**********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"bonus-progress-body flex flex-column\\\">\\n\\n    <div class=\\\"forms-container flex flex-column flex-stretch\\\">\\n        <div class=\\\"flex flex-column flex-stretch min-height-content\\\">\\n\\n            <% if (_.isEmpty(completed)) { %>\\n            <div class=\\\"empty\\\">\\n                <%=__('bonus.empty.no.completed.message')%>\\n                <a href=\\\"mailto:<%=__('brand.support.email')%>\\\"><%=__('bonus.nobonus.contact.us')%></a>\\n            </div>\\n            <% } else { %>\\n\\n            <div class=\\\"grid-12-equalHeight header-grid hidden-xs\\\">\\n                <div class=\\\"col-5\\\"><%=__('bonus.item.completed.name')%></div>\\n                <div class=\\\"col-2\\\"><%=__('bonus.item.completed.expiration.title')%></div>\\n                <div class=\\\"col-3\\\"><%=__('bonus.item.completed.points.earned.title')%></div>\\n                <div class=\\\"col-2\\\"><%=__('bonus.item.status')%></div>\\n            </div>\\n\\n            <% _.each(completed, function(completed_bonus) { %>\\n                <%=bonusTemplate({ bonus: completed_bonus })%>\\n            <% }) %>\\n\\n            <% } %>\\n\\n        </div>\\n\\n    </div>\\n</div>\\n\\n\";\n\n//# sourceURL=webpack:///./src/js/modules/bonus/bonus-progress/templates/completed.html?");

/***/ }),

/***/ "./src/js/modules/bonus/bonus-progress/templates/in-progress.html":
/*!************************************************************************!*\
  !*** ./src/js/modules/bonus/bonus-progress/templates/in-progress.html ***!
  \************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"bonus-progress-body flex flex-column\\\">\\n\\n    <div class=\\\"forms-container flex flex-column flex-stretch\\\">\\n        <div class=\\\"flex flex-column flex-stretch min-height-content\\\">\\n\\n            <% if (_.isEmpty(in_progress)) { %>\\n            <div class=\\\"empty\\\">\\n                <%=__('bonus.empty.no.inprogress.message')%>\\n                <a href=\\\"mailto:<%=__('brand.support.email')%>\\\"><%=__('bonus.nobonus.contact.us')%></a>\\n            </div>\\n            <% } else { %>\\n\\n            <div class=\\\"header\\\"><%=__('bonus.status.inprogress')%></div>\\n\\n            <%=bonusTemplate({ bonus: in_progress })%>\\n\\n            <br><br>\\n\\n            <% if (_.isEmpty(waiting)) { %>\\n            <div class=\\\"empty\\\">\\n                <%=__('bonus.empty.no.next.message')%>\\n                <a href=\\\"mailto:<%=__('brand.support.email')%>\\\"><%=__('bonus.nobonus.contact.us')%></a>\\n            </div>\\n            <% } else { %>\\n\\n            <div class=\\\"header\\\"><%=__('bonus.status.next')%></div>\\n\\n            <% _.each(waiting, function(waiting_bonus) { %>\\n            <%=bonusTemplate({ bonus: waiting_bonus })%>\\n            <% }) %>\\n\\n            <% } %>\\n\\n            <% } %>\\n\\n        </div>\\n\\n    </div>\\n</div>\\n\\n\";\n\n//# sourceURL=webpack:///./src/js/modules/bonus/bonus-progress/templates/in-progress.html?");

/***/ })

}]);