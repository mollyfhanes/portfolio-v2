import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'

const Contact = () => {
  const isDesktop = window.innerWidth > 900
  return (
    <div id="contact-container">
      <Typography variant={isDesktop ? 'h3' : 'h4'} color="secondary">
        Get In Touch
      </Typography>
      <div id="contacts-container">
        <div className="icon">
          <IconButton color="inherit" aria-haspopup="true">
            <Link href="mailto:hello@mollyfhanes.com" target="new">
              <i
                className={`fas fa-envelope-square ${isDesktop ? 'fa-3x' : 'fa-2x'} white`}
                id="email"
              />
            </Link>
          </IconButton>
        </div>
        <div className="icon">
          <IconButton color="inherit" aria-haspopup="true">
            <Link href="https://www.linkedin.com/in/mollyfhanes/" target="new">
              <i
                className={`fab fa-linkedin ${isDesktop ? 'fa-3x' : 'fa-2x'} white`}
                id="linkedin"
              />
            </Link>
          </IconButton>
        </div>
        <div className="icon">
          <IconButton color="inherit" aria-haspopup="true">
            <Link href="https://github.com/mollyfhanes" target="new">
              <i className={`fab fa-github ${isDesktop ? 'fa-3x' : 'fa-2x'} white`} id="github" />
            </Link>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Contact
