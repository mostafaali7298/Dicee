var randomNumber1 = Math.floor(Math.random()*6) + 1;
var mess = "images/"+"dice" +randomNumber1+ ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , mess);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var mess2 = "images/"+"dice" +randomNumber2+ ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , mess2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML= "Player 1 WIN🏆"
}
else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML= "Player 2 WIN🏆"
}
else {
  document.querySelector("h1").innerHTML= "It is a draw"
}
