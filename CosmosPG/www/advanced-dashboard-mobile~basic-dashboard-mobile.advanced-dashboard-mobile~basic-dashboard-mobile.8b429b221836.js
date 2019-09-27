(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advanced-dashboard-mobile~basic-dashboard-mobile"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/modules/dashboard/components/dashboard-mobile.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/js/modules/dashboard/components/dashboard-mobile.scss ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".dashboard-mobile__tab-item{width:33%;min-width:33%}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/js/modules/dashboard/components/dashboard-mobile.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/js/modules/dashboard/components/dashboard-mobile.scss":
/*!*******************************************************************!*\
  !*** ./src/js/modules/dashboard/components/dashboard-mobile.scss ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/lib!../../../../../node_modules/sass-loader/lib/loader.js!./dashboard-mobile.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/modules/dashboard/components/dashboard-mobile.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/lib!../../../../../node_modules/sass-loader/lib/loader.js!./dashboard-mobile.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/modules/dashboard/components/dashboard-mobile.scss\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/lib!../../../../../node_modules/sass-loader/lib/loader.js!./dashboard-mobile.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/modules/dashboard/components/dashboard-mobile.scss\");\n\n        if (typeof newContent === 'string') {\n          newContent = [[module.i, newContent, '']];\n        }\n        \n        update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\n//# sourceURL=webpack:///./src/js/modules/dashboard/components/dashboard-mobile.scss?");

/***/ }),

/***/ "./src/js/modules/mobile-footer/mobileFooterView.js":
/*!**********************************************************!*\
  !*** ./src/js/modules/mobile-footer/mobileFooterView.js ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var View = __webpack_require__(/*! view */ \"./src/js/core/core.view.js\");\n\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var user = __webpack_require__(/*! modules/user/user.model */ \"./src/js/modules/user/user.model.js\");\n\n    var template = _.template(__webpack_require__(/*! modules/mobile-footer/templates/mobileFooter.html */ \"./src/js/modules/mobile-footer/templates/mobileFooter.html\"));\n    var numbro = __webpack_require__(/*! utils/numbro */ \"./src/js/utils/numbro.js\");\n    var MAX_NUMBER_SIZE = __webpack_require__(/*! modules/accountinfo/accountInfoView */ \"./src/js/modules/accountinfo/accountInfoView.js\").MAX_NUMBER_SIZE;\n    var settings = __webpack_require__(/*! store/settings */ \"./src/js/store/settings.js\");\n    var core = __webpack_require__(/*! core */ \"./src/js/core.js\");\n\n    var MobileFooterView = View.extend({\n        events: [],\n        template: template,\n\n        initialize: function initialize() {\n            View.prototype.initialize.apply(this, arguments);\n\n            this.listenTo(core, 'stream:type:ACCOUNT_METRICS', this.render);\n        },\n\n\n        render: function render() {\n            var accountMetrics = user.getUserAccountMetricsModel();\n            var currency = user.getUserCurrencySymbol();\n            var balance = numbro(accountMetrics.getBalance()).formatForeignCurrency(currency);\n            var buyingPower = numbro(accountMetrics.getBuyingPower()).formatForeignCurrency(currency);\n            var equity = numbro(accountMetrics.getEquity()).formatForeignCurrency(currency);\n            var profitLoss = numbro(accountMetrics.getProfitLoss()).formatForeignCurrency(currency);\n            var profitLossPositive = accountMetrics.getProfitLoss() >= 0;\n\n            this.$el.html(this.template({\n                balance: balance,\n                buyingPower: buyingPower,\n                equity: equity,\n                profitLoss: profitLoss,\n                profitLossPositive: profitLossPositive,\n                currency: currency,\n                isSmallText: balance.length >= MAX_NUMBER_SIZE || buyingPower.length >= MAX_NUMBER_SIZE || equity.length >= MAX_NUMBER_SIZE || profitLoss.length >= MAX_NUMBER_SIZE,\n                isLiveAccount: settings.isLive()\n            }));\n\n            return this;\n        }\n    });\n\n    module.exports = MobileFooterView;\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/mobile-footer/mobileFooterView.js?");

/***/ }),

/***/ "./src/js/modules/mobile-footer/templates/mobileFooter.html":
/*!******************************************************************!*\
  !*** ./src/js/modules/mobile-footer/templates/mobileFooter.html ***!
  \******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"environment\\\">\\n    <%=__( isLiveAccount ? 'accountInfo.live.account' : 'accountInfo.demo.account')%>\\n</div>\\n<table class=\\\"table footer-table\\\">\\n    <tbody>\\n    <tr>\\n        <td><span><%=__('accountInfo.cash')%>:</span></td>\\n        <td>\\n            <span class=\\\"bold-class <%=isSmallText ? 'smallText' : ''%>\\\">\\n                <span data-id=\\\"balance\\\">\\n                    <%=balance%>\\n                </span>\\n            </span>\\n        </td>\\n        <td><span><%=__('accountInfo.freeMargin')%>:</span></td>\\n        <td>\\n            <span class=\\\"bold-class <%=isSmallText ? 'smallText' : ''%>\\\">\\n                <span data-id=\\\"buyingPower\\\">\\n                    <%=buyingPower%>\\n                </span>\\n            </span>\\n        </td>\\n    </tr>\\n    <tr>\\n        <td><span><%=__('accountInfo.equity')%>:</span></td>\\n        <td>\\n            <span class=\\\"bold-class <%=isSmallText ? 'smallText' : ''%>\\\">\\n                <span data-id=\\\"equity\\\">\\n                    <%=equity%>\\n                </span>\\n            </span>\\n        </td>\\n\\n        <td><span><%=__('accountInfo.pl')%></span></td>\\n        <td class=\\\"pl_value <%= profitLossPositive ? 'pl_pos' : 'pl_neg' %> \\\">\\n            <span class=\\\"bold-class <%=isSmallText? 'smallText' : ''%>\\\">\\n                <span data-id=\\\"profitLoss\\\"  >\\n                    <%=profitLoss%>\\n                </span>\\n            </span>\\n        </td>\\n    </tr>\\n    </tbody>\\n</table>\\n\";\n\n//# sourceURL=webpack:///./src/js/modules/mobile-footer/templates/mobileFooter.html?");

/***/ })

}]);