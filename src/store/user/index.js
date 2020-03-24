import mainReducer from './reducer'

export const initialState = {
  error: null,
  isLoading: false,
  name: null,
  fetchedRepositories: [],
  totalNumberOfRepositories: null,
}

export default mainReducer
