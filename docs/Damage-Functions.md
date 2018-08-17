---
title: Damage Functions
---
# Damage Functions
Damage functions let you create sources of damage with which to damage entities, using the [damageEntity](https://github.com/Atherys-Horizons/AtherysScript/wiki/Entity-Functions#damageentity) function.

## buildDamage

### Signature: 
```javascript
DamageSource buildDamage(DamageSource.DamageSourceBuilder builder)
```

## blockDamageBuilder

### Signature: 
```javascript
BlockDamageSource.Builder blockDamageBuilder()
```

## fallingBlockDamageBuilder

### Signature: 
```javascript
FallingBlockDamageSource.Builder fallingBlockDamageBuilder()
```

## indirectEntityDamageBuilder

### Signature: 
```javascript
IndirectEntityDamageSource.Builder indirectEntityDamageBuilder()
```

## entityDamageBuilder

### Signature: 
```javascript
EntityDamageSource.Builder entityDamageBuilder()
```

## setDamageAbsolute

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageAbsolute(DamageSource.DamageSourceBuilder builder)
```

## setDamageBlock

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageBlock(BlockSnapshot blockSnapshot, DamageSource.DamageSourceBuilder builder)
```

## setDamageBlockLocation

### Signature: 
```javascript
BlockDamageSource.Builder setDamageBlockLocation(Location blockLocation, DamageSource.DamageSourceBuilder builder)
```

## setDamageBypass

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageBypass(DamageSource.DamageSourceBuilder damageSourceBuilder)
```

## setDamageCreative

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageCreative(DamageSource.DamageSourceBuilder damageSourceBuilder)
```

## setDamageEntity

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageEntity(Entity entity, DamageSource.DamageSourceBuilder builder)
```

## setDamageExhaustion

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageExhaustion(DamageSource.DamageSourceBuilder damageSourceBuilder, Double exhaustion)
```

## setDamageExplosive

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageExplosive(DamageSource.DamageSourceBuilder builder)
```

## setDamageFallingBlock

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageFallingBlock(ImmutableFallingBlockData immutableFallingBlockData, DamageSource.DamageSourceBuilder builder)
```

## setDamageMagical

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageMagical(DamageSource.DamageSourceBuilder builder)
```

## setDamageProxy

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageProxy(Entity entity, DamageSource.DamageSourceBuilder builder)
```

## setDamageScale

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageScale(DamageSource.DamageSourceBuilder damageSourceBuilder)
```

## setDamageType

### Signature: 
```javascript
DamageSource.DamageSourceBuilder setDamageType(String damageType)
```

