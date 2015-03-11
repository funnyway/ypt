<?php
namespace Home\Controller;
use Think\Controller;
class PublicController extends BaseController {
    public function index(){
    	echo session_id();die;
		$this->display();
		    	
    }

    public function regAct() {
    	echo session_id();
    	 die;
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
    			$model->login();
    			$this->display('regok');
    		}else {
    			$msg= $model->getError();
    			$flag = 0;
    			$this->assign('msg',$msg);
    			$this->display('regerror');
    		}
    	}
    }
    public function  login() {
    	session('ypt_http_referer',$_SERVER['HTTP_REFERER']);
    	$this->assign('title','用户注册');
    	$this->assign('page_tilte','用户注册——'.$this->getSiteName());
    	$this->display();
    }
    public function doLogin() {
    	if(!IS_POST) {
    		die('非法访问！');
    	}
    //	session();
    	$account = I('account');
    	$data['password'] = I('password');
    	if($account = pregEmail($account)[0]) {
    		$data['email'] = $account;
    	}else {
    		$data['name'] = $account;
    	}
    	$model = D('User');
    	if($model->login($data)) {
    		header('Location:'.session('ypt_http_referer'));
    	}else {
    		$this->error('登录失败');
    	}

    }
    public function checkLogin() {
    	//if()
    }
}