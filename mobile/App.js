import React, { Fragment } from 'react'
import { StatusBar, YellowBox } from 'react-native'

import Routes from './src/routes'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

const App = () => {
  return (
    <Fragment>
      <StatusBar
        backgroundColor="#7d40e7"
        barStyle="light-content"
      />
      <Routes />
    </Fragment>
  )
}

export default App
