# Quest Functions
 These are the bulk of the functions in the Quests module. They allow you to create, modify, and retrieve information
 from quests. For a complete example of how to create a quest, see (Writing a Quest)[https://atherys.com/docs/scripting/quests/Writing-a-Quest.html].

## getQuestById

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Quest getQuestById(String questId)
```

## getQuestStages

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Stage getQuestStages(StagedQuest quest)
```

## addQuestObjective

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Boolean addQuestObjective(SimpleQuest simpleQuest, Objective objective)
```

## addQuestObjectives

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Boolean addQuestObjectives(SimpleQuest simpleQuest, Objective objectives)
```

## getQuestObjectives

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Objective getQuestObjectives(Quest quest)
```

## addQuestReward

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Boolean addQuestReward(Quest quest, Reward reward)
```

## addQuestRewards

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Boolean addQuestRewards(Quest quest, Reward rewards)
```

## addQuestStages

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Boolean addQuestStages(StagedQuest stagedQuest, Stage stages)
```

## getQuestRewards

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Reward getQuestRewards(Quest quest)
```

## registerQuest

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Boolean registerQuest(Quest quest)
```

## createSimpleQuest

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
SimpleQuest createSimpleQuest(String id, Text name, Text description, Integer version)
```

## addQuestRequirements

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Boolean addQuestRequirements(Quest quest, Requirement requirements)
```

## stageOf

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Stage stageOf(Objective objective, Reward rewards)
```

## createStagedQuest

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
StagedQuest createStagedQuest(String id, Text name, Text description, Integer version)
```

## getQuestRequirements

<h4 style="padding-top: 4.6rem"> Signature: </h4>

```js
Requirement getQuestRequirements(Quest quest)
```

