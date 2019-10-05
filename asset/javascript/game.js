
//This sets a variable for the usernumber this must be declared before the randomNumber function below
const userNumber = 10;

const counter = 0
const maxTries = 5
// This generates sets the variable = to a random number
const randomValue = Math.floor(Math.random () * userNumber );

console.log(randomValue);
// In This prompt after the "string" the + usernumber will pull from the varible we set at the top
//const guess = prompt ("Please Pick a number between 1 and " + userNumber)

//const guess = prompt ("Please Pick a number between 1 and " + userNumber);

// This simply state a condition for happens if the input is not equal to the random value var
while ( guess != randomValue )  {
    const guess = prompt ("Please Pick a number between 1 and " + userNumber);

    // the += means we take the counter value which is set to 0 and add 1 to the counter var
counter += 1 ;
}