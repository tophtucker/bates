
## Travis automatically deploy and releases

First, add your project to [Travis](https://travis-ci.org/).

### Surge.sh site deploy

The site can be automatically deployed to [surge.sh](https://surge.sh/) in all master branch pushes that passes the tests.

First do a local deploy for setting up your surge user, and checking if your domain is available:
```sh
$ npm run bates -- deploy
```

Add the domain to a [CNAME](https://surge.sh/help/remembering-a-domain) file on your /dist folder:
```sh
$ echo yourDomain.surge.sh > CNAME
```

Then setup your `.travis.yml` file by uncommenting the following lines (this file is created by `npm run bates -- template`):

```yml
# SITE DEPLOY
deploy:
  skip_cleanup: true
  provider: script
  script: npm run bates -- deploy
  on:
    branch: master
```

### NPM Package release

New npm package versions can be automatically released in travis with new tag pushes.

To setup the npm deploy script use `$ travis setup npm` ([travis cli install instructions](https://github.com/travis-ci/travis.rb#installation)).

After the setup is complete uncomment the following lines on `.travis.yml`:

```yml
before_deploy:
- npm run bates -- lib
- npm run bates -- dist
# only needed if a dist version will be released
deploy:
  skip_cleanup: true
  on:
    branch: master
```

To also do automatically do release notes on Github, add to your travis repo settings a `GIT_TOKEN` environment variable with a Github [personal access token](https://github.com/settings/tokens). And uncomment on .travis.yml:

```yml
after_deploy:
- npm run bates -- githubRelease
```

**After the setup is complete, you can bump package.json and push a new tag doing:**
```sh
$ npm run bates -- release
```

For the automatic versioning bump and release notes to work, your commit-messages need to follow [this format](docs/style.md#commit-messages).
