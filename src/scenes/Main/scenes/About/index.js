import React from 'react'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button'

const About = () => (
  <Slide in timeout={250} direction="left">
    <div id="about-container">
      <Typography variant="h3" color="secondary">
        About Me
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        style={{ marginTop: '1vh', marginBottom: '3vh' }}
      >
        WHERE I COME FROM
      </Typography>
      <Typography color="textPrimary">
        In my past life as an opera singer and arts administrator, I was introduced to the SQL-based
        Tessitura CRM. After a few years of leveraging my broadening Tessitura skills to secure
        successively more technical positions, I realized that coding was what I really enjoyed, and
        decided to pursue it full-force. I attended Fullstack Academy&apos;s remote Software
        Engineering bootcamp, and shortly thereafter began working at Elevate Security, where we use
        the principles of behavioral psychology to address the human factor in InfoSec.
      </Typography>
    </div>
  </Slide>
)

export default About
