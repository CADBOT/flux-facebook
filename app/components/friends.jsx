import React from 'react'

class Friend extends React.Component {
  render() {
    return <p>{this.props.friend.name} {this.props.friend.age}</p> 
  }
}

export class Friends extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [
        {name: 'bob', age: 20},
        {name: 'jill', age: 35} 
      ]
    }
  }

  render() {
    return (
      <div>
        <h3>Your friends</h3>
        {
          this.state.friends.map(friend => <Friend friend={friend}/>)
        }
        <p>add friend</p>
        {/* todo finish friends */}
        <input
          />
      </div>
    )
  }
}
