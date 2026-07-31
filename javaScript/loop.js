// let names = ["lina", "sara", "mohamed", "ahmed", "yousef"];
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// let i = 0;

// do {
//   console.log('what is that?');
//   i++;
// } while (i < 0);

// for each loop
// Array.array.forEach(function(currentValue,index){
  // condictions or logics
// });

// let list = ['phone', 'laptop','ipad']
// list.forEach(function())


' ========================================================='

// for loop
// for(let a = 1; a <= 20; a++){
//     console.log(`Number ${a}`)
// }

// for(let x = 10; x >= 2; x--){
//     console.log(x)
// }

// using loop, iterate in ascending order from 20 to 30
// for(let a = 30; a >= 20 ; a--){
//     console.log(a)
// }

// for(let z = 10; z <= 100; z+=10){
//     console.log(z)
// }

// let studentNames = ['Kamso', 'Dami', 'Chidera', 'Nelius', 'Harmony']
// for(let i = 0; i < studentNames.length; i++){
//     if(i == [3]){
//         console.log(`Hello ${studentNames[i]}`)
//         break
//         continue
//     }
//     console.log(studentNames[i])
// }

// WHILE
// let b = 0;
// while(b <= 10){
//     console.log(b)
//     b++
// };


// let studentNames = ['Kamso', 'Dami', 'Chidera', 'Nelius', 'Harmony']
// let i = 0;
// while( i < studentNames.length){
//         console.log(studentNames[i])
//      i++
// }

// let students = ['Kamso', 'Dami', 'Chidera', 'Nelius', 'Harmony']
// let searchName = prompt('Enter Name');
// let i = 0;
// let found = false;

// while(i < students.length &&! found){
//     if(students[i] === searchName){
//         console.log(searchName + " is in the class");
//         found = true;
//     }
//     i++;
// }
//  if(!found) console.log("Student not found");


// DO WHILE LOOP
// let i = 0;
// do{
//     console.log(i);
//     i++
// } while(i < 5)

    // forEach Loop

// Array.forEach(function(currentValue, index){
//     condition
// })

// var shopCart = ['Laptop', 'Mouse', 'iphone', 'Keyboard', 'headset']
// shopCart.forEach(function(gadget, index){
//     console.log(`${index}: ${gadget}`)
// })

// const Numbers = [1,2,3,4,5];
// Numbers.forEach(function(Ezikel){
//     console.log(Ezikel * 10)
// });

// const cart = [
//     {name: "Laptop", price: 200000},
//     {name: "Mouse", price: 5000},
//     {name: "Headphone", price: 20000}
// ]
// cart.forEach(function(gadgets, index){
//     // console.log(`${gadgets.price} ${gadgets.name}`)
//     console.log(`${gadgets.price}`)
// })

// Map Loop
// const cart = [
//         {name: "Laptop", price: 200000},
//     {name: "Mouse", price: 5000},
//     {name: "Headphone", price: 20000}
// ]
//  const disCountedCart = cart.map(function(Gadgets){
//     return{
//         price: Gadgets.price * 2,
//         name: Gadgets.name
//     };
//  });
//  console.log(disCountedCart)

let studentNames = ["Kamsi", "Harmony", "Mazeed", "Comfort"]
let updatedNames = studentNames.map(function(name){
    if(name === "Comfort"){
        return "Marita";
    }
    return name;
});
console.log(updatedNames);
