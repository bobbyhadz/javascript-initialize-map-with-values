// EXAMPLE 1 - Initialize a Map with Values from an Array

// ✅ Create a Map from an Array

const map1 = new Map([
  ['name', 'bobby hadz'],
  ['country', 'Chile'],
]);

// 👇️ Map(2) { 'name' => 'bobby hadz', 'country' => 'Chile' }
console.log(map1);

console.log(map1.get('name')); // 👉️ bobby hadz

// ------------------------------------------------------------------

// // EXAMPLE 2 - Initialize a Map with values from an Object

// const obj = {name: 'bobby hadz', country: 'Chile'};

// const map1 = new Map(Object.entries(obj));

// // 👇️ Map(2) { 'name' => 'bobby hadz', 'country' => 'Chile' }
// console.log(map1);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Manually adding values to a Map object

// const map1 = new Map();

// map1.set('name', 'bobby hadz');
// map1.set('country', 'Chile');
// map1.set('age', 30);

// // Map(3) { 'name' => 'bobby hadz', 'country' => 'Chile', 'age' => 30 }
// console.log(map1);

// console.log(map1.get('name')); // 👉️ bobby hadz

// ------------------------------------------------------------------

// // EXAMPLE 4 - Initialize a Map with values from another Map

// const map1 = new Map();

// map1.set('name', 'bobby hadz');
// map1.set('country', 'Chile');
// map1.set('age', 30);

// const map2 = new Map(map1);

// // 👇️ Map(3) { 'name' => 'bobby hadz', 'country' => 'Chile', 'age' => 30 }
// console.log(map2);

// console.log(map2.get('name')); // 👉️ bobby hadz
// console.log(map2.get('country')); // 👉️ Chile
