# 𝕁𝕒𝕧𝕒𝕩𝕊𝕔𝕣𝕚𝕡𝕥

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

## Example
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
# Declarative Functions - Enhanced Description

## Introduction
The declarative functions (`declare` and `declareEvaluator`) in this library provide a framework for registering and executing functions reactively. These functions include built-in failsafes to prevent issues like infinite loops and browser blocking, ensuring smooth and efficient operation.

## `declare` Function
### Enhanced Description
The `declare` function adds a given function to a global list of declarations, but only if it hasn't been registered before. This is determined by generating a unique identifier from the function's `toString()` representation. This mechanism prevents duplicate registrations and helps avoid infinite loops caused by repeatedly registering the same function.

## `declareEvaluator` Function
### Enhanced Description
`declareEvaluator` is designed to run asynchronously, periodically invoking all registered functions. To prevent the browser from being blocked by continuous synchronous execution, the function includes the following failsafes:
- **Asynchronous Execution**: By running asynchronously, `declareEvaluator` ensures that the browser's event loop is not monopolized, maintaining the responsiveness of the application.
- **Error Handling**: If an error occurs during the execution of a registered function, `declareEvaluator` calls `await`, temporarily yielding control back to the browser's event loop. This allows other pending operations or events to be processed.
- **Random Intervals**: The evaluator includes a mechanism to throttle its execution at random intervals, further reducing the risk of blocking the browser.

These features make `declare` and `declareEvaluator` suitable for applications requiring dynamic, responsive behavior without compromising on performance and stability.

## Example Usage
```javascript
// Register a function to update DOM elements
declare(() => {
  // DOM update logic here
}, 'updateDOMFunction');

// The evaluator will periodically and reactively invoke this function,
// with built-in safeguards against infinite loops and browser blocking.
```
# Dynamic HTML Attribute Updates
## Introduction
This portion of the library uses the declarative framework to continually update specific HTML attributes. These attributes provide additional information for CSS selectors, enhancing styling capabilities based on the current state of the window or other dynamic conditions.

## Functional Breakdown
Window Location and User-Agent Attributes:

The HTML element is updated with attributes reflecting the current window location (`window.location.href`) and the user agent (`navigator.userAgent`).
These attributes are continuously updated to reflect any changes, like navigation or user-agent alterations.
- Frame Detection:

An attribute framed is set to `true` if the current window is not the topmost window, indicating that the page is being rendered inside a frame or an iframe.
- Window Orientation:

The orientation of the window (square, portrait, landscape) is determined based on the comparison of `innerHeight` and `innerWidth`.
The orientation attribute on the HTML element is updated accordingly, which can be particularly useful for responsive design.
## Tag Name Attribute for Untagged Elements:

Elements without a tag-name attribute are given one, set to their actual tag name. This allows for CSS targeting based on the tag name without using the tag itself as a selector.
Normalized Attributes for All Elements:

Iterates over all elements and their attributes, normalizing attribute names (e.g., replacing : with -) for consistent CSS targeting.
This normalization process includes specific handling, like changing xmlns to xml-ns.
## Example Usage
```javascript
// Automatically update the 'window-location' and 'user-agent' attributes
// on the HTML element
declare(() => page_html.updateAttribute("window-location", window.location.href));
declare(() => page_html.updateAttribute("user-agent", navigator.userAgent));

// Update the 'orientation' attribute based on window dimensions
declare(() => {
  if (window.innerHeight === window.innerWidth) {
    page_html.updateAttribute("orientation", "square");
  } else if (window.innerHeight > window.innerWidth) {
    page_html.updateAttribute("orientation", "portrait");
  } else {
    page_html.updateAttribute("orientation", "landscape");
  }
});

// Normalize attribute names for CSS targeting
declare(() => {
  queryApplyAll("*", (el) => {
    // Attribute normalization logic
  });
});
```
## Notes
This approach provides a powerful way to reactively adjust styling based on changing conditions.
It's important to consider performance implications, especially when continuously updating attributes and querying the DOM.
Enhanced CSS Selector Capabilities Using updateAttribute
## Introduction
This library extends CSS selector capabilities by normalizing attributes and adding custom attributes to elements. This allows for more flexible and powerful CSS targeting, especially in cases where standard selectors are limited.

## Normalized Attributes
- Purpose: Some attributes, particularly those with colons (like `xmlns:xlink`), can't be directly used in CSS selectors. Normalizing these attributes (e.g., replacing colons with hyphens) makes them accessible for CSS styling.
- Implementation: The library iterates over all elements and their attributes, normalizing names for consistent CSS targeting. This normalization includes specific cases, such as changing `xmlns` to `xml-ns`.
## Tag Name Attribute
- Purpose: To enable wildcard queries on tag names, which isn't possible with standard CSS selectors.
## - Usage Examples:
- `document.querySelectorAll('[tag-name^="h"]:not([tag-name^="head"])')`: Selects all heading elements (`<h1>`, `<h2>`, etc.), excluding `<head>`.
- `document.querySelectorAll('[tag-name^="t"]')`: Selects all elements that make up a table (like `<table>`, `<tr>`, `<td>`, etc.).

## Enhanced CSS Selector Capabilities

## Normalized Attributes
Attributes with special characters, like colons, are normalized for CSS compatibility. For example, attributes containing colons are transformed by replacing colons with hyphens, making them selectable in CSS.

## `tag-name` Attribute for Wildcard Tag Queries
A custom attribute `tag-name` is added to elements without it, set to their actual tag name. This enables advanced CSS queries using attribute selectors, particularly for wildcard matching of tag names.

## Example Usage
```javascript
// Normalized attribute usage in CSS
// [xml-ns] { ... }

// Using the `tag-name` attribute for wildcard tag queries in JavaScript
let headings = document.querySelectorAll('[tag-name^="h"]:not([tag-name^="head"])');
let tableElements = document.querySelectorAll('[tag-name^="t"]');

// These selectors allow for targeting specific groups of elements based on their tag names, offering a level of flexibility not available with standard CSS selectors.
```
## Performance Consideration
The updateAttribute function plays a crucial role in maintaining performance by avoiding unnecessary DOM updates. It ensures attributes are only modified when there's an actual change, reducing the computational cost of these dynamic attribute updates.

# `console.lag`
- Purpose: An asynchronous wrapper around console.log.
- Usage: Use console.lag to log messages asynchronously.
## - Example:
```javascript
await console.lag("Message");
```
## `ifTry` and `$ifTry`
- Purpose: Conditional execution with error handling. $ifTry is the asynchronous version of ifTry.
- Usage: Use these functions to execute code based on a condition and handle errors gracefully.
## - Example:
```javascript
ifTry(() => condition, () => thenFunction(), (e) => elseCatchFunction(e));
await $ifTry(() => asyncCondition(), async () => thenFunction(), async (e) => elseCatchFunction(e));
```
## `sleep`
- Purpose: A utility function to pause execution for a given number of milliseconds.
- Usage: Use sleep in asynchronous functions to introduce delays.
## - Example:
```javascript
await sleep(1000); // Sleep for 1 second
```
## `AsyncFunction`
- Purpose: A reference to the constructor of asynchronous functions.
- Usage: Useful for dynamic creation of async functions or type checking.
## `JSON.extract`
- Purpose: Extracts a value from JSON using string manipulation, useful for malformed JSON.
- Usage: Apply when standard JSON parsing is not feasible.
## - Example:
```javascript
let value = JSON.extract(malformedJson, "key");
```
## `String.prototype.setCharAt`
- Purpose: Changes the character at a specific index in a string.
- Usage: Useful for string manipulation where direct character replacement is needed.
## - Example:
```javascript
let str = "Hello";
str = str.setCharAt(1, 'a'); // "Hallo"
```
## `String.prototype.includesAny`

- Purpose: Checks if a string includes any of the elements in a given array.
- Usage: Useful for checking against multiple substrings in a single call.
## - Example:
```javascript
let str = "Hello world!";
let result = str.includesAny(["world", "test"]); // true
```
## Additional Utilities and Enhancements

## `console.lag`
An asynchronous version of `console.log`.

## Conditional Execution Functions
- `ifTry`: Conditionally executes functions with synchronous error handling.
- `$ifTry`: The asynchronous variant of `ifTry`.

## `sleep`
A utility function for introducing delays in async functions.

## `AsyncFunction`
A reference to the constructor of asynchronous functions.

## JSON and String Utilities
- `JSON.extract`: Extracts values from JSON using string manipulation.
- `String.prototype.setCharAt`: Changes a character at a specific index in a string.
- `String.prototype.includesAny`: Checks if the string includes any of the specified substrings.

These utilities enhance the JavaScript standard library with additional functionality, making it easier to perform common tasks and handle specific scenarios.

# State Subscription and Publishing System
## Introduction
This system allows DOM elements to subscribe to changes in `localStorage` and vice versa. Elements can update their attributes based on `localStorage` values, and changes in element attributes can be reflected in localStorage.

## `subscribeState` Function
- Purpose: Binds a DOM element's attribute to a `localStorage` item. The attribute is automatically updated whenever the corresponding `localStorage` item changes.
- Usage:
```javascript
subscribeState(document.getElementById('example'), 'data-key', 'myStorageKey');
```
## - Parameters:
- `elem`: The DOM element to subscribe.
- `attr`: The attribute of the element to be synchronized.
- `str`: The key in localStorage to synchronize with.
## `publishState` Function
- Purpose: Establishes a binding such that changes to a specified attribute of a DOM element automatically update a corresponding `localStorage` item.
- Usage:
```javascript
publishState(document.getElementById('example'), 'data-key', 'myStorageKey');
```
## - Parameters:
- `elem`: The DOM element whose attribute changes should be published.
- `attr`: The attribute of the element to monitor and publish.
- `str`: The key in `localStorage` to update with the attribute's value.
## Implementation Details
- Subscriber List: A global `subscriberList` is maintained to keep track of all subscriptions. A declare function is used to periodically update all subscribed element attributes based on the current value in `localStorage`.
- Publisher List: Similarly, a `publisherList` keeps track of all elements that publish their state. Another declare function updates the corresponding localStorage item whenever a monitored attribute changes.
## Enhanced Documentation

## State Subscription and Publishing System

### `subscribeState`
Automatically synchronizes a DOM element's attribute with a `localStorage` item. The attribute is updated whenever the `localStorage` value changes.

#### Usage
`subscribeState(element, attributeName, localStorageKey);`

### `publishState`
Links changes in a DOM element's attribute to a `localStorage` item. Whenever the attribute changes, the `localStorage` item is updated accordingly.

#### Usage
`publishState(element, attributeName, localStorageKey);`

### Implementation Details
- The `subscriberList` and `publisherList` are used to manage the bindings between DOM elements and `localStorage`.
- Periodic checks ensure synchronization, using `declare` to handle updates efficiently and responsively.

# `toSansSerif` Function
## Introduction
The `toSansSerif` function converts regular alphabetic characters in a string to their sans-serif equivalents. It's useful for stylizing text dynamically within a JavaScript environment.

Usage
```javascript
let styledText = toSansSerif("Hello, World!");
console.log(styledText); // Outputs the string in sans-serif characters
```
## Implementation Details
The function maps each letter in the English alphabet (both uppercase and lowercase) to its corresponding sans-serif character.
It iterates over each character in the provided string, replacing it with the sans-serif version if it exists.
## Example Usage
```javascript
let normalText = "Transform this to Sans-Serif";
let sansSerifText = toSansSerif(normalText);
console.log(sansSerifText); // Displays the transformed text
```
## Note
This function covers the basic English alphabet. Characters outside this range, including special characters, numbers, and symbols, are not transformed.

# `swapText` Function
## Introduction
`swapText` is a utility function that searches for and replaces all instances of a specified text (`startText`) in the document's body and title with another text (`endText`). It's designed to handle cases where the replacement text (`endText`) might include the original text (`startText`), which could lead to infinite recursion.

## Usage
```javascript
swapText("original", "replacement");
```
## Implementation Details
- Text Replacement in Body:
The function creates a `TreeWalker` to traverse all text nodes in the document's body.
It replaces instances of `startText` with `endText` in each text node.
If `endText` contains `startText`, it converts `endText` to its sans-serif form using `toSansSerif` to prevent potential infinite recursion.
- Text Replacement in Title:
The function also replaces instances of `startText` in the document's title.
- Regular Expression:
Uses a regular expression with the global and case-insensitive flags (`gi`) for finding all occurrences of `startText`.
## Example Usage
```javascript
// Replaces all instances of "hello" with "world" in the document body and title
swapText("hello", "world");
```
## Note
- Case Sensitivity: The function is case-insensitive, meaning it will replace all variations of `startText` regardless of case.
- Return Value: Returns an array of text nodes that were modified.

# `Object.descriptorKeys` Function
## Introduction
`Object.descriptorKeys` is a utility function that retrieves all property keys of an object, including non-enumerable properties, by accessing their property descriptors.

## Usage
```javascript
let keys = Object.descriptorKeys(myObject);
```
## Implementation Details
The function uses `Object.getOwnPropertyDescriptors` to get descriptors of all properties, including non-enumerable ones, and then extracts their keys.
It's a robust way to list all properties of an object, as opposed to `Object.keys`, which only lists enumerable properties.
## Error Handling
In case of an error (e.g., if the argument is not an object), the function safely returns an empty array.
## Example Usage
```javascript
let myObject = { a: 1, b: 2 };
Object.defineProperty(myObject, 'c', {
    value: 3,
    enumerable: false
});
let keys = Object.descriptorKeys(myObject); // ['a', 'b', 'c']
```
# `Object.forInKeys` Function
## Introduction
`Object.forInKeys` retrieves all enumerable properties of an object, similar to a `for...in` loop, but in a safe and array-formatted manner.

## Usage
```javascript
let keys = Object.forInKeys(myObject);
```
## Implementation Details
The function iterates over all properties of an object using a `for...in` loop and collects the keys.
It's particularly useful for cases where you need to consider properties inherited from the object's prototype.
## Error Handling
The function continues iterating even if an error occurs for a particular property, ensuring that all possible keys are collected.
## Example Usage
```javascript
let myObject = { a: 1, b: 2 };
let prototype = { d: 4 };
Object.setPrototypeOf(myObject, prototype);
let keys = Object.forInKeys(myObject); // ['a', 'b', 'd']
```

# `sanitizeAttr` Function
## Introduction
`sanitizeAttr` is used to sanitize attribute strings by replacing special characters with predefined substitutes. This is particularly useful for ensuring attribute strings are safe and conform to certain standards.

Usage
```javascript
let safeAttribute = sanitizeAttr("example:attribute");
```
## Implementation Details
Replaces various special characters with designated substitutes.
Ensures that the resulting string is free from characters that might cause issues in certain contexts.
## Element Prototype Extensions
- `updateAttribute`:

Adds or updates an attribute of a DOM element, but only if necessary (i.e., if the attribute doesn't exist or its value needs to be changed).
Prevents unnecessary DOM updates.
- `approveAttribute`:

Similar to `updateAttribute`, but with an additional check to ensure the provided value is truthy before updating.
- `getStyle`:

Retrieves the computed style of an element for a given CSS property.
Returns undefined if the style cannot be retrieved.
- `updateStyle`:

Updates the style of an element, similar to `updateAttribute`, but for CSS styles.
## Query Functions
- `queryApplyAll`:

Applies a given function to all elements matching a specified CSS query.
Handles errors gracefully and continues with the next elements.
- `queryAttrAll`:

Similar to `queryApplyAll`, but also updates an attribute of the elements with a specified value.
- `queryBindAll`:

Binds a function to all elements matching a CSS query that do not already have a specific attribute.
Uses `sanitizeAttr` to create a unique attribute name based on the query and function, marking elements as "bound" to prevent duplicate bindings.
## Enhanced Documentation

## Additional Utilities and Element Prototype Extensions

### `sanitizeAttr`
Sanitizes attribute strings by replacing special characters.

### Element Prototype Methods
- `updateAttribute`: Conditionally adds or updates an element's attribute.
- `approveAttribute`: Adds or updates an attribute only if the value is truthy.
- `getStyle`: Retrieves computed styles for a specific CSS property.
- `updateStyle`: Conditionally updates an element's style.

### Query Functions
- `queryApplyAll`: Applies a function to each element matching a CSS query.
- `queryAttrAll`: Similar to `queryApplyAll`, with additional attribute updates.
- `queryBindAll`: Binds a function to elements matching a query, avoiding duplicates.

These functions add robustness and convenience to DOM manipulation and styling.

## Enhanced `declare` Function

Central to the library, `declare` now supports a wider range of function types including asynchronous functions, promises, and generator functions.

### Usage
`declare(function, identifier);`

### Features
- **Generator Function Support**: Handles generator functions for asynchronous iteration.
- **Asynchronous and Promise Handling**: Correctly manages functions that are asynchronous or return promises.
- **Regular Function Registration**: Continues to register regular functions for periodic execution.
- **Dynamic Code Execution**: Evaluates string representations of code in a safe manner.

### Error Handling
Robust error handling is included to manage different function types and their exceptions.

### Example
Register different types of functions for periodic execution or evaluation within the application's lifecycle.

# Declarative Properties for Document State
## Introduction
These properties are set up using the declare function to continuously update the `page_html` element's attributes based on various states and properties of the document. This dynamic reflection of the document's state into DOM attributes can be very useful for CSS styling and JavaScript operations that depend on these states.

## List of Declarative Properties
- Document Readiness, Visibility, and Character Set:

Updates attributes related to document readiness (ready-state), visibility (visibility-state), and character set (character-set).
- Document Compatibility Mode and Content Type:

- Reflects the document's compatibility mode (compat-mode) and content type (content-type).
Cookie, Design Mode, and Direction:

Tracks changes in document cookies (cookie), design mode (design-mode), and text direction (dir).
- Document Type, URI, and Referrer:

Keeps track of the document type (doctype), URI (document-uri), and referrer (referrer).
- Document Title and CSS Feature Detection:

Updates the document title (title) and checks for CSS features like the :has() pseudo-class (has-supported).
- Tag Names and Namespace Attributes:

Applies custom attributes to elements without them, such as tag-name, tag-name-js, element-prefix, and namespace-uri, based on the element's properties.
- Normalized Attributes:

Normalizes attribute names for consistent CSS targeting and updates elements with these normalized attributes.
## Example Usage
```javascript
// These properties are declared to automatically update.
// For instance, the document's title is reflected as follows:
console.log(globalThis.page_html.getAttribute('title')); // Reflects document.title
```
## Implementation Note
The declare function is used to set up these properties. It continuously checks for changes and updates the page_html attributes accordingly.
This approach ensures that the page_html element always carries up-to-date information about the document's state, which can be utilized by other parts of your application.

# Enhanced Declarative Properties for Document State
## Introduction
The series of declarative properties set up in the library dynamically updates attributes of the page_html element (which is the html element of the document) to reflect various states and properties of the document. This approach allows CSS selectors to reactively apply styles based on the document's state.

## Refined Usage and CSS Styling
By assigning these dynamic states as attributes on the html element, you can use CSS selectors to apply styles conditionally.
For instance, `html[ready-state="complete"] div { visibility: visible; }` can be used to make all div elements visible only when the document's ready state is `"complete"`.
## List of Declarative Properties (Refined)
- Ready State, Visibility State, etc.:

`ready-state`, `visibility-state`, and other attributes on `page_html` (i.e., the html element) reflect the current state of the document, such as readiness and visibility.
## CSS Feature Detection (e.g., `:has()` Support):

Attributes like `has-supported` indicate support for specific CSS features, allowing for feature-dependent styling.
- Element-Specific Attributes:

Attributes such as `tag-name`, `tag-name-js`, `element-prefix`, and `namespace-uri` on individual elements facilitate more precise and context-aware styling.
## Example Usage with CSS
```css
/* CSS to apply styles based on the document's ready state */
html[ready-state="complete"] div {
  visibility: visible;
}

/* CSS to apply styles based on CSS feature detection */
html[has-supported="true"] .some-class {
  /* styles that rely on the :has() pseudo-class support */
}
```
## Implementation Note
The declare function continuously monitors and updates these attributes, ensuring that they accurately reflect the current state or properties of the document and its elements.
## Enhanced Documentation

## Dynamic State Reflection in `page_html` (`html` Element)

The library updates the `html` element's attributes to reflect various states and properties of the document dynamically. This enables reactive CSS styling based on the document's state.

### Key Features
- **Dynamic Attribute Updates**: Reflects document states like readiness, visibility, content type, and more.
- **Reactive CSS Styling**: Use CSS selectors to style elements based on the document's state.
- **Element-Specific Attributes**: Enhances individual elements with custom attributes for more targeted styling.

### CSS Styling Examples
Reactively style elements based on the document's state and supported features using CSS attribute selectors.

### Usage
These dynamic attributes are set up automatically and require no manual intervention after initial declaration.

# Module Support Detection
## Introduction
This functionality detects whether the browser supports JavaScript ES6 modules and updates an attribute on the page_html element (html element) accordingly. It uses a combination of a default assumption (modules are supported) and a nomodule script to set the attribute based on actual support.

## Implementation
- Initial Assumption:

Initially, it assumes that ES6 modules are supported (`globalThis.modulesSupported = true`).
This assumption is reflected by setting the modules-supported attribute on the `page_html` element to `true`.
nomodule Script:

A script element with the `nomodule` attribute is created. This script will only execute in browsers that do not support ES6 modules.
Inside this script, `globalThis.modulesSupported` is set to false, and the `page_html` element's modules-supported attribute is updated accordingly.
Append Script to `page_html`:

The script is appended to the `page_html` element, ensuring it executes and updates the attribute if the browser doesn't support modules.
## Example Usage
```javascript
// Check for module support and update the attribute
if (globalThis.modulesSupported) {
    console.log("ES6 Modules are supported");
} else {
    console.log("ES6 Modules are not supported");
}

// Use in CSS for conditional styling
```
## CSS Styling Based on Module Support
```css
/* Styles that only apply if modules are supported */
html[modules-supported="true"] .some-class {
  /* specific styles */
}

/* Styles for browsers that don't support modules */
html[modules-supported="false"] .some-class {
  /* fallback styles */
}
```
## Note
This method is a straightforward way to adapt the behavior or styling of your web application based on the browser's support for ES6 modules.

The `updateProperty` function you've created is a utility for updating the properties of an object. It ensures that the property is only updated if it doesn't already exist or if its current value differs from the new value. This can be useful for optimizing performance by avoiding unnecessary updates.

# `updateProperty` Function
## Introduction
updateProperty is a utility function designed to update a property of an object only if necessary. It checks if the property exists and if its value differs from the new value, thereby preventing redundant updates.

# Usage
```javascript
updateProperty(myObject, "propertyName", newValue);
```
# Implementation Details
The function first checks if the property does not exist on the object. If it doesn't, the property is added with the given value.
If the property exists, its value is compared with the new value. The update is performed only if the values differ.
This approach helps in optimizing object property updates, which is particularly beneficial for objects that are frequently modified or are bound to reactive systems.
# Example Usage
```javascript
let myObject = { a: 1, b: 2 };
updateProperty(myObject, 'c', 3);  // Adds a new property 'c'
updateProperty(myObject, 'a', 10); // Updates the value of property 'a'
```
Note
This function is helpful in scenarios where object properties are linked to DOM updates or other reactive mechanisms, as it minimizes unnecessary changes.
