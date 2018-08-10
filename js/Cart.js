$(function () {
  $.ajax({
      type:"get",
      url:"http://localhost:8080/FengSHOP/view/Cart",
      async:true,
      data:"operation=6&pageNo=1&pageSize=2",
      dataType:"jsonp",
     success:function (data) {
         // alert(JSON.stringify(data));
         for (var i=1; i<=data.totalPage;i++) {
             var  biao=$("<a style='padding-left: 4px'>"+i+"</a>")
             $("#page").append(biao)
             biao.click(function () {
                 $("#content").empty()
                 $(this).css("color","red")
                 $("a").not(this).css("color","")
                 $.ajax({
                     type:"get",
                     url:"http://localhost:8080/FengSHOP/view/Cart",
                     async:true,
                     data:"operation=6&pageNo="+$(this).text()+"&pageSize=2",
                     dataType:"jsonp",
                     success:function (data) {
                         $.each(data.data,function (i,e) {
                             // var  cart=data[index];
                             // console.log(cart)
                             $("#content").append(

                                 "<div class=\"bottom_2\">\n" +
                                 "\t\t\t<div class=\"bottom_1_1\">\n" +
                                 "\t\t\t\t<form style=\"text-align: center;\">\n" +
                                 "\t\t\t\t\t<input style=\"display: inline-block; margin-left: -34px;\"  class=\"checke\"  attr-id="+e.product.price+" type=\"checkbox\"/>\n" +
                                 "\t\t\t\t\t<span class=\"span\"></span>\n" +
                                 "\t\t\t\t</form>\n" +
                                 "\t\t\t</div>\n" +
                                 "\t\t\t<div style=\"width: 70px; height: 70px;position: absolute; margin-left: 140px;\">\n" +
                                 "\t\t\t\t<a href=\"xiangqing.html\"><img src=\"img/shouji.jpg\"/></a>\n" +
                                 "\t\t\t</div>\n" +
                                 "\t\t\t<div class=\"bottom_1_2\">\n" +
                                 "\t\t\t\t<span class=\"span\"><a href=\"xiangqing.html\"  style=\"text-decoration: none;\">"+e.product.name+"</a></span>\n" +
                                 "\t\t\t</div>\n" +
                                 "\t\t\t<div class=\"bottom_1_3\">\n" +
                                 "\t\t\t\t<span class=\"span\">"+e.product.price+"</span>\n" +
                                 "\t\t\t</div>\n" +
                                 "\t\t\t<div class=\"bottom_1_4\">\n" +
                                 "\t\t\t\t<input type=\"text\" class=\"productnum\" value='"+e.productNum +"'/>\n" +
                                 "\t\t\t</div>\n" +
                                 "\t\t\t<div class=\"bottom_1_5\">\n" +
                                 "\t\t\t\t<span class=\"span\"style=\"color: #FF6B00;\" >"+e.total+"</span>\n" +
                                 "\t\t\t</div>\n" +
                                 "\t\t\t<div class=\"bottom_1_6\">\n" +
                                 "\t\t\t\t<a class=\"mm\"   href='http://localhost:8080/FengSHOP/view/Cart?operation=3&id="+e.id+"'>刪除</a>\n" +
                                 "\t\t\t</div>\n" +
                                 "\t\t</div>"
                             )

                             /* $("#span").click(function(){
                                  $.ajax({
                                      url: 'http://localhost:8080/FengSHOP/view/Cart?operation=3&id='+e.id,
                                      type: 'get',
                                      success: function () {
                                          $(".bottom_2").remove()
                                          // location.href = "gouwuche.html"
                                      }
                                  })
                              })*/
                         })
                     }


                 })
             })




         }
         $.each(data.data,function (i,e) {
             // var  cart=data[index];
             // console.log(cart)
            $("#content").append(

                "<div class=\"bottom_2\">\n" +
                "\t\t\t<div class=\"bottom_1_1\">\n" +
                "\t\t\t\t<form style=\"text-align: center;\">\n" +
                "\t\t\t\t\t<input style=\"display: inline-block; margin-left: -34px;\"  class=\"checke\"  attr-id="+e.product.price+" type=\"checkbox\"/>\n" +
                "\t\t\t\t\t<span class=\"span\"></span>\n" +
                "\t\t\t\t</form>\n" +
                "\t\t\t</div>\n" +
                "\t\t\t<div style=\"width: 70px; height: 70px;position: absolute; margin-left: 140px;\">\n" +
                "\t\t\t\t<a href=\"xiangqing.html\"><img src=\"img/shouji.jpg\"/></a>\n" +
                "\t\t\t</div>\n" +
                "\t\t\t<div class=\"bottom_1_2\">\n" +
                "\t\t\t\t<span class=\"span\"><a href=\"xiangqing.html\"  style=\"text-decoration: none;\">"+e.product.name+"</a></span>\n" +
                "\t\t\t</div>\n" +
                "\t\t\t<div class=\"bottom_1_3\">\n" +
                "\t\t\t\t<span class=\"span\">"+e.product.price+"</span>\n" +
                "\t\t\t</div>\n" +
                "\t\t\t<div class=\"bottom_1_4\">\n" +
                "\t\t\t\t<input type=\"text\" class=\"productnum\" value='"+e.productNum +"'/>\n" +
                "\t\t\t</div>\n" +
                "\t\t\t<div class=\"bottom_1_5\">\n" +
                "\t\t\t\t<span class=\"span\"style=\"color: #FF6B00;\" >"+e.total+"</span>\n" +
                "\t\t\t</div>\n" +
                "\t\t\t<div class=\"bottom_1_6\">\n" +
                "\t\t\t\t<a class=\"mm\"   href='http://localhost:8080/FengSHOP/view/Cart?operation=3&id="+e.id+"'>刪除</a>\n" +
                "\t\t\t</div>\n" +
                "\t\t</div>"
            )

            /* $("#span").click(function(){
                 $.ajax({
                     url: 'http://localhost:8080/FengSHOP/view/Cart?operation=3&id='+e.id,
                     type: 'get',
                     success: function () {
                         $(".bottom_2").remove()
                         // location.href = "gouwuche.html"
                     }
                 })
             })*/
         })



         $(".checke").click(function () {
             var id=$(this).attr("attr-id");
             alert(id);
         })





     }
  });


})