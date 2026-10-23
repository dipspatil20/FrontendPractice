// slice

let persons = ['anita','meena','seema','leena','aakash','suraj']
console.log(persons);

let girls = persons.slice(0,4)
console.log(girls);

let boys = persons.slice(4)
console.log(boys);

// splice
let place = ['pune', 'nashik', 'dhule', 'shirpur', 'amalner']

// adding array element to teh array
place.splice(3,0,'vapi','bhopal')
console.log(place);

// deleting array element
place.splice(4,1)
console.log(place);

// replacing array element
place.splice(0,2,'maharashtra','gujarat','goa')
console.log(place);

// using nested array
let arr = ['java','python']

let nums = [7,8,9,10,11]
console.log(nums);

nums.splice(0,3,1000,2000,3000)
console.log(nums);

nums.splice(4,0, arr)
console.log(nums);

nums.splice(4,0,arr[1])
console.log(nums);


// nested

let trainers = ['rohit', 'mohith', 'harsha', 'saurav',['python','libraries','django']]

console.log(trainers[4][2]);



let food = ['biriyani','misal','dosa','pavbhaji','idly','idly']
console.log(food);

console.log(food.indexOf("biriyani"));

console.log(food.includes('dosa'));

console.log(food.lastIndexOf('idly'));

console.log(food.sort()); // sort does not work with numbers

let a1 = [7,3,6,3,6,3,6,44,32,74,5]
// console.log(a1.sort((a,b) => a-b));
console.log(a1.sort());

console.log(a1.reverse());
console.log(food.reverse());

let car1 = ['Gwagon','Defender']
let car2 = ['omni','alto']
let car3 = ['rolls royce', 'BMW']

console.log(car1.concat(car2,car3));

console.log(car1.join(' - '));










