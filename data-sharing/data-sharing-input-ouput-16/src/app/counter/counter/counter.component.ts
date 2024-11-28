import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counterParent: number = 0;
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onIncrementParent() {
    this.counterParent++;
  }
  onDecrementParent() {
    this.counterParent--;
  }

  onResetParent() {
    this.counterParent = 0;
  }
}
