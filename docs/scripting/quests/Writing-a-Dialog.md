# How To Write a Dialog in AtherysQuests

Dialogs are an important part of the AtherysQuests plugin. They are primarily responsible for
allowing for interaction between players and NPCs.

## API

You can find the reference documentation for the Dialog API [here](https://atherys.com/docs/scripting/quests/Dialog-Functions.html).

For the duration of this guide, we will be utilizing the function described there, alongside those of the Quest API (found [here](https://atherys.com/docs/scripting/quests/Quest-Functions.html)).

## Hello Dialog!

### Creating The Dialog

To start with, let's examine the basic functions we will be using to construct our dialog:

#### `dialogTree`

Dialogs in AtherysQuests are represented by a tree structure. This means that every dialog will have a starting point, called the *root node*, which will branch off into possibly multiple *responses*. Each response is also a *node* in and of itself, meaning it too can contain responses and so on.

Looking at the signature of the `dialogTree` function, we see that it accepts 2 arguments and returns 1 value:

```groovy
DialogTree dialogTree(String id, DialogNode root)
```

The first, `id`, is a uniquely identifiable string which can be used later on to get the exact same dialog tree object we create with this function. The second argument, `root`, will be the root node we mentioned previously, and the entry point to our dialog.

#### `dialogNode`

In order for us to create the root node, we need to know how to create a node in general. For this, we use the `dialogNode` function:

```groovy
DialogNodeBuilder dialogNode(Integer id)
```

This is a bit trickier to use. As you can see, it accepts a single argument, an integer called `id`. This is a numeric identifier for this node specifically, which must be unique only within the dialog tree. In short, all nodes belonging to the same dialog tree must have whole number ids.

And in return, we get an object called a `DialogNodeBuilder`. This will contain methods which allow us to customize the newly created dialog node. You may find the full definition of the `DialogNodeBuilder` [here](https://github.com/Atherys-Horizons/AtherysQuests/blob/da03b0cf6c3421406faa6cb6353e4fff9a505e0a/src/main/java/com/atherys/quests/dialog/tree/DialogNodeBuilder.java).

To use it, we simply do the following:
```groovy
def rootNode = dialogNode(0)
    .player(textOf("What the player says"))
    .npc([
        textOf("Multiple lines of"),
        textOf("what the npc will say in response to the player."),
        textOf("The player will always speak first, unless it is the root node.")
    ])
    .quest(getQuestById("some-quest-id"))
    .requirements([
        moneyRequirement(20.0, currencyOf("atherys:some-currency")),
        levelRequirement(10)
    ])
    .responses([
        dialogNode(...),
        dialogNode(...),
        dialogNode(...)
    ])
    .build();
```

The first thing that might confuse you is the period in front of every line after we call `dialogNode`. This is called the dot operator, and in programming in general it signifies that we are accessing _something_ which belongs to the object. In this case, we are creating a dialog node object, and we are accessing one of it's methods.

In fact, we do this every time we call one of it's methods, and this is because of the way the `DialogNodeBuilder` is made. Every one of it's methods returns a reference back to itself, which means we can do what is referred to as [_method chaining_](https://en.wikipedia.org/wiki/Method_chaining). 

The above code can also be written out in a single line, as follows:

```groovy
def rootNode = dialogNode(0).player(textOf("What the player says")).npc([textOf("Multiple lines of"), textOf("what the npc will say in response to the player."), textOf("The player will always speak first, unless it is the root node.")]).quest(getQuestById("some-quest-id")).requirements([moneyRequirement(20.0, currencyOf("atherys:some-currency"))]).responses([dialogNode(...), dialogNode(...), dialogNode(...)]).build();
```

However, as you can see, this is extremely unreadable and hard to follow. Since whitespace doesn't cost us anything, we can place linebreaks and spaces appropriately to make it easier to maintain and read.

Below you will find a detailed explanation of what each method does:

* `DialogNodeBuilder player(Text playerText)`
    - This will set the text that the player will speak to the NPC. If this is the root node, then this will be ignored ( and in fact can simply be set to `null`, or not set at all ). NPCs in AtherysQuests dialogs will always initiate the conversation first.
* `DialogNodeBuilder npc(Text... npcText)`
    - This will set the text which the NPC will speak to the player. The `...` operator means that you may provide multiple text objects here, in the form of a javascript array (using the square bracket (`[]`) operator ). If this is a leaf node ( i.e. a node without any responses ), then the NPC _can_ have empty text, but if some are provided, then they will be shown to the player before the dialog ends.
* `DialogNodeBuilder quest(Quest quest)`
    - This will set the quest that will be offered to the player once they reach this node in the dialog. This depends on whether or not the player meets both the dialog node's requirements **and** that of the quest itself.
* `DialogNodeBuilder requirements(Requirement... requirements)`
    - This will set the requirements for this dialog node. If the player does not meet these, then they will not be able to proceed down this path of the dialog ( they will not be able to select it as a response, or be offered any quest that is contained within ).
* `DialogNodeBuilder responses(DialogNode... responses)`
    - And finally, here we provide all the possible responses that the player may select from. As you will notice, they are of the same type as the object we are currently constructing, namely the `DialogNode`. So, what we can do, is call the `dialogNode` function inside here, just like we call the `textOf` function inside the `npc` or `player` function calls, in order to create a new dialog node right there and then. Do this recursively, and you may envision how the tree forms.
* `DialogNode build()`
    - To wrap it all up, we call the `build` method which will return to us the dialog node object we have been constructing all along. From here, we may take it, and place it within a defiable, with which we can call the `dialogTree` function to finally create our tree.

```groovy
def rootNode = dialogNode(0)
    .npc([textOf("Hello, friend!")])
    .responses([
        dialogNode(1)
            .player(textOf("Greetings, Merchant! Have you any work for me today?"))
            .npc([
                textOf("Work? Oh, you bet."),
                textOf("This morning, as I was setting up my stall, a bunch of children went by and stole an entire stack of cocoa beans!"),
                textOf("I reported this to the guards, of course, but they're either incapable or apathetic to the trouble that has befallen me."),
                textOf("Do me a favor, and find those kids. I want my cocoa beans back!")
            ])
            .responses([
                dialogNode(3)
                    .player(textOf(
                        "Oh, now that you mention it, I am a bit busy today, so I don't know if I'll find the time."
                    ))
                    .npc(textOf(
                        "No worries, I'm sure the guards will get to it.. eventually..."
                    ))
                    .build(),
                dialogNode(4)
                    .player(textOf(
                        "Kids, huh? Well, how hard could it be. I'll certainly take a look around for you."
                    ))
                    .npc(textOf(
                        "Oh, splendid! Thank you very much, I eagerly await to see what you find out."
                    ))
                    .quest(getQuestById("test-quest"))
                    .build()
            ])
            .build(),
        dialogNode(2)
            .player(textOf("Sorry merchant, don't have the time right now."))
            .npc([
                textOf("Oh that's alright, some other time perhaps!")
            ])
            .build()
    ])
    .build();
def DIALOG_ID = "test-dialog";
def tree = dialogTree(DIALOG_ID, rootNode);
```

And with that, we're finished, our dialog tree has been created. But now, we have to register it with the plugin, otherwise it would not be available for us to access in-game and attach to an NPC using the `/dialog set <dialog-id>` command.

#### `onDialogRegistration`

Here we have to take a look at the function `onDialogRegistration`. This is part of the Event API, and it allows us to attach some code to an event, whenever it might happen. Based on the name, we can quite easily guess that this is where we're suppose to be creating and registering our dialogs. And, doing it is not that hard:

```groovy
onDialogRegistration({ event ->

    def DIALOG_ID = "test-dialog";
    def tree = ... // dialogTree from above

    if (tree !== null) { // if the tree has been successfully created
        info("Dialog " + DIALOG_ID + "successfully created");
        event.getManager().registerDialog(tree); // register it
    }
} as Consumer);
```

A lot is happening in the above 5 or so lines of code. Firstly, we're attaching an _event handler_ to the `DialogRegistrationEvent` using the `onDialogRegistration` function. From this, we receive an object of the type `DialogRegistrationEvent`, which will provide us with a reference to the `DialogService`, where we will find the `registerDialog(DialogTree)` method, and this is what we must call in order to register our event.

On, and just to be safe, we've wrapped the whole thing in an if-statement just in case the DialogTree has not be initialized properly.
