#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'update' &&
#git remote add origin git@github.com:Yinjtcflm/money-r.git &&
git remote add origin git@gitee.com:Yinjtcflm/money-r.git &&
git push -u origin master -f 
cd -