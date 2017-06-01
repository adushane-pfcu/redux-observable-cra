import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import moment from 'moment';
import { startClock } from './actions';

const Stuff = ({ currentTime }) => (
  <div>
    {moment(currentTime).format('HH:mm:ss')}
  </div>
);

export default compose(
  connect(({ clock: { currentTime } }) => ({ currentTime }), { startClock }),
  lifecycle({
    componentDidMount() {
      this.props.startClock();
    },
  }),
)(Stuff);
