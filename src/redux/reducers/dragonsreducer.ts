import { ActionType, FetchDragonsActionTypes } from '../../types/actions';
import { DragonsReducer } from '../../types/Dragon';

const initialState = { items: [], isFetching: false };

export default (
  state = initialState,
  action: FetchDragonsActionTypes
): DragonsReducer => {
  switch (action.type) {
    case ActionType.FETCH_DRAGONS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
      break;
    case ActionType.FETCH_DRAGONS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
      break;
    case ActionType.FETCH_DRAGONS_SUCCESS:
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
