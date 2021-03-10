
var dice1=Math.floor(Math.random()*6)+1; //generates a random number
var dice2=Math.floor(Math.random()*6)+1; //generates a random number
var img1 ="images/dice"+dice1+".png"; //sets image 
var img2 ="images/dice"+dice2+".png"; // sets image

var image1= document.querySelectorAll("img")[0]; 
image1.setAttribute("src", img1);

var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", img2);
var title = (dice1>dice2)? "Player 1" : "Player 2";

if(dice1>dice2){
    document.querySelector("h1").innerHTML="Player 1"
}else if(dice2>dice1{
    document.querySelector("h1").innerHTML="Player 2"
    
}else{
    document.querySelector("h1").innerHTML="Draw"
}


/*
\images\dice1.png\
*/ 
