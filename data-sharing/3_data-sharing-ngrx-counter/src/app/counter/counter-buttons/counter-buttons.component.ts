import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounter } from '../store/counter.state';
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '../store/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<{ counter: ICounter }>) {}
  ngOnInit(): void {}

  onIncrement() {
    this.store.dispatch(incrementCounter());
  }
  onDecrement() {
    this.store.dispatch(decrementCounter());
  }
  onReset() {
    this.store.dispatch(resetCounter());
  }
}
