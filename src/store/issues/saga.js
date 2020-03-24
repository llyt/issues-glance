import { takeLatest, call, put, select } from 'redux-saga/effects'
import { SELECT_POINTER_REPOSITORY, PAGINATION_HANDLE, PER_PAGE_HANDLE } from '../issues/types'
import { getUserName } from '../user/selectors'
import { getPage, getPerPage, getPointerRepository, getTotalIssues } from './selectors'
import * as issuesActions from './actions'


export default function* userSaga() {
  yield takeLatest(SELECT_POINTER_REPOSITORY, repoFlow)
  yield takeLatest(PAGINATION_HANDLE, repoFlow)
  yield takeLatest(PER_PAGE_HANDLE, repoFlow)
}

function* repoFlow() {
  yield window.scrollTo(0, 0)
  const userName = yield select(getUserName)
  const repo = yield select(getPointerRepository)
  const fetchedIssues = yield (select(getTotalIssues))
  const page = yield select(getPage)
  const perPage = yield select(getPerPage)

  if (fetchedIssues.length < page * perPage) {
    try {
      yield put(issuesActions.onLoader())
      const {total_count, items} = yield call(getRepoIssues, userName, repo, page, perPage)
      const issues = convertRawIssues(items)
      yield put(issuesActions.fetch_issues(issues, total_count))
      yield put(issuesActions.offLoader())
    }
    catch (error) {
      console.error(error)
      // TODO Show error in IssuesList component
      yield put(issuesActions.offLoader())
    }
  }
}


async function getRepoIssues(userName, repoName, page, perPage) {
  const response = await fetch(`https://api.github.com/search/issues?page=${page}&per_page=${perPage}&q=repo:${userName}/${repoName}`)
  return await response.json()
}

function convertRawIssues(raw) {
  return raw.map(({ state, title, number, user, created_at }) => (
    {
      state,
      title,
      number,
      openDate: created_at,
      author: user
    }
  ))
}