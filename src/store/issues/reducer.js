import { initialState } from './index'
import * as types from './types'

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ISSUES:
      return {
        ...state,
        fetchedIssues: action.payload.issues,
        issuesTotalCount: action.payload.total
      }

    default:
      return state
  }
}