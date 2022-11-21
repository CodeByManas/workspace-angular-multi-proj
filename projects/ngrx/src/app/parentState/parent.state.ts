import { counterReducer } from "../components/state/counter.reducer";
import { counterState } from "../components/state/counter.state";
import { postReducer } from "../postmodule/state/post.reducer";
import { postState } from "../postmodule/state/post.state";

export interface parentState{
    counter :counterState,
    post: postState
}



export const parentReducer = {
    counter :  counterReducer,
    post : postReducer
}