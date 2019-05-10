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

