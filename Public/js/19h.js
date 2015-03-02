
var isFrameComplete = false;
isFrameComplete = true;
var is_cur_window_load_complete = false;
is_cur_window_load_complete = true;

var cacheinputvalue = {};
function getel(id) {
    return document.getElementById(id);
}
function GetCookieValue(name) {
    var arr = document.cookie.match(new RegExp(name + "=([^&;]+)"));
    return arr == null ? "" : decodeURI(arr[1]);
}
function SetTipsCookie() {
    document.cookie = "closetooltip=1;domain=.58.com;";
}
function FilterHtml(val) {
	
	var v = val.replace(/(<cite.*?>.*?<.cite>)/ig, '').replace(/(<.*?>)/ig, '');
    if (val && val != '') {
		v = val.replace(/(<cite.*?>.*?<.cite>)/ig, '').replace(/(<span.*?>.*?<.span>)/ig, '').replace(/(<.*?>)/ig, '');
	}
	else{
		v = '';
	} 
//	console.log(val, v);
	return v;
}
function QuanToBan(val) {
    if (!val || val == '') {
        return '';
    }
    var result = "";
    for (var i = 0; i < val.length; i++) {
        if (val.charCodeAt(i) == 12288) {
            result += String.fromCharCode(val.charCodeAt(i) - 12256);
            continue;
        }
        if (val.charCodeAt(i) > 65280 && val.charCodeAt(i) < 65375)
            result += String.fromCharCode(val.charCodeAt(i) - 65248);
        else result += String.fromCharCode(val.charCodeAt(i));
    }
    return result;
}
function SetMouseOver(obj, toolWindowID) {
    var wins = getel(toolWindowID);
    if (!wins) return;
    var lis = wins.getElementsByTagName('li');
    var i = 0;
    if (lis && lis.length > 0) {
        for (; i < lis.length; i++) {
            lis[i].className = 'unselected';
        }
    }
    obj.className = 'selected';
}
function getElementPositionX(elem) {
    //    var item = $(elem);
    //    if (item && item.length)
    //        return item.offset().left;
    //    else
    //        return 0;
    var offsetTrail = elem;
    var offsetLeft = 0;
    while (offsetTrail) {
        offsetLeft += offsetTrail.offsetLeft;
        offsetTrail = offsetTrail.offsetParent;
    }
    if (navigator.userAgent.indexOf("Mac") != -1 && typeof (document.body.leftMargin) != "undefined") {
        offsetLeft += document.body.leftMargin;
    }
    return offsetLeft;
}
function getElementPositionY(elem) {
    var offsetTrail = elem;
    var offsetTop = 0;
    while (offsetTrail) {
        offsetTop += offsetTrail.offsetTop;
        offsetTrail = offsetTrail.offsetParent;
    }
    if (navigator.userAgent.indexOf("Mac") != -1 && typeof (document.body.leftMargin) != "undefined") {
        offsetTop += document.body.topMargin;
    }
    return offsetTop + elem.clientHeight + 4;
}
function ShowSelectedItem(itemID) {
    if (itemID && itemID != null && itemID != '') {
        var arr = itemID.split('|');
        var i = 0;
        if (arr.length > 0 && arr[0] == '0') i = 2;
        for (; i < arr.length; i++) {
            $("#" + arr[i]).css("display", "inline");
        }
    }
    else $("select").css("display", "inline");
}
function HideSelectedItem(itemID) {
    if (itemID && itemID != null && itemID != '') {
        var arr = itemID.split('|');
        var i = 0;
        if (arr.length > 0 && arr[0] == '0') i = 2;
        for (; i < arr.length; i++) {
            $("#" + arr[i]).css("display", "none");
        }
    }
    else $("select").css("display", "none");
}


//类别	iType
//小区	1
//地域词	2
//类别词	3
//公交	4
//地铁	5
//大学	6
//列车车站	7
//列车车次	8
//车辆词	9
//酷车类别词	10
//post类别词	11
//货运 12
//切换城市 13
//列表页公交数据 14
function GetToolTipWindow(tooltipWindowID, inputbox, tooptipType, cityid, selid, showhot, iType) {
    
    var arr = tooltipWindowID.split('|');
    if (arr.length > 1 && arr[1] == '1') {
        this.tooltipWindowID = arr[0];
        this.showInstruction = true;
    } else {
        this.tooltipWindowID = tooltipWindowID;
        this.showInstruction = false;
    }
    this.inputbox = inputbox;
    this.tooptipType = tooptipType;
    this.cityid = cityid;
    if (selid) this.selid = selid;
    else this.selid = '';
    this.notHideTips = false;
    this.buttonID = '';
    if (showhot) this.showhot = true;
    else this.showhot = false;
    this.iType = iType;
    this.trainTip = '';
    if (tooptipType == '8') this.trainTip = 'T1|D3|Z4|D98|C2001|Y563';
    if (tooptipType == '7') this.trainTip = '北京|上海|深圳|广州|武汉|西安';
    cacheinputvalue[tooltipWindowID] = {};
}


function SetToolTipData(contentData, tooltipWindowID, inputbox, tooltipType, selid, showInstruction, buttonID, showhot) {
    var arr1 = selid.split('|');

    if (arr1.length > 1 && arr1[0] == '0')
        if (getel(arr1[1])) getel(arr1[1]).value = FilterHtml(contentData);
    //    var iframe = getel("frm" + tooltipWindowID);
    if (contentData && contentData.w && contentData.w.length) {
        var arr = contentData.w;
        var i = 0;
        if (getel(tooltipWindowID)) getel(tooltipWindowID).style.display = 'block';
        else return;
        var obj = getel(tooltipWindowID).getElementsByTagName('ul');
        var result = "";
        var clsName = '';
        var re;
        var hot = '';
        for (i = 0; i < arr.length; i++) {

            if (!arr[i])
                continue;
            result += "<li class='" + clsName + "' onmouseover=\"SetMouseOver(this,'" + tooltipWindowID + "')\" onmouseout=\"this.className='unselected'\" onmousedown=\"SetInputValue(this,'" + inputbox + "','" + tooltipWindowID + "','" + selid + "','" + buttonID + "');return false\">";


            var key = arr[i].k;
            for(var j = 0, lenj = arr[i].h.length; j < lenj; j ++) {
                key = key.replace(arr[i].h[j].v, '<b>' + arr[i].h[j].v + '</b>');
            }
            
			if(showhot && arr[i].n) {
				result += '<span class="tool_r">约&nbsp;' + arr[i].n + '&nbsp;条</span>'
			}
			result = result + "<a href='javascript:void(0)'>" + key;
            if (arr[i].s) {
                result += '<cite>' + arr[i].s + '</cite>';
            }
			result += "</a>";

            result += "</li>";
        }
        obj[0].innerHTML = result;
        if (selid && selid != '') HideSelectedItem(selid);
		
		var iframes = getel(tooltipWindowID).getElementsByTagName('iframe');
		if(iframes.length == 1){
			iframes[0].style.height = getel(tooltipWindowID).offsetHeight;
			iframes[0].style.width = getel(tooltipWindowID).offsetWidth;
		}
        //        iframe.style.width = getel(tooltipWindowID).clientWidth + "px";
        //        iframe.style.height = getel(tooltipWindowID).clientHeight + "px";
    } else {
        if (getel(tooltipWindowID)) {
            getel(tooltipWindowID).style.display = 'none';
            var obj = getel(tooltipWindowID).getElementsByTagName('ul');
            obj[0].innerHTML = "";
            if (selid && selid != '') ShowSelectedItem(selid);
        } else {
            if (selid && selid != '') ShowSelectedItem(selid);
            return;
        }
    }
}
function SetInputValue1(obj, inputbox, tooltipWindowID, selid, buttonID) {
    var val = '';
    if (obj) {
        obj = obj.getElementsByTagName('a');
        if (obj.length > 0) {
            obj = obj[0];
        }
    }
    val = obj.innerHTML;
    if (val && val != '') {
        val = FilterHtml(val);
    }
    var arr = inputbox.split('|');
    if (arr.length > 1) {
        if (getel(arr[0])) getel(arr[0]).value = val;
        if (getel(arr[1])) {
            if (obj.innerHTML.match(/<cite.*?>(.*?)<.cite>/ig) && obj.innerHTML.match(/<cite.*?>(.*?)<.cite>/ig).length > 0) {
                getel(arr[1]).value = obj.innerHTML.match(/<cite.*?>(.*?)<.cite>/ig)[0].replace(/(<.*?>)/ig, '');
            }
            else {
                getel(arr[1]).value = '';
            }
        }
    }
    else {
        if (getel(inputbox)) {
            if (getel(inputbox)) getel(inputbox).value = val;
        }
    }
} 
function SetInputValue(obj, inputbox, tooltipWindowID, selid, buttonID) {
    SetInputValue1(obj, inputbox, tooltipWindowID, selid, buttonID);
    if (getel(tooltipWindowID)) getel(tooltipWindowID).style.display = 'none';
    if (buttonID != '' && getel(buttonID)) getel(buttonID).click();
    if (selid && selid != '') {
        ShowSelectedItem(selid);
    }
}
GetToolTipWindow.prototype = {
    openToolTipWindow: function () {
        var input = getel(this.inputbox.split('|')[0]);
        var m = this.tooltipWindowID + "mask";
        var tooltipid = this.tooltipWindowID;
        var selid = this.selid;
        this.closeToolTipWindow();
        var newDiv = document.createElement("div");
        newDiv.id = this.tooltipWindowID;
        newDiv.style.position = "absolute";
        newDiv.style.zIndex = "9999";
        newDiv.style.display = 'none';
        newDiv.style.top = getElementPositionY(input) + "px";
        newDiv.style.left = getElementPositionX(input) + "px";
        newDiv.className = 'tooltip';
        newDiv.innerHTML = '<ul></ul><iframe src="about:blank" width="300" height="200" frameBorder="0" style="z-index:-1;position:absolute;top:0;left:0;border:0"></iframe>';
		
//		var maskIframe = document.createElement('IFRAME');
//		maskIframe.style.position = 'absolute';
//        maskIframe.style.backgroundColor = '#000000';
//        maskIframe.style.width = '100%';
//        maskIframe.style.height = '100%';
//        maskIframe.style.filter = 'Alpha(Opacity=0)';
//        maskIframe.style.opacity = 0;
//		maskIframe.style.visibility = 'inherit';
//		maskIframe.style.borderStyle = 'none'; 
		//maskIframe.style.zIndex = -1;
		

//        newDiv.insertBefore(maskIframe, newDiv.firstChild);
		
        document.body.appendChild(newDiv);

        var element = input, me = this;
        if (element.addEventListener) {
            element.addEventListener("blur", function () {
                me.closeToolTipWindow();
            }, false);
        } else if (element.attachEvent) {
            element.attachEvent("onblur", function () {
                me.closeToolTipWindow();
            });
        }
    },
    GetContentData: function () {
//        if (!isFrameComplete || !is_cur_window_load_complete) return;
        if (GetCookieValue('closetooltip') == '1' && !this.notHideTips) return;
        var evt = null;
        if (document.all) evt = window.event;
        else evt = arguments[0] || arguments.callee.caller.arguments[0];
        if (evt != null) {
            switch (evt.keyCode) {
                case 13:
                    var temp = getel(this.tooltipWindowID);
                    if (temp && temp.style.display != 'none') {
                        var list = temp.getElementsByTagName('li');
                        var i = 0;
                        if (list.length > 0)
                            for (i = 0; i < list.length; i++)
                                if (list[i].className && list[i].className == 'selected')
                                    SetInputValue1(list[i], this.inputbox, '', '', '');
                    }
                    if (this.selid && this.selid != '') ShowSelectedItem(this.selid);
                    this.closeToolTipWindow();
//                    if (this.buttonID != '' && getel(this.buttonID)) getel(this.buttonID).click();
                    if (this.buttonID != '' && getel(this.buttonID) && getel(this.buttonID).type == 'button') {
                        getel(this.buttonID).click();
                    }
                    return;
                case 38:
                    var temp = getel(this.tooltipWindowID);
                    if (temp && temp.style.display != 'none') {
                        var list = temp.getElementsByTagName('li');
                        var i = 0;
                        var hasselected = false;
                        if (list.length > 0) {
                            for (i = 0; i < list.length; i++) {
                                if (list[i].className && list[i].className == 'selected') {
                                    hasselected = true;
                                    list[i].className = 'unselected';
                                    if (i > 0) {
                                        list[i - 1].className = 'selected';
                                        if (getel(this.inputbox.split('|')[0])) {
                                            if (list[i - 1]) {
                                                SetInputValue1(list[i - 1], this.inputbox, '', '', '');
                                            }
                                            getel(this.inputbox.split('|')[0]).focus();
                                        }
                                        return;
                                    } else {
                                        list[list.length - 1].className = 'selected';
                                        if (getel(this.inputbox.split('|')[0])) {
                                            if (list[list.length - 1]) SetInputValue1(list[list.length - 1], this.inputbox, '', '', '');
                                            getel(this.inputbox.split('|')[0]).focus();
                                        }
                                        return;
                                    }
                                }
                            }
                            if (!hasselected) {
                                list[list.length - 1].className = 'selected';
                                if (getel(this.inputbox.split('|')[0])) {
                                    if (getel(this.inputbox.split('|')[0])) {
                                        if (list[list.length - 1]) SetInputValue1(list[list.length - 1], this.inputbox, '', '', '');
                                        getel(this.inputbox.split('|')[0]).focus();
                                    }
                                    getel(this.inputbox.split('|')[0]).focus();
                                }
                                return;
                            }
                        }
                    }
                    return;
                case 40:
                    var temp = getel(this.tooltipWindowID);
                    if (temp && temp.style.display != 'none') {
                        var list = temp.getElementsByTagName('li');
                        var i = 0;
                        var hasselected = false;
                        if (list.length > 0) {
                            for (i = 0; i < list.length; i++) {
                                if (list[i].className && list[i].className == 'selected') {
                                    hasselected = true;
                                    list[i].className = 'unselected';
                                    if (i < list.length - 1) {
                                        list[i + 1].className = 'selected';
                                        if (getel(this.inputbox.split('|')[0])) {
                                            if (list[i + 1]) SetInputValue1(list[i + 1], this.inputbox, '', '', '');
                                            getel(this.inputbox.split('|')[0]).focus();
                                        }
                                        return;

                                    }
                                    else {
                                        list[0].className = 'selected';
                                        if (getel(this.inputbox.split('|')[0])) {
                                            if (list[0]) SetInputValue1(list[0], this.inputbox, '', '', '');
                                            getel(this.inputbox.split('|')[0]).focus();
                                        }
                                        return;
                                    }
                                }
                            }
                            if (!hasselected) {
                                list[0].className = 'selected';
                                if (getel(this.inputbox.split('|')[0])) {
                                    if (list[0]) SetInputValue1(list[0], this.inputbox, '', '', '');
                                    getel(this.inputbox.split('|')[0]).focus();
                                }
                                return;
                            }
                        }
                    }
                    return;
            }
        }
        if (getel(this.inputbox.split('|')[0]).value == '') {
            if (this.tooptipType == '7' || this.tooptipType == '8') {
                if (!getel(this.tooltipWindowID)) this.openToolTipWindow();
                SetToolTipData(this.trainTip, this.tooltipWindowID, this.inputbox, this.tooptipType, this.selid, this.showInstruction, this.buttonID, this.showhot);
                return;
            }
            if (this.selid && this.selid != '') ShowSelectedItem(this.selid);
            this.closeToolTipWindow();
            return;
        }
        if (!getel(this.tooltipWindowID)) this.openToolTipWindow();

        //        GetToolTipInfoData(this.tooltipWindowID, this.inputbox, this.tooptipType, this.cityid, this.selid, this.showInstruction, this.buttonID, this.showhot);
        GetToolTipInfoData(this.tooltipWindowID, this.inputbox, this.tooptipType, this.cityid, this.selid, this.showInstruction, this.buttonID, this.showhot, this.iType);
    },
    closeToolTipWindow: function () {
        if (this.selid && this.selid != '') ShowSelectedItem(this.selid);
        var m = this.tooltipWindowID + "mask";
        if (getel(this.tooltipWindowID)) document.body.removeChild(getel(this.tooltipWindowID));
        if (getel(m)) document.body.removeChild(getel(m));
    },
    setNothideTips: function () {
        this.notHideTips = true;
    },
    setSearchButton: function (buttonID) {
        this.buttonID = buttonID;
    },
    getSearchURL: function () {
        var url = window.location.href;
        if (getel(this.inputbox.split('|')[0]).value != '') {
            if (url.match(/key=[^&]+/ig))
                url = url.replace(/key=[^&]+/ig, 'key=' + encodeURI(getel(this.inputbox.split('|')[0]).value));
            else {
                if (url.indexOf('?') > 0)
                    url = url + '&key=' + encodeURI(getel(this.inputbox.split('|')[0]).value);
                else
                    url = url + '?key=' + encodeURI(getel(this.inputbox.split('|')[0]).value);
            }
        }
        return url;
    }
};



function GetToolTipInfoData(tooltipWindowID, inputbox, tooltipType, cityid, selid, showInstruction, buttonID, showhot, iType) {
    
    var inputvalue = QuanToBan(document.getElementById(inputbox.split('|')[0]).value);

    if (cacheinputvalue[tooltipWindowID][inputvalue] != undefined) {
        SetToolTipData(cacheinputvalue[tooltipWindowID][inputvalue], tooltipWindowID, inputbox, tooltipType, selid, showInstruction, buttonID, showhot);
    } else {
        var showh = false;
        if (showhot) { showh = true; }
        var cateid;

        if (typeof ____json4fe != 'undefined') {
            var j = ____json4fe,
            m = j.modules,
            city = j.locallist && j.locallist.length ? j.locallist[0] : j.locallist,
            cate = j.catentry && j.catentry.length ? j.catentry[Math.min(j.catentry.length - 1, 1)] : j.catentry;

            cityid = city.dispid;
            cateid = cate.dispid;
        }
        var url = '',
            path = '';
        /*if (Math.random() > 0.5) {
            url = 'http://211.151.64.39:8080';
        } else {
            url = 'http://211.151.77.230:8080';
        }*/
        url = 'http://suggest.58.com.cn';
//        url = 'http://192.168.105.100:8080';
//        if (m == 'post') {
//            path = '/releasesuggest.do';
//        } else {
            path = '/searchsuggest_' + (iType ? iType : 1) + '.do';
//        }

            url += path + "?inputbox=" + encodeURIComponent(inputvalue) + "&cityid=" + cityid + "&catid=" + (cateid ? cateid : '0');//  + "&topType=1" + "&showhot=false&showInstruction=" + showInstruction;
//        if (this.iType) {
//            url += '&itype=' + this.iType;
//        }


//type=1 表示只提示小区
//type=2 只提示写字楼
//type=3 提示小区和写字楼

        var callback = "callback" + Math.random().toString().substring(2, 6);
        window[callback] = function (data) {
            cacheinputvalue[tooltipWindowID][inputvalue] = data;
            SetToolTipData(data, tooltipWindowID, inputbox, tooltipType, selid, showInstruction, buttonID, showh);
            window[callback] = null;
        };
        url += "&callback=" + callback;

        var script = document.createElement("SCRIPT");
        script.src = url;
        document.body.appendChild(script);
    }
}