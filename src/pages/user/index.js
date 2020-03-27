import React from 'react'
import Header from '../../components/Header/Header'
import SearchResults from '../../components/SearchResults/SearchResults'

const UserPage = () => (
  <>
    <Header/>
    <div className='container'>
      <SearchResults/>
    </div>
  </>
)

export default UserPage