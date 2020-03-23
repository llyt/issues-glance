import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleWare from 'redux-saga'
import  rootSaga from './saga'
import issuesReducer from './issues'
import userReducer from './user'

export const history = createBrowserHistory()

const sagaMiddleWare = createSagaMiddleWare()

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  issues: issuesReducer,
})

const enhancers = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleWare,
  )
)

export const configureStore = (preloaderState) => {
  const store = createStore(
    createRootReducer(history),
    preloaderState,
    enhancers
  )
  sagaMiddleWare.run(rootSaga)
  return store
}

