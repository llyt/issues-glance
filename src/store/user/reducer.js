import { initialState } from './index'
import * as types from './types'

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FIND_USER:
      return {
        ...initialState,
        name: action.payload.userName,
      }

    case types.REQUEST_REPOSITORIES:
      return {
        ...state,
        fetchedRepositories: [...action.payload.repositories],
        totalNumberOfRepositories: action.payload.total
      }

    case types.LOADER_ON:
      return {
        ...state,
        isLoading: true
      }

    case types.LOADER_OFF:
      return {
        ...state,
        isLoading: false
      }

    case types.FETCH_REPOS_ERROR:
      return {
        ...state,
        error: action.payload.message
      }

    default:
      return state
  }
}