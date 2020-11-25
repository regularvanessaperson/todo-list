import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem.js'

class MyList extends Component {

  state = {
    toDoItemArray: this.props.theList,
    newItem: " "
  }

  clearList = (e) => {
    this.setState({
      toDoItemArray: []
    })
    console.log("Clearing List!")
  }

  newItemChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e) {
    // prevent the event from running the default "submit" event.
    e.preventDefault()
    this.state.toDoItemArray.push(this.state.newItem)
    let newArray = this.state.toDoItemArray
    this.setState({
      toDoItemArray: newArray,
      newItem: " "
    })
    // then the rest of your code.
    console.log("making sure this is right")
    // ...
  }

  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={'todo' + index} />
    ))
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <buton onClick={(e) => this.clearList(e)}>Finished the list!</buton>
        <form>
          <input type="text"
            placeholder="Type an item here"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
      </div>
    )
  }
}

export default MyList