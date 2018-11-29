# NPC Functions
 NPC Functions allow you to create and manipulate NPCs through scripting. An
 `NPCFile` is equivalent to an NPC. It wraps an `Entity` object and customizes it.

## getNPCType

Get the `EntityType` of an entity.

#### Signature:
```js
EntityType getNPCType(NPCFile npcFile)
```

Returns a _**EntityType**_: The type of entity, or null if it doesn't have one.

## createNPC

Creates an NPC of the given type at the given location.

#### Signature:
```js
NPCFile createNPC(String entityTypeId, Location location)
```

## setNPCName

Sets the name of the given NPC.

#### Signature:
```js
Boolean setNPCName(NPCFile npcFile, Text name)
```

## setNPCSkin

Sets the skin of the NPC given a player's UUID.

#### Signature:
```js
Boolean setNPCSkin(NPCFile npcFile, UUID uuid)
```

**npcFile**: A humanoid NPC.

Returns a _**Boolean**_: False if the NPC was not humanoid.

## getNPCUuid

Gets the UUID from an NPC. This will be invalidated after a world restart.

#### Signature:
```js
UUID getNPCUuid(NPCFile npc)
```

**npc**: The NPC.

Returns a _**UUID**_: The NPC's UUID.

## getNPCEntity

Gets the `Entity` object from the NPC, or null. This is for functions that might require
 an `Entity` object instead of an npc.

#### Signature:
```js
Entity getNPCEntity(NPCFile npcFile)
```

