import { all, call} from 'redux-saga/effects'
import userSaga from './user/saga'
import issuesSaga from './issues/saga'

export default function* rootSaga() {
  yield all([
    call(userSaga),
    call(issuesSaga),
  ])
}