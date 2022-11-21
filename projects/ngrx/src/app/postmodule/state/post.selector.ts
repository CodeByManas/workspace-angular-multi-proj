import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postState } from "./post.state";

const getPostState = createFeatureSelector<postState>('post');

export const getPost = createSelector(getPostState, (state)=>{
    return state.posts;
})