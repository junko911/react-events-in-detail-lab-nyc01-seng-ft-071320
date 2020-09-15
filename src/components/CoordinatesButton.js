import React from 'react'

class CoordinatesButton extends React.Component {
  
  render() {
    return(
    <button onClick={ e => {
      let coordinates = [e.clientX, e.clientY]
      return this.props.onReceiveCoordinates(coordinates)
    }} >Button1</button>
    )
  }
}

export default CoordinatesButton
