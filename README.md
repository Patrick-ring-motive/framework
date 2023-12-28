# **JavaxScript**

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

# `ptr` Function Documentation

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

# Enhanced Console Functions Documentation

## `console.detail`

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

## `console.list`

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
