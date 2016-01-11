
import commander from 'commander'
import {join} from 'path'
import shell from 'shelljs'

const devServerPath = `node ${join(__dirname, '../devServer/index.js')}`
const local = join(process.cwd(), '/node_modules/.bin/')

const TEST = `NODE_ENV=test ${local}mocha --require ${join(__dirname, '../babelhook/index.js')} -R dot --colors "src/**/*.test.js" && ${local}eslint src -c ${join(__dirname, '../../.eslintrc')} --color`

commander
  .command('start')
  .description('install dependencies and start dev server')
  .action(() => {
    // shell.exec('npm prune && npm update', {async: false})
    // shell.exec(devServerPath, {async: true})
    // shell.exec('npm outdated', {async: true})
    shell.exec(
      `${local}onchange src -- "${TEST}"`,
      {async: true}
    )
  })

export const run = () => {
  commander.parse(process.argv)
}
