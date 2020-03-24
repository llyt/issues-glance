export const getUserRepositories = (state) => {
  const rawRepos = state.user.fetchedRepositories
  return rawRepos.map(({name}) => ({value: name, label: name}))
}

export const getLoadingState = (state) => state.user.isLoading
export const getUserName = (state) => state.user.name
export const getTotalCount = (state) => state.user.totalNumberOfRepositories