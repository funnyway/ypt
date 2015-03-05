<?php
function checkPwd($pwd) {
	if(strlen($pwd)<6) {
		return false;
	}
}