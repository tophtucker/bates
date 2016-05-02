import {it as test} from 'mocha'
import assert from 'assert'

import React from 'react'
import shallowRender from '@luiscarli/shallow-render'

import {Root} from './main'

test('Root', () => {
  const component = shallowRender(<Root/>)
  assert.deepEqual(component.type, 'div')
})
