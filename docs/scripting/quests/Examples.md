# Examples

## A simple quest with one objective. 

```javascript
onQuestRegistration( function(event) {
    // define the basic elements of the quest
    var QUEST_ID = "test-quest"; // the id of the quest. Has to be unique, every quest must have a different id
    var QUEST_NAME = textOf("&lTest Simple Quest"); // the name of the quest. 
    var QUEST_DESCRIPTION = textOf("A test quest to ensure all is well. Kill 5 zombies. You know, for testing."); // the description of the quest
    var VERSION = 1; // the quest version. This currently has no purpose though will in the future server to update player's quests if a version change is detected.

    // create the quest by providing the above defined elements
    var quest = createSimpleQuest(QUEST_ID, QUEST_NAME, QUEST_DESCRIPTION, VERSION);

    // add a new quest objective to the quest, in this case, a killEntityObjective
    addQuestObjective(quest, killEntityObjective("zombie", 5));

    // create the item reward for completing the quest
    var anvil = createItemStack("minecraft:anvil", 7);
    setItemStackDisplayName( anvil, textOf("Anvil Reward") );

    // add a new singleItemReward with the created item
    addQuestReward(quest, singleItemReward( anvil ));

    // register the quest with the manager. If this step isn't done, the quest will not be loaded.
    event.getManager().registerQuest(quest);
});
```

## A simple dialog. 

```javascript
onDialogRegistration( function(event) {
    var rootNode = dialogNode(0)
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
    var DIALOG_ID = "test-dialog"
    var tree = dialogTree(DIALOG_ID, rootNode);
    
    if (tree !== null) { // if the tree has been successfully created
        info("Dialog " + DIALOG_ID + "successfully created");
        event.getManager().registerDialog(tree); // register it
    }
})
```

## A deliverable quest with an item delivery objective.
```javascript
onQuestRegistration(function(event) {
    var QUEST_ID = "delivery-quest"; 
    var QUEST_NAME = textOf("Simple Delivery Quest"); 
    var QUEST_DESCRIPTION = textOf("Deliver three fish."); 
    var VERSION = 1; 

    var quest = createSimpleQuest(QUEST_ID, QUEST_NAME, QUEST_DESCRIPTION, VERSION);
    
    var fish = createItemStack("minecraft:fish", 3);
    var npc = getNpc("Rynelf"); // Given that there is a created CustomNPC with the name "Rynelf"
    
    var turnInNpc = getNpc("Damir");
    var node = dialogNode(7).player(textOf("I've found those three fish!")).build(); // This node will be attached to Damir, given that Damir has a dialog attached already

    //A delivery objective accepts an item, a UUID, and a name for the NPC in the quest
    addQuestObjective(quest, itemDeliveryObjective(fish, getNpcUUID(npc), textOf("Rynelf the Wizard"));
    makeQuestDeliverable(quest, getNpcUUID(turnInNPC), textOf("Damir"), node);
    event.getManager().registerQuest(quest);
})
```
