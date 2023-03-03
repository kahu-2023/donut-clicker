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

server.get('/', (req, res) => {
  fs.readFile(__dirname + '/data/data.json', 'utf-8')
  res.render('home')
})

// post routes retrieve data and save it somewhere
// cannot get data and render pages
server.post('/name/game', (req, res) => {
  const nameInput = req.body.name
  console.log(nameInput)
  const stringifiedName = JSON.stringify(nameInput)
  console.log(stringifiedName)
  fs.writeFile(__dirname + '/data/data.json', stringifiedName)
    .then(() => {
      res.redirect('/name/game')
    })
    .catch((err) => {
      res.status(404).send(err.message)
    })
})

server.get('/name/game', (req, res) => {
  fs.readFile(__dirname + '/data/data.json')
    .then((name) => {
      const parsedName = JSON.parse(name)
      const obj = {
        name: parsedName,
      }

      res.render('gamepage', obj)
      // res.render('gamepage', { name })
    })
    .catch((err) => {
      res.status(404).send(err.message)
    })
})

module.exports = server
