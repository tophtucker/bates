/* eslint no-console:0 */

var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../webpackDev')
var execSync = require('child_process').execSync
var detect = require('detect-port')
var chalk = require('chalk')

var DEFAULT_PORT = process.env.PORT || 3000

function clearConsole() {process.stdout.write('\x1bc')}

// Some custom utilities to prettify Webpack output.
// This is a little hacky.
// It would be easier if webpack provided a rich error object.
var friendlySyntaxErrorLabel = 'Syntax error:';
function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
}
function formatMessage(message) {
  return message
    // Make some common errors shorter:
    .replace(
      // Babel syntax error
      'Module build failed: SyntaxError:',
      friendlySyntaxErrorLabel
    )
    .replace(
      // Webpack file not found error
      /Module not found: Error: Cannot resolve 'file' or 'directory'/,
      'Module not found:'
    )
    // Internal stacks are generally useless so we strip them
    .replace(/^\s*at\s.*:\d+:\d+[\s\)]*\n/gm, '') // at ... ...:x:y
    // Webpack loader names obscure CSS filenames
    .replace('./~/css-loader!./~/postcss-loader!', '');
}

var app = express()

function configServer(port){
  var compiler = webpack(config)
  compiler.plugin('invalid', function() {
    clearConsole();
    console.log('Compiling...');
  })

  // "done" event fires when Webpack has finished recompiling the bundle.
  // Whether or not you have warnings or errors, you will get this event.
  compiler.plugin('done', function(stats) {
    clearConsole();
    var hasErrors = stats.hasErrors();
    var hasWarnings = stats.hasWarnings();
    if (!hasErrors && !hasWarnings) {
      console.log();
      console.log('The app is running at:');
      console.log();
      console.log('  ' + chalk.cyan('http://localhost:' + port + '/'));
      console.log();
      return;
    }

    // We have switched off the default Webpack output in WebpackDevServer
    // options so we are going to "massage" the warnings and errors and present
    // them in a readable focused way.
    // We use stats.toJson({}, true) to make output more compact and readable:
    // https://github.com/facebookincubator/create-react-app/issues/401#issuecomment-238291901
    var json = stats.toJson({}, true);
    var formattedErrors = json.errors.map(message =>
      'Error in ' + formatMessage(message)
    );
    var formattedWarnings = json.warnings.map(message =>
      'Warning in ' + formatMessage(message)
    );
    if (hasErrors) {
      console.log(chalk.red('Failed to compile.'));
      console.log();
      if (formattedErrors.some(isLikelyASyntaxError)) {
        // If there are any syntax errors, show just them.
        // This prevents a confusing ESLint parsing error
        // preceding a much more useful Babel syntax error.
        formattedErrors = formattedErrors.filter(isLikelyASyntaxError);
      }
      formattedErrors.forEach(message => {
        console.log(message);
        console.log();
      });
      // If errors exist, ignore warnings.
      return;
    }
    if (hasWarnings) {
      console.log(chalk.yellow('Compiled with warnings.'));
      console.log();
      formattedWarnings.forEach(message => {
        console.log(message);
        console.log();
      });
      // Teach some ESLint tricks.
      console.log('You may use special comments to disable some warnings.');
      console.log('Use ' + chalk.yellow('// eslint-disable-next-line') + ' to ignore the next line.');
      console.log('Use ' + chalk.yellow('/* eslint-disable */') + ' to ignore all warnings in a file.');
    }
  })

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }))
  app.use(require('webpack-hot-middleware')(compiler))
  app.use(express.static(path.join(process.cwd(), 'dist')))
  app.get('*', function readFile(req, res) {
    res.sendFile(path.join(process.cwd(), 'dist/200.html'))
  })
}

function openBrowser(port) {
  if (process.platform === 'darwin') {
    try {
      // Try our best to reuse existing tab
      // on OS X Google Chrome with AppleScript
      execSync('ps cax | grep "Google Chrome"');
      execSync(
        'osascript chrome.applescript http://localhost:' + port + '/',
        {cwd: __dirname, stdio: 'ignore'}
      );
      return;
    } catch (err) {
      console.log(err)
      // Ignore errors.
    }
  }
}

function run(port) {
  app.listen(port, 'localhost', function startServer(err) {
    if (err) {
      console.log(err)
      return
    }
    openBrowser(port)
  })
}

detect(DEFAULT_PORT).then(port => {
  console.log(chalk.red('loading...'))
  configServer(port)
  run(port)
})
