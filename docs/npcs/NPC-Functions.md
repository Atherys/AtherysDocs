---
title: NPC Functions
---
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

Gets the entity object from the NPC, or null.

#### Signature:
```js
Entity getNPCEntity(NPCFile npcFile)
```

