import React from 'react'
import { Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import './App.css'
import { Main } from './scenes'
import { Navbar } from './components'
import theme from './ui/theme'
import history from './history'

const App = () => (
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar selected={history.location.pathname} />
        <Main />
      </CssBaseline>
    </MuiThemeProvider>
  </Router>
)

export default App
