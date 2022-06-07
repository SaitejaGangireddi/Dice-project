var play1= prompt("enter player 1 name");

var play2= prompt("enter player 2 name");
var play1capt= play1.slice(0, 1);
var capt1 = play1capt.toUpperCase();
var rem=play1.slice(1,play1.length);
var concat1=capt1+rem;
var play2capt= play2.slice(0, 1);
var capt2 = play2capt.toUpperCase();
var rem2=play2.slice(1,play2.length);
var concat2=capt2+rem2;
document.querySelectorAll("p1")[0].innerHTML=concat1;
document.querySelectorAll("p2")[0].innerHTML=concat2;







var dice1=Math.floor(Math.random()*6)+1;
var diceimage1="dice"+dice1+".png";
var dicesource="images/"+diceimage1;
var player1=document.querySelectorAll("img")[0];
player1.setAttribute("src", dicesource);

var dice2=Math.floor(Math.random()*6)+1;
var diceimage2="dice"+dice2+".png";
var dicesource="images/"+diceimage2;
var player2=document.querySelectorAll("img")[1];
player2.setAttribute("src", dicesource);

if(dice1>dice2)
{
  document.querySelectorAll("h1")[0].innerHTML=concat1+" wins. Congratulations"
}
else if(dice1<dice2)
{
  document.querySelectorAll("h1")[0].innerHTML=concat2+" wins. Congratulations"
}
else
{
  document.querySelectorAll("h1")[0].innerHTML="DRAW. Refresh to play again";
}
