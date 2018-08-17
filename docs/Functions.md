---
title: Functions
---
# Functions
AtherysScript includes within it many different functions whose purpose is to abstract away details of the SpongeAPI, and allow you to do API calls without getting into the nitty gritty of certain aspects of Sponge.

One example for this is Optionals. Sponge API makes use of Optionals extensively, which in terms of Java is fantastic and it makes for a well-rounded API. However, in a script, this would only serve to complicate the code. Thus, AScript functions will never return an optional. If a call failed in some way, the function will either return a `boolean`, or a `null` in case the function is meant to return an object.

This documentation should cover all available functions, what they return and in which cases they may return null or false.

The goal is also to provide simple example uses of each function, making it easier to quickly reference this wiki and the documentation in general. 

## How the Documentation works

Each function present in AScript will be documented using the following format:
~~~~
## functionName

<function description>

#### Signature:
```javascript
    <function signature>
```

#### Example:
```javascript
    <simple example usage of the function>
```
~~~~
The function description is a simple-to-understand written description of what the function does, and any quirks it may or may not have.

The function signature is pseudo-code and written in the following format:
```
ReturnValue functionName(Type1 firstArgument, Type2 secondArgument, ...)
```

The example is written in the default implementation of AScript, which is JavaScript.
