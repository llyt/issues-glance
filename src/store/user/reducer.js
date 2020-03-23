import { initialState } from './index'
import * as types from './types'

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FIND_USER:
      return {
        ...state,
        name: action.payload.userName
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

    case types.SELECT_POINTER_REPOSITORY:
      return {
        ...state,
        pointerRepository: action.payload.value
      }

    default:
      return state
  }
}