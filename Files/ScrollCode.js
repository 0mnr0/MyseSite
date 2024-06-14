let isMobile = /Android|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)


function MouseUpped(){
	document.getElementById('overlay').classList.remove('CatPop')
}


function MouseDown(){
	if (document.getElementById('overlay').classList.length === 0) { document.getElementById('overlay').classList.add('CatPop') }
}

function ScrollCode(){
	var title = document.getElementById("top-bar-line");
	var fakebar = document.getElementById("FakeBar");
	let fakebarWidth = fakebar.clientWidth;
	var overlay = document.getElementById("overlay");
	var TitleMark = document.getElementById("topBarMyse");
	var MyseLogo = document.getElementById("MyseLogoFirst");
	var Content1 = document.getElementById("content1Inside");
	var MiltiPlatformImg = document.getElementById("MultiPlatformImg");
	var Content2 = document.getElementById("content2Inside");	
	var BigMainText = document.getElementById("TitleMainText");
	var OpenSource = document.getElementById("OpenSourceImg");
	var Content3 = document.getElementById("content3Inside");
	let Divs = document.querySelectorAll('.InformationBlock')
	var MiltiPlatformDiv = document.getElementById("content2Inside");
	let msgPreview = document.querySelector('.InformationBlock.Message.NotMine')
	var video = document.querySelectorAll('.InformationBlock')[16]
	let previousScroll = 0;

		let screenHeight = window.innerHeight+30;

		var scrollPosition = window.scrollY || document.documentElement.scrollTop;
		MiltiPlatformImg.style.top = MiltiPlatformDiv.offsetTop - window.scrollY+10+'px';
		let scrollingDown = previousScroll < scrollPosition;

		if (scrollPosition < (BigMainText.offsetTop/2)+130) {
			TitleMark.classList.remove('hidden');
			title.style.visibility = "hidden";
			title.classList.add('invisiblebar');
			overlay.style.background="#0b0b0b25";
		} else {
			let visivbilityPercent = 60;
			if (scrollPosition > msgPreview.offsetTop - (screenHeight /1.7)){
				visivbilityPercent='bb';
				fakebar.classList.add("minified");
				title.classList.add("minified");
				title.style.width=fakebarWidth+'px';
			} else {
				fakebar.classList.remove("minified");
				title.classList.remove("minified");
				title.style.width='100%'
			}
			TitleMark.classList.add('hidden');
			overlay.style.background="#0b0b0b"+visivbilityPercent;
			title.style.visibility = "visible";
			title.classList.remove('invisiblebar');
		}
		
		if (scrollPosition > 150 & scrollPosition < 575) {
			MyseLogo.style.left=-200+((scrollPosition-150) /2 )
			Content1.style.left = ((scrollPosition-150) /2 ) +15
			Content1.style.opacity = ((scrollPosition-160)/1000)*(2*(scrollPosition/400))
		} else if (scrollPosition > 575){
			MyseLogo.style.left=-200+((575-150) /2 )
			Content1.style.left = ((575-150) /2) +15
			Content1.style.opacity = 1;
		}
		

		if (scrollPosition > 278 & scrollPosition < 720) {
			MiltiPlatformImg.style.right=-200+((scrollPosition-278)/2)
			Content2.style.right = ((scrollPosition-278) /2 ) +15
			Content2.style.opacity = ((scrollPosition-160)/720)*(2*(scrollPosition/400))
		} else if (scrollPosition > 720){
			MiltiPlatformImg.style.right=-200+((720-278) /2 )
			Content2.style.right = ((720-278) /2) +15
			Content2.style.opacity = 1;
		}
		
			
		if (scrollPosition > 545 & scrollPosition < 980) {
			OpenSource.style.left=-200+((scrollPosition-545)/2)
			Content3.style.left = ((scrollPosition-545) /2 ) +15
			Content3.style.opacity = ((scrollPosition-160)/980)*(2*(scrollPosition/400))
		} else if (scrollPosition > 980){
			OpenSource.style.left=-200+((980-545) /2)
			Content3.style.left = ((980-545) /2) +15
			Content3.style.opacity = 1;
		}
		



		
		
		let heights = Array(Divs.length).fill(0)
		for (let i = 0; i < Divs.length; i++){
			heights[i] = Divs[i].offsetHeight + Divs[i].offsetTop
		}
		for (let i = 0; i < heights.length; i++){
			//
			if ((heights[i]-Divs[i].offsetHeight) > screenHeight+scrollPosition){
				// Блоки которые ниже поле зрения 
				Divs[i].style.opacity = "0.4"
				Divs[i].style.scale = "0.93"
				Divs[i].style.filter = "blur(1px)"
				
				Divs[i].style.paddingTop = "50px"
				Divs[i].style.paddingBottom = "0px"
			} else {
				if (heights[i] < scrollPosition){
					// Блоки которые выше поле зрения
					Divs[i].style.opacity = "0.4"
					Divs[i].style.scale = "0.94"
					Divs[i].style.filter = "blur(1px)"
				} else {
					//Блоки которые в поле зрения
					Divs[i].style.filter = "blur(0px)"
					Divs[i].style.opacity = "1"
					Divs[i].style.scale = "1"
					Divs[i].style.paddingTop = "10px"
					Divs[i].style.paddingBottom = "10px"
				}
			}
		}
		
		previousScroll = scrollPosition
		
}


window.onload = function(){

	if ((window.innerWidth / window.innerHeight) < 0.6){
		document.getElementById('BadRatio').style.display = 'block'
	} else {document.getElementById('BadRatio').style.display = 'none'}
	
	if (isMobile){
		document.getElementById('MultiPlatformImg').className = 'MobileView'
	}



	window.onscroll = function() {
		ScrollCode()
	};
	  

}
window.onresize = function(){
	if ((window.innerWidth / window.innerHeight) < 0.6){
		document.getElementById('BadRatio').style.display = 'block'
	} else {document.getElementById('BadRatio').style.display = 'none'}
	window.onscroll()
}

ScrollCode()
setTimeout(function(){ScrollCode()}, 300)