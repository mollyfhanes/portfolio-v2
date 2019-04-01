import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Home from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import history from '../history'

class Navbar extends Component {
  isSelected(name) {
    const { location } = this.props
    return location.pathname === `/${name}`
  }

  render() {
    const isDesktop = window.innerWidth > 900
    return (
      <AppBar position="static" color="primary">
        <Toolbar color="inherit" disableGutters>
          <IconButton
            color="inherit"
            aria-haspopup="true"
            onClick={() => history.push('/')}
            style={isDesktop ? {} : { padding: '4px' }}
          >
            <Home color={this.isSelected('') ? 'action' : 'secondary'} id="home" />
          </IconButton>
          <Button
            size={isDesktop ? 'large' : 'small'}
            color={this.isSelected('skills') ? 'default' : 'secondary'}
            onClick={() => history.push('/skills')}
            style={isDesktop ? {} : { padding: '4px', minWidth: '55px' }}
          >
            Skills
          </Button>
          <Button
            size={isDesktop ? 'large' : 'small'}
            color={this.isSelected('projects') ? 'default' : 'secondary'}
            onClick={() => history.push('/projects')}
            style={isDesktop ? {} : { padding: '4px', minWidth: '55px' }}
          >
            Projects
          </Button>
          <Button
            size={isDesktop ? 'large' : 'small'}
            color={this.isSelected('blog') ? 'default' : 'secondary'}
            onClick={() => history.push('/blog')}
            style={isDesktop ? {} : { padding: '4px', minWidth: '55px' }}
          >
            Blog
          </Button>
          <Button
            size={isDesktop ? 'large' : 'small'}
            color={this.isSelected('about') ? 'default' : 'secondary'}
            onClick={() => history.push('/about')}
            style={isDesktop ? {} : { padding: '4px', minWidth: '55px' }}
          >
            About
          </Button>
          <Button
            size={isDesktop ? 'large' : 'small'}
            color={this.isSelected('contact') ? 'default' : 'secondary'}
            onClick={() => history.push('/contact')}
            style={isDesktop ? {} : { padding: '4px', minWidth: '55px' }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(Navbar)

Navbar.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
}
