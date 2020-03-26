import { takeLatest, call, put, select } from 'redux-saga/effects'
import Api from '../api'
import { SELECT_POINTER_REPOSITORY, PAGINATION_HANDLE, PER_PAGE_HANDLE } from '../issues/types'
import { getUserName } from '../user/selectors'
import {
  getPage,
  getPerPage,
  getPointerRepository,
  getFetchedPages,
} from './selectors'
import * as issuesActions from './actions'


export default function* userSaga() {
  yield takeLatest(SELECT_POINTER_REPOSITORY, repoFlow)
  yield takeLatest(PAGINATION_HANDLE, repoFlow)
  yield takeLatest(PER_PAGE_HANDLE, repoFlow)
}

function* repoFlow() {
  const userName = yield select(getUserName)
  const repo = yield select(getPointerRepository)
  const page = yield select(getPage)
  const perPage = yield select(getPerPage)
  const fetchedPages = yield (select(getFetchedPages))

  if (!fetchedPages.includes(page)) {
    try {
      yield put(issuesActions.onLoader())
      const {total_count, items} = yield call(fetchRepoIssues, userName, repo, page, perPage)
      const issues = convertRawIssues(items, (page - 1) * perPage)
      yield put(issuesActions.fetch_issues(issues, total_count, page))
      yield put(issuesActions.offLoader())
    }
    catch (error) {
      console.error(error)
      // TODO Show error in IssuesList component
      yield put(issuesActions.offLoader())
    }
  }
}

async function fetchRepoIssues(userName, repoName, page, perPage) {
  const response = await Api.getIssues(userName, repoName, perPage, page)
  return await response.json()
}

function convertRawIssues(raw, idShift) {
  return raw.map(({ state, title, number, user, created_at }, index) => (
    {
      id: index + 1 + idShift,
      state,
      title,
      number,
      openDate: created_at,
      author: user
    }
  ))
}