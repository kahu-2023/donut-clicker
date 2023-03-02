const express = require('express')
const hbs = require('express-handlebars')
const { isUtf8 } = require('node:buffer')
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

module.exports = client
