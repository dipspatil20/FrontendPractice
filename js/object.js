let std1 ={
    sName : 'dipalee',
    sId : 123,
    is_married : false,
    hobbies : ['Drawing', 'art & craft'],
    scholarship:20000,
    age :Symbol(19)
}
let std2 = {
    sName : 'priti',
    sId: 234,
    is_married : true,
    hobbies:['movie','music'],
    scholarship : 20000,
    age: Symbol(19)

}
// accessing object property- dot notation with key
console.log(std1.hobbies);

console.log(std1);
console.log(std2);

// --------------------------------------------------------------------------

// True -- bcoz we use number datatype to store
console.log(std1.scholarship == std2.scholarship)
// false -- bcoz we use Symbol datatype to store
// Symbol()-- it is orimitive object datatyoe which stores exact same values uniqueli

console.log((std1.age == std2.age));


let value = 25
let value2 = '25'
console.log(value == value2);  //true
console.log(value === value2); //false

// ------------------------------------------------------------------------------------

let emp ={
    Name : 'saurav sir',
    salary : 20000,
    hobbies: ['cricket','sense of humour'],
    add : {
        place : 'jabalpur',
        state : 'UP' 
    }
}
console.log(emp.add.state);

// updating the object property
emp.salary = 30000
emp.add.place = 'Dehli'
console.log(emp);

// deleting object property with delete keyword
delete emp.add.state
console.log(emp);

// adding new key value pair data(property)
emp.subject = 'Python'
console.log(emp);

// ----------------------------------------------------------------------

let s1 = {
    Name : 'Tejas',
    age : 22
}
let s2 = {
    Name : 'Shravan',
    age : 23
}
console.log(Object.keys(s1));
console.log(Object.values(s1));
console.log(Object.entries(s1));

Object.seal(s1);
console.log(Object.isSealed(s1));  // check

delete s1.age  // no delete
s1.marks = 34  // no add
s1.age = 11    // only update done
console.log(s1);

Object.freeze(s2);
console.log(Object.isFrozen(s2));  // check

delete s2.age  // no delete
s2.marks = 34  // no add
s2.age = 11    // no update 
console.log(s2);


let s3 = {
    Name : 'dipali',
    age :23,
    hobbies : {
        indor : 'erer',
        outdor : 'trtr'
    }
}
// ----------------------------------------------------

let e1 = {
    Name : 'dipali',
    salary: 200000,
    add : {
        city: 'pune',
        state:'maharashtra'
    }
}
console.log(e1);
console.log({name:'dipali'} in e1); //no
console.log('dipali' in e1);        // no
console.log('salary' in e1);        //yes

Object.assign(e1,{
    company : 'Google',
    id : 123,
    age : 22
})
console.log((e1));

Object.assign(e1.add,{
    pin : 344643
})
console.log(e1);

// ------------------------------------------------
// ARRAY OF OBJECT

let emps = [
    {
        Name : 'chandana',
        place: 'Amsterdam',
        gender : 'female'
    },
    {
        Name:'gayatri',
        place:'examba',
        gender:'female'
    },
    {
        Name: 'Anuj',
        place:'Mysore',
        gender:'male'
    }
]
console.log(emps);
console.log(emps[0]);

let femaleEmps = emps.filter((ele)=>{
    return ele.gender == 'female'
})
console.log(femaleEmps);

// I WANT ONLY THE NAMES OF EMPLS WHO ARE FEMALE








 









