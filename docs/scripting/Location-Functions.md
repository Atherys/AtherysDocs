# Location Functions
 Location functions allow you to reference locations in a world,
 and allow you to get a world in order to reference locations within it.

## locationOf

Creates a new location from the provided parameters.

### Signature:
```groovy
Location locationOf(World world, Double x, Double y, Double z)
```

### Example:

```groovy
var world = getWorldByName("world");
var location = locationOf(world, 160, 50.3, -100.43);
```

## getWorldFromName

Used to get a world by it's name. The default world name is usually world.

### Signature:
```groovy
World getWorldFromName(String worldName)
```
### Arguments:

Returns a _**World**_: 

### Example:

```groovy
var world = getWorldByName("world");
```

