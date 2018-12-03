import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

class Slider extends Component {
  constructor(props) {
    super(props)
//TODO1: state is an object and you're expecting these objects to change
//TODO2: Let's add 4 objects with a key and a value to our this.state object
//TODO3: We are setting a few of the values with an empty string because we are expecting to recieve data
    this.state = {
      httpData: '',
      currentIndexInArray: 0, //TIP: we set the intial index to 0 because that's how we count the begining of an array
      imageUrl: '',
      imageContent: ''
    }
    this.onclick = this.onclick.bind(this);
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
