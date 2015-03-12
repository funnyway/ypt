<?php
namespace Home\Controller;
use Think\Controller;
class BaseController extends Controller {
	//初始化
   protected  function __initialize() {
   }
   public  function getSiteName() {
   		return '大学生平台';
   }
   public function getSite() {
   		return "平台";
   }
   public function getUserId() {
   		return session('ypt_user_id');
   }
}