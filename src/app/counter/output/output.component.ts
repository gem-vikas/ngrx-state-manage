import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounterNumber } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit, OnDestroy {
  counter$?: Observable<number>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounterNumber);
    console.log('counter changed');
  }

  ngOnDestroy(): void {
 
  }
}
