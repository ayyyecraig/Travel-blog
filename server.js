const express = require('express')
const cors = require('cors')
const PORT = process.PORT || 3001;
const app = express();
const db = require('./db')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const commentController = require('./controllers/CommentController')
const postController = require('./controllers/PostController')


app.get('/posts', postController.getAll)
app.get('/posts/:id', postController.getById)



app.listen(PORT, () => console.log(`listening on port ${PORT}`))
