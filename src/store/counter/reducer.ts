import { ICounterState, CounterActions, CounterActionType } from "./types";


const initialState:ICounterState = {
    counter:0
}

const counterReducer = (state = initialState, action: CounterActions): ICounterState =>{

    switch(action.type){
        case CounterActionType.ADD:
            return {...state, counter: state.counter + action.payload}
        case CounterActionType.SUBTRACT:
            return {...state, counter: state.counter - action.payload}
        default:
            return state
    }
}


export default counterReducer;