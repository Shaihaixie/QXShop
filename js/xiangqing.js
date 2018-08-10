$(function () {
    $.ajax({
        type:"get",
        url:"http://localhost:8080/FengSHOP/view/product",
        async:true,
        data:"operation=5&id=106",
        dataType:"jsonp",
        success:function (data) {
            $("#s").append("<div id=\"s_left\">\n" +
                "\t\t\t\t\t<img src=\"img/hongmi.jpg\" id=\"hongmi\" style=\"border: 1px solid #F5F5F5; width: 410px; height: 410px;\"/>\n" +
                "\t\t\t\t\t<a href=\"#\"><img src=\"img/xiaomi1.jpg\" id=\"left1\"/></a>\n" +
                "\t\t\t\t\t<a href=\"#\"><img src=\"img/xiaomi2.jpg\" id=\"left1\"/></a>\n" +
                "\t\t\t\t\t<a href=\"#\"><img src=\"img/xiaomi3.jpg\" id=\"left1\"/></a>\n" +
                "\t\t\t\t\t<a href=\"#\"><img src=\"img/xiaomi4.jpg\" id=\"left1\"/></a>\n" +
                "\t\t\t\t</div>\n" +
                "\t\t\t\t\t\n" +
                "\t\t\t\t<div id=\"s_right\">\n" +
                "\t\t\t\t\t<table border=\"0\" cellspacing=\"0\" width=\"650\" height=\"560\">\n" +
                "\t\t\t\t\t\t<tr><td colspan=\"2\"><h1>"+data.name+"</h1></td></tr>\n" +
                "\t\t\t\t\t\t<tr><td colspan=\"2\"><span style=\"color: #B0B0B0;\">轻薄全金属机身 / 超长续航，支持1C快充 / FHD 全贴合屏幕 / 高能量密度电池</span></td></tr>\n" +
                "\t\t\t\t\t\t<tr><td colspan=\"2\" style=\"color: #FF6700;\">"+data.price+"元</td></tr>\n" +
                "\t\t\t\t\t\t<tr><td colspan=\"2\">选择版本</td></tr>\n" +
                "\t\t\t\t\t\t<tr>\n" +
                "\t\t\t\t\t\t\t<td>\n" +
                "\t\t\t\t\t\t\t\t<a href=\"#\" ><img src=\"img/banben.png\"id=\"img\"/></a>\n" +
                "\t\t\t\t\t\t\t</td>\n" +
                "\t\t\t\t\t\t\t<td>\n" +
                "\t\t\t\t\t\t\t\t<a href=\"#\" ><img src=\"img/banben1.png\"id=\"img\"/></a>\n" +
                "\t\t\t\t\t\t\t</td>\n" +
                "\t\t\t\t\t\t</tr>\n" +
                "\t\t\t\t\t\t<tr><td colspan=\"2\">选择颜色</td></tr>\n" +
                "\t\t\t\t\t\t<tr>\n" +
                "\t\t\t\t\t\t\t<td>\n" +
                "\t\t\t\t\t\t\t\t<a href=\"#\" ><img src=\"img/yanse.png\"id=\"img\"/></a>\n" +
                "\t\t\t\t\t\t\t</td>\n" +
                "\t\t\t\t\t\t\t<td>\n" +
                "\t\t\t\t\t\t\t\t<a href=\"#\" ><img src=\"img/yanse1.png\"/id=\"img\"></a>\n" +
                "\t\t\t\t\t\t\t</td>\n" +
                "\t\t\t\t\t\t</tr>\n" +
                "\t\t\t\t\t\t<tr><td colspan=\"2\" style=\"color: #FF6700; font-size: 20px;\">总计：1290元</td></tr>\n" +
                "\t\t\t\t\t\t<tr><td></td>\n" +
                "\t\t\t\t\t\t\t<td>\n" +
                "\t\t\t\t\t\t\t\t<form>\n" +
                "\t\t\t\t\t\t\t\t\t<a ><input type=\"button\" id=\"button\" value=\"加入购物车\" /></a>\n" +
                "\t\t\t\t\t\t\t\t</form>\n" +
                "\t\t\t\t\t\t\t</td>\n" +
                "\t\t\t\t\t\t</tr>\n" +
                "\t\t\t\t\t</table>\n" +
                "\t\t\t\t</div>")
            $("#button").click(function(){
                $.ajax({
                    url: 'http://localhost:8080/FengSHOP/view/Cart?operation=1&pid='+data.id+'&productnum=1',
                    type: 'get',
                    success: function () {
                        location.href = "gouwuche.html"
                    }
                })
            })
        }
    });





        })