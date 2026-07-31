//  f

// functions
let students = [
    {name: 'marita', age: 43},
    {name: "joy", age: 16}
]

let k = { name: "joy", age: 16 }
// for(let y in k){console.log(k , y[name])}


for(const student of students){  //(for of loop) is better on arrays or strings
   console.log(student.name,student.age)
}
console.log(students[0].name)

// for(in) is for listing index


function friends(friend1, friend2) {
    const twoFriends = `${friend1} and ${friend2} are friends`;
    return twoFriends;
}


// AROW METHOD FUNCTION
// we can declear a function with an arow(=>) with out calling the function keyword. first fefine your function name, then set the paramither, then add the arow the (=>){}then pass your arguement
const 



// console.log(friends(for()));


//   MAPS
// maps are like arrays and objects [] but declead with the keyword 'new map', an wrapt with perenthsis(). so we can say that it's an array in perenthesuiis()
const names = new map(['name', 'boy'], ['age',32])


// SET 
// set is basicaly like array but decleared with the keyword 'new set()'
let still = new set(['HTML','JS', 'PYTHON','JAVA'])
 let h = names.get('boy')
 console.log(h)



