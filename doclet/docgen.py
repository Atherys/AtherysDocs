import subprocess
import sys
import os

javadoc = ['javadoc', 
            '-cp', 
            '$JAVA_HOME/lib/tools.jar',
            '-doclet',
            'MarkdownDoclet',
            '-docletpath', 
            sys.argv[1]
          ]

for root, dirs, files in os.walk(sys.argv[2]):
    for file in files:
        if file.endswith('java'):
            javadoc.append(os.path.join(root, file))

subprocess.call(javadoc)
