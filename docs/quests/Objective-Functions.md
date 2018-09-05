---
module: objective
---
# Objective Functions

Objectives are what players have to accomplish in order to finish a quest. Objective descriptions/names are how the objective will be described in the player's quest log.

## dialogObjective

An objective that requires the player to meet a specific dialog node in a dialog tree.

### Signature: 
```javascript
Objective dialogObjective(String treeId, Integer dialogNode, Text description)
```

## interactWithBlockObjective

An objective that requires the player to interact with a specific block in the world.

### Signature: 
```javascript
Objective interactWithBlockObjective(BlockState blockState, Location<World> location)
```

## killEntityObjective

An objective that requires killing a number of entities. The entity name is in the format "minecraft:entity".

### Signature: 
```javascript
Objective killEntityObjective(String entityName, Integer amount)
```

## reachLocationObjective

An objective that requires reaching a specific location, within a radius.

### Signature: 
```javascript
Objective reachLocationObjective(Location<World> location, Text name, Double radius)
```

## itemDeliveryObjective

### Signature:
```javascript
  itemDeliveryObjective(ItemStack itemStack, String targetUUID, Text targetName, )
```

