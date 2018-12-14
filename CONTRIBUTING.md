# Basics
To edit the documentation simply edit the markdown file. Any commits made to this repository will automatically update the site at https://atherys.com/docs. If you add, delete, or change the name of a file you will have to edit the [config.js](https://github.com/Atherys-Horizons/AtherysDocs/blob/master/docs/.vuepress/config.js) file. 

If you find any typos or outdated information please create a pull request or leave an issue.

# Writing Javadoc
Here is an example of how to write Javadoc for a function:
```java
/**
 * @jsfunc
 */
class BlockOf implements Function<String,BlockState> {

  /**
   * Used to create a new BlockState from a block type id.
   * 
   * @ex var location = locationOf( getWorldFromName("world"), 100, 50, 100 );
   * @ex var block = getBlockFromLocation(location);
   * 
   * @param blockTypeId The minecraft block id to create
   * @returns A representation of the final block
   */
  public BlockState apply(String blockTypeId) {
  }

}
```
And this is the expected output:

## blockOf

Used to create a new BlockState from a block type id.

##### Signature:

```js
  BlockState blockOf(String blockTypeId)
```

#### Arguments
**blockTypeId**: The minecraft block id to create

Returns a _**BlockState**_: A representation of the final block

##### Example:

```js
  var location = locationOf( getWorldFromName("world"), 100, 50, 100 );
  var block = getBlockFromLocation(location);
```
