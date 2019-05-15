import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css'

import App from './App'
import Connexion from './components/Connexion';
import NotFound from './components/NotFound'

import * as serviceWorker from './serviceWorker'

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route path='/pseudo/:pseudo' component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()