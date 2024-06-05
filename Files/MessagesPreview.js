var TextPreview = null;

var SongTexts=[
	"What can i say except, You`re Welcome",
	"For the tides, the sun, the sky?",
	"Hey, it's okay, it's okay, you're welcome",
	"I'm just an ordinary demi-guy"
];

var Widths=[
	315,
	250,
	320,
	235
]

var WaitTime=[
	3800,
	3300,
	3700,
	3400
	
]

async function ChangeText(){

		TextPreview = document.getElementById("EngineText")
		
		if (TextPreview !== null){
			
			for (var i=0; i < SongTexts.length; i++) {
				
				TextPreview.textContent = SongTexts[i];
				TextPreview.style.width=Widths[i]
				await new Promise(r => setTimeout(r, WaitTime[i]));
				
			}
			
		}
		
		await new Promise(r => setTimeout(r, 50));
		
		ChangeText()
	
}




ChangeText()


