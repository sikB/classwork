

function throwDie(){
	var randomDie = Math.round(Math.random()*5)+1;
	var imageName = "dice-img/d" + randomDie + ".gif";
	document.images['myDie1'].src = imageName;

	var randomDie2 = Math.round(Math.random()*5)+1;
	var imageName2 = "dice-img/d" + randomDie2 + ".gif";
	document.images['myDie2'].src = imageName2;
}



// <input type="button" onclick="throwDie();">

function runForYourLife(){
	document.getElementById('whimp1').style.visibility = "visible";
	document.getElementById('coward').style.visibility = "visible";
	document.getElementById('dice').style.visibility = "hidden";
	document.getElementById('dragon').style.visibility = "hidden";
	document.getElementById('wild-dragon').style.visibility = "hidden";
	document.getElementById('health').style.visibility = "hidden";
	document.getElementsByClass('health-bar').style.visibility = "hidden";}




// var health = document.getElementById("health");
// health.value = health.value(- 20%);

// if((['myDie1'] === "dice-img/d2.gif") && (['myDie2'] === "dice-img/d2.gif")){
// 	health.value = "70"}


//Whenever you lose health

if((randomDie === 2) && (randomDie2 === 2)){
	health-=30;}

	

