<?php
namespace Person\Controller;
use Think\Controller;
class BaseController extends Controller {
   protected  function _initialize() {
   		//检测登录
   		if(!session('ypt_user_id')) {
   			$this->redirect('Home/Public/login');
   		}
   		//检测用户类型1为个人用户2为单位用户3位管理员用户
   		//echo session('ypt_user_type');die;
   		if(session('ypt_user_type')!==1) {
   			$this->error('非法访问', U('Home/Index/index'));
   		}
   }
   public  function getSiteName() {
   		return '大学生平台';
   }
   public function getAppName() {
   		return "个人中心";
   }
   public function getUserId() {
   		return session('ypt_user_id');
   }
   public function getUserName() {
   		return session('ypt_user_name');
   }
}