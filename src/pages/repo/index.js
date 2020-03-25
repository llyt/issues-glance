import React from 'react'
import Header from '../../components/Header/Header'
import SearchResults from '../../components/SearchResults/SearchResults'
import IssuesList from '../../components/IssuesList/IssuesList'
import * as userSelectors from '../../store/user/selectors'
import {connect} from 'react-redux'

const RepoPage = ({ isLoading }) => {
  return (
    <>
      <Header/>
      <SearchResults/>
      {!isLoading && <IssuesList/>}
    </>
  )
}

const mapStateToProps = (state) => (
  {
    isLoading: userSelectors.getLoadingState(state),
  }
)

export default connect(mapStateToProps)(RepoPage)