# Requirement Functions
 Requirements are things that must be met for the player to receive a quest or proceed in a dialogue.
 You can combine requirements with logic using the and, or, and not requirements. These should allow you
 to create any kind of requirement.

## hasQuestRequirement

A requirement for a player to have a quest.

### Signature:
```js
Requirement hasQuestRequirement(String questId)
```
### Arguments:

**questId**: The quest's ID.

Returns a _**Requirement**_: 

## levelRequirement

A requirement for the player to be a certain level (experience).

### Signature:
```js
Requirement levelRequirement(Integer level)
```
### Arguments:

**level**: The level, as an integer.

## orRequirement

A requirement for the player to have either requirement, or both.

### Signature:
```js
Requirement orRequirement(Requirement requirement, Requirement requirement2)
```

## notRequirement

A requirement for the player _not_ to have a requirement.

### Signature:
```js
Requirement notRequirement(Requirement requirement)
```
### Arguments:

**requirement**: The requirement for them not to have.

## moneyRequirement

A requirement for the player to have a certain amount of money.

### Signature:
```js
Requirement moneyRequirement(Double amount, Currency currency)
```
### Arguments:

**amount**: The amount of money.

**currency**: The money's currency.

## andRequirement

A requirement that requires two requirements to be met.

### Signature:
```js
Requirement andRequirement(Requirement requirement, Requirement requirement2)
```
### Arguments:

**requirement**: The first requirement.

**requirement2**: The second requirement.

## completedQuestRequirement

A requirement for completing a quest.

### Signature:
```js
Requirement completedQuestRequirement(String questId)
```
### Arguments:

**questId**: The quest's ID.

