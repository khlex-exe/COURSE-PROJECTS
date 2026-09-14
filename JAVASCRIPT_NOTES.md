# 📘 JavaScript Full Study Notes
> Based on your course exercises. Everything you need to revise before exams.

---

# Table of Contents
1. [Variables](#1-variables)
2. [Data Types & `typeof`](#2-data-types--typeof)
3. [Input / Output](#3-input--output)
4. [Operators](#4-operators)
5. [If / Else If / Else](#5-if--else-if--else)
6. [Switch Statements](#6-switch-statements)
7. [Loops](#7-loops)
8. [Arrays](#8-arrays)
9. [Math Object](#9-math-object)
10. [Functions](#10-functions)
11. [Objects & `this`](#11-objects--this)
12. [DOM Manipulation](#12-dom-manipulation)
13. [Form Handling](#13-form-handling)
14. [Quick Cheat Sheet](#14-quick-cheat-sheet)
15. [Common Mistakes](#15-common-mistakes)

---

# 1. Variables

There are **3 ways** to declare a variable: `let`, `var`, and `const`.

## `let` — Use this 90% of the time
```js
let x = 5;
x = 20;          // ✅ reassignment allowed
let x = 30;      // ❌ ERROR — can't redeclare with let in same scope
```
- **Block scoped** — only exists inside `{ }`
- Can be reassigned but NOT redeclared
- This is the modern standard

## `const` — For values that don't change
```js
const PI = 3.14;
PI = 3.14159;    // ❌ ERROR — can't reassign a const
```
- Must be assigned a value immediately: `const x;` → ❌ ERROR
- **Block scoped** like `let`
- Use for things that should never change (configs, API URLs, etc.)

## `var` — The old way (avoid it)
```js
var y = 6;
var y = 20;      // ✅ no error — var lets you redeclare!
console.log(y);  // 20 (takes the second one)
```
- **Function scoped** (not block scoped — behaves weirdly)
- Can be redeclared AND reassigned
- Known for causing bugs — prefer `let`/`const`

### Key Differences Table

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Redeclare? | ✅ Yes | ❌ No | ❌ No |
| Reassign? | ✅ Yes | ✅ Yes | ❌ No |
| Scope | Function | Block | Block |
| Hoisted? | ✅ Yes (undefined) | ✅ Yes (TDZ) | ✅ Yes (TDZ) |
| Use now? | No | Yes | Yes (when not reassigned) |

> **TDZ = Temporal Dead Zone** — `let`/`const` are hoisted but you can't access them before declaration. `var` is hoisted AND accessible (as `undefined`), which causes bugs.

---

# 2. Data Types & `typeof`

JavaScript has **7 primitive types**:

```js
let num = 100;            // number
let price = 12.99;        // number (no separate float/double like C++)
let name = "khaled";      // string
let initial = 'A';        // string (single or double quotes, same thing)
let student = true;       // boolean
let nothing = null;        // null (intentional empty)
let notDefined;            // undefined (declared but no value)

console.log(typeof num);      // "number"
console.log(typeof name);     // "string"
console.log(typeof student);  // "boolean"
console.log(typeof nothing);  // "object" ← known JS bug, null is NOT an object
console.log(typeof notDefined);// "undefined"
```

### Important notes:
- `typeof` returns a **string**: `typeof x` returns `"number"`, `"string"`, etc.
- `null` returns `"object"` — this is a legacy bug in JS, just remember it
- Numbers and decimals are **both** `number` type (unlike C++ with int/double)
- Strings in JS can use `'single'` or `"double"` quotes — they're identical

---

# 3. Input / Output

## Output — 4 ways to display things

```js
// 1. console.log() — best for debugging, shows in browser console (F12)
console.log("hello world");
console.log("the result is " + result);

// 2. alert() — popup box (blocks the page until user clicks OK)
alert("welcome " + name);

// 3. document.write() — writes directly into the HTML page
document.write("hello " + name);
document.write("<br>");              // can write HTML tags too
document.write("<hr>");

// 4. innerHTML — sets the content of an HTML element (covered in DOM section)
```

### When to use which:
- **`console.log()`** → debugging, checking values during development
- **`alert()`** → quick popups, notifications (avoid in real projects)
- **`document.write()`** → quick testing only (destroys existing page content if called after page loads)

## Input — 2 ways to get user input

```js
// 1. prompt() — returns whatever the user typed as a STRING
let age = prompt("enter your age:");
console.log(typeof age);  // "string" even if user typed 25

// Convert to number:
let ageNum = Number(age);
// OR
let ageNum2 = parseInt(age);    // for whole numbers
let priceNum = parseFloat(price); // for decimals

// 2. prompt() with Number() combo (most common pattern)
let num1 = Number(prompt("enter first number"));
let num2 = Number(prompt("enter second number"));
let sum = num1 + num2;
alert("result: " + sum);
```

> ⚠️ **Critical:** `prompt()` ALWAYS returns a string. If you do `prompt() + prompt()` you get concatenation, not addition. Always wrap with `Number()` for math.

---

# 4. Operators

## Arithmetic Operators
```js
let a = 10;
let b = 3;

a + b    // 13    addition
a - b    // 7     subtraction
a * b    // 30    multiplication
a / b    // 3.333... division (JS always returns decimal for division)
a % b    // 1     modulus (remainder)
```

> ⚠️ Division in JS returns decimals: `10 / 2` → `5` (not `5.0`, just `5`), but `10 / 3` → `3.3333...`

## String Concatenation
```js
let first = "hello";
let second = "world";
let result = first + " " + second;  // "hello world"

// When you + a string and a number, the number becomes a string
console.log("5" + 3);   // "53" (string concatenation)
console.log(5 + "3");   // "53"
console.log(5 + 3);     // 8   (actual addition)
```

## Comparison Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `==` | Equal to (loose) | `5 == "5"` → `true` |
| `===` | Equal to (strict — value AND type) | `5 === "5"` → `false` |
| `!=` | Not equal (loose) | `5 != "5"` → `false` |
| `!==` | Not equal (strict) | `5 !== "5"` → `true` |
| `>` | Greater than | `5 > 3` → `true` |
| `<` | Less than | `5 < 3` → `false` |
| `>=` | Greater or equal | `5 >= 5` → `true` |
| `<=` | Less or equal | `5 <= 3` → `false` |

> **Use `===` (strict) instead of `==` (loose)** to avoid weird type coercion bugs.

## Logical Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `&&` | AND (both must be true) | `age > 18 && age < 65` |
| `\|\|` | OR (at least one true) | `grade > 90 \|\| grade < 20` |
| `!` | NOT (reverses boolean) | `!(age > 18)` |

---

# 5. If / Else If / Else

## Basic Syntax
```js
if (condition) {
    // runs if condition is true
}
else if (condition2) {
    // runs if condition1 is false AND condition2 is true
}
else {
    // runs if ALL conditions above are false
}
```

## Real Example from Your Code
```js
// Grade checker
let grade = prompt("please enter your grade:");

if (grade >= 90) {
    alert("excellent / A");
}
else if (grade < 90 && grade >= 75) {
    alert("very good / B");
}
else if (grade < 75 && grade >= 60) {
    alert("good / C");
}
else if (grade < 60 && grade >= 50) {
    alert("barely passed / D");
}
else if (grade < 50) {
    alert("You failed");
}
else {
    alert("enter valid grades");
}
```

## Login Check Example
```js
let user_name = prompt("enter your username:");
let password = prompt("enter your password:");

if (user_name == 'ahmed' && password == 123) {
    alert("Welcome " + user_name);
}
else if (user_name == 'ali' && password == 789) {
    alert("Welcome " + user_name);
}
else {
    alert("invalid username or password");
}
```

## Age Check with Range Logic
```js
let age = 25;

if (age <= 100 && age >= 75) {
    alert("you are too old for this");
}
else if (age < 75 && age >= 50) {
    alert("you are sooo old");
}
else if (age < 50 && age >= 25) {
    alert("welcome");
}
else if (age < 25) {
    alert("you are too young");
}
else {
    alert("enter a valid age");
}
```

## Ternary Operator (Shorthand for simple if/else)
```js
// Instead of:
if (age >= 18) {
    console.log("adult");
} else {
    console.log("not adult");
}

// Write this:
age >= 18 ? console.log("adult") : console.log("not adult");

// You can also use it for values:
let status = age >= 18 ? "adult" : "minor";
```

---

# 6. Switch Statements

## When to Use
Use `switch` instead of `if/else` when you're checking **one variable** against **many specific values**. Cleaner and easier to read.

## Syntax
```js
switch (expression) {
    case value1:
        // runs if expression === value1
        break;    // ← CRUCIAL! Without break, it falls through to next case
    case value2:
        // runs if expression === value2
        break;
    default:
        // runs if no case matched (like an else)
        break;
}
```

## Day of Week Example
```js
let day = Number(prompt("enter a number for a day"));

switch (day) {
    case 1:
        alert("saturday");
        break;
    case 2:
        alert("sunday");
        break;
    case 3:
        alert("monday");
        break;
    case 4:
        alert("tuesday");
        break;
    case 5:
        alert("wednesday");
        break;
    case 6:
        alert("thursday");
        break;
    case 7:
        alert("friday");
        break;
    default:
        alert("enter valid numbers");
        break;
}
```

## Calculator with Switch
```js
let op = prompt("enter your operator (+ - / *):");
let num1 = Number(prompt("enter 1st number"));
let num2 = Number(prompt("enter 2nd number"));

switch (op) {
    case '+':
        alert(num1 + num2);
        break;
    case '-':
        alert(num1 - num2);
        break;
    case '*':
        alert(num1 * num2);
        break;
    case '/':
        alert(num1 / num2);
        break;
    default:
        alert("choose a valid operator");
}
```

> ⚠️ **Common mistake:** Forgetting `break`. Without it, JS executes ALL cases below the match (called "fall-through").

---

# 7. Loops

## `for` Loop — When you know how many times to repeat
```js
// Syntax: for (initialization; condition; update)

// Print numbers 0-10
for (let i = 0; i <= 10; i++) {
    document.write(i + "<br>");
}

// Print only even numbers (step by 2)
for (let i = 0; i <= 10; i += 2) {
    document.write(i + "<br>");
}

// Print even/odd using modulo
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        document.write(i + " is even<br>");
    } else {
        document.write(i + " is odd<br>");
    }
}
```

### How the for loop works step by step:
```
for (let i = 0; i <= 10; i++)
     ↑             ↑        ↑
  Step 1:      Step 2:    Step 3:
  init i=0     check      increment
               i<=10?     i++ after
               true→run   each loop
               false→stop
```

## `while` Loop — When you don't know how many times
```js
// Syntax: while (condition)

let x = 0;
while (x <= 10) {
    document.write(x + "<br>");
    x++;    // DON'T forget this! or infinite loop
}
```

## `do...while` Loop — Runs at least ONCE
```js
// Syntax: do { } while (condition);

let y = 0;
do {
    document.write(y + "<br>");
    y++;
} while (y <= 10);
```

### Difference between `while` and `do...while`:
```js
// while — might NOT run at all
let a = 100;
while (a < 10) {
    console.log(a);    // never runs because 100 < 10 is false
}

// do...while — runs at least ONCE
let b = 100;
do {
    console.log(b);    // runs once with 100, THEN checks condition
} while (b < 10);
```

## Infinite Loops — Be careful!
```js
// ❌ Infinite loop (never stops, crashes browser)
while (true) {
    console.log("help");
    // no break, no exit
}

// ✅ Use break to exit
while (true) {
    let input = prompt("enter 'quit' to exit:");
    if (input === "quit") break;
}
```

---

# 8. Arrays

## Creating Arrays
```js
// Arrays can hold MULTIPLE types at once
let arr = [8, 9, "hello", true, [8, 9, 3]];
//           ↑  ↑     ↑      ↑      ↑
//        num  num  string  bool   nested array

// Access elements by index (starts at 0, not 1!)
console.log(arr[0]);      // 8
console.log(arr[2]);      // "hello"
console.log(arr[4][2]);   // 3 (inside the nested array, index 2)
console.log(arr.length);  // 5 (total elements)
```

## Iterating Through Arrays
```js
let fruits = ["apple", "banana", "cherry", "date"];

// Method 1: for loop with index
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}

// Method 2: for...of loop (simpler, modern)
for (let fruit of fruits) {
    console.log(fruit);
}
```

## Array Methods (Important ones to know)

```js
let arr = [1, 2, 3];

arr.push(4);           // adds 4 to END → [1, 2, 3, 4]
arr.pop();             // removes LAST element → [1, 2, 3]
arr.unshift(0);        // adds 0 to START → [0, 1, 2, 3]
arr.shift();           // removes FIRST element → [1, 2, 3]
arr.length;            // 3 (number of elements)
arr.includes(2);       // true (is 2 in the array?)
arr.indexOf(2);        // 1 (index of element 2)
arr.reverse();         // reverses the array
arr.join(", ");        // "1, 2, 3" (makes a string)
```

---

# 9. Math Object

The `Math` object has built-in methods you don't need to import.

```js
Math.random()           // random decimal between 0 (inclusive) and 1 (exclusive)
Math.pow(5, 3)         // 5^3 = 125 (5 raised to power 3)
Math.max(90, 20, 60)   // 90 (largest number)
Math.min(90, 20, 60)   // 20 (smallest number)
Math.abs(-5)           // 5 (absolute value, removes negative sign)
Math.round(0.512)      // 1 (normal rounding)
Math.ceil(0.512)       // 1 (always rounds UP)
Math.floor(0.512)      // 0 (always rounds DOWN)
```

## Random Number between any range
```js
// Random number between 1 and 100
let random = Math.floor(Math.random() * 100) + 1;

// Formula: Math.floor(Math.random() * (max - min + 1)) + min

// Example: random number between 1 and 50
let r = Math.floor(Math.random() * 50) + 1;
```

## Practical Example: Prize Machine
```js
let random = Math.floor(Math.random() * 100) + 1;
let guess = Number(prompt("guess a number 1-100:"));

if (guess === random) {
    alert("YOU WIN!");
} else {
    alert("wrong! it was " + random);
}
```

---

# 10. Functions

## Function Declaration
```js
// Basic function
function sayHello() {
    document.write("say hello ");
}
sayHello();  // call it like this

// Function with parameters
function greetUser(firstName, lastName) {
    return "welcome " + firstName + " " + lastName;
}
document.write(greetUser("khaled", "ahmed"));

// Function that returns a value
function add(x, y) {
    return x + y;
    // ⚠️ Everything after return is IGNORED
    console.log("this never runs");  // dead code
}
document.write(add(6, 9));  // 15
```

### Key rules:
- **Parameters** are the variables in the function definition: `(x, y)`
- **Arguments** are the actual values passed when calling: `add(6, 9)`
- `return` sends a value back and **exits the function**
- Code after `return` is **never executed**

## Calculator Using Functions (Your Code)
```js
let op = prompt("choose an operator (+ - * /):");
let num1 = Number(prompt("enter the first number:"));
let num2 = Number(prompt("enter the second number:"));

function calc(num1, num2, op) {
    if (op == "+") {
        return num1 + num2;
    }
    else if (op == "-") {
        return num1 - num2;
    }
    else if (op == "*") {
        return num1 * num2;
    }
    else if (op == "/") {
        return num1 / num2;
    }
    else {
        alert("enter a valid operator");
    }
}

alert(calc(num1, num2, op));
```

## Function Expression (Anonymous function)
```js
// Assigning a function to a variable
let add = function(x, y) {
    return x + y;
};
console.log(add(3, 5));  // 8
```

---

# 11. Objects & `this`

## What are Objects?
Instead of creating 10 separate variables:
```js
let car_name = "kia";
let car_model = 2010;
let car_color = "red";
```

Bundle them into ONE object:
```js
let kia_car = {
    car_name: "kia",        // key: value
    car_model: 2010,
    car_color: "red",
    move: function() {      // methods (functions inside objects)
        return "the car is moving";
    }
};

// Accessing properties:
console.log(kia_car.car_name);       // "kia" (dot notation)
console.log(kia_car["car_color"]);   // "red" (bracket notation)

// Calling a method:
console.log(kia_car.move());  // "the car is moving"
```

## The `this` Keyword
`this` refers to the **current object** that owns the function.

```js
let person = {
    first_name: "khaled",
    second_name: "ahmed",
    full_name: function() {
        return "welcome " + this.first_name + " " + this.second_name;
    }
};

alert(person.full_name());  // "welcome khaled ahmed"
```

### Why use `this`?
- Without `this`, you'd hardcode the property names
- With `this`, the function works for ANY person object

### Prompt-driven Object (Your Code)
```js
let person = {
    first_name: prompt("enter your first name"),
    second_name: prompt("enter your second name"),
    full_name: function() {
        return "welcome " + this.first_name + " " + this.second_name;
    }
};
alert(person.full_name());
```

---

# 12. DOM Manipulation

**DOM = Document Object Model** — the browser's representation of your HTML page as a JavaScript object tree.

## Selecting Elements

```js
// Method 1: getElementById — returns ONE element (fastest)
let element = document.getElementById("mail");

// Method 2: getElementsByTagName — returns array of ALL matching tags
let paragraphs = document.getElementsByTagName("p");  // all <p> tags
let firstP = document.getElementsByTagName("p")[0];   // first <p>

// Method 3: querySelector — returns FIRST match using CSS selectors
let el = document.querySelector(".my-class");      // by class
let el2 = document.querySelector("#my-id");         // by id
let el3 = document.querySelector("div > p");        // by CSS path

// Method 4: querySelectorAll — returns ALL matches
let allP = document.querySelectorAll("p");          // all <p> tags
```

## Changing Styles

```js
// Direct style manipulation
let p = document.getElementsByTagName("p")[0];
let h1 = document.getElementById("h");

// Change background color
document.body.style.backgroundColor = "#1c1919";

// Change text color
p.style.color = "#ffffff";
h1.style.fontSize = "24px";
```

## Dark Mode Toggle Example (Your Code)
```js
// 4thdayjspt2.js
let p = document.getElementsByTagName("p")[0];
let h = document.getElementsByTagName("h1")[0];

function dark() {
    document.body.style.backgroundColor = "#1c1919";
    p.style.color = "#ffff";
    h.style.color = "#ffffff";
}
```

Called from HTML: `<button onclick="dark()">Dark Mode</button>`

## Changing Content

```js
// Change text inside an element
element.innerHTML = "<strong>new content</strong>";  // can include HTML
element.textContent = "new text";                     // plain text only

// Change an attribute
element.src = "new-image.jpg";
element.href = "https://example.com";
```

---

# 13. Form Handling

## Getting Form Values

```js
// 5thdayjs.js — Login form
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");

function submit() {
    if (mail.value == "ahmed@gmail.com" && pass.value == 123) {
        window.location.href = "5thdayjs2.html";  // redirect
    } else {
        alert("please re-enter your email or password correctly");
    }
}
```

### The HTML form:
```html
<form>
    <label for="txt">email</label>
    <input type="email" id="mail">
    <label for="pass">password</label>
    <input type="password" id="pass">
    <div>
        <a href="#" onclick="submit()">submit</a>
        <input type="reset" value="re-enter">
    </div>
</form>
```

## Key Concepts
- `.value` — gets what the user typed in an input field
- `window.location.href = "url"` — redirects to another page
- `<input type="reset">` — clears all form fields
- `onclick="functionName()"` — runs JS function when clicked

---

# 14. Quick Cheat Sheet

```
VARIABLES
  let x = 5;          // mutable, block-scoped
  const x = 5;        // immutable, block-scoped
  var x = 5;          // avoid

INPUT/OUTPUT
  prompt("text")      // input (returns string)
  alert("text")       // popup message
  console.log(x)      // debug output (F12)
  document.write(x)   // write to page

DATA TYPES
  typeof x            // returns: "number", "string", "boolean", "undefined", "object"

CONVERSION
  Number(str)         // string → number
  parseInt(str)       // string → integer
  parseFloat(str)     // string → decimal
  str.toString()      // number → string

MATH
  Math.random()       // 0 to <1
  Math.pow(a,b)       // a^b
  Math.max(a,b,c)     // largest
  Math.min(a,b,c)     // smallest
  Math.abs(-5)        // 5
  Math.round(1.5)     // 2
  Math.ceil(1.1)      // 2 (always up)
  Math.floor(1.9)     // 1 (always down)

DOM
  document.getElementById("id")
  document.getElementsByClassName("class")
  document.getElementsByTagName("p")
  document.querySelector(".class / #id / tag")
  element.style.color = "red"
  element.innerHTML = "text"
  element.textContent = "text"
```

---

# 15. Common Mistakes

| Mistake | Why it's wrong | Fix |
|---------|---------------|-----|
| `prompt() + prompt()` | Concatenates strings, doesn't add | Use `Number()` on both |
| Missing `break` in switch | Falls through to all cases below | Always add `break` |
| `var` redeclaration | No error, silently overwrites | Use `let`/`const` |
| `==` instead of `===` | Type coercion surprises | Prefer `===` |
| Infinite loop in `while` | Never increments counter | Always increment inside loop |
| `typeof null` | Returns `"object"` | It's a known JS bug, just remember |
| `const` object modification | `const` prevents reassignment, not modification | `const arr = [1,2]; arr.push(3)` ✅ works |
| Division by zero | Returns `Infinity`, not error | Check denominator before dividing |
| Accessing index `.length` | Arrays are 0-indexed | Last element is `arr[arr.length - 1]` |

---

# Summary of Your Course Progression

```
Day 1-2  → Variables, data types, I/O, if/else
Day 2    → Switch statements, for/while/do-while loops, calculator
Day 3    → Functions, objects, this keyword
Day 4    → DOM basics, selecting elements, dark mode
Day 5    → Forms, input handling, redirects
```

**What to learn next:**
1. Event listeners (`addEventListener`)
2. Arrow functions (`() => {}`)
3. Template literals (`` `hello ${name}` ``)
4. Array methods (map, filter, reduce)
5. Fetch API (getting data from the internet)

---

*Created: 2026-08-27 | Source: `D:\COURSE PROJECTS\`*
