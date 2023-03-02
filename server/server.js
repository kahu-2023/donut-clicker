const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const fs = require('node:fs/promises')
// const routes = require('./routes.js')

// Server configuration
server.use(express.static(__dirname + '/public'))
// gives server access to the public folder w/o need for abs file path
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')

// Routes

server.get('/game', (req, res) => {
  fs.readFile(__dirname + '/data/data.json', 'utf-8')
    .then((player) => {
      res.render('gamepage')
    })
    .catch((err) => {
      res.status(404).send(err.message)
    })
})

server.get('/', (req, res) => {

  fs.readFile(__dirname + '/data/data.json', 'utf-8')
    .then((data) => {
      const parsedData = JSON.parse(data)
      // console.log(parsedData)
      // returns data object array

      res.render('home', parsedData)
    })
    .catch((err) => res.status(400).send(err.message))
})

module.exports = server
