(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1942:function(e,t,i){var n;void 0===(n=function(e,t,n){var s=i(2521),a=i(2526),l=i(33).default;n.exports={initNewsSentimentView:function(e){return l.mobile()?new a(e):new s(e)}}}.call(t,i,t,e))||(e.exports=n)},2280:function(e,t,i){var n;void 0===(n=function(e,t,n){i(1);var s=i(43).extend({defaults:function(){return{stockTicker:"",symbol:"",description:"",stockPrice:0,stockDailyChangeAmount:0,stockDailyChangePercent:0,bearishPercentage:0,bullishPercentage:0,numberOfArticles:0,newsScore:"",articles:[],keywords:[],chartData:[],numberArticlesAvg:0,numberArticlesWeek:0,positiveStockSentiment:0,neutralStockSentiment:0,negativeStockSentiment:0,positiveSectorSentiment:0,neutralSectorSentiment:0,negativeSectorSentiment:0}},getStockTicker:function(){return this.get("stockTicker")},getSymbol:function(){return this.get("symbol")},getDescription:function(){return this.get("description")},getStockPrice:function(){return this.get("stockPrice")},getStockDailyChangeAmount:function(){return this.get("stockDailyChangeAmount")},getStockDailyChangePercent:function(){return this.get("stockDailyChangePercent")},getBearishPercentage:function(){return this.get("bearishPercentage")},getBullishPercentage:function(){return this.get("bullishPercentage")},isExistsSentimentData:function(){return this.get("bearishPercentage")&&this.get("bullishPercentage")&&this.get("bearishPercentage")+this.get("bullishPercentage")==100},getNumberOfArticles:function(){return this.get("numberOfArticles")},getNewsScore:function(){return this.get("newsScore")},getNewsScoreDir:function(){var e=this.get("newsScore").toLowerCase();return e.indexOf("positive")>-1?"positive":e.indexOf("negative")>-1?"negative":"neutral"},getArticles:function(){return this.get("articles")},getKeywords:function(){return this.get("keywords").join(", ").slice(0,-1)},getNumberArticlesAvg:function(){return this.get("numberArticlesAvg")},getNumberArticlesWeek:function(){return this.get("numberArticlesWeek")},getChartData:function(){return this.get("chartData")},getPositiveStockSentiment:function(){return this.get("positiveStockSentiment")},getNegativeStockSentiment:function(){return this.get("negativeStockSentiment")},getPositiveSectorSentiment:function(){return this.get("positiveSectorSentiment")},getNegativeSectorSentiment:function(){return this.get("negativeSectorSentiment")}});n.exports=s}.call(t,i,t,e))||(e.exports=n)},2281:function(e,t,i){(function(n){var s;void 0===(s=function(e,t,n){var s=i(1),a=i(367),l=i(54),r=i(16),o=i(6),c=i(74),d=c.TEXT_MUTED_COLOR,m=c.BRAND_PRIMARY,v=c.NEUTRAL_COLOR,u=c.POSITIVE_COLOR,h=c.NEGATIVE_COLOR,p=c.NEUTRAL_LIGHT_COLOR,f=c.NEUTRAL_DARK_COLOR;n.exports=function(e,t,i){var n=s.map(t.getChartData(),(function(e){var t=e.date.split("-"),i=l.splitByComma(__("calendar_monthNames"));return e.date_formatted=t[2]+" "+i[t[1]-1].substring(0,3),e.negativeCol=e.neutral+e.negative,e.positiveCol=e.neutral+e.negative+e.positive,e})).sort((function(e,t){return r(e.date,"YYYY-M-D").format("X")-r(t.date,"YYYY-M-D").format("X")})),c=s.map(n,(function(e){return e.date_formatted||""})),g=s.map(n,(function(e){return e.price||0})),k=s.map(n,(function(e){return e.positiveCol||0})),b=s.map(n,(function(e){return e.negativeCol||0})),w=s.map(n,(function(e){return e.neutral||0})),_=o.getUserCommonData(),S=u,y=h,C="light"===_.getAppTheme()?p:f,x=m;a.chart(e,{credits:{enabled:!1},chart:{zoomType:!1,width:i,height:205,spacingTop:20,spacingBottom:10,style:{fontFamily:"Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;"}},title:{text:""},xAxis:{categories:c,style:{color:d},tickWidth:0,lineColor:v,lineWidth:1,gridLineWidth:0},yAxis:[{title:{text:__("news.sentiment.articles"),style:{color:d}},labels:{format:"{value}",style:{color:d}},lineColor:v,lineWidth:1,gridLineWidth:0},{title:{text:__("insiders.graph.stock.price"),style:{color:d}},labels:{format:"{value}",style:{color:d}},lineWidth:1,gridLineWidth:0,lineColor:v,opposite:!0}],plotOptions:{spline:{lineWidth:1,marker:{enabled:!1}},column:{groupPadding:.5,pointWidth:i/24,borderWidth:0}},legend:{enabled:!1},tooltip:{style:{color:d},formatter:function(){var e=this,t=s.find(n,(function(t){return t.date_formatted===e.x}));return"<div><strong>"+t.date_formatted+", "+r(t.date).format("YYYY")+"</strong><br/><span>"+__("news.sentiment.bullish.news")+" "+__("news.sentiment.articles")+": <strong>"+t.positive+"</strong></span><br /><span>"+__("news.sentiment.bearish.news")+" "+__("news.sentiment.articles")+": <strong>"+t.negative+"</strong></span><br /><span>"+__("news.sentiment.neutral.news")+" "+__("news.sentiment.articles")+": <strong>"+t.neutral+"</strong></span></div>"}},series:[{name:"",type:"column",data:k,color:S},{name:"",type:"column",data:b,color:y},{name:"",type:"column",data:w,color:C},{name:"",type:"spline",data:g,color:x,yAxis:1,enableMouseTracking:!1}]})}}.call(t,i,t,e))||(e.exports=s)}).call(this,i(1))},2521:function(e,t,i){(function(n,s){var a;function l(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}void 0===(a=function(e,t,n){var a=i(1),r=i(5),o=i(20),c=i(100),d=i(8),m=i(6),v=i(26),u=i(115),h=i(2280),p=i(0),f=i(22),g=i(190),k=i(2281),b=i(234),w=i(148),_=i(2522),S=i(86),y=i(267).default,C=i(114),x=i(46).updateUrlBySelectedInstrumentSymbol,D=i(368).default,T=i(122).sendEventosNewsSentimentAction,A=i(64).transformSymbolToSBSymbol,N=o.extend({subscribedInstruments:[],mainTemplate:a.template(i(2523)),contentTemplate:a.template(i(2524)),detailsTemplate:a.template(i(2525)),events:{"click .news-sentiment-top .icon-close-blue":"close","click .view-report":"viewDetails","click .btn-back":"closeDetails","click .take-tour":"openTour"},tagName:"div",className:"news-sentiment-wrapper popup-item",initialize:function(e){var t=this;o.prototype.initialize.apply(this,arguments),this.listenTo(r,"ui:header-itemclick",this.close),this.listenTo(r,"ui:instrument:change",this.close),this.listenTo(r,"ribbon:update",this.updateContentHeight),s(window).on("resize.sentiment",(function(){return t.updateContentHeight()})),this.parent=e.parent,this.parent.find(".main-box-content").addClass("hidden"),this.createLoadingView(),this.getNewsSentiment()},getNewsSentiment:function(){var e=this;return d.loadNewsSentiment().then((function(t){if(t.data.error)return Promise.reject();e.newsSentiment=e.createCollection(t.data),e.render()}))},createCollection:function(e){var t=new c,i=[];return a.each(e,(function(e){var n=e.symbol;if(v.getInstrumentBySymbol(n)||(n=A(n),v.getInstrumentBySymbol(n))){var s=new h(e);s.set("instrument",v.getInstrumentBySymbol(n)),i.push(n),t.add(s)}})),this.subscribedInstruments=u.update(i,this.subscribedInstruments).addedSymbols,t},viewDetails:function(e){var t=this,i=e.currentTarget.rel;if(i)return this.createLoadingView(),d.loadNewsSentimentByTicker(i).then((function(n){if(n.data.error)return Promise.reject();s(e.currentTarget).parent().addClass("hidden"),t.openInstrumentRow(n.data,i,s(e.currentTarget))}))},openInstrumentRow:function(e,t,i){var n=new h(e),s=i.parent().parent().parent().parent(),l=a.find(this.newsSentiment.models,(function(e){return e.getStockTicker()===t}));s.find(".news-sentiment-data").html(this.detailsTemplate({item:n,itemMainData:l,ticker:t,articleDate:C.newsSentimentArticleDate.bind(C)})).removeClass("hidden");var r={all:"news.sentiment.all.news",positive:"tipranks.bullish",negative:"tipranks.bearish"};this.filterNewsDropdown=this.addChildView(".articles."+t.toLowerCase()+" .filter",b,{template:w.selectBox,disable:!1,translationKey:"",options:["all","positive","negative"],transformOptionsValue:function(e){return e},transformOptionText:function(e){return __(r[e])},title:"",name:"news-filter"}),this.filterNewsDropdown.value("all"),this.listenTo(this.filterNewsDropdown,"change",this.filterNews.bind(this)),D.init(this.$el.find(".articles."+t.toLowerCase()+" .articles-content")[0]),k(s.find(".analysis-graph")[0],n,600),this.updateContentHeight(),this.$el.find(".news-sentiment").addClass("details"),this.$el.find(".stock-data").addClass("hidden"),s.removeClass("hidden"),this.destroyLoadingView(),T(l.getSymbol())},closeDetails:function(){var e=a.find(this.$el.find(".stock-data"),(function(e){return!s(e).hasClass("hidden")}));this.$el.find(".news-sentiment").removeClass("details"),this.$el.find(".news-sentiment-data").addClass("hidden"),this.$el.find(".stock-data").removeClass("hidden").find(".stock-detailed-report").removeClass("hidden"),this.$el.find(".content-block")[0].scrollTop=e.offsetTop-90},close:function(e){u.remove(this.subscribedInstruments),r.trigger("ui:chart:update-size"),s(window).off("resize.sentiment"),this.parent.find(".main-box-content").removeClass("hidden"),this.unMountBuySell(),e&&store.dispatch(x()),this.destroy()},filterNews:function(e){var t=s(e.el).closest(".articles"),i=s(e.el).find("select").val();s(t).find(".article").removeClass("hidden no-border"),"all"!==i&&s(t).find(".article:not(."+i+")").addClass("hidden");var n=document.querySelectorAll(".article:not(.hidden)");n.length>=1&&n[n.length-1].classList.add("no-border")},render:function(){var e=this;o.prototype.render.call(this);var t=m.getApplicationSettings().get("newsSentiment:stockTicker");this.$el.append(this.mainTemplate({stocks:this.newsSentiment.models})),this.$el.find(".content-block").html(this.contentTemplate({stocks:this.newsSentiment.models})),D.init(this.$el.find(".news-sentiment-content")[0]),this.getBuySell(this.newsSentiment.models),this.destroyLoadingView();var i=this.newsSentiment.models.map((function(e){return e}));return this.$el.find(".results").html(__("total.results",this.newsSentiment.models.length)),f.render(p.createElement(y,{options:[].concat(l(i)),placeholder:__("search.all.instruments"),onChange:function(t){return e.renderFilteredData(t)},transformOptionText:function(e){return e.get("description")},transformOptionValue:function(e){return e.get("symbol")}}),document.getElementById("searchableDropdown")),t&&(this.createLoadingView(),d.loadNewsSentimentByTicker(t).then((function(i){if(i.data.error)return Promise.reject();var n=e.$el.find("[rel="+t);n.parent().addClass("hidden"),e.openInstrumentRow(i.data,t,n)}))),T(),this.updateContentHeight(),this},renderFilteredData:function(e){var t=a.isArray(e)&&e.length>0?e:this.newsSentiment.models;this.$el.find(".results").html(__("total.results",t.length)),this.unMountBuySell(),this.$el.find(".content-block").html(this.contentTemplate({stocks:t})),this.getBuySell(t),D.init(this.$el.find(".news-sentiment-content")[0])},openTour:function(){_(this.$el)},updateContentHeight:function(){var e=230;s(".ribbon-notification").length>0&&s(".ribbon-notification")[0].clientHeight&&(e+=s(".ribbon-notification")[0].clientHeight);var t=document.documentElement.clientHeight-e,i=document.documentElement.clientHeight-e-140;this.$el.find(".articles").length?(this.$el.find(".content-block").css("height",t+30+"px"),this.$el.find(".articles .block-content").css("height",i+"px")):this.$el.find(".content-block").css("height",t+"px")},getBuySell:function(e){var t=this.$el.find(".instrument-sell-change tr"),i=this.$el.find(".instrument-buy-change tr");a.each(e,(function(e,n){var s=p.createElement(g,{type:"Sell",column:{name:"Sell",key:"bid",direction:"bidDirection"},model:e.get("instrument"),isSelected:!0,onClick:a.noop}),l=p.createElement(g,{type:"Buy",column:{name:"Buy",key:"ask",direction:"askDirection"},model:e.get("instrument"),isSelected:!1,onClick:a.noop});f.render(s,t[n]),f.render(l,i[n])}))},unMountBuySell:function(){var e=this;a.each(["buy","sell"],(function(t){return a.each(e.$el.find(".instrument-"+t+"-change tr"),(function(e){return f.unmountComponentAtNode(e)}))}))},createLoadingView:function(){this.loadingView=new S({parent:s(".main-box"),position:"absolute"})},destroyLoadingView:function(){this.loadingView&&(this.loadingView.destroy(),this.loadingView=null)}});n.exports=N}.call(t,i,t,e))||(e.exports=a)}).call(this,i(1),i(12))},2522:function(e,t,i){(function(n,s){var a;void 0===(a=function(e,t,n){var a=i(1),l=i(317);n.exports=function(e){e.find(".content-block")[0].scrollTop=0,e.addClass("tour-opened");var t=e.find(".stock-data:not(.hidden)"),i=1===t.length?a.indexOf(t[0].parentNode.children,t[0])-1:-1;-1===i&&(s(e.find(".stock-data")[0]).find(".view-report")[0].click(),i=0);var n=s(e.find(".stock-data")[i]),r=function(){e.removeClass("tour-opened")},o=setInterval((function(){if(n.find(".news-sentiment-data").length>0){var e=[{element:n.find(".media-analysis")[0],intro:__("news.sentiment.text.slide_5_text"),position:"right"}];n.find(".last-seven-days").length>0&&e.unshift({element:n.find(".last-seven-days")[0],intro:__("news.sentiment.text.slide_1_text"),position:"right"}),l.introJs().setOptions({nextLabel:__("tipranks.text.slide_next"),prevLabel:__("tipranks.text.slide_prev"),doneLabel:__("actions.done"),skipLabel:" ",steps:e,scrollToElement:!0}).oncomplete(r).onexit(r).start(),clearInterval(o)}}),500)}}.call(t,i,t,e))||(e.exports=a)}).call(this,i(1),i(12))},2523:function(e,t){e.exports="<div class=popup-item-wrapper> <div class=\"hidden-xs news-sentiment-top\"> <div class=\"header-actions fn-close-popup btn\"> <i class=icon-close-blue></i> </div> </div> <div class=news-sentiment> <div class=\"header-block overflow-unset\"> <a class=btn-back> <i class=icon-view-details></i> <span><%=__('news.sentiment.header')%></span> </a> <div class=news-sentiment-header> <div class=header-title> <div class=title><%=__('news.sentiment.header')%></div> <div class=take-tour><%=__('tipranks.text.take_tour')%></div> </div> <div class=header-description><%=__('news.sentiment.description')%></div> </div> <div class=filters> <div class=results></div> <div id=searchableDropdown></div> </div> </div> <div class=content-block></div> <div class=risk-warning><%=__('tipranks.text.disclaimer')%></div> </div> </div> "},2524:function(e,t){e.exports="<%if(!_.isEmpty(stocks)) {%> <div class=news-sentiment-head> <div class=column-stock-name><%=__('tipranks.text.share')%></div> <div class=column-sentiment><%=__('news.sentiment.last.seven.days')%></div> <div class=column-media-buzz><%=__('news.sentiment.media.buzz')%></div> <div class=column-score><%=__('news.sentiment.news.score')%></div> <div class=column-actions><%=__('tipranks.text.trade')%></div> </div> <%}%> <div class=news-sentiment-content> <div> <%\n    _.each(stocks, function(stock){\n    %> <div class=stock-data data-ticker=\"<%=stock.getStockTicker()%>\"> <div class=first-row> <div class=stock-name> <div class=\"stock-image instrument-img-<%= stock.getSymbol().toLowerCase()%>\"></div> <div class=\"stock-description flex flex-column\"> <div class=name><%= stock.getDescription()%></div> <div class=\"ticker text-muted\"><%= stock.getStockTicker()%></div> </div> </div> <div class=\"stock-sentiment flex flex-column\"> <% if(stock.isExistsSentimentData()) {%> <span class=bearish><%=stock.getBearishPercentage()%>% <%=__('tipranks.bearish')%></span> <span class=bullish><%=stock.getBullishPercentage()%>% <%=__('tipranks.bullish')%></span> <%}%> </div> <div class=\"stock-media-buzz flex flex-column\"> <span><%=stock.getNumberOfArticles()%> <%=__('news.sentiment.articles')%> - <%=__('news.sentiment.this.week')%></span> <span><%=stock.getNumberArticlesAvg()%> <%=__('news.sentiment.articles')%> - <%=__('avg')%></span> </div> <div class=\"stock-score <%=stock.getNewsScoreDir()%> flex flex-column\"> <span><%=__('tipranks.' + stock.getNewsScore().toLowerCase())%></span> </div> <div class=stock-actions> <div class=stock-detailed-report> <a class=view-report rel=\"<%=stock.getStockTicker()%>\"> <span><%=__('view.details')%></span> <i class=icon-view-details></i> </a> </div> <div class=stock-buy-sell> <div class=instrument-sell-change><table><tr></tr></table></div> <div class=instrument-buy-change><table><tr></tr></table></div> </div> </div> </div> <div class=\"news-sentiment-data hidden\"></div> </div> <% });%> </div> </div>"},2525:function(e,t){e.exports="<div> <% if(itemMainData.isExistsSentimentData()) {%> <div class=\"block last-seven-days\"> <div class=block-title><%=__('news.sentiment.last.seven.days')%></div> <div class=block-content> <div class=sentiment-chart> <div class=\"icon icon-bearish\"></div> <div class=sentiment-bar> <div class=\"icon icon-sentiment-arrow\" style=\"left: <%=(item.getPositiveStockSentiment() - 2)%>%\"><span><%=ticker%></span></div> <div class=\"icon icon-sentiment-sector-avg\" style=\"left: <%=(item.getPositiveSectorSentiment() - 1)%>%\"><span><%=__('news.sentiment.sector.average')%></span></div> </div> <div class=\"icon icon-bullish\"></div> </div> <div class=sentiment-data> <div> <div><%=ticker%></div> <span class=bearish><%=item.getNegativeStockSentiment()%>% <%=__('tipranks.bearish')%></span> <span class=bullish><%=item.getPositiveStockSentiment()%>% <%=__('tipranks.bullish')%></span> </div> <div> <div><%=__('news.sentiment.sector.average')%></div> <span class=bearish><%=item.getNegativeSectorSentiment()%>% <%=__('tipranks.bearish')%></span> <span class=bullish><%=item.getPositiveSectorSentiment()%>% <%=__('tipranks.bullish')%></span> </div> </div> </div> </div> <%}%> <div class=\"block media-analysis\"> <div class=block-title><%=__('news.sentiment.media.analysis')%></div> <div class=block-content> <div class=legend> <span class=price><%=__('price')%></span> <span class=neutral><%=__('tipranks.neutral')%></span> <span class=bearish><%=__('news.sentiment.bearish.news')%></span> <span class=bullish><%=__('news.sentiment.bullish.news')%></span> </div> <div class=analysis-graph></div> </div> </div> </div> <div> <div class=\"block articles <%=ticker.toLowerCase()%>\"> <div class=block-title><%=__('news.sentiment.bullish.vs.bearish')%></div> <div class=block-content> <div class=filter></div> <div class=articles-content> <%_.each(item.getArticles(), function(article) {%> <div class=\"article <%=article.direction%>\"> <div class=article-data> <span><%=articleDate(article.releaseTime)%></span> <span><%=article.source%></span> <%if (_.includes(['negative', 'positive'], article.direction)){%><span class=direction><i class=\"icon icon-<%=article.direction%>\"></i></span><%}%> </div> <div class=article-title><a href=\"<%=article.linkToArticle%>\" target=_blank><%= article.title%></a></div> </div> <%})%> </div> </div> </div> </div> "},2526:function(e,t,i){(function(n,s){var a;void 0===(a=function(e,t,n){var a=i(5),l=i(1),r=i(100),o=i(8),c=i(26),d=i(115),m=i(2280),v=i(0),u=i(22),h=i(190),p=i(86),f=i(70),g=i(2527),k=(i(114),i(122).sendEventosNewsSentimentAction),b=l.template(i(2529)),w=l.template(i(2530)),_=i(524).default,S=i(64).transformSymbolToSBSymbol,y=f.extend({subscribedInstruments:[],initialize:function(e){f.prototype.initialize.apply(this,arguments),this.addChildView(".news-sentiment-mobile-wrapper",p,{parent:s(".main-box"),position:"absolute"}),this.getNewsSentiment(),this.listenTo(a,"ui:instrument:change",this.close)},events:function(){return l.extend({},l.result(f.prototype,"events"),{"click .stock-details":"viewDetails","change [name=stocks]":"filterStocks","click .header-links__info":"toggleInfo","click .header-links__filters":"toggleFilters"})},getOptions:function(e){return l.extend({},l.result(f.prototype,"getOptions"),{isHeaderShowed:!0,caption:__("tab.news_sentiment"),previousCaption:__("actions.back"),headerStyle:"wizard",bodyStyle:"trading-tools",headerCaptionStyle:"news-sentiment-mobile-header"},e)},getNewsSentiment:function(){var e=this;return o.loadNewsSentiment().then((function(t){return t.data.error?(e.newsSentiment=[],e.render(),Promise.reject()):(e.newsSentiment=e.createCollection(t.data),e.render(),e.removeChildView(".news-sentiment-mobile-wrapper"),Promise.resolve())}))},createCollection:function(e){var t=new r,i=[];return l.each(e,(function(e){var n=e.symbol;if(c.getInstrumentBySymbol(n)||(n=S(n),c.getInstrumentBySymbol(n))){var s=new m(e);s.set("instrument",c.getInstrumentBySymbol(n)),i.push(n),t.add(s)}})),this.subscribedInstruments=d.update(i,this.subscribedInstruments).addedSymbols,t},viewDetails:function(e){var t=this,i=s(e.currentTarget),n=s(i.closest(".stock-data")).find(".news-sentiment-data");if(n.find(".score").length>0)n.removeClass("hidden");else{var a=s(e.currentTarget).attr("data-ticker");if(a)return o.loadNewsSentimentByTicker(a).then((function(e){if(e.data.error)return Promise.reject();var i=new m(e.data),n=l.find(t.newsSentiment.models,(function(e){return e.getStockTicker()===a}));new g({parent:s("body"),item:i,itemMainData:n,ticker:a,onClose:function(){null}});k(n.getSymbol())}))}},close:function(){d.remove(this.subscribedInstruments),this.unMountBuySell(),f.prototype.close.call(this),this.destroy()},toggleInfo:function(e){s(e.currentTarget).hasClass("active")?(s(e.currentTarget).removeClass("active"),this.$el.find(".news-sentiment__info").addClass("hidden")):(s(e.currentTarget).addClass("active"),this.$el.find(".news-sentiment__info").removeClass("hidden"),this.$el.find(".news-sentiment__filters").addClass("hidden"),this.$el.find(".header-links__filters").removeClass("active"))},toggleFilters:function(e){s(e.currentTarget).hasClass("active")?(s(e.currentTarget).removeClass("active"),this.$el.find(".news-sentiment__filters").addClass("hidden")):(s(e.currentTarget).addClass("active"),this.$el.find(".news-sentiment__filters").removeClass("hidden"),this.$el.find(".news-sentiment__info").addClass("hidden"),this.$el.find(".header-links__info").removeClass("active"))},filterStocks:function(e){var t,i=this.$el.find("select[name=stocks] option:checked"),n=[];i.length>0&&(n=l.map(i,(function(e){return s(e).val()}))),t=l.filter(this.newsSentiment.models,(function(e){return l.find(n,(function(t){return t===e.getSymbol()}))})),this.renderFilteredData(t)},render:function(){f.prototype.render.call(this);var e=l.isArray(this.newsSentiment.models)&&this.newsSentiment.models.length>0?this.newsSentiment.models:[];return this.setContent(b({stocks:e})),this.$el.find(".content-block").html(w({stocks:e})),this.getBuySell(e),u.render(v.createElement(_,null),this.$el.find(".risk-warning-mobile")[0]),k(),this},renderFilteredData:function(e){var t=l.isArray(e)&&e.length>0?e:this.newsSentiment.models;this.unMountBuySell(),this.$el.find(".content-block").html(w({stocks:t})),this.getBuySell(t)},getBuySell:function(e){var t=this.$el.find(".instrument-sell-change tr"),i=this.$el.find(".instrument-buy-change tr");l.each(e,(function(e,n){var s=v.createElement(h,{type:"Sell",column:{name:"Sell",key:"bid",direction:"bidDirection"},model:e.get("instrument"),isSelected:!0,onClick:l.noop}),a=v.createElement(h,{type:"Buy",column:{name:"Buy",key:"ask",direction:"askDirection"},model:e.get("instrument"),isSelected:!1,onClick:l.noop});u.render(s,t[n]),u.render(a,i[n])}))},unMountBuySell:function(){var e=this;l.each(["buy","sell"],(function(t){return l.each(e.$el.find(".instrument-"+t+"-change tr"),(function(e){return u.unmountComponentAtNode(e)}))}))}});n.exports=y}.call(t,i,t,e))||(e.exports=a)}).call(this,i(1),i(12))},2527:function(e,t,i){(function(n,s){var a;void 0===(a=function(e,t,n){var a=i(1),l=i(70),r=a.template(i(2528)),o=i(190),c=i(114),d=i(0),m=i(22),v=i(2281),u=i(234),h=i(148),p=l.extend({initialize:function(e){l.prototype.initialize.apply(this,arguments),this.ticker=this.options.ticker,this.item=this.options.item,this.itemMainData=this.options.itemMainData,this.render()},filterNews:function(e){var t=s(e.el).closest(".articles"),i=s(e.el).find("select").val();s(t).find(".article").removeClass("hidden"),"all"!==i&&s(t).find(".article:not(."+i+")").addClass("hidden")},getOptions:function(e){return a.extend({},a.result(l.prototype,"getOptions"),{isHeaderShowed:!0,caption:__("tab.news_sentiment"),previousCaption:__("actions.back"),headerCaptionStyle:"news-sentiment-mobile-header",headerStyle:"wizard"},e)},render:function(){l.prototype.render.call(this),this.setContent(r({item:this.item,itemMainData:this.itemMainData,ticker:this.ticker,articleDate:c.newsSentimentArticleDate.bind(c)})),this.getBuySell(this.itemMainData);var e={all:"news.sentiment.all.news",positive:"tipranks.bullish",negative:"tipranks.bearish"};this.filterNewsDropdown=this.addChildView(".articles .filter",u,{template:h.selectBox,disable:!1,translationKey:"",options:["all","positive","negative"],transformOptionsValue:function(e){return e},transformOptionText:function(t){return __(e[t])},title:"",name:"news-filter"}),this.filterNewsDropdown.value("all"),this.listenTo(this.filterNewsDropdown,"change",this.filterNews);var t=window.innerWidth||document.body.clientWidth;return v(this.$el.find(".analysis-graph")[0],this.item,t-50),this},getBuySell:function(e){var t=this.$el.find(".instrument-sell-change tr"),i=this.$el.find(".instrument-buy-change tr"),n=d.createElement(o,{type:"Sell",column:{name:"Sell",key:"bid",direction:"bidDirection"},model:e.get("instrument"),isSelected:!0,onClick:a.noop}),s=d.createElement(o,{type:"Buy",column:{name:"Buy",key:"ask",direction:"askDirection"},model:e.get("instrument"),isSelected:!1,onClick:a.noop});m.render(n,t[0]),m.render(s,i[0])},close:function(){l.prototype.close.call(this)}});n.exports=p}.call(t,i,t,e))||(e.exports=a)}).call(this,i(1),i(12))},2528:function(e,t){e.exports='<div class="news-sentiment-mobile news-sentiment"> <div class=news-sentiment-mobile--details> <div class=content-block> <div class="stock-data flex"> <div class="stock-name flex"> <div class=instrument-img-wrapper><div class="instrument-img instrument-img-<%= itemMainData.getSymbol().toLowerCase()%>"></div></div> <div class="stock-data-mobile flex flex-column flex-align-center"> <div class=stock-description><%= itemMainData.getDescription()%></div> <div class="stock-ticker text-muted"> <span><%=itemMainData.getStockTicker()%></span> </div> </div> </div> <div class=stock-buy-sell> <div class=instrument-sell-change><table><tr></tr></table></div> <div class=instrument-buy-change><table><tr></tr></table></div> </div> </div> <div class=news-sentiment-data> <% if(itemMainData.isExistsSentimentData()) {%> <div class="block last-seven-days"> <div class=block-title><%=__(\'news.sentiment.last.seven.days\')%></div> <div class=block-content> <div class=sentiment-chart> <div class="icon icon-bearish"></div> <div class=sentiment-bar> <div class="icon icon-sentiment-arrow" style="left: <%=(item.getPositiveStockSentiment() - 2)%>%"><span><%=ticker%></span></div> <div class="icon icon-sentiment-sector-avg" style="left: <%=(item.getPositiveSectorSentiment() - 1)%>%"><span><%=__(\'news.sentiment.sector.average\')%></span></div> </div> <div class="icon icon-bullish"></div> </div> <div class=sentiment-data> <div> <div class=title><%=ticker%></div> <div class=percents> <span class=bullish><%=item.getPositiveStockSentiment()%>% <%=__(\'tipranks.bullish\')%></span> <span class=bearish><%=item.getNegativeStockSentiment()%>% <%=__(\'tipranks.bearish\')%></span> </div> </div> <div> <div class=title><%=__(\'news.sentiment.sector.average\')%></div> <div class=percents> <span class=bullish><%=item.getPositiveSectorSentiment()%>% <%=__(\'tipranks.bullish\')%></span> <span class=bearish><%=item.getNegativeSectorSentiment()%>% <%=__(\'tipranks.bearish\')%></span> </div> </div> </div> </div> </div> <%}%> <div class="block media-analysis"> <div class=block-title><%=__(\'news.sentiment.media.analysis\')%></div> <div class=block-content> <div class=legend> <span class=price><%=__(\'price\')%></span> <span class=neutral><%=__(\'tipranks.neutral\')%></span> <span class=bullish><%=__(\'news.sentiment.bullish.news\')%></span> <span class=bearish><%=__(\'news.sentiment.bearish.news\')%></span> </div> <div class=analysis-graph></div> </div> </div> <div class="block articles <%=ticker.toLowerCase()%>"> <div class=block-title><%=__(\'news.sentiment.bullish.vs.bearish\')%></div> <div class=block-content> <div class=filter></div> <%_.each(item.getArticles(), function(article) {%> <div class="article <%=article.direction%>"> <div class=article-data> <span><%=articleDate(article.releaseTime)%></span> <span><%=article.source%></span> <%if (_.includes([\'negative\', \'positive\'], article.direction)){%><span class=direction><i class="icon icon-<%=article.direction%>"></i></span><%}%> </div> <div class=article-title><a href="<%=article.linkToArticle%>" target=_blank><%= article.title%></a></div> </div> <%})%> </div> </div> </div> </div> </div> </div>'},2529:function(e,t){e.exports='<div class=news-sentiment-mobile-wrapper> <div class="news-sentiment news-sentiment-mobile"> <div class="header flex flex-column flex-align-center"> <div class="flex flex-align-end"> <div class="header-links flex"> <div class=header-links__info data-link=info><%=__(\'hint.info\')%></div> <div class=header-links__separator>|</div> <div class=header-links__filters data-link=filters><%=__(\'acuity-trading.filters\')%></div> </div> </div> </div> <div class="news-sentiment__info text-muted hidden"><%=__(\'news.sentiment.description\')%></div> <%if(stocks.length > 0) {%> <div class="news-sentiment__filters hidden"> <div class=styled-select> <select name=stocks multiple=multiple size=4> <option disabled=disabled selected=selected class=hidden><%=__(\'wizard.form.label.DEFAULT_EMPTY\')%></option> <%_.each(stocks, function(stock){ %> <option value="<%=stock.getSymbol()%>"><%=stock.getDescription()%></option> <% }); %> </select> </div> </div> <%} else {%> <div class=news-sentiment-empty> <div class=icon-news-sentiment></div> <div><%= __(\'tipranks.na\')%></div> </div> <%}%> <div class=content-block></div> <div class=risk-warning-mobile></div> </div> </div> '},2530:function(e,t){e.exports='<%\n_.each(stocks, function(stock){\n%> <div class=stock-data> <div class=first-row> <div class=stock-name> <div class=instrument-img-wrapper><div class="instrument-img instrument-img-<%= stock.getSymbol().toLowerCase()%>"></div></div> <div class=stock-data-mobile> <div class=stock-description><%= stock.getDescription()%></div> <div class=stock-ticker> <span><%=stock.getStockTicker()%></span> </div> </div> </div> <div class=stock-details data-ticker="<%=stock.getStockTicker()%>"> <span><i class=icon-view-details></i></span> </div> <div class=stock-buy-sell> <div class=instrument-sell-change><table><tr></tr></table></div> <div class=instrument-buy-change><table><tr></tr></table></div> </div> </div> <div class="news-sentiment-data hidden"></div> </div> <% });%> '}}]);