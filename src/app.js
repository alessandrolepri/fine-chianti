import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'


import Home from './components/Home'
import ShowPage from './components/ShowPage'
import Sassicaia from './components/Sassicaia'
import Ornellaia from './components/Ornellaia'
import FattoriaDelCerro from './components/FattoriaDelCerro'
import BiondiSanti from './components/BiondiSanti'




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/explore" component={ShowPage} />
            <Route path="/biondisanti" component={BiondiSanti} />
            <Route path="/fattoriadelcerro" component={FattoriaDelCerro} />
            <Route path="/sassicaia" component={Sassicaia} />
            <Route path="/ornellaia" component={Ornellaia} />
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
