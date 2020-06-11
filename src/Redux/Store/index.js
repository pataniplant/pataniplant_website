import { createStore, applyMiddleware } from 'redux';
// import { reducer } from '../index';
import reducer from '../Reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
