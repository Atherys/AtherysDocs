# AtherysDoclet

This is the Javadoc Doclet for generating documentation for AtherysScript from the Java code. To run it, you will need Python. Download the latest [release](https://github.com/Atherys-Horizons/AtherysDocs/releases) and run it with the following command:
```
python docgen.py paths/to/other/jar/dependencies path/to/target/project
```
Other dependencies would be any A'therys projects that your target project depends on. It will run javadoc on all the java files found in the given project.

A directory named 'docs' with a markdown file for each package will be placed there.

### Supported tags

* @jsfunc - Tells the doclet that the class contains a scripting function
* @jsname - The default name for the JavaScript function is the name of the class with the first letter lowercase. If it differs, use this tag.
* @ex - Use this tag for the JavaScript example; the lines with this tag will be printed after one another.

