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
    	print_r($_POST);DIE;
    	$model = D('user');
    	if(!$this->create()) {
    		$msg = $model->getError();
    		$flag = 0;
    	}else {
    		if($model->add()==1) {
    			$msg = '注册成功！';
    		}else {
    			$msg= '注册失败，请重新尝试';
    		}
    	}
    	$this->display();
    }
}