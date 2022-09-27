// multiplication
let multiple1 = 3
multiple1 *= 2

document.getElementById('Ans').innerHTML = "<code> let muLtiple1=3 </code> <br> <code> multiple1 *=2 </code> <br> <code> " + multiple1;

// exponetial
let exponent = 5
exponent **= 10

document.getElementById('expo').innerHTML = "<code> let exponent =5 </code> <br> <code> exponent **=10 </code> <br> <code>" + exponent;


// modulus
let modulus = 5
modulus %= 200

document.getElementById('modulus1').innerHTML = "<code> let modulus = 5 </code> <br> <code> modulus %= 200 </code> <br> = " + modulus;



// division
let division = 5
division /= 5

document.getElementById('divide').innerHTML = "<code> let division = 5</code> <br> <code> division /= 5 </code> <br>" + division;                           


window.alert("Welcome To My Third,Fourth & Fifth Day Javascript Experience");
document.getElementById('title').innerHTML="Assignment";
document.getElementById('title 1').innerHTML="My Third-Day Javascript Experience";
document.getElementById('experience').innerHTML="My Third Day experience in Javascript Was Awesome though I guess Its Becoming more deeper and more Different.Third day lesson was on Javascript Operators..Javascript is fun to learn according to my research and I believe as times goes on and with a lot of practices i would Understand More better...";
document.getElementById('topic').innerHTML="<h2><u>Javascript Operators </u></h2>";
document.getElementById('subtopic').innerHTML="<h3> Assignment Operators </h3>";
document.getElementById('multiple').innerHTML="<h4>Multiplication Assignment Operators:</h4>";
document.getElementById('exponent').innerHTML="<h4>Exponential Assignment Operators:</h4>";
document.getElementById('modulus').innerHTML="<h4>Modulus assignment Operators:<h4>";
document.getElementById('divisional').innerHTML="<h4>division assignment Operators:<h4>";

// link generators
let rand = Math.random();
let link= (rand > 0.7)? "<a href='https://Instagram.com'>Instagram</a>" : "<a href='https://Telegram.com'>Telegram</a>"
document.getElementById('firstlink').innerHTML = link


let rand2 = Math.random();
let link2= (rand < 0.4)? "<a href='https://facebook.com'>facebook</a>" : "<a href='https://Twitter.com'>Twitter</a>"
document.getElementById('secondlink').innerHTML = link2


let rand3 = Math.random();
let link3= (rand < 0.6)? "<a href='https://dribble.com'>Dribble</a>" : "<a href='https://Biance.com'>Biance</a>"
document.getElementById('Thirdlink').innerHTML = link3


// logical operator 
let scorei = 100
let result = (scorei >= 95) ? "You scored A1" : "You failed";
document.getElementById('scorei').innerHTML = result


let scoreii = 80;
let resultii = (scoreii >= 70) ? "You Scored B2": "You failed";
document.getElementById('scoreii').innerHTML = resultii


let scoreiii = 60;
let resultiii = (scoreiii >= 55) ? "You Scored C5": "You failed";
document.getElementById('scoreiii').innerHTML = resultiii


let scoreiv = 40;
let resultiv = (scoreiv >= 25) ? "You Scored D7": "You failed";
document.getElementById('scoreiv').innerHTML = resultiv



document.getElementById('title4th').innerHTML="Assignment";
document.getElementById('fourthday').innerHTML="<h2>My Fourthday Javascript Experience</h2>";
document.getElementById('experience4').innerHTML="My Fourth Day experience in Javascript Was Awesome too .Fourth day lesson was on Comparison,Logical & Ternary Operators..Javascript is fun to learn according to my research and I believe as times goes on and with a lot of practices i would Understand More better...";
document.getElementById('ternary1').innerHTML="<h2>Ternary Operators</h2>";
document.getElementById('subtopic1').innerHTML="<h4>Link generator Operators:</h4>";
document.getElementById('link1').innerHTML="<h5>First Link: </h5>";
document.getElementById('link2').innerHTML="<h5>Second Link:</h5>"
document.getElementById('link3').innerHTML="<h5>Third Link:</h5>"
document.getElementById('log').innerHTML="<h2>Logical Operators</h2>"


            // fifth day 
document.getElementById('title5th').innerHTML="Assignment";
document.getElementById('fifthday').innerHTML="<h2>My Fifthday Javascript Experience</h2>";
document.getElementById('experience5').innerHTML="My Fifth Day experience in Javascript Was complicated .My fifth day lesson was on Conditional Statement Operators..Javascript is fun to learn according to my research and I believe as times goes on and with a lot of practices i would Understand More better...";
document.getElementById('con').innerHTML="<h2>Conditional Statement Operators</h2>"
document.getElementById('subtopic5').innerHTML ="<h3>Students Examination Grades</h3>"
// let score = 74;
// if(score >= 70 && score <= 100){
//     console.log('A')
// }else if(score >= 60 && score <= 69 ){
//   console.log('B');
// }else if(score >= 50 && score <= 59){
//   console.log('C');
// }

let score = 84;
if(score >= 80 && score <= 100){
// document.getElementById('result').innerHTML
 result = ('A')
}

else if (score >= 70 && score <= 79){
    result = ('B')
}

else if (score >= 60 && score <= 69){
    result = ('C')
}

else if (score >= 50 && score <=59){
    result = ('D')
}

else if (score >= 40 && score <=49){
    result = ('E')
}else {
    result = ('F')
}

document.getElementById('scores').innerHTML = result
console.log(result)