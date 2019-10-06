
//This sets a variable for the usernumber this must be declared before the randomNumber function below
const userNumber = 10;
let counter = 0;
let maxTries = 0;
let myScoreWins = 0;
let myScoreLose = 0;
const winner_span = document.getElementById ("winner");
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
/*
function startGame() {

for (let i = 0; i <= 5; i++){

         const  guess = prompt("Guess a number between 1 and " + userNumber )
         const myScoreWins = 0;
    
          if (guess == randomValue) {
                console.log("Hooray");
                document.write( "You did it!! The magic number was " + randomValue );
                console.log (myScoreWins);
                break;

            } else {
                console.log("NOPE!!");
              
            }  


}

}

*/

function startGame() {

    for (let i = 0; i <= 5; i++){
             console.log(randomValue);
             const  guess = prompt("Guess a number between 1 and " + userNumber )
            
        
              if (guess == randomValue) {
                    console.log("Hooray");
                   // document.write( "You did it!! The magic number was " + randomValue );
                    wins();
                    break
                  //  myScoreWins ++;
                   // console.log ( "Current Score  " + myScoreWins);
                    
    
                } else {
                    console.log("NOPE!!");
                  
                }  
    
    
    }
    
    }

    function wins (){
        myScoreWins ++;
        winner_span.innerHtml = myScoreWins;
        
    }