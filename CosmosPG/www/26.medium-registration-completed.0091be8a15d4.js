webpackJsonp([26],{1993:function(e,t,i){var s;void 0!==(s=function(e,t,s){var n=i(2811),o=i(2813);s.exports={MediumRegistrationCompletedView:n,MediumRegistrationCompletedModel:o}}.call(t,i,t,e))&&(e.exports=s)},2627:function(e,t,i){var s;void 0!==(s=function(e,t,i){i.exports={EMPTY:"EMPTY",LOADING:"LOADING",SUCCESS:"SUCCESS",ERROR:"ERROR"}}.call(t,i,t,e))&&(e.exports=s)},2811:function(e,t,i){(function(s){var n;void 0!==(n=function(e,t,s){var n=i(0),o=i(3),r=i(76),a=(i(10),n.template(i(2812))),c=(i(32),i(2627)),d=c.SUCCESS,l=c.ERROR,m=r.extend({className:"medium-registration-completed",name:"medium-registration",events:function(){return n.extend({},n.result(r.prototype,"events"),{"click .fn-accept":"onAccept"})},initialize:function(){r.prototype.initialize.apply(this,arguments),this.listenTo(this.model,"change:statusOfLeverages",this.onStatusOfLeveragesChanged),this.render()},render:function(){this.onStatusOfLeveragesChanged()},renderContent:function(){r.prototype.render.call(this),this.setContent(a({leverage:this.model.getCurrentLeverageValue()}))},onStatusOfLeveragesChanged:function(){switch(this.model.get("statusOfLeverages")){case d:this.renderContent();break;case l:o.trigger("ui:message-box",{text:__("indigo.generic.error.message")})}},onAccept:function(e){e.preventDefault(),this.close()},hideContent:function(){this.$(".leverage").css("visibility","hidden"),this.$(".leverage-mobile").css("visibility","hidden")},showContent:function(){this.$(".leverage").css("visibility","visible"),this.$(".leverage-mobile").css("visibility","visible")}});s.exports=m}.call(t,i,t,e))&&(e.exports=n)}).call(t,i(0))},2812:function(e,t){e.exports='<div class="medium-registration-completed-content hidden-xs"><div class="medium-registration-completed-text"> <%= __(\'medium_score.registration.completed.message\')%> </div><div class="medium-registration-completed-text"> <%= __(\'medium_score.registration.completed.note\')%> </div><div class="medium-registration-completed-action"><a class="btn btn-primary btn-block fn-accept" href="#"><div class="button-container"><span> <%=__(\'actions.confirm\')%> </span></div></a></div><div class="line"></div><div class="medium-registration-completed-footer"> <%=__(\'medium_score.registration.completed.footer\')%> </div></div><div class="medium-registration-completed-content-mobile hidden-sm hidden-md hidden-lg"><div class="mobile-content"><div class="mobile-content-top"><div class="medium-registration-completed-text"> <%= __(\'medium_score.registration.completed.message\')%> </div><div class="medium-registration-completed-text"> <%= __(\'medium_score.registration.completed.note\')%> </div></div><div class="modile-footer"><div class="line"></div><div class="medium-registration-completed-footer"> <%=__(\'medium_score.registration.completed.footer\')%> </div></div></div><div class="mobile-actions"><a class="btn btn-primary btn-block fn-accept" href="#"> <%=__(\'actions.confirm\')%> </a></div></div>'},2813:function(e,t,i){var s;void 0!==(s=function(e,t,s){var n=i(859),o=i(2627),r=o.EMPTY,a=o.LOADING,c=o.SUCCESS,d=o.ERROR,l=n.extend({defaults:function(){return{statusOfLeverages:r}},initialize:function(){this.loadLeverages()},loadLeverages:function(){var e=this.control("statusOfLeverages");e(a),this.load().then(function(t){return e(c)}).catch(function(t){return e(d)})}});s.exports=l}.call(t,i,t,e))&&(e.exports=s)}});