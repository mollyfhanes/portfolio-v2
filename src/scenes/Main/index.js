import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import history from '../../history'
import { Home, Skills, About } from './scenes'

const Main = () => (
  <div id="main">
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  </div>
)

export default Main
