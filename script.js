var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");


body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background;

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function twoColor(){
	color1.value = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
  return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
	color2.value = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
  return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

	// var randomColor = Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}