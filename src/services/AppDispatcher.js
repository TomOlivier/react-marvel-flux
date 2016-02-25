import parameters from '../constants/parameters';
import {Dispatcher} from 'flux';
import assign from 'object-assign';

var Payload = parameters.PAYLOAD;

export default assign(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: Payload.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: Payload.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  },
});