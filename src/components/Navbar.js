import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Menu from './Menu'

const Navbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar color="inherit">
      <Menu />
    </Toolbar>
  </AppBar>
)

export default Navbar
