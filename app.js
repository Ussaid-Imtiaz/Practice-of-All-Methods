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
// console.log(myArr.indexOf("akram") !== -1);     // flase
// console.log(myArr.indexOf("akram"))             // -1
// console.log(myArr.lastIndexOf("Maryam"))        // 1
let sliceArr = arr2.slice(1, 4);
// console.log(sliceArr);      //      [ 54, 78, 68 ]
// console.log(arr2);          //      [ 1, 54, 78, 68, 98, 45 ]
let toStringArr = arr2.toString();
console.log(toStringArr);
console.log(arr2);
export {};
