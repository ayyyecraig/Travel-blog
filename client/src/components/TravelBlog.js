// import React from "react";
import { useState, useEffect } from 'react'
// import axios from 'axios'
import { LoadPosts } from '../store/actions/PostActions'
import { LoadPostsComments } from "../store/actions/PostActions";
import { connect } from 'react-redux'

const mapStateToProps = ({ postState }) => {
    return { postState }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchPosts: () => dispatch(LoadPosts())
    }
  }

  const Posts = (props) => {
      useEffect(() => {
          props.fetchPosts()
      }, [])
  

  return(
      <div>
          <ul>
              {props.postState.posts.map((post) =>(
                  <div>
                      <h3>{post.location}</h3>
                  </div>
              ))}
          </ul>
      </div>
  )
}
  export default connect(mapStateToProps, mapDispatchToProps)(Posts)