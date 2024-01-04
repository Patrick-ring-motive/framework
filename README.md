# 𝕁𝕒𝕧𝕒𝕩𝕊𝕔𝕣𝕚𝕡𝕥

# Introduction
JavaxScript is a library that provides a set of utility functions to enable faster front end development. In particular it provides a way to write declarative code that is straightforward and not necessarily coupled to the UI or JSX. There are also a multitude of helper functions and general shortcuts for our convenience. 

# `Q` and `$Q`

## Introduction
- `Q` is a utility function for safely executing a function and returning its result, or `undefined` if an error occurs.
- `$Q` is the asynchronous counterpart to `Q`, designed for handling async functions or promises.

## Syntax
```javascript
Q(functionOrValue)
$Q(asyncFunctionOrPromise)
```
## Parameters
- `functionOrValue (Q)`: A function to execute or a value to return.
- `asyncFunctionOrPromise ($Q)`: An async function to execute or a promise to resolve.
## Return Value
- For `Q`: The return value of the executed function, or undefined in case of an error.
- For `$Q`: The resolved value of the promise or async function, or undefined in case of an error or rejection.
## Error Handling
Both `Q` and `$Q` return undefined when encountering an error, providing a safe and concise way to handle exceptions.

## Examples
Using `Q`
```javascript
let result = Q(() => mightFailFunction());
console.log(result); // Outputs the function's return value or undefined
```

## Using `Q` with a Value
```javascript
let value = 'example';
let result = Q(value); // Simply returns the value
console.log(result);
```
## Using `$Q` with an Async Function
```javascript

let fetchData = async () => {
  let response = await fetch('https://api.example.com/data');
  return response.json();
};

let result = await $Q(fetchData);
console.log(result); // Outputs fetched data or undefined on error
```
## Using $Q with a Promise
```javascript
let promise = fetch('https://api.example.com/data').then(res => res.json());
let result = await $Q(promise);
console.log(result); // Outputs fetched data or undefined on error
```
These functions are especially useful for reducing the need for repetitive try-catch blocks and for simplifying error handling in both synchronous and asynchronous operations.


# Pointers

## Introduction
The `ptr` function is designed to emulate pointers in JavaScript. It creates a sealed object that acts as a reference to another object, allowing for pointer-like behavior.

## Syntax
```javascript
ptr(object)
```
## Parameters
- `object`: The object to which you want to create a pointer.
## Return Value
Returns a sealed object with a single property `*` that references the passed object. This object acts like a pointer to the original object.

## Description
`ptr` creates an object with no prototype (using `Object.create(null)`) and assigns the provided object to a property named `*`. It then seals the new object using `Object.seal`, preventing new properties from being added to it and existing properties from being removed, effectively making it a read-only reference to the original object.

This function is useful for scenarios where you want to ensure that multiple parts of your code are referring to and modifying the same object, emulating pointer-like behavior found in other programming languages.

##Example
```javascript

let originalObject = { key: 'value' };
let pointerToObject = ptr(originalObject);

console.log(pointerToObject['*']); // Outputs: { key: 'value' }
originalObject.key = 'newValue';
console.log(pointerToObject['*']); // Outputs: { key: 'newValue' }
```
In this example, `pointerToObject` acts as a pointer to `originalObject`. Any changes made to `originalObject` are reflected when accessing `pointerToObject['*']`.

# Enhanced Console Functions


# `console.detail`

## Introduction
`console.detail` is a custom logging function that enhances the display of primitive values and objects in the Chrome Developer Console. It attaches a log method to the object's prototype and then executes it, causing primitives to display as full JavaScript objects.

## Syntax
```javascript
console.detail(item)
```
## Parameters
- `item`: The item to log. Can be a primitive value, object, or any JavaScript entity.
## Behavior
In the Chrome Developer Console, this function changes the way primitives and objects are logged, showing them as full JavaScript objects instead of the standard primitive representation. This can be useful for debugging or inspecting values in detail.

##Example
```javascript
console.detail(5); // Enhanced display of the primitive value '5'
let obj = { key: 'value' };
console.detail(obj); // Enhanced display of the object
console.list
```

# `console.list`

## Introduction
`console.list` is a function that logs items as elements of an array. This alters their representation in the Chrome Developer Console, particularly for HTML elements, displaying them as JavaScript objects rather than showing their outerHTML.

## Syntax
```javascript
console.list(...items)
```
## Parameters
- `...items`: A spread of items to log. Each item is treated as an element of an array.
## Behavior
This function is particularly useful for examining HTML elements in the Developer Console, as it provides a different view from the default logging behavior, showing them more like JavaScript objects.

## Example
```javascript
let elem = document.createElement('div');
console.list(elem); // Logs the HTML element in an array, displaying it as a JavaScript object
```
These enhanced console functions offer alternative ways of viewing and debugging data in the Chrome Developer Console, providing more insights into the structure and state of the logged items.


# `Element.prototype.updateAttribute` Function

## Introduction
`Element.prototype.updateAttribute` is an extension to the DOM Element prototype. It optimizes the process of updating an element's attribute by checking if the attribute's current value is different from the new value. This avoids unnecessary DOM updates, which can be computationally expensive.

## Syntax
```javascript
element.updateAttribute(attributeName, value)
```
## Parameters
- `attributeName`: The name of the attribute to update.
- `value`: The new value to set for the attribute.
## Description
This function first checks if the element already has the specified attribute with the desired value. If the attribute does not exist or its value differs from the provided value, `updateAttribute` updates the attribute accordingly. This approach can prevent needless re-rendering or layout recalculations in the browser, leading to better performance, especially in complex DOM structures.

## Usage
This method is particularly useful in scenarios where attributes might be frequently updated based on user interactions or data changes, and you want to minimize the impact on performance.

## Example
```javascript
let myElement = document.getElementById('myElement');
myElement.updateAttribute('data-status', 'active');
```
In this example, `updateAttribute` will only set the `'data-status'` attribute to `'active'` if it's not already set to this value, preventing unnecessary DOM operations.

This function can be a valuable addition to any front-end toolkit, particularly in applications with dynamic content where attributes of DOM elements are frequently updated.

# Forward Piping Operator-like Function (X) Documentation
## Introduction
This library introduces a method named X on several built-in JavaScript prototypes, including `Function`, `String`, `Array`, `Boolean`, `Number`, `BigInt`, `Symbol`, `Node`, `Window` and `Map`. This method emulates the behavior of a forward piping operator, allowing values to be piped into functions for streamlined processing.

## Syntax
```javascript
value.X(function, ...additionalArguments)
```
## Parameters
- `function`: The function to which the value should be piped. The value upon which X is called becomes the first argument of this function.
additionalArguments: Optional. Additional arguments to pass to the function.
Description
The `X` method enables a functional style of coding where operations can be chained in a readable and expressive manner. It effectively allows the value of the object to be passed as the first argument to the provided function, along with any additional arguments.
This method is inspired by the proposed forward piping operator in JavaScript and provides similar functionality in a method form.
## Usage
Common use cases include chaining transformations, computations, or any operations where a value needs to be passed through a series of functions.

## Example
```javascript
let result = "Hello, World!".X(s => s.toUpperCase()).X(s => s.split(","));
console.log(result); // Outputs: ["HELLO", " WORLD!"]

let sum = [1, 2, 3].X(arr => arr.reduce((a, b) => a + b, 0));
console.log(sum); // Outputs: 6
```
## Forward Piping Operator-like Function (`X`)

The `X` method extends several JavaScript prototypes to enable a functional, expressive style of chaining operations. It allows values to be piped forward into functions, emulating a forward piping operator.

### Syntax
The general form is `value.X(function, ...additionalArguments)`, where `value` is the value to be piped forward.

### Supported Types
This functionality is added to `Function`, `String`, `Array`, `Boolean`, `Number`, `BigInt`, `Symbol`, `Node`, `Window`, and `Map` prototypes.

### Example Usage
```javascript
// Using `X` with a string
let upperCasedAndSplit = "Hello, World!".X(s => s.toUpperCase()).X(s => s.split(","));
console.log(upperCasedAndSplit); // ["HELLO", " WORLD!"]

// Using `X` with an array
let sum = [1, 2, 3].X(arr => arr.reduce((a, b) => a + b, 0));
console.log(sum); // 6
This method opens up a more functional approach to JavaScript coding, allowing for cleaner and more intuitive code, especially in scenarios involving multiple transformations or operations on a single value.
```
# Asynchronous Forward Piping Operator-like Function ($X)
## Introduction
`$X` extends the concept of `X` to handle asynchronous operations. It allows values to be piped into asynchronous functions, facilitating a functional style with promises and async operations.
## Syntax
```avascript
asyncValue.$X(asyncFunction, ...additionalArguments)
```
## Parameters
- `asyncFunction`: An async function or a function that returns a promise.
- `additionalArguments`: Optional. Additional arguments to pass to the async function.
## Usage
Ideal for chaining asynchronous operations, such as API calls, file operations, or any promise-based logic.
## Example
```javascript
let fetchData = async url => fetch(url).then(res => res.json());
let processData = async data => { /* ... processing ... */ };

fetchData('https://api.example.com/data').$X(processData).then(processedData => {
    console.log(processedData);
});
```
# Fetch API Extensions Documentation
## Introduction
These set of functions extend the native Fetch API, simplifying error handling and response processing. They provide a more robust way to work with fetch requests, handling common use cases and errors gracefully.

## `safeFetch`
- Purpose: Enhances fetch by handling errors and returning a custom response when exceptions occur.
- Usage: Replace fetch with safeFetch for added error handling.
## Example:
```javascript
let response = await safeFetch('https://api.example.com/data');
if (!response.ok) {
  // Handle custom error response
}
```
## `fetchResponseText`
- Purpose: Retrieves the full response body as text along with the original response object.
- Usage: Use when you need both the response object and its text content.
## Example:
```javascript
let res = await fetchResponseText('https://api.example.com/data');
console.log(res.fullBody); // Full text of the response
```
## `fetchText`
- Purpose: A shorthand function to directly fetch the response body as text.
- Usage: Use for quickly retrieving text content.
## Example:
```javascript
let text = await fetchText('https://api.example.com/data');
console.log(text);
```
## `fetchResponseArrayBuffer`
- Purpose: Retrieves the full response body as an ArrayBuffer along with the original response object.
- Usage: Useful for binary data like images or files.
## Example:
```javascript
let res = await fetchResponseArrayBuffer('https://api.example.com/file');
// Use res.fullBody as ArrayBuffer
```
## `fetchArrayBuffer`
- Purpose: A shorthand function to directly fetch the response body as an `ArrayBuffer`.
- Usage: Streamlines fetching binary data.
## Example:
```javascript
let arrayBuffer = await fetchArrayBuffer('https://api.example.com/file');
// Process ArrayBuffer
```
