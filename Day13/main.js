
// ✅ 1. Double Numbers with map()
const numbers = [1, 2, 3];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled);
// Output: [2, 4, 6]


// ✅ 2. Filter Adults with filter()
const ages = [12, 17, 19, 21, 14];
const adults = ages.filter(function(age) {
  return age >= 18;
});
console.log(adults);
// Output: [19, 21]


// ✅ 3. Shopping Cart Total with reduce()
const prices = [5, 10, 20, 15];
const total = prices.reduce(function(sum, price) {
  return sum + price;
}, 0);
console.log(total);
// Output: 50


// ✅ 4. Check All Pass with every()
const nums1 = [12, 25, 30];
const allGreaterThanTen = nums1.every(function(num) {
  return num > 10;
});
console.log(allGreaterThanTen);
// Output: true


// ✅ 5. Find Even with some()
const nums2 = [4, 6, 8, 12];
const hasEven = nums2.some(function(num) {
  return num % 2 === 0;
});
console.log(hasEven);
// Output: true


// ✅ 6. Flatten and Double with flatMap()
const nums3 = [1, 2, 3];
const flattened = nums3.flatMap(function(num) {
  return [num, num * 2];
});
console.log(flattened);
// Output: [1, 2, 2, 4, 3, 6]


// ✅ 7. Spread Magic
const arr1 = [10, 20];
const arr2 = [30, 40];
const merged = [...arr1, ...arr2];
console.log(merged);
// Output: [10, 20, 30, 40]
