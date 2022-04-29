#!/bin/sh

# Author : Justin Allen

if [ "-p" == "$1" ]
    then 
        dir="pages"
else
    dir="components"
fi

path="src/$dir/$2"
mkdir "$path"

index="$path/index.ts"
component="$path/$3.tsx"
styles="$path/$3.styles.tsx"

touch "$index"
touch "$component"
touch "$styles"

echo "export {default} from './$3';">"$index"
echo "import React from 'react';\r\n\r\nconst $3 = () => ();\r\nexport default $3;">"$component"
echo "import styled from 'styled-components';\r\n\r\nconst $3Wrapper = styled.div\`\r\n\r\n\`;\r\n\r\nexport {\r\n\t$3Wrapper\r\n}">"$styles"

# Output
echo
echo "$path"
echo
ls "$path"

if [ "$4" == "-a" ]
    then
        git add "$path"
fi