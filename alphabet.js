
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};



//this code below shoots out the random number

var randomNumber = Math.floor(Math.random() * 26) + 1;

//this letterSum variable changes letters into the number value

var letterSum = s =>
  s.toLowerCase().
  split('').
  map(s => s.charCodeAt(0)-0x60).
  filter(c => 1 <= c && c <= 26).
  reduce((x,y) => x+y, 0);
 

  var chances = 5;
  var score = 0;
  var lost = 1;
 var game = 1;

  function abc() {
   var sum = letterSum(document.getElementById('letter').value);
   

if ( chances === 0 ){
document.getElementById("chance").innerHTML = ' ';
document.getElementById("result").innerHTML = ' ';
document.getElementById("gameover").innerHTML = " GAME OVER!!!";
document.getElementById("startOver").style.visibility = "visible";
document.getElementById("loser").innerHTML = "Lost:" + lost;
lost++;
return go();
}



if(sum === randomNumber) {
document.getElementById("wl").innerHTML = "YOU WIN!!!!!";
document.getElementById("result").innerHTML = ' ';
document.getElementById("wl").style.backgroundColor = 'purple';
document.getElementById("startOver").style.visibility = "visible";
document.getElementById("letter").innerHTML = ' ';
document.getElementById("gameover").innerHTML = ' ';
document.getElementById("scores").innerHTML = "Won:" + (score + 1);
score++;
return go();


}else{
document.getElementById("wl").innerHTML = ' ';
if (sum < randomNumber) {
document.getElementById("result").innerHTML = "TOO LOW!";
document.getElementById("result").style.backgroundColor = 'red';
document.getElementById("chance").innerHTML = " You have " + chances + " chances " + " left.";
}else if (sum > randomNumber) {
document.getElementById("result").innerHTML = "TOO HIGH!";
document.getElementById("result").style.backgroundColor = 'red';
document.getElementById("chance").innerHTML = " You have " + chances + " chances " + " left.";
}
}
chances--;
}


document.getElementById("guess").addEventListener('click', abc);
document.getElementById("guess").style.visibility="visible";

function go() {
randomNumber = Math.floor(Math.random() * 26) + 1;
document.getElementById("wl").innerHTML = ' ';
chances = 5;
document.getElementById("gameover").innerHTML = ' ';
document.getElementById("result").innerHTML = ' ';
document.getElementById("chance").innerHTML = ' ';
document.getElementById("startOver").style.visibility = "visible";
document.getElementById("games").innerHTML = "Games played:" + game;
document.getElementById("averages").innerHTML = " Average:" + score / game * 100 + "%";
game++;
}
