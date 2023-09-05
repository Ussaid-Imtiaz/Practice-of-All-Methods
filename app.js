let myArr = ["Ussaid", "Maryam", "Rameen"];
let arr2 = [1, 54, 78, 68, 98, 45];
//============== Mutating Methods change the original array ============================
// let pushArr = myArr.push("Ussaid");
// console.log(pushArr.toString())    //  return index no. 4 as string
// console.log(myArr)  //[ 'Maryam', 'Maryam', 'Rameen', 'Ussaid' ]
// let unshiftArr = myArr.unshift("Imtiaz");
// console.log(unshiftArr.toString())   //  return index no. 5 as string4 as string
// console.log(myArr)          //       [ 'Imtiaz', 'Ussaid', 'Maryam', 'Rameen', 'Ussaid' ]
// let popArr = myArr.pop()
// console.log(popArr?.toLowerCase());  // ussaid as string
// console.log(myArr);  //  [ 'Maryam', 'Maryam', 'Rameen' ]
// let shiftArr = myArr.shift()
// console.log(shiftArr?.toLowerCase());       //      ussaid as string
// console.log(myArr);                         //      [ 'Maryam', 'Rameen' ]
// let reverseArr = arr2.reverse();
// console.log(reverseArr)         //      [ 45, 98, 68, 78, 54, 1 ]
// console.log(arr2)               //      [ 45, 98, 68, 78, 54, 1 ]
// let spliceArr = arr2.splice(1, 2, 100)
// console.log(spliceArr)              //      [ 54, 78 ]              deleted item at index 1=54 & index 2=78
// console.log(arr2)                   //      [ 1, 100, 68, 98, 45 ]  added item at index 1=100
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// console.log(numbers.sort())         //  [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
// const sortNumbers = numbers.sort((a, b) => b - a)
// console.log(numbers);
// console.log(sortNumbers);       //  [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]  sorted in descending order
const fillArr = numbers.fill(5, 3, 5);
console.log(fillArr);
console.log(numbers);
//============== Non-Mutating Methods does not change the original array ============================
let numArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let numArr2 = [6, 7, 8, 9, 10, 11, 12];
let newArr = myArr.concat(arr2); // type casting
// console.log(newArr)   //  ['Maryam', 'Maryam','Rameen', 1,54,78,68,98,45] 
const joinArr = arr2.join("-"); //  does not change the original array
// console.log(joinArr)        //      1-54-78-68-98-45
// console.log(typeof (joinArr))  //    string
let toStringArr = arr2.toString();
// console.log(toStringArr);
// console.log(arr2);
// console.log(myArr.indexOf("akram") !== -1);     // flase
// console.log(myArr.indexOf("akram"))             // -1
// console.log(myArr.lastIndexOf("Maryam"))        // 1
let sliceArr = arr2.slice(1, 4);
// console.log(sliceArr);      //      [ 54, 78, 68 ]
// console.log(arr2);          //      [ 1, 54, 78, 68, 98, 45 ]
const filterArr = arr2.filter((a) => a % 2 === 0 && a > 70);
// console.log(filterArr)          //      [ 78, 98 ]      even numbers greater than 70 filtered
// console.log(arr2)               //      [ 1, 54, 78, 68, 98, 45 ]
const filterArr2 = myArr.filter((word) => word.includes("e"));
// console.log(filterArr2)          //      [ 'Rameen' ]      string with e filtered
// console.log(myArr)               //      [ 'Ussaid', 'Maryam', 'Rameen' ]
const commonItems = numArr1.filter(item => numArr2.indexOf(item) !== -1);
// console.log(commonItems)             //      [ 6, 7, 8 ]
const uncommonItems = numArr1.filter(item => numArr2.indexOf(item) == -1).concat(numArr2.filter(item => numArr1.indexOf(item) == -1));
// console.log(uncommonItems)      //      [1,  2,  3,  4, 5, 9, 10, 11, 12]
const fruits = ['apple', 'banana', 'cherry', 'date'];
let allParametersFilter = fruits.filter((item, index, array) => {
    return item.length > 5 && index % 2 === 0;
});
// console.log(allParametersFilter)         //  ["cherry"]
let mapArr = numArr2.map(value => value * 2);
// console.log(mapArr)                  //      [12, 14, 16, 18, 20, 22, 24]
let reduceArr = numArr1.reduce(function (previousValue, currentValue, currentIndex, array) {
    // console.log(`${previousValue}, ${currentValue}, ${currentIndex}, ${array}`)
    return previousValue + currentValue;
}, 0);
// console.log(reduceArr)        //      36  adds up all the array elements to single num from left to right
let reduceRightArr = numArr2.reduceRight((previousValue, currentValue, currentIndex, array) => {
    // console.log(`${previousValue}, ${currentValue}, ${currentIndex}, ${array}`)
    return currentValue - currentIndex + previousValue;
});
// console.log(reduceRightArr)        //      48  adds up all the array elements to single num from right to left
let everyArr = myArr.every((word, index, array) => {
    return index < 4 && word.length % 2 === 0;
});
// console.log('Result:', everyArr)        //      true
let numArr3 = [2, 4, 6, 8, 10, 12];
let everyArr2 = numArr3.every((num, index, array) => {
    if (index === 0) {
        return true;
    }
    return num % 2 === 0 && num > array[index - 1];
});
// console.log("Result:", everyArr2)       //      true --  if one false found it will return false
const someArr = numArr1.some((value, index, array) => {
    // console.log(`${value}, ${index}, ${array}`)
    return value % 2 === 0; //      true --  if one true found it will return true
});
export {};
// console.log(someArr);
