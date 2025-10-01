// 1. Create an array
const basket = ["Apple", "Banana", "Mango", "Orange"];  

// 2. Length
console.log("Length:", basket.length);

// 3. Access element
console.log("Second fruit with at():", basket.at(1));
console.log("Second fruit with []:", basket[1]);

// 4. Add Kiwi at end and Lemon at beginning
basket.push("Kiwi");
basket.unshift("Lemon");
console.log("After push & unshift:", basket);

// 5. Remove first and last
let lastRemoved = basket.pop();
let firstRemoved = basket.shift();
console.log("Removed last fruit:", lastRemoved);
console.log("Removed first fruit:", firstRemoved);
console.log("Basket after removals:", basket);

// 6. Convert to string
console.log("toString():", basket.toString());

// 7. Join with |
console.log("join('|'):", basket.join(" | "));

// 8. CopyWithin (replace last 2 with first 2)
console.log("copyWithin:", basket.copyWithin(2, 0));

// Reset basket for next tasks
const basket2 = ["Apple", "Banana", "Mango", "Orange"];

// 9. Slice middle fruits
let sliced = basket2.slice(1, 3);
console.log("Slice (middle fruits):", sliced);

// 10. Splice (remove 1 fruit from middle, add Pineapple)
basket2.splice(2, 1, "Pineapple");
console.log("After splice:", basket2);

// 11. Flatten nested baskets
const nestedBaskets = [["Apple", "Banana"], ["Mango", "Orange"]];
console.log("Flattened:", nestedBaskets.flat());
