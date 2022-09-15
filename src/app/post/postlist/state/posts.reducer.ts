import { Action, createReducer, on } from "@ngrx/store"
import { addpost } from "./posts.actions";

import{intialState, PostsState} from './posts.state';

const _postsReducer = createReducer(intialState,
    on(addpost,(state,action) => {
        let post = {...action.post};
        post.id = (state.posts.length + 1).toString()
        return {
            ...state,
            posts:[...state.posts,post]
        }
    })
    );
export function postsReducer(state:PostsState | undefined ,action: Action){
    return _postsReducer(state, action)
}