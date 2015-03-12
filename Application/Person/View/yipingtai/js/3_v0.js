var reflash = false,
messageboxloadcomplete = false;
function SetMessageboxLoadComplete() {
    messageboxloadcomplete = true;
}
if (document.all) {
    window.attachEvent('onload', SetMessageboxLoadComplete);
} else {
    window.addEventListener('load', SetMessageboxLoadComplete, false);
}
var sctimer;
var tempwidth = 0,
tempheight = 0,
temppate = 1,
speedrate = 24,
interval_id = 0;
var newdiv = document.createElement("div");
var sdiv = document.createElement("div");
var contentdiv = document.createElement("div");
var Globle_width = 0,
Globle_height = 0,
Globle_src = '',
Globle_title = '',
Globle_Str = '',
Globle_width_p = 0,
Globle_height_div1 = 0;
document.writeln('<style type="text/css">body{ margin:0px !ipmortant; padding:0px  !ipmortant;}#blackbg{position:fixed;_position:absolute;}');
document.writeln('#blackcontentOuter{zoom:1; position:fixed!important;position:absolute;left:50%;top:45%;_top:expression((document.documentElement.scrollTop || document.body.scrollTop) + Math.round(50 * (document.documentElement.offsetHeight || document.body.clientHeight) / 100));}</style>');
function GetCookieValue(name) {
    var arr = document.cookie.match(new RegExp(name + "=([^&;]+)"));
    if (arr != null) {
        return decodeURI(arr[1]);
    }
    return "";
}
function setbg(boxtitle, pwidth, pheight, psrc, showclose) {
    var show = 'true';
    if (showclose && showclose == 'false') {
        show = 'false'
    }
    if (!messageboxloadcomplete) {
        window.clearInterval(interval_id);
        interval_id = window.setInterval("setbg('" + boxtitle + "', " + pwidth + "," + pheight + ", '" + psrc + "','" + show + "')", 200);
        return
    }
    ShowSelectAll(false, _58MessageBox.HideIDs);
    window.clearInterval(interval_id);
    if (GetCookieValue("UserID") == "") reflash = true;
    _58MessageBox.InitMsgDivData();
    Globle_title = boxtitle;
    Globle_width = pwidth;
    Globle_height = pheight;
    Globle_src = psrc;
    Globle_width_p = Globle_width - 20;
    Globle_height_div1 = Globle_height + 30;
    Globle_Str = '<div style=" position:relative"><div id="messageboxframecontainer" style="display:none;width:' + Globle_width + 'px; height:38px ;padding:8px; background:#000;filter:alpha(opacity=30); -moz-opacity:0.3; -kHTML-opacity: 0.3; opacity: 0.3; position:absolute; top:0; left:0; z-index:1"></div><div id="__messageboxback" style=" width:' + Globle_width + 'px;position:absolute; top:8px; left:8px; background:#fff; z-index:1000;"><p id="messageboxclosebutton" style=" display:none; background:url(http://pic2.58.com/ui6/top_box_t.gif) repeat-x; width:' + Globle_width_p + 'px; height:30px; line-height:32px; padding:0 10px; border-bottom:none; font-size:14px; font-weight:bold; color:#000;margin:0;border-bottom:1px solid #C7C7C7">' + (show == 'true' ? '<a style=" display:block; width:20px; height:20px; background:url(http://pic2.58.com/ui6/top_box_close.gif) no-repeat 0 0; line-height:100px; overflow:hidden; margin-top:5px; float:right" href="javascript:closeopendiv()">[关闭]</a>' : '') + Globle_title + '</p><iframe id="_58MessageBoxFrame" onload="_58MessageBox.ResizeIframe()" scrolling="no" src="' + Globle_src + '" frameborder="0" height="0" width="' + Globle_width + '"></iframe></div></div>';
    _58MessageBox.scroolMsgeffect();
}
function closeopendiv() {
    ShowSelectAll(true, _58MessageBox.HideIDs);
    if (reflash == true && GetCookieValue("UserID") != "") {
        window.location.reload();
    } else {
        contentdiv.style.width = '10px';
        contentdiv.style.height = '10px';
        contentdiv.innerHTML = "";
        Globle_width = 0,
        Globle_height = 0,
        Globle_src = '',
        Globle_title = '',
        Globle_Str = '';
        tempwidth = 0,
        tempheight = 0,
        temppate = 1,
        contentdiv.style.display = "none";
        newdiv.style.display = "none";
    }
}
var _58MessageBox = {
    HideIDs: '',
    ResizeIframe: function() {
        try {
            var _frame = document.getElementById("_58MessageBoxFrame");
            var height = 0, width = 0;
            var f = document.getElementById("messageboxframecontainer");
            var closebutton = document.getElementById("messageboxclosebutton");
            try {
                _frame.height = 0;
                width = Math.max(_frame.contentWindow.document.documentElement.scrollWidth, _frame.contentWindow.document.body.scrollWidth);
                height = Math.max(_frame.contentWindow.document.documentElement.scrollHeight, _frame.contentWindow.document.body.scrollHeight)
            } catch (e) { }
            if (height > 0) {
                Globle_height = height;
                Globle_height_div1 = Globle_height + 30;
                Globle_width = width;
                Globle_width_p = Globle_width - 20;
            }
            contentdiv.style.width = Globle_width + "px";
            contentdiv.style.height = Globle_height + "px";
            contentdiv.style.margin = "-" + Globle_height / 2 + "px 0px 0px -" + Globle_width / 2 + "px";
            _frame.width = Globle_width;
            _frame.height = Globle_height;
            closebutton.style.width = Globle_width_p + "px";
            closebutton.style.display = "inline-block";
            f.style.width = Globle_width + "px";
            f.style.height = _58MessageBox.setheightauto(Globle_height_div1) + "px";
            f.style.display = "block";
            document.getElementById('__messageboxback').style.width = Globle_width + "px";
            document.getElementById("messageboxclosebutton").style.display = "inline-block"
        } catch (e1) { }
    },
    getMsgDivHeight: function() {
        var a = document.body.scrollHeight;
        var b = window.screen.height;
        return a > b ? a : b;
    },
    InitMsgDivData: function() {
        newdiv.id = "blackbg";
        newdiv.style.display = "none";
        newdiv.style.zIndex = '99990';
        newdiv.style.backgroundColor = "#000000";
        newdiv.style.filter = "alpha(opacity=30)";
        newdiv.style.opacity = 0.3;
        newdiv.style.display = "block";
        newdiv.style.top = "0px";
        newdiv.style.left = "0px";
        newdiv.style.width = "100%";
        newdiv.style.height = _58MessageBox.getMsgDivHeight() + "px";
        contentdiv.id = "blackcontentOuter";
        contentdiv.style.display = "none";
        contentdiv.style.zIndex = '99991';
        contentdiv.style.width = '10px';
        contentdiv.style.height = '10px';
        contentdiv.style.margin = '-5px 0px 0px -5px';
        contentdiv.style.backgroundColor = "";
        document.body.appendChild(newdiv);
        document.body.appendChild(contentdiv);
    },
    scroolMsgeffect: function() {
        contentdiv.style.display = "block";
        _58MessageBox.scroolMsgdiv();
    },
    getiecopy: function() {
        var bro = navigator.userAgent.toLowerCase();
        if (/msie/.test(bro)) return bro.match(/msie ([\d.]*);/)[1];
    },
    setheightauto: function(input) {
        if (document.all) {
            if (_58MessageBox.getiecopy() < 7.0) return input + 3;
        }
        return input;
    },
    scroolMsgdiv: function() {
        tempwidth = Globle_width;
        tempheight = Globle_height;
        contentdiv.innerHTML = Globle_Str;
        contentdiv.style.width = tempwidth + "px";
        contentdiv.style.height = tempheight + "px";
        contentdiv.style.margin = "-" + tempheight / 2 + "px 0px 0px -" + tempwidth / 2 + "px";
        var _frame = document.getElementById("_58MessageBoxFrame");
        _frame.src = Globle_src;
    }
};
function ShowSelectAll(show, sID) {
    var sList = document.getElementsByTagName("select");
    if (sID && sID != '') {
        sID = "|" + sID + '|';
    }
    if (sList && sList.length > 0) {
        for (var i = 0; i < sList.length; i++) {
            if (sID && sID != '') {
                if (sList[i].id && sList[i].id != '' && sID.indexOf('|' + sList[i].id + '|') >= 0) {
                    continue;
                }
            }
            if (show) {
                sList[i].style.display = 'inline';
            } else {
                sList[i].style.display = 'none';
            }
        }
    }
}