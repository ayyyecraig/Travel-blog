const { Schema } = require('mongoose')

const Comment = new Schema(
    {
     comment:{ type: String, required: true },
     post_id:{ type: Schema.Types.ObjectId, ref:'post_id'}
       
    },
    { timestamps: true}
)

module.exports = Comment