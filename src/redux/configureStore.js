import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missionReducer';

const reducer = combineReducers({
  rocketReducer,
  missionReducer,
});

const store = createStore(
  reducer,

  applyMiddleware(logger, thunk),
);

export default store;
