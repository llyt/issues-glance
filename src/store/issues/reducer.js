import { initialState } from './index'
import * as types from './types'
import { FIND_USER } from '../user/types'

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_POINTER_REPOSITORY:
      return {
        ...state,
        pointerRepository: action.payload.value
      }

    case types.FETCH_ISSUES:
      return {
        ...state,
        fetchedIssues: action.payload.issues,
        issuesTotalCount: action.payload.total
      }

    case FIND_USER:
      if (state.fetchedIssues.length !== 0) {
        return {
          ...initialState,
        }
      }
      return state

    case types.PAGINATION_HANDLE:
      return {
        ...state,
        page: action.payload.newPage
      }

    case types.PER_PAGE_HANDLE:
      return {
        ...state,
        perPage: Number(action.payload.value)
      }

    default:
      return state
  }
}