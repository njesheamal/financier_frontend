import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom'
import App from './components/App/App';
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
