$(document).ready(function(){loadBrandAds()});function cleanMingdian(ids){var cityArray=[1,4,2,3,102,202,158,37,188,18,414,342,319,265,172,5,413,241,79,837,122,845,147,304,606,740,93];if($.inArray(parseInt(ids),cityArray)>=0){$("#brand_md").html("")}}function loadBrandAds(){var url="http://brandshow.58.com/show/loadBrandAds";var pageType=3;var cateArray=____json4fe.catentry;var cateId="";var catePath="";if(jQuery.isArray(cateArray)){cateId=cateArray[cateArray.length-1].dispid;for(var index in cateArray){if(index==cateArray.length-1){catePath+=cateArray[index].dispid}else{catePath=catePath+cateArray[index].dispid+","}}}else{cateId=cateArray.dispid;catePath=cateId}var localArray=____json4fe.locallist;var localId="";var localPath="";var cityId="";if(jQuery.isArray(localArray)){localId=localArray[localArray.length-1].dispid;cityId=localArray[0].dispid;for(var index in localArray){if(index==localArray.length-1){localPath+=localArray[index].dispid}else{localPath=localPath+localArray[index].dispid+","}}}else{cityId=localArray.dispid;localId=localArray.dispid;localPath=localId}cleanMingdian(cityId);$.getScript(url+"?pageType="+pageType+"&cateId="+cateId+"&localId="+localId+"&catePath="+catePath+"&localPath="+localPath+"&callback=success_jsonpCallback")}function success_jsonpCallback(jsonArray){var cateArray=____json4fe.catentry;var cateId="";var catePath="";if(jQuery.isArray(cateArray)){cateId=cateArray[cateArray.length-1].dispid;for(var index in cateArray){if(index==cateArray.length-1){catePath+=cateArray[index].dispid}else{catePath=catePath+cateArray[index].dispid+","}}}else{cateId=cateArray.dispid;catePath=cateId}var localArray=____json4fe.locallist;var localId="";var localPath="";if(jQuery.isArray(localArray)){localId=localArray[localArray.length-1].dispid;for(var index in localArray){if(index==localArray.length-1){localPath+=localArray[index].dispid}else{localPath=localPath+localArray[index].dispid+","}}}else{localId=localArray.dispid;localPath=localId}for(var i=0;i<jsonArray.length;i++){var divJson=jsonArray[i];if(divJson!=null){wrapBrandAd(cateId,localId,catePath,localPath,divJson)}}}function wrapBrandAd(cateId,localId,catePath,localPath,json){var extend=json.extend;var divId=json.divId;if(extend!=null&&extend!=undefined&&extend!=""){$("#"+divId).append(extend)}var content=json.content;var adResourceId=json.adResourceId;var brandAdSize=json.size;if(content!=null&&content!=undefined&&content!=""){switch(adResourceId){case 5:$("#"+divId).append('<ul style="margin-top: 0px;">'+content+"</ul>");wrapBrandListBannerContent(divId,brandAdSize);break;case 15:case 16:$("#"+divId).append(content);break;default:break}}}function wrapBrandListBannerContent(divId,brandAdSize){$("#"+divId).css("display","block");$("#"+divId).addClass("brandad1000")}function BrandAdShow(id){var scrollTimer;$("#"+id).hover(function(){clearInterval(scrollTimer)},function(){scrollTimer=setInterval(function(){brandCarouse(id)},5e3)}).trigger("mouseleave")}function brandCarouse(obj){var $self=$("#"+obj).find("ul:first");var lineHeight=$self.find("li:first").height();$self.animate({marginTop:-lineHeight+"px"},600,function(){$self.css({marginTop:0}).find("li:first").appendTo($self)})}