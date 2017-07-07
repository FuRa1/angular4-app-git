import {Injectable} from '@angular/core';
import {actionTypes} from './constants';
import axios from 'axios';
import {baseUrl} from './constants';

@Injectable()

export class CoreActions {

  getReposAsync(userName) {
    return dispatch => {
      return axios.get(`${baseUrl}/users/${userName}/repos`)
        .then(response => {
          if (response.data && response.data.length > 0) {
            dispatch(this.setRepos(response.data));
          } else {
            dispatch(this.emptyRepos());
          }
        })
        .catch(error => {
          dispatch(this.errorRepos(error.statusText))
        })
    }
  }

  setRepos(payload) {
    return {type: actionTypes.SETREPOS, payload}
  }

  errorRepos(payload) {
    return {type: actionTypes.ERRORREPOS, payload}
  }

  emptyRepos() {
    return {type: actionTypes.EMPTYREPOS}
  }

  pendingRepos() {
    return {type: actionTypes.PENDINGREPOS}
  }
}
