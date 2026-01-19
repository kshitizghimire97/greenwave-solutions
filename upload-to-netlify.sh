#!/bin/bash

git add .
git commit -m "update"
git push
pnpm build
git checkout build
git add dist
git commit -m "update"
git push
git checkout main