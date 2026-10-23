// // even numbers

// let nums3 = [10,23,45,66,76,89]
// let even3 = nums.filter(
//     (n) => {
//         console.log(n)
//         return n % 2 == 0
//     }
// )
// console.log(even);


// // odd numubers
// let odd = nums.filter(
//     (n) => {
//         return n%2 != 0
//     }
// )
// console.log(odd)


// // greater than
// let greater = nums.filter(
//     (n) => {
//         return n > 45
//     }
// )
// console.log(greater);


// // lesser than
// let lesser = nums.filter(
//     (n) => {
//         return n <= 45
//     }
// )
// console.log(lesser);
// -------------------------------------------------------------------


// // perform 7 types of operation on this array
// ********************************************************

// let arr = [2,3,4,5,'hello','hii','good']

// // 1 - starts with h
// let n1 = arr.filter(
//     (n) => {
//         return n[0] == 'h'
//     }
// )
// console.log(n1)


// // 2 - even num
// let n2 = arr.filter(
//     (n) => {
//         return (n) % 2 == 0
//     }
// )
// console.log(n2);


// // 3 - odd num
// let n3 = arr.filter(
//     n => {
//         return n%2 == 1
//     }
// )
// console.log(n3);


// // 4 - fetch string only
// let n4 = arr.filter(
//     n => {
//         return typeof(n) == 'string'
//     }
// )
// console.log(n4);


// // 5 -  fetch only integer

// let n5 = arr.filter(
//     n => {
//         return typeof(n) == 'number'
//     }
// )
// console.log(n5);


// // 6 - lesser than 
// let n6 = arr.filter(
//     n => {
//         return n<=3
//     }
// )
// console.log(n6);

// // greater than
// let n7 = arr.filter(
//     n => {
//         return n>3
//     }
// )
// console.log(n7);

// ----------------------------------------------------------------------------------------
// ********************** Filter ******************* 

// let names = ['vaishnavi','dhanashreee', 'heer','kranti','tejaswi','vaishnavi']

// function printI(ele){
//     console.log(ele)
//     return ele.endsWith('i')
// }
// let iName = names.filter(printI)
// console.log(iName);


// let iName2 = iName.filter((ele) => {
//     return ele.includes('v')
// })
// console.log(iName2);


// let iName3 = iName.filter((ele) => ele.startsWith('k'))
// console.log(iName3);

// ------------------------------------------------------------------------
// ******************* MAP ************************ 

// let nums = [10,20,45,18,83]

// let plus = nums.map((ele) => {
//     console.log(ele);
//     return ele + 10
// })
// console.log(plus);

// // this gives different output ----> true, false
// let even = plus.map((ele) => ele % 2 ==0)
// console.log(even);

// nums.map((ele, index, nums) => {
//     console.log(`${ele} - ${index} - ${nums}`);
    
// })

//  --------------------------------------------------------------------------
// ************ REDUCE***********************

// let nums = [20,45,90,12,34,67,89]
// let n1 = nums.reduce((a,b) => {
//     return a+b
// })
// console.log(n1);


// ************ REDUCERIGHT ********************

// let nums = [20,45,90,12,34,67,89]
// let newV = nums.reduceRight((a,b)=>{
//     return a-b
// })
// console.log(newV);

// ************ FOREACH ************************

// let nums = [20,45,90,12,34,67,89]
// let sum = 0
// nums.forEach((ele )=> {
//     console.log(sum += ele);
// })

