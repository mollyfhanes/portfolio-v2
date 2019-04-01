import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import projectsList from './projectsList'

const Projects = () => {
  const isDesktop = window.innerWidth > 900

  return (
    <div id="project-container">
      <Typography variant="h3" color="secondary">
        Projects
      </Typography>
      <div id="projects-container">
        {projectsList.map((project) => {
          const {
            id, name, desc, tools, demo, github, img,
          } = project
          return (
            <div className="card-container">
              <Card key={id} style={{ height: '100%' }} className="card">
                <CardActionArea disabled>
                  <CardMedia className="project-img" image={img} title={name} square />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" color="secondary">
                      {name}
                    </Typography>
                    <Typography gutterBottom component="p" color="primary">
                      {desc}
                    </Typography>
                    <Typography style={{ marginTop: '1vh' }} component="p" color="primary">
                      <strong>{`Built with ${tools}.`}</strong>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href={demo} size="small" color="secondary">
                    Demo
                  </Button>
                  <Button href={github} size="small" color="secondary">
                    Github
                  </Button>
                </CardActions>
              </Card>
            </div>
          )
        })}
      </div>
      <div className="story-button">
        <Button
          href="/blog"
          color="textPrimary"
          variant="outlined"
          size={isDesktop ? 'large' : 'small'}
        >
          Read my blog posts
        </Button>
      </div>
    </div>
  )
}

export default Projects
