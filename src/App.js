import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import './App.css'
import { Main } from './scenes'
import { Navbar } from './components'
import theme from './ui/theme'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <Navbar />
      <Main />
    </CssBaseline>
  </MuiThemeProvider>
)

export default App
