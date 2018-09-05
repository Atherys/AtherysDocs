---
title: Items Functions
module: item
---
# Item Functions
Item functions allow you to create and manipulate items easily. 

## createItemStack

### Signature: 
```javascript
ItemStack createItemStack(String itemTypeId, Integer amount)
```

## getItemStackEnchants

### Signature: 
```javascript
Enchantment[] getItemStackEnchants(ItemStack itemStack)
```

## getItemStackDisplayName

### Signature: 
```javascript
Text getItemStackDisplayName(ItemStack itemStack)
```

## getItemStackLore

### Signature: 
```javascript
Text[] getItemStackLore(ItemStack itemStack)
```

## setItemStackEnchants

### Signature: 
```javascript
Boolean setItemStackEnchants(ItemStack itemStack, Enchantment... enchantments)
```

## setItemStackDisplayName

### Signature: 
```javascript
Boolean setItemStackDisplayName(ItemStack itemStack, Text text)
```

## setItemStackLore

### Signature: 
```javascript
Boolean setItemStackLore(ItemStack itemStack, Text[] lore)
```

## isItemStack

### Signature: 
```javascript
 isItemStack
```

## compareItemStacks

### Signature: 
```javascript
Boolean compareItemStacks(ItemStack first, ItemStack second)
```

## dropItemStackOnGround

### Signature: 
```javascript
Entity dropItemStackOnGround(ItemStack itemStack, Location<World> location)
```

