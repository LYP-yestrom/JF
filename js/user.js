$(()=>{
	$(".at").on("mouseenter",function(e){
       $(".rd i").css("visibility","hidden").next();
	   $(".at i").css("visibility","visible");
       $(".qhuan").html("您的收藏空空的，赶快去购物吧！")
	})
	$(".rd").on("mouseenter",function(e){
        $(".at i").css("visibility","hidden");
		$(".rd i").css("visibility","visible");
		console.log($("#qhuan"))
		$(".qhuan").html("您的店铺收藏空空的，赶快去收藏店铺吧！")
	})
})