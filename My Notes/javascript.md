# JavaScript Learning Notes

This file documents what I learned in JavaScript from the projects I built so far.

## 1. What JavaScript is
JavaScript is used to make websites interactive. It helps us:
- change page content
- respond to user actions
- create quizzes, timers, calculators, and shopping carts
- store data in the browser

## 2. Variables
Variables store data.

### Ways to declare variables
```javascript
var name = "Nelius";
let age = 20;
const school = "Aptech";
```

### What I learned
- use `let` when the value may change
- use `const` when the value should stay the same
- `var` is older and should be avoided in modern JavaScript

## 3. Data Types
JavaScript has different data types:
- String
- Number
- Boolean
- Array
- Object

```javascript
let name = "Chibuzor";
let age = 18;
let isStudent = true;
let skills = ["HTML", "CSS", "JavaScript"];
let student = { name: "Nelius", age: 18 };
```

## 4. Operators
Operators help us do calculations and comparisons.

### Examples
```javascript
let a = 10;
let b = 5;
console.log(a + b);
console.log(a > b);
```

## 5. String Concatenation
I learned different ways to join strings.

### Using `+`
```javascript
let firstName = "Nelius";
let lastName = "Chibuzor";
let fullName = firstName + " " + lastName;
```

### Using template literals
```javascript
let details = `My name is ${firstName} ${lastName}`;
console.log(details);
```

Template literals are cleaner and easier to read.

## 6. Conditions
Conditions help us make decisions.

### `if` and `else`
```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are still young");
}
```

### `switch`
```javascript
let course = "JS";

switch (course) {
  case "HTML":
    console.log("Learning HTML");
    break;
  case "JS":
    console.log("Learning JavaScript");
    break;
  default:
    console.log("Unknown course");
}
```

## 7. Arrays
Arrays store multiple values in one variable.

```javascript
let students = ["Kamsi", "Dami", "Chidera"];
console.log(students[0]);
```

### Array methods I learned
- `.length`
- `.includes()`
- `.forEach()`
- `.map()`

## 8. Objects
Objects store data in key-value pairs.

```javascript
let student = {
  name: "Marita",
  age: 16,
  course: "Web Development"
};
```

## 9. Loops
Loops help repeat tasks automatically.

### `for` loop
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### `while` loop
```javascript
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}
```

### `forEach` and `map`
These are very useful when working with arrays.

## 10. Functions
Functions help us write reusable code.

```javascript
function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Nelius"));
```

I also learned arrow functions:

```javascript
const add = (a, b) => a + b;
```

## 11. DOM Manipulation
DOM means Document Object Model. It allows JavaScript to change HTML elements on the page.

### Common things I learned
- `document.getElementById()`
- `.innerHTML`
- `.textContent`
- `document.createElement()`
- `.classList.add()` and `.classList.remove()`

```javascript
let heading = document.getElementById("title");
heading.textContent = "New Title";
```

This was important in my DOM and cart projects.

## 12. Events
Events let the page respond to user actions like clicks.

```javascript
button.addEventListener("click", function () {
  alert("Button clicked");
});
```

I used this in:
- quiz app buttons
- stopwatch buttons
- cart add/remove actions

## 13. Timers and Intervals
I learned how to run code after a certain time using `setInterval()`.

```javascript
setInterval(() => {
  console.log("Running every second");
}, 1000);\n```

This was used in the stopwatch and quiz timer projects.

## 14. User Input and Forms
I learned how to collect data from users.

```javascript
let name = prompt("Enter your name");
console.log(name);
```

This was helpful in the quiz login and month detector projects.

## 15. Local Storage
Local storage saves data in the browser.

```javascript
localStorage.setItem("name", "Nelius");
let savedName = localStorage.getItem("name");
```

I used this in the shopping cart project to keep cart items saved.

## 16. Lessons from My Projects

### Variable and logic project
I learned how to:
- declare variables
- use strings and numbers
- combine values
- use conditionals and switch cases

### Function and loop project
I learned how to:
- create functions
- repeat code using loops
- work with arrays and objects

### DOM project
I learned how to:
- access HTML elements
- change content dynamically
- create content with JavaScript

### Quiz app project
I learned how to:
- create a login screen
- manage questions and answers
- keep score
- show results
- use timers and events

### Stopwatch project
I learned how to:
- start, stop, and reset a counter
- use intervals
- update the page display

### Month detector project
I learned how to:
- use objects to store month data
- validate input
- display results based on conditions

### Shopping cart project
I learned how to:
- create product cards dynamically
- add items to the cart
- change quantities
- remove items
- save cart data with local storage

## 17. Important Things I Learned
- JavaScript makes websites interactive.
- `let` and `const` are better than `var` in modern JavaScript.
- Conditions are used for decision-making.
- Loops save time when repeating tasks.
- Functions make code cleaner and reusable.
- DOM manipulation connects HTML and JavaScript.
- Events make webpages respond to users.

## 18. Final Summary
JavaScript is the language that brings life to web pages. Through these projects, I learned the basics of variables, arrays, objects, functions, loops, conditions, DOM manipulation, events, timers, and local storage. This is the foundation for becoming a strong web developer.
