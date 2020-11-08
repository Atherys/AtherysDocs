# Reward Functions
 Rewards are what the players are given in return for completing a quest. Currently, there are only three reward types.

## commandReward

Performs a command as the reward for a quest.

### Signature:
```groovy
Reward commandReward(String command, Text description)
```
### Arguments:

**command**:     The command to perform.

**description**: A description of the reward.

## itemsReward

A reward to give the player an item.

### Signature:
```groovy
Reward itemsReward(Text description, List items)
```
### Arguments:

**description**: The description for the items.

**items**: The items to reward the player.

## moneyReward

A reward to give the player money.

### Signature:
```groovy
Reward moneyReward(Double amount, Currency currency)
```
### Arguments:

**amount**:   The amount of money.

**currency**: The currency to use.

