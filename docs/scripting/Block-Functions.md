# Block Functions
 Block functions are meant to create, modify and remove blocks from a World.
 It may be useful to take a look at the [Location functions](Location-Functions.html) prior to this to
 familiarize yourself with how to get a world, and a location within said world.

## blockOf

Used to create a new [`BlockState`](https://jd.spongepowered.org/7.0.0/org/spongepowered/api/block/BlockState.html) from a block type id.

### Signature:
```js
BlockState blockOf(String blockTypeId)
```
### Arguments:

**blockTypeId**: The block id.

Returns a _**BlockState**_: The `BlockState` for the given id, or null.

### Example:

```js
var block = blockOf("minecraft:anvil");
```

## getBlockFromLocation

Used to get the `BlockState` present at the specified location.

### Signature:
```js
BlockState getBlockFromLocation(Location worldLocation)
```
### Arguments:

**worldLocation**: The location to get the block from.

Returns a _**BlockState**_: A `BlockState` representing the block at the location.

### Example:

```js
var location = locationOf( getWorldFromName("world"), 100, 50, 100 );
var block = getBlockFromLocation(location);
```

## setBlockAtLocation

Used to change the BlockState at the specified location

### Signature:
```js
Boolean setBlockAtLocation(Location worldLocation, BlockState state)
```
### Arguments:

**worldLocation**: The location to change.

**state**: The `BlockState` to change the location to.

Returns a _**Boolean**_: Whether the application worked.

### Example:

```js
var location = locationOf( getWorldFromName("world"), 100, 50, 100 );
var success = setBlockAtLocation( location, blockOf("minecraft:anvil") );
```

