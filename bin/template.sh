#!/bin/bash

cp $BATES_PTH/.eslintrc ./.eslintrc
if [ ! -e .gitignore ]; then
  cp $BATES_PTH/template/gitignore ./.gitignore
fi
if [ ! -e .npmignore ]; then
  cp $BATES_PTH/template/.npmignore ./
fi
if [ ! -e .travis.yml ]; then
  cp $BATES_PTH/template/.travis.yml ./
fi
if [ ! -d dist ]; then
  mkdir dist
fi
if [ ! -e dist/200.html ]; then
  cp $BATES_PTH/template/200.html dist/
fi
if [ ! -e dist/favicon.png ]; then
  cp $BATES_PTH/template/favicon.png dist/
fi
if [ ! -d src ]; then
  mkdir src
fi
# if [ ! -e src/dist.js ]; then
#   cp $BATES_PTH/template/dist.js src/
# fi
if [ ! -e src/index.js ]; then
  cp $BATES_PTH/template/index.js src/
fi
if [ ! -e src/main.js ]; then
  cp $BATES_PTH/template/main.js src/
fi

# App folder
if [ ! -d src/App ]; then
  mkdir src/App
fi
if [ ! -e src/App/index.js ]; then
  cp $BATES_PTH/template/App/index.js src/App/
fi
if [ ! -e src/App/index.test.js ]; then
  cp $BATES_PTH/template/App/index.test.js src/App/
fi

# Pages folder
if [ ! -d src/Pages ]; then
  mkdir src/Pages
fi
if [ ! -e src/Pages/index.js ]; then
  cp $BATES_PTH/template/Pages/index.js src/Pages/
fi

# Pages/Page0 folder
if [ ! -d src/Pages/Page0 ]; then
  mkdir src/Pages/Page0
fi
if [ ! -e src/Pages/Page0/index.js ]; then
  cp $BATES_PTH/template/Pages/Page0/index.js src/Pages/Page0/
fi
