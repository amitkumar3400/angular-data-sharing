import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private readonly counterService: CounterService) {}

  ngOnInit(): void {}

  onIncrementClicked() {
    this.counterService.incrementCounter();
  }

  onDecrementClicked() {
    this.counterService.decrementCounter();
  }

  onResetClicked() {
    this.counterService.resetCounter();
  }
}
