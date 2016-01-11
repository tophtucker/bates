
import commander from 'commander'
import {startServer} from '../devServer'

commander
  .command('start')
  .description('install dependencies and start dev server')
  .action(() => startServer())

export const run = () => {
  commander.parse(process.argv)
}
