import _ from 'lodash'

import {
  GET_REPOSITORIES_LIST_REQUESTED,
  GET_REPOSITORIES_LIST_SUCCEEDED,
  GET_REPOSITORIES_LIST_FAILED
} from '../actions/repositoriesActions'

const initialState = {
  ...{
    fetching: false,
    fetched: false,
    error: false,
    current_page: 1,
    repositories: []
  }
};

export default function translationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REPOSITORIES_LIST_REQUESTED: {
      return {
        ...state,
        ...{
          fetching: true,
          fetched: false,
          error: false,
        }
      }
    }

    case GET_REPOSITORIES_LIST_SUCCEEDED: {
      let repositories = _.get(action, 'repositories', {});

      let next_page

      if (repositories.length === 0) {
        next_page = null
      } else {
        next_page = state.current_page + 1
      }

      let merges_repos = state.repositories

      merges_repos = merges_repos.concat(repositories)

      return {
        ...state,
        ...{
          fetching: false,
          fetched: true,
          error: false,
          current_page: next_page,
          repositories: merges_repos
        }
      }
    }

    case GET_REPOSITORIES_LIST_FAILED: {
      const { message } = action;

      return {
        ...state,
        ...{
          fetching: false,
          fetched: false,
          error: message
        }
      }
    }

    default:
      return state
  }
}
