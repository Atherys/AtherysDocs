vuepress build
mkdir ../temp/
rm -R ../temp/*
mv .vuepress/* ../temp/
git checkout gh-pages
rm -R *
git rm *
mv ../temp/* .


