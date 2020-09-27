import { ActionType, FetchRocketsActionTypes } from '../../types/actions';
import { RocketsReducer } from '../../types/Rocket';

const initialState = { items: '', isFetching: false };

export default (
  state = initialState,
  action: FetchRocketsActionTypes
): RocketsReducer => {
  switch (action.type) {
    case ActionType.FETCH_ROCKETS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
      break;
    case ActionType.FETCH_ROCKETS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
      break;
    case ActionType.FETCH_ROCKETS_SUCCESS:
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
