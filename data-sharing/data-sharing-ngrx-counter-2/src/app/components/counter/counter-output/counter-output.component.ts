import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICounter } from 'src/app/store/counter/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<ICounter> = new Observable();
  constructor(private readonly store: Store<{ counter: ICounter }>) {}
  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}
