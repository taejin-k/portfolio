// react
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReducersApp from './reducer';

// component
import App from './App';

// css
import './css/reset.css';
import './css/class.css';

const store = createStore(ReducersApp);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
