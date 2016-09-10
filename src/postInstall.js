
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
// if (!pkg.dependencies) {
//   pkg.dependencies = {
//     "lodash": "^4.1.0",
//     "react": "^15.0.0",
//     "react-dom": "^15.0.0",
//     "react-router": "^2.4.1",
//     "react-router-scroll": "^0.3.2",
//     "stijl": "^0.10.1"
//   }
// }

fs.writeFileSync(pkgFilename, JSON.stringify(pkg, null, 2))
