import React from 'react'
import styles from './SearchForm.module.css'
import { ReactComponent as PersonIcon } from '../../../static/icons/person-icon.svg'

const SearchForm = () => {
  return (
    <form className={styles.SearchForm}>
      <div className={styles.SearchFormInput}>
        <PersonIcon />
        <input type='text' placeholder='Enter GitHub username...' />
      </div>
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchForm