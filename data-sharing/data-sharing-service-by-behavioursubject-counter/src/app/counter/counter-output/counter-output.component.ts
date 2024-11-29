import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0;
  constructor(private readonly counterService: CounterService) {}
  ngOnInit(): void {
    this.counterService.counter$.subscribe((value) => {
      this.counter = value;
    });
  }
}
