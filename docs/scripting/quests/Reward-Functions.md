# Reward Functions
 Rewards are what the players are given in return for completing a quest. Currently, there are only three reward types.

## singleItemRewardFunc

A reward to give the player an item.

#### Signature:
```js
Reward singleItemRewardFunc(ItemStack itemStack)
```

**itemStack**: The item to reward the player.

## moneyRewardFunc

A reward to give the player money.

#### Signature:
```js
Reward moneyRewardFunc(Double amount, Currency currency)
```

**amount**: The amount of money.

**currency**: The currency to use.

## commandRewardFunc

Performs a command as the reward for a quest.

#### Signature:
```js
Reward commandRewardFunc(String command, Text description)
```

**command**: The command to perform.

**description**: A description of the reward.

