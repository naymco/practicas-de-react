import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Routes from "./Routes";

// Redux conexion
import { Provider } from "react-redux";
import store from "./Redux/store";



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Routes />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

