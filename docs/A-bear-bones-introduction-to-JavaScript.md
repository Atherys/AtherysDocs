---
title: A barebones introduction to JavaScript
lang: en-US
---
## What is JavaScript?

JavaScript is a programming language. Specifically, it was created for use with the Netscape web browser in the 1990s, and it's primary goal was to help with the gluing together of different elements on a web page. Soon after it's creation, a licensing agreement between Sun Microsystems and Netscape caused the language to be renamed from Mocha or LiveScript, to JavaScript.

Nowadays, JavaScript has become much more than that. It can be used a general-purpose programming language, and in the case of AtherysScript, it's used as a scripting language, whose main purpose is to interact with and modify the Mineraft server in a variety of ways.

## How does JavaScript work?

JavaScript is an interpreted language. What this means is that a Just-In-Time Compiler ( JIT Compiler ) takes in the JavaScript code, and transforms it into something which the computer can understand. The details of this system are far more complicated, but I'm not going to be talking about that here, since it's beyond the scope of this article.

## So how do I write JavaScript?

Well, before we start off on JavaScript, I'd like to go over the simplest of basics of programming.

### Firstly, variables.

`var num = 5.0;`

This is a **variable** called `num`, which is assigned a value of `5.0`. You can store any value in a variable, and that variable can be used later on in your program to refer back to the value you assigned it. This means anytime you refer to `num`, you are in fact refering to the value `5.0`.

Variables can take up a number of possible types of values ( including user-defined ones, but I'm not going to be covering those here ). In javascript, the types that a variable can take are one of the following:

* Boolean ( `true`/`false` )
* Null ( represents nothingness )
* Undefined ( represents the type of a variable which hasn't been initialized, we'll get to that later )
* Number ( a number such as `5`, `4.3`, `-0.00041` and so on )
* String ( Representation of a text, of a collection of characters, such as `"Text"`, `"Hello World"` )
* Object ( A hierarchical collection of data. More on that later )

### Next, a function.

`log("ERROR", num);`

Here, we are executing what's known as a **function call**. You do this by typing out the name of the function, followed by an opening and closing pair of parenthesis, with the arguments with which to call the function within, seperated by a comma.

Specifically, what the above snippet does is it calls a function with the name `log`, providing the arguments `"ERROR"` and `num`. `num` is defined as `5.0`, so in fact what the above evaluates to is `log("ERROR", 5.0)`. `"ERROR"` is a string, and that is a representation of written text, or a collection of characters.

### What about a custom function?

```javascript
function logError(message) {
    log("ERROR", message);
    return true;
}
```

A function in javascript can be defined by using the `function` keyword, followed by the name of the function, a pair of parenthesis, within which are described the arguments which the function expects. If the function is called mismatching arguments ( for example `logError()` or `logError("argument 1", "argument 2")` ), it will throw an error.

Functions can also return values. That is the purpose of the `return` keyword. The value returned can be a literal ( like `5.0`, `true`, `"Hello"`, etc. ), or a variable.

The primary use of user-defined functions is to simplify your code. It is much more readable to call a function, than to copy-paste the same code all over. AScript defines many functions that can be used to interact with the Minecraft world. These range from getting the block from a location to teleporting a player.
