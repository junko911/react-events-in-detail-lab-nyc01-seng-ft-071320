import React from 'react'

class DelayedButton extends React.Component {

  render() {
    return <button onClick={ e => {
      setTimeout( () => {
        this.props.onDelayedClick(e)}, this.props.delay)
        e.persist()
    }}>Button</button>
  }
}

export default DelayedButton
