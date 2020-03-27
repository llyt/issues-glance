import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import SearchResults from '../../components/SearchResults/SearchResults'
import IssuesList from '../../components/IssuesList/IssuesList'
import * as userSelectors from '../../store/user/selectors'
import PropTypes from 'prop-types'

const RepoPage = ({ isLoading }) => (
  <>
    <Header/>
    <div className='container'>
      <SearchResults/>
      {!isLoading && <IssuesList/>}
    </div>
  </>
)

const mapStateToProps = (state) => (
  {
    isLoading: userSelectors.getLoadingState(state),
  }
)

export default connect(mapStateToProps)(RepoPage)

RepoPage.propTypes = {
  isLoading: PropTypes.bool.isRequired
}