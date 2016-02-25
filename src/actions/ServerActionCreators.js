import Dispatcher from '../services/AppDispatcher';
import WebApi from '../services/WebApi';
import parameters from '../constants/parameters';

const ActionTypes = parameters.ActionTypes;

/**
*   ### SERVER ACTIONS ###
*/
export default {

  /**
  *   ### HERO ACTION ###
  */

  receiveGetHeroes(json, errors) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.GET_HEROES_RESPONSE,
      json: json,
      errors: errors
    });
  },


  receiveGetHero(json, errors) {
    Dispatcher.handleServerAction({
      actionType: ActionTypes.GET_HERO_RESPONSE,
      json: json,
      errors: errors
    });
  },

};