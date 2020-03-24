import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './SearchResults.module.css'
import Select from 'react-select'
import * as issuesActions from '../../store/issues/actions'
import * as userSelectors from '../../store/user/selectors'
import Loader from '../UI/Loader/Loader'

const SearchResults = ({ userName, usersRepositories, totalCount, isLoading, selectPointerRepository }) => {
  const selectHandler = ({ value }) => {
    selectPointerRepository(value)
  }

  if (isLoading) {
    return <Loader />
  }

  if (!totalCount) {
    return null
  }

  return (
    <section className={`${styles.SearchResults} container`}>
      <div className={styles.SearchResultsCount}>{userName} has <strong>{totalCount}</strong> repo</div>
      {usersRepositories.length !== 0
        && <Select
            className={styles.Selector}
            options={usersRepositories}
            placeholder='Choose a repository...'
            isSearchable={true}
            onChange={selectHandler}
          />
      }
    </section>
  )
}

const mapStateToProps = (state) => (
  {
    isLoading: userSelectors.getLoadingState(state),
    userName: userSelectors.getUserName(state),
    usersRepositories: userSelectors.getUserRepositories(state),
    totalCount: userSelectors.getTotalCount(state)
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    selectPointerRepository: (value) => dispatch(issuesActions.selectPointerRepository(value))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)

SearchResults.propTypes = {
  userName: PropTypes.string,
  usersRepositories: PropTypes.array,
  totalCount: PropTypes.number,
  isLoading: PropTypes.bool,
  selectPointerRepository: PropTypes.func
}