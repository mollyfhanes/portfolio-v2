import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import history from '../history'

const menuStyle = {
  color: '#000',
}

class MyMenu extends Component {
  state = { anchorEl: null }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = (link) => {
    this.setState({ anchorEl: null })
    history.push(link)
  }

  render() {
    const { anchorEl } = this.state

    return (
      <div>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          color="inherit"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.handleClose('/')} style={menuStyle}>
            Home
          </MenuItem>
          <MenuItem onClick={() => this.handleClose('/skills')} style={menuStyle}>
            Skills
          </MenuItem>
          <MenuItem onClick={() => this.handleClose('/about')} style={menuStyle}>
            About
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default MyMenu
