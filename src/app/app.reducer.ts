import {actionTypes} from './constants';
import {IAppState} from './app.store';

export interface Action { type: string; payload?: any; }

export function coreReducer(state: IAppState, action: Action): IAppState {
  switch (action.type) {
    case actionTypes.PENDINGREPOS:
      return {repos: [...state.repos]};
    case actionTypes.SETREPOS:
      return {repos: [...action.payload]};
    case actionTypes.ERRORREPOS:
      return {repos: [...state.repos]};
    case actionTypes.EMPTYREPOS:
      return {repos: []};
  }
  return state;
}
