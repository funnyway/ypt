function GetCookieValue(name) {
    var arr = document.cookie.match(new RegExp(name + "=([^&;]+)"));
    if (arr != null) return decodeURI(arr[1]);
    else return "";
}
function writeUserName(isNew) {
    var exp = new Date(); exp.setTime(exp.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = "supportcookie=true;domain=58.com;expires=" + exp.toGMTString();
    if (!(document.cookie && document.cookie != '')) {
        document.write('<script type="text/javascript" src="http://user.58.com/userloginstate.ashx"><\/script>');
        return true;
    }
    var host = window.location.hostname;
    var hosthome = host.substr(0, host.indexOf("."));
    var outurl = escape(window.location.href);
    var str = '<a href="http://passport.58.com/login/?path=' + outurl + '" target="_self">登录</a> <a href="http://passport.58.com/reg/?city=' + hosthome + '" target="_self">注册</a>';
    try {
        if (GetCookieValue("UserName") != "") {
              str = GetCookieValue("UserName")+'<span class="red" id="fangmhh"></span>';
			  $.getJSON("http://message.58.com/api/msgcount/?userid="+GetCookieValue("userid")+"&type=3&callback=?&" + Math.random(),
        		 function(json) {
	            	if (json.count > 0) {
						$("#fangmhh").html('(<a style="color:#F00;margin: 0px;" href="http://my.58.com/liuyanjieshou/" title="你有' + json.count + '条未读短信息">' + json.count + '</a>)');
					}
        		 }
        	);
            str += ' <a href="http://my.58.com/" target="_self">用户中心</a> <a href="http://passport.58.com/logout/?path=' + outurl + '" target="_self">退出</a>';
        }
        document.write(str);
    }
    catch (e) { document.write(str);}
    return true;
}
/**
 * 分页脚本函数
 * 说明:url目前默认是最后一个参数是page.
 * 调用函数时,url中把其他的参数准备好,page参数不加即可.
 * 例如:完整的url为:http://qy.58.com/jobs/{userId}/{page}：{}中为参数
 *    那么传递的url为:http://qy.58.com/jobs/{userId}即可。
 * @param id  要显示分页的父节点ID
 * @param url
 * @param totalPage
 * @param currentPage
 * @returns
 */
var seperatePage = function( id, url, totalPage, currentPage){
	if(totalPage < 2){
		document.getElementById(id).style.display="none";
		return;
	}
	var pageStr = '';
	if(currentPage > 1){
		pageStr += '<a href="' + url + "/" + (currentPage - 1) + '">';
		pageStr += '	<span>上一页</span>';
		pageStr += '</a>';
	}
	for(var index = 1; index <= totalPage; index++){
		if(index == currentPage){
			pageStr += '<strong><span>' + index + '</span></strong>';
		} else if ( currentPage > index && currentPage-index < 5) {
			pageStr += '<a href="' + url + '/' + index + '" ><span>' + index + '</span></a>';
		} else if (currentPage < index && index - currentPage < 5) {
			pageStr += '<a href="' + url + '/' + index + '" ><span>' + index + '</span></a>';
		} else if (currentPage < index) {
			break;
		}
	}
	if(currentPage < totalPage && totalPage >1) {
		pageStr += '<a href="' + url + "/" + (currentPage + 1) + '">';
		pageStr += '	<span>下一页</span>';
		pageStr += '</a>';
	}
	document.getElementById(id).innerHTML = pageStr;
}
var seperatePageForhiden = function( id, url, totalPage, currentPage){
	if(totalPage < 2){
		document.getElementById(id).style.display="none";
		return;
	}
	var pageStr = '';
	if(currentPage > 1){
		pageStr += '<a href="' + url + "/" + (currentPage - 1) + '?hide=1">';
		pageStr += '	<span>上一页</span>';
		pageStr += '</a>';
	}
	for(var index = 1; index <= totalPage; index++){
		if(index == currentPage){
			pageStr += '<strong><span>' + index + '</span></strong>';
		} else if ( currentPage > index && currentPage-index < 5) {
			pageStr += '<a href="' + url + '/' + index + '?hide=1" ><span>' + index + '</span></a>';
		} else if (currentPage < index && index - currentPage < 5) {
			pageStr += '<a href="' + url + '/' + index + '?hide=1" ><span>' + index + '</span></a>';
		} else if (currentPage < index) {
			break;
		}
	}
	if(currentPage < totalPage && totalPage >1) {
		pageStr += '<a href="' + url + "/" + (currentPage + 1) + '?hide=1">';
		pageStr += '	<span>下一页</span>';
		pageStr += '</a>';
	}
	document.getElementById(id).innerHTML = pageStr;
}

/**
 * 提示消息
 *  
 */
function showTips(msg,tiptype,x,y) {
	//默认绿色背景
	var mybgcolor = '#7CFC00',
		mycolor = '#FFFFFF';
	if(tiptype&&tiptype== 'warn') {
		mycolor = '#030303';
		mybgcolor = '#EE0000';
	}
	x =  x||0;
	y =  y||0;
	var boarddiv = $("<div id='myTips' style='text-align:center;line-height:50px;font-size:20px;border:1px solid black;background:"+ mybgcolor 
	+ ";color:" + mycolor + ";width:100%;height:50px;z-index:999;position:absolute;top:"+ y +";left:"+ x +";'>" + msg + "</div>"); 
	
	$('body').append(boarddiv);
	//一秒之后消失
	setTimeout(tipsHide,1000);
	function tipsHide() {
		boarddiv.hide(500);
	}
	
}
/*
 * thinkphp U方法的js扩展.现只支持URL_MODEL的0模式和1模式
 * @param purl U方法生成的url，param 要往purl加的参数对象;
 *  0模式 http://localhost:8080/ttt/index.php?m=Home&c=factory&a=factoryInput
 *  1模式 http://localhost:8080/ttt/index.php/Home/storage/storageInput.html
 */
function jsU(purl,param) {
	if(purl.indexOf('&')>0) 
		return purl + '&' + param.k + '=' + param.v;
	else {
		var suffix = purl.slice(purl.lastIndexOf('.'));
		console.log(param);
		url = purl.replace(suffix, '/'+param.k + '/' +param.v + suffix);
		return url;
	}
}
/**
 * 是否IE
 * @returns BOOLEN
 */
function isIE() {
    	return navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)?true:false;
}
/**
 * 获取浏览器类型
 * @returns {String}
 */
function getBrowserType() {
    var Sys = {};

    var ua = navigator.userAgent.toLowerCase();

    var s;

    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :

    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :

    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :

    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :

    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    //以下进行测试

   if (Sys.ie) return 'IE';// document.write('IE: ' + Sys.ie);

    if (Sys.firefox)  return 'Firefox';//document.write('Firefox: ' + Sys.firefox);

    if (Sys.chrome) return 'Chrome';//document.write('Chrome: ' + Sys.chrome);

    if (Sys.opera) return 'Opera';//document.write('Opera: ' + Sys.opera);

    if (Sys.safari) return 'Safari';//document.write('Safari: ' + Sys.safari);
	
}
/*
*
* Function to validate File size
*
**/
function findSize(field_id)
{
           var fileInput = $("#"+field_id)[0];
           byteSize  = fileInput.files[0].fileSize;
        return ( Math.ceil(byteSize / 1024) ); // Size returned in KB.
}
/**
 * 时间戳改日期格式
 */
function dateFormatter(value,row,index) {
	var myDate = new Date(value);
	var Y = myDate.getFullYear();
	var m = myDate.getMonth()+1;
	var d = myDate.getDate();
 return Y+'-'+m+'-'+d;
}
/**
 * 时间戳改日期时间格式
 */
function dateTimeFormatter(value,row,index) {
	var myDate = new Date(value);
	var Y = myDate.getFullYear();
	var m = myDate.getMonth();
	var d = myDate.getDate();
	var H = myDate.getHours();
	var i = myDate.getMinutes();
	var s = myDate.getSeconds();
	return Y+'-'+m+'-'+d+' '+H+':'+i+':'+s ;
}
/**
 * 设置cookie
 * @param objName
 * @param objValue
 * @param objHours //为0时不设定过期时间，浏览器关闭时cookie自动消失
 */
function addCookie(objName,objValue,objHours){//添加cookie
    var str = objName + "=" + escape(objValue);
    if(objHours > 0){
     var date = new Date();
     var ms = objHours*3600*1000;
     date.setTime(date.getTime() + ms);
     str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
  }
/**
 *获得cookie值
 */
function getCookie(key) {
	var strCookie=document.cookie; 
	var cookieArr = strCookie.split(";");
	for(var i=0;i<cookieArr.length;i++) {
		var temp = cookieArr[i].split('=');
		if(temp[0].replace(/(^\s*)|(\s*$)/g, '') == 'wt_promptSound') {
			var	value= temp[1];
			break;
		}
	}
	return value;
}
/**
 * 判断数组中是否包含某元素
 */
function in_array(stringToSearch, arrayToSearch) {
	 for (s = 0; s < arrayToSearch.length; s++) {
		  thisEntry = arrayToSearch[s].toString();
		  if (thisEntry == stringToSearch) {
			  return true;
		  }
	 }
	 return false;
}
/**
 * 去掉html标签
 */
function del_html_tags(str)
{
    var words = '';
    words = str.replace(/<[^>]+>/g,"");
    return words;
}

