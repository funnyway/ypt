<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>注册会员-58同城</title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<script src="/ppt/Public/js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="/ppt/Public/js/formValidator-4.0.1.js" type="text/javascript"></script>
<link rel="stylesheet" href="/ppt/Public/css/login_6.css" type="text/css" />
<link rel="stylesheet" href="/ppt/Public/css/login_6_v0.css" type="text/css" />
<script src="/ppt/Public/js/boot_passport_version_v0.js" type="text/javascript"></script>
<link rel="stylesheet" href="/ppt/Public/css/login_6_v20150127134112.css" type="text/css" />
<style>
.porleft p {
 height: 35px;
}
.fb{ font-weight:bold;}
.link-login{font-family: '宋体';}
#nextwrap{position:relative;}
#validatecode{width:75px;}
#pre{font-size:12px;line-height:34px;cursor:pointer;}
.btnGray input.disable{color:#a0a0a0;cursor:default;}
.bottom {	background-color: #f5f5f5;
	padding-left: 50px;
	text-align: center;
	padding-top: 20px;
	padding-bottom: 20px;
	color: #464646;
	font-size: 14px;
	line-height: 32px;
	margin-top: 15px;
}
</style>

<script type="text/javascript">
var cur_tab = 'weixin';
var regexEnum =   
{  
    intege:"^-?[1-9]\\d*$",                 //整数  
    intege1:"^[1-9]\\d*$",                  //正整数  
    intege2:"^-[1-9]\\d*$",                 //负整数  
    num:"^([+-]?)\\d*\\.?\\d+$",            //数字  
    num1:"^[1-9]\\d*|0$",                   //正数（正整数 + 0）  
    num2:"^-[1-9]\\d*|0$",                  //负数（负整数 + 0）  
    decmal:"^([+-]?)\\d*\\.\\d+$",          //浮点数  
    decmal1:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",　　   //正浮点数  
    decmal2:"^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",　 //负浮点数  
    decmal3:"^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",　 //浮点数  
    decmal4:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",　　 //非负浮点数（正浮点数 + 0）  
    decmal5:"^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",　　//非正浮点数（负浮点数 + 0）  
  
    email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件  
    color:"^[a-fA-F0-9]{6}$",               //颜色  
    url:"^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",    //url  
    chinese:"^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",                  //仅中文  
    chineseorletter:"^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$",           //只含有汉字、数字、字母、下划线不能以下划线开头和结尾  
    ascii:"^[\\x00-\\xFF]+$",               //仅ACSII字符  
    zipcode:"^[0-9]{6}$",                       //邮编  
    mobile:"^(13|15|18)[0-9]{9}$",              //手机  
    ip4:"^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",  //ip地址  
    notempty:"^\\S+$",                      //非空  
    picture:"(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",   //图片  
    rar:"(.*)\\.(rar|zip|7zip|tgz)$",                               //压缩文件  
    date:"^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",                 //日期  
    qq:"^[1-9]*[1-9][0-9]*$",               //QQ号码  
    tel:"^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,11})(-(\\d{1,}))?$",  //电话号码的函数(包括验证国内区号,国际区号,分机号)  
    text:"^\\w+$",                      //用来用户注册。匹配由数字、26个英文字母或者下划线组成的字符串  
    letter:"^[A-Za-z]+$",                   //字母  
    letter_u:"^[A-Z]+$",                    //大写字母  
    letter_l:"^[a-z]+$",                    //小写字母  
    idcard:"^[1-9]([0-9]{14}|[0-9]{17})$",  //身份证  
    password:"^\\w{6,20}$"  
}  
  
var needValidMobile =  false ; 
$(function(){
	console.info($.formValidator.setTipState);
	$("#btnNext").click(function(){
		var mobileVal = $("#mobile").val();
		var reg = new RegExp(/^(13|14|18|15)\d{9}$/);
        if($("#password").val().length==0){
            $.formValidator.setTipState(null, "onError", '您还没有输入密码', 'password_Tip');
        }
        if($("#cpassword").val().length==0){
            $.formValidator.setTipState(null, "onError", '密码不一致，请再次确认', 'cpassword_Tip');
        }
        if($("#mobile").val().length==0){
            $.formValidator.setTipState(null, "onError", '请输入您的手机号码', 'mobile_Tip');
        }
        
		if($("#password_Tip").hasClass("wrong1")||$("#cpassword_Tip").hasClass("wrong1")||$("#password").val().length==0||$("#cpassword").val().length==0||$("#mobile_Tip").hasClass("wrong1")||$("#mobile").val().length==0){
			//alert('1');
			return;
		}
    
    	var timesign = new Date().getTime() + timespan;
    	var mobile = $("#mobile").val();
    	var validatecode =  $("#validatecode").val();
    	if(mobile==null || mobile.length==0){
    		$.formValidator.setTipState(null, "onError", '请填写手机号码', 'mobile_Tip');
    		return;
    	}
    	if(!validMobileFormat(mobile)){
    		$.formValidator.setTipState(null, "onError", '手机号码格式错误', 'mobile_Tip');
    		return;
    	}
    	
    	var result = $("#chkagreement:checked").size();
    	if(result <= 0 ){
    		$.formValidator.setTipState(null, "onError", '请查看58同城使用协议，并选择！', 'chkagreement_Tip');
    		return;
    	}
    	
    	
    	
    	 $("#btnNext").attr("disabled",true);
    	 $.get("/sendregmobilecode",
				{
					"mobile":mobile,
					"timesign":timesign,
					"validatecode":validatecode,
					"p":getm32str(mobile,timesign+"")
				},
				function(result){
				    $("#btnNext").attr("disabled",false);
				    refreshValidatecode();
					if(result=="1"){					   	
						$(".submitwrap,#mobileCodeCon").show();
						$("#passwordCon,#mobileRegCon,#verifyCode,#nextwrap,.agreement").hide();
						$("#nextmobile").text($("#mobile").val());
						$("#pre").show();
						$("#gologin").hide();
					
						$("#resendcode_Tip").addClass("chenggong");
						$("#resendcode_Tip").html("确认码短信已发送到您的手机，请查收");
						resendtime = 180;
						countresent(resendtime);
					}else{
						$("#resendcode_Tip").removeClass("chenggong");
						$("#resendcode_Tip").html("");
						if(result=="5"){
							$.formValidator.setTipState(null, "onError", '该手机号码已被注册。您可以使用该手机号码<a href="/login">登录</a>，如果您忘记密码请点击<a href="/forgetpassword">找回密码</a>。', 'mobile_Tip');
						}else if(result=="6"){
							$.formValidator.setTipState(null, "onError", '该手机号码今天发送验证码过多', 'mobile_Tip');
						}else if(result=="7"){
							$.formValidator.setTipState(null, "onError", '验证码错误','validatecode_Tip');
						}else{
							$.formValidator.setTipState(null, "onError", '手机号码格式错误', 'mobile_Tip');
						}
					}
				},"html");
	});
	$("#pre").click(function(){
		$(".submitwrap,#mobileCodeCon").hide();
		$("#passwordCon,#mobileRegCon,#verifyCode,#nextwrap,.agreement").show();
        $("#mobile_Tip2").removeClass('wrong1').html("");
        $("#validatecode").val("");
        $("#validatecode_Tip").removeClass("chenggong");
         $("#btnNext").attr("disabled",false);
	});
	$("#weixinRegTab").click(function(){
    	$(this).addClass('active').siblings().removeClass('active');
		$("#origReg").hide();
		$("#weixinReg").show();
    });
    $("#mobileRegTab").click(function(){
    	$(this).addClass('active').siblings().removeClass('active');
    	$("#mobileRegCon,#verifyCode").show();
		$(".submitwrap,#mobileCodeCon").hide();
		$("#passwordCon,#mobileRegCon,#verifyCode,#nextwrap,.agreement").show();
    	$("#regCon").hide();
    	$("#nickName").hide();
    	$("#txtemail").hide();
    	$("#mobile").show();
    	$("#mobilecode").show();
    	$("#submitForm").attr("action", "/domobileregister");
    	$("#weixinReg").hide();
    	$("#origReg").show();
    });
    $("#regTab").click(function(){
    	$(this).addClass('active').siblings().removeClass('active');
    	$("#regCon").show();
    	$("#nickName").show();
    	$("#txtemail").show();
    	//if(!needValidMobile){
	    	$("#mobileRegCon,#verifyCode,#mobileCodeCon,#pre,#nextwrap").hide();
			$("#passwordCon,#gologin,.submitwrap,.agreement").show();
	    	$("#mobile").hide();
	    	$("#mobilecode").hide();
    	//}
    	$("#submitForm").attr("action", "/doregister");
    	$("#weixinReg").hide();
    	$("#origReg").show();
    });
    $('#showtip a').mouseover(function(){
        $('#ewmwrap').fadeOut();
        $('#tipwrap').fadeIn();
    }).mouseout(function(){
        $('#ewmwrap').fadeIn();
        $('#tipwrap').fadeOut();
    });
    
})
</script>
</head>
<body>
	<div id="header" class="win1000">
		<a id="logo" href="/ppt"><img src="/ppt/Public/images/logo-49h.png" alt="中文最大生活信息门户" width="160" height="80" /></a>
		<div id="cityname" class="regname"><span>用户注册</span></div>
		<div id="logintext"><a href="http://www.58.com/">返回首页</a>|<a target="_blank" href="http://about.58.com/">帮助</a></div>
</div>
	<div class="cb win1000">
		<form id="submitForm" action="/domobileregister" method="post" name="submitForm" target="formSubmit">
<div class="porleft">
			<input type="hidden" name="ptk" id="ptk" value="f189f346d7484e2ba2363ed4107febd4"/>
			<input type="hidden" name="cd" id="cd" value="5369"/>
			            <div class="regMenu"><span id="regTab"><a href="javascript:void(0);" onclick="cur_tab='mail';clickLog('from=reg_'+cur_tab);">邮箱注册</a></span>
               <span id="loginTab">已有账号？<a href="https://passport.58.com/login/">去登录</a></span>            </div>
            <div class="regWrap">
              <div id="origReg">
                <!-- 邮箱注册 -->
                <div  id="regCon">
                    <p>
                    	<span class="regtlx">用　户　名</span>
                        <input type="text" size="20" value="" class="inp inw" id="nickName" maxlength="20" name="nickName" style=""/>
                        <span id="nickName_Tip"></span> 
                        <span id="nickNameTip"></span>
                    </p>
                    <p>
                    	<span class="regtlx">电&nbsp;子&nbsp;邮&nbsp;箱</span>
                        <input type="text" size="20" value="" class="inp inw" id="txtemail" name="txtemail" style="" />
                        <span id="txtemailTip"></span> 
                    </p>
                </div>
                <div id="passwordCon">
                <p>
                	<span class="regtlx">密　　　码</span>
                    <input type="password" size="30" name="password" id="password" class="inp inw"  onpaste="return false" maxlength="16"  />
                    <span id="passwordTip" style="z-index: 100;"></span> 
                </p>
                <p id="cpp">
                	<span class="regtlx">确&nbsp;认&nbsp;密&nbsp;码</span>
                    <input type="password" size="30" name="cpassword" id="cpassword" class="inp inw" maxlength="16" onpaste="return false"  />
                    <span id="cpasswordTip"></span> 
                </p>
				</div>
				<p class="agreement">
                    <span class="regtlx">&nbsp;</span>
                    <input type="checkbox" checked="checked" id="chkagreement" name="chkagreement"/> <span>我已阅读并同意</span><a target="_blank" href="http://about.58.com/home/announcement.html">《58同城使用协议》</a>
                    <span id="chkagreement_Tip"></span>
                </p>
                
                <p id="nextwrap">
                    <span class="regtlx">&nbsp;</span>
                    <label id="butt" class="butt"><input type="button" class="btns" value="立即注册" checked="checked" id="btnNext" style="width:110px;height:34px;"/></label>
                    <span id="loginOpt">已有账号？<a href="https://passport.58.com/login/">去登录</a></span>
                </p>
			  </div>
				
          </div>
		</div></form>
	</div>
	<div id="footer" class="win1000">
		<p>校企网 大学生综合服务平台版权所有</p>
</div>
</div>
</body>
</html>