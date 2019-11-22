(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1937:function(e,t,i){var n;void 0===(n=function(e,t,n){var s=i(2469),o=i(2274),a=i(2473),r=i(2475),c=i(2477),l=i(2479),d=i(2043);n.exports={DefaultRiskWarningView:s,SpanishRiskWarningView:o,SpanishRiskWarningTradeView:a,CheckKnowledgeRiskWarningView:r,SpanishRiskWarningRejectView:c,RiskWarningModel:l,types:d}}.call(t,i,t,e))||(e.exports=n)},2043:function(e,t,i){var n;void 0===(n=function(e,t,i){i.exports={NONE:"NONE",UNKNOWN_SCORE:"UNKNOWN",NONE_SCORE:"NONE",LOW_SCORE:"LOW",MEDIUM_SCORE:"MEDIUM",HIGH_SCORE:"HIGH",EMPTY:"EMPTY",SUBMITTING:"SUBMITTING",LOADING:"LOADING",ERROR:"ERROR",SUCCESS:"SUCCESS",SPANISH_REGULATION:"spanish",ACTION_TRADE:"trade",ACTION_REJECT:"reject"}}.call(t,i,t,e))||(e.exports=n)},2177:function(e,t,i){(function(n){var s;void 0===(s=function(e,t,n){var s=i(1),o=(i(12),i(136)),a=o.extend({events:function(){return s.extend({},s.result(o.prototype,"events"),{"click .fn-ok":"onOK","click .fn-cancel":"onCancel","click .fn-back":"onBack"})},className:"risk-warning",name:"risk-warning",initialize:function(e){e=s.extend(e||{},{isHeaderShowed:!0}),o.prototype.initialize.apply(this,arguments),this.render()},close:function(){o.prototype.close.call(this)},onCancel:function(){this.handle("onCancel"),this.close()},onBack:function(){this.handle("onBack"),this.close()},onOK:function(){this.handle("onOK"),this.close()},handle:function(e){var t=this.options[e];s.isFunction(t)&&t()},handleError:function(e){}});n.exports=a}.call(t,i,t,e))||(e.exports=s)}).call(this,i(1))},2274:function(e,t,i){(function(n){var s;void 0===(s=function(e,t,n){var s=i(1),o=(i(12),i(5)),a=i(2177),r=s.template(i(2275)),c=s.template(i(2471)),l=s.template(i(2472)),d=i(169),p=i(86),u=i(9),h=i(2043),f=h.MEDIUM_SCORE,g=h.SUBMITTING,v=h.LOADING,m=h.ERROR,_=h.SUCCESS,b=a.extend({initialize:function(){a.prototype.initialize.apply(this,arguments),this.listenTo(this.model,"change:statusOfSubmittingSignature",this.onStatusOfSubmittingChanged),this.listenTo(this.model,"change:statusOfLeverages",this.onStatusOfLeveragesChanged),this.model.loadLeverages()},onOK:function(){var e=this.form,t=e.validate(),i=this.model.get("score"),n="";(u.isMiddleScoreRiskWarningConfirmationEditEnabled()&&i===f||u.isRiskWarningConfirmationEditEnabled()&&i!==f)&&(n=e.field("signature").value());t||this.model.submitSignature(n,!0)},onStatusOfSubmittingChanged:function(){switch(this.model.get("statusOfSubmittingSignature")){case g:this.addChildView(".description",p,{parent:this.$el});break;case m:this.removeChildView(".description"),o.trigger("ui:message-box",{text:__("indigo.generic.error.message")});break;case _:this.removeChildView(".description"),a.prototype.onOK.call(this)}},onStatusOfLeveragesChanged:function(){switch(this.model.get("statusOfLeverages")){case v:this.addChildView(".description",p,{parent:this.$el});break;case m:this.removeChildView(".description"),o.trigger("ui:message-box",{text:__("indigo.generic.error.message")});break;case _:this.onSuccess()}},onSuccess:function(){var e=this.model.get("leverage"),t=this.model.get("score"),i=e.getMaxLeverageValue(),n=t===f&&u.isRegistrationFinalStepAllowBack("medium"),s=t===f?__("spanish.regulation.medium.score.new_user.text",i):__("spanish.regulation.high.score.new_user.text"),o=t===f?__("spanish.regulation.medium.score.new_user.confirmation"):__("spanish.regulation.high.score.new_user.confirmation"),a=__("medium_score.popup.button.accept"),p=__("registration.medium-score.cancel.button");this.setContent(r({popupTxt:s,acceptKey:a,backKey:p,allowBack:n})),this.removeChildView(".description");var h={template:c,templateOptions:{spanishConfirmText:o}};(!u.isMiddleScoreRiskWarningConfirmationEditEnabled()&&t===f||!u.isRiskWarningConfirmationEditEnabled()&&t!==f)&&(h={template:l}),this.form=this.addChildView(".form-container",d,h),this.form.field("signature")&&this.form.field("signature").setRules({not_empty:__("registration.warning.this_field_is_required"),strict_equals:[new RegExp('"?'+o.replace(".",".?")+'"?$',"gi"),__("indigo.spanish.regulation.confirmation.error")]}),this.form.field("spanishRiskWarningCheckbox").setRules({not_equals:[!1,__("registration.warning.this_field_is_required")]})}});n.exports=b}.call(t,i,t,e))||(e.exports=s)}).call(this,i(1))},2275:function(e,t){e.exports=' <div class=description><%=popupTxt%></div> <div class=form-container></div> <div class="actions flex flex-row"> <%if (allowBack) {%> <button class="btn btn-link flex-stretch fn-back"><%=backKey%></button> <%}%> <button class="btn btn-primary flex-stretch fn-ok"><%=acceptKey%></button> </div>'},2469:function(e,t,i){(function(n){var s;void 0===(s=function(e,t,n){var s=i(1),o=i(5),a=i(2177),r=s.template(i(2470)),c=i(86),l=i(9),d=i(2043),p=d.LOW_SCORE,u=d.MEDIUM_SCORE,h=d.LOADING,f=d.ERROR,g=d.SUCCESS,v=a.extend({initialize:function(){a.prototype.initialize.apply(this,arguments),this.listenTo(this.model,"change:statusOfLeverages",this.onStatusOfLeveragesChanged),this.model.loadLeverages()},render:function(){a.prototype.render.call(this)},onStatusOfLeveragesChanged:function(){switch(this.model.get("statusOfLeverages")){case h:this.addChildView(".description",c,{parent:this.$el});break;case f:this.removeChildView(".description"),o.trigger("ui:message-box",{text:__("indigo.generic.error.message")});break;case g:this.removeChildView(".description");var e=this.model.get("leverage").getMaxLeverageValue(),t=this.model.getScore()==u?u:p,i=t==u?__("medium_score.popup.message",e):__("low_score.login.demo.message"),n=t==u?__("medium_score.popup.button.accept"):__("low_score.login.live.button"),s=t==u?__("registration.medium-score.cancel.button"):__("registration.low-score.cancel.button");this.setContent(r({popupTxt:i,acceptKey:n,backKey:s,score:t,allowBack:l.isRegistrationFinalStepAllowBack(t)}))}}});n.exports=v}.call(t,i,t,e))||(e.exports=s)}).call(this,i(1))},2470:function(e,t){e.exports='<div class="fluid-scroll-content flex flex-column"> <div class=description> <div> <%=popupTxt%> </div> </div> <div class="actions flex flex-row"> <%if (allowBack) {%> <button class="btn btn-link flex-stretch fn-back" data-score="<%-score%>"><%=backKey%></button> <%}%> <button class="btn btn-primary flex-stretch fn-ok" data-score="<%-score%>"><%=acceptKey%></button> </div> </div>'},2471:function(e,t){e.exports='<div class=form-col> <div class="field field-type-input"> <label><%=__(\'spanish.regulation.medium.score.new_user.confirmation.header\')%></label><br> <label><%= \'"\' + spanishConfirmText + \'"\' %></label> <input type=text class="form-control input-field" name=signature value="" no-paste=true> <div class=field-conversion> <div class=content></div> </div> <div class="field-tooltip bottom-of-field"> <div class=content></div> </div> </div> <div class="field field-type-checkbox"> <div class=checkbox-row> <input type=checkbox id=spanishRiskWarningCheckbox name=spanishRiskWarningCheckbox> <label for=spanishRiskWarningCheckbox> <span class=checkbox_label_inline><%=__(\'spanish.regulation.check_box.text\')%></span> </label> <div class=field-tooltip> <div class=content></div> </div> </div> </div> </div> '},2472:function(e,t){e.exports="<div class=form-col> <div class=\"field field-type-checkbox\"> <div class=checkbox-row> <input type=checkbox id=spanishRiskWarningCheckbox name=spanishRiskWarningCheckbox> <label for=spanishRiskWarningCheckbox> <span class=checkbox_label_inline><%=__('spanish.regulation.check_box.text')%></span> </label> <div class=field-tooltip> <div class=content></div> </div> </div> </div> </div>"},2473:function(e,t,i){(function(n){var s;void 0===(s=function(e,t,n){var s=i(1),o=i(6),a=i(2274),r=s.template(i(2275)),c=s.template(i(2474)),l=i(169),d=a.extend({className:"risk-warning-trade",name:"risk-warning-trade",onSuccess:function(){var e=this.model.get("score"),t=__("risk.warning.popup."+e+".header"),i=__("continue"),n=__("cancel");this.setContent(r({popupTxt:t,acceptKey:i,backKey:n,allowBack:!0})),this.removeChildView(".description");var s=__("risk.warning.popup."+e+".hint");this.form=this.addChildView(".form-container",l,{template:c,templateOptions:{info:__("risk.warning.popup."+e+".info"),text:__("risk.warning.popup."+e+".text"),hint:s,help:__("risk.warning.popup."+e+".click.help")}}),this.form.field("signature")&&this.form.field("signature").setRules({not_empty:__("registration.warning.this_field_is_required"),strict_equals:[new RegExp('"?'+s.replace(".",".?")+'"?$',"gi"),__("indigo.spanish.regulation.confirmation.error")]})},onOK:function(){a.prototype.onOK.call(this),o.getUserDataCompliance().loadDataCompliance()}});n.exports=d}.call(t,i,t,e))||(e.exports=s)}).call(this,i(1))},2474:function(e,t){e.exports='<div class=form-col> <div class="field field-type-input"> <label><%= info %></label><br> <label><%= text %></label><br> <label class=autotests-regulation-text><b><%= hint %></b></label> <input type=text class="form-control input-field" name=signature value="" no-paste=true> <div class=field-conversion> <div class=content></div> </div> <div class="field-tooltip bottom-of-field"> <div class=content></div> </div> </div> <div class=help> <label><%= help %></label> </div> </div> '},2475:function(e,t,i){(function(n){var s;void 0===(s=function(e,t,n){var s=i(1),o=i(2177),a=s.template(i(2476)),r=i(9),c=i(2043).LOW_SCORE,l=o.extend({render:function(){o.prototype.render.call(this);var e=c,t=__("low_score.login.check.knowledge.message"),i=__("low_score.login.live.button"),n=__("registration.low-score.cancel.button"),s=__("registration.low_score.check_knowledge.button");this.setContent(a({popupTxt:t,acceptKey:i,backKey:n,checkKnowledgeKey:s,allowBack:r.isRegistrationFinalStepAllowBack(e)}))}});n.exports=l}.call(t,i,t,e))||(e.exports=s)}).call(this,i(1))},2476:function(e,t){e.exports='<div class="fluid-scroll-content flex flex-column"> <div class=description> <div> <%=popupTxt%> </div> </div> <div class="actions flex flex-row"> <%if (allowBack) {%> <button class="btn btn-link flex-stretch fn-back"><%=backKey%></button> <%}%> <button class="btn btn-primary flex-stretch fn-cancel"><%=checkKnowledgeKey%></button> </div> <div class=footer> <a class="fn-ok go-to-demo"><%=acceptKey%></a> </div> </div>'},2477:function(e,t,i){(function(n){var s;void 0===(s=function(e,t,n){var s=i(1),o=i(136),a=s.template(i(2478));n.exports=o.extend({className:"risk-warning",name:"risk-warning",events:function(){return s.extend({},s.result(o.prototype,"events"),{"click .fn-ok":"onOK"})},initialize:function(e){o.prototype.initialize.apply(this,arguments),this.render()},render:function(){o.prototype.render.call(this);var e=__("spanish.regulation.reject.text"),t=__("ok");this.setContent(a({popupTxt:e,acceptKey:t}))},onOK:function(){this.handle("onOK"),this.close()},close:function(){o.prototype.close.call(this)},handle:function(e){var t=this.options[e];s.isFunction(t)&&t.call(this)}})}.call(t,i,t,e))||(e.exports=s)}).call(this,i(1))},2478:function(e,t){e.exports='<div class="fluid-scroll-content flex flex-column"> <div class=description> <div> <%=popupTxt%> </div> </div> <div class="actions flex flex-row"> <button class="btn btn-primary flex-stretch fn-ok"><%=acceptKey%></button> </div> </div> '},2479:function(e,t,i){var n;void 0===(n=function(e,t,n){i(1);var s=i(43),o=i(8),a=i(6),r=i(2043),c=r.EMPTY,l=r.SUBMITTING,d=r.LOADING,p=r.ERROR,u=r.SUCCESS,h=s.extend({defaults:function(){return{score:a.getUserScore(),statusOfSubmittingSignature:c,statusOfLeverages:c,firstName:c,lastName:c,confirmed:null}},getScore:function(){return this.get("score")},submitSignature:function(e,t){var i=this.control("statusOfSubmittingSignature");i(l);var n={signature:e,confirmationChecked:t};return o.submitSignature(n).then((function(e){return i(u)})).catch((function(e){return i(p)}))},loadLeverages:function(){var e=this.control("statusOfLeverages");e(d);var t=a.getUserLeverageLevels();return t.load().then((function(i){return e(u,{leverage:t})})).catch((function(t){e(p)}))},confirm:function(e){this.set("confirmed",e)}});n.exports=h}.call(t,i,t,e))||(e.exports=n)}}]);