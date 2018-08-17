---
title: Location Functions
---
# Location Functions
Location functions allow you to reference locations in a world, and allow you to get a world in order to reference locations within it.

## getWorldByName

Used to get a world by it's name. The default world name is usually `world`.

#### Signature:
```javascript
    World getWorldByName(String worldName)
```

#### Example:
```javascript
    var world = getWorldByName("world");
```

## locationOf

Creates a new location from the provided parameters.

#### Signature:
```javascript
    Location locationOf( World world, Number x, Number y, Number z )
```

#### Example:
```javascript
    var world = getWorldByName("world");
    var location = locationOf(world, 160, 50.3, -100.43);
```
