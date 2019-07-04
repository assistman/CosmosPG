webpackJsonp([49],{1955:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){var n=t.pathUrl,r=e.instruments.treePathsMap[n];return{localizationKey:r&&r._localizedNameKey,name:r&&r.category}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n=e.ui,r=n.selectedInstrumentCategoryTreePath;return{selected:n.section===v.UI_SECTION_TRADING&&t.node._pathUrl===r}}function l(e){return{selectCategoryPath:T.a.throttle(function(t){e(Object(w.selectInstrumentCategoryTreePath)(t)),e(Object(w.selectFirstSymbolInSymbolList)(t)),e(Object(w.closeInstrumentDetails)()),e(Object(w.setTradingSection)())},10)}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function m(e){return{tree:e.instruments.tree}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function O(e){return{section:e.ui.section}}function b(e){return{openFavoritesSection:function(){e(Object(w.closeInstrumentDetails)()),e(Object(w.setFavoritesSection)())},openOpenPositionSection:function(){e(Object(w.closeInstrumentDetails)()),e(Object(w.setOpenPositionsSection)())},openOrdersSection:function(){e(Object(w.closeInstrumentDetails)()),e(Object(w.setOrdersSection)())}}}Object.defineProperty(t,"__esModule",{value:!0});var v=n(10),y=n(307),g=n.n(y),j=n(2633),E=n(2883),_=n.n(E),N=n(2634),S=n(1),P=n.n(S),k=n(12),C=n.n(k),I=n(4),w=n(47),U=n(0),T=n.n(U),x=n(25),D=n.n(x),M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R=Object(I.connect)(a)(function(e){var t=(e.value,e.pathUrl,e.localizationKey),n=e.name,a=(e.dispatch,e.as),o=r(e,["value","pathUrl","localizationKey","name","dispatch","as"]);return P.a.createElement(a||"div",M({},o),D.a.fixCategoryName(t,n))}),A=(n(2),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),z=function(e){function t(e){o(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.click=n.click.bind(n),n}return i(t,e),A(t,[{key:"click",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.selectCategoryPath(this.props.node._pathUrl)}},{key:"render",value:function(){var e=C()({node:!0,tree_node_selected:this.props.selected});return P.a.createElement("div",{className:e,onMouseDown:this.click},P.a.createElement("div",{className:"name"},P.a.createElement("div",{className:"icon"}),P.a.createElement(R,{as:"div",className:"text",pathUrl:this.props.node._pathUrl})))}}]),t}(S.Component),F=Object(I.connect)(s,l)(z),L=n(299),B=n(163),K=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=function(e){return{categoriesOpenState:Object(B.getInstrumentTreeCategoriesOpenState)(e),selectedInstrumentCategoryTreePath:Object(B.getSelectedInstrumentCategoryTreePath)(e)}},G=function(e){return{setCategoryState:function(){e(w.setInstrumentTreeCategoryState.apply(void 0,arguments))}}},J=function(e){function t(e){u(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.click=n.click.bind(n),n}return p(t,e),K(t,[{key:"componentDidMount",value:function(){this.checkShouldCategoryBeOpened(this.props)}},{key:"componentDidUpdate",value:function(){this.checkShouldCategoryBeOpened(this.props)}},{key:"checkShouldCategoryBeOpened",value:function(e){var t=e.node,n=e.selectedInstrumentCategoryTreePath,r=e.setCategoryState;!0!==e.categoriesOpenState[t._pathUrl]&&t._pathUrl&&this.checkIsCategoryActive(t._pathUrl,n)&&r(t._pathUrl,!0)}},{key:"checkIsCategoryActive",value:function(e,t){var n=String(t).toLowerCase(),r=String(e).toLowerCase();return-1!==n.indexOf(r)}},{key:"click",value:function(e){e.stopPropagation();var t=this.props,n=t.node,r=t.categoriesOpenState,a=t.selectedInstrumentCategoryTreePath;this.checkIsCategoryActive(n._pathUrl,a)||this.props.setCategoryState(n._pathUrl,!r[n._pathUrl])}},{key:"render",value:function(){var e=this.props,t=e.node,n=e.categoriesOpenState,r=!n[t._pathUrl];if(t.empty)return null;var a=C()({node:!0,folder:!0,closed:r});return P.a.createElement("div",{className:a},P.a.createElement("div",{className:"name",onClick:this.click},P.a.createElement("div",{className:"icon"},P.a.createElement("i",{className:"arrow"})),P.a.createElement(R,{as:"div",className:"text",pathUrl:t._pathUrl})),!r&&t.elements&&t.elements.length&&P.a.createElement("div",{className:"children"},T.a.map(t.elements,function(e){return Object(L.f)(e)?null:Object(L.e)(e)?P.a.createElement(Q,{key:e._pathUrl,node:e}):P.a.createElement(F,{key:e._pathUrl,node:e})})))}}]),t}(S.Component),Q=Object(I.connect)(q,G)(J),V=Q,W=function(e){var t=e.tree,n=T.a.map(t,function(e){return e.empty?null:Object(L.e)(e)?P.a.createElement(V,{key:e._pathUrl,node:e}):P.a.createElement(F,{key:e._pathUrl,node:e})});return P.a.createElement("div",{className:"tree-container"},n)},Y=Object(I.connect)(m)(W);n.d(t,"SelectedSectionState",function(){return X}),n.d(t,"InstrumentTreeContainer",function(){return Z});var H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X=Object(I.connect)(O)(function(e){var t,n=(e.dispatch,e.className),r=e.section,a=e.sectionName,o=e.children,c=h(e,["dispatch","className","section","sectionName","children"]),i=C()((t={},d(t,n,!!n),d(t,"tree_node_selected",r===a),t));return P.a.createElement(c.as||"div",H({},c,{className:i}),o)}),Z=function(e){var t=e.openFavoritesSection,n=e.openOpenPositionSection,r=e.openOrdersSection;return P.a.createElement("div",{className:"pane pane__column pane__fluid"},P.a.createElement("div",{className:"tree-container menu"},P.a.createElement(X,{as:"div",className:"node",sectionName:v.UI_SECTION_FAVORITES},P.a.createElement("div",{className:"name",id:"instruments-tree-favorites",onClick:t},P.a.createElement("div",{className:"icon"}),P.a.createElement("div",{className:"text"},__("tab.favorites")))),P.a.createElement(X,{as:"div",className:"node",sectionName:v.UI_SECTION_OPEN_POSITION},P.a.createElement("div",{className:"name",id:"instruments-tree-open-positions",onClick:n},P.a.createElement("div",{className:"icon"}),P.a.createElement("div",{className:"text flex flex-valign-center"},__("tab.open_positions"),P.a.createElement("div",{className:"badge"},P.a.createElement(j.a,{as:"span"})),P.a.createElement(g.a,{desktop:!0},P.a.createElement(_.a,{as:"span"}))))),P.a.createElement(X,{as:"div",className:"node",sectionName:v.UI_SECTION_ORDERS},P.a.createElement("div",{className:"name",id:"instruments-tree-orders",onClick:r},P.a.createElement("div",{className:"icon"}),P.a.createElement("div",{className:"text  flex flex-valign-center"},__("tab.orders"),P.a.createElement("div",{className:"badge"},P.a.createElement(N.a,{as:"span"})))))),P.a.createElement("div",{className:"instruments-tree"},P.a.createElement(Y,null)))};t.default=Object(I.connect)(null,b)(Z)},1963:function(e,t,n){"use strict";n.d(t,"j",function(){return h}),n.d(t,"c",function(){return y}),n.d(t,"e",function(){return g}),n.d(t,"d",function(){return j}),n.d(t,"b",function(){return E}),n.d(t,"f",function(){return _}),n.d(t,"g",function(){return N}),n.d(t,"i",function(){return S}),n.d(t,"k",function(){return C}),n.d(t,"h",function(){return I}),n.d(t,"a",function(){return T});var r=n(215),a=n(38),o=n(163),c=n(0),i=n.n(c),s=n(63),l=n(10),u=function(e){return e.positions},f=Object(a.a)(u,function(e){return e.instrumentPositions}),p=Object(a.a)(u,function(e){return e.REQUIRED_MARGIN}),m=Object(a.a)([p,s.a],function(e,t){return e[t]}),d=(Object(a.a)(f,function(e){return i.a.keys(e)}),Object(a.a)([f,s.a],function(e,t){return e[t]})),h=Object(a.a)(d,function(e){return i.a.keys(e).length}),O=Object(a.a)(u,function(e){return i.a.keys(e.instrumentPositions)}),b=Object(a.a)(u,function(e){return e.OPEN_POSITION}),v=Object(a.a)([b,s.a],function(e,t){return e[t]}),y=Object(a.a)(v,function(e){return e&&e._directionName}),g=Object(a.a)(v,function(e){return e&&e._instrumentSymbol||""}),j=Object(a.a)(v,function(e){return e&&e.quantity}),E=Object(a.a)(j,function(e){return e>0?l.BUY:l.SELL}),_=Object(a.a)(m,function(e){return e&&e.requiredMarginInAccountCurrency}),N=Object(a.a)(m,function(e){return e&&e.requiredMarginInInstrumentCurrency}),S=Object(a.a)(u,function(e){return e.totalPositionsCount}),P=Object(a.a)(u,function(e){return e.instrumentPositionsCounter}),k=Object(a.a)([P,s.a],function(e,t){return e[t]}),C=Object(a.a)(k,function(e){return!!e&&e._count>0}),I=Object(a.a)([o.getInstrumentSymbolMap,O,o.getSymbolsSortName,o.getSymbolsSortDirection],r.o),w=Object(a.a)(u,function(e){return e.closingPosition}),U=Object(a.a)([w,s.a],function(e,t){return e[t]}),T=Object(a.a)(U,function(e){return e&&e.status})},2633:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e){return{value:Object(o.i)(e)}}var o=n(1963),c=n(1),i=n.n(c),s=n(4),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e){var t=e.value,n=e.as,a=(e.dispatch,r(e,["value","as","dispatch"]));return i.a.createElement(n||"span",l({},a),t)};t.a=Object(s.connect)(a)(u)},2634:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e){return{value:Object(s.h)(e)}}var o=n(1),c=n.n(o),i=n(4),s=n(808),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e){var t=e.as,n=e.value,a=(e.dispatch,r(e,["as","value","dispatch"]));return c.a.createElement(t||"span",l({},a),n)};t.a=Object(i.connect)(a)(u)},2883:function(e,t,n){var r=n(1),a=n(11),o=n(12),c=n(7),i=n(58),s=n(2),l=function(){return c.getApplicationSettings()};e.exports=a({displayName:"exports",getDefaultProps:function(){return{as:"span",className:""}},getInitialState:function(){return{visible:i.size(),open:l().floatingOpenPositionsEnabled()}},componentDidMount:function(){l().on("change:floatingOpenPositionsEnabled",this.handle,this),i.on("remove update",this.handle,this)},componentWillUnmount:function(){l().off("change:floatingOpenPositionsEnabled",this.handle,this),i.off("remove update",this.handle,this)},handle:function(){this.setState({visible:i.size(),open:l().floatingOpenPositionsEnabled()})},click:function(e){e.stopPropagation();var t=!l().floatingOpenPositionsEnabled();l().floatingOpenPositionsEnabled(t),s.trigger("ui:click:floating:open-positions",t)},render:function(){var e=this.props,t=e.as,n=e.className,a=this.state,c=a.open,i=a.visible,s=o({"icon-open-floating-view":!c,"icon-close-floating-view":c});return i?r.createElement(t,{className:n+" "+s,onClick:this.click}):null}})}});