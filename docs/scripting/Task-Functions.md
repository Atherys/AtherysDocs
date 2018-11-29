# Task Functions
 Tasks are functions that run on an interval.
 You can give them an inital delay and time between each run.

## startTask

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Task startTask(Builder builder)
```

## setTaskInterval

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Boolean setTaskInterval(Builder builder, Long ticks)
```

## setTaskExecutable

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Boolean setTaskExecutable(Builder builder, Consumer runnable)
```

## setTaskDelay

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Boolean setTaskDelay(Builder builder, Long ticks)
```

## taskOf

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Builder taskOf(String name)
```

