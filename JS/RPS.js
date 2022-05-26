
var Rock = 1;
 var Paper = 2;
  var Scissors = 3;
    const answer = prompt("Do you want to play Rock Paper Scissors? Type yes or no!");
     if ( answer.toUpperCase() === 'YES') {
      alert("You will need to type your response!")
       let answer = prompt("Rock, Paper, or Scissors?");
        const dieRoll = Math.floor(Math.random()*3)+1;
         alert(`The Creator rolled a ${dieRoll}.`);
} else {
 alert("Well bye then!!")
  window.location.href = '../index.html';
}
if(answer.toUpperCase() === 'ROCK' || answer.toUpperCase() === 'PAPER' ||  answer.toUpperCase() === 'SCISSORS'){
  alert("You win!")
} else {
   alert("You Lose!")
}
