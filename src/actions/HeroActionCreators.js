import Dispatcher from '../services/AppDispatcher';
import WebApi from '../services/WebApi';
import parameters from '../constants/parameters';

const ActionTypes = parameters.ActionTypes;

const HeroActionCreators = {


  getHeroes() {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.GET_HEROES_REQUEST,
    });

    WebApi.getHeroes();
  },


  getHero(heroId) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.GET_HERO_REQUEST,
    });

    WebApi.getHero(heroId);
  },
}

export default HeroActionCreators;