function ScrollToMain(){
	
	var MainContent = document.getElementById("TitleNameMain")
	
	window.scrollTo({
	  top: 0,
	  behavior: "smooth",
	});
	
}

function ScrollToChars(){
	
	var MainContent = document.getElementById("MyseLogoFirst")
	
	window.scrollTo({
	  top: MainContent.offsetTop-70,
	  behavior: "smooth",
	});
	
}
function ScrollToBest(){
	
	var MainContent = document.querySelectorAll(".InformationBlock")[0]
	
	window.scrollTo({
	  top: MainContent.offsetTop-70,
	  behavior: "smooth",
	});
	
}