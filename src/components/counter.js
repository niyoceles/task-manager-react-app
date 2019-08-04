import React from 'react'
import { connect } from 'react-redux';

function Counter(props) {
  console.log('render', props);
  return (
    <div>
      <h1>I am Counter</h1>
      <p>Counter: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
      <button onClick={props.onDecrementClick}>Decrement</button>

    </div>
  )
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    count: state.count
  }
}

// dispatch
function mapDispatchToProps(dispatch) {
  // console.log('mapDispatchToProps', dispatch);
  return {
    onIncrementClick: () => {
      dispatch({ type: 'INCREMENT' });
    },
    onDecrementClick: () => {
      dispatch( {type: 'DECREMENT' });
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);  
