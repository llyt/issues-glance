import * as types from './types'

export const selectPointerRepository = (value) => (
  {
    type: types.SELECT_POINTER_REPOSITORY,
    payload: { value }
  }
)

export const fetch_issues = (issues, total) => (
  {
    type: types.FETCH_ISSUES,
    payload: {
      issues,
      total
    }
  }
)