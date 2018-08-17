---
title: Text Functions
---
# Text Functions

Text functions allow you to create and style text for sending to the player.

## textOf

Creates a text object with which you can send a player a message. Accepted object types are Strings, TextColors, TextStyles, and even other Text objects.

### Signature: 
```javascript
Text textOf(Object[] objects)
```

### Example:
```javascript
var message = textOf(color("aqua"), "Hello ", color("gold"), style("minecraft:bold"), "there!");
```

## color

Returns a TextColor for use with building Text. All minecraft colors are available.

### Signature: 
```javascript
TextColor color(String textColorId)
```

### Example:
```javascript
var gold = color("gold");
```

## style

Returns a TextStyle for use with building Text. All minecraft text styles are available, though the minecraft prefix is required. An exception to this is the "none" style, which can be used to remove styling from part of a Text object.

### Signature: 
```javascript
TextStyle style(String textStyleId)
```

### Example:
```javascript
var bolded = style("minecraft:bold");
