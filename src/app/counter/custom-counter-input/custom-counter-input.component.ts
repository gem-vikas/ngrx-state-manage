import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { channeNameChange, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  inputValue: any;
  channelName$?: Observable<string>;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);

  }

  customIncrement(): void {
    if(this.inputValue.length >= 0){
    this.store.dispatch(
      customIncrement({
        value: this.inputValue,
      })
    );
  }
  }

  channeNameChange(): void {
    console.log('channel name changed');
    
    this.store.dispatch(channeNameChange());
  }
}
