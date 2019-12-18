# Task Functions
 Tasks are functions that run on an interval.
 You can give them an inital delay and time between each run.

## startTask

### Signature:

```groovy
Task startTask(Builder builder)
```

## setTaskInterval

### Signature:

```groovy
Boolean setTaskInterval(Builder builder, Long ticks)
```

## setTaskExecutable

### Signature:

```groovy
Boolean setTaskExecutable(Builder builder, Consumer runnable)
```

## setTaskDelay

### Signature:

```groovy
Boolean setTaskDelay(Builder builder, Long ticks)
```

## taskOf

### Signature:

```groovy
Builder taskOf(String name)
```

