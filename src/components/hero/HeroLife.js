import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object,
};


const HeroLife = (props) => {
  const { item } = props;
  return (
    <li>
      {item.name}
    </li>
  );
}

HeroLife.propTypes = propTypes;

export default HeroLife;