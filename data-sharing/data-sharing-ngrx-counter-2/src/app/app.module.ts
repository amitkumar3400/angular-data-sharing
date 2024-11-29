import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { CounterButtonsComponent } from './components/counter/counter-buttons/counter-buttons.component';
import { CounterComponent } from './components/counter/counter/counter.component';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';

@NgModule({
  declarations: [AppComponent, CounterButtonsComponent, CounterComponent, CounterOutputComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
