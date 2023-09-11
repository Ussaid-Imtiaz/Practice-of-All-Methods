import { join } from "path";

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

//                     array  method  previous     curent        type        if                          then          else                 initial           
const largestNumber = numbers.reduce((previousValue, currentValue) => (currentValue > previousValue ? currentValue : previousValue), numbers[0])

// console.log(largestNumber)


const numbers1 = [8, 17, 42, 99, 23, 12, 6];

// Your task is to calculate the sum of even numbers here

const sumOfEvenNumbers = numbers1.reduce((accumulator, currentValue) => (currentValue % 2 === 0 ? accumulator + currentValue : currentValue), 0)
// console.log(sumOfEvenNumbers)

const fruits = ["apple", "banana", "orange", "banana", "kiwi", "apple"];

// Your task is to remove duplicates here

const removeDuplicates = fruits.filter((value, index, array) => array.indexOf(value) === index)
console.log(removeDuplicates);

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

// Your task is to flatten the nested array here

const flatArray = nestedArray.flat(Infinity)
console.log(flatArray);

