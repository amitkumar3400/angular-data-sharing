import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounter } from '../store/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<ICounter> = new Observable();
  constructor(private store: Store<{ counter: ICounter }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}
