
## Bates
> He knows how I like my front-end: automated.

The contemporary front-end stack and build pipeline is a very opinionated place, with lots of choices for a lot of different setups. **Bates is here to help automate a specific set of choices for React front-end projects.**

Bates work together with the following code style and architecture: [code style](docs/style.md). The main part of it are the commit messages format, the folder structure, the inlined styles and the data flow without flux libraries.

There're two main entry points on the code that Bates helps to handle:  
- The *site* entry point (main.js), and
- The *package* entry point (index.js).

The site is transpiled, served and hot-reloaded during development; and can be bundled and minified before deployment. The /src can be transpiled to a /lib folder and released to be consumed by other React projects, it can also be bundled for distribution directly on browsers. The site can also be used as a dev playground of on React component library projects.

## Quick start

```sh
npm i bates --save-dev

npm run bates -- template
# create base files

npm run bates -- start
# start dev server at: http://localhost:3000
# run tests and lint on change
# do ctrl+c to close the server
```

Edit the `src/main.js`, when you want to do a quick deploy do:

```sh
npm run bates -- bundle
npm run bates -- deploy
# follow the prompt, choose your domain
# the site will be available at http://yourDomain.surge.sh
```

## API

`npm run bates -- template`  
If missing, add some general files to your project.

`npm run bates -- start`  
Prune and update your dependencies, start a hot-reloaded babel transpiled server at localhost:3000, run tests and lint on change, tell you about your outdated packages, inform you about your last release and what have changed until now.

`npm run bates -- test`  
Test and lint your /src.

`npm run bates -- test:watch`  
Same as above, but everytime the source change

`npm run bates -- server`  
Run just the server from the *start* command.

`npm run bates -- lib`  
Transpile the code from /src to /lib, for when you want to release the code as a npm package.

`npm run bates -- bundle`  
Generate a bundle file on the /dist folder, for when you want to deploy your code as a website.

`npm run bates -- dist`  
Generate a distribution file, for those who want to consume your npm package using html script tags directly.

`npm run bates -- clean`  
Delete any build and transpiled file.

`npm run bates -- deploy`
Deploy your dist folder to surge. You need to have a CNAME file if you don't want to fill any prompts here.

`npm run bates -- release`  
Using the git commits, check for the changes since your last release and suggest a new version. If approved, bump the package and push a new tag.
