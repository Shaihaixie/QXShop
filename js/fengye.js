function showpage(data) {
    for (var i=1; i<=data.totalPage;i++) {
        var  biao=$("<a style='padding-left: 4px'>"+i+"</a>")
        $("#page").append(biao)
        biao.click(function () {
            $("#content").empty()
            $(this).css("color","red")
            $("a").not(this).css("color","")
            var ss=$(this).text()
            $.ajax({
                type:"get",
                url:"http://localhost:8080/FengSHOP/view/Cart",
                async:true,
                data:"operation=6&pageNo="+$(this).text()+"&pageSize=2",
                dataType:"jsonp",
                success:function (data) {
                    $.each(data.data,function (i,e) {
                        // console.log(cart)

                           tablrtr(e,ss)
                    })
                }
            })
        })
    }
}
function tablrtr(e,ii) {
    $("#content").append(
        " <tr>\n" +
        "                    <td width=\"20%\"><input type=\"checkbox\"></td>\n" +
        "                    <td width=\"20%\">"+e.product.name+"</td>\n" +
        "                    <td width=\"10%\">"+e.product.price+"</td>\n" +
        "                    <td width=\"1%\"><input type=\"text\" id=\"wenben\" value=\""+e.productNum +"\"></td>\n" +
        "                    <td width=\"20%\" style=\"text-align: center\">4445</td>\n" +
        "                    <td width=\"10%\"  id=\"xiugai\">修改</td>\n" +
        "                    <td id=\"dele\" width=\"10%\">刪除</td>\n" +
        "                </tr>"
    )
    var dele=$("#dele")
      de(dele,ii,e)

     $("#xiugai").click(function () {
         var sss=$("#wenben").val();
         $.ajax({
             type:"get",
             url:"http://localhost:8080/FengSHOP/view/Cart",
             async:true,
             data:"operation=5&id="+e.id+"&productid="+e.productid+"$productnum="+sss,
             dataType:"jsonp",
             success:function (data) {
             alert("修改成功")
             }
         })

     })
}