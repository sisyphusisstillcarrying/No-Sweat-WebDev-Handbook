# JavaScript Crash Course: Master the Basics
Video src 
[JavaScript Crash Course: Master the Basics in One Video](https://youtu.be/htznIeWKgg8?si=XMjZZrGQ0c3aaVqY)


1. Keywords
2. var char let
3. Hoisting
4. Types in JS
5. conditions (if else, else-if)
6. loops (for while)
7. Functions
8. Arguments and Parameters
9. Arrays
10. push pop shift splice


Here's a detailed Markdown guide with notes and sample code for each topic using JavaScript.

---

# 1. Keywords
JavaScript has several reserved keywords that cannot be used as variable names, function names, or identifiers. Some important ones are:

- `var`, `let`, `const` - for declaring variables.
- `if`, `else`, `switch` - for conditions.
- `for`, `while`, `do` - for loops.
- `function` - for declaring functions.
- `return` - to return a value from a function.

**Example:**
```javascript
let name = "John";  // 'let' is a keyword
if (name === "John") {
    console.log("Hello, John!");  // 'if' is a keyword
}
```

---

# 2. `var`, `let`, and `const`

### `var` 
- Declares a variable, with function or global scope (not block-scoped).
- Can be redeclared and reassigned.

### `let`
- Declares a block-scoped variable, which can be reassigned but not redeclared.

### `const`
- Declares a block-scoped, read-only variable. Must be initialized during declaration and cannot be reassigned.

**Example:**
```javascript
var x = 10;  // function or global scope
let y = 20;  // block scope
const z = 30;  // cannot be changed

x = 15;  // works
y = 25;  // works
z = 35;  // error, cannot reassign 'const'
```

---

# 3. Hoisting
Hoisting refers to the process where variable and function declarations are moved to the top of their scope during compilation. Only declarations are hoisted, not initializations.

**Example:**
```javascript
console.log(a);  // undefined, due to hoisting
var a = 5;

console.log(b);  // ReferenceError: b is not defined
let b = 10;
```

---

# 4. Types in JavaScript
JavaScript is a loosely typed language, meaning variables can hold different types of data.

- **Primitive Types**: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`
- **Reference Types**: Objects, Arrays, Functions

**Example:**
```javascript
let str = "Hello";  // string
let num = 42;       // number
let bool = true;    // boolean
let obj = { key: "value" };  // object
let arr = [1, 2, 3];  // array (object)
```

---

# 5. Conditions (`if`, `else`, `else-if`)
Conditional statements allow you to control the flow of execution based on a condition.

**Example:**
```javascript
let age = 18;
if (age < 18) {
    console.log("You are underage.");
} else if (age === 18) {
    console.log("You just turned 18!");
} else {
    console.log("You are an adult.");
}
```

---

# 6. Loops (`for`, `while`)
Loops allow you to repeat blocks of code.

### `for` loop:
**Example:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);  // prints 0, 1, 2, 3, 4
}
```

### `while` loop:
**Example:**
```javascript
let i = 0;
while (i < 5) {
    console.log(i);  // prints 0, 1, 2, 3, 4
    i++;
}
```

---

# 7. Functions
Functions are reusable blocks of code.

**Example:**
```javascript
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice"));  // Output: Hello, Alice
```

---

# 8. Arguments and Parameters
- **Parameters**: Variables listed as part of a function's definition.
- **Arguments**: Values passed to the function when it is called.

**Example:**
```javascript
function add(a, b) {  // a and b are parameters
    return a + b;
}

console.log(add(5, 10));  // 5 and 10 are arguments, Output: 15
```

---

# 9. Arrays
Arrays store multiple values in a single variable.

**Example:**
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);  // Output: Apple
```

---

# 10. `push`, `pop`, `shift`, `unshift`

- **`push`**: Adds an element to the end of an array.
- **`pop`**: Removes the last element from an array.
- **`shift`**: Removes the first element from an array.
- **`unshift`**: Adds an element to the beginning of an array.

**Example:**
```javascript
let arr = [1, 2, 3];

// push
arr.push(4);  // [1, 2, 3, 4]

// pop
arr.pop();  // [1, 2, 3]

// shift
arr.shift();  // [2, 3]

// unshift
arr.unshift(0);  // [0, 2, 3]
```
