// 1️ Alphabetic Sort & Reverse
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original Fruits:", fruits);

const sortedFruits = fruits.toSorted();
console.log("Sorted Fruits:", sortedFruits);

const reversedFruits = fruits.toReversed();
console.log("Reversed Fruits:", reversedFruits);

// Original array remains unchanged
console.log("Fruits after toSorted/toReversed:", fruits);


// 2️ Numeric Sort
const numbers = [24, 23, 4, 5, 4, 6, 4, 3];
console.log("\nOriginal Numbers:", numbers);

// Numeric ascending sort
const sortedNumbersAsc = numbers.toSorted((a,b) => a - b);
console.log("Numbers Sorted Ascending:", sortedNumbersAsc);

// Numeric descending sort
const sortedNumbersDesc = numbers.toSorted((a,b) => b - a);
console.log("Numbers Sorted Descending:", sortedNumbersDesc);

// Reverse original numbers
const reversedNumbers = numbers.toReversed();
console.log("Numbers Reversed:", reversedNumbers);

// Original array remains unchanged
console.log("Numbers after toSorted/toReversed:", numbers);


// 3️ Min & Max
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);
console.log("\nMin Number:", minNumber);
console.log("Max Number:", maxNumber);

// Home-made functions
function myArrayMin(arr) {
  let min = Infinity;
  for (let num of arr) if(num < min) min = num;
  return min;
}
function myArrayMax(arr) {
  let max = -Infinity;
  for (let num of arr) if(num > max) max = num;
  return max;
}
console.log("Home-made Min:", myArrayMin(numbers));
console.log("Home-made Max:", myArrayMax(numbers));


// 4️ Random Shuffle (Fisher-Yates)
function shuffleArray(arr) {
  const shuffled = [...arr]; // copy to avoid modifying original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
console.log("\nShuffled Numbers:", shuffleArray(numbers));


// 5️ Sorting Array of Objects
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 }
];
console.log("\nOriginal People:", people);

// Sort by age ascending
const sortedByAge = people.toSorted((a,b) => a.age - b.age);
console.log("People Sorted by Age:", sortedByAge);

// Sort by name alphabetically
const sortedByName = people.toSorted((a,b) => a.name.localeCompare(b.name));
console.log("People Sorted by Name:", sortedByName);


// 6️ Combine Methods Example
const originalNumbers = [10, 2, 8, 5, 3];
const sortedThenReversed = originalNumbers.toSorted((a,b) => a-b).toReversed();
console.log("\nOriginal Numbers:", originalNumbers);
console.log("Sorted then Reversed:", sortedThenReversed);
