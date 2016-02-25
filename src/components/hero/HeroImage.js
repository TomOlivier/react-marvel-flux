import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string
  }).isRequired,
  className: PropTypes.string
};


const defaultProps = {
  className: 'hero-thumbnail'
};


const HeroImage = (props) => {
  const { thumbnail, className } = props;

  return (
    <div className={className}>
      <img
        className="img-responsive center-block"
        src={`${thumbnail.path}.${thumbnail.extension}`}
      />
    </div>
  );
}

HeroImage.propTypes = propTypes;
HeroImage.defaultProps = defaultProps;

export default HeroImage;