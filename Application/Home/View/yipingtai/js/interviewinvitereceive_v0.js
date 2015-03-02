$(document).ready(function() {
    $.ajaxSetup({ type: "post", global: false, dataType: "html" });
    $("#CheckboxSelectAll").click(function() {
        $("input[type=checkbox]").attr("checked", this.checked);
    });
    $(".linkContent").click(function() {
        var parent = $(this).parent().parent();
        var ahref = $(this);
        try {
            if (parent.find("#messageIsRead").val() == '0') {
                $.ajax({
                    url: "http://jianli.58.com/ajax/usermsg/",
                    data: { operate: "updateread", id: parent.find("#cbID").val() },
                    success: function(data, textStatus) {
                        var content = data.toString();
                        if (content == "true") {
                            ahref.removeClass("jiachu");
                            parent.find("#messageIsRead").val("1");
                        }
                    }
                });
            }
        } catch (e) { }
    });
    $(".linkDelete").click(function() {
        if (confirm('确定删除?')) {
            var parent = $(this).parent().parent();
            $.ajax({
                url: "http://jianli.58.com/ajax/usermsg/",
                data: { operate: "deletemsg", id: parent.find("#cbID").val() },
                success: function(data, textStatus) {
                    var content = data.toString();
                    if (content == "true") {
                        location.href = location.href;
                    }
                }
            });
        }
    });
});
function ChangeSelect(obj, op) {
    if (obj.className != null && obj.className == "zhong") {
        return;
    } else {
        window.location = document.URL.replace(/&p=\d/, "").replace(/&type=\d/, "") + "&type=" + op.toString();
    }
}
function DeleteAll() {
    var flag = 0;
    var ids = "";;
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
        $.ajax({
            url: "http://jianli.58.com/ajax/usermsg/",
            data: { operate: "deleteallmsg", id: ids },
            success: function(data, textStatus) {
                var content = data.toString();
                if (content == "true") {
                    location.href = location.href;
                }
            }
        });
    }
}