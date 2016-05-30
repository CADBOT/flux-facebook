import {dispatcher} from '../dispatcher/dispatcher.js'
import {constants} from '../constants/app-constants.js'
import {EventEmitter} from 'events'

var _count = 0

function incrementCount() {
  _count++
}

export var CountStore = Object.assign({}, EventEmitter.prototype, {
  getCount: function() {
    return _count
  },

  emitChange: function() {
    this.emit('CHANGE_EVENT')
  },

  addChangeListener: function(callback) {
    this.on('CHANGE_EVENT', callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener('CHANGE_EVENT', callback)
  }
})

dispatcher.register(function(action) {
  console.log(action)
  switch (action.actionType) {
    case constants.INCREMENT_COUNT:
      console.log('store got INCREMENT_COUNT')
      incrementCount() 
      CountStore.emitChange()
      break
  }
})
