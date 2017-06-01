import React from 'react';
import { Provider } from 'react-redux';
import Ping from './Ping';
import Stuff from './Stuff';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div>
      <Ping />
      <Stuff />
    </div>
  </Provider>
);

export default App;
