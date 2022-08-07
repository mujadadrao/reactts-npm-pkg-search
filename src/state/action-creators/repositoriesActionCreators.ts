import axios from "axios";
import { RepositoriesActionTypes } from "../action-types";
import { SearchRepositoriesAction } from "../actions";
import { Dispatch } from "redux";

// export const searchRepositoriesBegin = () => ({
//   type: RepositoriesActionTypes.SEARCH_REPOSITORIES_BEGIN,
// });

// export const searchRepositoriesSuccess = (payload: string[]) => ({
//   type: RepositoriesActionTypes.SEARCH_REPOSITORIES_BEGIN,
//   payload,
// });

// export const searchRepositoriesFailed = (payload: string) => ({
//   type: RepositoriesActionTypes.SEARCH_REPOSITORIES_BEGIN,
//   payload,
// });


export const searchRepositories = (query: string) => {
  return async (dispatch: Dispatch<SearchRepositoriesAction>) => {
    dispatch({
      type: RepositoriesActionTypes.SEARCH_REPOSITORIES_BEGIN,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: query,
          },
        }
      );
      const repositoriesNames = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: RepositoriesActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: repositoriesNames,
      });
    } catch (err: any) {
      dispatch({
        type: RepositoriesActionTypes.SEARCH_REPOSITORIES_FAILED,
        payload: err.message,
      });
    }
  };
};
