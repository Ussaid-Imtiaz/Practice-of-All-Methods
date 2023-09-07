const people = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 32 },
  { name: "Carol", age: 27 },
  // ... (more people)
];

// You have an array of objects representing people, and you need to filter out all the people who are older than 30 and then create an array with just their names.

const peopleOver30 = people.filter((item, index, array) => item.age > 30)
// console.log(peopleOver30)       //      [ { name: 'Bob', age: 32 } ]


const numbers = [15, 7, 22, 45, 98, 31, 6];

// Your task is to find the largest number here

const largestNumber = numbers.reduce((previousValue, currentValue) => (currentValue > previousValue ? currentValue : previousValue), numbers[0])

console.log(largestNumber)