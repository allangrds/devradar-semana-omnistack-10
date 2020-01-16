import React, { Fragment } from 'react'
import { StatusBar } from 'react-native'

import Routes from './src/routes'

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
