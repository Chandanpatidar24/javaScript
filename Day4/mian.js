//JavaScript Assignment ( = )

let x = 10;

let y = 20 ;
    console.log(" Assignment ( = ) : " +  y ) //10
    console.log(" Assignment ( = ) : " +  y ) //20



//JavaScript Addition ( + )
console.log(" ");
{
let x = 5;
let y = 10;
let z = x + y;
    console.log(" Addition ( + ) : " +z ); // 5 + 10 = 15 
}


//JavaScript Subtraction ( - )
console.log(" ");

{
let x = 10 ;
let y = 5;
let z = x - y ;
    console.log(" Subtraction ( - ) : " + z );
}


//JavaScript Multiplication ( * )
console.log(" ");

{
let x = 2;
let y = 5;
let z = x * y ; 
    console.log(" Multiplication ( * ) : " + z); // 2 * 5 = 10;
}


// JavaSciprt Division ( / )
console.log(" ");
{
let x = 10;
let y = 2;
let z = x / y ;
    console.log(" Divison ( / ) : " + z);
}


// JavaScript Exponentiation ( ** )
console.log(" ");
{
let x = 2 ; 
let y = 2 ;
let z = x ** y;
    console.log(" Exponentiation ( ** ) : " + z );
}


// JavaScript Modulus ( % )
console.log(" ");
{
let x = 2 ;
let y = 10 ;
let z = x % y ;
    console.log(" Modulus ( % ) : " + z )
}


// JavaScript String Addition
console.log(" ");
{
let text1 = " Hello " ;
let text2 = " World ! " ;
let text3 = text1 + text2 ;
    console.log(" String Addition : " + text3 );
    
}

// Adding Strings and Numbers
console.log(" ");
{
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
    console.log(` x = ${x} , y =  ${y} , z =  ${z}`)
}


// JavaScript Assignment Operators
console.log(" ");
{
let x = 10 ;
x += 5 ;  // short version of x = x + 5;
    console.log(" Assignment Operators ( += ) : "+ x );
let y = 20 ; 
y -= 5 ;
    console.log(" Assignment Operators ( -= ) : "+ y );

// and etc...
}

//JavaScript Comparison Operators
//equal to	( == )
//	equal value and equal type ( === )
console.log(" ");
{
let x = 5 ;
let y = "5" ;
let z = x == y ;
    console.log(" equal to ( == ) : " + z);
let w = x === y ;
    console.log(" equal to ( === ) : " + w);
}

//not equal	( ! )
console.log(" ");
{
let x = 5 ;
let y = "10" ;
let z = x != y ;
    console.log(" not equal  ( != ) : " + x);
let w = x !== y ;
    console.log(" not equal  ( !== ) : " + w);
}


//greater than	( > ), less than ( < ) 	 
console.log(" ");
{
let x = 5 ;
let y = 10;
let z = x > y;
    console.log(" greater than ( > ) : " + z )
let w = x < y;
    console.log(" greater than ( < ) : " + w )
}

// greater than or equal to >=, 	less than or equal to <=

console.log(" ");
{
let x = 15 ;
let y = 10;
let z = x >= y;
    console.log(" greater than ( >= ) : " + z )
let w = x <= y;
    console.log(" greater than ( <= ) : " + w )
}




//JavaScript Logical Operators
//logical and
console.log(" ");
{
let x = 10 ;
let y = 20 ;
let z = x + y  && x - y ;
    console.log(" Logical and ( && ) : " + z);
}


//logical or
console.log(" ");
{
let x = 10 ;
let y = 20 ;
let z = x + y  || x - y ;
    console.log(" Logical or ( || ) : " + z);
}
