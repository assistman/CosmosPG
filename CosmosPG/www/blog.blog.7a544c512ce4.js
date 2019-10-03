(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/modules/blog/styles/blog.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/js/modules/blog/styles/blog.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".blog-wrapper{position:absolute;width:100%;height:100%;background-color:#fff;z-index:2!important;top:0;right:0;bottom:0;left:0}.blog-wrapper .blog{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:auto;min-height:100vh;width:100%;z-index:1}.blog-wrapper .blog .blog-top{width:100%;height:25px;position:relative;background:#f6f9fc!important}.blog-wrapper .blog .blog-top .fn-close-popup{position:absolute;right:0;top:0;cursor:pointer}.blog-wrapper .blog .blog-top .fn-close-popup i{border:1px solid transparent}.blog-wrapper .blog iframe{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.blog-wrapper .blog .loading-content{width:100%;position:absolute}.blog-wrapper.blog-wrapper-mobile{position:relative}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/js/modules/blog/styles/blog.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/js/modules/blog/blog.popup.mobile.view.js":
/*!*******************************************************!*\
  !*** ./src/js/modules/blog/blog.popup.mobile.view.js ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var ResponsivePopupView = __webpack_require__(/*! modules/responsive-popup/responsive-popup.view */ \"./src/js/modules/responsive-popup/responsive-popup.view.js\");\n    var settings = __webpack_require__(/*! store/settings */ \"./src/js/store/settings.js\");\n    var template = _.template(__webpack_require__(/*! modules/blog/templates/blog.html */ \"./src/js/modules/blog/templates/blog.html\"));\n\n    __webpack_require__(/*! ./styles/blog.scss */ \"./src/js/modules/blog/styles/blog.scss\");\n\n    var BlogPopupMobileView = ResponsivePopupView.extend({\n\n        initialize: function initialize(options) {\n            ResponsivePopupView.prototype.initialize.apply(this, arguments);\n            this.render();\n        },\n\n        getOptions: function getOptions(options) {\n            return _.extend({}, _.result(ResponsivePopupView.prototype, 'getOptions'), {\n                isHeaderShowed: true,\n                caption: __('tab.blog'),\n                previousCaption: __('actions.back'),\n                headerStyle: 'wizard',\n                bodyStyle: 'blog-wrapper blog-wrapper-mobile',\n                headerCaptionStyle: 'blog-mobile-header'\n            }, options);\n        },\n\n        close: function close() {\n            ResponsivePopupView.prototype.close.call(this);\n            this.destroy();\n        },\n\n        render: function render() {\n            ResponsivePopupView.prototype.render.call(this);\n            this.setContent(template({ url: settings.getBlogUrl() }));\n            __eventos('learn:blog:impression', {});\n            return this;\n        }\n\n    });\n\n    module.exports = BlogPopupMobileView;\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/blog/blog.popup.mobile.view.js?");

/***/ }),

/***/ "./src/js/modules/blog/blog.popup.view.js":
/*!************************************************!*\
  !*** ./src/js/modules/blog/blog.popup.view.js ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(_, $) {var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\n    var core = __webpack_require__(/*! core */ \"./src/js/core.js\");\n    var View = __webpack_require__(/*! view */ \"./src/js/core/core.view.js\");\n    var LoadingView = __webpack_require__(/*! modules/loading/loading.view */ \"./src/js/modules/loading/loading.view.js\");\n    var settings = __webpack_require__(/*! store/settings */ \"./src/js/store/settings.js\");\n\n    var _require = __webpack_require__(/*! store/ui.actions */ \"./src/js/store/ui.actions.js\"),\n        updateUrlBySelectedInstrumentSymbol = _require.updateUrlBySelectedInstrumentSymbol;\n\n    __webpack_require__(/*! ./styles/blog.scss */ \"./src/js/modules/blog/styles/blog.scss\");\n\n    var BlogPopupView = View.extend({\n\n        template: _.template(__webpack_require__(/*! modules/blog/templates/blog.html */ \"./src/js/modules/blog/templates/blog.html\")),\n        events: {\n            'click .blog-top .fn-close-popup': 'close'\n        },\n        tagName: 'div',\n        className: 'blog-wrapper popup-item',\n\n        initialize: function initialize(options) {\n            var _this = this;\n\n            View.prototype.initialize.apply(this, arguments);\n            this.parent = options.parent;\n            this.listenTo(core, 'ui:header-itemclick', this.close);\n            this.listenTo(core, 'ribbon:update', this.updateContentHeight);\n            $(window).on('resize.blog', function () {\n                return _this.updateContentHeight();\n            });\n            this.render();\n        },\n\n        close: function close(nav) {\n            core.trigger('ui:chart:update-size');\n            $(window).off('resize.blog');\n\n            if (nav) {\n                store.dispatch(updateUrlBySelectedInstrumentSymbol());\n            }\n\n            this.destroy();\n        },\n\n        render: function render() {\n            View.prototype.render.call(this);\n\n            this.$el.html(this.template({ url: settings.getBlogUrl() }));\n            __eventos('learn:blog:impression', {});\n            this.updateContentHeight();\n\n            return this;\n        },\n\n        updateContentHeight: function updateContentHeight() {\n            var heightSpan = 210;\n\n            if ($('.ribbon-notification').length > 0 && $('.ribbon-notification')[0].clientHeight) {\n                heightSpan += $('.ribbon-notification')[0].clientHeight;\n            }\n\n            var contentHeight = document.documentElement.clientHeight - heightSpan;\n\n            this.$el.find('.content-block').css('height', contentHeight + 'px');\n        }\n\n    });\n\n    module.exports = BlogPopupView;\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\"), __webpack_require__(/*! jquery */ \"./src/vendors/jbone.js\")))\n\n//# sourceURL=webpack:///./src/js/modules/blog/blog.popup.view.js?");

/***/ }),

/***/ "./src/js/modules/blog/index.js":
/*!**************************************!*\
  !*** ./src/js/modules/blog/index.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {\n    var BlogPopupView = __webpack_require__(/*! ./blog.popup.view */ \"./src/js/modules/blog/blog.popup.view.js\");\n    var BlogPopupMobileView = __webpack_require__(/*! ./blog.popup.mobile.view */ \"./src/js/modules/blog/blog.popup.mobile.view.js\");\n    var Response = __webpack_require__(/*! utils/response */ \"./src/js/utils/response.js\").default;\n\n    function initBlogPopupView(options) {\n        return Response.mobile() ? new BlogPopupMobileView(options) : new BlogPopupView(options);\n    }\n\n    module.exports = {\n        initBlogPopupView: initBlogPopupView\n    };\n}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/js/modules/blog/index.js?");

/***/ }),

/***/ "./src/js/modules/blog/styles/blog.scss":
/*!**********************************************!*\
  !*** ./src/js/modules/blog/styles/blog.scss ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/lib!../../../../../node_modules/sass-loader/lib/loader.js!./blog.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/modules/blog/styles/blog.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/lib!../../../../../node_modules/sass-loader/lib/loader.js!./blog.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/modules/blog/styles/blog.scss\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/lib!../../../../../node_modules/sass-loader/lib/loader.js!./blog.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/js/modules/blog/styles/blog.scss\");\n\n        if (typeof newContent === 'string') {\n          newContent = [[module.i, newContent, '']];\n        }\n        \n        update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\n//# sourceURL=webpack:///./src/js/modules/blog/styles/blog.scss?");

/***/ }),

/***/ "./src/js/modules/blog/templates/blog.html":
/*!*************************************************!*\
  !*** ./src/js/modules/blog/templates/blog.html ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"blog\\\">\\n    <div class=\\\"hidden-xs blog-top\\\">\\n        <div class=\\\"header-actions fn-close-popup\\\">\\n            <i class=\\\"icon-close-blue\\\"></i>\\n        </div>\\n    </div>\\n    <iframe  src=\\\"<%=url%>\\\" frameborder=\\\"0\\\" allowfullscreen></iframe>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./src/js/modules/blog/templates/blog.html?");

/***/ })

}]);