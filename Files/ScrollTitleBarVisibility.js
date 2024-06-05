

window.onscroll = function() {
    var title = document.getElementById("top-bar-line");
	var overlay = document.getElementById("overlay");
	var TitleMark = document.getElementById("topBarMyse");
    var BigMainText = document.getElementById("TitleMainText");
	var MyseLogo = document.getElementById("MyseLogoFirst");
	var Content1 = document.getElementById("content1Inside");
	var MiltiPlatformImg = document.getElementById("MultiPlatformImg");
	var Content2 = document.getElementById("content2Inside");	
	var OpenSource = document.getElementById("OpenSourceImg");
	var Content3 = document.getElementById("content3Inside");
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition < (BigMainText.offsetTop/2)+130) {
		TitleMark.classList.remove('hidden');
	    title.style.visibility = "hidden";
		
	    title.classList.add('invisiblebar');
	    overlay.style.background="#0b0b0b25";
    } else {
		TitleMark.classList.add('hidden');
		overlay.style.background="#0b0b0b60";
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
	

	MiltiPlatformImg.style.top = document.getElementById("content2Inside").offsetTop
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
	






	

	
	let screenHeight = window.innerHeight;
	let Divs = document.querySelectorAll('.InformationBlock')
	
	let heights = Array(Divs.length).fill(0)
	for (let i = 0; i < Divs.length; i++){
		heights[i] = Divs[i].offsetHeight + Divs[i].offsetTop
	}
	for (let i = 0; i < heights.length; i++){
		if (heights[i] < scrollPosition || (heights[i]-Divs[i].offsetHeight) > screenHeight+scrollPosition){
			Divs[i].style.opacity = "0.4"
			Divs[i].style.scale = "0.93"
			Divs[i].style.filter = "blur(1px)"
			Divs[i].style.marginTop = "30px"
		} else {
			Divs[i].style.filter = "blur(0px)"
			Divs[i].style.opacity = "1"
			Divs[i].style.scale = "1"
			Divs[i].style.marginTop = "0px"
		}
	}
	
};
  
window.onresize = function(){
		window.onscroll()
}