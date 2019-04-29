import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Alert } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Alert message='测试' />
      </div>
    )
  }
}

export default (process.env.NODE_ENV == 'production' ? App : hot(module)(App))
