<?php
namespace Home\Controller;
use Think\Controller;
class PublicController extends Controller {
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
}