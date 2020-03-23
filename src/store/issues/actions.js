import * as types from './types'

export const fetch_issues = (issues, total) => (
  {
    type: types.FETCH_ISSUES,
    payload: {
      issues,
      total
    }
  }
)