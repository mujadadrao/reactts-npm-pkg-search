import { SearchRepositoriesAction } from "./../actions";
import { RepositoriesActionTypes } from "../action-types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: SearchRepositoriesAction
): RepositoriesState => {
  switch (action.type) {
    case RepositoriesActionTypes.SEARCH_REPOSITORIES_BEGIN:
      return { loading: true, error: null, data: [] };
    case RepositoriesActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case RepositoriesActionTypes.SEARCH_REPOSITORIES_FAILED:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
