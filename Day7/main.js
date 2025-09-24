//Mini Quiz 1 :Print numbers from 1 to 10.
console.log(" ");
{
for(let i = 1 ; i <= 10 ; i++)
{
    console.log(i);
}
}
console.log(" ");


//Mini Quiz 2 : Print even numbers between 1 and 50.
console.log(" ");
{
for(let i = 0 ; i <= 50 ; i++)
{
    if( i % 2 === 0)
    {
        console.log('The Even Numbers are  : ' + i);
    }
}
}
console.log(" ");

//Mini Quiz 3 : -Multiplication table of a number (input via prompt).


console.log(" ");
{
let number = 5;
// let number  = Number(prompt('Enter the number')); this is to get input via prompt 

for(let i = 1 ; i<= 10 ; i++)
{
    console.log(`${number} X ${i} = ${number * i}`);
}
}
console.log(" ");


//Mini Quiz 4: Sum of numbers from 1 to N.

console.log(" ");
{
let sum = 0;
let num = 5;
for(let i = 1 ; i<=num ; i++)
{
    sum +=i;
}
console.log(`The sum of number are : ${sum}`);
}
console.log(" ");



//Mini Quiz 5 : Factorial of a number.


console.log(" ");
{
let Factorail = 1;
let num = 5;
for(let i = 1 ; i<=num ; i++)
{
    Factorail *=i;
}
console.log(`The Factorail of numbers are : ${Factorail}`);
}
console.log(" ");
