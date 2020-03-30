import { Action } from "redux";

export interface ICounterState{
    counter:number
}

export enum CounterActionType{
    ADD = "ADD",
    SUBTRACT = "SUBTRACT"
}

export interface AddAction extends Action{
    type: CounterActionType.ADD;
    payload: number
}

export interface SubtractAction extends Action{
    type: CounterActionType.SUBTRACT;
    payload: number;
}

export type CounterActions = AddAction | SubtractAction;