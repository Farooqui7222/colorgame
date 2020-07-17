var sqrnum = 6;
var colors = genRandmClr(sqrnum);
var sqrs= document.querySelectorAll(".square");
var pickedc= pickc();
var coldis= document.getElementById("cd");
var msgd = document.querySelector("#msg");
var h = document.querySelector("h1");
var ress = document.querySelector("#reset");
var easy = document.querySelector("#esy");
var hard = document.querySelector("#hrd");


easy.addEventListener("click", function(){
	hard.classList.remove("selectd");
	easy.classList.add("selectd");
	sqrnum = 3;
	colors = genRandmClr(sqrnum);
	pickedc = pickc();
	coldis.textContent =pickedc;

	for(var i=0; i<sqrs.length; i++)
		if(colors[i]){
			sqrs[i].style.backgroundColor  =colors[i];
		} else{
			sqrs[i].style.display = "none";
		}
});

hard.addEventListener("click", function(){
	hard.classList.add("selectd");
	easy.classList.remove("selectd");
	sqrnum = 6;
	colors = genRandmClr(sqrnum);
	pickedc = pickc();
	coldis.textContent =pickedc;

	for(var i=0; i<sqrs.length; i++){
			sqrs[i].style.backgroundColor  =colors[i];
			sqrs[i].style.display = "block";
		}
		
});

ress.addEventListener("click", function(){
	colors=genRandmClr(sqrnum);
	pickedc  = pickc();
	coldis.textContent = pickedc;
	this.textContent="New Colors";

	msgd.textContent= "";

	for(var i=0; i<sqrs.length; i++){
		sqrs[i].style.backgroundColor = colors[i];
	}
	h.style.backgroundColor= "steelblue";
})

coldis.textContent = pickedc;

for(var i=0; i <sqrs.length ; i++ ){
	sqrs[i].style.backgroundColor = colors[i];
	sqrs[i].addEventListener("click" , function(){
		var ccolor= this.style.backgroundColor;
		console.log(ccolor, pickedc);


	if (ccolor === pickedc){
			msgd.textContent= "Correct!";
			ress.textContent ="Play Again? ";
			changeColors(ccolor);
			h.style.backgroundColor = ccolor;

	} else{
			this.style.backgroundColor = "#232323";
			msgd.textContent = "Try Again"		}
	});
}


function changeColors(color){
	for(var i=0; i<sqrs.length; i++){
		sqrs[i].style.backgroundColor = color;
	}
}

function pickc(){
	var randm = Math.floor(Math.random() * colors.length);
	return colors[randm];
}


function genRandmClr(num){
	var arr =[];
	for(var i=0; i< num; i++){
		arr.push(randmcol())
	}
	return arr;
}

function randmcol(){
	 var r= Math.floor( Math.random() * 256);
	 var g= Math.floor( Math.random() * 256);
	 var b= Math.floor( Math.random() * 256);
	 return "rgb(" + r + ", " + g + ", " + b + ")";

}