import React from 'react'

import PropTypes from 'prop-types'

import './navigation.css'

const Navigation = (props) => {
  return (
    <header
      data-role="Header"
      className={`navigation-header ${props.rootClassName} `}
    >
      <div className="navigation-max-width">
        <span className="navigation-text">{props.text}</span>
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
