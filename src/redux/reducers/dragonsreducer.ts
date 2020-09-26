import actionTypes, { FetchActionTypes } from '../../types/actions';
import { DragonsReducer } from '../../types/Dragon';

const initialState = { isFetching: false };

export default (
  state = initialState,
  action: FetchActionTypes
): DragonsReducer => {
  switch (action.type) {
    case actionTypes.FETCH_DRAGONS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
      break;
    case actionTypes.FETCH_DRAGONS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
      break;
    case actionTypes.FETCH_DRAGONS_SUCCESS:
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
