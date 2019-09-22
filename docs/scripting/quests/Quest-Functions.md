# Quest Functions
 These are the bulk of the functions in the Quests module. They allow you to create, modify, and retrieve information
 from quests. For a complete example of how to create a quest, see (Writing a Quest)[https://atherys.com/docs/scripting/quests/Writing-a-Quest.html].

## getQuestById

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Quest getQuestById(String questId)
```

## getQuestStages

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Stage getQuestStages(StagedQuest quest)
```

## addQuestObjective

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Boolean addQuestObjective(SimpleQuest simpleQuest, Objective objective)
```

## addQuestObjectives

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Boolean addQuestObjectives(SimpleQuest simpleQuest, List objectives)
```

## getQuestObjectives

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Objective getQuestObjectives(Quest quest)
```

## addQuestReward

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Boolean addQuestReward(Quest quest, Reward reward)
```

## addQuestRewards

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Boolean addQuestRewards(Quest quest, List rewards)
```

## addQuestStages

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Boolean addQuestStages(StagedQuest stagedQuest, List stages)
```

## getQuestRewards

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Reward getQuestRewards(Quest quest)
```

## registerQuest

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Boolean registerQuest(Quest quest)
```

## createSimpleQuest

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
SimpleQuest createSimpleQuest(String id, Text name, Text description, Integer version)
```

## addQuestRequirements

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Boolean addQuestRequirements(Quest quest, List requirements)
```

## makeQuestTimed

Makes a quest timed.

### Signature:
```js
Boolean makeQuestTimed(Quest quest, Integer seconds)
```
### Arguments:

**quest**: The quest.

**seconds**: How many seconds before the quest is failed and removed.

## stageOf

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Stage stageOf(Objective objective, List rewards)
```

## createStagedQuest

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
StagedQuest createStagedQuest(String id, Text name, Text description, Integer version)
```

## getQuestRequirements

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```js
Requirement getQuestRequirements(Quest quest)
```

## makeQuestDeliverable

Makes a quest deliverable, meaning it must be turned in to an NPC.

### Signature:
```js
Boolean makeQuestDeliverable(Quest quest, Text message)
```
### Arguments:

**quest**: The quest.

**message**: A message to tell the player how to turn in the quest.

## setOnTimedQuestFail

Sets a function that will run if the quest's timer runs out.

### Signature:
```js
Boolean setOnTimedQuestFail(Quest quest, Consumer onFail)
```
### Arguments:

**quest**: The quest.

**onFail**: A function that will run if the quest's time runs out. It takes a single argument, the player

Returns a _**Boolean**_: True if setting it worked, false if the quest isn't timed.

### Example:

```js
var world = getWorldFromName("world");
var onFail = function(player) {
teleportPlayer(player, locationOf(world, 100, 90, 100);
}
setOnTimedQuestFail(quest, onFail);
```

