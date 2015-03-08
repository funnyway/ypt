<?php
namespace Home\Controller;
use Think\Controller;
class BaseController extends Controller {
   public  function getSiteName() {
   		return '大学生平台';
   }
   public function getSite() {
   		return "平台";
   }
}