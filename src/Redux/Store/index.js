import { createStore, applyMiddleware } from 'redux';
// import { reducer } from '../index';
import reducer from '../Reducer';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(logger));

export default store;
