import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { customCounterSet } from 'src/app/store/counter/counter.actions';
import { getCustomCounter } from 'src/app/store/counter/counter.selector';
import { ICounter } from 'src/app/store/counter/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent implements OnInit {
  customCounter: number = 1;
  constructor(private readonly store: Store<{ counter: ICounter }>) {}

  onInputChange(value: HTMLInputElement) {
    this.store.dispatch(customCounterSet({ value: +value.value }));
  }
  ngOnInit(): void {
    this.store.select(getCustomCounter).subscribe((data) => {
      console.log('inside on init value is ', data);
      this.customCounter = data;
    });
  }
  onReset() {
    this.store.dispatch(customCounterSet({ value: 0 }));
  }
}
