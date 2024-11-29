import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { customCounterSet } from 'src/app/store/counter/counter.actions';
import { ICounter } from 'src/app/store/counter/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent implements OnInit {
  customCounter: number = 1;
  constructor(private readonly store: Store<{ counter: ICounter }>) {}

  onInputChange() {
    this.store.dispatch(customCounterSet({ value: this.customCounter }));
  }
  ngOnInit(): void {}
  onReset() {
    this.customCounter = 1;
    this.store.dispatch(customCounterSet({ value: this.customCounter }));
  }
}
