import { createSelector } from 'reselect'

export const getError = (state) => state.issues.error
export const getLoadingState = (state) => state.issues.isLoading
export const getPage = (state) => state.issues.page
export const getPerPage = (state) => state.issues.perPage
export const getFetchedIssues = (state) => state.issues.fetchedIssues
export const getIssuesTotalCount = (state) => state.issues.issuesTotalCount
export const getPointerRepository = (state) => state.issues.pointerRepository
export const getFetchedPages = (state) => state.issues.fetchedPages

export const getIssuesList = createSelector(
  getPage,
  getPerPage,
  getFetchedIssues,
  (page, perPage, fetchedIssues) => {
    const startIndex = perPage * (page - 1)
    const endIndex = perPage * page

    return fetchedIssues.slice(startIndex, endIndex)
  }
)
