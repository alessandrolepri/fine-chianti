import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'


class App extends React.Component {
  render() {
    return (
      <main>
        <h1> Hello </h1>
      </main>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('root'))
