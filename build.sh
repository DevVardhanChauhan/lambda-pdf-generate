#!/bin/bash

# clear previous zip
rm lambda.zip

pnpm i
pnpm build

# only install production dependencies for production build
pnpm i -P

# zip index.js
cd dist && zip -r ../lambda.zip index.js && cd ..

# zip node_modules
zip -r lambda.zip node_modules/ -g

pnpm i

echo "✅ build completed. zipped lambda.zip"