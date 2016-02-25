import keyMirror from 'fbjs/lib/keyMirror';
import credentials from './credentials';

export default {

  ActionTypes: keyMirror({
    GET_HEROES_REQUEST: null,
    GET_HEROES_RESPONSE: null,
    GET_HERO_REQUEST: null,
    GET_HERO_RESPONSE: null,
  }),


  CONFIG: {
    API_ROOT: 'http://gateway.marvel.com:80',
    API_PUBLIC: credentials.API_PUBLIC || '',
    API_PRIVATE: credentials.API_PRIVATE || '',
  },


  ENDPOINTS: {
    CHARACTERS: '/v1/public/characters'
  },


  PAYLOAD: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

}