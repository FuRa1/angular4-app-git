import {Injectable} from '@angular/core';

interface Action { type: string; payload?: any; }

@Injectable()

export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';
  static FINDREPOS = 'FINDREPOS';

  increment(): Action {
    return {type: CounterActions.INCREMENT};
  }

  decrement(): Action {
    return {type: CounterActions.DECREMENT};
  }

  findRepos(payload): Action {
    return {type: CounterActions.FINDREPOS, payload}
  }
}
