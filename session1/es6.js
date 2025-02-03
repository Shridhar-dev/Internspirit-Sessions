// Destructuring
const person = { firstName: "Alice", lastName: "Smith", age: 30 };

const { firstName, age } = person;
console.log(firstName, age);

const newNumbers = [...numbers, 6, 7];
console.log(newNumbers);

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);
