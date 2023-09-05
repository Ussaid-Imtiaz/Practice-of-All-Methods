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
//============== Non-Mutating Methods does not change the original array ============================
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
let numArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let numArr2 = [6, 7, 8, 9, 10, 11, 12];
const commonItems = numArr1.filter(item => numArr2.indexOf(item) !== -1);
// console.log(commonItems)             //      [ 6, 7, 8 ]
const uncommonItems = numArr1.filter(item => numArr2.indexOf(item) == -1).concat(numArr2.filter(item => numArr1.indexOf(item) == -1));
// console.log(uncommonItems)      //      [1,  2,  3,  4, 5, 9, 10, 11, 12]
// const numArr1 = [1, 2, 3];
// const numArr2 = [2, 3, 4, 5];
// const uncommonItems = numArr2.filter((item) => !numArr1.includes(item));
// console.log(uncommonItems); // Output: [4, 5]
let mapArr = numArr2.map(value => value * 2);
// console.log(mapArr)         //      [12, 14, 16, 18, 20, 22, 24]
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
console.log("Result:", everyArr2);
const numbers = [2, 4, 6, 8, 10];
// Check if all numbers are even and greater than the previous number
const allMatch = numbers.every((number, index, array) => {
    if (index === 0) {
        return true; // The first number always matches the condition
    }
    return number % 2 === 0 && number > array[index - 1];
});
console.log('Result:', allMatch); // Output: true
export {};
