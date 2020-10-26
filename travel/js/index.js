$(function() {

	// $("#preloader").delay(200).slideUp(800);	
	loading();
	resize();	
	// scrollUpDown();	
	nav();
	window.onresize = function() {
		resize();
		
	};	
	$("#burger-wrap").click(function(){		
		$("#top-nav-wrap").animate({
			top: '0'
		},600);
		$("#top-nav-wrap").mouseleave(function(){
			$("#top-nav-wrap").animate({
				top: '-100px'
			},600);
		});		 
	});
	$("#bottom-nav").click(function(){		
		$("#bottom-nav-wrap").animate({
			bottom: '0'
		},600);
		$("#bottom-nav-wrap").mouseleave(function(){
			$("#bottom-nav-wrap").animate({
				bottom: '-400px'
			},600);
		});		 
	});

	
	hoverBox();
	hoverMenu();	

	setTimeout(function() {		
		$(window).scroll(function(e) {           
			console.log($(window).scrollTop());
			
			if ($(window).scrollTop() < 900) {
					$("#bottom-nav-wrap").stop().animate({			
						bottom: '-500px',						
					},300);	
				} 
				else if ($(window).scrollTop() >= 900 && $(window).scrollTop() < 4356) {		
					$("#bottom-nav-wrap").stop().animate({						
						bottom: '-400px'						
					},300);						
				};
				if ($(window).scrollTop() < 4356) {	
					setTimeout(function() {	
						$("#bottom-nav-wrap").css({						
							position: 'fixed'			
						});
					},300);								
				} else if ($(window).scrollTop() >= 4356) {	
					$("#bottom-nav-wrap").stop().animate({						
						bottom: '0'						
					},300);	
					setTimeout(function() {	
						$("#bottom-nav-wrap").css({							
							position: 'absolute'			
						});	
					},300);			
									
				};            
			});
		
	},4000); 
 
 	goto();
 	count();

	var mySwiper = new Swiper('.swiper-container', {
	  // Optional parameters
	  direction: 'vertical',
	  loop: true,
	  // If we need pagination
	  pagination: {
	    el: '.swiper-pagination',
	  },

	  // Navigation arrows
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  // And if we need scrollbar
	  scrollbar: {
	    el: '.swiper-scrollbar',
	  },
	})

 }); //window로드끝


function goto(target) {
	$("html, body, #main").animate({
			scrollTop: $(target).offset().top
		},1000);

};
function resize() {
	var wrapDiv = document.querySelectorAll("#main-title");	
	wrapDiv.forEach(function(el){		
		el.style.height = window.innerHeight + "px";	
	});	
};
function nav() {
	$("#to-top").click(function(){
		goto("#top");
		console.log(goto())
	});
	$("#1").click(function(){
		goto("#main-title");
	});
	$("#2").click(function(){
		goto("#page-1");
	});
	$("#3").click(function(){
		goto("#page-2");
	});
	$("#4").click(function(){
		goto("#page-3");
	});
	$("#5").click(function(){
		goto("#page-4");
	});
	$("#scroll").click(function(){
		goto("#page-1");
	});

};

// function showTitle() {
// 	if ($(window).scrollTop() >= 900) {			
// 		$("#page-1 .title-area>span").each(function(i) {		    
// 			$(this).stop().animate({				
// 				height: '60px'
// 			}, 100 * (i + 0.1),'easeInQuart');
// 		});		
// 		setTimeout(function() {
// 			$("#page-1 .title-area>span>p").each(function(i) {		
// 				$(this).stop().animate({						
// 					opacity: '1',
// 					top: '0'
// 				}, 100 * (i + 0.1),'easeOutElastic');							
// 			});				
// 		},800); clearTimeout();		
// 	};
// 	if ($(window).scrollTop() >= 1900) {		
// 		$("#page-2 .title-area>span").each(function(i) {		    
// 			$(this).stop().animate({				
// 				height: '60px'
// 			}, 100 * (i + 0.1),'easeInQuart');
// 		});
// 		setTimeout(function() {
// 			$("#page-2 .title-area>span>p").each(function(i) {		
// 				$(this).stop().animate({	
// 					opacity: '1',
// 					top: '0'
// 				}, 100 * (i + 0.1),'easeOutElastic');					
// 			});	
// 		},800); clearTimeout();	
// 	};
// 	if ($(window).scrollTop() >= 3000) {	
// 		$("#page-3 .title-area>span").each(function(i) {		    
// 			$(this).stop().animate({				
// 				height: '60px'
// 			}, 100 * (i + 0.1),'easeInQuart');
// 		});
// 		setTimeout(function() {
// 			$("#page-3 .title-area>span>p").each(function(i) {		
// 				$(this).stop().animate({	
// 					opacity: '1',
// 					top: '0'
// 				}, 100 * (i + 0.1),'easeOutElastic');					
// 			});	
// 		},800); clearTimeout();	
// 	};
// 	if ($(window).scrollTop() >= 4000) {		
// 		$("#food-text-wrap>span").stop().animate({
// 			 height: '65px'
// 		},800,'easeInOutBack');		
// 		setTimeout(function() {
// 			$("#food-text-wrap h1").stop().animate({
// 			 opacity: '1'
// 		},100);
// 			$("#food-text-wrap>span").stop().animate({
// 				 height: '0',
// 				 top:'0'
// 			},800,'easeInOutBack');					
// 		},900); clearTimeout();
// 	};
// };

// function showFoodBox() {
// 	if ($(window).scrollTop() >= 4000) {
// 		setTimeout(function() {
// 			$(".box").each(function(i) {		    
// 			$(this).stop().animate({				
// 				top: '0',
// 				opacity: '1'
// 			}, 600 * (i + 0.1),'easeInQuart');
// 		});
// 		},1800); clearTimeout();
// 	};
// };
 
function scrollUpDown() { //스크롤업다운체크용
	var oldScroll = 0;
	$(window).scroll(function(){		
		var nowScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
		if(nowScroll < oldScroll) {
			$("#preloader").text("up");
			$("#main-title").animate({
				 height: window.innerHeight + 'px',
			},800,easeInQuart);	
		} else {
			$("#preloader").text("down");
			$("#main-title").animate({
				 height: '0',
			},800,easeInQuart);					
		}
		oldScroll = nowScroll <= 0 ? 0 : nowScroll;
	});
};
function hoverMenu() {
	var timer = [];
	$("#burger-wrap").each(function(i) {
		timer[i] = null;
		$(this).hover(function() {
			(function(el) {
				timer[i] = setTimeout(function() {
					$("#burger-text").stop().animate({
							right: '-45px'
						},300);
						$(".icon-bar:nth-child(1)").stop().animate({
							top: '-5px'
						},300);
						$(".icon-bar:nth-child(3)").stop().animate({
							top: '17px'
						},300);
						setTimeout(function() {
							$(".icon-bar").stop().animate({	
								width: '130%'					
							}, 600,'easeOutElastic');					
						},400); clearTimeout();								
				}, 300);					
			})($(this));
		}, function() {	
		$(".icon-bar").stop().animate({	
				width: '100%'					
			}, 300,'easeOutElastic');					
			setTimeout(function() {
				$("#burger-text").stop().animate({
				right: '-40px'
				},300);
				$(".icon-bar:nth-child(1)").stop().animate({
					top: '0'
				},300);
				$(".icon-bar:nth-child(3)").stop().animate({
					top: '12px'
				},300);			
			},400); clearTimeout();					
			clearTimeout(timer[i]);
		});
	});				
};
function loading() {
	$("#loading").each(function(){
		$(this).delay(500).css({
			backgroundColor: '#009bdf'
		});
	});
	$("#loading-wave").delay(500).animate({
		opacity: '0'
	});
	setTimeout(function() {
		$("#loading").animate({
			opacity: '0.5',
			height: '0'
		},800,'easeInOutBack');		
	},800);
	setTimeout(function() {				
		$("#title>span").each(function(i) {		 
			$(this).stop().animate({
				top: '0',
				opacity: '1'
			}, 100 * (i + 0.1),'easeInOutBack');
		});
	},1800); 
	setTimeout(function() {		
		$("#scroll").animate({
			opacity: '1',
			bottom: '120px'
		},1200,'easeInOutBack');	
	},2800); 
};	
function hoverBox() {
	var timer = [];
	$(".popular-box").each(function(i) {
		timer[i] = null;
		$(this).hover(function() {
			(function(el) {
				timer[i] = setTimeout(function() {
					el.css({
						backgroundColor: 'gray'
					});
					el.find(".pin").stop().animate({
						right: '10px'
						},300, 'easeOutQuart');
					el.find(".info").stop().animate({
						bottom: '10px',
						left: '10px'
					},300, 'easeOutQuart');														
				}, 300);					
			})($(this));
		}, function() {	
		$(".popular-box").css({
			backgroundColor: '#f2f2f2'
		});
		$(".pin").stop().animate({	
			right: '-75px'					
		}, 300,'easeOutQuart');
		$(".info").stop().animate({	
			bottom: '-75px',
			left: '-55px'					
		}, 300,'easeOutQuart');
		clearTimeout(timer[i]);
		});
	});				
};
function count() {

	var timer = [];
	var count = document.getElementsByClassName(countValue);
	
	//정도
	var limit = [50, 100, 80, 70];
	//속도 (위와 갯수 맞춰야함)
	var speed = [50, 50, 50, 50];

	for(var i = 0; i < count.length; i++) {
		(function(i) { //즉시실행함수 시작 <---시간차 때문에 걸어줘야함
			timer[i] = setInterval(function() {
				count[i].value++;
				count[i].innerText = count[i].value + "%";
				if(count[i].value == limit[i]) {
					clearTimeout(timer[i]);
				}
			}, speed[i]); //<---빨라서 for문이 먼저 끝나버림
		})(i); //즉시실행함수 끝
	}
	

}


