/* eslint no-console:0 */

import _ from 'lodash'
import GitHubApi from 'github'
import {getCommits} from '../../release/getCommits'
import c from 'chalk'
import path from 'path'

const pkg = require(path.join(process.cwd(), 'package.json'))

const github = new GitHubApi({
  version: '3.0.0',
  protocol: 'https',
})
github.authenticate({
  type: 'oauth',
  token: process.env.GIT_TOKEN,
})
const plotTitle = (body, commitsType, name, pre = '') => {
  if (!_.isEmpty(commitsType)) {
    return body.concat(`\n${pre}**${commitsType.length} ${name}**\n`)
  }
  return body
}
const plotCommits = (body, commitsType) => (
  _.reduce(commitsType, (acc, commit) => {
    let txt = acc.concat(`- ${commit.title}.\t\t\n`)
    if (!_.isEmpty(commit.message)) {
      txt = txt.concat(`*${commit.message}*\n`)
    }
    return txt
  }, body)
)

const getBody = ({fixes, features, breaks, chores}) => (
  _.flow(
    body => plotTitle(body, breaks, 'break change(s)'),
    body => plotCommits(body, breaks),
    body => plotTitle(body, features, 'feature(s)'),
    body => plotCommits(body, features),
    body => plotTitle(body, fixes, 'fixe(s)'),
    body => plotCommits(body, fixes),
    body => plotTitle(body, chores, 'other chore(s)', 'and '),
  )('')
)

const getRelease = commits => {
  const slug = process.env.TRAVIS_REPO_SLUG.split('/')
  return {
    owner: slug[0],
    repo: slug[1],
    tag_name: 'v' + pkg.version,
    name: pkg.version,
    body: getBody(commits),
  }
}

getCommits(commits => {
  const release = getRelease(commits)
  github.releases.createRelease(release, err => {
    if (err) console.log(err)
    console.log('\n')
    console.log(release.body)
    console.log('\n')
    console.log(c.green(`${pkg.version} released to github`))
    console.log('\n')
  })
})
