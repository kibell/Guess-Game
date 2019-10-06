
//This sets a variable for the usernumber this must be declared before the randomNumber function below
const userNumber = 10;
const counter = 0
const maxTries = 5
//const correctGuess 

// This generates sets the variable = to a random number
const randomValue = Math.floor(Math.random () * userNumber ) +1 ;

console.log(randomValue);
// In This prompt after the "string" the + usernumber will pull from the varible we set at the top
//const guess = prompt ("Please Pick a number between 1 and " + userNumber)

//const guess = prompt ("Please Pick a number between 1 and " + userNumber);

// This simply state a condition for happens if the input is not equal to the random value var


//read this statement as i = 0 if i is less than 10 then add one
// what this for loop is saying is that the if statement will run over and over if you guess wrong up to ten times

function guess() {
for (let i = 0; i<10; i++){

  const  guess = prompt("Guess a number between 1 and" + userNumber);
// this alone will not produce any result so we need to add a if function
            if (guess == randomValue) {
                console.log("Hooray");
                //document.getElementById("Wins") = 
                break;
            } else {
                console.log("NOPE!!");
            }


//the for function will return 0-9 if we want to return 1-10 we can add one to the console.log
//console.log(i + 1);



}

}
