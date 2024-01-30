const { Router } = require('express')
const controller = require('./controller')

const route = Router()

route.get('/', controller.greetings)
route.post('/sendMessage', controller.sendMessage)

module.exports = route
