import React, { Component } from 'react'

export default class Messagearea extends Component {
  state={
    user1:"Message"
  }

    messageArea=(e)=>{
        this.setState({
        user1:e.target.value
        })
    }
    
  render() {
    return (
      <div>
        <input name="user1" onChange={this.messageArea} placeholder="Enter your message"/>
        {this.state.user1}
      </div>
    )
  }
}
