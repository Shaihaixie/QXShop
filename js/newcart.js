$(function () {
    $.ajax({
        type:"get",
        url:"http://localhost:8080/FengSHOP/view/Cart",
        async:true,
        data:"operation=6&pageNo=1&pageSize=2",
        dataType:"jsonp",
        success:function (data) {
            // alert(JSON.stringify(data));
             showpage(data)
            $.each(data.data,function (i,e) {
                // var  cart=data[index];
                // console.log(cart)
                var  tr1=$("<tr></tr>")
                var   td1=$("")
                tablrtr(e)
            })
        }
    });


})