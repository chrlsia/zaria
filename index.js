var number1=Math.floor(Math.random()*6)+1;
var number2=Math.floor(Math.random()*6)+1;
// console.log(number1,number2);

var src1="./images/dice"+number1+".png";
// console.log(src1);
var src2="./images/dice"+number2+".png";
// console.log(src2);

// Display img1 and img2
document.querySelector(".img1").setAttribute("src",src1);
document.querySelector(".img2").setAttribute("src",src2);

if(number1===number2){
   document.querySelector("h1").innerHTML="Ισοπαλία! Ανανέωσέ με";
} else if(number1>number2){
   document.querySelector("h1").innerHTML="🚩Ο παίκτης 1 κερδίζει ! Ανανέωσέ με";
} else{
   document.querySelector("h1").innerHTML="Ο παίκτης 2 κερδίζει !🚩 Ανανέωσέ με";
}
