import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { missionReducer } from './missions/missionReducer';
import fetchApiRockets from '../components/rocketsApi';
import rocketReducer, { getRockets } from './rockets/rockets';

const reducer = combineReducers({
  rockets: rocketReducer,
  missionReducer,
});

const store = createStore(
  reducer,

  applyMiddleware(logger, thunk),
);

store.dispatch(getRockets());

fetchApiRockets();

export default store;
