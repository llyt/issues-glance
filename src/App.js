import React from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import SearchResults from './components/SearchResults/SearchResults'

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <SearchResults/>
    </div>
  )
}

export default App
