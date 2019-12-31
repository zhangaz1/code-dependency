import { State } from "./State";
import { Reducer, createReducer } from "./Reducer";
import { Dispatch } from "./Action";

export interface Reducers {
  app: Reducer;
}

export interface Stores {
  app: {
    state: State;
    dispatch: Dispatch;
  };
}

export const createReducers = (): Reducers => {
  return {
    app: createReducer(),
  };
};
