import { Dispatch } from 'redux';
import {
  AppActions,
  ActionType,
  SuccessTypes,
  RequestTypes,
  FailureTypes,
} from '../../types/actions';
import { Dragon } from '../../types/Dragon';
import { Rocket } from '../../types/Rocket';

const BASE_URL = 'https://api.spacexdata.com/v3/';

const request = (type: RequestTypes['type']): RequestTypes => ({
  type,
});

const success = (
  type: SuccessTypes['type'],
  data: Dragon[] & Rocket[]
): SuccessTypes => ({
  type,
  payload: data,
});

const failure = (type: FailureTypes['type'], error: string): FailureTypes => ({
  type,
  payload: error,
});

export const fetchDragons = () => async (dispatch: Dispatch<AppActions>) => {
  dispatch(request(ActionType.FETCH_DRAGONS_REQUEST));

  try {
    const response = await fetch(`${BASE_URL}dragons`);
    const data = await response.json();

    dispatch(success(ActionType.FETCH_DRAGONS_SUCCESS, data));
  } catch (error) {
    dispatch(failure(ActionType.FETCH_DRAGONS_FAILURE, error));
  }
};

export const fetchRockets = () => async (dispatch: Dispatch<AppActions>) => {
  dispatch(request(ActionType.FETCH_ROCKETS_REQUEST));

  try {
    const response = await fetch(`${BASE_URL}rockets`);
    const data = await response.json();

    dispatch(success(ActionType.FETCH_ROCKETS_SUCCESS, data));
  } catch (error) {
    dispatch(failure(ActionType.FETCH_ROCKETS_FAILURE, error));
  }
};
