(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1945:function(e,t,n){var a;void 0===(a=function(e,t,a){var i=n(2536),s=n(2538);a.exports={BonusProgressPopupView:i,BonusProgressPopupModel:s}}.call(t,n,t,e))||(e.exports=a)},2536:function(e,t,n){(function(a,i){var s;void 0===(s=function(e,t,a){var i=n(1),s=n(12),o=n(6),r=n(136),d=n(86),l=i.template(n(2537));function c(e){e=i.map(e,(function(e){return e.toUpperCase()}));return"<span>"+i.map(i.initial(e),(function(e){return"<span class='color-platform-text-color'>"+e+" </span>"})).join("")+"<span class='color-platform-accent'>"+i.last(e)+"</span></span>"}a.exports=r.extend({className:"bonus-progress",name:"bonus-progress",events:function(){return this.addEvents(r)({"click .fn-tab":"changeTab"})},initialize:function(e){r.prototype.initialize.apply(this,arguments),this.listenTo(this.model,"change:currentTabId",this.updateTab),this.listenTo(this.model,"change:bonuses",this.loadCompleted),this.render()},render:function(){return r.prototype.render.call(this),this.setContent(l({options:this.options,model:this.model.toJSON(),parseWizardHeader:c(this.options.caption)})),this.showLoading(),this},updateTab:function(){var e=this.model.getCurrentTabData(),t=e.view,n=e.model;this.addChildView(".tab-content",t,{model:new n({bonuses:this.model.getBonuses(),accountCurrency:o.getUserCurrencySymbol()})}),this.$(".header-container-xs .caption").html(__(this.model.getCurrentTabName())),this.$(".tab").removeClass("active");var a=this.model.getCurrentTabId();this.$(".tab[data-tab-id="+a+"]").addClass("active")},changeTab:function(e){this.model.setCurrentTabById(s(e.currentTarget).attr("data-tab-id"))},loadCompleted:function(){this.updateTab(),this.hideLoading()},showLoading:function(){this.addChildView(".bonus-progress-content",d,{parent:this.$el,translucent:"2"})},hideLoading:function(){this.removeChildView(".bonus-progress-content")}})}.call(t,n,t,e))||(e.exports=s)}).call(this,n(1),n(12))},2537:function(e,t){e.exports='<div class="popup-header popup-header-bg-style-grey popup-header-style-default hidden-xs"> <div class="popup-caption flex flex-valign-center"> <%=parseWizardHeader%> <span class=question-tooltip aria-label="<%=__(\'bonus.help.message\')%>" data-tooltip-align=right></span> </div> <div class="popup-actions fn-close-popup btn"> <i class=icon-close-blue></i> </div> </div> <div class="visible-xs header-container-xs"> <div class="left flex fn-close-popup flex-valign-center btn"> <div class="icon arrow"></div> <b><%-__(\'actions.back\') %></b> </div> <div class="caption flex flex-valign-center flex-align-center"> <%-model.currentTabName || model.currentTabNameMobile%> </div> <div class="right flex flex-valign-center btn"></div> </div> <div class=bonus-progress-content> <div class=modal-dialog-container></div> <div class="tabs flex flex-row flex-align-start hidden-xs"> <% _.each(model.tabs, function(v) { %> <div class="tab fn-tab flex flex-stretch flex-valign-center active <%- model.currentTabId == v.id ? \'active\' : \'\' %>" data-tab-id="<%- v.id %>"><%- v.name %></div> <% }) %> </div> <div class=tab-content></div> </div>'},2538:function(e,t,n){(function(a){var i;void 0===(i=function(e,t,i){var s=n(2285),o=n(2287),r=n(2288),d=n(2289),l=n(2178);i.exports=l.extend({defaults:function(){return{tabs:[{id:"in-progress",name:__("bonus.tab.in_progress"),viewClass:s,modelClass:r},{id:"completed",name:__("bonus.tab.completed"),viewClass:o,modelClass:d}],currentTabId:"in-progress",defaultTabId:"in-progress"}},initialize:function(){this.load()},getCurrentTab:function(){return a.findWhere(this.get("tabs"),{id:this.getCurrentTabId()})},getCurrentTabId:function(){var e=this.get("currentTabId");return e||(e=this.get("defaultTabId")),e},getCurrentTabName:function(){return this.getCurrentTab().name},getCurrentTabData:function(){var e=this.getCurrentTab();return{view:e.viewClass,model:e.modelClass}},getTabById:function(e){return a.findWhere(this.get("tabs"),{id:e})},enableAllTabs:function(){a.each(this.get("tabs"),(function(e){return e.disable=!1}))},disableTabById:function(e){var t=this.getTabById(e);t&&(t.disable=!0)},enableTabById:function(e){var t=this.getTabById(e);t&&(t.disable=!1)},setCurrentTabById:function(e){var t=this.getTabById(e);return t&&this.set({currentTabId:t.id,currentTabName:t.name}),t}})}.call(t,n,t,e))||(e.exports=i)}).call(this,n(1))}}]);