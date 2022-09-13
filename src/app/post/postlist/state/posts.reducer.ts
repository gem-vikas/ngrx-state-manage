import { Action, createReducer } from "@ngrx/store"

import{intialState, PostsState} from './posts.state';

const _postsReducer = createReducer(intialState);
export function postsReducer(state:PostsState | undefined ,action: Action){
    return _postsReducer(state, action)
}