# AtherysDoclet

This is the Javadoc Doclet for generating documentation for AtherysScript from the Java code. To run it, compile the classes in src  into a jar and run the following:
```
javadoc -doclet MarkdownDoclet -docletpath path/of/jar source-files
```

### Supported tags

* @func - Tells the doclet that the class contains a scripting function
* @jsname - The default name for the JavaScript function is the name of the class with the first letter lowercase. If it differs, use this tag.
* @ex - Use this tag for the JavaScript example; the lines with this tag will be printed after one another.

