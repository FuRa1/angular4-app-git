import { Repo } from './class/repo';

export interface IAppState {
  repos: Repo[];
}

export const INITIAL_STATE: IAppState = {
  repos: [],
};

