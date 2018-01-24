#!/bin/sh
rm -rf build;
npm run build;
mkdir build/build && mv build/bundle.js build/build/bundle.js && mv build/bundle.js.map build/build/bundle.js.map;
cp index.html build/index.html;
git add build/* -f && git commit -m 'JS bundled for GitHub Pages deploy';
git subtree push --prefix build origin gh-pages;
