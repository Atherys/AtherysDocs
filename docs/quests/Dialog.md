---
module: dialog
---
# Dialog Functions

## registerDialogTree

Registers a dialog tree. This must be called on a dialog for it to be usable in the game.

### Signature: 
```javascript
Boolean registerDialogTree(DialogTree dialogTree)
```

## dialogNode

### Signature
```javascript
DialogNode dialogNode(Integer id, Requirement[] requirements, Text player, Quest quest, Text[] npc, DialogNode[] responses)
```

## createDialogTree

Creates a dialog tree given a String and a DialogNode. The ID must be unique.

### Signature
```javascript
DialogTree createDialogTree(String id, DialogNode root)
```
