<?php
function checkPwd($pwd) {
	if(strlen($pwd)<6) {
		return false;
	}
}
function pregEmail($test){  
        /** 
        匹配邮箱 
        规则： 
            邮箱基本格式是  *****@**.** 
            @以前是一个 大小写的字母或者数字开头，紧跟0到多个大小写字母或者数字或 . _ - 的字符串 
            @之后到.之前是 1到多个大小写字母或者数字的字符串 
            .之后是 1到多个 大小写字母或者数字或者.的字符串 
        */  
        $zhengze = '/^[a-zA-Z0-9][a-zA-Z0-9._-]*\@[a-zA-Z0-9]+\.[a-zA-Z0-9\.]+$/A';  
        preg_match($zhengze,$test,$result);  
        return $result;  
}  
function isEmail($test){
	/**
	 匹配邮箱
	 规则：
	 邮箱基本格式是  *****@**.**
	 @以前是一个 大小写的字母或者数字开头，紧跟0到多个大小写字母或者数字或 . _ - 的字符串
	 @之后到.之前是 1到多个大小写字母或者数字的字符串
	 .之后是 1到多个 大小写字母或者数字或者.的字符串
	 */
	$zhengze = '/^[a-zA-Z0-9][a-zA-Z0-9._-]*\@[a-zA-Z0-9]+\.[a-zA-Z0-9\.]+$/A';
	return 	preg_match($zhengze,$test);

}