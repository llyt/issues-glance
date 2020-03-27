import { takeLatest, call, put, select } from 'redux-saga/effects'
import { FIND_USER  } from './types'
import * as userActions from './actions'
import { getUserName } from './selectors'


export default function* userSaga() {
  yield takeLatest(FIND_USER, userFlow)
}

function* userFlow() {
  const userName = yield select(getUserName)
  if (userName !== '') {
    try {
      yield put(userActions.loaderOn())
      const {total_count, items} = yield call(fetchUserRepos, userName)
      const userRepos = items.map(({name}) => ({name}))
      yield put(userActions.requestRepositories(userRepos, total_count))
      yield put(userActions.loaderOff())
    } catch (error) {
      console.error(error.message)
      yield put(userActions.errorOccurred('Could not load user repos. Try again after 1 minute.'))
      yield put(userActions.loaderOff())
    }
  }
}

async function fetchUserRepos(userName) {
  const response = await fetch(`https://api.github.com/search/repositories?sort=stars&per_page=100&q=user:${userName}`)
  return await response.json()
}