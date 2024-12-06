import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICounter } from './counter.state';

const getCounterState = createFeatureSelector<ICounter>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getCustomCounter = createSelector(getCounterState, (state) => {
  return state.customCounter;
});

export const getLoading = createSelector(getCounterState, (state) => {
  return state.loading;
});
