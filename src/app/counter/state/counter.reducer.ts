import { state } from '@angular/animations';
import {  Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset,customIncrement,channeNameChange } from './counter.actions';
import { CounterState, intialState } from './counter.state';

const _counterReducer = createReducer(
  intialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state)=>{
    return {
        ...state,
        counter: 0
    }
  }), 
  on(customIncrement, (state,action)=>{
    let userNumber = +action.value;
    return {
        ...state,
        counter: state.counter + userNumber
    }
  }),
  on(channeNameChange,state=>{
    return {
      ...state,
        channelName:'Modified the Channel Name'
    }
  })
);

export function counterReducer(state: CounterState | undefined,action: Action) {
  return _counterReducer(state, action);
}
