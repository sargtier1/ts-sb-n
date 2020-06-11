import * as React from 'react'

import { storiesOf } from '@storybook/react'
import Button from '../components/button/button'

storiesOf('Button', module)
  .add('with text', () => {
    return <Button text='Click me' />
  })
  .add('loading', () => {
    return <Button text='loadin' />
  })
