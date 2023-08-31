// Use splice() to insert two new fruits after the second fruit in an array of fruits.
let fruits=['banana','orange','mango','gooseberry','mango'];
fruits.splice(2,0,"apple","kiwi");
console.log(fruits);
// Given an array of ages, use reduce() to find the average age.
let ages=[10,20,30,40];
let ages1=ages.reduce((a,b)=>(a+b)/4);
console.log(ages1);