import React from 'react'
import {render} from 'react-dom'
import {CountStore} from './stores/increment-store.js'
import {postActions} from './actions/post-actions.js'
console.log(postActions)

import {Friends} from './components/friends.jsx'
import {Posts} from './components/posts.jsx'
import {Toolbar} from './components/toolbar.jsx'
/*
function getCountState() {
  return {
    count: CountStore.getCount()
  }
}
*/

var url = 'http://localhost:3000/posts'
fetch(url, {
  method: 'post',
  body: JSON.stringify('{"name": "tim"}')
}).then(res => res.json())
/*
fetch(url, {
  method: 'post',
  body: JSON.stringify({
    friend: 'tim',
    post: 'hello'
  })
}).then(res => res.json())
*/

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Toolbar />
        <Posts />
      </div>
    )
  } 
}

/*
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = getCountState()
  }

  componentDidMount() {
    CountStore.addChangeListener(this.onChange.bind(this)) 
  }

  onChange() {
    console.log('rerender state') 
    this.setState(getCountState())
  }

  increaseCount() {
    console.log(incrementActions)
    incrementActions.incrementCount()
  }

  render() {
    return (
      <main>
        <p>count {this.state.count} </p>
        <button onClick={this.increaseCount}> increase count </button>
      </main>
    )
  }
}
*/

render(<App/>, document.getElementById('app'))
