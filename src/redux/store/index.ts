import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from '../../types/actions';
import rootReducer from '../reducers';

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunk as ThunkMiddleware<AppState, AppActions>];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
