import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { customCounterSet } from 'src/app/store/counter/counter.actions';
import { getCustomCounter } from 'src/app/store/counter/counter.selector';
import { ICounter } from 'src/app/store/counter/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent implements AfterViewInit {
  constructor(private readonly store: Store<{ counter: ICounter }>) {}
  @ViewChild('customCounterinput', { static: false })
  myInput!: ElementRef;
  onInputChange(value: HTMLInputElement) {
    this.store.dispatch(customCounterSet({ value: +value.value }));
  }
  onReset(customCounterinput: HTMLInputElement) {
    customCounterinput.value = '1';
    this.store.dispatch(customCounterSet({ value: 1 }));
  }

  ngAfterViewInit(): void {
    this.store.select(getCustomCounter).subscribe((data) => {
      this.myInput.nativeElement.value = data;
    });
  }
}
