import React from 'react'
import styles from './SearchResults.module.css'
import repos from '../../api/repos'
import Select from 'react-select'

const SearchResults = () => {
  return (
    <section className={`${styles.SearchResults} container`}>
      <div className={styles.SearchResultsCount}>Facebook has <strong>123</strong> repo</div>
      <Select
        className={styles.Selector}
        options={repos}
        placeholder='Choose a repository...'
        isSearchable={true}
      />
    </section>
  )
}

export default SearchResults