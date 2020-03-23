import { takeLatest, call, put, select } from 'redux-saga/effects'
import { SELECT_POINTER_REPOSITORY } from '../user/types'
import { getPointerRepository, getUserName } from '../user/selectors'
import { getPerPage } from './selectors'
import * as issuesActions from './actions'


export default function* userSaga() {
  yield takeLatest(SELECT_POINTER_REPOSITORY, repoFlow)
}

function* repoFlow() {
  const userName = yield select(getUserName)
  const repo = yield select(getPointerRepository)
  const perPage = yield select(getPerPage)
  try {
    const {total_count, items} = yield call(getRepoIssues, userName, repo, perPage)
    const issues = items.map(({ state, title, number, user, created_at }) => (
      {
        state,
        title,
        number,
        openDate: created_at,
        author: user.login
      }
      ))
    yield put(issuesActions.fetch_issues(issues, total_count))
  } catch (error) {
    console.error(error)
    // TODO Show error in IssuesList component
  }
}

async function getRepoIssues(userName, repoName, perPage) {
  const response = await fetch(`https://api.github.com/search/issues?per_page=${perPage}&q=repo:${userName}/${repoName}`)
  return await response.json()
}