import {Injectable} from '@angular/core';
import {actionTypes} from './constants';
import {baseUrl} from './constants';

@Injectable()

export class CoreActions {

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
