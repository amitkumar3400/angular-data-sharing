import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');

export const decrement = createAction('decrement');

export const reset = createAction('reset');

export const customCounterSet = createAction(
  'customCounterSet',
  props<{ value: number }>()
);
export const customCounterReset = createAction('customCounterReset');
