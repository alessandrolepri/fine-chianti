import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'


import Home from './components/Home'
import ShowPage from './components/ShowPage'




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/explore" component={ShowPage} />
            <Route path="/" component={Home} />
          </Switch>

        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
