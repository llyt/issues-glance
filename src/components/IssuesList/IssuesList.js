import React from 'react'
import styles from './IssuesList.module.css'
import issues from '../../api/issues'
import IssuesTable from '../IssuesTable/IssuesTable'

const IssuesList = () => {

  return (
    <div className={`${styles.IssuesList} container`}>
      <h2>react issues: 18091</h2>
      <IssuesTable data={issues} />
    </div>
  )
}

export default IssuesList