import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
  @Output()
  incrementFromButton: EventEmitter<void> = new EventEmitter();

  @Output()
  decrementFromButton: EventEmitter<void> = new EventEmitter();

  @Output()
  resetFromButton: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onIncrement() {
    this.incrementFromButton.emit();
  }
  onDecrement() {
    this.decrementFromButton.emit();
  }

  onReset() {
    this.resetFromButton.emit();
  }
}
