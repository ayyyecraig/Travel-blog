const PostController = require('../controllers/PostController')

const Router = require('express').Router()

Router.get('/', PostController.getAll)
Router.get('/:department_id', PostController.getById)

module.exports = { path: PostController.path, Router }
