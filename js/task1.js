// CREATE an 10 array of object (employess) which includes name,age,salary,department, 
// hobbies, palce, eid, company , gender, is_married



let employees = [
    {
        Name: 'Rahul Sharma',
        age: 25,
        salary: 45000,
        dept: 'IT',
        hobbies: ['Reading', 'Cricket'],
        place: 'Pune',
        eid: 121,
        company: 'Infosys',
        gender: 'male',
        is_married: false
    },
    {
        Name: 'Priya Patil',
        age: 28,
        salary: 55000,
        dept: 'HR',
        hobbies: ['Dancing', 'Painting'],
        place: 'Mumbai',
        eid: 122,
        company: 'TCS',
        gender: 'female',
        is_married: true
    },
    {
        Name: 'Amit Deshmukh',
        age: 30,
        salary: 65000,
        dept: 'Finance',
        hobbies: ['Travelling', 'Photography'],
        place: 'Nashik',
        eid: 123,
        company: 'Wipro',
        gender: 'male',
        is_married: true
    },
    {
        Name: 'Sneha Joshi',
        age: 24,
        salary: 40000,
        dept: 'IT',
        hobbies: ['Singing', 'Reading'],
        place: 'Nagpur',
        eid: 124,
        company: 'Accenture',
        gender: 'female',
        is_married: false
    },
    {
        Name: 'Rohit Kulkarni',
        age: 32,
        salary: 75000,
        dept: 'Marketing',
        hobbies: ['Football', 'Travelling'],
        place: 'Delhi',
        eid: 125,
        company: 'Capgemini',
        gender: 'male',
        is_married: true
    },
    {
        Name: 'Pooja Jadhav',
        age: 27,
        salary: 50000,
        dept: 'Sales',
        hobbies: ['Cooking', 'Gardening'],
        place: 'Bengaluru',
        eid: 126,
        company: 'Cognizant',
        gender: 'female',
        is_married: false
    },
    {
        Name: 'Karan Mehta',
        age: 29,
        salary: 60000,
        dept: 'IT',
        hobbies: ['Gaming', 'Cycling'],
        place: 'Hyderabad',
        eid: 127,
        company: 'Tech Mahindra',
        gender: 'male',
        is_married: false
    },
    {
        Name: 'Anjali More',
        age: 26,
        salary: 48000,
        dept: 'HR',
        hobbies: ['Painting', 'Dancing'],
        place: 'Kolhapur',
        eid: 128,
        company: 'HCLTech',
        gender: 'female',
        is_married: true
    },
    {
        Name: 'Vikas Pawar',
        age: 35,
        salary: 85000,
        dept: 'Finance',
        hobbies: ['Swimming', 'Cricket'],
        place: 'Chennai',
        eid: 129,
        company: 'IBM',
        gender: 'male',
        is_married: true
    },
    {
        Name: 'Neha Chavan',
        age: 23,
        salary: 35000,
        dept: 'IT',
        hobbies: ['Writing', 'Travelling'],
        place: 'Aurangabad',
        eid: 130,
        company: 'Deloitte',
        gender: 'female',
        is_married: false
    }
];

console.log(employees);


// 1. extract emps with same age

let result1 = employees.filter((emp) => emp.age === 25);

console.log(result1);

// 2. extraxt emps whose dept is same

let result2 = employees.filter((emp) => emp.dept === 'IT');

console.log(result2);

// 3. increase tha salary by 15% whose having more than 50,000
let result3 = employees.map((emp) => {
    if (emp.salary > 50000) {
        return { ...emp, salary: emp.salary * 1.15 };
    }
    return emp;
});

console.log(result3);

// 4. extract married empls
let result4 = employees.filter((emp) => emp.is_married === true);

console.log(result4);

// 5. extract all male emps and give them hike 25% 
let result5 = employees
    .filter((emp) => emp.gender === 'male')
    .map((emp) => ({
        ...emp,
        salary: emp.salary * 1.25
    }));

console.log(result5);

// 6. extract the all female emps and deduct their by 25% and afterwards increase by 50%
let result6 = employees
    .filter((emp) => emp.gender === 'female')
    .map((emp) => ({
        ...emp,
        salary: emp.salary * 0.75
    }))
    .map((emp) => ({
        ...emp,
        salary: emp.salary * 1.50
    }));

console.log(result6);

// 7. add the experience key to the all emps based on there salary
let result7 = employees.map((emp) => {
    let experience;

    if (emp.salary < 40000) {
        experience = 1;
    } else if (emp.salary < 50000) {
        experience = 2;
    } else if (emp.salary < 70000) {
        experience = 3;
    } else {
        experience = 5;
    }

    return { ...emp, experience: experience };
});

console.log(result7);

// 8. delete all married female employee
let result8 = employees.filter(
    (emp) => !(emp.gender === 'female' && emp.is_married === true)
);

console.log(result8);

// 9. sort the all emps based on thier experience
let result9 = employees
    .map((emp) => {
        let experience;

        if (emp.salary < 40000) {
            experience = 1;
        } else if (emp.salary < 50000) {
            experience = 2;
        } else if (emp.salary < 70000) {
            experience = 3;
        } else {
            experience = 5;
        }

        return { ...emp, experience };
    })
    .sort((a, b) => a.experience - b.experience);

console.log(result9);

// 10. sort the emps in reverse order based on thier ID
let result10 = [...employees].sort((a, b) => b.eid - a.eid);

console.log(result10);
