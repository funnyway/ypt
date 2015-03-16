<?php
namespace  Home\Model;
use Think\Model;
class  ResumeModel extends  Model {
	protected $tableName =   'user';
	protected  $_validate = array(
			//array('inputPerson' , 'require' , '录入操作员不能为空' , 1 , '' , 3),
// 			array('name' , 'require' , '用户名不能为空' ),
// 			array('name','','用户名已经存在！',0,'unique',1), // 在新增的时候验证name字段是否唯一
// 			array('email' , 'require' , '请输入您的邮箱' ),
// 			array('email' , 'email' , '您的邮箱格式不正确' ),
// 			array('email','','邮箱已经存在！',0,'unique',1), // 在新增的时候验证name字段是否唯一
// 			array('password' , 'require' , '密码不能为空' ),
// 			array('password','checkPwd','密码格式不正确',0,'function'), // 自定义函数验证密码格式
// 			array('cpassword','password','确认密码不正确',0,'confirm'), // 验证确认密码是否和密码一致
	);
	protected $_map = array(
		'nickName' =>'name', // 把表单中name映射到数据表的username字段        
		'txtemail'  =>'email', // 把表单中的mail映射到数据表的email字段   
	);
}