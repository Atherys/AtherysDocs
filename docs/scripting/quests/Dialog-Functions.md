# Dialog Functions
 Dialog functions allow you to create and attach dialogs.
 See (Writing a Dialog)[https://atherys.com/docs/scripting/quests/Writing-a-Dialog.html]
 for an example of how to write a dialog.

## attachDialog

Attaches a dialog to an `Entity`.

#### Signature:
```js
Boolean attachDialog(Entity entity, String dialogId)
```

Returns a _**Boolean**_: Whether the attachment was successful.

## dialogTree

Creates a dialog tree.

#### Signature:
```js
DialogTree dialogTree(String id, DialogNode root)
```

**id**: A unique string ID.

**root**: The starting dialog node.

## dialogNode

Returns a `DialogNodeBuilder`, which is used to create a `DialogNode`. See
 [Writing a Dialog](https://atherys.com/docs/scripting/quests/Writing-a-Dialog.html) for how to use it.

#### Signature:
```js
DialogNodeBuilder dialogNode(Integer id)
```

**id**:           The numerical id of the node ( must be unique within the Dialog Tree )

Returns a _**DialogNodeBuilder**_: A new DialogNode object

## registerDialogTree

Registers a dialog tree for use.

#### Signature:
```js
Boolean registerDialogTree(DialogTree dialogTree)
```

