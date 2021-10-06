import App from "./components/App";
import React from 'react';
import { render } from "react-dom";

import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById("app");
render(
  <Provider store={store}>
    <App />,
  </Provider>,
  container);