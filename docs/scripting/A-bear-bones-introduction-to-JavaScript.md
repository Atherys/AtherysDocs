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
```js
2 + 2 == 4;
```

What has been _stated_ here is that 2 added to 2 is equal to 4. We don't need to be computers to know this is true, and in fact, the above statement equates to a special type of result called a `boolean`. the semi-colon at the end denotes the end of a statement. We are saying that that is the end of what we are stating, and anything _after_ the semi-colon is not related to our initial statement.

### Booleans

`booleans` are the simplest type there is in programming. A `boolean` can be either `true`, or `false`. In the above example, `2 + 2 == 4` equates to `true`.

This means that if we were to feed this into a theoretical computer which takes in nothing but a single statement, and spits out the result, it would result in a `true` being returned.

So then, what can we say about this?
```js
2 + 3 == 6;
```

As you can see, this statement is essentially the same as the above, with a key difference. It's result is `false`. 2 added to 3 does not equal 6, but we _state_ that it does. When our computer looks at this statement, it knows that this is a `false` statement, and thus it spits that back at us.

Another statement is `2 + 2` by itself, or `4 == 4`, or even just `4`. That's right, so far what we examined was in fact not a simple statement, but instead a collection of statements put together to form a larger one.

If we put each of the above into our computer one-by-one, we would get the following results:

```js
2 + 2; -> 4

4 == 4; -> true

4; -> 4
```

And with the very first one, we move on to the next type of result we can get. A number.

```js
( (4 + 4) * 8 ) - 9;
```

This of course equates to 55. The way a "number" type result works is heavily dependent on the programming language being used. There are various types of numbers, the large variation resulting from limitations to do with memory and different philosophies of storing a number in memory to begin with.

### Numbers

In general programming terms, there are 2 types of numbers, an `int` ( short for `integer` ) and a `float`. When a number contains a fraction, such as `23.7`, it's a `float`. When it does not, such as `2412`, it's an `int`. Note that `52.0` is also a `float`, despite being equivalent to `52`.

In JavaScript, numbers are not as complex. There is really only a single number type, and it's just called `number`. From what we discussed above, a number in JS is always a floating-point value, meaning `52` and `52.0` equate to the same thing in JavaScript.

### Strings

Next, we can move on to the next commonly found type in programming: a string.
```js
"Hello World!";
```

A string is a way to represent text in code. Much like we can add numbers together, we can "add" strings together, in a process called _concatenation_

```js
"Hello " + "World!";
```

The above will result in `Hello World!` as a single string.

In JavaScript, there are 3 ways to create a new string:
```js
"This is my new single-line string!";

'This is my new single-line string!';

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
```js
"Hello \0World!";
```
In the C programming language, the above would be printed only as `Hello `, with the space after the o. The `World!` part would be omitted, as C would only read up until the special `\0` character, at which point it will stop reading, beliving it has reached the end of the string.

As mentioned, this is not relevant in JavaScript. What is relevant, however, is the next character:

```js
"Hello \nWorld!";
```

This would be printed as
```
Hello
World!
```

With the newline. That's what `\n` represents, a newline character. It tells the printer that we want whatever comes after this special character to be on the next line below.

And so, finally, we get to raw string literals:
```js
"Hello \nEveryone! \nThis \nis \ncool!";

`
Hello 
Everyone! 
This 
is 
cool!
`
```

The above 2 strings are identical. The difference is that in the frist, we had to explicitly say where we want our newlines, while in the second, we could just press `Enter`, and it would read that automatically as a special `\n` character.

### Comments

Real quick, we will be using the following combination of characters some after this ( `//` ). This denotes a comment in the code. It is ignored and not evaluated. We will be using them to point out things about the code inside the code blocks themselves for the sake of brevity. Another style are multi-line comments, where the comment begins with `/*` and ends with a closing `*/`.

## Operators

So as we saw from the above examples, the simplest statement consists of just a value. `"Hello World!"`, `4`, `true`, etc. These are all statements in and of themselves, which equate to a value of a certain type.

But, going back to our first ever example, it's a bit more complicated than that
```js
2 + 2 == 4
```

You don't just have a number, or a string, or even a boolean, you have a combination of numbers, which somehow equate down to a boolean. How does that work?

Well, while the numbers themselves are values, everything in between them is what is called an _operator_. In programming, there are many different operators we can use, each representing a very simple _operation_.

Below you will find a table relating common operators to their meanings


| Operator |     Meaning    |
|:--------:|:--------------:|
|    ==    |     Equals     |
|     !    |       Not      |
|    !=    |   Not Equals   |
|    \|\|  |   Logical OR   |
|    &&    |   Logical AND  |
|     +    |    Addition    |
|     -    |   Subtraction  |
|     /    |    Division    |
|     *    | Multiplication |

This is by no means an exhaustive list.

### Equals ( `==` )

The first operator we'll take a look at is the equals, `==`.

All it does is check whether something is equal to something else. When surrounded by 2 values on either side, called _operands_, it becomes a statement which equates to a `boolean`.

See the below examples
```js
true == true; -> true
true == false; -> false

1 == 1; -> true
1 == 2; -> false

"Hello" == "Hello"; -> true
"Hello" == "World"; -> false
```

### Not ( `!` )

Next we have the Not operator, `!`.

It's job is to negate any boolean which has been placed on the right-hand side of the operator. See examples below

```js
!true; -> false
!false; -> true

!(1 == 1); -> false
!(1 == 2); -> true

!("Hello" == "World"); -> true
```

### Not Equals ( `!=` )

The Not Equals operator ( `!=` ) is used as shorthand for what we saw in the examples of the previous.

Instead of writing

```js
!("Hello" == "world");
```

We may instead use Not Equals to write

```js
"Hello" != "world";
```

Which is the same statement as we had before, except easier to read, and easier to write.

### Logical OR ( `||` )

The Logical OR operator ( `||` ) is yet another which is applicable to booleans.

Say we have 2 statements, A and B. A is `true`, and B is `false`. Now, say we have a third statement C, which is either A OR B. What is the value of C?

According to the definition of an OR, we must always choose the value of the `true` statement. In essence, we're asking "which one of these is true?", and if neither is, then obviously the new statement is also `false`. Therefore, `A || B` in this case would be equal to `true`. Below, you will find a table describing all possible cases for an OR statement.

|  A  |  B  |Result|
|:---:|:---:|:----:|
|true |true | true |
|true |false| true |
|false|true | true |
|false|false| false|

### Logical AND ( `&&` )

Now imagine the mirror opposite of Logical OR. Instead of asking "which one of these is true?" we ask "which one of these is false?", and if neither is, then the new statement is true.

|  A  |  B  |Result|
|:---:|:---:|:----:|
|true |true | true |
|true |false| false|
|false|true | false|
|false|false| false|

### Addition ( `+` )

The Addition operator ( `+` ) is used to combine 2 operands together. I say _combine_ instead of _add_ and _operands_ instead of _numbers_ because `+` can be used to do more than just that.

Going back to our introduction to strings, you may remember a brief mention to something called _concatenation_. Well, the addition operator is used for that as well.

Therefore, what `+` finally equates to is dependent on the types of the operands on either side. Take the below examples:

```js
1 + 1; -> 2

23.06 + 41.44; -> 64.5

"Hello " + "World!"; -> "Hello World!" // concatenation

"The number " + 3; -> "The number 3" // also concatenation

4 + " + " + 4 + " = " + (4 + 4); -> "4 + 4 = 8" // concatenation, combined with actual integer addition
```

As you can see above, the first 2 examples will give you a number. That means the statements _return_ a number type. The word _return_ is used instead of _equates to_ when talking about statements, as it is shorter and more concise.

the 3rd and 4th examples _return_ a string, but in the 4th we actually combine a string with a number. Many languages have this, where instead of having to convert a number to a string, it will be done automatically when the `+` operator is used with a string as one operand, and a number as the other.

Going to the final example, we actually have a more complicated combination of statements which eventually result in a string being returned.

### Subtraction ( `-` )

The subtraction operator ( `-` ) works similarly to `+`, however it has no meaning when applied to a string.

When applied to numbers, it simply subtracts the right-hand value from the left-hand one, returning a number.

```js
1 - 1; -> 0

10.067 - 0.067; -> 10.0
```

### Division ( `/` )

Division ( `/` ) works quite the same as `+` and `-` when applied to numbers, and it has no meaningful application when used on strings or booleans.

It simply divides the left-hand side by whatever is on the right-hand side.

```js
4 / 2; -> 2

16 / 4; -> 4

15.3 / 3; -> 5.1
```

### Multiplication ( `*` )

The same is true for multiplication ( `*` ).

```js
4 * 2; -> 8

0.5 * 8; -> 4
```

## Variables

The next thing we have to talk about are _variables_. So far, we've talked about how statements can equate to values of a certain type, and we can then do operations with those values using operators.

But, take the below example...

```js
"John" + " was born on the " + 19 + " of " + "June" + " at " + "19:36" + " in the town of " + "Manchester";
```

That's all fine and good, the `+` operator will do it's job, it'll go and concatenate all the operands and in the end we'll get a string which tells us when John was born, and in which town.

But, say you want to change the person we're talking about. And say that person is now called `Leonard`, and was born on a different date, in a different town. You now need to go through that entire string and change every operand to match up with the new data.

Wouldn't it be better if we somehow _stored_ the information somewhere first, and then used it later on? So when we need to change it, we have but a single place to look, instead of having to scan through the entire statement to find what we're looking for and change it.

Well, this is where _variables_ come in. And in order to introduce you to variables, first we would need to get familiar with the _assignment operator_

| Operator |     Meaning    |
|:--------:|:--------------:|
|    =     |   Assignment   |

A variable, as stated previously, is a way to _hold_, or _store_ a piece of data temporarily during the execution of our program. Below you may see a few examples of variables.

```js
var asdf = 1.54;

var qwerty = "Hello!";
```

### Anatomy Of A Variable

Variables have 3 parts to them. The first is the _type_, the second is the _identifier_, **optionally** followed by the assignment operator ( `=` ), the right-hand side of which contains the _value_ being _assigned_.

```
<type> <identifier> [ = <value> ]
```

A variable can also be created without the assignment of a value. This is called a **variable _declaration_**, and it looks like this

```js
var asdf;

var qwerty;
```

You will notice the lack of an assignment operator, as well as a value to be assigned. All this does is say that we are going to be using a variable with the given identifier some time in the future, but when, or how, is yet unknown. But just to be safe, we are preventing another variable with this name from being declared, because it's valuable to us in some way.

You will notice that in the examples, the _type_ part is always `var`. As mentioned before, all values have a type. However, whether or not the variables containing said values have a type is dependent on the language.

### Static Typing

Many languages have what is called _static typing_. Static here is used to mean _unchanging_, meaning once the variable has been declared as a certain type, it cannot hold a value of another.

So far all our examples have been JavaScript compatible. However, I'm going to move away from that for this section. The following examples are going to be in Java. Everything we've gone through thus far is just as valid in Java as it is in JavaScript. So, please look at the below examples

```java
int aNumber = 3;
float someOtherNumber = 5.67f;
String asdfString = "This is a string";
```

What the above displays is static typing. We have declared 3 variables, with concrete types, and have assigned values to them as well.

Without getting too far into it, the below will trigger an error, and the Java program will not start, as we are attempting to fit a value of the wrong type in the variables:

```java
int aNumber = "String!"; // error
String aString = 5; // error
```

In Java, `5` is not a string, and `String!` is not a number. Therefore, the above will cause an error, and the program will never even start.

### Dynamic Typing

Now that we've gone through static typing, we can get on to the way JavaScript does things.

This is called _dynamic typing_, where the word _dynamic_ refers to the variable's ability to take on any value, regardless of it's type.

While in static typic variables were created with a `<type>` preceding the identifier, in JavaScript's dynamic type system, a _keyword_ is used instead. This keyword is `var`.

```js
var asdf = "Henlo!";
```

This means that we have declared a variable called `asdf`, which can take _any_ type of value. Therefore, the following statements are valid.

```js
var asdf = "Henlo!";
var numb = 56;
```

### Re-assignment

Once we have declared our variables, optionally with a default value, we can later on change the value that is contained within, again using the assignment operator. This is done like so.

```js
var asdf = 5;
asdf = 56;
```

This is a very simple case of reassigning a value. We can also increment the value this way, if it is a number

```js
var asdf = 5;
asdf = asdf + 1; // asdf == 6
```

As pointed out, JavaScript is dynamically typed, meaning we don't have to limit ourselved to assigning a number to a variable which has been declared with a number as it's default value. See the below

```js
var asdf = 5;
asdf = "Hello!"; // perfectly valid
```

Best practices dictate, that it is a better idea to leave the type of value stored in a variable the same. So reassigning a string value to a variable which has been declared as a number is bad practice. But it is most definitely possible.

### Final Example

Alright, so with all this information now, let's go back to the initial example:

```js
"John" + " was born on the " + 19 + " of " + "June" + " at " + "19:36" + " in the town of " + "Manchester";
```

How can we improve this? Well, how about

```js
var person = "John";
var dayOfMonth = 19;
var month = "June";
var time = "19:46";
var town = "Manchester";

person + " was born on the " + dayOfMonth + " of " + month + " at " + time + " in the town of " + town;
```

That's a bit better, isn't it? Now, instead of having to scan through the big line of code for a single thing to change, we can quickly glance at the variables instead, and change one of them.

## Arrays

So now that we've gone about how we can store a single value somewhere, what abotu multiple values?

Imagine the situation. You want to create string variables containing all numbers between 1 and 10, and you'd like to store them somewhere for later use. So, what do you do?

```js
var num1 = "1";
var num2 = "2";
var num3 = "3";
...
```
Ok that's going to get boring real quick. and what if it was up to 100? There's got to be a better way, right?

An array is a data structure ( which we will be covering in more detail later on ), which contains many of the same type of variable in 1 place. 

All arrays have a size. You access each element of the array via an index, which is a number between 0 and the size of your array. See below

```js
var arr = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];
// Need the 3rd element?
var thirdElement = arr[2] // Wait, what? 2?
```

2? Why 2? An important thing to remember with arrays is that element indecies begin at 0. The first element of `arr` is located at `arr[0]`, the second at `arr[1]`, third at `arr[2]` and so forth.

The **square brackets** operator is used to both create and access an array.
When used like this:

```js
var arr = [ 1, 2, 3, 4, ... ];
```

This indicates array creation. While the following

```js
arr[0];
```

indicates we are access an element of the array at the specified index.

## Control Flow

Now that we've gone through and have a general idea of variables and arrays, we can step deeper into JavaScript by talking about control flow. 

This is a term used to describe how code is read by the computer. Generally speaking, code is read from top-to-bottom, left-to-right. Therefore, it makes sense to say that if you have code which looks like this:

```js
var someString = "Hello " + name;
var name = "John";
```

It's going to error. Why? Well, because we're using a variable called `name`, before it has been declared. Imagine this is a book, and you're going through reading it line by line. You see suddenly the author talk in detail about a character, without having introduced the character in any way beforehand. That wouldn't make much logical sense, would it?

The same is true in programming. We have to be aware of where we place variables, while taking into consideration where we're going to be using them later on in our program.

But, this has nothing to do with control flow. This is general knowledge which has to be kept in mind when talking about it.

### Definition

So, to get to the point, what is control flow? Well, since we now know how code is read, the question arises: Can we manipulate that? And the answer is, yes, of course we can. And that's what control flow is.

The simplest definition to be given is that control flow is a way to manipulate the order in which code is read.

Imagine a situation where we have a variable `b`, the value of which we want to change depending on the value of a variable `a`. 

In simple terms, we want to say something along the lines of 
> "If the value of `a` is `2`, then set the value of the variable `b` to `2`. Otherwise, set the value of `b` to `3`."

Without control flow, this would be impossible.

All control flow statements have a _definition_ and a _body_. The definition is dependent on the statement itself, while the body will usually contain some code we would like to execute.

### If-statements

And moving on to the first control flow statement we're going to be look at, it's actually the exact one we need to solve the problem we posited above.

The way we define an if-statement is as follows:
```js
if ( /* condition */ ) {
    // body
}
```

The _condition_ part is simply a statement which equates to a `boolean` value. And if the resulting boolean is `true`, then the body will be executed.

```js
var condition = (4 == 4);
var aString = "something";

if ( condition ) {
    aString = "something else";
}

var someOtherString = aString; // "something else"
```

And to finally solve the initial problem we started with:

```js
var a = 2;
var b;

// if the value of a is 2, set b to 2
if ( a == 2 ) {
    b = 2;
}

// otherwise, if the value of a is 3, set b to 3
if ( a == 3 ) {
    b = 3;
}
```

#### else

To refine the above problem, let's instead say...

> "if the value of `a` is `2`, set `b` to `2`, otherwise set `b` to the value of `a`"

Suddenly, our approach from above is no longer practical. The naive way would be to start creating if-statements for each and very possible case of `a`. if a is 3, set b to 3, if a is 4, set be to 4, etc. etc.

This can never work. Which is why, instead, we can append our if-statement with an else, the combination of which is called an _**if-else statement**_

```js
var a = 4;
var b;

if ( a == 2 ) {
    b = 2;
} else {
    b = a;
}
```

#### else-if

Ok, but what if we _do_ want to account for several different possibilities at once? What if the case of `a == 2` is not the only one of importance to us? What if...

> "if the value of `a` is `2`, set `b` to `2`. If the value of `c` is `5`, set `b` to `10`, otherwise set `b` to `100`"

```js
var a = 7;
var b;
var c = 5;

if ( a == 2 ) { // a != 2, this is not executed
    b = 2;
} else if ( c == 5 ) { // true, this is executed
    b = 10;
} else { // this will not be executed, because the one above was true
    b = 100;
}
```

### switch-case

Sometimes we have a lot of cases to go through, and an `else-if` statement becomes too burdensome to deal with. This is where a `switch-case` statement may come in handy.

This is simply a way to execute different code, depending on the value of a variable. We can only look up the value of a single variable this way, so there are some clear limitations.

For example, take the following problem:

> "If a string is equal to "hello " ( with the space at the end ), concatenate it with "world!" such that the resulting string is "hello world!"."

```js
var someString = "hello ";
switch (someString) {
    case "hello ":
        someString = someString + "world!"; // this is what gets executed
        break; // we add a break statement here to prevent any further checks.
    case "not hello":
        break;
    case "something else":
        break;
    case "":
        break;
    default: // the default case will be executed if no other case is triggered

}
```

### Loops

#### For Loops

#### While Loops


## Data Structures

## Functions
