webpackJsonp([40],{1924:function(t,e,s){var n;void 0!==(n=function(t,e,n){var i=s(2768),o=s(2770);n.exports={BonusProgressPopupView:i,BonusProgressPopupModel:o}}.call(e,s,e,t))&&(t.exports=n)},2202:function(t,e,s){(function(n){var i;void 0!==(i=function(t,e,n){var i=s(0),o=s(13),a=s(8);n.exports=o.extend({defaults:function(){return{bonuses:[]}},load:function(){var t=this;return a.queryBonusProgress().then(function(e){return t.set({bonuses:e.data})})},getBonuses:function(){return this.get("bonuses")},hasBonuses:function(){return i.isEmpty(this.getBonuses())},filter:function(t){return function(e){return i.contains(t,e.status)}}})}.call(e,s,e,t))&&(t.exports=i)}).call(e,s(0))},2262:function(t,e,s){(function(n){var i;void 0!==(i=function(t,e,n){var i=s(0),o=s(12),a=s(22);n.exports=o.extend({enrichBonusInfo:function(t,e){var s=this;return i.isArray(t)?i.each(t,function(t){return s.enrich(t,e)}):this.enrich(t,e),t},enrich:function(t,e){return i.isEmpty(t)||(t.statusClass=this.getStatusClass(t),t.statusLabel=this.formatStatus(t),t.title=this.getTitle(t),t.amountTitle=this.getAmountTitle(t,e),t.note=this.getNote(t,e),t.points=this.getBonusPoints(t),t.pointsEarned=this.getBonusPointsEarned(t),t.progressPercent=this.calculateProgressPercent(t),t.progressClass=this.getProgressClass(t),t.expirationTime=this.formatBonusExpirationTime(t,!1),t.expirationTimeShort=this.formatBonusExpirationTime(t,!0),t.expirationDate=this.formatBonusExpirationDate(t),t.helpMessage=this.getHelpMessage(t,e)),t},getBonusPoints:function(t){return __("bonus.item.points",t.currentPoints,t.targetPoints)},getBonusPointsEarned:function(t){return __("bonus.item.points.earned",t.currentPoints,t.targetPoints)},calculateProgressPercent:function(t){return 100*t.currentPoints/t.targetPoints},getProgressClass:function(t){switch(t.status){case"COMPLETED":case"EXPIRED":case"LOST":case"WAITING":return"inactive";default:return""}},getStatusClass:function(t){return t.status.toLowerCase()},getAmountTitle:function(t,e){return e+t.volume+" "+this.getTitle(t)},getTitle:function(t){switch(t.type){case"COMPLIANCE":return __("bonus.item.compliance.title");case"WELCOME_BONUS":return __("bonus.item.wb.title");case"PENDING_BONUS":return __("bonus.item.pb.title");case"FD_BONUS":return __("bonus.item.fd.title");case"SMS_BONUS":return __("bonus.item.sms.title");case"VERIFY_POI":return __("bonus.item.id.title");case"VERIFY_POR":return __("bonus.item.residence.title");case"UNKNOWN":return __("bonus.item.unknown.reason."+t.reason);default:return""}},formatStatus:function(t){switch(t.status){case"IN_PROGRESS":return __("bonus.item.status.in_progress");case"WAITING":return __("bonus.item.status.waiting");case"COMPLETED":return __("bonus.item.status.completed");case"EXPIRED":return __("bonus.item.status.expired");case"LOST":return __("bonus.item.status.lost");default:return""}},getHelpMessage:function(t,e){switch(t.status){case"IN_PROGRESS":return __("bonus.item.ip.help.message");case"WAITING":return __("bonus.item.waiting.help.message");case"COMPLETED":return __("bonus.item.completed.help.message",e+t.volume);case"EXPIRED":return __("bonus.item.expired.help.message");case"LOST":return __("bonus.item.lost.help.message");default:return""}},getNote:function(t,e){switch(t.status){case"LOST":return"";default:return __("bonus.item.note",e+t.volume)}},formatBonusExpirationTime:function(t,e){var s=t.expiration,n=__("bonus.item.expiration.format",s.days,s.hours,s.minutes);return(e?__("bonus.item.expiration.short"):__("bonus.item.expiration"))+" "+n},formatBonusExpirationDate:function(t){var e=new Date(t.expireAt),s=a.splitByComma(__("calendar.month_names.short"));return e.getDate()+" "+s[e.getMonth()]+", "+e.getFullYear()}})}.call(e,s,e,t))&&(t.exports=i)}).call(e,s(0))},2590:function(t,e,s){(function(n){var i;void 0!==(i=function(t,e,n){var i=s(0),o=s(2262),a=i.template(s(2591)),r=i.template(s(2592));n.exports=o.extend({className:"bonus-in-progress",render:function(){return o.prototype.render.call(this),this.$el.html(a({bonusTemplate:r,in_progress:this.enrichBonusInfo(this.model.getInProgressBonus(),this.model.getAccountCurrency()),waiting:this.enrichBonusInfo(this.model.getWaitingBonuses(),this.model.getAccountCurrency())})),this}})}.call(e,s,e,t))&&(t.exports=i)}).call(e,s(0))},2591:function(t,e){t.exports='<div class="bonus-progress-body flex flex-column"><div class="forms-container flex flex-column flex-stretch"><div class="flex flex-column flex-stretch min-height-content"> <% if (_.isEmpty(in_progress)) { %> <div class="empty"> <%=__(\'bonus.empty.no.inprogress.message\')%> <a href="mailto:<%=__(\'brand.support.email\')%>"><%=__(\'bonus.nobonus.contact.us\')%></a></div> <% } else { %> <div class="header"><%=__(\'bonus.status.inprogress\')%></div> <%=bonusTemplate({ bonus: in_progress })%> <br><br> <% if (_.isEmpty(waiting)) { %> <div class="empty"> <%=__(\'bonus.empty.no.next.message\')%> <a href="mailto:<%=__(\'brand.support.email\')%>"><%=__(\'bonus.nobonus.contact.us\')%></a></div> <% } else { %> <div class="header"><%=__(\'bonus.status.next\')%></div> <% _.each(waiting, function(waiting_bonus) { %> <%=bonusTemplate({ bonus: waiting_bonus })%> <% }) %> <% } %> <% } %> </div></div></div>'},2592:function(t,e){t.exports='<div class="bonus-line <%= bonus.statusClass %>"><div class="bonus-title"><span class="title"><%= bonus.title %></span><span class="note"><%= bonus.note %></span></div><div class="bonus-progress"><div class="points hidden-xs"><%= bonus.points %></div><div class="bonus-progress-wrapper visible-xs visible-sm visible-md"><span class="earned-points <%= bonus.statusClass %>"><%= bonus.points %></span><span class="expiration-short"><%= bonus.expirationTimeShort %></span></div><div class="progress-bar <%= bonus.progressClass %>"><div style="width: <%= bonus.progressPercent %>%"></div></div><div class="expiration hidden-xs"><%= bonus.expirationTime %></div></div><div class="bonus-help"><%= bonus.helpMessage %></div></div>'},2593:function(t,e,s){(function(n){var i;void 0!==(i=function(t,e,n){var i=s(0),o=s(2262),a=i.template(s(2594)),r=i.template(s(2595));n.exports=o.extend({className:"bonus-completed",render:function(){return o.prototype.render.call(this),this.$el.html(a({bonusTemplate:r,completed:this.enrichBonusInfo(this.model.getCompletedBonuses(),this.model.getAccountCurrency())})),this}})}.call(e,s,e,t))&&(t.exports=i)}).call(e,s(0))},2594:function(t,e){t.exports='<div class="bonus-progress-body flex flex-column"><div class="forms-container flex flex-column flex-stretch"><div class="flex flex-column flex-stretch min-height-content"> <% if (_.isEmpty(completed)) { %> <div class="empty"> <%=__(\'bonus.empty.no.completed.message\')%> <a href="mailto:<%=__(\'brand.support.email\')%>"><%=__(\'bonus.nobonus.contact.us\')%></a></div> <% } else { %> <div class="grid-12-equalHeight header-grid hidden-xs"><div class="col-5"><%=__(\'bonus.item.completed.name\')%></div><div class="col-2"><%=__(\'bonus.item.completed.expiration.title\')%></div><div class="col-3"><%=__(\'bonus.item.completed.points.earned.title\')%></div><div class="col-2"><%=__(\'bonus.item.status\')%></div></div> <% _.each(completed, function(completed_bonus) { %> <%=bonusTemplate({ bonus: completed_bonus })%> <% }) %> <% } %> </div></div></div>'},2595:function(t,e){t.exports='<div class="grid-12-equalHeight bonus-line-grid hidden-xs"><div class="col-5 title"><%= bonus.amountTitle %></div><div class="col-2 expiration"><%= bonus.expirationDate %></div><div class="col-3 points"><%= bonus.pointsEarned %></div><div class="col-2"><div class="status"><span class="<%= bonus.statusClass %>"><%= bonus.statusLabel %></span><span class="question-tooltip" aria-label="<%= bonus.helpMessage %>" data-tooltip-align="right"></span></div></div></div><div class="grid-12-equalHeight bonus-line-grid visible-xs visible-sm visible-md"><div class="col-12 bonus-line-column"><div class="grid-12-equalHeight-middle"><div class="col-5 title"><%=__(\'bonus.item.completed.name\')%></div><div class="col-7 title"><%= bonus.amountTitle %></div></div></div><div class="col-12 bonus-line-column"><div class="grid-12-equalHeight-middle"><div class="col-5"><%=__(\'bonus.item.completed.expiration.title\')%></div><div class="col-7 expiration"><%= bonus.expirationDate %></div></div></div><div class="col-12 bonus-line-column"><div class="grid-12-equalHeight-middle"><div class="col-5"><%=__(\'bonus.item.completed.points.earned.title\')%></div><div class="col-7 points"><%= bonus.pointsEarned %></div></div></div><div class="col-12 bonus-line-column"><div class="grid-12-equalHeight-middle"><div class="col-5"><%=__(\'bonus.item.status\')%></div><div class="col-7 status <%= bonus.statusClass %>"><%= bonus.statusLabel %></div></div></div></div>'},2596:function(t,e,s){(function(n){var i;void 0!==(i=function(t,e,n){var i=s(0),o=s(2202);n.exports=o.extend({defaults:function(){return{in_progress:{},waiting:[]}},initialize:function(){o.prototype.initialize.apply(this,arguments),this.load()},load:function(){this.set({in_progress:this.parseInProgressBonus(),waiting:i.filter(this.getBonuses(),this.filter(["WAITING"]))})},parseInProgressBonus:function(){var t=i.filter(this.getBonuses(),this.filter(["IN_PROGRESS"]));return i.isEmpty(t)?{}:t[0]},getInProgressBonus:function(){return this.get("in_progress")},getWaitingBonuses:function(){return this.get("waiting")},getAccountCurrency:function(){return this.get("accountCurrency")}})}.call(e,s,e,t))&&(t.exports=i)}).call(e,s(0))},2597:function(t,e,s){(function(n){var i;void 0!==(i=function(t,e,n){var i=s(0),o=s(2202);n.exports=o.extend({defaults:function(){return{completed:[]}},initialize:function(){this.load()},load:function(){this.set({completed:i.filter(this.getBonuses(),this.filter(["COMPLETED","LOST","EXPIRED"]))})},getCompletedBonuses:function(){return this.get("completed")},getAccountCurrency:function(){return this.get("accountCurrency")}})}.call(e,s,e,t))&&(t.exports=i)}).call(e,s(0))},2768:function(t,e,s){(function(n,i){var o;void 0!==(o=function(t,e,n){function i(t){var t=o.map(t,function(t){return t.toUpperCase()});return"<span>"+o.map(o.initial(t),function(t){return"<span class='color-platform-text-color'>"+t+" </span>"}).join("")+"<span class='color-platform-accent'>"+o.last(t)+"</span></span>"}var o=s(0),a=s(4),r=s(7),l=s(80),u=s(30),c=o.template(s(2769));n.exports=l.extend({className:"bonus-progress",name:"bonus-progress",events:function(){return this.addEvents(l)({"click .fn-tab":"changeTab"})},initialize:function(t){l.prototype.initialize.apply(this,arguments),this.listenTo(this.model,"change:currentTabId",this.updateTab),this.listenTo(this.model,"change:bonuses",this.loadCompleted),this.render()},render:function(){return l.prototype.render.call(this),this.setContent(c({options:this.options,model:this.model.toJSON(),parseWizardHeader:i(this.options.caption)})),this.showLoading(),this},updateTab:function(){var t=this.model.getCurrentTabData(),e=t.view,s=t.model;this.addChildView(".tab-content",e,{model:new s({bonuses:this.model.getBonuses(),accountCurrency:r.getUserCurrencySymbol()})}),this.$(".header-container-xs .caption").html(__(this.model.getCurrentTabName())),this.$(".tab").removeClass("active");var n=this.model.getCurrentTabId();this.$(".tab[data-tab-id="+n+"]").addClass("active")},changeTab:function(t){this.model.setCurrentTabById(a(t.currentTarget).attr("data-tab-id"))},loadCompleted:function(){this.updateTab(),this.hideLoading()},showLoading:function(){this.addChildView(".bonus-progress-content",u,{parent:this.$el,translucent:"2"})},hideLoading:function(){this.removeChildView(".bonus-progress-content")}})}.call(e,s,e,t))&&(t.exports=o)}).call(e,s(0),s(4))},2769:function(t,e){t.exports='<div class="popup-header popup-header-bg-style-grey popup-header-style-default hidden-xs"><div class="popup-caption flex flex-valign-center"> <%=parseWizardHeader%> <span class="question-tooltip" aria-label="<%=__(\'bonus.help.message\')%>" data-tooltip-align="right"></span></div><div class="popup-actions fn-close-popup btn"><i class="icon-close-blue"></i></div></div><div class="visible-xs header-container-xs"><div class="left flex fn-close-popup flex-valign-center btn"><div class="icon arrow"></div><b><%-__(\'actions.back\') %></b></div><div class="caption flex flex-valign-center flex-align-center"> <%-model.currentTabName || model.currentTabNameMobile%> </div><div class="right flex flex-valign-center btn"></div></div><div class="bonus-progress-content"><div class="modal-dialog-container"></div><div class="tabs flex flex-row flex-align-start hidden-xs"> <% _.each(model.tabs, function(v) { %> <div class="tab fn-tab flex flex-stretch flex-valign-center active <%- model.currentTabId == v.id ? \'active\' : \'\' %>" data-tab-id="<%- v.id %>"><%- v.name %></div> <% }) %> </div><div class="tab-content"></div></div>'},2770:function(t,e,s){(function(n){var i;void 0!==(i=function(t,e,i){var o=s(2590),a=s(2593),r=s(2596),l=s(2597),u=s(2202);i.exports=u.extend({defaults:function(){return{tabs:[{id:"in-progress",name:__("bonus.tab.in_progress"),viewClass:o,modelClass:r},{id:"completed",name:__("bonus.tab.completed"),viewClass:a,modelClass:l}],currentTabId:"in-progress",defaultTabId:"in-progress"}},initialize:function(){this.load()},getCurrentTab:function(){return n.findWhere(this.get("tabs"),{id:this.getCurrentTabId()})},getCurrentTabId:function(){var t=this.get("currentTabId");return t||(t=this.get("defaultTabId")),t},getCurrentTabName:function(){return this.getCurrentTab().name},getCurrentTabData:function(){var t=this.getCurrentTab();return{view:t.viewClass,model:t.modelClass}},getTabById:function(t){return n.findWhere(this.get("tabs"),{id:t})},enableAllTabs:function(){n.each(this.get("tabs"),function(t){return t.disable=!1})},disableTabById:function(t){var e=this.getTabById(t);e&&(e.disable=!0)},enableTabById:function(t){var e=this.getTabById(t);e&&(e.disable=!1)},setCurrentTabById:function(t){var e=this.getTabById(t);return e&&this.set({currentTabId:e.id,currentTabName:e.name}),e}})}.call(e,s,e,t))&&(t.exports=i)}).call(e,s(0))}});