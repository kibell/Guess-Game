
//This sets a variable for the usernumber this must be declared before the randomNumber function below
const userNumber = 10;


// This generates sets the variable = to a random number
const randomValue = Math.floor(Math.random () * userNumber );


// In This prompt after the "string" the + usernumber will pull from the varible we set at the top
const Choices = prompt ("Please Pick a number between 1 and " + userNumber)