#!/usr/bin/env sh

# Push to repository
git add .
git status
git commit -m 'feat: publish new release'
git push

# Publish the docs
cd docs

# build
npm run docs:build

# navigate into the build output directory
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:uptoolkit/up-react.git master:gh-pages

cd -