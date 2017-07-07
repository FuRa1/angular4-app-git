import {Injectable} from '@angular/core';
import {actionTypes} from './constants';
import {baseUrl} from './constants';

@Injectable()

export class CoreActions {
    // findRepos(userName) {
    //     console.log(userName);
    //     return (dispatch) => {
    //         dispatch(actionTypes.PENDINGREPOS);
    //         fetch(`${baseUrl}/users/${userName}/repos`)
    //             .then(response => dispatch(actionTypes.SETREPOS, response.json()))
    //             .catch(error => dispatch(actionTypes.ERRORREPOS));
    //     }
    // }

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
