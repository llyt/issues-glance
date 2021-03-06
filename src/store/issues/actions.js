import * as types from './types'

export const selectPointerRepository = (value) => (
  {
    type: types.SELECT_POINTER_REPOSITORY,
    payload: { value }
  }
)

export const onLoader = () => (
  {
    type: types.ON_LOADER
  }
)

export const offLoader = () => (
  {
    type: types.OFF_LOADER
  }
)

export const fetch_issues = (issues, total, page) => (
  {
    type: types.FETCH_ISSUES,
    payload: {
      issues,
      total,
      page
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

export const errorOccurred = (message) => (
  {
    type: types.FETCH_ISSUES_ERROR,
    payload: { message }
  }
)