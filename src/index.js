import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import axios from 'axios';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://rem-rest-api.herokuapp.com/api';

// // axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api';

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
