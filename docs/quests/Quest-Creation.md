---
module: quest
---
# Quest Creation Functions

## createSimpleQuest

### Signature: 
```javascript
SimpleQuest createSimpleQuest(String id, Text name, Text description, Integer version)
```

## createStagedQuest

### Signature: 
```javascript
StagedQuest createStagedQuest(String id, Text name, Text description, Integer version)
```

## addQuestStages

### Signature: 
```javascript
Boolean addQuestStages(StagedQuest stagedQuest, Stage[] stages)
```

## addQuestObjectives

### Signature: 
```javascript
Boolean addQuestObjectives(SimpleQuest simpleQuest, Objective[] objectives)
```

## addQuestRequirements

### Signature: 
```javascript
Boolean addQuestRequirements(Quest quest, Requirement[] requirements)
```

## addQuestRewards

### Signature: 
```javascript
Boolean addQuestRewards(Quest quest, Reward[] rewards)
```

## registerQuest

### Signature: 
```javascript
Boolean registerQuest(Quest quest)
```

