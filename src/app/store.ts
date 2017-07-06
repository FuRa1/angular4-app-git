import { Action } from 'redux';
import { CounterActions } from './app.actions';
import { Repo } from './class/repo';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export interface IAppState {
  count: number;
  repos: Repo[];
}
export const INITIAL_STATE: IAppState = createStore(
  applyMiddleware(thunk)
);
export const INITIAL_STATE: IAppState = {
  count: 0,
  repos: [],
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch (action.type) {
    case CounterActions.INCREMENT: return { count: lastState.count + 1, repos: [...lastState.repos] };
    case CounterActions.DECREMENT: return { count: lastState.count - 1, repos: [...lastState.repos] };
    case CounterActions.FINDREPOS: return { count: lastState.count,  repos: [...lastState.repos] };
  }
  // We don't care about any other actions right now.
  return lastState;
}
