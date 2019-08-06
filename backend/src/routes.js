const express = require('express')
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')
const ResetController = require('./controllers/ResetController')

const routes = express.Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.put('/devs', ResetController.update)

routes.post('/devs/:devId/like', LikeController.store)
routes.post('/devs/:devId/dislike', DislikeController.store)

module.exports = routes