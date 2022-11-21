import { createAction, props } from "@ngrx/store";

export const Increment = createAction('Increment');
export const Decrement = createAction('Decrement');
export const Reset = createAction('Reset');

export const customIncrement = createAction(
    'customIncrement',
    props<{value:number}>()
    );

export const changeTitle = createAction('changeTitle');