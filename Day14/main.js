const scores = [45, 67, 89, 67, 32, 89, 100];

// 1. Find the first index of 67
const firstIndex67 = scores.indexOf(67);
console.log(" First index of 67:", firstIndex67);

// 2. Find the last index of 89
const lastIndex89 = scores.lastIndexOf(89);
console.log(" Last index of 89:", lastIndex89);

// 3. Check if the array contains 100
const contains100 = scores.includes(100);
console.log(" Contains 100:", contains100);

// 4. Find the first score greater than 80
const firstAbove80 = scores.find(score => score > 80);
console.log(" First score > 80:", firstAbove80);

// 5. Find the index of the first score less than 40
const firstIndexBelow40 = scores.findIndex(score => score < 40);
console.log(" First index with score < 40:", firstIndexBelow40);

// 6. Find the last score greater than 60 (ES2023+)
const lastAbove60 = scores.findLast(score => score > 60);
console.log(" Last score > 60:", lastAbove60);

// 7. Find the index of the last score equal to 89 (ES2023+)
const lastIndex89Condition = scores.findLastIndex(score => score === 89);
console.log(" Last index of 89:", lastIndex89Condition);
