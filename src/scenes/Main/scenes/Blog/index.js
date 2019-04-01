import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import blogList from './blogList'

const Blog = () => {
  const isDesktop = window.innerWidth > 900
  return (
    <div id="project-container">
      <Typography variant="h3" color="secondary">
        Blog Posts
      </Typography>
      <div id="projects-container">
        {blogList.map((project) => {
          const {
            id, name, desc, tags, link, img,
          } = project
          return (
            <div className="card-container-single">
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
                      <strong>{`Tags: ${tags}.`}</strong>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href={link} size="small" color="secondary">
                    Link
                  </Button>
                </CardActions>
              </Card>
            </div>
          )
        })}
      </div>
      <div className="story-button">
        <Button
          href="/about"
          color="textPrimary"
          variant="outlined"
          size={isDesktop ? 'large' : 'small'}
        >
          About me
        </Button>
      </div>
    </div>
  )
}

export default Blog
