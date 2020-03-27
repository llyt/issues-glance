import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MainPage from './pages/main'
import UserPage from './pages/user'
import RepoPage from './pages/repo'
import IssuePage from './pages/issue'

function App() {
  return (
    <Switch>
      <Redirect exact from='/:user/:repo' to='/:user/:repo/issues'/>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/:user' component={UserPage} />
      <Route exact path='/:user/:repo/issues' component={RepoPage} />
      <Route exact path='/:user/:repo/issues/:number' component={IssuePage} />
    </Switch>
  )
}

export default App
