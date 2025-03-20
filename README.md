# odin-tic-tac-toe

## Table of contents

## Overview

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

### The challenge

Users should be able to:

- Input their own player name
- Starting the game
- Inputting to the board based of on the player mark
- Resetting the game

### Screenshot

![](/img/tic-ui.png)

### Links

- Live Site URL: [Link](https://azanra.github.io/odin-tic-tac-toe/)
- Assignment Page: [Link](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe)

## My process

### Built with

- Factory
- IIFE Module Pattern

### What i learned

I spent more time when writing the pseudocode on where should i place each part of the code. the assignment says i need to be able to fit it into either player, game, or gameBoard object. and try to having as little global code as possible.

By making the game working on the console first, it will help to separate the logic between the view and and the game itself. i spent a long time on how to check whether a mark is 3 times in a row. i find that that i need to check it horizontally, vertically and diagonally. at first i use traditional loop and push it to single array. but it gotten more complex on vertical check because i need adjust the counter to push exactly the mark that i want.

For some reason i just realized that i can just use map and loop through the item and push it to multiple array to be checked. i wonder is this is a good solution?, but it definitely much more easier to understand compared to my previous code.

I already used factory and module pattern on my previous project so this is just short description of factory and module pattern. factory is used to create an object with regular function. the difference is that it return the object with object short hand notation

```js
variable a;

function setterA() {
    //do something with a
}

return {randomVariable, randomMethod, setterA}
```

Even though the function is already executed. the setterA still can access the parent scope to retrieve the variable. that is what closures are they can access their surrounding environment even though the parent function is already executed. For the module we just wrap a factory in parenthesis and immediately invoked it. usually used to have a single instance of object and grouping things together. and stored it to a variable.

```js
const variable = (function () {
  //do something
})();
```

Last one is return in factory pattern. They are shorthand for creating object if that variable name is the same

```js
const firstName = "randomName";

const object = { firstName: firstName };
```

The same as

```js
const firstName = "randomName";

const object = { firstName };
```

### Continued Development

The interface definitely can be improved, and implementing to be able to play with a computer, because for now the game can only be played by two player.
