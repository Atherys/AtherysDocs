---
title: Task Functions
module: task
---
#Task Functions

## buildTask

### Signature: 
```javascript
Task.Builder buildTask(String name)
```

## setTaskDelay

### Signature: 
```javascript
Boolean setTaskDelay(Task.Builder builder, Long ticks)
```

## setTaskInterval

### Signature: 
```javascript
Boolean setTaskInterval(Task.Builder builder, Long ticks)
```

## setTaskExecutable

### Signature: 
```javascript
Boolean setTaskExecutable(Task.Builder builder, Consumer<Task> runnable)
```

## startTask

### Signature: 
```javascript
Task startTask(Task.Builder builder)
```

## cancelTask

### Signature: 
```javascript
Boolean cancelTask(Task task)
```

