#!/bin/sh
npm run build;
git add build/* && git commit -m 'JS bundled for GitHub Pages deploy';
git subtree push --prefix build origin gh-pages;
