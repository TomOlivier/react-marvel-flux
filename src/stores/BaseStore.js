import { EventEmitter } from 'events';
import Dispatcher from '../services/AppDispatcher';

const CHANGE_EVENT = 'change';

class BaseStore extends EventEmitter {

  constructor() {
    super();
    this._initialized = false;
    this._success = false;
    this._errors = [];
  }

  subscribe(actionSubscribe) {
    this._dispatchToken = Dispatcher.register(actionSubscribe());
  }

  get dispatchToken() {
    return this._dispatchToken;
  }

  set initialized(init) {
    this._initialized = init;
  }

  get success() {
    return this._success;
  }

  get errors() {
    return this._errors;
  }

  isSuccess() {
    return this._success;
  }

  isInitialized() {
    return this._initialized;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

export default BaseStore;