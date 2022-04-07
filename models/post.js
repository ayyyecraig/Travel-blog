const { Schema } = require('mongoose')

const Post = new Schema(
    {
        location:{ type: String, required: true },
        estimatedPrice:{ type: String, required: true },
        img: { type: String, required: true },
        description: { type: String, required: true}
    },
    { timestamps: true}
)

module.exports = Post