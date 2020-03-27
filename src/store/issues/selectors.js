export const getIssuesList = (state) => {
  const { perPage, page, fetchedIssues } = state.issues
  const startIndex = perPage * (page - 1)
  const endIndex = perPage * page

  return fetchedIssues.slice(startIndex, endIndex)
}

export const getError = (state) => state.issues.error
export const getLoadingState = (state) => state.issues.isLoading
export const getPage = (state) => state.issues.page
export const getPerPage = (state) => state.issues.perPage
export const getIssuesTotalCount = (state) => state.issues.issuesTotalCount
export const getPointerRepository = (state) => state.issues.pointerRepository
export const getFetchedPages = (state) => state.issues.fetchedPages