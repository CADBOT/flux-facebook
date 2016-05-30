import {constants} from '../constants/app-constants.js'
import {dispatcher} from '../dispatcher/dispatcher.js'

console.log(constants)

export var postActions = {
  addPost: function(post) {
    dispatcher.dispatch({
      actionType: constants.ADD_POST,
      post: post
    })
  }
}
