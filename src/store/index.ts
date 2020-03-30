import { combineReducers, createStore } from "redux";
import counterReducer from "./counter/reducer";
import {ICounterState} from './counter/types';

const reducer = combineReducers({
    counter: counterReducer
});

export interface IState {
    counter: ICounterState
}

const configureStore = () => (createStore(reducer));

const store = configureStore();

export default store;