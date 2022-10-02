import React from 'react'

import PropTypes from 'prop-types'

const Navigation = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`navigation-header ${props.rootClassName} `}
      >
        <div className="navigation-max-width">
          <span className="navigation-text">{props.text}</span>
        </div>
      </header>
      <style jsx>
        {`
          .navigation-header {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .navigation-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navigation-text {
            font-size: 30px;
            font-family: DM Serif Display;
          }
          .navigation-root-class-name {
            top: 0px;
            left: 0px;
            background-color: var(--dl-color-scheme-white);
          }
          @media (max-width: 767px) {
            .navigation-max-width {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
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
