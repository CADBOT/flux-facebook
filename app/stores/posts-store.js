import {dispatcher} from '../dispatcher/dispatcher.js'
import {constants} from '../constants/app-constants.js'
import {EventEmitter} from 'events'

/*
var _posts = [
  {friend: 'bob', post: 'I ate some cake'},
  {friend: 'jill', post: 'played some music'}
]
*/

import {postsApi} from '../utils/posts-api.js'

var _posts = []


function addPost(post) {
  _posts.push(post)
}

export var PostStore = Object.assign({}, EventEmitter.prototype, {
  getPosts: function() {
    return _posts
  },

  getPostsCount: function() {
    return _posts.length
  },

  emitChange: function() {
    this.emit('CHANGE_EVENT')
  },

  addChangeListener: function(callback) {
    this.on('CHANGE_EVENT', () => {
      callback()
    })
  },

  removeChangeListener: function(callback) {
    this.removeListener('CHANGE_EVENT', callback)
  }
})

dispatcher.register(function(action) {
  switch (action.actionType) {
    case constants.ADD_POST:
      addPost(action.post) 
      PostStore.emitChange()
      break
  }
})

postsApi.getPosts().then(data => {
  _posts = data
  PostStore.emitChange()  
})



