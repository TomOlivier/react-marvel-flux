import request from 'superagent';
import _ from 'lodash';
import ServerActionCreators from '../actions/ServerActionCreators';
import parameters from '../constants/parameters';
import crypto from 'crypto';

const { CONFIG, ENDPOINTS } = parameters;

const TIMEOUT = 10000; // The default Timeout for our ajax calls

/**
* GET helper
* param url: the url to consume
*/
function get (url) {

  let ts = Date.now();
  const concatenatedString = ts + CONFIG.API_PRIVATE + CONFIG.API_PUBLIC;
  let hash = crypto.createHash('md5').update(concatenatedString).digest('hex')

  let req = request
    .get(url)
    .query({
      ts: ts,
      apikey: CONFIG.API_PUBLIC,
      hash: hash
    })
    .accept('application/json')
    .timeout(TIMEOUT);

  return req;
};


/**
* Web API methods
*/
const WebApi = {

  /**
  * Get All Heroes
  * Method: GET
  */
  getHeroes() {
    const url = CONFIG.API_ROOT + ENDPOINTS.CHARACTERS;

    get(url)
      .end((err, res) => {
        if (res && res.status === 200) {
          ServerActionCreators.receiveGetHeroes(res.body, null);
        } else {
          ServerActionCreators.receiveGetHeroes(null, res.body);
        }
      });
  },


  /**
  * Get a Hero
  * Method: GET
  * parameter: heroId the Id of the Hero we are fetching
  */
  getHero(heroId) {
    const url = CONFIG.API_ROOT + ENDPOINTS.CHARACTERS + '/' + heroId;

    get(url)
      .end((err, res) => {
        if (res && res.status === 200) {
          ServerActionCreators.receiveGetHero(res.body, null);
        } else {
          ServerActionCreators.receiveGetHero(null, res.body);
        }
      });
  }

};

export default WebApi;