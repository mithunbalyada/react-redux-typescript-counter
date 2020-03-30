import { MiddlewareAPI } from "redux";
import {CounterActions} from '../counter/types';
import { Dispatch } from "react";



const logger = (store: MiddlewareAPI) => (next: Dispatch<CounterActions>) => (action: CounterActions) => {
        console.log('logger: Dispatching ', action);
        const result = next(action);
        console.log('logger: next state', store.getState());
        return result;
}

export default logger;