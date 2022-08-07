import { RepositoriesActionTypes } from '../action-types/index';

interface SearchRepositoriesBeginAction {
  type: RepositoriesActionTypes.SEARCH_REPOSITORIES_BEGIN;
}

interface SearchRepositoriesSuccessAction {
  type: RepositoriesActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesFailedAction {
  type: RepositoriesActionTypes.SEARCH_REPOSITORIES_FAILED;
  payload: string;
}

export type SearchRepositoriesAction =
  | SearchRepositoriesBeginAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesFailedAction;
