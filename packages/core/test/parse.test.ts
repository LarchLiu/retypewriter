import { expect, it } from 'vitest'
import { parseSnapshots } from '../src/state/parse'
import fixture from '../../../examples/main.ts.retypewriter?raw'

it('works', () => {
  expect(parseSnapshots(fixture)).toMatchSnapshot()
})
