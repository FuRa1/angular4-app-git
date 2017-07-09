import {Injectable} from '@angular/core';
import {actionTypes} from './constants';
import axios from 'axios';
import {baseUrl} from './constants';

@Injectable()

export class CoreActions {

  getReposAsync(userName) {
    return dispatch => {
      dispatch(this.pendingRepos());
      return axios.get(`${baseUrl}/users/${userName}/repos`)
        .then(response => {
          (response.data && response.data.length > 0) ? dispatch(this.setRepos(response.data)) : dispatch(this.emptyRepos());
        })
        .catch(error => dispatch(this.errorRepos(error.statusText)))
    }
  }

  getFavoritesReposAsync() {
    return dispatch => {
      dispatch(this.pendingRepos());
      // return axios.get(`${baseUrl}/users/${userName}/repos`) // from localStorage
      //   .then(response => {
      //     (response.data && response.data.length > 0) ? dispatch(this.setRepos(response.data)) : dispatch(this.emptyRepos());
      //   })
      //   .catch(error => dispatch(this.errorRepos(error.statusText)))
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

  addFavorites(payload) {
    return {type: actionTypes.ADDFAVORITES, payload}
  }

  removeFavorites(payload) {
    return {type: actionTypes.REMOVEFAVORITES, payload}
  }
}
