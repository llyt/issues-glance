import { takeLatest, call, put, select } from 'redux-saga/effects'
import Api from '../api'
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
      console.error(error)
      // TODO Show error in SearchResults component
      yield put(userActions.loaderOff())
    }
  }
}

async function fetchUserRepos(userName) {
  const response = await Api.getRepos(userName)
  return await response.json()
}