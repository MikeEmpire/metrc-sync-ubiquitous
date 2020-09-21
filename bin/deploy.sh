#!/bin/sh

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

read -r -p 'Commit message: ' desc  # prompt user for commit message
read -r -p 'Elastic beanstalk Env: ' $env

git add .
git add -u
git commit -m "$desc"
git push origin $branch
eb deploy $env
