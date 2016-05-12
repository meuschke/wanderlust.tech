NODE_ENV=production gatsby build
cp static/* public
git add .
git commit -am "Deploy"
git subtree push --prefix public origin gh-pages
