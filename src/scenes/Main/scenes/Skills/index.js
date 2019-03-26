/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button'
import { ChipArray } from '../../../../components'

const row1 = ['JavaScript', 'React', 'Redux']
const row2 = ['D3', 'HTML / CSS', 'Express', 'Python']
const row3 = ['SQL', 'PostgreSQL', 'Node']

const Skills = () => (
  <Slide in timeout={250} direction="left">
    <div id="skills-container">
      <Typography variant="h3" color="textPrimary">
        Skills
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        style={{ marginTop: '1vh', marginBottom: '3vh' }}
      >
        TECHNOLOGIES I ENJOY THE MOST:
      </Typography>
      <div id="skill-container">
        <ChipArray chipData={row1} />
        <ChipArray chipData={row2} />
        <ChipArray chipData={row3} />
      </div>
      <Button
        href="/about"
        size="large"
        color="textSecondary"
        variant="outlined"
        style={{ marginTop: '5vh' }}
      >
        Learn more about me
      </Button>
    </div>
  </Slide>
)

export default Skills
