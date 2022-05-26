const answer = prompt("Do you want me to pick your path? Type yes or no!");
alert(`I will randomly roll a dice and that number will be the path you will take.`)
const dieRoll = Math.floor(Math.random()*6)+1;
alert(`The Creator rolled a ${dieRoll}.`);
