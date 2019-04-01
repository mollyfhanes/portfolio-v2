import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'

const About = () => {
  const isDesktop = window.innerWidth > 900
  return (
    <div>
      <div id="about-container">
        <img id="me" src="me.jpg" alt="Molly Hanes" />
        <div id="about-text">
          <Typography variant="h3" color="secondary">
            About Me
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: '3vh' }}>
            WHERE I COME FROM
          </Typography>
          <Typography color="textPrimary" align="justify">
            In my past life as an opera singer and arts administrator, I was introduced to the
            SQL-based Tessitura CRM. After a few years of leveraging my broadening Tessitura skills
            to secure successively more technical positions, I realized that coding was what I
            really enjoyed, and decided to pursue it full-force. I attended Fullstack Academy&apos;s
            remote Software Engineering bootcamp, and shortly thereafter began working at
            {' '}
            <Link color="secondary" href="//elevatesecurity.com">
              Elevate Security
            </Link>
            , where we use the principles of behavioral psychology to address the human factor in
            Information Security.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: '3vh' }}>
            OTHER THINGS I ENJOY
          </Typography>
          <Typography color="textPrimary" align="justify" paragraph>
            When I&apos;m not coding, I can usually be found powerlifting, playing video games,
            listening to true crime podcasts, cuddling my rescue dog, or singing.
          </Typography>
        </div>
      </div>
      <div className="story-button">
        <Button
          href="/contact"
          color="textPrimary"
          variant="outlined"
          size={isDesktop ? 'large' : 'small'}
        >
          Get in touch
        </Button>
      </div>
    </div>
  )
}

export default About
