/* eslint-disable no-underscore-dangle */

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import initialState from './initialState';

export const history = createBrowserHistory();

// const window: any = Window;
declare const window: any;

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
];

let preloadedState;
if (typeof window !== 'undefined') {
  preloadedState = window.__PRELOADED_STATE__;
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
  }
}

if (process.env.NODE_ENV !== 'production') {
  middleware.push(
      createLogger({
        level: 'info',
        collapsed: true,
      })
  );
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(
  rootReducer(history),
  preloadedState || initialState,
  composedEnhancers
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
