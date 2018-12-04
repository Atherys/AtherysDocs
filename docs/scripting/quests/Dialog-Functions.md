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

Creates a new dialog node. See
 [Writing a Dialog](https://atherys.com/docs/scripting/quests/Writing-a-Dialog.html) for how to use it.

#### Signature:
```js
DialogNode dialogNode(Integer id, List requirements, Text player, List npc, Quest quest, List responses)
```

**id**:           The numerical id of the node ( must be unique within the Dialog Tree )

**requirements**: The list of requirements the player must fulfill in order to select this as a response ( can be null )

**player**:       The text that the player will say to the npc ( if this is the root node, this should be null )

**npc**:          the npc's text response

**quest**:        the quest that will be offered to the player upon selecting this node ( can be null )

**responses**:    The responses that the player can select ( Can be null. Should be null if this is a leaf node )

Returns a _**DialogNode**_: A new DialogNode object

## registerDialogTree

Registers a dialog tree for use.

#### Signature:
```js
Boolean registerDialogTree(DialogTree dialogTree)
```

