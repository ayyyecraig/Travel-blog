const db = require('../db')
const { Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = [
    {
      location: "Dublin, Ireland",
      estimatedPrice: "3k per person",
      img: "",
      description: "Beautiful fields of green pubs"
    },
    {
        location: "",
        estimatedPrice: "",
        img: "",
        description: ""
      }
  
    ]
    await Post.insertMany(posts)
    console.log('Grab your passport')
   }

   const run = async () => {
    await main()
    db.close()
}

run()