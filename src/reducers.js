import { combineReducers } from 'redux';

import { PING, PONG } from './actions';

const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };
    case PONG:
      return { isPinging: false };
    default:
      return state;
  }
};

const clockReducer = (state = {}, action) => {
  if (action.type === 'INCREMENT_CLOCK') {
    return { currentTime: action.payload };
  }
  return state;
};

export default combineReducers({
  ping: pingReducer,
  clock: clockReducer,
});
