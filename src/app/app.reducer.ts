import {actionTypes} from './constants';
import {IAppState} from './app.store';
import * as _ from 'lodash';
export interface Action { type: string; payload?: any;
}

export function coreReducer(state: IAppState, action: Action): IAppState {
  switch (action.type) {
    case actionTypes.PENDINGREPOS:
      return {...state, isPending: true, isEmpty: false, errorMessage: '', errorOccurs: false};
    case actionTypes.SETREPOS:
      return {...state, isPending: false, repos: [...action.payload]};
    case actionTypes.SETFAVORITESREPOS:
      return {...state, isPending: false, favorites: [...action.payload]};
    case actionTypes.ERRORREPOS:
      return {...state, isPending: false, errorMessage: action.payload, errorOccurs: true, repos: []};
    case actionTypes.EMPTYREPOS:
      return {...state, isPending: false, isEmpty: true, repos: []};
    case actionTypes.ADDFAVORITES:
      const favoriteRepo = _.find(state.repos, repo => repo.id === action.payload);
      console.log(favoriteRepo);
      return {...state, favorites: [...state.favorites, ...[favoriteRepo]]};
    case actionTypes.REMOVEFAVORITES:
      const newFavorites = _.filter(state.favorites, favorite => favorite.id !== action.payload);
      return {...state, favorites: [...newFavorites]};
  }
  return state;
}
