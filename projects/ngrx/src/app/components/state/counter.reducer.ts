
import { createReducer, on } from "@ngrx/store";
import { changeTitle, customIncrement, Decrement, Increment, Reset } from "./counter.action";
import { initialState } from "./counter.state";

const _counterReducer= createReducer(
    initialState,
    on(Increment, (state)=>{
        return {
            ...state,
            counter : state.counter + 1,
        }
    }),
    on(Decrement, (state)=>{
        return{
            ...state,
            counter : state.counter - 1,
        }
    }),
    on(Reset, (state)=>{
        return{
            ...state,
            counter:0,
        }
    }),
    on(customIncrement,(state, action)=>{
        console.log(action);
        console.log(state)
        return{
            ...state,
            counter:state.counter + action.value,
        }
    }),
    on(changeTitle, state=>{
        return{
            ...state,
            title:'Text changed to Bye bye world',
        }
    })
);

export function counterReducer(state:any, action:any){
    return _counterReducer(state, action);
}