import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  Home, Skills, About, Projects, Contact, Blog
} from './scenes'

const Main = props => (
  <div id="main">
    <Switch>
      <Route exact path="/" component={Home} {...props} />
      <Route exact path="/skills" component={Skills} {...props} />
      <Route exact path="/projects" component={Projects} {...props} />
      <Route exact path="/blog" component={Blog} {...props} />
      <Route exact path="/about" component={About} {...props} />
      <Route exact path="/contact" component={Contact} {...props} />
    </Switch>
  </div>
)

export default Main
