import React from 'react'
import styles from './IssuesList.module.css'
import IssuesTable from '../IssuesTable/IssuesTable'
import * as issuesSelectors from '../../store/issues/selectors'
import * as issuesActions from '../../store/issues/actions'
import {connect} from 'react-redux'

const IssuesList = React.memo((
  {
    repoName,
    issuesList,
    issuesTotalCount,
    currentPage,
    perPage,
    paginationHandle,
    perPageHandle,
  }) => {

  if (!issuesTotalCount) {
    return null
  }

  return (
    <div className={`${styles.IssuesList} container`}>
      <h2>{repoName} issues: {issuesTotalCount}</h2>
      <IssuesTable
        data={issuesList}
        currentPage={currentPage}
        paginationHandler={paginationHandle}
        perPage={perPage}
        issuesTotalCount={issuesTotalCount}
        perPageHandler={perPageHandle}
      />
    </div>
  )
})

const mapStateToProps = (state) => (
  {
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