import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPostComments = async (postId) => {
  try {
    const res = await Client.get(`/posts/${postId}`)
    return res.data.Comments
  } catch (error) {
    throw error
  }
}