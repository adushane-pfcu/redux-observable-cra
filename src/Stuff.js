import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import moment from 'moment';
import { startClock, getUsers } from './actions';

const Stuff = ({ startClock, currentTime, getUsers, users }) => (
  <div>
    <button onClick={startClock}>Run clock</button>
    {moment(currentTime).format('HH:mm:ss')}
    <div>
      <button onClick={getUsers}>Get users</button>
      <ul>
        {Object.values(users).map(({ id, name, fetched }) => (
          <li key={id}>{name} - fetched: {(!!fetched).toString()} </li>
        ))}
      </ul>
    </div>
  </div>
);

export default compose(
  connect(
    ({ clock: { currentTime }, users }) => ({ currentTime, users }),
    { startClock, getUsers }
  ),
)(Stuff);
