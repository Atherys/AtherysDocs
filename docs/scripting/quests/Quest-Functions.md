# Quest Functions
 These are the bulk of the functions in the Quests module. They allow you to create, modify, and retrieve information
 from quests. For a complete example of how to create a quest, see (Writing a Quest)[https://atherys.com/docs/scripting/quests/Writing-a-Quest.html].

## getQuestById

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Quest getQuestById(String questId)
```

## getQuestStages

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Stage getQuestStages(StagedQuest quest)
```

## addQuestObjective

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Boolean addQuestObjective(SimpleQuest simpleQuest, Objective objective)
```

## addQuestObjectives

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Boolean addQuestObjectives(SimpleQuest simpleQuest, List objectives)
```

## getQuestObjectives

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Objective getQuestObjectives(Quest quest)
```

## addQuestReward

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Boolean addQuestReward(Quest quest, Reward reward)
```

## addQuestRewards

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Boolean addQuestRewards(Quest quest, List rewards)
```

## addQuestStages

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Boolean addQuestStages(StagedQuest stagedQuest, List stages)
```

## getQuestRewards

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Reward getQuestRewards(Quest quest)
```

## registerQuest

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Boolean registerQuest(Quest quest)
```

## createSimpleQuest

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
SimpleQuest createSimpleQuest(String id, Text name, Text description, Integer version)
```

## addQuestRequirements

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Boolean addQuestRequirements(Quest quest, List requirements)
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

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
Stage stageOf(Objective objective, List rewards)
```

## createStagedQuest

<h3 style="padding-top: 4.6rem"> Signature: </h3>

```groovy
StagedQuest createStagedQuest(String id, Text name, Text description, Integer version)
```

## getQuestRequirements

<h3 style="padding-top: 4.6rem"> Signature: </h3>

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

