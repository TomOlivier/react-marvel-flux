import React, { Component, PropTypes } from 'react';

import HeroStore from '../../stores/HeroStore';
import HeroActionCreators from '../../actions/HeroActionCreators';
import HeroListItem from './HeroListItem';
import parameters from '../../constants/parameters';

/**
* Display a Hero List.
* Fetch data if there's no Hero in the store.
*/
class HeroList extends Component {

  constructor(props) {
    super(props);

    let loading = false;
    let heroes = [];

    if (HeroStore.isInitialized()) {
      heroes = HeroStore.heroes;
    } else {
      loading = true;
      HeroActionCreators.getHeroes();
    }

    this.state = {
      loading: loading,
      heroes: heroes
    };

    this.onChange = this.onChange.bind(this);

    HeroStore.addChangeListener(this.onChange);
  }


  componentWillUnmount() {
    HeroStore.removeChangeListener(this.onChange);
  }


  onChange() {
    if (HeroStore.isInitialized()) {
      this.setState({
        loading: false,
        heroes: HeroStore.heroes
      });
    }
  }


  render() {
    return this.state.loading ? <div>Loading ...</div> : (
      <div>
        <h2>Select your Hero</h2>
        <ul id="hero-list">
          {this.state.heroes.map((hero) =>
            <HeroListItem
              key={hero.id}
              hero={hero}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default HeroList;