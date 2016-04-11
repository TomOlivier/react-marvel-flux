import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import HeroImage from './HeroImage';

const propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    modified: PropTypes.string,
    resourceURI: PropTypes.string,
    urls: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string
    })),
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string
    })
  })
};


/**
* Display a Hero within a HeroList.
*/
const HeroListItem = (props) => {

  const { hero } = props;
  /**
  * Render a tag link (e.g. link to its wiki page) under the Hero
  */
  let renderTag = (tag, k) => {
    const capitalizedType = tag.type.charAt(0).toUpperCase() + tag.type.slice(1);

    return (
      <li key={`${hero.id}-${k}`} className="label label-primary">
        <a href={tag.url} target="_blank">
          {capitalizedType}
        </a>
      </li>
    );
  };

  return (
    <li className="hero-item">
      <Link to={`/heroes/${hero.id}`}>
        <HeroImage
          className="hero-thumbnail"
          thumbnail={hero.thumbnail}
        />

        <div className="hero-name text-center">
          {hero.name}
        </div>
      </Link>

      <ul className="hero-tags text-center">
        {hero.urls.map(renderTag, this)}
      </ul>
    </li>
  );
}


HeroListItem.propTypes = propTypes;

export default HeroListItem;