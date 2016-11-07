import { createStore, compse, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

import { search } from './actions/actionCreators';

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
