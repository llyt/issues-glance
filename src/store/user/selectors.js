import { createSelector } from 'reselect'

export const getFetchedRepositories = (state) => state.user.fetchedRepositories
export const getLoadingState = (state) => state.user.isLoading
export const getUserName = (state) => state.user.name
export const getTotalNumberOfRepositories = (state) => state.user.totalNumberOfRepositories

export const getUserRepositories = createSelector(
  getFetchedRepositories,
  (rawRepos) => rawRepos.map(({name}) => ({value: name, label: name}))
)