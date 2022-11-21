import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { parentState } from '../../parentState/parent.state';
import { Decrement, Increment, Reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store : Store<parentState>) { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.store.dispatch(Increment());
  }
  onDecrement(){
    this.store.dispatch(Decrement());
  }
  onReset(){
    this.store.dispatch(Reset());
  }

}
