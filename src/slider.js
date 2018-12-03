import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

class Slider extends Component {
  constructor(props) {
    super(props)
//TODO1: state is an object and you're expecting these objects to change
//TODO2: Let's add 4 objects with a key and a value to our this.state object
    this.state = {}
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

render(
  <Slider />,
  document.getElementById('app')
)
