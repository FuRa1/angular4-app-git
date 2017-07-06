import {Injectable} from '@angular/core';
import {actionTypes} from './constants';
import {baseUrl} from './constants';

@Injectable()

export class CoreActions {
  findRepos(userName) {
    return (dispatch) => {
      dispatch(actionTypes.PENDINGREPOS);
      fetch(`${baseUrl}/users/${userName}/repos`)
        .then(response => dispatch(actionTypes.SETREPOS, response.json()))
        .catch(error => dispatch(actionTypes.ERRORREPOS));
    }
  }
}
