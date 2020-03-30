import { combineReducers, createStore, applyMiddleware } from "redux";
import counterReducer from "./counter/reducer";
import {ICounterState} from './counter/types';
import logger from './logger';

const reducer = combineReducers({
    counter: counterReducer
});

export interface IState {
    counter: ICounterState
}


const store = createStore(reducer, applyMiddleware(logger));

export default store;