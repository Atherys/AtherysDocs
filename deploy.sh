# Run from master branch with clean state
echo "Building site..."
cd docs
vuepress build > lastlog.log 2> error.log
echo "Moving files..."
mkdir ../../temp/ >> lastlog.log 2> /dev/null
rm -R ../../temp/* >> lastlog.log
mv .vuepress/dist/* ../../temp/ >> lastlog.log
git checkout gh-pages > /dev/null
cd ..
rm -Rf * >> lastlog.log
git rm * >> lastlog.log
mv ../temp/* . >> lastlog.log
rm -R ../temp/ >> lastlog.log
echo "Committing..."
git add * >> lastlog.log
git commit -m 'Deploy' >> lastlog.log
echo "Pushing..."
git push origin gh-pages
