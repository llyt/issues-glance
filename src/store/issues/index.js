import mainReducer from './reducer'

export const initialState = {
  error: null,
  isLoading: false,
  pointerRepository: null,
  fetchedIssues: [],
  page: 1,
  perPage: 10,
  issuesTotalCount: null,
  fetchedPages: []
}

export default mainReducer
