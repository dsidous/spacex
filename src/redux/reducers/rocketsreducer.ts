import actionTypes, { FetchActionTypes } from '../../types/actions';
import { RocketsReducer } from '../../types/Rocket';

const initialState = { isFetching: false };

export default (
  state = initialState,
  action: FetchActionTypes
): RocketsReducer => {
  switch (action.type) {
    case actionTypes.FETCH_ROCKETS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
      break;
    case actionTypes.FETCH_ROCKETS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
      break;
    case actionTypes.FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      };
      break;
    default:
      return state;
  }
};
