import { createStore } from 'redux';

const initialiState = {
  count: 0
}



const reducer = (state = initialiState, action) => {
  console.log('reducer running', action);
  switch (action.type) {
    case 'INCREMENT':
                                       //new count is going to be
      return Object.assign({}, state, { count: state.count + 1 });
    case 'DECREMENT':
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
}

const store = createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;