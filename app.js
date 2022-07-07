const submitbutton = document.getElementById("checkButton");
console.log(submitbutton);
var randomnumber= Math.round(Math.random()*100);
console.log(randomnumber);
var text;
var live=10;
const lives = document.getElementById("attemptCount");
console.log(lives);
const message = document.getElementById("message")
console.log(message);
submitbutton.onclick = () =>{
    var inputvalue = document.getElementById("textBox").value;
    console.log(inputvalue);
    live--;
    if(inputvalue==randomnumber)
    {
        location.href="./win.html";
    }
    else if(live===0)
    {
        location.href="./lose.html"; 
    }
    else if(inputvalue>randomnumber)
    {
        text=`your guess is too high ${live} lives remaining!`;
    }
    else if(inputvalue<randomnumber)
    {
        text=`your guess is too low ${live} lives remaining!`
    }
    console.log(live);
    console.log(text);
    message.style.display="inherit";
    message.innerHTML=text;
    lives.innerHTML=live;


}
