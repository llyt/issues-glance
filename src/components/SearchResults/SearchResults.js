import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './SearchResults.module.css'
import Select from 'react-select'
import * as issuesActions from '../../store/issues/actions'
import * as userSelectors from '../../store/user/selectors'
import Loader from '../UI/Loader/Loader'
import isFirstRender from '../../utils/isFirstRender'

const SearchResults = React.memo((
  {
    history,
    match,
    usersRepositories,
    TotalNumberOfRepositories,
    isLoading,
    selectPointerRepository,
  }) => {

  const { user, repo } = match.params

  useEffect(() => {
    if (repo && isFirstRender(history.action)) {
      selectPointerRepository(repo)
    }
  }, [repo, history.action, selectPointerRepository])

  const selectHandler = ({ value }) => {
    history.push(`/${user}/${value}/issues`)
    selectPointerRepository(value)
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className={`${styles.SearchResults} container`}>
      <div className={styles.SearchResultsCount}>
        <p>{user} has <strong>{TotalNumberOfRepositories}</strong> repo</p>
      </div>
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
})

const mapStateToProps = (state) => (
  {
    isLoading: userSelectors.getLoadingState(state),
    usersRepositories: userSelectors.getUserRepositories(state),
    TotalNumberOfRepositories: userSelectors.getTotalNumberOfRepositories(state)
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    selectPointerRepository: (value) => dispatch(issuesActions.selectPointerRepository(value)),
  }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults))

SearchResults.propTypes = {
  usersRepositories: PropTypes.array,
  TotalNumberOfRepositories: PropTypes.number,
  isLoading: PropTypes.bool,
  selectPointerRepository: PropTypes.func,
}