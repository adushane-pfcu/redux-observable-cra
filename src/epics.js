import { combineEpics } from 'redux-observable';
import moment from 'moment';

import Rx from 'rxjs';



import { PING, PONG, START_ClOCK, INCREMENT_CLOCK } from './actions';

const tickObservable = Rx.Observable.of(1,2,3)
  // Observable
  //   .interval(500)
  //   .do(() => console.warn('wat'))
  //   .mapTo({ type: INCREMENT_CLOCK });

const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });

const clockEpic = action$ =>
  action$.ofType(START_ClOCK)
    .mapTo({ type: 'INCREMENT_CLOCK', payload: moment() })
    .flatMap(() => Rx.Observable.interval(1000))
    .map(count => ({ type: 'INCREMENT_CLOCK', payload: moment() }));

export default combineEpics(pingEpic, clockEpic);
