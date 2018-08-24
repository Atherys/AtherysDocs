vuepress build
mkdir ../temp/
rm -R ../temp/*
mv .vuepress/dist/* ../temp/
git checkout gh-pages
rm -Rf *
git rm *
mv ../temp/* .
rm -R ../temp/
git add *
git commit -m 'Deploy'
git push origin gh-pages
git checkout master
