(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1964:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(30),c=n(228),i=n(1973);t.a=function(e){var t=e.symbol;return a.a.createElement("div",{className:"pane pane__fluid"},a.a.createElement(o.g,{desktop:!0},a.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile"},a.a.createElement("div",{className:"pane pane__row pane__fluid"},a.a.createElement("div",{className:"instrument-details__profile__description-wrapper"},a.a.createElement("div",{className:"instrument-details__profile__caption"},a.a.createElement(c.a,{as:"span",symbol:t})," ",__("instrument_info.profile")),a.a.createElement(i.a,{symbol:t,className:"instrument-details__profile__description"}))))),a.a.createElement(o.g,{tablet:!0,mobile:!0},a.a.createElement("div",{className:"pane pane__fluid pane__column instrument-details__profile instrument-details__profile--mobile"},a.a.createElement("div",{className:"instrument-details__profile__caption"},a.a.createElement(c.a,{as:"span",symbol:t})," ",__("instrument_info.profile")),a.a.createElement("div",{className:"pane pane__column pane__fluid"},a.a.createElement(i.a,{symbol:t,className:"instrument-details__profile__description"})))))}},1974:function(e,t,n){"use strict";n.d(t,"j",(function(){return f})),n.d(t,"i",(function(){return d})),n.d(t,"k",(function(){return _})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return N})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return w}));var r=n(2),a=n(1),o=n.n(a),c=n(3),i=n(23),l=(n(19),function(e){return e.eventsAndTrade}),s=Object(r.a)(l,(function(e){return e&&e.enabled})),u=Object(r.a)(l,(function(e){return e&&e.status})),m=Object(r.a)(l,(function(e){return e&&e.events})),f=(Object(r.a)([s,u,m],(function(e,t,n){return e&&t===c.SUCCESS&&!o.a.isEmpty(n)})),Object(r.a)(l,(function(e){return e&&e.symbolToEventMap}))),p=Object(r.a)(l,(function(e){return e&&e.upcoming})),d=Object(r.a)(l,(function(e){return e&&e.openedInsightsRows})),_=Object(r.a)([p,i.a],(function(e,t){return e[t]})),b=Object(r.a)([f,i.a],(function(e,t){return e[t&&t.replace("/","")]})),y=Object(r.a)([m,i.a],(function(e,t){return e[t]})),v=Object(r.a)(y,(function(e){return e._formatedDate})),E=Object(r.a)(y,(function(e){return e._description})),h=Object(r.a)(y,(function(e){return e._flag})),N=Object(r.a)(y,(function(e){return e._timestamp})),O=Object(r.a)(y,(function(e){return e._name})),j=Object(r.a)(y,(function(e){return e._opportunitiesQuantity})),w=Object(r.a)(y,(function(e){return e._prediction}))},1978:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1972),c=n(228),i=n(1962),l=n(1967),s=n(303),u=n(1968),m=n(302),f=n(229),p=n(304),d=n(1969),_=n(1970),b=n(1971),y=n(15),v=n.n(y),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return v()(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),E(t,[{key:"render",value:function(){var e=this,t=this.props.symbol;return a.a.createElement("div",{className:"instrument-details-header"},a.a.createElement("div",{className:"instrument-details__header pane pane__xfluid"},a.a.createElement("div",{className:"instrument-details__header__left pane pane__column"},a.a.createElement("div",{className:"pane pane__fluid pane__column"},a.a.createElement("div",{className:"pane pane__column"},a.a.createElement("div",{className:"pane pane__row"},a.a.createElement(o.a,{symbol:t}),a.a.createElement("div",{className:"pane__column"},a.a.createElement("div",{className:"instrument-details__title"},a.a.createElement(c.a,{as:"span",symbol:t}),a.a.createElement(u.a,{symbol:t})),a.a.createElement("div",{className:"instrument-details__description"},a.a.createElement(i.a,{as:"span",symbol:t})))),a.a.createElement("div",{className:"pane pane__row"},a.a.createElement(m.a,{as:"span",className:"instrument-details__price",symbol:t}),a.a.createElement("span",{className:"instrument-details__change"},a.a.createElement(l.a,{symbol:t,showDir:!0}),a.a.createElement(s.a,{symbol:t,showDir:!0})))))),a.a.createElement("div",{className:"instrument-details__header__right pane pane__column"},a.a.createElement("div",{className:"instrument-details__actions"},a.a.createElement("div",{className:"instrument-details__actions__small"},a.a.createElement(p.a,{onClick:function(n){return e.toggleFavorite(n,t)},symbol:t,as:"div",className:"fs-13",yes:"icon-star-filled",no:"icon-star"}),a.a.createElement(b.a,{as:null},a.a.createElement(b.b,{onClick:this.openPriceAlerts,symbol:t,as:"div",className:"fs-13",yes:"icon-bell-filled",no:"icon-bell"}))),a.a.createElement("div",{className:"pane pane__row"},a.a.createElement(_.a,{symbol:t,onClick:function(n){return e.sell(n,t)},className:"price-button_labeled--small"}),a.a.createElement(d.a,{symbol:t,onClick:function(n){return e.buy(n,t)},className:"price-button_labeled--small"}))))))}}]),t}(f.a);t.a=h},1992:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return _})),n.d(t,"d",(function(){return y})),n.d(t,"c",(function(){return v}));var r=n(378),a=n(177),o=n(1),c=n.n(o),i=n(9),l=n.n(i),s=n(5),u=n.n(s),m=n(3),f=6e5;function p(e){return function(t,n){n().eventsAndTrade.status?t({type:r.h,payload:e}):t(d(e))}}function d(e){return function(t,n){var o=n().eventsAndTrade.lastUpdated;c.a.now()-o>f&&(t({types:[r.d,r.f,r.e],additionalData:e,callApi:function(){return Object(a.loadEventsAndTrade)()}}),c.a.after((function(){return t(d())}),f))}}function _(){return function(e,t){t().eventsAndTrade.status!==m.SUCCESS&&e({types:[r.a,b,r.b],callApi:function(){return l.a.checkTradingToolEnabled(m.TRADING_TOOLS.EVENTS_AND_TRADE)}})}}function b(e){return function(t){t({type:r.c,payload:e}),t(d())}}function y(e){return function(t){t({type:r.g,payload:e})}}function v(e){return function(t,n){var r=n(),a=r.ui,o=r.eventsAndTrade,c=a.instrumentDetailsSymbol,i=o.events[e],l=c&&c.replace("/","");u.a.navigate("events-and-trade/"+i._event_type_code+"/"+l)}}},2008:function(e,t,n){},2081:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4),c=n(15),i=n.n(c),l=n(1965),s=n(1964),u=n(1966),m=n(1),f=n.n(m),p=n(7),d=n.n(p);var _=function(e){var t,n,r,o=e.children,c=e.className;return a.a.createElement("div",{className:d()((t={"instrument-tab__title":!0},n=c,r=!!c,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))},o)},b=n(643),y=n(138),v=n(134);var E=function(e){var t,n,r,o=e.options,c=e.className,i=e.selected,l=e.title,s=e.onChange;return a.a.createElement(v.a,{options:o,className:d()((t={"instrument-currency-converter__field":!0},n=c,r=!!c,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t)),title:l,selected:i,transformOptionText:function(e){return'<span><i class="currency-img currency-img-'+e+'"></i>'+e+"</span>"},onChange:s})},h=n(32),N=n.n(h),O=n(530),j=n(657),w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=1e3,S=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={from:e.from,to:e.to,amount:C},i()(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),g(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.from,n=e.to;t===this.state.from&&n===this.state.to||this.setState({from:t,to:n})}},{key:"onChangeCurrency",value:function(e,t){this.setState((function(n){var r=w({},n,T({},e,t));return r.from,r.to,T({},e,t)}))}},{key:"switchCurrency",value:function(){this.setState((function(e){var t=e.from;return{from:e.to,to:t}}))}},{key:"onChangeAmount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&isNaN(e)&&(e=C),String(e).length>10&&(e=this.state.amount),this.setState({amount:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.from,r=t.to,o=t.amount,c=this.props.allCurrencies;return a.a.createElement(j.a,{from:n,to:r},(function(t){var i=r+" "+N()((o||0)*t).format("0,0.[00]");return a.a.createElement("div",{className:"instrument-currency-converter"},a.a.createElement(_,{className:"instrument-currency-converter__content-title"},__("instrument_info.tab.converter.title")),a.a.createElement("div",{className:"instrument-currency-converter__content"},a.a.createElement(b.a,{className:"instrument-currency-converter__field",value:o,type:"number",title:__("fields.amount"),transformValue:function(e){return parseInt(e,10)},onChange:function(t){return e.onChangeAmount(t)},onBlur:function(t){return e.onChangeAmount(t,!0)}}),a.a.createElement(E,{options:c,title:__("instrument_info.tab.converter.from"),selected:n,onChange:e.onChangeCurrency.bind(e,"from")}),a.a.createElement(y.a,{className:"instrument-currency-converter__btn instrument-currency-converter__btn--reverse",onClick:function(){return e.switchCurrency()}},a.a.createElement("i",{className:"icon icon-reverse"})),a.a.createElement(E,{options:c,title:__("instrument_info.tab.converter.to"),className:"instrument-currency-converter__field--to-currency",selected:r,onChange:e.onChangeCurrency.bind(e,"to")}),a.a.createElement("div",{className:"instrument-currency-converter__result"},a.a.createElement("span",{className:"instrument-currency-converter__text instrument-currency-converter__text--from-currency"},n," ",o||0," ="),a.a.createElement("span",{className:"instrument-currency-converter__text instrument-currency-converter__text--to-currency"},i),a.a.createElement(O.CopyToClipboard,{text:i},a.a.createElement(y.a,{className:"instrument-currency-converter__btn instrument-currency-converter__btn--copy",btnType:"primary"},__("copy"))))))}))}}]),t}(a.a.Component);S.defaultProps={allCurrencies:[]};var k=S,A=n(19),P=n(3),R=n(64),x=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function I(e){var t=f.a.filter(e,(function(e){return e.category.toLowerCase().startsWith(P.INSTRUMENT_CATEGORIES.CURRENCY)})),n=f.a.reduce(t,(function(e,t){var n=Object(R.transformSBSymbolToSymbol)(t.symbol);return e.push.apply(e,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n.split("/"))),e}),[]);return f.a.unique(n)}var M=Object(o.connect)((function(e){return{allInstruments:Object(A.getInstrumentSymbolMap)(e)}}))((function(e){var t=e.allInstruments,n=e.symbol;if(!n||"string"!=typeof n)return null;var r=Object(R.transformSBSymbolToSymbol)(n).split("/"),o=x(r,2),c=o[0],i=o[1],l=I(t);return a.a.createElement(k,{from:c,to:i,allCurrencies:l})})),D=n(31),U=n(44),V=(n(2008),n(122)),F=Object(U.default)((function(){return Promise.all([n.e(7),n.e(22),n.e(70)]).then(n.bind(null,2808))})),B=Object(U.default)((function(){return Promise.all([n.e(7),n.e(22),n.e(71)]).then(n.bind(null,2809))})),L=Object(U.default)((function(){return Promise.all([n.e(7),n.e(22),n.e(72)]).then(n.bind(null,2810))})),W=function(e){var t=e.className,n=e.symbol;return Object(V.sendEventosEventsAndTradesAction)(),a.a.createElement("div",{className:"pane pane__fluid"},a.a.createElement(D.default,{desktop:!0},a.a.createElement(F,{className:t,symbol:n})),a.a.createElement(D.default,{tablet:!0},a.a.createElement(L,{className:t,symbol:n})),a.a.createElement(D.default,{mobile:!0},a.a.createElement(B,{className:t,symbol:n})))},G=n(1992),J=n(1974),q=n(261),Q=n.n(q),Y=n(55),z=n(1963),H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var K=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i()(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),H(t,[{key:"componentDidMount",value:function(){this.props.checkEventsAndTradesEnabled()}},{key:"extendTabs",value:function(e,t){e.unshift({id:z.INSTRUMENT_PROFILE,title:"instrument_info.tab.profile",view:a.a.createElement(a.a.Fragment,null,a.a.createElement(D.default,{desktop:!0,tablet:!0},a.a.createElement("div",{className:"pane__scroll-content"},a.a.createElement(Q.a,null,a.a.createElement(s.a,{symbol:t})))),a.a.createElement(D.default,{mobile:!0},a.a.createElement(s.a,{symbol:t}))),viewOptions:{className:"pane__scroll"},disabled:!1},{id:z.INSTRUMENT_CONVERTER,title:"instrument_info.tab.converter",view:a.a.createElement(a.a.Fragment,null,a.a.createElement(D.default,{desktop:!0,tablet:!0},a.a.createElement("div",{className:"pane__scroll-content"},a.a.createElement(Q.a,null,a.a.createElement(M,{symbol:t})))),a.a.createElement(D.default,{mobile:!0},a.a.createElement(M,{symbol:t}))),viewOptions:{className:"pane__scroll"},disabled:!1});var n=t&&t.replace("/","");return this.props.eventsAndTradeEnabled&&this.props.symbolToEventMap[n]&&e.unshift({id:z.INSTRUMENT_EVENTS,title:"instrument_info.tab.events",view:a.a.createElement(W,{symbol:t}),disabled:!1}),e.unshift({id:z.INSTRUMENT_OVERVIEW,title:"instrument_info.tab.key_statistics",view:a.a.createElement(a.a.Fragment,null,a.a.createElement(D.default,{desktop:!0,tablet:!0},a.a.createElement("div",{className:"pane__scroll-content"},a.a.createElement(Q.a,null,a.a.createElement(u.a,{symbol:t})))),a.a.createElement(D.default,{mobile:!0},a.a.createElement(u.a,{symbol:t}))),viewOptions:{className:"pane__scroll"},disabled:!1}),e}},{key:"render",value:function(){return a.a.createElement(l.a,{symbol:this.props.symbol,extendTabs:this.extendTabs})}}]),t}(a.a.Component);t.a=Object(o.connect)((function(e){return{eventsAndTradeEnabled:Object(Y.isEventsAndTradeEnabled)(e),symbolToEventMap:Object(J.j)(e)}}),(function(e){return{checkEventsAndTradesEnabled:function(){return e(Object(G.a)())}}}))(K)},2751:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),i=n(1978),l=n(2081);t.default=function(e){var t,n,r,o=e.className,s=e.symbol,u=c()((r=!!o,(n=o)in(t={"instrument-details":!0,"instrument-details--tablet":!0,pane:!0,pane__xfluid:!0,pane__yfluid:!0})?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t));return a.a.createElement("div",{className:u},a.a.createElement(i.a,{symbol:s}),a.a.createElement(l.a,{symbol:s}))}}}]);