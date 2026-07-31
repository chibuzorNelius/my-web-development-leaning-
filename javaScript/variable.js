
// A variable is like a name or tag given to a container that hold values
// Defferant ways to declear a variable
// 1. var =
// 2. const =
// 2. let=

// DECERATION OF VARIABLE
// let firstname = 'Onyeka'
// let lastname = 'Nelius'
// let age = 10
// let countary = 'Nigeria';
/
// let = course = 'JavaScript';

// // concatination of variables(adding more than one veriables together)
// // using + method
// console.log(firstname + ' ' + lastname);
// console.log('my name is ' + firstname + ' ' + lastname);

// // useing concate string method
// console.log`${firstname} ${lastname}`

// // if you want to print all this variable to gether it is beter to wrap them  in a seperat veriable using the concate string method
// let details = `my name is ${firstname} ${lastname}, I'm ${age} years old, and i love ${course}`;
// console.log(details)

//     // Arrays
//     // Array is a way you can wrap many values in a list
// let studentName  = ['kamsi', 'chidera', 'Mazeed']
studentName = prompt('Enter student name');
let ADSE = ['jessy', 'nelius', 'michael'];
let CPISM = ['kamsi', 'chidera', 'Mazeed'];
let WEB_WITH_PYTHON = ['dami', 'marita', 'thim'];

switch (true) {
    case ADSE.includes(studentName):
        alert('Welcome to ADSE');
        break;
    case CPISM.includes(studentName):
        alert('Welcome to CPISM');
        break;
    case WEB_WITH_PYTHON.includes(studentName):
        alert('Welcome to WEB_WITH_PYTHON');
        break;
    default:
        alert('I dont know that course');
        break;
}
// plaese fix the code above, it is not working, i want to check if the student name is in any of the course array and if it is, it should welcome them to that course, if not it should say i dont know that course  jl
