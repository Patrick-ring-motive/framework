

# Example: Dynamic Style Application with Global Variables

An interactive web page example where the background hue changes dynamically based on mouse movement and touch interactions.

### HTML Structure
Includes `dynamic-styles` for fetching style definitions and applies dynamic styles to the `body`.

### Dynamic Styles JSON
Defines a CSS variable that changes based on global variables tracking mouse, touch positions, and window dimensions.

### Interaction
Moving the mouse or using touch inputs causes a visually engaging hue-rotation effect on the webpage.

## HTML Structure
```html
<!DOCTYPE html>
<html style="height: 100%;">
  <head>
    <meta name="viewport" content="width=device-width, minimum-scale=0.1">
    <title>Dynamic Style Example</title>
    <script src="/framework/framework.js"></script>
    <dynamic-styles data-src="/framework/examples/dynamic-styles.json"></dynamic-styles>
  </head>
  <body style="margin: 0px; height: 100%; background-color: rgb(14, 14, 14);">
    <style>
      body {
        filter: var(--page-colors);
      }
    </style>
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Plain_tiger_%28Danaus_chrysippus_chrysippus%29_male_underside.jpg" width="919" height="612">
  </body>
</html>
```
## Dynamic Styles JSON
```json

{
  "dynamic-styles" : {
    "--page-colors" : "`hue-rotate(${(N(()=>window.innerHeight) - N(()=>window.innerWidth)) + N(()=>mouseX) + N(()=>mouseY) + N(()=>screenX) + N(()=>screenY)}deg)`"
  }
}
```
## Overview
- **Dynamic Styles**: The `dynamic-styles` element, along with the external JSON file, sets up a dynamic CSS variable `--page-colors`.
Framework Integration: The example utilizes the framework.js script to enable dynamic styling capabilities.
- **Global Variables**: The style definition in the JSON file leverages the global variables like `mouseX`, `mouseY`, `screenX`, and `screenY`, as well as the window dimensions, to dynamically calculate a hue rotation value for the body filter style.
- **Visual Effect**: As a result, moving the mouse or interacting with the touch screen changes the hue of the page, creating an interactive visual effect.
## Explanation
The CSS filter `hue-rotate` is dynamically updated based on a combination of window dimensions and cursor/touch positions.
The `N` function is used to ensure all values are safely converted to numbers before being used in the calculation.
The image serves as a visual content over which the hue-rotation effect is noticeable.
