import React from 'react'
import styles from './Logo.module.css'
import { ReactComponent as LogoEye } from '../../../static/icons/eye-icon.svg'

const Logo = () => (
  <a href='/' className={styles.Logo}>
    <LogoEye />
    <span>Issue Glance</span>
  </a>
)

export default Logo