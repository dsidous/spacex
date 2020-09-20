import { combineReducers } from 'redux';
import dragonsReducer from './dragonsreducer';
import rocketsReducer from './rocketsreducer';

export default combineReducers({
  rockets: rocketsReducer,
  dragons: dragonsReducer,
});
