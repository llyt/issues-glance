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

export const selectPointerRepository = (value) => (
  {
    type: types.SELECT_POINTER_REPOSITORY,
    payload: { value }
  }
)