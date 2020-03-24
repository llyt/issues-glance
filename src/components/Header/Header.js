import React from 'react'
import styles from './Header.module.css'
import Logo from '../UI/Logo/Logo'
import SearchForm from '../UI/SearchForm/SearchForm'

const Header = React.memo(() => {
  return (
    <header>
      <div className={`${styles.Header} container`}>
        <Logo />
        <SearchForm />
      </div>
    </header>
  )
})

export default Header
