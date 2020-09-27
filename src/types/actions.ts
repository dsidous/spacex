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

export enum ActionType {
  FETCH_DRAGONS_REQUEST,
  FETCH_DRAGONS_FAILURE,
  FETCH_DRAGONS_SUCCESS,
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_FAILURE,
  FETCH_ROCKETS_SUCCESS,
}

export interface FetchDragonsRequestAction {
  type: ActionType.FETCH_DRAGONS_REQUEST;
  payload?: null;
}

interface FetchDragonsFailureAction {
  type: ActionType.FETCH_DRAGONS_FAILURE;
  payload?: string;
}

interface FetchDragonsSuccessAction {
  type: ActionType.FETCH_DRAGONS_SUCCESS;
  payload?: Dragon[];
}

export interface FetchRocketsRequestAction {
  type: ActionType.FETCH_ROCKETS_REQUEST;
  payload?: null;
}

interface FetchRocketsFailureAction {
  type: ActionType.FETCH_ROCKETS_FAILURE;
  payload?: string;
}

interface FetchRocketsSuccessAction {
  type: ActionType.FETCH_ROCKETS_SUCCESS;
  payload?: Rocket[];
}

export type SuccessTypes =
  | FetchRocketsSuccessAction
  | FetchDragonsSuccessAction;

export type RequestTypes =
  | FetchRocketsRequestAction
  | FetchDragonsRequestAction;

export type FailureTypes =
  | FetchRocketsFailureAction
  | FetchDragonsFailureAction;

export type FetchDragonsActionTypes =
  | FetchDragonsFailureAction
  | FetchDragonsRequestAction
  | FetchDragonsSuccessAction;

export type FetchRocketsActionTypes =
  | FetchRocketsFailureAction
  | FetchRocketsRequestAction
  | FetchRocketsSuccessAction;

export type AppActions = FetchRocketsActionTypes | FetchDragonsActionTypes;

export type DragonsActionTypes =
  | typeof FETCH_DRAGONS_REQUEST
  | typeof FETCH_DRAGONS_FAILURE
  | typeof FETCH_DRAGONS_SUCCESS;

export type RocketsActionTypes =
  | typeof FETCH_ROCKETS_REQUEST
  | typeof FETCH_ROCKETS_FAILURE
  | typeof FETCH_ROCKETS_SUCCESS;

export type AppActionTypes = DragonsActionTypes | RocketsActionTypes;
