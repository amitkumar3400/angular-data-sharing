import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { counterState, ICounter } from './counter.state';
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from './counter.actions';

const _counterReducer: ActionReducer<ICounter> = createReducer(
  (counterState ),
  on(incrementCounter, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrementCounter, (state) => {
    // remember ++ and -- will not work , you can not modify the state here
    // so you need to do + 1 and -1 while assigning the value
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(resetCounter, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

export const counterReducer: ActionReducer<ICounter> = (
  state: ICounter | undefined,
  action: Action
) => {
  return _counterReducer(state, action);
};
