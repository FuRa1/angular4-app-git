import { Repo } from './class/repo';

export interface IAppState {
  repos: Repo[];
  isPending: boolean;
  isEmpty: boolean;
  errorOccurs: boolean;
  errorMessage: string;
}

export const INITIAL_STATE: IAppState = {
  repos: [],
  isPending: false,
  isEmpty: false,
  errorOccurs: false,
  errorMessage: '',
};

