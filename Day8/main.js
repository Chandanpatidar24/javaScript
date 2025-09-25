//functions hello, world!
function greet() {
    console.log("Hello, world!");
}
console.log(" ");
greet();
console.log(" ");



// Mini Quiz 1 : use function to write hello (yourname).
function greetingUser(userName)
{
    console.log(`Hello, ${userName}!`)
}
console.log(" ");
greetingUser('chandan');
console.log(" ");



// Mini Quiz 2 : sum of two numbers

function sumOfNumbers(num1, num2)
{
    let sum = num1 + num2;
    return sum;
}
console.log(" ");
console.log(sumOfNumbers(5,10));
console.log(" ");




//Mini Quiz 3 : return the sqaure of number
function funSquare(number)
{
    let sqaure = number * number ; 

    return sqaure;
}

console.log(" ");
console.log(funSquare(4)); // to run function at console we have to use console.log 
console.log(" ");



//Mini Quiz 4 : Check Even or Odd

function evenOrOdd(number)
{
    if( number % 2 === 0 )
    {
        return `${number} is Even  `;
    }
    return `${number} is Odd `
}

console.log(" ");
console.log(evenOrOdd(10));
console.log(evenOrOdd(1));
console.log(evenOrOdd(1107));
console.log(" ");



