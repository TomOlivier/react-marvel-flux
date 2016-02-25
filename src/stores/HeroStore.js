import _ from 'lodash';
import update from 'react-addons-update';
import Dispatcher from '../services/AppDispatcher';
import parameters from '../constants/parameters';

const { ActionTypes } = parameters;

import BaseStore from './BaseStore';

class HeroStore extends BaseStore {
  constructor() {
    super();

    this._currentHero = null;
    this._heroes = [];

    this.subscribe(() => this._registerToActions.bind(this))
  }

  get currentHero() {
    return this._currentHero;
  }

  get heroes() {
    return this._heroes;
  }

  findById(id) {
    return _.find(this._heroes, { id: parseInt(id, 10) });
  }

  _registerToActions(payload) {
    const action = payload.action;

    switch (action.actionType) {

      case ActionTypes.GET_HEROES_RESPONSE:
        this._initialized = true;
        this._heroes = update(this._heroes, {$set: action.json.data.results});
        this.emitChange();
        break;


      case ActionTypes.GET_HERO_RESPONSE:
        this._currentHero = update(this._currentHero, {$set: action.json.data.results[0]});
        this.emitChange();
        break;
    };
  }
}

export default new HeroStore();