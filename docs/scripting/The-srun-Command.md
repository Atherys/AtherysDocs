---
title: The /srun command
---
# /srun

AtherysScript also provides a command called `/srun`. It's primary purpose is to execute small snippets of code inside the game, provided the user has the required permission ( `atherysscript.admin.srun` ).

## Example

```javascript
/srun var player = getPlayerFromName("HeadHunter111");
/srun var location = getPlayerLocation(player);
/srun var block = blockOf("minecraft:anvil");
/srun setBlockAtLocation( block, location );
```

This will, in order:
1. Get a player with the name `HeadHunter111` and store their `Player` object in a variable called `player`, if present. If not, `player` is null and `getPlayerLocation` will throw an error.
2. Get the location of the player, and store it to `location`
3. Get and store a new block of type `minecraft:anvil`
4. Set the block at the current position of the player to the block created in step 3.
