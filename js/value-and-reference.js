// let number1 = 1;
// let number2 = number1;

// number1 += 10;


// console.log(number1);
// console.log(number2);


// let student1 = {id:1};
// let student2 = student1;

// student1.id = 2;

// console.log(student1);
// console.log(student2);

// let arr = [1];
// let arr2 = arr;

// // arr.push(5);
//  arr = [1, 2]
// console.log(arr);
// console.log(arr2);

const h1 = [1];
const h2 = h1;

const h3 = structuredClone(h1);
h1.push(2);
console.log(h1);
console.log(h2);
console.log(h3);
