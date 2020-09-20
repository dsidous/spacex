import actionTypes from './actionTypes';

const BASE_URL = 'https://api.spacexdata.com/v3/';

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

export const fetchApi = (apiType) => async (dispatch) => {
  const fetchType = `FETCH_${apiType.toUpperCase()}`;

  dispatch(request(actionTypes[`${fetchType}_REQUEST`]));

  try {
    const response = await fetch(`${BASE_URL}${apiType}`);
    const data = await response.json();

    dispatch(success(actionTypes[`${fetchType}_SUCCESS`], data));
  } catch (error) {
    dispatch(failure(actionTypes[`${fetchType}_FAILURE`], error));
  }
};
