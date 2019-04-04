/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Grow from '@material-ui/core/Grow'
import Button from '@material-ui/core/Button'

const containerProps = {
  color: 'primary',
  direction: 'column',
  alignContent: 'space-between',
  spacing: 40,
  style: { marginTop: '10vh' },
}

const Home = () => (
  <div style={{ margin: '0 10vw' }}>
    <Grid container {...containerProps}>

      <Grow in timeout={1000}>
        <Grid item>
          <Typography variant="h1" color="secondary" paragraph>
            Hello!
          </Typography>
        </Grid>
      </Grow>

      <Grow in timeout={1700}>
        <Grid item>
          <Typography variant="h4" color="textPrimary" paragraph>
            My name is Molly Hanes.
          </Typography>
        </Grid>
      </Grow>

      <Grow in timeout={2000}>
        <Grid item>
          <Typography variant="h6" color="textSecondary" paragraph>
            I&apos;m a <strong>full stack software engineer</strong> based in San Francisco.
          </Typography>
        </Grid>
      </Grow>

      <Grow in timeout={2000}>
        <Grid item>
          <Button href="/skills" color="textPrimary" variant="outlined">
            What&apos;s in my toolbox
          </Button>
        </Grid>
      </Grow>

    </Grid>
  </div>
)

export default Home
