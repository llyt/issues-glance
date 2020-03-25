import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MainPage from './pages/main'
import UserPage from './pages/user'
import RepoPage from './pages/repo'

function App() {
  return (
    <Switch>
      <Redirect exact from='/:user/:repo' to='/:user/:repo/issues'/>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/:user' component={UserPage} />
      <Route exact path='/:user/:repo/issues' component={RepoPage} />
    </Switch>
  )
}

export default App
