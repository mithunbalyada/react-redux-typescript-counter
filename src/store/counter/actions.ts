import { CounterActionType, CounterActions } from "./types"


export const addToCounter = (num: number): CounterActions =>{
   return({
       type:CounterActionType.ADD,
       payload: num
   })
}

export const subtractFromCounter = (num: number): CounterActions =>{
    return({
        type:CounterActionType.SUBTRACT,
        payload: num
    })
 }