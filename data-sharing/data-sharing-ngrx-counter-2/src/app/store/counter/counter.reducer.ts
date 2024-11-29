import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { ICounter, initialStateCounter } from './counter.state';
import {
  customCounterSet,
  decrement,
  increment,
  reset,
} from './counter.actions';

const _counterReducer: ActionReducer<ICounter> = createReducer(
  initialStateCounter,
  on(increment, (state) => {
    return {
      ...state,
      counter:
        state.counter + (state.customCounter !== 0 ? state.customCounter : 1),
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter:
        state.counter - (state.customCounter !== 0 ? state.customCounter : 1),
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customCounterSet, (state, action) => {
    return {
      ...state,
      customCounter: action.value,
    };
  })
);

export const counterReducer: ActionReducer<ICounter> = (
  state: ICounter | undefined,
  action: Action
) => {
  return _counterReducer(state, action);
};
