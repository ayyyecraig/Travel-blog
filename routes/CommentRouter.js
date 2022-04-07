const CommentController = require('../controllers/CommentController')
const Router = require('express').Router()

Router.post('/', CommentController.getAll)

module.exports = { path: CommentController.path, Router }