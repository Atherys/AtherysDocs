---
title: Entity Functions
---
# Entity Functions
Entity functions allow you to interact with entities. 

## createEntity

### Signature: 
```javascript
Entity createEntity(String entityType, Location<World> worldLocation)
```

## spawnEntity

### Signature: 
```javascript
Boolean spawnEntity(Entity entity)
```

## healEntity

### Signature: 
```javascript
Boolean healEntity(Entity entity, Double amount)
```

## damageEntity

### Signature: 
```javascript
Boolean damageEntity(Entity entity, DamageSource src, Double damage)
```

## addEntityPotionEffect

### Signature: 
```javascript
Boolean addEntityPotionEffect(Entity entity, PotionEffect potionEffect)
```

## setEntityPotionEffects

### Signature: 
```javascript
Boolean setEntityPotionEffects(Entity entity, PotionEffect[] effects)
```

## getEntityPotionEffects

### Signature: 
```javascript
PotionEffect[] getEntityPotionEffects(Entity entity)
```

## getEntityHealth

### Signature: 
```javascript
Double getEntityHealth(Entity entity)
```

## getEntityBoots

### Signature: 
```javascript
ItemStack getEntityBoots(Entity entity)
```

## getEntityChestplate

### Signature: 
```javascript
ItemStack getEntityChestplate(Entity entity)
```

## getEntityHelmet

### Signature: 
```javascript
ItemStack getEntityHelmet(Entity entity)
```

## getEntityLeggings

### Signature: 
```javascript
ItemStack getEntityLeggings(Entity entity)
```

## getEntityMainHand

### Signature: 
```javascript
ItemStack getEntityMainHand(Entity entity)
```

## getEntityOffHand

### Signature: 
```javascript
ItemStack getEntityOffHand(Entity entity)
```

## getEntityHealth

### Signature: 
```javascript
Double getEntityHealth(Entity entity)
```

## getEntityMaxHealth

### Signature: 
```javascript
Double getEntityMaxHealth(Entity entity)
```

## getEntityUUID

### Signature: 
```javascript
UUID getEntityUUID(Entity entity)
```

## getEntityName

### Signature: 
```javascript
Text getEntityName(Entity entity)
```

## setEntityBoots

### Signature: 
```javascript
Boolean setEntityBoots(Entity entity, ItemStack boots)
```

## setEntityChestplate

### Signature: 
```javascript
Boolean setEntityChestplate(Entity entity, ItemStack chestplate)
```

## setEntityHelmet

### Signature: 
```javascript
Boolean setEntityHelmet(Entity entity, ItemStack helmet)
```

## setEntityLeggings

### Signature: 
```javascript
Boolean setEntityLeggings(Entity entity, ItemStack leggings)
```

## setEntityMainHand

### Signature: 
```javascript
Boolean setEntityMainHand(Entity entity, ItemStack item)
```

## setEntityOffHand

### Signature: 
```javascript
Boolean setEntityOffHand(Entity entity, ItemStack item)
```

## setEntityMaxHealth

### Signature: 
```javascript
Boolean setEntityMaxHealth(Entity entity, Double maxHealth)
```

## setEntityName

### Signature: 
```javascript
Boolean setEntityName(Entity entity, Text name)
```


