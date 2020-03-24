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

export const paginationHandle = (newPage) => (
  {
    type: types.PAGINATION_HANDLE,
    payload: { newPage }
  }
)

export const perPageHandle = (value) => (
  {
    type: types.PER_PAGE_HANDLE,
    payload: { value }
  }
)