# Examples

## A simple quest with one objective. 
See [Writing a Quest](Writing-a-Quest.html) for an indepth explanation.

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
See [Writing a Dialog](Writing-a-Dialog.html) for a guide.

```javascript
onDialogRegistration( function(event) {
    var DIALOG_ID = "test-dialog";
    var tree = dialogTree(
        DIALOG_ID,
        dialogNode(0)
        .npc([textOf(["Hello, friend!"])])
        .responses([
            dialogNode(1)
                .player(textOf(["Greetings, Merchant! Have you any work for me today?"]))
                .npc(textOf([
                    "Work? Oh, you bet.",
                    "This morning, as I was setting up my stall, a bunch of children went by and stole an entire stack of cocoa beans!",
                    "I reported this to the guards, of course, but they're either incapable or apathetic to the trouble that has befallen me.",
                    "Do me a favor, and find those kids. I want my cocoa beans back!"
                ]))
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
                .build(),
            dialogNode(2)
                .player(textOf(["Sorry merchant, don't have the time right now."]))
                .npc(textOf(["Oh that's alright, some other time perhaps!"]))
                .build()
        ])
        .build()
   );

   if (tree !== null) {
      info("DialogTree successfully created");
   }

   event.getManager().registerDialog(tree);
})
```
