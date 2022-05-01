import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { portfolioReducer } from '../ducks/reducer';

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    portfolio: portfolioReducer,
  });

export default rootReducer;
