import {
    GetPostComments,
   GetPosts
  } from '../../services/PostServices'
  import { GET_POSTS, GET_COMMENTS } from '../types'
  
  export const LoadPosts =  () => {
    return async (dispatch) => {
      try {
        const posts = await GetPosts()
        dispatch({
          type: GET_POSTS,
          payload: posts
        })
      } catch (error) {
        throw error
      }
    }
  }

  export const LoadPostsComments =  () => {
    return async (dispatch) => {
      try {
        const postsComments = await GetPostComments()
        dispatch({
          type: GET_COMMENTS,
          payload: postsComments
        })
      } catch (error) {
        throw error
      }
    }
  }

