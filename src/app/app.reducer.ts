import {actionTypes} from './constants';
import {IAppState} from './app.store';

export interface Action { type: string; payload?: any; }

export function coreReducer(state: IAppState, action: Action): IAppState {
  switch (action.type) {
    case actionTypes.PENDINGREPOS:
      return { ...state, isPending: true, isEmpty: false, errorMessage: '', errorOccurs: false };
    case actionTypes.SETREPOS:
      return { ...state, isPending: false, repos: [...action.payload] };
    case actionTypes.ERRORREPOS:
      return { ...state, isPending: false, errorMessage: action.payload, errorOccurs: true, repos: [] };
    case actionTypes.EMPTYREPOS:
      return {  ...state, isPending: false, isEmpty: true, repos: []};
  }
  return state;
}
