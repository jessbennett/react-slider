import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import ArrowButton from '../src/components/arrow-button'

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
componentDidMount() {
  const getRequest = (url) => {
  try {
    return axios.get(url)
  } catch (error) {
    console.log(error) //always add try/catch so that the app doesn't fail
  }
}
const response = getRequest(`http://react-code-test.graftonstudio.com/thumbnails/api`)
response.then((responseObject) => {
  const data = responseObject.data;
  this.setState({
    //these are the keys and values that we want to get from the response object
    httpData: data,
    imageUrl: data[0].thumbnail_url,
    imageContent: data[0].thumbnail_content
  })
})
}

onclick(direction) {
  const currentIndexInArray = this.state.currentIndexInArray;
  const httpDataLength = this.state.httpData.length - 1;
  const httpData = this.state.httpData;
  if (direction === 'left' && currentIndexInArray === 0) {
    this.setState({
      currentIndexInArray: httpDataLength,
      imageUrl: httpData[httpDataLength].thumbnail_url,
      imageContent: httpData[httpDataLength].thumbnail_content
    })
  }
else if (direction === 'right' && currentIndexInArray === httpDataLength) {
  this.setState({
    currentIndexInArray: 0,
    imageUrl: httpData[0].thumbnail_url,
    imageContent: httpData[0].thumbnail_content
  })
}
else if (direction === 'right') {
  this.setState({
    currentIndexInArray: currentIndexInArray + 1,
    imageUrl: httpData[currentIndexInArray + 1].thumbnail_content,
    imageContent: httpData[0].thumbnail_content
  })
}
else if (direction === 'left') {
  this.setState({
    currentIndexInArray: currentIndexInArray + 1,
    imageUrl: httpData[currentIndexInArray + 1].thumbnail_url,
    imageContent: httpData[currentIndexInArray + 1].thumbnail_content
  })
}
}

render() {
return (
  <div>
    <img src={this.state.imageUrl}/>
    <p>{this.state.imageContent}</p>
    {ArrowButton('left', this.onclick)}
    {ArrowButton('right', this.onclick)}
  </div>
  )
  }
}

render(
  <Slider />,
  document.getElementById('app')
)