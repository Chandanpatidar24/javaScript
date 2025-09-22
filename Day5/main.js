// The if else Statement
if (condition) {
    // Code runs if condition is true
} else {
    // Code runs if condition is false
}

//Example if-else
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}



// else if 
if (condition) {
    // Code runs if condition is true
} 
else if (condition) {
    // Code runs if condition is true
}
else {
    // Code runs if condition is false
}


let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}



//Mini tas 1 : check if number is eqal to 10 or not
let number  = 12;
if(number === 10)
{
    console.log('The Number is 10');
}
else 
{
    console.log('its not 10');
}



//Mini Task 2 : a program that checks if a person is eligible to vote (age >= 18).

let personAge  = 21 ;
let voteAge = 18 ;
if(personAge >= voteAge)
{
    console.log('you can vote');
}
else
{
    console.log('sorry you cant vote');
}



//Mini task 3 :  a program that checks if a number is positive, negative, or zero.


let checkNumber = 10;

if(checkNumber == 0)
{
    console.log('number is zero');
}
else if(checkNumber >= 0 )
{
    console.log('number is postive');
}
else if (checkNumber <= 0)
{
    console.log('number is negative');
}
else{
    console.log('please enter correct number');
}
