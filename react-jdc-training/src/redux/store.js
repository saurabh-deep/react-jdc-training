import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

function baselineMiddleware() {
  // Disables redux-logger in prod
  // if (
  //   process.env.REACT_APP_REDUX_DEBUGGING_ENABLED === 'false' ||
  //   !process.env.REACT_APP_REDUX_DEBUGGING_ENABLED
  // ) {
  //   return applyMiddleware(thunkMiddleware);
  // }

  return compose(applyMiddleware(thunkMiddleware, createLogger()));
}

export default initialState => {
  const enhancers =composeWithDevTools(baselineMiddleware());
    // process.env.REACT_APP_REDUX_DEBUGGING_ENABLED === 'true'
    //   ? composeWithDevTools(baselineMiddleware())
    //   : baselineMiddleware();
  const store = createStore(rootReducer, initialState, enhancers);
  return store;
};