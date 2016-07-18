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
  cp -R $BATES_PTH/template/src ./
fi
