#!/bin/sh
# automating this repetitive step

git submodule update --init # just in case

cd _includes/webcomponents.org.wiki/
git pull origin master
cd ../..
git add _includes/webcomponents.org.wiki/
git commit -m "submodule bump."

echo "now please push this commit up! ..."
