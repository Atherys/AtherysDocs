# Writing a Quest

If you want to write a quest, you've come to the right place. If you haven't already, you should read [the introduction to programming](../A-bear-bones-introduction-to-JavaScript.html).

We start off by calling the `onQuestRegistration` function, which takes in a function with one parameter. That function will get called when AtherysQuests is registering quests as the plugin loads, so that is when you should register your quest.
```js
onQuestRegistration( function(event) {
```

A quest requires an ID, a name, a description, and a version. The ID must be unique.
```js
var QUEST_ID = "test-quest"; 
var QUEST_NAME = textOf("&lTest Simple Quest"); 
var QUEST_DESCRIPTION = textOf("A test quest to ensure all is well. Kill 5 zombies. You know, for testing."); 
var VERSION = 1; 
```

To create a quest, you must call one the function of the type of quest you want to make. We will be making a simple quest; see [here](Quest-Functions.html) for others. This creates an empty quest, to which you must add objectives and rewards.
```js
var quest = createSimpleQuest(QUEST_ID, QUEST_NAME, QUEST_DESCRIPTION, VERSION);
```

Our quest will have one objective: to kill five five zombies. We call the `addQuestObjective` function and provide the quest that we made, along with the objective. We call the appropriate function to create the objective (see [here](Objective-Functions.html) for more).
```js
addQuestObjective(quest, killEntityObjective("zombie", 5));
```

Next, we will add a reward to our quest. We create an item stack representing 7 anvils, and set its display name to "Anvil Reward". For other item manipulation functions, see [here](Item-Functions.html). 
```js
var anvil = createItemStack("minecraft:anvil", 7);
setItemStackDisplayName(anvil, textOf("Anvil Reward"));
```

To add the reward, we call the `addQuestReward` function and provide our quest again, along with the objective. Currently, there are two types of [rewards](Reward-Functions.html): single items, and money. 
```js
addQuestReward(quest, singleItemReward(anvil));
```

Finally, we get the quest manager that the initial event belongs to, and register the quest.
```js
event.getManager().registerQuest(quest);
```

You can see the full source code for this quest [here](Examples.html).
