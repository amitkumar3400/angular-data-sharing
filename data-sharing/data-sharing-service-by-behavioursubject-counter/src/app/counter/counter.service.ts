import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {}

  incrementCounter() {
    let current = this.counter$.value;
    current++;
    this.emitValue(current);
  }

  decrementCounter() {
    let current = this.counter$.value;
    current--;
    this.emitValue(current);
  }

  resetCounter() {
    this.emitValue(0);
  }

  emitValue(value: number) {
    this.counter$.next(value);
  }
}
