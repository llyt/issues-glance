import React from 'react'
import styles from './Loader.module.css'

const Loader = () => (
  <div className={`${styles.LoaderWrapper} container`}>
    <div className={styles.Loader}>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  </div>
)

export default Loader