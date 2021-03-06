import { initialState } from './index'
import * as types from './types'
import { FIND_USER } from '../user/types'

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_POINTER_REPOSITORY:
      return {
        ...initialState,
        pointerRepository: action.payload.value,
      }

    case types.ON_LOADER:
      return {
        ...state,
        isLoading: true
      }

    case types.OFF_LOADER:
      return {
        ...state,
        isLoading: false
      }

    case types.FETCH_ISSUES:
      return {
        ...state,
        fetchedIssues: [...state.fetchedIssues, ...action.payload.issues],
        issuesTotalCount: action.payload.total,
        fetchedPages: [...state.fetchedPages, action.payload.page]
      }

    case FIND_USER:
      return {
        ...initialState,
      }

    case types.PAGINATION_HANDLE:
      return {
        ...state,
        page: action.payload.newPage
      }


    case types.PER_PAGE_HANDLE:
      return {
        ...state,
        perPage: Number(action.payload.value),
        page: initialState.page,
        fetchedIssues: initialState.fetchedIssues,
        fetchedPages: initialState.fetchedPages
      }

    case types.FETCH_ISSUES_ERROR:
      return {
        ...state,
        error: action.payload.message
      }

    default:
      return state
  }
}