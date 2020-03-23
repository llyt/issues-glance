import React from 'react'
import Header from '../../components/Header/Header'
import SearchResults from '../../components/SearchResults/SearchResults'
import IssuesList from '../../components/IssuesList/IssuesList'

const MainPage = (props) => {
  return (
    <>
      <Header/>
      <SearchResults/>
      <IssuesList/>
    </>
  )
}

export default MainPage