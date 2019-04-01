/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { ChipArray } from '../../../../components'

const row1 = ['JavaScript', 'React', 'Redux']
const row2 = ['D3', 'HTML / CSS', 'Express', 'Python']
const row3 = ['SQL', 'PostgreSQL', 'Node']

const Skills = () => {
  const isDesktop = window.innerWidth > 900
  return (
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
      <div className="story-button">
        <Button
          href="/projects"
          color="textPrimary"
          variant="outlined"
          size={isDesktop ? 'large' : 'small'}
        >
          Check out my personal projects
        </Button>
      </div>
    </div>
  )
}

export default Skills
