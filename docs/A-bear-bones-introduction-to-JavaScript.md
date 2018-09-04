---
title: An introduction to programming, with JavaScript
lang: en-US
---
# The Basics

Programming seems intimidating at first, but most languages base themselves on a common set of rules.

No matter what language you code with, you will need to know these basic rules. And if you one day pick up enough languages, you yourself will notice all the similarities.

This introduction to programming will guide you through the basics you will need to get going, using JavaScript.

## Statements And Types

The very basic idea of a computer program is that you want to tell the CPU of your machine to do something. This is done by sequentially telling your machine's processor what to do, step by step, in a carefully controlled manner. This guarantees that you will not only get it to do what you want, but that it will also be error-free.

The smallest step that you can instruct your computer in doing, is called a _statement_. Each one is a wholly independent instruction which can be equated in and of itself, based on context. Every statement has a result.

To give an example of this, see the blow codeblock:
```
2 + 2 == 4
```

What has been _stated_ here is that 2 added to 2 is equal to 4. We don't need to be computers to know this is true, and in fact, the above statement equates to a special type of result called a `boolean`.

### Booleans

`booleans` are the simplest type there is in programming. A `boolean` can be either `true`, or `false`. In the above example, `2 + 2 == 4` equates to `true`.

This means that if we were to feed this into a theoretical computer which takes in nothing but a single statement, and spits out the result, it would result in a `true` being returned.

So then, what can we say about this?
```
2 + 3 == 6
```

As you can see, this statement is essentially the same as the above, with a key difference. It's result is `false`. 2 added to 3 does not equal 6, but we _state_ that it does. When our computer looks at this statement, it knows that this is a `false` statement, and thus it spits that back at us.

Another statement is `2 + 2` by itself, or `4 == 4`, or even just `4`. That's right, so far what we examined was in fact not a simple statement, but instead a collection of statements put together to form a larger one.

If we put each of the above into our computer one-by-one, we would get the following results:

```
2 + 2 -> 4

4 == 4 -> true

4 -> 4
```

And with the very first one, we move on to the next type of result we can get. A number.

```
( (4 + 4) * 8 ) - 9
```

This of course equates to 55. The way a "number" type result works is heavily dependent on the programming language being used. There are various types of numbers, the large variation resulting from limitations to do with memory and different philosophies of storing a number in memory to begin with.

### Numbers

In general programming terms, there are 2 types of numbers, an `int` ( short for `integer` ) and a `float`. When a number contains a fraction, such as `23.7`, it's a `float`. When it does not, such as `2412`, it's an `int`. Note that `52.0` is also a `float`, despite being equivalent to `52`.

In JavaScript, numbers are not as complex. There is really only a single number type, and it's just called `number`. From what we discussed above, a number in JS is always a floating-point value, meaning `52` and `52.0` equate to the same thing in JavaScript.

### Strings

Next, we can move on to the next commonly found type in programming: a string.
```
"Hello World!"
```

A string is a way to represent text in code. Much like we can add numbers together, we can "add" strings together, in a process called _concatenation_

```
"Hello " + "World!"
```

The above will result in `Hello World!` as a single string.

In JavaScript, there are 3 ways to create a new string:
```
"This is my new single-line string!"

'This is my new single-line string!'

`
This
is
my
new
multi-line
string!
`
```

You will notice the first two are different in that one uses the double-quotes, while the other single-quotes. There is no relevant difference between these, and either can be used. It is considered best practice, however, for use of either to remain consisted throughout the program.

The 3rd one, however, is quite different. It's what is called a _raw string literal_. To understand how it is different from the other 2, we need to get into ASCII.

#### ASCII

Below, you will find what is commonly referred to as the Extended ASCII Table

![Extended ASCII](https://fsymbols.com/images/ascii.png)

ASCII stands for `American Standard Code for Information Interchange`, and is a world-wide accepted mapping between the numbers in the range of `0~255` and certain characters, as seen above. In total, there are 256 symbols to choose from.

The first 32, although not clear from the above image, are actually reserved. They do not correspond to any visual representation. Indeed, many of them aren't even used nowadays. There are however some which are of relevance to explanining raw string literals.

The first of which, is `\0`. The `\` in front of a character signifies to the string that this character is special. If we were to have just `0`, that's just a normal symbol representing a zero. However, `\0` refers to what is called a null terminator.

Nowadays, null terminators have become less and less relevant, however when working with lower-level languages like C, they are of great importance. This character symbolizes the end of a string. The reasons behind it's existence is to do with how memory works in detail, which I won't be getting into. Needless to say, this is a good starting point on our introduction to ASCII.

The following string:
```
"Hello \0World!"
```
In the C programming language, the above would be printed only as `Hello `, with the space after the o. The `World!` part would be omitted, as C would only read up until the special `\0` character, at which point it will stop reading, beliving it has reached the end of the string.

As mentioned, this is not relevant in JavaScript. What is relevant, however, is the next character:

```
"Hello \nWorld!"
```

This would be printed as
```
Hello
World!
```

With the newline. That's what `\n` represents, a newline character. It tells the printer that we want whatever comes after this special character to be on the next line below.

And so, finally, we get to raw string literals:
```
"Hello \nEveryone! \nThis \nis \ncool!"

`
Hello 
Everyone! 
This 
is 
cool!
`
```

The above 2 strings are identical. The difference is that in the frist, we had to explicitly say where we want our newlines, while in the second, we could just press `Enter`, and it would read that automatically as a special `\n` character.

### Summary

To summarize thus far, we went through:
1. What is a statement
2. How statements works
3. Different types of data
    * Boolean
    * Number
    * String

## Operators

## Structures

## Variables

## Functions

---

Everything below this line is to be rewritten

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
