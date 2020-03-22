import React from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import SearchResults from './components/SearchResults/SearchResults'
import IssuesList from './components/IssuesList/IssuesList'

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <SearchResults/>
      <IssuesList/>
    </div>
  )
}

export default App
