<?php
namespace Home\Controller;
use Think\Controller;
class PersonCenterController extends BaseController {
    public function index(){
		$this->display();
    }
    public function regAct() {
    	if(!IS_POST) {
    		die('非法访问');
    	}
    	$model = D('user');
    	if(!$model->create()) {
    		$msg = $model->getError();
    		$flag = 0;
    		$this->assign('msg',$msg);
    		$this->display('regerror');
    	}else {
    		$model->password = md5(md5($model->password));
    		if($model->add()) {
    			$msg = '注册成功！';
    			$flag =1;
    			$this->assign('name',I('nickName'));
    			$this->assign('email',I('txtemail'));
    			if($model->login()) {
    				$this->display('regok');
    			}else {
    				
    			}
    		}else {
    			$msg= $model->getError();
    			$flag = 0;
    			$this->assign('msg',$msg);
    			$this->display('regerror');
    		}
    	}
    }
    public function  login() {
    	$this->assign('title','用户注册');
    	$this->assign('page_tilte','用户注册——'.$this->getSiteName());
    }
}