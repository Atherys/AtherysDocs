# Requirement Functions
 Requirements are things that must be met for the player to receive a quest or proceed in a dialogue.
 You can combine requirements with logic using the and, or, and not requirements. These should allow you
 to create any kind of requirement.

## hasQuestRequirementFunc

A requirement for a player to have a quest.

#### Signature:
```js
Requirement hasQuestRequirementFunc(String questId)
```

**questId**: The quest's ID.

## levelRequirementFunc

A requirement for the player to be a certain level (experience).

#### Signature:
```js
Requirement levelRequirementFunc(Integer level)
```

**level**: The level, as an integer.

## orRequirementFunc

A requirement for the player to have either requirement, or both.

#### Signature:
```js
Requirement orRequirementFunc(Requirement requirement, Requirement requirement2)
```

## notRequirementFunc

A requirement for the player _not_ to have a requirement.

#### Signature:
```js
Requirement notRequirementFunc(Requirement requirement)
```

**requirement**: The requirement for them not to have.

## moneyRequirementFunc

A requirement for the player to have a certain amount of money.

#### Signature:
```js
Requirement moneyRequirementFunc(Double amount, Currency currency)
```

**amount**: The amount of money.

**currency**: The money's currency.

## andRequirementFunc

A requirement that requires two requirements to be met.

#### Signature:
```js
Requirement andRequirementFunc(Requirement requirement, Requirement requirement2)
```

**requirement**: The first requirement.

**requirement2**: The second requirement.

## completedQuestRequirementFunc

A requirement for completing a quest.

#### Signature:
```js
Requirement completedQuestRequirementFunc(String questId)
```

**questId**: The quest's ID.

