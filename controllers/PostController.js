const { Post, Comment } = require('../models')

module.exports = class PostController {
    static path = 'post'


static async getAll(req, res) {
    try {
      const Posts = await Post.findAll()
      res.send(Posts)
    } catch (error) {
      throw error
    }
  }

  static async getById(req, res) {
    try {
      const postsAndComments = await Post.findByPk(
        req.params.Post_id,
        { include: [Comment] }
      )
      res.send(postsAndComments)
    } catch (error) {
      throw error
    }
  }
}
