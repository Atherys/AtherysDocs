# Objective Functions
 Objectives are what players must accomplish to complete quests. These are the functions
 that allow you to create them.

## killEntityObjectiveFunc

An objective that requires killing a number of entities. The entity name is in the format "minecraft:entity".

#### Signature:
```js
Objective killEntityObjectiveFunc(String entityName, Integer amount)
```

**entityName**: The name of the entity. ie: "minecraft:zombie".

**amount**: The number of entities to kill.

## dialogObjectiveFunc

An objective that requires the player to meet a specific dialog node in a dialog tree.

#### Signature:
```js
Objective dialogObjectiveFunc(String treeId, Integer dialogNode, Text description)
```

**treeId**: The dialog tree's ID.

**dialogNode**: The node ID within the tree.

**description**: The objective's description.

## interactWithBlockFunc

An objective that requires interacting with a specific block.

#### Signature:
```js
Objective interactWithBlockFunc(Location location)
```

**location**: The block the player has to interact with.

## itemDeliveryFunc

An objective that requires delivering an item to an entity.

#### Signature:
```js
ItemDeliveryObjective itemDeliveryFunc(ItemStack itemStack, String targetUUID, Text targetName)
```

**itemStack**: The item to deliver.

**targetUUID**: The UUID of the entity to deliver the item to.

**targetName**: The name of the entity.

## reachLocationObjectiveFunc

An objective that requires reaching a specific location, within a radius.

#### Signature:
```js
Objective reachLocationObjectiveFunc(Location location, Text name, Double radius)
```

**location**: The location to reach.

**name**: The name of the location.

**radius**: The radius around the location.

