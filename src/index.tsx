import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducers from './store/reducers'

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
export type RootStore = ReturnType<typeof rootReducers>

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
