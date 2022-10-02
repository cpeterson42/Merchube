import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation.module.css'

const Navigation = (props) => {
  return (
    <header
      data-role="Header"
      className={` ${styles['header']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['max-width']}>
        <span className={styles['text']}>{props.text}</span>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  text: 'Merchube',
  rootClassName: '',
}

Navigation.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navigation
