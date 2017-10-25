   function lbt(){	//轮播图
			var oW= 0;		
			var oPic = document.getElementById("pic");
			var oUl = oPic.getElementsByTagName('ul')[0];
			var aLis = oUl.children;
			var oOl = document.getElementsByTagName('ol')[0];
			var oBnts = oOl.children;
			oUl.innerHTML+=oUl.innerHTML;
			var aLis = oUl.children;
			var oLiWidth = aLis[0].offsetWidth;
			var iNum = 0;
			//计算轮播图的宽度
			oUl.style.width = aLis[0].offsetWidth*aLis.length + 'px';
			oW= document.documentElement.clientWidth;
			
			//轮播图居中
			oPic.style.left = -(oPic.offsetWidth - oW)/2 +'px';
			
			//窗口缩放的时候重新计算轮播图居中
			window.onresize=function(){
				oW= document.documentElement.clientWidth;
				oPic.style.left = -(oPic.offsetWidth - oW)/2 +'px';
			};
			
			//点解数字按钮切换轮播
			
			for(var i =0; i<oBnts.length;i++){
				oBnts[i].index=i;
				oBnts[i].onclick=function(){
					for(var i =0; i<oBnts.length;i++){
						oBnts[i].className='';
					}
					oBnts[this.index].className='active';
					iNum=this.index;
					animate(oUl,{'left': -this.index*oLiWidth});
				}
			};
	 var numi=0
	 var num=0
		timer=setInterval(function(){
			numi++;
			if(numi==oBnts.length){
				numi=0
			}
			for (var i=0;i<oBnts.length;i++){oBnts[i].className='';}
			oBnts[numi].className='active'
			num++
			if(num==aLis.length/2+1){
				oUl.style.left=0
				num=1
			}
			animate(oUl,{'left': -num*oLiWidth});
		},1000)
			
}

function fh(){                                     //简单的返回顶部
	var oBtn = document.getElementById("back");		//获取返回按钮的id 赋值给oBtn
			var oTop = 0;							
			
			window.onscroll=function(){		//滚筒条
				oTop = document.documentElement.scrollTop || document.body.scrollTop; //判断兼容
				
				if(oTop>300){
					oBtn.style.display='block'
				}else{
					oBtn.style.display='none'
				}
			};
			
			oBtn.onclick=function(){
				document.documentElement.scrollTop = document.body.scrollTop=0;
			}
			}

function box(){									//导航栏的三个按钮
var sy=document.getElementById("box1")
var syli=sy.getElementsByTagName("li")
 for (i=2;i<syli.length;i++){                //从第三个开始加，前面的没添加效果
      syli[i].index=i
      syli[i].off=false
      syli[i].onclick=function(){
      	if(this.off==false){
      		for (i=2;i<syli.length;i++){
      			var div=syli[i].getElementsByTagName("div")
      			div[0].style.display="none"
      		}
      		var div=this.getElementsByTagName("div")
      		div[0].style.display="block"
      		this.off=true
      		window.event ? window.event.cancelBubble=true: e.stopPropagation();//阻止冒泡
      	}else{
      		var div=this.getElementsByTagName("div")
      		div[0].style.display="none"
      		this.off=false
      	}
      }
 } 
 	document.onclick=function(){
 		for (i=2;i<syli.length;i++){
      			var div=syli[i].getElementsByTagName("div")//获取div
      			div[0].style.display="none"
      			 this.off=false								//点击外面隐藏
      		}
 		
 	}
}
