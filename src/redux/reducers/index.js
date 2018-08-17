import { combineReducers } from 'redux';

export default combineReducers({
  search: require('./searchRedux').reducer,
  challenge: require('./challengeRedux').reducer
});