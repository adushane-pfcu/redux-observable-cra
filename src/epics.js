import Rx from 'rxjs';
import { combineEpics } from 'redux-observable';
import moment from 'moment';

import { PING, PONG, START_ClOCK, INCREMENT_CLOCK, GET_USERS, GET_USERS_RESPONSE } from './actions';


const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });

const clockEpic = action$ =>
  action$.ofType(START_ClOCK)
    .mapTo({ type: INCREMENT_CLOCK, payload: moment() })
    .flatMap(() => Rx.Observable.interval(1000))
    .map(count => ({ type: INCREMENT_CLOCK, payload: moment() }));

const getUsersEpic = action$ =>
  action$.ofType(GET_USERS)
    .flatMap(() => 
      Rx.Observable.ajax
        .getJSON('https://jsonplaceholder.typicode.com/users')
        .map(response => ({ type: GET_USERS_RESPONSE, payload: response }))
    )

const getUserEpic = action$ =>
  action$.ofType('GET_USERS_RESPONSE')
    .flatMap(action =>
      Rx.Observable.from(action.payload).flatMap(user =>
        Rx.Observable.ajax
          .getJSON(`https://jsonplaceholder.typicode.com/users/${user.id}`)
          .map(response => ({ type: 'GET_USER_RESPONSE', payload: response })
      ))
    );

export default combineEpics(pingEpic, clockEpic, getUsersEpic, getUserEpic);
