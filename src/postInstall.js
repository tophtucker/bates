
const fs = require('fs')
const path = require('path')

const pkgFilename = path.join(process.cwd(), '../../package.json')

if (!fs.existsSync(pkgFilename)) {
  return
}

const pkg = require(pkgFilename)

if (!pkg.scripts.start) {
  pkg.scripts.start = 'bates start'
}
if (!pkg.scripts.bates) {
  pkg.scripts.bates = 'bates'
}
if (!pkg.scripts.test || pkg.scripts.test === 'echo "Error: no test specified" && exit 1') {
  pkg.scripts.test = 'bates test'
}
if (!pkg.eslintConfig) {
  pkg.eslintConfig = {
    "extends": "./node_modules/bates/.eslintrc.js"
  }
}

fs.writeFileSync(pkgFilename, JSON.stringify(pkg, null, 2))
