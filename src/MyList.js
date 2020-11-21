import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem.js'

class MyList extends Component {
  render() {
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          <ListItem doThis="Buy ice cream" />
        </ul>
      </div>
    )
  }
}

export default MyList