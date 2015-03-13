<?php
namespace Home\Controller;
use Think\Controller;
class PublicController extends BaseController {
    public function index(){
    	echo session_id();die;
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
    		$model->create_time = time();
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
    	$this->assign('title','用户登录');
    	$this->assign('page_title','用户登录--'.$this->getSiteName());
    	$this->display();
    }
    public function  logout() {
		session('ypt_user_id', null);
		session('ypt_user_type', null);
		session('ypt_user_name', null);
		session('ypt_user_email', null);
		cookie('ypt_user_name',null);
		cookie('ypt_user_autologin', null);
		$this->ajaxReturn(1);
    }
    public function doLogin() {
    	if(!IS_POST) {
    		die('非法访问！');
    	}
    	$account = I('account');
    	$data['password'] = I('password');
    	if(1 == isEmail($account)) {
    		$data['email'] = $account;
    	}else {
    		$data['name'] = $account;
    	}
    	$model = D('User');
    	$auto = I('auto_login')=='auto_login'?true:false;
    	if($model->login($data)) {
    		if(session('ypt_http_referer')) {
    			header('Location:'.session('ypt_http_referer'));
    		}else {
    			$this->redirect('Home/Index/index');
    		}
    	}else {
    		$this->error('登录失败');
    	}
    }
    public function checkLogin() {
    	if(!IS_POST){
    		die;
    	}
    	$data = array();
    	if($data['user_id'] = session('ypt_user_id')) {
    		$data['is_login'] = 1;
    		$data['user_name'] = session('ypt_user_name');
    		$this->ajaxReturn($data);
    	}elseif($cookie_auth = cookie('ypt_user_autologin')) {
    		$cookie_name = cookie('ypt_user_name');
    		$model = D('User');
    		$map['name'] = $cookie_name;
    		$map['auto_login_sessionid'] = $cookie_auth;
    		if($user = $model->where($map)->field('user_id,name,email')->find()) {
    			$user['last_login_time'] = time();
    			$user['is_login'] = 1;
    			$model->autologin($user);
    			$this->ajaxReturn($user);
    		}
    	}
    	$data['is_login'] = 0;
    	$this->ajaxReturn($data);
    }
}