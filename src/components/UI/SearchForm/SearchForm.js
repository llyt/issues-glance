import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './SearchForm.module.css'
import { ReactComponent as PersonIcon } from '../../../static/icons/person-icon.svg'
import  * as userActions  from '../../../store/user/actions'

const SearchForm = React.memo(({ userName, findUser }) => {
  const inputRef = React.createRef()

  const searchHandler = (event) => {
    event.preventDefault()
    const { value } = inputRef.current
    if (value) {
      findUser(value)
    }
  }

  return (
    <form className={styles.SearchForm} onSubmit={searchHandler}>
      <div className={styles.SearchFormInput}>
        <PersonIcon />
        <input
          type='text'
          ref={inputRef}
          placeholder={userName ? userName : 'Enter GitHub username...'}
        />
      </div>
      <button type='submit'>Search</button>
    </form>
  )
})

const mapStateToProps = (state) => (
  {
    userName: state.user.name,
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    findUser: (userName) => dispatch(userActions.findUser(userName)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)

SearchForm.propTypes = {
  userName: PropTypes.string,
  findUser: PropTypes.func.isRequired,
}