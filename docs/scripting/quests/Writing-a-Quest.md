# How To Write a Quest in AtherysQuests

Quests in the AtherysQuest plugin are representative of the work-reward process. We want the player to invest a certain amount of work, in order to attain a reward at the end. Of course, if we were to condense it to this simple explanation, we would end up with quests which are dull and far too grindy to hold the player's interest. Therefore, a quest should offer some sort of story to the player, wherein the process in and of itself is interesting, and the reward is simply the icing on the cake.

# Structure Of A Quest

There are 2 broadly defined types of quests, and they are both a variation of the same simple plan:

1. The player picks up the quest ( they meet it's requirements )
2. The player accomplishes all tasks contained within the quest ( more on this later )
3. The player is rewarded for their efforts

We will go through this plan 1 point at a time, from top to bottom, and lastly we will discuss the 2 different types of quests and the differences between them.

## Requirements

The requirements of a quest are there to ensure the player is qualified to partake in whatever tasks the quest will ask of the player to be done. A player will not be able to pick up a quest unless they meet the requirements for it. Note that requirements are not only for use in Quests, they may also be used in Dialogs ( See [here](/Writing-a-Dialog.html) for more. )

### Types of Requirements

You may see an up-to-date list of all requirement types [here](/Requirement-Functions.html). The following list will go through all of the ones currently available ( as of the time of writing ).

#### Level Requirement

The [Level Requirement](/Requirement-Functions.html#levelRequirement) will check a player's current enchantment level, and if it is above or equal to the specified value, will approve the player. For example, `levelRequirement(10)` will create a requirement of this type, which will check if the player is at or above level 10, and if so, will permit them through.

#### Money Requirement

The [Money Requirement](/Requirement-Functions.html#moneyRequirement) will check a player's current bank for the amount of specified currency they have. If it is at or above that amount, it will permit them through. For example, `moneyRequirement(100.0, currencyOf("atherys:some-currency"))` will create a requirement which will check the player for the amount of `atherys:some-currency` they have, and if it is at or above `100.0`, they will be permitted.

#### Completed Quest Requirement

The [Completed Quest Requirement](/Requirement-Functions.html#completedQuestRequirement) will check if a player has previously completed a quest with a certain id. If so, they will be permitted through.

#### Has Quest Requirement

The [Has Quest Requirement](/Requirement-Functions.html#hasQuestRequirement) will check if a player is _currently_ working on a quest with a certain id. If so, they will be permitted.

#### Operator Requirements ( AND, OR, NOT )

The operator requirements ( aka [`andRequirement`](/Requirement-Functions.html#andRequirement), [`orRequirement`](/Requirement-Functions.html#orRequirement) and [`notRequirement`](/Requirement-Functions.html#notRequirement) ) are used to establish logical relationships between other requirements.

Since all requirements will equate to a `boolean` value ( true/false ), we may freely apply operators like `and`, `or` and `not`. 

For example,

```js
andRequirement(
    moneyRequirement(100.0, currencyOf("atherys:some-currency")),
    levelRequirement(10)
)
```

the above will create a requirement which will check the player for their money, and their level. And if **both** requirements are met, it will permit the player through.

Other examples:
```js
// the player must have either 100.0 of atherys:some-currency, or level 10
orRequirement(
    moneyRequirement(100.0, currencyOf("atherys:some-currency")),
    levelRequirement(10)
)
```
```js
// the player must not currently be working on a quest with id "some-other-quest"
notRequirement(hasQuestRequirement("some-other-quest"))
```
```js
// the player must neither be working on a quest with id "some-other-quest", nor have completed a quest with id "some-third-quest"
notRequirement(
    andRequirement(
        hasQuestRequirement("some-other-quest"),
        completedQuestRequirement("some-third-quest")
    )
)
```

As we can see from the last example, we can use operator requirement inside of eachother to achieve very powerful control over which players gain access to which quests ( or dialog nodes ).

## Objectives

Objectives are the core of quests. They represent the specifics of what the player is asked to accomplish in order to complete the quest. 

### Types of Objectives

The following list will go through all available objective types as of the time of writing. For an up-to-date list, you may refer to the objective functions found [here](/Objective-Functions.html).

#### Kill Entity Objective

The [killEntityObjective](/Objective-Functions.html#killEntityObjective) tasks the player with killing a given amount of an entity with the provided name.

For example, if we have many different entities of different types ( zombies, sheep, pigs, etc. ) all spawning with the same common name ( for example, "charlie" ) then the following:
```js
killEntityObjective("charlie", 10);
```
Will require of us to kill 10 entities with that name in order to complete this objective.

#### Dialog Objective

The [dialogObjective](/Objective-Functions.html#dialogObjective) will require the player to take part in a dialog with a certain string id, and reach a node with the provided numerical id within that tree. For more details on how dialogs work, see ["How To Write a Dialog in AtherysQuests"](/Writing-a-Dialog.md).

Example:
```js
dialogObjective("some-dialog-tree", 4, textOf("Speak to some NPC and get whatever information out of them"));
```
Here, we're asking the player to seek out a dialog tree with the id `some-dialog-tree`, and reach a node within it with a numerical id of `4`. The last argument, the `description`, will be how the objective is presented to the player.

#### Item Delivery Objective

The [itemDeliveryObjective](/Objective-Functions.html#itemDeliveryObjective) requires that you deliver some item ( the amount is described as part of the item ) to an entity with the provided UUID.

```js
var entity = ...; // Get the entity from somewhere. It could be a custom-created one, or an NPC. It can be any entity at all, of any type.
var entityUUID = getEntityUUID(entity);
var itemToDeliver = createItemStack("minecraft:stone", 10); // create an itemstack of 10 stone
// how the player obtains this item is undefined. However, it does not necessarily have to be the exact same itemstack as we are creating here. This is more of a template which will be used to compare against whatever the player is attempting to deliver.

var objective = itemDeliveryObjective(itemToDeliver, entityUUID.toString(), textOf("What you want the npc's name to be in the description"))
```

#### Interact With Block Objective

The [interactWithBlockObjective](/Objective-Functions.md#interactWithBlockObjective) allows you to attach an objective to a player right clicking a specific block in the world.

```js
var world = getWorldById("world"); // the world the block is located in
var location = locationOf(world, 100.0, 50.0, 150.0); // the location, including the world and the position
var objective = interactWithBlockObjective(location);
```

#### Reach Location Objective

The [reachLocationObjective](/Objective-Functions.md#reachLocationObjective) will require of the player to get within a certain radius of a specified location.

```js
var world = getWorldById("world"); // the world the block is located in
var location = locationOf(world, 2000.0, 140.0, -1200.0); // the location, including the world and the position
var objective = reachLocationObjective(location, textOf("The location's name"), 5.0);
```

The last argument, the `5.0`, specifies the radius. This is the distance that the player must be within the location in order for the objective to count. Note that this number must _always_ be above `1.0`, as any value beneath that may be far too close for the player to get to.

## Rewards

After the player has gone through all of the objectives of a quest, it is said that they have successfully completed the quest and may therefore receive their rewards.

This can happen in 2 ways. Either the player completes the quest via their quest log, or they must meet with an NPC ( this is a requirement for what are called _deliverable_ quests. ).

### Types of Rewards

The following list will go through all available reward types as of the time of writing. For an up-to-date list, you may refer to the objective functions found [here](/Reward-Functions.html).

#### Single Item Reward

A [singleItemReward](/Reward-Functions.html#singleItemReward) will give the player a single itemstack as a reward.

```js
var itemstack = createItemStack("minecraft:anvil", 1);
setItemStackDisplayName(itemstack, textOf("&iThe Anvil"));

var reward = singleItemReward(itemstack);
```

#### Money Reward

A [moneyReward](/Reward-Functions.html#moneyReward) will give the player some currency as a reward.

```js
var reward = moneyReward(150.0, currencyOf("atherys:some-currency"));
```

#### Command Reward

A [commandReward](/Reward-Functions.html#commandReward) will execute a command on the server as root. This is a very powerful tool, and one should be careful when using it. However, using this, virtually anything which can be applied to a player via command can be represented as a reward.

There are several custom placeholders which are supported by this function. they are listed below:

|Placeholder       |Description              |
|------------------|-------------------------|
| ${player}        | The player's name       |
| ${world}         | The player's world name |
| ${x}, ${y}, ${z} | The player's coordinate |

Example usage:

```js
var reward = commandReward(
    'give ${player} minecraft:diamong_sword{display:{Lore:["a legendary sword"]}}', 
    textOf("Some reward description")
);
```

Above what we see is, in fact, a single item reward, custom implemented using a command.

## Types of Quests

There are 2 broadly defined types of quests. 

### Simple Quests

A simple quest attempts to implement the plan we discussed at the beginning in the purest form possible.

In a simple quest, objectives can be executed in any order the player chooses.

To create a simple quest, we may use the [createSimpleQuest](/Quest-functions.html#createSimpleQuest) function, but more on this later.

### Staged Quests

A staged quest differs from it's simple counterpart in that objectives must be executed in a strictly defined order. This happens using [Stages](/Quest-Functions.html#stageOf).

#### Stages

A stage is representative of a single step along the way to completing the quest. Along the way, it may be necessary to provide the player with certain rewards ( like, for example, once they complete a certain stage, they are to be teleported somewhere else. This can be accomplished using a commandReward. ).

A stage contains an objective and a single reward, and that's it.

```js
var stage = stageOf(
    killEntityObjective("charlie", 10),
    commandReward('tppos ${player} 100 70 2000')
);
```

Once the player has killed 10 entities with the name "charlie", they will be teleported to `100, 70, 2000`.

### Deliverable Simple Quests

// TODO

### Deliverable Staged Quests

// TODO

---
Old Stuff Below

---

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

Next, we will add a reward to our quest. We create an item stack representing 7 anvils, and set its display name to "Anvil Reward". For other item manipulation functions, see [here](../Item-Functions.html). 
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
