# Writing a Dialog

Dialogs are a large part of AtherysQuests, and this guide will introduce how to write them.

We start by calling the function `onDialogRegistration`, which takes in a function with one parameter, much like any event handling function. This function will get called when AtherysQuests is registering dialogs, so that's when you should register yours.
```javascript
onDialogRegistration( function(event) {
```

A dialog requires a unique ID.
```javascript
var DIALOG_ID = "test-dialog";
```

To create a dialog, we call the `dialogTree` function, which takes in a string as its ID, and a `DialogNode` that acts as the starting node for the entire dialog. The root node of any dialog should have an ID of 0.
```javascript
    var tree = dialogTree(
        DIALOG_ID,
        dialogNode(0)
```

Next, we define what the first thing the NPC will say with the `npc` method. It accepts an array of `Text` objects.
```javascript
    .npc([textOf(["Hello, friend!"])])
```

After that, we start creating the responses to the initial node. The `responses` function takes a parameter of dialog nodes. The `player` function accepts a `Text` object that the player will "say" to the NPC.
```javascript
    .responses([
        dialogNode(1)
            .player(textOf(["Greetings, Merchant! Have you any work for me today?"]))
                .npc(textOf([
                    "Work? Oh, you bet.",
                    "This morning, as I was setting up my stall, a bunch of children went by and stole an entire stack of cocoa beans!",
                    "I reported this to the guards, of course, but they're either incapable or apathetic to the trouble that has befallen me.",
                    "Do me a favor, and find those kids. I want my cocoa beans back!"
                ]))
```

We now define two responses to the previous node. One of them rejects the offer, and will end the dialog. The other defines receiving a quest. With the `quest` function you can give the player a quest when they choose a node. Make sure the `String` you pass to `getQuestById` is exactly the ID of the quest or the quest will be `null`. *Note*: You have to call `.build` to construct your node at the end.
```javascript
		.responses([
			dialogNode(3)
				.player(textOf([
					"Oh, now that you mention it, I am a bit busy today, so I don't know if I'll find the time."
				]))
				.npc(textOf([
					"No worries, I'm sure the guards will get to it.. eventually..."
				]))
				.build(),
			dialogNode(4)
				.player(textOf([
					"Kids, huh? Well, how hard could it be. I'll certainly take a look around for you."
				]))
				.npc(textOf([
					"Oh, splendid! Thank you very much, I eagerly await to see what you find out."
				]))
				.quest(getQuestById("test-quest"))
				.build()
			])
```

This is the second response to the initial node. This one will also end the dialog immediately.
```javascript
        dialogNode(2)
            .player(textOf(["Sorry merchant, don't have the time right now."]))
            .npc(textOf(["Oh that's alright, some other time perhaps!"]))
            .build()
        ])
        .build()
);
```

Finally, we check that tree is not null and register it if so. The registration event contains the `DialogService`, which is used to register dialogs.
```javascript
    if (tree !== null) {
        info("Dialog " + DIALOG_ID + "successfully created");
        event.getManager().registerDialog(tree);
    }
})
```

See [here](Examples.html#a-simple-quest-with-one-objective) for the full code.