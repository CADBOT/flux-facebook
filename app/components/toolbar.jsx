import React from 'react'

import {PostStore} from '../stores/posts-store.js'

function getPostsCount() {
  return {
    postsCount: PostStore.getPostsCount()
  }
}

export class Toolbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = getPostsCount()
  }

  onChange() {
    this.setState(getPostsCount)
  }

  componentDidMount() {
    console.log('add listener')
    console.log(PostStore)
    PostStore.addChangeListener(this.onChange.bind(this))
  }

  componentWillUnmount() {
    PostStore.removeChangeListener(this.onChange.bind(this))
  }


  render() {
    return (
      <div style={{display: 'flex', 
                   flexDirection: 'row',
                   justifyContent: 'space-between'}}>
        <p> Link one </p>
        <p> Link two </p>
        <p> Number of posts: {this.state.postsCount} </p>
      </div>
    )
  }
}
