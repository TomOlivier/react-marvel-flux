import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import HeroStore from '../../stores/HeroStore';
import HeroActionCreators from '../../actions/HeroActionCreators';
import HeroListItem from './HeroListItem';
import HeroImage from './HeroImage';
import HeroLife from './HeroLife';

const propTypes = {
  params: PropTypes.shape({
    heroId: PropTypes.string.isRequired
  }).isRequired
};


/**
* Display the details of a Hero
* Fetch the data if the current Hero is not in the store
*/
class HeroPage extends Component {

  constructor(props) {
    super(props);

    const { heroId } = this.props.params;

    let loading = false;
    let hero = HeroStore.findById(heroId);

    if (hero === undefined) {
      loading = true;
      hero = null;
      HeroActionCreators.getHero(heroId);
    }

    this.state = {
      loading: loading,
      hero: hero
    };

    this.onChange = this.onChange.bind(this);

    HeroStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    HeroStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      loading: false,
      hero: HeroStore.currentHero,
    });
  }

  render() {
    const { hero } = this.state;

    return this.state.loading ? <div>Loading ...</div> : (
      <div id="hero-description">
        <Link to="/">Go back to the Heroes list</Link>

        <div className="row">
          <HeroImage
            thumbnail={hero.thumbnail}
            className="col-sm-4"
          />

          <div className="col-sm-8">
            <div className="page-header">
              <h2>{hero.name}</h2>
              <h3>{hero.description}</h3>
            </div>

            <h4>Comics</h4>
            <ul className="hero-life">
              {hero.comics.items.map((item, k) => <HeroLife item={item} key={item.name + k} />)}
            </ul>

            <h4>Series</h4>
            <ul className="hero-life">
              {hero.stories.items.map((item, k) => <HeroLife item={item} key={item.name + k} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

HeroPage.propTypes = propTypes;

export default HeroPage;