
/**************轮播图***********/
	$(()=>{
	   var n=1;
	   var imgs=document.querySelector(".zhutu");
	   function task(){
		  $(".zhutu").removeAttr("style");
		  clearInterval(timer);
		   n++;
		  if(n<=4){
			  imgs.style.backgroundImage=`url(img/${n}.jpg)`;
			  $(".zhutu").val("alt",`${n}`);
		  }else{
			  imgs.style.backgroundImage=`url(img/${1}.jpg)`;
			  $(".zhutu").val("alt","1");
			  n=1;
		  }
		}
		var timer=setInterval(task,5000);
		$(".rd").click(e=>{
			var $img=$(e.target);
			$(".zhutu").attr("style",`background-image:`+$img.data("target"));
			 clearInterval(timer);
			 $(".zhutu").removeAttr("style");
			 var tt=setInterval(task,5000); 
		})
		$(".zhutu").mouseover(()=>{
			 clearInterval(timer);
		  })
		$(".zhutu").mouseout(()=>{
			 timer=setInterval(task,5000);
		  })
		$(".lt-a").click(e=>{
			  var $tar=$(e.target).parent();
			

		  })
	})
/*************主页登录***************/
 
 /************视频旋转********/
$(()=>{
 $(".aa").click(e=>{
			var $tar=$(e.target);
			var $q=parseInt($tar.offset().left);
			var $count=$(".xztp>li").length;
			console.log($q);
			var n=parseInt($tar.prev().children().attr("src").split("/")[1]);
			if($q==724||$q==881){
			 for(var i=0;i<$count;i++){
				console.log(i+n);
				  if(i+n<9){	
					 $(".xztp>li:eq("+i+")").children("a").children().attr("src",`imgs/${i+n}.png`);
					 console.log(1);
				 }else{					  
					 $(".xztp>li:eq("+i+")").children("a").children().attr("src",`imgs/${i+n-8}.png`);}
			 }	 
			}else if($q==227||$q==179){
			   for(var i=0;i<$count;i++){
					if(i+n>8)
						 $(".xztp>li:eq("+i+")").children("a").children().attr("src",`imgs/${i+n-8}.png`);
					else
						 $(".xztp>li:eq("+i+")").children("a").children().attr("src",`imgs/${n+i}.png`);
			   }
			}
		})
})