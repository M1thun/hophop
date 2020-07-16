var character=document.getElementById("character");
var block=document.getElementById("block");
var score=0;
var t=0,flag=0;



var keyMap={};
keyMap[32]	= { name :"space", 	active:false , onactive: function() { jump(); } };

function jump(){
character.classList.add("animate");
block.classList.add("anim");
setTimeout(function(){
	character.classList.remove("animate");
},500);
if(flag==0){
checkdead();
flag=1;}
}


		document.addEventListener("keydown", function(event) {
		    handleKey(event, true);
		});

		document.addEventListener("keyup", function(event) {
		    handleKey(event, false);
		});




		//step 2
		function handleKey(event, status) {
			var currentController = keyMap[event.keyCode];
		    console.log(status);
			if(!!currentController){
				currentController.active = status;
			}
		}

function up(){
		var curController=keyMap[32];
		if(curController.active){
			curController.onactive();
		}		 
}
setInterval(up,50);






var flag=0;
function checkdead(){
	setInterval(function(){
	var ctop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var bleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(bleft<40 && bleft>20 && ctop>=130){
		block.style.animationPlayState="paused";
		character.style.animationPlayState="paused";
	    document.getElementById("over").innerHTML = "Game Over";
	    document.getElementById("score").innerHTML = "Your final score is :"+score;

	}
	else{
		t=t+10;
	    document.getElementById("over").innerHTML = "";
		if(t==1000){

			t=0;
	        score=score+1;
            scorech(score);
	}
    }	
},10);
}

function scorech(x){
$(document).ready(function(){
       $('#score').html("score is :"+x);
});
}