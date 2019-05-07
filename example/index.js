import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Alert } from '../src/components'

class App extends Component {
  render() {
    return (
      <div>
        <Alert message='测试 Alert12' />
        <p>222221111</p>
      </div>
    )
  }
}

// const Happ = hot(App)
ReactDOM.render(<App />, document.getElementById('app'))
