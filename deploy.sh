NODE_ENV=production gatsby build
cp static/* public
git add .
git commit -am "Deploy"
git push origin master
git push origin `git subtree split --prefix public master`:gh-pages --force
