import React from 'react';
import {createStore} from 'redux';

  function reduxDemo(props) {
    const initialiState = {
      count: 12
    }
      // step 2 create reducer
      const reducer = function(state = initialiState, action){
        switch (action.type) {
          case 'INCREMENT':
            return Object.assign({}, state, { count: state.count + 1 });
          case 'DECREMENT':
            return Object.assign({}, state, { count: state.count - 1 });
          default:
            return state;
        }
      }
    // step 1 create store
    const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

// step 3
    store.subscribe(()=>{
      console.log(store.getState());
    })
    
    // step 4
      function onIncrementClick(){
        console.log(store.getState());
        // console.log('Increasing ');
        store.dispatch({ type: 'INCREMENT' }); 
      }

      function onDecrementClick(){
        store.dispatch({ type: 'DECREMENT' });
        console.log('Decreasing!') 
      }        
            return (
              <div>
                <h1>I am Counter</h1>
                <p>Counter:{store.getState().count}</p>
                <button onClick={onIncrementClick}>Increment</button>
                <button onClick={onDecrementClick}>Decrement</button>
              </div>
            )
  }

export default reduxDemo;

