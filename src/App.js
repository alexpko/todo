import React, { Component } from 'react';
import './App.css';
import List from './List/List'

class App extends Component {

  state = {
    items: [
      {name: 'open the fridge'},
      {name: 'to eat'},
      {name: 'go to bed'}
    ],
    pageTitle: 'Enter todolist',
    showItems: false
  }

  touchInput = (event) => {
        if (event.target.value==='todolist') {
    this.setState({
      showItems: !this.state.showCars})
    }
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let items = null

    if (this.state.showItems) {
      items = this.state.items.map((item, index) => {
        return (
          <List
            key={index}
            name={item.name}             
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <input
          onChange={this.touchInput}
        />
        {items}       
      </div>
    );
  }
}

export default App;
