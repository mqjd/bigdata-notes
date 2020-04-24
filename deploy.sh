#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo "$ACCESS_TOKEN"
if [ -z "$ACCESS_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:mqjd/bigdata-notes.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://mqjd:${ACCESS_TOKEN}@github.com/mqjd/bigdata-notes.git
  git config --global user.name "mqjd"
  git config --global user.email "1378415278@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:blog-pages # 推送到github



cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist