import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import counterReducer from "./counter/reducer";
import {ICounterState} from './counter/types';
import logger from './logger';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


const reducer = combineReducers({
    counter: counterReducer
});

export interface IState {
    counter: ICounterState
}

/* 
Adding DevTools extension to watch Redux store on chrome DevTools
Reference: https://github.com/zalmoxisus/redux-devtools-extension
*/
const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

export default store;