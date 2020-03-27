import * as types from './types'

export const findUser = (userName) => (
  {
    type: types.FIND_USER,
    payload: { userName }
  }
)

export const requestRepositories = (repositories, total) => (
  {
    type: types.REQUEST_REPOSITORIES,
    payload: {
      repositories,
      total
    }
  }
)

export const loaderOn = () => (
  {
    type: types.LOADER_ON
  }
)

export const loaderOff = () => (
  {
    type: types.LOADER_OFF
  }
)

export const errorOccurred = (message) => (
  {
    type: types.FETCH_REPOS_ERROR,
    payload: { message }
  }
)