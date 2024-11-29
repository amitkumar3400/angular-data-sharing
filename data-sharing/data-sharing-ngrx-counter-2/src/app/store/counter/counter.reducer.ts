import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { ICounter, initialStateCounter } from './counter.state';
import { decrement, increment, reset } from './counter.actions';

const _counterReducer: ActionReducer<ICounter> = createReducer(
  initialStateCounter,
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
  on(reset, (state) => {
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
