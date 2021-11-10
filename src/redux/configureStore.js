import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import fetchApiRockets from '../components/rocketsApi';
import rocketReducer, { getRockets } from './rockets/rockets';

const reducer = combineReducers({
  rockets: rocketReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

store.dispatch(getRockets());

fetchApiRockets();

export default store;
