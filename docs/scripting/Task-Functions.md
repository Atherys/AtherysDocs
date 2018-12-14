# Task Functions
 Tasks are functions that run on an interval.
 You can give them an inital delay and time between each run.

## startTask

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Task startTask(Builder builder)
```

## setTaskInterval

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Boolean setTaskInterval(Builder builder, Long ticks)
```

## setTaskExecutable

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Boolean setTaskExecutable(Builder builder, Consumer runnable)
```

## setTaskDelay

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Boolean setTaskDelay(Builder builder, Long ticks)
```

## taskOf

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Builder taskOf(String name)
```

