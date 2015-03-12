<?php
namespace Person\Controller;
use Think\Controller;
class IndexController extends BaseController {
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
    			$this->assign('name', I('nickName'));
    			$this->assign('email', I('txtemail'));
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
    public function  resumeList() {
    	$this->assign('title','我的简历');
    	$user_id = $this->getUserId();
    	$model = M('resume');
    	$number = $model->where(array('user_id'=>$user_id))->count();
    	$this->assign('resume_total',$number);
    	$rs = $model->where(array('user_id'=>$user_id))->select();
    	$this->assign('resumes',$rs);
    	$this->display();
    }
}