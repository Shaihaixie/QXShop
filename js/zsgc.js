function de(de,i,e) {
    de.click(function () {
        $.ajax({
            type:"get",
            url:"http://localhost:8080/FengSHOP/view/Cart",
            async:true,
            data:"operation=3&pageNo="+i+"&pageSize=2&id="+e.id+"",
            dataType:"jsonp",
            success:function (data) {
                tablrtr(data)
            }
        })
    })
}