// Var
    var x = 10;
        console.log('First var: ' + x);

    var x = 30;  
        console.log('Redeclaration var: ' + x); // Redeclaration is allowed with var   

    x = 50;  
        console.log('Reassignment var: ' + x); // Reassignment is allowed with var 



// Let
    let y = 10; 
        console.log('First let: ' + y);

    // let y = 15; // Redeclaration is not allowed with let 

    y = 20; // Reassignment is allowed with let 
        console.log('Reassignment let: ' + y);



// Const
    const z = 5;
        console.log('Const: ' + z);

// const z = 10; // Redeclaration is not allowed with const 
// z = 20;      // Reassignment is not allowed with const  



// Camel case 
// The first word starts with a lowercase letter,
// and the first letter of each subsequent word is capitalized.
    
let camelCase = 'hello this is "camelCase"';
        console.log(camelCase);


// PascalCase 
// Each word starts with a capital letter, including the first word.
   
let PascalCase = 'hello this is "PascalCase"';
        console.log(PascalCase);


// Snake case
// Words are separated by underscores, and all letters are lowercase.
    
let snake_case = 'hello this is "snake_case"';
        console.log(snake_case);
