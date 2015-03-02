(function(){
	var _TotalGaq=function(){
		var hasfe=!($.isEmpty(window.____json4fe)||$.isEmpty(window.____json4fe.catentry)||$.isEmpty(window.____json4fe.locallist));
		var _4fe=window.____json4fe;
		if(hasfe){
			_4fe.catentry=[].concat(____json4fe.catentry);
			_4fe.locallist=[].concat(____json4fe.locallist);
		}
		var _catetype=function(){
			var result="";
			if(hasfe&&_4fe.catentry){
				var cateid=_4fe.catentry[0].dispid;
				if(cateid=='9225'){
					result='quanzhi';
				}
				else if(cateid=='13952'){
					result='jianzhi';
				}
			}
			return result;
		}();
		var _lastcate=function(){
			var result="";
			if(hasfe&&_4fe.catentry){
				result=_4fe.catentry[_4fe.catentry.length-1].dispid;
			}
			return result;
		}();
		var _lastarea=function(){
			var result="";
			if(hasfe&&_4fe.locallist){
				result=_4fe.locallist[_4fe.locallist.length-1].listname;
			}
			return result;
		}();
		var _catepath=function(){
			var result="";
			if(hasfe&&_4fe.catentry){
				var catetry=_4fe.catentry;
				result=catetry[0].dispid;
				for(var i=1;i<catetry.length;i++){
					result+=",";
					result+=catetry[0].dispid;
				}
			}
			return result;
		}();
		var _areapath=function(){
			var result="";
			if(hasfe&&_4fe.locallist){
				var locallist=_4fe.locallist;
				result=locallist[0].dispid;
				for(var i=1;i<locallist.length;i++){
					result+=",";
					result+=locallist[0].dispid;
				}
			}
			return result;
		}();
		var _commonlog=function(){
			var log="AreaPath="+_areapath+"&CatePath="+_catepath+"&rand="+Math.random();
			return log;
		}();
		var _commontrack=function(){
			var track=_catetype+"/"+_lastcate+"/"+_lastarea+"/";
			return track;
		}();
		this.resumesearch_click_data=function(){
			if(hasfe){
				$('#searchbtn').click(function(){
					      try{
						      var keyinput=$('#keyword1');
						      var key=keyinput.attr('class')=='keyword'?'':keyinput.val(),param="";
						      var sels=$('#filter .sel-type .list-ico + span');
						      if(sels.length==6){
							      $.each(sels,function(index,el){
								            var text=$(el).text();
								            if(text.indexOf('-')!=0){
									            if(index==0){
										            param+='&position='+text;
									            }
									            else if(index==1){
										            param+='&workexpr='+text;
									            }
									            else if(index==2){
										            param+='&education='+text;
									            }
									            else if(index==3){
										            param+='&age='+text;
									            }
									            else if(index==4){
										            param+='&sex='+text;
									            }
									            else if(index==5){
										            param+='&updatetime='+text;
									            }
								            }
							            });
						      }
						      else if(sels.length==4){
							      $.each(sels,function(index,el){
								            var text=$(el).text();
								            if(text.indexOf('-')<0){
									            if(index==0){
										            param+='&persontype='+text;
									            }
									            else if(index==1){
										            param+='&sex='+text;
									            }
									            else if(index==2){
										            param+='&age='+text;
									            }
									            else if(index==3){
										            param+='&updatetime='+text;
									            }
								            }
							            });
						      }
						      param = $.trim(param.replace(/[\r\n]/g, ""));
						      clickLog('from=zhaopin_resumesearch_clk&'+_commonlog+(key!=''?'&key='+encodeURI(key):'')+(param!=''?encodeURI(param):''));
						      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/resumesearch/'+_commontrack]);
					      }
					      catch(e){}
				      });
			}
		};
		this.lastsearch_click_data=function(){
			if(hasfe){
				$('#his-search-con a').click(function(){
					      clickLog('from=zhaopin_lastsearch_clk&'+_commonlog);
					      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/lastsearch/'+_commontrack]);
				      });
			}
		};
		this.clearfilter_click_data=function(){
			if(hasfe){
				$('.ser-clear').click(function(){
					      clickLog('from=zhaopin_clearfilter_clk&'+_commonlog);
					      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/clearfilter/'+_commontrack]);
				      });
			}
		};
		this.batchcheckresume_click_data=function(){
			if(hasfe){
				$('a[class^="btn"]').click(function(){
					      var count=$('#infolist dd[class$="iselect"]').length;
					      if(count>0){
						      clickLog('from=zhaopin_batchcheckresume_up_clk&'+_commonlog);
						      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/batchcheckresume/'+_commontrack+'click/up/']);
						      clickLog('from=zhaopin_batchcheckresume_up_'+count+'&'+_commonlog);
						      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/batchcheckresume/'+_commontrack+count+'/up/']);
					      }
				      });
			}
		};
		this.jobhelper_click_data=function(){
			if(hasfe){
				var items=$('#zpzs a');
				$(items.get(0)).click(function(){
					      clickLog('from=zhaopin_downloadresume_clk&'+_commonlog);
					      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/downloadresume/'+_commontrack]);
				      });
				$(items.get(1)).click(function(){
					      clickLog('from=zhaopin_newresume_clk&'+_commonlog);
					      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/newresume/'+_commontrack]);
				      });
				$(items.get(2)).click(function(){
					      clickLog('from=zhaopin_sendinterview_clk&'+_commonlog);
					      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/sendinterview/'+_commontrack]);
				      });
				$(items.get(3)).click(function(){
					      clickLog('from=zhaopin_releaseposition_clk&'+_commonlog);
					      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/releaseposition/'+_commontrack]);
				      });
				$(items.get(4)).click(function(){
					      clickLog('from=zhaopin_changecominfo_clk&'+_commonlog);
					      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/changecominfo/'+_commontrack]);
				      });
			}
		};
		this.sortrelate_click_data=function(){
			if(hasfe){
				$('.order-per').click(function(){
					      clickLog("from=zhaopin_resume_sortrelate_clk&rand="+Math.random());
					      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/resumesort/relation/']);
				      });
			}
		};
		this.sorttime_click_data=function(){
			if(hasfe){
				$('.order-time').click(function(){
					      clickLog("from=zhaopin_resume_sorttime_clk&rand="+Math.random());
					      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/resumesort/datetime/']);
				      });
			}
		};
		this.morefilter_click_data=function(){
			if(hasfe){
				$('.order-time').click(function(){
					      clickLog("from=zhaopin_resume_filter_clk&rand="+Math.random());
					      _gaq.push(['pageTracker._trackEvent','list','tag_click','/zhaopin/resumefilter/filter/']);
				      });
			}
		};
	};
	window.totalgaq=new _TotalGaq();
})();