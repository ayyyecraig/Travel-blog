const { Comment} = require('../models')

module.exports = class CommentController {
    static path = 'comment'

    static async postOne(req, res){
        try {
            const comment = await new Comment(req.body)
                newComment.save()
                res.send(comment) 
        }catch (error){
            throw error
        }
    }
}