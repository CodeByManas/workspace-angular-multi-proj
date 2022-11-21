import { Post } from "../../models/post.model";

export interface postState{
    posts: Post[];
}


export const initialState :postState = {
    posts:[
        {id:'1', title:'hello world1', description:'lorem description 1'},
        {id:'2', title:'hello world2', description:'lorem description 2'},
        {id:'3', title:'hello world3', description:'lorem description 3'},
        {id:'4', title:'hello world4', description:'lorem description 4'}
    ]
}