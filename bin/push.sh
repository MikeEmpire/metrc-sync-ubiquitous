#!/bin/sh

read -r -p 'Commit message: ' desc  # prompt user for commit message

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

git add .
git add -u
git commit -m "$desc"
git push origin $branch
