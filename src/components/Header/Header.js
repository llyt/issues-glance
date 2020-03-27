import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from '../UI/Logo/Logo'
import SearchForm from '../SearchForm/SearchForm'
import * as userActions from '../../store/user/actions'
import isFirstRender from '../../utils/isFirstRender'

const Header = React.memo(({ history, match, findUser }) => {
  const { user } = match.params

  useEffect(() => {
    if (user && isFirstRender(history.action)) {
      findUser(user)
    }
  }, [user, history.action, findUser])

  const searchHandler = (username) => {
    if (username) {
      history.push(`/${username}`)
      findUser(username)
    }
  }

  return (
    <header>
      <div className={`${styles.Header} container`}>
        <Logo />
        <SearchForm
          user={user}
          searchBtnHandler={searchHandler}
        />
      </div>
    </header>
  )
})

const mapDispatchToProps = (dispatch) => (
  {
    findUser: (userName) => dispatch(userActions.findUser(userName)),
  }
)

export default withRouter(connect(null, mapDispatchToProps)(Header))

Header.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  findUser: PropTypes.func.isRequired,
}