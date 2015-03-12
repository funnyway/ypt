/**
 * 分页脚本函数
 * 说明:url目前默认是最后一个参数是page.
 * 调用函数时,url中把其他的参数准备好,page参数不加即可.
 * 例如:完整的url为:http://qy.58.com/jobs/{userId}/{page}：{}中为参数
 *    那么传递的url为:http://qy.58.com/jobs/{userId}即可。
 * @param id  要显示分页的父节点ID
 * @param url
 * @param totalPage
 * @param currentPage
 * @returns
 */
var seperatePage = function( id, url, totalPage, currentPage){
	if(totalPage < 2){
		document.getElementById(id).style.display="none";
		return;
	}
	var pageStr = '';
	if(currentPage > 1){
		pageStr += '<a href="' + url + "/" + (currentPage - 1) + '">';
		pageStr += '	<span>上一页</span>';
		pageStr += '</a>';
	}
	for(var index = 1; index <= totalPage; index++){
		if(index == currentPage){
			pageStr += '<strong><span>' + index + '</span></strong>';
		} else if ( currentPage > index && currentPage-index < 5) {
			pageStr += '<a href="' + url + '/' + index + '" ><span>' + index + '</span></a>';
		} else if (currentPage < index && index - currentPage < 5) {
			pageStr += '<a href="' + url + '/' + index + '" ><span>' + index + '</span></a>';
		} else if (currentPage < index) {
			break;
		}
	}
	if(currentPage < totalPage && totalPage >1) {
		pageStr += '<a href="' + url + "/" + (currentPage + 1) + '">';
		pageStr += '	<span>下一页</span>';
		pageStr += '</a>';
	}
	document.getElementById(id).innerHTML = pageStr;
}

/**
 * 把检索函数放进分页
 * @param id
 * @param func 函数已经组织好，page是最后一个参数
 * @param page
 * @param totalPage
 * @returns
 */
var sepPageWithFunc = function(id, func, page, totalPage){
	if(!totalPage || totalPage < 2){
		return;
	}
	var pageStr = '';
	if(page > 1){
		pageStr += '<a href="javascript:' + func + (page - 1) + ')">';
		pageStr += '	<span>上一页</span>';
		pageStr += '</a>';
	}
	for(var index = 1; index <= totalPage; index++){
		if(index == page){
			pageStr += '<strong><span>' + index + '</span></strong>';
		} else if ( page > index && page-index < 5) {
			pageStr += '<a href="javascript:' + func + index+ ')" ><span>' + index + '</span></a>';
		} else if (page < index && index - page < 5) {
			pageStr += '<a href="javascript:' + func + index+ ')" ><span>' + index + '</span></a>';
		} else if (page < index) {
			break;
		}
	}
	if(page < totalPage) {
		pageStr += '<a href="javascript:' + func + (page+1)+ ')">';
		pageStr += '	<span>下一页</span>';
		pageStr += '</a>';
	}
	if(id){
		document.getElementById(id).innerHTML = pageStr;
		return;
	}
	return pageStr;
};
