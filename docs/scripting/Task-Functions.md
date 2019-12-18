# Task Functions
 Tasks are functions that run on an interval.
 You can give them an inital delay and time between each run.

## startTask

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Task startTask(Builder builder)
```

## setTaskInterval

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Boolean setTaskInterval(Builder builder, Long ticks)
```

## setTaskExecutable

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Boolean setTaskExecutable(Builder builder, Consumer runnable)
```

## setTaskDelay

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Boolean setTaskDelay(Builder builder, Long ticks)
```

## taskOf

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Builder taskOf(String name)
```

