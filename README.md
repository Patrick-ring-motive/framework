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
- functionOrValue (Q): A function to execute or a value to return.
- asyncFunctionOrPromise ($Q): An async function to execute or a promise to resolve.
## Return Value
- For Q: The return value of the executed function, or undefined in case of an error.
- For $Q: The resolved value of the promise or async function, or undefined in case of an error or rejection.
## Error Handling
Both Q and $Q return undefined when encountering an error, providing a safe and concise way to handle exceptions.

## Examples
Using Q
```javascript
let result = Q(() => mightFailFunction());
console.log(result); // Outputs the function's return value or undefined
```

## Using Q with a Value
```javascript
let value = 'example';
let result = Q(value); // Simply returns the value
console.log(result);
```
## Using $Q with an Async Function
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
