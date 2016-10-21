import React from 'react'

export default React.createClass({
  render() {
    const {value, onIncrement, onDecrement} = this.props
    return (
      <div className="counter">
        <div className="counter-value">
          Counter value: {value}.
        </div>
        <button onClick="{onIncrement}">+</button>
        <button onClick="{onDecrement}">-</button>
      </div>
    )
  }
})
