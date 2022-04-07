const db = require('../db')
const { Post, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = await Post.find()


  const comments = [
    {
        comment: "What a beautiful place",
        post_id: posts_id
      
    }
  ]

  await Comment.insertMany(reviews)
  console.log("reviews")
}
const run = async () => {
  await main()
  db.close()
}

run()