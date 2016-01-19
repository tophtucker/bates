
## Bates
> he knows how I like my front-end, automated

Bates is my front-end butler, it can be yours to, if you share the same opinions and desires as me. Or he can be just be a starting point for a twisted new clone.

The contemporary front-end build pipeline is a very opinionated place, but at the same time, it's a place that after you settle down on how you like your configs, you just want the same configs in every new project. And at this point the problem is how to clone and update the config of all those projects?

For that reason I trained Bates, he handles all the default configurations, deploys and builds for my React and node projects. My projects dev-dependency shrank down to only one, and my deploys and releases to one command. It's beautiful.

Bates excels on three main cases:
1. React sites
2. React components npm packages
3. ES6/7 npm packages

```sh
npm i bates --save-dev
```

`npm run bates -- template`  
If missing, add some general files to your project.

`npm run bates -- start`  
Prune and update your dependencies, start a hot-reloaded babel transpiled server at localhost:300, run tests and lint on change, tell you about your outdated packages, inform you about your last release and what have changed until now.

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
Deploy your dist folder to surge. You need to have a CNAME file if you don't to fill any prompts here.

`npm run bates -- release`  
Using the git commits, check for the changes since your last release and suggest a new version. If approved, bump the package and push a new tag.
