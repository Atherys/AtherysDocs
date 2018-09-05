# Run from master branch with clean state
echo "Building site..."
cd docs
vuepress build > /dev/null 2> /dev/null
echo "Moving files..."
mkdir ../../temp/ >> /dev/null 2> /dev/null
rm -R ../../temp/* >> /dev/null
mv .vuepress/dist/* ../../temp/ >> /dev/null
git checkout gh-pages > /dev/null
cd ..
rm -Rf * >> /dev/null
git rm * >> /dev/null
mv ../temp/* . >> /dev/null
rm -R ../temp/ >> /dev/null
echo "Committing..."
git add * >> /dev/null
git commit -m 'Deploy' >> /dev/null
echo "Pushing..."
git push origin gh-pages
