# Text Functions
 Text functions allow you to create and style text for sending to the player.

## textOf

Formats a `String` into a `Text` object using Minecraft formatting codes. See [here](https://minecraft.gamepedia.com/Formatting_codes) for
 the available codes. However, you must use an ampersand instead of the section sign used on the wiki page.

### Signature:
```js
Text textOf(String text)
```
### Arguments:

**text**: The formatted string

Returns a _**Text**_: The formatted text.

### Example:

```js
var message = textOf("&4This text is red!");
```

