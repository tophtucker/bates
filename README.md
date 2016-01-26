
## Bates
> He knows how I like my front-end: automated.

The contemporary front-end stack and build pipeline is a very opinionated place, with lots of choices for a lot of different setups. **Bates is here to help automate a specific set of choices for React front-end projects.**

## Quick start

```sh
npm i bates --save-dev

npm run bates -- template
# create base files

npm run bates -- start
# start hot reload dev server at: http://localhost:3000
# run tests and lint on change
# hit ctrl+c to close the server
```

Edit the `src/main.js`, when you want to deploy the site run:

```sh
npm run bates -- deploy
# follow the prompt, choose your domain
# the site will be available at http://yourDomain.surge.sh
```

## Info

Bates work better together with the following code style and architecture: [code style](docs/style.md). The main part of it are the commit messages format, the folder structure and the inlined styles.

There're three main entry points on the code that Bates helps to handle:  
- A *site* entry point (src/main.js),
- A *npm package* entry point (src/index.js), and
- A *html script distribution* entry point (src/dist.js)

The site is transpiled, served and hot-reloaded during development; and can be bundled and minified before deployment. The /src can be transpiled to a /lib folder and released to be consumed by other React projects, it can also be bundled for distribution directly on browsers. The site can also be used as a dev playground of on React component library projects.

## API

**Development**

`npm run bates -- template`  
If missing, add some base files to your project.

`npm run bates -- start`  
Prune and update your dependencies.  
Start a hot-reloaded, babel transpiled, server at localhost:3000.  
Run tests and lint on change.  
Tell you about your outdated packages, your last release and what have changed until now.

`npm run bates -- server`  
Run just the server from the *start* command.

`npm run bates -- test`  
Test and lint your /src. Test files need to be named `*.test.js`

`npm run bates -- test:watch`  
Same as above, but every time the source change

`npm run bates -- cov`  
Run the test coverage and open a browser with the results.

**Site deployment and package releases**

`npm run bates -- deploy`  
Generate a bundle file from /src/main.js on the /dist folder and deploy that folder to [surge.sh](https://surge.sh/).  
If you add a [CNAME](https://surge.sh/help/remembering-a-domain) file, you don't need to fill any prompts here.

`npm run bates -- bundle`  
Generate a bundle file from /src/main.js on the /dist folder, for when you want to deploy your code as a website.

`npm run bates -- lib`  
Transpile the code from /src to /lib, for when you want to release the code as a npm package.

`npm run bates -- release`  
This command is aimed at automating releases on a CI server.
Using the [git commits](docs/style.md#commit-messages), check for the changes since your last release and suggest a new version. If approved, bump the package and push a new tag.

`npm run bates -- dist`  
Generate a distribution file, for those who want to consume your npm package using html script tags directly.

`npm run bates -- clean`  
Delete any build and transpiled file.
