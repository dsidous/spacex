import { Dragon } from './Dragon';
import { Rocket } from './Rocket';

const FETCH_DRAGONS_REQUEST = 'fetch_dragons_request';
const FETCH_DRAGONS_FAILURE = 'fetch_dragons_failure';
const FETCH_DRAGONS_SUCCESS = 'fetch_dragons_success';

const FETCH_ROCKETS_REQUEST = 'fetch_rockets_request';
const FETCH_ROCKETS_FAILURE = 'fetch_rockets_failure';
const FETCH_ROCKETS_SUCCESS = 'fetch_rockets_success';

export default {
  FETCH_DRAGONS_REQUEST,
  FETCH_DRAGONS_FAILURE,
  FETCH_DRAGONS_SUCCESS,
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_FAILURE,
  FETCH_ROCKETS_SUCCESS,
};

interface FetchDragonsRequestAction {
  type: typeof FETCH_DRAGONS_REQUEST;
  payload: null;
}

interface FetchDragonsFailureAction {
  type: typeof FETCH_DRAGONS_FAILURE;
  payload: string;
}

interface FetchDragonsSuccessAction {
  type: typeof FETCH_DRAGONS_SUCCESS;
  payload: Dragon[];
}

interface FetchRocketsRequestAction {
  type: typeof FETCH_ROCKETS_REQUEST;
  payload: null;
}

interface FetchRocketsFailureAction {
  type: typeof FETCH_ROCKETS_FAILURE;
  payload: string;
}

interface FetchRocketsSuccessAction {
  type: typeof FETCH_ROCKETS_SUCCESS;
  payload: Rocket[];
}

export type FetchActionTypes =
  | FetchDragonsFailureAction
  | FetchDragonsRequestAction
  | FetchDragonsSuccessAction
  | FetchRocketsFailureAction
  | FetchRocketsRequestAction
  | FetchRocketsSuccessAction;

export type AppActions = FetchActionTypes;
export type AppActionTypes =
  | FETCH_DRAGONS_REQUEST
  | FETCH_DRAGONS_FAILURE
  | FETCH_DRAGONS_SUCCESS
  | FETCH_ROCKETS_REQUEST
  | FETCH_ROCKETS_FAILURE
  | FETCH_ROCKETS_SUCCESS;
