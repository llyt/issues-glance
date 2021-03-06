import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './IssuesList.module.css'
import IssuesTable from '../IssuesTable/IssuesTable'
import * as issuesSelectors from '../../store/issues/selectors'
import * as issuesActions from '../../store/issues/actions'

const IssuesList = React.memo((
  {
    error,
    isLoading,
    repoName,
    issuesList,
    issuesTotalCount,
    currentPage,
    perPage,
    paginationHandle,
    perPageHandle,
  }) => {

  if (error) {
    return (
      <div className='container'>
        <h3>{error}</h3>
      </div>
    )
  }

  if (issuesTotalCount === null) {
    return null
  }

  return (
    <section className={styles.IssuesList}>
      <h2>"{repoName}" issues: {issuesTotalCount}</h2>
      <IssuesTable
        isLoading={isLoading}
        data={issuesList}
        currentPage={currentPage}
        paginationHandler={paginationHandle}
        perPage={perPage}
        issuesTotalCount={issuesTotalCount}
        perPageHandler={perPageHandle}
      />
    </section>
  )
})

const mapStateToProps = (state) => (
  {
    error: issuesSelectors.getError(state),
    isLoading: issuesSelectors.getLoadingState(state),
    repoName: issuesSelectors.getPointerRepository(state),
    issuesList: issuesSelectors.getIssuesList(state),
    issuesTotalCount: issuesSelectors.getIssuesTotalCount(state),
    currentPage: issuesSelectors.getPage(state),
    perPage: issuesSelectors.getPerPage(state)
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    paginationHandle: (newPage) => dispatch(issuesActions.paginationHandle(newPage)),
    perPageHandle: (value) => dispatch(issuesActions.perPageHandle(value))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList)

IssuesList.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  repoName: PropTypes.string,
  issuesList: PropTypes.array,
  issuesTotalCount: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  paginationHandle: PropTypes.func.isRequired,
  perPageHandle: PropTypes.func.isRequired
}