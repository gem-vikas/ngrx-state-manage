import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/modals/posts.model";

export const ADD_POST_ACTION = '[post page] add post';
export const addpost = createAction(ADD_POST_ACTION,props<{post:Post}>());