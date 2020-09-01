
//create a randomly generated secret number to guess
//Random number is displayed on the console

var x = Math.round(100*Math.random());
console.log("Secret Number = " + x);

//Ask player to guess a number

var guess = Number(prompt("Guess the secret number! Enter a guess (0-100) below"));

//Loop until the player's guess === x	

while (guess > x || guess < x){

if (guess > x){
	do {console.log("High Guess: " +guess); //Records high guesses on console
		var guess = Number(prompt("Too High! Guess again"));
		}
while (guess > x);
}

if (guess < x){
	do {console.log("Low Guess: " +guess); //Records low guesses on console
		var guess = Number(prompt("Too Low! Guess again"));
		}
while (guess < x);
}
}

//Once player guesses correctly

if (guess === x){
	console.log("CORRECT GUESS: "+ guess);
	alert("Your guess of " +guess+ " is correct! GAME OVER");
}

