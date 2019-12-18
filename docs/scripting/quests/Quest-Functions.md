# Quest Functions
 These are the bulk of the functions in the Quests module. They allow you to create, modify, and retrieve information
 from quests. For a complete example of how to create a quest, see (Writing a Quest)[https://atherys.com/docs/scripting/quests/Writing-a-Quest.html].

## getQuestById

### Signature:

```groovy
Quest getQuestById(String questId)
```

## getQuestStages

### Signature:

```groovy
Stage getQuestStages(StagedQuest quest)
```

## addQuestObjective

### Signature:

```groovy
Boolean addQuestObjective(SimpleQuest simpleQuest, Objective objective)
```

## addQuestObjectives

### Signature:

```groovy
Boolean addQuestObjectives(SimpleQuest simpleQuest, Objective[] objectives)
```

## getQuestObjectives

### Signature:

```groovy
Objective getQuestObjectives(Quest quest)
```

## addQuestReward

### Signature:

```groovy
Boolean addQuestReward(Quest quest, Reward reward)
```

## addQuestRewards

### Signature:

```groovy
Boolean addQuestRewards(Quest quest, Reward[] rewards)
```

## addQuestStages

### Signature:

```groovy
Boolean addQuestStages(StagedQuest stagedQuest, Stage[] stages)
```

## getQuestRewards

### Signature:

```groovy
Reward getQuestRewards(Quest quest)
```

## registerQuest

### Signature:

```groovy
Boolean registerQuest(Quest quest)
```

## createSimpleQuest

### Signature:

```groovy
SimpleQuest createSimpleQuest(String id, Text name, Text description, Integer version)
```

## addQuestRequirements

### Signature:

```groovy
Boolean addQuestRequirements(Quest quest, Requirement[] requirements)
```

## makeQuestTimed

Makes a quest timed.

### Signature:
```groovy
Boolean makeQuestTimed(Quest quest, Integer seconds)
```
### Arguments:

**quest**: The quest.

**seconds**: How many seconds before the quest is failed and removed.

## stageOf

### Signature:

```groovy
Stage stageOf(Objective objective, Reward[] rewards)
```

## createStagedQuest

### Signature:

```groovy
StagedQuest createStagedQuest(String id, Text name, Text description, Integer version)
```

## getQuestRequirements

### Signature:

```groovy
Requirement getQuestRequirements(Quest quest)
```

## makeQuestDeliverable

Makes a quest deliverable, meaning it must be turned in to an NPC.

### Signature:
```groovy
Boolean makeQuestDeliverable(Quest quest, Text message)
```
### Arguments:

**quest**: The quest.

**message**: A message to tell the player how to turn in the quest.

## setOnTimedQuestFail

Sets a function that will run if the quest's timer runs out.

### Signature:
```groovy
Boolean setOnTimedQuestFail(Quest quest, Consumer onFail)
```
### Arguments:

**quest**: The quest.

**onFail**: A function that will run if the quest's time runs out. It takes a single argument, the player

Returns a _**Boolean**_: True if setting it worked, false if the quest isn't timed.

### Example:

```groovy
def world = getWorldFromName("world");
def onFail = function(player) {
teleportPlayer(player, locationOf(world, 100, 90, 100);
}
setOnTimedQuestFail(quest, onFail);
```

