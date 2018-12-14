# Objective Functions
 Objectives are what players must accomplish to complete quests. These are the functions
 that allow you to create them.

## killEntityObjective

An objective that requires killing a number of entities. The entity name is in the format "minecraft:entity".

### Signature:
```js
Objective killEntityObjective(String entityName, Integer amount)
```
### Arguments:

**entityName**: The name of the entity. ie: "minecraft:zombie".

**amount**: The number of entities to kill.

## dialogObjective

An objective that requires the player to meet a specific dialog node in a dialog tree.

### Signature:
```js
Objective dialogObjective(String treeId, Integer dialogNode, Text description)
```
### Arguments:

**treeId**: The dialog tree's ID.

**dialogNode**: The node ID within the tree.

**description**: The objective's description.

## reachLocationObjective

An objective that requires reaching a specific location, within a radius.

### Signature:
```js
Objective reachLocationObjective(Location location, Text name, Double radius)
```
### Arguments:

**location**: The location to reach.

**name**: The name of the location.

**radius**: The radius around the location.

## itemDeliveryObjective

An objective that requires delivering an item to an entity.

### Signature:
```js
ItemDeliveryObjective itemDeliveryObjective(ItemStack itemStack, String targetUUID, Text targetName)
```
### Arguments:

**itemStack**: The item to deliver.

**targetUUID**: The UUID of the entity to deliver the item to.

**targetName**: The name of the entity.

## interactWithBlockObjective

An objective that requires interacting with a specific block.

### Signature:
```js
Objective interactWithBlockObjective(Location location)
```
### Arguments:

**location**: The block the player has to interact with.

