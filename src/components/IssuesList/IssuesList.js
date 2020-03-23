import React from 'react'
import styles from './IssuesList.module.css'
import IssuesTable from '../IssuesTable/IssuesTable'
import * as userSelectors from '../../store/user/selectors'
import * as issuesSelectors from '../../store/issues/selectors'
import {connect} from 'react-redux'

const IssuesList = ({ repoName, issuesList, issuesTotalCount }) => {

  if (issuesList.length === 0) {
    return null
  }

  return (
    <div className={`${styles.IssuesList} container`}>
      <h2>{repoName} issues: {issuesTotalCount}</h2>
      <IssuesTable data={issuesList} />
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    repoName: userSelectors.getPointerRepository(state),
    issuesList: issuesSelectors.getIssuesList(state),
    issuesTotalCount: issuesSelectors.getIssuesTotalCount(state)
  }
)

const mapDispatchToProps = (dispatch) => (
  {

  }
)

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList)