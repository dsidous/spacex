import { Dispatch } from 'redux';
import actionTypes, { AppActions, AppActionTypes } from '../../types/actions';
import { Dragon } from '../../types/Dragon';
import { Rocket } from '../../types/Rocket';

const BASE_URL = 'https://api.spacexdata.com/v3/';

const request = (type: AppActionTypes): AppActions => ({
  type,
  payload: null,
});

const success = (
  type: AppActionTypes,
  data: Dragon[] | Rocket[]
): AppActions => ({
  type,
  payload: data,
});

const failure = (type: AppActionTypes, error: string): AppActions => ({
  type,
  payload: error,
});

export const fetchDragons = () => async (dispatch: Dispatch<AppActions>) => {
  dispatch(request(actionTypes.FETCH_DRAGONS_REQUEST));

  try {
    const response = await fetch(`${BASE_URL}dragons`);
    const data = await response.json();

    dispatch(success(actionTypes.FETCH_DRAGONS_SUCCESS, data));
  } catch (error) {
    dispatch(failure(actionTypes.FETCH_DRAGONS_FAILURE, error));
  }
};

export const fetchRockets = () => async (dispatch: Dispatch<AppActions>) => {
  dispatch(request(actionTypes.FETCH_ROCKETS_REQUEST));

  try {
    const response = await fetch(`${BASE_URL}rockets`);
    const data = await response.json();

    dispatch(success(actionTypes.FETCH_ROCKETS_SUCCESS, data));
  } catch (error) {
    dispatch(failure(actionTypes.FETCH_ROCKETS_FAILURE, error));
  }
};
