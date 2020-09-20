import actionTypes from './actionTypes';

enum apiTypeEnum {
  dragons,
  rockets,
}

const BASE_URL = 'https://api.spacexdata.com/v3/';
const FETCH_TYPES = {
  dragons: 'FETCH_DRAGONS',
  rockets: 'FETCH_ROCKETS',
};

const request = (type) => ({
  type,
});

const success = (type, data) => ({
  type,
  payload: data,
});

const failure = (type, error) => ({
  type,
  payload: error,
});

export const fetchApi = (apiType: apiTypeEnum) => async (dispatch) => {
  const fetchType = FETCH_TYPES[apiType];

  dispatch(request(actionTypes[`${fetchType}_REQUEST`]));

  try {
    const response = await fetch(`${BASE_URL}${apiType}`);
    const data = await response.json();

    dispatch(success(actionTypes[`${fetchType}_SUCCESS`], data));
  } catch (error) {
    dispatch(failure(actionTypes[`${fetchType}_FAILURE`], error));
  }
};
