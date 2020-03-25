import React from 'react'
import PropTypes from 'prop-types'
import styles from './SearchForm.module.css'
import { ReactComponent as PersonIcon } from '../../static/icons/person-icon.svg'

const SearchForm = React.memo(({ user, searchBtnHandler }) => {
  const inputRef = React.createRef()

  const searchHandle = (event) => {
    event.preventDefault()
    searchBtnHandler(inputRef.current.value)
  }

  return (
    <form className={styles.SearchForm} onSubmit={searchHandle}>
      <div className={styles.SearchFormInput}>
        <PersonIcon />
        <input
          type='text'
          ref={inputRef}
          placeholder={user ? user : 'Enter GitHub username...'}
        />
      </div>
      <button type='submit'>Search</button>
    </form>
  )
})

export default SearchForm

SearchForm.propTypes = {
  user: PropTypes.string,
  searchBtnHandler: PropTypes.func.isRequired,
}