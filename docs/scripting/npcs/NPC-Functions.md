# NPC Functions
 These functions allow you access and modify NPCs from the CustomNPCs mod.

## getNpc

Retrieves a CustomNPC from a name.

### Signature:
```js
ICustomNpc getNpc(String name)
```
### Arguments:

**name**: The name of the NPC.

Returns a _**ICustomNpc**_: An `ICustomNpc` object.

## getNpcUUID

Retrieve's an NPC's UUID.

### Signature:
```js
UUID getNpcUUID(ICustomNpc npc)
```
### Arguments:

**npc**: The NPC to get the UUID for.

Returns a _**UUID**_: The NPC's UUID.

