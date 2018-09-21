# Writing a Dialog

Dialogs are a large part of AtherysQuests.

We start by calling the function `onDialogRegistration`, which takes in a function with one parameter, much like any event handling function. This function will get called when AtherysQuests is registering dialogs, so that's when you should register yours.
```js
onDialogRegistration( function(event) {
```

A dialog requires a unique ID.
```js
var DIALOG_ID = "test-dialog";
```

To create a dialog, we call the `dialogTree` function, which takes in a string as its ID, and a `DialogNode` that acts as the starting node for the entire dialog. `JSON.stringify` will turn the provided object into a string, which gets deserialized by AtherysQuests. But you don't have to worry about that.
```js   
    var tree = dialogTree(
        DIALOG_ID,
        dialogNode(JSON.stringify({
```

Next, we create the initial dialog. The `id` of each dialog node has to be unique within the dialog tree, and the starting node should always have an `id` of 0. `npcResponse` is an array of strings that the NPC will tell the player, and `responses` is an array of additional nodes that branch off that node.
```js
            id: 0,
            npcResponse: [
                "Hello, friend!"
            ],
            responses: [
```

Next we define the first response the player can take to the starting node. `playerText` is the text the player will see as an option to choose.
```js
                {
                    id: 1,
                    playerText: "Greetings, Merchant! Have you any work for me today?",
                    npcResponse: [
                        "Work? Oh, you bet.",
                        "This morning, as I was setting up my stall, a bunch of children went by and stole an entire stack of cocoa beans!",
                        "I reported this to the guards, of course, but they're either incapable or apathetic to the trouble that has befallen me.",
                        "Do me a favor, and find those kids. I want my cocoa beans back!"
                    ],
```

Here again are responses to the node with `id` 1. 
```js
                    responses: [
                        {
                            id: 3,
                            playerText: "Oh, now that you mention it, I am a bit busy today, so I don't know if I'll find the time.",
                            npcResponse: [
                                "No worries, I'm sure the guards will get to it.. eventually..."
                            ]
                        },
```

In the second response to the node we see `questId`. It must correspond to an existing quest, and will be offered to the player if they choose this option.
```js
                        {
                            id: 4,
                            playerText: "Kids, huh? Well, how hard could it be. I'll certainly take a look around for you.",
                            npcResponse: [
                                "Oh, splendid! Thank you very much, I eagerly await to see what you find out."
                            ],
                            questId: "test-quest"
                        }
```

Finally, there is a second option to the first node.
```js
                    ]
                },
                {
                    id: 2,
                    playerText: "Sorry merchant, don't have the time right now.",
                    npcResponse: [
                        "Oh that's alright, some other time perhaps!"
                    ]
                }
            ]
        }))
    );
```

Here is a test to make sure that our tree got created. Then, we get the dialog manager the event belongs to, and register our dialog.
```js
    if ( tree !== null ) info("DialogTree successfully created");
    
    event.getManager().registerDialog(tree);
});
```
    
