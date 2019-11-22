(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1935:function(e,t,n){"use strict";n.r(t),function(e){var o=n(149),a=n(101),r=n(41),i=n(2094),s=n(2425),l=n(0),u=n.n(l),c=n(15),m=n.n(c),p=n(4),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return m()(e),e.state={isBacktestReady:!1,shouldRunBacktest:!0,createdBacktest:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),f(t,[{key:"onBacktestRunnerSuccess",value:function(e){this.setState({isBacktestReady:!0,shouldRunBacktest:!1,createdBacktest:e})}},{key:"render",value:function(){var e=this.state,t=e.shouldRunBacktest,n=e.isBacktestReady,r=e.createdBacktest,l=this.props,c=l.portfolio,m=l.onClose,p=l.onSuccess;return u.a.createElement(a.default,{title:__("portfolio.table.investment_funds"),leftComponent:u.a.createElement(a.default.NavLeft,null,u.a.createElement("button",{onClick:m,className:"pane pane__row pane_padded-small"},u.a.createElement("span",{className:"popup-mobile__nav-rotate"},u.a.createElement("i",{className:"icon-view-details"}))," ",__("actions.back")))},u.a.createElement(a.default.Body,{additionalClassName:"pane flex-column fs-13 portfolios__mobile"},u.a.createElement("div",{className:"pane pane__fluid pane__scroll flex-column fs-13"},u.a.createElement("div",{className:"pane pane__scroll-content pane__fluid flex-column fs-13 portfolios__mobile"},t&&u.a.createElement(o.a,{position:"absolute",fit:!0}),t&&u.a.createElement(i.a,{filters:c&&c.filters,onSuccess:this.onBacktestRunnerSuccess,onErrorOK:m}),n&&u.a.createElement(s.a,{portfolioName:c&&c.portfolioName,backtest:r,onSuccess:p,onClose:m,onErrorClose:m,onErrorCancel:m})))))}}]),t}(u.a.Component);d.defaultProps={onClose:e.noop,onSuccess:e.noop},t.default=Object(p.connect)((function(e,t){var n=t.portfolioName;return{portfolio:Object(r.T)(e,n)}}))(d)}.call(this,n(1))},2425:function(e,t,n){"use strict";var o=n(3),a=n(647),r=n(648),i=n(149),s=n(230),l=n(5),u=n.n(l),c=n(2173),m=n(123),p=n(13),f=n(0),d=n.n(f),_=n(15),v=n.n(_),b=n(515),h=n(875),E=n(877),y=n(876),g=n(1),k=n.n(g),N=n(6),C=n.n(N),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var O=function(e){var t=e.input,n=t.value,o=t.onChange,i=t.onBlur,s=t.onFocus,l=t.name,u=e.className,c=e.step,m=e.meta,p=m.error,f=m.valid;return d.a.createElement("div",{className:u},d.a.createElement(r.a,{name:l,type:"text",className:"form-control input-field",value:n,onChange:o,onFocus:s,onBlur:i,error:!f,errorMessage:p}),d.a.createElement(a.a,{onPlusClick:function(){return o(n&&Number(n)-c>-1?Number(n)+c:c)},onMinusClick:function(){return o(n&&Number(n)-c>-1?Number(n)-c:0)}}))},w=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={minAmount:0,statusOfAmountLoader:o.LOADING,maxAmount:0,defaultAmount:0,statusOfBuilding:o.EMPTY,shouldLoadAmount:!0},n.amountLoaderRef=d.a.createRef(),v()(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),S(t,[{key:"componentDidMount",value:function(){var e=this.props.defaultAmount();this._mounted=!0,this.inputStep=this.props.getStepIncrement(e),this.props.change("amount",e)}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"componentWillUpdate",value:function(e){this.props.change("portfolioName",e.portfolioName),this.props.change("backtestID",e.backtest&&e.backtest.backtest.backtestID)}},{key:"mounted",value:function(){return this._mounted}},{key:"onLoadMinAmountSuccess",value:function(e){this.props.defaultAmount()<e&&this.props.change("amount",e),this.setState({minAmount:e,statusOfAmountLoader:o.SUCCESS,shouldLoadAmount:!1})}},{key:"getCommonData",value:function(){return{minAmount:this.state.minAmount,freeMargin:C.a.getUserAccountMetricsModel().getBuyingPower()}}},{key:"onBuildPortfolioSuccess",value:function(e){return this.props.onSuccess(e),e}},{key:"onBuildPortfolioError",value:function(){this.setState({statusOfBuilding:o.ERROR})}},{key:"onErrorBuildingCancel",value:function(){this.setState({statusOfBuilding:o.EMPTY})}},{key:"onErrorBuildingClose",value:function(){this.setState({statusOfBuilding:o.EMPTY})}},{key:"trySubmitAgain",value:function(){this.props.dispatch(Object(b.e)(this.props.form))}},{key:"tryLoadAmountAgain",value:function(){this.amountLoaderRef.current.load()}},{key:"validateAmount",value:function(e){var t=this.state.minAmount,n=this.getCommonData().freeMargin;return e<t?__("portfolio.amount.popup.error.amount_less_minimum",t):e>n||n<t?d.a.createElement("span",{key:"insufficient-funds"},__("portfolio.amount.popup.error.insufficient_funds"),d.a.createElement("a",{className:"cursor--pointer",onClick:function(){return u.a.trigger("ui:deposit")}},__("portfolio.amount.popup.error.add_funds"))):void 0}},{key:"validateTakeProfit",value:function(e,t,n){n.syncErrors}},{key:"validateStopLoss",value:function(e,t,n){var o=n.syncErrors,a=this.getCommonData(),r=a.freeMargin,i=(a.minAmount,Number(t.amount)),s=o&&o.amount?r:i;if(e=Number(e),!k.a.isNaN(e))return e>s-1?__("portfolio.errors.stopLoss.too_high",s-1):void 0}},{key:"submit",value:function(e,t,n){var o=e.amount,a=e.takeProfit,r=e.stopLoss,i=e.portfolioName,s=this.props.backtest&&this.props.backtest.backtest;return n.clearSubmitErrors(),n.startSubmit(),t(Object(m.a)(i,s,null,null,o,a,r,{autoDeleteLocalPortfolio:!1})).then((function(e){return n.setSubmitSucceeded(),e})).then(k.a.callIf(this.onBuildPortfolioSuccess,this.mounted)).then((function(e){return t(Object(m.e)(e.strategyName)),e})).catch((function(){return n.setSubmitFailed(),Promise.reject()})).catch(k.a.callIf(this.onBuildPortfolioError,this.mounted)),!1}},{key:"render",value:function(){var e=this.props,t=e.backtest,n=e.portfolioName,a=e.invalid,r=e.onClose,l=e.handleSubmit,u=e.submitting,m=e.submitFailed,p=e.onErrorCancel,f=e.onErrorClose,_=e.normalizeNumber,v=C.a.getUserCurrency(),b=this.state,y=b.shouldLoadAmount,g=b.statusOfAmountLoader;return m?d.a.createElement(s.a,{title:__("errors.title"),message:__("server.request.generic.error.body",__("funded.client.contact_us.link")),textOK:__("actions.try_again"),onOK:this.trySubmitAgain,onCancel:r,onClose:r}):g===o.ERROR?d.a.createElement(s.a,{title:__("errors.title"),message:__("server.request.generic.error.body",__("funded.client.contact_us.link")),textOK:__("actions.try_again"),onOK:this.tryLoadAmountAgain,onCancel:r,onClose:r}):d.a.createElement("div",{className:"pane pane__scroll-content pane__fluid flex-column fs-13"},d.a.createElement("div",{className:"pane pane__fluid pane__column portfolio__invest"},d.a.createElement("div",{className:"pane pane__fluid"},u&&d.a.createElement(i.a,{position:"absolute",fit:!0}),m&&d.a.createElement(s.a,{title:__("errors.title"),message:__("server.request.generic.error.body",__("funded.client.contact_us.link")),textOK:__("actions.try_again"),onOK:this.buildPortfolio,onCancel:this.onErrorBuildingCancel,onClose:this.onErrorBuildingClose}),d.a.createElement(h.a,{autoComplete:"off",onSubmit:l(this.submit),className:"form form__amount pane pane__fluid pane__column pane_padded-small pane--relative"},y&&d.a.createElement(c.a,{ref:this.amountLoaderRef,backtestOverviewPositions:t&&t.overview.lastPortfolioData.positions,portfolioName:n,onSuccess:this.onLoadMinAmountSuccess,onErrorCancel:p,onErrorClose:f}),d.a.createElement("div",{key:"invest-portfolio-form",className:"pane pane__fluid pane__column"},d.a.createElement("div",{className:"portfolio__invest-portfolio-name fs-13 bold"},n),d.a.createElement("div",{className:"portfolios__mobile-padding-box"},d.a.createElement("div",{className:"pane__column"},d.a.createElement("div",{className:"pane pane__fluid fs-13 bold"},__("portfolio.amount.popup.amount")," - ",v),d.a.createElement(E.a,{name:"amount",className:"pane",component:O,step:this.inputStep,validate:this.validateAmount,normalize:_})),d.a.createElement("div",{className:"pane__column"},d.a.createElement("div",{className:"pane pane__fluid fs-13 pane__row flex-valign-center"},d.a.createElement("div",{className:"pane"},d.a.createElement("i",{className:"icon icon-information","aria-label":__("portfolio.amount.popup.tooltip.take_profit")})),d.a.createElement("div",{className:"pane pane__fluid"},d.a.createElement("div",null,__("portfolio.amount.popup.take_profit")),d.a.createElement("div",null,v))),d.a.createElement(E.a,{name:"takeProfit",className:"pane",component:O,step:this.inputStep,validate:this.validateTakeProfit,normalize:_})),d.a.createElement("div",{className:"pane__column"},d.a.createElement("div",{className:"pane pane__fluid fs-13 pane__row flex-valign-center"},d.a.createElement("div",{className:"pane"},d.a.createElement("i",{className:"icon icon-information","aria-label":__("portfolio.amount.popup.tooltip.stop_loss")})),d.a.createElement("div",{className:"pane pane__fluid"},d.a.createElement("div",null,__("portfolio.amount.popup.stop_loss")),d.a.createElement("div",null,v))),d.a.createElement(E.a,{name:"stopLoss",className:"pane",component:O,step:this.inputStep,validate:this.validateStopLoss,normalize:_})),d.a.createElement(E.a,{name:"portfolioName",component:"input",type:"hidden",value:n}))),d.a.createElement("div",{className:"pane pane__row portfolio__invest_btn-row fs-16"},d.a.createElement("button",{className:"btn btn-default pane pane__fluid flex-align-center",type:"button",onClick:r},__("cancel")),d.a.createElement("button",{className:"btn btn-primary pane pane__fluid flex-align-center",type:"submit",disabled:a||g!==o.SUCCESS},__("actions.place_order")))))))}}]),t}(d.a.PureComponent);w.defaultProps={onSuccess:k.a.noop,onClose:k.a.noop},t.a=Object(y.a)({form:p.A,initialValues:{amount:0,portfolioName:""},defaultAmount:function(){return 100*parseInt(.3*C.a.getUserAccountMetricsModel().getBuyingPower()/100)},getStepIncrement:function(e){var t=parseInt(e/10/p.t)*p.t;return t>100?t:100},normalizeNumber:function(e,t){return k.a.isEmpty(e)?e:/^\d*\.?\d{0,2}$/gi.test(e)?e:t}})(w)}}]);