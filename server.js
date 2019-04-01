const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const favicon = require('express-favicon')

const app = express()
const PORT = process.env.PORT || 8080

app.use(favicon(`${__dirname}/build/favicon.ico`))

// Logging middleware
app.use(morgan('dev'))

// Body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Static middleware
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err.message)
  console.error(err.stack)
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
