// 1. By literals

// single value

let name = 'surya'
console.log(name);

// multiple values

let arr = ['dipalee', 'falguni', 'sulu',30,54,87]
console.log(arr);

// accesing single value with index
console.log(arr[0])
console.log(arr[5]);

// inbuild method
console.log(arr.reverse());
console.log(arr.sort());

let festivals = ['ganesh chaturthi','dasara','diwali', 'padava', 'holi', 'pola', 'sankranti']
console.log(festivals);

console.log(festivals[7]);
festivals[8] = 'nagpanchami'
console.log(festivals);

// way 2 - create array
// by new constructor

let food = new Array('puranpoli','idly','basundi', 'khheer', 'jalebi')
console.log(food);

let nums = new Array(4,6,3,7,6,8)
console.log(nums);

let place = new Array('pune')
console.log((place));

// 3 way to create array - by declaring the size

let n1 = new Array(50)
console.log(n1);

n1[10]='dagdusheth'
n1[20] = 'swaminarayan'
n1[40] = 'streets of europe'
n1[60] = 'lavasa'

console.log(n1);




