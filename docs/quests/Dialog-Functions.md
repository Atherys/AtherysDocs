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

## createDialogTree

Creates a dialog tree given a String and a DialogNode. The ID must be unique.

### Signature
```javascript
DialogTree createDialogTree(String id, DialogNode root)
```
## dialogTree

### Signature:
```javascript
DialogTree  dialogTree(String id, DialogNode root)
```

## dialogNode

### Signature:
```javascript
DialogNode  dialogNode(String serialized)
```

