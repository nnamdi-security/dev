# HTML, CSS & JavaScript

---

## HTML

### Class and ID Attributes

The **`class`** attribute is used to identify one or more elements for styling. Unlike the `id` attribute, class names do not need to be unique — multiple elements can share the same class.

The **`id`** attribute adds a unique identifier to an HTML element. Each `id` should be unique within a page and should only be used once.

---

## CSS

### Responsive Web Design

- **Fluid grids** — Use relative units like percentages instead of fixed units like pixels, allowing content to resize and reflow based on screen size.
- **Flexible images** — Set to resize within their containing elements, ensuring they don't overflow their containers on smaller screens.

### Media Queries

Media queries allow developers to apply different styles based on the characteristics of the device, primarily the viewport width.

```css
@media screen and (aspect-ratio: 16/9) {
  /* Styles for screens with a 16:9 aspect ratio */
}

@media screen and (min-resolution: 300dpi) {
  /* Styles for high-resolution screens */
}
```

**Common media features:**

| Feature | Description |
|---|---|
| `orientation` | Indicates whether the device is in landscape or portrait orientation |
| `resolution` | Describes the resolution of the output device in dpi or dpcm |
| `hover` | Tests whether the primary input mechanism can hover over elements |
| `prefers-color-scheme` | Detects if the user has requested a light or dark color theme |

The `and` operator combines multiple media features, while `not` and `only` negate or isolate media queries.

---

### Flexible Grids with the `fr` Unit

```html
<div class="grid-container">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```

```css
html,
body {
  width: 90%;
  height: 50%;
}

.grid-container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 15px;
  background-color: darkgray;
  height: 100%;
}

.col {
  background-color: darkslateblue;
}
```

`grid-template-columns` sets the size for each column. The `gap` property creates space around each column. The **`fr` unit** is a fractional unit representing a fraction of the available space in the grid container.

---

### The `minmax()` Function

`minmax()` defines the size range for a grid track, specifying the minimum and maximum space a row or column can occupy.

```css
/* This column will always be at least 150px and at most 300px */
grid-template-columns: minmax(150px, 300px);
```

> The advantage of `minmax()` over fixed sizes and `fr` units is greater flexibility, making it ideal for responsive layouts.

---

### The `grid-column` and `grid-row` Properties

These properties specify the horizontal and vertical placement of grid items within a grid layout. Each row and column is bounded by a **start line** and an **end line**.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
  grid-template-rows: repeat(3, 100px); /* 3 equal rows */
  gap: 10px;
}

.grid > div {
  display: grid;
  place-items: center;
  background: crimson;
  color: white;
  font-size: 4rem;
}

.item1 {
  grid-column: 1 / 3;
}
```

### The `grid-template-areas` Property

`grid-template-areas` allows you to name regions of the grid and reference them when placing items, making complex layouts more readable and maintainable.

---

## JavaScript

### Working with Objects

#### What Is an Object?

In JavaScript, an **object** is a fundamental data structure for storing and organizing related data and functionality — like a filing cabinet that holds different folders and documents. The pieces of information stored are called **properties**, which consist of a key and a value.

```js
const exampleObject = {
  propertyName: value,
};
```

Objects are the backbone of JavaScript. Almost everything — arrays, functions, even primitive types in certain contexts — is an object or can be treated as one.

```js
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
```

#### Dot Notation

```js
console.log(person.name); // Alice
console.log(person.age);  // 30
```

#### Bracket Notation

Bracket notation is more flexible — it supports property names that aren't valid JS identifiers, and allows dynamic access via variables.

```js
console.log(person["name"]); // Alice
console.log(person["age"]);  // 30

// Property names with spaces or starting with numbers
const oddObject = {
  "1stProperty": "Hello",
  "property with spaces": "World",
};
console.log(oddObject["1stProperty"]);        // Hello
console.log(oddObject["property with spaces"]); // World

// Dynamic property access
let propertyName = "city";
console.log(person[propertyName]); // Wonderland
```

---

#### Object Destructuring

Destructuring lets you unpack multiple properties from an object into distinct variables in a single statement.

```js
const person = { name: "Alice", age: 30, city: "New York" };
const { name, age } = person;

console.log(name); // Alice
console.log(age);  // 30
```

**Renaming variables during destructuring:**

```js
let { name: personName, age: personAge } = person;
console.log(personName); // Alice
console.log(personAge);  // 30
```

**Default values:**

```js
let { name, age, country = "Unknown" } = person;
console.log(country); // Unknown
```

**Shorthand notation when variable names match property names:**

```js
let name = "Bob";
let age = 25;
let person = { name, age };
console.log(person); // { name: "Bob", age: 25 }
```

```js
function createPerson(name, age) {
  return { name, age };
}
let person = createPerson("Charlie", 35);
console.log(person); // { name: "Charlie", age: 35 }
```

---

#### Removing Properties from an Object

**Using `delete`:**

```js
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer",
};

delete person.job;
console.log(person.job); // undefined
```

**Using destructuring with rest parameters (non-destructive):**

```js
const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York",
};

const { job, city, ...remainingProperties } = person;
console.log(remainingProperties); // { name: "Bob", age: 25 }
```

---

#### Checking If a Property Exists

**`hasOwnProperty()`:**

```js
const person = { name: "Alice", age: 30 };

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job"));  // false
```

**`in` operator:**

```js
const person = { name: "Bob", age: 25 };

console.log("name" in person); // true
```

---

#### Nested Objects and Arrays in Objects

```js
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321",
    },
  },
};

console.log(person.contact.phone.work);          // "098-765-4321"
console.log(person["contact"]["phone"]["work"]); // "098-765-4321"
```

**Accessing arrays inside objects:**

```js
const person = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" },
  ],
};

console.log(person.addresses[1].city); // "Workville"
```

---

#### Primitive vs Non-Primitive Data Types

**Primitives** (numbers, strings, booleans, `null`, `undefined`, symbols) are immutable and stored by value:

```js
let num1 = 5;
let num2 = num1;
num1 = 10;
console.log(num2); // 5
```

**Non-primitives** (objects, arrays, functions) are stored by reference — changes through one reference affect all references:

```js
const originalPerson = { name: "John", age: 30 };
const copiedPerson = originalPerson;
originalPerson.age = 31;
console.log(copiedPerson.age); // 31
```

---

#### Functions vs Object Methods

**Function:**

```js
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"
```

**Method:**

```js
const person = {
  name: "Bob",
  age: 30,
  sayHello: function () {
    return "Hello, my name is " + this.name;
  },
};
console.log(person.sayHello()); // "Hello, my name is Bob"
```

> **Key difference:** Methods are invoked using dot notation on their object (`person.sayHello()`) and can access object properties via `this`. Regular functions operate in their own scope without an implicit object reference.

---

#### The `Object()` Constructor

```js
new Object() // Creates a new empty object

// Without `new`, wraps a primitive in an object
const num = 42;
const numObj = Object(num);
console.log(numObj);        // 42
console.log(typeof numObj); // "object"
```

---

#### The Optional Chaining Operator (`?.`)

Safely access nested properties without throwing an error if an intermediate value is `null` or `undefined`.

```js
// Without optional chaining — throws an error!
console.log(person.address.street); // Uncaught TypeError

// With optional chaining — returns undefined safely
const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere",
    },
  },
};

console.log(user.profile?.address?.street); // "123 Main St"
console.log(user.profile?.phone?.number);   // undefined
```

---

### JSON

**JSON (JavaScript Object Notation)** is a lightweight, text-based, language-independent data format used to exchange data between a server and a web application.

```json
{
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "list of courses": ["Mathematics", "Physics", "Computer Science"]
}
```

> Each key must be wrapped in double quotes.

**Accessing JSON values:**

```js
import data from "./example.json" with { type: "json" };

console.log(data.age);                // dot notation
console.log(data["list of courses"]); // bracket notation (required for keys with spaces)
```

#### `JSON.stringify()` and `JSON.parse()`

```js
// Object → JSON string
const user = { name: "John", age: 30, isAdmin: true };
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"John","age":30,"isAdmin":true}'

// JSON string → Object
const userObject = JSON.parse(jsonString);
console.log(userObject); // { name: "John", age: 30, isAdmin: true }
```

---

### Loops

#### `for` Loop

```js
for (initialization; condition; increment/decrement) {
  // code block
}

for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

#### `for...of` Loop

Best used to loop over **iterables** (arrays, strings).

```js
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

const str = "freeCodeCamp";
for (let char of str) {
  console.log(char);
}
```

#### `for...in` Loop

Best used to loop over the **properties of an object**.

```js
const fruit = {
  name: "apple",
  color: "red",
  price: 0.99,
};

for (const prop in fruit) {
  console.log(fruit[prop]); // apple, red, 0.99
}
```

**Nested `for...in` with type checking:**

```js
function isObject(obj) {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
}

for (const prop in person) {
  if (isObject(person[prop])) {
    for (const nestedProp in person[prop]) {
      console.log(person[prop][nestedProp]);
    }
  } else {
    console.log(person[prop]);
  }
}
```

> ⚠️ Avoid using `for...in` to loop over arrays. Use `for...of`, `forEach`, `map`, `filter`, or `reduce` instead.

---

#### `while` Loop

Runs as long as the condition is `true`. Useful when you don't know how many iterations are needed.

```js
let userInput = prompt("Please enter a number between 1 and 10");

while (isNaN(userInput) || Number(userInput) < 1 || Number(userInput) > 10) {
  userInput = prompt("Invalid input. Please enter a number between 1 and 10.");
}

alert("You entered a valid number!");
```

#### `do...while` Loop

Executes the block **at least once** before checking the condition.

```js
let userInput;

do {
  userInput = prompt("Please enter a number between 1 and 10");
} while (Number(userInput) < 1 || Number(userInput) > 10);

alert("You entered a valid number!");
```

---

#### `break` and `continue`

**`break`** — exits the loop early:

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}
```

**`continue`** — skips the current iteration:

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log(i); // 0, 1, 2, 3, 4, 6, 7, 8, 9
}
```

---

### Strings

#### String Primitive vs String Object

```js
const greeting = "Hello, World!";                     // primitive
const greetingObject = new String("Hello, World!");   // object
console.log(typeof greetingObject); // "object"
```

#### `toString()` Method

Converts a value to its string representation. Accepts an optional **radix** (base 2–36).

```js
const num = 10;
console.log(num.toString());  // "10"
console.log(num.toString(2)); // "1010" (binary)

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

---

### The `Number` Constructor

```js
// With `new` — returns an object
const myNum = new Number("34");
console.log(typeof myNum); // "object"

// Without `new` — returns a primitive number (most common use)
const myNum = Number("100");
console.log(myNum);        // 100
console.log(typeof myNum); // "number"
```

---

### Naming Conventions

Good naming makes code self-documenting.

```js
// Boolean variables — use is, has, can prefixes
let isLoading = true;
let hasPermission = false;
let canEdit = true;

// Functions — start with a verb
function getUserData() { /* ... */ }
function calculateTotal() { /* ... */ }
function validateInput() { /* ... */ }

// Predicate functions — use is, has, can prefixes
function isValidEmail(email) { /* ... */ }
function hasRequiredFields(form) { /* ... */ }

// Getters and setters
function getProductDetails(productId) { /* ... */ }
function setUserPreferences(preferences) { /* ... */ }

// Event handlers
function handleClick() { /* ... */ }
function onSubmit() { /* ... */ }
function keyPressHandler() { /* ... */ }

// Loop variables
for (let i = 0; i < array.length; i++) { /* ... */ }
for (let studentIndex = 0; studentIndex < students.length; studentIndex++) { /* ... */ }

// Arrays — use plural nouns
const colors = ["red", "green", "blue"];
const userNames = ["Alice", "Bob", "Charlie"];
```

---

### Arrays

#### `length` Property and Sparse Arrays

```js
const fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3

// Sparse array (empty slots ≠ undefined)
const sparseArray = [1, , , 4];
console.log(sparseArray.length); // 4

// Create an empty array of fixed length
const emptyArray = new Array(5);
console.log(emptyArray.length); // 5
console.log(emptyArray);        // [,,,,]
```

---

### Closures

A **closure** is a function that retains access to variables in its outer lexical scope, even after the outer function has returned.

```js
function outerFunction(x) {
  let y = 10;
  function innerFunction() {
    console.log(x + y);
  }
  return innerFunction;
}

let closure = outerFunction(5);
closure(); // 15
```

**Creating private variables with closures:**

```js
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Closures capture variables by reference, not by value:**

```js
function createIncrementer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let increment = createIncrementer();
increment(); // 1
increment(); // 2
```

---

### Callback Functions and `forEach`

A **callback function** is passed as an argument to another function and executed after the main function completes.

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number * 2); // 2, 4, 6, 8, 10
});

// Using an arrow function
numbers.forEach((number) => console.log(number * 2));

// All three arguments: element, index, array
numbers.forEach((number, index, array) => {
  console.log(`Element ${number} is at index ${index} in array ${array}`);
});
```

---

### Higher-Order Functions

A **higher-order function** is a function that takes one or more functions as arguments, returns a function, or both.

```js
function operateOnArray(arr, operation) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }
  return result;
}

function double(x) {
  return x * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = operateOnArray(numbers, double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

**Function factories (returning functions):**

```js
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

---

### Array Methods

#### `map()`

Creates a **new array** by applying a function to each element. Does not modify the original.

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]
```

The callback accepts up to three arguments: `element`, `index`, `array`.

---

#### `filter()`

Creates a **new array** with only the elements that pass a test.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Returns empty array if no elements pass
const result = [2, 4, 6, 8].filter((num) => num > 10);
console.log(result); // []

// Filtering objects
const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
];

const youngPeople = developers.filter((person) => person.age < 30);
console.log(youngPeople);
// [{ name: "Alice", age: 25 }, { name: "David", age: 25 }]
```

---

#### `reduce()`

Condenses an array into a **single value** using a reducer function with an accumulator.

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0 // initial value
);
console.log(sum); // 15
```

> If no initial value is provided, `reduce` uses the first element as the accumulator and starts from the second element.

---

#### Method Chaining

Calling multiple methods on the same object in sequence.

```js
const result = " Hello, World! "
  .trim()
  .toLowerCase()
  .replace("world", "JavaScript");

console.log(result); // "hello, JavaScript!"
```

```js
const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20,  type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50,  type: "cash" },
  { amount: 75,  type: "credit" },
];

const totalCreditWithBonus = transactions
  .filter((t) => t.type === "credit")
  .map((t) => t.amount * 1.1)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalCreditWithBonus); // 357.5
```

---

#### `sort()`

Sorts elements **in place** and returns a reference to the sorted array.

```js
// Alphabetical sort (default)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// Numeric sort — requires a compare function
const numbers = [414, 200, 5, 10, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [3, 5, 10, 200, 414]
```

> Without a compare function, `sort()` converts elements to strings and compares UTF-16 code unit values — which produces incorrect results for numbers.

---

#### `every()` and `some()`

```js
// every() — returns true only if ALL elements pass the test
const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // true

// some() — returns true if AT LEAST ONE element passes the test
const mixed = [1, 3, 5, 7, 8, 9];
const hasEven = mixed.some((num) => num % 2 === 0);
console.log(hasEven); // true
```

> Both methods **short-circuit**: `every()` stops at the first `false`, and `some()` stops at the first `true` — which is beneficial for performance on large arrays.
