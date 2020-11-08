# Requirement Functions
 Requirements are things that must be met for the player to receive a quest or proceed in a dialogue.
 You can combine requirements with logic using the and, or, and not requirements. These should allow you
 to create any kind of requirement.

## andRequirement

A requirement that requires two requirements to be met.

### Signature:
```groovy
Requirement andRequirement(Requirement requirement, Requirement requirement2)
```
### Arguments:

**requirement**:  The first requirement.

**requirement2**: The second requirement.

## turnedInQuestRequirement

A requirement for having turned in a quest.

### Signature:
```groovy
Requirement turnedInQuestRequirement(String questId)
```
### Arguments:

**questId**: The quest's ID.

## hasQuestRequirement

A requirement for a player to have a quest.

### Signature:
```groovy
Requirement hasQuestRequirement(String questId)
```
### Arguments:

**questId**: The quest's ID.

## levelRequirement

A requirement for the player to be a certain level (experience).

### Signature:
```groovy
Requirement levelRequirement(Integer level)
```
### Arguments:

**level**: The level, as an integer.

## moneyRequirement

A requirement for the player to have a certain amount of money.

### Signature:
```groovy
Requirement moneyRequirement(Double amount, Currency currency)
```
### Arguments:

**amount**:   The amount of money.

**currency**: The money's currency.

## notRequirement

A requirement for the player _not_ to have a requirement.

### Signature:
```groovy
Requirement notRequirement(Requirement requirement)
```
### Arguments:

**requirement**: The requirement for them not to have.

## orRequirement

A requirement for the player to have either requirement, or both.

### Signature:
```groovy
Requirement orRequirement(Requirement requirement, Requirement requirement2)
```

## reachedStageRequirement

A requirement for the player to have reached a specific stage of a quest. Only works with
 staged quests.

### Signature:
```groovy
Requirement reachedStageRequirement(String questId, Integer stage)
```
### Arguments:

**questId**: The ID of the quest.

**stage**: The index of the stage to check for.

