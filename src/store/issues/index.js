import mainReducer from './reducer'

export const initialState = {
  error: null,
  isLoading: false,
  fetchedIssues: [],
  perPage: 10,
  issuesTotalCount: null
}

export default mainReducer
