import React from 'react'
import {createStore} from 'redux'
import Counter from './Counter/counter'
import CounterReducer from '../../reducers/Counter/counter'

const store = createStore(counter)

export default React.createClass({
  render() {
    return (
      <div className="counter">
        <p>
          This is an example of the redux implementation.
        </p>
        <p>
          You clicked {value} times
        </p>
        <Counter value={store.getState()} onIncrement={() => store.dispatch({ type: 'INCREMENT'})} onDecrement={() => store.dispatch({ type: 'DECREMENT'})} />
      </div>
    )
  }
})
