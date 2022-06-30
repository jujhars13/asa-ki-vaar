# Asa Ki Vaar

Asa Ki Vaar to read on a mobile, section by section

## Local Dev

```bash
# OPTIONAL use the awesome `reload` which auto-refreshes your browser on change using websockets
# `npm install -g webpack webpack-cli reload`

# install dev and app deps
npm install

# in the root of the repo
node_modules/.bin/webpack --watch
(cd docs && reload -e "html|js|css|json|yml")

# browse to http://localhost:8080/
```

## Pushing to prod

Published via Github pages atm, so build to `docs` using `webpack` and just push to `main` to publish.

```bash
# simply build for prod
NODE_ENV=production node_modules/.bin/webpack build
or npm run prod
# now git commit and push to main
```

## Licence

Fill your boots

[MIT](LICENSE)
