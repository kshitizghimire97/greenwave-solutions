#!/bin/bash

git add .
git commit -m "update"
git push origin main
pnpm build
git checkout build
git add dist
git commit -m "update"
git push origin build
git checkout main