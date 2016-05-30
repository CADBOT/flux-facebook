import React from 'react'

import {PostStore} from '../stores/posts-store.js'
import {constants} from '../constants/app-constants.js'
import {postActions} from '../actions/post-actions.js'

function getPosts() {
  return {
    posts: PostStore.getPosts()
  }
}

class Post extends React.Component {
  render() {
    return <p>{this.props.friend}: {this.props.post}</p> 
  }
}

export class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state = getPosts()
  }

  onChange() {
    this.setState(getPosts())
  }

  componentDidMount() {
    console.log('add listener')
    console.log(PostStore)
    PostStore.addChangeListener(this.onChange.bind(this))
  }

  componentWillUnmount() {
    PostStore.removeChangeListener(this.onChange.bind(this))
  }

  addPost() {
    var hardCodedPost = {friend: 'george', post: 'of the jungle'}
    postActions.addPost(hardCodedPost)
  }

  render() {
    return (
      <div>
        <h3>Your feed</h3>
        {
          this.state.posts.map(post => <Post friend={post.friend} post={post.post}/>)
        }
        <p>add Post</p>
        <button onClick={this.addPost.bind(this)}>Add Post</button>
      </div>
    )
  }
}
