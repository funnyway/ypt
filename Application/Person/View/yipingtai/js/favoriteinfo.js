function SelectAllCheckBox(parentItem) {
    var items = document.getElementsByTagName("input");
    for (i = 0; i < items.length; i++) {
        if (items[i].type == "checkbox") {
            items[i].checked = parentItem.checked;
        }
    }
}
//删除收藏（简历,求职）的信息
function DeleteMsg(FavID) {
    if (!confirm("您确定要删除该信息吗？"))
        return;
    $.ajax({
        type: "POST",
        dataType: "html",
        url: "http://jianli.58.com/ajax/deletefavorite/",
        data: "ids=" + FavID,
        success: function(msg) {
            if (msg == "OK") {
                alert("删除成功！");
                location.href = location.href;
            } else {
                alert("删除失败！");
            }
        }
    });
}
//批量删除收藏（简历,求职）的信息
function DeleteAll() {
    var flag = 0;
    var ids = ""; ;
    $("input[type=checkbox][name=cbID]").each(function() {
        if (this.checked) {
            flag = 1;
            ids += $(this).val() + ",";
        }
    });
    if (flag == 0) {
        alert("请选择要删除的信息！");
        return false;
    } else {
        ids = ids.substring(0, ids.length - 1);
        DeleteMsg(ids);
    }
}
function DeleApply(ids) {
    if (confirm('你确认要删除吗?')) {
        $.ajax({
            url: "http://jianli.58.com/ajax/delapply/",
            data: "id=" + ids,
            type: "post",
            dataType: "html",
            success: function(data) {
                if (data == "true") {
                    alert("删除成功！");
                    location.href = location.href;
                } else {
                    alert("删除失败！");
                }
            }
        });
    }
}
//批量删除
function DeleteAllApply() {
    var flag = 0;
    var ids = ""; ;
    $("input[type=checkbox][name=cbID]").each(function() {
        if (this.checked) {
            flag = 1;
            ids += $(this).val() + ",";
        }
    });
    if (flag == 0) {
        alert("请选择要删除的信息！");
        return false;
    } else {
        ids = ids.substring(0, ids.length - 1);
        DeleApply(ids);
    }
}
function jianlishouim(data) {
	if (data != undefined && data != "" && data != "{}") {
		var json = eval(data);
		$.each(json, function(i, n) {
			if (n.status == 1) {//因为主站init
				$("span[name='zaixian_" + n.uid + "']").removeClass("notonline");
				$("span[name='zaixian_" + n.uid + "']").addClass("online");
			}
			$("span[name='zaixian_" + n.uid + "']").click(function() {
				var objA = $(this).siblings("a");
				parent.IM_SendMessage(n.uid, {id : $(this).attr("tid"),title:""+objA.attr("title")+"",url:"",contactor:""+GetCookieValue("UserName")+"",lockCB : false,tipsInCB : ""});
			});
		});
	}
}
function GetCookieValue(name) {
    var arr = document.cookie.match(new RegExp(name + "=([^&;]+)"));
    if (arr != null) return decodeURI(arr[1]);
    else return ""
}
function entryconfirm(id) {
	$.ajax({
        type: "post",
        dataType: "html",
        url: "http://jianli.58.com/ajax/entryconfirmation/?id=" + id,
        success: function(data, textStatus) {
            if (parseInt(data) == 1) {
                alert("您好，恭喜您求职成功。此职位已经保存到您的求职成功记录里。");
                location.href = location.href;
            } else {
            	alert("入职确认失败！");
            }
        }
    });
}