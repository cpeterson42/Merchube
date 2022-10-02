import React from 'react'

import PropTypes from 'prop-types'

import './services-card.css'

const ServicesCard = (props) => {
  return (
    <div className="services-card">
      <div className="services-card-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="services-card-image"
        />
      </div>
      <span className="services-card-text cardheading">{props.text}</span>
      <span className="services-card-text1 content">{props.text1}</span>
    </div>
  )
}

ServicesCard.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/website-200h.png',
  text: 'Fulfillment and logistics',
  text1:
    'Create your ubest unique App development, crafted for your business needs.',
}

ServicesCard.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default ServicesCard
