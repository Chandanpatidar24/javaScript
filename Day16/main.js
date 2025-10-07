/*
----------------------------------
 Mini Task 1: Rounding Numbers
----------------------------------
*/

console.log("Mini Task 1:");
console.log(Math.round(5.6789)); // 6 (nearest integer)
console.log(Math.ceil(5.6789));  // 6 (round up)
console.log(Math.floor(5.6789)); // 5 (round down)
console.log(Math.trunc(5.6789)); // 5 (remove decimal)
console.log("----------------------------------");


/*
----------------------------------
 Mini Task 2: Math.sign()
----------------------------------
*/

console.log("Mini Task 2:");
console.log(Math.sign(-20)); // -1 → Negative
console.log(Math.sign(20));  // 1 → Positive
console.log(Math.sign(0));   // 0 → Zero
console.log("----------------------------------");


/*
----------------------------------
 Mini Task 3: Math.pow()
----------------------------------
*/

console.log("Mini Task 3:");
console.log(Math.pow(4, 2)); // 16
console.log(Math.pow(9, 3)); // 729
console.log(Math.pow(2, 5)); // 32
console.log("----------------------------------");


/*
----------------------------------
 Mini Task 4: Math.random()
----------------------------------
*/

console.log("Mini Task 4:");

// Random number between 0 and 10 (float)
console.log(Math.random() * 10);

// Random number between 0 and 100 (float)
console.log(Math.random() * 100);

// Random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// Random integer between 1 and 100
console.log(Math.floor(Math.random() * 100) + 1);
console.log("----------------------------------");


/*
----------------------------------
 Mini Task 5: Trigonometric Methods
----------------------------------
*/

console.log("Mini Task 5:");

// Convert degrees to radians: degrees * Math.PI / 180
console.log(Math.sin(0 * Math.PI / 180));   // 0
console.log(Math.cos(0 * Math.PI / 180));   // 1

console.log(Math.sin(30 * Math.PI / 180));  // 0.5
console.log(Math.cos(60 * Math.PI / 180));  // 0.5
console.log("----------------------------------");


/*
----------------------------------
 Mini Task 6: Logarithms
----------------------------------
*/

console.log("Mini Task 6:");
console.log(Math.log(10));     // Natural log (base e)
console.log(Math.log2(8));     // Base 2 logarithm → 3
console.log(Math.log10(100));  // Base 10 logarithm → 2
console.log("----------------------------------");
