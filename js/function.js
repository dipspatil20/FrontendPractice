// // named fuction declaration
// task(20,40)
// function task(a,b)
// {
//     console.log("hello im function")
//     console.log(a+b)
// }
// task(10,20)
// task(5,5)
// task()  //NaN- (not an number)  
// task(60)

// // function with or without expected arguments or parameters
// function task2(v1,v2)
// {
//     console.log(v1+v2);    
// }
// task2(20,true)
// task2(10,false)
// task2(true,true)
// task2(30,null)
// task(20,NaN)
// console.log(typeof(NaN))  //number


// //named function
// // template literals or interpolution
// function add(msg,name,age)
// {
//     console.log(`${msg} my name is ${name} and im ${age}`)
// }
// add('Hey!','Dipalee',23)
// add('hii','pooja',18)


// 
// let task = function (){
//     console.log("hi im Function!");
// }
// task()

// {
//     // local scope
// }

// // block scope
// if(true){
//     var place = 'vapi'
// }
// console.log(place);

// // function scope
// function task2(){
//     console.log.apply('hihihihi')
//     let place2 = 'Amalner'
//     console.log(place2);

//     let place3 = 'Shirpur'
//     console.log(place3)
// }

// task2()
// console.log(place3)

// nested function
// lexical scope chain or closure
// accessing the parent funtions property or variable inside child funnciton
// function parent() {
//     let place = 'pune'
//     console.log(place);

//     function child() {
//         console.log('im child');
//         console.log(place);
//         var age = 40
//     }
//     child()
//     // console.log(age); ----> error
// }
// parent()


// Arrow funtion
// shoret syntax
// introduce in ES6 concept
// syntax -->   ()=>{}

// let task = () => {
//     console.log('Patil')
// }
// task()

// let const var----> 
//  1] access before / after
//  2] block scope/ local scope/ global scope/ function scope
//  3] redeclaration and reinitialization
//  ex.
// log(a)
// let a =10    --->error
// console.log(a);

// const a =10